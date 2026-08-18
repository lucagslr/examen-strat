import type { Categorie, MetaRelation, Source, TypeRelation } from './types'

/**
 * Catégories = chapitres du cours.
 * L'arborescence sert à la carte progressive : on n'affiche jamais tous les nœuds
 * d'un coup, on descend de `strategie` vers les feuilles.
 */
export const categories: Categorie[] = [
  {
    id: 'strategie',
    nom: 'Stratégie',
    description: "Racine du cours : de quoi parle-t-on quand on dit « stratégie » ?",
    ordre: 0,
  },
  {
    id: 'fondements',
    nom: 'Fondements',
    description: "Définition, terminologie, démarche globale, schéma des strates.",
    ordre: 1,
    parent: 'strategie',
  },
  {
    id: 'diagnostic',
    nom: 'Diagnostic',
    description: "Où en sommes-nous ? Parties prenantes, externe, interne, SWOT.",
    ordre: 2,
    parent: 'strategie',
  },
  {
    id: 'diagnostic-externe',
    nom: 'Diagnostic externe',
    description: "PESTEL (macro) et 5 (+1) forces de Porter (industrie), océan bleu/rouge.",
    ordre: 3,
    parent: 'diagnostic',
  },
  {
    id: 'diagnostic-interne',
    nom: 'Diagnostic interne',
    description: "Ressources, compétences, chaîne de valeur, système de valeur.",
    ordre: 4,
    parent: 'diagnostic',
  },
  {
    id: 'choix',
    nom: 'Choix stratégiques',
    description: "Évaluer et choisir : SAF, positionnement, options stratégiques.",
    ordre: 5,
    parent: 'strategie',
  },
  {
    id: 'business-model',
    nom: 'Business Model',
    description: "Comment l'entreprise crée, délivre, capte et répartit la valeur : RCOV, BMC.",
    ordre: 6,
    parent: 'strategie',
  },
  {
    id: 'business-model-durable',
    nom: 'Business Model durable',
    description: "Mission, impacts positifs, externalités négatives, métamorphose du BMC.",
    ordre: 7,
    parent: 'business-model',
  },
  {
    id: 'durabilite',
    nom: 'Durabilité',
    description: "Agenda 2030, ODD, limites planétaires, donut, modèles de durabilité.",
    ordre: 8,
    parent: 'strategie',
  },
  {
    id: 'circularite',
    nom: 'Circularité et achats',
    description: "Économie circulaire, 3R, éco-conception, achats IT responsables.",
    ordre: 9,
    parent: 'durabilite',
  },
  {
    id: 'numerique',
    nom: 'Numérique et sobriété',
    description: "Impacts du numérique, effet rebond, sobriété, économie de l'attention.",
    ordre: 10,
    parent: 'strategie',
  },
  {
    id: 'rne',
    nom: 'Responsabilité numérique (RNE)',
    description: "Quatre axes, données, IA, gouvernance, charte numérique.",
    ordre: 11,
    parent: 'numerique',
  },
  {
    id: 'accessibilite',
    nom: 'Accessibilité et inclusion',
    description: "WCAG/POUR, cadre légal, exclusion indirecte, utilisabilité.",
    ordre: 12,
    parent: 'numerique',
  },
  {
    id: 'pilotage',
    nom: 'Pilotage et méthode',
    description: "Objectifs, KPI, collecte de données utilisateurs, méthode d'examen.",
    ordre: 13,
    parent: 'strategie',
  },
]

/**
 * Hiérarchie des sources (consigne §3). En cas de contradiction, le rang le plus
 * faible l'emporte : l'encyclopédie prime sur tout, les flashcards ne priment sur rien.
 */
