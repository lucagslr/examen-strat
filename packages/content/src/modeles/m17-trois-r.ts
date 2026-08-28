import type { Modele } from './types'

export const modele: Modele = {
  id: 'trois-r',
  numero: 17,
  slug: 'trois-r',
  nom: 'Économie circulaire : les 3R',
  sousTitre: 'Ordre de priorité',
  famille: 'durabilite',
  etape: 'transverse',

  question:
    'Face à un objet qui va devenir un déchet, dans quel ordre agir — et pourquoi cet ordre-là plutôt qu’un autre ?',

  enUnePhrase:
    'Les 3R sont une hiérarchie, pas une liste : réduire d’abord (le meilleur déchet est celui qui n’est jamais produit), réutiliser ensuite (l’objet garde sa forme et change de mains), recycler seulement en dernier recours (l’objet est détruit, on ne récupère que la matière) — et le cours l’écrit textuellement : « puis enfin seulement de recyclage ».',

  produit:
    'Un classement des actions possibles par ordre de priorité, chacune rattachée à sa marche, plus une ligne souvent oubliée : ce qui reste après les trois marches, et qui en supporte le coût.',

  quandUtiliser: [
    'Quand la question porte sur les déchets, la fin de vie, le matériel informatique, les batteries, les emballages ou le renouvellement d’un parc d’équipements.',
    'Quand une entreprise se présente comme circulaire parce qu’elle recycle : les 3R servent alors à montrer qu’elle a commencé par la dernière marche.',
    'Quand il faut hiérarchiser des actions durables entre elles, et pas seulement en dresser la liste — c’est exactement ce que l’examen attend du mot « priorité ».',
    'Dans le SWOT et dans le SAF : « nous réparons » n’est pas la même force que « nous recyclons », et les 3R donnent l’argument qui explique pourquoi.',
    'Dans le BMC durable, pour remplir les blocs Ressources clés, Activités clés et Structure de coûts avec autre chose que des intentions.',
  ],

  quandNePasUtiliser: [
    'Pour décrire l’économie circulaire en entier : les 3R n’en sont que la hiérarchie de traitement. Le cours liste aussi l’écoconception, le partage et le retraitement, plus un second cycle, biologique.',
    'Pour juger une stratégie dans son ensemble : les 3R disent dans quel ordre agir sur la matière, jamais si l’entreprise reste viable. Le verdict global se prend au Donut, l’arbitrage au SAF.',
    'Comme argument moral en fin de réponse. Trois verbes cités sans un flux réel derrière eux ne rapportent rien.',
    'Pour un problème qui ne porte pas sur un flux physique : une question sur les données personnelles ou sur l’accessibilité ne se traite pas avec les 3R.',
  ],

  schema: {
    h: 880,
    description:
      'Une échelle de priorité descendante — l’éco-conception en amont, puis réduire, puis réutiliser, puis recycler — qui aboutit en bas à l’incinération et à la mise en décharge quand rien n’a pu être évité ; à droite, trois clés de lecture regroupées dans un cadre : le test du propriétaire, ce qui se perd en descendant d’une marche, et la même échelle retrouvée ailleurs dans le cours.',
    noeuds: [
      {
        id: 'cadre-lectures',
        titre: 'TROIS FAÇONS DE LIRE L’ÉCHELLE',
        x: 586,
        y: 146,
        l: 398,
        h: 698,
        forme: 'cadre',
      },
      {
        id: 'eco',
        titre: 'EN AMONT — L’ÉCO-CONCEPTION',
        lignes: ['elle rend les boucles possibles'],
        x: 40,
        y: 40,
        l: 920,
        h: 70,
        forme: 'bande',
        ton: 'positif',
        point: 'eco-conception',
      },
      {
        id: 'r1',
        titre: '1. RÉDUIRE — et réparer',
        lignes: ['le déchet qu’on ne produit pas', 'réparer, prévenir, moins emballer'],
        x: 40,
        y: 170,
        l: 520,
        h: 110,
        ton: 'accent',
        point: 'reduire',
      },
      {
        id: 'r2',
        titre: '2. RÉUTILISER',
        lignes: ['même objet, même fonction,', 'un autre propriétaire'],
        x: 40,
        y: 330,
        l: 520,
        h: 110,
        ton: 'positif',
        point: 'reutiliser',
      },
      {
        id: 'r3',
        titre: '3. RECYCLER — dernier recours',
        lignes: ['on démonte, on broie : il ne', 'reste que la matière'],
        x: 40,
        y: 490,
        l: 520,
        h: 110,
        ton: 'alerte',
        point: 'recycler',
      },
      {
        id: 'elimination',
        titre: 'INCINÉRATION ET DÉCHARGE',
        lignes: ['la fin de l’économie linéaire', 'ce que les 3R font reculer'],
        x: 40,
        y: 680,
        l: 520,
        h: 110,
        ton: 'danger',
        point: 'elimination',
      },
      {
        id: 'test',
        titre: 'LE TEST DU PROPRIÉTAIRE',
        lignes: ['l’objet change-t-il de', 'propriétaire ?'],
        x: 610,
        y: 170,
        l: 350,
        h: 260,
        forme: 'losange',
        ton: 'alerte',
        point: 'test-proprietaire',
      },
      {
        id: 'pente',
        titre: 'EN DESCENDANT, ON PERD',
        lignes: ['la valeur conservée baisse,', 'l’énergie dépensée monte,', 'la boucle s’allonge'],
        x: 610,
        y: 470,
        l: 350,
        h: 140,
        point: 'pente',
      },
      {
        id: 'parallele',
        titre: 'LA MÊME ÉCHELLE AILLEURS',
        lignes: ['sobriété : questionner,', 'transférer, améliorer', 'achats : moins, mieux, plus long'],
        x: 610,
        y: 680,
        l: 350,
        h: 140,
        point: 'parallele',
      },
    ],
    liens: [
      { de: 'eco', vers: 'r1', depuis: 'bas', arrive: 'haut' },
      { de: 'r1', vers: 'r2', depuis: 'bas', arrive: 'haut', libelle: 'seulement si impossible' },
      { de: 'r2', vers: 'r3', depuis: 'bas', arrive: 'haut', libelle: 'seulement si impossible' },
      {
        de: 'r3',
        vers: 'elimination',
        depuis: 'bas',
        arrive: 'haut',
        libelle: 'ce qui n’a pas été évité',
        trait: 'pointille',
        ton: 'danger',
      },
      { de: 'test', vers: 'r1', depuis: 'gauche', arrive: 'droite', libelle: 'non', trait: 'pointille', ton: 'sourd' },
      { de: 'test', vers: 'r2', depuis: 'gauche', arrive: 'droite', libelle: 'oui', trait: 'pointille', ton: 'sourd' },
      { de: 'pente', vers: 'r3', depuis: 'gauche', arrive: 'droite', trait: 'pointille', sansFleche: true, ton: 'sourd' },
    ],
    note: 'Recycler beaucoup n’est pas « faire de l’économie circulaire ». Une entreprise qui recycle bien et produit toujours plus reste dans une logique linéaire : elle a simplement mieux organisé la sortie.',
  },

  points: [
    {
      id: 'eco-conception',
      libelle: 'En amont — l’éco-conception',
      cestQuoi:
        '📘 L’éco-conception, c’est concevoir un produit en tenant compte de son impact sur tout son cycle de vie — matières, fabrication, usage, fin de vie. Le cours la place en tête du visuel de l’économie circulaire et le corpus le formule ainsi : elle n’est pas une boucle, elle agit à la source pour rendre toutes les boucles possibles.',
      question:
        'Ce produit a-t-il été conçu pour pouvoir être réparé, démonté et repris — ou faut-il le jeter entier dès qu’une pièce lâche ?',
      quoiMettre: [
        'La réparabilité : pièces vissées plutôt que collées, outils standards, schémas disponibles.',
        'La modularité : une batterie, un moteur ou un écran qu’on remplace seul, sans toucher au reste.',
        'La séparabilité des matériaux : deux matières collées l’une à l’autre ne se recyclent ni l’une ni l’autre.',
        'La disponibilité des pièces détachées dans le temps, et sa durée annoncée — sans pièces, la marche 1 est fermée.',
        'La durée de vie visée, écrite en années, et ce qui a été fait pour la tenir.',
        '📘 Les cinq leviers listés par le cours autour d’elle : écoconception, partage, réutilisation, réparation, retraitement.',
      ],
      exemple:
        'Atelier Léman achète ses batteries à deux fournisseurs asiatiques. Si la batterie est intégrée dans le cadre et scellée, aucune des trois marches n’est praticable : ni réparer, ni revendre, ni séparer les matières. Le choix d’un boîtier vissé et d’une cellule standard, décidé au moment de l’achat du composant, ouvre les trois marches d’un coup. C’est une décision de conception, pas une décision de fin de vie.',
      piege:
        'Traiter l’éco-conception comme un quatrième R, ou l’oublier parce que le schéma n’en compte que trois. Sans elle, les trois marches sont des intentions : on ne répare pas ce qui n’est pas réparable.',
      reflexe:
        'Place-la avant le chiffre 1, jamais dans la liste. Formule : « avant même de réduire, il y a la conception — c’est elle qui décide si les trois R sont possibles ».',
      notions: ['eco-conception', 'economie-circulaire', 'cycle-de-vie'],
    },
    {
      id: 'reduire',
      libelle: '1. Réduire — la marche la plus haute',
      cestQuoi:
        '📘 Le cours emploie deux mots pour cette marche : « réduction » et « minimisation ». Moins de déchets sont produits parce que le gaspillage est évité. Y entrent la réparation des produits — à domicile ou en boutique de réparation —, la limitation des emballages, la production d’emballages réutilisables et l’élaboration de politiques de promotion de la réduction des déchets. La phrase-clé du support : chaque fois qu’on fait réparer un appareil plutôt que d’en acheter un neuf, on réduit les déchets.',
      question:
        'Ce déchet, peut-on tout simplement ne pas le produire — en réparant, en prolongeant, ou en n’achetant pas ?',
      quoiMettre: [
        '📘 Réparer plutôt que remplacer : c’est le geste principal de cette marche, et il reste ici parce que l’objet ne change pas de mains.',
        '📘 Limiter les emballages, et fabriquer des emballages réutilisables.',
        '📘 Élaborer des politiques de promotion de la réduction des déchets : la marche 1 est aussi une décision d’organisation, pas seulement un geste technique.',
        'Allonger la durée de vie : entretien préventif, mise à jour, pièces détachées — la réponse directe à l’obsolescence.',
        'Questionner le besoin lui-même : l’équipement était-il nécessaire ? C’est le point de contact avec la sobriété.',
        'Mutualiser un équipement au lieu d’en acheter un par personne : un objet partagé est un objet non produit.',
      ],
      exemple:
        'Atelier Léman répare toutes marques dans deux ateliers, Carouge et Plainpalais. Ce n’est pas un service annexe : c’est sa marche 1. Chiffre illustratif : environ 1 400 réparations par an, dont une bonne moitié évite un remplacement — soit autant de vélos jamais fabriqués. À l’échelle de l’entreprise, c’est le poste qui évite le plus d’impact, et c’est aussi celui où sa position est forte.',
      piege:
        'Classer la réparation dans « Réutiliser ». C’est l’erreur la plus fréquente sur ce schéma, et elle fait perdre le sens de la hiérarchie : réparer n’est pas donner une seconde vie à un objet dont on s’est débarrassé, c’est ne jamais s’en débarrasser.',
      reflexe:
        'Applique le test du propriétaire : l’objet change-t-il de mains ? Non, on le répare pour son propriétaire → marche 1. Oui → marche 2.',
      notions: ['trois-r', 'obsolescence', 'sobriete-numerique', 'economie-circulaire'],
    },
    {
      id: 'reutiliser',
      libelle: '2. Réutiliser — l’objet reste un objet',
      cestQuoi:
        '📘 La définition du cours est précise et il faut la citer telle quelle : la réutilisation d’un objet avec la même fonction que celle pour laquelle il a initialement été produit, mais par des personnes autres que les propriétaires initiaux. Deux conditions donc, et pas une : même fonction, propriétaire différent. Le cours ajoute que les appareils numériques ont souvent besoin d’être reconditionnés avant d’y entrer.',
      question:
        'Cet objet peut-il servir tel quel, pour la même fonction, à quelqu’un d’autre — quitte à le remettre en état d’abord ?',
      quoiMettre: [
        '📘 Les sites et marchés de vente d’occasion et de troc : le cours les nomme explicitement comme le lieu de cette marche.',
        '📘 Le reconditionnement, que le cours appelle aussi circular computing : vérifier la fonctionnalité, faire l’inventaire des éléments matériels, nettoyer les composants et les données, réaliser les réparations nécessaires.',
        'Le don et la revente interne : un équipement qui change de service change de propriétaire.',
        'La seconde vie d’un composant dans sa fonction d’origine — une batterie de vélo devenue batterie de vélo ailleurs, pas devenue lingot de lithium.',
        'Le parc de prêt ou de location, où l’objet sert successivement à plusieurs personnes.',
        'L’effacement des données avant toute remise en circulation : c’est le point où circularité et protection des données se rejoignent.',
      ],
      exemple:
        'Au terme des 12 mois du pilote, les 40 vélos d’Atelier Léman ne partent pas à la casse : révision, remplacement des pièces d’usure, effacement des données de l’application de suivi, puis remise en location chez une autre entreprise ou revente en occasion garantie. Même fonction, nouveau propriétaire ou nouvel utilisateur : c’est bien la marche 2 — et le passage par l’atelier de reconditionnement fait vivre les mécaniciens de Plainpalais.',
      piege:
        'Appeler « réutilisation » le fait de transformer l’objet en autre chose — une batterie usée devenue lampe de jardin, un cadre devenu mobilier. La fonction a changé : on est dans le recyclage ou dans le bricolage, pas dans la marche 2.',
      reflexe:
        'Vérifie les deux conditions à voix haute : « même fonction, autre propriétaire ». Si l’une des deux manque, ce n’est pas de la réutilisation.',
      notions: ['reconditionnement', 'trois-r', 'economie-circulaire', 'protection-donnees'],
    },
    {
      id: 'recycler',
      libelle: '3. Recycler — le dernier recours',
      cestQuoi:
        '📘 Le cours définit le recyclage par des gestes, et ces gestes sont tous destructeurs : le démontage, la fragmentation, le désassemblage ou la séparation des éléments d’un produit jeté, puis la conversion en matériaux pour un autre produit ou un autre processus. Le mot important de la définition est « jeté » : à ce stade, il n’y a plus de produit, il n’y a plus que de la matière.',
      question:
        'Que reste-t-il à récupérer comme matière, une fois qu’il n’y a plus de produit — et à quel coût énergétique ?',
      quoiMettre: [
        'La filière réellement utilisée, nommée : pour les équipements électriques et électroniques, ce sont les filières DEEE.',
        'Le taux de recyclage réel du flux, pas le taux affiché sur l’emballage — « recyclable » décrit une possibilité, « recyclé » décrit un fait.',
        'Ce que le recyclage détruit : toute la valeur ajoutée de la fabrication, c’est-à-dire l’énergie, les heures de travail et l’assemblage.',
        'Ce qu’il coûte : la collecte, le transport, le broyage et la séparation sont eux-mêmes consommateurs d’énergie.',
        'Ce qu’il ne récupère pas : la plupart des métaux rares se dissipent, mélangés ; on récupère rarement 100 % d’une matière.',
        'Qui le fait et qui le paie : l’entreprise, une filière collective, ou personne.',
      ],
      exemple:
        'Les batteries lithium-ion d’Atelier Léman partent, quand elles partent, dans une filière de recyclage. On y récupère une partie du lithium, du cobalt et du cuivre. Ce qu’on ne récupère jamais, c’est la batterie : les heures d’assemblage, la mise en forme des cellules, le transport depuis l’Asie sont perdus. D’où l’ordre : mieux vaut une batterie qui dure huit ans qu’une batterie bien recyclée au bout de trois.',
      piege:
        '« C’est recyclable, donc c’est durable. » L’argument fait passer la dernière marche pour la première et sert de couverture à un modèle de volume inchangé — c’est la frontière du greenwashing.',
      reflexe:
        'Deux questions à poser systématiquement : quel est le taux réellement recyclé, et qu’a-t-on tenté avant ? Sans réponse aux deux, l’argument du recyclage ne tient pas.',
      notions: ['deee', 'trois-r', 'cycle-de-vie', 'greenwashing'],
    },
    {
      id: 'elimination',
      libelle: 'Ce qui reste : incinération et mise en décharge',
      cestQuoi:
        '📘 La dernière étape de l’économie linéaire, telle que le cours la nomme : « incinération et mise en décharge ». Le produit devient un déchet définitif. Ce n’est pas un quatrième R et ce n’est pas une option qu’on choisit : c’est ce qui reste quand les trois marches n’ont pas absorbé le flux. La circularité, dit le cours, supprime cette fin.',
      question:
        'Une fois les trois marches passées, combien reste-t-il — et qui supporte ce qui reste ?',
      quoiMettre: [
        'Le volume résiduel, en valeur absolue et par an : le tonnage qui sort, pas le pourcentage qui a été évité.',
        'Ce qui part en incinération, et ce qui part en décharge : ce ne sont pas les mêmes impacts.',
        'Ce qui échappe à toute filière : exporté, non tracé, abandonné chez le client. C’est presque toujours le plus gros poste et le moins documenté.',
        'Qui paie : la collectivité, les riverains, les générations futures. Un coût réel supporté par un tiers et absent des comptes, c’est la définition même d’une externalité négative.',
        'Le propriétaire de l’objet au moment où il devient déchet — c’est lui qui a, ou n’a pas, intérêt à ce que la fin de vie soit organisée.',
      ],
      exemple:
        'Chiffre illustratif : Atelier Léman met en circulation environ 240 batteries par an et n’en reprend aucune. Elle ne sait pas où elles finissent. Sur son bilan, la ligne n’existe pas ; dans la réalité, elle existe et quelqu’un la paie. Tant que la vente transfère la propriété au client, l’atelier n’a aucune raison économique de s’en occuper — c’est précisément ce que l’abonnement renverse.',
      piege:
        'S’arrêter au recyclage et ne jamais regarder le reste. Une réponse qui décrit trois marches et s’arrête laisse croire que le flux a été entièrement traité, ce qui n’arrive jamais.',
      reflexe:
        'Termine toujours par une phrase de reste : « après les trois marches, il reste tant, et c’est untel qui le supporte ». C’est la phrase qui fait le lien avec les externalités négatives.',
      notions: ['economie-lineaire', 'deee', 'externalite-negative', 'economie-circulaire'],
    },
    {
      id: 'test-proprietaire',
      libelle: 'Le test du propriétaire',
      cestQuoi:
        '🔎 Une question unique qui départage la marche 1 et la marche 2, là où se concentre l’erreur d’examen. Elle découle directement de la définition du cours, qui exige pour la réutilisation « des personnes autres que les propriétaires initiaux » : c’est donc le changement de propriétaire, et non le geste technique, qui fait la frontière.',
      question: 'L’objet change-t-il de propriétaire ?',
      quoiMettre: [
        'Non, et il garde sa fonction → marche 1, réduire. La réparation, l’entretien, la mise à jour, le prolongement d’usage sont ici.',
        'Oui, et il garde sa fonction → marche 2, réutiliser. L’occasion, le troc, le don, la revente reconditionnée sont ici.',
        'Ni l’un ni l’autre, parce que l’objet n’existe plus en tant qu’objet → marche 3, recycler.',
        'Le cas limite du reconditionnement : il y a bien réparation, mais il y a aussi changement de propriétaire — donc marche 2, malgré le geste de réparation.',
        'Le cas limite du parc partagé ou de l’abonnement : l’objet ne change jamais de propriétaire, il change d’utilisateur — donc marche 1, et c’est ce qui rend ce modèle si efficace.',
      ],
      exemple:
        'Trois situations chez Atelier Léman, trois marches différentes. Un client apporte son vélo pour un changement de chaîne : marche 1, il repart avec son vélo. L’atelier revend un vélo repris, révisé et garanti : marche 2, le vélo a changé de mains. Un cadre fissuré part au broyage pour récupérer l’aluminium : marche 3. Le geste « réparer » apparaît dans les deux premières — ce n’est donc pas lui qui décide.',
      piege:
        'Classer selon le geste visible — on a réparé, donc c’est de la réutilisation — au lieu de classer selon le propriétaire. Le geste se retrouve sur plusieurs marches, le propriétaire non.',
      reflexe:
        'Une seule question, posée avant de classer quoi que ce soit : qui possède l’objet après l’opération ? La réponse donne la marche sans discussion.',
      notions: ['trois-r', 'reconditionnement', 'economie-fonctionnalite'],
    },
    {
      id: 'pente',
      libelle: 'Ce qu’on perd en descendant d’une marche',
      cestQuoi:
        '🔎 La raison d’être de l’ordre. Trois choses varient en descendant l’échelle : la valeur conservée baisse, l’énergie dépensée monte, et la boucle s’allonge — c’est-à-dire qu’elle s’éloigne de l’usage. Sans cette pente, les 3R ne seraient qu’une liste de trois verbes interchangeables.',
      question:
        'Qu’est-ce que je détruis exactement en passant à la marche du dessous — et est-ce que j’ai vraiment épuisé celle du dessus ?',
      quoiMettre: [
        'Marche 1 : 100 % de l’impact évité, parce que l’objet supplémentaire n’existe pas. Rien ne fait mieux.',
        'Marche 2 : l’objet garde sa forme, sa fonction et la valeur ajoutée de sa fabrication ; seul le transport et la remise en état coûtent.',
        'Marche 3 : l’objet est détruit, on ne récupère que la matière, et la récupération elle-même consomme de l’énergie.',
        '📘 La longueur de la boucle, telle que le cours la décrit : plus la boucle est courte — partage, réutilisation — plus elle est proche de l’usage, plus elle préserve la valeur et consomme peu ; plus elle est longue — collecte et recyclage — plus elle détruit la valeur ajoutée et coûte en énergie.',
        'Les trois justifications de l’ordre, à savoir citer : le texte du cours « puis enfin seulement de recyclage » ; la cible de l’ODD 12 qui fait passer la prévention et la réduction avant tout le reste ; et la logique de conservation de la valeur.',
      ],
      exemple:
        'Chiffres illustratifs chez Atelier Léman. Un vélo réparé pour 180 CHF évite la fabrication d’un vélo qui coûte 1 400 CHF à produire : marche 1. Le même vélo revendu d’occasion après révision conserve encore l’essentiel de cette valeur : marche 2. Broyé, il rend quelques dizaines de francs de métal : marche 3. La même matière, trois valeurs, dans l’ordre du schéma.',
      piege:
        'Présenter les 3R comme trois options équivalentes entre lesquelles une entreprise choisirait selon ses moyens. Ce sont trois marches, et on ne descend qu’après avoir épuisé celle du dessus.',
      reflexe:
        'Emploie le mot « hiérarchie » dès la première phrase, et justifie-le par la valeur conservée. Un candidat qui dit « les trois piliers du recyclage » a déjà perdu le point.',
      notions: ['trois-r', 'economie-circulaire', 'odd-12'],
    },
    {
      id: 'parallele',
      libelle: 'La même échelle, ailleurs dans le cours',
      cestQuoi:
        '🔎 La structure des 3R n’est pas propre aux déchets : la même échelle de priorité revient trois fois dans le cours, sous trois vocabulaires. À chaque fois, l’étage du haut agit sur le besoin, l’étage du milieu sur le moyen, l’étage du bas sur la technique. Savoir le dire fait passer une réponse de « je récite un schéma » à « j’ai compris la logique du cours ».',
      question:
        'De quel étage parle-t-on : du besoin lui-même, du moyen de le satisfaire, ou de l’optimisation technique du moyen déjà choisi ?',
      quoiMettre: [
        'Les 3R : réduire, puis réutiliser, puis recycler.',
        '📘 La sobriété numérique, mémo Q-T-A : questionner le besoin, puis transférer vers un moyen moins impactant, puis améliorer techniquement.',
        'Les achats responsables : acheter moins, puis acheter mieux, puis utiliser mieux et plus longtemps.',
        '📘 La cible de l’ODD 12, qui range dans le même sens : prévention et réduction d’abord.',
        '🔎 Le point commun, à dire en une phrase : agir sur le besoin avant d’agir sur la technique.',
        '📘 L’ordre inverse, celui qu’on pratique spontanément et qui ne marche pas : améliorer, puis transférer, puis questionner — on optimise d’abord, on se demande en dernier si c’était utile.',
      ],
      exemple:
        'Atelier Léman veut réduire l’empreinte de sa flotte de vélos de démonstration. Réflexe technique : acheter des vélos plus légers, mieux notés. Réflexe de l’échelle : d’abord se demander combien de vélos de démonstration sont réellement utilisés chaque semaine — la réponse, quatre sur onze, supprime sept achats avant même de comparer les modèles. La marche 1 a résolu le problème que la marche 3 aurait seulement optimisé.',
      piege:
        'Traiter ces trois échelles comme trois listes indépendantes à mémoriser séparément, et rater le fait qu’elles disent la même chose — ce qui fait perdre un argument fort et triple le travail de révision.',
      reflexe:
        'Retiens une seule ligne : questionner / réduire / acheter moins, puis transférer / réutiliser / acheter mieux, puis améliorer / recycler / utiliser plus longtemps.',
      notions: ['sobriete-numerique', 'achats-it-responsables', 'odd-12', 'trois-r'],
    },
  ],

  methode: [
    {
      titre: '1. Nommer le flux, en absolu et par an',
      detail:
        'Avant de citer le moindre verbe, écris ce qui devient déchet : quoi, combien, sur quelle période. « Environ 240 batteries par an » est une base de travail ; « nos déchets » n’en est pas une. Les trois marches se remplissent ensuite en face de ce flux, jamais dans le vide.',
      aEviter:
        'Raisonner en pourcentage ou par unité vendue. Un impact unitaire qui baisse pendant que les volumes montent laisse le flux intact.',
    },
    {
      titre: '2. Attaquer par la marche 1, et l’épuiser',
      detail:
        'Cherche tout ce qui permet de ne pas produire ce déchet : réparer, entretenir, prolonger, mutualiser, moins emballer, et surtout questionner le besoin. Écris trois actions ici avant de descendre. C’est la marche la plus rentable et c’est celle que tout le monde saute.',
      aEviter:
        'Passer directement au recyclage parce que c’est la marche la plus facile à nommer. Le correcteur voit immédiatement que la hiérarchie n’a pas été comprise.',
    },
    {
      titre: '3. Ne descendre à la marche 2 que pour le reste',
      detail:
        'Prends ce que la marche 1 n’a pas absorbé et cherche un autre utilisateur pour la même fonction : occasion, don, revente reconditionnée, parc de prêt. Pense au passage obligé par le reconditionnement, nettoyage des données compris, quand il s’agit d’équipements numériques.',
      aEviter:
        'Faire remonter en marche 2 des actions qui relèvent de la marche 1 — typiquement la réparation — ce qui gonfle artificiellement la deuxième et vide la première.',
    },
    {
      titre: '4. Recycler en dernier, en disant ce que ça détruit',
      detail:
        'Nomme la filière, donne le taux réellement recyclé si tu l’as, et ajoute la phrase qui montre que tu as compris l’ordre : le recyclage récupère la matière et perd la valeur ajoutée de la fabrication. Un recyclage bien décrit rapporte des points ; un recyclage cité en premier en fait perdre.',
      aEviter:
        'Employer « recyclable » comme s’il voulait dire « recyclé ». Le premier décrit une possibilité, le second un fait mesuré.',
    },
    {
      titre: '5. Écrire la ligne du reste',
      detail:
        'Après les trois marches, il reste toujours quelque chose. Écris combien, où ça part — incinération, décharge, filière inconnue — et qui le supporte. Cette ligne transforme un exercice de vocabulaire en analyse d’externalité négative.',
      aEviter:
        'Conclure que « tout est traité ». Aucune entreprise ne referme complètement sa boucle, et prétendre le contraire décrédibilise le reste de la réponse.',
    },
    {
      titre: '6. Vérifier chaque classement au test du propriétaire',
      detail:
        'Relis ta liste et, pour chaque action, pose la question : l’objet change-t-il de propriétaire ? Non et même fonction → marche 1. Oui et même fonction → marche 2. Plus d’objet → marche 3. Deux ou trois corrections tombent presque toujours à ce moment-là.',
      aEviter:
        'Classer d’après le geste — réparer, remettre en état — au lieu du propriétaire. Le même geste apparaît sur deux marches.',
    },
    {
      titre: '7. Remonter en amont, puis poser un indicateur',
      detail:
        'Termine par les deux décisions qui déplacent durablement le flux : la conception, qui décide si les marches sont praticables, et le modèle de revenus, qui décide qui reste propriétaire — donc qui a intérêt à ce que l’objet dure. Puis un indicateur en valeur absolue : durée de vie moyenne, nombre d’objets remis en circulation, tonnage résiduel.',
      aEviter:
        'Un indicateur en pourcentage — « 80 % de nos déchets sont recyclés » — qui peut progresser pendant que le tonnage total augmente.',
    },
  ],

  liens: [
    {
      vers: 'agenda-2030',
      nature: 'precise',
      explication:
        'Les 3R sont la traduction opérationnelle de l’ODD 12 : l’objectif dit « réduire considérablement la production de déchets », les 3R disent dans quel ordre s’y prendre — et c’est l’ordre qui fait tout le travail.',
    },
    {
      vers: 'sobriete-qta',
      nature: 'partage',
      explication:
        'Questionner, transférer, améliorer, c’est exactement réduire, réutiliser, recycler transposé au numérique : une même échelle où l’on agit sur le besoin avant d’agir sur la technique.',
    },
    {
      vers: 'achats-durables',
      nature: 'alimente',
      explication:
        'Un achat responsable applique les 3R avant même la commande : acheter moins relève de la marche 1, acheter reconditionné de la marche 2, et le coût du cycle de vie chiffre ce que la marche 3 ne rendra jamais.',
    },
    {
      vers: 'bmc-durable',
      nature: 'alimente',
      explication:
        'Les 3R ne changent rien tant qu’ils ne descendent pas dans les blocs : la marche 1 se joue dans les activités clés et les revenus, la marche 2 dans les partenaires et les ressources, le reste dans la structure de coûts.',
    },
    {
      vers: 'effet-rebond',
      nature: 'soppose',
      explication:
        'Un recyclage performant peut nourrir l’effet rebond : « c’est recyclé, donc je peux en consommer plus » — le gain unitaire est réel, le flux total augmente, et seule la marche 1 y résiste.',
    },
  ],

  pieges: [
    {
      titre: 'Commencer par recycler',
      explication:
        'C’est l’erreur que le cours signale nommément : « c’est recyclable donc c’est durable » est faux, l’ordre compte et le recyclage est le dernier recours. Une entreprise qui recycle beaucoup mais produit toujours plus reste dans une logique linéaire — elle a mieux organisé la sortie, pas réduit l’entrée.',
      reflexe:
        'Ouvre toujours par la marche 1, même si tu n’as qu’une action à y mettre. Et dis le mot « hiérarchie » avant de citer les trois verbes.',
    },
    {
      titre: 'Classer la réparation dans « Réutiliser »',
      explication:
        'Le cours range la réparation dans « Réduire » : réparer, c’est éviter d’acheter du neuf, donc éviter de produire un déchet. La réutilisation exige un changement de propriétaire, ce que la réparation ne comporte pas.',
      reflexe:
        'Le test du propriétaire, en une question : l’objet change-t-il de mains ? Non → réduire. Oui → réutiliser.',
    },
    {
      titre: 'Faire des 3R trois options équivalentes',
      explication:
        'Dit comme « les trois piliers », le modèle perd tout son contenu : ce qui se note, ce n’est pas la liste des trois verbes, que tout le monde connaît, c’est la justification de leur ordre par la valeur conservée et par le coût énergétique.',
      reflexe:
        'Accompagne chaque verbe de ce qu’il préserve : 100 % évité, la forme et la valeur, la matière seule. L’ordre devient alors évident à l’oreille du correcteur.',
    },
    {
      titre: 'Confondre les 3R et l’économie circulaire',
      explication:
        'Les 3R sont la hiérarchie de traitement d’un flux ; l’économie circulaire est plus large — le cours y ajoute l’écoconception, le partage et le retraitement, et un second cycle, biologique, à côté du cycle technique.',
      reflexe:
        'Formule d’articulation : « les 3R me donnent l’ordre de priorité à l’intérieur de l’économie circulaire, ils ne la résument pas ».',
    },
    {
      titre: 'Mesurer en taux plutôt qu’en volume',
      explication:
        'Un taux de recyclage de 80 % est compatible avec un tonnage de déchets en hausse si la production augmente plus vite. Le pourcentage décrit la sortie ; seul le volume absolu décrit le problème.',
      reflexe:
        'Un indicateur de 3R se pose en unités par an : tonnes sortantes, objets remis en circulation, durée de vie moyenne. Jamais en pourcentage seul.',
    },
  ],

  variantes: [
    {
      sujet: 'L’ordre des verbes : les 3R du cours et la cible de l’ODD 12',
      formulations: [
        {
          texte:
            'Réduire, puis réutiliser, puis recycler — « Tout cela dépend des efforts de réduction et de réutilisation, puis enfin seulement de recyclage ».',
          source: 'définition de l’économie circulaire et des 3R, encyclopédie',
        },
        {
          texte:
            '« D’ici à 2030, réduire considérablement la production de déchets par la prévention, la réduction, le recyclage et la réutilisation. »',
          source: 'cible de l’ODD 12, telle que citée par le cours',
        },
      ],
      consigne:
        'Les deux premiers termes concordent — prévention et réduction viennent avant tout — mais les deux derniers sont inversés d’un support à l’autre. Ne corrige pas l’ODD : son énumération n’est pas un classement, alors que la phrase de l’encyclopédie l’est explicitement. À l’oral, dis : « la hiérarchie explicite est celle de l’encyclopédie, réduire puis réutiliser puis enfin seulement recycler ; la cible de l’ODD 12 cite les mêmes leviers dans un ordre d’énumération différent ». Citer les deux formulations montre qu’on a lu les deux supports.',
    },
    {
      sujet: 'Où ranger la réparation',
      formulations: [
        {
          texte:
            'Dans « Réduire » : « Chaque fois que nous faisons réparer un appareil numérique, plutôt que d’en acheter un nouveau, nous réduisons les déchets. »',
          source: 'définition des 3R, encyclopédie',
        },
        {
          texte:
            'Comme boucle distincte, à côté de la réutilisation : « écoconception, partage, réutilisation, réparation, retraitement ».',
          source: 'les cinq leviers du visuel de l’économie circulaire',
        },
      ],
      consigne:
        'Les deux supports ne se contredisent pas, mais ils ne rangent pas la réparation au même endroit : dans la hiérarchie des 3R elle relève de « Réduire », parce qu’elle évite un achat neuf ; dans le visuel des boucles, elle apparaît comme une boucle courte à part entière, distincte de la réutilisation. À l’examen, applique la version 3R — c’est elle qui est interrogée — et signale l’autre d’un mot si l’on te parle des boucles.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman SA — les 3R appliqués au pilote de 40 vélos',
    situation:
      'La direction a retenu l’option d’un pilote : 40 vélos électriques mis à disposition de 6 entreprises genevoises pendant 12 mois, sous forme d’abonnement mobilité tout compris. Le Donut a posé ses conditions, le BMC durable a été réécrit. Reste la question matérielle : qu’advient-il des vélos et des batteries, et dans quel ordre agir ? Les chiffres qui suivent sont illustratifs.',
    deroule: [
      {
        etiquette: 'Le flux, en absolu',
        contenu:
          '40 vélos et 40 batteries engagés sur 12 mois, plus environ 240 batteries par an vendues avec les vélos neufs et jamais reprises. Deux flux distincts, deux traitements différents.',
      },
      {
        etiquette: 'Marche 1 — réduire',
        contenu:
          'Les vélos du pilote ne sont pas vendus : l’atelier en reste propriétaire et les entretient. Un vélo partagé entre trois salariés remplace trois vélos individuels. À quoi s’ajoute le cœur du métier : environ 1 400 réparations toutes marques par an, autant de remplacements évités.',
      },
      {
        etiquette: 'Marche 1 — la décision qui la rend possible',
        contenu:
          'Exiger du fournisseur de batteries un boîtier vissé et des cellules standard, et sécuriser huit ans de pièces détachées. Sans cette clause d’achat, la marche 1 se referme au bout de trois ans.',
      },
      {
        etiquette: 'Marche 2 — réutiliser',
        contenu:
          'À la fin des 12 mois, les 40 vélos passent par le reconditionnement — vérification, pièces d’usure, effacement des données de l’application de suivi — puis repartent chez une autre entreprise ou en occasion garantie. Même fonction, nouveau détenteur : c’est bien la marche 2.',
      },
      {
        etiquette: 'Marche 3 — recycler',
        contenu:
          'Seulement les cadres accidentés et les batteries en fin de vie réelle, orientés vers une filière DEEE identifiée par contrat. Objectif affiché : que cette marche reste la plus petite des trois.',
      },
      {
        etiquette: 'Le reste',
        contenu:
          'Les 240 batteries vendues avec les vélos neufs échappent encore à tout : l’atelier n’en est plus propriétaire, ne les reprend pas, et ne sait pas où elles finissent. C’est l’externalité négative qui subsiste, et elle porte un nom et un nombre.',
      },
      {
        etiquette: 'Le levier qui déplace tout',
        contenu:
          'Rester propriétaire. Dans le modèle de vente, une batterie morte est un problème du client et une occasion de vente ; dans l’abonnement, c’est un coût pour l’atelier — qui a donc intérêt à ce qu’elle dure et à la reprendre.',
      },
      {
        etiquette: 'Les indicateurs',
        contenu:
          'Durée de vie moyenne réelle d’un vélo du parc, en années ; nombre de vélos remis en circulation après reconditionnement ; nombre de batteries reprises sur le nombre mis en circulation. Trois compteurs en valeur absolue, aucun pourcentage isolé.',
      },
    ],
    conclusion:
      'Les 3R n’ont pas ajouté une action au dossier : ils ont classé celles qui existaient déjà et rendu visible la seule qui manquait. La réparation, jusque-là traitée comme un service annexe, devient la marche la plus haute et le meilleur argument de l’entreprise ; le recyclage des batteries, souvent mis en avant, redescend à sa place réelle ; et la ligne du reste — 240 batteries non reprises — devient l’objet d’une décision de business model, la reprise, plutôt que d’une bonne intention.',
  },

  phraseOral:
    'Chez Atelier Léman, l’atelier de réparation n’est pas un service annexe : c’est le premier R. Un vélo réparé est un vélo qui n’est pas fabriqué — cent pour cent de l’impact évité — là où le recyclage ne récupère que la matière et perd toute la valeur ajoutée de la fabrication. Et je place bien la réparation dans « réduire », pas dans « réutiliser », parce que le vélo ne change pas de propriétaire : c’est ce critère-là, et pas le geste, qui fixe la marche. C’est aussi pour ça que le recyclage des batteries, même impeccable, arrive en dernier.',

  aRetenir: [
    { cle: 'L’ordre', valeur: '📘 Réduire > Réutiliser > Recycler — « puis enfin seulement de recyclage »' },
    { cle: 'Ce que chaque marche préserve', valeur: '100 % de l’impact évité · la forme et la valeur du produit · la matière seule' },
    { cle: 'Réduire 📘', valeur: 'Réparer, limiter les emballages, en produire des réutilisables, mener des politiques de réduction' },
    { cle: 'Réutiliser 📘', valeur: 'Même fonction, mais « par des personnes autres que les propriétaires initiaux » — occasion, troc, reconditionné' },
    { cle: 'Recycler 📘', valeur: 'Démontage, fragmentation, désassemblage, séparation, conversion en matériaux' },
    { cle: 'La frontière 1 / 2', valeur: 'Le test du propriétaire : l’objet change-t-il de mains ?' },
    { cle: 'En amont', valeur: 'L’éco-conception : ce n’est pas une boucle, elle rend les boucles possibles' },
    { cle: 'En aval', valeur: '📘 Incinération et mise en décharge — la fin de l’économie linéaire, que la circularité supprime' },
    { cle: 'La même échelle ailleurs', valeur: 'Q-T-A de la sobriété · acheter moins / mieux / plus longtemps des achats responsables' },
    { cle: 'L’ODD de rattachement', valeur: '📘 ODD 12 — consommation et production responsables' },
    { cle: 'La faute type', valeur: '« C’est recyclable donc c’est durable » — l’ordre est inversé' },
    { cle: 'Hors cours 📚', valeur: 'On rencontre des versions à 5R ou 9R (refuser, repenser, réparer…) : le cours en retient trois, s’en tenir là' },
  ],

  notions: [
    'trois-r',
    'economie-circulaire',
    'economie-lineaire',
    'eco-conception',
    'reconditionnement',
    'deee',
    'obsolescence',
    'cycle-de-vie',
    'odd-12',
    'sobriete-numerique',
    'economie-fonctionnalite',
    'achats-it-responsables',
    'externalite-negative',
    'greenwashing',
  ],
}
