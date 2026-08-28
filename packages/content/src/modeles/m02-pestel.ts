import type { Modele } from './types'

export const modele: Modele = {
  id: 'pestel',
  numero: 2,
  slug: 'pestel',
  nom: 'PESTEL',
  sousTitre: 'Diagnostic externe — macro-environnement',
  famille: 'externe',
  etape: 'e1',

  question:
    'Qu’est-ce qui, dans le grand environnement, peut favoriser ou menacer cette entreprise — sans qu’elle y puisse grand-chose ?',

  enUnePhrase:
    'Six cases pour balayer le climat général — Politique, Économique, Socioculturel, Technologique, Écologique et éthique, Légal — puis un tri : chaque fait retenu devient une opportunité ou une menace pour CETTE entreprise-là.',

  produit:
    'Une liste courte et hiérarchisée d’opportunités et de menaces, chacune accompagnée de son mécanisme — et la désignation des forces de Porter qu’il faudra ensuite examiner de près.',

  quandUtiliser: [
    'Dès qu’une consigne parle d’environnement, de contexte, de tendances, ou demande « ce qui a changé autour de l’entreprise ».',
    'Au tout début de l’étape 1, avant Porter : on descend du macro vers le micro, jamais l’inverse. 📘',
    'Quand l’énoncé livre des faits bruts — une loi, une subvention, une crise, une innovation — sans dire quoi en faire.',
    'Quand il faut remplir les O et les M du SWOT : le PESTEL en est la source, avec Porter.',
    'Quand la décision engage plusieurs années : le PESTEL est l’outil de l’anticipation, pas du constat du jour.',
  ],

  quandNePasUtiliser: [
    'Pour analyser les concurrents directs, les clients ou les fournisseurs : ce niveau-là appartient à Porter.',
    'Pour parler des ressources, des compétences, des coûts ou de l’organisation : c’est le diagnostic interne.',
    'Pour dérouler l’actualité mondiale sans périmètre — sans « qui, où, quand », les six cases se remplissent de bruit.',
    'Pour justifier une décision déjà prise : le PESTEL décrit ce que l’entreprise subit, il ne choisit rien.',
  ],

  // -------------------------------------------------------------------------
  // Le schéma
  // -------------------------------------------------------------------------
  schema: {
    h: 690,
    description:
      'Les six facteurs du PESTEL, trois à gauche et trois à droite, convergent vers une case de tri qui transforme chaque fait en opportunité ou en menace, puis vers le livrable unique de l’étape.',
    noeuds: [
      {
        id: 'p',
        titre: 'P — Politique',
        lignes: ['Que font les pouvoirs publics ?'],
        x: 40,
        y: 40,
        l: 260,
        h: 110,
        point: 'politique',
      },
      {
        id: 'e',
        titre: 'E — Économique',
        lignes: ['Que devient l’économie ?'],
        x: 700,
        y: 40,
        l: 260,
        h: 110,
        point: 'economique',
      },
      {
        id: 's',
        titre: 'S — Socioculturel / Sociétal',
        lignes: ['Comment évolue la société ?'],
        x: 40,
        y: 200,
        l: 260,
        h: 110,
        point: 'socioculturel',
      },
      {
        id: 't',
        titre: 'T — Technologique',
        lignes: ['Quelles technologies arrivent ?'],
        x: 700,
        y: 200,
        l: 260,
        h: 110,
        point: 'technologique',
      },
      {
        id: 'ec',
        titre: 'É — Écologique / Éthique',
        lignes: ['Quelles attentes écologiques', 'et morales ?'],
        x: 40,
        y: 360,
        l: 260,
        h: 110,
        point: 'ecologique-ethique',
      },
      {
        id: 'l',
        titre: 'L — Légal',
        lignes: ['Quelles règles contraignantes ?'],
        x: 700,
        y: 360,
        l: 260,
        h: 110,
        point: 'legal',
      },
      {
        id: 'tri',
        titre: 'LE TRI — la chaîne à écrire',
        lignes: ['un fait observable', '→ une conséquence pour le secteur', '→ une opportunité ou une menace'],
        x: 370,
        y: 185,
        l: 260,
        h: 140,
        ton: 'alerte',
        point: 'tri',
      },
      {
        id: 'om',
        titre: 'OPPORTUNITÉS ET MENACES',
        lignes: ['le seul livrable de l’étape 1'],
        x: 370,
        y: 520,
        l: 260,
        h: 110,
        ton: 'accent',
        point: 'om',
      },
    ],
    liens: [
      { de: 'p', vers: 'tri' },
      { de: 'e', vers: 'tri' },
      { de: 's', vers: 'tri' },
      { de: 't', vers: 'tri' },
      { de: 'ec', vers: 'tri' },
      { de: 'l', vers: 'tri' },
      { de: 'tri', vers: 'om', ton: 'accent' },
    ],
    note: '🔎 La case centrale ne figure pas sur le schéma du cours : c’est le travail qu’il suppose. Un facteur n’est une opportunité ou une menace pour personne en général — il le devient pour une entreprise donnée.',
  },

  // -------------------------------------------------------------------------
  // Les points : une case du dessin, une explication
  // -------------------------------------------------------------------------
  points: [
    {
      id: 'politique',
      libelle: 'P — Politique',
      cestQuoi:
        '📘 Les processus et les actions des organismes gouvernementaux — État, canton, commune, organisations internationales — qui influencent les décisions des entreprises. Autrement dit : qui fixe les règles du jeu, et dans quelle direction il les pousse.',
      question:
        'Que font les pouvoirs publics — et qui essaie de peser sur eux ?',
      quoiMettre: [
        '📘 L’orientation idéologique du gouvernement en place : ce qu’il veut encourager, ce qu’il veut freiner.',
        '📘 Les processus politiques, et donc le lobbying — l’action organisée d’une entreprise ou d’une branche pour influencer une décision publique avant qu’elle soit prise.',
        '📘 L’État protecteur des intérêts individuels, locaux et nationaux : accords commerciaux bilatéraux, régionaux ou mondiaux, droits de douane, quotas d’importation.',
        '📘 L’État acteur du marché : il achète, subventionne, possède, et peut aller jusqu’à prendre le contrôle d’un secteur.',
        'Les politiques publiques sectorielles qui ciblent l’activité : mobilité, énergie, logement, aménagement du territoire.',
      ],
      exemple:
        'La Ville de Genève multiplie les subventions à la mobilité douce, c’est-à-dire aux déplacements sans moteur thermique. Le fait est politique ; sa conséquence est économique : le coût d’équipement d’une flotte d’entreprise s’effondre, donc un marché B2B (business to business, d’entreprise à entreprise) devient solvable. Pour Atelier Léman, opportunité majeure — à condition de savoir vendre à des entreprises et pas seulement à des particuliers. 🔎',
      piege:
        'Écrire « les marques low-cost sont soutenues par leur État » et croire qu’on a traité le P : on parle en réalité d’un concurrent, donc de Porter.',
      reflexe:
        'Le test du « tous secteurs » : si le fait ne touche que mon secteur ou mes rivaux, il relève de Porter ; s’il s’imposerait aussi à une pharmacie et à une banque, il est bien macro.',
      notions: ['facteur-politique', 'lobbying', 'etat-sixieme-force'],
    },
    {
      id: 'economique',
      libelle: 'E — Économique',
      cestQuoi:
        '📘 Le fonctionnement de l’économie d’un pays, son potentiel de développement et la disponibilité des ressources de production — ce qui rend un territoire plus ou moins attractif où produire et où vendre.',
      question:
        'Que devient l’économie — et qu’est-ce que cela fait au portefeuille de mes clients et à mes coûts d’entrée ?',
      quoiMettre: [
        '📘 Le système économique lui-même : le capitalisme domine, mais certains secteurs restent sous contrôle public (eau, gestion des déchets, sécurité).',
        'L’inflation, c’est-à-dire la hausse générale et durable des prix, qui ronge le pouvoir d’achat des clients.',
        '📘 Le taux d’intérêt — le prix de l’argent emprunté : il commande l’investissement des entreprises et le crédit à la consommation des ménages.',
        '📘 Le taux de chômage et le revenu disponible : qui a encore de l’argent après les dépenses contraintes.',
        '📘 Le taux de change : un franc suisse fort rend l’achat à l’étranger meilleur marché — pour mes clients comme pour mes rivaux.',
        'Le prix de l’énergie et des matières premières, qui déplace la structure de coûts de tout un secteur.',
      ],
      exemple:
        'Franc suisse fort et achat en ligne transfrontalier banalisé : un vélo électrique importé coûte moins cher au client genevois qu’il y a trois ans. Le fait n’attaque pas Atelier Léman directement, il rend simplement l’alternative moins chère. Menace nette sur le domaine « vente » (vélo vendu 2 600 CHF, coûtant 1 400 CHF : la marge se comprime), presque sans effet sur le domaine « réparation », qui se paie sur place. Chiffres illustratifs. 🔎',
      piege:
        'Ranger « nos coûts de production sont élevés » ou « notre marge se réduit » dans le E : ce sont des faits internes.',
      reflexe:
        'Le E contient le prix de l’énergie pour tout le monde ; ce que mon entreprise en subit, elle, appartient au diagnostic interne — donc au S et au W du SWOT, pas au O et au T.',
      notions: ['facteur-economique'],
    },
    {
      id: 'socioculturel',
      libelle: 'S — Socioculturel / Sociétal',
      cestQuoi:
        '📘 Ce qui varie selon la démographie, l’éducation, l’histoire et les traditions, la langue, le style et les conditions de vie, la religion. Ces groupes créent des marchés particuliers, donc des ouvertures pour de nouveaux acteurs.',
      question: 'Comment évoluent les gens — qui ils sont, ce qu’ils valorisent, comment ils vivent ?',
      quoiMettre: [
        '📘 La démographie : vieillissement, natalité, migrations, taille des ménages — c’est ici que se loge le vieillissement de la population, pas dans le E.',
        '📘 L’éducation et le niveau de qualification, qui décident aussi de qui je peux embaucher.',
        '📘 L’histoire, les traditions, la langue, la religion : ce qui rend une offre acceptable ou non sur un territoire.',
        '📘 Le style et les conditions de vie : urbanisation, télétravail, temps de trajet, rapport à la propriété.',
        'Les valeurs qui montent : consommation locale, seconde main, refus de posséder, attention portée à l’origine des produits.',
        'L’acceptation sociale d’une technologie ou d’une pratique — elle peut basculer très vite après un événement marquant.',
      ],
      exemple:
        'À Genève, la mobilité douce devient un signe de statut plutôt qu’un sacrifice, et les employeurs affichent des engagements en matière de déplacements. Conséquence pour le secteur : la demande se déplace du particulier passionné vers l’entreprise qui équipe ses salariés. Pour Atelier Léman, dont la marque est locale et réputée, c’est une opportunité — sa réputation vaut précisément dans ce cercle-là. 🔎',
      piege:
        'Confondre une tendance déclarée avec un comportement d’achat vérifié : « les gens sont sensibles à l’écologie » ne prouve pas qu’ils paient 2 600 CHF un vélo suisse plutôt que 1 300 CHF un vélo en ligne.',
      reflexe:
        'Exiger un fait qui atteste la tendance — une part de marché, un nombre d’immatriculations, une enquête — avant d’en tirer une opportunité.',
      notions: ['facteur-socioculturel'],
    },
    {
      id: 'technologique',
      libelle: 'T — Technologique',
      cestQuoi:
        '📘 Les normes et la disponibilité des technologies, qui varient d’un pays à l’autre en raison de l’hétérogénéité des lois et des infrastructures, et qui obligent à ajuster le produit — donc ajoutent des coûts de production et de distribution.',
      question:
        'Quelles technologies arrivent, lesquelles s’imposent comme normes — et laquelle commande mon coût ?',
      quoiMettre: [
        '📘 L’hétérogénéité des normes techniques d’un marché à l’autre, et le coût d’adaptation qu’elle impose (l’exemple du cours : les appareils qui ne s’adaptent pas aux prises ni aux tensions locales).',
        '📘 La disponibilité de la technologie : existe-t-elle ici, à quel prix, avec quelle infrastructure derrière.',
        'Les innovations émergentes qui redéfinissent la performance attendue : batteries, connectivité, intelligence artificielle, automatisation.',
        'L’obsolescence : ce que ma technologie actuelle vaudra dans trois ans.',
        'Le composant critique du produit — celui qui décide à la fois du prix de revient et de la durée de vie.',
      ],
      exemple:
        'La batterie concentre à elle seule l’essentiel du coût d’un vélo électrique et détermine sa durée de vie utile. Conséquence pour le secteur : qui tient la batterie tient la marge. Pour Atelier Léman, qui achète à deux fournisseurs asiatiques seulement, c’est une menace lourde — et elle se traduira directement, à l’étape suivante, par un pouvoir de fournisseur élevé chez Porter. 🔎',
      piege:
        'Écrire « T : l’intelligence artificielle » ou « T : les batteries progressent » — un thème, pas une analyse. Rien n’en découle.',
      reflexe:
        'Nommer la technologie, puis dire ce qu’elle déplace : un coût, une durée de vie, une compétence à acquérir, une barrière à l’entrée.',
      notions: ['facteur-technologique'],
    },
    {
      id: 'ecologique-ethique',
      libelle: 'É — Écologique / Éthique',
      cestQuoi:
        '📘 Une case fusionnée : la responsabilité sociale des entreprises et l’éthique des affaires, deux questions qui portent sur le comportement de l’entreprise. Le cours y ajoute le mécanisme central — une attitude irresponsable ou non éthique déclenche des réactions de l’opinion publique, d’autant plus vives que les médias et les réseaux sociaux les amplifient.',
      question:
        'Quelles attentes environnementales et morales pèsent sur le secteur — et où se situe mon risque de réputation ?',
      quoiMettre: [
        '📘 La pollution et le traitement des déchets, à toutes les étapes du cycle de vie du produit.',
        '📘 Les droits de l’homme et le droit du travail, y compris chez les fournisseurs situés à l’autre bout de la chaîne.',
        '📘 La compétition déloyale : corruption, dumping — vendre en dessous du coût pour évincer un rival.',
        'Les attentes climatiques et l’érosion de la biodiversité, telles que le secteur les subit ou y répond.',
        'Le risque de réputation, et son symétrique : le greenwashing, c’est-à-dire l’écart entre le discours durable affiché et les actes.',
      ],
      exemple:
        'Les batteries d’Atelier Léman viennent de deux fournisseurs asiatiques dont les conditions d’extraction du lithium et du cobalt ne sont pas documentées. Conséquence pour le secteur : les acheteurs professionnels commencent à demander l’origine des composants dans leurs appels d’offres. Pour une marque qui vend sa localité, l’écart entre le discours et la chaîne d’approvisionnement est une menace de réputation — et, en même temps, une opportunité si elle est la première à documenter cette origine. 🔎',
      piege:
        'Ne traiter que l’écologie et oublier l’éthique — ou l’inverse — alors que le cours réunit les deux dans la même case.',
      reflexe:
        'Traiter systématiquement les deux dimensions, et signaler à l’oral que les supports nomment ce facteur tantôt « éthique », tantôt « écologique », tantôt « environnemental et éthique ». Savoir citer la variante rapporte des points.',
      notions: ['facteur-environnemental-ethique', 'greenwashing'],
    },
    {
      id: 'legal',
      libelle: 'L — Légal',
      cestQuoi:
        '📘 Deux aspects distincts, et le cours insiste sur la distinction : d’une part les lois qui encadrent le comportement des acteurs économiques ; d’autre part le système répressif, par lequel les autorités s’assurent que ces lois sont respectées de tous.',
      question: 'Quelles règles sont juridiquement contraignantes ici — et sont-elles réellement sanctionnées ?',
      quoiMettre: [
        '📘 Le droit des contrats et le droit du travail.',
        '📘 Le droit à la propriété et sa protection : brevets, marques, secrets d’affaires.',
        '📘 La sûreté du produit et la réglementation sur la responsabilité du fabricant.',
        '📘 Le droit fiscal.',
        'Les réglementations sectorielles : normes produit, reprise et recyclage des déchets d’équipements électriques et électroniques (DEEE), protection des données, accessibilité numérique.',
        '📘 Le système répressif : contrôles, sanctions, jurisprudence — une règle non appliquée n’a pas le même effet stratégique qu’une règle sanctionnée.',
      ],
      exemple:
        'Les obligations de reprise et de recyclage des batteries se durcissent. Conséquence pour le secteur : chaque vendeur doit organiser une filière de retour, ce qui coûte cher et suppose un atelier. Pour Atelier Léman, le facteur joue dans les deux sens — il alourdit ses coûts, mais il élève aussi la barrière à l’entrée pour un pur vendeur en ligne, donc il la protège. C’est exactement le genre de double lecture qui distingue une bonne réponse. 🔎',
      piege:
        'Mélanger le L et le P, et compter deux fois le même fait dans les deux cases.',
      reflexe:
        'Le L est ce qui est déjà écrit dans un texte contraignant et sanctionnable ; le P est ce qui est en train d’être décidé, orienté, subventionné ou négocié. Une subvention est politique ; une norme obligatoire est légale.',
      notions: ['facteur-legal', 'deee'],
    },
    {
      id: 'tri',
      libelle: 'Le tri — la chaîne à écrire',
      cestQuoi:
        '🔎 La case qui ne figure sur aucun schéma et qui constitue pourtant tout le travail. Entre les six lettres et le livrable, il faut écrire une chaîne : un fait observable produit une évolution, cette évolution a une conséquence pour le secteur, et cette conséquence devient — pour cette entreprise-là — une opportunité ou une menace.',
      question: 'Ce fait produit quoi dans le secteur, et pour NOUS cela devient quoi ?',
      quoiMettre: [
        'Le fait, observable et daté : une décision, un chiffre, un texte. Pas une impression.',
        'L’évolution qu’il enclenche : quelque chose baisse, monte, disparaît, s’ouvre.',
        'La conséquence pour le secteur entier : la demande se déplace, un coût change de camp, une barrière monte.',
        'La qualification pour cette entreprise-là : opportunité ou menace, avec le pourquoi — et parfois les deux à la fois.',
        'Le rang : trois facteurs déterminants suffisent ; les autres se citent et se laissent de côté.',
      ],
      exemple:
        'Fait : la Ville subventionne l’équipement en vélos électriques. Évolution : le coût d’entrée pour une entreprise cliente baisse fortement. Conséquence pour le secteur : la demande B2B s’ouvre et attire des acteurs qui l’ignoraient. Pour Atelier Léman : opportunité — un marché solvable apparaît à sa porte — ET menace — l’appel d’air attire des concurrents mieux financés. Un même fait, deux qualifications : c’est légitime, et c’est même le signe qu’on a compris le mécanisme. 🔎',
      piege:
        'Sauter la chaîne et écrire directement une étiquette : « Socioculturel : sensibilité écologique → opportunité ». Sans « pour qui » ni « pourquoi », ce n’est pas une analyse, c’est une case cochée.',
      reflexe:
        'S’obliger à deux flèches minimum entre le fait et la conclusion. Si la phrase tient en trois mots, elle n’a rien démontré.',
      notions: ['pestel', 'diagnostic-externe', 'strates-environnement'],
    },
    {
      id: 'om',
      libelle: 'Opportunités et menaces',
      cestQuoi:
        'Le seul livrable de l’étape. Une opportunité est une évolution externe susceptible de bénéficier à l’entreprise si elle la saisit ; une menace, une évolution externe susceptible de lui nuire. Ni l’une ni l’autre n’appartient à l’entreprise : elles existeraient même sans elle.',
      question:
        'Si je ne devais garder que six lignes, lesquelles changeraient réellement la décision ?',
      quoiMettre: [
        'Trois opportunités au maximum, classées de la plus déterminante à la moins.',
        'Trois menaces au maximum, classées de la même façon.',
        'Pour chacune, le mécanisme en une demi-phrase — pas seulement l’étiquette.',
        'Le domaine d’activité concerné : la même menace peut écraser un domaine et laisser l’autre intact.',
        'Une échéance grossière : cela agit déjà, ou dans deux ans ?',
      ],
      exemple:
        'Opportunités : 1. subventions cantonales ouvrant un marché B2B solvable (majeure) ; 2. attentes de mobilité douce chez les employeurs genevois ; 3. normes de reprise élevant les barrières à l’entrée. Menaces : 1. marques low-cost en ligne sur le domaine « vente » (majeure) ; 2. dépendance à deux fournisseurs de batteries (majeure) ; 3. origine non documentée des composants, risque de réputation. 🔎',
      piege:
        'Glisser une décision dans la liste : « lancer un abonnement mobilité » n’est pas une opportunité, c’est une option stratégique.',
      reflexe:
        'Test de l’entreprise absente : une opportunité existerait même si l’entreprise n’existait pas. Si la phrase contient un verbe d’action de l’entreprise, elle appartient à l’étape des options, pas ici.',
      notions: ['opportunite', 'menace', 'swot'],
    },
  ],

  // -------------------------------------------------------------------------
  // La méthode : comment on fait
  // -------------------------------------------------------------------------
  methode: [
    {
      titre: '1. Fixer le périmètre avant d’écrire quoi que ce soit',
      detail:
        'Une phrase, trente secondes : quelle entreprise, quel domaine d’activité, quel territoire, quel horizon de temps. C’est ce cadre qui rend un fait pertinent ou hors sujet. Sans lui, les six cases attirent toute l’actualité du monde.',
      aEviter:
        'Commencer par « P : … » sur une feuille blanche. On remplit alors des cases au lieu d’analyser une situation.',
    },
    {
      titre: '2. Balayer les six lettres et récolter des faits, pas des thèmes',
      detail:
        'Un tour complet, une à deux minutes. On note uniquement ce qui est observable : une décision, un texte, un chiffre, un événement. Un fait se date et se sourcerait ; un thème ne se date pas. Deux ou trois faits par case suffisent largement à ce stade.',
      aEviter:
        'Noter « inflation », « IA », « écologie ». Ces mots ne sont pas des faits : ils ne permettront aucune conclusion à l’étape 3.',
    },
    {
      titre: '3. Transformer chaque fait en conséquence pour le secteur',
      detail:
        'Pour chaque fait retenu, écrire ce qu’il change dans le secteur — indépendamment de mon entreprise. Un coût qui monte, une demande qui se déplace, une barrière à l’entrée qui bouge, un besoin qui trouve une autre solution. C’est le maillon que presque tout le monde saute.',
      aEviter:
        'Passer directement du fait à « donc c’est une opportunité ». Le secteur est l’intermédiaire obligé : c’est lui qui transmet le choc.',
    },
    {
      titre: '4. Qualifier en opportunité ou en menace, pour CETTE entreprise',
      detail:
        'La même conséquence sectorielle se qualifie différemment selon l’entreprise : la hausse de la demande locale est une opportunité pour un producteur suisse et une menace pour un importateur lointain. On écrit donc « pour nous, parce que… ». Un fait peut légitimement produire les deux à la fois.',
      aEviter:
        'Qualifier sans destinataire. « Sensibilité écologique → opportunité » ne dit ni pour qui, ni par quel mécanisme, et ne vaut aucun point.',
    },
    {
      titre: '5. Hiérarchiser : trois facteurs déterminants suffisent',
      detail:
        '📘 Une excellente réponse sélectionne les facteurs réellement structurants plutôt que de produire un PESTEL exhaustif et plat. On classe, on garde trois lignes fortes, et on cite les autres en une phrase pour montrer qu’on les a vues.',
      aEviter:
        'Vouloir remplir les six cases à tout prix. Une case vide assumée — « l’économique ne joue pas ici, et voici pourquoi » — vaut mieux qu’une case remplie de généralités.',
    },
    {
      titre: '6. Passer le relais à Porter et au SWOT',
      detail:
        'Pour chaque facteur retenu, désigner la force de Porter qu’il déplace : une subvention rend le secteur attractif, donc renforce la menace des nouveaux entrants ; un composant critique renforce le pouvoir des fournisseurs ; une norme durcie élève les barrières à l’entrée. Puis recopier les qualifications dans les colonnes O et M du SWOT — elles y entrent telles quelles.',
      aEviter:
        'Traiter le PESTEL comme une fin en soi. Un PESTEL qui ne débouche sur rien n’a servi qu’à occuper deux minutes de préparation.',
    },
  ],

  // -------------------------------------------------------------------------
  // Liens vers les autres modèles
  // -------------------------------------------------------------------------
  liens: [
    {
      vers: 'perimetre',
      nature: 'partage',
      explication:
        'Les deux outils travaillent sur le même cadre : ce que la phrase de périmètre a délimité — un besoin, un territoire, un horizon — est exactement ce que les six cases ont le droit de balayer. Hors de ce cadre, un fait macro n’est pas un facteur, c’est du bruit.',
    },
    {
      vers: 'porter',
      nature: 'alimente',
      explication:
        'Le PESTEL s’arrête à la porte du secteur : c’est Porter qui dit ce que le facteur macro devient concrètement. Le T « la batterie est le composant critique » ressort chez Porter sous la forme « pouvoir des fournisseurs élevé », et le L « normes de reprise durcies » sous la forme « barrières à l’entrée relevées ».',
    },
    {
      vers: 'swot',
      nature: 'alimente',
      explication:
        'Les opportunités et les menaces du SWOT ne s’inventent pas au moment de le remplir : elles sortent du PESTEL et de Porter, déjà qualifiées et déjà hiérarchisées.',
    },
    {
      vers: 'parties-prenantes',
      nature: 'prolonge',
      explication:
        'Derrière chaque facteur macro, il y a quelqu’un : le PESTEL dit ce qui bouge, la carte pouvoir-intérêt dit qui le fait bouger et avec quel poids.',
    },
    {
      vers: 'wedding-cake',
      nature: 'prolonge',
      explication:
        'Le « É » n’est qu’une case parmi six ; le wedding cake explique pourquoi cette case conditionne les autres — l’économie s’appuie sur la société, qui s’appuie sur la biosphère.',
    },
  ],

  // -------------------------------------------------------------------------
  // Les pièges d’examen
  // -------------------------------------------------------------------------
  pieges: [
    {
      titre: 'Mettre la concurrence dans le PESTEL',
      explication:
        'C’est la faute la plus fréquente et la plus coûteuse : « les marques low-cost cassent les prix » atterrit dans le E ou le P. Or la concurrence directe est du micro-environnement : elle appartient à Porter. Le PESTEL contient l’inflation, les taux, le chômage, les lois — pas les rivaux.',
      reflexe:
        'Poser la question du « tous secteurs » : ce fait s’imposerait-il aussi à une pharmacie et à une banque ? Si non, il est chez Porter.',
    },
    {
      titre: 'Cataloguer au lieu de hiérarchiser',
      explication:
        'Vingt éléments alignés sur six cases donnent l’impression du travail et ne prouvent aucun jugement. 📘 Le cours valorise explicitement la sélection des facteurs réellement déterminants. À l’oral, un catalogue consomme les dix minutes sans jamais rien conclure.',
      reflexe:
        'Se donner un quota : trois facteurs analysés à fond, les trois autres cités en une phrase avec la raison de les écarter.',
    },
    {
      titre: 'Qualifier une opportunité sans dire pour qui',
      explication:
        'Un facteur macro n’est ni une opportunité ni une menace en soi. La subvention à la mobilité douce est une opportunité pour un fabricant local et une menace pour un garagiste automobile. Écrire « opportunité » tout court, c’est laisser le correcteur faire l’analyse à sa place.',
      reflexe:
        'Terminer chaque ligne par « … pour nous, parce que… ». Si la fin de phrase ne vient pas, l’analyse n’est pas faite.',
    },
    {
      titre: 'Confondre le facteur et la décision',
      explication:
        '« Lancer un abonnement mobilité pour les entreprises » se retrouve régulièrement dans la colonne des opportunités. C’est une option stratégique, donc une réponse à l’environnement — pas un élément de l’environnement.',
      reflexe:
        'Test de l’entreprise absente : l’opportunité existerait-elle si l’entreprise fermait demain ? Si oui, c’est bien une opportunité.',
    },
    {
      titre: 'Ignorer les variantes de vocabulaire du cours',
      explication:
        'Le « E » et le « L » ne portent pas le même nom d’un support à l’autre. Réciter une seule formulation donne l’impression d’avoir lu une synthèse ; citer la divergence prouve qu’on a lu les sources.',
      reflexe:
        'Dire « le facteur environnemental et éthique — le cours l’appelle aussi éthique, ou écologique selon les slides », et enchaîner. Une seconde de plus, un point de plus.',
    },
  ],

  // -------------------------------------------------------------------------
  // Les variantes du cours, conservées et signalées
  // -------------------------------------------------------------------------
  variantes: [
    {
      sujet: 'Le « E » du PESTEL',
      formulations: [
        { texte: 'Éthique', source: 'Cours 2, slide 10 — la liste des six facteurs' },
        { texte: 'Écologique', source: 'Cours 2, slide 11 — le tableau Opportunités / Menaces' },
        { texte: 'Le facteur environnemental et éthique', source: 'Cours 2, slide 19 — le titre détaillé' },
        { texte: 'Facteurs environnementaux et éthiques', source: 'Cours 2, slide 9 — le schéma des strates' },
        { texte: 'Facteur éthique', source: 'Corrigé TP02A (Fukushima)' },
        { texte: 'Facteurs environnemental et éthique', source: 'Cours 4 (durabilité), slide 36' },
      ],
      consigne:
        'Le contenu de la slide 19 tranche le débat sur le fond : la case traite dans le même mouvement la RSE, l’éthique des affaires, la pollution, les déchets, les droits de l’homme, le droit du travail et la concurrence déloyale. Énonce donc « environnemental et éthique » — la formulation la plus complète — signale que les supports emploient aussi « éthique » et « écologique », et traite toujours les deux dimensions.',
    },
    {
      sujet: 'Le « L » du PESTEL',
      formulations: [
        { texte: 'Légal', source: 'Cours 2, slide 20' },
        { texte: 'Juridique', source: 'Corrigé TP02A' },
      ],
      consigne:
        'Le corrigé officiel écrit « Juridique » là où le cours écrit « Légal ». Souplesse assumée : emploie « Légal », et accepte l’autre terme sans le corriger si l’examinateur l’emploie.',
    },
    {
      sujet: 'L’angle du facteur technologique',
      formulations: [
        { texte: 'Hétérogénéité des normes et coûts d’adaptation', source: 'Cours 2, slide 18' },
        { texte: 'Innovations à encourager pour appuyer la stratégie', source: 'Cours 4 (durabilité), slide 36' },
      ],
      consigne:
        'Les deux lectures coexistent dans les supports : le T comme contrainte d’adaptation, et le T comme levier d’innovation. Traite celle qui sert le cas, et mentionne l’autre en une incise.',
    },
  ],

  // -------------------------------------------------------------------------
  // Le fil rouge
  // -------------------------------------------------------------------------
  exemple: {
    titre: 'Atelier Léman SA — le macro-environnement de la mobilité genevoise',
    situation:
      'Début de l’étape 1. Le périmètre a été posé à l’étape 0 : PME genevoise, 45 salariés, 6,2 M CHF de chiffre d’affaires, deux domaines d’activité — la vente de vélos électriques, en position faible, et la réparation toutes marques, en position forte. Les ventes reculent de 8 % sur deux ans. La direction hésite entre défendre la vente et basculer vers un abonnement mobilité pour les entreprises. À ce stade, on n’a pas encore le droit de parler de solutions : on cherche seulement ce qui, dehors, explique le recul et ce qui pourrait ouvrir une porte.',
    deroule: [
      {
        etiquette: 'Périmètre',
        contenu:
          'Mobilité douce, canton de Genève, horizon deux à trois ans, clientèle de particuliers et d’entreprises. Tout fait qui ne touche pas ce cadre est écarté d’office.',
      },
      {
        etiquette: 'P — Politique',
        contenu:
          'Fait : la Ville de Genève multiplie les subventions à la mobilité douce. Conséquence pour le secteur : le coût d’équipement d’une flotte d’entreprise baisse fortement, un marché B2B jusque-là peu servi devient solvable. Pour nous : opportunité majeure — mais elle exige une compétence commerciale que nous n’avons pas encore.',
      },
      {
        etiquette: 'E — Économique',
        contenu:
          'Fait : franc suisse fort, achat en ligne transfrontalier banalisé. Conséquence : le prix d’entrée du marché s’effondre. Pour nous : menace sur le domaine « vente » (2 600 CHF contre des offres bien inférieures), quasi nulle sur la réparation. Chiffres illustratifs.',
      },
      {
        etiquette: 'S — Socioculturel',
        contenu:
          'Fait : les employeurs genevois affichent des engagements sur les déplacements de leurs salariés. Conséquence : la demande se déplace du particulier vers l’entreprise. Pour nous : opportunité, car notre réputation locale vaut surtout auprès d’acheteurs genevois.',
      },
      {
        etiquette: 'T — Technologique',
        contenu:
          'Fait : la batterie concentre le coût et commande la durée de vie du produit. Conséquence : qui tient la batterie tient la marge du secteur. Pour nous : menace lourde — deux fournisseurs asiatiques seulement, aucune alternative européenne qualifiée.',
      },
      {
        etiquette: 'É — Écologique / Éthique',
        contenu:
          'Fait : l’origine du lithium et du cobalt de nos batteries n’est pas documentée. Conséquence : les acheteurs professionnels commencent à l’exiger dans leurs appels d’offres. Pour nous : menace de réputation aujourd’hui, opportunité de différenciation si nous documentons les premiers.',
      },
      {
        etiquette: 'L — Légal',
        contenu:
          'Fait : les obligations de reprise et de recyclage des batteries se durcissent. Conséquence : chaque vendeur doit organiser une filière de retour, ce qui suppose un atelier. Pour nous : coût supplémentaire, mais barrière à l’entrée relevée contre les purs vendeurs en ligne — menace et protection à la fois.',
      },
      {
        etiquette: 'Hiérarchie',
        contenu:
          'Trois facteurs décident : le P, parce qu’il crée un marché qui n’existait pas ; le T, parce que la batterie commande la marge ; le L, parce qu’il joue dans les deux sens. Le S renforce le P sans le changer. Le E et le É existent mais ne modifient pas la décision.',
      },
    ],
    conclusion:
      'Le PESTEL n’a pas tranché entre défendre la vente et basculer vers l’abonnement — ce n’est pas son rôle. Il a produit trois opportunités et trois menaces hiérarchisées, il a montré que les deux domaines d’activité ne subissent pas le même environnement, et il a désigné les endroits où Porter doit creuser : le pouvoir des fournisseurs de batteries et la menace de nouveaux entrants sur un marché B2B que la subvention vient de rendre appétissant.',
  },

  phraseOral:
    '« Sur les six dimensions du PESTEL, trois seulement décident ici. Le politique, parce que les subventions cantonales font apparaître un marché d’entreprise solvable qui n’existait pas. Le technologique, parce que la batterie commande à la fois le coût et la durée de vie du produit, et que nous n’avons que deux fournisseurs. Et le légal, qui joue dans les deux sens : les obligations de reprise alourdissent nos coûts, mais elles élèvent aussi les barrières à l’entrée et nous protègent des vendeurs en ligne. Les trois autres facteurs existent — ils ne changent pas la décision. »',

  aRetenir: [
    { cle: 'Ce que l’outil produit', valeur: 'Des opportunités et des menaces, hiérarchisées. Rien d’autre.' },
    { cle: 'Le niveau', valeur: 'Macro : ce que tout un secteur subit. Les rivaux, les clients et les fournisseurs relèvent de Porter.' },
    { cle: 'Nombre de facteurs 📘', valeur: 'Six — P, E, S, T, É, L.' },
    { cle: 'Le « E » 📘', valeur: 'Éthique, écologique, ou environnemental et éthique selon le support. Signale la variante, traite les deux dimensions.' },
    { cle: 'Le « L » 📘', valeur: 'Deux aspects : la loi, et le système répressif qui la fait appliquer.' },
    { cle: 'La chaîne obligatoire', valeur: 'Fait observable → conséquence pour le secteur → opportunité ou menace POUR CETTE ENTREPRISE.' },
    { cle: 'La bonne quantité', valeur: 'Trois facteurs analysés valent mieux que six énumérés.' },
    { cle: 'Degré de contrôle', valeur: 'Nul. On anticipe, on s’adapte, au mieux on influence — c’est le lobbying. 📘' },
    { cle: 'Le relais', valeur: 'Chaque facteur retenu désigne une force de Porter à examiner, puis remplit une ligne du SWOT.' },
    { cle: 'Le mémo', valeur: 'PESTEL, c’est la météo. Porter, c’est le match. La météo change les conditions ; elle ne marque pas les buts.' },
  ],

  notions: [
    'pestel',
    'facteur-politique',
    'facteur-economique',
    'facteur-socioculturel',
    'facteur-technologique',
    'facteur-environnemental-ethique',
    'facteur-legal',
    'lobbying',
    'etat-sixieme-force',
    'strates-environnement',
    'diagnostic-externe',
    'opportunite',
    'menace',
    'perimetre',
    'deee',
    'greenwashing',
  ],
}
