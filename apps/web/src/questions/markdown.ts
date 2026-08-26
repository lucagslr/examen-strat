/* =========================================================================
   MODULE QUESTIONS — analyseur Markdown
   ---------------------------------------------------------------------------
   Pourquoi un analyseur maison plutôt qu'une librairie :
     1. Sécurité. Le rendu produit des éléments React, jamais une chaîne HTML.
        Aucun `dangerouslySetInnerHTML`, donc aucune surface d'injection.
     2. Fidélité. Les fiches ont une structure pédagogique régulière (réponse
        en une phrase, « Partie N », marqueurs 📘/🔎/📚/⚠️, renvois `[[…]]`).
        Un arbre typé permet de la reconnaître, pas seulement de la transcrire.
     3. Poids. Le projet n'a aucune dépendance d'exécution hors React ; ce
        module n'en ajoute aucune.

   Le sous-ensemble pris en charge correspond exactement à ce que les 57
   fichiers utilisent : titres, paragraphes, listes, citations, callouts
   `> [!type]`, tableaux GFM, blocs de code, blocs Mermaid, séparateurs,
   gras, italique, code en ligne, liens et renvois `[[…]]`.
   ========================================================================= */

/** Marqueur pédagogique en tête de paragraphe, tel qu'utilisé par le corpus. */
export type Marqueur = 'cours' | 'raisonnement' | 'complement' | 'attention'

export type Inline =
  | { t: 'texte'; v: string }
  | { t: 'gras'; enfants: Inline[] }
  | { t: 'italique'; enfants: Inline[] }
  | { t: 'code'; v: string }
  | { t: 'lien'; href: string; enfants: Inline[] }
  /** Renvoi `[[Fiche]]` : `cible` vaut null quand la fiche n'existe pas. */
  | { t: 'renvoi'; cible: string | null; libelle: string }

export type TonCallout = 'danger' | 'warning' | 'note' | 'tip' | 'info'

export type Bloc =
  | { t: 'titre'; niveau: 1 | 2 | 3 | 4; contenu: Inline[]; texte: string; ancre: string }
  | { t: 'paragraphe'; contenu: Inline[]; marqueur: Marqueur | null }
  | { t: 'liste'; ordonnee: boolean; items: Inline[][] }
  | { t: 'citation'; blocs: Bloc[] }
  | { t: 'callout'; ton: TonCallout; titre: string | null; blocs: Bloc[] }
  | { t: 'tableau'; entetes: Inline[][]; lignes: Inline[][][]; enTeteVide: boolean }
  | { t: 'code'; langue: string; contenu: string }
  | { t: 'mermaid'; source: string }
  | { t: 'separateur' }

/* ------------------------------------------------------------------ Outils */

const DIACRITIQUES = /[̀-ͯ]/g

/** Enlève les accents et la casse : sert aux ancres et à la recherche. */
export function normaliser(s: string): string {
  return s.normalize('NFD').replace(DIACRITIQUES, '').toLowerCase()
}

export function slugifier(s: string): string {
  return normaliser(s)
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Texte brut d'une suite d'éléments en ligne (titres, sommaire, recherche). */
export function texteBrut(contenu: Inline[]): string {
  return contenu
    .map((i) => {
      switch (i.t) {
        case 'texte':
          return i.v
        case 'code':
          return i.v
        case 'renvoi':
          return i.libelle
        default:
          return texteBrut(i.enfants)
      }
    })
    .join('')
}

/* --------------------------------------------------- Analyse « en ligne »  */

/**
 * Un seul passage, en cherchant le prochain délimiteur ouvrant.
 * L'ordre compte : le code en ligne passe en premier, puisqu'il neutralise
 * tout ce qu'il contient.
 */
const DELIMITEURS =
  /(`[^`\n]+`)|(\[\[[^\]\n]+\]\])|(\[[^\]\n]+\]\([^)\s]+\))|(\*\*[^*\n]+\*\*)|(__[^_\n]+__)|(\*[^*\n]+\*)/

export interface OptionsInline {
  /** Résout un renvoi `[[Cible]]` en slug de route, ou null si introuvable. */
  resoudreRenvoi?: (cible: string) => { slug: string; libelle: string } | null
}

export function analyserInline(source: string, options: OptionsInline = {}): Inline[] {
  const sortie: Inline[] = []
  let reste = source

  const pousserTexte = (v: string) => {
    if (!v) return
    const dernier = sortie[sortie.length - 1]
    if (dernier && dernier.t === 'texte') dernier.v += v
    else sortie.push({ t: 'texte', v })
  }

  while (reste.length > 0) {
    const m = DELIMITEURS.exec(reste)
    if (!m) {
      pousserTexte(reste)
      break
    }

    pousserTexte(reste.slice(0, m.index))
    const jeton = m[0]
    reste = reste.slice(m.index + jeton.length)

    if (jeton.startsWith('`')) {
      sortie.push({ t: 'code', v: jeton.slice(1, -1) })
    } else if (jeton.startsWith('[[')) {
      // Deux formes coexistent dans le corpus : `[[cible]]` et
      // `[[cible|libellé affiché]]`. Le libellé explicite gagne, sinon on
      // affiche le titre de la fiche visée.
      const interieur = jeton.slice(2, -2)
      const coupe = interieur.indexOf('|')
      const cible = (coupe < 0 ? interieur : interieur.slice(0, coupe)).trim()
      const alias = coupe < 0 ? '' : interieur.slice(coupe + 1).trim()
      const resolu = options.resoudreRenvoi?.(cible) ?? null
      sortie.push(
        resolu
          ? { t: 'renvoi', cible: resolu.slug, libelle: alias || resolu.libelle }
          : { t: 'renvoi', cible: null, libelle: alias || libelleDeSecours(cible) },
      )
    } else if (jeton.startsWith('[')) {
      const coupe = jeton.indexOf('](')
      sortie.push({
        t: 'lien',
        href: jeton.slice(coupe + 2, -1),
        enfants: analyserInline(jeton.slice(1, coupe), options),
      })
    } else if (jeton.startsWith('**') || jeton.startsWith('__')) {
      sortie.push({ t: 'gras', enfants: analyserInline(jeton.slice(2, -2), options) })
    } else {
      sortie.push({ t: 'italique', enfants: analyserInline(jeton.slice(1, -1), options) })
    }
  }

  return sortie
}

