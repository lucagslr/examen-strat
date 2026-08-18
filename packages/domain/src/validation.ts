import {
  cas,
  categories,
  combinaisons,
  flashcards,
  guidages,
  jeux,
  metaRelationParType,
  notions,
  parcours,
  questions,
  quiz,
  relations,
  sources,
  type NotionId,
  type Relation,
  type TypeRelation,
} from '@strat/content'

/**
 * VALIDATION DU CORPUS.
 * Exécutée par `npm run validate:content` (le build échoue sur une erreur)
 * et par les tests unitaires. Sépare erreurs bloquantes et avertissements.
 */

export interface ProblemeContenu {
  niveau: 'erreur' | 'avertissement'
  code: string
  message: string
}

export interface RapportValidation {
  erreurs: ProblemeContenu[]
  avertissements: ProblemeContenu[]
  ok: boolean
}

const err = (code: string, message: string): ProblemeContenu => ({ niveau: 'erreur', code, message })
const warn = (code: string, message: string): ProblemeContenu => ({ niveau: 'avertissement', code, message })

/** Détecte un cycle dans le sous-graphe d'un type de relation donné. */
function trouverCycle(rels: Relation[]): NotionId[] | null {
  const adjacence = new Map<NotionId, NotionId[]>()
  for (const r of rels) {
    const liste = adjacence.get(r.source)
    if (liste) liste.push(r.target)
    else adjacence.set(r.source, [r.target])
  }

  const EN_COURS = 1
  const TERMINE = 2
  const etat = new Map<NotionId, number>()
  const pile: NotionId[] = []

  const visiter = (n: NotionId): NotionId[] | null => {
    etat.set(n, EN_COURS)
    pile.push(n)
    for (const voisin of adjacence.get(n) ?? []) {
      const e = etat.get(voisin)
      if (e === EN_COURS) {
        const debut = pile.indexOf(voisin)
        return [...pile.slice(debut), voisin]
      }
      if (e === undefined) {
        const cycle = visiter(voisin)
        if (cycle) return cycle
      }
    }
    pile.pop()
    etat.set(n, TERMINE)
    return null
  }

  for (const n of adjacence.keys()) {
    if (etat.get(n) === undefined) {
      const cycle = visiter(n)
      if (cycle) return cycle
    }
  }
  return null
}

