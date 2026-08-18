/**
 * MODÈLE DE CONTENU — STRAT
 * =========================
 *
 * Règle fondamentale du projet : **une seule source de vérité par notion**.
 * Une notion possède un identifiant stable (`NotionId`). Tout le reste du corpus
 * (flashcards, quiz, questions, cas, parcours, combinaisons, jeux) *référence*
 * cette notion — jamais ne recopie sa définition.
 *
 * Règle de fidélité : les définitions marquées `definitionCours` sont issues des
 * supports. Elles ne doivent jamais être reformulées « pour faire plus élégant ».
 * Les divergences entre supports sont conservées dans `variantes`.
 */

// ---------------------------------------------------------------------------
// Identifiants
// ---------------------------------------------------------------------------

/** Identifiant permanent d'une notion. Ne jamais renommer : la progression locale en dépend. */
export type NotionId = string
export type CategorieId = string
export type QuestionId = string
export type FlashcardId = string
export type CasId = string
export type ParcoursId = string
export type CombinaisonId = string
export type QuizId = string
export type SourceId = string
export type JeuId = string

// ---------------------------------------------------------------------------
// Provenance et priorité
// ---------------------------------------------------------------------------

/**
 * Les trois niveaux de provenance de l'encyclopédie (§0.3).
 * - `cours` 📘 : enseigné dans les supports → à restituer fidèlement.
 * - `interpretation` 🔎 : lien logique reconstruit entre plusieurs éléments.
 * - `complement` 📚 : apport académique hors supports → jamais présenté comme « du cours ».
 */
export type Provenance = 'cours' | 'interpretation' | 'complement'

/** Priorité d'examen (§0.5). 1 = indispensable, 2 = très important, 3 = complément. */
export type Priorite = 1 | 2 | 3

/** Nature de l'entrée, sert au filtrage de l'index. */
export type TypeNotion =
  | 'outil'
  | 'notion'
  | 'modele'
  | 'methode'
  | 'acronyme'
  | 'auteur'
  | 'chiffre'
  | 'cadre-legal'
  | 'cas'

// ---------------------------------------------------------------------------
// Éléments composites
// ---------------------------------------------------------------------------

export interface Exemple {
  /** Texte de l'exemple, en 1 à 3 phrases. */
  texte: string
  /** Source du cours si connue. */
  source?: SourceId
  /** Cas complet associé, si l'exemple en provient. */
  cas?: CasId
}

export interface Variante {
  /** Ce qui varie (ex. « le "E" du PESTEL »). */
  sujet: string
  /** Les formulations rencontrées, avec le document qui les emploie. */
  formulations: { libelle: string; ou: string }[]
  /** Comment articuler les variantes, et quoi dire à l'examen. */
  explication: string
  /** Consigne d'examen : quelle formulation privilégier. */
  consigneExamen?: string
}

export interface EtapeMethode {
  titre: string
  detail?: string
}

export interface Piege {
  /** L'erreur à éviter, formulée courte. */
  erreur: string
  /** Pourquoi c'est faux. */
  pourquoi: string
  /** Test mental ou réflexe pour ne pas tomber dedans. */
  test?: string
}

export interface UsageNotion {
  /** « Utilise cet outil si… » */
  utiliserSi: string[]
  /** « Ne l'utilise pas pour… » */
  nePasUtiliserPour: string[]
}

// ---------------------------------------------------------------------------
// Relations — objets de première classe
// ---------------------------------------------------------------------------

export type TypeRelation =
  | 'ALIMENTE'
  | 'EST_ALIMENTE_PAR'
  | 'PRECEDE'
  | 'SUIT'
  | 'FAIT_PARTIE_DE'
  | 'CONTIENT'
  | 'UTILISE'
  | 'EST_UTILISE_PAR'
  | 'S_OPPOSE_A'
  | 'NE_PAS_CONFONDRE'
  | 'COMPLETE'
  | 'DEPEND_DE'
  | 'RENFORCE'
  | 'ILLUSTRE'
  | 'EST_EXEMPLE_DE'
  | 'EST_APPLIQUE_DANS'
  | 'PEUT_CONDUIRE_A'

export interface Relation {
  source: NotionId
  target: NotionId
  type: TypeRelation
  /** Pourquoi cette relation existe. Jamais vide : une flèche sans phrase n'apprend rien. */
  description: string
}

/** Métadonnées d'affichage et de validation d'un type de relation. */
export interface MetaRelation {
  type: TypeRelation
  /** Libellé affiché depuis la notion source. */
  libelle: string
  /** Type réciproque, s'il existe (permet d'afficher la relation dans les deux sens). */
  inverse?: TypeRelation
  /** Une relation symétrique se lit à l'identique dans les deux sens. */
  symetrique: boolean
  /**
   * `true` si un cycle sur ce type de relation est une erreur de modélisation
   * (ex. A PRECEDE B PRECEDE A est incohérent).
   */
  acyclique: boolean
  groupe: 'flux' | 'sequence' | 'composition' | 'usage' | 'contraste' | 'renfort'
}

