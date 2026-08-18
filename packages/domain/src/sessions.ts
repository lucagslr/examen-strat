import { SESSIONS_RAPIDES, type DureeSession } from '@strat/config'
import {
  jeux,
  notions,
  questions,
  quiz,
  type Duel,
  type Flashcard,
  type NotionId,
  type Question,
  type Quiz,
} from '@strat/content'
import { niveauMaitrise } from './mastery'
import { notionsFaibles, revisionIntelligente, selectionnerCartes } from './scheduler'
import type { Progression } from './types'

/**
 * COMPOSITION DES SESSIONS.
 * L'accueil ne demande pas « que veux-tu faire ? » mais « combien de temps as-tu ? ».
 * La session est composée automatiquement à partir de la progression.
 */

export interface EtapeSession {
  type: 'flashcard' | 'quiz' | 'distinction' | 'question' | 'relation'
  /** Identifiant de l'élément (carte, quiz, duel, question, notion). */
  refId: string
  libelle: string
}

export interface Session {
  duree: DureeSession
  etapes: EtapeSession[]
  /** Notions travaillées, pour l'écran de fin. */
  notions: NotionId[]
}

/** Sélectionne les quiz les plus utiles : notions faibles d'abord, priorité ensuite. */
export function selectionnerQuiz(p: Progression, taille: number, cibles?: NotionId[]): Quiz[] {
  const faibles = new Set(cibles ?? notionsFaibles(p, 10))
  const scorer = (q: Quiz) => {
    const pertinence = q.notions.filter((n) => faibles.has(n)).length * 20
    const niveauMoyen = q.notions.length
      ? q.notions.reduce((s, n) => s + niveauMaitrise(p, n), 0) / q.notions.length
      : 0
    return pertinence + (5 - niveauMoyen) * 6 + (4 - q.priorite) * 5
  }
  return [...quiz]
    .map((q) => ({ q, s: scorer(q) }))
    .sort((a, b) => b.s - a.s || a.q.id.localeCompare(b.q.id))
    .slice(0, Math.max(0, taille))
    .map((x) => x.q)
}

/** Duels « ne pas confondre » les plus utiles : ceux où l'utilisateur s'est déjà trompé. */
export function selectionnerDuels(p: Progression, taille: number): Duel[] {
  const scorer = (d: Duel) => {
    const erreur = p.erreurs[d.id]
    const niveauMoyen = (niveauMaitrise(p, d.gauche.notion) + niveauMaitrise(p, d.droite.notion)) / 2
    return (erreur?.occurrences ?? 0) * 30 + (5 - niveauMoyen) * 8 + (4 - d.priorite) * 6
  }
  return [...jeux.duels]
    .map((d) => ({ d, s: scorer(d) }))
    .sort((a, b) => b.s - a.s || a.d.id.localeCompare(b.d.id))
    .slice(0, Math.max(0, taille))
    .map((x) => x.d)
}

/** Questions d'examen les moins travaillées, priorité d'abord. */
export function selectionnerQuestions(p: Progression, taille: number, filtre?: (q: Question) => boolean): Question[] {
  const dejaFaites = new Set(p.historique.filter((h) => h.refId).map((h) => h.refId as string))
  const scorer = (q: Question) => {
    const jamaisFaite = dejaFaites.has(q.id) ? 0 : 25
    const niveauMoyen = q.notions.length
      ? q.notions.reduce((s, n) => s + niveauMaitrise(p, n), 0) / q.notions.length
      : 0
    const guidee = q.guidage ? 10 : 0
    return jamaisFaite + (5 - niveauMoyen) * 7 + (4 - q.priorite) * 6 + guidee
  }
  return questions
    .filter((q) => filtre?.(q) ?? true)
    .map((q) => ({ q, s: scorer(q) }))
    .sort((a, b) => b.s - a.s || a.q.id.localeCompare(b.q.id))
    .slice(0, Math.max(0, taille))
    .map((x) => x.q)
}

export function composerSession(p: Progression, duree: DureeSession): Session {
  const plan = SESSIONS_RAPIDES[duree]
  const etapes: EtapeSession[] = []
  const notionsTravaillees = new Set<NotionId>()

  const cartes = revisionIntelligente(p, plan.flashcards)
  for (const { carte } of cartes) {
    etapes.push({ type: 'flashcard', refId: carte.id, libelle: carte.recto })
    carte.notions.forEach((n) => notionsTravaillees.add(n))
  }

  for (const d of selectionnerDuels(p, plan.distinctions)) {
    etapes.push({ type: 'distinction', refId: d.id, libelle: `${d.gauche.libelle} ≠ ${d.droite.libelle}` })
    notionsTravaillees.add(d.gauche.notion)
    notionsTravaillees.add(d.droite.notion)
  }

  for (const q of selectionnerQuiz(p, plan.quiz, [...notionsTravaillees])) {
    etapes.push({ type: 'quiz', refId: q.id, libelle: q.enonce })
    q.notions.forEach((n) => notionsTravaillees.add(n))
  }

  if (plan.relations > 0) {
    const chaines = jeux.chainesLogiques.slice(0, plan.relations)
    for (const c of chaines) {
      etapes.push({ type: 'relation', refId: c.id, libelle: c.intitule })
      c.ordre.forEach((n) => notionsTravaillees.add(n))
    }
  }

  if (plan.questionsOuvertes > 0) {
    for (const q of selectionnerQuestions(p, plan.questionsOuvertes, (q) => Boolean(q.guidage))) {
      etapes.push({ type: 'question', refId: q.id, libelle: q.enonce })
      q.notions.forEach((n) => notionsTravaillees.add(n))
    }
  }

  return { duree, etapes, notions: [...notionsTravaillees] }
}

