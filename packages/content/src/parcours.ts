import type { Combinaison, Parcours } from './types'

/**
 * PARCOURS GUIDÉS — on ne navigue plus par chapitre mais par raisonnement.
 * C'est la fonction pédagogique la plus utile de l'application : elle apprend
 * l'enchaînement, pas seulement le vocabulaire.
 */
export const parcours: Parcours[] = [
  {
    id: 'diagnostic-decision',
    nom: 'Du diagnostic à la décision',
    question: "Face à un cas inconnu, dans quel ordre sortir les outils ?",
    description:
      "Le parcours central du cours. Il répond à « où en sommes-nous ? » puis « où voulons-nous aller ? », et justifie chaque passage.",
    priorite: 1,
    etapes: [
      { notion: 'perimetre', role: "Sans périmètre, un PESTEL devient une liste d'actualités." },
      { notion: 'parties-prenantes', role: "« C'est le début de toute analyse pour réaliser un plan. »" },
      { notion: 'pestel', role: "Le macro-environnement : ce que subissent tous les secteurs." },
      { notion: 'porter-five-forces', role: "L'industrie : la pression exercée par les acteurs directs de MON secteur." },
      { notion: 'ressources', role: "Ce que l'entreprise possède, et ce qui est difficilement imitable." },
      { notion: 'chaine-de-valeur', role: "Où la valeur et les coûts sont réellement créés à l'intérieur." },
      { notion: 'swot', role: "La synthèse : confronter externe et interne pour faire émerger des enjeux." },
      { notion: 'options-strategiques', role: "Formuler 2 ou 3 voies : coûts, différenciation, focalisation, innovation durable, océan bleu." },
      { notion: 'saf', role: "Le test avant décollage : souhaitable ? acceptable ? faisable ?" },
      { notion: 'business-model', role: "Traduire le choix en architecture concrète et en équation de profit." },
    ],
  },
  {
    id: 'avantage-concurrentiel',
    nom: "La construction de l'avantage concurrentiel",
    question: "Pourquoi deux entreprises du même secteur n'ont-elles pas la même rentabilité ?",
    description:
      "La chaîne qui va de ce que l'entreprise possède à ce qui la rend durablement supérieure. Réponse : c'est interne.",
    priorite: 1,
    etapes: [
      { notion: 'ressources', role: "Ce que l'entreprise POSSÈDE — un stock." },
      { notion: 'competences', role: "Ce qu'elle SAIT FAIRE avec — un flux." },
      { notion: 'chaine-de-valeur', role: "L'activité où la compétence s'exerce concrètement." },
      { notion: 'marge', role: "La valeur créée moins le coût cumulé des activités." },
      { notion: 'transferabilite', role: "Le critère décisif : la ressource est-elle achetable à l'extérieur ?" },
      { notion: 'avantage-concurrentiel', role: "Une performance supérieure à celle des concurrents." },
      { notion: 'avantage-concurrentiel-durable', role: "Le même, maintenu dans le temps, parce qu'il est peu imitable." },
    ],
  },
  {
    id: 'business-model',
    nom: 'Construire un Business Model',
    question: "Comment l'entreprise crée, délivre, capte et répartit la valeur ?",
    description:
      "L'ordre logique d'analyse d'un business model, de la clientèle au profit — c'est aussi l'ordre de lecture du Canvas.",
    priorite: 1,
    etapes: [
      { notion: 'segments-clients', role: 'Qui servons-nous ? combien de segments réellement distincts ?' },
      { notion: 'proposition-de-valeur', role: 'Quelle promesse, parmi les huit dimensions du cours ?' },
      { notion: 'canaux', role: 'Comment atteint-on ces clients ?' },
      { notion: 'flux-revenus', role: '« Que sont-ils prêts à payer ? Comment payent-ils ? »' },
      { notion: 'ressources-cles', role: "Que faut-il posséder absolument pour tenir la promesse ?" },
      { notion: 'activites-cles', role: 'Que faut-il absolument savoir faire ?' },
      { notion: 'partenaires-cles', role: 'Que fait-on faire ? — ce bloc reprend le système de valeur.' },
      { notion: 'structure-couts', role: 'Ce que le modèle coûte, et selon quelle structure.' },
      { notion: 'equation-de-profit', role: 'La confrontation — et, si le modèle est bon, une équation ORIGINALE.' },
    ],
  },
  {
    id: 'business-model-durable',
    nom: 'Du Business Model au Business Model durable',
    question: "Que manque-t-il au Canvas classique, et comment le transformer ?",
    description:
      "Le Canvas est aveugle à la raison d'être en amont et aux effets sur les tiers en aval. Ce parcours ajoute et transforme.",
    priorite: 1,
    etapes: [
      { notion: 'business-model', role: 'Le point de départ : créer, délivrer, capter, répartir la valeur.' },
      { notion: 'mission', role: 'Bloc (0) : pourquoi cette entreprise existe-t-elle ? — avant même les clients.' },
      { notion: 'externalite-negative', role: "Bloc (11) : le coût non intentionnel imposé à d'autres." },
      { notion: 'impacts-positifs', role: 'Bloc (10) : les effets bénéfiques pour la société, l’environnement et les clients.' },
      { notion: 'odd', role: 'La grille sur laquelle situer ces impacts et ces externalités.' },
      { notion: 'economie-circulaire', role: 'Fermer les boucles : partage, réutilisation, réparation, retraitement.' },
      { notion: 'metamorphose-bmc', role: 'Réécrire chaque bloc en version durable, et nommer la tension CT/LT.' },
      { notion: 'bmc-durable', role: 'Le modèle complet en douze blocs.' },
    ],
  },
  {
    id: 'numerique-responsable',
    nom: 'Numérique responsable',
    question: "Le numérique aide-t-il ou nuit-il à la durabilité ?",
    description:
      "Le parcours à double sens obligatoire. Il se termine sur l'accessibilité, qui empêche la sobriété de devenir injuste.",
    priorite: 1,
    etapes: [
      { notion: 'transformation-numerique', role: "Le numérique n'est pas immatériel." },
      { notion: 'trois-postes-numerique', role: 'Terminaux ~50 %, data centers 46 %, réseaux 4 %.' },
      { notion: 'effets-ocde', role: 'Effets directs, facilitateurs, systémiques — la grille de bilan net.' },
      { notion: 'effet-rebond', role: "Le gain est réabsorbé ailleurs : direct, indirect, de marché, de croissance." },
      { notion: 'sobriete-numerique', role: 'Questionner → Transférer → Améliorer. Le besoin avant la technique.' },
      { notion: 'rne', role: 'Quatre axes : données, social, environnement, éthique et gouvernance.' },
      { notion: 'gouvernance-donnees', role: "Qui décide, quelles données, comment protégées, combien de temps." },
      { notion: 'accessibilite-numerique', role: "Le garde-fou : sans elle, la sobriété devient une sobriété injuste." },
    ],
  },
  {
    id: 'accessibilite-strategique',
    nom: "L'accessibilité comme enjeu stratégique",
    question: "Pourquoi l'accessibilité n'est-elle pas qu'une contrainte réglementaire ?",
    description:
      "Le parcours du cas SilverDigital : d'un défaut technique à un risque stratégique, puis à un avantage concurrentiel.",
    priorite: 1,
    etapes: [
      { notion: 'accessibilite-numerique', role: 'Utilisable par toutes les personnes, quelles que soient leurs capacités.' },
      { notion: 'pour', role: 'Perceptible, Opérable, Compréhensible, Robuste — la grille de diagnostic.' },
      { notion: 'utilisabilite', role: 'Un service peut être conforme et pourtant inutilisable.' },
      { notion: 'exclusion-indirecte', role: "Une règle neutre en apparence qui désavantage de fait un groupe." },
      { notion: 'externalite-negative', role: 'Le coût du support n’a pas disparu : il a été déplacé.' },
      { notion: 'ressources-intangibles', role: 'La réputation est la ressource la moins imitable — et la plus longue à reconstruire.' },
      { notion: 'double-levier-accessibilite', role: 'Responsabilité ET création de valeur durable.' },
      { notion: 'avantage-concurrentiel-durable', role: 'Élargissement du marché, différenciation, confiance.' },
    ],
  },
  {
    id: 'circularite',
    nom: 'La circularité, du besoin à la fin de vie',
    question: "Comment sortir d'une logique linéaire ?",
    description: "La hiérarchie qui structure tout le chapitre durabilité : agir sur le besoin avant la technique.",
    priorite: 2,
    etapes: [
      { notion: 'economie-lineaire', role: 'Extraire, produire, distribuer, consommer, jeter.' },
      { notion: 'odd-12', role: 'Prévention, réduction, recyclage et réutilisation — l’ordre des verbes compte.' },
      { notion: 'achats-it-responsables', role: 'Acheter moins → acheter mieux → utiliser mieux et plus longtemps.' },
      { notion: 'trois-r', role: 'Réduire > Réutiliser > Recycler, dans cet ordre.' },
      { notion: 'eco-conception', role: "À la source : rendre toutes les boucles possibles." },
      { notion: 'cout-cycle-de-vie', role: 'Achat + fonctionnement + élimination, pas le prix affiché.' },
      { notion: 'economie-circulaire', role: 'Les boucles courtes préservent la valeur ; les longues la détruisent.' },
    ],
  },
  {
    id: 'methode-examen',
    nom: "Répondre à une question d'examen",
    question: "Comment construire une réponse qui tranche ?",
    description:
      "La procédure standard. À la HEG, la note se joue moins sur le savoir que sur la capacité à mobiliser, structurer et arbitrer.",
    priorite: 1,
    etapes: [
      { notion: 'verbes-consigne', role: 'L — décoder le verbe : il commande la forme de la réponse.' },
      { notion: 'lisaec', role: 'I et S — identifier les notions, structurer un plan rapide.' },
      { notion: 'dei', role: 'A — chaque paragraphe : définir, expliquer, illustrer.' },
      { notion: 'pensee-systemique', role: "E — étendre : le lien transversal est le signal de maîtrise." },
      { notion: 'tensions-strategiques', role: 'C — conclure en tranchant ET en nommant la tension.' },
    ],
  },
]

