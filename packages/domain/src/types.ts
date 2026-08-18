import type { NiveauMaitrise } from '@strat/config'

/**
 * MODÈLE DE PROGRESSION LOCALE.
 * Stocké uniquement dans le navigateur. Ne contient JAMAIS de corpus :
 * seulement des identifiants et des compteurs.
 */

export type Verdict = 'ne-sais-pas' | 'hesitant' | 'sais'

export interface EtatFlashcard {
  /** Nombre de fois où la carte a été vue. */
  vues: number
  /** Nombre de « je ne sais pas ». */
  echecs: number
  /** Nombre de « je sais ». */
  reussites: number
  /** Timestamp de la dernière révision (ms epoch). */
  derniereRevision: number
  /** Timestamp de la prochaine révision due (ms epoch). */
  prochaineRevision: number
  /** Niveau courant de la carte, 0 à 5. */
  niveau: NiveauMaitrise
}

export interface EtatNotion {
  /** La fiche a-t-elle été ouverte au moins une fois ? */
  vue: boolean
  /** L'utilisateur a-t-il marqué la section « Comprendre » comme lue ? */
  comprise: boolean
  /** Score cumulé des quiz portant sur cette notion. */
  quizReussis: number
  quizTentes: number
  /** Le mode « appliquer » (cas ou mini-jeu) a-t-il été réussi ? */
  applique: boolean
  /** Nombre de questions d'examen traitées sur cette notion. */
  questionsTraitees: number
  /** Timestamp de la dernière interaction. */
  dernierContact: number
}

export interface Erreur {
  /** Identifiant de la confusion : soit un id de duel, soit `notionA|notionB`. */
  id: string
  libelle: string
  /** Notions concernées, pour générer une session ciblée. */
  notions: string[]
  occurrences: number
  derniereOccurrence: number
}

export interface EntreeHistorique {
  id: string
  date: number
  type: 'examen' | 'quiz' | 'flashcards' | 'question-ouverte' | 'cas' | 'jeu'
  /** Question, cas ou jeu concerné. */
  refId?: string
  libelle: string
  /** Score sur 100 quand la mesure a du sens. */
  score?: number
  /** Auto-évaluation de l'examen : cases cochées / total. */
  autoEvaluation?: { coche: number; total: number }
  dureeSecondes?: number
  notionsFaibles?: string[]
}

export interface Preferences {
  theme: 'systeme' | 'clair' | 'sombre'
  /** Réduit les animations au-delà de la préférence système. */
  animationsReduites: boolean
  /** Taille de texte relative, en pourcentage (100 = normal). */
  tailleTexte: number
}

export interface Progression {
  storageVersion: number
  contentVersion: number
  /** Date de création du profil local. */
  creeLe: number
  majLe: number
  notions: Record<string, EtatNotion>
  flashcards: Record<string, EtatFlashcard>
  /** Cartes ajoutées manuellement depuis une fiche notion (« je veux la mémoriser »). */
  flashcardsAjoutees: string[]
  erreurs: Record<string, Erreur>
  historique: EntreeHistorique[]
  /** Dernière notion consultée, pour le bloc « Continuer » de l'accueil. */
  derniereNotion?: string
  /** Notes personnelles par notion. */
  notes: Record<string, string>
  /** Réponses d'examen saisies dans le bloc-notes, par question. */
  brouillonsExamen: Record<string, string>
  preferences: Preferences
}

export interface ResultatImport {
  ok: boolean
  /** Message humain, jamais une trace technique. */
  message: string
  progression?: Progression
  /** Éléments ignorés parce qu'inconnus du corpus actuel. */
  ignores?: string[]
}
