import { MAX_HISTORIQUE } from '@strat/config'
import type { NotionId } from '@strat/content'
import { appliquerVerdict } from './scheduler'
import type { EntreeHistorique, EtatNotion, Progression, Verdict } from './types'

/**
 * MUTATIONS DE LA PROGRESSION.
 * Toutes les fonctions sont pures : elles renvoient une nouvelle progression.
 * C'est le contexte React qui décide quand persister.
 */

const etatNotionVide: EtatNotion = {
  vue: false,
  comprise: false,
  quizReussis: 0,
  quizTentes: 0,
  applique: false,
  questionsTraitees: 0,
  dernierContact: 0,
}

function majNotion(p: Progression, id: NotionId, patch: Partial<EtatNotion>, maintenant: number): Progression {
  const precedent = p.notions[id] ?? etatNotionVide
  return {
    ...p,
    notions: { ...p.notions, [id]: { ...precedent, ...patch, dernierContact: maintenant } },
  }
}

/** Consultation d'une fiche notion : passe le niveau à 1 et alimente « Continuer ». */
export function marquerNotionVue(p: Progression, id: NotionId, maintenant = Date.now()): Progression {
  return { ...majNotion(p, id, { vue: true }, maintenant), derniereNotion: id }
}

/** L'utilisateur valide explicitement avoir compris la section « Comprendre ». */
export function marquerNotionComprise(p: Progression, id: NotionId, comprise = true, maintenant = Date.now()): Progression {
  return majNotion(p, id, { vue: true, comprise }, maintenant)
}

export function marquerNotionAppliquee(p: Progression, id: NotionId, maintenant = Date.now()): Progression {
  return majNotion(p, id, { vue: true, applique: true }, maintenant)
}

export function enregistrerQuiz(
  p: Progression,
  notionsConcernees: NotionId[],
  reussi: boolean,
  maintenant = Date.now(),
): Progression {
  let courant = p
  for (const id of notionsConcernees) {
    const precedent = courant.notions[id] ?? etatNotionVide
    courant = majNotion(
      courant,
      id,
      {
        vue: true,
        quizTentes: precedent.quizTentes + 1,
        quizReussis: precedent.quizReussis + (reussi ? 1 : 0),
      },
      maintenant,
    )
  }
  return courant
}

export function enregistrerQuestionTraitee(
  p: Progression,
  notionsConcernees: NotionId[],
  maintenant = Date.now(),
): Progression {
  let courant = p
  for (const id of notionsConcernees) {
    const precedent = courant.notions[id] ?? etatNotionVide
    courant = majNotion(courant, id, { vue: true, questionsTraitees: precedent.questionsTraitees + 1 }, maintenant)
  }
  return courant
}

export function enregistrerFlashcard(
  p: Progression,
  idCarte: string,
  verdict: Verdict,
  notionsConcernees: NotionId[] = [],
  maintenant = Date.now(),
): Progression {
  const etat = appliquerVerdict(p.flashcards[idCarte], verdict, maintenant)
  let courant: Progression = { ...p, flashcards: { ...p.flashcards, [idCarte]: etat } }
  for (const id of notionsConcernees) courant = majNotion(courant, id, { vue: true }, maintenant)
  return courant
}

/** « Je veux la mémoriser » depuis une fiche notion. */
export function ajouterFlashcard(p: Progression, idCarte: string): Progression {
  if (p.flashcardsAjoutees.includes(idCarte)) return p
  return { ...p, flashcardsAjoutees: [...p.flashcardsAjoutees, idCarte] }
}

export function retirerFlashcard(p: Progression, idCarte: string): Progression {
  return { ...p, flashcardsAjoutees: p.flashcardsAjoutees.filter((id) => id !== idCarte) }
}

export function ajouterHistorique(p: Progression, entree: Omit<EntreeHistorique, 'id'>): Progression {
  const id = `h-${entree.date}-${Math.round(entree.date % 100000)}-${p.historique.length}`
  const historique = [{ ...entree, id }, ...p.historique].slice(0, MAX_HISTORIQUE)
  return { ...p, historique }
}

export function enregistrerNote(p: Progression, id: NotionId, texte: string): Progression {
  const notes = { ...p.notes }
  if (texte.trim()) notes[id] = texte.slice(0, 20000)
  else delete notes[id]
  return { ...p, notes }
}

export function enregistrerBrouillon(p: Progression, cle: string, texte: string): Progression {
  const brouillons = { ...p.brouillonsExamen }
  if (texte.trim()) brouillons[cle] = texte.slice(0, 20000)
  else delete brouillons[cle]
  return { ...p, brouillonsExamen: brouillons }
}

export function majPreferences(p: Progression, patch: Partial<Progression['preferences']>): Progression {
  return { ...p, preferences: { ...p.preferences, ...patch } }
}