export const sources: Source[] = [
  {
    id: 'encyclopedie',
    libelle: 'Encyclopédie complète du cours',
    rang: 1,
    fichier: 'STRATEGIE_ENCYCLOPEDIE_COMPLETE.md',
  },
  { id: 'corrige-tp01', libelle: 'TP01 corrigé — parties prenantes du CIO', rang: 2 },
  { id: 'corrige-tp02a', libelle: 'TP02A corrigé — PESTEL Fukushima', rang: 2 },
  { id: 'corrige-tp02b', libelle: 'TP02B corrigé — eaux embouteillées (Porter, océan rouge)', rang: 2 },
  { id: 'corrige-tp04', libelle: 'TP04 corrigé — chaîne de valeur de la Smart', rang: 2 },
  { id: 'corrige-hansi', libelle: 'Corrigé mini-cas Le Marché de l’Oncle Hansi', rang: 2 },
  { id: 'cas-silverdigital', libelle: 'Exercice Accessibilité — SilverDigital SA (Tribune économique genevoise)', rang: 2 },
  {
    id: 'questions-officielles',
    libelle: "22 questions d'examen corrigées",
    rang: 3,
    fichier: '13_Questions_examens_corrigees.md',
  },
  {
    id: 'questions-probables',
    libelle: '55 nouvelles questions probables',
    rang: 3,
    fichier: '14_Nouvelles_questions_probables.md',
  },
  {
    id: 'methodologie',
    libelle: "Méthodologie de réponse à l'examen (L-I-S-A-E-C)",
    rang: 4,
    fichier: '15_Methodologie_reponse_examen.md',
  },
  {
    id: 'memos',
    libelle: 'Mémos et flashcards',
    rang: 5,
    fichier: '16_Memos_flashcards.md',
  },
  {
    id: 'synthese',
    libelle: 'Synthèse finale — quoi réviser en priorité',
    rang: 6,
    fichier: '17_Synthese_finale_quoi_reviser_en_priorite.md',
  },
  {
    id: 'glossaire',
    libelle: 'Glossaire complet du cours',
    rang: 6,
    fichier: 'FINALEMENT.md',
  },
  {
    id: 'carte-globale',
    libelle: 'Carte globale du cours',
    rang: 7,
    fichier: '00_Carte_globale_du_cours.md',
  },
  {
    id: 'fiche-collecte',
    libelle: 'Fiche — collecte de données utilisateurs',
    rang: 7,
    fichier: '11_Collecte_de_donnees_utilisateurs.md',
  },
  { id: 'guide-rne', libelle: 'Guide RNE — État de Genève', rang: 7 },
  { id: 'charte-inr', libelle: "Charte de l'Institut du Numérique Responsable", rang: 7 },
  { id: 'doc-donut', libelle: 'Comment concevoir des services numériques compatibles avec le donut', rang: 7 },
  { id: 'cours-recordon', libelle: 'Cours numérique & durabilité — J. Recordon (UNIL-CCD)', rang: 7 },
  { id: 'cours-leclere', libelle: 'Responsabilité numérique des entreprises — D. Leclère', rang: 7 },
  { id: 'metamorphose-bmc', libelle: 'La métamorphose du Business Model Canvas', rang: 7 },
  { id: 'heuristique', libelle: 'CC Heuristique stratégique — 16 questions', rang: 7 },
]

/**
 * Métadonnées des 17 types de relations.
 * `acyclique: true` signale les types où un cycle est une erreur de modélisation :
 * la validation du contenu échoue si elle en détecte un.
 */
