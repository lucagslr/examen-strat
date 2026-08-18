import type { GuidageQuestion, QuestionId } from './types'

/**
 * GUIDAGES SUPPLÉMENTAIRES.
 *
 * Le guidage d'une question (verbe → notions → outil → plan → arguments →
 * exemple → arbitrage → rédaction → auto-correction) est volumineux. Les deux
 * premiers sont écrits directement dans `questions-officielles.ts`, à côté de
 * leur question ; les suivants sont regroupés ici pour que le fichier des
 * questions reste lisible.
 *
 * Ils sont fusionnés dans `index.ts`. Une clé qui ne correspond à aucune
 * question est signalée par la validation du contenu.
 */
export const guidages: Record<QuestionId, GuidageQuestion> = {
  // -------------------------------------------------------------------------
  'qo-3': {
    verbeAttendu: 'justifier',
    ceQueLeVerbeImplique: [
      'prendre position explicitement',
      'défendre cette position par des arguments',
      'ne pas se contenter de décrire les deux côtés sans trancher',
    ],
    notionsAttendues: ['swot', 'force', 'ressources-intangibles', 'durabilite', 'opportunite'],
    notionsDistracteurs: ['effet-rebond', 'trois-r', 'ai-act'],
    outilsAttendus: ['swot'],
    planAttendu: [
      { id: 'p1', libelle: 'Position : oui, la durabilité peut être une force' },
      { id: 'p2', libelle: 'Mécanisme : une ressource immatérielle peu imitable' },
      { id: 'p3', libelle: 'Ce que cela ouvre à l’externe : opportunités' },
      { id: 'p4', libelle: 'Nuance : quand elle devient faiblesse ou menace' },
      { id: 'p5', libelle: 'Conclusion et condition' },
    ],
    arguments: [
      { texte: 'La réputation durable est une ressource immatérielle, donc peu imitable', pertinent: true },
      { texte: 'La conformité anticipée réduit un risque réglementaire futur', pertinent: true },
      { texte: 'Les marchés verts et la réglementation favorable sont des opportunités externes', pertinent: true },
      { texte: 'Subie, la démarche durable alourdit les coûts et devient une faiblesse', pertinent: true },
      {
        texte: 'La durabilité est toujours une force, quelles que soient les circonstances',
        pertinent: false,
        pourquoi: "Réponse à sens unique : le cours signale qu'elle peut aussi devenir une faiblesse de coût ou une menace pour les retardataires.",
      },
      {
        texte: "Il suffit d'afficher des logos ODD dans la communication",
        pertinent: false,
        pourquoi: "C'est du SDG-washing : sans transformation de la proposition de valeur ni des activités clés, ce n'est pas une force.",
      },
    ],
    exemplesProposes: [
      {
        texte: "SilverDigital : une accessibilité certifiée deviendrait une force adressant directement la menace des −12 % de seniors",
        adapte: true,
        cas: 'silverdigital',
      },
      { texte: 'Oncle Hansi : le label et le locavorisme fondent une proposition de valeur difficilement imitable', adapte: true, cas: 'oncle-hansi' },
      {
        texte: 'Les eaux embouteillées sont un océan rouge',
        adapte: false,
        pourquoi: "Bon exemple de Porter, mais il n'illustre pas la durabilité comme force interne.",
      },
    ],
    arbitrages: [
      { texte: 'Durabilité intégrée (force distinctive) vs durabilité subie (faiblesse de coût)', correct: true },
      { texte: 'Prix vs qualité du produit', correct: false },
      { texte: 'Coût de la démarche à court terme vs réputation et risque évité à long terme', correct: true },
    ],
    checklist: [
      "J'ai pris position clairement (oui)",
      "J'ai relié la durabilité à la théorie des ressources",
      "J'ai montré qu'elle alimente aussi les opportunités externes",
      "J'ai donné la nuance : faiblesse si subie, menace pour les retardataires",
      "J'ai cité un exemple du cours",
      "J'ai conclu par une condition explicite",
    ],
  },

  // -------------------------------------------------------------------------
  'qo-4': {
    verbeAttendu: 'analyser',
    ceQueLeVerbeImplique: [
      'décomposer avec un outil du cours',
      'traiter chaque maillon, pas seulement les plus évidents',
      "ne pas oublier les activités de soutien",
    ],
    notionsAttendues: ['chaine-valeur-durable', 'chaine-de-valeur', 'activites-principales', 'activites-soutien', 'externalite-negative'],
    notionsDistracteurs: ['matrice-pouvoir-interet', 'ai-act', 'ocean-bleu'],
    outilsAttendus: ['chaine-de-valeur', 'chaine-valeur-durable'],
    planAttendu: [
      { id: 'p1', libelle: "Rappel de l'outil : 5 activités principales + 4 de soutien" },
      { id: 'p2', libelle: 'Les leviers maillon par maillon (activités principales)' },
      { id: 'p3', libelle: 'Les leviers des activités de soutien' },
      { id: 'p4', libelle: 'Élargissement : jusqu’à la fin de vie et au système de valeur' },
      { id: 'p5', libelle: 'Conclusion et arbitrage' },
    ],
    arguments: [
      { texte: 'Logistique amont : rapprocher les fournisseurs pour réduire les transports', pertinent: true },
      { texte: 'Production : énergies renouvelables et efficacité énergétique', pertinent: true },
      { texte: 'Services : réparation et reprise en fin de vie, qui allongent la durée de vie', pertinent: true },
      { texte: 'Approvisionnements : appliquer les 7 principes des achats responsables', pertinent: true },
      {
        texte: 'Télétravail généralisé, sans autre précaution',
        pertinent: false,
        pourquoi: "Le levier est réel mais expose directement à l'effet rebond indirect : les gains de trajets peuvent être réabsorbés.",
      },
      {
        texte: 'Analyser la rivalité concurrentielle du secteur',
        pertinent: false,
        pourquoi: "C'est Porter, pas la chaîne de valeur : cette question porte sur l'intérieur de l'entreprise.",
      },
    ],
    exemplesProposes: [
      { texte: 'Smart : les fournisseurs implantés à Hambach réduisent les coûts et les kilomètres de transport', adapte: true, cas: 'smart' },
      { texte: 'Achats IT : coût du cycle de vie, labels, allongement de la durée de vie du parc', adapte: true },
      {
        texte: 'Le donut de Kate Raworth',
        adapte: false,
        pourquoi: "Cadre conceptuel pertinent pour la durabilité en général, mais ce n'est pas un exemple d'action sur un maillon.",
      },
    ],
    arbitrages: [
      { texte: 'Coût unitaire plus élevé à court terme vs résilience et conformité à long terme', correct: true },
      { texte: 'Efficacité par maillon vs effet rebond à l’échelle du système', correct: true },
      { texte: 'Différenciation vs focalisation', correct: false },
    ],
    checklist: [
      "J'ai nommé l'outil (chaîne de valeur) et sa structure 5 + 4",
      "J'ai traité au moins quatre maillons distincts",
      "J'ai inclus au moins une activité de soutien",
      "J'ai mentionné l'allongement du périmètre jusqu'à la fin de vie",
      "J'ai donné un exemple du cours",
      "J'ai nommé un arbitrage",
      "J'ai conclu",
    ],
  },

  // -------------------------------------------------------------------------
  'qo-10': {
    verbeAttendu: 'expliquer',
    ceQueLeVerbeImplique: [
      'montrer le mécanisme : de la cartographie à l’action',
      'ne pas se contenter de lister les parties prenantes',
      "aller jusqu'au plan de management",
    ],
    notionsAttendues: ['parties-prenantes', 'matrice-pouvoir-interet', 'acceptabilite', 'durabilite-forte'],
    notionsDistracteurs: ['bmc', 'erac', 'trois-postes-numerique'],
    outilsAttendus: ['matrice-pouvoir-interet'],
    planAttendu: [
      { id: 'p1', libelle: 'Pourquoi commencer par les parties prenantes' },
      { id: 'p2', libelle: 'Cartographier : intérêt × pouvoir' },
      { id: 'p3', libelle: 'Quatre profils, quatre traitements' },
      { id: 'p4', libelle: 'Élargir aux parties prenantes non marchandes' },
      { id: 'p5', libelle: 'Conclusion : du diagnostic au plan de management' },
    ],
    arguments: [
      { texte: "« C'est le début de toute analyse pour réaliser un plan »", pertinent: true },
      { texte: 'Pouvoir élevé et intérêt fort → engager avec attention, co-décider', pertinent: true },
      { texte: 'La durabilité élargit le cercle : environnement, société, générations futures', pertinent: true },
      { texte: "Le critère d'acceptabilité du SAF repose sur cette analyse", pertinent: true },
      {
        texte: 'Il suffit de lister les acteurs concernés',
        pertinent: false,
        pourquoi: "Le cours l'exclut explicitement : « votre action ne se limite pas à l'identification », il faut un plan de management.",
      },
      {
        texte: 'Traiter toutes les parties prenantes de la même façon, par souci d’équité',
        pertinent: false,
        pourquoi: "Le cours donne quatre traitements différents selon le quadrant : engager, satisfaire, informer, veiller.",
      },
    ],
    exemplesProposes: [
      { texte: "CIO : commission des athlètes en 1981, Olympic Broadcasting Services en 2001", adapte: true, cas: 'cio' },
      { texte: 'SilverDigital : les actionnaires sont le point de blocage, pas les clients seniors', adapte: true, cas: 'silverdigital' },
      {
        texte: 'Le Cirque du Soleil supprime les animaux sauvages',
        adapte: false,
        pourquoi: "Exemple d'innovation-valeur, sans rapport avec la gestion des parties prenantes.",
      },
    ],
    arbitrages: [
      { texte: 'Intérêt des parties prenantes puissantes vs intérêt des parties prenantes vulnérables', correct: true },
      { texte: "Valeur pour les actionnaires vs valeur pour l'ensemble des parties prenantes", correct: true },
      { texte: 'Recyclage vs réutilisation', correct: false },
    ],
    checklist: [
      "J'ai justifié pourquoi les parties prenantes viennent en premier",
      "J'ai nommé les deux axes de la matrice",
      "J'ai donné les quatre traitements",
      "J'ai élargi aux parties prenantes non marchandes",
      "J'ai relié au critère d'acceptabilité du SAF",
      "J'ai donné un exemple daté et factuel",
      "J'ai conclu sur le plan de management",
    ],
  },

  // -------------------------------------------------------------------------
  'qo-13': {
    verbeAttendu: 'discuter',
    ceQueLeVerbeImplique: [
      'thèse, antithèse, puis synthèse',
      'ne jamais répondre à sens unique',
      'trancher en conclusion, sous condition explicite',
    ],
    notionsAttendues: ['transformation-numerique', 'sobriete-numerique', 'effet-rebond', 'debat-numerique-durabilite', 'data-center'],
    notionsDistracteurs: ['matrice-pouvoir-interet', 'equation-de-profit', 'lhand'],
    outilsAttendus: ['effets-ocde'],
    planAttendu: [
      { id: 'p1', libelle: 'Définition et cadrage du débat' },
      { id: 'p2', libelle: 'Thèse : oui, l’innovation digitale sert la durabilité' },
      { id: 'p3', libelle: 'Antithèse : son coût propre et l’effet rebond' },
      { id: 'p4', libelle: 'Synthèse : compatible sous condition de sobriété' },
      { id: 'p5', libelle: 'Conclusion et arbitrage' },
    ],
    arguments: [
      { texte: 'Dématérialisation, optimisation, nouveaux modèles (fonctionnalité, partage)', pertinent: true },
      { texte: 'Empreinte des data centers et IA énergivore : +16 %/an', pertinent: true },
      { texte: "L'effet rebond réabsorbe les gains d'efficacité", pertinent: true },
      { texte: "La difficulté centrale n'est pas technique mais tient au modèle économique", pertinent: true },
      {
        texte: 'Le numérique étant immatériel, son impact est négligeable',
        pertinent: false,
        pourquoi: "Le cours affirme l'inverse : « le premier fait à rappeler est que le numérique n'est pas immatériel ».",
      },
      {
        texte: 'Il faut renoncer à toute innovation numérique',
        pertinent: false,
        pourquoi: "Le cours écarte explicitement la « réduction indistincte » autant que le techno-solutionnisme.",
      },
    ],
    exemplesProposes: [
      { texte: 'Une requête ChatGPT ≈ 4,32 g CO₂, soit 4 à 5 fois une recherche Google', adapte: true },
      { texte: 'Le cloud : plus efficient par unité, mais son abondance perçue nourrit l’effet rebond', adapte: true },
      {
        texte: 'La matrice ERAC du Cirque du Soleil',
        adapte: false,
        pourquoi: "Excellent exemple d'innovation-valeur, mais il ne dit rien du bilan environnemental du numérique.",
      },
    ],
    arbitrages: [
      { texte: 'Efficacité numérique vs sobriété', correct: true },
      { texte: 'Techno-solutionnisme vs réduction indistincte — et la position intermédiaire', correct: true },
      { texte: 'Achats vs logistique d’approvisionnement', correct: false },
    ],
    checklist: [
      "J'ai défini la transformation numérique",
      "J'ai développé un axe « oui » et un axe « non »",
      "J'ai placé l'effet rebond",
      "J'ai cité un chiffre du cours",
      "J'ai proposé une synthèse qui n'est ni techno-solutionniste ni décroissante",
      "J'ai nommé l'arbitrage",
      "J'ai tranché",
    ],
  },

  // -------------------------------------------------------------------------
  'qo-16': {
    verbeAttendu: 'expliquer',
    ceQueLeVerbeImplique: [
      "montrer d'où vient l'impact avant de dire comment le réduire",
      'hiérarchiser les leviers',
      "ne pas s'arrêter aux leviers techniques",
    ],
    notionsAttendues: ['data-center', 'trois-postes-numerique', 'sobriete-numerique', 'effet-rebond'],
    notionsDistracteurs: ['saf', 'segments-clients', 'coopetition'],
    outilsAttendus: ['sobriete-numerique'],
    planAttendu: [
      { id: 'p1', libelle: "Nature de l'impact : électricité et eau" },
      { id: 'p2', libelle: 'Situer dans les 3 postes du numérique' },
      { id: 'p3', libelle: 'Leviers d’efficacité technique' },
      { id: 'p4', libelle: 'Pourquoi l’efficacité seule ne suffit pas' },
      { id: 'p5', libelle: 'Conclusion : sobriété d’abord' },
    ],
    arguments: [
      { texte: 'Consolidation, virtualisation, refroidissement et gestion de l’alimentation', pertinent: true },
      { texte: 'Énergies renouvelables et amélioration du PUE', pertinent: true },
      { texte: 'Réduction des usages superflus et allongement de la vie du matériel', pertinent: true },
      { texte: "Sans sobriété, les gains d'efficacité sont réabsorbés par la croissance des usages", pertinent: true },
      {
        texte: 'Les data centers représentent la totalité de l’impact du numérique',
        pertinent: false,
        pourquoi: "Faux : en France, les terminaux pèsent ~50 %, les data centers 46 %, les réseaux 4 %.",
      },
      {
        texte: 'Compenser les émissions suffit à régler le problème',
        pertinent: false,
        pourquoi: "La durabilité forte pose le capital naturel comme non substituable : la compensation ne remplace pas la réduction en valeur absolue.",
      },
    ],
    exemplesProposes: [
      { texte: '~415 TWh en 2024, ~945 TWh d’ici 2030 — plus que la consommation totale du Japon', adapte: true },
      { texte: 'L’UNIL : ×4 des données stockées en quatre ans, dont 85 % de données de recherche', adapte: true },
      {
        texte: 'Le label Oncle Hansi comme ressource immatérielle',
        adapte: false,
        pourquoi: "Exemple de business model, sans lien avec l'empreinte des infrastructures numériques.",
      },
    ],
    arbitrages: [
      { texte: 'Efficacité technique vs sobriété des usages', correct: true },
      { texte: 'Mutualisation cloud vs souveraineté et dépendance', correct: true },
      { texte: 'Vision vs mission', correct: false },
    ],
    checklist: [
      "J'ai nommé les deux ressources consommées (électricité et eau)",
      "J'ai situé les data centers dans les 3 postes",
      "J'ai cité au moins trois leviers techniques",
      "J'ai expliqué pourquoi l'efficacité seule échoue",
      "J'ai cité un chiffre",
      "J'ai conclu sur la sobriété",
    ],
  },

  // -------------------------------------------------------------------------
  'qo-20': {
    verbeAttendu: 'citer',
    ceQueLeVerbeImplique: [
      'couvrir plusieurs familles de risques, pas une seule',
      'rester précis et exact',
      'relier chaque risque à une réponse',
    ],
    notionsAttendues: ['cybersecurite', 'exclusion-indirecte', 'economie-attention', 'souverainete-numerique', 'rne'],
    notionsDistracteurs: ['marge', 'ocean-rouge', 'cinq-p'],
    outilsAttendus: ['quatre-axes-rne'],
    planAttendu: [
      { id: 'p1', libelle: 'Cadrage : au-delà de l’écologie' },
      { id: 'p2', libelle: 'Risques liés aux données et à la sécurité' },
      { id: 'p3', libelle: 'Risques sociaux : exclusion et attention' },
      { id: 'p4', libelle: 'Risques de dépendance et de souveraineté' },
      { id: 'p5', libelle: 'La réponse : les quatre axes de la RNE' },
    ],
    arguments: [
      { texte: 'Cybersécurité et violation de données', pertinent: true },
      { texte: 'Exclusion numérique et accessibilité insuffisante', pertinent: true },
      { texte: 'Économie de l’attention et dark patterns', pertinent: true },
      { texte: 'Perte de souveraineté des données et technoféodalisme', pertinent: true },
      {
        texte: 'Consommation électrique des data centers',
        pertinent: false,
        pourquoi: "C'est un risque environnemental, or la question demande explicitement d'aller AU-DELÀ de l'écologie.",
      },
      {
        texte: 'Le risque d’un océan rouge dans le secteur du numérique',
        pertinent: false,
        pourquoi: "C'est un constat de structure concurrentielle, pas un risque induit par la numérisation.",
      },
    ],
    exemplesProposes: [
      { texte: 'SilverDigital : exclusion indirecte, −12 % de clients de plus de 65 ans', adapte: true, cas: 'silverdigital' },
      { texte: 'Art. 21A Cst-GE : droit à une vie hors ligne et à l’oubli', adapte: true },
      {
        texte: 'Les 3R appliqués au matériel informatique',
        adapte: false,
        pourquoi: "Réponse environnementale : hors du périmètre demandé par la question.",
      },
    ],
    arbitrages: [
      { texte: 'Personnalisation des services vs protection des données', correct: true },
      { texte: 'Efficacité du tout-numérique vs inclusion des publics vulnérables', correct: true },
      { texte: 'Réduire vs recycler', correct: false },
    ],
    checklist: [
      "J'ai cité au moins quatre familles de risques distinctes",
      "J'ai évité de me limiter à l'écologie, comme la question le demande",
      "J'ai relié les risques aux quatre axes de la RNE",
      "J'ai donné un exemple concret",
      "J'ai nommé un arbitrage",
      "J'ai conclu",
    ],
  },
}
