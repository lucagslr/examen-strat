import type { Notion } from '../types'

/** PARTIE II — DIAGNOSTIC EXTERNE : PESTEL, Porter, océan bleu (encyclopédie §8 à §10) */
export const notionsExterne: Notion[] = [
  // -------------------------------------------------------------------------
  // PESTEL
  // -------------------------------------------------------------------------
  {
    id: 'pestel',
    slug: 'pestel',
    nom: 'PESTEL',
    acronyme: 'PESTEL',
    aliases: ['PESTLE', 'macro-environnement', 'environnement macroéconomique', 'six facteurs'],
    categorie: 'diagnostic-externe',
    type: 'outil',
    priorite: 1,
    definitionCours:
      "L'outil d'analyse principal de l'environnement (macroéconomique et sociétal). Appréhender l'environnement à l'aide de six facteurs : Politique, Économique, Socioculturel, Technologique, E (éthique / écologique / environnemental et éthique), Légal.",
    explicationSimple:
      "Le climat général dans lequel toutes les entreprises baignent, quel que soit leur secteur. Un changement de gouvernement affecte l'automobile et la pharmacie.",
    pourquoiExiste:
      "Une entreprise ne contrôle pas ces facteurs. Elle ne peut donc que les anticiper et s'y adapter — ou tenter de les influencer (lobbying). Ne pas les voir, c'est se faire surprendre.",
    objectif:
      "Identifier les grandes évolutions du macro-environnement susceptibles d'affecter l'organisation, et les qualifier en opportunités ou menaces.",
    usage: {
      utiliserSi: [
        "la question parle d'environnement externe ou de grandes tendances",
        'politique, réglementation, subventions, taxes',
        'économie : inflation, taux d’intérêt, chômage, taux de change',
        'société : démographie, éducation, modes de vie, attentes sociétales',
        'technologie : normes, disponibilité des technologies, innovations à encourager',
        'environnement et éthique : RSE, pollution, déchets, droits humains, limites planétaires',
        'légal : lois, système répressif, conformité',
      ],
      nePasUtiliserPour: [
        'analyser les concurrents directs — c’est Porter',
        'analyser les ressources internes — c’est le diagnostic interne',
        'lister l’actualité sans lien avec le périmètre étudié',
      ],
    },
    commentUtiliser: [
      { titre: 'Définir le périmètre', detail: 'Quelle entreprise, quel secteur, quel territoire, quel horizon.' },
      { titre: 'Identifier les tendances', detail: 'Balayer les six facteurs.' },
      { titre: 'Sélectionner les facteurs pertinents', detail: '3 à 5 facteurs réellement pertinents, pas 30 faits d’actualité.' },
      { titre: 'Expliquer le mécanisme', detail: 'Comment ce fait se transmet-il jusqu’à l’entreprise ?' },
      { titre: 'Qualifier en opportunité ou menace', detail: 'Le format de sortie du PESTEL est déjà le format d’entrée du SWOT.' },
      { titre: 'Tirer une implication stratégique', detail: 'Que faut-il faire, à quelle échéance ?' },
    ],
    exemples: [
      {
        texte:
          "Fukushima (corrigé TP02A) — Économique : « en raison du remplacement de l'énergie nucléaire par d'autres ressources, le prix moyen de l'énergie augmente. Il en résulte des coûts plus importants pour les entreprises des secteurs consommant beaucoup d'énergie tels que la métallurgie ou la chimie. »",
        source: 'corrige-tp02a',
        cas: 'fukushima',
      },
      {
        texte:
          "Secteur alimentaire : P (réglementation agricole, souveraineté), E (prix matières, inflation), S (locavorisme, véganisme, défiance), T (agritech, traçabilité), É (bilan carbone, bien-être animal, gaspillage), L (étiquetage, normes sanitaires, lois anti-gaspillage).",
        source: 'questions-officielles',
      },
    ],
    phraseExamen:
      "Le PESTEL permet d'identifier les grandes évolutions du macro-environnement susceptibles de devenir des opportunités ou des menaces pour l'entreprise.",
    pieges: [
      {
        erreur: "Mettre « les concurrents sont nombreux » dans le facteur Économique.",
        pourquoi: "La concurrence directe relève de Porter. Le PESTEL contient l'inflation, les taux d'intérêt, le chômage — pas les rivaux.",
        test: 'Ce fait touche-t-il tous les secteurs, ou seulement le mien ?',
      },
      {
        erreur: 'Lister 30 faits d’actualité sans les qualifier.',
        pourquoi: 'Un bon PESTEL sélectionne 3 à 5 facteurs pertinents, chacun qualifié opportunité ou menace, avec une échéance.',
      },
      {
        erreur: 'Rester au constat sans expliquer le mécanisme.',
        pourquoi:
          "Le corrigé officiel explique toujours un mécanisme de transmission vers les entreprises, jamais un simple constat.",
        test: '« Ce fait produit X, ce qui pour nous signifie Y » — ai-je bien les deux ?',
      },
    ],
    variantes: [
      {
        sujet: 'Le « E » du PESTEL',
        formulations: [
          { libelle: 'Éthique', ou: 'Cours 2, slide 10 (liste des 6 facteurs)' },
          { libelle: 'Écologique', ou: 'Cours 2, slide 11 (tableau Opportunités/Menaces)' },
          { libelle: 'Le facteur environnemental et éthique', ou: 'Cours 2, slide 19 (titre détaillé)' },
          { libelle: 'Facteurs environnementaux et éthiques', ou: 'Cours 2, slide 9 (schéma des strates)' },
          { libelle: 'Facteur éthique', ou: 'TP02A corrigé (Fukushima)' },
          { libelle: 'Facteurs environnemental et éthique', ou: 'Cours 4 (durabilité), slide 36' },
        ],
        explication:
          "Dans ce cours, le « E » est un facteur fusionné couvrant à la fois la dimension environnementale/écologique et la dimension éthique. Le contenu de la slide 19 le confirme : il traite dans un même mouvement la RSE, l'éthique des affaires, la pollution, le traitement des déchets, les droits de l'homme, le droit du travail et la concurrence déloyale.",
        consigneExamen:
          "Énonce le facteur comme « environnemental et éthique » (formulation la plus complète et la plus fréquente), signale que les supports emploient aussi « éthique » ou « écologique », et traite systématiquement les deux dimensions.",
      },
      {
        sujet: 'Le « L »',
        formulations: [
          { libelle: 'Légal', ou: 'Cours 2, slide 20' },
          { libelle: 'Juridique', ou: 'TP02A corrigé' },
        ],
        explication: "Le corrigé officiel emploie « Juridique » là où le cours écrit « Légal ». Souplesse terminologique assumée.",
      },
    ],
    chiffres: [{ libelle: 'Nombre de facteurs', valeur: '6' }],
    motsCles: ['macro', 'tendances', 'externe', 'opportunités', 'menaces', 'anticipation'],
    sources: ['encyclopedie', 'corrige-tp02a', 'glossaire', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'facteur-politique',
    slug: 'facteur-politique',
    nom: 'Facteur politique (P)',
    nomCourt: 'Politique',
    aliases: ['P du PESTEL', 'gouvernement'],
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "La dimension politique de l'environnement décrit les processus et les actions des organismes gouvernementaux qui influencent les décisions et les actions des entreprises.",
    explicationSimple:
      "Quatre catégories : l'orientation idéologique du gouvernement ; les processus politiques (les entreprises cherchent à influencer la décision → lobbying) ; le gouvernement protecteur des intérêts individuels, locaux et nationaux (accords commerciaux bilatéraux, mondiaux, régionaux) ; le gouvernement en tant qu'acteur du marché, pouvant même prendre le contrôle de certains secteurs.",
    exemples: [
      {
        texte:
          "« L'élection de Donald Trump aux États-Unis se traduit par un changement assez radical d'attitude vis-à-vis des importations, que les constructeurs automobiles mondiaux – surtout allemands – vont devoir prendre en compte dans le cadre de leur stratégie. »",
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "Les catégories 3 et 4 (protectionnisme, État acteur) préfigurent exactement la 6ᵉ force de Porter.",
    motsCles: ['lobbying', 'idéologie', 'accords commerciaux', 'protectionnisme'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'facteur-economique',
    slug: 'facteur-economique',
    nom: 'Facteur économique (E)',
    nomCourt: 'Économique',
    aliases: ['E du PESTEL', 'inflation', 'taux d’intérêt'],
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Le fonctionnement de l'économie d'un État, le potentiel de développement futur et la disponibilité des ressources de production sont d'importants facteurs affectant l'attractivité de certaines localisations pour les entreprises.",
    explicationSimple:
      "Deux composantes : le(s) système(s) — le capitalisme domine, mais quelques secteurs restent sous contrôle du gouvernement (approvisionnement en eau, gestion des déchets, sécurité) ; et le développement économique — l'inflation, le taux de chômage, le taux d'intérêt, le taux de change.",
    motsCles: ['inflation', 'chômage', 'taux d’intérêt', 'taux de change', 'localisation'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'facteur-socioculturel',
    slug: 'facteur-socioculturel',
    nom: 'Facteur socioculturel (S)',
    nomCourt: 'Socioculturel',
    aliases: ['S du PESTEL', 'sociétal', 'démographie'],
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Ce facteur varie en fonction de la démographie, l'éducation, l'histoire et les traditions, la langue, le style et les conditions de vie, la religion. Les groupes suscitent des marchés particuliers qui offrent des opportunités pour de nouveaux acteurs.",
    explicationSimple:
      "C'est ici que se loge le vieillissement de la population : facteur démographique → segment de marché → opportunité ou menace selon la réponse de l'entreprise.",
    exemples: [
      {
        texte:
          "Fukushima : « un climat anxiogène croît à travers le monde… des personnes auparavant ignorantes des questions nucléaires rejoignent les mouvements écologiques ».",
        source: 'corrige-tp02a',
        cas: 'fukushima',
      },
    ],
    motsCles: ['démographie', 'modes de vie', 'acceptation sociale', 'vieillissement'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'facteur-technologique',
    slug: 'facteur-technologique',
    nom: 'Facteur technologique (T)',
    nomCourt: 'Technologique',
    aliases: ['T du PESTEL', 'normes', 'innovation'],
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "En raison de l'hétérogénéité des lois et infrastructures, les normes et la disponibilité des technologies peuvent considérablement varier d'un pays à l'autre, et nécessitent des ajustements du produit ou service, ce qui ajoute des coûts de production et de distribution.",
    explicationSimple:
      "Dans ce cours, le facteur technologique est d'abord présenté sous l'angle de l'hétérogénéité et des coûts d'adaptation — pas seulement de l'innovation.",
    exemples: [
      {
        texte:
          "« Les appareils électriques qui ne s'adaptent pas aux prises électriques locales et/ou fonctionnent avec un niveau de tension différent illustrent l'importance de ce facteur sur les conditions de concurrence. »",
        source: 'encyclopedie',
      },
    ],
    variantes: [
      {
        sujet: 'Angle du facteur technologique',
        formulations: [
          { libelle: 'Hétérogénéité des normes et coûts d’adaptation', ou: 'Cours 2, slide 18' },
          { libelle: 'Innovations à encourager pour appuyer la stratégie', ou: 'Cours 4 (durabilité), slide 36' },
        ],
        explication: 'Les deux lectures sont dans les supports : contrainte d’adaptation et levier d’innovation.',
      },
    ],
    motsCles: ['normes', 'disponibilité', 'coûts d’adaptation', 'innovation'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'facteur-environnemental-ethique',
    slug: 'facteur-environnemental-ethique',
    nom: 'Facteur environnemental et éthique (E)',
    nomCourt: 'Environnemental / éthique',
    aliases: ['écologique', 'éthique', 'É du PESTEL', 'RSE'],
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "La responsabilité sociale des entreprises ainsi que l'éthique des affaires sont deux questions importantes concernant le comportement institutionnel et commercial. Une attitude irresponsable et non éthique des entreprises génère des réactions de l'opinion publique, en particulier en raison du développement et de l'intensification de la portée des médias et réseaux sociaux. Contenus : pollution, traitement des déchets, droits de l'homme, droit du travail, compétition déloyale (corruption, dumping…).",
    explicationSimple:
      "Le facteur fusionné qui traite en même temps l'environnement et l'éthique — et qui introduit le mécanisme du risque réputationnel amplifié par les réseaux sociaux.",
    phraseExamen:
      "Cette slide est le pivot entre le chapitre diagnostic et le chapitre durabilité : elle introduit la RSE dans l'analyse externe et le mécanisme du greenwashing.",
    motsCles: ['RSE', 'éthique des affaires', 'réputation', 'pollution', 'droits humains'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'facteur-legal',
    slug: 'facteur-legal',
    nom: 'Facteur légal (L)',
    nomCourt: 'Légal',
    aliases: ['juridique', 'L du PESTEL', 'réglementation'],
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Les facteurs légaux couvrent deux aspects distincts : 1. les différentes lois qui encadrent le comportement des acteurs économiques, entreprises incluses ; 2. le système répressif, par lequel les autorités s'assurent que les lois sont bien respectées de tous. Champs cités : droit des contrats, droit du travail, droit à la propriété et la protection, sûreté du produit et réglementation sur la responsabilité, droit fiscal.",
    explicationSimple:
      "Le cours sépare la règle et son application. Une règle non appliquée n'a pas le même effet stratégique qu'une règle sanctionnée.",
    exemples: [
      {
        texte:
          "SilverDigital : « aucun manquement légal constaté » — la règle n'existe pas encore, mais le risque stratégique demeure.",
        cas: 'silverdigital',
      },
    ],
    motsCles: ['lois', 'système répressif', 'conformité'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'lobbying',
    slug: 'lobbying',
    nom: 'Lobbying',
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "Les entreprises cherchent à influencer la prise de décision des gouvernements en leur faveur, ou du moins à éviter un impact négatif → actions de lobbying.",
    explicationSimple:
      "Le seul moyen d'agir sur un facteur PESTEL que l'on subit par ailleurs. C'est ce qui relie le facteur politique à la 6ᵉ force de Porter.",
    motsCles: ['influence', 'gouvernement', '6ᵉ force'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },

  // -------------------------------------------------------------------------
  // PORTER
  // -------------------------------------------------------------------------
  {
    id: 'porter-five-forces',
    slug: 'porter-five-forces',
    nom: 'Les 5 (+1) forces de Porter',
    nomCourt: 'Porter',
    aliases: ['cinq forces', '5 forces', 'forces concurrentielles', 'Michael Porter', 'six forces'],
    categorie: 'diagnostic-externe',
    type: 'outil',
    priorite: 1,
    auteur: 'Michael Porter',
    annee: '1979 (Competitive Strategy)',
    definitionCours:
      "Pour Michael Porter, l'intensité concurrentielle est la résultante d'un certain nombre de forces qui s'exercent sur les firmes en place. Les entrants potentiels (menace d'une nouvelle concurrence) ; les offreurs de substituts ; les fournisseurs (pouvoir de négociation en amont) ; les acheteurs (pouvoir de négociation des clients) ; les concurrents directs (rivalité concurrentielle). Le pouvoir de l'État peut constituer une 6ᵉ force.",
    explicationSimple:
      "Cinq (ou six) prétendants au partage de la valeur créée par le secteur. La rentabilité qui reste à l'entreprise est celle que les autres n'ont pas réussi à capter.",
    pourquoiExiste:
      "Porter ne sert pas à lister les concurrents mais à mesurer l'attractivité d'un secteur, c'est-à-dire sa capacité à laisser de la rentabilité aux entreprises qui y opèrent.",
    objectif: "Évaluer l'intensité concurrentielle et donc l'attractivité structurelle d'une industrie.",
    usage: {
      utiliserSi: [
        "on veut comprendre la pression exercée par les acteurs directs du secteur",
        "on cherche à savoir si un secteur est rentable, et pourquoi",
        "on veut conclure sur un océan rouge ou bleu",
        "on analyse le pouvoir des fournisseurs (main-d'œuvre comprise) ou des clients",
      ],
      nePasUtiliserPour: [
        "les facteurs macro (inflation, élections, démographie) — c'est le PESTEL",
        "les ressources et compétences internes — c'est le diagnostic interne",
        "faire une simple liste de concurrents sans mesurer l'intensité",
      ],
    },
    commentUtiliser: [
      { titre: 'Définir le secteur analysé', detail: '« L’eau embouteillée mondiale », pas « les boissons ».' },
      { titre: 'Identifier les acteurs concrets', detail: 'Noms, types, pour chaque force.' },
      { titre: 'Évaluer la force', detail: 'Chercher ce qui l’augmente ET ce qui la diminue.' },
      { titre: 'Noter de 0 à 5 et justifier factuellement', detail: 'La note résume l’analyse, elle ne la remplace pas.' },
      { titre: 'Tracer la toile', detail: 'Plus le polygone est grand, moins le secteur est attractif.' },
      { titre: 'Conclure sur l’attractivité', detail: 'Océan rouge/bleu, mouvements de concentration, positionnement recommandé.' },
    ],
    exemples: [
      {
        texte:
          "Eaux embouteillées (corrigé TP02B) : Rivalité 4 (Nestlé, Danone, Coca-Cola, Pepsi + acteurs locaux) ; Fournisseurs 3 (les sources sont importantes, mais diversification plastique/verre et mise en concurrence du transport) ; Acheteurs 3 (GMS, Horeca, individus ; facile de changer de marque, mais les préoccupations sanitaires augmentent la demande) ; Nouveaux entrants 2 (barrières hautes : dépenses de communication et accès aux sources) ; Substituts 4 (eau du robinet, toutes les autres boissons). Conclusion : océan rouge.",
        source: 'corrige-tp02b',
        cas: 'eaux-embouteillees',
      },
    ],
    phraseExamen:
      "Les cinq forces sont cinq prétendants au partage de la valeur créée par le secteur : si un secteur crée beaucoup de valeur, les intervenants qui participent à chacune des cinq forces chercheront à se l'approprier.",
    pieges: [
      {
        erreur: 'Lister des concurrents sans mesurer l’intensité.',
        pourquoi: "Porter mesure l'attractivité, pas le nombre d'acteurs.",
      },
      {
        erreur: 'Oublier de relier chaque force à la rentabilité.',
        pourquoi: "Chaque force a « un lien direct, clair et prévisible avec la rentabilité de tout secteur ».",
        test: 'Ai-je dit, pour chaque force, si elle agit sur le prix, sur les coûts, ou sur les deux ?',
      },
      {
        erreur: 'Mettre les facteurs macro dans Porter.',
        pourquoi: 'Inflation et élections relèvent du PESTEL.',
      },
      { erreur: 'Confondre substitut et concurrent.', pourquoi: "Le concurrent fait la même chose ; le substitut satisfait le même besoin autrement." },
      { erreur: 'Noter sans justifier.', pourquoi: "Un examinateur acceptera 3 ou 4 si l'argumentation est solide ; il refusera un 5 non justifié." },
      { erreur: 'Oublier la 6ᵉ force (l’État).', pourquoi: 'Le cours la met explicitement au tableau opportunités/menaces.' },
    ],
    chiffres: [
      { libelle: 'Forces', valeur: '5 (+1 : l’État)' },
      { libelle: 'Échelle de notation de la toile', valeur: '0 à 5' },
    ],
    motsCles: ['intensité concurrentielle', 'attractivité', 'rentabilité', 'industrie', 'toile'],
    sources: ['encyclopedie', 'corrige-tp02b', 'glossaire', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'intensite-concurrentielle',
    slug: 'intensite-concurrentielle',
    nom: 'Intensité concurrentielle',
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "La résultante d'un certain nombre de forces qui s'exercent sur les firmes en place.",
    explicationSimple: "La pression totale que subit une entreprise du fait de la structure de son secteur.",
    motsCles: ['pression', 'forces', 'secteur'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'attractivite-industrie',
    slug: 'attractivite-industrie',
    nom: "Attractivité d'une industrie",
    nomCourt: 'Attractivité',
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "En règle générale, plus une force est puissante, plus la pression qu'elle exerce sur les prix ou les coûts est élevée, et moins le secteur est attrayant.",
    explicationSimple:
      "Capacité structurelle du secteur à générer de la rentabilité pour ses acteurs. Elle diminue quand les forces augmentent.",
    phraseExamen: "Un secteur très rentable a une petite toile de Porter.",
    motsCles: ['rentabilité structurelle', 'toile'],
    sources: ['encyclopedie'],
    provenance: 'interpretation',
  },
  {
    id: 'profit-prix-couts',
    slug: 'profit-prix-couts',
    nom: 'Profit = Prix − Coûts (équation de Porter)',
    nomCourt: 'Profit = Prix − Coûts',
    aliases: ['équation fondamentale'],
    categorie: 'diagnostic-externe',
    type: 'modele',
    priorite: 1,
    definitionCours:
      "L'équation fondamentale : Profit = Prix – Coûts. Le coût est celui de toutes les ressources utilisées, y compris les investissements, pour entrer en concurrence. Le prix reflète la valeur que les clients accordent aux produits, c'est-à-dire ce qu'ils sont prêts à payer.",
    explicationSimple:
      "Une équation unitaire, volontairement simplifiée, qui sert à montrer par quel canal chaque force agit : en écrasant les prix, en gonflant les coûts, ou les deux.",
    exemples: [
      {
        texte:
          "Nouveaux entrants ↑ → rentabilité ↓ parce que Prix ↓ Coûts ↑. Fournisseurs ↑ → rentabilité ↓ parce que Coûts ↑ (seule force qui n'agit que sur les coûts). Clients ↑, substituts ↑, rivalité ↑ → Prix ↓ Coûts ↑.",
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "Porter simplifie volontairement le profit en Prix – Coûts, à l'échelle unitaire, pour rendre visible le canal d'action de chaque force. Dans le Business Model, l'équation de profit est plus large puisqu'elle intègre le volume et la structure des revenus et des charges. Porter explique la pression, le BM explique l'architecture.",
    pieges: [
      {
        erreur: "Confondre avec l'équation de profit du business model.",
        pourquoi: "Porter raisonne à l'unité ; le RCOV raisonne en agrégats (volume et structure des revenus et des charges).",
      },
    ],
    motsCles: ['unitaire', 'canal', 'rentabilité'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'pouvoir-clients',
    slug: 'pouvoir-clients',
    nom: 'Pouvoir de négociation des clients',
    nomCourt: 'Pouvoir des clients',
    aliases: ['acheteurs', 'buyers', 'pouvoir des acheteurs'],
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Quand des clients ont suffisamment de pouvoir, ils peuvent faire baisser les prix dans l'ensemble d'un secteur ou forcer les entreprises à ajouter de la valeur à leurs produits et services. La rentabilité du secteur sera moins élevée, car ce sont les clients qui s'approprieront une bonne partie de la valeur créée.",
    explicationSimple:
      "Trois conditions de la sensibilité au prix : les produits achetés sont non différenciés, chers (relativement à leurs autres coûts ou à leurs revenus), et sans conséquence pour leur propre rendement. Les acheteurs sensibles aux prix exercent plus volontiers leur pouvoir.",
    exemples: [
      {
        texte:
          "La caméra de cinéma : « une caméra est un produit très différencié, dont le prix est peu élevé comparativement aux autres coûts de production, et dont l'impact sur le succès d'un film est énorme. ➢ La qualité est donc plus importante que le prix. » Les trois conditions sont inversées, donc le pouvoir de l'acheteur est faible.",
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "Si un produit est banalisé, cher dans le budget du client et sans effet sur sa performance, alors le client négociera durement.",
    motsCles: ['sensibilité au prix', 'différenciation', 'concentration', 'coût de changement'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'pouvoir-fournisseurs',
    slug: 'pouvoir-fournisseurs',
    nom: 'Pouvoir de négociation des fournisseurs',
    nomCourt: 'Pouvoir des fournisseurs',
    aliases: ['suppliers', 'amont', 'filière amont'],
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "S'ils ont du pouvoir, les fournisseurs peuvent soit obtenir de meilleures conditions, soit facturer des prix plus élevés. La rentabilité du secteur s'en trouvera amoindrie, car ce sont les fournisseurs qui s'approprieront une bonne partie de la valeur créée. Pour évaluer le pouvoir des fournisseurs, il faut tenir compte de tout ce qui entre dans la fabrication d'un produit ou d'un service donné, y compris les coûts de la main-d'œuvre.",
    explicationSimple:
      "La seule force qui n'agit que sur les coûts. Logique : ton fournisseur te fait payer plus cher, il ne parle pas à tes clients.",
    exemples: [
      {
        texte: "« Le secteur des fabricants de micro-ordinateurs, qui est sous la mainmise de Microsoft et d'Intel. »",
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "La main-d'œuvre est un fournisseur : syndicats, rareté des compétences et pression salariale relèvent du pouvoir des fournisseurs. Très utile pour un secteur de services ou l'IT (pénurie de développeurs).",
    motsCles: ['amont', 'main-d’œuvre', 'coûts', 'dépendance'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'menace-substituts',
    slug: 'menace-substituts',
    nom: 'Menace des produits de remplacement (substituts)',
    nomCourt: 'Substituts',
    aliases: ['substitut', 'produit de remplacement', 'substitution'],
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Un produit de remplacement répond aux mêmes besoins de base qu'un produit (ou un service) existant, mais de façon différente. Ils représentent une menace qui nuit à la rentabilité d'un secteur, car ils forcent les entreprises qui en font déjà partie à limiter leurs prix pour maintenir un certain volume de ventes. Pour évaluer la menace, il faut déterminer s'il offre un rapport prix-rendement plus intéressant que le produit original.",
    explicationSimple:
      "Le concurrent fait la même chose que toi. Le substitut satisfait le même besoin autrement. L'eau du robinet est un substitut de l'eau en bouteille ; Evian est un concurrent de Vittel.",
    exemples: [
      {
        texte:
          "« Des logiciels qui permettent de préparer les déclarations de revenus : ils peuvent remplacer les services des comptables professionnels. »",
        source: 'encyclopedie',
      },
      {
        texte:
          "« L'OPEP a écarté la menace des produits de remplacement en limitant le prix du pétrole. C'est la raison pour laquelle les écologistes favorisent l'augmentation des taxes sur l'essence. »",
        source: 'encyclopedie',
      },
      {
        texte:
          "« Les voitures électriques, qui deviendront peut-être d'importants produits de remplacement des voitures à moteur à combustion ; cette situation aura des répercussions en cascade dans des secteurs connexes, notamment la métallurgie. »",
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "Maintenir un prix bas est une stratégie de dissuasion des substituts ; taxer l'essence revient à rendre le substitut compétitif de force. C'est un exemple direct de la manière dont un facteur PESTEL (fiscalité) modifie une force de Porter.",
    pieges: [
      {
        erreur: 'Confondre substitut et concurrent.',
        pourquoi: 'Le substitut répond au même besoin par un autre moyen.',
        test: 'Est-ce le même métier ? Oui → concurrent. Non, mais même besoin → substitut.',
      },
    ],
    motsCles: ['besoin', 'rapport prix-rendement', 'menace'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'menace-nouveaux-entrants',
    slug: 'menace-nouveaux-entrants',
    nom: 'Menace des nouveaux entrants',
    nomCourt: 'Nouveaux entrants',
    aliases: ['entrants potentiels', 'new entrants'],
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Lorsque de nouvelles entreprises s'implantent dans un secteur, deux choses se produisent : elles cherchent à gagner des parts de marché et elles augmentent les capacités de production du secteur. Pour protéger leur secteur, les entreprises établies doivent créer des obstacles à l'entrée. Ces entreprises nuisent à leur propre rentabilité : elles limitent leurs prix, car des prix plus élevés ne feraient que rendre le secteur plus attrayant pour les concurrents potentiels, et elles dépensent davantage pour satisfaire leurs clients.",
    explicationSimple:
      "La menace agit même si personne n'entre. Le simple fait que l'entrée soit facile force les acteurs en place à brider leurs prix et à surinvestir. C'est une pression permanente, pas un événement.",
    exemples: [
      {
        texte:
          "« Dans le secteur des chaînes de cafés, les obstacles à l'entrée sont faibles : un leader comme Starbucks doit constamment investir pour rafraîchir le décor de ses cafés et renouveler son offre. »",
        source: 'encyclopedie',
      },
    ],
    motsCles: ['barrières', 'parts de marché', 'capacités'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'rivalite-concurrents',
    slug: 'rivalite-concurrents',
    nom: 'Rivalité entre concurrents',
    nomCourt: 'Rivalité',
    aliases: ['concurrence directe', 'rivalry'],
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Plus la rivalité entre les entreprises d'un secteur est intense, moins leur rentabilité est forte. Cette rivalité peut se jouer à plusieurs niveaux : guerre des prix, publicité, lancement de nouveaux produits ou amélioration des services offerts à la clientèle.",
    explicationSimple:
      "Ce que Porter mesure n'est pas le nombre de concurrents mais l'intensité et la nature de l'affrontement.",
    exemples: [
      {
        texte:
          "« Les compagnies pharmaceutiques se sont toujours fait concurrence sur le plan de la R&D et du marketing, en évitant toutefois la guerre des prix. » Une industrie peut être extrêmement concurrentielle sans guerre des prix, en déplaçant l'affrontement.",
        source: 'encyclopedie',
      },
    ],
    motsCles: ['guerre des prix', 'R&D', 'saturation'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'etat-sixieme-force',
    slug: 'etat-sixieme-force',
    nom: "L'État — la 6ᵉ force",
    nomCourt: 'État (6ᵉ force)',
    aliases: ['sixième force', 'pouvoirs publics', 'régulateur'],
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "L'intervention de l'État se fait souvent à la demande des concurrents d'une industrie pour protéger leur marché : intérêt général (emploi) et indépendance nationale (défense). Ce protectionnisme passe par le pouvoir de régulation de l'État (règlements et barrières légales, quotas, droits de douane, taxations), des subventions aux « champions nationaux » n'ayant pas encore la taille critique, et le principe de l'exception culturelle ou agricole.",
    explicationSimple:
      "Le cours présente l'État non comme un régulateur neutre, mais comme une force mobilisée par les entreprises elles-mêmes pour protéger leur marché.",
    phraseExamen:
      "Cela relie directement le facteur politique du PESTEL (lobbying) à la 6ᵉ force de Porter. En Suisse : exception agricole, subventions, normes strictes sur les data centers.",
    motsCles: ['protectionnisme', 'régulation', 'subventions', 'quotas'],
    sources: ['encyclopedie', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'barriere-entree',
    slug: 'barriere-entree',
    nom: "Barrière (obstacle) à l'entrée",
    nomCourt: "Barrière à l'entrée",
    aliases: ['obstacle à l’entrée', 'barrières d’entrée', 'entry barrier'],
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Ce que les entreprises établies créent pour décourager les nouveaux entrants. Dans le corrigé TP02B, les barrières identifiées sont : les dépenses pour la communication (entreprises mondiales) et l'accès aux sources locales.",
    explicationSimple:
      "📚 Complément : tout élément rendant coûteux ou difficile l'entrée d'un nouvel acteur — économies d'échelle, capital requis, accès aux canaux de distribution, technologie protégée, notoriété, réglementation.",
    variantes: [
      {
        sujet: 'Terminologie',
        formulations: [
          { libelle: '« obstacles à l’entrée »', ou: 'Cours 2, slide 33' },
          { libelle: '« barrières d’entrée »', ou: 'corrigé TP02B' },
        ],
        explication: 'Les deux termes sont employés dans les supports pour la même notion.',
      },
    ],
    motsCles: ['protection', 'entrée', 'coût'],
    sources: ['encyclopedie', 'corrige-tp02b', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'cout-changement',
    slug: 'cout-changement',
    nom: 'Coût de changement (switching cost)',
    nomCourt: 'Coût de changement',
    aliases: ['switching cost', 'coût de transfert'],
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "📚 Coût supporté par un client pour passer à un autre fournisseur. Faible → pouvoir client élevé. 📘 Implicite dans le corrigé TP02B : « il est facile de changer de marque ».",
    explicationSimple: "Plus il est coûteux de partir, moins le client peut négocier.",
    motsCles: ['fidélité', 'verrouillage', 'pouvoir client'],
    sources: ['encyclopedie', 'corrige-tp02b'],
    provenance: 'complement',
  },
  {
    id: 'concentration',
    slug: 'concentration',
    nom: 'Concentration',
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "📚 Degré auquel un petit nombre d'acteurs détient une grande part du marché. 📘 Implicite : « sous la mainmise de Microsoft et d'Intel ».",
    explicationSimple: "Peu d'acteurs = beaucoup de pouvoir pour chacun.",
    motsCles: ['part de marché', 'oligopole'],
    sources: ['encyclopedie'],
    provenance: 'complement',
  },
  {
    id: 'differenciation',
    slug: 'differenciation',
    nom: 'Différenciation (concept)',
    nomCourt: 'Différenciation',
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Explicite dans le cours : produit « non différencié » → client sensible au prix ; caméra « très différenciée » → client insensible au prix.",
    explicationSimple:
      "Ce qui fait qu'un produit n'est pas interchangeable avec celui du voisin — et donc que le client accepte de payer plus.",
    motsCles: ['valeur perçue', 'unicité'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'rapport-prix-rendement',
    slug: 'rapport-prix-rendement',
    nom: 'Rapport prix-rendement',
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 3,
    definitionCours: "Critère d'évaluation de la menace d'un substitut.",
    explicationSimple:
      "Le substitut est menaçant s'il offre un meilleur rapport entre ce qu'il coûte et ce qu'il apporte.",
    motsCles: ['substitut', 'évaluation'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'toile-porter',
    slug: 'toile-porter',
    nom: 'La toile (pentagone) de Porter',
    nomCourt: 'Toile de Porter',
    aliases: ['radar', 'pentagone', 'notation 0-5'],
    categorie: 'diagnostic-externe',
    type: 'outil',
    priorite: 2,
    definitionCours:
      "Un radar à cinq axes gradué de 0 à 5. « Le modèle des 5 forces permet d'analyser l'environnement concurrentiel. »",
    explicationSimple:
      "Plus le polygone tracé est grand, plus les forces sont puissantes, donc moins le secteur est attractif. Un secteur très rentable a une petite toile.",
    commentUtiliser: [
      { titre: 'Noter chaque force de 0 à 5' },
      {
        titre: 'Justifier factuellement',
        detail:
          '« Je note X parce que [fait 1 du cas], ce qui augmente/diminue la force, tempéré cependant par [fait 2], d’où une note intermédiaire de X. »',
      },
      { titre: 'Lire le profil', detail: 'Quelles forces dominent ? Grande toile → océan rouge.' },
    ],
    phraseExamen:
      "La justification est plus importante que la valeur numérique : la note résume l'analyse, elle ne la remplace pas.",
    pieges: [
      {
        erreur: 'Donner une note sans justification factuelle.',
        pourquoi: "Un examinateur acceptera 3 ou 4 si l'argumentation est solide ; il refusera un 5 non justifié.",
      },
      {
        erreur: 'Oublier de nuancer.',
        pourquoi:
          "Les justifications du corrigé sont à double sens : « il est facile de changer de marque MAIS les préoccupations sanitaires augmentent la demande » → c'est ce qui produit un 3 et non un 4. La nuance produit la note.",
      },
    ],
    motsCles: ['radar', 'notation', 'justification'],
    sources: ['encyclopedie', 'corrige-tp02b'],
    provenance: 'cours',
  },

  // -------------------------------------------------------------------------
  // OCÉAN BLEU / ROUGE
  // -------------------------------------------------------------------------
  {
    id: 'ocean-rouge',
    slug: 'ocean-rouge',
    nom: 'Océan rouge',
    aliases: ['red ocean', 'marché saturé'],
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 2,
    auteur: 'W. Chan Kim et Renée Mauborgne',
    definitionCours:
      "L'océan rouge décrit un marché qui existe d'ores et déjà et où se joue une concurrence intense. La couleur rouge symbolise l'intensité de la concurrence, le sang perdu par les entreprises.",
    explicationSimple: "Un marché où tout le monde se bat pour les mêmes clients avec les mêmes armes.",
    exemples: [
      {
        texte:
          "« L'industrie de la bière en Allemagne : la concurrence y est féroce et le marché est très saturé. Un grand nombre de petites brasseries locales ont couru à la ruine ou ont été reprises par de grandes marques. »",
        source: 'encyclopedie',
      },
      {
        texte:
          "Eaux embouteillées : « le marché mondial est plus un océan rouge. Il y a une concurrence très forte qui nécessite une réduction des coûts par la taille et impose une forte différenciation. »",
        source: 'corrige-tp02b',
        cas: 'eaux-embouteillees',
      },
    ],
    motsCles: ['saturation', 'concurrence frontale'],
    sources: ['encyclopedie', 'corrige-tp02b', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'ocean-bleu',
    slug: 'ocean-bleu',
    nom: 'Stratégie océan bleu',
    nomCourt: 'Océan bleu',
    aliases: ['blue ocean', 'nouvel espace de marché', 'Kim Mauborgne'],
    categorie: 'diagnostic-externe',
    type: 'modele',
    priorite: 2,
    auteur: 'W. Chan Kim et Renée Mauborgne',
    annee: '2013 (2ᵉ édition)',
    origine: "Stratégie Océan Bleu, 2ᵉ édition, 2013, Comment créer de nouveaux espaces stratégiques.",
    definitionCours:
      "L'océan bleu décrit de nouveaux espaces de marché, où la concurrence est minime. La couleur bleue connote la beauté et l'étendue de la mer, sans un navire (celui du concurrent) en vue. La stratégie océan bleu vise à créer un espace stratégique vierge de toute concurrence directe et se positionner sur une nouvelle demande. La Durabilité (éco-conception, impact social) devient un levier innovation-valeur.",
    explicationSimple:
      "Au lieu de mieux se battre, on change de terrain. C'est la conclusion qualitative de l'analyse de Porter : forces fortes ⇒ rouge, faibles ⇒ bleu.",
    commentUtiliser: [
      { titre: 'Analyser Porter', detail: 'Obtenir le profil des forces.' },
      { titre: 'Qualifier l’espace', detail: 'Forces globalement fortes ⇒ océan rouge ; faibles ou absentes ⇒ océan bleu.' },
      { titre: 'Si rouge, choisir', detail: 'Se battre (coûts / différenciation) ou sortir du rouge par l’ERAC.' },
      { titre: 'Appliquer ERAC', detail: 'Pour chaque facteur de concurrence : exclure ? atténuer ? renforcer ? créer ?' },
      {
        titre: 'Vérifier l’innovation-valeur',
        detail:
          'Ma proposition augmente-t-elle la valeur client ET réduit-elle mes coûts ? Si elle ajoute seulement de la valeur en ajoutant du coût, ce n’est pas un océan bleu.',
      },
      { titre: 'Injecter la durabilité comme levier', detail: 'Éco-conception et circularité servent à la fois de « Créer » et d’« Exclure ».' },
    ],
    exemples: [
      {
        texte:
          "Cirque du Soleil : aucun animal sauvage (réduction de coûts, les animaux exigeant un entretien spécifique et régulier) + shows spectaculaires inspirés du théâtre → « le seul cirque à proposer un tel spectacle ».",
        source: 'encyclopedie',
      },
      {
        texte:
          "Netflix : élimination des pénalités de retard et des déplacements en magasin + catalogue personnalisé 24/7 et streaming illimité → « a redéfini complètement l'expérience de consommation ».",
        source: 'encyclopedie',
      },
      {
        texte:
          "Nespresso : machines design + capsules exclusives et recyclables + service premium → « un nouveau segment entre le café instantané et les coffee shops, générant des marges exceptionnelles dans une industrie très concurrentielle ».",
        source: 'encyclopedie',
      },
      { texte: "Facebook, qui a créé un nouvel espace incontesté de marché, celui des réseaux sociaux sur internet.", source: 'encyclopedie' },
    ],
    phraseExamen:
      "Le concept d'océan bleu est intrinsèquement lié à la durabilité, car il encourage les entreprises à revoir leurs modèles d'affaires pour créer de la valeur à long terme.",
    limites: [
      "📚 Non explicité dans les supports : un océan bleu rougit. Le succès attire les imitateurs — Facebook, cité comme océan bleu par le cours, opère aujourd'hui dans un marché hyperconcurrentiel. L'avantage n'est durable que si l'entreprise construit des barrières à l'entrée derrière son innovation.",
      "Nespresso est un cas discutable si l'on questionne l'usage de capsules individuelles : bonne nuance critique à l'oral.",
    ],
    motsCles: ['nouvel espace', 'demande créée', 'innovation', 'ERAC'],
    sources: ['encyclopedie', 'glossaire', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'erac',
    slug: 'erac',
    nom: 'Matrice ERAC',
    acronyme: 'ERAC',
    aliases: ['Exclure Renforcer Atténuer Créer', 'Éliminer Réduire Augmenter Créer', 'grille des quatre actions'],
    categorie: 'diagnostic-externe',
    type: 'outil',
    priorite: 2,
    definitionCours:
      "Exclure : supprimer les fonctionnalités inutiles, non-créatrices de valeur pour le marché. Renforcer : examiner si en augmentant des caractéristiques ou des performances, il est possible d'attirer plus de clients. Atténuer : examiner la proposition de valeur finale et identifier les aspects de ces offres qui ne sont pas nécessaires aux buts ou objectifs de l'entreprise. Créer : innover en créant de nouvelles propositions de valeur — inventer des produits ou services qui offrent aux clients quelque chose de radicalement différent, une offre disruptive.",
    explicationSimple:
      "Deux actions qui réduisent les coûts, deux actions qui augmentent la valeur — ce qui produit exactement l'innovation-valeur.",
    variantes: [
      {
        sujet: "L'acronyme ERAC",
        formulations: [
          { libelle: 'Éliminer – Réduire – Augmenter – Créer', ou: 'Cours 3 (chaîne de valeur), slide 3' },
          { libelle: 'Exclure – Renforcer – Atténuer – Créer', ou: 'Cours BM (Business Model durable), slide 22 — « Matrice ERAC »' },
        ],
        explication:
          "Les deux couples sont conceptuellement identiques : Éliminer=Exclure et Réduire=Atténuer réduisent les coûts ; Augmenter=Renforcer et Créer augmentent la valeur. Seule l'étiquette change. ⚠️ Attention : dans la formulation ERAC, l'ordre des lettres mélange les deux logiques (Exclure↓, Renforcer↑, Atténuer↓, Créer↑), alors que la formulation du Cours 3 les groupe (Éliminer↓, Réduire↓, Augmenter↑, Créer↑). Ne te trompe pas sur le sens de « R » et de « A » selon la version citée.",
        consigneExamen: "L'acronyme retenu par le cours BM est ERAC. Cite les deux formulations si on t'interroge dessus.",
      },
    ],
    exemples: [
      {
        texte:
          "Cirque du Soleil lu avec ERAC : Exclure les animaux sauvages (↓ coûts d'entretien) et Créer un spectacle théâtral (↑ valeur).",
        source: 'encyclopedie',
      },
    ],
    motsCles: ['quatre actions', 'coûts', 'valeur'],
    sources: ['encyclopedie', 'glossaire', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'innovation-valeur',
    slug: 'innovation-valeur',
    nom: 'Innovation-valeur',
    aliases: ['value innovation', 'innovation utile'],
    categorie: 'diagnostic-externe',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Garantir que vous créez simultanément de la valeur pour le client tout en réduisant vos coûts.",
    explicationSimple:
      "Contre-intuitif : la logique classique oppose différenciation (plus de valeur, plus de coûts) et domination par les coûts (moins de coûts, moins de valeur). L'océan bleu prétend faire les deux en même temps.",
    phraseExamen:
      "Si ma proposition ne fait qu'ajouter de la valeur en ajoutant du coût, ce n'est pas un océan bleu, c'est de la différenciation classique.",
    motsCles: ['valeur', 'coûts', 'simultané'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
]
