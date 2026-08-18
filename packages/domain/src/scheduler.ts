import { INTERVALLES_JOURS, type NiveauMaitrise } from '@strat/config'
import { flashcards, notions, type Flashcard, type NotionId, type Priorite } from '@strat/content'
import { voisinage } from './graph'
import { niveauMaitrise } from './mastery'
import type { EtatFlashcard, Progression, Verdict } from './types'

/**
 * SÉLECTION ET PLANIFICATION DES FLASHCARDS.
 *
 * Le cahier des charges demande explicitement de ne PAS construire un algorithme
 * excessivement compliqué. L'ordre de priorité est celui du cours :
 *   1. notions faibles · 2. erreurs fréquentes · 3. priorité examen
 *   4. cartes jamais vues · 5. cartes dont la dernière révision est ancienne
 */

const JOUR_MS = 24 * 60 * 60 * 1000

export function etatFlashcard(p: Progression, id: string): EtatFlashcard | undefined {
  return p.flashcards[id]
}

/** Nouvel état d'une carte après un verdict de l'utilisateur. */
export function appliquerVerdict(
  precedent: EtatFlashcard | undefined,
  verdict: Verdict,
  maintenant = Date.now(),
): EtatFlashcard {
  const base: EtatFlashcard = precedent ?? {
    vues: 0,
    echecs: 0,
    reussites: 0,
    derniereRevision: 0,
    prochaineRevision: 0,
    niveau: 0,
  }

  let niveau: NiveauMaitrise = base.niveau
  if (verdict === 'sais') niveau = Math.min(5, niveau + 1) as NiveauMaitrise
  else if (verdict === 'hesitant') niveau = Math.max(1, niveau) as NiveauMaitrise
  else niveau = Math.max(0, niveau - 2) as NiveauMaitrise

  // Un « je ne sais pas » ramène la carte au lendemain, quel que soit son niveau.
  const jours = verdict === 'ne-sais-pas' ? 1 : INTERVALLES_JOURS[niveau]

  return {
    vues: base.vues + 1,
    echecs: base.echecs + (verdict === 'ne-sais-pas' ? 1 : 0),
    reussites: base.reussites + (verdict === 'sais' ? 1 : 0),
    derniereRevision: maintenant,
    prochaineRevision: maintenant + Math.max(jours, 0) * JOUR_MS,
    niveau,
  }
}

export interface OptionsSelection {
  /** Nombre de cartes à renvoyer. */
  taille: number
  /** Restreindre à une catégorie. */
  categorie?: string
  /** Restreindre à des notions précises (session ciblée sur les erreurs). */
  notions?: NotionId[]
  /** Restreindre à une priorité d'examen. */
  priorite?: Priorite
  /** Ne proposer que les cartes dues. */
  seulementDues?: boolean
  maintenant?: number
}

export interface CarteScoree {
  carte: Flashcard
  score: number
  /** Pourquoi cette carte a été retenue — affiché à l'utilisateur. */
  raison: string
}

const prioriteNotion = new Map(notions.map((n) => [n.id, n.priorite]))

/**
 * Score de sélection. Plus il est élevé, plus la carte est urgente.
 * Chaque composante correspond à un critère explicite du cours.
 */
export function scorerCarte(p: Progression, carte: Flashcard, maintenant: number): CarteScoree {
  const etat = p.flashcards[carte.id]
  let score = 0
  const raisons: string[] = []

  // 1. Notions faibles : la notion propriétaire de la carte est mal maîtrisée.
  const proprietaire = carte.notions[0]
  const niveauNotion = proprietaire ? niveauMaitrise(p, proprietaire) : 0
  const faiblesse = (5 - niveauNotion) * 10
  score += faiblesse
  if (niveauNotion <= 1) raisons.push('notion peu travaillée')

  // 2. Erreurs fréquentes sur cette carte.
  if (etat && etat.echecs > 0) {
    score += Math.min(etat.echecs, 5) * 12
    raisons.push(`${etat.echecs} échec${etat.echecs > 1 ? 's' : ''}`)
  }

  // 3. Priorité examen.
  const priorite = prioriteNotion.get(proprietaire ?? '') ?? carte.priorite
  score += (4 - priorite) * 8
  if (priorite === 1) raisons.push('priorité examen')

  // 4. Carte jamais vue.
  if (!etat) {
    score += 25
    raisons.push('jamais vue')
  } else {
    // 5. Ancienneté : plus la carte est en retard, plus elle remonte.
    const retardJours = (maintenant - etat.prochaineRevision) / JOUR_MS
    if (retardJours > 0) {
      score += Math.min(retardJours, 30) * 3
      raisons.push('à revoir')
    } else {
      // Pénalise les cartes qui ne sont pas encore dues, sans les exclure.
      score -= Math.min(-retardJours, 30) * 2
    }
    if (etat.niveau >= 4) score -= 15
  }

  return { carte, score, raison: raisons[0] ?? 'révision régulière' }
}

export function selectionnerCartes(p: Progression, options: OptionsSelection): CarteScoree[] {
  const maintenant = options.maintenant ?? Date.now()

  let candidates = flashcards
  if (options.categorie) candidates = candidates.filter((c) => c.categorie === options.categorie)
  if (options.priorite) candidates = candidates.filter((c) => c.priorite === options.priorite)
  if (options.notions?.length) {
    const cible = new Set(options.notions)
    candidates = candidates.filter((c) => c.notions.some((n) => cible.has(n)))
  }
  if (options.seulementDues)
    candidates = candidates.filter((c) => {
      const e = p.flashcards[c.id]
      return !e || e.prochaineRevision <= maintenant
    })

  const scorees = candidates.map((c) => scorerCarte(p, c, maintenant))
  scorees.sort((a, b) => b.score - a.score || a.carte.id.localeCompare(b.carte.id))
  return scorees.slice(0, Math.max(0, options.taille))
}

/**
 * RÉVISION INTELLIGENTE.
 * Quand une notion est faible, on remonte aussi ses voisines dans le graphe :
 * réviser SAF isolément est moins efficace que réviser SAF avec souhaitabilité,
 * acceptabilité, faisabilité, parties prenantes et SWOT.
 */
export function notionsFaibles(p: Progression, limite = 8): NotionId[] {
  return notions
    .map((n) => ({ id: n.id, niveau: niveauMaitrise(p, n.id), priorite: n.priorite }))
    .filter((n) => n.niveau < 3)
    .sort((a, b) => a.niveau - b.niveau || a.priorite - b.priorite)
    .slice(0, limite)
    .map((n) => n.id)
}

export function revisionIntelligente(p: Progression, taille = 12): CarteScoree[] {
  const faibles = notionsFaibles(p, 6)
  const cible = new Set<NotionId>(faibles)

  // Une notion faible entraîne ses voisines directes : c'est le principe du cours.
  for (const f of faibles) for (const [voisin] of voisinage(f, 1)) cible.add(voisin)

  const surCible = selectionnerCartes(p, { taille, notions: [...cible] })
  if (surCible.length >= taille) return surCible

  // Complément avec la sélection générale, sans doublon.
  const dejaLa = new Set(surCible.map((c) => c.carte.id))
  const complement = selectionnerCartes(p, { taille: taille * 2 }).filter((c) => !dejaLa.has(c.carte.id))
  return [...surCible, ...complement].slice(0, taille)
}

/** Nombre de cartes dues aujourd'hui — affiché sur l'accueil. */
export function cartesDues(p: Progression, maintenant = Date.now()): number {
  return flashcards.filter((c) => {
    const e = p.flashcards[c.id]
    return !e || e.prochaineRevision <= maintenant
  }).length
}
