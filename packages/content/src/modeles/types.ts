/**
 * MODÈLES ET ANALYSE GUIDÉE
 * =========================
 *
 * Deux corpus jumeaux, pensés pour quelqu'un qui part de zéro :
 *
 *   · `modeles` — les 25 schémas du cours, expliqués **case par case**. Chaque
 *     case du dessin porte un identifiant, et cet identifiant est aussi celui
 *     du paragraphe qui l'explique : cliquer sur la case ouvre son explication.
 *
 *   · `analyse` — un cas unique déroulé de bout en bout, étape par étape. Chaque
 *     étape mobilise des modèles et renvoie vers les cases précises utilisées.
 *
 * Règle de provenance, identique au reste du corpus : 📘 cours · 🔎 raisonnement
 * · 📚 hors cours. Une divergence entre supports se **conserve et se signale**,
 * jamais ne s'uniformise.
 */

import type { NotionId } from '../types'

export type ModeleId = string
export type PointId = string
export type EtapeId = string

// ---------------------------------------------------------------------------
// Le schéma : un dessin déclaratif, rendu en SVG
// ---------------------------------------------------------------------------

/**
 * Toutes les coordonnées s'expriment dans un repère de **1000 unités de large**
 * et de `h` unités de haut. L'origine est en haut à gauche. Le rendu met le
 * dessin à l'échelle de la page : on raisonne donc en proportions, jamais en
 * pixels.
 */
export type TonSchema =
  /** Boîte ordinaire. */
  | 'neutre'
  /** Le cœur du schéma, ce qu'il faut regarder en premier. */
  | 'accent'
  /** Une issue favorable, une bonne pratique. */
  | 'positif'
  /** Un point de vigilance. */
  | 'alerte'
  /** Une issue défavorable, une erreur, un risque. */
  | 'danger'
  /** Un élément de décor : titre de bande, note, colonne d'axe. */
  | 'sourd'

export type FormeSchema =
  | 'boite'
  /** Une décision, un test : losange. */
  | 'losange'
  /** Un cercle — utilisé par le donut et les schémas concentriques. */
  | 'cercle'
  /** Une bande pleine largeur (chaîne de valeur, mission du BMC durable). */
  | 'bande'
  /** Un cadre de regroupement, dessiné derrière les autres, sans remplissage. */
  | 'cadre'

/** Face d'un nœud par laquelle un lien entre ou sort. */
export type FaceSchema = 'auto' | 'haut' | 'bas' | 'gauche' | 'droite'

export interface NoeudSchema {
  /** Unique dans le schéma. Sert d'ancre et de cible de lien. */
  id: string
  titre: string
  /** Lignes secondaires, déjà découpées : le rendu ne coupe jamais un mot. */
  lignes?: string[]
  x: number
  y: number
  /** Largeur et hauteur, dans le même repère. */
  l: number
  h: number
  ton?: TonSchema
  forme?: FormeSchema
  /**
   * Identifiant du point expliqué plus bas dans la fiche. Quand il est présent,
   * la case devient cliquable et mène à son explication.
   */
  point?: PointId
}

export interface LienSchema {
  de: string
  vers: string
  libelle?: string
  trait?: 'plein' | 'pointille'
  depuis?: FaceSchema
  arrive?: FaceSchema
  /** Tracé en équerre plutôt qu'en ligne droite. */
  coude?: 'v-h' | 'h-v'
  /** Relation sans direction : le trait ne porte pas de pointe. */
  sansFleche?: boolean
  ton?: TonSchema
}

export interface AxeSchema {
  libelle: string
  /** Extrémité basse (axe vertical) ou gauche (axe horizontal). */
  faible: string
  /** Extrémité haute ou droite. */
  fort: string
}

export interface SchemaModele {
  /** Hauteur du repère. La largeur vaut toujours 1000. */
  h: number
  noeuds: NoeudSchema[]
  liens: LienSchema[]
  /** Croix d'une matrice 2 × 2, tracée au centre du repère. */
  axes?: { x: AxeSchema; y: AxeSchema }
  /** Phrase affichée sous le dessin. */
  note?: string
  /**
   * Description en une phrase, lue par les lecteurs d'écran à la place du
   * dessin. Obligatoire : un schéma sans description est inaccessible.
   */
  description: string
}

// ---------------------------------------------------------------------------
// Un point du modèle : une case du dessin, expliquée
// ---------------------------------------------------------------------------

export interface PointModele {
  /** Repris tel quel par `NoeudSchema.point`. */
  id: PointId
  /** « P — Politique », « F × O », « Souhaitabilité »… */
  libelle: string
  /** Ce que cette case est, en une phrase. */
  cestQuoi: string
  /** La question à se poser devant cette case. */
  question: string
  /** Ce qu'on y met concrètement — le « quoi prendre en compte ». */
  quoiMettre: string[]
  /** Le même point, appliqué au fil rouge. */
  exemple: string
  /** L'erreur qu'on commet précisément sur cette case. */
  piege?: string
  /** Le réflexe qui évite ce piège. */
  reflexe?: string
  notions?: NotionId[]
}

// ---------------------------------------------------------------------------
// Les liens d'un modèle vers les autres
// ---------------------------------------------------------------------------