/** `Q50_Lexclusion_indirecte` → `Q50 · Lexclusion indirecte`, sans rien inventer. */
function libelleDeSecours(cible: string): string {
  const sansExtension = cible.replace(/\.md$/i, '')
  const m = sansExtension.match(/^(Q\d+)[_-](.*)$/i)
  if (!m) return sansExtension.replace(/_/g, ' ')
  return `${(m[1] as string).toUpperCase()} · ${(m[2] as string).replace(/_/g, ' ')}`
}

/* ------------------------------------------------------- Marqueurs de cours */

const MARQUEURS: { signe: string; marqueur: Marqueur }[] = [
  { signe: '📘', marqueur: 'cours' },
  { signe: '🔎', marqueur: 'raisonnement' },
  { signe: '📚', marqueur: 'complement' },
  { signe: '⚠️', marqueur: 'attention' },
  { signe: '⚠', marqueur: 'attention' },
  { signe: '🔴', marqueur: 'attention' },
]

/** Repère le marqueur en tête de ligne. Le signe est conservé dans le texte. */
function detecterMarqueur(ligne: string): Marqueur | null {
  const debut = ligne.replace(/^\*\*/, '').trimStart()
  for (const { signe, marqueur } of MARQUEURS) if (debut.startsWith(signe)) return marqueur
  return null
}

/* -------------------------------------------------------- Analyse des blocs */

const CALLOUTS: Record<string, TonCallout> = {
  danger: 'danger',
  warning: 'warning',
  caution: 'warning',
  note: 'note',
  tip: 'tip',
  info: 'info',
  important: 'info',
}

export interface OptionsAnalyse extends OptionsInline {
  /** Préfixe des ancres, pour que deux fiches ouvertes ne se marchent pas dessus. */
  prefixeAncre?: string
}

export function analyserMarkdown(source: string, options: OptionsAnalyse = {}): Bloc[] {
  const lignes = source.replace(/\r\n?/g, '\n').split('\n')
  return analyserLignes(lignes, options, new Set<string>())
}

