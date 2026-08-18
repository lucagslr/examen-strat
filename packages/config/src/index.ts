/**
 * Constantes partagées entre les packages.
 * Aucun secret, aucune clé, aucune URL distante : le projet n'en a pas besoin.
 */

/** Clé unique du stockage local. Ne jamais la renommer sans écrire une migration. */
export const STORAGE_KEY = 'strat.progress.v1'

/** Version du SCHÉMA de progression. Incrémenter quand la forme des données change. */
export const STORAGE_VERSION = 1

/** Préfixe des clés secondaires (préférences d'affichage, dernière session…). */
export const PREFS_KEY = 'strat.prefs.v1'

/** Taille maximale d'un fichier de progression importé (512 Ko). */
export const MAX_IMPORT_BYTES = 512 * 1024

/** Nombre maximal d'entrées conservées dans l'historique local. */
export const MAX_HISTORIQUE = 300

/** Durées de l'examen oral du cours : 10 minutes de préparation + 10 minutes de passage. */
export const EXAM_PREPARATION_SECONDES = 10 * 60
export const EXAM_ORAL_SECONDES = 10 * 60

/** Niveaux de maîtrise d'une notion (0 à 5). */
export const NIVEAUX_MAITRISE = [
  { niveau: 0, libelle: 'Jamais vue' },
  { niveau: 1, libelle: 'Découverte' },
  { niveau: 2, libelle: 'Comprise' },
  { niveau: 3, libelle: 'Mémorisée' },
  { niveau: 4, libelle: 'Appliquée' },
  { niveau: 5, libelle: 'Maîtrisée' },
] as const

export type NiveauMaitrise = 0 | 1 | 2 | 3 | 4 | 5

/** Compositions des sessions rapides proposées sur l'accueil. */
export const SESSIONS_RAPIDES = {
  5: { flashcards: 3, quiz: 2, distinctions: 1, questionsOuvertes: 0, relations: 0 },
  10: { flashcards: 5, quiz: 3, distinctions: 1, questionsOuvertes: 1, relations: 0 },
  20: { flashcards: 8, quiz: 5, distinctions: 2, questionsOuvertes: 1, relations: 2 },
} as const

export type DureeSession = keyof typeof SESSIONS_RAPIDES

/** Intervalles de révision en jours, indexés par niveau de maîtrise. */
export const INTERVALLES_JOURS: Record<NiveauMaitrise, number> = {
  0: 0,
  1: 1,
  2: 2,
  3: 4,
  4: 8,
  5: 16,
}
