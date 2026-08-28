import type { Modele } from './types'

/**
 * Schéma 12 — Sustainable Business Model Canvas.
 *
 * Le canvas classique (schéma 11) augmenté de trois blocs : la mission en
 * amont (0), les impacts positifs (10) et les externalités négatives (11) en
 * aval. Douze blocs numérotés de 0 à 11 — et cette numérotation est aussi
 * l’ordre de remplissage efficace.
 */
export const modele: Modele = {
  id: 'bmc-durable',
  numero: 12,
  slug: 'bmc-durable',
  nom: 'Sustainable Business Model Canvas',
  sousTitre: 'BMC classique + mission + impacts positifs + externalités négatives',
  famille: 'durabilite',
  etape: 'e3',

  question:
    'Ce modèle économique tient-il debout — et si oui, à quel prix pour ceux qui ne figurent pas dans ses comptes ?',

  enUnePhrase:
    'C’est le Business Model Canvas augmenté de trois blocs — la mission en amont (0), les impacts positifs (10) et les externalités négatives (11) en aval, soit douze blocs numérotés de 0 à 11 — et c’est le seul outil du cours qui fasse entrer la durabilité dans des décisions concrètes plutôt que dans un paragraphe de bonnes intentions.',

  produit:
    'Un modèle décrit bloc par bloc, la liste nommée des tiers qui supportent un coût sans l’avoir choisi, le levier d’internalisation retenu, et la tension court terme / long terme écrite noir sur blanc. Trois matières directement réutilisables : à l’étape SAF pour l’acceptabilité, à l’étape des indicateurs pour les KPI, et dans le SWOT pour transformer une externalité en menace réglementaire.',

  quandUtiliser: [
    'Quand l’énoncé parle d’environnement, de social, d’ODD ou de responsabilité et qu’il faut aller plus loin que « il faudrait être plus écologique ».',
    'Quand une option stratégique doit devenir concrète : le canvas avant / après montre ce qui change réellement, bloc par bloc.',
    'Quand on soupçonne que la rentabilité affichée repose sur un coût déplacé vers quelqu’un d’autre.',
    'Quand on doit défendre une transition coûteuse à court terme : c’est ici qu’on trouve les arguments chiffrés, pas dans la morale.',
    'Après le SWOT croisé et avant le SAF — le canvas transforme une direction en système vérifiable.',
  ],

  quandNePasUtiliser: [
    'Pour analyser un secteur ou des concurrents : le canvas décrit le fonctionnement d’une entreprise, pas sa position. 📘 Le cours lui reproche explicitement de « négliger la concurrence ». Ce travail-là revient au PESTEL et à Porter.',
    'Pour une entreprise multi-activités traitée d’un bloc : 📘 le canvas « s’applique surtout à des entreprises monoactivité comme les start-up ». Avec deux domaines d’activité, il faut deux canvas.',
    'Pour montrer une évolution dans le temps avec un seul dessin : 📘 le canvas « reste essentiellement statique ». On en fait deux, avant et après.',
    'Pour juger si une stratégie est souhaitable, acceptable et faisable : c’est le rôle du SAF. Le canvas lui fournit la matière, il ne le remplace pas.',
  ],

  schema: {
    h: 858,
    description:
      'Le Business Model Canvas à neuf blocs, entouré d’un cadre, avec une bande « mission » ajoutée au-dessus sur toute la largeur et, en dessous, deux cases nouvelles : les impacts positifs à gauche et les externalités négatives à droite.',
    noeuds: [
      {
        id: 'cadre9',
        titre: 'Les 9 blocs du BMC classique',
        x: 6,
        y: 142,
        l: 988,
        h: 506,
        forme: 'cadre',
        ton: 'sourd',
      },
      {
        id: 'mission',
        titre: '0 · MISSION / RAISON D’ÊTRE',
        lignes: ['Pourquoi existons-nous ?'],
        x: 30,
        y: 36,
        l: 940,
        h: 70,
        forme: 'bande',
        ton: 'accent',
        point: 'mission',
      },
      {
        id: 'part',
        titre: '8 · Partenaires',
        lignes: ['Sans qui rien', 'ne tourne', 'Responsables ?'],
        x: 30,
        y: 176,
        l: 160,
        h: 300,
        point: 'partenaires',
      },
      {
        id: 'act',
        titre: '7 · Activités',
        lignes: ['Ce qu’il faut', 'savoir faire', 'Quels déchets ?'],
        x: 200,
        y: 176,
        l: 160,
        h: 144,
        point: 'activites',
      },
      {
        id: 'ress',
        titre: '6 · Ressources',
        lignes: ['Ce qu’il faut', 'posséder', 'D’où ça vient ?'],
        x: 200,
        y: 332,
        l: 160,
        h: 144,
        point: 'ressources',
      },
      {
        id: 'pv',
        titre: '2 · Proposition de valeur',
        lignes: [
          'Pourquoi le client',
          'nous choisit',
          'Quel bénéfice réel,',
          'pas quelle étiquette verte',
        ],
        x: 370,
        y: 176,
        l: 260,
        h: 300,
        ton: 'accent',
        point: 'proposition',
      },
      {
        id: 'rel',
        titre: '4 · Relations',
        lignes: ['Acquérir,', 'fidéliser', 'Que publie-t-on ?'],
        x: 640,
        y: 176,
        l: 160,
        h: 144,
        point: 'relations',
      },
      {
        id: 'can',
        titre: '3 · Canaux',
        lignes: ['Par où passe', 'l’offre', 'À quel coût ?'],
        x: 640,
        y: 332,
        l: 160,
        h: 144,
        point: 'canaux',
      },
      {
        id: 'seg',
        titre: '1 · Segments',
        lignes: ['Qui sert-on ?', 'Et qui reste', 'dehors ?'],
        x: 810,
        y: 176,
        l: 160,
        h: 300,
        point: 'segments',
      },
      {
        id: 'couts',
        titre: '9 · Structure de coûts',
        lignes: ['Ce que le modèle coûte…', '… et ce qui n’y figure pas'],
        x: 30,
        y: 514,
        l: 460,
        h: 110,
        point: 'couts',
      },
      {
        id: 'revenus',
        titre: '5 · Sources de revenus',
        lignes: ['Que paient-ils ? comment ?', 'Vente, usage, abonnement'],
        x: 510,
        y: 514,
        l: 460,
        h: 110,
        point: 'revenus',
      },
      {
        id: 'imp',
        titre: '10 · Impacts positifs',
        lignes: ['Ce que le modèle améliore', 'pour d’autres que nous'],
        x: 30,
        y: 688,
        l: 460,
        h: 130,
        ton: 'positif',
        point: 'impacts',
      },
      {
        id: 'ext',
        titre: '11 · Externalités négatives',
        lignes: ['Les coûts imposés à des tiers', 'et absents de nos comptes'],
        x: 510,
        y: 688,
        l: 460,
        h: 130,
        ton: 'danger',
        point: 'externalites',
      },
    ],
    liens: [
      {
        de: 'mission',
        vers: 'pv',
        libelle: 'conditionne les 11 autres',
        trait: 'pointille',
        depuis: 'bas',
        arrive: 'haut',
        ton: 'accent',
      },
      {
        de: 'pv',
        vers: 'revenus',
        libelle: 'source des revenus',
        depuis: 'bas',
        arrive: 'haut',
      },
      {
        de: 'couts',
        vers: 'ext',
        libelle: 'ce qui n’y figure pas',
        trait: 'pointille',
        depuis: 'droite',
        arrive: 'gauche',
        ton: 'danger',
      },
    ],
    note:
      'La valeur réellement créée n’est pas la marge : c’est la marge, plus les impacts positifs (10), moins les externalités négatives (11). Un canvas dont la case 11 reste vide n’est pas un canvas durable, c’est une plaquette.',
  },

  points: [
    {
      id: 'mission',
      libelle: '0 — Mission / raison d’être',
      cestQuoi:
        'Le bloc que le canvas classique n’a pas. C’est la finalité que l’entreprise poursuit et qu’elle explicite à ses parties prenantes — c’est-à-dire aux groupes qui l’affectent ou qu’elle affecte : salariés, clients, fournisseurs, collectivité, riverains. Il porte le numéro 0 parce qu’il précède et conditionne les onze autres : on ne part plus du marché, on part de la raison d’exister.',
      question:
        'Pourquoi cette entreprise existe-t-elle, au-delà de gagner de l’argent — et qu’est-ce que cette raison d’être lui interdit de faire ?',
      quoiMettre: [
        'La finalité en une phrase, formulée de manière à pouvoir être contredite par un fait.',
        'Le bénéfice visé pour quelqu’un d’autre que l’actionnaire, nommé.',
        'L’horizon : sur combien d’années cette phrase est-elle censée tenir ?',
        'Ce que la mission rend impossible — une mission qui n’interdit rien n’est pas une mission.',
        'À qui elle est adressée : 📘 la mission « explicite la finalité, l’objectif ultime de l’organisation à ses parties prenantes ».',
      ],
      exemple:
        '❌ « Pour une mobilité meilleure » : Atelier Léman pourrait tout faire sous cette phrase, y compris vendre des vélos jetables. ✅ « Maintenir le plus longtemps possible des vélos en état de rouler à Genève » : cette phrase-là change le choix des fournisseurs, la conception du produit, le modèle de revenus, et jusqu’au calcul des primes des vendeurs — parce qu’une prime au volume la contredit directement.',
      piege:
        'Écrire un slogan de communication et croire qu’on a rempli le bloc. Le slogan a l’avantage d’être invérifiable, donc confortable.',
      reflexe:
        'Le test en une question : quelle décision réelle, prise le mois dernier, cette mission aurait-elle changée ? Si aucune, c’est de la communication, pas une mission.',
      notions: ['mission', 'bmc-durable', 'greenwashing'],
    },
    {
      id: 'segments',
      libelle: '1 — Segments de clients',
      cestQuoi:
        '📘 Les segments « identifient les différents groupes d’individus ou d’organisations que cible l’entreprise ». Deux groupes sont réellement distincts quand ils n’ont ni le même besoin, ni le même canal, ni le même prix. En version durable, le bloc gagne une seconde question, symétrique de la première : qui l’offre laisse-t-elle dehors ?',
      question:
        'Quels groupes servons-nous vraiment — et qui notre offre exclut-elle, par le prix, par le canal ou par la compétence qu’elle suppose ?',
      quoiMettre: [
        'Les groupes distincts, avec pour chacun son canal et son prix — s’ils sont identiques, c’est un seul segment.',
        '📘 Le segment qui valorise la durabilité et le prouve en payant : sans preuve de paiement, c’est une intention déclarée, pas un segment.',
        'Les exclus : par le prix, par le canal numérique, par la langue, par la mobilité.',
        'La distinction entre celui qui décide, celui qui paie et celui qui utilise — en B2B, ce sont trois personnes différentes.',
        'Le segment qu’on choisit d’abandonner : c’est une décision stratégique, pas un oubli.',
      ],
      exemple:
        'Aujourd’hui : particuliers aisés de la région genevoise, achat unique en atelier. Version abonnement : entreprises genevoises de 20 à 200 salariés ayant un objectif carbone à tenir — un segment que les subventions publiques à la mobilité douce rendent solvable. Exclus dans les deux cas : le budget serré, puisque le vélo est vendu 2 600 CHF ; et, si la réservation passe uniquement par une application, le collaborateur sans smartphone.',
      piege:
        'Aligner « les particuliers et les entreprises » comme deux segments alors que rien ne les distingue dans le modèle — même produit, même canal, même prix. Ou n’écrire que les segments qu’on aime.',
      reflexe:
        'Écrire, sous chaque segment, son canal et son prix. Puis ajouter systématiquement une ligne « exclus ». Cette ligne rapporte des points parce que presque personne ne l’écrit.',
      notions: ['segments-clients', 'exclusion-indirecte', 'bmc-durable'],
    },
    {
      id: 'proposition',
      libelle: '2 — Proposition de valeur',
      cestQuoi:
        '📘 « La structure de l’offre de produits et de services formulée pour une clientèle, ainsi que les éléments de valorisation de cette offre. » Elle s’exprime dans un espace à trois dimensions : la clientèle, les promesses, les modes d’accès. C’est la charnière du canvas — tout le reste s’y raccroche — et 📘 « la source des flux de revenus ».',
      question:
        'Pourquoi le client nous choisit nous — et quel bénéfice social ou environnemental réel, mesurable, cette offre produit-elle ?',
      quoiMettre: [
        '📘 La promesse, parmi les huit du cours : prix, performances, simplicité, confort, sécurité, plaisir, distinction, personnalisation.',
        'Le mode d’accès : où, quand, comment le client obtient-il la chose ?',
        '📘 Le bénéfice durable de la version métamorphosée : un produit qui minimise l’impact, des matériaux durables, une plus-value sociale.',
        'La preuve chiffrée de ce bénéfice — durée de vie moyenne, taux de réparabilité, part de matière réemployée.',
        'Ce qu’on ne promet pas : la limite explicite est ce qui protège du greenwashing.',
      ],
      exemple:
        '❌ « Nous vendons des vélos électriques haut de gamme. » — c’est le produit, pas la proposition. ✅ « Nous garantissons à une entreprise genevoise que chacun de ses collaborateurs dispose d’un vélo en état de marche toute l’année, sans gestion de flotte ni immobilisation de trésorerie. » La promesse est la sécurité et la simplicité ; le bénéfice durable n’est pas « un vélo vert », c’est un vélo qui dure — et cela se mesure.',
      piege:
        'Décrire le produit au lieu de la raison d’être choisi. Puis, en version durable, coller une étiquette verte sur ce produit — « nos vélos sont écologiques » — sans une seule preuve. C’est exactement la frontière du greenwashing.',
      reflexe:
        'Répondre à « pourquoi nous », jamais à « quoi ». Et pour la partie durable, nommer la mesure avant l’adjectif : si aucun chiffre ne peut être publié, l’adjectif tombe.',
      notions: ['proposition-de-valeur', 'greenwashing', 'impacts-positifs'],
    },
    {
      id: 'canaux',
      libelle: '3 — Canaux',
      cestQuoi:
        '📘 « Les modalités par lesquelles une entreprise entre en contact avec ses segments de clients pour leur apporter une proposition de valeur. » C’est le chemin de l’offre jusqu’au client — faire connaître, faire évaluer, vendre, livrer, assurer l’après-vente. En version durable, ce chemin a lui-même une empreinte : il consomme du transport, de l’emballage, des serveurs.',
      question:
        'Par où passe l’offre pour atteindre le client — et ce chemin coûte-t-il quelque chose à quelqu’un ?',
      quoiMettre: [
        'Les phases couvertes : notoriété, évaluation, achat, livraison, après-vente — un canal ne fait pas forcément les cinq.',
        'Direct ou indirect, physique ou numérique, possédé ou loué à un intermédiaire.',
        'L’empreinte du canal : kilomètres parcourus, retours de colis, emballages, hébergement des données.',
        '📘 Les canaux de la version durable : e-commerce sobre ou distribution locale, au choix — et le choix se justifie.',
        'Le canal qui exclut : une commande uniquement en ligne ferme la porte à une partie des clients.',
      ],
      exemple:
        'Aujourd’hui : deux ateliers, Carouge et Plainpalais, plus un site vitrine. Version abonnement : une tournée de maintenance groupée sur Genève, un jour par semaine, plutôt que quarante déplacements individuels vers l’atelier — chiffre illustratif, mais le raisonnement tient : le canal groupé est à la fois moins cher et moins émetteur, ce qui en fait un gagnant-gagnant à sortir en premier.',
      piege:
        'Confondre canal et ressource clé. 📘 Le cours le liste comme une erreur : un site web est un canal — il met l’offre en contact avec le client — et non un actif stratégique.',
      reflexe:
        'Poser la question de tri : « est-ce que cette chose met l’offre en contact avec le client ? » Si oui, c’est un canal ; si elle sert à produire, c’est une ressource ou une activité.',
      notions: ['canaux', 'externalite-negative'],
    },
    {
      id: 'relations',
      libelle: '4 — Relations clients',
      cestQuoi:
        '📘 Les relations clients « ont pour fonction d’acquérir et de fidéliser des clients ainsi que de développer les ventes ». En version durable, 📘 le bloc se métamorphose en transparence, partage d’informations sur la durabilité et engagement communautaire. C’est, avec les partenaires, l’un des deux endroits où se construisent les impacts positifs.',
      question:
        'Comment obtient-on un client, comment le garde-t-on — et que lui dit-on de vrai sur l’impact de ce qu’il achète ?',
      quoiMettre: [
        'Le type de relation : assistance dédiée, libre-service, communauté d’utilisateurs, co-création.',
        'Ce qui coûte cher : l’acquisition d’un client neuf, ou sa fidélisation ? La réponse oriente tout le modèle.',
        'Le chiffre qu’on s’engage à publier : durée de vie réelle, taux de panne, délai de réparation.',
        'La sensibilisation à un usage sobre — recharger moins, réparer plutôt que remplacer.',
        'La durée d’engagement contractuelle : elle change la nature de la relation autant que le discours.',
      ],
      exemple:
        'Publier chaque année la durée de vie moyenne constatée des vélos et le taux de réparation réussie au premier passage. Attribuer un référent unique à chaque entreprise abonnée. Ces deux gestes ne coûtent presque rien et transforment une promesse invérifiable en engagement contrôlable — ce qui est précisément ce que le bloc 10 exige comme matière.',
      piege:
        'Écrire « bon service client » et passer au bloc suivant. Ou annoncer de la transparence sans jamais dire quel chiffre sera publié, ni à quelle fréquence.',
      reflexe:
        'Ne pas écrire le mot « transparence » sans écrire, dans la même ligne, le chiffre publié et la date. Un engagement sans indicateur ni échéance n’est pas un engagement.',
      notions: ['relations-clients', 'impacts-positifs', 'greenwashing'],
    },
    {
      id: 'revenus',
      libelle: '5 — Sources de revenus',
      cestQuoi:
        '📘 Le bloc « appréhende les flux financiers que l’entreprise dégage auprès de chaque segment de clients ». Le cours pose deux questions, pas une : « Que sont-ils prêts à payer ? Comment payent-ils ? » La seconde est celle qu’on oublie, et c’est elle qui décide si le modèle pousse à vendre de la matière ou à en économiser.',
      question:
        'Qui paie, pour quoi, quand — et cette façon de gagner de l’argent nous pousse-t-elle à vendre plus d’objets ou à les faire durer ?',
      quoiMettre: [
        'Le type : vente à l’unité, abonnement, paiement à l’usage, leasing, freemium, commission, 📘 adhésion plus redevance.',
        'Le prix et sa base de calcul : par objet, par mois, par kilomètre, par utilisateur.',
        'Ponctuel ou récurrent — et, si récurrent, ce qui déclenche le renouvellement.',
        '📘 Les revenus durables de la métamorphose : services, leasing, remise à neuf, et diversification par la vente de crédits carbone.',
        'Ce que devient le produit après la transaction : qui en est propriétaire, qui le reprend, qui paie sa fin de vie.',
      ],
      exemple:
        'Aujourd’hui : 2 600 CHF encaissés une fois, pour un coût de revient de 1 400 CHF — soit 1 200 CHF de marge le jour de la livraison, puis plus rien jusqu’à la panne. Version abonnement, pilote illustratif : 40 vélos placés chez 6 entreprises genevoises sur 12 mois. La même somme arrive étalée, le revenu devient récurrent et prévisible — et surtout Atelier Léman reste propriétaire du vélo, donc supporte sa réparation et sa fin de vie.',
      piege:
        'Confondre chiffre d’affaires et profit. Et croire qu’un abonnement est durable par nature : 📘 un abonnement à renouvellement annuel obligatoire augmente le renouvellement et les déchets, exactement comme la vente.',
      reflexe:
        '📘 Appliquer le bon critère : « le modèle incite-t-il réellement à utiliser moins de ressources et à prolonger la vie des équipements ? » Et sa version courte, à poser devant n’importe quel modèle : qui reste propriétaire ?',
      notions: ['flux-revenus', 'economie-fonctionnalite', 'equation-de-profit'],
    },
    {
      id: 'ressources',
      libelle: '6 — Ressources clés',
      cestQuoi:
        '📘 Elles « identifient les actifs les plus importants requis pour réaliser la proposition de valeur » — physiques, intellectuelles, humaines ou financières. C’est le premier des trois endroits où le cours localise les externalités négatives : ce que l’entreprise possède vient toujours de quelque part.',
      question:
        'Que faut-il absolument posséder pour tenir la promesse — et d’où cela vient-il ?',
      quoiMettre: [
        'Les quatre natures du cours : physique, intellectuelle, humaine, financière.',
        'L’origine des matières : 📘 renouvelable, recyclée, certifiée — ou rare et non substituable.',
        'La dépendance : combien de fournisseurs pour la ressource la plus critique ?',
        'Les compétences rares logées dans des personnes, qui ne s’achètent pas sur catalogue.',
        'Le test de survie : si cette ressource disparaît demain, le modèle s’arrête-t-il ?',
      ],
      exemple:
        'Mécaniciens capables de diagnostiquer une panne électronique — ressource humaine, difficile à copier. Marque connue localement — ressource intangible. Les deux ateliers — ressource physique. Et les batteries, composant le plus cher, achetées à deux fournisseurs asiatiques : ressource critique, dépendance forte, origine du lithium non maîtrisée. C’est le point dur du dossier, et il n’est pas dans la question posée.',
      piege:
        'Lister tout ce que l’entreprise possède, de la caisse enregistreuse au logiciel de facturation. Le bloc devient un inventaire et ne dit plus rien.',
      reflexe:
        'Ne garder que ce dont la disparition arrête le modèle — trois à cinq lignes. Puis, pour chacune, écrire une seconde ligne : « d’où ça vient ». C’est cette seconde ligne qui remplira le bloc 11.',
      notions: ['ressources-cles', 'ressources', 'externalite-negative'],
    },
    {
      id: 'activites',
      libelle: '7 — Activités clés',
      cestQuoi:
        '📘 Elles « désignent les choses les plus importantes qu’une entreprise doit faire pour que le modèle fonctionne » — production, résolution de problèmes, exploitation d’une plateforme, mise en réseau. Deuxième lieu d’externalités : faire quelque chose consomme de l’énergie, produit des déchets et mobilise des gens dans des conditions données.',
      question:
        'Que faut-il absolument savoir faire — et que produit ce « faire » en énergie, en déchets et en conditions de travail ?',
      quoiMettre: [
        '📘 La nature de l’activité : production, résolution de problèmes, plateforme, mise en réseau.',
        'L’énergie consommée et les déchets générés, à l’échelle de l’activité, pas de l’unité.',
        'Les conditions sociales, chez soi et chez ceux qui font à notre place.',
        'Les activités qui allongent la durée de vie : réparation, maintenance préventive, reconditionnement.',
        '📘 Le choix « faire ou faire faire », qui est une décision de l’architecture de valeur — externaliser une activité qui fonde l’avantage revient à donner les clés.',
      ],
      exemple:
        'Aujourd’hui : assemblage, diagnostic et réparation toutes marques, gestion des pièces détachées. Version abonnement : la maintenance préventive et le reconditionnement deviennent l’activité centrale, et non plus un service annexe. Le reconditionnement est l’activité qui, à elle seule, fait passer une ligne du bloc 11 au bloc 10 : la batterie qui devenait un déchet redevient une ressource.',
      piege:
        'Recopier toute la chaîne de valeur dans le bloc. Le canvas ne demande pas ce que l’entreprise fait, il demande ce sans quoi la promesse tombe.',
      reflexe:
        'Trois à cinq activités maximum. Pour chacune, vérifier qu’elle est indispensable à la proposition de valeur du bloc 2 — sinon elle sort.',
      notions: ['activites-cles', 'reconditionnement', 'faire-ou-faire-faire'],
    },
    {
      id: 'partenaires',
      libelle: '8 — Partenaires clés',
      cestQuoi:
        '📘 Le bloc « reprend le système de valeur de l’entreprise » : le réseau de fournisseurs et de partenaires grâce auquel le modèle fonctionne — alliance, coopétition, joint-venture, relations contractuelles. C’est le lien explicite entre le canvas et la chaîne de valeur. En version durable, il s’y ajoute une question désagréable : leur irresponsabilité devient la nôtre, puisque c’est notre promesse qu’elle abîme.',
      question:
        'Sans qui le modèle ne tourne pas — et ces acteurs-là sont-ils eux-mêmes tenables ?',
      quoiMettre: [
        'Le test de disparition : s’il s’en va, le modèle tient-il ? Si oui, ce n’est pas un partenaire clé, c’est un fournisseur.',
        '📘 La forme de la relation : alliance, coopétition, joint-venture, contrat.',
        'Ce qu’on obtient d’eux et qu’on ne sait pas faire soi-même.',
        '📘 Leur niveau d’exigence sociale et environnementale, et comment on le vérifie : label indépendant, audit, visite.',
        'Les partenaires non marchands : canton, ville, association, école — ils ne facturent rien et peuvent tout bloquer.',
      ],
      exemple:
        'Les deux fournisseurs asiatiques de batteries sont des partenaires clés au sens strict — sans eux, plus de vélo — et leur niveau de responsabilité est inconnu. Version abonnement : la Ville de Genève devient un partenaire non marchand décisif, puisqu’elle solvabilise la demande par ses subventions ; et un recycleur de batteries devient nécessaire, faute de quoi la promesse de fin de vie n’est pas tenable.',
      piege:
        '📘 Mettre tous les fournisseurs dans le bloc. Le canvas devient un carnet d’adresses et l’analyse disparaît.',
      reflexe:
        'Appliquer le test de disparition, puis ajouter une colonne « responsable ? oui / non / inconnu ». Écrire « inconnu » est une réponse honnête, et elle rapporte des points : c’est le point de départ d’une action.',
      notions: ['partenaires-cles', 'systeme-de-valeur', 'labels-environnementaux'],
    },
    {
      id: 'couts',
      libelle: '9 — Structure de coûts',
      cestQuoi:
        '📘 « Les trois derniers blocs — ressources, activités, partenaires — se traduisent par des coûts dont la structure, le niveau et les flux sont identifiés dans le dernier bloc. » Troisième lieu d’externalités, et le plus subtil des trois : ici, on ne cherche pas ce qui est écrit, on cherche ce qui manque.',
      question:
        'Ce que le modèle coûte à l’entreprise — et quels coûts sociaux et environnementaux réels n’apparaissent nulle part dans cette liste ?',
      quoiMettre: [
        'Les postes principaux, séparés en coûts fixes et coûts variables — c’est cette structure qui décide de la sensibilité au volume.',
        '📘 L’investissement durable initial : plus élevé, avec des bénéfices à long terme.',
        'Les coûts absents : fin de vie, dépollution, santé, temps reporté sur le client ou sur ses proches.',
        'Le nom de celui qui les supporte à la place de l’entreprise.',
        '📘 Le mécanisme d’auto-financement de la transition : réinvestir les économies d’efficacité énergétique en recherche et développement.',
      ],
      exemple:
        'Coût de revient d’un vélo : 1 400 CHF, pour une marge affichée de 1 200 CHF. Absents de ce chiffre : l’extraction du lithium, le transport longue distance, la fin de vie de la batterie. Version abonnement : la structure bascule vers des coûts fixes — le parc est immobilisé et amorti sur plusieurs années — mais la fin de vie revient dans les comptes d’Atelier Léman, puisqu’elle reste propriétaire.',
      piege:
        'Expédier le bloc en trois lignes, alors que c’est ici, avec les revenus, que se joue l’équation de profit — et ici que se cachent les externalités.',
      reflexe:
        'Écrire le bloc en deux colonnes : « payé par nous » et « payé par d’autres ». La seconde colonne est le brouillon du bloc 11.',
      notions: ['structure-couts', 'couts-fixes-variables', 'externalite-negative'],
    },
    {
      id: 'impacts',
      libelle: '10 — Impacts positifs',
      cestQuoi:
        '📘 « Les effets bénéfiques que l’activité de l’entreprise peut générer pour la société — création d’emplois, inclusion sociale, amélioration de la qualité de vie —, l’environnement — réduction des déchets, économie circulaire, baisse des émissions de CO₂ — et les clients — accès à des produits ou services plus durables ou éthiques. » 📘 Ils se construisent du côté client et partenaires : proposition de valeur, relations clients, partenariats clés.',
      question:
        'Qu’est-ce que ce modèle améliore pour quelqu’un qui n’est pas notre client — et pour notre client, au-delà de ce qu’il paie ?',
      quoiMettre: [
        '📘 Les trois familles : société, environnement, clients.',
        'Le bloc du canvas où l’impact s’ancre : 2, 4 ou 8 — un impact qui ne s’ancre nulle part est un vœu.',
        'Le bénéficiaire, nommé : pas « la société », mais « les collaborateurs des six entreprises pilotes ».',
        'Le mécanisme : par quel enchaînement concret l’impact se produit-il ?',
        '📘 L’indicateur en valeur absolue, jamais par unité vendue — c’est la règle explicite du cours.',
      ],
      exemple:
        'Kilomètres parcourus à vélo au lieu de la voiture par les collaborateurs des six entreprises pilotes. Vélos maintenus huit ans en service au lieu de quatre — chiffre illustratif, mais c’est bien l’allongement de la durée de vie qui porte l’impact. Deux apprentis mécaniciens formés à Carouge. Indicateur à retenir : le nombre de batteries réemployées, et non le pourcentage — un pourcentage flatteur sur un volume qui double ne réduit rien.',
      piege:
        'Remplir la case 10 et laisser la case 11 vide. C’est la définition opérationnelle du greenwashing, et c’est la faute la plus visible du chapitre.',
      reflexe:
        'Ne jamais écrire le bloc 10 sans écrire le bloc 11 dans la foulée. Puis appliquer le test 📘 du SDG-washing : les objectifs affichés touchent-ils la proposition de valeur et les activités clés, ou seulement la communication ?',
      notions: ['impacts-positifs', 'externalite-positive', 'kpi'],
    },
    {
      id: 'externalites',
      libelle: '11 — Externalités négatives',
      cestQuoi:
        '📘 « Un coût non intentionnel imposé à d’autres individus ou à la société » — pollution de l’air, bruit, dégradation de la biodiversité, consommation excessive de ressources. Le mot « imposé » est le mot décisif : le tiers qui paie n’a rien signé et n’apparaît dans aucun compte. 📘 On les cherche du côté production : ressources clés, activités clés, structure de coûts.',
      question:
        'Qui supporte un coût réel de notre activité sans figurer dans notre compte de résultat ?',
      quoiMettre: [
        '📘 Les trois blocs où l’on cherche : 6 ressources, 7 activités, 9 structure de coûts.',
        'Le tiers qui paie, nommé — sans nom, ce n’est pas une externalité, c’est un mot.',
        'Le moment : à la production, pendant l’usage, ou en fin de vie.',
        'Le lieu : la définition du cours dit « ici et ailleurs », ce qui interdit de s’arrêter aux murs de l’entreprise.',
        'Le traitement retenu : 📘 réduire par l’innovation, encadrer par une règle interne, compenser — ou internaliser, ce qui est le seul traitement qui change le modèle.',
      ],
      exemple:
        'Extraction du lithium → supportée par les populations minières. Transport longue distance → supporté par l’atmosphère, donc par tout le monde. Batterie non reprise en fin de vie → supportée par la collectivité genevoise. « Notre atelier de Carouge est propre » ne répond pas à la question : la dimension « ici et ailleurs » de la définition du cours l’interdit, puisque le dommage se produit en amont de l’atelier.',
      piege:
        'Chercher les externalités du côté client — 📘 le cours les localise du côté production. Ou écrire « pollution » sans dire qui la subit, ce qui produit une liste sans force.',
      reflexe:
        'Écrire chaque externalité en deux membres reliés par une flèche : « X → supporté par Y ». Si Y est introuvable, la ligne sort de la case. Et se souvenir de l’effet de l’internalisation : le profit affiché baisse non parce qu’on a créé un coût, mais parce qu’on a cessé de le cacher.',
      notions: ['externalite-negative', 'durabilite', 'chaine-valeur-durable'],
    },
  ],

  methode: [
    {
      titre: '1. Écrire la mission d’abord, et la tester tout de suite',
      detail:
        'Une phrase, au bloc 0, avant de regarder le marché. Puis le test immédiat : quelle décision réelle cette phrase change-t-elle ? Si la réponse est « aucune », réécrire. Le bloc 0 est celui qui coûte le moins de temps et qui rapporte le plus, parce qu’il donne un critère pour arbitrer tous les autres.',
      aEviter:
        'Partir du marché puis « ajouter une mission » à la fin pour habiller le canvas : la mission n’oriente alors plus rien, elle décrit ce qu’on a déjà décidé.',
    },
    {
      titre: '2. Remplir les neuf blocs classiques dans l’ordre de leur numéro',
      detail:
        'La numérotation du canvas durable est aussi l’ordre de remplissage efficace : 1 segments → 2 proposition de valeur → 3 canaux → 4 relations → 5 revenus → 6 ressources → 7 activités → 8 partenaires → 9 coûts. On part du client, on finit par ce que ça coûte. 🔎 C’est une commodité à connaître : elle évite d’avoir à mémoriser un ordre séparé.',
      aEviter:
        'Remplir de gauche à droite, en commençant par les partenaires. On décrit alors une organisation existante sans jamais avoir dit à qui elle sert.',
    },
    {
      titre: '3. Repasser chaque bloc à la question de durabilité',
      detail:
        '📘 C’est la métamorphose du canvas : pour chaque bloc, une question — qui valorise la durabilité et qui est exclu ? quel bénéfice environnemental réel ? quel impact du transport ? quelle transparence ? service ou vente ? matières renouvelables ? procédés propres ? partenaires engagés ? coûts cachés ? Une ligne par bloc, pas un paragraphe.',
      aEviter:
        'Traiter la durabilité comme un onzième bloc ajouté à la fin. 📘 C’est l’erreur d’architecture la plus fréquente : la durabilité n’est pas un supplément moral, c’est une contrainte de viabilité qui pèse sur chaque bloc.',
    },
    {
      titre: '4. Descendre dans la case 11 en suivant la chaîne de valeur',
      detail:
        'Parcourir les blocs 6, 7 et 9 dans cet ordre, puis descendre la chaîne de valeur maillon par maillon — logistique amont, production, logistique aval, marketing, services — et nommer, à chaque maillon, le tiers qui supporte un coût. Chaque ligne s’écrit « dommage → supporté par qui ».',
      aEviter:
        'Se contenter de « l’entreprise pollue ». Sans tiers nommé et sans maillon repéré, la case 11 ne sert ni au SWOT ni au SAF.',
    },
    {
      titre: '5. Remonter dans la case 10 par les blocs 2, 4 et 8',
      detail:
        '📘 Les impacts positifs se construisent du côté client et partenaires. Pour chacun : le bénéficiaire nommé, le mécanisme, et un indicateur en valeur absolue. Deux à quatre lignes suffisent — mieux vaut trois impacts mesurables que dix impacts déclaratifs.',
      aEviter:
        'Écrire la case 10 avant la case 11. L’ordre importe : commencer par les impacts positifs incite à s’arrêter là, et c’est précisément le mécanisme du greenwashing.',
    },
    {
      titre: '6. Vérifier la cohérence entre les blocs, deux par deux',
      detail:
        'Le canvas rempli n’est pas l’analyse : l’analyse est le rapprochement. Croiser segment × partenaires, promesse × ressources, revenus × mission. 🔎 Une incohérence n’est visible dans aucun bloc pris isolément — la dire explicitement est la preuve qu’on analyse au lieu de décrire.',
      aEviter:
        'S’arrêter au canvas rempli et le commenter case par case. Une lecture linéaire des douze cases est une description, et elle ne rapporte presque rien à l’oral.',
    },
    {
      titre: '7. Nommer la tension court terme / long terme et le levier retenu',
      detail:
        'Écrire en clair ce que la transition coûte tout de suite — investissement, matériaux plus chers, 📘 parfois une baisse du volume de ventes quand les produits durent plus longtemps — et ce qu’elle rapporte plus tard : risque réglementaire évité, fidélité, résilience. Puis désigner le levier d’internalisation choisi, et pourquoi lui.',
      aEviter:
        'Masquer la tension en affirmant que « la durabilité est rentable ». Une réponse qui nomme le coût et l’assume est plus solide qu’une réponse optimiste.',
    },
  ],

  liens: [
    {
      vers: 'bmc',
      nature: 'prolonge',
      explication:
        'Le canvas durable est le canvas classique plus trois blocs : la mission en amont, les impacts positifs et les externalités négatives en aval. Les neuf blocs du milieu gardent exactement la même définition — c’est ce qui rend le passage de l’un à l’autre gratuit à l’oral.',
    },
    {
      vers: 'chaine-de-valeur',
      nature: 'precise',
      explication:
        'La case 11 ne se remplit pas en regardant le canvas : elle se remplit en descendant la chaîne de valeur maillon par maillon. Chez Atelier Léman, les externalités sont concentrées en amont, là où l’entreprise est faible, et son levier positif est en aval, dans les services, là où elle est forte — ce qui rend le basculement vers le service cohérent aussi du point de vue de l’impact.',
    },
    {
      vers: 'donut',
      nature: 'prolonge',
      explication:
        'Le Donut dit dans quel espace opérer — au-dessus du plancher social, sous le plafond écologique — mais il ne dit rien de ce qu’il faut faire dans une entreprise. Le canvas durable est le seul outil du cours qui traduise ce cadre normatif en décisions concrètes.',
    },
    {
      vers: 'saf',
      nature: 'alimente',
      explication:
        'Le canvas durable alimente les trois critères du SAF : la souhaitabilité se juge contre la mission du bloc 0, l’acceptabilité contre les tiers nommés dans le bloc 11 et les parties prenantes non marchandes du bloc 8, la faisabilité contre les blocs 6 et 9 — chez Atelier Léman, contre la trésorerie immobilisée par le parc.',
    },
    {
      vers: 'ocean-bleu-erac',
      nature: 'partage',
      explication:
        'La matrice ERAC vient du même support que ce canvas, le cours sur le business model durable : elle fournit les quatre gestes — exclure, renforcer, atténuer, créer — qu’on applique bloc par bloc pour passer du canvas actuel au canvas cible.',
    },
  ],

  pieges: [
    {
      titre: 'Remplir un canvas classique, puis ajouter trois lignes vertes',
      explication:
        'Le canvas durable n’est pas un canvas classique avec un supplément. 📘 Le piège du « produit vert » est exactement celui-là : remplacer un composant par sa version recyclée sans toucher à la logique « produire beaucoup, vendre beaucoup, jeter beaucoup » améliore le produit, pas le business model.',
      reflexe:
        'Vérifier que la métamorphose a touché au moins les blocs 5, 6 et 9 — revenus, ressources, coûts. Si seuls les blocs de communication ont bougé, rien n’a changé.',
    },
    {
      titre: 'Case 10 remplie, case 11 vide',
      explication:
        'C’est le greenwashing dans sa forme structurelle : communiquer les impacts positifs en taisant les externalités. Un correcteur repère le déséquilibre en trois secondes, parce que le dessin le rend visible.',
      reflexe:
        'S’imposer au moins autant de lignes en 11 qu’en 10. Une entreprise qui ne trouve aucune externalité n’a pas fini de chercher — elle s’est arrêtée à ses propres murs.',
    },
    {
      titre: 'Prendre le canvas durable pour un outil de diagnostic',
      explication:
        '📘 Les quatre limites du canvas s’appliquent intégralement à sa version durable : il vaut surtout pour une entreprise monoactivité, il se focalise sur le fonctionnement interne, il néglige la concurrence, et il reste statique. Il décrit un fonctionnement, jamais une position sur un marché.',
      reflexe:
        'Le sortir après le PESTEL et Porter, jamais à leur place. Et compenser la limite « statique » en dessinant deux canvas, avant et après.',
    },
    {
      titre: 'Un seul canvas pour une entreprise qui a deux domaines d’activité',
      explication:
        'Atelier Léman a deux domaines : la vente de vélos, en position faible, et la réparation, en position forte. Un canvas unique moyenne les deux et produit une description qui ne correspond à aucune réalité — ni les mêmes clients, ni les mêmes coûts, ni les mêmes externalités.',
      reflexe:
        'Un canvas par domaine d’activité. Et, en dix minutes de préparation, choisir le domaine sur lequel porte la décision plutôt que d’en bâcler deux.',
    },
    {
      titre: 'Croire qu’un abonnement rend un modèle durable',
      explication:
        '📘 Un abonnement assorti d’un renouvellement obligatoire chaque année augmente le renouvellement et les déchets. Ce n’est pas le mode de facturation qui rend un modèle durable, c’est le fait que l’entreprise reste propriétaire de l’objet et supporte donc son entretien et sa fin de vie.',
      reflexe:
        'Poser la question « qui reste propriétaire ? ». Si c’est le client, l’entreprise garde intérêt à ce que l’objet s’use ; si c’est l’entreprise, son intérêt économique et l’intérêt écologique s’alignent.',
    },
  ],

  variantes: [
    {
      sujet: 'Le nom des neuf blocs classiques dans les deux supports',
      formulations: [
        {
          texte:
            '(1) Clients · (3) Canaux de distribution · (4) Relation client · (6) Ressources · (7) Activités · (8) Partenaires · (9) Structure des coûts',
          source: 'Énumération des 12 blocs, cours Business Model durable',
        },
        {
          texte:
            '(1) Segments de clients · (3) Canaux · (4) Relations clients · (6) Ressources clés · (7) Activités clés · (8) Partenaires clés · (9) Structure de coûts',
          source: 'Schéma du canvas et cours BM classique',
        },
      ],
      consigne:
        'Même contenu, étiquettes légèrement différentes selon le support qui présente le canvas. Employer l’un ou l’autre est indifférent — mais garder le même jeu d’étiquettes du début à la fin de la réponse. Ce qui compte et qui doit être exact, c’est la numérotation de 0 à 11, parce qu’elle porte l’argument : 0 avant tout le reste, 10 et 11 après.',
    },
    {
      sujet: 'ERAC — l’acronyme du même support que ce canvas',
      formulations: [
        { texte: 'Éliminer – Réduire – Augmenter – Créer', source: 'Cours 3 (chaîne de valeur), slide 3' },
        {
          texte: 'Exclure – Renforcer – Atténuer – Créer',
          source: 'Cours BM (Business Model durable), slide 22 — « Matrice ERAC »',
        },
      ],
      consigne:
        'La matrice ERAC est présentée dans le même support que ce canvas, et c’est là qu’elle prend sa seconde forme. Attention au sens du R et du A : « Réduire » et « Atténuer » désignent la même action de baisse, mais « Renforcer » est une hausse alors que « Réduire » est une baisse — les deux acronymes ne rangent pas les lettres dans le même ordre logique. Citer les deux formulations quand on mobilise ERAC pour transformer un bloc du canvas rapporte des points.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman SA — le canvas durable de l’option « abonnement mobilité »',
    situation:
      'Nous sommes à l’étape 3. Le diagnostic est fait : les ventes de vélos reculent de 8 % sur deux ans, des marques low-cost en ligne arrivent, la Ville de Genève subventionne la mobilité douce des entreprises, les mécaniciens sont une compétence rare et les batteries viennent de deux fournisseurs asiatiques. Le croisement force × opportunité a fait sortir une direction : basculer vers un abonnement mobilité tout compris pour les entreprises genevoises. À ce stade, ce n’est encore qu’une intention. Le canvas durable la transforme en système vérifiable — et fait apparaître ce que la version classique ne montrait pas.',
    deroule: [
      {
        etiquette: '0 — Mission',
        contenu:
          '« Maintenir le plus longtemps possible des vélos en état de rouler à Genève. » Cette phrase interdit une prime au volume de vélos neufs et impose de choisir des composants réparables. Elle est donc une mission, pas un slogan.',
      },
      {
        etiquette: '1 — Segments',
        contenu:
          'Entreprises genevoises de 20 à 200 salariés ayant un objectif carbone à tenir, solvabilisées par les subventions cantonales. Exclus, et à écrire : les budgets serrés, et le collaborateur sans smartphone si la réservation est uniquement applicative.',
      },
      {
        etiquette: '2 — Proposition de valeur',
        contenu:
          'Non plus « un vélo électrique haut de gamme », mais « un vélo en état de marche toute l’année pour chaque collaborateur, sans gestion de flotte ». Promesse de sécurité et de simplicité ; bénéfice durable = la durée de vie, publiée chaque année.',
      },
      {
        etiquette: '5 — Sources de revenus',
        contenu:
          'De 2 600 CHF encaissés une fois — pour 1 400 CHF de coût, soit 1 200 CHF le jour de la livraison — à un abonnement mensuel. Pilote illustratif : 40 vélos, 6 entreprises, 12 mois. Atelier Léman reste propriétaire du parc.',
      },
      {
        etiquette: '6 et 7 — Ressources et activités',
        contenu:
          'Les mécaniciens deviennent le cœur du modèle et non plus un service après-vente. La maintenance préventive et le reconditionnement passent au premier plan. Les batteries restent le point dur : deux fournisseurs, origine du lithium non maîtrisée.',
      },
      {
        etiquette: '8 et 9 — Partenaires et coûts',
        contenu:
          'La Ville de Genève devient un partenaire non marchand décisif ; un recycleur de batteries devient nécessaire. Côté coûts, la structure bascule vers du fixe : le parc est immobilisé et amorti, alors que les revenus arrivent mensuellement.',
      },
      {
        etiquette: '10 — Impacts positifs',
        contenu:
          'Kilomètres reportés de la voiture vers le vélo pour les collaborateurs des six entreprises ; vélos maintenus huit ans au lieu de quatre (illustratif) ; deux apprentis formés à Carouge. Indicateur en absolu : nombre de batteries réemployées.',
      },
      {
        etiquette: '11 — Externalités négatives',
        contenu:
          'Extraction du lithium → populations minières. Transport longue distance → atmosphère. Fin de vie de la batterie → collectivité genevoise. Le basculement en internalise une : en restant propriétaire, l’entreprise récupère la batterie et paie sa fin de vie.',
      },
    ],
    conclusion:
      'Le canvas produit trois choses que l’intention de départ ne contenait pas. D’abord un obstacle précis, argumentable au SAF : la faisabilité ne bute pas sur la compétence — elle existe — mais sur la trésorerie, parce que le modèle transforme un stock revendu vite en un parc immobilisé pendant que les revenus s’étalent. Ensuite une externalité internalisée, et une seule : la fin de vie des batteries revient dans les comptes ; l’extraction du lithium, elle, reste dehors — et le dire est plus fort que de prétendre le contraire. Enfin la tension nommée : vendre moins de vélos neufs contre des revenus récurrents plus résilients. C’est cette phrase-là qui ouvre l’étape suivante.',
  },

  phraseOral:
    'Le canvas classique s’arrête quand les revenus dépassent les coûts ; le canvas durable ajoute un bloc en amont et deux en aval, et la question devient : rentable, oui — mais pour qui, et aux dépens de qui ? Chez Atelier Léman, les 1 200 CHF de marge par vélo tiennent en partie parce que l’extraction du lithium et la fin de vie de la batterie sont payées par d’autres. Passer à l’abonnement fait revenir la fin de vie dans nos comptes : le profit affiché baisse, non pas parce qu’on a créé un coût, mais parce qu’on a cessé de le cacher. C’est exactement pour cela qu’une transition durable coûte à court terme — et c’est aussi pour cela qu’elle réduit le risque réglementaire à long terme.',

  aRetenir: [
    { cle: 'Ce qu’il ajoute', valeur: 'Trois blocs : mission (0), impacts positifs (10), externalités négatives (11) — douze blocs de 0 à 11.' },
    { cle: 'Pourquoi le 0', valeur: 'La mission précède et conditionne tous les autres blocs : on part de la raison d’être, plus du marché.' },
    { cle: 'Où chercher le 11 📘', valeur: 'Du côté production : ressources clés, activités clés, structure de coûts.' },
    { cle: 'Où se construit le 10 📘', valeur: 'Du côté client et partenaires : proposition de valeur, relations clients, partenariats clés.' },
    { cle: 'Externalité 📘', valeur: 'Un coût non intentionnel imposé à d’autres individus ou à la société. Le mot clé est « imposé ».' },
    { cle: 'Internaliser', valeur: 'Faire passer un coût de la ligne cachée à la ligne visible. Le profit baisse parce qu’on cesse de cacher, pas parce qu’on dépense.' },
    { cle: 'Le levier d’alignement', valeur: 'L’économie de la fonctionnalité — le test tient en une question : qui reste propriétaire ?' },
    { cle: 'Le critère de la case 10', valeur: 'Un indicateur en valeur absolue, jamais par unité vendue.' },
    { cle: 'Les 4 limites 📘', valeur: 'Monoactivité · centré interne · néglige la concurrence · statique. Elles valent aussi pour la version durable.' },
    { cle: 'Le test anti-greenwashing', valeur: 'Autant de lignes en 11 qu’en 10 — sinon c’est une plaquette, pas un modèle.' },
  ],

  notions: [
    'bmc-durable',
    'bmc',
    'mission',
    'impacts-positifs',
    'externalite-negative',
    'metamorphose-bmc',
    'economie-fonctionnalite',
    'greenwashing',
    'proposition-de-valeur',
    'equation-de-profit',
    'durabilite',
  ],
}
