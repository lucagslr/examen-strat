import type { Modele } from './types'

export const modele: Modele = {
  id: 'bmc',
  numero: 11,
  slug: 'bmc',
  nom: 'Business Model Canvas',
  sousTitre: 'Les 9 blocs à connaître par cœur',
  famille: 'business-model',
  etape: 'e3',

  question:
    'De quoi le modèle économique est-il fait, bloc par bloc — et ces neuf blocs tiennent-ils ensemble ?',
  enUnePhrase:
    'Le BMC pose sur une seule page les neuf éléments d’un modèle économique, organisés autour de la proposition de valeur qui en est la charnière.',
  produit:
    'Une photo du modèle — ou deux, une avant et une après — dont on tire les incohérences entre blocs et l’équation de profit qu’il faudra défendre au SAF.',

  quandUtiliser: [
    'Quand la question porte sur le fonctionnement : « Analysez le business model de X ». Le modèle est alors le sujet, pas un outil.',
    'Quand une option retenue au SWOT croisé doit devenir concrète — c’est le moment le plus rentable à l’oral : entre le croisement et le SAF.',
    'Quand on veut tester la cohérence d’un modèle : c’est le seul outil du cours qui vérifie qu’un système tient debout.',
    'Sur un mini-cas court : chaque phrase de l’énoncé se range dans un bloc, et le canvas se remplit presque tout seul.',
    'Quand une décision touche à la durabilité : c’est le business model qui fait entrer les contraintes dans les choix, pas le diagnostic.',
  ],
  quandNePasUtiliser: [
    'Pour analyser la concurrence : aucun bloc ne lui est consacré. 📘 C’est une limite explicite du cours — il faut Porter et le PESTEL en amont.',
    'Pour une entreprise à plusieurs domaines d’activité : 📘 le modèle vise le monoactivité. On fait alors un canvas par DAS.',
    'Pour raconter une évolution : 📘 le canvas est statique, c’est une photo. La parade est d’en dessiner deux, avant et après.',
    'Pour remplacer le diagnostic : il décrit comment l’entreprise fonctionne, pas ce qui se passe autour d’elle.',
  ],

  schema: {
    h: 560,
    description:
      'Neuf blocs en trois zones — la machine de production à gauche, la proposition de valeur au centre, le marché à droite — posés au-dessus de deux bandes qui portent les coûts et les revenus.',
    noeuds: [
      {
        id: 'zone-machine',
        titre: 'LA MACHINE',
        x: 40,
        y: 40,
        l: 346,
        h: 40,
        ton: 'sourd',
      },
      {
        id: 'zone-promesse',
        titre: 'LA PROMESSE',
        x: 392,
        y: 40,
        l: 216,
        h: 40,
        ton: 'sourd',
      },
      {
        id: 'zone-marche',
        titre: 'LE MARCHÉ',
        x: 614,
        y: 40,
        l: 346,
        h: 40,
        ton: 'sourd',
      },
      {
        id: 'part',
        titre: '8. PARTENAIRES CLÉS',
        lignes: ['Avec qui le modèle', 'tourne-t-il ?', 'Test : s’il part,', 'le modèle tombe-t-il ?'],
        x: 40,
        y: 104,
        l: 170,
        h: 300,
        point: 'partenaires',
      },
      {
        id: 'act',
        titre: '7. ACTIVITÉS CLÉS',
        lignes: ['Que faut-il savoir', 'faire absolument ?'],
        x: 216,
        y: 104,
        l: 170,
        h: 147,
        point: 'activites',
      },
      {
        id: 'res',
        titre: '6. RESSOURCES CLÉS',
        lignes: ['Que faut-il posséder', 'absolument ?'],
        x: 216,
        y: 257,
        l: 170,
        h: 147,
        point: 'ressources',
      },
      {
        id: 'pv',
        titre: '2. PROPOSITION DE VALEUR',
        lignes: [
          'Pourquoi le client',
          'nous choisit-il ?',
          'Clientèle, promesse,',
          'mode d’accès.',
        ],
        x: 392,
        y: 104,
        l: 216,
        h: 300,
        ton: 'accent',
        point: 'valeur',
      },
      {
        id: 'rel',
        titre: '4. RELATIONS CLIENTS',
        lignes: ['Comment acquiert-on', 'et fidélise-t-on ?'],
        x: 614,
        y: 104,
        l: 170,
        h: 147,
        point: 'relations',
      },
      {
        id: 'can',
        titre: '3. CANAUX',
        lignes: ['Par où passe l’offre', 'pour atteindre le', 'client ?'],
        x: 614,
        y: 257,
        l: 170,
        h: 147,
        point: 'canaux',
      },
      {
        id: 'seg',
        titre: '1. SEGMENTS DE CLIENTS',
        lignes: ['Qui sert-on ? Combien', 'de groupes vraiment', 'distincts ?'],
        x: 790,
        y: 104,
        l: 170,
        h: 300,
        point: 'segments',
      },
      {
        id: 'couts',
        titre: '9. STRUCTURE DE COÛTS',
        lignes: ['Quels postes dominent ?', 'Fixes ou variables ?'],
        x: 40,
        y: 410,
        l: 460,
        h: 110,
        point: 'couts',
      },
      {
        id: 'rev',
        titre: '5. SOURCES DE REVENUS',
        lignes: ['Que sont-ils prêts à payer ?', 'Comment payent-ils ?'],
        x: 506,
        y: 410,
        l: 454,
        h: 110,
        point: 'revenus',
      },
    ],
    liens: [
      { de: 'part', vers: 'act', depuis: 'droite', arrive: 'gauche' },
      { de: 'part', vers: 'res', depuis: 'droite', arrive: 'gauche' },
      { de: 'act', vers: 'pv', depuis: 'droite', arrive: 'gauche' },
      { de: 'res', vers: 'pv', depuis: 'droite', arrive: 'gauche' },
      { de: 'pv', vers: 'rel', depuis: 'droite', arrive: 'gauche' },
      { de: 'pv', vers: 'can', depuis: 'droite', arrive: 'gauche' },
      { de: 'rel', vers: 'seg', depuis: 'droite', arrive: 'gauche' },
      { de: 'can', vers: 'seg', depuis: 'droite', arrive: 'gauche' },
      {
        de: 'res',
        vers: 'couts',
        depuis: 'bas',
        arrive: 'haut',
        trait: 'pointille',
        libelle: 'ce que le modèle coûte',
      },
      {
        de: 'seg',
        vers: 'rev',
        depuis: 'bas',
        arrive: 'haut',
        trait: 'pointille',
        libelle: 'ce que le client paie',
      },
    ],
    note:
      'Les numéros portés sur les blocs sont l’ordre de remplissage, pas l’ordre de lecture : on part du client (1), on écrit la promesse (2), on redescend la moitié droite, puis on remonte la machine à gauche. Les deux bandes du bas forment l’équation de profit.',
  },

  points: [
    {
      id: 'segments',
      libelle: '1 — Segments de clients',
      cestQuoi:
        '📘 Le bloc qui « identifie les différents groupes d’individus ou d’organisations que cible l’entreprise ». C’est le point de départ du canvas : tous les autres blocs se lisent « pour ce client-là ».',
      question: 'Qui sert-on, et combien de groupes vraiment distincts y a-t-il ?',
      quoiMettre: [
        'Chaque groupe dont le besoin diffère assez pour justifier une offre, un canal ou un prix différents.',
        'Le segment intermédiaire — distributeur, revendeur, prescripteur — celui qu’on oublie presque toujours.',
        'Les cas où l’utilisateur n’est pas le payeur : les deux doivent figurer.',
        'L’ordre de grandeur de chaque segment, pour pouvoir dire lequel porte le modèle.',
        '📘 Repère du cas Oncle Hansi : deux clientèles, les distributeurs et les consommateurs — et les consommateurs se scindent encore en locaux et touristes.',
      ],
      exemple:
        'Atelier Léman sert aujourd’hui trois segments : les particuliers qui achètent un vélo haut de gamme, les particuliers qui font réparer n’importe quelle marque, et — segment presque invisible dans les comptes — les entreprises genevoises qui subventionnent le vélo de leurs collaborateurs. C’est ce troisième segment que l’option d’abonnement mettrait au centre.',
      piege: 'Écrire « les cyclistes ». Ce n’est pas un segment, c’est une catégorie de population.',
      reflexe:
        'Un segment n’est distinct que s’il justifie une offre, un canal ou un prix différents. Si ce n’est pas le cas, c’est le même segment — et il faut le fondre avec l’autre.',
      notions: ['segments-clients'],
    },
    {
      id: 'valeur',
      libelle: '2 — Proposition de valeur',
      cestQuoi:
        '📘 « La structure de l’offre de produits et de services formulée pour une clientèle, ainsi que les éléments de valorisation de cette offre. » C’est le bloc central, et pas seulement par sa place sur la feuille : 📘 le canvas se construit « à partir de la proposition de valeur ».',
      question: 'Pourquoi ce client-là nous choisit-il, nous, plutôt qu’un autre ?',
      quoiMettre: [
        'La clientèle visée — première des trois dimensions du cours.',
        '📘 La promesse, nommée parmi les huit du cours : prix, performances, simplicité, confort, sécurité, plaisir, distinction, personnalisation.',
        'Le mode d’accès : comment le client obtient concrètement l’offre — troisième dimension.',
        'Ce que le client cesse de faire, de payer ou de subir grâce à nous.',
      ],
      exemple:
        'Avant : « un vélo électrique suisse, fiable et bien fini » — une promesse de performances et de distinction, adressée à un particulier. Après : « vos collaborateurs disposent d’un vélo en état de marche toute l’année, sans immobilisation ni gestion de flotte » — une promesse de simplicité et de sécurité, adressée à un responsable RH. Le produit n’a pas bougé ; la promesse, si.',
      piege: 'Réécrire le catalogue : « nous vendons des vélos électriques haut de gamme ».',
      reflexe:
        'Test en une seconde : la phrase commence-t-elle par « nous vendons » ou par « le client obtient » ? Seule la seconde est une proposition de valeur.',
      notions: ['proposition-de-valeur', 'business-model'],
    },
    {
      id: 'canaux',
      libelle: '3 — Canaux',
      cestQuoi:
        '📘 « Les modalités par lesquelles une entreprise entre en contact avec ses segments de clients pour leur apporter une proposition de valeur. » C’est le chemin parcouru par l’offre, jamais l’offre elle-même.',
      question: 'Par où l’offre atteint-elle le client — et par où le client entend-il parler de nous ?',
      quoiMettre: [
        'Les canaux de vente : atelier, boutique, site marchand, revendeur, force de vente.',
        'Les canaux de communication, qui ne sont pas forcément les mêmes que ceux de vente.',
        'Le canal de livraison et celui de l’après-vente : souvent le plus coûteux, souvent oublié.',
        'Le propriétaire de chaque canal : nous, ou un partenaire ? Un canal loué se reprend.',
      ],
      exemple:
        'Aujourd’hui : les deux ateliers de Carouge et de Plainpalais, le bouche-à-oreille genevois, un site vitrine. Dans l’option d’abonnement, le canal principal devient la vente directe aux services RH et achats, plus une livraison et un entretien sur site — un canal que l’entreprise n’a jamais opéré et qu’il faudra donc construire.',
      piege:
        '📘 Prendre le site web pour une ressource clé alors qu’il n’est qu’un canal. C’est une erreur nommée dans le cours.',
      reflexe:
        'Une seule question tranche : cet élément transporte-t-il l’offre vers le client (canal) ou sert-il à la produire (ressource) ?',
      notions: ['canaux'],
    },
    {
      id: 'relations',
      libelle: '4 — Relations clients',
      cestQuoi:
        '📘 Elles « ont pour fonction d’acquérir et de fidéliser des clients ainsi que de développer les ventes ». Trois fonctions, donc, et la troisième — vendre davantage à qui est déjà client — est presque toujours oubliée.',
      question:
        'Comment obtient-on un client, comment le garde-t-on, et comment lui vend-on davantage ?',
      quoiMettre: [
        'Le mode d’acquisition : prospection, prescription, recommandation, appel d’offres.',
        'Le mode de fidélisation : contrat, abonnement, garantie, communauté, qualité de service.',
        'Le degré de personnalisation : assistance dédiée, libre-service, relation automatisée.',
        'Le développement des ventes : ce qu’on vend en plus, et à quel moment de la relation.',
      ],
      exemple:
        'Aujourd’hui la relation d’Atelier Léman est un lien personnel avec le mécanicien : très forte, mais non contractuelle — elle repart à zéro à chaque visite, et rien n’empêche le client d’aller ailleurs. L’abonnement la transforme en un contrat annuel avec un interlocuteur unique par entreprise. La relation cesse d’être une qualité individuelle pour devenir un actif du modèle.',
      piege:
        'Confondre relation et canal, et écrire deux fois la même chose dans les blocs 3 et 4.',
      reflexe:
        'Écris la relation sous forme de durée : ponctuelle, répétée, contractuelle. Un canal, lui, n’a pas de durée — il a un trajet.',
      notions: ['relations-clients'],
    },
    {
      id: 'revenus',
      libelle: '5 — Sources de revenus',
      cestQuoi:
        '📘 Le bloc appréhende les flux financiers dégagés auprès de chaque segment. Le cours y pose deux questions, pas une : « Que sont-ils prêts à payer ? » et « Comment payent-ils ? »',
      question: 'Qui paie, combien, et selon quelle mécanique de paiement ?',
      quoiMettre: [
        'Le montant ou l’ordre de grandeur, segment par segment — pas un total global.',
        'Le mode de paiement : vente à l’unité, abonnement, à l’usage, location, leasing, commission, freemium.',
        'La récurrence : une fois, ou tous les mois ? C’est elle qui change la nature du modèle.',
        '📘 Le cas Oncle Hansi : une cotisation d’adhésion plus une redevance sur les ventes sous le label — deux flux de natures différentes dans un même modèle.',
      ],
      exemple:
        'Avant : 2 600 CHF encaissés une seule fois à la vente d’un vélo, puis des réparations occasionnelles. Après : un loyer mensuel par vélo, encaissé tant que le contrat court. Sur le pilote de 40 vélos chez 6 entreprises pendant 12 mois, cela fait douze encaissements au lieu d’un pour le même vélo — même client, mécanique inverse. (chiffres illustratifs)',
      piege:
        'Répondre à la première question et sauter la seconde. C’est pourtant « comment payent-ils » qui sépare deux modèles économiques que « que payent-ils » confond.',
      reflexe:
        'Écris systématiquement deux lignes dans ce bloc : combien, puis selon quel rythme. Une ligne seule est une réponse à moitié.',
      notions: ['flux-revenus', 'equation-de-profit'],
    },
    {
      id: 'ressources',
      libelle: '6 — Ressources clés',
      cestQuoi:
        '📘 « Les actifs les plus importants requis pour réaliser la proposition de valeur », de quatre natures : physiques, intellectuelles, humaines, financières.',
      question: 'Que faut-il posséder ou contrôler, sans quoi la promesse ne tient plus ?',
      quoiMettre: [
        'Les ressources physiques : locaux, machines, parc, stock.',
        'Les ressources intellectuelles : marque, brevet, licence, fichier clients, réputation.',
        'Les ressources humaines : les compétences rares, nommées précisément, pas « le personnel ».',
        'Les ressources financières : trésorerie, capacité d’immobiliser du capital.',
        '⚠️ La typologie du canvas en compte quatre, celle du diagnostic interne en compte six : ici, « intellectuelles » recouvre à la fois le technologique et la réputation.',
      ],
      exemple:
        'Avant : le stock de vélos, la marque locale, et surtout les mécaniciens qualifiés — une ressource humaine que les marques low-cost en ligne ne peuvent pas copier. Après : les mêmes, plus une ressource nouvelle et lourde — un parc de 40 vélos que l’entreprise détient au lieu de le vendre, et la trésorerie qui permet de l’immobiliser. C’est précisément là que le modèle change de nature.',
      piege: 'Lister tout ce que l’entreprise possède, jusqu’aux ordinateurs du bureau.',
      reflexe:
        'Le mot qui compte est « clés » : si on retire la ressource et que la promesse tient encore, elle n’a rien à faire dans ce bloc.',
      notions: ['ressources-cles', 'ressources'],
    },
    {
      id: 'activites',
      libelle: '7 — Activités clés',
      cestQuoi:
        '📘 « Les choses les plus importantes qu’une entreprise doit faire pour que le modèle fonctionne. » 📘 Le cours en donne quatre natures : la production, la résolution de problèmes, l’utilisation de plateforme, la mise en réseau.',
      question: 'Que faut-il absolument savoir faire — et faire soi-même ?',
      quoiMettre: [
        'Les activités de production ou de prestation, celles qui fabriquent la promesse.',
        'Les activités de résolution de problèmes : conseil, diagnostic, réparation, service.',
        'Les activités de plateforme ou de mise en réseau, quand le modèle met des acteurs en relation.',
        '📘 Pour chacune, la décision « faire ou faire faire » : elle appartient à l’architecture de valeur, et externaliser une activité qui fonde l’avantage revient à donner les clés.',
      ],
      exemple:
        'Avant : assembler, vendre, réparer. Après : maintenir un parc, remplacer un vélo sous 24 heures, piloter des contrats d’entreprise. « Réparer quand le client apporte son vélo » et « garantir qu’un vélo roule tous les jours » ne sont pas la même activité : la seconde suppose de la planification, un stock de remplacement et un engagement de délai.',
      piege: 'Recopier toute la chaîne de valeur dans ce bloc, ligne par ligne.',
      reflexe:
        'Trois activités suffisent. La question n’est pas « que fait l’entreprise » mais « qu’est-ce qui la ferait tomber si elle ne savait plus le faire ».',
      notions: ['activites-cles', 'faire-ou-faire-faire', 'competences'],
    },
    {
      id: 'partenaires',
      libelle: '8 — Partenaires clés',
      cestQuoi:
        '📘 Ce bloc « reprend le système de valeur de l’entreprise » : le réseau de fournisseurs et de partenaires grâce auquel le modèle fonctionne — alliance, coopétition, joint-venture, relations contractuelles.',
      question: 'Avec qui le modèle tourne-t-il, sous quelle forme, et pourquoi eux ?',
      quoiMettre: [
        'Les fournisseurs sans lesquels rien ne sort de l’atelier.',
        'Les alliances, y compris avec un concurrent — c’est la coopétition, citée par le cours.',
        'La forme du lien : simple commande, contrat cadre, joint-venture. Elle dit le degré de dépendance.',
        'Ce que chaque partenaire apporte : une ressource, une activité, ou un accès au marché.',
      ],
      exemple:
        'Les deux fournisseurs asiatiques de batteries sont des partenaires clés au sens strict : sans batterie, aucun vélo ne sort, et il n’y a pas de second rang de fournisseurs prêt à prendre le relais. La Ville et le Canton, qui multiplient les subventions à la mobilité douce, ne sont pas des fournisseurs mais solvabilisent la demande : les ranger ici se discute, et le dire à l’oral montre qu’on a compris la question du bloc.',
      piege:
        'Verser tous les fournisseurs de l’entreprise dans ce bloc, du fabricant de batteries au vendeur de café.',
      reflexe:
        '📘 Le test du cours : s’il disparaît demain, le modèle tient-il ? Si oui, ce n’est pas un partenaire clé.',
      notions: ['partenaires-cles', 'systeme-de-valeur', 'coopetition'],
    },
    {
      id: 'couts',
      libelle: '9 — Structure de coûts',
      cestQuoi:
        '📘 Les trois blocs de gauche — ressources, activités, partenaires — « se traduisent par des coûts dont la structure, le niveau et les flux » sont identifiés dans ce dernier bloc.',
      question: 'Quels postes dominent, et sont-ils fixes ou variables ?',
      quoiMettre: [
        'Les deux ou trois postes qui pèsent le plus, jamais une comptabilité complète.',
        'La part de fixe et de variable : c’est elle qui décide de ce qui arrive quand l’activité baisse.',
        'Ce qui est immobilisé (payé maintenant, récupéré plus tard) et ce qui tourne avec les ventes.',
        'Ce qui a été transféré à un partenaire — 📘 chez Oncle Hansi, la logistique reste à la charge des adhérents, et c’est un choix de design du modèle, pas une économie comptable.',
        '📚 Ce que le modèle coûte à d’autres — effets sociaux et environnementaux — n’apparaît nulle part ici : c’est le bloc « externalités négatives » du BMC durable qui l’ouvre.',
      ],
      exemple:
        'Avant : 1 400 CHF de coût par vélo, décaissés puis récupérés à la vente — un coût largement variable, qui disparaît si on vend moins. Après : les mêmes 1 400 CHF immobilisés pendant plusieurs années, plus une main-d’œuvre d’atelier devenue récurrente. Le modèle passe d’une structure variable à une structure en partie fixe : voilà l’argument de faisabilité à sortir au SAF. (chiffres illustratifs)',
      piege:
        'Expédier ce bloc en deux mots parce qu’il est en bas de la feuille et qu’on manque de temps.',
      reflexe:
        'C’est ici, avec le bloc 5, que se joue l’équation de profit — donc ici que se gagnent les points. Réserve-lui une minute.',
      notions: ['structure-couts', 'couts-fixes-variables', 'equation-de-profit'],
    },
  ],

  methode: [
    {
      titre: '1. Ouvrir par le client, pas par le produit',
      detail:
        'Écrire d’abord les segments servis. Tout le reste du canvas se lira ensuite « pour ce client-là ». Si le segment change, huit blocs sur neuf bougent — c’est pour cela qu’il porte le numéro 1.',
      aEviter:
        'Commencer en bas à gauche parce que c’est le coin de la feuille. Les numéros du schéma sont l’ordre de remplissage, pas l’ordre de lecture de gauche à droite.',
    },
    {
      titre: '2. Écrire la promesse comme une phrase du client',
      detail:
        'Formuler la proposition de valeur en trois morceaux : à qui, quelle promesse parmi les huit du cours, par quel mode d’accès. Une phrase, pas une liste de produits.',
      aEviter:
        'Décrire l’offre. « Nous vendons des vélos » est une description ; « le client roule sans avoir à s’en occuper » est une proposition de valeur.',
    },
    {
      titre: '3. Descendre la moitié droite : canaux, relations, puis revenus',
      detail:
        'La promesse ne vaut que si elle atteint le client et se fait payer. On enchaîne donc canaux (par où), relations (quel lien), revenus (combien et selon quel rythme).',
      aEviter:
        'Sauter les relations clients en croyant les avoir traitées avec les canaux : le canal dit le trajet, la relation dit la durée.',
    },
    {
      titre: '4. Remonter la moitié gauche : ressources, activités, puis partenaires',
      detail:
        'Repartir de la promesse et demander ce qu’il faut posséder, savoir faire, et aller chercher chez d’autres. Cette moitié est la machine : elle n’existe que pour tenir la promesse du centre.',
      aEviter:
        'Lister ce que l’entreprise possède ou fait. On ne garde que ce dont le retrait ferait tomber la promesse.',
    },
    {
      titre: '5. Fermer par les coûts et confronter aux revenus',
      detail:
        'Les trois blocs de gauche se traduisent en coûts. On les met face aux revenus du bloc 5 : c’est l’équation de profit. 📘 Le mot du cours est « originale » — la façon de gagner de l’argent est elle-même un terrain de différenciation.',
      aEviter:
        'Confondre chiffre d’affaires et profit, ou conclure par « le profit, c’est les revenus moins les coûts » : exact, et sans aucune valeur.',
    },
    {
      titre: '6. Relire par croisements, jamais bloc par bloc',
      detail:
        'Prendre les blocs deux à deux et chercher la contradiction : la promesse tient-elle avec ces ressources ? Ce segment accepte-t-il ces partenaires ? Une incohérence trouvée vaut plus que neuf blocs bien remplis.',
      aEviter:
        'S’arrêter au canvas rempli. Le remplissage est la préparation ; la cohérence est l’analyse.',
    },
    {
      titre: '7. Annoncer les limites, et passer aux 12 blocs si la durabilité est en jeu',
      detail:
        '📘 Quatre limites : monoactivité, centré sur le fonctionnement interne, néglige la concurrence, statique. Les citer et dire comment on les compense — un canvas par DAS, un canvas avant/après, Porter et le PESTEL en amont — vaut des points.',
      aEviter:
        'Présenter le canvas comme un diagnostic complet. Il décrit un fonctionnement, jamais une position concurrentielle.',
    },
  ],

  liens: [
    {
      vers: 'rcov',
      nature: 'partage',
      explication:
        'Le BMC et le RCOV décrivent le même business model : le premier le cartographie en neuf blocs, le second en explique le mécanisme causal — dire qu’ils sont identiques est faux, dire qu’ils s’opposent aussi.',
    },
    {
      vers: 'chaine-de-valeur',
      nature: 'precise',
      explication:
        '📘 Le bloc des partenaires clés reprend le système de valeur : c’est le point de couture explicite entre le canvas et la chaîne de valeur, et il permet de compenser le fait que le canvas regarde surtout à l’intérieur.',
    },
    {
      vers: 'saf',
      nature: 'alimente',
      explication:
        'Sans canvas, la faisabilité se juge à l’intuition ; avec lui, elle se démontre — « le modèle transforme un stock revendu vite en un parc immobilisé alors que les revenus deviennent mensuels » est un argument, « la faisabilité est moyenne » n’en est pas un.',
    },
    {
      vers: 'bmc-durable',
      nature: 'prolonge',
      explication:
        'Le BMC durable garde les neuf blocs et en ajoute trois — la mission en amont, les impacts positifs et les externalités négatives en aval : c’est le même canvas, rendu capable de voir ce qu’il coûte à d’autres.',
    },
    {
      vers: 'porter',
      nature: 'soppose',
      explication:
        '📘 Le canvas néglige la concurrence : il dit comment l’entreprise fonctionne, Porter dit où elle se situe — un modèle parfaitement cohérent peut être installé dans une industrie qui ne rapporte rien.',
    },
  ],

  pieges: [
    {
      titre: 'Décrire le produit au lieu de la promesse',
      explication:
        'Le bloc central est le seul à partir duquel tous les autres se construisent. Si on y écrit un catalogue, les huit blocs suivants décrivent une entreprise, pas un modèle économique.',
      reflexe:
        'Reformuler du point de vue du client : que gagne-t-il, que cesse-t-il de supporter ? Puis nommer la promesse parmi les huit du cours.',
    },
    {
      titre: 'Verser tous les fournisseurs en partenaires clés',
      explication:
        'Un partenaire clé n’est pas un fournisseur habituel : c’est celui dont la disparition arrête le modèle. Tout mettre dans le bloc revient à n’y rien mettre.',
      reflexe:
        'Passer chaque nom au test : s’il part demain, le modèle tient-il ? Deux ou trois noms restent, rarement plus.',
    },
    {
      titre: 'Confondre canal et ressource clé',
      explication:
        '📘 Le cours pointe le cas du site web pris pour une ressource alors qu’il n’est qu’un canal. La même confusion frappe la boutique, l’application, le revendeur.',
      reflexe:
        'Un canal transporte l’offre vers le client ; une ressource sert à la produire. Poser la question dans ce sens, chaque fois.',
    },
    {
      titre: 'Expédier les revenus et les coûts',
      explication:
        'Les deux bandes du bas sont les dernières remplies et souvent les plus bâclées — alors que c’est là que se trouve l’équation de profit, donc la réponse à la question « est-ce que ça tient ».',
      reflexe:
        'Deux lignes minimum dans chaque bande : pour les revenus, combien et selon quel rythme ; pour les coûts, quels postes dominants et quelle part de fixe.',
    },
    {
      titre: 'S’arrêter au canvas rempli',
      explication:
        'Un canvas complet n’est qu’une description. L’examinateur attend l’étape suivante : le rapprochement entre blocs qui fait apparaître une incohérence invisible dans chaque case prise seule.',
      reflexe:
        'Terminer toujours par une phrase de croisement : « ce segment et ce partenaire ne vont pas ensemble, et voilà pourquoi ».',
    },
  ],

  variantes: [
    {
      sujet: 'Le sigle de l’outil',
      formulations: [
        { texte: '« Canvas », employé seul', source: 'Cours Business Model' },
        { texte: '« BCM »', source: 'Cours Business Model, slides 9 et 16 — inversion présente dans les slides' },
        { texte: '« BMC »', source: 'usage courant et forme correcte' },
      ],
      consigne:
        'Un seul et même objet : le Business Model Canvas. Employer « BMC », et mentionner en passant que les slides écrivent parfois « BCM » — cela prouve qu’on a lu le support, pas un résumé.',
    },
    {
      sujet: 'Le nom du bloc 5',
      formulations: [
        { texte: '« Sources de revenus »', source: 'schéma des neuf blocs' },
        { texte: '« Flux de revenus »', source: 'texte du cours sur le contenu des blocs' },
      ],
      consigne:
        'Même bloc, deux étiquettes selon qu’on lit le schéma ou le texte. Citer les deux en une incise, puis enchaîner sur les deux questions du cours — c’est le contenu qui compte, pas l’étiquette.',
    },
    {
      sujet: 'Trois ou quatre limites du BMC',
      formulations: [
        {
          texte:
            'Quatre limites détaillées : monoactivité · centré sur le fonctionnement interne · néglige la concurrence · statique',
          source: 'slides du cours',
        },
        {
          texte:
            'Trois phrases, « se focalise sur le fonctionnement interne en négligeant la concurrence » tenant en une seule',
          source: 'encyclopédie du cours',
        },
      ],
      consigne:
        'Le contenu est identique ; seul le découpage change, la concurrence étant tantôt une limite à part, tantôt la fin de la phrase sur le fonctionnement interne. En annoncer quatre et signaler le regroupement.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman — le canvas avant / après',
    situation:
      'Le SWOT croisé a produit une option : croiser la force « atelier réputé, mécaniciens très qualifiés » avec l’opportunité « la Ville et le Canton subventionnent la mobilité douce des entreprises » pour vendre un abonnement mobilité tout compris. À ce stade, ce n’est qu’une direction. Le canvas sert à la rendre concrète avant de la juger au SAF — et comme le canvas est statique, on en dessine deux.',
    deroule: [
      {
        etiquette: '1 — Segments',
        contenu:
          'De particuliers acheteurs à responsables RH et achats de PME genevoises. Nouveau client, cycle de décision plus long, mais commande de vingt vélos d’un coup.',
      },
      {
        etiquette: '2 — Proposition de valeur',
        contenu:
          'De « un vélo suisse fiable et bien fini » à « vos collaborateurs roulent toute l’année, sans gestion de flotte ». On quitte une promesse de performances pour une promesse de simplicité.',
      },
      {
        etiquette: '3 et 4 — Canaux et relations',
        contenu:
          'Du bouche-à-oreille en atelier à la vente directe aux entreprises, avec livraison et entretien sur site ; d’un lien personnel avec le mécanicien à un contrat annuel et un interlocuteur unique.',
      },
      {
        etiquette: '5 — Sources de revenus',
        contenu:
          'De 2 600 CHF encaissés une fois à un loyer mensuel par vélo. Sur le pilote de 40 vélos chez 6 entreprises pendant 12 mois : douze encaissements au lieu d’un. (illustratif)',
      },
      {
        etiquette: '6 et 7 — Ressources et activités',
        contenu:
          'Du stock destiné à la vente à un parc détenu ; de « réparer sur demande » à « garantir la disponibilité », ce qui suppose des vélos de remplacement et de la planification.',
      },
      {
        etiquette: '8 — Partenaires clés',
        contenu:
          'Les deux fournisseurs asiatiques de batteries deviennent critiques : dans un modèle de parc, une batterie défaillante s’immobilise au lieu de se revendre.',
      },
      {
        etiquette: '9 — Structure de coûts',
        contenu:
          'De 1 400 CHF variables par vélo, récupérés à la vente, à 1 400 CHF immobilisés sur plusieurs années, plus une main-d’œuvre d’atelier récurrente. (illustratif)',
      },
      {
        etiquette: 'Le croisement qui fâche',
        contenu:
          'Segment « entreprises attentives à leur bilan carbone » × partenaires « deux fournisseurs asiatiques peu transparents » : aucune des deux cases n’est fausse, c’est leur rapprochement qui l’est.',
      },
    ],
    conclusion:
      'Le canvas ne dit pas si l’option est bonne : il dit où elle est fragile, et il le dit précisément. Deux points sortent — la trésorerie, parce que le parc s’immobilise pendant que les revenus s’étalent sur douze mois ; et la crédibilité de la promesse durable, parce que l’amont n’est pas maîtrisé. Ce sont les deux arguments qu’on portera au SAF, à la place d’un « faisabilité moyenne » qui ne vaut rien. Et comme le canvas néglige la concurrence, on garde de côté ce qu’en disent Porter et le PESTEL.',
  },

  phraseOral:
    'Je ne lis pas le canvas bloc par bloc, je le lis par croisements : « entreprises attentives à leur bilan carbone » dans les segments et « deux fournisseurs asiatiques peu transparents » dans les partenaires, aucune des deux cases n’est fausse — c’est leur rapprochement qui montre que la promesse n’est pas crédible, et c’est ce que le canvas sert à faire apparaître.',

  aRetenir: [
    {
      cle: 'Définition 📘',
      valeur:
        '« Une représentation visuelle du business model de l’entreprise à partir de la proposition de valeur. »',
    },
    { cle: 'Nombre de blocs', valeur: '9 — et 12 dans la version durable (mission, impacts positifs, externalités négatives).' },
    {
      cle: 'Le centre',
      valeur:
        'La proposition de valeur, jamais le produit : c’est d’elle que se déduisent les huit autres blocs.',
    },
    {
      cle: 'Les deux questions du bloc 5 📘',
      valeur: '« Que sont-ils prêts à payer ? Comment payent-ils ? » — la seconde est celle qu’on oublie.',
    },
    {
      cle: 'Ordre de remplissage 🔎',
      valeur:
        '1 segments → 2 promesse → 3 canaux et 4 relations → 5 revenus → 6 ressources et 7 activités → 8 partenaires → 9 coûts.',
    },
    {
      cle: 'Les quatre limites 📘',
      valeur: 'Monoactivité · centré interne · néglige la concurrence · statique.',
    },
    {
      cle: 'Où sont les points',
      valeur:
        'Dans la cohérence entre blocs et dans l’équation de profit, pas dans le remplissage des neuf cases.',
    },
  ],

  notions: [
    'bmc',
    'business-model',
    'proposition-de-valeur',
    'segments-clients',
    'canaux',
    'relations-clients',
    'flux-revenus',
    'ressources-cles',
    'activites-cles',
    'partenaires-cles',
    'structure-couts',
    'equation-de-profit',
    'architecture-de-valeur',
    'faire-ou-faire-faire',
    'couts-fixes-variables',
    'systeme-de-valeur',
    'rcov',
    'bmc-durable',
  ],
}