export function validerCorpus(): RapportValidation {
  const erreurs: ProblemeContenu[] = []
  const avertissements: ProblemeContenu[] = []

  const idsNotions = new Set(notions.map((n) => n.id))
  const idsCategories = new Set(categories.map((c) => c.id))
  const idsSources = new Set(sources.map((s) => s.id))
  const idsCas = new Set(cas.map((c) => c.id))
  const idsQuestions = new Set(questions.map((q) => q.id))

  // --- Notions ------------------------------------------------------------
  const vusNotion = new Set<string>()
  const vusSlug = new Set<string>()
  for (const n of notions) {
    if (vusNotion.has(n.id)) erreurs.push(err('ID_DUPLIQUE', `Identifiant de notion dupliqué : « ${n.id} »`))
    vusNotion.add(n.id)

    if (vusSlug.has(n.slug)) erreurs.push(err('SLUG_DUPLIQUE', `Slug dupliqué : « ${n.slug} »`))
    vusSlug.add(n.slug)

    if (!idsCategories.has(n.categorie))
      erreurs.push(err('CATEGORIE_INCONNUE', `La notion « ${n.id} » référence la catégorie inexistante « ${n.categorie} »`))

    if (!n.definitionCours.trim())
      erreurs.push(err('DEFINITION_MANQUANTE', `La notion « ${n.id} » n'a pas de définition du cours`))

    if (!n.explicationSimple.trim())
      erreurs.push(err('EXPLICATION_MANQUANTE', `La notion « ${n.id} » n'a pas d'explication simple`))

    if (![1, 2, 3].includes(n.priorite))
      erreurs.push(err('PRIORITE_INVALIDE', `Priorité invalide sur « ${n.id} » : ${String(n.priorite)}`))

    if (n.sources.length === 0)
      erreurs.push(err('SOURCE_MANQUANTE', `La notion « ${n.id} » ne cite aucune source`))

    for (const s of n.sources)
      if (!idsSources.has(s)) erreurs.push(err('SOURCE_INCONNUE', `La notion « ${n.id} » cite la source inexistante « ${s} »`))

    for (const ex of n.exemples ?? [])
      if (ex.cas && !idsCas.has(ex.cas))
        erreurs.push(err('CAS_INCONNU', `L'exemple de « ${n.id} » référence le cas inexistant « ${ex.cas} »`))
  }

  // --- Catégories ---------------------------------------------------------
  for (const c of categories)
    if (c.parent && !idsCategories.has(c.parent))
      erreurs.push(err('CATEGORIE_PARENTE_INCONNUE', `La catégorie « ${c.id} » a un parent inexistant « ${c.parent} »`))

  // --- Relations ----------------------------------------------------------
  const clesRelations = new Set<string>()
  for (const r of relations) {
    if (!idsNotions.has(r.source))
      erreurs.push(err('RELATION_SOURCE_INCONNUE', `Relation vers une notion source inexistante : « ${r.source} »`))
    if (!idsNotions.has(r.target))
      erreurs.push(err('RELATION_CIBLE_INCONNUE', `Relation vers une notion cible inexistante : « ${r.target} »`))
    if (r.source === r.target)
      erreurs.push(err('RELATION_REFLEXIVE', `Relation d'une notion vers elle-même : « ${r.source} » (${r.type})`))
    if (!metaRelationParType.has(r.type))
      erreurs.push(err('TYPE_RELATION_INCONNU', `Type de relation inconnu : « ${r.type} »`))
    if (!r.description.trim())
      erreurs.push(err('RELATION_SANS_DESCRIPTION', `Relation ${r.source} → ${r.target} (${r.type}) sans description`))

    const cle = `${r.source}|${r.target}|${r.type}`
    if (clesRelations.has(cle)) erreurs.push(err('RELATION_DUPLIQUEE', `Relation dupliquée : ${cle}`))
    clesRelations.add(cle)
  }

  // Cycles sur les types de relation qui l'interdisent.
  const parType = new Map<TypeRelation, Relation[]>()
  for (const r of relations) {
    const liste = parType.get(r.type)
    if (liste) liste.push(r)
    else parType.set(r.type, [r])
  }
  for (const [type, rels] of parType) {
    if (!metaRelationParType.get(type)?.acyclique) continue
    const cycle = trouverCycle(rels)
    if (cycle)
      erreurs.push(
        err('RELATION_CIRCULAIRE', `Cycle interdit sur le type ${type} : ${cycle.join(' → ')}`),
      )
  }

  // Notions orphelines : accessibles depuis l'index mais isolées du graphe.
  const connectees = new Set<NotionId>()
  for (const r of relations) {
    connectees.add(r.source)
    connectees.add(r.target)
  }
  for (const n of notions)
    if (!connectees.has(n.id))
      avertissements.push(warn('NOTION_ORPHELINE', `La notion « ${n.id} » n'a aucune relation déclarée`))

  // --- Questions ----------------------------------------------------------
  const vusQuestion = new Set<string>()
  for (const q of questions) {
    if (vusQuestion.has(q.id)) erreurs.push(err('QUESTION_DUPLIQUEE', `Identifiant de question dupliqué : « ${q.id} »`))
    vusQuestion.add(q.id)

    if (q.notions.length === 0)
      erreurs.push(err('QUESTION_ORPHELINE', `La question « ${q.id} » ne référence aucune notion`))
    for (const nid of q.notions)
      if (!idsNotions.has(nid))
        erreurs.push(err('QUESTION_NOTION_INCONNUE', `La question « ${q.id} » référence la notion inexistante « ${nid} »`))
    if (!idsCategories.has(q.categorie))
      erreurs.push(err('QUESTION_CATEGORIE_INCONNUE', `La question « ${q.id} » a une catégorie inexistante « ${q.categorie} »`))
    for (const s of q.sources)
      if (!idsSources.has(s)) erreurs.push(err('SOURCE_INCONNUE', `La question « ${q.id} » cite la source inexistante « ${s} »`))

    if (q.guidage) {
      for (const nid of [...q.guidage.notionsAttendues, ...q.guidage.notionsDistracteurs, ...q.guidage.outilsAttendus])
        if (!idsNotions.has(nid))
          erreurs.push(err('GUIDAGE_NOTION_INCONNUE', `Le guidage de « ${q.id} » référence la notion inexistante « ${nid} »`))
      if (q.guidage.planAttendu.length < 3)
        avertissements.push(warn('GUIDAGE_PLAN_COURT', `Le plan guidé de « ${q.id} » compte moins de 3 blocs`))
      if (!q.guidage.arbitrages.some((a) => a.correct))
        erreurs.push(err('GUIDAGE_SANS_ARBITRAGE', `Le guidage de « ${q.id} » n'a aucun arbitrage correct`))
    }
  }

  // Un guidage dont la clé ne correspond à aucune question ne serait jamais joué.
  for (const cle of Object.keys(guidages))
    if (!idsQuestions.has(cle))
      erreurs.push(err('GUIDAGE_ORPHELIN', `Le guidage « ${cle} » ne correspond à aucune question`))

  const nbOfficielles = questions.filter((q) => q.origine === 'officielle').length
  const nbProbables = questions.filter((q) => q.origine === 'probable').length
  if (nbOfficielles !== 22)
    erreurs.push(err('COUVERTURE_OFFICIELLES', `${nbOfficielles} questions officielles au lieu de 22`))
  if (nbProbables !== 55)
    erreurs.push(err('COUVERTURE_PROBABLES', `${nbProbables} questions probables au lieu de 55`))

  for (const [origine, attendu] of [
    ['officielle', 22],
    ['probable', 55],
  ] as const) {
    const numeros = questions.filter((q) => q.origine === origine).map((q) => q.numero)
    for (let i = 1; i <= attendu; i++)
      if (!numeros.includes(i))
        erreurs.push(err('NUMERO_MANQUANT', `Question ${origine} n°${i} manquante`))
  }

  // --- Flashcards ---------------------------------------------------------
  const vusFlashcard = new Set<string>()
  for (const f of flashcards) {
    if (vusFlashcard.has(f.id)) erreurs.push(err('FLASHCARD_DUPLIQUEE', `Identifiant de flashcard dupliqué : « ${f.id} »`))
    vusFlashcard.add(f.id)

    if (f.notions.length === 0)
      erreurs.push(err('FLASHCARD_ORPHELINE', `La flashcard « ${f.id} » ne référence aucune notion`))
    for (const nid of f.notions)
      if (!idsNotions.has(nid))
        erreurs.push(err('FLASHCARD_NOTION_INCONNUE', `La flashcard « ${f.id} » référence la notion inexistante « ${nid} »`))
    if (!idsCategories.has(f.categorie))
      erreurs.push(err('FLASHCARD_CATEGORIE_INCONNUE', `La flashcard « ${f.id} » a une catégorie inexistante`))
    if (!f.recto.trim() || !f.verso.trim())
      erreurs.push(err('FLASHCARD_VIDE', `La flashcard « ${f.id} » a un recto ou un verso vide`))
  }

  const typesFlashcards = new Set(flashcards.map((f) => f.type))
  for (const t of ['definition', 'distinction', 'composition', 'relation', 'application', 'reconnaissance'])
    if (!typesFlashcards.has(t as never))
      erreurs.push(err('TYPE_FLASHCARD_ABSENT', `Aucune flashcard de type « ${t} » : le cours en exige six types`))

  // --- Quiz ---------------------------------------------------------------
  const vusQuiz = new Set<string>()
  for (const q of quiz) {
    if (vusQuiz.has(q.id)) erreurs.push(err('QUIZ_DUPLIQUE', `Identifiant de quiz dupliqué : « ${q.id} »`))
    vusQuiz.add(q.id)

    for (const nid of q.notions)
      if (!idsNotions.has(nid))
        erreurs.push(err('QUIZ_NOTION_INCONNUE', `Le quiz « ${q.id} » référence la notion inexistante « ${nid} »`))
    if (q.notions.length === 0)
      erreurs.push(err('QUIZ_ORPHELIN', `Le quiz « ${q.id} » ne référence aucune notion`))
    if (!q.correction.trim())
      erreurs.push(err('QUIZ_SANS_CORRECTION', `Le quiz « ${q.id} » n'a pas de correction`))

    if (q.type === 'qcm' || q.type === 'multiple' || q.type === 'vrai-faux') {
      const correctes = q.options.filter((o) => o.correcte)
      if (correctes.length === 0)
        erreurs.push(err('QUIZ_SANS_BONNE_REPONSE', `Le quiz « ${q.id} » n'a aucune option correcte`))
      if (q.type === 'qcm' && correctes.length !== 1)
        erreurs.push(err('QCM_MULTIPLE', `Le QCM « ${q.id} » a ${correctes.length} réponses correctes au lieu d'une`))
      for (const o of q.options)
        if (!o.correcte && !o.explication?.trim())
          erreurs.push(
            err(
              'OPTION_SANS_EXPLICATION',
              `Le quiz « ${q.id} », option « ${o.id} » : une réponse fausse doit expliquer POURQUOI elle est fausse`,
            ),
          )
    }

    if (q.type === 'texte-a-trous') {
      const trous = q.segments.filter((s) => s === null).length
      if (trous !== q.reponses.length)
        erreurs.push(err('TROUS_INCOHERENTS', `Le quiz « ${q.id} » a ${trous} trous pour ${q.reponses.length} réponses`))
      for (const r of q.reponses)
        if (!q.propositions.includes(r))
          erreurs.push(err('REPONSE_HORS_PROPOSITIONS', `Le quiz « ${q.id} » : la réponse « ${r} » n'est pas proposée`))
    }

    if (q.type === 'categorisation') {
      const cibles = new Set(q.categoriesCibles.map((c) => c.id))
      for (const e of q.elements)
        if (!cibles.has(e.cible))
          erreurs.push(err('CIBLE_INCONNUE', `Le quiz « ${q.id} » : l'élément « ${e.texte} » vise une catégorie inexistante`))
    }

    if ((q.type === 'classement' || q.type === 'ordonnancement') && q.ordreCorrect.length < 3)
      avertissements.push(warn('ORDRE_COURT', `Le quiz d'ordre « ${q.id} » compte moins de 3 éléments`))
  }

  const typesQuiz = new Set(quiz.map((q) => q.type))
  for (const t of ['qcm', 'multiple', 'vrai-faux', 'association', 'classement', 'categorisation', 'ordonnancement', 'texte-a-trous'])
    if (!typesQuiz.has(t as never))
      erreurs.push(err('TYPE_QUIZ_ABSENT', `Aucun quiz de type « ${t} » : le cahier des charges en exige huit`))

  // --- Cas ----------------------------------------------------------------
  for (const c of cas) {
    if (!idsCategories.has(c.categorie))
      erreurs.push(err('CAS_CATEGORIE_INCONNUE', `Le cas « ${c.id} » a une catégorie inexistante`))
    if (c.outilsPertinents.length === 0)
      erreurs.push(err('CAS_SANS_OUTIL', `Le cas « ${c.id} » ne déclare aucun outil pertinent`))
    for (const nid of [...c.notions, ...c.outilsPertinents, ...c.outilsNonPertinents])
      if (!idsNotions.has(nid))
        erreurs.push(err('CAS_NOTION_INCONNUE', `Le cas « ${c.id} » référence la notion inexistante « ${nid} »`))
    for (const q of c.questions)
      for (const nid of q.notions)
        if (!idsNotions.has(nid))
          erreurs.push(err('CAS_QUESTION_NOTION_INCONNUE', `Le cas « ${c.id} », question « ${q.id} » : notion inexistante « ${nid} »`))
    if (c.extraits.length === 0)
      avertissements.push(warn('CAS_SANS_EXTRAIT', `Le cas « ${c.id} » n'a aucun extrait analysable`))
    for (const s of c.sources)
      if (!idsSources.has(s)) erreurs.push(err('SOURCE_INCONNUE', `Le cas « ${c.id} » cite la source inexistante « ${s} »`))
  }

  // --- Parcours et combinaisons ------------------------------------------
  for (const p of parcours) {
    if (p.etapes.length < 3)
      avertissements.push(warn('PARCOURS_COURT', `Le parcours « ${p.id} » compte moins de 3 étapes`))
    for (const e of p.etapes)
      if (!idsNotions.has(e.notion))
        erreurs.push(err('PARCOURS_NOTION_INCONNUE', `Le parcours « ${p.id} » référence la notion inexistante « ${e.notion} »`))
  }

  for (const c of combinaisons) {
    for (const nid of [...c.entrees, ...c.sorties])
      if (!idsNotions.has(nid))
        erreurs.push(err('COMBINAISON_NOTION_INCONNUE', `La combinaison « ${c.id} » référence la notion inexistante « ${nid} »`))
    if (c.entrees.length < 2)
      erreurs.push(err('COMBINAISON_TROP_SIMPLE', `La combinaison « ${c.id} » doit assembler au moins deux notions`))
    if (c.question && !idsQuestions.has(c.question))
      erreurs.push(err('COMBINAISON_QUESTION_INCONNUE', `La combinaison « ${c.id} » référence la question inexistante « ${c.question} »`))
  }

  // --- Mini-jeux ----------------------------------------------------------
  const verifierNotion = (nid: string, contexte: string) => {
    if (!idsNotions.has(nid)) erreurs.push(err('JEU_NOTION_INCONNUE', `${contexte} référence la notion inexistante « ${nid} »`))
  }

  for (const item of jeux.quelOutil) {
    verifierNotion(item.outil, `Le jeu « quel outil » (« ${item.situation} »)`)
    for (const d of item.distracteurs) verifierNotion(d, `Un distracteur du jeu « quel outil »`)
    if (item.distracteurs.includes(item.outil))
      erreurs.push(err('DISTRACTEUR_CORRECT', `« ${item.situation} » : le bon outil figure aussi parmi les distracteurs`))
  }
  for (const s of jeux.porterArena)
    for (const n of s.notes) {
      verifierNotion(n.force, `Porter Arena « ${s.id} »`)
      if (!n.justification.trim())
        erreurs.push(err('NOTE_SANS_JUSTIFICATION', `Porter Arena « ${s.id} » : une note sans justification`))
    }
  for (const nid of jeux.chaineValeurOrdre) verifierNotion(nid, 'Le jeu chaîne de valeur')
  for (const l of jeux.chaineValeurLeviers) verifierNotion(l.activite, `Le levier « ${l.element} »`)
  for (const b of jeux.bmc) {
    verifierNotion(b.bloc, `Le jeu BMC (« ${b.element} »)`)
    for (const alt of b.blocsAcceptes ?? []) verifierNotion(alt, `Un bloc accepté du jeu BMC`)
  }
  for (const d of jeux.duels) {
    verifierNotion(d.gauche.notion, `Le duel « ${d.id} »`)
    verifierNotion(d.droite.notion, `Le duel « ${d.id} »`)
    if (d.cartes.length < 4)
      avertissements.push(warn('DUEL_COURT', `Le duel « ${d.id} » compte moins de 4 cartes`))
    for (const c of d.cartes)
      if (!c.explication.trim())
        erreurs.push(err('CARTE_SANS_EXPLICATION', `Le duel « ${d.id} » : une carte sans explication`))
  }
  for (const c of jeux.chainesLogiques) for (const nid of c.ordre) verifierNotion(nid, `La chaîne « ${c.id} »`)
  for (const m of jeux.maillonsManquants) {
    verifierNotion(m.reponse, `Le maillon manquant « ${m.id} »`)
    for (const d of m.distracteurs) verifierNotion(d, `Un distracteur de « ${m.id} »`)
    for (const n of m.chaine) if (n !== null) verifierNotion(n, `La chaîne de « ${m.id} »`)
    if (!m.chaine.includes(null))
      erreurs.push(err('MAILLON_SANS_TROU', `Le maillon manquant « ${m.id} » n'a pas de trou`))
  }
  for (const p of jeux.phrasesExamen) {
    for (const nid of p.notions) verifierNotion(nid, `La phrase d'examen « ${p.id} »`)
    const trous = p.segments.filter((s) => s === null).length
    if (trous !== p.reponses.length)
      erreurs.push(err('TROUS_INCOHERENTS', `La phrase « ${p.id} » a ${trous} trous pour ${p.reponses.length} réponses`))
    for (const r of p.reponses)
      if (!p.propositions.includes(r))
        erreurs.push(err('REPONSE_HORS_PROPOSITIONS', `La phrase « ${p.id} » : la réponse « ${r} » n'est pas proposée`))
  }

  // --- Couverture pédagogique --------------------------------------------
  const notionsCouvertes = new Set<string>()
  for (const f of flashcards) f.notions.forEach((n) => notionsCouvertes.add(n))
  for (const q of quiz) q.notions.forEach((n) => notionsCouvertes.add(n))
  for (const q of questions) q.notions.forEach((n) => notionsCouvertes.add(n))
  for (const n of notions)
    if (n.priorite === 1 && !notionsCouvertes.has(n.id))
      avertissements.push(
        warn('PRIORITE1_SANS_ENTRAINEMENT', `La notion prioritaire « ${n.id} » n'apparaît dans aucune flashcard, quiz ou question`),
      )

  return { erreurs, avertissements, ok: erreurs.length === 0 }
}

