import type { Modele } from './types'

export const modele: Modele = {
  id: 'trois-postes',
  numero: 20,
  slug: 'trois-postes',
  nom: 'Postes d’impact du numérique',
  sousTitre: 'Terminaux · Data centers · Réseaux',
  famille: 'numerique',
  etape: 'transverse',

  question:
    'Ce service numérique a un impact — mais où exactement, dans quel objet physique, et lequel des trois endroits pèse le plus ?',

  enUnePhrase:
    'T-D-R découpe l’impact d’un service numérique en trois postes matériels — les terminaux qu’on tient dans la main, les data centers qui font tourner et gardent les données, les réseaux qui les transportent — pour remplacer la phrase creuse « le numérique consomme » par une localisation précise, chiffrable et actionnable.',

  produit:
    'Une carte de l’impact en trois lignes remplies avec les objets réels du cas, un poste désigné comme dominant, et un chiffre exprimé en total annuel — ce qui rend possible le test de l’effet rebond, puis la sobriété Q-T-A et les achats IT.',

  quandUtiliser: [
    'Dès qu’une solution numérique apparaît dans un cas : application, plateforme, capteurs, cloud, IA, automatisation, dématérialisation d’un service.',
    'Quand quelqu’un affirme qu’une technologie est écologique parce qu’elle supprime du papier, des trajets ou des locaux : T-D-R fait apparaître ce qu’elle crée en échange.',
    'Quand on doit chiffrer un projet numérique et qu’on ne sait pas par où commencer : les trois postes sont trois colonnes à remplir, dans l’ordre.',
    'Pour hiérarchiser un plan d’action : les parts respectives disent où agir en premier, et évitent de dépenser toute son énergie sur le poste le plus léger.',
    'À l’oral, en ouverture de toute question numérique : citer T-D-R en quinze secondes prouve qu’on ne confond pas « virtuel » et « sans matière ».',
  ],

  quandNePasUtiliser: [
    'Pour conclure. T-D-R localise, il ne tranche pas : dire où est l’impact ne dit pas si le projet vaut la peine. La conclusion se joue après le test du rebond et l’arbitrage gain apporté contre impacts créés.',
    'Pour traiter la dimension sociale du numérique : accessibilité, exclusion, données personnelles ne sont dans aucun des trois postes. Ce sont les axes technologique et sociétal de la RNE.',
    'Pour comparer deux chiffres trouvés ailleurs : deux études qui ne retiennent pas le même périmètre ne se comparent pas, même si toutes deux annoncent des pourcentages.',
    'Comme argument de refus : « il y a des terminaux, donc c’est mauvais » n’est pas une analyse. Tout service a trois postes, y compris celui qu’on recommande.',
  ],

  schema: {
    h: 820,
    description:
      'Un bandeau rappelle que le numérique n’est pas immatériel ; il se répartit en trois postes — terminaux, data centers, réseaux — accompagnés de leur part respective ; sous chaque poste, la case de ce qui pèse réellement à l’intérieur ; les trois remontent vers la carte des impacts.',
    noeuds: [
      {
        id: 'n-tdr',
        titre: 'OÙ EXACTEMENT ? — MÉMO T · D · R',
        x: 16,
        y: 150,
        l: 968,
        h: 204,
        forme: 'cadre',
        ton: 'sourd',
      },
      {
        id: 'n-reflexe',
        titre: 'LE NUMÉRIQUE N’EST PAS IMMATÉRIEL',
        x: 40,
        y: 40,
        l: 920,
        h: 70,
        forme: 'bande',
        ton: 'alerte',
        point: 'immateriel',
      },
      {
        id: 'n-terminaux',
        titre: 'TERMINAUX',
        lignes: ['smartphones, ordinateurs,', 'écrans, tablettes, capteurs', 'ce qu’on tient dans la main'],
        x: 40,
        y: 190,
        l: 260,
        h: 140,
        ton: 'accent',
        point: 'terminaux',
      },
      {
        id: 'n-data',
        titre: 'DATA CENTERS',
        lignes: ['serveurs, stockage, calcul', 'les machines louées', 'qu’on ne voit jamais'],
        x: 370,
        y: 190,
        l: 260,
        h: 140,
        point: 'data-centers',
      },
      {
        id: 'n-reseaux',
        titre: 'RÉSEAUX',
        lignes: ['fixe, mobile, transmission', 'antennes, câbles, boîtiers', 'ce qui transporte'],
        x: 700,
        y: 190,
        l: 260,
        h: 140,
        point: 'reseaux',
      },
      {
        id: 'n-fabrication',
        titre: 'CE QUI PÈSE : LA FABRICATION',
        lignes: ['extraire et produire coûte', 'plus que faire fonctionner', '→ garder plus longtemps'],
        x: 40,
        y: 414,
        l: 260,
        h: 140,
        ton: 'alerte',
        point: 'fabrication',
      },
      {
        id: 'n-energie',
        titre: 'CE QUI PÈSE : L’ÉNERGIE',
        lignes: ['électricité des serveurs', 'et eau de refroidissement', '→ garder moins de données'],
        x: 370,
        y: 414,
        l: 260,
        h: 140,
        point: 'energie',
      },
      {
        id: 'n-equipements',
        titre: 'CE QUI PÈSE : LE PARC',
        lignes: ['antennes et boîtiers,', 'renouvelés à chaque norme', '→ 4 %, donc pas la priorité'],
        x: 700,
        y: 414,
        l: 260,
        h: 140,
        point: 'equipements',
      },
      {
        id: 'n-carte',
        titre: 'LA CARTE DES IMPACTS',
        lignes: ['une ligne par poste, en', 'total annuel — puis on teste', 'si le gain sera réabsorbé'],
        x: 220,
        y: 634,
        l: 560,
        h: 140,
        ton: 'accent',
        point: 'carte',
      },
    ],
    liens: [
      { de: 'n-reflexe', vers: 'n-terminaux', depuis: 'bas', arrive: 'haut' },
      { de: 'n-reflexe', vers: 'n-data', depuis: 'bas', arrive: 'haut' },
      { de: 'n-reflexe', vers: 'n-reseaux', depuis: 'bas', arrive: 'haut' },
      { de: 'n-terminaux', vers: 'n-fabrication', depuis: 'bas', arrive: 'haut', libelle: '≈ 50 %' },
      { de: 'n-data', vers: 'n-energie', depuis: 'bas', arrive: 'haut', libelle: '46 %' },
      { de: 'n-reseaux', vers: 'n-equipements', depuis: 'bas', arrive: 'haut', libelle: '4 %' },
      { de: 'n-fabrication', vers: 'n-carte', depuis: 'bas', arrive: 'haut' },
      { de: 'n-energie', vers: 'n-carte', depuis: 'bas', arrive: 'haut' },
      { de: 'n-equipements', vers: 'n-carte', depuis: 'bas', arrive: 'haut' },
    ],
    note: '📘 Répartition en France : terminaux ≈ 50 %, data centers 46 %, réseaux 4 %. Le poste le plus lourd est celui qu’on tient dans la main — et son impact est déjà consommé au moment où on l’achète.',
  },

  points: [
    {
      id: 'immateriel',
      libelle: 'Le réflexe d’entrée : rien n’est immatériel',
      cestQuoi:
        '📘 La phrase qui ouvre tout le chapitre numérique du cours : « le premier fait à rappeler est que le numérique n’est pas immatériel ». Un service qui semble virtuel repose sur des appareils, des serveurs, des réseaux, de l’électricité, de l’eau, des métaux et des humains. Le mot « immatériel » décrit ce que l’utilisateur voit — une interface — et pas ce qui existe derrière.',
      question:
        'De quoi ce service est-il fait physiquement : quels objets faut-il fabriquer, alimenter et jeter pour qu’il fonctionne un an ?',
      quoiMettre: [
        'Les objets qu’on touche : ce que l’utilisateur a en main, et ce que l’entreprise installe.',
        'Les machines qu’on ne voit pas : serveurs loués, espace de stockage, puissance de calcul — le « cloud » est le data center de quelqu’un d’autre. 🔎',
        'Les tuyaux : antennes, box, routeurs, fibres, câbles sous-marins.',
        'Les ressources consommées : électricité, eau et énergie de refroidissement, métaux et terres rares extraits quelque part.',
        '📘 Les quatre adjectifs du cours pour décrire le numérique — matériel, énergivore, politique et addictif — qui disent d’un coup que le sujet n’est pas seulement technique.',
        '📘 Deux ordres de grandeur pour couper court à la discussion : le numérique mondial représentait en 2019 environ 5,6 % de l’électricité mondiale et 4 % des gaz à effet de serre ; en France, environ 4,4 % de l’empreinte carbone nationale en 2022.',
      ],
      exemple:
        'Le prestataire qui vend l’application d’abonnement à Atelier Léman explique qu’elle « ne consomme rien, tout est dans le cloud ». Traduit physiquement : quarante capteurs à fabriquer et à coller sur les vélos, quarante cartes SIM, un serveur loué qui tourne jour et nuit, deux tablettes à l’atelier, et un jour quarante capteurs à jeter. Le mot « cloud » n’a rien supprimé : il a seulement déplacé la matière hors de vue de l’acheteur.',
      piege:
        'Employer « dématérialiser » comme si cela voulait dire « faire disparaître la matière ». Cela veut dire remplacer une matière visible — du papier, un local, un trajet — par une matière invisible, qui n’est pas forcément plus légère.',
      reflexe:
        'Devant toute solution numérique, une seule question d’ouverture : qu’est-ce qu’il faut fabriquer pour que ça marche ? Tant qu’on n’a pas nommé un objet, on n’a pas commencé l’analyse.',
      notions: ['transformation-numerique', 'perimetre-numerique', 'effet-offre-usage'],
    },
    {
      id: 'terminaux',
      libelle: 'T — Terminaux',
      cestQuoi:
        '📘 Le premier des trois postes : tous les appareils qui se trouvent entre la personne et le service. Le schéma du cours en cite trois — smartphones, ordinateurs, écrans — et la catégorie s’étend à tout ce qui a une prise ou une batterie. 📘 C’est le poste le plus lourd : environ 50 % de l’impact du numérique en France.',
      question:
        'Combien d’appareils ce service oblige-t-il à fabriquer, à renouveler ou à garder allumés — et lesquels existaient déjà avant lui ?',
      quoiMettre: [
        '📘 La liste du schéma, à citer telle quelle : smartphones, ordinateurs, écrans.',
        '🔎 Ce qu’on y ajoute en pratique : tablettes, box internet, imprimantes, bornes, capteurs, objets connectés, véhicules équipés.',
        'Le nombre d’appareils réellement neufs que le projet impose, tenu séparé du parc qui existait déjà — les deux ne s’imputent pas de la même façon.',
        'La durée de vie prévue de chaque appareil : un terminal remplacé tous les deux ans compte deux fois plus qu’un terminal gardé quatre ans.',
        'Le sort des appareils remplacés : les DEEE, déchets d’équipements électriques et électroniques, difficiles à recycler et aggravés par l’obsolescence. 📘',
        '📘 La part — environ la moitié en France — parce que c’est elle qui justifie que tout le chapitre suivant porte sur les achats et sur la durée de vie, et pas sur les serveurs.',
      ],
      exemple:
        'Pour le pilote d’Atelier Léman — 40 vélos chez 6 entreprises genevoises sur 12 mois — les terminaux se répartissent en deux colonnes. Déjà là : environ 120 smartphones de salariés, que le projet n’a pas fait fabriquer. À fabriquer : 40 capteurs de position, 2 tablettes d’atelier, 1 borne d’accueil à Carouge. Ce sont ces 43 objets neufs qui portent le vrai poids du projet, pas les smartphones. Chiffres illustratifs.',
      piege:
        'Les deux erreurs symétriques : imputer au projet des terminaux qui existaient déjà, ce qui gonfle artificiellement le bilan ; ou oublier complètement les terminaux parce qu’ils appartiennent aux utilisateurs et n’apparaissent pas dans les factures de l’entreprise.',
      reflexe:
        'Deux colonnes sur le brouillon, « déjà là » et « à fabriquer ». La seconde s’impute entièrement au projet ; la première s’impute seulement si le projet accélère son renouvellement — par exemple en exigeant un modèle récent.',
      notions: ['trois-postes-numerique', 'deee', 'obsolescence', 'achats-it-responsables'],
    },
    {
      id: 'data-centers',
      libelle: 'D — Data centers',
      cestQuoi:
        '📘 Le deuxième poste : les bâtiments qui hébergent serveurs, stockage et calcul. Trois fonctions distinctes — faire tourner un programme, garder une donnée, traiter une donnée — qui ne coûtent pas la même chose. 📘 46 % de l’impact du numérique en France, et le poste dont la trajectoire monte le plus vite.',
      question:
        'Où tournent et où dorment les données de ce service, pendant combien de temps, et à quel rythme les recalcule-t-on ?',
      quoiMettre: [
        '📘 Les trois entrées du schéma, à séparer : serveurs — faire tourner ; stockage — garder ; calcul — traiter.',
        'Les deux ressources qui définissent le poste : l’électricité qui alimente les machines, et l’eau ou l’énergie qui les refroidit.',
        '📘 Les ordres de grandeur : environ 415 TWh consommés en 2024, soit près de 1,5 % de la consommation électrique mondiale ; d’après l’AIE, environ 945 TWh d’ici 2030 — plus que la consommation totale du Japon — soit un peu moins de 3 % de l’électricité mondiale.',
        '📘 Les deux rythmes de croissance cités par les supports, qui ne mesurent pas la même chose et ne se moyennent pas : + 12 % par an sur les cinq dernières années d’un côté, environ + 16 % par an sous l’effet de l’IA — un doublement tous les quatre ans environ — de l’autre. Cite le chiffre avec sa source.',
        '📘 Les trois leviers techniques donnés par le cours : consolidation des centres, virtualisation des serveurs et du stockage, techniques de refroidissement et gestion de l’alimentation. Ce sont des leviers d’efficacité, donc exposés à l’effet rebond. 🔎',
        'Ce que le service garde et qu’il pourrait ne pas garder : historiques, journaux techniques, sauvegardes multiples, doublons, données jamais relues.',
      ],
      exemple:
        'Le back-office de l’abonnement d’Atelier Léman enregistre la position de chaque vélo toutes les cinq minutes : 288 points par vélo et par jour, soit environ 11 500 points par jour pour 40 vélos, conservés douze mois « au cas où ». Chiffres illustratifs. La question utile n’est pas la puissance du serveur mais la durée de conservation : passer de douze mois à trente jours divise le stockage par douze sans rien retirer au service rendu au client.',
      piege:
        'Croire qu’un hébergeur « alimenté en énergie renouvelable » annule le poste. L’électricité verte ne supprime ni l’eau de refroidissement, ni les serveurs qu’il a fallu fabriquer, ni la place prise sur un réseau électrique que d’autres usages se disputent.',
      reflexe:
        'Dis en deux temps ce que l’hébergement vert règle et ce qu’il ne règle pas. Cette nuance en une phrase vaut mieux qu’un paragraphe entier sur le PUE.',
      notions: ['data-center', 'ia', 'effet-rebond', 'souverainete-numerique'],
    },
    {
      id: 'reseaux',
      libelle: 'R — Réseaux',
      cestQuoi:
        '📘 Le troisième poste : tout ce qui transporte la donnée entre le terminal et le data center. Le schéma en distingue trois formes — fixe, mobile, transmission — c’est-à-dire la fibre et le cuivre chez l’abonné, les antennes mobiles, et l’ossature qui relie le tout. 📘 4 % de l’impact en France : le plus petit des trois postes, et jamais le poste nul.',
      question:
        'Par quels tuyaux passent ces données, en quel volume, en continu ou à la demande, et faut-il déployer quelque chose de nouveau pour cela ?',
      quoiMettre: [
        '📘 Les trois entrées du schéma : fixe — la connexion filaire ; mobile — les antennes ; transmission — les routeurs, les liaisons longue distance, les câbles sous-marins.',
        'Le volume transporté par le service : vidéo, synchronisation permanente, sauvegardes automatiques, mises à jour poussées sans qu’on les demande.',
        'Le mode de connexion, parce qu’il change le résultat : à volume égal, une liaison mobile coûte plus qu’une liaison fixe. 🔎',
        'Ce que le service exige comme disponibilité : un flux continu vingt-quatre heures sur vingt-quatre ne se compare pas à une remontée quotidienne.',
        '📘 La part de 4 %, à citer pour hiérarchiser : elle interdit de faire du réseau le coupable principal, et elle interdit tout autant de le rayer de la carte.',
      ],
      exemple:
        'Les 40 capteurs d’Atelier Léman émettent par carte SIM en 4G. Le volume est minuscule — quelques kilo-octets par point — mais deux décisions se cachent là : le mode continu plutôt qu’une remontée à la demande, et l’ajout de 40 abonnements mobiles là où le vélo passait chaque semaine à l’atelier de toute façon. Le réseau ne pèse presque rien en volume ; il pèse en habitude prise.',
      piege:
        'Traiter le réseau comme un tuyau gratuit sous prétexte qu’il existe déjà. Un réseau est un parc d’équipements physiques, alimenté en permanence, entretenu et renouvelé à chaque génération de norme.',
      reflexe:
        'Cite le chiffre et enchaîne immédiatement sur sa conséquence : « les réseaux pèsent 4 %, donc l’action utile n’est pas là — elle est sur les terminaux ». Une part faible sert à hiérarchiser, pas à supprimer une ligne.',
      notions: ['trois-postes-numerique', 'effet-offre-usage', 'boucle-retroaction'],
    },
    {
      id: 'fabrication',
      libelle: 'Ce qui pèse dans les terminaux : la fabrication',
      cestQuoi:
        '📘 Dans le poste terminaux, l’essentiel de l’impact n’est pas la consommation électrique de l’appareil quand on s’en sert : c’est ce qu’il a fallu extraire, produire et transporter avant qu’il n’arrive. L’impact d’un terminal est donc largement déjà consommé au moment de l’achat, avant le premier allumage.',
      question:
        'Ce projet fait-il fabriquer un objet neuf — et si oui, combien d’années de service faut-il pour que le gain d’usage rattrape le coût de sa fabrication ?',
      quoiMettre: [
        'La séparation en deux temps : l’impact de fabrication, payé une seule fois et en totalité au départ, et l’impact d’usage, étalé chaque jour.',
        'Le nombre d’objets neufs et leur durée de vie prévue — les deux chiffres qui, ensemble, décident de tout.',
        '📘 La règle qui en découle, dans cet ordre : acheter moins, acheter mieux, utiliser plus longtemps.',
        '📘 Le coût du cycle de vie : achat + fonctionnement + élimination. Un appareil moins cher à l’achat et remplacé deux fois plus vite coûte plus, en argent comme en matière.',
        'Les moyens qui évitent purement et simplement la fabrication : mutualiser un appareil entre plusieurs personnes, acheter reconditionné, réaffecter un poste à un usage moins exigeant, réparer, prolonger.',
        '⚠️ Le raisonnement à démonter : « le nouveau modèle consomme 25 % de moins, remplaçons tout le parc ». Il compte le gain d’usage et oublie l’impact de fabriquer les nouveaux appareils.',
      ],
      exemple:
        'Atelier Léman connaît déjà ce raisonnement mieux que personne : son atelier de réparation vit précisément de la différence entre réparer et remplacer. Appliqué au pilote, cela donne une règle simple — un capteur qui se démonte et se repose sur un autre vélo vaut mieux qu’un capteur collé, même si le second consomme un peu moins. Le premier peut servir sur quatre vélos successifs ; le second se jette avec le vélo.',
      piege:
        'Arbitrer un remplacement sur la seule facture d’électricité. C’est l’erreur la plus fréquente du volet numérique, et elle conduit systématiquement à acheter davantage au nom de l’écologie.',
      reflexe:
        'Avant tout remplacement, une phrase à poser à voix haute : combien de temps l’ancien tiendrait-il encore ? Si la réponse est « deux ans », le remplacement doit prouver qu’il fait mieux que ces deux ans gratuits.',
      notions: ['cycle-de-vie', 'cout-cycle-de-vie', 'achats-it-responsables', 'trois-r', 'reconditionnement'],
    },
    {
      id: 'energie',
      libelle: 'Ce qui pèse dans les data centers : l’énergie',
      cestQuoi:
        '📘 Dans le poste data centers, deux consommations se cumulent : l’électricité qui fait tourner les machines, et l’énergie ou l’eau qui les refroidit — puisqu’à peu près toute l’électricité entrée dans un serveur en ressort sous forme de chaleur. C’est le seul poste dont la consommation dépend directement du volume de données qu’on décide de garder.',
      question:
        'Combien d’heures-machine ce service demande-t-il réellement, et combien de données garde-t-il allumées sans que personne ne les relise jamais ?',
      quoiMettre: [
        'Les deux postes internes, à ne pas confondre : faire tourner et faire refroidir.',
        'Ce qui tourne sans servir : environnements de test laissés ouverts, sauvegardes en triple, journaux techniques conservés des années, comptes inactifs.',
        '📘 Les trois leviers techniques du cours : consolidation des centres, virtualisation des serveurs et du stockage, refroidissement et gestion de l’alimentation — dont le PUE, indicateur d’efficacité énergétique du bâtiment.',
        '📘 Les six leviers d’écoconception du RGESN, quand la question porte sur le service et non sur le bâtiment : architecture, contenus, flux, hébergement, composants, durée de vie des données.',
        '🔎 Le rappel qui accompagne obligatoirement ces leviers : ce sont des gains d’efficacité, donc des gains par unité — ils ne disent rien du total tant qu’on n’a pas regardé le nombre d’unités.',
        'Une décision concrète et chiffrable : la durée de conservation. C’est le levier de sobriété le plus simple à défendre à l’oral.',
      ],
      exemple:
        'Le back-office d’Atelier Léman est loué 79 CHF par mois, et ce prix cache complètement la consommation : rien dans la facture ne dit combien de serveurs tournent. Chiffre illustratif. Le seul levier que la PME contrôle vraiment est ce qu’elle demande à stocker — la position en continu ou seulement les kilomètres du mois, douze mois d’historique ou trente jours. Ce choix-là ne dépend d’aucun prestataire.',
      piege:
        'Confondre l’efficacité du data center et l’impact du service. Un centre très efficace qui héberge trois fois plus de données consomme plus qu’un centre médiocre qui en héberge peu.',
      reflexe:
        'Deux questions systématiquement enchaînées : combien par unité, et combien d’unités ? La première mesure une performance technique ; seule la seconde donne un total, et seul un total permet de conclure.',
      notions: ['data-center', 'rgesn', 'eco-conception', 'effet-rebond'],
    },
    {
      id: 'equipements',
      libelle: 'Ce qui pèse dans les réseaux : le parc',
      cestQuoi:
        '📘 Dans le poste réseaux, l’impact ne vient pas du passage des données lui-même mais du parc qui rend ce passage possible : équipements, matières, énergie de fonctionnement, maintenance et renouvellement. Un réseau ne se consomme pas à l’usage, il se déploie et se remplace.',
      question:
        'Ce service pousse-t-il à déployer ou à renouveler de l’équipement réseau, ou se contente-t-il de ce qui est déjà installé ?',
      quoiMettre: [
        'Les équipements réels : antennes, box, routeurs, répéteurs, fibres, câbles sous-marins.',
        'Le renouvellement par génération : chaque nouvelle norme — 3G, 4G, 5G — remplace du matériel chez l’opérateur et rend obsolètes des terminaux chez les utilisateurs, donc revient frapper le poste terminaux. 🔎',
        'L’énergie de fonctionnement, continue : une antenne ne s’éteint pas la nuit parce que personne ne l’utilise.',
        'La maintenance et les interventions, souvent oubliées parce qu’elles n’apparaissent nulle part dans le service.',
        '🔎 La boucle offre-usage : plus de capacité disponible autorise des usages plus lourds, qui justifient plus de capacité. Le réseau ne suit pas la demande, il la crée aussi.',
      ],
      exemple:
        'Atelier Léman ne construira aucune antenne : à Genève, le réseau existe. Le point de vigilance est ailleurs — si le prestataire impose des capteurs 5G alors que la 4G suffit pour envoyer quelques kilo-octets, la PME finance un renouvellement de matériel dont son service n’a aucun besoin. Le bon argument de négociation n’est pas écologique, il est budgétaire : les deux disent la même chose.',
      piege:
        'Considérer qu’on ne pèse pas sur le réseau parce qu’on ne le construit pas. Le service qui exige du débit et de la disponibilité participe au dimensionnement du parc, même s’il ne paie que son abonnement.',
      reflexe:
        'Demande ce que le service exige comme débit et comme disponibilité, puis vérifie que l’exigence correspond à un besoin réel. Presque toujours, une exigence a été fixée par confort, pas par nécessité.',
      notions: ['boucle-retroaction', 'trois-postes-numerique', 'effet-offre-usage'],
    },
    {
      id: 'carte',
      libelle: 'Le livrable : la carte des impacts',
      cestQuoi:
        'Le produit de l’outil : trois lignes remplies avec les objets réels du cas, un poste désigné comme dominant, et un total annuel. Ce n’est pas une conclusion mais un point de départ — la carte rend possible les étapes suivantes, qui seules permettent de trancher.',
      question:
        'Puis-je dire, en trois phrases et sans consulter mes notes, où est l’impact de ce projet et lequel des trois postes domine ?',
      quoiMettre: [
        'Une ligne Terminaux, une ligne Data centers, une ligne Réseaux — chacune remplie avec des objets nommés, pas avec des adjectifs.',
        'Le poste dominant, explicitement désigné, parce que c’est lui qui décide où porter l’effort.',
        'Le chiffre en total annuel et non en valeur par unité : c’est la seule forme qui permette de conclure quoi que ce soit.',
        'Le périmètre retenu, dit à voix haute : compte-t-on les terminaux personnels des salariés, les logiciels, les modèles d’IA appelés par le service ?',
        'La phrase de passage vers la suite : rebond, puis sobriété Q-T-A, puis achats IT et 3R, puis dimension sociale.',
      ],
      exemple:
        'Carte du pilote Atelier Léman. Terminaux : 40 capteurs neufs, 2 tablettes, 1 borne — poste dominant, parce que ce sont les seuls objets que le projet fait sortir d’usine. Data centers : un back-office loué, une position toutes les cinq minutes, douze mois d’historique. Réseaux : 40 cartes SIM en émission continue. Conclusion de la carte : agir sur les capteurs, pas sur le serveur. Chiffres illustratifs.',
      piege:
        'S’arrêter à la carte en croyant avoir répondu. Localiser un impact n’est pas décider : à ce stade on ne sait toujours pas si le projet vaut la peine d’être fait.',
      reflexe:
        'Termine toujours par la même phrase de passage : « l’impact est ici ; reste à savoir si le gain sera réabsorbé ». Elle enchaîne d’elle-même sur l’effet rebond, et le jury entend qu’on connaît la suite du raisonnement.',
      notions: ['trois-postes-numerique', 'effet-rebond', 'sobriete-numerique', 'debat-numerique-durabilite'],
    },
  ],

  methode: [
    {
      titre: '1. Poser le périmètre avant de compter quoi que ce soit',
      detail:
        'Écris en une ligne ce que tu inclus et ce que tu exclus : le service seul, ou aussi les terminaux personnels des salariés, les logiciels, les modèles d’IA appelés en arrière-plan. 📘 Le cours pose explicitement la question du périmètre et laisse ouverte celle des suites logicielles et de l’IA. Un chiffre sans périmètre ne veut rien dire et ne se compare à rien.',
      aEviter:
        'Reprendre un pourcentage lu quelque part sans savoir ce qu’il compte ni dans quel pays. Deux études honnêtes peuvent annoncer des chiffres doubles l’un de l’autre simplement parce qu’elles ne comptent pas la même chose.',
    },
    {
      titre: '2. Lister le matériel réel, poste par poste, dans l’ordre T puis D puis R',
      detail:
        'Trois colonnes sur le brouillon. Dans chacune, des objets nommés et comptés : « 40 capteurs », « 1 serveur loué », « 40 cartes SIM ». L’ordre T-D-R n’est pas décoratif : il va du plus lourd au plus léger, donc du plus utile au moins utile.',
      aEviter:
        'Écrire des catégories au lieu d’objets — « du matériel », « de l’hébergement », « du réseau ». Une case qui ne contient pas de nombre ne servira à rien à l’étape suivante.',
    },
    {
      titre: '3. Séparer, dans chaque poste, ce qui est déjà là de ce que le projet crée',
      detail:
        'Deux sous-colonnes : existant et nouveau. Seul le nouveau s’impute au projet — sauf si le projet accélère le renouvellement de l’existant, auquel cas il s’impute aussi, et il faut le dire. C’est ce tri qui empêche de gonfler ou de vider le bilan à volonté.',
      aEviter:
        'Faire porter au projet numérique tout le parc informatique de l’entreprise. On perd alors la seule chose intéressante : ce que la décision change réellement.',
    },
    {
      titre: '4. Distinguer, dans chaque poste, la fabrication de l’usage',
      detail:
        'Pour les terminaux, la fabrication domine. Pour les data centers, l’usage domine. Pour les réseaux, c’est le déploiement et le renouvellement. Note-le en une ligne par poste : c’est cette distinction qui indique quel levier fonctionne — acheter moins, ou faire tourner moins.',
      aEviter:
        'Appliquer le même levier partout. Éteindre les serveurs la nuit n’a aucun effet sur les capteurs déjà fabriqués, et acheter reconditionné n’allège pas un stockage inutile.',
    },
    {
      titre: '5. Chiffrer en total annuel, jamais par unité',
      detail:
        'Multiplie systématiquement : impact par unité × nombre d’unités. 40 capteurs, 288 points par jour, 12 mois d’historique. Même approximatifs, ces totaux permettent de comparer deux options ; un impact par unité ne le permet pas.',
      aEviter:
        'Annoncer un progrès en pourcentage sans le nombre d’unités auquel il s’applique. C’est précisément le mécanisme qui permet d’aggraver son impact tout en affichant une amélioration.',
    },
    {
      titre: '6. Désigner le poste dominant et n’agir que sur lui',
      detail:
        'Une phrase : « le poste dominant est X, parce que… ». Puis une ou deux actions sur ce poste seulement. Un plan qui traite les trois postes à égalité disperse l’effort et se reconnaît de loin comme une récitation.',
      aEviter:
        'Proposer trois actions symétriques pour faire complet. Le correcteur attend une hiérarchie assumée, pas un tableau équilibré.',
    },
    {
      titre: '7. Passer la main : la carte n’est pas une conclusion',
      detail:
        'Enchaîne explicitement : le gain annoncé sera-t-il réabsorbé — effet rebond ; le besoin a-t-il été questionné avant d’être optimisé — sobriété Q-T-A ; le matériel est-il traité — achats IT et 3R ; qui risque d’être exclu — dimension sociale. Dire cette suite prouve qu’on a un processus, pas une liste.',
      aEviter:
        'Conclure « donc le numérique a un impact ». La phrase est vraie, elle ne rapporte rien, et elle laisse penser qu’on ne connaît que le premier tiers du chapitre.',
    },
  ],

  liens: [
    {
      vers: 'rne',
      nature: 'precise',
      explication:
        'T-D-R est le détail de l’axe environnemental de la RNE : les quatre axes disent qu’il faut regarder l’environnement, les trois postes disent où le regarder — et rappellent au passage que l’axe environnemental n’est qu’un axe sur quatre.',
    },
    {
      vers: 'effet-rebond',
      nature: 'alimente',
      explication:
        'La carte T-D-R dit où est l’impact, l’effet rebond dit si le gain restera : localiser sans tester le rebond, c’est mesurer un progrès par unité et se taire sur le total.',
    },
    {
      vers: 'sobriete-qta',
      nature: 'alimente',
      explication:
        'Une fois le poste dominant identifié, Q-T-A décide de quoi faire : questionner le besoin qui fait exister ce poste, chercher un moyen moins impactant, et seulement ensuite optimiser la technique.',
    },
    {
      vers: 'achats-durables',
      nature: 'prolonge',
      explication:
        'Comme les terminaux pèsent la moitié de l’impact et que leur poids est fait de fabrication, le levier principal n’est pas technique mais commercial : acheter moins, acheter mieux, utiliser plus longtemps.',
    },
    {
      vers: 'trois-r',
      nature: 'prolonge',
      explication:
        'Les trois postes se referment sur les 3R par le même raisonnement : réduire agit avant la fabrication, réutiliser prolonge ce qui existe, et recycler n’intervient qu’une fois l’impact déjà consommé.',
    },
  ],

  pieges: [
    {
      titre: 'Accuser les data centers et s’arrêter là',
      explication:
        'C’est l’image que les médias installent, et elle est fausse dans les proportions : en France les terminaux pèsent environ 50 % contre 46 % pour les data centers. Un plan d’action qui ne vise que les serveurs laisse la moitié du problème intacte — et cette moitié-là se trouve dans les bureaux, pas chez un hébergeur.',
      reflexe:
        'Sors la répartition dès l’ouverture : « terminaux environ 50 %, data centers 46 %, réseaux 4 % ». Trois chiffres, dix secondes, et toute la suite du raisonnement en découle.',
    },
    {
      titre: 'Ne compter que l’électricité d’usage',
      explication:
        'Raisonner sur la consommation de l’appareil allumé conduit mécaniquement à recommander de tout remplacer par des modèles plus économes. On ajoute alors l’impact de fabriquer un parc neuf et celui de jeter l’ancien, pour économiser quelques watts.',
      reflexe:
        'Le coût du cycle de vie, en trois mots : achat, fonctionnement, élimination. Tant que les trois ne sont pas comptés, aucun remplacement ne se justifie.',
    },
    {
      titre: 'Citer un pourcentage sans son périmètre',
      explication:
        '« Le numérique, c’est 4 % » : 4 % de quoi, où, en quelle année, en comptant quoi ? 📘 Le cours pose lui-même la question du périmètre et laisse ouverte celle des logiciels et de l’IA. Un chiffre sans périmètre se fait démonter par une seule question du jury.',
      reflexe:
        'Colle toujours le périmètre au chiffre : « environ 4,4 % de l’empreinte carbone de la France en 2022 ». Deux mots de plus, et l’affirmation devient solide.',
    },
    {
      titre: 'Prendre T-D-R pour une conclusion',
      explication:
        'Localiser l’impact est un diagnostic, pas une décision. Un candidat qui récite les trois postes puis s’arrête a fait un huitième du volet numérique : il manque le rebond, la sobriété, les achats, le matériel en fin de vie et la dimension sociale.',
      reflexe:
        'Apprends la chaîne complète comme une seule phrase : T-D-R, puis rebond, puis Q-T-A, puis achats et 3R, puis accessibilité. Elle tient en huit secondes et structure toute la réponse.',
    },
    {
      titre: 'Oublier que les trois postes s’alimentent entre eux',
      explication:
        'Les postes ne sont pas trois tiroirs indépendants. Une nouvelle norme réseau rend obsolètes des terminaux ; un stockage devenu très bon marché fait garder des données qu’on aurait supprimées ; un service plus fluide fait acheter des écrans plus grands. Traiter un poste isolément fait manquer ces reports.',
      reflexe:
        'Après chaque action proposée sur un poste, vérifie les deux autres d’une phrase : est-ce que je viens de déplacer l’impact plutôt que de le réduire ?',
    },
  ],

  variantes: [
    {
      sujet: 'Le périmètre : trois postes, ou davantage ?',
      formulations: [
        {
          texte: 'Trois postes d’impact : terminaux, data centers, réseaux — mémo T-D-R.',
          source: 'schéma 20 du cours et fiche numérique',
        },
        {
          texte:
            'Périmètre du numérique. À considérer également : suites de logiciels (bureautique, design, etc.) — systèmes d’IA ?',
          source: 'slide sur le périmètre, cours de J. Recordon d’après Roussilhe (2025)',
        },
      ],
      consigne:
        'Le même cours donne une découpe fermée en trois postes et, ailleurs, une question ouverte sur le périmètre. Ne tranche pas : dis « le cours retient trois postes — terminaux, data centers, réseaux — et pose par ailleurs la question du périmètre, notamment des suites logicielles et des systèmes d’IA ». Savoir citer les deux montre qu’on a compris qu’un pourcentage dépend de ce qu’on décide de compter, et c’est exactement le genre de nuance qui rapporte à l’oral.',
    },
    {
      sujet: 'Le rythme de croissance des data centers',
      formulations: [
        { texte: 'Environ + 12 % par an sur les cinq dernières années.', source: 'document Donut, notion data center' },
        {
          texte: 'Avec l’IA, environ + 16 % par an, soit un doublement environ tous les quatre ans.',
          source: 'fiche numérique du processus',
        },
      ],
      consigne:
        'Les deux chiffres ne mesurent pas la même chose : l’un constate une croissance passée toutes causes confondues, l’autre projette une trajectoire tirée par l’IA. Ne les moyenne pas et n’en choisis pas un au hasard — cite celui qui correspond à la question posée, en disant à chaque fois sur quoi il porte.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman SA — le volet numérique du pilote d’abonnement',
    situation:
      'Les options sont posées et l’abonnement mobilité tient la corde : un pilote de 40 vélos chez 6 entreprises genevoises sur 12 mois. Le prestataire propose d’y ajouter des capteurs de position et une application de gestion de flotte, en présentant le tout comme un progrès écologique parce qu’il « supprime le papier et évite des déplacements inutiles ». Avant de discuter ce bénéfice, on localise ce que la solution crée. Tous les chiffres qui suivent sont illustratifs.',
    deroule: [
      {
        etiquette: 'Périmètre retenu',
        contenu:
          'Le service d’abonnement seul : capteurs, application, back-office, connexions. Les smartphones des salariés sont mentionnés mais comptés à part, car ils existaient avant le projet. Les suites bureautiques de la PME sont hors périmètre, et on le dit.',
      },
      {
        etiquette: 'T — Terminaux, à fabriquer',
        contenu:
          '40 capteurs de position, 2 tablettes d’atelier, 1 borne d’accueil à Carouge : 43 objets neufs. Durée de vie annoncée par le fabricant : 3 ans pour les capteurs, batterie soudée, non remplaçable.',
      },
      {
        etiquette: 'T — Terminaux, déjà là',
        contenu:
          'Environ 120 smartphones de salariés des 6 entreprises. Le projet ne les fait pas fabriquer, mais il exige un système d’exploitation récent : à surveiller, car une exigence trop haute accélérerait leur renouvellement.',
      },
      {
        etiquette: 'D — Data centers',
        contenu:
          'Un back-office loué 79 CHF par mois. Une position par vélo toutes les 5 minutes, soit 288 points par jour et par vélo, environ 11 500 points par jour pour la flotte, conservés 12 mois par défaut.',
      },
      {
        etiquette: 'R — Réseaux',
        contenu:
          '40 cartes SIM 4G en émission continue, 24 heures sur 24, y compris la nuit et les week-ends où les vélos ne roulent pas. Aucune infrastructure nouvelle à construire : le réseau genevois existe.',
      },
      {
        etiquette: 'Poste dominant',
        contenu:
          'Les terminaux. Ce sont les seuls objets que la décision fait sortir d’usine, et leur impact est déjà consommé le jour de la livraison. Le serveur et les SIM, eux, se règlent par des paramètres.',
      },
      {
        etiquette: 'DEEE prévisibles',
        contenu:
          '40 capteurs à batterie soudée, jetés à 3 ans : environ 13 capteurs mis au rebut par an en régime établi, sans filière identifiée à ce stade.',
      },
      {
        etiquette: 'Trois décisions qui découlent de la carte',
        contenu:
          'Exiger un capteur démontable et réaffectable d’un vélo à l’autre — poste terminaux. Ramener la conservation d’historique de 12 mois à 30 jours — poste data centers. Passer d’une émission continue à une remontée quotidienne — poste réseaux, et accessoirement la batterie du capteur qui dure plus longtemps.',
      },
    ],
    conclusion:
      'La carte ne dit pas encore si le pilote est une bonne idée : elle dit où se joue son impact et sur quoi il faut négocier avec le prestataire. Elle ouvre directement les deux étapes suivantes — le test de l’effet rebond, puisque le prestataire annonce des trajets évités qu’il faudra vérifier en absolu, et la sobriété Q-T-A, qui posera la vraie question : les entreprises clientes veulent-elles une application, ou seulement savoir quand leur vélo revient ?',
  },

  phraseOral:
    'Avant de dire si cette application est écologique, je regarde de quoi elle est faite : 40 capteurs à fabriquer, un serveur qui garde douze mois d’historique, 40 cartes SIM qui émettent en continu. Sur ces trois postes, c’est le premier qui pèse — en France les terminaux représentent environ la moitié de l’impact du numérique, et cet impact est déjà consommé le jour de l’achat. Donc la négociation utile ne porte pas sur l’hébergement vert : elle porte sur un capteur démontable et réutilisable d’un vélo à l’autre.',

  aRetenir: [
    { cle: 'Le mémo', valeur: 'T — D — R : Terminaux · Data centers · Réseaux' },
    { cle: 'La répartition 📘', valeur: 'France : terminaux ≈ 50 %, data centers 46 %, réseaux 4 %' },
    { cle: 'Terminaux 📘', valeur: 'Smartphones, ordinateurs, écrans — la fabrication pèse plus que l’usage' },
    { cle: 'Data centers 📘', valeur: 'Serveurs, stockage, calcul — électricité + eau de refroidissement' },
    { cle: 'Réseaux 📘', valeur: 'Fixe, mobile, transmission — 4 %, mais un parc à déployer et à renouveler' },
    { cle: 'Le poids du numérique 📘', valeur: 'Monde 2019 : 5,6 % de l’électricité et 4 % des GES · France 2022 : ≈ 4,4 % de l’empreinte carbone' },
    { cle: 'La règle qui en découle 📘', valeur: 'Acheter moins → acheter mieux → utiliser plus longtemps' },
    { cle: 'Ce que produit l’outil', valeur: 'Une carte en trois lignes, un poste dominant, un total annuel' },
    { cle: 'Ce que l’outil ne fait pas', valeur: 'Il localise, il ne conclut pas : le verdict vient après le rebond' },
    { cle: 'La chaîne complète', valeur: 'T-D-R → rebond → Q-T-A → achats et 3R → accessibilité' },
    { cle: 'La variante à citer', valeur: 'Trois postes fermés ↔ périmètre ouvert aux logiciels et à l’IA' },
  ],

  notions: [
    'trois-postes-numerique',
    'transformation-numerique',
    'data-center',
    'perimetre-numerique',
    'effet-offre-usage',
    'boucle-retroaction',
    'effet-rebond',
    'sobriete-numerique',
    'rgesn',
    'eco-conception',
    'deee',
    'obsolescence',
    'cycle-de-vie',
    'cout-cycle-de-vie',
    'achats-it-responsables',
    'trois-r',
    'reconditionnement',
    'rne',
    'quatre-axes-rne',
    'ia',
    'debat-numerique-durabilite',
    'greenwashing',
  ],
}