// ---------------------------------------------------------------------------
// Notion — la brique centrale
// ---------------------------------------------------------------------------

export interface Notion {
  id: NotionId
  /** Slug d'URL. Par convention identique à l'id. */
  slug: string
  nom: string
  /** Nom court pour les listes serrées et les nœuds du graphe. */
  nomCourt?: string
  acronyme?: string
  /** Synonymes, traductions, variantes orthographiques — utilisés par la recherche. */
  aliases?: string[]

  categorie: CategorieId
  sousCategorie?: string
  type: TypeNotion
  priorite: Priorite

  /** Définition telle que le cours la formule. Ne pas réécrire. */
  definitionCours: string
  /** Reformulation pédagogique — c'est ici, et seulement ici, qu'on simplifie. */
  explicationSimple: string
  /** Pourquoi cette notion existe, quel problème elle résout. */
  pourquoiExiste?: string
  /** À quoi elle sert concrètement. */
  objectif?: string
  origine?: string
  auteur?: string
  annee?: string

  usage?: UsageNotion
  /** Procédure d'application, étape par étape. */
  commentUtiliser?: EtapeMethode[]

  exemples?: Exemple[]
  /** Formulation compacte et mémorisable, réutilisable telle quelle à l'oral. */
  phraseExamen?: string
  pieges?: Piege[]
  limites?: string[]
  variantes?: Variante[]
  /** Chiffres à citer pour crédibiliser. */
  chiffres?: { libelle: string; valeur: string; source?: SourceId }[]

  motsCles?: string[]
  sources: SourceId[]
  /** Niveau de provenance dominant de la fiche. */
  provenance: Provenance
}

// ---------------------------------------------------------------------------
// Catégories (chapitres)
// ---------------------------------------------------------------------------

export interface Categorie {
  id: CategorieId
  nom: string
  description: string
  /** Ordre d'affichage dans la vue « Chapitres ». */
  ordre: number
  /** Catégorie parente, pour la carte progressive. */
  parent?: CategorieId
}

// ---------------------------------------------------------------------------
// Questions
// ---------------------------------------------------------------------------

/** Verbes de consigne (fiche 15, §3). Chacun commande une forme de réponse. */
export type VerbeConsigne =
  | 'definir'
  | 'expliquer'
  | 'analyser'
  | 'discuter'
  | 'justifier'
  | 'comparer'
  | 'recommander'
  | 'citer'

export interface BlocPlan {
  id: string
  libelle: string
}

/** Étapes guidées d'une question ouverte (menu S'ENTRAÎNER → Questions ouvertes). */
export interface GuidageQuestion {
  /** Étape 1 — quel est le verbe de consigne ? */
  verbeAttendu: VerbeConsigne
  /** Ce que ce verbe implique (aide affichée après la réponse). */
  ceQueLeVerbeImplique: string[]
  /** Étape 2 — notions à mobiliser (bonnes réponses) et distracteurs. */
  notionsAttendues: NotionId[]
  notionsDistracteurs: NotionId[]
  /** Étape 3 — outil(s) principal(aux) à sortir. */
  outilsAttendus: NotionId[]
  /** Étape 4 — plan à reconstituer dans l'ordre. */
  planAttendu: BlocPlan[]
  /** Étape 5 — arguments pertinents / non pertinents. */
  arguments: { texte: string; pertinent: boolean; pourquoi?: string }[]
  /** Étape 6 — exemples proposés, celui du cours étant prioritaire. */
  exemplesProposes: { texte: string; adapte: boolean; cas?: CasId; pourquoi?: string }[]
  /** Étape 7 — arbitrage à identifier. */
  arbitrages: { texte: string; correct: boolean }[]
  /** Étape 9 — checklist d'auto-correction. */
  checklist: string[]
}

export interface Question {
  id: QuestionId
  /** `officielle` = les 22 corrigées ; `probable` = les 55 d'entraînement. */
  origine: 'officielle' | 'probable'
  /** Numéro dans son fichier source (1..22 ou 1..55). */
  numero: number
  enonce: string
  /** Réponse de référence, fidèle au corrigé. */
  reponse: string
  /** Notions mobilisées — références, jamais de définitions recopiées. */
  notions: NotionId[]
  /** Phrase-type réutilisable à l'oral. */
  phraseType?: string
  /** Mémo de mémorisation. */
  memo?: string
  /** Pièges signalés par le corrigé. */
  piege?: string
  /** Comment construire la réponse (fiche 14). */
  commentConstruire?: string
  categorie: CategorieId
  priorite: Priorite
  /** Présent seulement sur les questions travaillées en mode guidé. */
  guidage?: GuidageQuestion
  sources: SourceId[]
}