/**
 * COMBINAISONS — « accéder à un mélange de plusieurs notions ».
 * Chaque combinaison montre ce que produit l'assemblage de plusieurs outils.
 */
export const combinaisons: Combinaison[] = [
  {
    id: 'diagnostic-complet',
    nom: 'Diagnostic complet',
    entrees: ['pestel', 'porter-five-forces', 'diagnostic-interne'],
    sorties: ['swot'],
    priorite: 1,
    explication:
      "Le SWOT n'a aucun contenu propre. Il est la case d'arrivée de trois analyses distinctes : le macro-environnement (PESTEL), l'industrie (Porter) et l'intérieur de l'entreprise (ressources, compétences, chaîne de valeur). Faire un SWOT sans ces trois analyses, c'est produire un tableau vide de sens.",
    schema: `        PESTEL              PORTER          DIAGNOSTIC INTERNE
     (macro-envt)        (industrie)     (ressources, chaîne de valeur)
           │                   │                     │
           └─────── O / M ─────┘                     │ F / Fa
                       │                             │
                       ▼                             ▼
                    ┌──────────────────────────────────┐
                    │              SWOT                 │
                    │   vision synthétique → ENJEUX     │
                    └──────────────────────────────────┘`,
    exemple:
      "SilverDigital : PESTEL (vieillissement, EAA) + Porter (nouveaux entrants fintech) + interne (base fidèle, police non ajustable) → SWOT dont l'enjeu central est : la performance à court terme est obtenue au prix d'une érosion d'un segment historique.",
    question: 'qo-3',
  },
  {
    id: 'choisir-strategie',
    nom: 'Choisir une stratégie',
    entrees: ['swot', 'parties-prenantes', 'pestel'],
    sorties: ['saf', 'options-strategiques'],
    priorite: 1,
    explication:
      "Le SAF n'est pas un outil isolé : chacun de ses trois critères mobilise un outil déjà produit. La souhaitabilité relit le SWOT, l'acceptabilité relit la carte des parties prenantes et les risques, la faisabilité relit le PESTEL — et, en pratique, le diagnostic interne.",
    schema: `   SWOT ──────────▶ SOUHAITABILITÉ ┐
                                      │
   PARTIES PRENANTES ─▶ ACCEPTABILITÉ ├──▶ SAF ──▶ OPTION RETENUE
   + analyse des risques              │
                                      │
   PESTEL ────────▶ FAISABILITÉ ──────┘
   (+ ressources internes)`,
    exemple:
      "Option « canal humain prioritaire » chez SilverDigital : souhaitabilité élevée, faisabilité élevée, acceptabilité MOYENNE — l'actionnariat est le point de blocage. C'est là que se joue la décision.",
    question: 'qp-5',
  },
  {
    id: 'avantage-durable',
    nom: 'Fabriquer un avantage durable',
    entrees: ['ressources', 'competences', 'chaine-de-valeur'],
    sorties: ['avantage-concurrentiel-durable'],
    priorite: 1,
    explication:
      "Une ressource seule ne suffit pas : il faut une compétence pour l'exploiter, et une activité où l'exercer. L'avantage devient durable quand la ressource mobilisée est peu transférable — donc peu imitable. C'est la raison pour laquelle le tableau des six natures se lit comme un gradient.",
    schema: `   RESSOURCE  ──▶  COMPÉTENCE  ──▶  ACTIVITÉ DE LA CHAÎNE DE VALEUR
   (ce que je       (ce que je         (là où ça s'exerce)
    possède)         sais en faire)             │
                                                ▼
                                       CRÉATION DE VALEUR
                                                │
                       si peu transférable ─────┤
                                                ▼
                              AVANTAGE CONCURRENTIEL DURABLE`,
    exemple:
      "Smart : ressources (meilleurs ingénieurs + site de Hambach) → compétence (combinaison Daimler × Swatch) → activité (fabrication ET logistique d'approvisionnement sur le même site) → réduction des coûts de transport et qualité → différenciation.",
    question: 'qp-3',
  },
  {
    id: 'numerique-durable',
    nom: 'Évaluer un service numérique',
    entrees: ['transformation-numerique', 'sobriete-numerique', 'effet-rebond', 'rne'],
    sorties: ['quatre-criteres-donut'],
    priorite: 1,
    explication:
      "Aucune de ces notions ne suffit seule. Le numérique apporte un gain (effet facilitateur), coûte quelque chose (effet direct) et transforme les usages (effet systémique). La sobriété donne la méthode, la RNE donne le cadre de gouvernance, et les quatre critères du donut donnent la grille de verdict.",
    schema: `   TRANSFORMATION NUMÉRIQUE
        │  gain d'efficacité (effet facilitateur)
        │  coût propre        (effet direct)
        ▼
   EFFET REBOND ◀── neutralisé par ── SOBRIÉTÉ (Questionner→Transférer→Améliorer)
        │                                     │
        └──────────────┬──────────────────────┘
                       ▼
                  4 CRITÈRES DONUT
        ① besoin social réel  ② rester accessible
        ③ impacts sur tout le cycle de vie
        ④ pas de hausse artificielle des usages`,
    exemple:
      "SilverDigital passé à la grille : ① oui ② NON (exclusion des seniors) ③ partiellement ④ oui. Verdict : incompatible sur le critère 2.",
    question: 'qo-1',
  },
  {
    id: 'accessibilite-strategie',
    nom: "L'accessibilité comme stratégie",
    entrees: ['accessibilite-numerique', 'parties-prenantes', 'rne', 'ressources-intangibles'],
    sorties: ['avantage-concurrentiel-durable', 'business-model'],
    priorite: 1,
    explication:
      "L'accessibilité change de statut selon les notions auxquelles on la relie. Reliée au droit seul, c'est une contrainte. Reliée aux parties prenantes, à la RNE et à la théorie des ressources, elle devient un actif de réputation difficilement imitable, donc une source d'avantage durable.",
    schema: `   ACCESSIBILITÉ
        ├──▶ conformité (EAA, LHand, art. 21A)     ─┐
        ├──▶ parties prenantes (seniors, presse)   ─┤
        ├──▶ RNE, axe social                        ├──▶ RÉPUTATION
        └──▶ élargissement du marché adressable    ─┘   (peu imitable)
                                                            │
                                                            ▼
                                            AVANTAGE CONCURRENTIEL DURABLE
                                                            │
                                                            ▼
                                              BUSINESS MODEL reconfiguré`,
    exemple:
      "SilverDigital optimise ses ressources financières et technologiques — les plus imitables — en dégradant sa ressource de réputation, la seule difficilement imitable. C'est un arbitrage défavorable au regard de la théorie des ressources du cours.",
    question: 'qp-51',
  },
  {
    id: 'internaliser-externalites',
    nom: 'Internaliser les externalités',
    entrees: ['chaine-de-valeur', 'externalite-negative', 'bmc-durable', 'trois-r'],
    sorties: ['metamorphose-bmc'],
    priorite: 2,
    explication:
      "Repérer une externalité suppose de descendre dans la chaîne de valeur maillon par maillon, puis de remonter dans le BMC pour voir dans quel bloc elle se cache — le plus souvent la structure de coûts, par ce qui n'y figure PAS.",
    schema: `   CHAÎNE DE VALEUR (maillon par maillon)
        │  où sont les impacts ?
        ▼
   EXTERNALITÉS NÉGATIVES
        │  se cachent dans : ressources clés · activités clés · structure de coûts
        ▼
   BMC DURABLE (bloc 11)
        │  + 3R et écoconception pour agir
        ▼
   MÉTAMORPHOSE : chaque bloc réécrit en version durable`,
    exemple:
      "SilverDigital : la baisse de −20 % des coûts de support apparaît en réduction dans la structure de coûts, mais le coût a été déplacé vers les clients (9 minutes d'attente), leurs proches et les associations. Une partie du gain est une externalisation, pas une efficacité.",
    question: 'qo-5',
  },
]
