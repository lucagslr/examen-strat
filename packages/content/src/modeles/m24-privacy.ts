import type { Modele } from './types'

export const modele: Modele = {
  id: 'privacy',
  numero: 24,
  slug: 'privacy-by-design-default',
  nom: 'Privacy by design vs privacy by default',
  sousTitre: 'Conception vs réglages initiaux',
  famille: 'numerique',
  etape: 'transverse',

  question:
    'La protection des données de ce service a-t-elle été décidée au moment de le concevoir — et est-elle déjà active le jour où la première personne s’en sert, sans qu’elle ait eu à toucher un seul réglage ?',

  enUnePhrase:
    'Ce sont deux exigences distinctes qui portent sur le même service : privacy by design est une exigence de moment — la protection des données est intégrée dès la conception, pas ajoutée après coup ; privacy by default est une exigence d’état — les réglages les plus protecteurs sont actifs d’origine, de sorte que la personne est protégée même si elle ne touche à rien.',

  produit:
    'Deux verdicts séparés sur un même projet numérique : ce qui a été tranché avant la première ligne de code — quelles données, pourquoi, où, qui y accède, combien de temps — et l’état réel de chaque réglage le premier jour. Puis, quand l’une des deux exigences manque, le chiffrage de la rustine qu’il faudra poser à la place.',

  quandUtiliser: [
    'Dès qu’un cas fait apparaître une application, une plateforme, un formulaire, un capteur, un badge, une caméra ou un compte client : il y a traitement de données personnelles, donc les deux exigences s’appliquent, quelle que soit la taille de l’entreprise.',
    'Quand l’énoncé oppose un bénéfice commercial et une donnée — cibler mieux, revendre un fichier, tracer un usage, mesurer une performance. C’est le moment où la question cesse d’être juridique pour devenir un arbitrage de stratégie.',
    'Quand une entreprise annonce un nouveau service numérique et qu’on te demande ce qu’elle aurait dû faire « avant ». La réponse tient dans le mot design : les décisions structurantes se prennent au moment de l’architecture, jamais après le lancement.',
    'Dans le volet technologique de la responsabilité numérique des entreprises (RNE) : c’est l’axe T, celui qui couvre données, cybersécurité, dépendance et gouvernance, et privacy by design / by default est l’outil qui le remplit concrètement.',
    'Au moment d’écrire les recommandations : chaque exigence non tenue fournit une mesure bornée, chiffrable, attribuable — donc défendable au SAF et opposable à un client qui doute.',
  ],

  quandNePasUtiliser: [
    'Pour juger l’empreinte environnementale d’un service numérique : ces deux exigences ne disent rien des terminaux, des data centers ni des réseaux. La minimisation des données a un effet secondaire de sobriété, mais ce n’est pas l’outil qui mesure l’impact.',
    'Comme grille de sécurité informatique. Protéger la vie privée et se défendre d’une cyberattaque se recoupent — moins de données, moins de surface exposée — mais ce sont deux disciplines différentes : la première décide ce qu’on collecte, la seconde protège ce qui a été collecté.',
    'Pour trancher l’accessibilité d’un service : un formulaire parfaitement protecteur peut rester illisible pour une personne malvoyante. Le seul point de contact est le principe de compréhension de la collecte, qui exige un texte réellement compris.',
    'En récitant les deux définitions sans les appliquer. « Privacy by design, c’est dès la conception ; privacy by default, c’est les réglages » est exact, tient en dix secondes, et ne rapporte presque rien si aucune donnée du cas n’est nommée derrière.',
  ],

  schema: {
    h: 910,
    description:
      'Un service qui traite des données se lit selon deux exigences distinctes placées côte à côte — privacy by design à gauche, privacy by default à droite ; chacune se déplie en ce qu’elle impose concrètement, et les deux se rejoignent dans un test unique dont l’issue ouvre soit la rustine posée après coup, soit le double gain de la protection intégrée.',
    noeuds: [
      {
        id: 'service',
        titre: 'UN SERVICE QUI TRAITE DES DONNÉES',
        lignes: ['app, formulaire, capteur, badge…'],
        x: 40,
        y: 40,
        l: 920,
        h: 70,
        forme: 'bande',
        point: 'service',
      },
      {
        id: 'design',
        titre: 'PRIVACY BY DESIGN',
        lignes: ['la protection est décidée', 'DÈS LA CONCEPTION', 'du produit ou du service'],
        x: 40,
        y: 170,
        l: 400,
        h: 140,
        ton: 'accent',
        point: 'design',
      },
      {
        id: 'default',
        titre: 'PRIVACY BY DEFAULT',
        lignes: ['les réglages protecteurs sont', 'ACTIFS PAR DÉFAUT', 'le jour de la mise en service'],
        x: 560,
        y: 170,
        l: 400,
        h: 140,
        ton: 'accent',
        point: 'default',
      },
      {
        id: 'minimisation',
        titre: 'CE QUE LA CONCEPTION TRANCHE',
        lignes: [
          'quelles données — et pourquoi',
          'où elles vivent — qui y accède',
          'combien de temps on les garde',
          'chiffrement, pseudonymisation',
        ],
        x: 40,
        y: 370,
        l: 400,
        h: 170,
        point: 'minimisation',
      },
      {
        id: 'reglages',
        titre: 'CE QUE L’UTILISATEUR TROUVE',
        lignes: [
          'aucune case pré-cochée',
          'partage et géoloc désactivés',
          'consentement demandé (opt-in)',
          'refuser aussi simple qu’accepter',
        ],
        x: 560,
        y: 370,
        l: 400,
        h: 170,
        point: 'reglages',
      },
      {
        id: 'test',
        titre: 'LE TEST QUI TRANCHE',
        lignes: ['protégé même sans rien régler ?'],
        x: 40,
        y: 600,
        l: 920,
        h: 70,
        forme: 'bande',
        ton: 'alerte',
        point: 'test',
      },
      {
        id: 'rustine',
        titre: 'LA RUSTINE',
        lignes: ['bandeau, politique illisible,', 'option protectrice cachée —', 'légal peut-être, coûteux ensuite'],
        x: 40,
        y: 730,
        l: 400,
        h: 140,
        ton: 'danger',
        point: 'rustine',
      },
      {
        id: 'gain',
        titre: 'LE DOUBLE GAIN',
        lignes: ['moins de données collectées :', 'moins de risque, moins de', 'stockage — et de la confiance'],
        x: 560,
        y: 730,
        l: 400,
        h: 140,
        ton: 'positif',
        point: 'gain',
      },
    ],
    liens: [
      { de: 'service', vers: 'design', depuis: 'bas', arrive: 'haut' },
      { de: 'service', vers: 'default', depuis: 'bas', arrive: 'haut' },
      { de: 'design', vers: 'default', depuis: 'droite', arrive: 'gauche', trait: 'pointille', sansFleche: true },
      { de: 'design', vers: 'minimisation', depuis: 'bas', arrive: 'haut' },
      { de: 'default', vers: 'reglages', depuis: 'bas', arrive: 'haut' },
      { de: 'minimisation', vers: 'test', depuis: 'bas', arrive: 'haut' },
      { de: 'reglages', vers: 'test', depuis: 'bas', arrive: 'haut' },
      { de: 'test', vers: 'rustine', depuis: 'bas', arrive: 'haut', libelle: 'une des deux manque', ton: 'danger' },
      { de: 'test', vers: 'gain', depuis: 'bas', arrive: 'haut', libelle: 'les deux tenues', ton: 'positif' },
    ],
    note:
      'Deux mots suffisent à ne plus les confondre : by design répond à « quand ? », by default répond à « dans quel état ? ». Le premier se joue avant la première ligne de code, le second se lit sur le premier écran.',
  },

  points: [
    {
      id: 'service',
      libelle: 'Le déclencheur — il y a un traitement de données',
      cestQuoi:
        '📘 Un traitement de données, c’est toute opération faite sur une donnée personnelle : la collecter, l’enregistrer, la consulter, la conserver, la transmettre, l’effacer. Et une donnée personnelle, c’est toute information qui se rapporte à une personne identifiée ou identifiable — pas seulement son nom : un numéro de vélo associé à un salarié, une trace de trajet, une adresse IP suffisent. Dès qu’un service en produit, les deux exigences du schéma s’appliquent, quelle que soit la taille de l’entreprise et même sans intention commerciale.',
      question:
        'Quelles données personnelles ce service fait-il naître, à quel moment précis du parcours — et lesquelles apparaissent sans que personne les ait saisies ?',
      quoiMettre: [
        'Les données déclarées, celles que la personne tape elle-même : nom, adresse, e-mail, téléphone, moyen de paiement.',
        'Les données produites par l’usage, qu’elle ne saisit jamais : horaires, trajets, géolocalisation, fréquence, durée, pannes signalées. Ce sont presque toujours les plus sensibles, et les plus oubliées.',
        'Les données techniques : identifiant d’appareil, adresse IP, cookies, journaux de connexion. Elles existent par défaut, sans décision de personne.',
        'Les données déduites, que l’entreprise ne collecte pas mais fabrique : habitudes de déplacement, horaires de travail, état de forme physique.',
        'La liste des accès : qui, dans l’entreprise et hors d’elle, peut voir quoi — salariés, prestataire informatique, hébergeur, et surtout le client entreprise qui paie le service.',
        '📘 Le cadre applicable : la LPD, loi fédérale suisse sur la protection des données, en vigueur dans sa version révisée depuis le 1ᵉʳ septembre 2023 ; le RGPD dès qu’on traite des données de résidents de l’Union européenne ; et à Genève, l’article 21A de la Constitution cantonale sur le droit à l’intégrité numérique.',
      ],
      exemple:
        'L’application du pilote d’Atelier Léman ferait naître quatre familles de données d’un coup : le compte du salarié qui réserve (nom, e-mail professionnel), la trace GPS du vélo pendant la course, l’identifiant du téléphone qui a déverrouillé le cadenas, et — sans que personne l’ait voulu — l’heure d’arrivée au travail de chaque utilisateur, déductible de la fin de course. La quatrième n’est écrite nulle part dans le cahier des charges, et c’est la plus problématique. Exemple illustratif.',
      piege:
        'Croire que le sujet ne concerne que « les données sensibles » ou « les grandes plateformes ». Un fichier de réparations dans un tableur, avec nom, adresse et numéro de téléphone, est déjà un traitement de données personnelles soumis à la LPD.',
      reflexe:
        'Avant de prononcer le mot privacy, nomme trois données précises du cas, dont au moins une que personne ne saisit. Si tu n’en trouves pas trois, tu n’as pas encore fini de lire l’énoncé.',
      notions: ['protection-donnees', 'integrite-numerique', 'perimetre-numerique'],
    },
    {
      id: 'design',
      libelle: 'PRIVACY BY DESIGN — l’exigence de moment',
      cestQuoi:
        '📘 « La protection de la vie privée est intégrée dès la conception du produit ou du service, pas ajoutée après coup. » C’est une exigence sur le calendrier du projet : les décisions qui protègent — ne pas collecter telle donnée, la pseudonymiser, l’effacer au bout de six mois, la garder en Suisse — se prennent au moment où l’on dessine l’architecture, pas au moment où l’on répond à une plainte. Le mot design ne veut pas dire graphisme : il veut dire conception.',
      question:
        'À quel moment la question de la protection a-t-elle été posée : avant la première ligne de code, ou après la première plainte ?',
      quoiMettre: [
        'Les décisions de renoncement, qui sont le cœur du sujet : quelles données décide-t-on de ne pas collecter, alors qu’on le pourrait techniquement. Une conception protectrice se reconnaît à ce qu’elle a refusé.',
        'La finalité, écrite en une phrase avant le développement : à quoi sert cette collecte. Sans finalité écrite avant, toute donnée devient justifiable après.',
        'La durée de conservation, décidée à la conception et automatisée : une donnée qu’on n’a pas programmé d’effacer ne s’efface jamais.',
        '📘 Les PETs — Privacy Enhancing Technologies, les technologies qui renforcent la confidentialité : chiffrement, anonymisation, pseudonymisation, calcul sécurisé. Ce sont les moyens techniques de l’exigence.',
        '📘 Les bonnes pratiques du Guide RNE genevois qui accompagnent la conception : analyse d’impact avant le lancement, registre des traitements tenu à jour, politique de confidentialité claire, plan de gestion de crise en cas de violation de données.',
        'Un responsable nommé, avec un point de passage obligé : aucun développement ne démarre tant que personne n’a signé l’inventaire des données.',
      ],
      exemple:
        'Chez Atelier Léman, la conception protectrice consisterait à décider, avant de commander l’application : le boîtier GPS est posé sur le vélo et non sur le salarié, et il n’enregistre la position que pendant une course ouverte ; l’entreprise cliente reçoit un kilométrage agrégé, jamais un trajet individuel ; les traces sont effacées automatiquement au bout de 90 jours. Trois décisions prises en une réunion, qui ne coûtent rien tant que le code n’existe pas — et qui deviennent une refonte complète six mois après le lancement.',
      piege:
        'Le confondre avec privacy by default, ou le réduire à une case cochée en fin de projet. Une revue juridique faite trois jours avant la mise en ligne n’est pas du privacy by design : c’est un contrôle, et il arrive trop tard pour changer quoi que ce soit d’architectural.',
      reflexe:
        '📘 Le parallèle avec l’accessibilité règle la question : privacy by design ↔ accessibilité intégrée dès la conception. Dans les deux cas, corriger après coup coûte plusieurs fois le prix et donne un résultat inférieur. Cite ce parallèle à l’oral : il montre que tu as vu le principe transversal derrière les deux chapitres.',
      notions: ['privacy-by-design', 'pets', 'gouvernance-donnees', 'eco-conception'],
    },
    {
      id: 'default',
      libelle: 'PRIVACY BY DEFAULT — l’exigence d’état',
      cestQuoi:
        '📘 « Par défaut, seules les données strictement nécessaires sont traitées ; les paramètres les plus protecteurs sont activés d’origine. Implique un consentement libre et éclairé. » C’est une exigence sur l’état livré, pas sur le calendrier : le jour de la mise en service, chaque interrupteur du produit est déjà dans sa position la plus protectrice, et c’est à la personne qui veut partager davantage de faire la démarche — jamais l’inverse.',
      question:
        'Si la personne installe le service et ne touche à aucun réglage, dans quel état est-elle : la plus protégée possible, ou la plus exposée ?',
      quoiMettre: [
        'La position d’origine de chaque interrupteur : partage désactivé, géolocalisation désactivée, notifications désactivées, profil non public, statistiques d’usage non transmises.',
        '📘 L’opt-in : la case n’est pas cochée d’avance, la personne consent activement. Et le double opt-in pour les envois commerciaux : une confirmation supplémentaire, par e-mail, qui garantit le consentement et en conserve la preuve.',
        'La symétrie du refus : refuser doit être aussi simple qu’accepter — même nombre de clics, même taille de bouton, même niveau de menu. C’est le critère le plus rapide à vérifier, et le plus souvent violé.',
        'La durée de conservation proposée par défaut : la plus courte des options, jamais la plus longue.',
        'La réversibilité : retirer son consentement doit être aussi facile que de l’avoir donné, et le service doit continuer de fonctionner pour tout ce qui n’en dépend pas.',
        'L’absence de dark patterns — 📘 ces interfaces conçues pour manipuler : cases pré-cochées, bouton « tout accepter » en vert contre « gérer mes choix » en gris pâle, faux compte à rebours, culpabilisation du refus.',
      ],
      exemple:
        'À la première ouverture de l’application du pilote, le salarié d’une des six entreprises devrait trouver : géolocalisation permanente désactivée, partage des statistiques avec l’employeur désactivé, newsletter d’Atelier Léman non cochée, et un bouton « refuser » exactement aussi visible que « accepter ». Et le vélo se déverrouille quand même. C’est cela, la définition opérationnelle du by default : le service fonctionne entièrement dans son état le plus protecteur.',
      piege:
        'Se défendre par « nous laissons le choix à l’utilisateur ». Le réglage par défaut est déjà un choix — celui de l’entreprise — et la très grande majorité des gens ne modifient jamais un paramètre livré. Laisser une case pré-cochée en disant qu’on peut la décocher, c’est décider à la place de la personne tout en lui en laissant la responsabilité.',
      reflexe:
        'Compte les clics : combien pour accepter, combien pour refuser. Si les deux nombres diffèrent, l’exigence n’est pas tenue — et tu as un fait vérifiable à citer plutôt qu’une opinion.',
      notions: ['privacy-by-default', 'opt-in', 'dark-patterns', 'minimisation-donnees'],
    },
    {
      id: 'minimisation',
      libelle: 'Ce que la conception tranche — les quatre décisions',
      cestQuoi:
        'C’est le contenu concret du privacy by design, celui qu’on peut écrire sur un brouillon en dix minutes. Quatre décisions, prises donnée par donnée : quelles données on collecte et pourquoi, où elles sont hébergées, qui y accède, combien de temps on les garde. 🔎 Ces quatre questions sont exactement celles de la gouvernance des données, et elles se rangent toutes sous un seul principe : 📘 la minimisation — ne collecter que les données strictement nécessaires à la finalité.',
      question:
        'Pour chaque donnée de la liste : quelle décision de l’entreprise deviendrait impossible si on ne l’avait pas ?',
      quoiMettre: [
        'La finalité, écrite en une phrase, avant tout le reste : « facturer l’abonnement au kilomètre parcouru ». Une donnée qui ne sert pas cette phrase n’a pas de raison d’être collectée.',
        '📘 Les cinq principes de la collecte, qui tiennent lieu de liste de contrôle : but indiqué lors de la collecte, transparence du traitement, minimisation, compréhension de la collecte, données correctes. Le quatrième est le plus exigeant — il ne suffit pas d’informer, il faut que la personne comprenne.',
        'L’hébergement et la localisation : les données restent-elles en Suisse, partent-elles chez un fournisseur de cloud américain. 📘 L’article 21A de la Constitution genevoise pose que les données dont l’État est responsable ne peuvent être traitées à l’étranger que si un niveau de protection adéquat est assuré, et engage le canton en faveur de la souveraineté numérique.',
        'La liste nominative des accès, y compris externes : le prestataire qui maintient l’application voit-il les données réelles, ou un jeu de test.',
        'La durée de conservation, avec une suppression automatique programmée — pas un rappel dans un agenda.',
        '📘 Les PETs appliqués donnée par donnée : chiffrer ce qui transite, pseudonymiser ce qui sert aux statistiques — remplacer le nom par un identifiant —, anonymiser ce qui sert aux moyennes, c’est-à-dire couper définitivement le lien avec la personne.',
      ],
      exemple:
        'L’inventaire d’Atelier Léman tiendrait en cinq lignes : nom du salarié (finalité : déverrouiller le vélo ; accès : atelier seul ; Suisse ; 12 mois après la fin du contrat), e-mail professionnel (facturation ; comptabilité ; Suisse ; 10 ans, obligation légale), trace GPS (retrouver un vélo volé ; deux mécaniciens ; Suisse ; 90 jours), kilométrage (facturer l’abonnement ; agrégé par entreprise ; Suisse ; durée du contrat), état de la batterie (maintenance prédictive ; atelier ; Suisse ; 24 mois). Une sixième ligne figurait au premier jet — l’heure de fin de course — et aucune finalité ne l’a justifiée : elle a sauté.',
      piege:
        'Collecter « au cas où », parce que la donnée est disponible et qu’elle pourrait servir un jour. C’est l’erreur la plus fréquente et la plus coûteuse : chaque donnée gardée sans usage est un risque cyber, un coût de stockage et une charge de conformité, pour un bénéfice qui n’arrive jamais.',
      reflexe:
        'Le test de la ligne barrée : barre une ligne de l’inventaire et demande-toi quelle décision de l’entreprise devient impossible. Si aucune ne l’est, la ligne saute. Ce test se fait à voix haute en trente secondes, et il tranche mieux que tous les arguments.',
      notions: [
        'minimisation-donnees',
        'gouvernance-donnees',
        'cinq-principes-collecte',
        'souverainete-numerique',
        'pets',
      ],
    },
    {
      id: 'reglages',
      libelle: 'Ce que l’utilisateur trouve — l’état livré, écran par écran',
      cestQuoi:
        'C’est le contenu concret du privacy by default : l’inventaire des interrupteurs du produit, avec leur position au premier jour. À la différence de la case précédente, qui se vérifie sur des documents de conception, celle-ci ne se vérifie que d’une seule façon — en ouvrant le service avec un compte neuf et en regardant. C’est ce qui la rend redoutable : elle ne se déclare pas, elle s’observe.',
      question:
        'Que se passe-t-il, concrètement, pour la personne qui n’ouvre jamais les réglages — c’est-à-dire pour la quasi-totalité des utilisateurs ?',
      quoiMettre: [
        'La liste des interrupteurs et leur position d’origine, écrite noir sur blanc : partage — désactivé ; géolocalisation — désactivée ; profil — privé ; statistiques — non transmises.',
        'Le bandeau de cookies : peut-on refuser en un clic depuis le premier écran, ou faut-il passer par « gérer mes préférences » puis décocher onze cases.',
        'Le texte d’information, jugé sur sa compréhension et non sur sa longueur : 🔎 une politique de confidentialité de quatorze pages en petits caractères ne satisfait pas le principe de compréhension de la collecte, même si elle est juridiquement complète.',
        'Le moment où le consentement est demandé : avant la collecte, pas après. Un bandeau qui apparaît alors que les traceurs se sont déjà déclenchés ne consent à rien.',
        'La procédure pour revenir en arrière : où se retire un consentement, en combien de clics, et ce que la personne perd en le retirant.',
        'La présence de dark patterns : couleurs asymétriques entre accepter et refuser, formulation culpabilisante, option protectrice enfouie à trois niveaux de menu.',
      ],
      exemple:
        'Test à faire avec un téléphone neuf sur l’application du pilote : compte créé en quarante secondes, écran de consentement à deux boutons de même taille, aucune case pré-cochée, géolocalisation demandée seulement au moment de déverrouiller un vélo et non à l’installation, et un lien « mes données » visible depuis l’accueil pour tout exporter ou effacer. Si un seul de ces cinq points tombe, le verdict by default est négatif — même si la conception, elle, était impeccable.',
      piege:
        'Confondre « informé » et « protégé ». Un bandeau parfaitement rédigé qui annonce que l’application partage la position en permanence informe très bien, et ne protège rien. L’information est une obligation ; l’état protecteur par défaut en est une autre, et l’une ne remplace jamais l’autre.',
      reflexe:
        'Ouvre le service avec un compte neuf et note la position de chaque interrupteur avant d’avoir touché à quoi que ce soit. Cette liste écrite est la preuve ; tout le reste est déclaratif.',
      notions: ['privacy-by-default', 'opt-in', 'dark-patterns', 'cinq-principes-collecte'],
    },
    {
      id: 'test',
      libelle: 'Le test qui tranche — deux questions, jamais une seule',
      cestQuoi:
        '🔎 C’est le point de jonction du schéma, et la façon de vérifier qu’aucune des deux exigences n’a été oubliée. On pose deux questions dans cet ordre : « quand la protection a-t-elle été décidée ? » puis « dans quel état le produit est-il livré ? ». Les deux réponses sont indépendantes : un service peut être excellemment conçu et livré grand ouvert, ou impeccablement réglé sur une architecture qui collecte tout.',
      question:
        'Si je prends une personne qui ne lit rien et ne règle rien, quelles données sortent d’elle dans la première heure d’utilisation — et lesquelles n’auraient jamais dû exister ?',
      quoiMettre: [
        'Le parcours exact sur lequel porte le test, borné : de l’installation jusqu’à la fin de la première utilisation réelle. Pas « l’application » : un parcours.',
        'La liste des données émises sans aucune action de la personne. Chacune est soit justifiée par la finalité, soit un manquement.',
        'Deux chiffres immédiatement citables : le nombre de cases pré-cochées, et l’écart de clics entre accepter et refuser.',
        'L’écart entre ce que dit la politique de confidentialité et ce que fait réellement le produit. Quand il y en a un, c’est toujours le produit qui a raison — et c’est le point le plus grave.',
        'Le verdict, en deux lignes séparées : by design tenu ou non, by default tenu ou non, chacune avec sa preuve observée.',
      ],
      exemple:
        'Sur l’application du pilote, le test donnerait : by design partiellement tenu — la finalité est écrite, mais la durée de conservation ne l’est pas et les traces GPS s’accumulent indéfiniment ; by default non tenu — le partage des statistiques avec l’entreprise cliente est activé d’origine, et l’option pour le couper se trouve à trois niveaux de menu. Deux verdicts distincts, deux corrections distinctes, pour des coûts très différents.',
      piege:
        'Faire le test sur les documents plutôt que sur le produit. Un registre des traitements bien tenu et une politique conforme ne disent rien de l’état des réglages, et c’est précisément là que se logent les manquements les plus visibles pour un utilisateur.',
      reflexe:
        'Rends toujours deux verdicts, jamais un seul. Dire « c’est conforme » sans préciser laquelle des deux exigences est tenue est la marque d’une réponse qui n’a pas compris la distinction — et c’est exactement ce que la question d’examen cherche à repérer.',
      notions: ['privacy-by-design', 'privacy-by-default'],
    },
    {
      id: 'rustine',
      libelle: 'La rustine — ce qui arrive quand une exigence manque',
      cestQuoi:
        '🔎 C’est l’issue défavorable du schéma : la protection n’ayant pas été conçue, on la simule après coup. Cela produit une conformité de façade — un bandeau, une politique de quatorze pages, une option protectrice qui existe mais reste introuvable. Juridiquement, cela peut passer. Stratégiquement, cela coûte trois fois : le développement de la rustine, la confiance qu’elle ne rattrape pas, et la refonte qu’il faudra bien faire un jour.',
      question:
        'Qu’a-t-on ajouté après coup pour compenser ce qui n’a pas été conçu — et combien coûterait la reprise propre ?',
      quoiMettre: [
        'Le bandeau de consentement posé sur un service qui collecte déjà tout : il transfère la responsabilité à l’utilisateur sans rien changer au traitement.',
        'La politique de confidentialité longue et illisible, qui protège juridiquement l’entreprise et n’informe réellement personne — manquement direct au principe de compréhension de la collecte.',
        'L’option protectrice qui existe mais que personne ne trouve, enterrée sous trois menus. Techniquement présente, pratiquement inexistante.',
        'Le consentement forcé : accepter ou renoncer au service, sans alternative. Un consentement obtenu sous cette contrainte n’est ni libre ni éclairé.',
        'La dette accumulée : des mois de données collectées sans base valable, qu’il faudra soit détruire, soit régulariser en recontactant tout le monde.',
        'Le coût de la reprise, à chiffrer : refonte de l’architecture, migration des données, nouvelle information des personnes, et le temps pendant lequel le service tourne en mode dégradé.',
      ],
      exemple:
        'Si Atelier Léman lançait le pilote sans les deux exigences puis se ravisait au sixième mois, il faudrait reprendre l’architecture de l’application — devis illustratif, 18 000 CHF, soit la marge de quinze vélos vendus 2 600 CHF pour 1 400 CHF de coût —, détruire six mois de traces GPS déjà accumulées, et réécrire aux quarante utilisateurs pour recueillir un consentement valable. Trois décisions gratuites en réunion de conception seraient devenues un chantier.',
      piege:
        'Croire que la rustine est l’option économique. Elle est seulement l’option dont le coût arrive plus tard et sous un autre nom : reprise, incident de sécurité, ou client entreprise qui ne renouvelle pas.',
      reflexe:
        'Chiffre systématiquement la reprise et compare-la au coût de la décision prise à temps. C’est l’argument qui convainc une direction, parce qu’il parle sa langue : « trois lignes dans un cahier des charges maintenant, ou une refonte dans six mois ».',
      notions: ['dark-patterns', 'protection-donnees', 'cybersecurite'],
    },
    {
      id: 'gain',
      libelle: 'Le double gain — ce que la protection rapporte',
      cestQuoi:
        '🔎 C’est l’issue favorable, et l’argument qui fait passer le sujet du service juridique à la direction générale. Une donnée qu’on n’a pas collectée ne peut ni fuiter, ni coûter de stockage, ni exiger de mise en conformité. La protection intégrée n’est donc pas seulement une charge évitée : elle réduit trois coûts en même temps et fabrique un argument commercial que les concurrents en ligne ne peuvent pas copier facilement.',
      question:
        'Qu’est-ce que la minimisation fait gagner à l’entreprise, en plus de la mettre en règle ?',
      quoiMettre: [
        'La surface de risque cyber, qui diminue mécaniquement : ce qui n’est pas stocké ne peut pas être volé, et une violation de données reste l’incident le plus destructeur en réputation pour une PME.',
        '🔎 Le lien avec la sobriété numérique : moins de données conservées, c’est moins de stockage, donc moins de serveurs et moins d’énergie. La durée de vie des données est explicitement un levier d’écoconception.',
        'L’argument commercial en B2B : une entreprise cliente qui confie les déplacements de ses salariés exige de savoir ce qui est collecté. Un inventaire clair devient une pièce du dossier commercial, pas une annexe juridique.',
        'L’accès aux marchés publics : les collectivités inscrivent de plus en plus des critères de protection des données et d’hébergement local dans leurs appels d’offres.',
        'La confiance elle-même, qui est une ressource intangible : lente à construire, instantanée à perdre, impossible à racheter — donc exactement le type de ressource sur lequel un avantage concurrentiel durable peut se fonder.',
      ],
      exemple:
        'Pour Atelier Léman, l’inventaire des données devient une page de l’offre faite aux six entreprises genevoises : « le vélo est géolocalisé, pas le collaborateur ; vous recevez un kilométrage agrégé, jamais un trajet ; les traces sont effacées à 90 jours ». Aucune marque low-cost en ligne ne peut opposer le même engagement, parce que son modèle vit précisément de la donnée d’usage. La protection cesse d’être un coût pour devenir un élément de la proposition de valeur.',
      piege:
        'Présenter la protection des données comme un pur coût de conformité. C’est la lecture qui fait perdre l’argument, parce qu’elle réduit un avantage possible à une charge subie — et parce qu’elle rend la décision indéfendable devant une direction qui compte ses francs.',
      reflexe:
        'Nomme toujours les trois gains ensemble : moins de risque cyber, moins de stockage, plus de confiance. Trois bénéfices, dont deux chiffrables, cela ne se réfute pas avec « ça coûte cher ».',
      notions: [
        'minimisation-donnees',
        'cybersecurite',
        'sobriete-numerique',
        'ressources-intangibles',
        'avantage-concurrentiel-durable',
      ],
    },
  ],

  methode: [
    {
      titre: '1. Nommer le traitement et écrire la finalité en une phrase',
      detail:
        'Avant toute chose, écris sur ton brouillon ce que le service fait des données, en une seule phrase qui commence par un verbe : « facturer l’abonnement au kilomètre », « retrouver un vélo volé », « prévenir une panne de batterie ». Cette phrase est l’étalon : tout le reste du travail consiste à lui confronter ce qui est collecté. Sans elle, chaque donnée trouve une justification après coup.',
      aEviter:
        'Écrire une finalité fourre-tout du type « améliorer le service ». Elle justifie absolument tout, donc elle ne sert à rien, et le jury le repère immédiatement.',
    },
    {
      titre: '2. Inventorier, une ligne par donnée, cinq colonnes',
      detail:
        'Une ligne par donnée, cinq colonnes : quelle donnée, pourquoi (rattachée à la finalité), qui y accède, où elle est hébergée, combien de temps on la garde. Prends les données produites par l’usage autant que celles qui sont saisies — trajets, horaires, identifiants d’appareil — parce que ce sont elles qu’on oublie et elles qui posent problème. Quatre à six lignes suffisent à l’oral.',
      aEviter:
        'Se limiter aux données déclarées par l’utilisateur. Le nom et l’adresse ne sont presque jamais le sujet ; ce sont les traces d’usage qui font les scandales.',
    },
    {
      titre: '3. Passer chaque ligne au test de la ligne barrée — c’est le privacy by design',
      detail:
        'Barre une ligne et demande-toi quelle décision de l’entreprise devient impossible sans cette donnée. Si aucune ne l’est, la ligne saute : c’est la minimisation appliquée. Pour celles qui survivent, décide à ce moment-là — et pas plus tard — la durée de conservation et le moyen technique de protection : chiffrement pour ce qui transite, pseudonymisation pour ce qui sert aux statistiques, anonymisation pour ce qui sert aux moyennes.',
      aEviter:
        'Garder une donnée « parce qu’elle pourrait servir ». C’est exactement la phrase que le principe de minimisation interdit, et c’est elle qui alourdit ensuite tout le dispositif.',
    },
    {
      titre: '4. Relever la position d’origine de chaque réglage — c’est le privacy by default',
      detail:
        'Change complètement de registre : on ne raisonne plus sur des documents, on regarde le produit. Liste les interrupteurs — partage, géolocalisation, notifications, visibilité, transmission de statistiques — et écris pour chacun sa position au premier lancement. Puis compte deux chiffres : le nombre de cases pré-cochées, et l’écart de clics entre accepter et refuser.',
      aEviter:
        'Déduire l’état des réglages de la politique de confidentialité. Les deux divergent souvent, et c’est le produit qui fait foi.',
    },
    {
      titre: '5. Rendre deux verdicts séparés, et nommer celui qui manque',
      detail:
        'Écris deux lignes, jamais une : « by design — tenu / partiellement / non, parce que… » et « by default — tenu / partiellement / non, parce que… », chacune avec sa preuve. C’est la structure qui montre que la distinction est comprise, et c’est elle qui oriente la correction : un manquement au design se répare dans l’architecture, un manquement au default se répare dans les paramètres — plusieurs mois dans un cas, une demi-journée dans l’autre.',
      aEviter:
        'Fondre les deux en un jugement global de conformité. C’est précisément l’erreur que la question d’examen cherche à faire commettre.',
    },
    {
      titre: '6. Trancher : trois mesures bornées, un indicateur, et l’arbitrage nommé',
      detail:
        'Termine par trois mesures au plus, chacune avec un responsable et une échéance — la suppression d’une donnée, l’inversion d’un réglage, l’ajout d’une suppression automatique. Ajoute un indicateur qui ne soit pas déclaratif : le nombre de données personnelles conservées par utilisateur, ou la part de comptes restés sur les réglages d’origine. Puis nomme l’arbitrage à voix haute : ce que l’entreprise renonce à savoir, et ce qu’elle gagne à y renoncer.',
      aEviter:
        'Conclure sur « il faut être conforme à la LPD ». Ce n’est pas une recommandation stratégique, c’est un rappel d’obligation — et cela ne décide rien.',
    },
  ],

  liens: [
    {
      vers: 'rne',
      nature: 'precise',
      explication:
        'La responsabilité numérique des entreprises annonce quatre axes — économique, technologique, environnemental, sociétal ; privacy by design et by default sont les deux outils qui remplissent l’axe technologique, celui des données et de la gouvernance, qui reste sinon un mot dans une liste.',
    },
    {
      vers: 'wcag-pour',
      nature: 'partage',
      explication:
        'Le même principe méthodologique commande les deux chapitres : ce qui est intégré dès la conception coûte peu et fonctionne, ce qui est ajouté après coûte cher et fonctionne mal — et les deux se rejoignent sur un point précis, la compréhension de la collecte, qui échoue exactement là où l’accessibilité échoue, sur un texte que personne ne comprend.',
    },
    {
      vers: 'sobriete-qta',
      nature: 'alimente',
      explication:
        'La minimisation des données est une sobriété qui ne dit pas son nom : questionner le besoin avant d’optimiser, c’est demander « avons-nous besoin de cette donnée ? » avant de demander « comment la stocker moins cher ? » — et la donnée qu’on n’a pas collectée est la seule qui ne consomme rien.',
    },
    {
      vers: 'collecte-oisf',
      nature: 'precise',
      explication:
        'Observer, interviewer, sonder, animer un focus group, c’est déjà collecter des données personnelles : les deux exigences s’appliquent à l’étude utilisateur elle-même, avant que le produit existe — et c’est le moment le plus commode pour les tenir, puisque rien n’est encore construit.',
    },
    {
      vers: 'saf',
      nature: 'alimente',
      explication:
        'Le verdict entre au SAF par deux portes : l’acceptabilité, parce qu’une entreprise cliente refusera une option qui expose les déplacements de ses salariés, et la faisabilité, parce que le coût chiffré de la reprise est un montant à poser dans la balance face à celui de la conception faite à temps.',
    },
  ],

  pieges: [
    {
      titre: 'Confondre les deux exigences, ou n’en citer qu’une',
      explication:
        'C’est le piège que ce schéma existe pour éviter, et la question d’examen la plus fréquente sur ce chapitre. Les deux mots se ressemblent, portent sur le même service, et les supports les citent toujours ensemble — d’où la tentation de les traiter comme un seul concept en deux morceaux. Ce sont deux exigences indépendantes : l’une peut être tenue sans l’autre, dans les deux sens.',
      reflexe:
        'Apprends la paire de questions plutôt que la paire de définitions : by design répond à « quand ? », by default répond à « dans quel état ? ». Et pour verrouiller, la formule du cours : « privacy by design, c’est protéger la vie privée dès l’architecture du produit ; privacy by default, c’est faire en sorte que l’utilisateur soit protégé même s’il ne touche à aucun réglage ».',
    },
    {
      titre: 'Répondre « nous respectons la LPD » et s’arrêter là',
      explication:
        'La conformité légale est un plancher, pas une stratégie. Le cours le formule ailleurs de façon définitive : le risque n’est pas juridique, mais stratégique. Une entreprise parfaitement en règle peut perdre un client entreprise qui refuse d’exposer les déplacements de ses salariés, et cette perte-là ne figure dans aucun texte de loi.',
      reflexe:
        'Après chaque affirmation de conformité, ajoute une phrase sur ce que la protection fait gagner ou perdre commercialement. C’est ce déplacement du juridique vers le stratégique qui sépare une réponse correcte d’une réponse notée.',
    },
    {
      titre: 'Prendre le consentement pour de la protection',
      explication:
        'Un bandeau, une case, une politique de confidentialité : tout cela relève de l’information et du consentement, pas de l’état protecteur. Un service qui explique parfaitement qu’il collecte tout reste un service qui collecte tout. Et quand le consentement est obtenu par un « accepter ou partir », il n’est ni libre ni éclairé, donc il ne vaut juridiquement pas grand-chose non plus.',
      reflexe:
        'Sépare toujours trois choses dans ta réponse : ce qui est collecté (minimisation), ce qui est expliqué (transparence), ce qui est activé d’origine (default). Les confondre est la faute la plus courante ; les distinguer prend une phrase.',
    },
    {
      titre: 'Ne penser qu’au client final et oublier les autres personnes concernées',
      explication:
        'Dans un service entre entreprises, les données produites ne sont presque jamais celles du client qui paie : ce sont celles de ses salariés, qui n’ont rien signé et ne peuvent pas refuser sans conséquence professionnelle. S’ajoutent les données des propres salariés de l’entreprise et celles des partenaires. Le déséquilibre de pouvoir entre un employeur et un employé rend le consentement particulièrement fragile à cet endroit.',
      reflexe:
        'Demande-toi qui, dans le dispositif, produit des données sans avoir choisi d’y entrer. C’est presque toujours là que se trouve le vrai sujet, et c’est le point qu’une réponse moyenne ne verra pas.',
    },
    {
      titre: 'Traiter le sujet comme une annexe juridique, sans effet sur le modèle d’affaires',
      explication:
        'Décider de ne pas collecter une donnée, c’est parfois renoncer à un revenu — la revente d’un fichier, un ciblage publicitaire, un service annexe. Inversement, s’engager publiquement à ne pas collecter peut devenir un élément de la proposition de valeur face à des concurrents dont le modèle vit de la donnée. Dans les deux cas, la décision touche le business model, pas seulement le service juridique.',
      reflexe:
        'Termine toujours par la phrase de l’arbitrage : « l’entreprise renonce à savoir X, et ce renoncement lui rapporte Y ». Elle rattache le chapitre au reste de l’analyse stratégique au lieu de le laisser en pièce jointe.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman SA — l’application du pilote, passée aux deux exigences',
    situation:
      'La direction a tranché : le pilote se fera — 40 vélos électriques mis à disposition de 6 entreprises genevoises pendant 12 mois, en abonnement mobilité tout compris. Le service repose sur une application : le salarié réserve un vélo, le déverrouille avec son téléphone, signale une panne ; l’entreprise cliente reçoit une facture au kilomètre. Avant que le cahier des charges parte chez le développeur, le projet passe par les deux exigences — c’est le seul moment où corriger ne coûte rien. Les chiffres ci-dessous sont illustratifs.',
    deroule: [
      {
        etiquette: 'La finalité, en une phrase',
        contenu:
          '« Mettre un vélo à disposition d’un salarié, le facturer au kilomètre à son employeur, et entretenir la flotte avant la panne. » Trois verbes, et rien d’autre. Toute donnée qui ne sert aucun des trois disparaît de l’inventaire.',
      },
      {
        etiquette: 'L’inventaire — cinq lignes retenues',
        contenu:
          'Nom du salarié (déverrouiller) · e-mail professionnel (facturer) · trace GPS pendant la course (retrouver un vélo volé) · kilomètres parcourus (facturer) · état de la batterie (maintenance prédictive). Chacune avec son accès, son hébergement et sa durée de conservation.',
      },
      {
        etiquette: 'Le test de la ligne barrée',
        contenu:
          'Une sixième ligne figurait au premier jet : l’heure de fin de course, qui donne l’heure d’arrivée au travail. Barrée, aucune décision de l’entreprise ne devient impossible — ni facturer, ni entretenir, ni retrouver un vélo. Elle saute. Et c’est la seule ligne dont la suppression change quelque chose pour les salariés.',
      },
      {
        etiquette: 'Verdict privacy by design',
        contenu:
          'Tenu, à trois conditions posées avant le développement : le boîtier GPS est sur le vélo et non sur la personne, et n’enregistre que pendant une course ouverte ; l’entreprise cliente reçoit un kilométrage agrégé, jamais un trajet individuel ; les traces s’effacent automatiquement à 90 jours. Coût de ces trois décisions au stade du cahier des charges : zéro.',
      },
      {
        etiquette: 'Verdict privacy by default',
        contenu:
          'Non tenu au premier jet. Le développeur avait prévu le partage des statistiques avec l’employeur activé d’origine, un « tout accepter » vert contre un « personnaliser » gris, et la newsletter d’Atelier Léman pré-cochée. Trois inversions à demander, chiffrées à une demi-journée de développement.',
      },
      {
        etiquette: 'Le point qui fait mal',
        contenu:
          'Le salarié qui utilise le vélo n’a rien signé avec Atelier Léman et ne peut pas refuser sans s’en expliquer auprès de son employeur. Son consentement n’est donc pas libre : c’est la conception qui doit le protéger, pas sa case à cocher. D’où l’agrégation obligatoire des données transmises au client.',
      },
      {
        etiquette: 'Les trois mesures retenues',
        contenu:
          'Suppression de l’heure de fin de course (chef de projet, avant le développement) · inversion des trois réglages par défaut (développeur, avant la mise en service) · suppression automatique des traces à 90 jours, programmée et non manuelle (développeur, avant la mise en service). Aucune ne dépasse une journée de travail.',
      },
      {
        etiquette: 'L’indicateur et l’arbitrage',
        contenu:
          'Indicateur : nombre de données personnelles conservées par utilisateur au-delà de 90 jours — cible, deux (nom et e-mail). Arbitrage nommé : Atelier Léman renonce à connaître les horaires de ses utilisateurs, et ce renoncement devient une page de son offre commerciale que les marques low-cost en ligne ne peuvent pas écrire.',
      },
    ],
    conclusion:
      'Les deux exigences n’ont pas freiné le pilote : elles l’ont rendu vendable. Le verdict est asymétrique, et c’est tout l’intérêt de l’exercice — le privacy by design était tenu presque par chance, parce que la conception était encore ouverte, tandis que le privacy by default ne l’était pas du tout, parce que personne n’avait regardé le produit. Ce résultat repart dans deux outils : au SAF, où l’engagement « le vélo est géolocalisé, pas le collaborateur » devient un critère d’acceptabilité pour les six entreprises clientes, et dans le business model, où il rejoint la marque locale et la qualification des mécaniciens parmi les ressources intangibles que la concurrence en ligne ne peut pas copier.',
  },

  phraseOral:
    'Chez Atelier Léman, les deux exigences ne donnent pas le même verdict, et c’est justement ce qu’il faut voir : le privacy by design est tenu — le boîtier est sur le vélo, pas sur le salarié, la trace s’efface à 90 jours, et ces décisions ne coûtent rien tant que le code n’existe pas — alors que le privacy by default ne l’est pas, puisque le partage des statistiques avec l’employeur est activé d’origine et que refuser demande trois clics de plus qu’accepter. La distinction n’est donc pas académique : le premier manquement se répare dans l’architecture, en plusieurs mois, le second dans les paramètres, en une demi-journée. Et l’enjeu n’est pas la LPD : c’est que le salarié qui pédale n’a rien signé et ne peut pas refuser sans se justifier devant son patron — donc c’est la conception qui doit le protéger, et cet engagement devient une ligne de l’offre qu’aucune marque low-cost en ligne ne peut écrire.',

  aRetenir: [
    { cle: 'La distinction', valeur: '📘 By design = QUAND (dès la conception) · by default = DANS QUEL ÉTAT (réglages livrés)' },
    {
      cle: 'Privacy by design',
      valeur: '📘 « La protection de la vie privée est intégrée dès la conception, pas ajoutée après coup »',
    },
    {
      cle: 'Privacy by default',
      valeur:
        '📘 « Seules les données strictement nécessaires sont traitées ; les paramètres les plus protecteurs sont activés d’origine »',
    },
    {
      cle: 'La formule du cours',
      valeur: '📘 « Protéger dès l’architecture » ↔ « protégé même s’il ne touche à aucun réglage »',
    },
    { cle: 'Le principe qui commande', valeur: '📘 Minimisation : ne collecter que le strictement nécessaire à la finalité' },
    {
      cle: 'Les 5 principes de collecte',
      valeur: '📘 But indiqué · transparence · minimisation · compréhension · données correctes',
    },
    { cle: 'Les moyens techniques', valeur: '📘 PETs : chiffrement, anonymisation, pseudonymisation, calcul sécurisé' },
    { cle: 'Le consentement', valeur: '📘 Opt-in : la case n’est pas cochée d’avance · double opt-in : confirmation en deux temps' },
    { cle: 'À proscrire', valeur: '📘 Dark patterns : cases pré-cochées, refus plus coûteux que l’acceptation' },
    { cle: 'Le cadre', valeur: '📘 LPD révisée (dès sept. 2023) · RGPD si clients UE · art. 21A Cst-GE, intégrité numérique' },
    {
      cle: 'Le parallèle qui rapporte',
      valeur: '📘 Privacy by design ↔ accessibilité dès la conception : corriger après coûte plus cher pour un résultat inférieur',
    },
    { cle: 'Le double gain', valeur: '🔎 Moins de risque cyber · moins de stockage donc moins d’énergie · plus de confiance' },
    { cle: 'Le test de dix secondes', valeur: '🔎 Compter les clics : accepter contre refuser. L’écart est la preuve' },
    { cle: 'La limite du modèle', valeur: 'Ne dit rien de l’empreinte environnementale ni de l’accessibilité — autres outils' },
  ],

  notions: [
    'privacy-by-design',
    'privacy-by-default',
    'minimisation-donnees',
    'protection-donnees',
    'opt-in',
    'dark-patterns',
    'pets',
    'cinq-principes-collecte',
    'gouvernance-donnees',
    'integrite-numerique',
    'souverainete-numerique',
    'cybersecurite',
    'rne',
    'quatre-axes-rne',
    'sobriete-numerique',
    'perimetre-numerique',
  ],
}
