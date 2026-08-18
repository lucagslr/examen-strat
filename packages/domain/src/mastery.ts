import type { NiveauMaitrise } from '@strat/config'
import { NIVEAUX_MAITRISE } from '@strat/config'
import { categories, flashcards, notions, type Notion, type NotionId } from '@strat/content'
import type { EtatNotion, Progression } from './types'

/**
 * CALCUL DU NIVEAU DE MAÎTRISE (0 à 5).
 *
 * Le cours distingue explicitement « notion consultée » et « notion maîtrisée ».
 * Le niveau se construit par paliers : chacun exige que le précédent soit atteint.
 *
 *   0 Jamais vue · 1 Découverte · 2 Comprise · 3 Mémorisée · 4 Appliquée · 5 Maîtrisée
 */

export const SEUIL_QUIZ = 0.7
export const SEUIL_MAITRISE_QUIZ = 0.85

export interface DetailMaitrise {
  niveau: NiveauMaitrise
  libelle: string
  /** Détail affiché sur la fiche notion. */
  criteres: { libelle: string; atteint: boolean; valeur?: string }[]
  /** Ce qu'il reste à faire pour monter d'un niveau. */
  prochaineEtape: string | null
}

const etatVide: EtatNotion = {
  vue: false,
  comprise: false,
  quizReussis: 0,
  quizTentes: 0,
  applique: false,
  questionsTraitees: 0,
  dernierContact: 0,
}

export function etatNotion(p: Progression, id: NotionId): EtatNotion {
  return p.notions[id] ?? etatVide
}

/** Cartes rattachées à une notion (la notion peut être propriétaire ou simplement citée). */
export function flashcardsDeNotion(id: NotionId) {
  return flashcards.filter((f) => f.notions.includes(id))
}

/** Part des flashcards de la notion dont le niveau est ≥ 3. */
export function tauxFlashcards(p: Progression, id: NotionId): { memorisees: number; total: number; taux: number } {
  const cartes = flashcardsDeNotion(id)
  if (cartes.length === 0) return { memorisees: 0, total: 0, taux: 0 }
  const memorisees = cartes.filter((c) => (p.flashcards[c.id]?.niveau ?? 0) >= 3).length
  return { memorisees, total: cartes.length, taux: memorisees / cartes.length }
}

export function tauxQuiz(e: EtatNotion): number {
  return e.quizTentes === 0 ? 0 : e.quizReussis / e.quizTentes
}

export function detailMaitrise(p: Progression, id: NotionId): DetailMaitrise {
  const e = etatNotion(p, id)
  const fc = tauxFlashcards(p, id)
  const quiz = tauxQuiz(e)

  const aVu = e.vue
  const aCompris = e.comprise
  // « Mémorisée » suppose des cartes réellement rejouées, pas seulement vues.
  const aMemorise = fc.total > 0 ? fc.taux >= 0.6 : aCompris && quiz >= SEUIL_QUIZ
  const aApplique = e.applique || (e.quizTentes >= 3 && quiz >= SEUIL_QUIZ)
  const aMaitrise = e.questionsTraitees >= 1 && (e.quizTentes === 0 || quiz >= SEUIL_MAITRISE_QUIZ)

  let niveau: NiveauMaitrise = 0
  if (aVu) niveau = 1
  if (niveau === 1 && aCompris) niveau = 2
  if (niveau === 2 && aMemorise) niveau = 3
  if (niveau === 3 && aApplique) niveau = 4
  if (niveau === 4 && aMaitrise) niveau = 5

  const criteres = [
    { libelle: 'Fiche consultée', atteint: aVu },
    { libelle: 'Section « Comprendre » validée', atteint: aCompris },
    {
      libelle: 'Flashcards mémorisées',
      atteint: aMemorise,
      valeur: fc.total ? `${fc.memorisees}/${fc.total}` : '—',
    },
    {
      libelle: 'Quiz réussis',
      atteint: e.quizTentes >= 3 && quiz >= SEUIL_QUIZ,
      valeur: e.quizTentes ? `${Math.round(quiz * 100)} % sur ${e.quizTentes}` : '—',
    },
    { libelle: 'Appliquée (cas ou mini-jeu)', atteint: e.applique },
    {
      libelle: "Question d'examen traitée",
      atteint: e.questionsTraitees >= 1,
      valeur: `${e.questionsTraitees}`,
    },
  ]

  const prochaineEtape =
    niveau === 0
      ? 'Ouvrir la fiche pour la découvrir'
      : niveau === 1
        ? 'Lire la section « Comprendre » et la valider'
        : niveau === 2
          ? 'Réviser les flashcards de cette notion'
          : niveau === 3
            ? 'L’appliquer dans un cas, un mini-jeu ou un quiz'
            : niveau === 4
              ? "Traiter une question d'examen mobilisant cette notion"
              : null

  return { niveau, libelle: NIVEAUX_MAITRISE[niveau].libelle, criteres, prochaineEtape }
}

