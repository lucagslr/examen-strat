import type { Notion } from '../types'

/** PARTIE I — FONDEMENTS (encyclopédie §1 à §4) */
export const notionsFondements: Notion[] = [
  {
    id: 'strategie',
    slug: 'strategie',
    nom: "Stratégie d'entreprise",
    nomCourt: 'Stratégie',
    aliases: ['strategy', 'stratégie', 'stratos', 'ageîn'],
    categorie: 'fondements',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "La stratégie d'entreprise définit les principaux objectifs et buts d'une organisation, ainsi que les politiques et les plans d'action pour les atteindre.",
    explicationSimple:
      "Choisir un terrain de jeu, y mettre ses moyens, s'y engager longtemps, pour faire mieux que les autres et créer de la valeur pour tous ceux qui comptent.",
    pourquoiExiste:
      "Une entreprise évolue dans un environnement qu'elle ne contrôle pas (concurrents, réglementation, climat, technologies) avec des ressources limitées. Elle ne peut donc pas tout faire, ni partout, ni pour tout le monde. La stratégie est la discipline du choix sous contrainte et sur la durée.",
    objectif:
      "Répondre à deux questions : « Où en sommes-nous ? » (diagnostic) et « Où voulons-nous aller ? » (objectifs, options).",
    origine:
      "Le mot français « stratégie » vient des mots grecs stratos (armée) et ageîn (conduire, diriger). C'est historiquement un concept militaire, ensuite transposé à d'autres domaines (jeux, sport…) puis au management.",
    auteur:
      "Jalons : Sun Tzu (L'Art de la Guerre) · fin des années 1950, Harvard Business School · années 1960, Igor Ansoff (planification stratégique) · 1986, Michael Porter (L'Avantage concurrentiel) · 1995, Hamel & Prahalad (La Conquête du futur).",
    commentUtiliser: [
      { titre: 'Choisir un périmètre d’activité', detail: "Portefeuille d'activité et présence géographique." },
      { titre: 'Y allouer des ressources', detail: 'Financières, humaines, technologiques, commerciales.' },
      { titre: "S'engager à moyen ou long terme", detail: 'De 3 à 10 ans selon les secteurs.' },
      {
        titre: 'Viser un avantage concurrentiel durable',
        detail:
          "À un niveau de performance supérieur à celui des concurrents, dans le but de créer de la valeur pour les parties prenantes.",
      },
    ],
    exemples: [
      {
        texte:
          "Sun Tzu annonce littéralement le programme du cours : « connais-toi toi-même » = diagnostic interne ; « connais ton ennemi » = Porter ; « les objectifs stratégiques des autres princes » = parties prenantes ; « résoudre les difficultés avant qu'elles ne surviennent » = anticipation, PESTEL.",
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "La stratégie définit les objectifs et les plans d'action d'une organisation ; elle consiste à choisir un périmètre, y allouer des ressources sur 3 à 10 ans, pour obtenir un avantage concurrentiel durable créateur de valeur pour les parties prenantes.",
    pieges: [
      {
        erreur: 'Terminer la définition sur « créer de la valeur pour les actionnaires ».',
        pourquoi:
          "La définition du cours dit « pour les parties prenantes ». C'est ce mot qui ouvre la porte à toute la partie durabilité/RNE du cours.",
        test: 'Ai-je bien dit « parties prenantes » et non « actionnaires » ?',
      },
    ],
    motsCles: ['objectifs', 'buts', 'plans d’action', 'périmètre', 'ressources', 'long terme'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'niveaux-strategiques',
    slug: 'niveaux-strategiques',
    nom: 'Les deux niveaux stratégiques (corporate / business)',
    nomCourt: 'Corporate / Business',
    aliases: ['corporate strategy', 'business strategy', "stratégie d'activité"],
    categorie: 'fondements',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Stratégie d'activité (business strategy) : le plan d'action concerne un segment stratégique particulier — « plan visant à attirer les clients, à gagner leur confiance et à vendre un produit ou un service pour réaliser des bénéfices ». Stratégie d'entreprise (corporate strategy) : le plan d'action concerne le choix d'entrer, de se maintenir ou de sortir des différentes activités ou segments — « plan qui aide une organisation à décider quels marchés elle veut pénétrer et comment ».",
    explicationSimple:
      "Corporate = « où jouer ? ». Business = « comment gagner là où l'on joue ? ».",
    exemples: [
      {
        texte:
          "Business : obtenir des clients, augmenter leur satisfaction, augmenter les profits, choisir le produit à offrir. Corporate : le marché sur lequel être compétitif, comment les business units ajoutent de la valeur, le moment et le rythme de la croissance.",
        source: 'encyclopedie',
      },
    ],
    phraseExamen: "Corporate décide où jouer, business décide comment gagner là où l'on joue.",
    motsCles: ['segment stratégique', 'business unit', 'portefeuille'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'bonne-strategie',
    slug: 'bonne-strategie',
    nom: 'Ce qu’est une « bonne stratégie »',
    nomCourt: 'Bonne stratégie',
    categorie: 'fondements',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Une bonne stratégie vise une meilleure efficacité dans l'entreprise en prenant en considération : l'atteinte des objectifs de performance, surpasser la concurrence, l'atteinte d'avantages concurrentiels durables, augmenter les recettes et geler ou réduire les dépenses, satisfaire la clientèle, réagir aux conditions changeantes du marché. « Les stratégies garantissent votre position concurrentielle sur le marché. »",
    explicationSimple:
      "Six critères qui servent de grille d'évaluation d'une recommandation : si ta proposition n'en coche aucun, elle n'est pas stratégique.",
    phraseExamen:
      "Une bonne stratégie doit aussi savoir réagir aux conditions changeantes du marché — c'est pourquoi le diagnostic est le point de départ, et pourquoi la démarche est une boucle et non une ligne droite.",
    motsCles: ['performance', 'avantage durable', 'réactivité'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'vision',
    slug: 'vision',
    nom: 'Vision',
    categorie: 'fondements',
    type: 'notion',
    priorite: 2,
    definitionCours: "La vision d'une entreprise formalise son avenir.",
    explicationSimple: "L'image de ce que l'entreprise veut être, à long terme.",
    exemples: [
      {
        texte:
          "Bill Gates, 1974 : « il y aura un ordinateur personnel sur chaque bureau fonctionnant avec un logiciel Microsoft ».",
        source: 'encyclopedie',
      },
    ],
    phraseExamen: "« Nous voulons être le leader européen d'ici 2035 » → c'est une vision.",
    motsCles: ['avenir', 'long terme', 'image'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'mission',
    slug: 'mission',
    nom: 'Mission (raison d’être)',
    nomCourt: 'Mission',
    aliases: ["raison d'être", 'finalité', 'purpose'],
    categorie: 'fondements',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "La formulation de la mission explicite la finalité, l'objectif ultime de l'organisation à ses parties prenantes.",
    explicationSimple:
      "Pourquoi l'entreprise existe — et le dire à ceux qui comptent. Le complément « à ses parties prenantes » est essentiel : la mission est un acte de communication externe, pas seulement une intention interne.",
    exemples: [
      {
        texte: "Nike, 2017 : « Apporter l'inspiration et l'innovation à chaque athlète dans le monde. »",
        source: 'encyclopedie',
      },
      {
        texte:
          "SilverDigital : la mission implicite est « rester compétitif ». Une mission durable serait « rendre les services financiers accessibles à tous les Genevois, quel que soit leur âge » — et elle aurait rendu la stratégie « Digital First » impossible sous sa forme actuelle.",
        cas: 'silverdigital',
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "Dans le BMC durable, la mission devient le bloc (0) : elle précède et conditionne tous les autres blocs, au lieu de partir du marché.",
    motsCles: ['finalité', 'raison d’être', 'bloc 0'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'valeurs',
    slug: 'valeurs',
    nom: 'Valeurs',
    categorie: 'fondements',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "Les valeurs de l'organisation constituent un cadre général, c'est-à-dire ce qu'il est possible de faire et ce qui ne l'est pas.",
    explicationSimple: "Les limites que l'entreprise se donne à elle-même.",
    exemples: [
      {
        texte:
          "Apple, 2013, message signé Bruce Sewell : consignes basées sur les valeurs d'honnêteté, de respect et de confidentialité, ainsi que sur le respect absolu des lois (antitrust, anticorruption).",
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "Les valeurs sont l'ancêtre direct de la charte numérique : un document qui formalise ce qui est acceptable et ce qui ne l'est pas dans l'usage du numérique.",
    motsCles: ['cadre', 'éthique', 'charte'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'buts-objectifs',
    slug: 'buts-objectifs',
    nom: 'Buts et objectifs',
    nomCourt: 'Buts / objectifs',
    aliases: ['but', 'objectif', 'qualitatif', 'quantitatif'],
    categorie: 'fondements',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Les buts sont qualitatifs et les objectifs sont quantitatifs : ils indiquent les résultats que l'organisation souhaite atteindre.",
    explicationSimple:
      "Le but dit la direction (« améliorer la satisfaction client »), l'objectif la chiffre (« réduire de 20 % les émissions d'ici 2030 »).",
    exemples: [
      {
        texte:
          "But (Apple, Jonathan Ive, 2012) : « notre but final n'est pas de faire de l'argent […] nous cherchons avant tout à faire de bons produits ». Objectif (Apple) : empreinte carbone abaissée en 2016 de 23 % par rapport à 2015 ; infrastructures propres à 96 % en énergie verte.",
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "Ce couple d'exemples montre à la fois la distinction but/objectif et le fait qu'un objectif environnemental est un objectif stratégique quantifié.",
    pieges: [
      {
        erreur: 'Employer « but » et « objectif » comme synonymes.',
        pourquoi: "Le cours consacre une section entière à les distinguer : qualitatif vs quantitatif.",
        test: 'Y a-t-il un chiffre ? Oui → objectif. Non → but.',
      },
    ],
    motsCles: ['qualitatif', 'quantitatif', 'résultat'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'plan-action',
    slug: 'plan-action',
    nom: "Plan d'action et alignement",
    nomCourt: "Plan d'action",
    aliases: ['alignement', 'mise en œuvre'],
    categorie: 'fondements',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "La mise en œuvre sous forme de plan d'action renvoie aux autres champs du management : comptabilité, finance, gestion des ressources humaines, logistique. C'est l'application de différents outils utilisés de manière cohérente selon les situations et les contextes ⇒ alignement.",
    explicationSimple:
      "Un plan « aligné » est un plan dont chaque action sert un objectif, lui-même relié à un but, lui-même relié à la mission.",
    phraseExamen:
      "Le succès tient à la cohérence de la vision, de la mission, des buts, des objectifs et des actions.",
    motsCles: ['cohérence', 'opérationnel', 'déploiement'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'controle',
    slug: 'controle',
    nom: 'Contrôle et pilotage',
    nomCourt: 'Contrôle',
    aliases: ['reporting', 'pilotage'],
    categorie: 'pilotage',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "Le pilotage se fait par le biais d'un système de contrôle, c'est-à-dire de vérification de la bonne exécution des actions pour s'assurer de la réalisation des objectifs prédéfinis. Exemples : reportings réguliers (mensuels, trimestriels, annuels) utilisant une diversité de mesures financières et quantitatives.",
    explicationSimple: "Vérifier qu'on fait bien ce qu'on a décidé, et que cela produit le résultat visé.",
    motsCles: ['reporting', 'KPI', 'vérification'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'gouvernance',
    slug: 'gouvernance',
    nom: 'Gouvernance',
    categorie: 'fondements',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "La vision, la mission, les buts et les objectifs définissent la trajectoire. Il est important de comprendre la manière dont les décisions sont prises pour la formulation et la mise en œuvre de la stratégie. L'analyse des parties prenantes est un outil utilisé pour représenter et distinguer les différents acteurs, leur implication et leur degré d'influence dans les décisions de l'entreprise.",
    explicationSimple: "Qui décide, comment, et avec quelle influence de qui.",
    phraseExamen:
      "La gouvernance est un concept transversal du cours : elle réapparaît en gouvernance des données, gouvernance de l'accessibilité et gouvernance de la RNE.",
    motsCles: ['décision', 'influence', 'transversal'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'demarche-strategique',
    slug: 'demarche-strategique',
    nom: 'La démarche stratégique globale',
    nomCourt: 'Démarche stratégique',
    aliases: ['processus stratégique', 'étapes'],
    categorie: 'fondements',
    type: 'methode',
    priorite: 1,
    definitionCours:
      "Organisation du cours : mener une démarche stratégique. Chapitre 1 : définition de la stratégie ; chapitre 2 : l'analyse de l'environnement et le diagnostic ; chapitre 3 : la durabilité en entreprise ; chapitre 4 : intégration des aspects de responsabilité numérique.",
    explicationSimple:
      "L'enchaînement complet, du périmètre à l'amélioration continue. Ce n'est pas une ligne droite : le cours insiste sur l'amélioration continue et sur la nécessité de réagir aux conditions changeantes du marché. C'est une boucle.",
    objectif: "Savoir, face à un cas inconnu, quel outil sortir et dans quel ordre — et justifier ce choix.",
    commentUtiliser: [
      { titre: 'Définir le périmètre de la stratégie', detail: 'Quelle activité ? quel territoire ? quel horizon ?' },
      { titre: 'Analyser les parties prenantes', detail: "« C'est le début de toute analyse pour réaliser un plan. »" },
      { titre: 'Diagnostic externe et interne', detail: 'PESTEL, 5 (+1) forces, océan bleu/rouge / ressources, compétences, chaîne de valeur.' },
      { titre: 'SWOT — vision synthétique', detail: 'O/M ← externe, F/Fa ← interne.' },
      { titre: 'Identifier les enjeux, définir des objectifs stratégiques' },
      { titre: 'Formuler des options stratégiques', detail: 'Différenciation, focalisation, innovation durable, océan bleu (ERAC).' },
      { titre: 'Évaluer avec le SAF', detail: 'Souhaitabilité (SWOT) / Acceptabilité (PP + risques) / Faisabilité (PESTEL).' },
      { titre: 'Adapter le business model', detail: 'RCOV, Canvas, BMC durable.' },
      { titre: 'Intégrer durabilité et RNE', detail: 'ODD, limites planétaires, 4 axes RNE, accessibilité.' },
      { titre: 'Mettre en œuvre, contrôler, améliorer en continu' },
    ],
    phraseExamen:
      "Sans périmètre, un PESTEL devient une liste d'actualités : c'est pour cela que le périmètre précède l'analyse.",
    motsCles: ['périmètre', 'enchaînement', 'boucle'],
    sources: ['encyclopedie'],
    provenance: 'interpretation',
  },
  {
    id: 'perimetre',
    slug: 'perimetre',
    nom: 'Périmètre de la stratégie',
    nomCourt: 'Périmètre',
    aliases: ['scope', 'champ d’analyse'],
    categorie: 'fondements',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Définir le périmètre de notre stratégie. Identifier toutes les forces qui peuvent influer sur la capacité de l'entreprise à obtenir et conserver un avantage concurrentiel.",
    explicationSimple: "Quelle activité, quel territoire, quel horizon de temps — décidé avant toute analyse.",
    pieges: [
      {
        erreur: "Faire un PESTEL sans avoir défini le périmètre.",
        pourquoi: "Le PESTEL devient alors une liste d'actualités générales, sans pertinence pour l'entreprise.",
        test: "Puis-je nommer l'entreprise, le secteur, le pays et l'horizon avant de commencer ?",
      },
    ],
    phraseExamen:
      "Toujours définir le périmètre avant de citer un chiffre — c'est vrai du diagnostic stratégique comme de la mesure de l'impact du numérique.",
    motsCles: ['activité', 'territoire', 'horizon'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'strates-environnement',
    slug: 'strates-environnement',
    nom: "Le schéma des strates de l'environnement",
    nomCourt: 'Strates',
    aliases: ['couches', 'macro micro', 'emboîtement'],
    categorie: 'fondements',
    type: 'modele',
    priorite: 1,
    definitionCours:
      "Un emboîtement de rectangles concentriques : environnement macroéconomique (facteurs généraux) ⊃ industrie (facteurs clés de succès) ⊃ espace concurrentiel (concurrents, fournisseurs, clients, entrants, substituts) ⊃ entreprise.",
    explicationSimple:
      "Quatre niveaux, chacun avec son outil et son degré de contrôle : macro (PESTEL, non contrôlable) → industrie (charnière) → espace concurrentiel (Porter, on négocie) → entreprise (diagnostic interne, terrain d'action).",
    pourquoiExiste:
      "C'est la clé qui articule tous les outils de diagnostic : elle explique d'un coup pourquoi PESTEL n'est pas Porter, pourquoi Porter n'est pas le SWOT, et pourquoi le diagnostic interne est encore autre chose.",
    commentUtiliser: [
      { titre: 'Situer le fait observé', detail: 'À quel niveau appartient-il : macro, industrie, concurrentiel, entreprise ?' },
      { titre: 'En déduire l’outil', detail: 'Macro → PESTEL. Espace concurrentiel → Porter. Entreprise → diagnostic interne.' },
      { titre: 'Suivre la cascade', detail: 'Un fait macro modifie la structure de l’industrie, qui déplace l’équilibre des 5 forces, qui crée une opportunité ou une menace.' },
    ],
    exemples: [
      {
        texte:
          "Fukushima : PESTEL politique (sortie du nucléaire) → l'industrie déplace son facteur clé de succès de « capacité nucléaire » vers « capacité renouvelable » → Porter : la menace des substituts devient forte → SWOT : menace pour un opérateur nucléaire, opportunité pour un acteur renouvelable → interne : a-t-on les ressources pour se reconvertir ? → option → SAF.",
        source: 'corrige-tp02a',
        cas: 'fukushima',
      },
    ],
    phraseExamen:
      "PESTEL, c'est le climat général dans lequel toutes les entreprises baignent ; Porter, c'est la pression exercée par les acteurs directs de mon secteur. Un changement de gouvernement affecte l'automobile et la pharmacie ; le pouvoir de Microsoft et Intel n'affecte que les fabricants de micro-ordinateurs.",
    pieges: [
      {
        erreur: "Mettre « les concurrents sont nombreux » dans le facteur Économique du PESTEL.",
        pourquoi: "La concurrence directe relève de Porter. Le PESTEL contient l'inflation, les taux d'intérêt, le chômage — pas les rivaux.",
        test: "Ce fait touche-t-il tous les secteurs, ou seulement le mien ? Tous → PESTEL. Le mien → Porter.",
      },
    ],
    motsCles: ['macro-environnement', 'industrie', 'espace concurrentiel', 'facteurs clés de succès'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'facteurs-cles-succes',
    slug: 'facteurs-cles-succes',
    nom: 'Facteurs clés de succès (FCS)',
    nomCourt: 'FCS',
    acronyme: 'FCS',
    aliases: ['facteur clé de succès', 'key success factors', 'KSF'],
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Le niveau « industrie » du schéma des strates est celui des facteurs clés de succès. La détermination des facteurs clés de succès est l'une des quatre applications stratégiques de la chaîne de valeur.",
    explicationSimple:
      "Ce qu'une entreprise doit absolument maîtriser pour réussir dans son secteur. Ils changent quand le macro-environnement change.",
    exemples: [
      {
        texte:
          "Après Fukushima, le facteur clé de succès du secteur énergétique se déplace de « capacité nucléaire installée » vers « capacité renouvelable ».",
        source: 'encyclopedie',
        cas: 'fukushima',
      },
    ],
    phraseExamen:
      "Un fait du macro-environnement se traduit en modification des facteurs clés de succès de l'industrie, qui déplace l'équilibre des 5 forces.",
    motsCles: ['industrie', 'réussite', 'attributs'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'das',
    slug: 'das',
    nom: "Domaine d'activité stratégique (DAS)",
    nomCourt: 'DAS',
    acronyme: 'DAS',
    aliases: ['segment stratégique', 'business unit', 'SBU'],
    categorie: 'diagnostic',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "Sous-ensemble homogène d'activités d'une entreprise, avec ses propres concurrents et facteurs clés de succès.",
    explicationSimple:
      "Le niveau auquel s'appliquent réellement le SWOT et les 5 forces : on n'analyse pas « une entreprise », on analyse une activité sur un marché.",
    limites: [
      "Le terme n'est pas formalisé comme un modèle dans les supports ; il figure au glossaire du cours et découle du « segment stratégique particulier » de la business strategy.",
    ],
    motsCles: ['segment', 'homogène', 'niveau d’analyse'],
    sources: ['glossaire', 'encyclopedie'],
    provenance: 'complement',
  },
  {
    id: 'avantage-concurrentiel',
    slug: 'avantage-concurrentiel',
    nom: 'Avantage concurrentiel',
    nomCourt: 'Avantage concurrentiel',
    aliases: ['competitive advantage'],
    categorie: 'fondements',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Ce qui permet à une entreprise d'atteindre un niveau de performance supérieur à celui de ses concurrents (reconstruit à partir de la définition de la stratégie, Cours 1 slide 14).",
    explicationSimple: "Faire mieux que les autres, et savoir pourquoi.",
    motsCles: ['performance', 'supériorité'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'interpretation',
  },
  {
    id: 'avantage-concurrentiel-durable',
    slug: 'avantage-concurrentiel-durable',
    nom: 'Avantage concurrentiel durable',
    nomCourt: 'Avantage durable',
    aliases: ['sustainable competitive advantage', 'avantage soutenable'],
    categorie: 'fondements',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Elle vise à obtenir un avantage concurrentiel de façon durable à un niveau de performance supérieur à celui de ses concurrents dans le but de créer de la valeur pour les parties prenantes.",
    explicationSimple:
      "Un avantage qui tient dans le temps — ce qui suppose qu'il repose sur des ressources et compétences peu transférables et difficilement imitables.",
    objectif: "C'est la finalité annoncée de toute la démarche stratégique.",
    commentUtiliser: [
      { titre: 'Identifier la ressource ou compétence source', detail: 'Est-elle achetable à l’extérieur ?' },
      { titre: 'Tester la transférabilité', detail: 'Une usine s’achète. Une réputation construite sur vingt ans, non.' },
      { titre: 'Tester l’imitabilité', detail: 'Un concurrent capitalisé peut-il faire pareil en 12 mois ?' },
      { titre: 'Vérifier la combinaison', detail: 'L’avantage vient souvent de l’articulation entre activités, pas d’une activité isolée.' },
    ],
    exemples: [
      {
        texte:
          "Les droits de l'œuvre de Jean-Jacques Waltz chez Oncle Hansi : ressource de réputation, acquise en 2012, non transférable — « l'entreprise possède le label qui fonde la proposition de valeur ».",
        source: 'corrige-hansi',
        cas: 'oncle-hansi',
      },
    ],
    phraseExamen:
      "Trois sources selon le cours : des ressources peu transférables et peu imitables, la combinaison des activités de la chaîne de valeur, et un système de valeur difficile à imiter.",
    pieges: [
      {
        erreur: "Conclure à un avantage durable à partir d'équipements et de trésorerie.",
        pourquoi:
          "Ce sont des ressources tangibles et cessibles : n'importe quel concurrent capitalisé peut faire pareil.",
        test: 'Cette ressource s’achète-t-elle sur un marché ? Oui → avantage éphémère.',
      },
    ],
    motsCles: ['imitabilité', 'transférabilité', 'durée'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
]
