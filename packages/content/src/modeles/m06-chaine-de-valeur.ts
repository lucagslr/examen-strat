import type { Modele } from './types'

export const modele: Modele = {
  id: 'chaine-de-valeur',
  numero: 6,
  slug: 'chaine-de-valeur',
  nom: 'Chaîne de valeur de Porter',
  sousTitre: '5 activités principales + 4 activités de soutien',
  famille: 'interne',
  etape: 'e2',

  question:
    'Où, à l’intérieur de l’entreprise, la valeur se fabrique-t-elle vraiment — et où part-elle en coûts sans rien rapporter ?',

  enUnePhrase:
    'On découpe l’entreprise en neuf activités, on note chacune d’elles face au meilleur concurrent, et on obtient une carte de ses forces et de ses faiblesses au lieu d’une impression générale.',

  produit:
    'Une liste de forces et de faiblesses internes, hiérarchisées, chacune accrochée à une activité précise et non à l’entreprise en bloc — c’est-à-dire la moitié gauche du SWOT, prête à être croisée avec l’externe.',

  quandUtiliser: [
    'On cherche l’origine interne d’un avantage concurrentiel : pourquoi deux entreprises du même secteur ne gagnent pas la même chose.',
    'On doit produire des forces et des faiblesses et on veut éviter la liste d’adjectifs (« sérieux », « réactifs », « bonne ambiance »).',
    'On hésite à externaliser une activité et il faut savoir laquelle est stratégique et laquelle ne l’est pas.',
    'On veut savoir où sont concentrés les coûts, maillon par maillon, avant de couper au hasard.',
    'On cherche où agir sur une empreinte écologique : la chaîne de valeur localise l’impact au lieu de le moyenner sur l’entreprise entière.',
  ],

  quandNePasUtiliser: [
    'Pour analyser la concurrence — c’est Porter et ses cinq forces, pas la chaîne de valeur.',
    'Pour analyser le macro-environnement — c’est le PESTEL.',
    'Pour décrire le modèle économique, qui gagne quoi et comment — c’est le BMC ou le RCOV.',
    'Pour choisir entre deux options stratégiques — la chaîne de valeur décrit l’existant, elle ne tranche pas ; c’est le rôle du SAF.',
  ],

  schema: {
    h: 820,
    description:
      'Quatre bandes horizontales — les activités de soutien — empilées au-dessus d’une rangée de cinq activités principales enchaînées de gauche à droite, la dernière débouchant sur la case « marge », en bas à droite.',
    noeuds: [
      {
        id: 'titreSoutien',
        titre: 'ACTIVITÉS DE SOUTIEN — I R T A',
        x: 40,
        y: 20,
        l: 920,
        h: 50,
        forme: 'bande',
        ton: 'sourd',
      },
      {
        id: 'infra',
        titre: 'Infrastructure',
        lignes: ['Direction, finance, juridique'],
        x: 40,
        y: 90,
        l: 920,
        h: 70,
        forme: 'bande',
        point: 'infrastructure',
      },
      {
        id: 'rh',
        titre: 'Ressources humaines',
        lignes: ['Recruter, former, motiver, garder'],
        x: 40,
        y: 180,
        l: 920,
        h: 70,
        forme: 'bande',
        point: 'ressources-humaines',
      },
      {
        id: 'tech',
        titre: 'Développement technologique',
        lignes: ['R&D, systèmes d’information'],
        x: 40,
        y: 270,
        l: 920,
        h: 70,
        forme: 'bande',
        point: 'developpement-technologique',
      },
      {
        id: 'appro',
        titre: 'Approvisionnements (achats)',
        lignes: ['Choisir, négocier, acheter'],
        x: 40,
        y: 360,
        l: 920,
        h: 70,
        forme: 'bande',
        ton: 'alerte',
        point: 'approvisionnements',
      },
      {
        id: 'titrePrincipales',
        titre: 'ACTIVITÉS PRINCIPALES — L P L M S',
        x: 40,
        y: 450,
        l: 920,
        h: 50,
        forme: 'bande',
        ton: 'sourd',
      },
      {
        id: 'l1',
        titre: 'Logistique amont',
        lignes: ['Faire entrer', 'Réception, stockage'],
        x: 40,
        y: 520,
        l: 190,
        h: 150,
        point: 'logistique-amont',
      },
      {
        id: 'prod',
        titre: 'Production',
        lignes: ['Transformer', 'Assembler, monter'],
        x: 240,
        y: 520,
        l: 170,
        h: 150,
        point: 'production',
      },
      {
        id: 'l2',
        titre: 'Logistique aval',
        lignes: ['Faire sortir', 'Livrer, expédier'],
        x: 420,
        y: 520,
        l: 180,
        h: 150,
        point: 'logistique-aval',
      },
      {
        id: 'mkt',
        titre: 'Marketing, ventes',
        lignes: ['Faire acheter', 'Notoriété, prix'],
        x: 610,
        y: 520,
        l: 205,
        h: 150,
        point: 'marketing-ventes',
      },
      {
        id: 'serv',
        titre: 'Services',
        lignes: ['Après la vente', 'SAV, garantie'],
        x: 825,
        y: 520,
        l: 135,
        h: 150,
        ton: 'positif',
        point: 'services',
      },
      {
        id: 'marge',
        titre: 'MARGE',
        lignes: ['Valeur moins coût cumulé'],
        x: 730,
        y: 710,
        l: 230,
        h: 70,
        ton: 'accent',
        point: 'marge',
      },
    ],
    liens: [
      { de: 'l1', vers: 'prod', depuis: 'droite', arrive: 'gauche' },
      { de: 'prod', vers: 'l2', depuis: 'droite', arrive: 'gauche' },
      { de: 'l2', vers: 'mkt', depuis: 'droite', arrive: 'gauche' },
      { de: 'mkt', vers: 'serv', depuis: 'droite', arrive: 'gauche' },
      { de: 'serv', vers: 'marge', depuis: 'bas', arrive: 'haut', ton: 'accent' },
      {
        de: 'appro',
        vers: 'titrePrincipales',
        trait: 'pointille',
        depuis: 'bas',
        arrive: 'haut',
        libelle: 'les 4 traversent les 5',
        ton: 'sourd',
      },
    ],
    note:
      'Une activité de soutien ne crée pas de valeur toute seule : elle multiplie ou elle divise celle des cinq activités principales. Et la flèche ne pointe jamais dans le vide — elle finit sur la marge, que Porter dessine en pointe, à droite du schéma.',
  },

  points: [
    {
      id: 'logistique-amont',
      libelle: 'Logistique amont — activité principale 1',
      cestQuoi:
        'Tout ce qui fait entrer physiquement dans l’entreprise les intrants — c’est-à-dire les matières, pièces et marchandises achetées : réception, contrôle, entreposage, manutention interne jusqu’au poste de travail.',
      question:
        'Ce qui entre arrive-t-il au bon moment, en bon état, au bon endroit — et combien coûte le stock qui attend ?',
      quoiMettre: [
        'Réception et contrôle qualité de ce qui arrive.',
        'Entreposage : surface occupée, rotation, jours de stock.',
        'Manutention interne, du quai jusqu’à l’atelier.',
        'Fiabilité et délai des livraisons reçues.',
        'Argent immobilisé dans le stock, et risque d’obsolescence.',
      ],
      exemple:
        'Atelier Léman reçoit ses batteries par lots de 200 toutes les dix semaines et les stocke dans un local de Carouge : environ 90 jours de stock, soit près de 300 000 CHF immobilisés (chiffre illustratif). Le maillon est noté 2 sur 5.',
      piege:
        'Y ranger la négociation avec les deux fournisseurs asiatiques, sous prétexte que « ça parle de fournisseurs ».',
      reflexe:
        'Choisir et négocier, c’est Approvisionnements, une activité de soutien. Réceptionner, stocker, manipuler, c’est la logistique amont, une activité principale. Décision d’un côté, flux physique de l’autre.',
      notions: ['logistique-approvisionnement', 'activites-principales'],
    },
    {
      id: 'production',
      libelle: 'Production — activité principale 2',
      cestQuoi:
        'La transformation elle-même : convertir les intrants en produit fini ou en prestation exécutée. C’est le maillon que tout le monde voit et que tout le monde surestime.',
      question:
        'Que transforme-t-on réellement ici, et cette transformation se voit-elle dans ce que le client reçoit ?',
      quoiMettre: [
        'Procédés, outillage, degré d’automatisation.',
        'Capacité disponible et taux d’utilisation.',
        'Qualité : taux de retouche, de rebut, de reprise sous garantie.',
        'Coût de revient unitaire et sa décomposition.',
        'Flexibilité : sait-on faire des petites séries, du sur-mesure ?',
      ],
      exemple:
        'Atelier Léman assemble ses vélos à partir de cadres, moteurs et batteries achetés à l’extérieur : 2 600 CHF de prix de vente pour 1 400 CHF de coût. L’assemblage est soigné, mais l’entreprise ne fabrique aucune pièce et un concurrent peut acheter exactement les mêmes composants. Noté 3 sur 5.',
      piege:
        'Décider que la production est forcément le cœur de la chaîne parce que c’est là que l’on fabrique quelque chose.',
      reflexe:
        'Demander ce que le client paie, pas ce qui fait du bruit. Dans l’artisanat et les services, la valeur est souvent en aval (Services) ou en amont (Développement technologique), et le maillon central est banal.',
      notions: ['production', 'activites-principales'],
    },
    {
      id: 'logistique-aval',
      libelle: 'Logistique aval — activité principale 3',
      cestQuoi:
        'Tout ce qui fait sortir l’offre finie et l’amène jusqu’au client : stockage des produits finis, conditionnement, expédition, livraison, mise à disposition en boutique.',
      question:
        'Comment le client entre-t-il concrètement en possession de ce qu’il a acheté, et ce moment lui plaît-il ?',
      quoiMettre: [
        'Stock de produits finis et délai entre commande et remise.',
        'Préparation, emballage, protection pendant le transport.',
        'Transport, livraison, installation sur place.',
        'Réseau : points de vente, points de retrait, revendeurs.',
        'Fiabilité : délais promis contre délais tenus.',
      ],
      exemple:
        'Les vélos sont remis en main propre dans les deux ateliers, réglés à la taille du client, avec 40 minutes de prise en main. Rien à expédier, donc rien à casser en transport : le maillon est solide sans être différenciant. Noté 3 sur 5.',
      piege:
        'Confondre logistique aval et marketing, parce que les deux se passent « du côté du client ».',
      reflexe:
        'La logistique aval déplace un objet ; le marketing déplace une décision d’achat. Livrer n’est pas convaincre.',
      notions: ['logistique-commercialisation', 'activites-principales'],
    },
    {
      id: 'marketing-ventes',
      libelle: 'Marketing et ventes — activité principale 4',
      cestQuoi:
        'Les moyens employés pour faire connaître l’offre, la faire préférer à celle des autres et déclencher l’achat : notoriété, canaux, prix, argumentaire, relance.',
      question:
        'Comment un client qui ne nous connaît pas apprend-il que nous existons, et qu’est-ce qui le décide plutôt que le voisin ?',
      quoiMettre: [
        'Notoriété et image : qui nous connaît, et pour quoi ?',
        'Canaux : vitrine, site, revendeurs, place de marché en ligne.',
        'Politique de prix, remises, promotions.',
        'Force de vente : qui vend, avec quel argumentaire ?',
        'Fichier clients, relance, fidélisation.',
      ],
      exemple:
        'Deux vitrines à Carouge et à Plainpalais, du bouche-à-oreille et une page réseau social mise à jour trois fois par an — face à des marques low-cost qui achètent des mots-clés et livrent en 48 heures. C’est dans cette case que se lisent les −8 % de ventes sur deux ans. Noté 2 sur 5.',
      piege:
        'Écrire « bonne réputation locale » comme une force du marketing et passer à la suite.',
      reflexe:
        'Séparer la réputation, qui est une ressource immatérielle déjà acquise, de l’activité marketing, qui est ce qu’on en fait aujourd’hui. Ici la réputation est forte et le marketing faible : cet écart est justement le diagnostic.',
      notions: ['marketing-ventes', 'ressources-intangibles'],
    },
    {
      id: 'services',
      libelle: 'Services — activité principale 5',
      cestQuoi:
        'Tout ce qui accompagne l’offre après l’achat : installation, formation, conseil, maintenance, réparation, garantie, reprise et seconde vie du produit.',
      question:
        'Que se passe-t-il pour le client une fois la vente faite, et cela suffit-il à le faire revenir ?',
      quoiMettre: [
        'SAV, garantie, disponibilité des pièces détachées.',
        'Maintenance et réparation — y compris hors marque.',
        'Formation et prise en main du produit.',
        'Conseil, assistance, suivi dans le temps.',
        'Reprise, réemploi, reconditionnement, fin de vie.',
      ],
      exemple:
        'C’est le maillon fort d’Atelier Léman : un diagnostic électronique en 20 minutes sur des pannes que les ateliers de quartier ne savent pas traiter, toutes marques confondues, par des mécaniciens formés maison. Noté 5 sur 5 — et c’est le seul maillon qu’un concurrent ne peut pas simplement acheter.',
      piege:
        'Traiter Services comme un centre de coût à comprimer, parce qu’il ne « produit » rien.',
      reflexe:
        'Regarder qui paie pour ce maillon avant de vouloir le réduire. Dans un abonnement ou dans l’économie de la fonctionnalité, Services cesse d’être un accessoire de la vente : il devient le produit vendu.',
      notions: ['services', 'economie-fonctionnalite'],
    },
    {
      id: 'infrastructure',
      libelle: 'Infrastructure — activité de soutien I',
      cestQuoi:
        'La direction générale et les fonctions communes qui tiennent l’entreprise debout : finance, comptabilité, juridique, administration, planification, locaux.',
      question:
        'Qui décide, qui compte, qui protège juridiquement — et ces fonctions aident-elles les cinq autres ou les freinent-elles ?',
      quoiMettre: [
        'Direction, gouvernance, façon dont les décisions se prennent.',
        'Comptabilité, contrôle de gestion, trésorerie.',
        'Juridique : contrats, assurances, conformité.',
        'Sites et locaux, quand ils structurent l’activité.',
        'Instruments de pilotage : tableaux de bord, indicateurs.',
      ],
      exemple:
        'Deux ateliers en propre, une direction à deux personnes, une comptabilité confiée à une fiduciaire, et aucun compte de résultat par domaine d’activité. Conséquence : personne ne peut dire aujourd’hui si la réparation finance la vente ou l’inverse. Noté 3 sur 5.',
      piege: 'Sauter la case en se disant qu’elle « ne crée pas de valeur ».',
      reflexe:
        'Une activité de soutien ne crée pas de valeur seule, elle multiplie ou divise celle des autres. Ici, l’absence de comptabilité par domaine interdit purement et simplement toute décision de portefeuille : c’est une faiblesse de premier rang.',
      notions: ['infrastructure-entreprise', 'activites-soutien'],
    },
    {
      id: 'ressources-humaines',
      libelle: 'Ressources humaines — activité de soutien R',
      cestQuoi:
        'Le recrutement, la formation, la rémunération, la motivation et la gestion des carrières — pour toutes les activités à la fois, principales comme de soutien.',
      question:
        'D’où viennent les gens qui font la meilleure activité de l’entreprise, et que reste-t-il le jour où ils partent ?',
      quoiMettre: [
        'Recrutement : trouve-t-on les profils, et en combien de temps ?',
        'Formation et montée en compétence, interne ou externe.',
        'Rémunération, fidélisation, rotation du personnel.',
        'Climat social, absentéisme, ancienneté moyenne.',
        'Transmission : le savoir-faire est-il écrit quelque part ?',
      ],
      exemple:
        '45 salariés, dont 12 mécaniciens formés en interne sur trois ans, avec très peu de départs. Mais le savoir-faire de diagnostic n’est écrit nulle part : il vit dans ces 12 personnes. Noté 4 sur 5 — une force réelle et une fragilité, en même temps.',
      piege: 'Écrire « équipe motivée » sans la relier à un maillon principal.',
      reflexe:
        'Toujours brancher la RH sur l’activité qu’elle alimente : « la RH soutient Services, et c’est Services qui fait la différence ». Une force de soutien qu’on ne branche sur rien ne compte pas dans le diagnostic.',
      notions: ['grh', 'competences'],
    },
    {
      id: 'developpement-technologique',
      libelle: 'Développement technologique — activité de soutien T',
      cestQuoi:
        'Tout ce qui produit du savoir technique dans l’entreprise : recherche et développement, conception, mise au point de procédés, systèmes d’information, gestion des connaissances accumulées.',
      question:
        'Que sait-on faire techniquement, ici, que personne ne peut acheter tout fait demain matin ?',
      quoiMettre: [
        'R&D produit, conception, prototypes.',
        'Brevets, licences, savoir-faire protégé.',
        'Procédés et méthodes mis au point en interne.',
        'Systèmes d’information et données accumulées.',
        'Veille technique et capacité à absorber une nouveauté.',
      ],
      exemple:
        'Aucun budget de recherche, aucun logiciel développé en propre — mais quinze ans d’historique de pannes, dispersé sur des fiches papier dans deux ateliers. Transformer ces fiches en base de données consultable serait le vrai projet technologique de l’entreprise. Noté 2 sur 5.',
      piege: 'Compter un logiciel ou une machine achetés comme un avantage technologique.',
      reflexe:
        'Poser la question de la transférabilité : le concurrent peut-il l’acheter demain ? Si oui, c’est un coût d’entrée dans le métier, pas un avantage. Ce qui n’est pas transférable, c’est la combinaison de l’outil avec les données et l’apprentissage accumulés autour de lui.',
      notions: ['developpement-technologique', 'transferabilite'],
    },
    {
      id: 'approvisionnements',
      libelle: 'Approvisionnements ou achats — activité de soutien A',
      cestQuoi:
        'La fonction qui choisit les fournisseurs, négocie et acquiert : matières, marchandises, fournitures, mais aussi machines et prestations extérieures. C’est une décision, pas un flux.',
      question:
        'De qui dépend-on pour acheter, à quelles conditions, et que se passe-t-il si ce fournisseur augmente ses prix ou disparaît ?',
      quoiMettre: [
        'Nombre de fournisseurs et concentration des achats.',
        'Conditions obtenues : prix, délais, paiement, exclusivités.',
        'Contrats : durée, clauses de sortie, garanties.',
        'Critères de sélection, y compris sociaux et écologiques.',
        'Dépendance mesurée et solutions de repli identifiées.',
      ],
      exemple:
        'Deux fournisseurs asiatiques pour la totalité des batteries, sans contrat pluriannuel ni deuxième source. C’est la faiblesse la plus dangereuse du diagnostic : elle ne se voit pas dans les ventes, elle se verra le jour où l’un des deux augmentera ses prix. Noté 2 sur 5.',
      piege:
        'La ranger avec la logistique amont — c’est le piège numéro un de tout le chapitre, et le jury le teste.',
      reflexe:
        'Test en une phrase : s’agit-il d’acheter, ou de recevoir et manipuler ? Acheter, c’est le soutien A. Recevoir, c’est la principale L. Et cette case-là dialogue directement avec le pouvoir de négociation des fournisseurs, chez Porter.',
      notions: ['approvisionnements', 'pouvoir-fournisseurs'],
    },
    {
      id: 'marge',
      libelle: 'Marge — la case d’arrivée',
      cestQuoi:
        'Ce qui reste : l’écart entre la valeur totale que le client accepte de payer et le coût cumulé des neuf activités. Ce n’est pas une dixième activité, c’est le solde des neuf autres.',
      question:
        'La somme de ce que coûtent nos activités reste-t-elle inférieure à ce que le client accepte de payer, et grâce à quel maillon précisément ?',
      quoiMettre: [
        'Prix accepté par le client, et la raison pour laquelle il l’accepte.',
        'Coût cumulé des maillons, activité par activité.',
        'Où le coût se concentre — souvent deux maillons sur neuf.',
        'Où le prix se justifie — rarement les mêmes deux maillons.',
        'L’écart entre les deux, calculé par domaine d’activité.',
      ],
      exemple:
        'Un vélo vendu 2 600 CHF pour 1 400 CHF de coût laisse 1 200 CHF de marge brute — mais un vélo se vend une seule fois. Une heure d’atelier facturée rapporte beaucoup moins à l’unité, se répète plusieurs fois par an et ramène le client. La marge de la réparation est plus petite et bien plus régulière (chiffres illustratifs).',
      piege: 'Traiter la marge comme une case à décrire, au même titre que les neuf autres.',
      reflexe:
        'La marge ne se décrit pas, elle se calcule. La flèche du schéma va vers elle : si l’analyse d’un maillon ne finit pas par « donc plus de valeur perçue » ou « donc moins de coût », elle n’a pas servi.',
      notions: ['marge', 'equation-de-profit'],
    },
  ],

  methode: [
    {
      titre: '1. Remplir les neuf cases avec des faits, pas des adjectifs',
      detail:
        'Reprendre l’énoncé et placer chaque information dans l’une des neuf activités. Un fait, c’est un nombre, un nom, une durée, un procédé — « deux fournisseurs asiatiques », « diagnostic en 20 minutes ». Une case vide est une information en soi : elle signale une activité que l’entreprise n’exerce pas.',
      aEviter:
        'Écrire « production : correcte ». Ce n’est ni un fait ni un jugement utilisable.',
    },
    {
      titre: '2. Marquer, pour chaque case, où va le coût et où naît la valeur perçue',
      detail:
        'Deux colonnes seulement : cette activité coûte-t-elle cher ? le client la remarque-t-il ? Les quatre combinaisons se lisent d’un coup — coûteuse et invisible (à traiter), coûteuse et visible (à protéger), peu coûteuse et visible (le trésor), peu coûteuse et invisible (à laisser tranquille).',
    },
    {
      titre: '3. Noter chaque maillon face au meilleur concurrent, pas dans l’absolu',
      detail:
        'Une note de 0 à 5, et la réponse à « meilleur que qui ? » écrite à côté. Le diagnostic interne sert à se démarquer de la concurrence : une force qui n’est meilleure que personne n’est pas une force, c’est un prérequis du métier.',
      aEviter:
        'Noter en pensant à l’entreprise idéale. On note face au concurrent réel décrit dans le cas.',
    },
    {
      titre: '4. Chercher la combinaison, pas le champion isolé',
      detail:
        'Repérer deux ou trois maillons qui se renforcent l’un l’autre et citer le même fait dans plusieurs cases sans complexe : c’est précisément ce croisement qui révèle où se loge l’avantage. Un maillon fort tout seul se rattrape ; trois maillons articulés, beaucoup moins.',
      aEviter:
        'S’interdire les répétitions entre les cases par souci de propreté — on efface alors ce qu’on cherchait.',
    },
    {
      titre: '5. Tester la durabilité de ce qu’on vient de trouver',
      detail:
        'Sur chaque maillon fort, deux questions : un concurrent peut-il l’acheter (transférabilité) ? peut-il le reconstruire seul (imitabilité) ? Si oui aux deux, l’avantage est temporaire. Ce qui résiste est presque toujours immatériel et logé dans les personnes et les processus.',
    },
    {
      titre: '6. Trancher : garder, améliorer, ou confier à un tiers',
      detail:
        'Chaque maillon faible reçoit une décision. Faible et stratégique : investir. Faible et non stratégique : externaliser. Faible et dangereux, comme une dépendance fournisseur : traiter en priorité, avant même les maillons plus visibles.',
    },
    {
      titre: '7. Traduire en forces et faiblesses hiérarchisées, puis regarder le système de valeur',
      detail:
        'Trois forces, trois faiblesses, classées par importance, chacune nommée par son maillon — c’est le livrable. Puis élargir : fournisseurs, entreprise, distributeurs, clients. Beaucoup de dépendances et presque tous les impacts écologiques se trouvent en dehors de l’entreprise, sur les chaînes voisines.',
      aEviter:
        'Rendre les neuf cases telles quelles. Décrire n’est pas diagnostiquer : sans forces ni faiblesses en sortie, l’outil n’a rien produit.',
    },
  ],

  liens: [
    {
      vers: 'ressources-competences',
      nature: 'precise',
      explication:
        'Les ressources disent ce que l’entreprise possède et les compétences ce qu’elle sait faire ; la chaîne de valeur dit dans quelle activité précise ça se voit — sans elle, une compétence reste une affirmation invérifiable.',
    },
    {
      vers: 'swot',
      nature: 'alimente',
      explication:
        'Chaque maillon noté fort devient une force et chaque maillon faible une faiblesse : la chaîne de valeur est la fabrique de la moitié gauche du SWOT, et c’est ce qui empêche d’y écrire des adjectifs.',
    },
    {
      vers: 'rcov',
      nature: 'alimente',
      explication:
        'Le « O » du RCOV, l’organisation de la valeur, c’est exactement le résultat de cette analyse : quels maillons on garde en interne, lesquels on confie à un tiers, lesquels on partage avec un partenaire.',
    },
    {
      vers: 'bmc',
      nature: 'partage',
      explication:
        'Les activités clés et les ressources clés du Business Model Canvas ne s’inventent pas : ce sont les maillons que la chaîne de valeur vient de désigner comme créateurs de valeur.',
    },
    {
      vers: 'achats-durables',
      nature: 'prolonge',
      explication:
        'Le maillon Approvisionnements ouvre directement sur les achats responsables : ce qu’on achète engage l’impact de toute la chaîne, et cet impact se produit en amont, chez le fournisseur, là où l’entreprise ne le voit pas.',
    },
  ],

  pieges: [
    {
      titre: 'Réciter les neuf cases',
      explication:
        'Remplir les neuf boîtes n’est pas un diagnostic, c’est une description. Le jury entend une liste et n’entend aucune décision : l’outil a tourné à vide.',
      reflexe:
        'Après chaque case, écrire une seule lettre dans la marge — F pour force, f pour faiblesse, rien si le maillon est banal. Une chaîne de valeur qui ne produit ni F ni f n’a servi à rien, et il vaut mieux s’en apercevoir sur le brouillon qu’à l’oral.',
    },
    {
      titre: 'Confondre Approvisionnements et logistique amont',
      explication:
        'Les deux parlent de fournisseurs, donc on les mélange. Or l’une est une activité de soutien qui décide et négocie, l’autre une activité principale qui réceptionne et manipule. Le cours le signale explicitement : c’est une erreur attendue.',
      reflexe:
        'Une phrase de tri : « s’agit-il d’acheter, ou de recevoir et manipuler ? » Fonction décisionnelle d’un côté, flux physique de l’autre.',
    },
    {
      titre: 'Juger un maillon dans l’absolu',
      explication:
        '« Notre production est bonne » ne veut rien dire tant qu’on n’a pas répondu à « meilleure que qui ? ». Le diagnostic interne existe pour se démarquer de la concurrence, donc toute note est relative.',
      reflexe:
        'Écrire le nom du concurrent de référence à côté de chaque note. S’il n’y en a pas dans l’énoncé, prendre le concurrent type du secteur et le dire à voix haute.',
    },
    {
      titre: 'Appeler avantage durable une technologie achetable',
      explication:
        'Un logiciel de diagnostic ou une machine se commandent. Ce qui se commande ne différencie personne longtemps : c’est un coût d’entrée dans le métier, pas un avantage.',
      reflexe:
        'Appliquer le test de transférabilité et d’imitabilité à chaque force annoncée, et chercher ce qui entoure l’outil — les données accumulées, l’équipe formée, la réputation — car c’est cette combinaison-là qui ne s’achète pas.',
    },
    {
      titre: 'Arrêter l’analyse à la frontière de l’entreprise',
      explication:
        'Une chaîne de valeur impeccable peut coexister avec une dépendance mortelle ou un impact désastreux, parce que le problème est situé en amont, chez les fournisseurs, ou en aval, chez les distributeurs.',
      reflexe:
        'Terminer par une phrase sur le système de valeur — fournisseurs, entreprise, distributeurs, clients. C’est aussi le pont vers les externalités et le chapitre durabilité.',
    },
  ],

  variantes: [
    {
      sujet: 'Le libellé de la troisième activité de soutien',
      formulations: [
        { texte: 'Recherche et développement', source: 'Cours 3, slide 21' },
        { texte: 'Développement technologique', source: 'Cours 3, slides 23 et 24' },
      ],
      consigne:
        'Dis « développement technologique, appelé aussi recherche et développement selon les slides ». Le terme large est le plus fidèle à Porter : il englobe la R&D, la conception, les systèmes d’information et la gestion des connaissances, là où « R&D » ne fait penser qu’au laboratoire.',
    },
    {
      sujet: 'Le libellé de la quatrième activité de soutien',
      formulations: [
        { texte: 'Achats (approvisionnements)', source: 'Cours 3, slide 21' },
        { texte: 'Approvisionnements', source: 'Cours 3, slide 24' },
        { texte: '« L’approvisionnement », au singulier', source: 'Cours 3, slide 23, texte' },
      ],
      consigne:
        'Même bloc, trois libellés : cite-en deux. Le corrigé du TP04 emploie lui-même les deux formes, donc les employer toutes les deux n’est pas une hésitation, c’est une preuve de lecture.',
    },
    {
      sujet: 'La date de la chaîne de valeur',
      formulations: [
        { texte: '1986', source: 'Cours 1, frise historique' },
        { texte: '1985 — Competitive Advantage', source: 'Cours 3' },
      ],
      consigne:
        'Annonce 1985 pour l’édition originale et signale que la frise du Cours 1 porte 1986, probablement l’édition française. Signaler l’écart vaut mieux que trancher : cela montre qu’on a lu les deux supports.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman — la chaîne de valeur à l’étape 2',
    situation:
      'Le diagnostic externe est fait : marques low-cost en ligne, subventions genevoises à la mobilité douce, ventes en recul de 8 % sur deux ans. La direction hésite entre défendre la vente de vélos et basculer vers un abonnement mobilité pour les entreprises. Avant de choisir, il faut savoir ce que l’entreprise vaut vraiment, activité par activité.',
    deroule: [
      {
        etiquette: 'Convention de notation',
        contenu:
          '0 à 5, toujours face au meilleur atelier ou à la meilleure marque en ligne présents sur le marché genevois.',
      },
      {
        etiquette: 'Les cinq principales',
        contenu:
          'Logistique amont 2 · Production 3 · Logistique aval 3 · Marketing et ventes 2 · Services 5.',
      },
      {
        etiquette: 'Les quatre de soutien',
        contenu:
          'Infrastructure 3 · Ressources humaines 4 · Développement technologique 2 · Approvisionnements 2.',
      },
      {
        etiquette: 'Le maillon fort',
        contenu:
          'Services : diagnostic électronique en 20 minutes, toutes marques, par 12 mécaniciens formés en interne.',
      },
      {
        etiquette: 'Le maillon dangereux',
        contenu:
          'Approvisionnements : deux fournisseurs asiatiques pour toutes les batteries, aucun plan de repli, aucun contrat de durée.',
      },
      {
        etiquette: 'La combinaison',
        contenu:
          'Services + Ressources humaines + quinze ans d’historique de pannes : trois cases qui se renforcent, et qu’un concurrent ne peut pas acheter ensemble.',
      },
      {
        etiquette: 'Test de durabilité',
        contenu:
          'Cette combinaison est immatérielle et logée dans les personnes et les processus : peu transférable, peu imitable, donc base d’un avantage concurrentiel durable.',
      },
      {
        etiquette: 'Ce que le profil interdit déjà',
        contenu:
          'Une stratégie assise sur la vente de vélos s’appuierait sur Approvisionnements et Marketing, c’est-à-dire sur les deux maillons les plus faibles.',
      },
    ],
    conclusion:
      'La chaîne de valeur a produit trois forces — compétence d’atelier, réputation locale, équipe stable — et trois faiblesses — dépendance batteries, marketing, développement technologique. Ces six lignes partent telles quelles dans le SWOT, où elles seront croisées avec les opportunités et menaces de l’étape 1. L’outil penche visiblement vers l’abonnement, mais il ne décide pas : c’est le SAF, à l’étape 4, qui testera cette option sur sa souhaitabilité, son acceptabilité et sa faisabilité.',
  },

  phraseOral:
    'Chez Atelier Léman, la valeur ne se crée pas là où l’entreprise vend : les deux maillons les plus faibles, Approvisionnements et Marketing, sont exactement ceux dont dépend la vente de vélos, tandis que le seul maillon noté 5 sur 5, Services, est aussi le seul qu’aucun concurrent ne peut acheter — c’est pour cette raison, et non par goût du service, que l’option de l’abonnement mobilité mérite d’être testée.',

  aRetenir: [
    {
      cle: 'Auteur et date',
      valeur:
        'Michael Porter, Competitive Advantage — 1985 dans le Cours 3, 1986 dans la frise du Cours 1.',
    },
    {
      cle: 'Structure',
      valeur:
        '5 activités principales (L-P-L-M-S) surmontées de 4 activités de soutien (I-R-T-A), le tout débouchant sur la marge.',
    },
    {
      cle: 'Définition du cours',
      valeur:
        'Décomposer l’activité en étapes et fonctions qui génèrent des coûts et contribuent à la valeur finale de l’offre.',
    },
    {
      cle: 'Ce que ça produit',
      valeur:
        'Des forces et des faiblesses hiérarchisées, une par maillon — jamais une description des neuf cases.',
    },
    {
      cle: 'Le piège numéro un',
      valeur:
        'Approvisionnements est une activité de soutien : acheter. La logistique amont est une activité principale : recevoir et stocker.',
    },
    {
      cle: 'Le mot-clé',
      valeur:
        'Combinaison : l’avantage naît de l’articulation de plusieurs maillons, jamais d’un maillon isolé.',
    },
    {
      cle: 'Le prolongement',
      valeur:
        'Le système de valeur — fournisseurs, entreprise, distributeurs, clients — là où se trouvent la plupart des dépendances et des impacts.',
    },
    {
      cle: 'Sens de lecture',
      valeur:
        'La flèche va vers la marge : la marge se calcule, elle ne se décrit pas.',
    },
  ],

  notions: [
    'chaine-de-valeur',
    'activites-principales',
    'logistique-approvisionnement',
    'production',
    'logistique-commercialisation',
    'marketing-ventes',
    'services',
    'activites-soutien',
    'infrastructure-entreprise',
    'grh',
    'developpement-technologique',
    'approvisionnements',
    'marge',
    'systeme-de-valeur',
    'chaine-valeur-durable',
    'diagnostic-interne',
    'avantage-concurrentiel-durable',
    'transferabilite',
    'competence-distinctive',
    'faire-ou-faire-faire',
  ],
}