export function niveauMaitrise(p: Progression, id: NotionId): NiveauMaitrise {
  return detailMaitrise(p, id).niveau
}

/** Progression agrégée d'un ensemble de notions, en pourcentage du maximum. */
export function progressionMoyenne(p: Progression, ids: NotionId[]): number {
  if (ids.length === 0) return 0
  const total = ids.reduce((s, id) => s + niveauMaitrise(p, id), 0)
  return Math.round((total / (ids.length * 5)) * 100)
}

export interface StatsPriorite {
  priorite: 1 | 2 | 3
  total: number
  /** Niveau ≥ 4. */
  maitrisees: number
  /** Niveau ≥ 1. */
  explorees: number
  pourcentage: number
}

export function statsParPriorite(p: Progression): StatsPriorite[] {
  return ([1, 2, 3] as const).map((priorite) => {
    const liste = notions.filter((n) => n.priorite === priorite)
    const maitrisees = liste.filter((n) => niveauMaitrise(p, n.id) >= 4).length
    const explorees = liste.filter((n) => niveauMaitrise(p, n.id) >= 1).length
    return {
      priorite,
      total: liste.length,
      maitrisees,
      explorees,
      pourcentage: progressionMoyenne(p, liste.map((n) => n.id)),
    }
  })
}

export interface StatsChapitre {
  categorie: string
  nom: string
  total: number
  pourcentage: number
  notions: { notion: Notion; niveau: NiveauMaitrise }[]
}

export function statsParChapitre(p: Progression): StatsChapitre[] {
  return categories
    .filter((c) => notions.some((n) => n.categorie === c.id))
    .sort((a, b) => a.ordre - b.ordre)
    .map((c) => {
      const liste = notions.filter((n) => n.categorie === c.id)
      return {
        categorie: c.id,
        nom: c.nom,
        total: liste.length,
        pourcentage: progressionMoyenne(p, liste.map((n) => n.id)),
        notions: liste
          .map((n) => ({ notion: n, niveau: niveauMaitrise(p, n.id) }))
          .sort((a, b) => a.niveau - b.niveau || a.notion.nom.localeCompare(b.notion.nom, 'fr')),
      }
    })
}

/** Statistiques globales pour l'accueil et la page Historique. */
export function statsGlobales(p: Progression) {
  const niveaux = notions.map((n) => niveauMaitrise(p, n.id))
  const vues = niveaux.filter((n) => n >= 1).length
  const maitrisees = niveaux.filter((n) => n >= 4).length
  const cartesVues = Object.keys(p.flashcards).length
  return {
    notionsTotal: notions.length,
    notionsVues: vues,
    notionsMaitrisees: maitrisees,
    pourcentageGlobal: progressionMoyenne(p, notions.map((n) => n.id)),
    cartesVues,
    cartesTotal: flashcards.length,
    erreursActives: Object.keys(p.erreurs).length,
    sessions: p.historique.length,
  }
}
