/**
 * MODÈLE 3 — LES 5 (+1) FORCES DE PORTER
 * ======================================
 *
 * Le deuxième outil du diagnostic externe. Le PESTEL décrit la météo ; Porter
 * décrit le match. On descend du macro-environnement, subi par tout le monde,
 * vers l’industrie, où se joue le partage concret de la valeur.
 *
 * Provenance : 📘 cours · 🔎 raisonnement reconstruit · 📚 complément hors cours.
 */

import type { Modele } from './types'

export const modele: Modele = {
  id: 'porter',
  numero: 3,
  slug: 'porter',
  nom: 'Les 5 (+1) forces de Porter',
  sousTitre: 'Diagnostic externe — micro-environnement / industrie',
  famille: 'externe',
  etape: 'e1',

  question:
    'Quelles forces mettent la rentabilité de ce secteur sous pression — et combien de valeur reste-t-il à une entreprise qui y opère ?',

  enUnePhrase:
    'Un secteur crée de la valeur, et cinq catégories d’acteurs (six avec l’État) essaient chacune d’en capter une part ; ce qu’ils ne prennent pas est ce qui reste à l’entreprise, donc plus les forces sont puissantes, moins le secteur est attrayant. 📘',

  produit:
    'Une évaluation motivée de l’attractivité d’un domaine d’activité — six forces notées et justifiées, deux ou trois d’entre elles désignées comme décisives — qui alimente directement la colonne « menaces » du SWOT.',

  quandUtiliser: [
    'Après avoir découpé l’entreprise en domaines d’activité : Porter s’applique à UN domaine, pas à l’entreprise entière.',
    'Quand l’énoncé parle de concurrents, de fournisseurs, de clients, de prix qui baissent ou de marges qui s’érodent.',
    'Quand on doit dire si un secteur est rentable — et surtout POURQUOI il l’est ou ne l’est pas.',
    'Quand on compare deux domaines d’activité entre eux : deux toiles côte à côte rendent la comparaison immédiate.',
    'Avant de conclure « océan rouge » ou « océan bleu » : la conclusion doit reposer sur une analyse, pas sur une impression.',
  ],

  quandNePasUtiliser: [
    'Pour les facteurs macro — inflation, élections, démographie, climat. Ce sont des facteurs PESTEL, pas des forces.',
    'Pour les ressources et compétences de l’entreprise : c’est le diagnostic interne, pas Porter.',
    'Pour produire une simple liste de concurrents : nommer six marques n’est pas mesurer une intensité.',
    'Sur un périmètre flou du type « le marché du sport » : une force ne veut rien dire tant que le secteur n’est pas délimité.',
  ],

  // -------------------------------------------------------------------------
  // Le dessin
  // -------------------------------------------------------------------------
  schema: {
    h: 700,
    description:
      'Quatre forces convergent en croix vers la rivalité placée au centre — les nouveaux entrants au-dessus, les fournisseurs à gauche, les clients à droite, les substituts en dessous ; l’État s’ajoute en bas à droite comme sixième force, et l’ensemble détermine, dans une bande en bas du schéma, l’attractivité du secteur.',
    noeuds: [
      {
        id: 'entrants',
        titre: 'NOUVEAUX ENTRANTS',
        lignes: ['Est-il facile d’entrer ici ?', 'Barrières basses = menace forte'],
        x: 370,
        y: 40,
        l: 260,
        h: 110,
        point: 'entrants',
      },
      {
        id: 'fournisseurs',
        titre: 'FOURNISSEURS',
        lignes: ['Peuvent-ils imposer leurs prix ?', 'Ils font monter mes coûts'],
        x: 40,
        y: 230,
        l: 260,
        h: 110,
        point: 'fournisseurs',
      },
      {
        id: 'rivalite',
        titre: 'RIVALITÉ ENTRE CONCURRENTS',
        lignes: ['Quelle intensité d’affrontement ?', 'Pas le nombre : l’intensité'],
        x: 370,
        y: 230,
        l: 260,
        h: 110,
        ton: 'accent',
        point: 'rivalite',
      },
      {
        id: 'clients',
        titre: 'CLIENTS / ACHETEURS',
        lignes: ['Peuvent-ils dicter le prix ?', 'Ils tirent mes prix vers le bas'],
        x: 700,
        y: 230,
        l: 260,
        h: 110,
        point: 'clients',
      },
      {
        id: 'substituts',
        titre: 'SUBSTITUTS',
        lignes: ['Même besoin, autre solution', 'Ils plafonnent mes prix'],
        x: 370,
        y: 420,
        l: 260,
        h: 110,
        point: 'substituts',
      },
      {
        id: 'etat',
        titre: 'ÉTAT / POUVOIRS PUBLICS (+1)',
        lignes: ['Il change les règles du jeu', 'Taxe, norme, quota, subvention'],
        x: 700,
        y: 420,
        l: 260,
        h: 110,
        point: 'etat',
      },
      {
        id: 'attractivite',
        titre: 'ATTRACTIVITÉ DU SECTEUR',
        lignes: ['Force forte = moins de profit'],
        x: 40,
        y: 580,
        l: 920,
        h: 70,
        forme: 'bande',
        ton: 'alerte',
        point: 'attractivite',
      },
    ],
    liens: [
      { de: 'entrants', vers: 'rivalite', depuis: 'bas', arrive: 'haut' },
      { de: 'fournisseurs', vers: 'rivalite', depuis: 'droite', arrive: 'gauche' },
      { de: 'clients', vers: 'rivalite', depuis: 'gauche', arrive: 'droite' },
      { de: 'substituts', vers: 'rivalite', depuis: 'haut', arrive: 'bas' },
      { de: 'etat', vers: 'rivalite', depuis: 'haut', arrive: 'bas', trait: 'pointille' },
    ],
    note: 'Une force ne se mesure que sur un domaine d’activité précis. Porter appliqué à « toute l’économie » ne produit aucune conclusion utilisable.',
  },

  // -------------------------------------------------------------------------
  // Les cases, une par une
  // -------------------------------------------------------------------------
  points: [
    {
      id: 'rivalite',
      libelle: 'Rivalité entre concurrents — le centre du schéma',
      cestQuoi:
        'L’affrontement entre les entreprises déjà installées dans le secteur. 📘 « Plus la rivalité entre les entreprises d’un secteur est intense, moins leur rentabilité est forte. » Cette rivalité ne prend pas forcément la forme d’une guerre des prix : elle peut se jouer en publicité, en lancements de produits ou en services offerts au client.',
      question:
        'Quelle est l’intensité de l’affrontement — et sur quel terrain se joue-t-il : le prix, l’innovation, le service ?',
      quoiMettre: [
        'Le degré de ressemblance des offres : plus les produits se ressemblent, plus on se bat sur le prix.',
        'La croissance du marché : un marché qui stagne oblige à prendre des parts au voisin plutôt qu’à en gagner de nouvelles.',
        'Les surcapacités : des ateliers ou des usines à moitié vides poussent à brader pour les remplir.',
        'Les coûts fixes élevés — les charges qui tombent même sans vendre (loyer, salaires) — qui rendent le vide insupportable.',
        'Le terrain choisi par les acteurs : 📘 « les compagnies pharmaceutiques se sont toujours fait concurrence sur le plan de la R&D et du marketing, en évitant toutefois la guerre des prix ».',
      ],
      exemple:
        'Atelier Léman, domaine « vente de vélos » 🔎 : les marques low-cost en ligne vendent un vélo comparable 1 000 CHF moins cher, sur un marché genevois qui ne grandit plus. Les ventes ont reculé de 8 % en deux ans. L’affrontement se joue au prix, c’est-à-dire sur le terrain où l’atelier est le plus faible : rivalité notée 5 sur 5 (illustratif).',
      piege:
        'Compter les concurrents et s’arrêter là. « Il y a douze marques sur le marché » ne dit rien : douze marques qui ne se marchent pas dessus font une rivalité faible, trois marques qui se livrent une guerre des prix font une rivalité maximale.',
      reflexe:
        'Après avoir nommé les concurrents, ajoute toujours une phrase sur le TERRAIN de l’affrontement et sur ce qui l’attise (croissance nulle, offres identiques, surcapacités).',
      notions: ['rivalite-concurrents', 'intensite-concurrentielle', 'differenciation'],
    },
    {
      id: 'entrants',
      libelle: 'Nouveaux entrants — la menace de ceux qui ne sont pas encore là',
      cestQuoi:
        'La pression exercée par des entreprises qui pourraient entrer dans le secteur. 📘 « Lorsque de nouvelles entreprises s’implantent dans un secteur, deux choses se produisent : elles cherchent à gagner des parts de marché et elles augmentent les capacités de production du secteur. » Le point contre-intuitif : la menace agit même si personne n’entre. Le simple fait que l’entrée soit facile force les acteurs en place à brider leurs prix et à surinvestir. C’est une pression permanente, pas un événement.',
      question:
        'Qu’est-ce qui empêche aujourd’hui une entreprise nouvelle de venir prendre ma place — et ces obstacles tiennent-ils encore ?',
      quoiMettre: [
        'Le capital nécessaire pour démarrer : une usine coûte cher, un site de vente en ligne coûte peu.',
        'Les brevets, licences et savoir-faire longs à acquérir — un mécanicien qualifié se forme en années, pas en semaines.',
        'L’accès aux canaux de distribution et aux fournisseurs : si les rayons et les sources sont déjà pris, on n’entre pas.',
        'La notoriété à construire : 📘 dans le corrigé sur les eaux embouteillées, les barrières identifiées sont « les dépenses pour la communication » et « l’accès aux sources locales ».',
        'La réglementation, qui protège autant qu’elle contraint : une norme coûteuse est un mur pour celui qui arrive.',
        'Les économies d’échelle 📚 : produire beaucoup fait baisser le coût unitaire, donc le nouvel entrant démarre plus cher que les autres.',
      ],
      exemple:
        'Atelier Léman 🔎 : monter une marque de vélos électriques vendue en ligne demande peu de capital — pas d’atelier, pas de vitrine, assemblage sous-traité. Les barrières sont basses côté vente, et c’est exactement par là que la pression est arrivée. Côté réparation en revanche, il faut des mécaniciens formés et deux implantations : la barrière est bien plus haute. Menace d’entrée notée 4 sur 5 en vente, 2 sur 5 en réparation (illustratif).',
      piege:
        'Répondre « personne n’est entré cette année, donc la menace est faible ». C’est confondre la menace et sa réalisation.',
      reflexe:
        'Pose la question à l’envers : « si je voulais entrer dans ce secteur demain, qu’est-ce qui m’en empêcherait ? » S’il ne te vient rien, la force est forte.',
      notions: ['menace-nouveaux-entrants', 'barriere-entree'],
    },
    {
      id: 'fournisseurs',
      libelle: 'Fournisseurs — le pouvoir de l’amont',
      cestQuoi:
        'La capacité de ceux qui te vendent ce dont tu as besoin à te dicter leurs conditions. 📘 « S’ils ont du pouvoir, les fournisseurs peuvent soit obtenir de meilleures conditions, soit facturer des prix plus élevés. » Précision du cours souvent oubliée : il faut tenir compte de TOUT ce qui entre dans la fabrication, y compris les coûts de la main-d’œuvre. C’est la seule des six forces qui n’agit que sur les coûts — logique, ton fournisseur ne parle pas à tes clients. 📘',
      question:
        'Mes fournisseurs peuvent-ils augmenter leurs prix sans que je puisse partir ailleurs — et la main-d’œuvre qualifiée fait-elle partie du problème ?',
      quoiMettre: [
        'Le nombre de fournisseurs possibles pour chaque intrant : deux sources = dépendance, vingt sources = confort.',
        'Le caractère critique du composant : sans lui, le produit n’existe pas.',
        'Le coût de changement — ce qu’il en coûte de partir chez un autre : nouvelle homologation, nouveaux gabarits, délais.',
        'La concentration de l’amont : 📘 « le secteur des fabricants de micro-ordinateurs, qui est sous la mainmise de Microsoft et d’Intel ».',
        'La main-d’œuvre : rareté des compétences, syndicats, pression salariale. 📘 Elle compte comme un fournisseur.',
        'La menace d’intégration : le fournisseur pourrait-il se mettre à vendre directement au client final ?',
      ],
      exemple:
        'Atelier Léman 🔎 : les batteries viennent de deux fournisseurs asiatiques, et la batterie représente la part la plus lourde du coût de fabrication de 1 400 CHF par vélo. Changer de fournisseur imposerait de revalider l’intégration électrique complète. À l’inverse, les mécaniciens très qualifiés de l’atelier sont eux aussi un « fournisseur » rare sur le bassin genevois : leur départ coûterait cher. Pouvoir des fournisseurs noté 4 sur 5 (illustratif).',
      piege:
        'Ne regarder que les fournisseurs de matières et oublier la main-d’œuvre, alors que le cours la range explicitement dans cette force. Dans un service ou dans l’informatique, c’est souvent LE fournisseur décisif.',
      reflexe:
        'Liste tout ce qui entre dans le produit — pièces, énergie, logiciels, transport, heures de travail — puis demande pour chacun : « combien de fournisseurs possibles, et à quel coût de changement ? »',
      notions: ['pouvoir-fournisseurs', 'cout-changement', 'concentration'],
    },
    {
      id: 'clients',
      libelle: 'Clients / acheteurs — le pouvoir de l’aval',
      cestQuoi:
        'La capacité de ceux qui t’achètent à imposer leurs conditions. 📘 « Quand des clients ont suffisamment de pouvoir, ils peuvent faire baisser les prix dans l’ensemble d’un secteur ou forcer les entreprises à ajouter de la valeur à leurs produits et services. » Le cours donne trois conditions qui rendent un acheteur sensible au prix : le produit acheté est non différencié, il est cher par rapport à ses autres coûts, et il est sans conséquence sur son propre rendement. 📘',
      question:
        'Mon client peut-il partir facilement chez le voisin — et le prix compte-t-il plus que la qualité dans sa décision ?',
      quoiMettre: [
        'Le nombre et la taille des clients : quelques gros acheteurs pèsent plus que des milliers de petits.',
        'La facilité de comparer et de changer : 📘 « il est facile de changer de marque » suffit à monter la note.',
        'Les trois conditions de sensibilité au prix du cours : produit banalisé, cher dans son budget, sans effet sur sa performance.',
        'L’exemple inverse à connaître 📘 : « une caméra est un produit très différencié, dont le prix est peu élevé comparativement aux autres coûts de production, et dont l’impact sur le succès d’un film est énorme » — donc l’acheteur est peu puissant.',
        'La menace d’intégration vers l’amont : le client peut-il se mettre à faire lui-même ?',
      ],
      exemple:
        'Atelier Léman 🔎 : le particulier qui achète un vélo à 2 600 CHF compare vingt références en ligne en dix minutes, et rien ne le retient. Son pouvoir est réel. Mais le client de l’atelier de réparation, lui, arrive avec un vélo immobilisé et un besoin urgent : il ne compare pas. Même entreprise, deux domaines, deux pouvoirs clients très différents — 3 sur 5 en vente, 2 sur 5 en réparation (illustratif).',
      piege:
        'Traiter « beaucoup de clients » comme un pouvoir client fort. La dispersion des clients AFFAIBLIT leur pouvoir : c’est la concentration qui le renforce.',
      reflexe:
        'Applique les trois conditions du cours l’une après l’autre. Si les trois sont réunies, le client négociera durement ; si les trois sont inversées, comme pour la caméra, il ne négociera pas.',
      notions: ['pouvoir-clients', 'differenciation', 'cout-changement'],
    },
    {
      id: 'substituts',
      libelle: 'Substituts — le même besoin, satisfait autrement',
      cestQuoi:
        'Une autre façon de répondre au même besoin de base. 📘 « Un produit de remplacement répond aux mêmes besoins de base qu’un produit (ou un service) existant, mais de façon différente. » Il nuit à la rentabilité parce qu’il force les entreprises du secteur à limiter leurs prix pour garder du volume. 📘 Le critère d’évaluation est le rapport prix-rendement : le substitut est menaçant s’il offre un meilleur rapport entre ce qu’il coûte et ce qu’il apporte.',
      question:
        'Quel est le BESOIN réel de mon client — et par quels autres moyens, hors de mon secteur, peut-il le satisfaire ?',
      quoiMettre: [
        'Le besoin formulé sans le produit : ici « se déplacer en ville », pas « avoir un vélo ».',
        'Toutes les réponses possibles à ce besoin, même venues d’un autre métier.',
        'Le rapport prix-rendement de chacune : moins cher, plus pratique, plus rapide ?',
        'Le coût pour le client de basculer vers le substitut, et ce qu’il perd en le faisant.',
        'Les substituts qui n’existent pas encore mais arrivent : 📘 « les voitures électriques, qui deviendront peut-être d’importants produits de remplacement des voitures à moteur à combustion ».',
      ],
      exemple:
        'Atelier Léman 🔎 : une autre marque de vélo électrique est un CONCURRENT. Le tram et le bus genevois, le scooter en libre-service, la trottinette partagée et le télétravail sont des SUBSTITUTS : ils répondent au besoin « se déplacer » sans acheter de vélo. Un abonnement TPG annuel coûte une fraction de 2 600 CHF, ce qui plafonne de fait le prix que l’atelier peut demander. Menace de substitution notée 3 sur 5 (illustratif).',
      piege:
        'Ranger les concurrents directs dans les substituts. C’est l’erreur la plus fréquente de l’exercice, et elle vide les deux forces de leur sens.',
      reflexe:
        'Un seul test : « est-ce le même métier ? » Oui → concurrent, il va dans la rivalité. Non, mais même besoin → substitut. 📘',
      notions: ['menace-substituts', 'rapport-prix-rendement'],
    },
    {
      id: 'etat',
      libelle: 'État / pouvoirs publics — la sixième force',
      cestQuoi:
        'Le cours ajoute explicitement une sixième force : 📘 « le pouvoir de l’État peut constituer une 6ᵉ force ». Et il la présente d’une façon particulière — non comme un arbitre neutre, mais comme une force souvent mobilisée par les entreprises elles-mêmes : 📘 « l’intervention de l’État se fait souvent à la demande des concurrents d’une industrie pour protéger leur marché », au nom de l’intérêt général (l’emploi) et de l’indépendance nationale.',
      question:
        'L’État modifie-t-il les règles du jeu de ce secteur — et joue-t-il pour moi ou contre moi ?',
      quoiMettre: [
        'La régulation : règlements, barrières légales, quotas, droits de douane, taxations. 📘',
        'Les subventions, notamment celles versées aux « champions nationaux » n’ayant pas encore la taille critique. 📘',
        'Les exceptions sectorielles : 📘 exception culturelle, exception agricole — très présentes en Suisse.',
        'L’État comme client : la commande publique fait vivre des secteurs entiers.',
        'Le lobbying des acteurs en place, qui explique POURQUOI la règle existe.',
        'Le double effet de toute norme : elle coûte cher aux installés, mais elle élève aussi la barrière à l’entrée. 🔎',
      ],
      exemple:
        'Atelier Léman 🔎 : la Ville de Genève multiplie les subventions à la mobilité douce. Effet immédiat : la demande d’entreprise devient solvable, ce qui est une opportunité. Effet second, moins visible : le marché devenu attractif attire des acteurs mieux financés — la même subvention renforce donc la menace des nouveaux entrants. L’État est ici plutôt favorable : force notée 2 sur 5 (illustratif).',
      piege:
        'Oublier purement et simplement cette force, ou la confondre avec le « P » du PESTEL. Le « P » observe une orientation politique générale ; la sixième force observe ce que l’État fait précisément à CE secteur.',
      reflexe:
        'Demande-toi qui a intérêt à la règle. Si ce sont les entreprises installées, tu tiens la lecture du cours : la règle est une protection obtenue, pas une contrainte subie.',
      notions: ['etat-sixieme-force', 'lobbying', 'facteur-politique'],
    },
    {
      id: 'attractivite',
      libelle: 'Attractivité du secteur — ce que le modèle produit',
      cestQuoi:
        'La conclusion, et la seule raison de faire l’exercice. 📘 « En règle générale, plus une force est puissante, plus la pression qu’elle exerce sur les prix ou les coûts est élevée, et moins le secteur est attrayant. » L’attractivité n’est pas une opinion sur le secteur : c’est sa capacité structurelle à laisser de la rentabilité à ceux qui y opèrent. On la représente avec la toile de Porter, un radar noté de 0 à 5 : 📘 un secteur très rentable a une petite toile.',
      question:
        'Une fois les six forces posées, combien reste-t-il de valeur pour moi — et quelles deux ou trois forces expliquent l’essentiel de la pression ?',
      quoiMettre: [
        'Une note de 0 à 5 par force, chacune adossée à un fait de l’énoncé.',
        'Le canal d’action de chaque force, via l’équation du cours Profit = Prix − Coûts : 📘 les fournisseurs n’agissent que sur les coûts ; clients, substituts et rivalité écrasent les prix et gonflent les coûts.',
        'Une nuance par note : 📘 « il est facile de changer de marque MAIS les préoccupations sanitaires augmentent la demande » — c’est la nuance qui produit un 3 plutôt qu’un 4.',
        'La hiérarchie : les deux ou trois forces qui décident, les autres qu’on mentionne sans s’y attarder.',
        'La conclusion en un mot : océan rouge, océan bleu, ou domaine à conserver.',
      ],
      exemple:
        'Atelier Léman 🔎 : la toile du domaine « vente » est large (5-4-4-3-3-2), celle du domaine « réparation » est étroite (2-2-2-2-1-1). L’entreprise réalise donc l’essentiel de son chiffre d’affaires sur le domaine le moins attractif des deux. C’est ce constat, et pas une intuition, qui rend crédible l’hypothèse de bascule vers un abonnement mobilité pour les entreprises genevoises.',
      piege:
        'Donner des notes sans justification factuelle, ou pire, additionner les six notes pour en faire un score global. Un examinateur acceptera 3 ou 4 si l’argumentation est solide ; il refusera un 5 non justifié. 📘',
      reflexe:
        'Formule chaque note ainsi : « je note X parce que tel fait du cas, ce qui augmente la force, tempéré cependant par tel autre fait, d’où une note intermédiaire de X ».',
      notions: ['attractivite-industrie', 'toile-porter', 'profit-prix-couts', 'ocean-rouge'],
    },
  ],

  // -------------------------------------------------------------------------
  // Comment on fait
  // -------------------------------------------------------------------------
  methode: [
    {
      titre: '1. Délimiter le secteur analysé — un domaine d’activité à la fois',
      detail:
        'Écris en toutes lettres le périmètre : « la vente de vélos électriques haut de gamme à Genève », pas « la mobilité ». Un domaine d’activité est un ensemble de produits qui partagent les mêmes clients, les mêmes concurrents et les mêmes facteurs clés de succès. Si l’entreprise en a deux, tu feras deux Porter — et c’est justement leur comparaison qui rapporte des points.',
      aEviter:
        'Analyser « toute l’économie » ou « l’entreprise ». Une force n’existe que par rapport à un secteur défini ; sans périmètre, chaque note devient indéfendable.',
    },
    {
      titre: '2. Nommer les acteurs concrets de chaque force',
      detail:
        'Six lignes, six listes de noms tirés de l’énoncé : qui sont les concurrents, qui fournit quoi, qui achète, quel autre moyen satisfait le besoin, qui pourrait entrer, que fait l’État. À ce stade on ne juge pas encore, on remplit. Une force sans aucun nom en face signale soit une force réellement faible, soit un énoncé mal lu.',
      aEviter:
        'Écrire des catégories vides du type « les fournisseurs » ou « les clients ». Sans nom ni nature précise, l’étape suivante n’a rien à évaluer.',
    },
    {
      titre: '3. Chercher, pour chaque force, ce qui l’augmente ET ce qui la diminue',
      detail:
        'C’est l’étape qui distingue une bonne copie. Pour chaque force, un argument dans un sens et un argument dans l’autre : « les clients comparent facilement en ligne, MAIS la marque locale et la proximité de l’atelier retiennent une partie d’entre eux ». C’est cette tension qui produit une note intermédiaire crédible plutôt qu’un 5 réflexe.',
      aEviter:
        'Ne voir qu’un seul sens. Une force poussée à fond dans une seule direction est presque toujours le signe qu’on n’a pas cherché le contre-argument.',
    },
    {
      titre: '4. Dire par quel canal chaque force agit : le prix, les coûts, ou les deux',
      detail:
        'Reprends l’équation du cours, Profit = Prix − Coûts. 📘 Les fournisseurs n’agissent que sur les coûts ; les clients, les substituts, la rivalité et les nouveaux entrants agissent sur les deux. Nommer le canal transforme une note en explication : on ne dit plus « la force est forte », on dit « elle écrase mes prix ».',
      aEviter:
        'Confondre cette équation unitaire avec l’équation de profit du business model, qui raisonne en volumes et en structures de revenus et de charges. Porter explique la pression, le business model explique l’architecture. 📘',
    },
    {
      titre: '5. Noter de 0 à 5 et tracer la toile',
      detail:
        'Chaque note résume l’analyse de l’étape 3, elle ne la remplace pas. On trace ensuite le radar : plus le polygone est grand, plus les forces sont puissantes, donc moins le secteur est attractif. Si tu as deux domaines d’activité, superpose ou juxtapose les deux toiles — la conclusion apparaît alors sans qu’on ait besoin de l’énoncer.',
      aEviter:
        'Additionner les notes pour produire un score unique. Deux secteurs de « total 18 » peuvent appeler des stratégies opposées selon les forces qui portent le total.',
    },
    {
      titre: '6. Hiérarchiser et conclure sur l’attractivité',
      detail:
        'Désigne les deux ou trois forces réellement décisives et dis ce qu’elles impliquent : sur ce domaine, la valeur part chez les fournisseurs et chez les clients, donc le secteur est peu attrayant. Cette conclusion se recopie ensuite telle quelle dans les menaces du SWOT, et déclenche, si la pression est forte, la question de l’océan bleu.',
      aEviter:
        'S’arrêter à six notes alignées. Une toile sans phrase de conclusion n’est pas un diagnostic, c’est un tableau.',
    },
  ],

  // -------------------------------------------------------------------------
  // Ce que ce modèle doit aux autres, et ce qu’il leur donne
  // -------------------------------------------------------------------------
  liens: [
    {
      vers: 'perimetre',
      nature: 'alimente',
      explication:
        'Le découpage en domaines d’activité conditionne Porter : sans domaine défini, aucune force n’est mesurable — et c’est parce qu’on a séparé la vente de la réparation que les deux toiles apparaissent opposées.',
    },
    {
      vers: 'pestel',
      nature: 'precise',
      explication:
        'Un facteur PESTEL ne reste pas macro : il déplace une force de Porter. Les subventions cantonales rendent le marché attractif, donc elles augmentent la menace des nouveaux entrants ; les normes sur les déchets électroniques alourdissent les coûts, mais elles élèvent aussi la barrière à l’entrée.',
    },
    {
      vers: 'swot',
      nature: 'alimente',
      explication:
        'Porter ne produit pas une toile pour elle-même : chaque force forte devient une menace hiérarchisée dans le SWOT, et chaque force faible ou favorable, une opportunité.',
    },
    {
      vers: 'ocean-bleu-erac',
      nature: 'prolonge',
      explication:
        'Quand la toile est large, la question cesse d’être « comment mieux se battre » et devient « faut-il continuer à se battre ici » — c’est exactement là que l’ERAC prend le relais pour redessiner l’offre.',
    },
    {
      vers: 'parties-prenantes',
      nature: 'partage',
      explication:
        'L’État apparaît deux fois : comme sixième force qui fixe les règles du secteur, et comme partie prenante dont il faut évaluer le pouvoir et l’intérêt. La même subvention se lit alors dans les deux outils, avec deux conclusions différentes.',
    },
  ],

  // -------------------------------------------------------------------------
  // Les erreurs qui coûtent des points
  // -------------------------------------------------------------------------
  pieges: [
    {
      titre: 'Compter les concurrents au lieu de mesurer l’intensité',
      explication:
        'Porter n’évalue pas un nombre d’acteurs mais la force de l’affrontement. Trois entreprises qui se livrent une guerre des prix font une rivalité bien plus forte que quinze qui se partagent tranquillement un marché en croissance.',
      reflexe:
        'Après chaque nom cité, ajoute « et ils se battent sur… ». Si tu ne peux pas finir la phrase, tu n’as pas encore analysé la rivalité.',
    },
    {
      titre: 'Confondre concurrent et substitut',
      explication:
        'Le concurrent fait le même métier, le substitut répond au même besoin autrement. Mettre une autre marque de vélo dans les substituts vide la case de son intérêt : c’est justement le substitut qui révèle les menaces venues d’ailleurs, comme le tram ou le télétravail.',
      reflexe:
        'Formule le besoin sans nommer le produit — « se déplacer en ville » — puis liste tout ce qui y répond. Ce qui n’est pas ton métier est un substitut.',
    },
    {
      titre: 'Faire Porter sur l’entreprise entière ou sur « toute l’économie »',
      explication:
        'Le modèle décrit une industrie, pas une organisation. Appliqué à Atelier Léman dans son ensemble, il mélange un domaine sous pression et un domaine protégé, et produit une moyenne qui ne décrit ni l’un ni l’autre.',
      reflexe:
        'Écris le périmètre en tête de la toile, en une ligne. S’il contient le mot « et », tu as probablement deux domaines et donc deux toiles à faire.',
    },
    {
      titre: 'Ranger les facteurs macro dans les forces',
      explication:
        'L’inflation, les élections ou le vieillissement de la population ne sont pas des forces de Porter : ce sont des facteurs PESTEL. Les placer ici brouille les deux niveaux et fait perdre le seul raisonnement qui les relie — celui du déplacement d’une force par un facteur macro.',
      reflexe:
        'Test simple : ce facteur s’exerce-t-il sur tous les secteurs à la fois ? Oui → PESTEL. Non, il concerne ce secteur en particulier → Porter.',
    },
    {
      titre: 'Oublier la sixième force, ou noter sans justifier',
      explication:
        'Le cours met l’État explicitement au tableau des opportunités et des menaces, et en Suisse il est souvent décisif — subventions, exception agricole, normes. À l’inverse, une note de 5 posée sans fait à l’appui sera refusée, alors qu’un 3 solidement argumenté sera accepté. 📘',
      reflexe:
        'Six lignes systématiquement, État compris, et une note toujours suivie de « parce que… ». Une force jugée nulle se dit aussi : « l’État n’intervient pas ici, note 0 ».',
    },
  ],

  // -------------------------------------------------------------------------
  // Divergences entre supports — à conserver, jamais à uniformiser
  // -------------------------------------------------------------------------
  variantes: [
    {
      sujet: 'Le nombre de forces : cinq ou six ?',
      formulations: [
        {
          texte:
            'Cinq forces : entrants potentiels, offreurs de substituts, fournisseurs, acheteurs, concurrents directs.',
          source: 'Formulation d’origine de Michael Porter, 1979 📚',
        },
        {
          texte: '« Le pouvoir de l’État peut constituer une 6ᵉ force. »',
          source: 'Encyclopédie du cours et mémos 📘',
        },
      ],
      consigne:
        'Dis « les cinq forces de Porter, auxquelles le cours ajoute l’État comme sixième force » — tu montres que tu connais le modèle d’origine ET la lecture du cours. Ne présente jamais la sixième force comme faisant partie du modèle initial.',
    },
    {
      sujet: 'Le nom des obstacles qui protègent un secteur',
      formulations: [
        { texte: '« obstacles à l’entrée »', source: 'Cours 2, slide 33 📘' },
        { texte: '« barrières d’entrée »', source: 'Corrigé TP02A / TP02B 📘' },
      ],
      consigne:
        'Les deux expressions désignent la même notion et coexistent dans les supports. Emploie celle que tu veux, mais signale à l’oral que le cours utilise les deux formulations : cela prouve que tu as lu les sources, pas une synthèse.',
    },
  ],

  // -------------------------------------------------------------------------
  // Le fil rouge
  // -------------------------------------------------------------------------
  exemple: {
    titre: 'Atelier Léman SA — la toile du domaine « vente de vélos »',
    situation:
      'Le périmètre est posé : deux domaines d’activité, la vente de vélos électriques (position faible) et la réparation-service (position forte). Le PESTEL vient d’être bouclé : subventions cantonales à la mobilité douce, batteries devenues le composant critique, sensibilité écologique croissante des entreprises genevoises. Reste à savoir ce que ces tendances font concrètement au secteur — et pourquoi les ventes reculent de 8 % en deux ans. Toutes les notes ci-dessous sont illustratives.',
    deroule: [
      {
        etiquette: 'Périmètre analysé',
        contenu:
          'Vente de vélos électriques haut de gamme aux particuliers, sur le bassin genevois. Prix public 2 600 CHF, coût de revient 1 400 CHF.',
      },
      {
        etiquette: 'Rivalité — 5 / 5',
        contenu:
          'Marques low-cost en ligne agressives sur un marché qui ne croît plus ; offres perçues comme comparables ; l’affrontement se joue au prix, terrain où l’atelier ne peut pas suivre. Effet : prix ↓ et coûts commerciaux ↑.',
      },
      {
        etiquette: 'Nouveaux entrants — 4 / 5',
        contenu:
          'Vendre en ligne demande peu de capital, pas de vitrine, pas d’atelier. Barrières basses. Tempéré par la notoriété locale d’Atelier Léman, qui ne se rachète pas — d’où 4 et non 5.',
      },
      {
        etiquette: 'Fournisseurs — 4 / 5',
        contenu:
          'Deux fournisseurs asiatiques pour la batterie, composant critique et poste de coût principal ; revalidation technique coûteuse en cas de changement. La main-d’œuvre qualifiée, rare à Genève, joue dans le même sens. Effet : coûts ↑ uniquement.',
      },
      {
        etiquette: 'Substituts — 3 / 5',
        contenu:
          'Transports publics, scooters et trottinettes en libre-service, télétravail. Meilleur rapport prix-rendement pour un trajet quotidien court, mais moins adaptés aux trajets réguliers longs — d’où une note moyenne.',
      },
      {
        etiquette: 'Clients — 3 / 5',
        contenu:
          'Le particulier compare vingt références en ligne et change de marque sans coût. Tempéré : produit encore différencié et service après-vente de proximité valorisé. Effet : prix ↓.',
      },
      {
        etiquette: 'État (+1) — 2 / 5',
        contenu:
          'Plutôt favorable : les subventions cantonales solvabilisent la demande. Mais la même subvention rend le marché attractif et appelle de nouveaux entrants — un même facteur, deux effets opposés.',
      },
      {
        etiquette: 'Lecture de la toile',
        contenu:
          'Toile large, dominée par la rivalité et les fournisseurs : les deux termes de Profit = Prix − Coûts sont attaqués en même temps. Le domaine « réparation » noté en parallèle donne 2-2-2-1-2-1, soit une toile deux fois plus petite.',
      },
    ],
    conclusion:
      'Le domaine qui porte l’essentiel du chiffre d’affaires est le moins attractif des deux, et pour des raisons structurelles que l’entreprise ne peut pas corriger seule. Trois menaces majeures partent au SWOT — rivalité en ligne, dépendance aux deux fournisseurs de batteries, substituts de mobilité — et la largeur de la toile déclenche la question suivante : plutôt que de mieux se battre sur la vente, faut-il déplacer le terrain vers un abonnement mobilité tout compris pour les entreprises, là où l’atelier et ses mécaniciens deviennent l’actif décisif ?',
  },

  phraseOral:
    'Sur la vente de vélos, deux forces suffisent à expliquer le recul de 8 % : la rivalité des marques en ligne écrase les prix, et la dépendance à deux fournisseurs de batteries gonfle les coûts — les deux termes de l’équation Profit = Prix − Coûts sont attaqués en même temps. Or la même analyse menée sur la réparation donne une toile deux fois plus petite : l’entreprise réalise donc l’essentiel de son chiffre d’affaires sur le domaine le moins attractif des deux. Ce n’est pas un problème d’exécution, c’est un problème de terrain.',

  aRetenir: [
    { cle: 'La question du modèle', valeur: 'Quelles forces mettent la rentabilité du secteur sous pression ?' },
    { cle: 'Ce qu’il mesure', valeur: 'L’intensité concurrentielle, donc l’attractivité structurelle d’une industrie. 📘' },
    { cle: 'Les six forces', valeur: 'Rivalité · entrants · fournisseurs · clients · substituts · État (+1). 📘' },
    { cle: 'Règle de lecture', valeur: 'Force forte = valeur captée par un autre = secteur moins attrayant. 📘' },
    { cle: 'Le canal', valeur: 'Profit = Prix − Coûts. Les fournisseurs n’agissent que sur les coûts. 📘' },
    { cle: 'Substitut', valeur: 'Même besoin, autre solution — pas le même métier. 📘' },
    { cle: 'Périmètre', valeur: 'Un domaine d’activité par toile, jamais l’entreprise entière.' },
    { cle: 'La toile', valeur: 'Radar de 0 à 5 ; un secteur très rentable a une petite toile. 📘' },
    { cle: 'Ce qu’il produit', valeur: 'Les menaces hiérarchisées du SWOT, et la question de l’océan bleu.' },
    { cle: 'Ce qui fait la note', valeur: 'La justification, pas le chiffre : un 3 argumenté vaut mieux qu’un 5 nu. 📘' },
  ],

  notions: [
    'porter-five-forces',
    'intensite-concurrentielle',
    'attractivite-industrie',
    'profit-prix-couts',
    'rivalite-concurrents',
    'menace-nouveaux-entrants',
    'pouvoir-fournisseurs',
    'pouvoir-clients',
    'menace-substituts',
    'etat-sixieme-force',
    'barriere-entree',
    'cout-changement',
    'concentration',
    'differenciation',
    'rapport-prix-rendement',
    'toile-porter',
    'ocean-rouge',
    'ocean-bleu',
    'das',
    'diagnostic-externe',
  ],
}