export interface RapportCouverture {
  notions: number
  notionsPrioritaires: number
  categories: number
  relations: number
  typesRelationsUtilises: number
  questionsOfficielles: number
  questionsProbables: number
  questionsGuidees: number
  flashcards: number
  quiz: number
  typesQuiz: number
  cas: number
  parcours: number
  combinaisons: number
  duels: number
  jeux: number
  referencesCassees: number
  notionsOrphelines: number
  questionsOrphelines: number
  notionsRecherchables: number
}

export function rapportCouverture(): RapportCouverture {
  const { erreurs, avertissements } = validerCorpus()
  const connectees = new Set<string>()
  for (const r of relations) {
    connectees.add(r.source)
    connectees.add(r.target)
  }

  const nbJeux =
    (jeux.interneExterne.length ? 1 : 0) +
    (jeux.pestel.length ? 1 : 0) +
    (jeux.quelOutil.length ? 1 : 0) +
    (jeux.porterArena.length ? 1 : 0) +
    (jeux.saf.length ? 1 : 0) +
    (jeux.chaineValeurLeviers.length ? 1 : 0) +
    (jeux.bmc.length ? 1 : 0) +
    (jeux.duels.length ? 1 : 0) +
    (jeux.chainesLogiques.length ? 1 : 0) +
    (jeux.maillonsManquants.length ? 1 : 0) +
    (jeux.phrasesExamen.length ? 1 : 0)

  return {
    notions: notions.length,
    notionsPrioritaires: notions.filter((n) => n.priorite === 1).length,
    categories: categories.length,
    relations: relations.length,
    typesRelationsUtilises: new Set(relations.map((r) => r.type)).size,
    questionsOfficielles: questions.filter((q) => q.origine === 'officielle').length,
    questionsProbables: questions.filter((q) => q.origine === 'probable').length,
    questionsGuidees: questions.filter((q) => q.guidage).length,
    flashcards: flashcards.length,
    quiz: quiz.length,
    typesQuiz: new Set(quiz.map((q) => q.type)).size,
    cas: cas.length,
    parcours: parcours.length,
    combinaisons: combinaisons.length,
    duels: jeux.duels.length,
    jeux: nbJeux,
    referencesCassees: erreurs.filter((e) => e.code.includes('INCONNU')).length,
    notionsOrphelines: notions.filter((n) => !connectees.has(n.id)).length,
    questionsOrphelines: questions.filter((q) => q.notions.length === 0).length,
    notionsRecherchables: notions.length - avertissements.filter((a) => a.code === 'NON_RECHERCHABLE').length,
  }
}