export interface LienModele {
  /** Modèle visé. */
  vers: ModeleId
  /** Nature du lien : ce que l'un fait à l'autre. */
  nature: 'alimente' | 'prolonge' | 'precise' | 'soppose' | 'partage'
  /** Pourquoi ce lien existe, en une phrase utilisable à l'oral. */
  explication: string
}

// ---------------------------------------------------------------------------
// La méthode : comment on fait, pas à pas
// ---------------------------------------------------------------------------

export interface GesteMethode {
  titre: string
  detail: string
  /** Ce qu'il ne faut pas faire à cette étape précise. */
  aEviter?: string
}

export interface PiegeModele {
  titre: string
  explication: string
  reflexe: string
}

/** Divergence entre supports du cours, conservée et signalée. */
export interface VarianteModele {
  sujet: string
  formulations: { texte: string; source: string }[]
  consigne: string
}

// ---------------------------------------------------------------------------
// Le modèle
// ---------------------------------------------------------------------------

export type FamilleModele =
  | 'cadrage'
  | 'externe'
  | 'interne'
  | 'synthese'
  | 'decision'
  | 'business-model'
  | 'durabilite'
  | 'numerique'

export interface Modele {
  id: ModeleId
  /** Numéro du schéma dans la série du cours (1 à 25). */
  numero: number
  slug: string
  nom: string
  /** Sous-titre du schéma d'origine. */
  sousTitre: string
  famille: FamilleModele
  /** Étape du processus où il sert. `transverse` pour les cadres. */
  etape: EtapeId | 'transverse'
  /** La question à laquelle le modèle répond. */
  question: string
  /** La réponse en une phrase. */
  enUnePhrase: string
  /** Ce que le modèle produit et qui servira à l'étape suivante. */
  produit: string
  /** Quand le sortir — et quand ne pas le sortir. */
  quandUtiliser: string[]
  quandNePasUtiliser?: string[]
  schema: SchemaModele
  points: PointModele[]
  methode: GesteMethode[]
  liens: LienModele[]
  pieges: PiegeModele[]
  variantes?: VarianteModele[]
  /** Application au fil rouge, en continu. */
  exemple: {
    titre: string
    /** L'état du cas au moment où ce modèle intervient. */
    situation: string
    /** Le déroulé : ce qu'on écrit, ligne par ligne. */
    deroule: { etiquette: string; contenu: string }[]
    /** Ce que ce passage a produit, et ce qu'on en fait ensuite. */
    conclusion: string
  }
  /** Formule prête à dire à l'oral. */
  phraseOral: string
  aRetenir: { cle: string; valeur: string }[]
  notions: NotionId[]
}

// ---------------------------------------------------------------------------
// L'analyse guidée
// ---------------------------------------------------------------------------

/** Un bloc du raisonnement, dans l'ordre où on le déroule. */
export type BlocAnalyse =
  | { t: 'texte'; contenu: string }
  | { t: 'question'; contenu: string }
  | { t: 'observation'; source: string; conclusion: string }
  | { t: 'tableau'; entetes: string[]; lignes: string[][]; legende?: string }
  | { t: 'liste'; titre?: string; items: string[] }
  | { t: 'schema'; schema: SchemaModele }
  | { t: 'encadre'; ton: 'info' | 'alerte' | 'succes' | 'erreur'; titre: string; contenu: string }
  | { t: 'oral'; contenu: string }
  /** Renvoi vers une case précise d'un modèle de l'autre section. */
  | { t: 'renvoi'; modele: ModeleId; point?: PointId; libelle: string }

export interface EtapeAnalyse {
  id: EtapeId
  numero: number
  slug: string
  titre: string
  /** La question de l'étape. */
  question: string
  /** Ce qu'elle consomme, ce qu'elle produit. */
  entree: string
  sortie: string
  /** Durée conseillée dans les 10 minutes de préparation. */
  minutes: string
  /** Modèles mobilisés à cette étape. */
  modeles: ModeleId[]
  /** La méthode de l'étape, avant le déroulé. */
  methode: GesteMethode[]
  /** Le raisonnement déroulé sur le cas. */
  raisonnement: BlocAnalyse[]
  /** Le livrable de l'étape, tel qu'on l'écrit sur son brouillon. */
  livrable: { titre: string; lignes: string[] }
  pieges: PiegeModele[]
}

export interface CasAnalyse {
  id: string
  nom: string
  /** L'énoncé, tel qu'il serait donné à l'examen. */
  enonce: string[]
  /** La question posée. */
  consigne: string
  /** Les chiffres de l'énoncé, et pourquoi chacun est là. */
  chiffres: { valeur: string; libelle: string; pourquoi: string }[]
}

export interface Analyse {
  cas: CasAnalyse
  etapes: EtapeAnalyse[]
}

// ---------------------------------------------------------------------------
// Le parcours d'apprentissage
// ---------------------------------------------------------------------------

export interface SeanceParcours {
  numero: number
  titre: string
  /** Durée en minutes. */
  duree: number
  objectif: string
  /** Ce qu'on lit dans cette séance. */
  modeles: ModeleId[]
  etapes?: EtapeId[]
  /** Comment vérifier qu'on a compris avant de passer à la suite. */
  controle: string
}

export interface ParcoursModeles {
  titre: string
  intro: string
  /** Durée totale annoncée, en heures. */
  heures: number
  seances: SeanceParcours[]
}
