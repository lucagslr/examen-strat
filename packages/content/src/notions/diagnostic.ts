import type { Notion } from '../types'

/** PARTIE II — DIAGNOSTIC : parties prenantes, diagnostic, SWOT (encyclopédie §5 à §7) */
export const notionsDiagnostic: Notion[] = [
  {
    id: 'parties-prenantes',
    slug: 'parties-prenantes',
    nom: 'Parties prenantes',
    nomCourt: 'Parties prenantes',
    aliases: ['stakeholders', 'acteurs', 'partie prenante'],
    categorie: 'diagnostic',
    type: 'outil',
    priorite: 1,
    definitionCours:
      "L'analyse des parties prenantes est un outil utilisé pour représenter et distinguer les différents acteurs, leur implication et leur degré d'influence dans les décisions de l'entreprise. C'est le début de toute analyse pour réaliser un plan.",
    explicationSimple:
      "Avant de décider quoi faire, il faut savoir qui peut t'aider ou te bloquer, et à quel point ça l'intéresse.",
    pourquoiExiste:
      "Une stratégie, même brillante techniquement, échoue si les acteurs qui comptent s'y opposent. Le cours place donc l'analyse des parties prenantes au tout début de la démarche, et en fait explicitement un outil de gouvernance.",
    objectif:
      "Passer de la liste à l'action : liste → évaluation (intérêt / influence) → positionnement dans la matrice → plan de management.",
    origine:
      "📚 Le terme « partie prenante » (stakeholder) n'est pas défini formellement dans les slides ; le cours passe directement à la méthode. Définition standard : tout individu ou groupe qui peut affecter la réalisation des objectifs de l'organisation ou être affecté par elle.",
    usage: {
      utiliserSi: [
        "la question porte sur les acteurs, l'adhésion, l'opposition ou la gouvernance",
        "on évalue l'acceptabilité d'une option (critère A du SAF)",
        "on cherche qui financera, bloquera ou relaiera un projet",
        "on élargit le cercle aux acteurs non marchands (environnement, société, générations futures)",
      ],
      nePasUtiliserPour: [
        "mesurer l'attractivité d'un secteur — c'est Porter",
        "analyser les grandes tendances externes — c'est le PESTEL",
        "évaluer ce que l'entreprise sait faire — c'est le diagnostic interne",
      ],
    },
    commentUtiliser: [
      { titre: 'Lister', detail: "Parties prenantes internes (direction, équipes…) et externes (clients, fournisseurs…)." },
      { titre: 'Évaluer', detail: "Niveau d'intérêt (faible / moyen / fort) et niveau d'influence ou pouvoir (faible / moyen / fort)." },
      { titre: 'Positionner', detail: 'Placer chaque acteur dans la matrice pouvoir × intérêt.' },
      { titre: 'Agir', detail: "Élaborer un véritable plan de management des parties prenantes en fonction de leur profil." },
      { titre: 'Repérer les conflits d’intérêts', detail: 'Quand l’intérêt personnel d’un acteur puissant diverge de celui de l’organisation.' },
    ],
    exemples: [
      {
        texte:
          "CIO (corrigé TP01) : les athlètes sont « les ressources clés » → création en 1981 d'une commission des athlètes. Les médias → création en 2001 des Olympic Broadcasting Services, seul fournisseur de vidéo, ce qui permet au CIO de contrôler les messages. Les membres du CIO sont les décideurs et présentent un conflit d'intérêts → concevoir des processus réduisant les opportunités d'influence.",
        source: 'corrige-tp01',
        cas: 'cio',
      },
    ],
    phraseExamen:
      "Une simple liste de parties prenantes vaut peu : ce qui est attendu, c'est liste → évaluation → positionnement → action.",
    pieges: [
      {
        erreur: 'Lister les parties prenantes sans les évaluer.',
        pourquoi: "Le cours exige un niveau d'intérêt et d'influence pour chacune.",
        test: 'Ai-je donné un niveau faible/moyen/fort à chaque acteur ?',
      },
      {
        erreur: "Évaluer sans en tirer d'action.",
        pourquoi: "Le cours exige un « plan de management des parties prenantes ».",
      },
      {
        erreur: 'Oublier les parties prenantes diffuses ou non humaines.',
        pourquoi:
          "L'État, l'opinion publique, les associations figurent explicitement dans le schéma du cours ; la durabilité y ajoute l'environnement et les générations futures.",
      },
      {
        erreur: 'Traiter tout le monde de la même façon.',
        pourquoi: 'Le cours donne quatre traitements différents selon le quadrant.',
      },
    ],
    variantes: [
      {
        sujet: 'Position des actionnaires et des syndicats',
        formulations: [
          { libelle: 'Actionnaires et syndicats classés côté INTERNE', ou: 'schéma du cours, slide 34' },
          { libelle: 'Classés « externes »', ou: 'usage courant ailleurs dans la littérature' },
        ],
        explication:
          "Le visuel du cours place actionnaires et syndicats du côté interne, avec dirigeants, managers, salariés et business units. Les externes sont : utilisateurs, clients, fournisseurs et sous-traitants, intermédiaires, concurrents, État, associations et groupes de pression, créanciers.",
        consigneExamen: 'Retiens la version du cours : actionnaires et syndicats = internes.',
      },
      {
        sujet: 'Influence / pouvoir',
        formulations: [
          { libelle: '« Influence/pouvoir »', ou: "en-tête du tableau de synthèse, slide 35" },
          { libelle: '« POUVOIR »', ou: "axe de la matrice, slides 36-37" },
        ],
        explication: 'Le cours pose explicitement la synonymie : les deux mots sont utilisés indifféremment.',
      },
    ],
    motsCles: ['acteurs', 'intérêt', 'pouvoir', 'influence', 'gouvernance', 'plan de management'],
    sources: ['encyclopedie', 'corrige-tp01', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'matrice-pouvoir-interet',
    slug: 'matrice-pouvoir-interet',
    nom: 'Matrice pouvoir × intérêt',
    nomCourt: 'Matrice pouvoir/intérêt',
    aliases: ['matrice intérêt pouvoir', 'power interest grid', 'quatre quadrants'],
    categorie: 'diagnostic',
    type: 'outil',
    priorite: 1,
    definitionCours:
      "Quatre profils, quatre actions conseillées. Pouvoir élevé + intérêt fort → ENGAGER AVEC ATTENTION (consulter, proposer un partenariat, co-décider, gestion rapprochée). Pouvoir élevé + intérêt faible → SATISFAIRE (veiller à la satisfaction, délivrer des informations de qualité, augmenter son intérêt progressivement). Pouvoir faible + intérêt fort → INFORMER (délivrer l'information, sonder les avis, proposer un rôle d'ambassadeur). Pouvoir faible + intérêt faible → VEILLER (ne pas aller à sa rencontre, l'information est à disposition).",
    explicationSimple:
      "Le pouvoir détermine l'intensité du traitement, l'intérêt détermine sa nature.",
    commentUtiliser: [
      { titre: 'Placer chaque acteur', detail: 'Deux axes : pouvoir (vertical), intérêt (horizontal).' },
      { titre: 'Lire le quadrant', detail: 'Engager avec attention / Satisfaire / Informer / Veiller.' },
      { titre: 'Déduire l’action', detail: 'Une action de communication ou de gouvernance concrète par acteur.' },
    ],
    exemples: [
      {
        texte:
          "SilverDigital : clients seniors (intérêt fort, pouvoir faible → informer, et 30 % demandent l'humain) ; association de défense des aînés (intérêt fort, pouvoir moyen via les médias) ; direction et actionnaires (pouvoir élevé, intérêt fort → engager avec attention) : c'est là qu'est le point de blocage ; régulateur (pouvoir élevé, intérêt croissant → satisfaire).",
        cas: 'silverdigital',
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "Beaucoup de pouvoir et beaucoup d'intérêt : on le fait entrer dans la décision. Beaucoup de pouvoir et peu d'intérêt : on le tient satisfait et on éveille progressivement son intérêt. Peu de pouvoir et beaucoup d'intérêt : on en fait un ambassadeur.",
    motsCles: ['quadrant', 'engager', 'satisfaire', 'informer', 'veiller'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'conflit-interets',
    slug: 'conflit-interets',
    nom: "Conflit d'intérêts",
    categorie: 'diagnostic',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "Situation où l'intérêt personnel d'une partie prenante puissante diverge de l'intérêt de l'organisation (illustré par le cas du CIO : les membres ont un pouvoir élevé et un intérêt personnel divergent).",
    explicationSimple:
      "Le traitement n'est alors pas la communication mais la conception de processus (gouvernance) qui neutralise l'influence indue.",
    exemples: [
      {
        texte:
          "CIO : « créer les conditions et imaginer les processus pour réduire les opportunités d'influence » des villes et pays candidats sur les membres de la commission.",
        source: 'corrige-tp01',
        cas: 'cio',
      },
    ],
    motsCles: ['gouvernance', 'influence indue', 'processus'],
    sources: ['encyclopedie', 'corrige-tp01'],
    provenance: 'interpretation',
  },
  {
    id: 'diagnostic-strategique',
    slug: 'diagnostic-strategique',
    nom: 'Diagnostic stratégique',
    nomCourt: 'Diagnostic',
    aliases: ['analyse stratégique'],
    categorie: 'diagnostic',
    type: 'methode',
    priorite: 1,
    definitionCours:
      "Quels sont les outils pour établir un diagnostic — c'est-à-dire l'analyse de l'environnement externe d'une entreprise ? Cela nous permet de comprendre le contexte dans lequel évolue l'entreprise. Le diagnostic stratégique (interne & externe) a donc deux volets.",
    explicationSimple:
      "Répondre à « où en sommes-nous ? » en regardant dehors et dedans, puis confronter les deux.",
    phraseExamen:
      "Une opportunité n'est une opportunité pour toi que si tu as les ressources pour la saisir. Une menace n'est fatale que si tu n'as pas les compétences pour l'absorber. Le sens stratégique naît de la confrontation des deux.",
    variantes: [
      {
        sujet: 'Portée du mot « diagnostic »',
        formulations: [
          { libelle: 'Diagnostic = diagnostic externe', ou: 'Cours 2' },
          { libelle: "Diagnostic = l'ensemble (interne & externe)", ou: 'Cours 4, slide 2' },
        ],
        explication:
          "Le mot « diagnostic » employé seul désigne le diagnostic externe dans le Cours 2 et l'ensemble dans le Cours 4. Lis toujours le contexte.",
      },
    ],
    motsCles: ['externe', 'interne', 'contexte'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'diagnostic-externe',
    slug: 'diagnostic-externe',
    nom: 'Diagnostic externe',
    aliases: ['analyse externe', 'environnement externe'],
    categorie: 'diagnostic-externe',
    type: 'methode',
    priorite: 1,
    definitionCours:
      "Définir le périmètre de notre stratégie. Identifier toutes les forces qui peuvent influer sur la capacité de l'entreprise à obtenir et conserver un avantage concurrentiel. Deux outils, deux niveaux : le PESTEL pour l'environnement macroéconomique et sociétal, les 5 forces de Porter pour l'industrie / le micro-environnement.",
    explicationSimple: "Ce qui arrive à l'entreprise, qu'elle ne contrôle pas : elle le subit, l'anticipe, parfois l'influence.",
    phraseExamen: "Le diagnostic externe alimente les Opportunités et Menaces du SWOT.",
    motsCles: ['PESTEL', 'Porter', 'opportunités', 'menaces', 'non contrôlable'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'diagnostic-interne',
    slug: 'diagnostic-interne',
    nom: 'Diagnostic interne',
    aliases: ['analyse interne'],
    categorie: 'diagnostic-interne',
    type: 'methode',
    priorite: 1,
    definitionCours:
      "Le diagnostic interne est la démarche qui va aboutir à l'identification des forces et faiblesses d'une organisation à un moment donné. L'idée consiste à trouver des axes d'amélioration pour se démarquer de la concurrence et optimiser la compétitivité de l'entreprise. Faire un diagnostic stratégique interne consiste à évaluer l'ensemble de l'entreprise, de son ou ses processus de production principaux (activités principales) aux différentes activités de soutien.",
    explicationSimple: "Ce que l'entreprise possède et sait faire : contrôlable, décidé, développé ou cédé.",
    commentUtiliser: [
      { titre: "Examiner l'environnement interne de l'entreprise" },
      { titre: 'Analyser les ressources matérielles et immatérielles' },
      { titre: 'Analyser la chaîne de valeur' },
    ],
    phraseExamen:
      "Deux entreprises du même secteur subissent les mêmes cinq forces. Si l'une est plus rentable, l'explication est interne.",
    motsCles: ['ressources', 'compétences', 'chaîne de valeur', 'forces', 'faiblesses'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'swot',
    slug: 'swot',
    nom: 'SWOT',
    acronyme: 'SWOT',
    aliases: ['FFOM', 'AFOM', 'MOFF', 'forces faiblesses opportunités menaces', 'matrice SWOT'],
    categorie: 'diagnostic',
    type: 'outil',
    priorite: 1,
    definitionCours:
      "Le SWOT = vision synthétique : pour commencer sa stratégie (par ex. : permet de connaître les forces et les opportunités, de définir des objectifs stratégiques). Le SWOT pour le diagnostic interne (forces/faiblesses) et externe (opportunités/menaces).",
    explicationSimple:
      "Un tableau de tri, pas un outil d'analyse. Il ne produit aucune information : il range ce que les autres outils ont produit, pour que le regard puisse faire des rapprochements.",
    pourquoiExiste:
      "Le diagnostic externe et le diagnostic interne produisent chacun des constats séparés. Il faut un endroit où les rapprocher pour faire émerger des enjeux.",
    objectif: "Confronter interne et externe pour définir des objectifs stratégiques.",
    usage: {
      utiliserSi: [
        'on veut synthétiser un diagnostic déjà fait',
        'on cherche à faire émerger des enjeux stratégiques',
        'on prépare une recommandation (souhaitabilité du SAF)',
      ],
      nePasUtiliserPour: [
        'collecter de l’information — le SWOT n’a aucun contenu propre',
        'analyser le macro-environnement (PESTEL) ou l’industrie (Porter) : ce sont eux qui alimentent le SWOT',
      ],
    },
    commentUtiliser: [
      { titre: 'Délimiter', detail: 'Quelle entreprise, quel périmètre, quelle date.' },
      { titre: 'Collecter', detail: 'Faire d’abord PESTEL + Porter + diagnostic interne. Jamais l’inverse.' },
      { titre: 'Trier', detail: 'Appliquer le test interne/externe à chaque élément.' },
      { titre: 'Hiérarchiser', detail: '3 à 5 éléments par case, les plus structurants.' },
      { titre: 'Confronter', detail: 'Croiser interne × externe pour faire émerger 2 ou 3 enjeux stratégiques.' },
      { titre: 'Conclure', detail: 'Formuler l’enjeu central sous forme de tension : « comment faire X sans perdre Y ? »' },
    ],
    exemples: [
      {
        texte:
          "SilverDigital — Forces : +15 % de marge, −20 % de coûts de support, chatbot 24 h/24, base de clients fidèles depuis 20 ans, aucun manquement légal. Faiblesses : police non personnalisable, 4 étapes et 9 minutes pour joindre un humain, 2FA obligatoire sans alternative. Opportunités : +10 % de clients de moins de 40 ans, vieillissement de la population, European Accessibility Act. Menaces : −12 % de clients de plus de 65 ans, 30 % des seniors préfèrent l'humain, risque réputationnel, durcissement réglementaire.",
        cas: 'silverdigital',
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "Le SWOT n'est pas un outil de collecte, c'est un outil de synthèse et de confrontation. Il ne vaut que par la qualité des analyses qui l'alimentent — PESTEL et Porter à l'externe, ressources, compétences et chaîne de valeur à l'interne.",
    pieges: [
      {
        erreur: 'Confondre Force et Opportunité.',
        pourquoi: "La force est en toi, l'opportunité est dehors.",
        test: "Si l'entreprise disparaissait, cet élément existerait-il encore ? Oui → externe (O/M). Non → interne (F/Fa).",
      },
      {
        erreur: 'Confondre Faiblesse et Menace.',
        pourquoi: 'Même logique : origine interne vs externe.',
        test: 'Même test.',
      },
      {
        erreur: 'Faire une liste sans hiérarchie.',
        pourquoi: 'Un SWOT de 40 lignes ne décide de rien.',
        test: 'Ai-je gardé 3 à 5 éléments structurants par case ?',
      },
      {
        erreur: 'S’arrêter au tableau.',
        pourquoi: 'Le SWOT doit produire des enjeux.',
        test: 'Ai-je terminé par « ce SWOT fait apparaître trois enjeux : … » ?',
      },
    ],
    limites: [
      "📚 Le croisement systématique (matrice TOWS : SO/ST/WO/WT) n'est pas présenté dans les supports. Le cours reste au niveau de la « vision synthétique » qui permet de définir des objectifs stratégiques.",
    ],
    motsCles: ['forces', 'faiblesses', 'opportunités', 'menaces', 'synthèse', 'enjeux'],
    sources: ['encyclopedie', 'glossaire', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'force',
    slug: 'force',
    nom: 'Force (Strength)',
    nomCourt: 'Force',
    aliases: ['strength', 'atout'],
    categorie: 'diagnostic',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Ressource, compétence ou activité que l'entreprise possède et qui la sert. Alimentée par le diagnostic interne (ressources, compétences, chaîne de valeur).",
    explicationSimple: "Un atout qui est en toi. Si l'entreprise disparaissait, il disparaîtrait avec elle.",
    phraseExamen: "Bien intégrée, la durabilité est une force distinctive ; subie, elle devient une faiblesse de coût.",
    motsCles: ['interne', 'positif'],
    sources: ['encyclopedie', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'faiblesse',
    slug: 'faiblesse',
    nom: 'Faiblesse (Weakness)',
    nomCourt: 'Faiblesse',
    aliases: ['weakness'],
    categorie: 'diagnostic',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Ressource, compétence ou activité manquante ou défaillante en interne. Alimentée par le diagnostic interne.",
    explicationSimple: "Ce qui te manque, ou ce que tu fais mal — et qui dépend de toi.",
    motsCles: ['interne', 'négatif'],
    sources: ['encyclopedie', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'opportunite',
    slug: 'opportunite',
    nom: 'Opportunité (Opportunity)',
    nomCourt: 'Opportunité',
    aliases: ['opportunity'],
    categorie: 'diagnostic',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Évolution externe susceptible de bénéficier à l'entreprise si elle la saisit. Alimentée par le PESTEL et Porter.",
    explicationSimple:
      "Un changement du dehors dont tu peux profiter — il existerait même si ton entreprise n'existait pas.",
    exemples: [
      {
        texte:
          "Vieillissement de la population genevoise : les plus de 65 ans représentent une part croissante des usagers de services financiers.",
        cas: 'silverdigital',
      },
    ],
    pieges: [
      {
        erreur: 'Classer une compétence interne en opportunité.',
        pourquoi: "L'opportunité est externe par définition. C'est l'erreur la plus dangereuse du cours.",
        test: "Si l'entreprise disparaissait, cet élément existerait-il encore ?",
      },
    ],
    motsCles: ['externe', 'positif'],
    sources: ['encyclopedie', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'menace',
    slug: 'menace',
    nom: 'Menace (Threat)',
    nomCourt: 'Menace',
    aliases: ['threat', 'risque externe'],
    categorie: 'diagnostic',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Évolution externe susceptible de nuire à l'entreprise. Alimentée par le PESTEL et Porter.",
    explicationSimple: "Un changement du dehors qui peut te faire du mal.",
    motsCles: ['externe', 'négatif'],
    sources: ['encyclopedie', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'croisements-swot',
    slug: 'croisements-swot',
    nom: 'Croisements du SWOT',
    nomCourt: 'Croisements FF × OM',
    aliases: ['TOWS', 'matrice TOWS', 'croisement'],
    categorie: 'diagnostic',
    type: 'methode',
    priorite: 2,
    definitionCours:
      "🔎 Interprétation utile à l'oral, non formalisée dans les supports : passer de la liste à la réflexion revient à poser quatre questions de croisement.",
    explicationSimple:
      "Force × Opportunité → comment utiliser cette force pour saisir cette opportunité (offensive). Force × Menace → comment cette force peut-elle nous protéger (défensive). Faiblesse × Opportunité → que devons-nous acquérir pour ne pas rater cette opportunité (rattrapage). Faiblesse × Menace → où sommes-nous vulnérables, que sécuriser d'urgence (survie).",
    limites: [
      "📚 La matrice TOWS n'est pas présentée dans les supports de ce cours. À formuler comme ton raisonnement, pas comme du cours.",
    ],
    phraseExamen: "On croise FF × OM, puis on filtre les options obtenues par le SAF.",
    motsCles: ['offensive', 'défensive', 'rattrapage', 'survie'],
    sources: ['encyclopedie', 'questions-probables'],
    provenance: 'interpretation',
  },
]
