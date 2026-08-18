import type { Corpus, Notion, NotionId, Question } from './types'
import { categories, sources } from './categories'
import { notionsFondements } from './notions/fondements'
import { notionsDiagnostic } from './notions/diagnostic'
import { notionsExterne } from './notions/externe'
import { notionsInterne } from './notions/interne'
import { notionsChoix } from './notions/choix'
import { notionsBusinessModel } from './notions/business-model'
import { notionsDurabilite } from './notions/durabilite'
import { notionsCircularite } from './notions/circularite'
import { notionsNumerique } from './notions/numerique'
import { notionsRne } from './notions/rne'
import { notionsAccessibilite } from './notions/accessibilite'
import { notionsPilotage } from './notions/pilotage'
import { relations } from './relations'
import { questionsOfficielles } from './questions-officielles'
import { questionsProbables } from './questions-probables'
import { guidages } from './guidages'
import { flashcards } from './flashcards'
import { quiz } from './quiz'
import { cas } from './cas'
import { parcours, combinaisons } from './parcours'
import { jeux } from './jeux'
import { methode } from './methode'

export * from './types'
export {
  categories,
  sources,
  metaRelations,
  metaRelationParType,
  groupesRelationsAffichage,
  PRIORITE_LABELS,
} from './categories'
export { relations } from './relations'
export { flashcards } from './flashcards'
export { quiz } from './quiz'
export { cas } from './cas'
export { parcours, combinaisons } from './parcours'
export { jeux } from './jeux'
export { methode } from './methode'
export { questionsOfficielles } from './questions-officielles'
export { questionsProbables } from './questions-probables'
export { guidages } from './guidages'

/**
 * Version du corpus. À incrémenter à chaque publication qui change les données.
 * La progression locale de l'utilisateur est conservée entre les versions :
 * seuls les identifiants de notions garantissent la continuité.
 */
export const CONTENT_VERSION = 1

export const notions: Notion[] = [
  ...notionsFondements,
  ...notionsDiagnostic,
  ...notionsExterne,
  ...notionsInterne,
  ...notionsChoix,
  ...notionsBusinessModel,
  ...notionsDurabilite,
  ...notionsCircularite,
  ...notionsNumerique,
  ...notionsRne,
  ...notionsAccessibilite,
  ...notionsPilotage,
]

/**
 * Les questions, augmentées de leur guidage pas à pas quand il existe.
 * Le guidage est écrit soit à côté de la question, soit dans `guidages.ts`
 * pour les plus volumineux — la fusion est faite ici, à un seul endroit.
 */
export const questions: Question[] = [...questionsOfficielles, ...questionsProbables].map((q) =>
  q.guidage || !guidages[q.id] ? q : { ...q, guidage: guidages[q.id] },
)

export const corpus: Corpus = {
  version: CONTENT_VERSION,
  categories,
  notions,
  relations,
  questions,
  flashcards,
  quiz,
  cas,
  parcours,
  combinaisons,
  jeux,
  methode,
  sources,
}

// ---------------------------------------------------------------------------
// Index d'accès rapide — construits une seule fois au chargement du module.
// ---------------------------------------------------------------------------

export const notionParId = new Map<NotionId, Notion>(notions.map((n) => [n.id, n]))
export const notionParSlug = new Map<string, Notion>(notions.map((n) => [n.slug, n]))

export function getNotion(id: NotionId): Notion | undefined {
  return notionParId.get(id)
}

export function getNotionBySlug(slug: string): Notion | undefined {
  return notionParSlug.get(slug)
}

/** Nom court d'affichage, avec repli sur le nom complet puis sur l'identifiant. */
export function nomNotion(id: NotionId): string {
  const n = notionParId.get(id)
  return n?.nomCourt ?? n?.nom ?? id
}

export const notionsParCategorie = new Map<string, Notion[]>()
for (const n of notions) {
  const liste = notionsParCategorie.get(n.categorie)
  if (liste) liste.push(n)
  else notionsParCategorie.set(n.categorie, [n])
}

export const categorieParId = new Map(categories.map((c) => [c.id, c]))

/** Enfants directs d'une catégorie, pour la carte progressive. */
export function sousCategories(id: string) {
  return categories.filter((c) => c.parent === id).sort((a, b) => a.ordre - b.ordre)
}
