import type { Modele } from './types'

export const modele: Modele = {
  id: 'agenda-2030',
  numero: 16,
  slug: 'agenda-2030',
  nom: 'Agenda 2030',
  sousTitre: '17 ODD · 169 cibles · 5P',
  famille: 'durabilite',
  etape: 'transverse',

  question:
    'À quels objectifs mondiaux cette entreprise contribue-t-elle réellement — et sur lesquels dégrade-t-elle la situation ?',

  enUnePhrase:
    'L’Agenda 2030 est le programme adopté le 25 septembre 2015 par les 193 États membres de l’ONU : 17 objectifs de développement durable (ODD) et leurs 169 cibles, organisés autour de cinq mots — Populations, Planète, Prospérité, Paix, Partenariats — qui donnent un langage commun pour dire où l’on veut aller, sans jamais dire comment y aller.',

  produit:
    'Une sélection argumentée de deux à quatre ODD réellement matériels pour l’entreprise, chacun descendu jusqu’à une cible précise et à un indicateur mesuré en valeur absolue — plus au moins une tension nommée entre deux ODD que le projet ne concilie pas.',

  quandUtiliser: [
    'Quand il faut nommer l’ambition durable d’une stratégie dans un vocabulaire que tout le monde reconnaît : investisseurs, clients publics, ONG, collaborateurs.',
    'Comme grille de complétude, avant de conclure : les 5P servent à vérifier qu’aucune dimension n’a été oubliée dans l’analyse — surtout Paix, qui est le P qu’on saute.',
    'Quand on cherche des indicateurs : les 169 cibles fournissent des objectifs déjà formulés, et la Suisse en tire son système MONET 2030.',
    'Quand une opportunité de marché se cherche : un besoin non satisfait correspondant à un ODD est un espace inoccupé — c’est la porte d’entrée de l’océan bleu.',
    'En anticipation réglementaire : ce que les ODD réclament aujourd’hui, les lois l’imposent demain — l’Agenda 2030 se lit alors comme un facteur politique et légal du PESTEL.',
  ],

  quandNePasUtiliser: [
    'Pour arbitrer entre deux options : l’Agenda 2030 met les 17 objectifs à plat, sans hiérarchie. Il pose les tensions, il ne les tranche pas. Ce sont le wedding cake et le Donut qui hiérarchisent et qui bornent.',
    'Pour construire une solution : c’est un cadre normatif. L’outil qui traduit une ambition en décisions concrètes est le BMC durable.',
    'Pour se décerner un satisfecit : afficher les 17 pictogrammes et cocher ceux auxquels on « contribue » ne prouve rien — toute entreprise contribue à l’ODD 12 dans un sens ou dans l’autre.',
    'Comme substitut à une mesure : un ODD cité sans cible ni indicateur reste une déclaration. C’est exactement la frontière du SDG-washing.',
  ],

  schema: {
    h: 1070,
    description:
      'Une case centrale — l’Agenda 2030 et ses 17 ODD — rayonne vers les cinq P : Populations en haut, Planète à gauche, Prospérité à droite, Paix et Partenariats en bas ; sous la case centrale, deux cases descendent des 17 objectifs vers les deux à quatre ODD matériels, puis vers la cible précise et l’indicateur.',
    noeuds: [
      {
        id: 'populations',
        titre: 'POPULATIONS',
        lignes: ['dignité, pauvreté, faim, santé', 'éducation, égalité · ODD 1 à 5'],
        x: 370,
        y: 40,
        l: 260,
        h: 140,
        point: 'populations',
      },
      {
        id: 'planete',
        titre: 'PLANÈTE',
        lignes: ['climat, eau, biodiversité,', 'consommation · ODD 6, 12 à 15'],
        x: 40,
        y: 250,
        l: 260,
        h: 140,
        point: 'planete',
      },
      {
        id: 'centre',
        titre: 'AGENDA 2030 — 17 ODD',
        lignes: ['25.09.2015 · 193 États membres', 'échéance 2030 · les 5P'],
        x: 370,
        y: 250,
        l: 260,
        h: 140,
        ton: 'accent',
        point: 'centre',
      },
      {
        id: 'prosperite',
        titre: 'PROSPÉRITÉ',
        lignes: ['énergie, travail, industrie,', 'villes, inégalités · ODD 7 à 11'],
        x: 700,
        y: 250,
        l: 260,
        h: 140,
        point: 'prosperite',
      },
      {
        id: 'paix',
        titre: 'PAIX — la condition',
        lignes: ['institutions, justice, sécurité', 'souveraineté · ODD 16'],
        x: 170,
        y: 460,
        l: 260,
        h: 140,
        ton: 'alerte',
        point: 'paix',
      },
      {
        id: 'partenariats',
        titre: 'PARTENARIATS — le moyen',
        lignes: ['personne n’y arrive seul', 'coopération · ODD 17'],
        x: 570,
        y: 460,
        l: 260,
        h: 140,
        point: 'partenariats',
      },
      {
        id: 'materiels',
        titre: '2 À 4 ODD MATÉRIELS',
        lignes: ['ceux où l’impact est réel,', 'positif comme négatif'],
        x: 290,
        y: 680,
        l: 420,
        h: 140,
        ton: 'positif',
        point: 'materiels',
      },
      {
        id: 'cibles',
        titre: 'LA CIBLE, PUIS LE KPI',
        lignes: ['descendre dans les 169 cibles', 'un objectif SMART, en absolu'],
        x: 290,
        y: 890,
        l: 420,
        h: 140,
        ton: 'positif',
        point: 'cibles',
      },
    ],
    liens: [
      { de: 'centre', vers: 'populations', depuis: 'haut', arrive: 'bas', libelle: 'finalité' },
      { de: 'centre', vers: 'planete', depuis: 'gauche', arrive: 'droite', libelle: 'finalité' },
      { de: 'centre', vers: 'prosperite', depuis: 'droite', arrive: 'gauche', libelle: 'finalité' },
      { de: 'centre', vers: 'paix', depuis: 'bas', arrive: 'haut', libelle: 'condition', ton: 'alerte' },
      { de: 'centre', vers: 'partenariats', depuis: 'bas', arrive: 'haut', libelle: 'moyen' },
      { de: 'centre', vers: 'materiels', depuis: 'bas', arrive: 'haut', libelle: 'on sélectionne', ton: 'accent' },
      { de: 'materiels', vers: 'cibles', depuis: 'bas', arrive: 'haut', libelle: 'on descend', ton: 'accent' },
    ],
    note:
      'Planète et Prospérité ne pointent pas dans la même direction, et l’Agenda 2030 ne le cache pas : il pose la tension et laisse l’arbitrage aux acteurs. 🔎 La répartition des ODD entre les cinq P est une reconstruction : les supports du cours donnent les 5P, pas le détail de la répartition.',
  },

  points: [
    {
      id: 'centre',
      libelle: 'Agenda 2030 — la case centrale',
      cestQuoi:
        '📘 Le programme adopté le 25 septembre 2015 par les 193 États membres de l’ONU. Le cours en donne la structure exacte : « Les 17 objectifs de développement durable (ODD) et leurs 169 cibles (sous-objectifs) forment la clé de voûte de l’Agenda 2030. » Une clé de voûte est la pierre centrale d’une arche : retirez-la, tout s’effondre. L’image dit que les objectifs forment un système, pas un menu dans lequel on choisit.',
      question:
        'Sur quels objectifs mondiaux mon activité pèse-t-elle vraiment — dans le bon sens comme dans le mauvais ?',
      quoiMettre: [
        '📘 Les cinq chiffres, à réciter sans hésiter : 25 septembre 2015 · 193 États · 17 objectifs · 169 cibles · échéance 2030.',
        '📘 L’universalité, qui est la rupture du texte : « Les ODD doivent être atteints par tous les États membres de l’ONU. » Les cadres précédents visaient les pays en développement ; celui-ci s’applique aussi à la Suisse. Personne n’est seulement donateur.',
        '📘 La déclinaison suisse : la Stratégie pour le développement durable 2030 (SDD 2030), par laquelle le Conseil fédéral fixe ses priorités de mise en œuvre.',
        '📘 Le système d’indicateurs qui va avec : MONET 2030, publié par l’Office fédéral de la statistique, qui montre où en est la Suisse sur chaque ODD.',
        '🔎 Le statut du cadre : c’est une ambition — « où voulons-nous aller ? ». Pas une contrainte physique (ce sont les limites planétaires), pas un espace d’admissibilité (c’est le Donut), pas un outil d’action (c’est le BMC durable).',
      ],
      exemple:
        'Atelier Léman ne « fait pas les ODD ». Elle pèse sur quelques-uns : elle met chaque année environ 240 batteries lithium-ion en circulation sans en reprendre aucune (ODD 12), elle sert la mobilité douce dans une ville qui la subventionne (ODD 11), et elle achète à deux fournisseurs asiatiques dont elle ne connaît pas les conditions de travail (ODD 8). Trois objectifs sur dix-sept, dont deux où l’impact est négatif — chiffre illustratif pour les batteries.',
      piege:
        'Réciter la date et les chiffres, puis s’arrêter là. Le correcteur entend un cadre appris, pas une analyse : rien n’a encore été dit de l’entreprise du cas.',
      reflexe:
        'Enchaîne toujours les chiffres avec une phrase d’application : « … 169 cibles. Pour cette entreprise, les objectifs qui comptent sont le 12 et le 11, pour telle raison. » Les chiffres servent d’élan, jamais de conclusion.',
      notions: ['agenda-2030', 'odd', 'sdd-2030', 'monet-2030'],
    },
    {
      id: 'populations',
      libelle: 'P1 — Populations (finalité)',
      cestQuoi:
        '📘 Le premier des cinq P. Il couvre la dignité humaine : éliminer la pauvreté et la faim sous toutes leurs formes, garantir la santé, l’éducation et l’égalité. C’est la dimension « les besoins de tous les individus » de la définition de la durabilité donnée par le cours.',
      question:
        'Qui est affecté par cette décision — et surtout, qui en est exclu sans que personne l’ait voulu ?',
      quoiMettre: [
        '🔎 Les ODD généralement rattachés à ce P : 1 pauvreté, 2 faim, 3 santé, 4 éducation, 5 égalité entre les sexes. La répartition est une reconstruction, les slides ne la détaillent pas — dis-le si tu la cites.',
        'Les personnes touchées à l’intérieur de l’entreprise : salariés, apprentis, conditions de travail, formation.',
        'Les personnes touchées à l’autre bout de la chaîne : ouvriers d’une mine, salariés d’un sous-traitant, riverains d’un site de production.',
        'Les clients qui perdent l’accès : un prix qui monte, un guichet qui ferme, un service qui passe au tout-numérique excluent sans intention de nuire.',
        '🔎 Le lien direct avec le plancher social du Donut : Populations et plancher social parlent des mêmes gens, avec deux vocabulaires différents.',
      ],
      exemple:
        'Chez Atelier Léman, le P « Populations » se lit à deux endroits opposés. Dedans : quarante-cinq salariés, dont des mécaniciens très qualifiés dont le poste dépend du volume de réparations. Dehors et loin : les conditions de travail chez les deux fournisseurs asiatiques de batteries, sur lesquelles l’atelier ne sait rien — donc ne peut rien affirmer.',
      piege:
        'Ne regarder que les salariés de l’entreprise, c’est-à-dire les seules personnes visibles depuis le bureau de la direction. C’est le contraire de « ici et ailleurs ».',
      reflexe:
        'Pose la question deux fois : qui est affecté chez nous, et qui est affecté chez ceux qui nous fournissent ? Si la seconde réponse est « je ne sais pas », c’est déjà un résultat d’analyse — dis-le.',
      notions: ['cinq-p', 'plancher-social', 'durabilite', 'inclusion-numerique'],
    },
    {
      id: 'planete',
      libelle: 'P2 — Planète (finalité)',
      cestQuoi:
        '📘 Le deuxième P : protéger les ressources et les systèmes naturels — climat, eau, biodiversité, sols — et rendre les modes de consommation et de production compatibles avec eux. C’est le P que tout le monde cite, et souvent le seul.',
      question:
        'Quelles ressources cette activité prélève-t-elle, et quels rejets produit-elle — en totaux annuels, pas par produit vendu ?',
      quoiMettre: [
        '🔎 Les ODD généralement rattachés : 6 eau, 12 consommation et production responsables, 13 climat, 14 vie aquatique, 15 vie terrestre.',
        '📘 L’ODD 12, le seul détaillé par le cours et le plus utile en gestion : « réduire considérablement la production de déchets par la prévention, la réduction, le recyclage et la réutilisation », sur l’ensemble de la chaîne de valeur.',
        'Les matières et l’endroit du prélèvement : métaux, terres rares, eau — en nommant le lieu, pas seulement le lieu de fabrication.',
        'Le sort des produits en fin de vie : ce que l’entreprise ne reprend pas ne disparaît pas, il sort simplement de sa comptabilité.',
        '⚠️ Les quantités en valeur absolue. Un impact unitaire en baisse de 15 % avec des volumes en hausse de 30 % aggrave le total.',
      ],
      exemple:
        'Pour Atelier Léman, le P « Planète » n’est pas favorable par défaut sous prétexte qu’il s’agit de vélos. Il se lit en trois faits : l’extraction du lithium des batteries, le transport longue distance depuis l’Asie, et des batteries en fin de vie que personne ne reprend. Le vélo électrique évite des trajets en voiture — c’est vrai, et cela ne dispense pas de compter le reste.',
      piege:
        'Réduire « Planète » au carbone, ou considérer qu’un produit « vert » rend automatiquement ce P positif. Une entreprise peut décarboner et continuer de disperser des métaux.',
      reflexe:
        'Nomme deux impacts de nature différente, dont un non climatique. Et cite l’ordre des verbes de l’ODD 12 : prévention et réduction avant recyclage — c’est la hiérarchie des 3R, et elle est dans le texte officiel.',
      notions: ['cinq-p', 'odd-12', 'trois-r', 'limites-planetaires'],
    },
    {
      id: 'prosperite',
      libelle: 'P3 — Prospérité (finalité)',
      cestQuoi:
        '📘 Le troisième P : permettre à tous une vie épanouissante, en harmonie avec la nature — énergie, travail décent, industrie et infrastructures, réduction des inégalités, villes durables. C’est le P économique, et c’est celui qui entre en tension avec Planète.',
      question:
        'Quelle valeur économique cette activité crée-t-elle, et pour qui va-t-elle vraiment ?',
      quoiMettre: [
        '🔎 Les ODD généralement rattachés : 7 énergie, 8 travail décent et croissance, 9 industrie et innovation, 10 inégalités, 11 villes et communautés durables.',
        'La valeur créée, chiffrée : chiffre d’affaires, marge, emplois, formation, impôts locaux.',
        'La répartition de cette valeur : ce qui reste aux salariés, aux fournisseurs, au territoire — pas seulement au propriétaire.',
        '⚠️ La tension avec Planète, à nommer explicitement : Prospérité pousse au volume, à l’industrialisation, à l’énergie disponible ; Planète pousse à la réduction. Le cadre pose les deux et laisse arbitrer.',
        '🔎 Le point où la tension se dénoue parfois : l’économie de la fonctionnalité, qui fait gagner de l’argent en gardant les objets en service plutôt qu’en les remplaçant.',
      ],
      exemple:
        'Atelier Léman réalise 6,2 M CHF de chiffre d’affaires avec quarante-cinq salariés, dont des mécaniciens qualifiés — c’est de la prospérité locale réelle, et la Ville de Genève la soutient par ses subventions à la mobilité douce. Mais le modèle de vente prospère quand on vend plus de vélos neufs, ce qui pousse dans le sens inverse de l’ODD 12. La tension n’est pas théorique : elle est dans le compte de résultat.',
      piege:
        'Présenter les cinq P comme un ensemble harmonieux où tout se concilie. Aucun projet réel n’améliore les dix-sept ODD à la fois, et le prétendre signale qu’aucune analyse n’a été faite.',
      reflexe:
        'Impose-toi de citer une tension par cas. La formule tient en une phrase : « ce projet gagne sur l’ODD 11 et perd sur l’ODD 8, parce que… ». C’est le passage le mieux noté du volet durabilité.',
      notions: ['cinq-p', 'economie-fonctionnalite', 'tensions-strategiques', 'buts-objectifs'],
    },
    {
      id: 'paix',
      libelle: 'P4 — Paix (condition)',
      cestQuoi:
        '📘 Le quatrième P : des sociétés pacifiques, justes et inclusives — institutions solides, accès à la justice, sécurité. 🔎 Il n’a pas le même statut que les trois premiers : ce n’est pas une finalité qu’on vise en plus des autres, c’est la condition sans laquelle aucune des trois n’est atteignable. En zone de conflit, ni les populations, ni la planète, ni la prospérité ne progressent.',
      question:
        'Cette décision crée-t-elle une dépendance, un risque de rupture ou un enjeu de souveraineté que nous ne maîtrisons pas ?',
      quoiMettre: [
        '🔎 L’ODD généralement rattaché : le 16, paix, justice et institutions efficaces.',
        'Les dépendances critiques : un fournisseur unique, une juridiction étrangère, une infrastructure hors de portée, une plateforme dont on ne peut plus sortir.',
        'La fragilité des chaînes d’approvisionnement : ce qui arrive si la route se coupe pendant six mois.',
        '📘 L’exercice que le cours en tire : concevoir un système informatique de PME capable de résister à une « coupure de service de la part des USA, sur décision présidentielle » et à une « rupture des chaînes d’approvisionnement en matériaux et pièces informatiques en provenance de l’Asie ».',
        '🔎 La traduction en gestion : la réversibilité. Peut-on revenir en arrière, changer de fournisseur, rapatrier ses données — et à quel coût ?',
      ],
      exemple:
        'C’est le P qui révèle l’angle mort d’Atelier Léman. Ses batteries viennent de deux fournisseurs asiatiques : deux, ce n’est pas de la diversification, c’est deux points de rupture. Une hausse des droits de douane, une restriction à l’exportation ou un conflit régional arrêtent la fabrication de vélos du jour au lendemain, sans que rien dans le compte de résultat ne l’ait annoncé. Le pôle réparation, lui, tient : il travaille toutes marques, avec des pièces multiples.',
      piege:
        'Sauter ce P parce qu’il « ne concerne pas une PME suisse ». C’est l’erreur la plus fréquente sur les 5P, et c’est celle qui fait rater le risque le plus brutal — celui qui arrête l’entreprise en une semaine.',
      reflexe:
        'Traduis « Paix » en trois mots de gestionnaire : dépendance, rupture, souveraineté. Posés comme ça, ils s’appliquent à n’importe quel cas, y compris un atelier de vélos à Carouge.',
      notions: ['cinq-p', 'souverainete-numerique', 'resilience', 'pouvoir-fournisseurs'],
    },
    {
      id: 'partenariats',
      libelle: 'P5 — Partenariats (moyen)',
      cestQuoi:
        '📘 Le cinquième P : mobiliser les moyens de mise en œuvre par une coopération mondiale. 🔎 Lui non plus n’est pas une finalité : c’est le moyen de tous les autres. Le fait qu’il figure parmi les cinq piliers est la reconnaissance officielle d’une chose simple — les seize premiers objectifs sont hors de portée d’un acteur isolé.',
      question:
        'Qui devons-nous embarquer, parce que nous ne pouvons pas y arriver seuls ?',
      quoiMettre: [
        '🔎 L’ODD rattaché : le 17, partenariats pour la réalisation des objectifs — le dernier de la liste, et le seul consacré aux moyens.',
        'Les partenaires publics : commune, canton, services de la mobilité, marchés publics à critères responsables.',
        'Les partenaires de filière : collecteurs, reconditionneurs, recycleurs — une boucle circulaire a par définition au moins deux extrémités.',
        'Les concurrents, quand la coopération est le seul moyen d’atteindre la taille critique : c’est la coopétition, et elle est parfaitement admissible.',
        'Les financeurs et les clients embarqués tôt : une banque, un canton, des clients pilotes qui acceptent de tester avant que le service soit parfait.',
      ],
      exemple:
        'Atelier Léman ne peut pas reprendre et reconditionner ses batteries seule : il lui manque la filière. Le P « Partenariats » nomme donc trois acteurs concrets — une filière suisse de collecte et de seconde vie des batteries, la Ville de Genève dont les subventions à la mobilité douce peuvent financer un pilote, et six entreprises genevoises qui acceptent d’être les premières abonnées avec quarante vélos sur douze mois.',
      piege:
        'Traiter Partenariats comme un objectif ordinaire, aligné avec les quatre autres, ou l’oublier parce qu’il paraît administratif. C’est pourtant le P qui rend les autres réalisables.',
      reflexe:
        'Termine toute recommandation par une liste nominative : qui, précisément, doit être embarqué pour que cela marche ? Trois noms valent mieux qu’un principe de coopération.',
      notions: ['cinq-p', 'partenaires-cles', 'coopetition', 'parties-prenantes'],
    },
    {
      id: 'materiels',
      libelle: 'La sélection — 2 à 4 ODD matériels',
      cestQuoi:
        '🔎 Le premier geste opérationnel : passer des dix-sept objectifs à ceux sur lesquels l’entreprise a un impact réel. « Matériel » ne veut pas dire « sympathique » ni « valorisant » — cela veut dire que l’activité y change quelque chose, en bien ou en mal, de façon significative.',
      question:
        'Sur quels objectifs mon activité change-t-elle réellement quelque chose — et lesquels sont-ils, si j’ai le droit d’en garder trois seulement ?',
      quoiMettre: [
        'La cartographie complète d’abord : les dix-sept passés en revue rapidement, avec un signe + ou − pour chacun, et rien pour les autres.',
        'La sélection ensuite : deux à quatre objectifs, ceux où l’impact est le plus fort. 📘 Le livrable de l’étape durabilité en demande « 2 à 4, pas 17 ».',
        '⚠️ Au moins un ODD sur lequel l’impact est négatif. Une sélection uniquement flatteuse est une plaquette de communication, pas un diagnostic.',
        'La justification de chaque choix par un fait du cas — une matière, un flux, un métier, un territoire — jamais par une intention.',
        'Le rôle de chaque ODD retenu : principal, secondaire, ou condition. Cela évite d’en mettre quatre au même niveau.',
      ],
      exemple:
        'Atelier Léman en retient quatre. ODD 12, consommation et production responsables, en principal : c’est là que se jouent les batteries et la durée de vie des vélos. ODD 11, villes et communautés durables, en secondaire : le service porte la mobilité douce à Genève. ODD 8, travail décent, en secondaire mais sur le versant négatif : les conditions chez les fournisseurs sont inconnues. ODD 17, partenariats, en condition : sans filière de reprise, rien ne se fait.',
      piege:
        'Le mur de logos : afficher les dix-sept pictogrammes et cocher ceux auxquels on « contribue ». On finit par contribuer à quinze objectifs et à n’en piloter aucun.',
      reflexe:
        'Formule-le à l’oral comme une contrainte que tu t’imposes : « je retiens trois ODD, parce que trois pilotés valent mieux que dix-sept cochés ». Le correcteur entend un choix, pas une omission.',
      notions: ['odd', 'greenwashing', 'diagnostic-strategique', 'externalite-negative'],
    },
    {
      id: 'cibles',
      libelle: 'La descente — la cible, puis le KPI',
      cestQuoi:
        '🔎 Le second geste opérationnel, et le plus discriminant : un ODD est un intitulé général, une cible est un sous-objectif précis parmi les 169, un indicateur est un chiffre qu’on relève. S’arrêter à l’ODD, c’est de la communication ; descendre jusqu’à l’indicateur, c’est de la stratégie.',
      question:
        'Quelle cible précise, et quel chiffre relevé quand, prouveront dans dix-huit mois que ce n’était pas du discours ?',
      quoiMettre: [
        '📘 La cible choisie parmi les 169 — ce sont des sous-objectifs déjà formulés, souvent déjà chiffrés : inutile de les réinventer.',
        '📘 Un objectif SMART, comme le cours l’exige : « Formulez 1 objectif SMART […] Les objectifs doivent guider la stratégie et être mesurables. »',
        '⚠️ Un indicateur en valeur absolue — tonnes, unités, nombre total — et non seulement un ratio par produit. C’est la seule protection contre l’effet rebond.',
        'Un indicateur d’intensité en complément, parce qu’il pilote l’effort au quotidien, et un indicateur de contrôle qui surveille le volume total.',
        '📘 Pour la Suisse, les indicateurs MONET 2030 de l’Office fédéral de la statistique donnent des formulations déjà officielles à reprendre.',
      ],
      exemple:
        'Pour Atelier Léman, ODD 12, cible « réduction de la production de déchets par la prévention, la réduction, le recyclage et la réutilisation ». Objectif SMART : porter le taux de reprise des batteries du parc de 0 % à 100 % en dix-huit mois sur le périmètre du pilote. Trois indicateurs : batteries mises en circulation sans reprise, en nombre absolu — environ 240 par an aujourd’hui, chiffre illustratif ; durée de vie moyenne d’un vélo du parc, en mois ; nombre total de vélos en circulation, comme garde-fou contre l’effet rebond.',
      piege:
        'Dire « nous contribuons à l’ODD 12 » et s’arrêter là. Toute entreprise qui produit quelque chose contribue à l’ODD 12, dans un sens ou dans l’autre : la phrase n’engage à rien.',
      reflexe:
        'Trois marches, toujours dans l’ordre : ODD → cible → indicateur. Si tu ne peux pas nommer la troisième marche, tu es encore dans la communication.',
      notions: ['odd-12', 'kpi', 'buts-objectifs', 'monet-2030', 'effet-rebond'],
    },
  ],

  methode: [
    {
      titre: '1. Poser les cinq chiffres, puis passer à autre chose',
      detail:
        'En une phrase : adopté le 25 septembre 2015 par 193 États, 17 objectifs, 169 cibles, échéance 2030, organisés autour des 5P. Dix secondes, et le cadre est installé. C’est aussi la preuve immédiate que le cours est su.',
      aEviter:
        'Étirer cette phrase en un exposé sur l’ONU. Sur dix minutes de passage, chaque minute de contexte est une minute de moins sur le cas.',
    },
    {
      titre: '2. Passer les 5P comme grille de complétude, une ligne chacun',
      detail:
        'Sur le brouillon, cinq lignes : Populations, Planète, Prospérité, Paix, Partenariats. Face à chacune, ce que le cas révèle — même « rien de notable », qui est une réponse. La grille ne sert pas à décider, elle sert à voir ce qu’on avait oublié de regarder, et l’oubli est presque toujours Paix.',
      aEviter:
        'Sauter Paix et Partenariats parce qu’ils semblent hors sujet pour une PME. Ce sont précisément les deux P qui font apparaître les risques de rupture et les acteurs manquants.',
    },
    {
      titre: '3. Cartographier l’impact réel, positif ET négatif',
      detail:
        'Parcours les dix-sept objectifs vite, en notant un + ou un − quand l’activité y change quelque chose. Appuie chaque signe sur un fait de l’énoncé : une matière achetée, un transport, un déchet, un métier, un territoire. Un objectif sans fait rattaché ne compte pas.',
      aEviter:
        'Ne relever que les impacts positifs. Une cartographie sans un seul signe négatif n’est pas une cartographie, c’est une plaquette.',
    },
    {
      titre: '4. Sélectionner deux à quatre ODD, et leur donner un rôle',
      detail:
        'Garde ceux où l’impact est le plus fort, dont au moins un négatif. Attribue un rôle à chacun : principal, secondaire, ou condition de faisabilité. Le rôle évite de présenter quatre objectifs alignés comme s’ils pesaient pareil.',
      aEviter:
        'Le mur de logos. Contribuer à quinze objectifs et n’en piloter aucun est l’erreur la plus répandue en entreprise, et elle porte un nom : SDG-washing.',
    },
    {
      titre: '5. Descendre jusqu’à la cible, puis jusqu’au chiffre',
      detail:
        'Pour l’ODD principal, choisis une cible parmi les 169, formule un objectif SMART, et pose trois indicateurs : un en valeur absolue, un d’intensité, un de contrôle du volume total. C’est le passage qui transforme une déclaration en engagement vérifiable.',
      aEviter:
        'Un indicateur uniquement par unité vendue. Il permet d’afficher un progrès pendant que le total augmente — c’est exactement le mécanisme de l’effet rebond.',
    },
    {
      titre: '6. Nommer au moins une tension, puis passer la main',
      detail:
        'Dis sur quel ODD le projet dégrade la situation, et pourquoi. Puis énonce la limite du cadre : l’Agenda 2030 met les objectifs à plat, il ne hiérarchise pas. Ce sont le wedding cake qui hiérarchise, le Donut qui borne, et le BMC durable qui traduit en décisions.',
      aEviter:
        'Conclure que le projet « va dans le sens des ODD ». Aucun projet réel n’améliore les dix-sept objectifs à la fois : l’affirmer prouve que l’analyse n’a pas été faite.',
    },
  ],

  liens: [
    {
      vers: 'wedding-cake',
      nature: 'prolonge',
      explication:
        'Le wedding cake prend les dix-sept mêmes objectifs et les empile en trois étages — biosphère, société, économie : là où l’Agenda 2030 met les ODD à plat sans hiérarchie, il tranche l’arbitrage en faisant de la biosphère la condition des deux autres.',
    },
    {
      vers: 'donut',
      nature: 'partage',
      explication:
        'Les ODD disent où l’on veut aller, les limites planétaires jusqu’où l’on peut aller, et le Donut installe les deux sur un même dessin : le plancher social est la traduction spatiale de l’ambition, le plafond écologique celle de la contrainte.',
    },
    {
      vers: 'bmc-durable',
      nature: 'alimente',
      explication:
        'Un ODD retenu ne reste pas une intention : il descend dans un bloc précis du BMC durable — l’ODD 12 dans les ressources clés et le modèle de revenus, l’ODD 8 dans les partenaires, l’ODD 11 dans les segments de clientèle.',
    },
    {
      vers: 'pestel',
      nature: 'alimente',
      explication:
        'L’Agenda 2030 n’est pas qu’un cadre moral : il alimente le P et le L du PESTEL, parce que ce que les ODD réclament aujourd’hui devient réglementation demain — et en Suisse, la SDD 2030 est déjà la feuille de route du Conseil fédéral.',
    },
    {
      vers: 'saf',
      nature: 'alimente',
      explication:
        'Les ODD retenus deviennent des critères de souhaitabilité — l’option est-elle cohérente avec l’ambition affichée ? — et les tensions nommées entre objectifs deviennent des questions d’acceptabilité pour les parties prenantes concernées.',
    },
  ],

  pieges: [
    {
      titre: 'Le mur de logos',
      explication:
        'Afficher les dix-sept pictogrammes et cocher ceux auxquels on « contribue ». Toute entreprise qui produit quelque chose contribue à l’ODD 12 dans un sens ou dans l’autre : la contribution non chiffrée ne prouve rien. C’est la définition même du SDG-washing, forme durable du greenwashing.',
      reflexe:
        'Un test en une question : les ODD affichés touchent-ils la proposition de valeur et les activités clés, ou seulement la communication ? Si c’est la seconde réponse, dis-le — c’est une analyse, pas une critique gratuite.',
    },
    {
      titre: 'Oublier « Paix »',
      explication:
        'C’est le P qu’on saute, parce qu’il paraît réservé aux zones de conflit. Il couvre pourtant la souveraineté, la sécurité des données et la fragilité des chaînes d’approvisionnement — c’est-à-dire les risques qui arrêtent une PME en une semaine.',
      reflexe:
        'Traduis-le en trois mots utilisables partout : dépendance, rupture, souveraineté. Pose-les sur n’importe quel cas et le P se remplit tout seul.',
    },
    {
      titre: 'Traiter « Partenariats » comme un objectif ordinaire',
      explication:
        'Partenariats n’est pas une finalité au même titre que Planète : c’est le moyen des seize autres. Sa présence parmi les cinq piliers est la reconnaissance officielle qu’aucun acteur isolé ne peut atteindre les ODD — une boucle circulaire, par exemple, a toujours au moins deux extrémités.',
      reflexe:
        'Dis l’architecture plutôt que la liste : trois finalités (Populations, Planète, Prospérité), une condition (Paix), un moyen (Partenariats). En une phrase, on passe de la récitation à l’explication.',
    },
    {
      titre: 'Prétendre que les cinq P sont harmonieux',
      explication:
        'Planète et Prospérité ne pointent pas dans la même direction : l’une pousse à réduire la consommation de ressources, l’autre à la croissance, à l’industrialisation et à l’énergie disponible. L’Agenda 2030 pose les deux et laisse l’arbitrage aux États et aux acteurs — il ne le résout pas.',
      reflexe:
        'Nomme une tension par cas, avec les numéros : « ce projet gagne sur l’ODD 11 et perd sur l’ODD 8 ». Puis ajoute qui tranche : le wedding cake hiérarchise, le Donut borne.',
    },
    {
      titre: 'Confondre les ODD et les limites planétaires',
      explication:
        'Les dix-sept ODD sont une ambition politique adoptée en 2015 par 193 États ; les neuf limites planétaires sont un constat scientifique publié par Rockström en 2009. L’un se négocie et se hiérarchise, l’autre pas. Les mélanger fait perdre la distinction la plus rentable du volet durabilité.',
      reflexe:
        'Une phrase apprise par cœur : « ODD = ambition, limites planétaires = contraintes, Donut = l’espace entre les deux, BMC durable = la traduction en décisions ».',
    },
  ],

  variantes: [
    {
      sujet: 'Le premier P : « Populations » ou « People »',
      formulations: [
        { texte: 'Populations, au pluriel', source: '📘 formulation du cours de durabilité' },
        { texte: 'People', source: '📚 formulation onusienne standard, hors cours' },
      ],
      consigne:
        'Emploie « Populations », qui est le mot du support. Si tu cites « People », signale d’un mot que c’est la formulation onusienne d’origine et non celle du cours : montrer qu’on connaît les deux et qu’on sait laquelle est celle du support vaut mieux que d’en citer une seule au hasard.',
    },
    {
      sujet: 'Le sigle « 5P » d’un support à l’autre',
      formulations: [
        {
          texte:
            'Les cinq piliers de l’Agenda 2030 : Populations, Planète, Prospérité, Paix, Partenariats',
          source: '📘 cours de durabilité',
        },
        {
          texte:
            'La préparation d’un entretien — les « 5 pourquoi » qui remontent à la cause racine',
          source: '⚠️ cours sur la collecte de données, autre support',
        },
      ],
      consigne:
        'Ce n’est pas une divergence de contenu mais une collision de sigles entre deux supports du même cours ; elle se produit à l’oral dès que la question glisse vers la collecte de données. Le réflexe tient en une incise : « les 5P de l’Agenda 2030, à ne pas confondre avec les 5 pourquoi de l’interview ». Une seconde de précision, et le correcteur sait que les deux supports ont été lus.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman SA — de dix-sept objectifs à trois indicateurs',
    situation:
      'Le diagnostic externe et interne est fait, le business model est posé, et la direction hésite encore entre défendre la vente de vélos et basculer vers un abonnement mobilité pour les entreprises genevoises. L’Agenda 2030 n’intervient pas ici pour choisir : il intervient pour dire à quoi l’entreprise prétend contribuer, dans un vocabulaire vérifiable — avant que le Donut ne juge l’option et que le BMC durable ne la traduise en blocs. Les chiffres qui suivent sont illustratifs.',
    deroule: [
      {
        etiquette: 'Les cinq chiffres',
        contenu:
          '📘 25 septembre 2015 · 193 États membres de l’ONU · 17 ODD · 169 cibles · échéance 2030 · les 5P. Une phrase, et le cadre est posé.',
      },
      {
        etiquette: 'Les 5P en grille de complétude',
        contenu:
          'Populations : 45 salariés et des fournisseurs inconnus. Planète : batteries, transport, fin de vie. Prospérité : 6,2 M CHF et des ventes en recul de 8 %. Paix : deux fournisseurs asiatiques, donc deux points de rupture. Partenariats : aucune filière de reprise à ce jour.',
      },
      {
        etiquette: 'La cartographie',
        contenu:
          'Impact fort sur les ODD 12, 11, 8 et 17. Impact marginal sur les treize autres — et deux des quatre retenus sont négatifs : l’ODD 12 par les batteries non reprises, l’ODD 8 par des conditions de travail inconnues en amont.',
      },
      {
        etiquette: 'La sélection et les rôles',
        contenu:
          'ODD 12 en principal. ODD 11 en secondaire, positif : la mobilité douce à Genève, soutenue par les subventions de la Ville. ODD 8 en secondaire, négatif. ODD 17 en condition de faisabilité.',
      },
      {
        etiquette: 'La descente vers la cible',
        contenu:
          '📘 Cible de l’ODD 12 : « réduire considérablement la production de déchets par la prévention, la réduction, le recyclage et la réutilisation ». Le mot qui compte est le premier : prévention avant recyclage.',
      },
      {
        etiquette: 'L’objectif SMART',
        contenu:
          'Reprendre et reconditionner 100 % des batteries du parc en 18 mois, sur le périmètre du pilote — 40 vélos chez 6 entreprises genevoises sur 12 mois, puis extension.',
      },
      {
        etiquette: 'Les trois indicateurs',
        contenu:
          'En absolu : batteries mises en circulation sans reprise, environ 240 par an aujourd’hui. En intensité : durée de vie moyenne d’un vélo du parc, en mois. En contrôle : nombre total de vélos en circulation, pour vérifier qu’un progrès unitaire ne masque pas une hausse du volume.',
      },
      {
        etiquette: 'Les tensions nommées',
        contenu:
          'ODD 12 contre ODD 8 : allonger la durée de vie des vélos fait baisser le volume de ventes neuves, dont dépend une partie de l’emploi. ODD 11 contre ODD 12 : l’abonnement met plus de vélos en circulation, donc plus de batteries, avant d’en faire durer chacune davantage.',
      },
    ],
    conclusion:
      'De dix-sept objectifs, il reste quatre ODD, une cible, un objectif SMART, trois indicateurs et deux tensions nommées — assez pour être contredit, donc assez pour être crédible. Ce livrable ne dit toujours pas si l’abonnement est le bon choix : c’est le Donut qui dira à quelles conditions il est admissible, le BMC durable qui logera la reprise des batteries dans les ressources clés, et le SAF qui arbitrera entre les deux options.',
  },

  phraseOral:
    'L’Agenda 2030 me donne l’ambition, pas la décision : je retiens trois objectifs sur dix-sept — le 12 pour les batteries, le 11 pour la mobilité genevoise, le 8 pour des conditions de travail que nous ne connaissons pas chez nos fournisseurs — et je descends jusqu’à un chiffre, le nombre de batteries mises en circulation sans reprise. Et je dis tout de suite ce que le cadre ne fait pas : il met les objectifs à plat, il ne les hiérarchise pas. Faire durer les vélos fait baisser les ventes neuves, donc l’ODD 12 pousse contre l’ODD 8 — c’est le wedding cake qui tranche cette tension, et le Donut qui la borne.',

  aRetenir: [
    { cle: 'La citation exacte 📘', valeur: 'Le 25 septembre 2015, les 193 États membres de l’ONU ont adopté l’Agenda 2030 de développement durable' },
    { cle: 'La structure 📘', valeur: '17 ODD et leurs 169 cibles, « clé de voûte » de l’Agenda, échéance 2030' },
    { cle: 'Les 5P 📘', valeur: 'Populations · Planète · Prospérité · Paix · Partenariats — les ODD « s’articulent autour » d’eux' },
    { cle: 'L’architecture 🔎', valeur: '3 finalités + 1 condition (Paix) + 1 moyen (Partenariats) — pas cinq catégories équivalentes' },
    { cle: 'L’universalité 📘', valeur: 'Tous les États membres, y compris la Suisse : personne n’est seulement donateur' },
    { cle: 'La Suisse 📘', valeur: 'SDD 2030 pour les priorités du Conseil fédéral · indicateurs MONET 2030 de l’OFS' },
    { cle: 'Le seul ODD détaillé 📘', valeur: 'ODD 12 — prévention, réduction, recyclage, réutilisation : l’ordre des verbes est celui des 3R' },
    { cle: 'La règle d’usage', valeur: '2 à 4 ODD matériels, descendus jusqu’à la cible et à un indicateur en valeur absolue' },
    { cle: 'La tension à citer', valeur: 'Planète contre Prospérité — posée par le cadre, non résolue par lui' },
    { cle: 'La ligne de partage', valeur: 'ODD = ambition · limites planétaires = contraintes · Donut = l’espace entre les deux · BMC durable = l’action' },
    {
      cle: 'Les variantes à signaler',
      valeur:
        '« Populations » (cours) ↔ « People » (formulation onusienne, 📚 hors cours) · et le sigle « 5P », qui désigne ailleurs les 5 pourquoi de l’interview',
    },
  ],

  notions: [
    'agenda-2030',
    'odd',
    'odd-12',
    'cinq-p',
    'sdd-2030',
    'monet-2030',
    'durabilite',
    'durabilite-forte',
    'wedding-cake',
    'donut',
    'limites-planetaires',
    'plancher-social',
    'greenwashing',
    'kpi',
    'buts-objectifs',
    'effet-rebond',
    'trois-r',
    'partenaires-cles',
    'coopetition',
    'souverainete-numerique',
    'resilience',
    'tensions-strategiques',
    'externalite-negative',
    'economie-fonctionnalite',
    'parties-prenantes',
  ],
}
