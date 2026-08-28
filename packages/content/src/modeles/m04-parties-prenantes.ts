import type { Modele } from './types'

export const modele: Modele = {
  id: 'parties-prenantes',
  numero: 4,
  slug: 'parties-prenantes',
  nom: 'Matrice des parties prenantes',
  sousTitre: 'Pouvoir / influence × intérêt',
  famille: 'cadrage',
  etape: 'e0',
  question:
    'Qui peut faire échouer cette décision, qui la subira sans pouvoir l’empêcher, et que fait-on de chacun ?',
  enUnePhrase:
    'On note chaque acteur deux fois — son pouvoir (peut-il dire non ?) et son intérêt (le sujet le touche-t-il ?) — et la case obtenue commande une attitude différente : associer, tenir satisfait, informer ou simplement surveiller.',
  produit:
    'Une liste d’acteurs nommés, notés et positionnés, avec une action de gouvernance ou de communication pour chacun — c’est le « plan de management des parties prenantes » du cours, et c’est le matériau du critère A (acceptabilité) du SAF.',
  quandUtiliser: [
    'Au cadrage, dès que l’énoncé nomme des acteurs : salariés, syndicat, régulateur, riverains, actionnaires, associations.',
    'Quand la question porte sur l’adhésion, l’opposition, la gouvernance ou un conflit d’intérêts.',
    'Au moment de juger l’acceptabilité d’une option — le A du SAF ne se répond que nom par nom.',
    'Quand la décision fait des perdants : réorganisation, fermeture d’un site, changement de modèle économique.',
    'Quand on cherche qui financera, qui autorisera, qui bloquera ou qui relaiera un projet.',
  ],
  quandNePasUtiliser: [
    'Pour mesurer l’attractivité d’un secteur — c’est Porter : là, on analyse des forces, pas des personnes.',
    'Pour analyser les grandes tendances externes — c’est le PESTEL.',
    'Pour évaluer ce que l’entreprise sait faire — c’est le diagnostic interne (ressources et compétences).',
    'Comme trombinoscope permanent de l’entreprise : la matrice se refait pour chaque décision, pas une fois pour toutes.',
  ],

  schema: {
    h: 540,
    description:
      'Une matrice en quatre cases croisant le pouvoir d’une partie prenante et son intérêt pour la décision, avec trois flèches montrant qu’un acteur peut changer de case.',
    noeuds: [
      {
        id: 'satisfaire',
        titre: 'SATISFAIRE',
        lignes: [
          'pouvoir fort × intérêt faible',
          'Le géant endormi du dossier',
          'Le tenir satisfait, bien informé',
          'Ex. la banque, la Ville de Genève',
        ],
        x: 40,
        y: 60,
        l: 420,
        h: 200,
        ton: 'alerte',
        point: 'satisfaire',
      },
      {
        id: 'gerer',
        titre: 'GÉRER DE PRÈS',
        lignes: [
          'pouvoir fort × intérêt fort',
          'Ils font ou défont le projet',
          'Consulter, associer, co-décider',
          'Ex. les mécaniciens de l’atelier',
        ],
        x: 540,
        y: 60,
        l: 420,
        h: 200,
        ton: 'accent',
        point: 'gerer',
      },
      {
        id: 'surveiller',
        titre: 'SURVEILLER',
        lignes: [
          'pouvoir faible × intérêt faible',
          'Effort minimal, œil ouvert',
          'Info à disposition, sans plus',
          'Ex. la presse locale',
        ],
        x: 40,
        y: 280,
        l: 420,
        h: 200,
        ton: 'neutre',
        point: 'surveiller',
      },
      {
        id: 'informer',
        titre: 'INFORMER',
        lignes: [
          'pouvoir faible × intérêt fort',
          'Ils subissent sans pouvoir agir',
          'Informer, sonder, faire un allié',
          'Ex. les clients de Carouge',
        ],
        x: 540,
        y: 280,
        l: 420,
        h: 200,
        ton: 'positif',
        point: 'informer',
      },
    ],
    liens: [
      {
        de: 'satisfaire',
        vers: 'gerer',
        libelle: 'éveiller son intérêt',
        depuis: 'droite',
        arrive: 'gauche',
        ton: 'positif',
      },
      {
        de: 'surveiller',
        vers: 'informer',
        libelle: 'son intérêt s’éveille',
        trait: 'pointille',
        depuis: 'droite',
        arrive: 'gauche',
        ton: 'sourd',
      },
      {
        de: 'informer',
        vers: 'gerer',
        libelle: 'via un relais médiatique',
        trait: 'pointille',
        depuis: 'haut',
        arrive: 'bas',
        ton: 'alerte',
      },
    ],
    axes: {
      x: { libelle: 'INTÉRÊT', faible: 'faible', fort: 'fort' },
      y: { libelle: 'POUVOIR / INFLUENCE', faible: 'faible', fort: 'fort' },
    },
    note: 'Personne ne reste dans sa case : l’intérêt s’éveille, le pouvoir se gagne — la matrice se refait à chaque décision.',
  },

  points: [
    {
      id: 'gerer',
      libelle: 'GÉRER DE PRÈS — pouvoir fort × intérêt fort',
      cestQuoi:
        'La case des acteurs qui peuvent bloquer la décision et que cette décision touche directement. Ce sont eux qui font ou défont le projet : la réussite se joue ici, pas ailleurs.',
      question:
        'Cet acteur peut-il dire non — et le sujet change-t-il vraiment son travail, son argent ou son mandat ?',
      quoiMettre: [
        'Ceux qui signent la décision : direction, conseil d’administration, actionnaires de référence.',
        'Ceux qui financent et peuvent couper le robinet quand le projet les concerne : banque engagée sur le projet, investisseur.',
        'Ceux sans qui rien ne se fait au quotidien et dont le métier change : les salariés directement concernés, le syndicat.',
        'Ceux qui autorisent : régulateur, autorité qui délivre une concession, une licence ou une subvention conditionnée.',
        'Le client ou le partenaire qui pèse une part décisive du chiffre d’affaires visé.',
        'Le traitement 📘 : consulter, proposer un partenariat, co-décider, gestion rapprochée — jamais informer après coup.',
      ],
      exemple:
        'Atelier Léman 🔎 : les mécaniciens. Pouvoir réel — sans eux, aucune maintenance planifiée n’est possible, et leur savoir-faire est justement ce que l’abonnement vend. Intérêt maximal — on passe de la réparation payée à l’acte à un entretien programmé, donc d’un métier de dépannage à un métier de suivi. On les associe à la conception du pilote de 40 vélos ; on ne les prévient pas une fois le contrat signé.',
      piege:
        'Ranger la direction dans cette case et s’arrêter là. C’est exact et sans intérêt : la direction y est toujours, dans tous les cas, ce qui ne montre aucune analyse.',
      reflexe:
        'Chercher l’acteur non évident de la case : celui dont le métier change. C’est lui qui décide silencieusement de la réussite.',
      notions: ['matrice-pouvoir-interet', 'acceptabilite', 'gouvernance'],
    },
    {
      id: 'satisfaire',
      libelle: 'SATISFAIRE — pouvoir fort × intérêt faible',
      cestQuoi:
        'La case du géant endormi : un acteur capable d’arrêter le projet, mais qui ne s’y intéresse pas encore. Son pouvoir est réel, son attention ne l’est pas — et l’attention peut se réveiller du jour au lendemain.',
      question:
        'Si cet acteur se réveillait demain, pourrait-il bloquer la décision ? et qu’est-ce qui pourrait le réveiller ?',
      quoiMettre: [
        'Les financeurs qui suivent de loin tant que les ratios tiennent : banque, bailleur, collectivité qui verse une subvention générale.',
        'Les pouvoirs publics : commune, canton, service qui délivre les autorisations.',
        'Un fournisseur indispensable à la production mais indifférent à la stratégie de son petit client.',
        'Un gros client pour qui l’entreprise ne représente qu’une part minuscule des achats.',
        'Le traitement 📘 : veiller à sa satisfaction, lui délivrer une information de qualité, et augmenter progressivement son intérêt.',
      ],
      exemple:
        'Atelier Léman 🔎 : la Ville et le canton de Genève. Ils multiplient les subventions à la mobilité douce sans regarder cet atelier en particulier — intérêt faible. Mais ils fixent le montant, les conditions d’octroi et les règles de circulation — pouvoir fort. Le geste juste est de les faire glisser vers la droite de la matrice : leur proposer le pilote comme vitrine cantonale, ce qui transforme un guichet en allié.',
      piege:
        'Lire « intérêt faible » comme « acteur secondaire » et le laisser hors du plan. C’est l’erreur la plus coûteuse de la matrice : le blocage vient presque toujours d’ici.',
      reflexe:
        'Se demander ce qui ferait basculer son intérêt — un article de presse, une plainte, une nouvelle loi — et noter cet événement à côté de son nom. Le haut-gauche est le quadrant le plus instable.',
      notions: ['matrice-pouvoir-interet', 'etat-sixieme-force', 'parties-prenantes'],
    },
    {
      id: 'informer',
      libelle: 'INFORMER — pouvoir faible × intérêt fort',
      cestQuoi:
        'La case des concernés sans levier : la décision les touche de plein fouet, mais ils ne peuvent pas l’empêcher — pas individuellement, et pas tout de suite.',
      question:
        'Cet acteur subit-il la décision sans pouvoir la bloquer ? et peut-il se coaliser ou trouver un relais qui, lui, a du pouvoir ?',
      quoiMettre: [
        'Les clients fidèles, les usagers, les habitants d’un quartier concerné.',
        'Les associations d’usagers, de défense, les collectifs et groupes de pression naissants.',
        'Les salariés non décisionnaires, les apprentis, les bénévoles.',
        'Les petits fournisseurs dont l’entreprise est le débouché principal.',
        'Le traitement 📘 : délivrer l’information, sonder les avis, proposer un rôle d’ambassadeur.',
      ],
      exemple:
        'Atelier Léman 🔎 : les clients particuliers historiques de Carouge. Ils n’ont aucune prise sur la décision de basculer vers l’abonnement d’entreprise, mais ce sont eux qui perdent l’atelier de proximité si la capacité part vers les flottes. Bien traités et consultés, ils deviennent la preuve sociale de la marque locale ; ignorés, ils alimentent la rumeur puis la presse.',
      piege:
        'Croire qu’un faible pouvoir individuel reste faible. Cent clients mécontents, une association et un journal local : l’acteur a changé de case sans prévenir.',
      reflexe:
        'Traiter cette case comme un stock d’alliés à activer, pas comme une liste de destinataires de courriels. Et vérifier si un relais existe : média, association, élu.',
      notions: ['matrice-pouvoir-interet', 'sondage', 'parties-prenantes'],
    },
    {
      id: 'surveiller',
      libelle: 'SURVEILLER — pouvoir faible × intérêt faible',
      cestQuoi:
        'La case de l’effort minimal : ni levier ni enjeu aujourd’hui. On ne va pas à leur rencontre, on garde l’information à disposition et on garde l’œil ouvert.',
      question:
        'Cet acteur peut-il, aujourd’hui, changer quoi que ce soit à la décision ? et le sujet le concerne-t-il vraiment ?',
      quoiMettre: [
        'La presse locale, tant que le sujet n’est pas devenu une affaire.',
        'Les concurrents éloignés : autre segment, autre région, autre clientèle.',
        'Les associations dont le mandat ne recoupe le sujet que de loin.',
        'Le grand public, tant qu’aucune décision ne touche l’emploi ou l’environnement.',
        'Le traitement 📘 : ne pas aller à sa rencontre ; l’information reste à disposition.',
      ],
      exemple:
        'Atelier Léman 🔎 : les magasins de vélos de loisir de la région. Ils ne visent ni les flottes d’entreprises ni la réparation toutes marques, et n’ont aucune prise sur la décision. On les surveille : si l’un d’eux signe avec une marque low-cost pour attaquer le marché des entreprises, il change de case le jour même.',
      piege:
        'Écrire « aucun » dans cette case, ou l’oublier. Or c’est elle qui justifie tout ce qu’on ne traite pas — et un oral qui ne justifie pas ses silences les subit.',
      reflexe:
        'Nommer deux acteurs de cette case et dire pourquoi on ne fait rien pour eux aujourd’hui. Un choix assumé se voit ; un oubli aussi.',
      notions: ['matrice-pouvoir-interet', 'parties-prenantes'],
    },
  ],

  methode: [
    {
      titre: '1. Écrire la décision en haut de la feuille',
      detail:
        'La matrice n’est pas celle de l’entreprise, elle est celle d’une décision : « faut-il basculer vers l’abonnement ? ». Le même acteur n’a ni le même pouvoir ni le même intérêt selon la question posée — la banque est indifférente à un changement d’horaires et décisive sur un investissement.',
      aEviter:
        'Faire « la matrice de l’entreprise » une fois pour toutes et la recopier à chaque question.',
    },
    {
      titre: '2. Lister large : internes, puis externes',
      detail:
        'Internes 📘 : dirigeants, managers, salariés, business units — et, dans le schéma du cours, actionnaires et syndicats. Externes 📘 : utilisateurs, clients, fournisseurs et sous-traitants, intermédiaires, concurrents, État, associations et groupes de pression, créanciers. Un tour de la liste suffit à trouver l’acteur oublié.',
      aEviter:
        'S’arrêter aux clients et aux salariés, et oublier les acteurs diffus : État, opinion publique, associations, générations futures.',
    },
    {
      titre: '3. Nommer, jamais catégoriser',
      detail:
        '« Les clients » ne se traite pas ; « les six entreprises genevoises du pilote » se traite. Un nom, un effectif ou un montant rend l’acteur analysable — et rend la phrase d’oral crédible.',
      aEviter: 'Écrire une catégorie abstraite qu’aucune action concrète ne peut viser.',
    },
    {
      titre: '4. Noter deux fois : pouvoir, puis intérêt',
      detail:
        'Le cours demande un niveau faible / moyen / fort sur chacun des deux axes 📘. Le pouvoir se teste par « peut-il dire non, et que se passe-t-il alors ? » ; l’intérêt se teste par « que gagne-t-il ou que perd-il concrètement dans cette décision ? ». Deux notes, deux tests différents.',
      aEviter:
        'Noter la sympathie qu’on éprouve pour l’acteur, ou son importance morale, au lieu de son pouvoir réel.',
    },
    {
      titre: '5. Positionner et lire le quadrant',
      detail:
        'On place chaque acteur dans la case correspondante. Un « moyen » se tranche vers le haut ou vers la droite : mieux vaut sur-traiter un acteur que découvrir son pouvoir le jour du blocage.',
      aEviter:
        'Laisser des acteurs à cheval sur deux cases : une matrice sans décision de placement ne produit aucune action.',
    },
    {
      titre: '6. Écrire une action par acteur — le plan de management',
      detail:
        'Le cours exige un véritable plan de management des parties prenantes 📘. Une ligne, un verbe : associer, co-décider, tenir satisfait, sonder, informer, laisser à disposition. Sans cette colonne, l’outil n’a rien produit.',
      aEviter: 'S’arrêter au positionnement : évaluer sans agir est la moitié du travail seulement.',
    },
    {
      titre: '7. Repérer les conflits d’intérêts',
      detail:
        'Quand l’intérêt personnel d’un acteur puissant diverge de celui de l’organisation, la réponse n’est ni la communication ni la pédagogie : c’est le processus. 📘 Cas du CIO — « créer les conditions et imaginer les processus pour réduire les opportunités d’influence ». On change les règles du jeu, pas le discours.',
      aEviter:
        'Traiter un conflit d’intérêts comme un problème de communication : mieux informer un acteur en conflit d’intérêts ne fait qu’aiguiser son influence.',
    },
  ],

  liens: [
    {
      vers: 'saf',
      nature: 'alimente',
      explication:
        'Le A du SAF ne se répond pas globalement : chaque « oui, ils accepteront » doit porter un nom et une case — et la seule réponse qui vaille des points nomme aussi celui qui n’accepte pas.',
    },
    {
      vers: 'perimetre',
      nature: 'prolonge',
      explication:
        'Le périmètre dit ce qu’on analyse, la matrice dit qui a son mot à dire dessus : changer de périmètre change la liste des acteurs, donc changer d’avis sur le périmètre oblige à refaire la matrice.',
    },
    {
      vers: 'porter',
      nature: 'partage',
      explication:
        'L’État est la sixième force chez Porter et une partie prenante à fort pouvoir ici : la même autorité se lit une fois comme une règle du jeu qui pèse sur tout le secteur, une fois comme un acteur qu’on peut aller voir.',
    },
    {
      vers: 'bmc-durable',
      nature: 'prolonge',
      explication:
        'Le business model durable élargit le cercle aux parties prenantes qui n’ont ni voix ni vote — l’environnement, le territoire, les générations futures : elles ont un intérêt maximal et un pouvoir nul, donc elles tombent dans la case « informer » alors qu’elles ne peuvent même pas être informées, ce qui oblige à leur inventer un porte-parole.',
    },
  ],

  pieges: [
    {
      titre: 'La liste sans les notes',
      explication:
        'Énumérer les acteurs et passer à la suite. Le cours exige un niveau d’intérêt et un niveau d’influence pour chacun : une liste seule ne décide de rien et ne se distingue d’aucune autre entreprise.',
      reflexe:
        'Trois colonnes sur le brouillon — acteur | pouvoir | intérêt — et rien n’entre dans la première sans être rempli dans les deux autres.',
    },
    {
      titre: 'L’évaluation sans l’action',
      explication:
        'Positionner joliment les acteurs puis s’arrêter. Le cours demande un plan de management des parties prenantes : la matrice est un moyen, l’action est le livrable.',
      reflexe: 'Une ligne d’action par acteur, commençant par un verbe.',
    },
    {
      titre: '« Les parties prenantes accepteront »',
      explication:
        'La phrase vide par excellence, et elle revient à chaque oral. Elle ne dit ni qui, ni pourquoi, ni ce qu’on fait de celui qui refuse.',
      reflexe:
        'Nommer deux acteurs et deux raisons, dont une résistance : « les entreprises clientes accepteront parce que la subvention couvre une partie du coût ; les mécaniciens, eux, verront leur métier changer — et c’est là que se joue l’acceptabilité ».',
    },
    {
      titre: 'Le même traitement pour tout le monde',
      explication:
        'Quatre quadrants, quatre traitements 📘. Envoyer la même lettre d’information à la banque et aux clients de quartier, ce n’est ni satisfaire ni informer : c’est ne rien faire deux fois.',
      reflexe:
        'Relire son plan et vérifier que les quatre verbes sont différents d’une case à l’autre.',
    },
    {
      titre: 'Oublier les parties prenantes diffuses ou non humaines',
      explication:
        'L’État, l’opinion publique et les associations figurent explicitement dans le schéma du cours ; la durabilité y ajoute l’environnement et les générations futures, qui subissent sans pouvoir parler.',
      reflexe:
        'Se poser une seule question en fin de liste : qui subit cette décision sans pouvoir la contester ?',
    },
  ],

  variantes: [
    {
      sujet: 'Le nom des quatre attitudes',
      formulations: [
        {
          texte: 'Engager avec attention · Satisfaire · Informer · Veiller',
          source: 'matrice du cours, slides 36-37',
        },
        {
          texte: 'Gérer de près · Satisfaire · Informer · Surveiller',
          source: 'schéma 4 du dossier et fiche de méthode P02',
        },
      ],
      consigne:
        'Les deux formulations décrivent les mêmes quatre traitements. Cite celle du cours — « engager avec attention », « veiller » — puis signale l’autre en une incise : montrer qu’on connaît les deux vocabulaires rapporte des points.',
    },
    {
      sujet: 'Influence ou pouvoir',
      formulations: [
        { texte: '« Influence/pouvoir »', source: 'en-tête du tableau de synthèse, slide 35' },
        { texte: '« POUVOIR »', source: 'axe de la matrice, slides 36-37' },
      ],
      consigne:
        'Le cours pose lui-même la synonymie : les deux mots s’emploient indifféremment. Dis-le une fois à l’oral, puis choisis-en un et garde le même jusqu’au bout.',
    },
    {
      sujet: 'Où ranger les actionnaires et les syndicats',
      formulations: [
        { texte: 'Actionnaires et syndicats du côté INTERNE', source: 'schéma du cours, slide 34' },
        { texte: 'Actionnaires et syndicats classés externes', source: 'usage courant ailleurs 📚' },
      ],
      consigne:
        'Retiens la version du cours : actionnaires et syndicats sont internes, avec les dirigeants, les managers, les salariés et les business units. Les externes sont les utilisateurs, les clients, les fournisseurs et sous-traitants, les intermédiaires, les concurrents, l’État, les associations et groupes de pression, les créanciers.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman SA — qui a son mot à dire sur le basculement ?',
    situation:
      'Étape 0, avant tout outil de diagnostic. Le périmètre est posé — la mobilité douce professionnelle dans le canton de Genève — et les deux domaines d’activité sont identifiés : vente de vélos (position faible) et réparation-service (position forte). La direction hésite entre défendre la vente et basculer vers un abonnement mobilité tout compris pour les entreprises genevoises. On note maintenant qui pourra porter ou bloquer ce basculement, pour ne pas avoir à improviser l’acceptabilité à la fin.',
    deroule: [
      {
        etiquette: 'Décision analysée',
        contenu:
          'Basculer, au moins partiellement, de la vente de vélos vers l’abonnement mobilité pour les entreprises. C’est cette question, et non l’entreprise en général, qui fixe les notes qui suivent.',
      },
      {
        etiquette: 'Mécaniciens (12 personnes)',
        contenu:
          'Pouvoir fort — sans eux, pas de maintenance planifiée. Intérêt fort — leur métier passe de la réparation à l’acte à l’entretien programmé. → GÉRER DE PRÈS : les associer à la conception du pilote et à la définition du délai d’intervention promis.',
      },
      {
        etiquette: 'Six entreprises clientes pilotes',
        contenu:
          'Pouvoir fort sur cette décision — elles signent ou ne signent pas. Intérêt fort — la mobilité quotidienne de leurs collaborateurs. → GÉRER DE PRÈS : co-construire l’offre avec deux d’entre elles avant d’écrire le contrat des six.',
      },
      {
        etiquette: 'Banque',
        contenu:
          'Pouvoir fort — elle finance le parc du pilote, soit environ 56 000 CHF pour 40 vélos au coût de revient de 1 400 CHF l’unité (chiffre illustratif). Intérêt faible tant que les ratios tiennent. → SATISFAIRE : un tableau de bord trimestriel envoyé spontanément, jamais une demande en urgence.',
      },
      {
        etiquette: 'Ville et canton de Genève',
        contenu:
          'Pouvoir fort — ils fixent les subventions à la mobilité douce et les règles de circulation. Intérêt faible aujourd’hui. → SATISFAIRE, et éveiller l’intérêt en proposant le pilote comme vitrine cantonale.',
      },
      {
        etiquette: 'Deux fournisseurs de batteries (Asie)',
        contenu:
          'Pouvoir fort — la dépendance est réelle et l’abonnement l’aggrave, puisqu’il faut garantir un parc en état. Intérêt faible — l’atelier est un petit compte. → SATISFAIRE, et traiter la dépendance elle-même avec Porter, côté pouvoir de négociation des fournisseurs.',
      },
      {
        etiquette: 'Clients particuliers de Carouge',
        contenu:
          'Pouvoir faible individuellement, intérêt fort — ils craignent de perdre l’atelier de proximité. → INFORMER : leur dire ce qui change, les sonder sur les horaires, en faire des ambassadeurs de la marque locale.',
      },
      {
        etiquette: 'Presse locale et magasins de loisir',
        contenu:
          'Pouvoir faible, intérêt faible tant qu’aucune décision ne touche l’emploi. → SURVEILLER : rien à faire aujourd’hui, à relire le jour où le pilote deviendra un déploiement.',
      },
    ],
    conclusion:
      'Deux acteurs seulement sont à gérer de près : les mécaniciens et les entreprises pilotes. Le point de fragilité du basculement n’est donc ni le marché ni l’argent — la banque et le canton se traitent par de l’information — mais le métier des mécaniciens. C’est exactement ce que le SAF retrouvera dans son critère A, et c’est une des raisons pour lesquelles la recommandation finale prendra la forme d’un pilote de 40 vélos chez 6 entreprises sur 12 mois : le format laisse le temps d’embarquer l’atelier au lieu de lui imposer un nouveau métier du jour au lendemain.',
  },

  phraseOral:
    'Je ne fais pas la matrice de l’entreprise, je la fais de la décision : sur le basculement vers l’abonnement, les mécaniciens ont un pouvoir fort — sans eux, pas de maintenance planifiée — et un intérêt fort, puisque leur métier change ; je les fais donc entrer dans la conception du pilote, alors que la banque, qui a autant de pouvoir mais peu d’intérêt, se traite par un tableau de bord trimestriel : même niveau de pouvoir, traitement opposé.',

  aRetenir: [
    {
      cle: 'La définition 📘',
      valeur:
        'Un outil pour représenter et distinguer les acteurs, leur implication et leur degré d’influence dans les décisions de l’entreprise — « le début de toute analyse pour réaliser un plan ».',
    },
    {
      cle: 'Les deux axes',
      valeur:
        'Pouvoir : peut-il dire non ? Intérêt : le sujet le touche-t-il concrètement ? Le pouvoir donne l’intensité du traitement, l’intérêt en donne la nature.',
    },
    {
      cle: 'La chaîne 📘',
      valeur:
        'Lister → évaluer → positionner → agir. S’arrêter à la liste ne vaut rien ; s’arrêter au positionnement vaut la moitié.',
    },
    { cle: 'Fort × fort', valeur: 'Gérer de près : consulter, associer, co-décider.' },
    {
      cle: 'Fort × faible',
      valeur: 'Satisfaire : information de qualité, et éveiller progressivement l’intérêt.',
    },
    {
      cle: 'Faible × fort',
      valeur: 'Informer : délivrer l’information, sonder les avis, proposer un rôle d’ambassadeur.',
    },
    {
      cle: 'Faible × faible',
      valeur: 'Veiller : effort minimal, on ne va pas à sa rencontre, l’information reste à disposition.',
    },
    {
      cle: 'Pourquoi si tôt',
      valeur:
        'Parce que l’acceptabilité du SAF s’appuiera dessus, nom par nom : sans matrice, la conclusion sera « les parties prenantes accepteront probablement ».',
    },
    {
      cle: 'Le conflit d’intérêts 📘',
      valeur:
        'Intérêt personnel d’un acteur puissant contre intérêt de l’organisation : la réponse est le processus, pas la communication (cas du CIO).',
    },
  ],

  notions: [
    'parties-prenantes',
    'matrice-pouvoir-interet',
    'conflit-interets',
    'gouvernance',
    'acceptabilite',
    'saf',
    'perimetre',
    'das',
    'etat-sixieme-force',
  ],
}