// ---------------------------------------------------------------------------
// Flashcards
// ---------------------------------------------------------------------------

export type TypeFlashcard =
  | 'definition'
  | 'distinction'
  | 'composition'
  | 'relation'
  | 'application'
  | 'reconnaissance'

export interface Flashcard {
  id: FlashcardId
  type: TypeFlashcard
  recto: string
  verso: string
  /** Notion(s) dont dépend la carte. La première est la notion « propriétaire ». */
  notions: NotionId[]
  priorite: Priorite
  categorie: CategorieId
}

// ---------------------------------------------------------------------------
// Quiz
// ---------------------------------------------------------------------------

export type TypeQuiz =
  | 'qcm'
  | 'multiple'
  | 'vrai-faux'
  | 'association'
  | 'classement'
  | 'categorisation'
  | 'ordonnancement'
  | 'texte-a-trous'

export interface OptionQuiz {
  id: string
  texte: string
  correcte: boolean
  /** Obligatoire sur les options fausses : « pourquoi c'est faux » et non « mauvaise réponse ». */
  explication?: string
}

export interface QuizBase {
  id: QuizId
  type: TypeQuiz
  enonce: string
  notions: NotionId[]
  categorie: CategorieId
  priorite: Priorite
  /** Explication affichée après correction, quelle que soit la réponse. */
  correction: string
}

export interface QuizChoix extends QuizBase {
  type: 'qcm' | 'multiple' | 'vrai-faux'
  options: OptionQuiz[]
}

export interface QuizAssociation extends QuizBase {
  type: 'association'
  paires: { gauche: string; droite: string }[]
}

export interface QuizOrdre extends QuizBase {
  type: 'classement' | 'ordonnancement'
  /** Éléments dans le bon ordre. Ils seront mélangés à l'affichage. */
  ordreCorrect: string[]
  /** Pourquoi cet ordre et pas un autre. */
  justificationOrdre: string
}

export interface QuizCategorisation extends QuizBase {
  type: 'categorisation'
  categoriesCibles: { id: string; libelle: string }[]
  elements: { texte: string; cible: string; explication?: string }[]
}

export interface QuizTexteATrous extends QuizBase {
  type: 'texte-a-trous'
  /** Segments de texte ; `null` marque un trou dont la réponse est dans `reponses`. */
  segments: (string | null)[]
  reponses: string[]
  /** Propositions affichées (incluent les bonnes réponses). */
  propositions: string[]
}

export type Quiz =
  | QuizChoix
  | QuizAssociation
  | QuizOrdre
  | QuizCategorisation
  | QuizTexteATrous

// ---------------------------------------------------------------------------
// Cas pratiques
// ---------------------------------------------------------------------------

export type MarqueurCas =
  | 'EXTERNE'
  | 'INTERNE'
  | 'CHIFFRE'
  | 'RESSOURCE'
  | 'RISQUE'
  | 'PARTIE_PRENANTE'
  | 'OPPORTUNITE'
  | 'MENACE'

export interface ExtraitCas {
  id: string
  texte: string
  /** Marqueurs corrects pour cet extrait (mode ANALYSER). */
  marqueurs: MarqueurCas[]
  /** Pourquoi ces marqueurs. */
  explication: string
}

export interface QuestionCas {
  id: string
  enonce: string
  reponse: string
  notions: NotionId[]
}

export interface Cas {
  id: CasId
  nom: string
  sousTitre: string
  categorie: CategorieId
  priorite: Priorite
  /** Texte du cas, en paragraphes. */
  texte: string[]
  /** Extraits sélectionnables en mode ANALYSER. */
  extraits: ExtraitCas[]
  /** Outils pertinents à identifier, et outils non pertinents. */
  outilsPertinents: NotionId[]
  outilsNonPertinents: NotionId[]
  /** Questions du cas avec leur corrigé. */
  questions: QuestionCas[]
  /** Chiffres-clés du cas. */
  chiffres?: { libelle: string; valeur: string }[]
  notions: NotionId[]
  sources: SourceId[]
}

// ---------------------------------------------------------------------------
// Parcours et combinaisons
// ---------------------------------------------------------------------------

export interface EtapeParcours {
  notion: NotionId
  /** Ce que cette étape apporte dans le raisonnement. */
  role: string
}

export interface Parcours {
  id: ParcoursId
  nom: string
  description: string
  /** La question à laquelle le parcours répond. */
  question: string
  etapes: EtapeParcours[]
  priorite: Priorite
}

