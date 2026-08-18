import type { Notion } from '../types'

/** PARTIE II — DIAGNOSTIC INTERNE (encyclopédie §11 à §14) */
export const notionsInterne: Notion[] = [
  {
    id: 'ressources',
    slug: 'ressources',
    nom: "Ressources de l'entreprise",
    nomCourt: 'Ressources',
    aliases: ['actifs', 'resources'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Les ressources de l'entreprise correspondent à des actifs matériels ou immatériels que possède l'entreprise et qu'elle va pouvoir déployer et valoriser pour générer des biens, produits ou services.",
    explicationSimple: "Ce que l'entreprise possède — un stock, pas une aptitude.",
    pourquoiExiste:
      "Porter dit ce que le secteur fait subir. Le diagnostic interne répond à la question inverse : de quoi disposes-tu pour y répondre ? « L'avantage concurrentiel ne vient pas seulement du marché, mais de la manière dont les entreprises organisent leurs activités en interne. »",
    commentUtiliser: [
      { titre: 'Lister', detail: 'Toutes les ressources mentionnées ou déductibles du cas.' },
      { titre: 'Classer', detail: 'Dans les 6 natures : physiques, financières, humaines, technologiques, organisationnelles, de réputation.' },
      { titre: 'Qualifier', detail: 'Tangible ? transférable ? imitable ?' },
      { titre: 'Sélectionner', detail: 'Celles qui sont peu transférables et peu imitables → candidates à l’avantage durable.' },
      { titre: 'Relier', detail: 'Chaque ressource clé à l’activité de la chaîne de valeur qu’elle sert.' },
      { titre: 'Basculer dans le SWOT', detail: 'Ressource forte et rare = Force ; ressource manquante ou obsolète = Faiblesse.' },
    ],
    exemples: [
      {
        texte:
          "Oncle Hansi : les droits de l'œuvre de Jean-Jacques Waltz (réputation + juridique, non transférable, acquis en 2012) — « l'entreprise possède le label qui fonde la proposition de valeur ».",
        source: 'corrige-hansi',
        cas: 'oncle-hansi',
      },
      {
        texte:
          "SilverDigital : la ressource la plus précieuse est la base de clients fidèles depuis 20 ans (réputation) — et c'est précisément celle que la stratégie « Digital First » détruit (−12 % de clients de plus de 65 ans).",
        cas: 'silverdigital',
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "SilverDigital optimise ses ressources financières et technologiques — les plus facilement imitables — en dégradant sa ressource de réputation, la seule difficilement imitable. C'est un arbitrage défavorable au regard de la théorie des ressources telle que présentée dans le cours.",
    pieges: [
      {
        erreur: "Conclure à un avantage durable à partir d'équipements et de trésorerie.",
        pourquoi: "Ce sont des ressources tangibles et cessibles sur des marchés.",
      },
    ],
    variantes: [
      {
        sujet: 'Classement des brevets',
        formulations: [
          { libelle: 'Brevets parmi les ressources tangibles', ou: 'Cours 3, slide 7' },
          { libelle: 'Technologie/brevets parmi les actifs immatériels', ou: 'Cours 3, slide 10' },
          { libelle: 'Ressources technologiques (assez peu tangibles)', ou: 'Cours 3, slide 13' },
        ],
        explication:
          "Souplesse du support, pas contradiction profonde : le brevet est un actif juridique identifiable (donc évaluable) mais qui protège un savoir immatériel.",
        consigneExamen: 'Signale-le si on t’interroge dessus.',
      },
      {
        sujet: 'Trois grilles qui se recouvrent',
        formulations: [
          { libelle: 'Tangible / intangible', ou: 'slides 7 et 9 — critère : facilité d’identification et d’évaluation' },
          { libelle: '3+3 catégories d’actifs', ou: 'slides 8 et 10' },
          { libelle: '6 natures avec transférabilité / imitabilité', ou: 'slide 13' },
        ],
        explication:
          "La grille des 6 natures (slide 13) est la synthèse des deux autres, enrichie du critère décisif. C'est celle à restituer en priorité.",
      },
    ],
    motsCles: ['actifs', 'possède', 'matériel', 'immatériel'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'ressources-tangibles',
    slug: 'ressources-tangibles',
    nom: 'Ressources tangibles (matérielles)',
    nomCourt: 'Ressources matérielles',
    aliases: ['tangible', 'matérielles', 'actifs corporels'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Les ressources tangibles ou matérielles sont constituées d'actifs aisément identifiables, tels que les infrastructures, les équipements, les usines, les brevets, les systèmes, le circuit de distribution, etc. Les moyens financiers sont aussi à considérer comme des actifs. Ces ressources concrètes sont relativement faciles à identifier et à évaluer.",
    explicationSimple:
      "Trois catégories : ressources financières (résultat, flux de trésorerie, capacité de financement), ressources physiques (site de production, équipement, capacité de production, état, niveau d'innovation), ressources humaines (effectif, compétences et niveau de qualification, ajustement de la masse salariale).",
    phraseExamen: "Facile à identifier → facile à acheter → facile à imiter → avantage éphémère.",
    motsCles: ['financières', 'physiques', 'humaines', 'évaluables'],
    sources: ['encyclopedie', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'ressources-intangibles',
    slug: 'ressources-intangibles',
    nom: 'Ressources intangibles (immatérielles)',
    nomCourt: 'Ressources immatérielles',
    aliases: ['intangible', 'immatérielles', 'richesse cachée'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Les ressources intangibles ou immatérielles sont plus difficiles à évaluer et mettent en jeu la « richesse cachée » de l'entreprise à travers ses ressources technologiques, les qualifications de ses collaborateurs, l'engagement et la cohésion de ceux-ci, la culture d'entreprise ou, par exemple, la réputation et l'image de marque.",
    explicationSimple:
      "Trois catégories d'actifs immatériels : l'organisation et le management (procédures, contrôle qualité), la technologie utilisée (brevets, allocation R&D), l'image de marque (réputation, notoriété).",
    phraseExamen:
      "Une usine s'achète. Une culture d'entreprise, une réputation construite sur vingt ans ou une routine organisationnelle, non. Immatériel = peu transférable = peu imitable = avantage durable.",
    motsCles: ['réputation', 'organisation', 'technologie', 'culture'],
    sources: ['encyclopedie', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'transferabilite',
    slug: 'transferabilite',
    nom: 'Transférabilité, appropriabilité, imitabilité',
    nomCourt: 'Transférabilité',
    aliases: ['imitabilité', 'appropriabilité', 'cessibilité'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Plus les ressources sont immatérielles et liées aux processus, plus elles sont propres à l'entreprise, et moins elles peuvent faire l'objet d'échange ou d'imitation, car elles sont difficilement appropriables par d'autres acteurs. La notion de transférabilité des ressources porte sur la possibilité de les acquérir à l'extérieur de la firme.",
    explicationSimple:
      "C'est LA phrase qui explique pourquoi certaines ressources créent un avantage durable et d'autres non.",
    commentUtiliser: [
      { titre: 'Lire le tableau des 6 natures de haut en bas', detail: 'C’est un gradient, du plus achetable au moins imitable.' },
      {
        titre: 'Physiques',
        detail: 'Équipements, bâtiments, matériels, machines — ressources tangibles et cessibles sur des marchés.',
      },
      { titre: 'Financières', detail: 'Fonds propres, capacité d’endettement, puissance de l’actionnariat — tangibles et échangeables.' },
      { titre: 'Humaines', detail: 'Collaborateurs, qualifications, expertise — tangibles mais globalement peu transférables.' },
      { titre: 'Technologiques', detail: 'Brevets, savoir-faire, logiciels — assez peu tangibles et assez peu transférables.' },
      { titre: 'Organisationnelles', detail: 'Routines, outils de management, procédures, SI — tangibles mais peu cessibles ou imitables.' },
      { titre: 'De réputation', detail: 'Marque, notoriété, image — intangibles et difficilement imitables.' },
    ],
    phraseExamen:
      "La valeur stratégique d'une ressource croît à mesure qu'on descend le tableau des six natures.",
    pieges: [
      {
        erreur: 'Confondre tangibilité et transférabilité.',
        pourquoi:
          "Les ressources humaines sont dites tangibles (on peut compter les effectifs) mais peu transférables (on n'achète pas une équipe soudée). Ce sont deux axes distincts.",
      },
    ],
    motsCles: ['gradient', 'imitation', 'acquisition externe'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'competences',
    slug: 'competences',
    nom: 'Compétences',
    aliases: ['savoir-faire', 'aptitudes', 'capabilities'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Les compétences de l'entreprise sont des aptitudes, savoirs et savoir-faire liés à l'utilisation, au déploiement et à l'exploitation des ressources. Il s'agit donc de la faculté à combiner et coordonner des ressources en vue de leur valorisation dans le portefeuille de produits et services de l'entreprise.",
    explicationSimple:
      "Ressource = ce que l'entreprise POSSÈDE (un actif, un stock). Compétence = ce qu'elle SAIT FAIRE avec (une aptitude, un flux).",
    commentUtiliser: [
      {
        titre: 'Aptitudes opérationnelles et techniques',
        detail:
          'Système de fabrication, capacités d’innovation, techniques de commercialisation, gestion des opérations de promotion, communication de crise.',
      },
      {
        titre: 'Aptitudes managériales',
        detail:
          'Gestion de la qualité et des délais, décentralisation efficace de la décision, coordination des équipes internationales, réactivité des dirigeants, qualité du management, gestion de l’information, communication interne.',
      },
    ],
    phraseExamen:
      "Deux entreprises peuvent posséder les mêmes machines et ne pas produire la même qualité. La ressource est nécessaire, la compétence est ce qui la rend rentable.",
    exemples: [
      {
        texte:
          "Smart (corrigé TP04) : « une combinaison des connaissances de la construction automobile de Daimler et du système de fabrication simplifiée de Swatch » — compétence opérationnelle.",
        source: 'corrige-tp04',
        cas: 'smart',
      },
    ],
    pieges: [
      {
        erreur: 'Classer « communication de crise » dans les compétences managériales.',
        pourquoi: "Le cours la classe dans les compétences opérationnelles et techniques.",
      },
    ],
    motsCles: ['savoir-faire', 'combiner', 'coordonner', 'opérationnel', 'managérial'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'competence-distinctive',
    slug: 'competence-distinctive',
    nom: 'Compétence distinctive (fondamentale)',
    nomCourt: 'Compétence distinctive',
    aliases: ['compétence fondamentale', 'core competence', 'VRIO', 'VRIN'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "L'expression « identification des compétences fondamentales » figure dans le cours (Cours 3, slide 18) parmi les applications de la chaîne de valeur.",
    explicationSimple:
      "📚 Complément : compétence que les concurrents ne possèdent pas ou ne peuvent imiter, et qui fonde la différenciation.",
    limites: [
      "⚠️ La grille VRIO / VRIN (Valeur, Rareté, Imitabilité, Organisation) est ABSENTE des supports de ce cours. Ne construis pas ta réponse d'examen autour du VRIO : le cours utilise à sa place le critère de transférabilité/imitabilité de la slide 13. Tu peux l'évoquer comme apport personnel, jamais comme du cours.",
    ],
    motsCles: ['fondamentale', 'imitable', 'différenciation'],
    sources: ['encyclopedie'],
    provenance: 'complement',
  },
  {
    id: 'chaine-de-valeur',
    slug: 'chaine-de-valeur',
    nom: 'Chaîne de valeur',
    aliases: ['value chain', 'Porter 1985', 'activités créatrices de valeur'],
    categorie: 'diagnostic-interne',
    type: 'outil',
    priorite: 1,
    auteur: 'Michael Porter',
    annee: '1985 (Competitive Advantage)',
    origine:
      "1979 : Competitive Strategy — analyse de la concurrence (5 forces). 1985 : Competitive Advantage — introduction de la chaîne de valeur. ⚠️ Le cours date l'ouvrage de 1986 dans la frise du Cours 1 (édition française probable) et de 1985 dans le Cours 3 (édition originale). Les deux figurent dans les supports.",
    definitionCours:
      "La chaîne de valeur décompose l'activité de l'entreprise en étapes et fonctions qui génèrent des coûts et contribuent à la valeur finale de l'offre. On distingue les fonctions opérationnelles directement créatrices de valeur, et les fonctions supports qui aident celles-ci à mieux réaliser leurs missions. Les activités créatrices de valeur sont de 2 types : activités principales et activités de soutien.",
    explicationSimple:
      "Mettre à plat la chaîne d'activités de l'entreprise pour mettre en relief celles qui sont créatrices de valeur et celles qui, au contraire, n'apportent rien, voire induisent des coûts.",
    pourquoiExiste:
      "L'avantage concurrentiel ne vient pas seulement du marché, mais de la manière dont les entreprises organisent leurs activités en interne. Deux entreprises du même secteur n'ont pas la même rentabilité — Porter regarde donc dedans.",
    objectif:
      "Quatre applications stratégiques : identification des compétences fondamentales, choix des activités à externaliser, choix des axes de diversification et de développement, détermination des facteurs clés de succès.",
    usage: {
      utiliserSi: [
        "on cherche où la valeur et les coûts sont créés à l'intérieur de l'entreprise",
        "on veut décider quoi externaliser",
        "on veut réduire une empreinte carbone maillon par maillon",
        "on cherche l'origine interne d'un avantage concurrentiel",
      ],
      nePasUtiliserPour: [
        "analyser la concurrence — c'est Porter (5 forces)",
        "analyser le macro-environnement — c'est le PESTEL",
        "décrire le modèle économique — c'est le BMC / RCOV",
      ],
    },
    commentUtiliser: [
      { titre: 'Analyser toutes les activités et fonctions', detail: 'Opérationnelles et de soutien.' },
      { titre: 'Comprendre comment coûts et valeur sont générés', detail: 'Dans chaque unité.' },
      { titre: 'Optimiser chaque maillon', detail: 'En priorité ceux qui contribuent le plus directement à la valeur finale.' },
      { titre: 'Chercher la combinaison', detail: 'Leur combinaison peut être à l’origine d’un avantage concurrentiel.' },
      {
        titre: 'Externaliser ou reconsidérer',
        detail:
          'Externaliser (outsourcing) les fonctions non stratégiques qui ne seraient pas efficaces ; reconsidérer celles qui détruiraient de la valeur.',
      },
    ],
    exemples: [
      {
        texte:
          "Smart (corrigé TP04) : logistique d'approvisionnement — « les meilleurs fournisseurs de Smart sont localisés sur le même site, à Hambach, pour réduire les coûts des transports ». Logistique et commercialisation — « création de centres Smart en libre-service, où les voitures sont présentées dans une tour de verre transparente, les clients pouvant en prendre possession le jour même de l'achat ».",
        source: 'corrige-tp04',
        cas: 'smart',
      },
    ],
    phraseExamen:
      "Le mot « combinaison » est capital : l'avantage ne vient pas d'une activité isolée mais de l'articulation entre elles. Le cas Smart le démontre — ce n'est pas la fabrication seule ni la logistique seule, mais le fait d'avoir implanté les fournisseurs sur le site de production.",
    pieges: [
      {
        erreur: "Confondre Approvisionnement (soutien) et Logistique d'approvisionnement (principale).",
        pourquoi:
          "Le premier négocie et acquiert (fonction achat) ; le second réceptionne, stocke et manipule.",
        test: 'S’agit-il d’acheter, ou de recevoir et manipuler ?',
      },
      {
        erreur: 'S’interdire les répétitions entre activités.',
        pourquoi:
          "Dans le corrigé Smart, le site de Hambach apparaît dans la logistique, l'infrastructure, l'approvisionnement et la R&D. C'est voulu : cela révèle le point de combinaison qui fonde l'avantage.",
      },
    ],
    variantes: [
      {
        sujet: 'Libellés des activités de soutien 3 et 4',
        formulations: [
          { libelle: 'Recherche et développement / Achats (approvisionnements)', ou: 'Cours 3, slide 21' },
          { libelle: 'Développement technologique / Approvisionnements', ou: 'Cours 3, slide 24' },
          { libelle: '« le développement technologique » / « L’approvisionnement »', ou: 'Cours 3, slide 23 (texte)' },
        ],
        explication:
          "Ce sont des formulations légèrement différentes de catégories proches, pas des catégories distinctes. « Développement technologique » est le terme le plus large et le plus fidèle à Porter (la slide 24 le détaille : « R&D, conception, développement de techniques », et la slide 23 y ajoute les systèmes d'information et la gestion des connaissances). « Achats » et « Approvisionnements » désignent également le même bloc.",
        consigneExamen:
          'Cite « développement technologique (ou R&D) » et « approvisionnements (ou achats) » : tu montres que tu connais les deux formulations. Le corrigé TP04 emploie d’ailleurs les deux.',
      },
    ],
    chiffres: [
      { libelle: 'Activités principales', valeur: '5' },
      { libelle: 'Activités de soutien', valeur: '4' },
    ],
    motsCles: ['maillons', 'marge', 'valeur', 'coûts', 'externalisation'],
    sources: ['encyclopedie', 'corrige-tp04', 'glossaire', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'activites-principales',
    slug: 'activites-principales',
    nom: 'Activités principales (de base)',
    nomCourt: 'Activités principales',
    aliases: ['activités de base', 'fonctions opérationnelles'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Les activités de base de la chaîne de valeur décrivent les différentes étapes du processus de production et de vente : logistique d'approvisionnement, fabrication/production, logistique de commercialisation, marketing et ventes, services.",
    explicationSimple: "Les cinq étapes qui transforment des inputs en une offre vendue.",
    motsCles: ['cinq', 'processus', 'production', 'vente'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'logistique-approvisionnement',
    slug: 'logistique-approvisionnement',
    nom: "Logistique d'approvisionnement (logistique interne)",
    nomCourt: 'Logistique amont',
    aliases: ['logistique amont', 'logistique interne', 'inbound logistics'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Activités logistiques (amont) de réception, de stockage et de manutention interne. Matière première, réception, entreposage, contrôle des stocks.",
    explicationSimple: "Recevoir et manipuler ce qui entre — à ne pas confondre avec l'achat lui-même.",
    exemples: [
      {
        texte: "Smart : les meilleurs fournisseurs sont localisés sur le même site, à Hambach, pour réduire les coûts de transport.",
        source: 'corrige-tp04',
        cas: 'smart',
      },
    ],
    motsCles: ['amont', 'réception', 'stockage'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'production',
    slug: 'production',
    nom: 'Fabrication / production',
    nomCourt: 'Production',
    aliases: ['fabrication', 'operations'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Transformation des matières et sous-ensembles en produits finis. Procédures pour convertir les ressources en produits et services.",
    explicationSimple: "Le cœur de la transformation.",
    motsCles: ['transformation', 'produits finis'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'logistique-commercialisation',
    slug: 'logistique-commercialisation',
    nom: 'Logistique de commercialisation (logistique externe)',
    nomCourt: 'Logistique aval',
    aliases: ['logistique aval', 'logistique externe', 'outbound logistics', 'distribution'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Activités de livraison des biens et services au client. Distribution, packaging, tri et expédition.",
    explicationSimple: "Amener l'offre jusqu'au client.",
    motsCles: ['aval', 'livraison', 'expédition'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'marketing-ventes',
    slug: 'marketing-ventes',
    nom: 'Marketing et ventes',
    aliases: ['commercialisation'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Moyens et méthodes utilisées pour faire connaître l'offre de l'entreprise, la faire apprécier et déclencher l'achat.",
    explicationSimple: "Faire connaître, faire aimer, faire acheter.",
    exemples: [
      {
        texte:
          "Smart : inauguration du site de Hambach par Jacques Chirac et Helmut Kohl en 1997 ; slogan « réduire au maximum » (1998-2005).",
        source: 'corrige-tp04',
        cas: 'smart',
      },
    ],
    motsCles: ['notoriété', 'achat', 'promotion'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'services',
    slug: 'services',
    nom: 'Services',
    aliases: ['SAV', 'après-vente', 'maintenance'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Activités associées à l'offre principale (formation, maintenance…). Livraison, installation, maintenance, SAV.",
    explicationSimple:
      "Ce qui accompagne le produit après la vente — et, en version durable, ce qui prolonge sa vie (réparation, réemploi, reprise).",
    exemples: [
      {
        texte:
          "Smart : réparateur agréé Mercedes-Benz, garantie des pneus, contrôle automne/hiver, accessoires Smart collection.",
        source: 'corrige-tp04',
        cas: 'smart',
      },
    ],
    motsCles: ['maintenance', 'réparation', 'durée de vie'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'activites-soutien',
    slug: 'activites-soutien',
    nom: 'Activités de soutien',
    nomCourt: 'Activités de soutien',
    aliases: ['fonctions supports', 'activités secondaires'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Les activités de soutien ont, au sein de la chaîne de valeur, un impact transversal sur toutes les unités et sections : infrastructures de l'entreprise, gestion des ressources humaines, approvisionnement, développement technologique.",
    explicationSimple: "Les quatre fonctions qui aident toutes les autres à mieux réaliser leurs missions.",
    motsCles: ['transversal', 'quatre', 'support'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'infrastructure-entreprise',
    slug: 'infrastructure-entreprise',
    nom: "Infrastructure de l'entreprise",
    nomCourt: 'Infrastructure',
    aliases: ['infrastructure de la firme', 'direction générale'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "Direction générale et autres fonctions communément appelées « support », telles que la comptabilité, le juridique, et les fonctions financières et administratives.",
    explicationSimple: "Ce qui tient l'entreprise debout : direction, finance, juridique, administration.",
    motsCles: ['direction', 'comptabilité', 'juridique'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'grh',
    slug: 'grh',
    nom: 'Gestion des ressources humaines',
    nomCourt: 'GRH',
    acronyme: 'GRH',
    aliases: ['ressources humaines', 'RH'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "Ensemble des activités de recrutement, rémunération, motivation, formation, gestion de carrière.",
    explicationSimple: "Recruter, former, motiver, faire progresser.",
    motsCles: ['recrutement', 'formation', 'carrière'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'developpement-technologique',
    slug: 'developpement-technologique',
    nom: 'Développement technologique (R&D)',
    nomCourt: 'Développement technologique',
    aliases: ['R&D', 'recherche et développement', 'systèmes d’information'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Concerne aussi bien les systèmes d'information que la R&D, la gestion des connaissances. (Slide 24 : R&D, conception, développement de techniques.)",
    explicationSimple: "Tout ce qui produit du savoir technique dans l'entreprise.",
    variantes: [
      {
        sujet: 'Libellé',
        formulations: [
          { libelle: 'Recherche et développement', ou: 'Cours 3, slide 21' },
          { libelle: 'Développement technologique', ou: 'Cours 3, slides 23 et 24 — terme le plus large' },
        ],
        explication: "Même bloc. « Développement technologique » est le terme le plus fidèle à Porter.",
      },
    ],
    motsCles: ['R&D', 'SI', 'connaissances'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'approvisionnements',
    slug: 'approvisionnements',
    nom: 'Approvisionnements (achats)',
    nomCourt: 'Approvisionnements',
    aliases: ['achats', 'procurement', 'fonction achat'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Activités liées aux achats de matière, de marchandises, de fournitures diverses, mais également de moyens de production. (Slide 24 : acquisition d'intrants et de ressources.)",
    explicationSimple:
      "La fonction qui négocie et acquiert. À ne surtout pas confondre avec la logistique d'approvisionnement, qui réceptionne et manipule.",
    pieges: [
      {
        erreur: "Confondre Approvisionnement (soutien) et Logistique d'approvisionnement (principale).",
        pourquoi: 'Le premier négocie et acquiert, le second réceptionne et manipule.',
      },
    ],
    variantes: [
      {
        sujet: 'Libellé',
        formulations: [
          { libelle: 'Achats (approvisionnements)', ou: 'Cours 3, slide 21' },
          { libelle: 'Approvisionnements', ou: 'Cours 3, slide 24' },
          { libelle: "L'approvisionnement", ou: 'Cours 3, slide 23 (texte)' },
        ],
        explication: 'Même bloc, trois libellés.',
      },
    ],
    motsCles: ['achats', 'intrants', 'négociation'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'marge',
    slug: 'marge',
    nom: 'Marge',
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Le schéma de Porter place MARGE à l'extrémité droite de la flèche de la chaîne de valeur.",
    explicationSimple:
      "🔎 Ce qui reste une fois l'ensemble des activités payé : l'écart entre la valeur totale que le client accepte de payer et le coût cumulé de toutes les activités.",
    phraseExamen:
      "La forme en flèche du schéma indique un flux orienté : chaque activité ajoute de la valeur et du coût ; la marge est le solde.",
    motsCles: ['solde', 'valeur', 'coût cumulé'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'interpretation',
  },
  {
    id: 'chaine-valeur-durable',
    slug: 'chaine-valeur-durable',
    nom: 'Chaîne de valeur durable',
    nomCourt: 'Chaîne de valeur durable',
    aliases: ['décarbonation', 'empreinte carbone chaîne de valeur'],
    categorie: 'diagnostic-interne',
    type: 'methode',
    priorite: 1,
    definitionCours:
      "L'ensemble des activités, depuis les matières premières jusqu'au recyclage ou à la fin de vie d'un produit/service, en intégrant systématiquement les dimensions environnementales (réduction de l'empreinte carbone, circularité des matériaux, énergies renouvelables), sociales (conditions de travail, équité, impact sur les communautés locales) et économiques (création de valeur à long terme, efficacité des ressources, innovation responsable).",
    explicationSimple:
      "Deux changements : elle allonge le périmètre (jusqu'au recyclage ou à la fin de vie) et elle triple les critères (environnemental, social, économique).",
    commentUtiliser: [
      { titre: 'Logistique d’approvisionnement', detail: 'Relocaliser/rapprocher les fournisseurs, réduire les transports, mutualiser les flux.' },
      { titre: 'Fabrication / production', detail: 'Énergies renouvelables, efficacité énergétique, éco-conception, réduction des chutes.' },
      { titre: 'Logistique de commercialisation', detail: 'Optimisation des tournées, emballages réutilisables, e-commerce vert ou distribution locale.' },
      { titre: 'Marketing et ventes', detail: 'Éviter le greenwashing, orienter la demande vers les offres sobres, dématérialiser les supports.' },
      { titre: 'Services', detail: 'Réparation, maintenance prolongeant la durée de vie, reprise en fin de vie.' },
      { titre: 'Infrastructure', detail: 'Bâtiments, comptabilité carbone, gouvernance climat.' },
      { titre: 'GRH', detail: 'Formation à la sobriété, mobilité domicile-travail, télétravail (⚠️ attention à l’effet rebond).' },
      { titre: 'Développement technologique', detail: 'Éco-conception logicielle, sobriété numérique, réduction du stockage, choix d’hébergement.' },
      { titre: 'Approvisionnements', detail: 'Les 7 principes des achats durables : coût du cycle de vie, labels, fournisseurs engagés, emballages, transports.' },
    ],
    exemples: [{ texte: 'Le tourisme en Suisse — projet des Parcs suisses soutenu par Innotour/SECO.', source: 'encyclopedie' }],
    phraseExamen: "Décarboner = remonter la chaîne maillon par maillon.",
    motsCles: ['empreinte carbone', 'maillons', 'circularité', 'fin de vie'],
    sources: ['encyclopedie', 'questions-officielles'],
    provenance: 'cours',
  },
  {
    id: 'externalite-positive',
    slug: 'externalite-positive',
    nom: 'Externalité positive',
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Une externalité positive accroît le bien-être des autres acteurs et contribue à un développement plus durable. Ex : la réduction de la pollution et des émissions de gaz à effet de serre, le développement d'infrastructures vertes et de technologies propres.",
    explicationSimple: "Un bénéfice que ton activité procure à d'autres sans qu'ils le paient.",
    motsCles: ['bien-être', 'tiers', 'bénéfice'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'externalite-negative',
    slug: 'externalite-negative',
    nom: 'Externalité négative (impact négatif)',
    nomCourt: 'Externalité négative',
    aliases: ['impact négatif', 'coût caché', 'externalité'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Un impact négatif représente un coût non intentionnel imposé à d'autres individus ou à la société. Ex : la pollution de l'air par une usine, le bruit généré par des travaux, la dégradation de la biodiversité ou la consommation excessive de ressources.",
    explicationSimple:
      "Le mot « imposé » est essentiel : la société paie un coût qu'elle n'a pas choisi et qui n'apparaît pas dans les comptes de l'entreprise.",
    commentUtiliser: [
      { titre: 'Inspecter les ressources clés', detail: "D'où viennent les matériaux ? sont-ils durables ? éthiques ?" },
      { titre: 'Inspecter les activités clés', detail: 'Quels procédés ? quelle empreinte carbone ?' },
      {
        titre: 'Inspecter la structure de coûts',
        detail:
          "Quels coûts sociaux/environnementaux N'APPARAISSENT PAS ici ? C'est la question la plus fine : on cherche ce qui manque au tableau.",
      },
    ],
    exemples: [
      {
        texte:
          "SilverDigital : la baisse de −20 % des coûts de support apparaît en réduction dans la structure de coûts. Mais ce coût n'a pas disparu : il a été déplacé vers les clients (9 minutes d'attente, 4 étapes), vers leurs proches et vers les associations. Une partie du « gain » est une externalisation, pas une efficacité.",
        cas: 'silverdigital',
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "La rentabilité affichée est partiellement fictive puisqu'elle repose sur un transfert de coût.",
    pieges: [
      {
        erreur: 'Chercher les externalités négatives dans les blocs client.',
        pourquoi:
          'Le cours les localise du côté production (ressources clés, activités clés, structure de coûts) ; les impacts positifs se construisent du côté client et partenaires.',
      },
    ],
    motsCles: ['coût imposé', 'non intentionnel', 'internalisation', 'greenwashing'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'systeme-de-valeur',
    slug: 'systeme-de-valeur',
    nom: 'Système de valeur',
    aliases: ['filière', 'réseau d’affaires', 'value system'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Les relations au sein de la filière, c'est-à-dire le réseau que tisse l'entreprise avec ses fournisseurs, distributeurs, concurrents et/ou clients, peuvent représenter un élément déterminant pour le développement d'un avantage compétitif durable. En effet, il peut être difficile pour ses concurrents d'imiter ce réseau d'affaires.",
    explicationSimple:
      "Cinq chaînes de valeur emboîtées : fournisseurs des fournisseurs → fournisseurs → l'entreprise → distributeurs → clients. Ton entreprise n'est qu'un maillon.",
    phraseExamen:
      "C'est ce schéma qui justifie que l'empreinte d'une entreprise ne se limite pas à ses murs : agir sur ses fournisseurs, c'est agir sur sa propre chaîne de valeur élargie.",
    motsCles: ['filière', 'amont', 'aval', 'réseau'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'cocreation',
    slug: 'cocreation',
    nom: 'Cocréation',
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "La forme la plus intense de relation que peut établir une entreprise avec son fournisseur est la cocréation du produit ou service fini. Les entreprises doivent identifier les partenaires appropriés et nouer avec eux une relation fructueuse et durable.",
    explicationSimple: "Concevoir le produit ensemble, pas seulement acheter des composants.",
    motsCles: ['fournisseur', 'partenariat', 'conception conjointe'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'coopetition',
    slug: 'coopetition',
    nom: 'Coopétition',
    aliases: ['coopération concurrents', 'alliance'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "La coopétition désigne une situation où le bien ou service n'aurait pu voir le jour sans la collaboration directe d'un concurrent issu du même secteur. La reconnaissance des concurrents en tant que partenaires est un fait assez nouveau. La complexité de certaines industries, tout comme l'investissement élevé que requièrent la création de biens et la prestation de services, ne permet pas à l'entreprise de tout réaliser elle-même.",
    explicationSimple: "Coopérer avec un concurrent tout en restant rivaux par ailleurs.",
    phraseExamen:
      "En durabilité, la coopétition permet de mutualiser des infrastructures vertes et de fermer les boucles d'économie circulaire, créant des externalités positives.",
    motsCles: ['concurrents', 'partenaires', 'mutualisation'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'creation-valeur-consommateur',
    slug: 'creation-valeur-consommateur',
    nom: 'Création de valeur par le consommateur final',
    nomCourt: 'Valeur à l’usage',
    aliases: ['valeur d’usage', 'consommateur final'],
    categorie: 'diagnostic-interne',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Le consommateur final peut faire partie du processus de création de valeur d'un bien ou service. Exemple : les téléphones possèdent désormais une pléthore de fonctionnalités. Tant que le consommateur final ignore ou n'utilise pas toutes les fonctions de son téléphone, la valeur finale du produit est inférieure à 100 %.",
    explicationSimple: "La valeur n'existe pleinement qu'à l'usage. Un produit sophistiqué mal compris ne délivre pas sa valeur.",
    exemples: [
      {
        texte:
          "Une application riche en fonctionnalités qu'une cliente de 76 ans ne sait pas utiliser ne crée pas 100 % de sa valeur.",
        cas: 'silverdigital',
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "C'est le fondement théorique, dans le cours lui-même, de l'argument d'utilisabilité : accessibilité et utilisabilité ne sont pas des contraintes réglementaires, ce sont des conditions de réalisation de la valeur. Même logique pour la sobriété : des fonctionnalités inutilisées consomment des ressources sans créer de valeur.",
    motsCles: ['usage', 'utilisabilité', 'valeur réalisée'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
]
