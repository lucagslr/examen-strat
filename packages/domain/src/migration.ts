import { MAX_HISTORIQUE, STORAGE_VERSION, type NiveauMaitrise } from '@strat/config'
import { CONTENT_VERSION, flashcards, notions } from '@strat/content'
import type { EntreeHistorique, EtatFlashcard, EtatNotion, Erreur, Preferences, Progression } from './types'
export const preferencesParDefaut: Preferences = {
  theme: 'systeme',
  animationsReduites: false,
  tailleTexte: 100,
}

/** État sûr : c'est ce qu'on renvoie quand les données locales sont illisibles. */
export function progressionVide(maintenant = Date.now()): Progression {
  return {
    storageVersion: STORAGE_VERSION,
    contentVersion: CONTENT_VERSION,
    creeLe: maintenant,
    majLe: maintenant,
    notions: {},
    flashcards: {},
    flashcardsAjoutees: [],
    erreurs: {},
    historique: [],
    notes: {},
    brouillonsExamen: {},
    preferences: { ...preferencesParDefaut },
  }
}

/**
 * MIGRATION ET VALIDATION DES DONNÉES LOCALES.
 * Règle : ne jamais faire confiance aux données stockées ou importées.
 * Un champ inconnu est ignoré ; un champ invalide est remplacé par une valeur sûre ;
 * une progression illisible produit un état vide plutôt qu'un plantage.
 */

const idsNotions = new Set(notions.map((n) => n.id))
const idsFlashcards = new Set(flashcards.map((f) => f.id))

const estObjet = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v)

const nombre = (v: unknown, defaut = 0, min = 0, max = Number.MAX_SAFE_INTEGER): number =>
  typeof v === 'number' && Number.isFinite(v) ? Math.min(max, Math.max(min, v)) : defaut

const booleen = (v: unknown, defaut = false): boolean => (typeof v === 'boolean' ? v : defaut)

const texte = (v: unknown, max = 20000): string => (typeof v === 'string' ? v.slice(0, max) : '')

const niveau = (v: unknown): NiveauMaitrise => {
  const n = nombre(v, 0, 0, 5)
  return Math.round(n) as NiveauMaitrise
}

function nettoyerEtatNotion(v: unknown): EtatNotion | null {
  if (!estObjet(v)) return null
  const tentes = nombre(v.quizTentes)
  return {
    vue: booleen(v.vue),
    comprise: booleen(v.comprise),
    quizTentes: tentes,
    quizReussis: nombre(v.quizReussis, 0, 0, tentes),
    applique: booleen(v.applique),
    questionsTraitees: nombre(v.questionsTraitees),
    dernierContact: nombre(v.dernierContact),
  }
}

function nettoyerEtatFlashcard(v: unknown): EtatFlashcard | null {
  if (!estObjet(v)) return null
  return {
    vues: nombre(v.vues),
    echecs: nombre(v.echecs),
    reussites: nombre(v.reussites),
    derniereRevision: nombre(v.derniereRevision),
    prochaineRevision: nombre(v.prochaineRevision),
    niveau: niveau(v.niveau),
  }
}

function nettoyerErreur(cle: string, v: unknown): Erreur | null {
  if (!estObjet(v)) return null
  const notionsErreur = Array.isArray(v.notions)
    ? v.notions.filter((n): n is string => typeof n === 'string' && idsNotions.has(n))
    : []
  return {
    id: texte(v.id, 120) || cle,
    libelle: texte(v.libelle, 200) || cle,
    notions: notionsErreur,
    occurrences: nombre(v.occurrences, 1, 0, 100000),
    derniereOccurrence: nombre(v.derniereOccurrence),
  }
}

const TYPES_HISTORIQUE = new Set(['examen', 'quiz', 'flashcards', 'question-ouverte', 'cas', 'jeu'])

function nettoyerHistorique(v: unknown): EntreeHistorique | null {
  if (!estObjet(v)) return null
  const type = typeof v.type === 'string' && TYPES_HISTORIQUE.has(v.type) ? (v.type as EntreeHistorique['type']) : null
  if (!type) return null

  const autoEval = estObjet(v.autoEvaluation)
    ? { coche: nombre(v.autoEvaluation.coche, 0, 0, 100), total: nombre(v.autoEvaluation.total, 0, 0, 100) }
    : undefined

  return {
    id: texte(v.id, 80) || `h-${nombre(v.date)}`,
    date: nombre(v.date),
    type,
    refId: typeof v.refId === 'string' ? texte(v.refId, 80) : undefined,
    libelle: texte(v.libelle, 300),
    score: typeof v.score === 'number' ? nombre(v.score, 0, 0, 100) : undefined,
    autoEvaluation: autoEval,
    dureeSecondes: typeof v.dureeSecondes === 'number' ? nombre(v.dureeSecondes, 0, 0, 86400) : undefined,
    notionsFaibles: Array.isArray(v.notionsFaibles)
      ? v.notionsFaibles.filter((n): n is string => typeof n === 'string' && idsNotions.has(n)).slice(0, 20)
      : undefined,
  }
}

