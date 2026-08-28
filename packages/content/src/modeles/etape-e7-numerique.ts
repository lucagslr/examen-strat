import type { EtapeAnalyse } from './types'

/**
 * Étape 7 — Le volet numérique.
 *
 * Un volet transverse : il ne choisit pas la stratégie, il traite l’outil sur
 * lequel la stratégie retenue va s’appuyer. Il consomme l’option arrêtée et ses
 * conditions de durabilité, et il produit un arbitrage — gain apporté contre
 * impacts créés — avec des conditions et des indicateurs en absolu, que l’étape
 * suivante passera au filtre S-A-F puis écrira en recommandation.
 *
 * Provenance : 📘 cours · 🔎 raisonnement · 📚 hors cours.
 */
export const etape: EtapeAnalyse = {
  id: 'e7',
  numero: 7,
  slug: 'numerique',
  titre: 'Le volet numérique',

  question:
    "Comment traite-t-on une question sur le numérique, du bénéfice annoncé à la recommandation ?",

  entree:
    'L’option de l’abonnement mobilité est arrêtée et ses conditions de durabilité sont écrites. Il reste qu’elle repose sur un outil numérique — application, capteurs, hébergement, données — dont personne n’a encore chiffré l’impact propre ni vérifié le bénéfice annoncé.',

  sortie:
    'Un arbitrage numérique tranché : l’outil ramené à ce qui sert, trois conditions à inscrire dans l’option — capteurs écartés du pilote, guichet de Plainpalais maintenu, kilométrage transmis agrégé — et deux indicateurs mesurés en valeur absolue. De quoi passer l’option au filtre S-A-F et en faire des KPI, au lieu d’une intention écologique.',

  minutes: "transverse",

  modeles: [
    'rne',
    'trois-postes',
    'effet-rebond',
    'sobriete-qta',
    'achats-durables',
    'wcag-pour',
    'privacy',
    'collecte-oisf',
  ],

  // -------------------------------------------------------------- Méthode

  methode: [
    {
      titre: '1. Vérifier qu’il y a bien un volet numérique, et le dire',
      detail:
        'Cherche dans l’énoncé les mots qui engagent une technologie : application, plateforme, capteurs, IA, données, digitalisation, abonnement, suivi. Si l’un d’eux apparaît, ou si la promesse faite au client suppose de savoir quelque chose en permanence, le volet numérique s’ouvre. Annonce-le en une phrase : « cette option repose sur un outil numérique, je le traite ». Le jury sait alors que ce n’est pas un hors-sujet.',
      aEviter:
        'Ajouter un paragraphe numérique décoratif à la fin de l’exposé parce que le cours en contient un chapitre. Un volet numérique qui n’est relié à aucune décision du cas ne rapporte rien.',
    },
    {
      titre: '2. Écrire le bénéfice annoncé — avec son unité et son auteur',
      detail:
        'Note qui promet quoi : « le prestataire annonce que… », « la direction espère que… ». Puis convertis chaque promesse en quelque chose qui se compte : des feuilles, des kilomètres, des kilowattheures, des pannes évitées. Un bénéfice sans unité ne peut être ni accepté ni refusé — il peut seulement être répété.',
      aEviter:
        'Discuter un bénéfice au niveau où il est formulé. « Ça évite des déplacements inutiles » n’est pas une donnée, c’est un argument de vente.',
    },
    {
      titre: '3. Localiser l’impact : Terminaux, Data centers, Réseaux',
      detail:
        'Trois lignes sur le brouillon, une par poste. 📘 Terminaux : quels appareils la décision fait-elle sortir d’usine, et lesquels existaient déjà. Data centers : que faut-il héberger, et pendant combien de temps. Réseaux : que faut-il transporter, à quelle fréquence. Puis désigne le poste dominant : c’est là que la négociation aura lieu.',
      aEviter:
        'Écrire « le numérique consomme de l’énergie ». C’est vrai, inutilisable, et cela ne désigne aucun levier. La bonne question est toujours : où exactement ?',
    },
    {
      titre: '4. Tester le rebond avant d’accepter le moindre gain',
      detail:
        'Applique la formule 📘 : impact total = impact par unité × nombre d’unités. Cherche l’unité qui peut se multiplier — requêtes, trajets, réservations, utilisateurs — et écris la conclusion en valeur absolue : total avant, total après. Si le volume est inconnu, calcule le seuil de bascule, c’est-à-dire le nombre d’unités à partir duquel le gain est intégralement mangé.',
      aEviter:
        'Conclure sur un pourcentage par unité. Un gain unitaire est un fait ; ce n’est pas une conclusion, et le confondre avec une conclusion est l’erreur la plus visible du chapitre.',
    },
    {
      titre: '5. Questionner le besoin avant d’optimiser l’outil : Q → T → A',
      detail:
        'Découpe le projet en fonctions, une par ligne, puis prends-les dans l’ordre du cours 📘. Q — a-t-on réellement besoin de cet usage ? T — le besoin peut-il être couvert autrement, avec un moyen plus léger ? A — ce qui reste, comment l’alléger ? Les deux premières lettres suppriment des lignes entières ; la troisième ne fait que les rendre moins chères.',
      aEviter:
        'Commencer par A. Optimiser d’abord revient à rendre moins coûteux un usage dont personne n’a vérifié l’utilité — et les gains obtenus seront réabsorbés par la croissance de cet usage.',
    },
    {
      titre: '6. Traiter le matériel restant : acheter moins, mieux, plus longtemps',
      detail:
        'Ce qui survit au Q et au T se commande. 📘 Acheter moins d’abord : mutualiser, réutiliser, reconditionner, réaffecter. Acheter mieux ensuite, sur le coût du cycle de vie — achat plus fonctionnement plus élimination — et non sur le prix affiché. Utiliser plus longtemps enfin : réparabilité, pièces disponibles, reprise en fin de vie inscrite au contrat.',
      aEviter:
        'Répondre « on recyclera ». Le recyclage intervient après la fabrication, le transport et l’usage : il ne rattrape presque rien. Le vrai levier est d’éviter de faire fabriquer.',
    },
    {
      titre: '7. Traiter la dimension sociale : accessibilité, exclusion, données',
      detail:
        'Prends un parcours réel — celui dont vit l’entreprise — et passe-le au POUR 📘 : perceptible, utilisable, compréhensible, robuste. Cherche ensuite qui subit le service sans l’avoir choisi, et ce qui se passe pour lui si le numérique devient le canal unique. Termine par les données : quelles personnes, quelle finalité, quelle durée de conservation, quel réglage livré d’origine.',
      aEviter:
        'Croire que la conformité légale suffit. 📘 « Le risque n’est pas juridique, mais stratégique » : un service parfaitement légal peut faire perdre des clients, une réputation et une part de marché.',
    },
    {
      titre: '8. Trancher : gain apporté contre impacts créés, avec des conditions',
      detail:
        'Écris en face-à-face ce que le numérique apporte et ce qu’il crée, ligne par ligne, puis rends un verdict par ligne : retenu, réduit, écarté, ou reporté. Termine par deux ou trois conditions formulées de façon vérifiable et par des indicateurs en absolu. C’est ce qui transforme le volet numérique en matière pour la décision.',
      aEviter:
        'Rendre un verdict global — « oui, c’est durable » ou « non, c’est polluant ». La bonne réponse est presque toujours « à ces conditions-là, et pas à d’autres ».',
    },
  ],

  // ---------------------------------------------------------- Raisonnement

  raisonnement: [
    {
      t: 'texte',
      contenu:
        'À ce stade, l’option est arrêtée et ses conditions de durabilité sont posées : un pilote de 40 vélos chez 6 entreprises genevoises sur 12 mois. Un prestataire remet alors un devis pour l’outil qui doit faire tourner l’abonnement — une application, 40 capteurs de position, un back-office loué — et le présente comme un progrès écologique parce qu’il « supprime le papier et évite des déplacements inutiles ». Le volet numérique commence exactement là : pas au moment de choisir la stratégie, mais au moment où la stratégie s’équipe.',
    },
    {
      t: 'question',
      contenu:
        'Y a-t-il vraiment un volet numérique dans ce cas, ou est-ce qu’on l’ajoute pour faire moderne ? La réponse ne se devine pas : elle se lit dans l’énoncé, mot à mot.',
    },
    {
      t: 'observation',
      source:
        'L’énoncé propose « un abonnement mobilité tout compris facturé aux entreprises genevoises — vélo, entretien, remplacement et assistance inclus ».',
      conclusion:
        'Promettre le remplacement et l’assistance oblige à savoir, chaque matin, quel vélo roule et lequel est à l’atelier. L’outil numérique n’est donc pas un supplément à la mode : il est la condition de tenue de la promesse. Voilà pourquoi le volet s’ouvre ici et ne s’ouvrirait pas dans un cas où l’entreprise se contenterait de vendre des vélos. Une option qui repose sur une technologie non examinée est une option non examinée.',
    },
    {
      t: 'encadre',
      ton: 'info',
      titre: 'Le réflexe qui commande tout',
      contenu:
        'Toute technologie apporte un bénéfice et crée un impact qui lui est propre. 📘 Le cours demande de la penser dans les deux sens : elle peut dématérialiser, optimiser et mesurer, mais elle alourdit aussi l’empreinte par les terminaux, les data centers et l’effet rebond. Une réponse à sens unique — que du positif, ou que du négatif — est presque toujours fausse, et c’est le premier signal qu’un jury attend. 🔎 La formule qui tient : « elle peut servir la durabilité si son impact propre et l’effet rebond sont maîtrisés ».',
    },
    {
      t: 'renvoi',
      modele: 'rne',
      point: 'technologique',
      libelle:
        'RNE, axe T — « responsable » ne veut pas dire « écologique » : les données, la dépendance et la cybersécurité pèsent autant que les kilowattheures.',
    },
    {
      t: 'schema',
      schema: {
        h: 990,
        description:
          'Un projet numérique proposé descend vers trois postes d’impact — terminaux, data centers, réseaux — dont les flèches convergent vers le test du rebond, puis vers la sobriété Q, T, A, qui ouvre à son tour sur les achats et le volet social ; les deux se rejoignent sur l’arbitrage final entre gain apporté et impacts créés.',
        noeuds: [
          {
            id: 'projet',
            titre: 'LE PROJET NUMÉRIQUE PROPOSÉ',
            lignes: ['application · capteurs · serveur', 'et un bénéfice annoncé'],
            x: 290,
            y: 40,
            l: 420,
            h: 110,
            ton: 'accent',
          },
          {
            id: 't',
            titre: 'T — Terminaux',
            lignes: ['ce qu’il faut fabriquer'],
            x: 40,
            y: 200,
            l: 260,
            h: 110,
          },
          {
            id: 'd',
            titre: 'D — Data centers',
            lignes: ['ce qu’il faut héberger'],
            x: 370,
            y: 200,
            l: 260,
            h: 110,
          },
          {
            id: 'r',
            titre: 'R — Réseaux',
            lignes: ['ce qu’il faut transporter'],
            x: 700,
            y: 200,
            l: 260,
            h: 110,
          },
          {
            id: 'rebond',
            titre: 'LE TEST DU REBOND',
            lignes: ['le gain unitaire tient-il', 'une fois le volume multiplié ?'],
            x: 290,
            y: 360,
            l: 420,
            h: 110,
            ton: 'alerte',
          },
          {
            id: 'qta',
            titre: 'SOBRIÉTÉ Q → T → A',
            lignes: ['questionner le besoin', 'avant d’optimiser l’outil'],
            x: 290,
            y: 520,
            l: 420,
            h: 110,
          },
          {
            id: 'achats',
            titre: 'ACHATS IT ET DEEE',
            lignes: ['moins · mieux · plus longtemps'],
            x: 40,
            y: 680,
            l: 420,
            h: 110,
          },
          {
            id: 'social',
            titre: 'LE VOLET SOCIAL',
            lignes: ['accessibilité · exclusion', 'données personnelles'],
            x: 540,
            y: 680,
            l: 420,
            h: 110,
          },
          {
            id: 'arbitrage',
            titre: 'L’ARBITRAGE',
            lignes: ['gain apporté', 'contre impacts créés'],
            x: 290,
            y: 840,
            l: 420,
            h: 110,
            ton: 'accent',
          },
        ],
        liens: [
          { de: 'projet', vers: 't' },
          { de: 'projet', vers: 'd' },
          { de: 'projet', vers: 'r' },
          { de: 't', vers: 'rebond' },
          { de: 'd', vers: 'rebond' },
          { de: 'r', vers: 'rebond' },
          { de: 'rebond', vers: 'qta' },
          { de: 'qta', vers: 'achats' },
          { de: 'qta', vers: 'social' },
          { de: 'achats', vers: 'arbitrage' },
          { de: 'social', vers: 'arbitrage' },
        ],
        note: 'Chaque filtre peut réduire le projet ou lui poser une condition — aucun ne peut l’agrandir. C’est ce qui distingue un volet numérique d’un argumentaire de vente. 🔎',
      },
    },
    {
      t: 'observation',
      source:
        'Le devis annonce que la solution « supprime le papier et évite des déplacements inutiles », et facture quatre fonctions : réserver un vélo, suivre sa position en continu, prévenir quand un vélo revient de l’atelier, produire des statistiques mensuelles.',
      conclusion:
        'Deux bénéfices, aucune unité, aucun périmètre. Tant qu’un bénéfice n’est pas exprimé en quelque chose qui se compte — feuilles, kilomètres, kilowattheures, pannes évitées — il ne peut être ni accepté ni refusé, seulement répété. Le geste consiste donc à réécrire chaque promesse avec son unité et son auteur, et à noter en face de chaque fonction qui l’a demandée. Le devis s’élève à 85 000 CHF de développement, 79 CHF par mois de back-office et 40 capteurs à 90 CHF pièce. (chiffres illustratifs)',
    },
    {
      t: 'renvoi',
      modele: 'trois-postes',
      point: 'terminaux',
      libelle:
        'Les trois postes, case T — pourquoi la fabrication d’un appareil pèse plus lourd que toute son électricité d’usage.',
    },
    {
      t: 'observation',
      source:
        'La fiche technique du capteur indique « durée de vie 3 ans, batterie soudée, non remplaçable » — pour 40 capteurs.',
      conclusion:
        'L’essentiel de l’impact d’un objet électronique est consommé le jour où il sort d’usine, avant même d’être allumé. Une batterie soudée fixe donc la date de mise au rebut dès la signature : environ treize capteurs jetés par an en régime établi, sans filière de traitement identifiée. Les DEEE — les déchets d’équipements électriques et électroniques — ne sont pas un problème de fin de projet, ils se décident au moment de l’achat. Et aucun réglage logiciel ne rattrapera cela : c’est ici qu’il faut négocier, pas sur les kilowattheures du serveur.',
    },
    {
      t: 'tableau',
      entetes: ['Poste', 'Ce que le projet fait exister', 'Le levier disponible'],
      lignes: [
        [
          'T — Terminaux',
          '40 capteurs, 2 tablettes d’atelier, 1 borne d’accueil : 43 objets neufs',
          'Exiger un capteur démontable et réaffectable ; prendre des tablettes reconditionnées',
        ],
        [
          'D — Data centers',
          'Un back-office loué 79 CHF par mois, historique conservé 12 mois par défaut',
          'Ramener la conservation à 30 jours : c’est un paramètre, pas un investissement',
        ],
        [
          'R — Réseaux',
          '40 cartes SIM en émission continue, nuits et week-ends compris',
          'Passer à une remontée par jour ; la batterie du capteur dure alors plus longtemps',
        ],
        [
          'Poste dominant',
          'Les terminaux — leur impact est déjà consommé à la livraison',
          'C’est là que se joue la négociation avec le prestataire',
        ],
      ],
      legende:
        'Chiffres illustratifs. Les smartphones des 120 salariés sont comptés à part : le projet ne les fait pas fabriquer, mais s’il exige un système d’exploitation récent, il accélère leur renouvellement — à surveiller. 🔎',
    },
    {
      t: 'question',
      contenu:
        'Le gain annoncé survivra-t-il à la montée du volume ? Autrement dit : est-ce qu’on mesure un pourcentage, ou est-ce qu’on mesure une quantité ?',
    },
    {
      t: 'observation',
      source:
        'L’hébergeur annonce « − 35 % d’électricité par réservation », et le pilote prévoit de passer de 400 à 1 500 réservations par mois une fois les six entreprises entrées. (chiffres illustratifs)',
      conclusion:
        '0,65 × 3,75 ≈ 2,4. L’impact total de la plateforme est multiplié par 2,4 pendant que son indicateur unitaire s’améliore de 35 % : les deux affirmations sont vraies en même temps, et seule la seconde décrit ce qui arrive à l’atmosphère. Le seuil de bascule se calcule — 1 ÷ 0,65 ≈ 1,5, soit environ 615 réservations par mois. Au-delà, le gain de l’hébergeur est intégralement mangé. Ce nombre n’est pas une curiosité : il part directement au tableau de bord du pilote.',
    },
    {
      t: 'renvoi',
      modele: 'effet-rebond',
      point: 'formule',
      libelle:
        'L’effet rebond, la formule — impact total = impact par unité × nombre d’unités, la seule ligne qui permette de conclure.',
    },
    {
      t: 'encadre',
      ton: 'alerte',
      titre: 'Un gain unitaire est un fait, pas une conclusion',
      contenu:
        'Tant que le nombre d’unités n’est pas écrit, le pourcentage ne prouve rien. 📘 C’est le mécanisme de l’effet rebond : un gain obtenu quelque part fait apparaître une hausse d’usage ou d’impact ailleurs. Ici, deux formes se cumulent — la forme directe, parce que le forfait met le coût du trajet à zéro pour le salarié qui décide, et la forme de marché, parce qu’un abonnement mensuel rend le vélo électrique accessible à des entreprises qui n’auraient jamais acheté un vélo à 2 600 CHF. Le réflexe à l’oral : demander « − 35 % de quoi, et sur combien d’unités ? », puis conclure en valeur absolue.',
    },
    {
      t: 'question',
      contenu:
        'Et si la moitié de cet outil ne servait à personne ? La question paraît impolie face à un devis signé de la main d’un professionnel — c’est pourtant la seule qui rapporte davantage que tous les réglages techniques réunis.',
    },
    {
      t: 'observation',
      source:
        'Les entretiens menés avec les six entreprises pilotes ne font remonter que deux besoins : savoir si un vélo est disponible le matin, et savoir quand celui qui est à l’atelier revient.',
      conclusion:
        'Le suivi de position en continu et les statistiques mensuelles ne répondent à aucune demande exprimée : deux fonctions sur quatre tombent avant qu’une seule ligne de code soit écrite, et les 40 capteurs tombent avec elles. Le plus gros gain environnemental du dossier vient d’être obtenu sans aucune technologie — et le budget passe d’environ 85 000 CHF à environ 3 000 CHF. Remarque au passage que ces deux besoins n’ont pas été devinés : ils viennent d’entretiens. Le Q ne se répond pas de tête.',
    },
    {
      t: 'tableau',
      entetes: ['Étape', 'La question posée', 'Ce qu’elle change ici'],
      lignes: [
        [
          'Q — Questionner 📘',
          'A-t-on réellement besoin de cet usage ?',
          'Suivi permanent et statistiques mensuelles barrés : rien de grave ne se produit si personne ne les fait',
        ],
        [
          'T — Transférer 📘',
          'Le besoin peut-il être satisfait autrement ?',
          'Un tableau de disponibilité partagé et un message texte automatique couvrent les deux besoins',
        ],
        [
          'A — Améliorer',
          'L’usage confirmé, comment l’alléger ?',
          'Page sans image lourde, deux états seulement, aucune donnée nominative au-delà du référent',
        ],
      ],
      legende:
        'C’est l’ordre Q → T → A qui est sourcé 📘 ; la lecture opérationnelle de « Transférer » est une interprétation, à présenter comme telle 🔎. Le message texte a été retenu parce qu’il fonctionne sur n’importe quel téléphone : la solution la plus sobre était ici la plus accessible.',
    },
    {
      t: 'renvoi',
      modele: 'sobriete-qta',
      point: 'q',
      libelle:
        'Sobriété Q – T – A, case Q — comment questionner un besoin sans se contenter de la réponse « oui, on en a besoin ».',
    },
    {
      t: 'encadre',
      ton: 'info',
      titre: 'Sobriété ne veut pas dire suppression',
      contenu:
        'La sobriété cherche le juste niveau d’usage, pas le renoncement — 📘 « une sélection raisonnée de ce qui est nécessaire ». Supprimer une fonction que personne n’a demandée relève de la sobriété ; supprimer une aide à la compréhension, une alternative accessible ou le guichet qui dépanne les clients sans smartphone récent serait une sobriété injuste : moins de superflu, jamais moins d’essentiel. D’où la règle posée ici — le guichet de Plainpalais reste ouvert et le dépôt sans réservation reste possible. L’économie ne se paie pas sur les clients les plus fragiles.',
    },
    {
      t: 'renvoi',
      modele: 'achats-durables',
      point: 'moins',
      libelle:
        'Cycle des achats, étape 1 — acheter moins : mutualiser, réutiliser, reconditionner, avant même d’écrire le cahier des charges.',
    },
    {
      t: 'observation',
      source:
        'L’énoncé précise que l’abonnement serait « facturé aux entreprises genevoises », alors que ce sont leurs salariés qui rouleront — et la clientèle historique de la réparation, elle, passe au guichet.',
      conclusion:
        'Celui qui paie n’est pas celui qui utilise. Le salarié n’a rien signé avec Atelier Léman et ne peut pas refuser sans s’en expliquer auprès de son employeur : son accord n’est pas libre, donc c’est la conception du service qui doit le protéger, pas une case à cocher. Même dissociation du côté des clients de la réparation : faire de l’application le canal unique n’exclut personne volontairement, et exclut quand même. 📘 « Le risque n’est pas juridique, mais stratégique » — la loi peut être respectée pendant qu’on perd la réputation locale qui est la première force de l’entreprise.',
    },
    {
      t: 'renvoi',
      modele: 'wcag-pour',
      point: 'exclusion',
      libelle:
        'POUR, l’exclusion indirecte — un service légal et performant peut écarter une partie des clients sans qu’on l’ait voulu.',
    },
    {
      t: 'renvoi',
      modele: 'privacy',
      point: 'default',
      libelle:
        'Privacy by default — l’état dans lequel le service est livré : ce qui est activé d’origine, et pas seulement ce qu’on peut désactiver.',
    },
    {
      t: 'tableau',
      entetes: ['Ce que le numérique apporte', 'Ce qu’il crée', 'Verdict'],
      lignes: [
        [
          'La disponibilité garantie — sans elle, l’abonnement « tout compris » n’est pas tenable',
          'Un outil à environ 3 000 CHF, deux tablettes, un envoi de messages',
          'Retenu : c’est la condition d’existence de l’option',
        ],
        [
          'Papier supprimé, déplacements évités',
          'Rien de mesuré par le prestataire, aucun périmètre annoncé',
          'Inutilisable tel quel : à mesurer, ou à retirer de l’argumentaire',
        ],
        [
          'Maintenance prédictive par capteurs',
          '40 objets neufs, DEEE à 3 ans, géolocalisation de personnes',
          'Écarté au stade du pilote ; à rouvrir sur un parc dix fois plus grand',
        ],
        [
          'Hébergeur 35 % plus sobre par réservation',
          'Volume multiplié par 3,75, soit × 2,4 en valeur absolue',
          'Retenu comme seuil, pas comme argument : 615 réservations par mois',
        ],
      ],
      legende:
        'L’arbitrage ne dit pas oui ou non au numérique : il dit lequel, réduit à quoi, et à quelles conditions. 🔎 Dire « ça dépend, et voilà de quoi » vaut mieux que trancher trop vite.',
    },
    {
      t: 'oral',
      contenu:
        '« Sur le volet numérique, je refuse la réponse à sens unique. L’outil est la condition de l’abonnement, donc il reste — mais je le réduis. L’impact se situe d’abord sur les terminaux, où la fabrication est déjà consommée à la livraison, puis sur l’hébergement et le réseau, qui se règlent par des paramètres. Le gain de 35 % par réservation annoncé par l’hébergeur ne tient pas en absolu : au-delà d’environ 615 réservations par mois, il est mangé par le volume. J’applique donc la sobriété dans l’ordre — questionner, transférer, améliorer : deux fonctions sur quatre tombent, les quarante capteurs avec elles, et le projet passe de 85 000 à 3 000 francs. Je maintiens le guichet de Plainpalais, parce qu’un numérique efficient mais excluant n’est pas durable, et je suis les kilowattheures totaux plutôt que le pourcentage par requête. »',
    },
  ],

  // -------------------------------------------------------------- Livrable

  livrable: {
    titre: 'Le volet numérique, tel qu’il tient sur le brouillon',
    lignes: [
      'BÉNÉFICE ANNONCÉ : papier supprimé + déplacements évités → non chiffré par le prestataire',
      'T — 40 capteurs (batterie soudée, 3 ans) + 2 tablettes + 1 borne = 43 objets neufs',
      'D — back-office 79 CHF/mois ; historique 12 mois → ramené à 30 jours',
      'R — 40 SIM en continu → une remontée par jour',
      'DEEE — environ 13 capteurs au rebut par an, aucune filière prévue',
      'REBOND — − 35 %/réservation mais 400 → 1 500/mois ⇒ × 2,4 en absolu',
      'SEUIL DE BASCULE — 615 réservations/mois, à mettre au tableau de bord',
      'Q — deux besoins seulement : dispo le matin, retour d’atelier',
      'T — tableau partagé + message texte ⇒ ≈ 3 000 CHF au lieu de 85 000',
      'A — page légère, deux états, aucune donnée nominative',
      'ACHATS IT — tablettes reconditionnées, batterie remplaçable, reprise au contrat',
      'SOCIAL — guichet de Plainpalais maintenu : digital-first, jamais digital-only',
      'DONNÉES — géolocalisation abandonnée avec les capteurs ; kilométrage transmis agrégé',
      'ARBITRAGE — le numérique passe, réduit, sous trois conditions',
      'KPI ABSOLUS — kWh totaux · réservations par mois · part des trajets qui remplacent une voiture',
    ],
  },

  // ---------------------------------------------------------------- Pièges

  pieges: [
    {
      titre: 'Traiter le numérique comme un chapitre décoratif',
      explication:
        'Un paragraphe sur « la transformation digitale » collé en fin d’exposé, relié à aucune décision, ne rapporte rien : il montre qu’on récite un plan de cours. Le volet numérique n’a de valeur que branché sur une option du cas — ici, il change le contenu du pilote et son budget.',
      reflexe:
        'Ouvre toujours par la phrase qui relie : « cette option repose sur un outil numérique, donc je le traite ». Et termine par ce que le volet a modifié dans la décision, pas par une généralité.',
    },
    {
      titre: 'Répondre à sens unique',
      explication:
        '« Le numérique va nous rendre plus durables » et « le numérique pollue » sont deux fautes symétriques. 📘 Le cours demande les deux sens : bénéfice apporté et impact propre. Une réponse qui ne contient qu’un des deux est incomplète par construction, quel que soit son contenu.',
      reflexe:
        'Impose-toi une phrase en deux temps : « la technologie apporte X, et elle crée Y ». Si tu n’arrives pas à écrire le second membre, tu n’as pas encore fait l’analyse.',
    },
    {
      titre: 'Conclure sur un pourcentage par unité',
      explication:
        'C’est l’erreur la plus fréquente du chapitre. « − 35 % par réservation » est un fait réel et vérifiable — et il ne dit rien de ce qui se passe, parce que 📘 l’impact total est le produit de l’impact unitaire par le volume. Un gain unitaire accompagné d’un volume multiplié donne une hausse.',
      reflexe:
        'Écris la multiplication au brouillon, même approximative : 0,65 × 3,75 ≈ 2,4. Un chiffre absolu, fût-il illustratif et annoncé comme tel, vaut mieux qu’un pourcentage brillant.',
    },
    {
      titre: 'Optimiser avant d’avoir questionné',
      explication:
        'Parler d’hébergement vert, de code allégé ou de compression d’images alors que personne n’a vérifié que la fonction servait, c’est appliquer le A sans le Q. On rend moins coûteux un usage inutile — et les gains sont réabsorbés par la croissance de cet usage.',
      reflexe:
        'Annonce l’ordre avant de dérouler : « je prends les trois étapes dans l’ordre du cours, questionner d’abord ». Puis nomme au moins une fonction que le Q supprime. Sans suppression nommée, il n’y a pas eu de questionnement.',
    },
    {
      titre: 'Croire que recycler règle la question du matériel',
      explication:
        '« Nous traiterons les DEEE en recyclant » arrive après la fabrication, le transport et l’usage — c’est-à-dire après l’essentiel de l’impact. 📘 La règle est l’inverse : acheter moins, acheter mieux sur le coût du cycle de vie, utiliser plus longtemps. Le recyclage est le dernier maillon, pas le levier.',
      reflexe:
        'Cherche d’abord le chiffre de ce qui ne sera pas fabriqué. Ici, quarante capteurs supprimés par le Q pèsent infiniment plus lourd qu’une filière de recyclage promise.',
    },
    {
      titre: 'Confondre conformité légale et stratégie responsable',
      explication:
        '📘 « Le risque n’est pas juridique, mais stratégique. » Un service peut respecter la loi, afficher un taux de conformité honorable et exclure de fait une partie de la clientèle : c’est l’exclusion indirecte, sans intention de discriminer. L’entreprise perd alors des clients, une réputation et une part de marché, sans avoir rien enfreint.',
      reflexe:
        'Ajoute toujours un indicateur de résultat à côté de l’indicateur technique : non pas seulement le taux de conformité, mais la part des clients âgés qui terminent réellement la réservation. En cas de divergence, c’est le second qui commande.',
    },
  ],
}
