import { notions, type Notion, type Priorite, type TypeNotion } from '@strat/content'

/**
 * RECHERCHE.
 * Index construit une seule fois en mémoire au chargement du module.
 * Tolère les accents, la casse et les petites fautes de frappe.
 */

/** Retire les accents et normalise la casse et les apostrophes. */
export function normaliser(texte: string): string {
  return texte
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[’']/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

export function motsDe(texte: string): string[] {
  const n = normaliser(texte)
  return n ? n.split(' ') : []
}

/** Distance de Levenshtein bornée : renvoie `max + 1` dès que le seuil est dépassé. */
export function distance(a: string, b: string, max = 2): number {
  if (a === b) return 0
  if (Math.abs(a.length - b.length) > max) return max + 1

  let precedent = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    const courant = [i]
    let minLigne = i
    for (let j = 1; j <= b.length; j++) {
      const cout = a[i - 1] === b[j - 1] ? 0 : 1
      const valeur = Math.min(
        (precedent[j] ?? Infinity) + 1,
        (courant[j - 1] ?? Infinity) + 1,
        (precedent[j - 1] ?? Infinity) + cout,
      )
      courant[j] = valeur
      if (valeur < minLigne) minLigne = valeur
    }
    if (minLigne > max) return max + 1
    precedent = courant
  }
  return precedent[b.length] ?? max + 1
}

interface EntreeIndex {
  notion: Notion
  /** Champs pondérés, du plus au moins discriminant. */
  nom: string
  acronyme: string
  aliases: string[]
  motsCles: string[]
  auteur: string
  corps: string
}

const index: EntreeIndex[] = notions.map((n) => ({
  notion: n,
  nom: normaliser(n.nom),
  acronyme: normaliser(n.acronyme ?? ''),
  aliases: (n.aliases ?? []).map(normaliser),
  motsCles: (n.motsCles ?? []).map(normaliser),
  auteur: normaliser(`${n.auteur ?? ''} ${n.origine ?? ''}`),
  corps: normaliser(
    [
      n.definitionCours,
      n.explicationSimple,
      n.pourquoiExiste ?? '',
      n.objectif ?? '',
      n.phraseExamen ?? '',
      ...(n.exemples ?? []).map((e) => e.texte),
      ...(n.pieges ?? []).map((p) => `${p.erreur} ${p.pourquoi}`),
      ...(n.variantes ?? []).flatMap((v) => [v.sujet, v.explication, ...v.formulations.map((f) => f.libelle)]),
    ].join(' '),
  ),
}))

export interface ResultatRecherche {
  notion: Notion
  score: number
  /** Où la correspondance a été trouvée, pour l'afficher à l'utilisateur. */
  champ: 'nom' | 'acronyme' | 'alias' | 'mot-clé' | 'auteur' | 'contenu'
  approximatif: boolean
}

export interface FiltresRecherche {
  categories?: string[]
  priorites?: Priorite[]
  types?: TypeNotion[]
  /** Filtre d'état, calculé à partir de la progression. */
  etats?: ('jamais-vue' | 'en-cours' | 'maitrisee')[]
  /** Fonction fournie par l'appelant qui donne le niveau de maîtrise d'une notion. */
  niveauDe?: (id: string) => number
}

/** Score d'un terme unique contre une entrée d'index. */
function scorerTerme(e: EntreeIndex, terme: string): { score: number; champ: ResultatRecherche['champ']; approx: boolean } | null {
  if (e.acronyme && (e.acronyme === terme || e.acronyme.startsWith(terme)))
    return { score: 120, champ: 'acronyme', approx: false }

  if (e.nom === terme) return { score: 100, champ: 'nom', approx: false }
  if (e.nom.startsWith(terme)) return { score: 85, champ: 'nom', approx: false }
  if (e.nom.includes(terme)) return { score: 70, champ: 'nom', approx: false }

  for (const a of e.aliases) {
    if (a === terme) return { score: 90, champ: 'alias', approx: false }
    if (a.includes(terme)) return { score: 60, champ: 'alias', approx: false }
  }

  for (const m of e.motsCles) if (m.includes(terme)) return { score: 45, champ: 'mot-clé', approx: false }

  if (e.auteur.includes(terme)) return { score: 40, champ: 'auteur', approx: false }

  if (e.corps.includes(terme)) return { score: 25, champ: 'contenu', approx: false }

  // Tolérance orthographique : seulement sur des termes assez longs, et
  // seulement contre le nom et les alias — jamais contre le corps du texte,
  // qui produirait trop de faux positifs.
  if (terme.length >= 4) {
    const cibles = [e.nom, ...e.aliases]
    for (const cible of cibles) {
      for (const mot of cible.split(' ')) {
        if (mot.length < 4) continue
        const seuil = terme.length >= 7 ? 2 : 1
        if (distance(terme, mot, seuil) <= seuil) return { score: 35, champ: 'nom', approx: true }
      }
    }
  }

  return null
}

export function rechercher(requete: string, filtres: FiltresRecherche = {}, limite = 50): ResultatRecherche[] {
  const termes = motsDe(requete)
  const resultats: ResultatRecherche[] = []

  for (const e of index) {
    if (!passeFiltres(e.notion, filtres)) continue

    if (termes.length === 0) {
      resultats.push({ notion: e.notion, score: 0, champ: 'nom', approximatif: false })
      continue
    }

    let total = 0
    let meilleurChamp: ResultatRecherche['champ'] = 'contenu'
    let meilleurScore = -1
    let approximatif = false
    let tousTrouves = true

    for (const terme of termes) {
      const r = scorerTerme(e, terme)
      if (!r) {
        tousTrouves = false
        break
      }
      total += r.score
      if (r.approx) approximatif = true
      if (r.score > meilleurScore) {
        meilleurScore = r.score
        meilleurChamp = r.champ
      }
    }

    if (!tousTrouves) continue

    // Les notions prioritaires remontent à score égal.
    total += (4 - e.notion.priorite) * 3
    resultats.push({ notion: e.notion, score: total, champ: meilleurChamp, approximatif })
  }

  resultats.sort((a, b) => b.score - a.score || a.notion.nom.localeCompare(b.notion.nom, 'fr'))
  return resultats.slice(0, limite)
}

export function passeFiltres(n: Notion, f: FiltresRecherche): boolean {
  if (f.categories?.length && !f.categories.includes(n.categorie)) return false
  if (f.priorites?.length && !f.priorites.includes(n.priorite)) return false
  if (f.types?.length && !f.types.includes(n.type)) return false
  if (f.etats?.length) {
    const niveau = f.niveauDe?.(n.id) ?? 0
    const etat = niveau === 0 ? 'jamais-vue' : niveau >= 4 ? 'maitrisee' : 'en-cours'
    if (!f.etats.includes(etat)) return false
  }
  return true
}

/** Index alphabétique A-Z, en tenant compte des accents pour le tri français. */
export function indexAlphabetique(liste: Notion[] = notions): { lettre: string; notions: Notion[] }[] {
  const groupes = new Map<string, Notion[]>()
  for (const n of liste) {
    const premiere = normaliser(n.nom).charAt(0).toUpperCase() || '#'
    const lettre = /[A-Z]/.test(premiere) ? premiere : '#'
    const g = groupes.get(lettre)
    if (g) g.push(n)
    else groupes.set(lettre, [n])
  }
  return [...groupes.entries()]
    .map(([lettre, ns]) => ({ lettre, notions: ns.sort((a, b) => a.nom.localeCompare(b.nom, 'fr')) }))
    .sort((a, b) => a.lettre.localeCompare(b.lettre, 'fr'))
}
