import { jeux, notions, type NotionId } from '@strat/content'
import type { Erreur, Progression } from './types'

/**
 * REGISTRE DES ERREURS.
 * Chaque confusion commise alimente automatiquement la page « Mes erreurs »,
 * qui peut ensuite générer une session ciblée.
 */

const duelParId = new Map(jeux.duels.map((d) => [d.id, d]))
const nomNotion = new Map(notions.map((n) => [n.id, n.nomCourt ?? n.nom]))

/** Clé stable d'une confusion entre deux notions, indépendante de l'ordre. */
export function cleConfusion(a: NotionId, b: NotionId): string {
  return [a, b].sort().join('|')
}

export function libelleConfusion(a: NotionId, b: NotionId): string {
  return `${nomNotion.get(a) ?? a} / ${nomNotion.get(b) ?? b}`
}

/**
 * Enregistre une erreur. Renvoie une NOUVELLE progression : le module reste pur,
 * c'est l'appelant (le contexte React) qui décide de persister.
 */
export function enregistrerErreur(
  p: Progression,
  cle: string,
  libelle: string,
  notionsConcernees: NotionId[],
  maintenant = Date.now(),
): Progression {
  const existante = p.erreurs[cle]
  const erreur: Erreur = {
    id: cle,
    libelle,
    notions: [...new Set([...(existante?.notions ?? []), ...notionsConcernees])],
    occurrences: (existante?.occurrences ?? 0) + 1,
    derniereOccurrence: maintenant,
  }
  return { ...p, erreurs: { ...p.erreurs, [cle]: erreur } }
}

/** Erreur commise sur un duel « ne pas confondre ». */
export function erreurDuel(p: Progression, idDuel: string, maintenant = Date.now()): Progression {
  const duel = duelParId.get(idDuel)
  if (!duel) return p
  return enregistrerErreur(
    p,
    idDuel,
    `${duel.gauche.libelle} / ${duel.droite.libelle}`,
    [duel.gauche.notion, duel.droite.notion],
    maintenant,
  )
}

/** Erreur commise sur un quiz ou un mini-jeu portant sur plusieurs notions. */
export function erreurNotions(p: Progression, notionsConcernees: NotionId[], maintenant = Date.now()): Progression {
  if (notionsConcernees.length === 0) return p
  const [a, b] = notionsConcernees
  if (a && b) return enregistrerErreur(p, cleConfusion(a, b), libelleConfusion(a, b), [a, b], maintenant)
  if (a) return enregistrerErreur(p, a, nomNotion.get(a) ?? a, [a], maintenant)
  return p
}

/** Efface une confusion : l'utilisateur estime l'avoir corrigée. */
export function oublierErreur(p: Progression, cle: string): Progression {
  const copie = { ...p.erreurs }
  delete copie[cle]
  return { ...p, erreurs: copie }
}

export interface ErreurAffichee extends Erreur {
  /** Notions concernées, résolues en noms lisibles. */
  nomsNotions: string[]
}

export function erreursTriees(p: Progression): ErreurAffichee[] {
  return Object.values(p.erreurs)
    .sort((a, b) => b.occurrences - a.occurrences || b.derniereOccurrence - a.derniereOccurrence)
    .map((e) => ({ ...e, nomsNotions: e.notions.map((n) => nomNotion.get(n) ?? n) }))
}

/** Toutes les notions impliquées dans au moins une erreur — base d'une session ciblée. */
export function notionsEnErreur(p: Progression): NotionId[] {
  return [...new Set(Object.values(p.erreurs).flatMap((e) => e.notions))]
}