function analyserLignes(lignes: string[], options: OptionsAnalyse, ancres: Set<string>): Bloc[] {
  const blocs: Bloc[] = []
  let i = 0

  const ancreUnique = (texte: string) => {
    const base = `${options.prefixeAncre ?? 'sec'}-${slugifier(texte) || 'section'}`
    let candidat = base
    let n = 2
    while (ancres.has(candidat)) candidat = `${base}-${n++}`
    ancres.add(candidat)
    return candidat
  }

  while (i < lignes.length) {
    const ligne = lignes[i] as string
    const nue = ligne.trim()

    /* Ligne vide -------------------------------------------------------- */
    if (nue === '') {
      i++
      continue
    }

    /* Séparateur -------------------------------------------------------- */
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(nue)) {
      blocs.push({ t: 'separateur' })
      i++
      continue
    }

    /* Bloc de code ou diagramme ----------------------------------------- */
    if (nue.startsWith('```')) {
      const langue = nue.slice(3).trim().toLowerCase()
      const contenu: string[] = []
      i++
      while (i < lignes.length && !(lignes[i] as string).trim().startsWith('```')) {
        contenu.push(lignes[i] as string)
        i++
      }
      i++ // ligne de fermeture
      const texte = contenu.join('\n')
      blocs.push(langue === 'mermaid' ? { t: 'mermaid', source: texte } : { t: 'code', langue, contenu: texte })
      continue
    }

    /* Titre -------------------------------------------------------------- */
    const mTitre = nue.match(/^(#{1,4})\s+(.*)$/)
    if (mTitre) {
      const niveau = (mTitre[1] as string).length as 1 | 2 | 3 | 4
      const contenu = analyserInline((mTitre[2] as string).trim(), options)
      const texte = texteBrut(contenu)
      blocs.push({ t: 'titre', niveau, contenu, texte, ancre: ancreUnique(texte) })
      i++
      continue
    }

    /* Citation, callout -------------------------------------------------- */
    if (nue.startsWith('>')) {
      const interieur: string[] = []
      while (i < lignes.length && (lignes[i] as string).trim().startsWith('>')) {
        interieur.push((lignes[i] as string).replace(/^\s*>\s?/, ''))
        i++
      }
      const premiere = (interieur[0] ?? '').trim()
      const mc = premiere.match(/^\[!([a-zA-Z]+)\]\s*(.*)$/)
      if (mc) {
        const ton = CALLOUTS[(mc[1] as string).toLowerCase()] ?? 'info'
        const titre = (mc[2] as string).trim() || null
        blocs.push({ t: 'callout', ton, titre, blocs: analyserLignes(interieur.slice(1), options, ancres) })
      } else {
        blocs.push({ t: 'citation', blocs: analyserLignes(interieur, options, ancres) })
      }
      continue
    }

    /* Tableau ------------------------------------------------------------ */
    if (nue.startsWith('|') && estSeparateurTableau((lignes[i + 1] ?? '').trim())) {
      const entetes = cellules(nue).map((c) => analyserInline(c, options))
      i += 2
      const lignesTableau: Inline[][][] = []
      while (i < lignes.length && (lignes[i] as string).trim().startsWith('|')) {
        lignesTableau.push(cellules((lignes[i] as string).trim()).map((c) => analyserInline(c, options)))
        i++
      }
      blocs.push({
        t: 'tableau',
        entetes,
        lignes: lignesTableau,
        // Les tableaux de synthèse du corpus ont un en-tête vide : la première
        // colonne y sert d'intitulé de ligne.
        enTeteVide: entetes.every((c) => texteBrut(c).trim() === ''),
      })
      continue
    }

    /* Liste --------------------------------------------------------------- */
    const mListe = nue.match(/^([-*+]|\d+\.)\s+(.*)$/)
    if (mListe) {
      const ordonnee = /\d/.test(mListe[1] as string)
      const items: Inline[][] = []
      while (i < lignes.length) {
        const m = (lignes[i] as string).trim().match(/^([-*+]|\d+\.)\s+(.*)$/)
        if (!m) break
        if (/\d/.test(m[1] as string) !== ordonnee) break
        let texte = m[2] as string
        i++
        // Lignes de continuation : elles appartiennent à l'item précédent.
        while (i < lignes.length) {
          const suite = (lignes[i] as string).trim()
          if (suite === '' || /^([-*+]|\d+\.)\s+/.test(suite) || /^[#>|`]/.test(suite)) break
          if (/^(-{3,}|\*{3,}|_{3,})$/.test(suite)) break
          texte += ` ${suite}`
          i++
        }
        items.push(analyserInline(texte, options))
      }
      blocs.push({ t: 'liste', ordonnee, items })
      continue
    }

    /* Paragraphe ---------------------------------------------------------- */
    const morceaux: string[] = [nue]
    const marqueur = detecterMarqueur(nue)
    i++
    while (i < lignes.length) {
      const suite = (lignes[i] as string).trim()
      if (suite === '') break
      if (/^(#{1,4}\s|>|\||```)/.test(suite)) break
      if (/^(-{3,}|\*{3,}|_{3,})$/.test(suite)) break
      if (/^([-*+]|\d+\.)\s+/.test(suite)) break
      morceaux.push(suite)
      i++
    }
    blocs.push({ t: 'paragraphe', contenu: analyserInline(morceaux.join(' '), options), marqueur })
  }

  return blocs
}

function estSeparateurTableau(ligne: string): boolean {
  return /^\|(\s*:?-{2,}:?\s*\|)+$/.test(ligne)
}

function cellules(ligne: string): string[] {
  return ligne
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    // Une barre échappée `\|` appartient à la cellule : c'est ainsi que le
    // corpus écrit un renvoi `[[cible\|libellé]]` à l'intérieur d'un tableau.
    .split(/(?<!\\)\|/)
    .map((c) => c.trim().replace(/\\\|/g, '|'))
}
