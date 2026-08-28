import type { Modele } from './types'

export const modele: Modele = {
  id: 'rcov',
  numero: 10,
  slug: 'rcov',
  nom: 'Business Model / RCOV',
  sousTitre: 'Proposition de valeur + architecture de valeur + équation de profit',
  famille: 'business-model',
  etape: 'e3',

  question:
    'Comment cette entreprise gagne-t-elle de l’argent — et est-ce que le système qu’elle décrit tient debout ?',

  enUnePhrase:
    'Le RCOV enchaîne quatre briques — Ressources, Compétences, Organisation, proposition de Valeur — pour montrer que la promesse faite au client découle de ce qu’on possède et de ce qu’on sait faire, et que la confrontation de cette promesse avec l’organisation dégage un profit.',

  produit:
    'Une mécanique économique écrite noir sur blanc : qui paie quoi et quand, ce que ça coûte et sous quelle forme, et le point précis où le modèle est fragile. C’est cette phrase-là que l’on réutilise ensuite dans la faisabilité du SAF.',

  quandUtiliser: [
    'Quand la question porte sur le fonctionnement : « analysez le business model de X », « comment cette entreprise gagne-t-elle de l’argent ? ». Le business model est alors le sujet lui-même.',
    'Quand une option issue du SWOT croisé doit devenir concrète : après le croisement, avant le SAF. Le RCOV transforme une direction en système vérifiable.',
    'Quand on veut tester si une promesse est tenable : c’est le seul outil du cours qui vérifie qu’un modèle ne se contredit pas lui-même.',
    'Quand on compare deux modèles — l’actuel et celui qu’on envisage : le RCOV rend visible ce qui bascule d’une colonne à l’autre.',
    'Quand on doit dire d’où vient l’argent et où il part, avec des mots plus précis que « ça rapporte plus que ça ne coûte ».',
  ],

  quandNePasUtiliser: [
    'Pour faire le diagnostic externe : le RCOV ne dit rien du secteur, de la concurrence ni de la réglementation. Ce sont le PESTEL et Porter qui font ce travail, en amont.',
    'Pour remplacer le diagnostic interne : il reprend les ressources et les compétences déjà identifiées, il ne les cherche pas à sa place.',
    'Pour décrire une entreprise très diversifiée d’un seul coup : comme le Canvas, il suppose un modèle économique à la fois. On en fait un par domaine d’activité.',
    'Pour trancher entre deux options : le RCOV montre comment chacune fonctionnerait, il ne les note pas. C’est le rôle du SAF.',
  ],

  schema: {
    h: 740,
    description:
      'Les ressources et compétences, placées au sommet, alimentent deux branches : à gauche l’offre faite au client puis les revenus, à droite l’organisation de la chaîne de valeur puis les charges ; les deux branches se rejoignent dans le profit, et une flèche de retour remonte de l’organisation vers les ressources.',
    noeuds: [
      {
        id: 'cadre-pv',
        titre: 'PROPOSITION DE VALEUR',
        x: 16,
        y: 186,
        l: 468,
        h: 358,
        forme: 'cadre',
        ton: 'sourd',
      },
      {
        id: 'cadre-av',
        titre: 'ARCHITECTURE DE VALEUR',
        x: 516,
        y: 186,
        l: 468,
        h: 358,
        forme: 'cadre',
        ton: 'sourd',
      },
      {
        id: 'rc',
        titre: 'RESSOURCES ET COMPÉTENCES',
        lignes: ['détenues par l’entreprise', 'ce qu’on a, ce qu’on sait faire'],
        x: 290,
        y: 40,
        l: 420,
        h: 110,
        ton: 'accent',
        point: 'rc',
      },
      {
        id: 'boucle',
        titre: 'LA BOUCLE DE RETOUR',
        lignes: ['organiser régénère', 'ce qu’on sait faire'],
        x: 740,
        y: 40,
        l: 220,
        h: 110,
        ton: 'alerte',
        point: 'boucle',
      },
      {
        id: 'offre',
        titre: 'OFFRE DE PRODUITS ET SERVICES',
        lignes: ['la promesse faite au client', 'clientèle, promesse, accès'],
        x: 40,
        y: 210,
        l: 420,
        h: 140,
        point: 'offre',
      },
      {
        id: 'orga',
        titre: 'ORGANISATION DE LA CHAÎNE',
        lignes: ['de valeur — produire et livrer', 'faire ou faire faire'],
        x: 540,
        y: 210,
        l: 420,
        h: 140,
        point: 'orga',
      },
      {
        id: 'revenus',
        titre: 'VOLUME ET STRUCTURE DES REVENUS',
        lignes: ['ponctuels ou récurrents ?', 'combien de sources ?'],
        x: 40,
        y: 410,
        l: 420,
        h: 110,
        point: 'revenus',
      },
      {
        id: 'charges',
        titre: 'VOLUME ET STRUCTURE DES CHARGES',
        lignes: ['fixes ou variables ?', 'quel poste domine ?'],
        x: 540,
        y: 410,
        l: 420,
        h: 110,
        point: 'charges',
      },
      {
        id: 'profit',
        titre: 'PROFIT',
        lignes: ['l’équation de profit', 'revenus − charges'],
        x: 290,
        y: 580,
        l: 420,
        h: 110,
        ton: 'positif',
        point: 'profit',
      },
    ],
    liens: [
      { de: 'rc', vers: 'offre', depuis: 'bas', arrive: 'haut' },
      { de: 'rc', vers: 'orga', depuis: 'bas', arrive: 'haut' },
      { de: 'offre', vers: 'orga', libelle: 'tenable ?', depuis: 'droite', arrive: 'gauche', sansFleche: true, ton: 'alerte' },
      { de: 'offre', vers: 'revenus', depuis: 'bas', arrive: 'haut' },
      { de: 'orga', vers: 'charges', depuis: 'bas', arrive: 'haut' },
      { de: 'revenus', vers: 'profit', depuis: 'bas', arrive: 'haut' },
      { de: 'charges', vers: 'profit', depuis: 'bas', arrive: 'haut' },
      { de: 'orga', vers: 'boucle', trait: 'pointille', depuis: 'haut', arrive: 'bas', ton: 'alerte' },
      { de: 'boucle', vers: 'rc', libelle: 'régénère', trait: 'pointille', depuis: 'gauche', arrive: 'droite', ton: 'alerte' },
    ],
    note:
      'Les deux branches sont symétriques : à gauche ce qui fait entrer l’argent, à droite ce qui le fait sortir. Ce qui les tient ensemble, c’est le trait du milieu — la promesse doit être tenable par l’organisation.',
  },

  points: [
    {
      id: 'rc',
      libelle: 'Ressources et compétences — le sommet',
      cestQuoi:
        'La case de départ, et elle est en haut du dessin pour une raison. 📘 Une ressource est un actif, matériel ou immatériel, que l’entreprise possède et qu’elle peut déployer ; une compétence est l’aptitude à combiner et coordonner ces ressources pour en tirer quelque chose. Posséder n’est pas savoir faire — c’est la distinction que le sigle sépare en R et en C, et que le schéma réunit dans une seule case.',
      question:
        'Qu’est-ce que nous possédons, et qu’est-ce que nous savons faire de ce que nous possédons ?',
      quoiMettre: [
        'Les ressources tangibles : locaux, machines, stock, véhicules, trésorerie, effectif.',
        'Les ressources intangibles : marque, réputation, brevets, droits, base de clients, données.',
        'Les compétences opérationnelles et techniques : ce que les équipes savent exécuter mieux que la moyenne.',
        'Les compétences managériales : coordination, gestion des délais, qualité, réactivité de la direction.',
        'Le tri : lesquelles sont difficiles à acheter ou à copier ? Ce sont celles-là qui fondent le modèle.',
        'Les manques, écrits aussi : une ressource absente explique souvent pourquoi une promesse ne tient pas.',
      ],
      exemple:
        'Atelier Léman : ressources — deux ateliers (Carouge et Plainpalais), un stock de pièces, 45 salariés, une marque locale réputée, une base de clients genevois. Compétences — diagnostic et réparation toutes marques, montage de vélos haut de gamme, relation de confiance en atelier. En face, les batteries achetées à deux fournisseurs asiatiques ne sont ni une ressource détenue ni une compétence maîtrisée : c’est une dépendance, et elle apparaît ici parce que c’est ici qu’elle fait mal.',
      piege:
        'Recopier une liste de ressources sans jamais dire ce que l’entreprise sait en faire. On obtient un inventaire, pas un modèle.',
      reflexe:
        'Une ressource s’achète, une compétence s’apprend. Écris deux colonnes et force-toi à remplir les deux.',
      notions: ['ressources', 'competences', 'ressources-intangibles', 'transferabilite'],
    },
    {
      id: 'offre',
      libelle: 'Offre de produits et de services — la branche « proposition de valeur »',
      cestQuoi:
        '📘 La proposition de valeur, c’est « la structure de l’offre de produits et de services formulée pour une clientèle, ainsi que les éléments de valorisation de cette offre ». Autrement dit : ce qu’on promet, à qui, et ce qui fait que cette promesse vaut quelque chose. 📘 Le cours ajoute une phrase décisive : elle est « la source des flux de revenus » — d’où la flèche qui descend vers les revenus, et non l’inverse.',
      question:
        'Pourquoi le client nous choisit — et non : qu’est-ce que nous vendons ?',
      quoiMettre: [
        'La clientèle : les individus ou les organisations à qui la promesse est adressée. Nommer un segment, pas « tout le monde ».',
        '📘 La promesse, parmi les huit du cours : prix, performances, simplicité, confort, sécurité, plaisir, distinction, personnalisation.',
        '📘 Les modes d’accès : boutique, corner, site, application, abonnement, leasing, libre-service. La dimension qu’on oublie le plus souvent.',
        'Les éléments de valorisation : ce qui justifie qu’on paie ce prix-là plutôt qu’un autre.',
        'La formulation à voix haute : une phrase qui commence par le client et finit par le bénéfice.',
      ],
      exemple:
        'Atelier Léman aujourd’hui : clientèle = particuliers genevois aisés ; promesse = performances et confort (« un vélo électrique haut de gamme, réparable près de chez vous ») ; mode d’accès = achat en boutique, 2 600 CHF. L’option envisagée déplace les trois dimensions d’un coup : clientèle = entreprises genevoises ; promesse = simplicité (« vos collaborateurs roulent toute l’année, sans gestion de flotte ») ; mode d’accès = abonnement mensuel. Trois changements, pas un.',
      piege:
        'Décrire le produit à la place de la promesse. « Nous vendons des vélos électriques » est une réponse de catalogue : elle ne dit ni pour qui, ni pourquoi eux.',
      reflexe:
        'Teste ta phrase : si un concurrent peut la reprendre telle quelle sans mentir, ce n’est pas encore une proposition de valeur.',
      notions: ['proposition-de-valeur', 'segments-clients', 'economie-fonctionnalite'],
    },
    {
      id: 'orga',
      libelle: 'Organisation de la chaîne de valeur — la branche « architecture de valeur »',
      cestQuoi:
        '📘 L’architecture de valeur « décrit la production et la délivrance de la proposition de valeur à travers les ressources et compétences de l’entreprise. Il s’agit principalement de la chaîne de valeur et du système de valeur. » C’est la machine : qui fait quoi, à l’intérieur de l’entreprise et au-delà de ses murs. 📘 Elle se gouverne par deux décisions — faire ou faire faire, et l’arbitrage entre coûts fixes et coûts variables.',
      question:
        'Qui fait quoi, dedans et dehors, pour que la promesse soit effectivement tenue ?',
      quoiMettre: [
        'Les activités réalisées en interne, et pourquoi elles le sont : contrôle de la qualité, protection du savoir-faire, captation de la marge.',
        'Les activités confiées à des tiers, et ce que cela crée comme dépendance.',
        '📘 Le système de valeur : fournisseurs et distributeurs en font partie, l’organisation ne s’arrête pas aux murs.',
        '📘 L’arbitrage coûts fixes / coûts variables : beaucoup de fixes = fort levier mais fragilité ; beaucoup de variables = marge plus faible mais résilience.',
        'Les activités qui n’existent pas encore et qu’il faudrait créer pour tenir la nouvelle promesse.',
      ],
      exemple:
        'Atelier Léman fait en interne l’assemblage et la réparation — c’est là qu’est l’avantage, on ne l’externalise pas —, et fait faire les batteries et les cadres. Passer à l’abonnement ajoute trois activités qui n’existent aujourd’hui nulle part : détenir un parc de remplacement, organiser une tournée de maintenance chez les entreprises, et suivre chaque vélo dans un outil. C’est cette colonne, pas la promesse, qui coûte cher.',
      piege:
        'Externaliser une activité au seul motif qu’elle coûte moins cher dehors — y compris quand c’est elle qui fonde l’avantage.',
      reflexe:
        '📘 La règle du cours : on externalise les fonctions non stratégiques qui ne seraient pas efficaces. Donc jamais ce qui fonde l’avantage concurrentiel. Le test : si ce partenaire disparaît demain, le modèle tient-il ?',
      notions: ['architecture-de-valeur', 'faire-ou-faire-faire', 'chaine-de-valeur', 'systeme-de-valeur'],
    },
    {
      id: 'revenus',
      libelle: 'Volume et structure des revenus',
      cestQuoi:
        'Le bas de la branche gauche : ce que la promesse fait entrer. Le mot qui compte est « structure » — pas seulement combien, mais d’où, de combien de sources, avec quel poids relatif et à quel rythme. Un même chiffre d’affaires n’a pas la même solidité selon qu’il vient d’une source ou de quatre, d’une vente unique ou d’un abonnement.',
      question:
        'Qui paie, pour quoi, quand, et combien de fois ?',
      quoiMettre: [
        'La liste des sources, une par ligne : vente, prestation, abonnement, commission, location, adhésion, redevance.',
        'Pour chaque source : ponctuelle ou récurrente ? C’est la distinction qui change la nature du modèle.',
        'Le poids relatif de chaque source, et donc la dépendance à la plus grosse.',
        'Le volume nécessaire : à partir de combien d’unités ou de clients le modèle tient-il ?',
        'Qui paie exactement — ce n’est pas toujours celui qui consomme.',
      ],
      exemple:
        'Atelier Léman : 6,2 M CHF, deux sources — la vente de vélos, ponctuelle et en recul de 8 % sur deux ans, et la réparation, répétée mais de petit montant. Le pilote d’abonnement inverse le rythme. Chiffre illustratif : 40 vélos à 95 CHF par mois font 45 600 CHF sur douze mois, encaissés mois après mois, là où la vente des mêmes 40 vélos à 2 600 CHF aurait fait rentrer 104 000 CHF d’un coup. Moins vite, mais tous les mois.',
      piege:
        'Écrire un montant global et passer à la suite — ou confondre chiffre d’affaires et profit, qui est une case plus bas.',
      reflexe:
        'Une ligne par source, et à côté de chaque ligne un seul mot : « ponctuel » ou « récurrent ».',
      notions: ['flux-revenus', 'equation-de-profit'],
    },
    {
      id: 'charges',
      libelle: 'Volume et structure des charges',
      cestQuoi:
        'Le bas de la branche droite : ce que l’architecture fait sortir. Le miroir exact de la case des revenus, avec la même exigence de structure — quel poste domine, et ces coûts sont-ils fixes (ils tombent même sans activité) ou variables (ils suivent le volume) ?',
      question:
        'Quels coûts, sous quelle forme, et lequel décide de tout ?',
      quoiMettre: [
        'Les postes principaux, du plus lourd au plus léger : achats, main-d’œuvre, loyers, amortissements, logistique.',
        'Pour chaque poste : fixe ou variable — c’est ce qui détermine la fragilité du modèle en cas de baisse d’activité.',
        'Les coûts que le nouveau modèle crée et que l’ancien n’avait pas.',
        '📘 Les coûts non visibles, sociaux et environnementaux, que le BMC durable ajoute et que l’équation classique ignore.',
        'Qui supporte quoi : un coût peut être transféré à un partenaire ou à un client, et c’est un choix de modèle.',
      ],
      exemple:
        'Atelier Léman aujourd’hui : le poste dominant est l’achat du vélo, 1 400 CHF l’unité — un coût variable, avancé quelques semaines puis récupéré à la vente. En abonnement, les mêmes 1 400 CHF deviennent un actif immobilisé : chiffre illustratif, 56 000 CHF pour les 40 vélos du pilote, amortis sur plusieurs années, plus une main-d’œuvre de maintenance qui revient tous les mois. La structure bascule du variable vers le fixe. Rien d’autre n’a changé dans l’atelier, et pourtant le modèle n’est plus le même.',
      piege:
        'Expédier la ligne des coûts en deux mots. C’est pourtant la moitié de l’équation de profit, et souvent celle où se cache la vraie difficulté.',
      reflexe:
        'Nomme le poste dominant, puis dis s’il est fixe ou variable. Deux informations, une phrase, et l’analyse tient debout.',
      notions: ['structure-couts', 'couts-fixes-variables', 'externalite-negative'],
    },
    {
      id: 'profit',
      libelle: 'Le profit — l’équation de profit',
      cestQuoi:
        '📘 « La confrontation de la proposition de valeur avec l’architecture de valeur se traduit par une confrontation revenus-coûts qui dégage un profit. » Le point où les deux branches se rejoignent. 📘 Le titre de la slide est « Pour une équation de profit originale » : le mot « originale » n’est pas décoratif — la façon de gagner de l’argent est elle-même un terrain de différenciation.',
      question:
        'Comment gagne-t-on de l’argent, d’une façon que les concurrents n’ont pas ?',
      quoiMettre: [
        'La confrontation, pas la soustraction : quelle structure de revenus fait face à quelle structure de coûts.',
        'Ce qui rend l’équation originale : une source de revenus inhabituelle, ou un coût que quelqu’un d’autre supporte.',
        'Les variables dont la rentabilité dépend réellement — souvent deux ou trois, rarement le prix.',
        'Le point de bascule : à partir de quand ça devient rentable, et qu’est-ce qui le retarde.',
        'La différence avec le profit de Porter : ici on raisonne en agrégats, pas à l’unité.',
      ],
      exemple:
        'Atelier Léman : aujourd’hui, 2 600 CHF encaissés contre 1 400 CHF de coût, soit 1 200 CHF de marge brute par vélo, une fois. En abonnement, la même marge ne disparaît pas : elle s’étale. Et deux variables qui n’existaient pas décident alors du résultat — le taux de renouvellement des contrats et le nombre d’interventions par vélo et par an. 📘 Le corrigé Oncle Hansi montre l’autre voie vers l’originalité : deux flux de revenus (adhésions et redevances) et une structure de coûts « la plus légère possible », parce que « la logistique reste à la charge des entreprises » adhérentes.',
      piege:
        'Dire « le profit, c’est les revenus moins les coûts ». C’est exact et sans aucune valeur. Autre confusion fréquente : mélanger cette équation avec le Profit = Prix − Coûts de Porter.',
      reflexe:
        'Porter raisonne à l’unité pour montrer la pression des forces ; le RCOV raisonne en agrégats pour décrire l’architecture économique. Savoir énoncer cette distinction rapporte des points.',
      notions: ['equation-de-profit', 'profit-prix-couts', 'avantage-concurrentiel'],
    },
    {
      id: 'boucle',
      libelle: 'La boucle de retour',
      cestQuoi:
        'La flèche qui remonte : organiser sa chaîne de valeur ne consomme pas seulement les ressources et les compétences, cela les régénère et les transforme. Le RCOV n’est donc pas une cascade qui finit au profit, c’est un cycle qui recommence — et c’est précisément ce qui le distingue du Canvas, 📘 « essentiellement statique ».',
      question:
        'Ce que ce modèle fait tourner cette année, est-ce qu’il nous rend plus forts l’année prochaine ?',
      quoiMettre: [
        'Ce que l’exploitation fait apprendre : des tours de main, des données, une connaissance client.',
        'Les actifs qu’elle crée sans qu’on les ait achetés : une réputation, un réseau de partenaires, un historique.',
        'Ce qu’elle use ou fait perdre : un savoir-faire qu’on n’exerce plus s’atrophie.',
        'Le réinvestissement : ce que le profit permet d’acquérir pour le cycle suivant.',
        'Le décalage dans le temps : la boucle ne se referme pas dans l’année, dis en combien de temps.',
      ],
      exemple:
        'Atelier Léman en abonnement : chaque tournée de maintenance produit une chose que la vente ne produisait pas — un historique de pannes par modèle de batterie. C’est une ressource immatérielle qui n’a rien coûté, qui accélère le diagnostic et qui réduit le coût de la maintenance l’année suivante. Symétriquement, si l’atelier abandonne la vente, l’équipe perd le contact avec les nouveautés produit : la boucle joue aussi à l’envers.',
      piege:
        'Réciter les quatre lettres comme un enchaînement linéaire et s’arrêter au profit. On perd alors le seul argument qui distingue vraiment le RCOV du Canvas.',
      reflexe:
        'Termine toujours ta présentation du RCOV par la boucle, en une phrase : « et l’organisation, en tournant, transforme les ressources de départ ».',
      notions: ['rcov', 'bmc', 'avantage-concurrentiel-durable'],
    },
  ],

  methode: [
    {
      titre: '1. Poser les ressources et les compétences au sommet',
      detail:
        'Reprends la sortie du diagnostic interne et écris deux colonnes courtes : ce que l’entreprise possède, ce qu’elle sait faire. Cinq lignes suffisent. Souligne les deux ou trois éléments difficiles à copier : ce sont eux qui vont porter tout le reste du modèle.',
      aEviter:
        'Refaire le diagnostic interne ici. Le RCOV le prolonge, il ne le double pas.',
    },
    {
      titre: '2. Descendre la branche gauche : écrire la promesse',
      detail:
        'Formule la proposition de valeur en trois morceaux, dans cet ordre : à qui, quoi (une des huit promesses du cours), comment y accède-t-on. Vérifie que ta phrase commence par le client. Puis pose sous elle les sources de revenus qu’elle rend possibles.',
      aEviter:
        'Partir du produit. Une promesse formulée depuis le catalogue ne permet aucune analyse ensuite.',
    },
    {
      titre: '3. Descendre la branche droite : écrire la machine',
      detail:
        'Liste ce qui est fait en interne et ce qui est confié à l’extérieur, fournisseurs et distributeurs compris. Pour chaque activité créée ou supprimée par l’option étudiée, note le coût correspondant et dis s’il est fixe ou variable.',
      aEviter:
        'Rester dans les murs de l’entreprise : 📘 l’architecture de valeur comprend la chaîne de valeur et le système de valeur.',
    },
    {
      titre: '4. Traverser : la promesse est-elle tenable par la machine ?',
      detail:
        'C’est le trait horizontal du schéma, et c’est l’étape que presque personne ne fait. Prends chaque morceau de la promesse et cherche, à droite, la ressource ou l’activité qui la tient. Une promesse sans contrepartie à droite est une incohérence — nomme-la.',
      aEviter:
        'Conclure « c’est cohérent » sans avoir cité un seul appariement précis.',
    },
    {
      titre: '5. Chiffrer les deux bas de branche',
      detail:
        'À gauche : combien de sources, ponctuelles ou récurrentes, laquelle domine. À droite : quel poste de coût domine, fixe ou variable. Deux ou trois chiffres suffisent, même approximatifs — dis qu’ils sont illustratifs, cela vaut mieux que de rester dans le vague.',
      aEviter:
        'Aligner des montants sans les qualifier. Un chiffre sans « récurrent » ou « fixe » à côté n’apprend rien.',
    },
    {
      titre: '6. Fermer par l’équation, puis par la boucle',
      detail:
        'Énonce la confrontation : cette structure de revenus contre cette structure de coûts, et voilà de quoi dépend le résultat. Puis remonte : ce que l’exploitation régénère dans les ressources. Ces deux phrases-là font la différence entre décrire un modèle et l’analyser.',
      aEviter:
        'S’arrêter au profit. Sans la boucle, ton RCOV ressemble à un Canvas mal dessiné.',
    },
  ],

  liens: [
    {
      vers: 'ressources-competences',
      nature: 'prolonge',
      explication:
        'Le RCOV ne refait pas le diagnostic interne : il en reprend la sortie — les ressources et les compétences — et la place au sommet du modèle économique, pour montrer que tout ce qu’on peut promettre en découle.',
    },
    {
      vers: 'chaine-de-valeur',
      nature: 'precise',
      explication:
        'Le O du RCOV, c’est la chaîne de valeur : le RCOV dit qu’elle produit les charges, la chaîne de valeur dit quelle activité, exactement, les produit et laquelle crée de la marge.',
    },
    {
      vers: 'bmc',
      nature: 'partage',
      explication:
        'RCOV et Canvas décrivent le même business model avec deux focales : le RCOV en montre le mécanisme causal et la boucle, le Canvas en fait l’inventaire en neuf blocs — la moitié droite du Canvas, c’est la proposition de valeur du RCOV, la moitié gauche son architecture, la ligne du bas son équation de profit.',
    },
    {
      vers: 'saf',
      nature: 'alimente',
      explication:
        'Sans business model, la faisabilité du SAF est une opinion — « il faudra des moyens » ; avec lui, on nomme le point qui coince, ici la trésorerie d’un parc immobilisé face à des revenus mensuels.',
    },
    {
      vers: 'bmc-durable',
      nature: 'prolonge',
      explication:
        'Le RCOV s’arrête au profit ; le BMC durable rouvre l’équation en y ajoutant les coûts non visibles, sociaux et environnementaux, que cette confrontation revenus-coûts ignore par construction.',
    },
  ],

  pieges: [
    {
      titre: 'Inverser la flèche',
      explication:
        'Partir de la promesse qu’on aimerait faire, puis chercher ensuite les ressources qui iraient avec. Le modèle dit exactement le contraire : la proposition de valeur est un aboutissement, pas un point de départ. Une promesse que les ressources ne tiennent pas détruit plus de valeur qu’elle n’en crée.',
      reflexe:
        'Lis toujours le schéma de haut en bas et dis-le à voix haute : « on ne promet que ce qu’on peut tenir ».',
    },
    {
      titre: 'Placer le business model dans le diagnostic',
      explication:
        'Le business model n’est pas un outil d’analyse externe ni interne. 📘 Il arrive au chapitre 3, après le diagnostic, quand une option doit devenir concrète. Le sortir trop tôt fait perdre du temps et brouille le raisonnement.',
      reflexe:
        'Situe-le à voix haute : « après le SWOT croisé, avant le SAF ». Cette phrase seule montre que le processus est compris.',
    },
    {
      titre: 'Confondre chiffre d’affaires et profit',
      explication:
        'Les revenus sont une case, le profit en est une autre, deux niveaux plus bas. Dire « le modèle est rentable, l’entreprise fait 6,2 millions » mélange les deux et se voit immédiatement.',
      reflexe:
        'Le profit est le résultat d’une confrontation entre deux structures. Tant que tu n’as pas décrit les deux, ne prononce pas le mot.',
    },
    {
      titre: 'Réciter le sigle sans toucher au cas',
      explication:
        '« R comme ressources, C comme compétences… » : la définition est juste et la note est basse. Le sigle n’est qu’une grille ; ce qui s’évalue, c’est ce que tu mets dans chaque case et le lien que tu fais entre elles.',
      reflexe:
        'Pour chaque lettre, une phrase avec un élément du cas dedans. Si tu n’en trouves pas, dis-le : c’est déjà une information sur l’entreprise.',
    },
    {
      titre: 'Décrire sans conclure sur la cohérence',
      explication:
        'Un RCOV rempli n’est pas une analyse. L’analyse commence quand tu rapproches deux cases et que tu montres qu’elles se renforcent — ou qu’elles se contredisent. Une incohérence n’est jamais visible dans une case prise isolément.',
      reflexe:
        'Termine par une phrase du type « la promesse X repose sur Y, et Y n’existe pas encore » : c’est la preuve que tu analyses au lieu de décrire.',
    },
  ],

  variantes: [
    {
      sujet: 'La boucle de retour : d’où part-elle, exactement ?',
      formulations: [
        {
          texte:
            'Une flèche montante part de l’organisation de la chaîne de valeur et remonte vers les ressources et compétences : organiser régénère et transforme ce dont on dispose.',
          source: '📘 Cours Business Model durable, schéma de la slide 4',
        },
        {
          texte:
            'La boucle part du profit : le profit dégagé finance de nouvelles ressources, qui permettent de nouvelles compétences, donc une proposition de valeur enrichie.',
          source: '🔎 Lecture de la chaîne logique, reprise dans les fiches du dossier',
        },
      ],
      consigne:
        'Les deux bouclages disent la même chose — le modèle se régénère, il n’est pas linéaire — mais ils ne passent pas par le même chemin. Cite celui du schéma (organisation → ressources), puis signale l’autre en une incise. C’est la preuve que tu as regardé le dessin et pas seulement le sigle.',
    },
    {
      sujet: 'Le nom des cases : celui du schéma ou celui du texte ?',
      formulations: [
        {
          texte:
            '« Offre de produits et de services » · « Organisation de la chaîne de valeur » · « Volume et structure des revenus » · « Volume et structure des charges ».',
          source: '📘 Les libellés du schéma, slide 4',
        },
        {
          texte:
            '« Proposition de valeur » · « Architecture de valeur » · « Revenus » · « Coûts », et le triptyque qui les coiffe.',
          source: '📘 Le texte des slides 5 à 8, et le sous-titre du schéma du dossier',
        },
      ],
      consigne:
        'Le schéma nomme les cases par ce qu’elles contiennent, le texte par la fonction qu’elles remplissent. Dis les deux d’un trait : « l’offre de produits et de services, c’est-à-dire la proposition de valeur ». Et ne perds surtout pas le mot « structure » : c’est lui qui transforme une évidence comptable en analyse.',
    },
    {
      sujet: 'La définition du business model elle-même',
      formulations: [
        {
          texte:
            '« L’ensemble des modalités par lesquelles une organisation crée de la valeur et la répartit. »',
          source: '📘 Cours Business Model, slide 2',
        },
        {
          texte:
            '« Un business model décrit les choix d’une entreprise pour générer des revenus » — ces choix portant sur les ressources et compétences mobilisées, la proposition de valeur et l’organisation interne.',
          source: '📘 Cours Business Model, slide 3',
        },
      ],
      consigne:
        'Deux formulations du même cours, à deux slides d’écart, et elles ne pointent pas le même endroit : la première insiste sur la répartition de la valeur, la seconde sur les choix et sur les ressources. Cite l’une, mentionne l’autre — la seconde est celle qui fait le pont avec le diagnostic interne.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman SA — le modèle actuel et le modèle d’abonnement, lus au RCOV',
    situation:
      'Le diagnostic est fait et le SWOT croisé a produit une piste : croiser la force « atelier réputé, mécaniciens très qualifiés » avec l’opportunité « la Ville de Genève multiplie les subventions à la mobilité douce » donne une direction — un abonnement mobilité tout compris pour les entreprises genevoises. À ce stade, ce n’est qu’une intention. Le RCOV sert ici à la transformer en système vérifiable, avant de la soumettre au SAF.',
    deroule: [
      {
        etiquette: 'R — Ressources',
        contenu:
          'Deux ateliers (Carouge et Plainpalais), un stock de pièces, 45 salariés, une marque locale réputée, une base de clients genevois. Point faible : les batteries viennent de deux fournisseurs asiatiques — une ressource critique que l’entreprise ne détient pas.',
      },
      {
        etiquette: 'C — Compétences',
        contenu:
          'Diagnostic et réparation toutes marques, montage de vélos haut de gamme, conseil en atelier. Ce que l’entreprise ne sait pas encore faire : piloter un parc de vélos répartis chez des tiers et facturer un service mensuel.',
      },
      {
        etiquette: 'O — Organisation',
        contenu:
          'Aujourd’hui : assemblage, vente et réparation en interne ; batteries et cadres achetés à l’extérieur ; vente en boutique. En abonnement, il faut ajouter trois activités qui n’existent nulle part : un parc de remplacement, une tournée de maintenance chez le client, un outil de suivi vélo par vélo.',
      },
      {
        etiquette: 'V — Proposition de valeur',
        contenu:
          'De « un vélo électrique haut de gamme, réparable près de chez vous » — promesse de performances et de confort, accès par la boutique — à « vos collaborateurs roulent toute l’année, sans immobilisation ni gestion de flotte » — promesse de simplicité, accès par abonnement. La clientèle change aussi : du particulier à l’entreprise.',
      },
      {
        etiquette: 'Volume et structure des revenus',
        contenu:
          'Vente ponctuelle de 2 600 CHF l’unité → abonnement récurrent. Chiffre illustratif : 40 vélos à 95 CHF par mois = 45 600 CHF sur les douze mois du pilote, contre 104 000 CHF encaissés d’un coup si les mêmes 40 vélos étaient vendus.',
      },
      {
        etiquette: 'Volume et structure des charges',
        contenu:
          'Achat du vélo : 1 400 CHF l’unité. Aujourd’hui variable, avancé quelques semaines. Demain immobilisé : 56 000 CHF pour le pilote, amortis sur plusieurs années, plus une main-d’œuvre de maintenance récurrente. La structure bascule du variable vers le fixe.',
      },
      {
        etiquette: 'Profit — l’équation',
        contenu:
          'La marge de 1 200 CHF par vélo ne disparaît pas, elle s’étale. Deux variables qui n’existaient pas dans l’ancien modèle décident désormais du résultat : le taux de renouvellement des contrats et le nombre d’interventions par vélo et par an.',
      },
      {
        etiquette: 'La boucle',
        contenu:
          'Chaque tournée produit un historique de pannes par modèle de batterie — une ressource immatérielle que la vente ne produisait pas, qui accélère le diagnostic et fait baisser le coût de maintenance de l’année suivante.',
      },
    ],
    conclusion:
      'Le modèle tient sur la compétence : les mécaniciens savent entretenir un parc, ce n’est pas là qu’est le risque. Il bute sur un point précis, et un seul : il transforme un achat de stock revendu en quelques semaines en un parc immobilisé sur plusieurs années, alors que les revenus, eux, deviennent mensuels. Le besoin en fonds de roulement change de nature. Cette phrase part telle quelle dans la faisabilité du SAF — et elle transforme une opinion en démonstration.',
  },

  phraseOral:
    'Chez Atelier Léman, le RCOV montre que la promesse d’abonnement est tenable par le haut du modèle — les compétences de maintenance existent déjà — mais qu’elle retourne le bas : elle remplace un achat de stock revendu en quelques semaines par un parc immobilisé, face à des revenus devenus mensuels ; le point à surveiller n’est donc pas le savoir-faire, c’est la trésorerie.',

  aRetenir: [
    {
      cle: 'Le sigle 📘',
      valeur: 'RCOV — Resources, Competences, Organization and Value proposition.',
    },
    {
      cle: 'La source 📘',
      valeur:
        '« D’après B. Demil, X. Lecoq et V. Warnier, Stratégie et business model, Pearson, 2013 » — mention portée sur la slide.',
    },
    {
      cle: 'Le sommet',
      valeur:
        'Les ressources et compétences sont en haut : tout part d’elles, et elles alimentent les deux branches en même temps.',
    },
    {
      cle: 'Les deux branches',
      valeur:
        'À gauche l’offre → les revenus ; à droite l’organisation → les charges. Symétriques, et elles se rejoignent dans le profit.',
    },
    {
      cle: 'Le mot à ne pas perdre',
      valeur:
        '« Structure » — des revenus, des charges. Sans lui, l’équation de profit se réduit à une soustraction.',
    },
    {
      cle: 'La boucle',
      valeur:
        'Organiser régénère les ressources : le RCOV est dynamique, là où le Canvas est 📘 « essentiellement statique ».',
    },
    {
      cle: 'Le triptyque 📘',
      valeur: 'Proposition de valeur · architecture de valeur · équation de profit.',
    },
    {
      cle: 'Quand le sortir',
      valeur:
        'Quand la question porte sur le fonctionnement, ou quand une option doit devenir concrète : après le SWOT croisé, avant le SAF.',
    },
  ],

  notions: [
    'rcov',
    'business-model',
    'proposition-de-valeur',
    'architecture-de-valeur',
    'equation-de-profit',
    'ressources',
    'competences',
    'faire-ou-faire-faire',
    'couts-fixes-variables',
    'flux-revenus',
    'structure-couts',
    'chaine-de-valeur',
    'systeme-de-valeur',
    'bmc',
    'economie-fonctionnalite',
  ],
}