/** Session ciblée générée depuis la page « Mes erreurs ». */
export function sessionCiblee(p: Progression, notionsCibles: NotionId[], taille = 10): Session {
  const etapes: EtapeSession[] = []

  const cartes = selectionnerCartes(p, { taille: Math.ceil(taille * 0.5), notions: notionsCibles })
  for (const { carte } of cartes) etapes.push({ type: 'flashcard', refId: carte.id, libelle: carte.recto })

  for (const q of selectionnerQuiz(p, Math.ceil(taille * 0.3), notionsCibles))
    etapes.push({ type: 'quiz', refId: q.id, libelle: q.enonce })

  const cible = new Set(notionsCibles)
  const duels = jeux.duels.filter((d) => cible.has(d.gauche.notion) || cible.has(d.droite.notion))
  for (const d of duels.slice(0, Math.max(1, Math.floor(taille * 0.2))))
    etapes.push({ type: 'distinction', refId: d.id, libelle: `${d.gauche.libelle} ≠ ${d.droite.libelle}` })

  return { duree: 10, etapes, notions: notionsCibles }
}

/** Notions à revoir : erreurs répétées, faible maîtrise, ou révision ancienne. */
export interface ARevoir {
  notion: NotionId
  nom: string
  raison: string
  niveau: number
}

export function aRevoir(p: Progression, limite = 6): ARevoir[] {
  const maintenant = Date.now()
  const SEMAINE = 7 * 24 * 60 * 60 * 1000
  const resultats: ARevoir[] = []
  const vus = new Set<NotionId>()

  // 1. Erreurs répétées.
  const erreurs = Object.values(p.erreurs).sort((a, b) => b.occurrences - a.occurrences)
  for (const e of erreurs) {
    for (const n of e.notions) {
      if (vus.has(n)) continue
      vus.add(n)
      const notion = notions.find((x) => x.id === n)
      if (!notion) continue
      resultats.push({
        notion: n,
        nom: notion.nomCourt ?? notion.nom,
        raison: `${e.occurrences} erreur${e.occurrences > 1 ? 's' : ''} — ${e.libelle}`,
        niveau: niveauMaitrise(p, n),
      })
      if (resultats.length >= limite) return resultats
    }
  }

  // 2. Faible maîtrise sur les notions prioritaires.
  for (const n of notions.filter((x) => x.priorite === 1)) {
    if (vus.has(n.id)) continue
    const niveau = niveauMaitrise(p, n.id)
    if (niveau >= 3) continue
    vus.add(n.id)
    resultats.push({
      notion: n.id,
      nom: n.nomCourt ?? n.nom,
      raison: niveau === 0 ? 'jamais vue, priorité examen' : 'maîtrise faible sur une notion prioritaire',
      niveau,
    })
    if (resultats.length >= limite) return resultats
  }

  // 3. Révision ancienne.
  for (const [id, etat] of Object.entries(p.notions)) {
    if (vus.has(id)) continue
    if (maintenant - etat.dernierContact < 2 * SEMAINE) continue
    const notion = notions.find((x) => x.id === id)
    if (!notion) continue
    vus.add(id)
    resultats.push({
      notion: id,
      nom: notion.nomCourt ?? notion.nom,
      raison: 'pas revue depuis plus de deux semaines',
      niveau: niveauMaitrise(p, id),
    })
    if (resultats.length >= limite) return resultats
  }

  return resultats
}

/** Élément proposé par le bloc « Continuer » de l'accueil. */
export interface Reprise {
  notion?: NotionId
  nom: string
  niveau: number
  cartesRestantes: number
  /** `true` si l'utilisateur n'a encore rien fait. */
  premiereVisite: boolean
}

export function reprise(p: Progression): Reprise {
  const id = p.derniereNotion
  if (!id) {
    const premiere = notions.find((n) => n.priorite === 1)
    return {
      notion: premiere?.id,
      nom: premiere?.nomCourt ?? premiere?.nom ?? 'Stratégie',
      niveau: 0,
      cartesRestantes: selectionnerCartes(p, { taille: 999, seulementDues: true }).length,
      premiereVisite: true,
    }
  }
  const notion = notions.find((n) => n.id === id)
  return {
    notion: id,
    nom: notion?.nomCourt ?? notion?.nom ?? id,
    niveau: niveauMaitrise(p, id),
    cartesRestantes: selectionnerCartes(p, { taille: 999, notions: [id], seulementDues: true }).length,
    premiereVisite: false,
  }
}

/** Mélange déterministe : même graine → même ordre, ce qui rend les tests fiables. */
export function melangerAvecGraine<T>(liste: T[], graine: number): T[] {
  const copie = [...liste]
  let etat = graine || 1
  for (let i = copie.length - 1; i > 0; i--) {
    etat = (etat * 1664525 + 1013904223) % 4294967296
    const j = etat % (i + 1)
    const a = copie[i] as T
    const b = copie[j] as T
    copie[i] = b
    copie[j] = a
  }
  return copie
}

export type { Flashcard }
