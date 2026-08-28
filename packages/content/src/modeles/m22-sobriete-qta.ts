import type { Modele } from './types'

export const modele: Modele = {
  id: 'sobriete-qta',
  numero: 22,
  slug: 'sobriete-qta',
  nom: 'Sobriété numérique',
  sousTitre: 'Réflexe Q – T – A',
  famille: 'numerique',
  etape: 'transverse',

  question:
    'Avant d’optimiser un service numérique, a-t-on seulement vérifié qu’il fallait le faire — et qu’il fallait le faire de cette façon-là ?',

  enUnePhrase:
    'La sobriété numérique consiste à traiter un projet numérique dans un ordre précis et contre-intuitif : d’abord Questionner le besoin, ensuite Transférer vers un moyen moins lourd si le besoin tient, et seulement en dernier Améliorer techniquement ce qui reste — l’ordre inverse de celui qu’on suit spontanément.',

  produit:
    'Une décision à trois étages sur un projet numérique : le besoin est-il réel, existe-t-il un moyen moins lourd de le satisfaire, et à quoi ressemble la version optimisée de ce qui subsiste. Autrement dit un périmètre de projet réduit et justifié — pas une liste de bonnes intentions écologiques.',

  quandUtiliser: [
    'Dès qu’un cas propose « une application », « une plateforme », « de l’IA », « des capteurs » ou « la digitalisation de… » : le réflexe Q – T – A est la première chose à sortir, avant même de discuter la technique.',
    'Quand une réponse d’examen s’installe sur le terrain de l’efficacité — serveurs moins gourmands, code allégé, hébergement vert : Q – T – A remet le besoin devant, ce qui est précisément ce que le jury attend.',
    'Après avoir identifié un risque d’effet rebond : le rebond est le diagnostic, Q – T – A est le traitement.',
    'Pour arbitrer un budget numérique : les deux premières lettres suppriment des lignes entières de dépense, la troisième ne fait que les rendre moins chères.',
    '📘 En ouverture, pour poser les deux principes du cours : sobriété — questionner les besoins en première intention — et lucidité — penser les conséquences directes et indirectes.',
  ],

  quandNePasUtiliser: [
    'Pour mesurer un impact : Q – T – A ne chiffre rien. La localisation de l’impact se fait avec les trois postes (terminaux, data centers, réseaux), la mesure avec le cycle de vie.',
    'Pour justifier la suppression d’une fonction d’accessibilité ou d’une alternative humaine — ce serait une sobriété injuste, et l’examinateur le relèvera immédiatement.',
    'Comme argument moral en fin de réponse. Trois verbes cités sans être appliqués à l’objet du cas ne valent rien : ce qui se note, c’est le contenu du Q et du T sur ce cas-là.',
    'Pour trancher entre deux options stratégiques déjà admissibles : cet arbitrage-là revient au SAF.',
  ],

  schema: {
    h: 1010,
    description:
      'Un usage numérique proposé déclenche d’abord le réflexe courant — améliorer, puis transférer, puis questionner — qui aboutit à l’effet rebond ; une flèche en pointillé demande d’inverser cet ordre, ce qui donne les trois étapes Questionner, Transférer, Améliorer, dont les flèches convergent vers le juste niveau d’usage, lui-même surveillé par un garde-fou : la sobriété injuste.',
    noeuds: [
      {
        id: 'declencheur',
        titre: 'UN USAGE NUMÉRIQUE EST PROPOSÉ',
        lignes: ['app · IA · cloud · capteurs'],
        x: 40,
        y: 40,
        l: 920,
        h: 70,
        forme: 'bande',
        point: 'declencheur',
      },
      {
        id: 'courant',
        titre: 'LE RÉFLEXE COURANT — A → T → Q',
        lignes: ['on optimise, puis on déplace ;', 'le besoin vient en dernier'],
        x: 40,
        y: 170,
        l: 420,
        h: 140,
        ton: 'danger',
        point: 'courant',
      },
      {
        id: 'rebond',
        titre: 'CE QU’IL PRODUIT — L’EFFET REBOND',
        lignes: ['le gain par unité est réabsorbé', 'par la hausse du volume'],
        x: 540,
        y: 170,
        l: 420,
        h: 140,
        ton: 'alerte',
        point: 'rebond',
      },
      {
        id: 'q',
        titre: 'Q — QUESTIONNER',
        lignes: ['En ai-je vraiment besoin ?', 'On agit sur le volume.'],
        x: 40,
        y: 390,
        l: 260,
        h: 140,
        ton: 'accent',
        point: 'q',
      },
      {
        id: 't',
        titre: 'T — TRANSFÉRER',
        lignes: ['Peut-on faire autrement ?', 'Un moyen plus léger, ou aucun.'],
        x: 370,
        y: 390,
        l: 260,
        h: 140,
        ton: 'accent',
        point: 't',
      },
      {
        id: 'a',
        titre: 'A — AMÉLIORER',
        lignes: ['Si nécessaire, optimiser.', 'Jamais en premier.'],
        x: 700,
        y: 390,
        l: 260,
        h: 140,
        ton: 'accent',
        point: 'a',
      },
      {
        id: 'juste',
        titre: 'LE JUSTE NIVEAU D’USAGE',
        lignes: ['moins de superflu,', 'sans réduire l’essentiel'],
        x: 270,
        y: 610,
        l: 460,
        h: 140,
        ton: 'positif',
        point: 'juste-niveau',
      },
      {
        id: 'injuste',
        titre: 'LE GARDE-FOU — SOBRIÉTÉ INJUSTE',
        lignes: ['couper une aide à la compréhension', 'ou une alternative accessible'],
        x: 270,
        y: 830,
        l: 460,
        h: 140,
        ton: 'danger',
        point: 'injuste',
      },
    ],
    liens: [
      {
        de: 'declencheur',
        vers: 'courant',
        depuis: 'bas',
        arrive: 'haut',
        libelle: 'le réflexe spontané',
        ton: 'danger',
      },
      {
        de: 'courant',
        vers: 'rebond',
        depuis: 'droite',
        arrive: 'gauche',
        libelle: 'aboutit à',
        ton: 'danger',
      },
      {
        de: 'courant',
        vers: 'q',
        depuis: 'bas',
        arrive: 'haut',
        trait: 'pointille',
        libelle: 'inverser l’ordre',
        ton: 'accent',
      },
      { de: 'q', vers: 't', depuis: 'droite', arrive: 'gauche' },
      { de: 't', vers: 'a', depuis: 'droite', arrive: 'gauche' },
      { de: 'q', vers: 'juste', depuis: 'bas', arrive: 'haut' },
      { de: 't', vers: 'juste', depuis: 'bas', arrive: 'haut' },
      { de: 'a', vers: 'juste', depuis: 'bas', arrive: 'haut' },
      {
        de: 'juste',
        vers: 'injuste',
        depuis: 'bas',
        arrive: 'haut',
        libelle: 'la limite à ne pas franchir',
        ton: 'alerte',
      },
    ],
    note: '📘 D’abord réduire le besoin, ensuite seulement optimiser la technologie. Ce qui est du cours, c’est l’ordre Q → T → A — pas seulement les trois mots.',
  },

  points: [
    {
      id: 'declencheur',
      libelle: 'L’usage numérique proposé',
      cestQuoi:
        'Le point de départ : quelqu’un pose sur la table un projet numérique — une application, un module d’intelligence artificielle, un hébergement dans le cloud (des serveurs loués à distance plutôt que des machines à soi), des capteurs, un portail client. Ce n’est encore ni une bonne ni une mauvaise idée : c’est un objet à instruire.',
      question:
        'Qu’est-ce qui est réellement proposé — quel objet technique, pour quel usage, et surtout à la demande de qui ?',
      quoiMettre: [
        'L’objet technique nommé précisément : « une application native pour smartphone », pas « du digital ».',
        'Le bénéfice annoncé par celui qui propose le projet, cité tel quel — c’est lui qui sera testé au Q.',
        'Le demandeur : la direction, un client, un fournisseur, un concurrent qu’on imite. 🔎 Un projet demandé parce que « les concurrents en ont un » ne survit presque jamais au Q.',
        '📘 Le périmètre compté : terminaux ? réseaux ? data centers ? logiciels ? IA ? La frontière change complètement le résultat, et se pose avant tout chiffre.',
        'Le matériel embarqué, s’il y en a : un projet qui ajoute des objets physiques (capteurs, bornes, tablettes) n’a pas le même profil qu’un projet purement logiciel.',
      ],
      exemple:
        'Chez Atelier Léman, le projet posé sur la table est une application de gestion de flotte pour l’abonnement mobilité : réservation du vélo, suivi GPS en continu, tableau de bord pour l’entreprise cliente, notifications d’entretien. Devis illustratif : 85 000 CHF de développement, 79 CHF par mois de back-office loué, et un capteur de position — un traceur GPS — sur chacun des 40 vélos du pilote.',
      piege:
        'Traiter le projet comme un bloc indivisible. « L’application » n’existe pas : il y a une réservation, un suivi GPS, un tableau de bord et des notifications — quatre fonctions dont chacune a son propre besoin et son propre coût.',
      reflexe:
        'Découpe le projet en fonctions avant d’entrer dans le Q. Les trois questions s’appliquent fonction par fonction, jamais au projet entier — c’est ce découpage qui fait la différence entre une réponse d’examen banale et une bonne.',
      notions: ['transformation-numerique', 'perimetre-numerique'],
    },
    {
      id: 'courant',
      libelle: 'Le réflexe courant : A → T → Q',
      cestQuoi:
        '📘 L’ordre spontané, celui que suivent la plupart des organisations : on améliore d’abord ce qui existe, on envisage ensuite de le déplacer ailleurs, et on se demande en tout dernier — parfois jamais — si c’était utile. Le schéma du cours le représente pour une raison simple : la sobriété n’est pas trois mots, c’est l’inversion de cet ordre.',
      question:
        'Sur ce cas, la discussion a-t-elle commencé par la technique — hébergement, performance, coût du serveur — plutôt que par le besoin ?',
      quoiMettre: [
        'Le symptôme le plus fréquent : un cahier des charges qui liste des fonctionnalités sans jamais nommer le problème qu’elles résolvent.',
        'Le second symptôme : un argument écologique portant uniquement sur l’énergie du serveur (« notre hébergeur est alimenté en énergie verte »).',
        '📘 Pourquoi c’est perdant : quand on améliore d’abord, on optimise des usages qu’on n’a jamais interrogés, et les gains sont absorbés par la croissance de ces usages.',
        'Le troisième symptôme : le projet est daté et budgété avant que quiconque ait parlé aux utilisateurs.',
        '🔎 Ce que l’ordre inverse coûte concrètement : on paie l’optimisation d’une fonction qu’on aurait pu ne pas construire.',
      ],
      exemple:
        'La discussion chez Atelier Léman a commencé exactement comme ça : faut-il du natif ou du web, iOS d’abord ou Android, quel hébergeur suisse. Personne n’avait encore demandé aux six entreprises pilotes ce qu’elles voulaient savoir de leurs vélos. Le budget de 85 000 CHF portait déjà sur une réponse dont la question n’était pas posée.',
      piege:
        'Croire que le réflexe courant est une bêtise. Il est parfaitement rationnel du point de vue d’un chef de projet : améliorer est mesurable, questionner ne l’est pas et met tout le monde mal à l’aise.',
      reflexe:
        'Nomme l’ordre observé avant de proposer le tien : « le dossier a été construit dans l’ordre améliorer – transférer – questionner ; je le reprends dans l’autre sens ». Cette phrase montre au jury que tu vois la structure, pas seulement l’acronyme.',
      notions: ['sobriete-numerique', 'debat-numerique-durabilite'],
    },
    {
      id: 'rebond',
      libelle: 'Ce que produit l’ordre inverse : l’effet rebond',
      cestQuoi:
        '📘 L’effet rebond : lorsqu’un gain est atteint quelque part, une augmentation d’utilisation ou d’impacts a lieu quelque part d’autre. C’est la sanction mécanique de l’ordre A → T → Q : on rend l’usage moins coûteux, donc on en fait davantage, et le total ne baisse pas.',
      question:
        'Si le gain d’efficacité annoncé se réalise, qu’est-ce qui va augmenter en volume — et le total absolu baisse-t-il encore ?',
      quoiMettre: [
        '📘 La formule à tenir : impact total = impact par unité × nombre d’unités. Un gain unitaire est un fait, pas une conclusion.',
        '📘 Les quatre formes : direct (le même usage devient moins cher, on l’utilise plus) · indirect (l’argent ou le temps économisé est dépensé ailleurs) · de marché (le prix baisse, la demande s’élargit) · de croissance (les gains alimentent la croissance globale).',
        'Le cas d’école du cours : le cloud est plus efficient par unité, mais son abondance perçue nourrit l’effet rebond.',
        'La question de contrôle : quel volume était mesuré avant, quel volume est prévu après. Sans les deux chiffres, l’argument d’efficacité est creux.',
        '🔎 Le lien avec la sobriété : l’efficacité réduit l’impact par unité, la sobriété agit sur le besoin et le volume. Sans sobriété, les gains d’efficacité peuvent être annulés par le rebond.',
      ],
      exemple:
        'Illustration chiffrée, volontairement inventée : le suivi GPS permet à Atelier Léman d’optimiser les tournées de maintenance et de réduire de 30 % le kilométrage par intervention. Mais parce que la maintenance devient facile et peu coûteuse, on passe de 2 à 4 interventions par vélo et par an. Par intervention : −30 %. Au total : +40 %. Le gain a été réabsorbé, et il a fallu fabriquer 40 capteurs pour l’obtenir.',
      piege:
        'Citer l’effet rebond comme une curiosité intellectuelle, sans le rattacher au projet. « Attention à l’effet rebond » ne rapporte rien ; « le gain de 30 % par intervention sera repris par le doublement du nombre d’interventions » rapporte beaucoup.',
      reflexe:
        'Nomme la grandeur qui va croître. Un rebond se prouve en montrant une unité qui se multiplie : des interventions, des requêtes, des heures, des gigaoctets stockés.',
      notions: ['effet-rebond', 'boucle-retroaction', 'effets-ocde', 'data-center'],
    },
    {
      id: 'q',
      libelle: 'Q — Questionner',
      cestQuoi:
        '📘 La première étape, et la seule qui puisse faire disparaître complètement un impact : questionner les besoins en première intention. Pas en dernier recours, pas après avoir optimisé — d’abord. La question porte sur le besoin, jamais sur la solution.',
      question:
        'Ce besoin est-il réel ? Ce service est-il nécessaire ? Peut-on ne pas le faire du tout ?',
      quoiMettre: [
        'Le besoin exprimé, reformulé sans le nom de la solution : « savoir quand le vélo revient » et non « avoir une notification push ».',
        '📘 La distinction besoin / satisfier : le besoin est stable, universel et limité en nombre (communiquer, se déplacer) ; le satisfier est le moyen de le satisfaire, variable, culturel et infiniment extensible (le smartphone dernier cri, la vidéo en 4K). La sobriété ne réduit pas les besoins, elle change de satisfier.',
        'Le volume attendu : combien de personnes, combien de fois par semaine. Un besoin réel mais rare ne justifie pas la même construction qu’un besoin quotidien.',
        'Les fonctions qui tombent : la sortie du Q est une liste de choses qu’on ne fera pas, écrite noir sur blanc.',
        '🔎 Le contre-test : que se passe-t-il si on ne fait rien ? Si la réponse est « rien de grave », le besoin n’était pas là.',
        '📘 Le critère de tri, quand on hésite : un service numérique doit répondre à un besoin social réel et éviter d’entretenir artificiellement une hausse des usages sans utilité collective claire.',
      ],
      exemple:
        'Atelier Léman appelle les six entreprises pilotes. Résultat : elles ne veulent pas piloter une flotte, elles veulent deux choses — savoir si un vélo est disponible ce matin, et savoir quand celui qui est à l’atelier revient. Le suivi GPS permanent, le tableau de bord d’usage et les statistiques mensuelles ne répondent à aucun besoin exprimé : trois fonctions sur quatre tombent au Q.',
      piege:
        'Questionner la technologie au lieu du besoin. « Faut-il vraiment une application native ? » est déjà une question de T, pas de Q : elle suppose le besoin acquis et ne discute que du moyen.',
      reflexe:
        'Formule la question sans aucun mot technique. Si tu ne peux pas écrire le besoin sans nommer un outil, c’est que tu n’as pas encore trouvé le besoin.',
      notions: ['sobriete-numerique', 'besoins-fondamentaux', 'quatre-criteres-donut'],
    },
    {
      id: 't',
      libelle: 'T — Transférer',
      cestQuoi:
        '📘 La deuxième étape : le besoin est confirmé, mais rien ne dit qu’il faille le satisfaire par le moyen proposé. Transférer, c’est déplacer le besoin vers un moyen moins lourd — mutualiser, revenir à un moyen non numérique, réutiliser quelque chose qui existe déjà.',
      question:
        'Ce besoin, confirmé, peut-il être satisfait autrement — avec un moyen moins impactant que celui qui est proposé ?',
      quoiMettre: [
        'La mutualisation : un outil partagé plutôt qu’un outil par entité, un appareil pour plusieurs personnes plutôt qu’un par personne.',
        'Le retour à un moyen non numérique quand il suffit : un appel, un panneau, un formulaire papier, un tableau au mur de l’atelier.',
        'La réutilisation de l’existant : le besoin peut-il être couvert par un outil déjà en place, déjà payé, déjà connu des utilisateurs ?',
        'Le passage d’un moyen lourd à un moyen léger de même famille : une page web légère plutôt qu’une application à installer, un message texte plutôt qu’une notification propriétaire, une donnée saisie plutôt qu’un capteur permanent.',
        '🔎 Le critère de comparaison : le moyen retenu doit couvrir le même besoin avec moins de matériel, moins de données transportées et moins de dépendance à un fournisseur.',
      ],
      exemple:
        'Les deux besoins confirmés — savoir si un vélo est libre, savoir quand il revient — n’exigent pas 85 000 CHF. Un tableau partagé mis à jour par l’atelier et un message texte automatique à la fin de la réparation les couvrent. Coût illustratif : environ 3 000 CHF de mise en place et 40 CHF par mois. Aucun capteur de position n’est nécessaire, donc aucun objet supplémentaire à fabriquer, alimenter et jeter.',
      piege:
        'Confondre transférer et externaliser. Mettre le même service chez un hébergeur « vert » ne transfère pas le besoin : cela déplace la facture énergétique sans réduire ni le matériel ni le volume.',
      reflexe:
        'Vérifie que le transfert supprime quelque chose de physique ou de volumétrique — des appareils, des données transportées, des équipements à renouveler. Sinon ce n’est pas un transfert, c’est un déménagement.',
      notions: ['sobriete-numerique', 'economie-fonctionnalite', 'trois-r'],
    },
    {
      id: 'a',
      libelle: 'A — Améliorer',
      cestQuoi:
        '📘 La troisième et dernière étape : le besoin est confirmé et le moyen est choisi, on optimise techniquement. C’est de l’efficacité — utile, réelle, mesurable, mais qui n’agit que sur l’impact par unité et jamais sur le volume. D’où sa place : la dernière.',
      question:
        'Ce qui reste après le Q et le T, comment le faire consommer le moins possible — sans rien retirer d’essentiel ?',
      quoiMettre: [
        '📘 Les six leviers du RGESN, le référentiel français d’écoconception des services numériques : architecture · contenus · flux · hébergement · composants · durée de vie des données.',
        'La minimisation des données : ne collecter que ce qui sert, et fixer une durée de conservation. Une donnée non collectée n’a ni coût de stockage, ni risque de fuite.',
        'L’ajustement de la qualité au besoin réel : le RGESN recommande d’adapter la définition d’une vidéo au contexte de visualisation, parce qu’une résolution trop élevée augmente à la fois la consommation du terminal et le volume transféré.',
        'La durée de vie du matériel associé : un service conçu pour tourner sur des appareils anciens évite le renouvellement du parc — 📘 en France, les terminaux pèsent ~50 % de l’impact du numérique, les centres de données 46 %, les réseaux 4 %.',
        'Les leviers d’infrastructure du cours : consolidation des centres de données, virtualisation des serveurs et du stockage, refroidissement et gestion de l’alimentation.',
        '🔎 Le rappel à faire à l’oral : tous ces leviers sont des leviers d’efficacité, donc exposés au rebond s’ils ne sont pas accompagnés du Q et du T.',
      ],
      exemple:
        'Ce qui subsiste chez Atelier Léman — le tableau partagé et le message texte — s’optimise en trois gestes : une page web sans image lourde, lisible sur un téléphone de six ans ; aucune donnée de géolocalisation conservée, seulement l’état « disponible » ou « à l’atelier » ; et l’envoi d’un message texte plutôt qu’une notification qui obligerait chaque salarié à installer une application.',
      piege:
        'Commencer par là, ce que fait la quasi-totalité des copies. Une réponse qui parle d’écoconception et d’hébergement vert sans avoir questionné le besoin a répondu à l’étape 3 en sautant les deux premières.',
      reflexe:
        'Avant toute phrase d’optimisation, dis explicitement ce que le Q et le T ont déjà retiré. L’ordre s’entend à l’oral : c’est lui qu’on note, pas le vocabulaire technique.',
      notions: ['rgesn', 'eco-conception', 'minimisation-donnees', 'trois-postes-numerique'],
    },
    {
      id: 'juste-niveau',
      libelle: 'Le juste niveau d’usage',
      cestQuoi:
        '📘 Le résultat des trois étapes, et la définition même de la sobriété : « la sobriété numérique ne doit pas être comprise comme une simple réduction de moyens. Elle doit être une sélection raisonnée de ce qui est nécessaire. » Le critère n’est pas « moins », c’est moins de superflu sans réduire l’essentiel.',
      question:
        'Ce qui reste est-il le niveau juste — assez pour couvrir le besoin, pas plus que ce que le besoin exige ?',
      quoiMettre: [
        'La liste de ce qu’on garde et la liste de ce qu’on abandonne, côte à côte. C’est le livrable, et il tient en dix lignes.',
        'Le besoin couvert, réaffirmé : si une fonction supprimée laisse un besoin réel sans réponse, le niveau n’est pas juste, il est trop bas.',
        'Le gain en absolu, pas en pourcentage : combien d’appareils en moins, combien de données en moins, combien de francs en moins.',
        '📘 La deuxième moitié du principe, la lucidité : penser les conséquences directes et indirectes — donc vérifier que le volume ne repartira pas à la hausse ailleurs.',
        '🔎 Ce que la sobriété n’est pas : ni la suppression du numérique, ni un retour en arrière, ni une punition. C’est un dimensionnement.',
      ],
      exemple:
        'Le juste niveau, pour le pilote de 40 vélos chez 6 entreprises genevoises : un tableau partagé, un message texte automatique, aucun capteur, aucune application à installer. Gardé : les deux besoins exprimés. Abandonné : le suivi permanent, les statistiques mensuelles, le tableau de bord. Économie illustrative : environ 82 000 CHF de développement et 40 objets connectés jamais fabriqués.',
      piege:
        'Confondre le juste niveau avec le niveau minimal. Une entreprise qui supprime tout ce qui coûte finit par ne plus rendre le service : elle a fait de l’austérité, pas de la sobriété.',
      reflexe:
        'Après chaque suppression, pose une question unique : quel besoin réel vient de perdre sa réponse ? Si aucun, la suppression est de la sobriété ; si un besoin tombe, c’est une coupe.',
      notions: ['sobriete-numerique', 'besoins-fondamentaux', 'debat-numerique-durabilite'],
    },
    {
      id: 'injuste',
      libelle: 'Le garde-fou : la sobriété injuste',
      cestQuoi:
        '📘 La limite basse de la démarche. « Réduire les vidéos inutiles, limiter les flux de données, simplifier l’interface ou restreindre certaines fonctionnalités peut être pertinent ; en revanche, supprimer des aides à la compréhension, des alternatives accessibles ou des fonctions réellement utiles reviendrait à faire une sobriété injuste. » Autrement dit : la sobriété fait redescendre sous le plafond écologique, mais elle ne doit pas faire tomber sous le plancher social.',
      question:
        'Ce que je viens de supprimer au nom de la sobriété était-il du superflu — ou était-ce ce qui rendait le service utilisable par quelqu’un ?',
      quoiMettre: [
        'Ce qu’on ne coupe jamais : les alternatives textuelles, les sous-titres, le contraste, la navigation au clavier, le langage clair, les messages d’erreur explicites.',
        'Le canal humain : un service allégé qui supprime le numéro de téléphone n’a pas économisé, il a exclu.',
        'Les publics à vérifier nommément : personnes âgées, personnes en situation de handicap, personnes sans smartphone récent, personnes peu à l’aise avec le numérique.',
        '📘 La notion d’exclusion indirecte : un service peut être légal et performant, et exclure de fait une partie de la population sans intention explicite de discrimination.',
        '🔎 Le test de partage : la même suppression allège-t-elle pour tout le monde, ou allège-t-elle pour la majorité en fermant la porte à une minorité ?',
      ],
      exemple:
        'Chez Atelier Léman, supprimer les capteurs de position n’enlève rien à personne : c’est de la sobriété. Supprimer le guichet de Plainpalais parce que « tout passe par le tableau partagé » en serait le contraire : les clients qui n’ont pas de smartphone récent, et une partie des indépendants qui déposent leur vélo en passant, perdraient l’accès au service. Le message texte, lui, a été retenu précisément parce qu’il fonctionne sur n’importe quel téléphone.',
      piege:
        'Justifier une économie de fonctionnement par un argument écologique. Fermer un accueil physique et l’appeler « dématérialisation responsable » est le cas type que le cours désigne comme sobriété injuste.',
      reflexe:
        'Pour chaque coupe, nomme la personne qui perd quelque chose. Si tu peux la nommer, la coupe est injuste et il faut trouver autre chose.',
      notions: ['sobriete-injuste', 'accessibilite-numerique', 'exclusion-indirecte'],
    },
  ],

  methode: [
    {
      titre: '1. Découper le projet en fonctions, pas en technologies',
      detail:
        'Écris sur le brouillon la liste des fonctions demandées, une par ligne — réserver, suivre, notifier, analyser. Chaque ligne sera passée séparément dans Q, puis T, puis A. C’est ce découpage qui rend la méthode applicable à un cas jamais vu : sans lui, on ne peut que réciter les trois lettres.',
      aEviter:
        'Écrire « l’application » sur une seule ligne. Un projet traité en bloc ne peut être que gardé ou rejeté en entier, alors que la bonne réponse est presque toujours « on garde deux fonctions sur cinq ».',
    },
    {
      titre: '2. Questionner chaque fonction en interrogeant le besoin, jamais l’outil',
      detail:
        'Pour chaque ligne, reformule le besoin sans aucun mot technique, puis demande : que se passe-t-il si personne ne le fait ? Barre les lignes dont la réponse est « rien de grave ». La sortie du Q est une liste barrée, visible sur le brouillon — c’est elle qu’on montre à l’oral.',
      aEviter:
        'Barrer une ligne parce qu’elle coûte cher. Le Q porte sur l’utilité, pas sur le budget ; une fonction chère mais nécessaire survit au Q et se traite au T.',
    },
    {
      titre: '3. Chercher, pour chaque ligne survivante, le moyen le plus léger',
      detail:
        'Trois pistes dans cet ordre : mutualiser un moyen existant, revenir à un moyen non numérique, remplacer un moyen lourd par un moyen léger de même famille. Retiens celui qui supprime le plus de matériel et de données, pas celui qui a la plus jolie interface.',
      aEviter:
        'Considérer que changer d’hébergeur est un transfert. Tant qu’aucun appareil, aucun flux et aucune dépendance ne disparaissent, rien n’a été transféré.',
    },
    {
      titre: '4. N’optimiser que ce qui a survécu aux deux premières étapes',
      detail:
        'Applique alors les leviers techniques : sobriété des contenus, minimisation et durée de conservation des données, compatibilité avec les appareils anciens, hébergement. Annonce-les explicitement comme de l’efficacité, donc comme la partie la plus fragile de la réponse.',
      aEviter:
        'Ouvrir la réponse par l’écoconception. C’est la faute la plus fréquente et la plus visible : elle prouve qu’on a sauté les deux étapes qui comptent.',
    },
    {
      titre: '5. Passer le résultat au test du rebond',
      detail:
        'Reprends chaque gain annoncé et cherche l’unité qui pourrait se multiplier. Écris la conclusion en absolu : total avant, total après. Si tu ne peux pas la produire, dis-le — c’est plus solide que d’affirmer un gain net.',
      aEviter:
        'Conclure sur un pourcentage par unité. Un « −30 % par intervention » ne prouve rien tant que le nombre d’interventions n’est pas connu.',
    },
    {
      titre: '6. Vérifier le garde-fou avant de conclure',
      detail:
        'Relis la liste de ce que tu as supprimé et demande, pour chaque élément : qui perd l’accès ? Si un public identifiable perd le service, remets l’élément et cherche une autre économie. Termine sur cette phrase, elle vaut des points à elle seule.',
      aEviter:
        'Finir sur le chiffre d’économie. Une réponse qui s’arrête au montant économisé passe à côté de la moitié sociale de la durabilité.',
    },
    {
      titre: '7. Rattacher la décision au reste du dossier',
      detail:
        'Dis où va le résultat : les fonctions retenues deviennent des ressources et des activités clés dans le business model, le matériel évité rejoint le volet achats, et le public protégé au garde-fou devient un critère d’acceptabilité au moment d’arbitrer.',
      aEviter:
        'Laisser Q – T – A en îlot. Un outil cité sans suite se lit comme une récitation ; un outil qui alimente l’étape suivante se lit comme un raisonnement.',
    },
  ],

  liens: [
    {
      vers: 'effet-rebond',
      nature: 'prolonge',
      explication:
        'L’effet rebond dit pourquoi l’efficacité seule ne suffit pas ; Q – T – A est ce qu’on fait de ce constat : l’efficacité réduit l’impact par unité, la sobriété agit sur le besoin et donc sur le nombre d’unités.',
    },
    {
      vers: 'trois-postes',
      nature: 'prolonge',
      explication:
        'Les trois postes disent où se trouve l’impact — terminaux, data centers, réseaux ; Q – T – A dit quoi en faire, et comme les terminaux pèsent environ la moitié, c’est le T qui rapporte le plus en évitant de fabriquer des appareils.',
    },
    {
      vers: 'trois-r',
      nature: 'partage',
      explication:
        'C’est la même hiérarchie transposée : questionner correspond à réduire, transférer à réutiliser, améliorer à recycler — dans les deux cas, la première marche évite l’impact et la dernière ne fait que le limiter.',
    },
    {
      vers: 'achats-durables',
      nature: 'partage',
      explication:
        'Acheter moins, acheter mieux, utiliser plus longtemps est le même raisonnement appliqué au matériel : le levier le plus puissant se situe avant l’achat, exactement comme le Q se situe avant tout choix technique.',
    },
    {
      vers: 'wcag-pour',
      nature: 'soppose',
      explication:
        'C’est la seule tension interne du modèle : la sobriété coupe, l’accessibilité protège ce qui ne doit pas être coupé — un service allégé au point de devenir inutilisable par une partie du public est une sobriété injuste, pas une réussite.',
    },
  ],

  pieges: [
    {
      titre: 'Réciter Q – T – A sans jamais l’appliquer',
      explication:
        'Les trois mots sont faciles à retenir et ne prouvent rien. Ce qui se note, c’est le contenu du Q sur le cas donné : quelles fonctions tombent, et pourquoi. Une réponse qui cite l’acronyme puis enchaîne sur l’hébergement vert n’a utilisé que la lettre A.',
      reflexe:
        'Impose-toi de nommer au moins une chose que le Q supprime dans le cas. Si tu n’en trouves aucune, c’est que tu n’as pas questionné, tu as validé.',
    },
    {
      titre: 'Commencer par améliorer',
      explication:
        'C’est l’erreur que le schéma existe pour prévenir : optimiser avant de questionner revient à rendre moins coûteux un usage dont personne n’a vérifié l’utilité, et les gains obtenus sont absorbés par la croissance de cet usage.',
      reflexe:
        'À l’oral, annonce l’ordre avant de dérouler : « je prends les trois étapes dans l’ordre du cours, questionner d’abord ». Le jury entend immédiatement que tu as compris que l’ordre est le contenu.',
    },
    {
      titre: 'Confondre sobriété et efficacité',
      explication:
        'Deux logiques distinctes : l’efficacité optimise l’existant et agit sur l’impact par unité ; la sobriété questionne le besoin et agit sur le volume. La première peut être victime du rebond, la seconde le réduit. Les mélanger fait passer une optimisation technique pour une démarche de sobriété.',
      reflexe:
        'Apprends la phrase par cœur : « l’efficacité réduit l’impact par unité ; la sobriété agit sur le besoin et le volume. Sans sobriété, les gains d’efficacité peuvent être annulés par l’effet rebond. »',
    },
    {
      titre: 'Comprendre la sobriété comme une privation',
      explication:
        '📘 « La sobriété numérique ne doit pas être comprise comme une simple réduction de moyens. Elle doit être une sélection raisonnée de ce qui est nécessaire. » Proposer de supprimer le numérique n’est pas une réponse de sobriété, c’est un refus de traiter la question.',
      reflexe:
        'Réponds par la distinction besoin / satisfier : on ne réduit pas le besoin de savoir quand le vélo revient, on remplace un satisfier lourd — l’application avec capteurs — par un satisfier léger — le message texte.',
    },
    {
      titre: 'Couper l’essentiel au nom de la sobriété',
      explication:
        'Supprimer une aide à la compréhension, une alternative accessible ou un canal humain fait tomber le service sous le plancher social. Le service devient plus léger et exclut : c’est le déplacement d’un problème, pas un progrès de durabilité.',
      reflexe:
        'Pour chaque suppression, nomme la personne qui perd l’accès. Si elle a un visage — un client sans smartphone récent, un indépendant qui passait au guichet — la coupe est injuste.',
    },
  ],

  variantes: [
    {
      sujet: 'Ce que « Transférer » recouvre exactement',
      formulations: [
        {
          texte:
            'T — TRANSFÉRER : « Peut-on faire autrement ? ». L’étape est nommée et posée dans l’ordre, sans être développée.',
          source: 'schéma 22 du cours, « Réflexe Q – T – A »',
        },
        {
          texte:
            'TRANSFÉRER : « Peut-on le satisfaire autrement, avec un moyen moins impactant ? » — mutualiser, revenir à un moyen non numérique.',
          source: 'encyclopédie du cours, entrée « Sobriété numérique »',
        },
      ],
      consigne:
        'Ce n’est pas une contradiction mais une différence de niveau de détail, et elle vaut la peine d’être signalée : ce qui est explicitement du cours 📘, c’est l’ordre Q → T → A et la question « peut-on faire autrement ? ». La lecture opérationnelle — mutualiser, revenir au non-numérique, réutiliser l’existant — est une interprétation 🔎 et se présente comme telle : « le support nomme cette étape sans la développer ; je la lis comme… ». Cette précaution montre qu’on distingue la source de sa propre lecture, ce qui rapporte plus que de faire passer l’une pour l’autre.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman SA — l’application de gestion de flotte passée au Q – T – A',
    situation:
      'L’option de l’abonnement mobilité tout compris a été retenue pour un pilote : 40 vélos chez 6 entreprises genevoises, sur 12 mois. Un prestataire a remis un devis pour l’outil numérique qui doit l’accompagner. Personne ne conteste que le pilote a besoin d’un support numérique — la question est de savoir lequel, et le réflexe Q – T – A arrive avant la signature, pas après. Les montants ci-dessous sont illustratifs.',
    deroule: [
      {
        etiquette: 'Le projet, découpé',
        contenu:
          'Quatre fonctions dans le devis : réserver un vélo, suivre sa position en continu, prévenir quand un vélo revient de l’atelier, produire des statistiques d’usage mensuelles. 85 000 CHF de développement, 79 CHF par mois de back-office loué, 40 capteurs de position à 90 CHF pièce.',
      },
      {
        etiquette: 'Q — le besoin des clients',
        contenu:
          'Entretiens avec les six entreprises pilotes : deux besoins seulement reviennent — savoir si un vélo est disponible le matin, et savoir quand celui qui est à l’atelier revient. Le suivi permanent et les statistiques ne répondent à aucune demande exprimée.',
      },
      {
        etiquette: 'Q — ce qui tombe',
        contenu:
          'Le suivi GPS en continu et les statistiques mensuelles sont barrés : rien de grave ne se produit si personne ne les fait. Deux fonctions sur quatre disparaissent avant qu’une seule ligne de code soit écrite — et avec eux les 40 capteurs.',
      },
      {
        etiquette: 'T — l’autre moyen',
        contenu:
          'Les deux besoins confirmés n’exigent pas une application à installer. Un tableau de disponibilité partagé, tenu par l’atelier, et un message texte automatique en fin de réparation les couvrent. Environ 3 000 CHF de mise en place, 40 CHF par mois.',
      },
      {
        etiquette: 'T — ce que le transfert supprime',
        contenu:
          'Zéro objet connecté à fabriquer, aucune application à installer sur les téléphones des salariés, aucune donnée de localisation transportée ni stockée, et une dépendance de moins à un prestataire unique.',
      },
      {
        etiquette: 'A — l’optimisation de ce qui reste',
        contenu:
          'Page web sans image lourde, lisible sur un téléphone de six ans ; deux états seulement conservés, « disponible » et « à l’atelier » ; message texte plutôt que notification propriétaire ; aucune donnée nominative au-delà du numéro de téléphone du référent de chaque entreprise.',
      },
      {
        etiquette: 'Le test du rebond',
        contenu:
          'La question posée : la facilité de réservation va-t-elle multiplier les trajets courts qui se faisaient à pied ? Réponse honnête : possible, et non mesuré. On inscrit donc un indicateur au pilote — nombre total de réservations et distance totale parcourue, en absolu, mois par mois.',
      },
      {
        etiquette: 'Le garde-fou',
        contenu:
          'Le guichet de Plainpalais reste ouvert et le dépôt sans réservation reste possible. Le message texte a été choisi parce qu’il fonctionne sur n’importe quel téléphone : la solution la plus sobre était aussi, ici, la plus accessible.',
      },
    ],
    conclusion:
      'Le Q – T – A n’a pas dit non au numérique : il a ramené un projet de 85 000 CHF et 40 objets connectés à un outil de 3 000 CHF sans matériel supplémentaire, en couvrant les deux besoins réellement exprimés. Le résultat n’est pas un argument écologique décoratif — il redescend directement dans le business model, où les fonctions retenues deviennent des activités clés et où l’économie dégagée finance la reprise des batteries, et il revient au moment d’arbitrer, puisque le guichet maintenu est ce qui rend l’option acceptable pour les clients qui n’ont pas de smartphone récent.',
  },

  phraseOral:
    'Le devis de l’application ne se discute pas d’abord en termes d’hébergement ou de performance : je le passe dans l’ordre du cours, questionner, transférer, améliorer. Au Q, deux fonctions sur quatre tombent parce que les entreprises pilotes ne les ont jamais demandées. Au T, les deux besoins qui restent sont couverts par un tableau partagé et un message texte, ce qui supprime quarante capteurs qu’il aurait fallu fabriquer. Il ne reste qu’ensuite à optimiser — et j’ajoute que cette dernière étape est la plus fragile, parce que l’efficacité seule est exposée à l’effet rebond. Une seule chose ne se coupe pas au nom de la sobriété : le guichet de Plainpalais, sinon j’ai allégé le service en excluant des clients.',

  aRetenir: [
    { cle: 'L’ordre', valeur: '📘 Questionner → Transférer → Améliorer. L’ordre est le contenu du modèle, pas les trois mots.' },
    { cle: 'L’ordre inverse', valeur: 'Améliorer → Transférer → Questionner : le réflexe spontané, celui qui mène au rebond' },
    { cle: 'Les deux principes 📘', valeur: 'Sobriété — questionner les besoins en première intention · lucidité — penser les conséquences directes et indirectes' },
    { cle: 'Sobriété vs efficacité', valeur: 'La sobriété agit sur le besoin et le volume ; l’efficacité sur l’impact par unité' },
    { cle: 'La phrase d’examen', valeur: '« Sans sobriété, les gains d’efficacité peuvent être annulés par l’effet rebond »' },
    { cle: 'Ce que la sobriété n’est pas', valeur: '📘 Ni une privation ni une suppression : « une sélection raisonnée de ce qui est nécessaire »' },
    { cle: 'Besoin / satisfier', valeur: 'Le besoin est stable et limité ; le satisfier est le moyen, variable et extensible. On change de satisfier, pas de besoin.' },
    { cle: 'Le garde-fou 📘', valeur: 'Sobriété injuste : couper une aide à la compréhension ou une alternative accessible' },
    { cle: 'La même structure ailleurs', valeur: 'Réduire / Réutiliser / Recycler · Acheter moins / mieux / plus longtemps — agir sur le besoin avant la technique' },
    { cle: 'Le geste d’examen', valeur: 'Découper le projet en fonctions, puis passer chaque fonction dans Q, T, A séparément' },
  ],

  notions: [
    'sobriete-numerique',
    'sobriete-injuste',
    'effet-rebond',
    'besoins-fondamentaux',
    'trois-postes-numerique',
    'data-center',
    'rgesn',
    'eco-conception',
    'minimisation-donnees',
    'trois-r',
    'achats-it-responsables',
    'economie-fonctionnalite',
    'accessibilite-numerique',
    'exclusion-indirecte',
    'debat-numerique-durabilite',
    'effets-ocde',
    'boucle-retroaction',
    'quatre-criteres-donut',
    'transformation-numerique',
    'perimetre-numerique',
  ],
}
