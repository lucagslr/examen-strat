/* =========================================================================
   MODULE QUESTIONS — structure pédagogique d'une fiche
   ---------------------------------------------------------------------------
   Les fiches suivent toutes la même architecture : une réponse en une phrase,
   des « Partie N », des pièges, un tableau de synthèse. Ce module reconnaît
   cette architecture pour permettre trois niveaux de lecture (répondre vite,
   comprendre, maîtriser).

   Aucun bloc n'est supprimé : tout ce qui n'est pas reconnu est simplement
   rendu dans la section courante.
   ========================================================================= */

import type { Bloc, Inline } from './markdown'
import { texteBrut } from './markdown'

export type VarianteSection = 'normale' | 'pieges' | 'retenir'

export interface SectionFiche {
  ancre: string
  /** « Partie 3 » quand le titre en porte un, sinon `null`. */
  intitule: string | null
  titre: string
  variante: VarianteSection
  blocs: Bloc[]
}

export interface Fiche {
  /** Contenu de l'encadré « La réponse en une phrase », s'il existe. */
  reponseCle: Bloc[] | null
  /** Avertissements de provenance placés en tête de fiche (écarts, hors-cours). */
  avertissements: Bloc[]
  /** Blocs situés avant la première « Partie », rares mais conservés. */
  introduction: Bloc[]
  sections: SectionFiche[]
}

const REPONSE_CLE = /^la\s+r[ée]ponse\s+en\s+une\s+phrase/i

function estReponseCle(bloc: Bloc): boolean {
  if (bloc.t !== 'citation') return false
  const premier = bloc.blocs[0]
  if (!premier || premier.t !== 'paragraphe') return false
  return REPONSE_CLE.test(texteBrut(premier.contenu).trim())
}

/**
 * Retire la ligne de titre « La réponse en une phrase » : elle devient
 * l'intitulé de l'encadré, elle n'a pas à être répétée dans son contenu.
 */
function corpsReponseCle(bloc: Extract<Bloc, { t: 'citation' }>): Bloc[] {
  const [premier, ...suite] = bloc.blocs
  if (!premier || premier.t !== 'paragraphe') return bloc.blocs

  const texte = texteBrut(premier.contenu).trim()
  const restant = texte.replace(REPONSE_CLE, '').trim()
  // Le libellé et la réponse partagent parfois le même paragraphe.
  if (restant.length === 0) return suite

  const gras = premier.contenu[0]
  if (gras && gras.t === 'gras' && REPONSE_CLE.test(texteBrut(gras.enfants).trim())) {
    return [{ ...premier, contenu: premier.contenu.slice(1) }, ...suite]
  }
  return bloc.blocs
}

function varianteDe(titre: string): VarianteSection {
  const t = titre.trim().toLowerCase()
  if (t.startsWith('les pièges') || t.startsWith('les pieges')) return 'pieges'
  if (t.startsWith('à retenir') || t.startsWith('a retenir')) return 'retenir'
  return 'normale'
}

/** `Partie 3 — Les leviers` → intitulé « Partie 3 », titre « Les leviers ». */
function decouperTitre(texte: string): { intitule: string | null; titre: string } {
  const m = texte.match(/^(Partie\s+\d+|Étape\s+\d+|Etape\s+\d+)\s*[—–-]\s*(.+)$/i)
  if (m) return { intitule: (m[1] as string).trim(), titre: (m[2] as string).trim() }
  return { intitule: null, titre: texte.trim() }
}

export function structurerFiche(blocs: Bloc[]): Fiche {
  const avertissements: Bloc[] = []
  const introduction: Bloc[] = []
  const sections: SectionFiche[] = []
  let reponseCle: Bloc[] | null = null
  let courante: SectionFiche | null = null

  for (const bloc of blocs) {
    // Le H1 est déjà l'en-tête de la page : on ne l'affiche pas deux fois.
    if (bloc.t === 'titre' && bloc.niveau === 1) continue

    // Les filets `---` du Markdown séparent les parties ; la mise en page des
    // sections joue déjà ce rôle, les répéter alourdirait la lecture.
    if (bloc.t === 'separateur' && courante === null) continue

    if (bloc.t === 'titre' && bloc.niveau === 2) {
      const { intitule, titre } = decouperTitre(bloc.texte)
      courante = { ancre: bloc.ancre, intitule, titre, variante: varianteDe(bloc.texte), blocs: [] }
      sections.push(courante)
      continue
    }

    if (courante) {
      courante.blocs.push(bloc)
      continue
    }

    // Avant la première section : réponse clé, avertissements, introduction.
    if (reponseCle === null && estReponseCle(bloc)) {
      reponseCle = corpsReponseCle(bloc as Extract<Bloc, { t: 'citation' }>)
      continue
    }
    if (bloc.t === 'callout') {
      avertissements.push(bloc)
      continue
    }
    introduction.push(bloc)
  }

  return { reponseCle, avertissements, introduction, sections }
}

export interface EntreeSommaire {
  ancre: string
  intitule: string | null
  titre: string
}

export function sommaireDe(fiche: Fiche): EntreeSommaire[] {
  return fiche.sections.map((s) => ({ ancre: s.ancre, intitule: s.intitule, titre: s.titre }))
}

/**
 * Slugs des fiches citées par un contenu, dans l'ordre d'apparition.
 * Alimente la section « Voir aussi » sans dupliquer le travail de résolution
 * déjà fait à l'analyse.
 */
export function renvoisDe(blocs: Bloc[]): string[] {
  const cibles: string[] = []

  const parcourirInline = (contenu: Inline[]): void => {
    for (const n of contenu) {
      if (n.t === 'renvoi') {
        if (n.cible) cibles.push(n.cible)
      } else if (n.t === 'gras' || n.t === 'italique' || n.t === 'lien') {
        parcourirInline(n.enfants)
      }
    }
  }

  const parcourir = (liste: Bloc[]): void => {
    for (const b of liste) {
      switch (b.t) {
        case 'titre':
        case 'paragraphe':
          parcourirInline(b.contenu)
          break
        case 'liste':
          for (const item of b.items) parcourirInline(item)
          break
        case 'citation':
        case 'callout':
          parcourir(b.blocs)
          break
        case 'tableau':
          for (const cellule of b.entetes) parcourirInline(cellule)
          for (const ligne of b.lignes) for (const cellule of ligne) parcourirInline(cellule)
          break
        default:
          break
      }
    }
  }

  parcourir(blocs)
  return cibles
}