function nettoyerPreferences(v: unknown): Preferences {
  if (!estObjet(v)) return { ...preferencesParDefaut }

  // Une préférence hors bornes n'est pas « un peu trop grande » : elle est
  // corrompue. On revient au défaut plutôt que d'écrêter, pour restaurer un
  // état sûr et prévisible.
  const taille = v.tailleTexte
  const tailleValide =
    typeof taille === 'number' && Number.isFinite(taille) && taille >= 80 && taille <= 160 ? taille : 100

  return {
    theme: v.theme === 'clair' || v.theme === 'sombre' ? v.theme : 'systeme',
    animationsReduites: booleen(v.animationsReduites),
    tailleTexte: tailleValide,
  }
}

export interface ResultatMigration {
  progression: Progression
  /** Identifiants ignorés parce qu'inconnus du corpus actuel. */
  ignores: string[]
}

/**
 * Nettoie et migre une progression de forme inconnue.
 * Renvoie `null` seulement si la donnée n'est même pas un objet.
 */
export function migrerDetaille(donnees: unknown): ResultatMigration | null {
  if (!estObjet(donnees)) return null

  const ignores: string[] = []
  const base = progressionVide(nombre(donnees.creeLe, Date.now()))

  // --- Notions : on ignore silencieusement les ids disparus du corpus.
  if (estObjet(donnees.notions)) {
    for (const [id, valeur] of Object.entries(donnees.notions)) {
      if (!idsNotions.has(id)) {
        ignores.push(`notion:${id}`)
        continue
      }
      const etat = nettoyerEtatNotion(valeur)
      if (etat) base.notions[id] = etat
    }
  }

  // --- Flashcards
  if (estObjet(donnees.flashcards)) {
    for (const [id, valeur] of Object.entries(donnees.flashcards)) {
      if (!idsFlashcards.has(id)) {
        ignores.push(`flashcard:${id}`)
        continue
      }
      const etat = nettoyerEtatFlashcard(valeur)
      if (etat) base.flashcards[id] = etat
    }
  }

  if (Array.isArray(donnees.flashcardsAjoutees))
    base.flashcardsAjoutees = donnees.flashcardsAjoutees
      .filter((id): id is string => typeof id === 'string' && idsFlashcards.has(id))
      .slice(0, 1000)

  // --- Erreurs
  if (estObjet(donnees.erreurs)) {
    for (const [cle, valeur] of Object.entries(donnees.erreurs)) {
      const e = nettoyerErreur(cle, valeur)
      if (e) base.erreurs[cle] = e
    }
  }

  // --- Historique : borné, trié du plus récent au plus ancien.
  if (Array.isArray(donnees.historique)) {
    base.historique = donnees.historique
      .map(nettoyerHistorique)
      .filter((h): h is EntreeHistorique => h !== null)
      .sort((a, b) => b.date - a.date)
      .slice(0, MAX_HISTORIQUE)
  }

  // --- Notes et brouillons
  if (estObjet(donnees.notes))
    for (const [id, valeur] of Object.entries(donnees.notes)) {
      if (!idsNotions.has(id)) {
        ignores.push(`note:${id}`)
        continue
      }
      const t = texte(valeur, 20000)
      if (t) base.notes[id] = t
    }

  if (estObjet(donnees.brouillonsExamen))
    for (const [id, valeur] of Object.entries(donnees.brouillonsExamen)) {
      const t = texte(valeur, 20000)
      if (t) base.brouillonsExamen[id.slice(0, 80)] = t
    }

  if (typeof donnees.derniereNotion === 'string' && idsNotions.has(donnees.derniereNotion))
    base.derniereNotion = donnees.derniereNotion

  base.preferences = nettoyerPreferences(donnees.preferences)
  base.majLe = nombre(donnees.majLe, Date.now())
  base.storageVersion = STORAGE_VERSION
  base.contentVersion = CONTENT_VERSION

  return { progression: base, ignores }
}

export function migrer(donnees: unknown): Progression | null {
  return migrerDetaille(donnees)?.progression ?? null
}
