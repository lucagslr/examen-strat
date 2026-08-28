/**
 * ÉTAPE 6 DE L’ANALYSE GUIDÉE — LE VOLET DURABILITÉ
 * =================================================
 *
 * Étape transverse : elle n’ajoute pas un chapitre après la recommandation,
 * elle relit les six étapes précédentes avec une question de plus à chacune.
 * Elle consomme le dossier tranché à l’étape 5 et le rend prêt pour la même
 * relecture, cette fois du côté numérique (étape 7).
 *
 * Provenance : 📘 cours · 🔎 raisonnement · 📚 hors cours.
 */

import type { EtapeAnalyse } from './types'

export const etape: EtapeAnalyse = {
  id: 'e6',
  numero: 6,
  slug: 'durabilite',
  titre: 'Le volet durabilité',
  question: "À quel moment la durabilité entre-t-elle, et comment sans casser la viabilité ?",
  minutes: "transverse",
  modeles: ["wedding-cake", "donut", "durabilite-forte-faible", "agenda-2030", "trois-r", "bmc-durable"],

  entree:
    'Une option retenue et tranchée — le pilote de 40 vélos chez 6 entreprises genevoises sur 12 mois — avec sa faiblesse assumée, sa recommandation chiffrée et ses indicateurs datés : exactement l’objet que cette étape va passer au filtre de la durabilité.',

  sortie:
    'Le même parcours relu sous l’angle de la durabilité : les externalités nommées avec le tiers qui les supporte, le levier d’internalisation choisi et justifié, la tension court terme / long terme chiffrée, deux à quatre ODD matériels et des indicateurs en valeur absolue — un dossier prêt à recevoir exactement la même relecture, cette fois du côté numérique.',

  // -------------------------------------------------------------------------
  // La méthode : les sept gestes de l’étape, applicables à n’importe quel cas
  // -------------------------------------------------------------------------

  methode: [
    {
      titre: '1. Ne pas ouvrir un chapitre — relire les étapes déjà faites',
      detail:
        'Le volet durabilité ne se traite pas après la recommandation : il se traite en repassant sur les étapes déjà écrites, avec une question de plus à chacune. Diagnostic externe : la durabilité est-elle un facteur du PESTEL, une réglementation qui arrive, une attente de clients ? Diagnostic interne : force ou faiblesse ? Business model : où sont les coûts que l’entreprise ne paie pas ? SWOT : dans laquelle des quatre cases ? SAF : quel critère elle déplace ? Indicateurs : quel chiffre. Concrètement, on rouvre son brouillon et on ajoute une ligne par étape — jamais une page à la fin.',
      aEviter:
        'Annoncer « et maintenant, un mot sur la durabilité » à la neuvième minute. Le correcteur entend un supplément moral collé sur une analyse déjà finie, et le note comme tel.',
    },
    {
      titre: '2. Faire travailler la définition, morceau par morceau',
      detail:
        '📘 La durabilité, c’est « un fonctionnement pouvant satisfaire les besoins de tous les individus, aujourd’hui et demain, ici et ailleurs, dans le respect des limites planétaires ». Quatre morceaux, et chacun interdit une phrase : ne pas oublier ceux qui ne sont pas clients, ne pas conclure sur trois ans, ne pas se contenter de ce qui se passe dans ses propres murs, ne pas raisonner comme si la ressource était infinie. Passer le cas aux quatre morceaux prend trente secondes et fait apparaître ce qu’on avait sauté.',
      aEviter:
        'Réciter la définition sans l’appliquer. Une définition récitée ne vaut presque rien ; une définition qui fait apparaître un angle mort du cas vaut beaucoup.',
    },
    {
      titre: '3. Descendre la chaîne de valeur pour trouver les externalités',
      detail:
        'Une externalité est un coût réel supporté par quelqu’un qui ne l’a pas choisi et qui n’apparaît nulle part dans les comptes. On ne la trouve pas en réfléchissant « à la pollution » en général : on la trouve en parcourant les maillons — approvisionnements, production, logistique, commercialisation, services — et en nommant à chaque maillon le tiers qui paie. Chaque ligne s’écrit en deux membres reliés par une flèche : « dommage → supporté par qui ».',
      aEviter:
        'Écrire « l’entreprise pollue ». Sans maillon repéré ni tiers nommé, la ligne ne servira ni au SWOT ni au SAF : elle reste une inquiétude, pas un constat.',
    },
    {
      titre: '4. Choisir un levier d’internalisation, et poser la question du propriétaire',
      detail:
        'Internaliser, c’est faire entrer dans ses propres comptes un coût qu’on laissait à d’autres. Le levier le plus puissant du cours n’est ni un matériau ni un label : c’est le changement de propriétaire. Tant que le client possède l’objet, l’entreprise gagne de l’argent quand il s’use. Dès que l’entreprise le garde, l’usure devient sa propre facture — et son intérêt économique cesse de s’opposer à l’intérêt écologique. La question se pose à voix haute : après l’opération, qui possède l’objet ?',
      aEviter:
        'Confondre le mode de facturation et le modèle. Un abonnement assorti d’un renouvellement annuel obligatoire accélère le renouvellement : c’est l’inverse de l’effet recherché.',
    },
    {
      titre: '5. Nommer la tension court terme / long terme, et la chiffrer',
      detail:
        'Deux colonnes. À gauche, ce que la transition coûte tout de suite : investissement, matériaux plus chers, formation, et 📘 parfois une baisse du volume de ventes puisque les produits durent plus longtemps. À droite, ce qu’elle rapporte plus tard : risque réglementaire évité, fidélité, réputation, résilience, ressources sécurisées. Puis dire laquelle des quatre parades on utilise — commencer par ce qui réduit les coûts tout de suite, valoriser le risque évité, trouver de nouveaux revenus, embarquer les parties prenantes.',
      aEviter:
        'Affirmer que « la durabilité est rentable » et passer à la suite. Une réponse qui nomme le coût et l’assume est jugée plus solide qu’une réponse optimiste, parce qu’elle est vérifiable.',
    },
    {
      titre: '6. Sélectionner deux à quatre ODD, puis descendre jusqu’au chiffre',
      detail:
        '📘 Deux à quatre objectifs de développement durable, pas dix-sept. « Matériel » ne veut pas dire « valorisant » : cela veut dire que l’activité y change réellement quelque chose, en bien ou en mal — donc au moins un objectif sur le versant négatif. Ensuite, trois marches dans l’ordre : ODD, puis cible précise parmi les 169, puis indicateur relevé. Et l’indicateur se donne en valeur absolue, un total, jamais un ratio par unité seul.',
      aEviter:
        'Afficher un mur de dix-sept pictogrammes et cocher ceux auxquels on « contribue ». On finit par contribuer à quinze objectifs et à n’en piloter aucun.',
    },
    {
      titre: '7. Passer l’option retenue au double test, avant de conclure',
      detail:
        'Deux verdicts obligatoires : ce que l’option fait au plafond écologique, ce qu’elle fait au plancher social. Un seul bord franchi suffit à la disqualifier. Si l’option gagne d’un côté et perd de l’autre, il faut le dire — « elle gagne ici en perdant là » — puis proposer le correctif qui la ramène dans l’espace sûr. Un verdict négatif sans correctif n’est qu’un refus, et un refus ne conseille personne.',
      aEviter:
        'Ne répondre que sur le bord écologique et conclure « c’est durable ». La moitié sociale de la réponse manque, et cela se voit immédiatement.',
    },
  ],

  // -------------------------------------------------------------------------
  // Le raisonnement déroulé sur Atelier Léman SA
  // -------------------------------------------------------------------------

  raisonnement: [
    {
      t: 'texte',
      contenu:
        'Le dossier est fini. Le diagnostic est posé, le business model est décrit, le SWOT est croisé, deux options ont été comparées et l’une est retenue : un pilote de 40 vélos chez 6 entreprises genevoises, sur 12 mois. À ce moment précis, le réflexe le plus répandu consiste à ouvrir un dernier paragraphe intitulé « et la durabilité ». C’est l’erreur d’architecture la plus fréquente du chapitre. La durabilité n’est pas la septième étape : c’est une relecture des six premières.',
    },
    {
      t: 'question',
      contenu:
        'Alors où la mettre ? Si elle n’est ni au début ni à la fin, à quel moment de l’analyse entre-t-elle réellement ?',
    },
    {
      t: 'tableau',
      entetes: ['Étape déjà faite', 'La question qu’on y ajoute', 'Ce que ça donne chez Atelier Léman'],
      lignes: [
        [
          '1 — Diagnostic externe',
          'La durabilité comme facteur, pas comme valeur : le « E » du PESTEL, la réglementation qui arrive, ce qu’exigent les clients.',
          'Subventions cantonales à la mobilité douce, normes à venir sur les déchets électroniques, entreprises soumises à des objectifs carbone.',
        ],
        [
          '2 — Diagnostic interne',
          'Force ou faiblesse ? Une conformité anticipée est une force ; un surcoût ou une dépendance est une faiblesse.',
          'Force : l’atelier prolonge la vie des vélos. Faiblesse : deux fournisseurs de batteries dont on ne sait rien.',
        ],
        [
          '3 — Business model',
          'Où se cachent les coûts que l’entreprise ne paie pas ?',
          'Extraction du lithium, transport longue distance, fin de vie des batteries.',
        ],
        [
          '4 — SWOT',
          'Dans laquelle des quatre cases ? Les quatre sont possibles — surtout pas en opportunité d’office.',
          'Opportunité côté demande B2B, menace côté norme future, force côté atelier, faiblesse côté approvisionnement.',
        ],
        [
          '5 — SAF',
          'S : cohérence avec la mission. A : les tiers qui ne sont pas clients. F : la tension court terme / long terme.',
          'C’est au F que ça se joue : l’abonnement immobilise la trésorerie d’une PME de 6,2 M CHF.',
        ],
        [
          '6 — Indicateurs',
          'Des chiffres en valeur absolue, pas par unité vendue.',
          'Batteries mises en circulation sans reprise, durée de vie moyenne des vélos du parc.',
        ],
      ],
      legende:
        '📘 La durabilité n’ajoute pas une étape, elle ajoute une question à chaque étape. Le « E » du PESTEL, au passage, ne porte pas le même nom selon les supports du cours — écologique, éthique, ou environnemental et éthique : cite la divergence plutôt que de choisir en silence.',
    },
    {
      t: 'encadre',
      ton: 'info',
      titre: 'La définition du cours, et ce que chaque morceau interdit de dire',
      contenu:
        '📘 La durabilité est « un fonctionnement pouvant satisfaire les besoins de tous les individus, aujourd’hui et demain, ici et ailleurs, dans le respect des limites planétaires ». Quatre morceaux, quatre interdictions. « Tous les individus » : pas seulement les clients — les salariés, les fournisseurs, les populations affectées, ceux qui ne sont encore nés. « Aujourd’hui et demain » : interdit de conclure « c’est rentable sur trois ans ». « Ici et ailleurs » : interdit de dire « notre atelier genevois est propre, donc nous sommes durables ». « Dans le respect des limites planétaires » : l’économie ne croît pas indépendamment de la planète.',
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit que les batteries, « composant le plus cher et le plus critique du vélo », sont achetées à deux fournisseurs asiatiques.',
      conclusion:
        'Cette même phrase a déjà servi deux fois : au diagnostic interne comme faiblesse, chez Porter comme pouvoir de négociation des fournisseurs. Elle sert une troisième fois ici, et pour autre chose — elle situe géographiquement les dommages. Presque tout ce que cette entreprise abîme se passe à un endroit que l’énoncé ne décrit pas et que personne dans la salle n’a jamais vu. C’est exactement ce que « ici et ailleurs » oblige à aller regarder.',
    },
    {
      t: 'renvoi',
      modele: 'wedding-cake',
      point: 'regle',
      libelle: 'Wedding cake — la règle de dépendance : la base ne se négocie pas, le sommet se discute',
    },
    {
      t: 'observation',
      source: 'L’énoncé donne un vélo vendu 2 600 CHF pour un coût de revient de 1 400 CHF.',
      conclusion:
        '1 200 CHF de marge, et la soustraction a l’air complète. Elle ne l’est pas : elle ne contient que les coûts qu’Atelier Léman a effectivement payés. L’extraction du lithium, les milliers de kilomètres de transport et la batterie qui finira quelque part dans huit ou dix ans n’y figurent pas — non pas parce qu’ils n’existent pas, mais parce que quelqu’un d’autre les paie.',
    },
    {
      t: 'encadre',
      ton: 'info',
      titre: 'Externalité : le mot, et le mécanisme derrière',
      contenu:
        '📘 Un impact négatif, ou externalité négative, est « un coût non intentionnel imposé à d’autres individus ou à la société ». Le mot qui porte tout est « imposé » : personne n’a signé pour ce coût, et il n’apparaît dans aucun compte. D’où deux équations. Celle qu’on affiche : revenus − coûts payés = profit. Celle qui est vraie 🔎 : revenus − coûts payés − coûts supportés par des tiers = valeur réellement créée. Une externalité n’est donc pas un dégât : c’est un dégât qui n’est pas dans le prix.',
    },
    {
      t: 'tableau',
      entetes: ['Maillon de la chaîne de valeur', 'Ce qui s’y passe', 'Qui supporte le coût'],
      lignes: [
        [
          'Approvisionnements ⚠️',
          'Extraction du lithium et du cobalt, dans des conditions sociales que l’entreprise ne contrôle pas',
          'Les populations des zones minières',
        ],
        [
          'Logistique amont ⚠️',
          'Transport des batteries depuis deux fournisseurs asiatiques jusqu’à Genève',
          'L’atmosphère, donc tout le monde et personne',
        ],
        [
          'Production',
          'Assemblage à Genève : électricité, chutes et déchets d’atelier',
          'Faible ici, et le dire est plus crédible que de le gonfler',
        ],
        [
          'Commercialisation ⚠️',
          'Un modèle qui encaisse 1 200 CHF chaque fois qu’un vélo est remplacé',
          'Le client d’abord, la filière déchets ensuite',
        ],
        [
          'Services ✅',
          'Réparation toutes marques, diagnostic électronique, prolongation de la durée de vie',
          'Personne : c’est le seul maillon qui produit un impact positif',
        ],
      ],
      legende:
        '📘 Attention au nom des maillons : selon les supports du cours, on lit « Approvisionnements » ou « Achats », « Développement technologique » ou « Recherche et développement ». Savoir citer la divergence rapporte des points ; l’uniformiser en silence n’en rapporte aucun.',
    },
    {
      t: 'renvoi',
      modele: 'bmc-durable',
      point: 'externalites',
      libelle: 'BMC durable, case 11 — chaque ligne s’écrit « dommage → supporté par qui »',
    },
    {
      t: 'observation',
      source:
        'L’énoncé place les forces d’Atelier Léman dans ses deux ateliers et ses mécaniciens, et ses fragilités dans ses deux fournisseurs de batteries.',
      conclusion:
        'Reporté sur le tableau ci-dessus, ce fait dit quelque chose de très fort et que peu de candidats voient : les externalités sont concentrées en amont, exactement là où l’entreprise est faible, et son seul levier positif est en aval, dans les services, exactement là où elle est forte. Le basculement vers le service n’est donc pas seulement une manœuvre commerciale — c’est aussi le déplacement de l’entreprise vers le maillon où elle abîme le moins et maîtrise le plus.',
    },
    {
      t: 'question',
      contenu:
        'Reste la vraie difficulté, celle que les copies évitent. Internaliser un coût, c’est le faire entrer dans ses propres comptes, donc réduire son profit affiché. Comment fait-on cela dans une PME dont les ventes reculent déjà de 8 % ? Il existe une question, une seule, qui renverse le problème au lieu de l’aggraver : après l’opération, qui possède le vélo ?',
    },
    {
      t: 'schema',
      schema: {
        h: 620,
        description:
          'Deux colonnes côte à côte comparent le modèle de vente et l’économie de la fonctionnalité : selon que le client ou l’entreprise reste propriétaire du vélo, son usure devient un revenu ou une facture pour l’entreprise.',
        noeuds: [
          {
            id: 'cv',
            titre: 'MODÈLE DE VENTE',
            x: 40,
            y: 40,
            l: 420,
            h: 524,
            forme: 'cadre',
            ton: 'sourd',
          },
          {
            id: 'cf',
            titre: 'ÉCONOMIE DE LA FONCTIONNALITÉ',
            x: 540,
            y: 40,
            l: 420,
            h: 524,
            forme: 'cadre',
            ton: 'sourd',
          },
          {
            id: 'v1',
            titre: 'L’entreprise VEND le vélo',
            lignes: ['Le client devient propriétaire.'],
            x: 64,
            y: 110,
            l: 372,
            h: 110,
          },
          {
            id: 'v2',
            titre: 'Vélo usé → le client rachète',
            lignes: ['La panne est un coût pour lui.'],
            x: 64,
            y: 270,
            l: 372,
            h: 110,
          },
          {
            id: 'v3',
            titre: 'INCITATION : vendre du neuf',
            lignes: ['Durer longtemps ferait baisser', 'le chiffre d’affaires.'],
            x: 64,
            y: 430,
            l: 372,
            h: 110,
            ton: 'danger',
          },
          {
            id: 'f1',
            titre: 'L’entreprise GARDE le vélo',
            lignes: ['Elle en reste propriétaire.'],
            x: 564,
            y: 110,
            l: 372,
            h: 110,
          },
          {
            id: 'f2',
            titre: 'Vélo usé → elle répare',
            lignes: ['La panne est un coût pour elle.'],
            x: 564,
            y: 270,
            l: 372,
            h: 110,
          },
          {
            id: 'f3',
            titre: 'INCITATION : concevoir solide',
            lignes: ['Durer longtemps fait baisser', 'ses propres coûts.'],
            x: 564,
            y: 430,
            l: 372,
            h: 110,
            ton: 'positif',
          },
        ],
        liens: [
          { de: 'v1', vers: 'v2' },
          { de: 'v2', vers: 'v3' },
          { de: 'f1', vers: 'f2' },
          { de: 'f2', vers: 'f3' },
        ],
        note:
          '🔎 Une seule chose change entre les deux colonnes, le propriétaire — et l’incitation s’inverse. C’est le point théorique le plus fort du chapitre.',
      },
    },
    {
      t: 'renvoi',
      modele: 'trois-r',
      point: 'test-proprietaire',
      libelle: 'Les 3R — le test du propriétaire : c’est lui qui classe, jamais le geste technique',
    },
    {
      t: 'oral',
      contenu:
        '« Internaliser une externalité, c’est faire passer un coût de la seconde ligne à la première. Le profit affiché baisse — non pas parce qu’on a créé un coût, mais parce qu’on a cessé de le cacher. C’est exactement pour cela qu’une transition durable coûte à court terme. »',
    },
    {
      t: 'observation',
      source:
        'L’énoncé décrit l’option 2 comme « un abonnement mobilité tout compris — vélo, entretien, remplacement et assistance inclus ».',
      conclusion:
        'Le mot à surveiller est « remplacement ». S’il signifie « on répare, et on remplace la pièce », le modèle allonge la vie du vélo. S’il signifie « vélo neuf tous les douze mois », l’abonnement fait exactement ce que faisait la vente, en plus régulier : il accélère le renouvellement et produit plus de déchets. Le même mot de l’énoncé porte les deux modèles opposés — c’est là qu’il faut trancher, et le dire.',
    },
    {
      t: 'encadre',
      ton: 'alerte',
      titre: 'Un abonnement n’est pas une économie de la fonctionnalité',
      contenu:
        '📘 Un abonnement assorti d’un renouvellement obligatoire chaque année augmente le renouvellement et les déchets. Ce n’est pas le mode de facturation qui rend un modèle durable, c’est le fait que l’entreprise reste propriétaire de l’objet et supporte donc son entretien et sa fin de vie. Le bon critère, tel que le cours le pose : le modèle incite-t-il réellement à utiliser moins de ressources et à prolonger la vie des équipements ?',
    },
    {
      t: 'tableau',
      entetes: ['Ce que ça coûte tout de suite', 'Ce que ça rapporte plus tard'],
      lignes: [
        [
          'Acheter les 40 vélos au lieu de les vendre : environ 56 000 CHF immobilisés (40 × 1 400, chiffre illustratif)',
          'Des revenus récurrents, beaucoup moins sensibles au recul de − 8 % des ventes',
        ],
        [
          'Encaisser les 1 200 CHF de marge étalés sur trois ans au lieu du jour de la livraison',
          'Un client qui reste, donc un coût de conquête amorti sur plusieurs années',
        ],
        [
          'Organiser et payer une filière de reprise des batteries',
          'Une norme future sur les déchets électroniques déjà absorbée, sans urgence',
        ],
        [
          '📘 Parfois une baisse du volume de ventes, puisque les produits durent plus longtemps',
          'Une dépendance moindre aux deux fournisseurs asiatiques, puisqu’on achète moins souvent',
        ],
        [
          'Former les mécaniciens au reconditionnement et à la gestion de parc',
          'Une compétence de plus, liée aux personnes, donc difficile à imiter',
        ],
      ],
      legende:
        '🔎 Quatre parades, dans cet ordre : commencer par ce qui réduit les coûts tout de suite, valoriser le risque évité, chercher de nouveaux revenus, embarquer les parties prenantes. La troisième est celle qui porte tout le cas.',
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit que la Ville et le Canton de Genève multiplient les subventions à la mobilité douce, « notamment pour les entreprises qui équipent leurs collaborateurs ».',
      conclusion:
        'C’est la quatrième parade offerte par l’énoncé lui-même : une partie du surcoût d’aujourd’hui est payée par la collectivité, qui a intérêt à ce que la transition ait lieu. Mais une subvention est une béquille datée. La phrase à dire est celle-là : le pilote se finance avec la subvention, le modèle doit tenir sans elle à l’échéance — sinon on n’a pas construit un business model, on a construit une dépendance.',
    },
    {
      t: 'renvoi',
      modele: 'donut',
      point: 'double-test',
      libelle: 'Le Donut — deux verdicts, un échange caché, un correctif : quatre phrases et l’option est jugée',
    },
    {
      t: 'observation',
      source: 'L’énoncé précise que l’abonnement serait « facturé aux entreprises genevoises ».',
      conclusion:
        'Le verdict du haut est favorable : moins de vélos neufs par utilisateur, des batteries dont l’atelier devient responsable. C’est là qu’on s’arrête d’habitude, et c’est là qu’on perd des points. Le verdict du bas ne suit pas : un salarié d’une entreprise équipée y accède, un indépendant ou un ménage modeste n’y accède pas. On gagne au plafond écologique en perdant au plancher social — c’est un échange, pas un progrès. Le correctif tient en une ligne : garder les deux ateliers de Carouge et Plainpalais ouverts à toutes les marques et à tout le monde, abonnés ou non.',
    },
    {
      t: 'encadre',
      ton: 'alerte',
      titre: 'Le plancher social : deux libellés dans le cours, ne pas trancher',
      contenu:
        '📘 Le plancher social compte douze dimensions, et deux libellés divergent entre la liste écrite de la slide 24 et le schéma de la slide 25 : « Assainissement » d’un côté, « Réseaux » de l’autre. Ne choisis pas en silence, dis-le : « le cours donne douze dimensions ; deux libellés varient entre la liste et le schéma, assainissement d’un côté, réseaux de l’autre ». Savoir citer une divergence rapporte des points — et « Réseaux » ouvre en plus sur l’accès à l’information comme besoin de base, ce qui donne un pont tout tracé vers le volet numérique.',
    },
    {
      t: 'renvoi',
      modele: 'agenda-2030',
      point: 'materiels',
      libelle: 'Agenda 2030 — deux à quatre ODD matériels, dont au moins un sur le versant négatif',
    },
    {
      t: 'renvoi',
      modele: 'durabilite-forte-faible',
      point: 'eviter',
      libelle: 'Durabilité forte — un indicateur en valeur absolue, jamais un ratio par vélo vendu',
    },
    {
      t: 'oral',
      contenu:
        '« Je n’ai pas traité la durabilité à part : je l’ai fait entrer à chaque étape. Les externalités d’Atelier Léman sont en amont — extraction du lithium, transport longue distance, fin de vie des batteries — c’est-à-dire au maillon où elle est la plus faible ; son seul impact positif est en aval, dans l’atelier, au maillon où elle est la plus forte. Le passage à l’abonnement internalise ces coûts, parce que l’entreprise redevient propriétaire du vélo et supporte donc sa réparation et sa fin de vie : son intérêt économique cesse de s’opposer à l’intérêt écologique. Cela coûte à court terme, environ 56 000 CHF immobilisés sur le pilote, et je l’assume. Je retiens deux objectifs matériels, l’ODD 12 et l’ODD 11, et deux indicateurs en valeur absolue : le nombre de batteries mises en circulation sans reprise, et la durée de vie moyenne des vélos du parc. »',
    },
  ],

  // -------------------------------------------------------------------------
  // Le livrable : ce qui reste sur le brouillon
  // -------------------------------------------------------------------------

  livrable: {
    titre: 'Le volet durabilité, tel qu’il tient sur le brouillon',
    lignes: [
      'ODD MATÉRIELS — 2 à 4, jamais 17',
      '  12 consommation et production responsables .... principal',
      '  11 villes et communautés durables ............. secondaire',
      '  8 travail décent .............................. versant négatif (fournisseurs)',
      '',
      'LIMITES PLANÉTAIRES TOUCHÉES',
      '  climat · entités nouvelles (batteries) · usage des sols (extraction)',
      '',
      'EXTERNALITÉS → QUI LES SUPPORTE',
      '  extraction du lithium → populations des zones minières',
      '  transport Asie–Genève → l’atmosphère',
      '  fin de vie des batteries → la collectivité',
      '',
      'IMPACT POSITIF, ET OÙ IL EST',
      '  l’atelier allonge la vie des vélos — maillon aval, là où on est fort',
      '',
      'LEVIER D’INTERNALISATION',
      '  abonnement : l’entreprise reste propriétaire',
      '  → elle supporte la fin de vie → elle a intérêt à l’anticiper',
      '  ⚠️ vérifier que « remplacement inclus » ne veut pas dire « vélo neuf chaque année »',
      '',
      'TENSION NOMMÉE',
      '  environ 56 000 CHF immobilisés sur 40 vélos, marge étalée sur 3 ans',
      '  contre des revenus récurrents et un risque réglementaire absorbé',
      '  parade : subvention cantonale sur le pilote, modèle autonome ensuite',
      '',
      'DOUBLE TEST DU DONUT',
      '  plafond ✅ moins de vélos neufs, batteries reprises',
      '  plancher ⚠️ l’offre B2B laisse dehors les particuliers modestes',
      '  correctif : ateliers ouverts à tous, hors abonnement',
      '',
      'INDICATEURS ABSOLUS — aucun ratio par vélo',
      '  batteries mises en circulation sans reprise (nombre)',
      '  durée de vie moyenne des vélos du parc (mois)',
    ],
  },

  // -------------------------------------------------------------------------
  // Les pièges propres à cette étape
  // -------------------------------------------------------------------------

  pieges: [
    {
      titre: 'Traiter la durabilité en dernier paragraphe',
      explication:
        '📘 C’est l’erreur d’architecture la plus fréquente : « et puis il faudrait aussi être écologique ». La durabilité n’est pas un supplément moral posé sur une analyse terminée, c’est une contrainte de viabilité qui pèse sur chaque étape — elle modifie le diagnostic, pas seulement la conclusion.',
      reflexe:
        'Une ligne par étape déjà faite, jamais un paragraphe à la fin. Et commencer sa réponse par « au diagnostic externe, j’avais relevé… » : le correcteur entend en trois secondes que c’est intégré.',
    },
    {
      titre: 'Réduire la durabilité à l’écologie',
      explication:
        'Le Donut a deux bords, et celui du bas est social. Réduire ses impacts en excluant un public n’est pas durable : c’est échanger un dépassement écologique contre un abaissement social. Chez Atelier Léman, l’abonnement réservé aux entreprises genevoises est exactement ce cas.',
      reflexe:
        'Compter ses phrases : deux verdicts, un échange, un correctif. Si la réponse ne contient que le verdict écologique, il en manque la moitié.',
    },
    {
      titre: 'Confondre les ODD et les limites planétaires',
      explication:
        'Les dix-sept ODD disent où l’on veut aller : c’est une ambition, adoptée le 25 septembre 2015 par 193 États. Les neuf limites planétaires disent jusqu’où on peut aller : ce sont des contraintes physiques, dont sept sont déjà dépassées. Les mélanger produit une phrase creuse que le jury repère aussitôt.',
      reflexe:
        'Trois mots à garder en tête : ODD = ambition, limites = contraintes, Donut = l’espace entre les deux. Et un quatrième, qui vaut la conclusion : seul le BMC durable traduit ces cadres en décisions.',
    },
    {
      titre: 'Mettre la durabilité d’office dans la case « opportunité »',
      explication:
        'Elle peut tomber dans les quatre cases du SWOT. Chez Atelier Léman : opportunité du côté des entreprises soumises à des objectifs carbone, menace du côté d’une norme à venir sur les batteries, force du côté de l’atelier qui prolonge la vie des vélos, faiblesse du côté de deux fournisseurs opaques. La même notion, quatre cases.',
      reflexe:
        'Se poser systématiquement la question inverse : « et si c’était une faiblesse ? ». Elle trouve presque toujours quelque chose, et cette ligne-là distingue une copie.',
    },
    {
      titre: 'Prendre un produit vert pour un business model durable',
      explication:
        'Remplacer un composant par sa version recyclée sans toucher à la logique « produire beaucoup, vendre beaucoup, jeter beaucoup » améliore le produit, pas le modèle. C’est aussi la frontière du greenwashing : communiquer les impacts positifs en taisant les externalités.',
      reflexe:
        'Vérifier que trois blocs au moins ont bougé : les revenus, les ressources et les coûts. Si seuls les blocs de communication ont changé, le modèle est intact.',
    },
    {
      titre: 'Commencer par le recyclage',
      explication:
        '📘 L’ordre compte : réduire, puis réutiliser, puis recycler en dernier recours. « C’est recyclable, donc c’est durable » est faux. Le recyclage est populaire précisément parce qu’il ne demande de renoncer à rien, et c’est pour cela que le cours le met en dernier.',
      reflexe:
        'Classer chaque mesure proposée : est-ce qu’elle évite, réduit, réutilise, recycle, ou compense ? Si rien ne se trouve dans les deux premières colonnes, ce n’est pas un plan de durabilité.',
    },
  ],
}