export interface Combinaison {
  id: CombinaisonId
  nom: string
  /** Les notions combinées. */
  entrees: NotionId[]
  /** Ce que la combinaison produit. */
  sorties: NotionId[]
  explication: string
  /** Schéma texte affiché en monospace. */
  schema: string
  exemple: string
  /** Question d'examen associée. */
  question?: QuestionId
  priorite: Priorite
}

// ---------------------------------------------------------------------------
// Duels « Ne pas confondre »
// ---------------------------------------------------------------------------

export interface Duel {
  id: string
  gauche: { notion: NotionId; libelle: string; critere: string }
  droite: { notion: NotionId; libelle: string; critere: string }
  /** Cartes à distribuer d'un côté ou de l'autre. */
  cartes: { texte: string; cote: 'gauche' | 'droite'; explication: string }[]
  priorite: Priorite
}

// ---------------------------------------------------------------------------
// Mini-jeux
// ---------------------------------------------------------------------------

export interface ItemInterneExterne {
  texte: string
  origine: 'INTERNE' | 'EXTERNE'
  /** Second temps du jeu : qualification SWOT. */
  swot: 'FORCE' | 'FAIBLESSE' | 'OPPORTUNITE' | 'MENACE'
  explication: string
}

export interface ItemPestel {
  texte: string
  /** Lettre du PESTEL : P, E, S, T, EE (environnemental et éthique), L. */
  facteur: 'P' | 'E' | 'S' | 'T' | 'EE' | 'L'
  /** Une même tendance peut être O ou M selon l'entreprise : le contexte est donné. */
  contexte: string
  qualification: 'OPPORTUNITE' | 'MENACE'
  explication: string
}

export interface ItemQuelOutil {
  situation: string
  outil: NotionId
  distracteurs: NotionId[]
  explication: string
}

export interface SecteurPorterArena {
  id: string
  nom: string
  description: string
  notes: {
    force: NotionId
    note: 0 | 1 | 2 | 3 | 4 | 5
    justification: string
  }[]
  conclusion: string
}

export interface ItemSaf {
  affirmation: string
  critere: 'SOUHAITABILITE' | 'ACCEPTABILITE' | 'FAISABILITE'
  explication: string
}

export interface ItemBmc {
  element: string
  bloc: NotionId
  /** Certains éléments relèvent légitimement de plusieurs blocs. */
  blocsAcceptes?: NotionId[]
  explication: string
}

export interface ChaineLogique {
  id: string
  intitule: string
  ordre: NotionId[]
  explication: string
}

export interface MaillonManquant {
  id: string
  chaine: (NotionId | null)[]
  reponse: NotionId
  distracteurs: NotionId[]
  explication: string
}

export interface PhraseATrous {
  id: string
  segments: (string | null)[]
  reponses: string[]
  propositions: string[]
  notions: NotionId[]
  explication: string
}

export interface ItemChaineValeur {
  element: string
  activite: NotionId
  explication: string
}

export interface Jeux {
  interneExterne: ItemInterneExterne[]
  pestel: ItemPestel[]
  quelOutil: ItemQuelOutil[]
  porterArena: SecteurPorterArena[]
  saf: ItemSaf[]
  chaineValeurOrdre: NotionId[]
  chaineValeurLeviers: ItemChaineValeur[]
  bmc: ItemBmc[]
  duels: Duel[]
  chainesLogiques: ChaineLogique[]
  maillonsManquants: MaillonManquant[]
  phrasesExamen: PhraseATrous[]
}

// ---------------------------------------------------------------------------
// Méthode d'examen
// ---------------------------------------------------------------------------

export interface EtapeLisaec {
  lettre: string
  nom: string
  action: string
  question: string
}

export interface MethodeVerbe {
  verbe: VerbeConsigne
  libelle: string
  attendu: string
  piege: string
}

export interface Methode {
  lisaec: EtapeLisaec[]
  dei: { lettre: string; nom: string; role: string }[]
  verbes: MethodeVerbe[]
  planUniversel: string[]
  checklistExamen: string[]
  erreursDeForme: string[]
  formulesConclusion: string[]
  blocsNotesStructurees: string[]
}

// ---------------------------------------------------------------------------
// Sources
// ---------------------------------------------------------------------------

export interface Source {
  id: SourceId
  libelle: string
  /** Rang dans la hiérarchie des sources (1 = encyclopédie, 7 = contenus secondaires). */
  rang: number
  /** Fichier du dossier `sources/` si applicable. */
  fichier?: string
}

// ---------------------------------------------------------------------------
// Corpus complet
// ---------------------------------------------------------------------------

export interface Corpus {
  version: number
  categories: Categorie[]
  notions: Notion[]
  relations: Relation[]
  questions: Question[]
  flashcards: Flashcard[]
  quiz: Quiz[]
  cas: Cas[]
  parcours: Parcours[]
  combinaisons: Combinaison[]
  jeux: Jeux
  methode: Methode
  sources: Source[]
}