export const metaRelations: MetaRelation[] = [
  { type: 'ALIMENTE', libelle: 'Alimente', inverse: 'EST_ALIMENTE_PAR', symetrique: false, acyclique: true, groupe: 'flux' },
  { type: 'EST_ALIMENTE_PAR', libelle: 'Est alimenté par', inverse: 'ALIMENTE', symetrique: false, acyclique: true, groupe: 'flux' },
  { type: 'PRECEDE', libelle: 'Précède', inverse: 'SUIT', symetrique: false, acyclique: true, groupe: 'sequence' },
  { type: 'SUIT', libelle: 'Suit', inverse: 'PRECEDE', symetrique: false, acyclique: true, groupe: 'sequence' },
  { type: 'FAIT_PARTIE_DE', libelle: 'Fait partie de', inverse: 'CONTIENT', symetrique: false, acyclique: true, groupe: 'composition' },
  { type: 'CONTIENT', libelle: 'Contient', inverse: 'FAIT_PARTIE_DE', symetrique: false, acyclique: true, groupe: 'composition' },
  { type: 'UTILISE', libelle: 'Utilise', inverse: 'EST_UTILISE_PAR', symetrique: false, acyclique: false, groupe: 'usage' },
  { type: 'EST_UTILISE_PAR', libelle: 'Est utilisé par', inverse: 'UTILISE', symetrique: false, acyclique: false, groupe: 'usage' },
  { type: 'S_OPPOSE_A', libelle: "S'oppose à", symetrique: true, acyclique: false, groupe: 'contraste' },
  { type: 'NE_PAS_CONFONDRE', libelle: 'Ne pas confondre avec', symetrique: true, acyclique: false, groupe: 'contraste' },
  { type: 'COMPLETE', libelle: 'Complète', symetrique: true, acyclique: false, groupe: 'renfort' },
  { type: 'DEPEND_DE', libelle: 'Dépend de', symetrique: false, acyclique: true, groupe: 'flux' },
  { type: 'RENFORCE', libelle: 'Renforce', symetrique: false, acyclique: false, groupe: 'renfort' },
  { type: 'ILLUSTRE', libelle: 'Illustre', inverse: 'EST_EXEMPLE_DE', symetrique: false, acyclique: true, groupe: 'usage' },
  { type: 'EST_EXEMPLE_DE', libelle: 'Est un exemple de', inverse: 'ILLUSTRE', symetrique: false, acyclique: true, groupe: 'usage' },
  { type: 'EST_APPLIQUE_DANS', libelle: "S'applique dans", symetrique: false, acyclique: false, groupe: 'usage' },
  { type: 'PEUT_CONDUIRE_A', libelle: 'Peut conduire à', symetrique: false, acyclique: false, groupe: 'flux' },
]

export const metaRelationParType = new Map<TypeRelation, MetaRelation>(
  metaRelations.map((m) => [m.type, m]),
)

/** Libellés d'affichage regroupés pour le bloc « Relations » d'une fiche notion. */
export const groupesRelationsAffichage: { titre: string; types: TypeRelation[] }[] = [
  { titre: 'Est alimenté par', types: ['EST_ALIMENTE_PAR', 'DEPEND_DE'] },
  { titre: 'Alimente', types: ['ALIMENTE', 'PEUT_CONDUIRE_A'] },
  { titre: 'Fonctionne avec', types: ['COMPLETE', 'RENFORCE', 'UTILISE', 'EST_UTILISE_PAR'] },
  { titre: 'Enchaînement', types: ['PRECEDE', 'SUIT'] },
  { titre: 'Composition', types: ['CONTIENT', 'FAIT_PARTIE_DE'] },
  { titre: 'Ne pas confondre avec', types: ['NE_PAS_CONFONDRE'] },
  { titre: "S'oppose à", types: ['S_OPPOSE_A'] },
  { titre: 'Illustrations', types: ['ILLUSTRE', 'EST_EXEMPLE_DE', 'EST_APPLIQUE_DANS'] },
]

export const PRIORITE_LABELS: Record<1 | 2 | 3, { libelle: string; court: string; icone: string }> = {
  1: { libelle: 'Priorité 1 — indispensable', court: 'Indispensable', icone: '●●●' },
  2: { libelle: 'Priorité 2 — très important', court: 'Important', icone: '●●○' },
  3: { libelle: 'Priorité 3 — complément', court: 'Complément', icone: '●○○' },
}
