import type { Modele } from './types'

export const modele: Modele = {
  id: 'achats-durables',
  numero: 18,
  slug: 'achats-durables',
  nom: 'Cycle des achats durables',
  sousTitre: 'Acheter moins · acheter mieux · utiliser plus longtemps',
  famille: 'numerique',
  etape: 'transverse',

  question:
    'Comment décide-t-on d’un achat — du matériel informatique, des équipements, des fournitures — sans que la décision se réduise au prix affiché sur le devis ?',

  enUnePhrase:
    'Le cycle des achats durables découpe une décision d’achat en trois temps — avant l’appel d’offres on questionne le besoin pour acheter moins, pendant l’appel d’offres on impose sept critères et on exige une preuve pour chacun afin d’acheter mieux, après l’appel d’offres on fait durer ce qu’on a acheté — et comme la fin de vie de l’équipement rouvre la question du besoin, le processus se referme en boucle au lieu de s’arrêter à la livraison.',

  produit:
    'Une décision d’achat qui tient en trois lignes défendables : ce qu’on renonce à acheter et pourquoi, les critères effectivement écrits dans le cahier des charges avec la preuve exigée en face de chacun, et la durée de vie visée avec les moyens concrets qui la rendent atteignable.',

  quandUtiliser: [
    'Dès qu’un cas contient un achat de matériel : renouvellement d’un parc informatique, équipement d’un atelier, flotte de véhicules, mobilier, fournitures. C’est le modèle qui transforme « il faudrait acheter du matériel plus vert » en décision argumentée.',
    'Quand l’énoncé parle d’un appel d’offres, d’un cahier des charges, d’une politique d’achats ou d’un fournisseur à sélectionner : les sept principes sont la grille de critères toute prête.',
    'Quand on veut répondre à l’objection « la durabilité coûte cher » : le principe du coût du cycle de vie déplace la comparaison du prix d’achat vers le coût complet, et c’est souvent là que l’option durable gagne.',
    'Dans le volet numérique, juste après l’effet rebond : quand quelqu’un propose de remplacer tout un parc par du matériel plus efficient, le cycle des achats est la réponse qui remet la fabrication dans le calcul.',
    'Quand un impact se situe chez un fournisseur et non chez l’entreprise : l’achat est le seul levier dont dispose une PME sur ce qui se passe en amont de sa chaîne de valeur.',
  ],

  quandNePasUtiliser: [
    'Pour arbitrer entre deux orientations stratégiques : le cycle des achats est un outil d’exécution, il précise comment on achète, jamais s’il faut se lancer dans un marché. L’arbitrage se fait au SAF.',
    'Pour traiter un service purement immatériel où rien n’est acheté ni fabriqué — mais vérifie d’abord : un logiciel en abonnement suppose presque toujours des serveurs, donc du matériel acheté par quelqu’un.',
    'Comme liste récitée. Sortir les sept principes sans en appliquer aucun au cas ne rapporte rien ; en appliquer deux avec des chiffres rapporte beaucoup.',
    'Pour juger la durabilité globale d’une stratégie : ce modèle regarde un flux entrant. Le verdict d’ensemble se rend au Donut, qui a deux bords.',
  ],

  schema: {
    h: 670,
    description:
      'Six étapes disposées en anneau — le besoin, les analyses, les sept critères, les preuves, l’utilisation, la fin de vie — reliées par des flèches qui reviennent au besoin ; au centre, les trois temps de l’achat durable empilés : acheter moins, acheter mieux, utiliser plus longtemps.',
    noeuds: [
      {
        id: 'n-besoin',
        titre: 'LE BESOIN',
        lignes: ['En a-t-on vraiment besoin ?', 'On part du besoin,', 'jamais du produit.'],
        x: 40,
        y: 50,
        l: 250,
        h: 140,
        ton: 'positif',
        point: 'besoin',
      },
      {
        id: 'n-analyses',
        titre: 'LES ANALYSES',
        lignes: ['Quels risques ? Quel marché ?', 'Que possède-t-on déjà ?'],
        x: 375,
        y: 50,
        l: 250,
        h: 140,
        point: 'analyses',
      },
      {
        id: 'n-principes',
        titre: 'LES 7 PRINCIPES',
        lignes: [
          '1 impacts · 2 coût du cycle',
          '3 labels · 4 fournisseurs',
          '5 durée de vie · 6 emballages',
          '7 transports',
        ],
        x: 710,
        y: 50,
        l: 250,
        h: 140,
        point: 'principes',
      },
      {
        id: 'n-moins',
        titre: '1 · ACHETER MOINS',
        lignes: ['avant l’appel d’offres'],
        x: 340,
        y: 218,
        l: 320,
        h: 68,
        ton: 'accent',
        point: 'moins',
      },
      {
        id: 'n-mieux',
        titre: '2 · ACHETER MIEUX',
        lignes: ['pendant l’appel d’offres'],
        x: 340,
        y: 306,
        l: 320,
        h: 68,
        ton: 'accent',
        point: 'mieux',
      },
      {
        id: 'n-longtemps',
        titre: '3 · UTILISER LONGTEMPS',
        lignes: ['et mieux — après l’achat'],
        x: 340,
        y: 394,
        l: 320,
        h: 68,
        ton: 'accent',
        point: 'longtemps',
      },
      {
        id: 'n-finvie',
        titre: 'LA FIN DE VIE',
        lignes: ['Réutiliser d’abord,', 'recycler en dernier —', 'puis relancer le besoin.'],
        x: 40,
        y: 490,
        l: 250,
        h: 140,
        ton: 'alerte',
        point: 'finvie',
      },
      {
        id: 'n-utilisation',
        titre: 'L’UTILISATION',
        lignes: ['Partager, entretenir,', 'réparer, réaffecter,', 'reconditionner.'],
        x: 375,
        y: 490,
        l: 250,
        h: 140,
        ton: 'positif',
        point: 'utilisation',
      },
      {
        id: 'n-preuves',
        titre: 'LES PREUVES',
        lignes: ['Labels, certifications,', 'audits de terrain.', 'Sans preuve, un critère', 'n’est qu’une promesse.'],
        x: 710,
        y: 490,
        l: 250,
        h: 140,
        point: 'preuves',
      },
    ],
    liens: [
      { de: 'n-besoin', vers: 'n-analyses' },
      { de: 'n-analyses', vers: 'n-principes' },
      { de: 'n-principes', vers: 'n-preuves' },
      { de: 'n-preuves', vers: 'n-utilisation' },
      { de: 'n-utilisation', vers: 'n-finvie' },
      { de: 'n-finvie', vers: 'n-besoin', ton: 'accent', libelle: 'on repart du besoin' },
      { de: 'n-moins', vers: 'n-mieux' },
      { de: 'n-mieux', vers: 'n-longtemps' },
    ],
    note: 'La flèche qui remonte, à gauche, est le cœur du modèle : quand un équipement arrive en fin de vie, la question qui se rouvre n’est pas « lequel rachète-t-on ? » mais « en a-t-on encore besoin ? ». Un achat durable n’est pas une ligne qui se termine à la livraison, c’est une boucle qui recommence.',
  },

  points: [
    {
      id: 'moins',
      libelle: '1 · Acheter moins — avant l’appel d’offres',
      cestQuoi:
        '📘 Le premier des trois temps du cycle, et celui que le cours place explicitement « avant l’appel d’offres ». Acheter moins ne veut pas dire se priver : cela veut dire couvrir le besoin avec moins d’objets neufs — en partageant ceux qu’on a, en réaffectant, en achetant reconditionné, en prolongeant l’existant. C’est le seul temps où l’impact évité vaut 100 %, puisque l’objet n’est jamais fabriqué.',
      question:
        'Combien d’unités neuves peut-on retirer de la commande sans que le besoin cesse d’être couvert ?',
      quoiMettre: [
        '📘 Les questions du cours, à poser dans cet ordre : une utilisation multiple des appareils est-elle possible au sein de l’organisation ? est-il possible d’utiliser des appareils d’occasion ou remis à neuf ?',
        '📘 Les cinq leviers cités : réduire le nombre de produits achetés · mutualiser · acheter du reconditionné · reconditionner son propre matériel · réaffecter un équipement à un autre poste.',
        'Le nombre d’unités qu’on n’achète pas, écrit noir sur blanc — c’est le seul chiffre du modèle qui soit un gain net, sans contrepartie.',
        'L’inventaire de ce qui dort déjà dans l’entreprise : matériel de démonstration, postes libérés par des départs, appareils remisés parce qu’ils étaient « lents ».',
        '🔎 La raison pour laquelle ce temps précède l’appel d’offres : une fois le cahier des charges publié, la quantité est figée et il ne reste plus qu’à choisir la marque.',
      ],
      exemple:
        'Le pilote d’Atelier Léman doit couvrir les trajets de 120 salariés dans 6 entreprises genevoises. Le réflexe d’équipement donnerait 120 vélos. En écrivant le besoin comme un déplacement partagé, il en reste 40, dont 6 sortis du stock de démonstration : 86 vélos et 86 batteries ne seront jamais fabriqués. Aucun critère d’achat, aussi sévère soit-il, n’aurait rendu ces 86 batteries acceptables.',
      piege:
        'Traiter ce temps comme une intention vertueuse (« nous serons sobres ») au lieu d’une décision chiffrée. Une intention ne retire aucune unité de la commande.',
      reflexe:
        'Exige un chiffre avant/après : « 120 prévus, 40 achetés ». Tant que ce couple de nombres n’existe pas, le premier temps n’a pas eu lieu.',
      notions: ['achats-it-responsables', 'sobriete-numerique', 'trois-r', 'economie-fonctionnalite'],
    },
    {
      id: 'besoin',
      libelle: 'Le besoin — la première case du processus',
      cestQuoi:
        '📘 La première étape du processus détaillé, celle qui déclenche tout le reste. Le cours ne commence pas par « choisir un fournisseur » mais par « besoin » : on écrit la fonction à couvrir, en langage de fonction, sans nommer aucun produit ni aucune marque.',
      question:
        'Quelle fonction faut-il couvrir, pour qui, en quelle quantité et pendant combien de temps — et est-ce que cette fonction est déjà couverte autrement ?',
      quoiMettre: [
        'La fonction, formulée avec un verbe et sans nom de produit : « suivre l’état de 40 vélos » et non « acheter 40 capteurs ». Le nom du produit dans l’énoncé du besoin verrouille la solution avant même l’analyse.',
        'Le volume réel, mesuré et non estimé : combien de personnes, combien d’heures par semaine, aux mêmes moments ou à des moments différents. Les usages décalés autorisent le partage ; les usages simultanés l’interdisent.',
        'La durée pendant laquelle le besoin existe : un besoin de douze mois ne se couvre pas par un achat amorti sur huit ans.',
        'Le niveau de service vraiment attendu, séparé de ce qui est confortable : 🔎 c’est là que se logent la moitié des sur-spécifications d’un cahier des charges.',
        '📘 Le lien avec l’ODD 12, consommation et production responsables, que le cours accroche précisément à ce premier temps.',
      ],
      exemple:
        'La direction d’Atelier Léman écrit d’abord « il nous faut une application de gestion de flotte ». Reformulé en besoin : « savoir, pour chacun des 40 vélos du pilote, où il est et quand il doit passer à l’atelier, et prévenir l’entreprise cliente ». Formulé ainsi, le besoin admet plusieurs réponses — dont un tableau partagé et un message automatique, sans un seul appareil supplémentaire.',
      piege:
        'Écrire le nom du produit dans la ligne « besoin ». À partir de ce moment, toutes les étapes suivantes ne font qu’optimiser un choix déjà fait.',
      reflexe:
        'Relis ta ligne de besoin et barre chaque nom de produit ou de marque. Si la phrase ne veut plus rien dire, c’est qu’elle décrivait une solution, pas un besoin.',
      notions: ['achats-it-responsables', 'sobriete-numerique', 'odd-12', 'perimetre'],
    },
    {
      id: 'analyses',
      libelle: 'Les analyses — risques et marché',
      cestQuoi:
        '📘 La deuxième étape : avant d’écrire le moindre critère, on analyse deux choses — les risques attachés à ce type d’achat (environnementaux, sociaux, de dépendance) et le marché (ce qui existe, à quel prix, avec quelles alternatives reconditionnées ou mutualisées). C’est cette analyse qui rend les critères pertinents plutôt que génériques.',
      question:
        'Où sont les risques réels de cette famille d’achat, et que propose réellement le marché — y compris hors du neuf ?',
      quoiMettre: [
        'Les risques environnementaux du produit : matières extraites, énergie de fabrication, consommation en usage, difficulté de fin de vie. 📘 Pour le matériel numérique, la fabrication d’un terminal pèse souvent plus que tout son usage.',
        'Les risques sociaux, situés géographiquement : conditions de travail dans les usines d’assemblage, extraction minière, sous-traitance en cascade. 📘 Le cours renvoie ici aux ONG de terrain et à Electronics Watch.',
        'Le risque de dépendance : combien de fournisseurs, sur quels continents, avec quel délai de remplacement. Un achat qui crée un fournisseur unique augmente le pouvoir de négociation de ce fournisseur — c’est une force de Porter qui se déplace.',
        'L’état du marché : existe-t-il du reconditionné professionnel, de la location, du partage entre organisations, des pièces détachées disponibles à dix ans ?',
        '📘 Les outils suisses cités par le cours pour instruire cette analyse : PAP.swiss (matrice des pertinences, coûts du cycle de vie, transport, procédures) et la matrice de pertinence de l’OFEV sur les moyens de télécommunication et informatique.',
      ],
      exemple:
        'Sur les batteries du pilote, l’analyse d’Atelier Léman donne trois lignes. Risque environnemental : extraction du lithium et fin de vie non organisée. Risque social : deux fournisseurs asiatiques dont personne, dans l’entreprise, ne connaît les conditions de travail. Risque de dépendance : ces deux fournisseurs représentent 100 % des cellules, avec quatre mois de délai. Le marché, lui, propose deux assembleurs européens et un reconditionneur de packs — ce que personne n’avait vérifié avant.',
      piege:
        'Confondre l’analyse du marché avec la consultation de trois devis. Trois devis comparent trois offres neuves ; l’analyse de marché cherche d’abord si l’achat neuf est nécessaire.',
      reflexe:
        'Ouvre l’analyse par une question fermée : « existe-t-il une offre reconditionnée, louée ou mutualisée pour ce besoin ? ». Réponse oui ou non, écrite, avant tout devis.',
      notions: ['electronics-watch', 'pap-swiss', 'pouvoir-fournisseurs', 'trois-postes-numerique'],
    },
    {
      id: 'mieux',
      libelle: '2 · Acheter mieux — l’appel d’offres',
      cestQuoi:
        '📘 Le deuxième temps, celui de l’appel d’offres. Une fois la quantité réduite au strict nécessaire, il reste à choisir : c’est le moment où les sept principes deviennent des lignes du cahier des charges, et où les preuves exigées transforment des promesses commerciales en engagements vérifiables.',
      question:
        'Sur quels critères écrits, et avec quelle preuve pour chacun, cette commande sera-t-elle attribuée ?',
      quoiMettre: [
        'La liste des critères retenus pour CE marché — trois ou quatre pertinents valent mieux que sept recopiés, à condition de dire pourquoi ces trois-là.',
        'La pondération : un critère durable sans poids dans la note finale n’influence aucune décision. 🔎 C’est le point où la plupart des politiques d’achat responsable s’effondrent en silence.',
        'La preuve exigée en face de chaque critère : label, certification, rapport d’audit, fiche technique chiffrée, engagement contractuel.',
        'Le coût sur lequel les offres sont comparées : 📘 le coût du cycle de vie, soit prix d’achat + coût de fonctionnement + coût de l’élimination — jamais le seul prix d’achat.',
        'Les clauses qui préparent le troisième temps : disponibilité des pièces détachées, durée de garantie, reprise en fin de vie. Elles se négocient ici, elles ne se négocient plus après.',
      ],
      exemple:
        'Pour ses 34 vélos à produire, Atelier Léman écrit quatre critères pondérés : batterie remplaçable sans outil spécifique (25 %), disponibilité des cellules à 8 ans (25 %), transparence sur le site d’assemblage (20 %), coût du cycle de vie sur 8 ans (30 %). Le prix d’achat seul ne pèse plus rien tout seul — il est entré dans le quatrième critère, avec l’entretien et la reprise.',
      piege:
        'Croire que le deuxième temps est le plus important parce que c’est là que se signe le contrat. Il arrive en second précisément parce que le levier le plus fort a déjà été utilisé avant.',
      reflexe:
        'Dis-le à l’oral dans cet ordre : « d’abord j’ai retiré des unités, ensuite seulement j’ai choisi ». Inverser les deux est l’erreur la plus visible sur ce modèle.',
      notions: ['achats-it-responsables', 'sept-principes-achats', 'cout-cycle-de-vie'],
    },
    {
      id: 'principes',
      libelle: 'Les 7 principes de l’achat responsable',
      cestQuoi:
        '📘 La grille de critères du cours, en sept points. Ce n’est pas une liste d’intentions : chaque principe se traduit en une ligne vérifiable du cahier des charges, et le deuxième — le coût du cycle de vie — est celui qui change la nature même de la comparaison entre offres.',
      question:
        'Lesquels de ces sept principes sont matériels pour CET achat, et en quelle ligne chiffrée chacun se traduit-il ?',
      quoiMettre: [
        '📘 Le libellé exact des sept, dans l’ordre du cours : ① minimiser les impacts environnementaux et sociaux ; ② les coûts du cycle de vie ; ③ labels et certifications ; ④ fournisseurs engagés ; ⑤ durée de vie et économie circulaire ; ⑥ emballages ; ⑦ transports.',
        '📘 Le contenu du principe ② : prix d’achat + coût de fonctionnement + coût de l’élimination. C’est l’argument économique de la durabilité, celui qui répond à l’objection « c’est trop cher » — un équipement bon marché, énergivore, non réparable et coûteux à éliminer est cher.',
        'Le principe ⑤ traduit en clauses concrètes : réparabilité, pièces détachées garanties pendant N années, batterie remplaçable, reprise en fin de vie. Sans clause, « économie circulaire » reste un mot dans une plaquette.',
        'Les deux principes qu’on oublie systématiquement, ⑥ et ⑦ : emballages et transports. Ils sont les plus faciles à imposer — emballage réutilisable, groupage des livraisons, fournisseur proche — et les seuls que personne ne pense à demander.',
        'Le principe ④, fournisseurs engagés : on ne juge pas seulement le produit mais l’entreprise qui le vend — politique sociale, transparence sur ses propres sous-traitants, capacité à répondre à un audit.',
        '🔎 Une pondération, sinon rien : sept principes cités sans poids dans la note d’attribution ne modifient aucune décision d’achat.',
      ],
      exemple:
        'Appliqués au pack batterie d’Atelier Léman, trois principes suffisent à changer le classement. ② Coût du cycle de vie sur 8 ans : le pack le moins cher à l’achat (340 CHF) devient le plus cher une fois comptés deux remplacements et l’élimination, contre un pack à 480 CHF réparable cellule par cellule — chiffres illustratifs. ⑤ Durée de vie : le second garantit les cellules à huit ans. ⑦ Transports : il est assemblé en Europe, contre un acheminement maritime de six semaines pour le premier.',
      piege:
        'Réciter les sept sans en appliquer aucun. Le jury entend la liste, ne voit aucun critère écrit, et conclut que le modèle n’a pas été utilisé.',
      reflexe:
        'Choisis-en trois et transforme chacun en une phrase de cahier des charges avec un nombre dedans. Trois critères chiffrés valent plus que sept titres.',
      notions: ['sept-principes-achats', 'cout-cycle-de-vie', 'cycle-de-vie', 'economie-circulaire'],
    },
    {
      id: 'preuves',
      libelle: 'Les preuves — labels, certifications, audits',
      cestQuoi:
        '📘 L’étape qui suit les critères dans le processus du cours : on exige la preuve de ce qu’on a demandé. Un critère sans preuve est déclaratif — le fournisseur affirme, personne ne vérifie. Les labels réduisent l’asymétrie d’information entre l’acheteur et le vendeur ; ils ne la suppriment pas.',
      question:
        'Pour chaque critère écrit, qu’est-ce que le fournisseur devra produire — et qui a vérifié ce document ?',
      quoiMettre: [
        '📘 Les labels IT cités par le cours : TCO Certified · Ecolabel européen · Energy Star · EPEAT · Der Blauer Engel (l’Ange bleu).',
        '📘 Les sept critères du label TCO, utiles pour montrer ce qu’un label couvre réellement : fabrication socialement responsable · fabrication respectueuse de l’environnement · santé et sécurité des utilisateurs · performance du produit · extension de la durée de vie · réduction des substances dangereuses · récupération des matériaux.',
        '📘 Les normes ISO des déclarations environnementales : ISO 14 024 : 2018, ISO 14 021 : 2016, ISO 14 025. 📚 Elles distinguent les écolabels certifiés par une tierce partie, les auto-déclarations du fabricant et les déclarations chiffrées de produit — trois niveaux de crédibilité très différents.',
        '📘 Electronics Watch, organisation indépendante de monitoring qui réunit acheteurs publics, société civile des régions de production et experts des droits humains : la réponse du cours quand la preuve documentaire ne suffit pas.',
        '🔎 Ce qu’un label ne prouve pas : il atteste un référentiel à une date, sur un modèle donné. Il ne dit rien de l’usage qu’on fera de l’appareil, ni de sa durée de vie réelle chez l’acheteur.',
      ],
      exemple:
        'Atelier Léman exige de chaque candidat trois pièces : la fiche EPEAT du chargeur, un engagement contractuel de disponibilité des cellules à huit ans, et le nom du site d’assemblage avec l’acceptation d’un audit tiers. Le fournisseur asiatique le moins cher fournit la première, refuse la troisième — l’information la plus utile du dossier est ce refus, pas les documents reçus.',
      piege:
        'Prendre un label pour une garantie totale et arrêter là l’examen. C’est aussi la porte d’entrée du greenwashing : un label affiché sur une gamme, appliqué à toute la marque.',
      reflexe:
        'Dis la phrase du cours : « un label est un critère de sélection, pas une garantie absolue ». Puis demande ce que le label ne couvre pas — la réponse est toujours instructive.',
      notions: ['labels-environnementaux', 'electronics-watch', 'greenwashing', 'certifications-durabilite'],
    },
    {
      id: 'longtemps',
      libelle: '3 · Utiliser plus longtemps, utiliser mieux — après l’appel d’offres',
      cestQuoi:
        '📘 Le troisième temps, après l’appel d’offres, celui que presque toutes les politiques d’achat oublient parce que le dossier est clos à la livraison. C’est pourtant lui qui décide de l’impact réel : doubler la durée de vie d’un parc, c’est diviser par deux le nombre d’appareils à fabriquer pour le même service.',
      question:
        'Quelle durée de vie vise-t-on pour cet équipement, et qu’a-t-on mis en place pour l’atteindre ?',
      quoiMettre: [
        'La durée de vie visée, en années, écrite quelque part — sans objectif, la durée de vie réelle est celle du cycle de renouvellement comptable.',
        'Les moyens qui la rendent possible : contrat de maintenance, stock de pièces, compétence de réparation interne, budget de réparation distinct du budget de renouvellement.',
        '📘 La lutte contre l’obsolescence, réelle ou perçue : un appareil est remplacé bien avant sa panne parce qu’il paraît lent ou démodé. L’allongement de la durée de vie est la bonne pratique citée par le Guide RNE.',
        'La réaffectation : l’appareil devenu insuffisant pour un poste exigeant reste excellent pour un poste léger. Un cycle de vie interne à deux étages allonge la durée totale sans rien acheter.',
        '🔎 Le lien avec l’effet rebond : « ce nouveau modèle consomme 25 % de moins, remplaçons tout le parc » ignore l’impact de fabriquer les nouveaux appareils. Le gain d’usage ne compense presque jamais la fabrication anticipée.',
      ],
      exemple:
        'Atelier Léman inscrit huit ans pour les cadres et cinq ans pour les batteries du pilote, et adosse ces chiffres à ce qu’elle sait faire : une révision par vélo tous les six mois dans ses deux ateliers, un stock de packs de rechange, et des mécaniciens déjà formés à la réparation toutes marques. La durée de vie n’est pas une promesse du fournisseur, c’est une compétence de l’entreprise — sa compétence distinctive, précisément.',
      piege:
        'Croire que ce temps ne relève pas des achats. Il s’y prépare entièrement : la réparabilité, les pièces et la reprise se négocient dans le contrat, pas trois ans plus tard.',
      reflexe:
        'À chaque achat, écris deux nombres côte à côte : la durée d’amortissement comptable et la durée de vie visée. Quand la seconde est plus grande, il y a une politique ; quand elles sont égales, il n’y en a pas.',
      notions: ['obsolescence', 'reconditionnement', 'trois-r', 'effet-rebond'],
    },
    {
      id: 'utilisation',
      libelle: 'L’utilisation — faire durer ce qui est acheté',
      cestQuoi:
        '📘 L’étape du processus qui suit la livraison : partage, entretien, réparation, réaffectation, reconditionnement. Ce sont les boucles courtes de l’économie circulaire — celles qui préservent la valeur de l’objet parce qu’il reste un objet, au lieu de redevenir de la matière.',
      question:
        'Que fait-on, concrètement et par qui, entre la livraison et la fin de vie de cet équipement ?',
      quoiMettre: [
        'Le partage : un appareil utilisé quatre heures par jour peut en servir deux, à condition que les usages soient décalés. C’est la boucle la plus courte et la moins coûteuse.',
        'L’entretien programmé, avec sa fréquence et son responsable. 🔎 Un entretien qui n’est ni daté ni attribué n’a pas lieu.',
        '📘 La réparation, que le cours classe dans « réduire » et non dans « réutiliser » : réparer, c’est éviter d’acheter du neuf, donc éviter de produire un déchet.',
        '📘 Le reconditionnement, nommé aussi circular computing : vérifier la fonctionnalité, inventorier les éléments matériels, nettoyer les composants et les données, réaliser les réparations nécessaires.',
        '📘 Le nettoyage des données comme partie intégrante du reconditionnement : c’est le point où la circularité rencontre la protection des données — un appareil réutilisé sans effacement est une fuite en attente.',
      ],
      exemple:
        'Chez Atelier Léman, le poste de réparation est déjà en place : deux ateliers, des mécaniciens très qualifiés, la réparation de toutes les marques. Le pilote y ajoute une règle simple — tout vélo du parc passe à Carouge ou Plainpalais tous les six mois, et tout pack batterie dont une seule cellule lâche est ouvert, pas remplacé. Ce qui est une contrainte d’exploitation pour un loueur est, ici, exactement le métier de l’entreprise.',
      piege:
        'Ranger la réparation dans « réutiliser ». Le test du cours est simple : l’objet change-t-il de propriétaire ? Non, on le répare, donc réduire. Oui, occasion ou troc, donc réutiliser.',
      reflexe:
        'Nomme la personne qui répare. Si la réponse est « le fournisseur, sous garantie », la durée de vie s’arrêtera à la fin de la garantie.',
      notions: ['trois-r', 'reconditionnement', 'economie-circulaire', 'protection-donnees'],
    },
    {
      id: 'finvie',
      libelle: 'La fin de vie — et le retour au besoin',
      cestQuoi:
        '📘 La dernière étape du processus : réutilisation, puis recyclage. L’ordre compte — réutiliser conserve la valeur ajoutée de la fabrication, recycler la détruit pour ne récupérer que la matière, à un coût énergétique élevé. Et cette étape ne termine rien : elle rouvre la question du besoin, ce qui fait du processus un cycle.',
      question:
        'Où part cet équipement quand il sort du parc — et le besoin qu’il couvrait existe-t-il encore ?',
      quoiMettre: [
        '📘 L’ordre imposé : réutilisation d’abord (revente, don, marché de l’occasion, après reconditionnement), recyclage ensuite — démontage, fragmentation, séparation, conversion en matériaux pour un autre produit.',
        '📘 Les DEEE, déchets d’équipements électriques et électroniques : aggravés par l’obsolescence, difficiles à recycler, à orienter vers « les filières adéquates ».',
        'La clause de reprise, négociée au moment de l’achat et non à la fin : c’est le seul moment où le fournisseur a une raison d’accepter.',
        'L’effacement certifié des données avant toute sortie du parc — sans quoi la meilleure filière de réemploi devient un incident de sécurité.',
        '🔎 La question de bouclage, celle qui donne son nom au modèle : le besoin est-il toujours là, a-t-il changé de forme, s’est-il éteint ? Le remplacement automatique est un achat que personne n’a décidé.',
      ],
      exemple:
        'Le contrat du pilote d’Atelier Léman prévoit dès la signature que chaque pack batterie revient à l’atelier : cellules valides remontées dans d’autres packs, le reste orienté vers la filière DEEE. Et au bout des douze mois, la question posée n’est pas « combien de vélos rachète-t-on ? » mais « les 40 vélos ont-ils tous roulé ? ». Si six sont restés au garage, le prochain achat porte sur 34 — et la boucle a servi à quelque chose.',
      piege:
        '« Nous réglerons le problème en recyclant. » Le recyclage intervient après la fabrication, le transport et l’usage : il ramasse ce qui reste, il n’évite rien.',
      reflexe:
        'Réponds toujours dans l’ordre : d’abord ce qu’on n’achète pas, ensuite ce qu’on fait durer, ensuite seulement ce qu’on recycle. Un candidat qui commence par le recyclage annonce qu’il a sauté les deux premiers temps.',
      notions: ['deee', 'trois-r', 'economie-circulaire', 'obsolescence'],
    },
  ],

  methode: [
    {
      titre: '1. Écrire le besoin en une phrase, sans nom de produit',
      detail:
        'Un verbe, un public, un volume, une durée : « permettre à 120 salariés de 6 entreprises de faire leurs trajets courts pendant 12 mois ». Relis et barre chaque nom de produit ou de marque. Ce que la phrase perd en précision apparente, elle le gagne en options possibles.',
      aEviter:
        'Écrire « il faut acheter X ». La suite du raisonnement ne fera plus que choisir la marque de X, et le levier le plus puissant du modèle sera perdu avant d’avoir servi.',
    },
    {
      titre: '2. Analyser les risques et le marché avant d’écrire le moindre critère',
      detail:
        'Trois lignes suffisent : risque environnemental (matières, fabrication, fin de vie), risque social (où, chez qui, dans quelles conditions), risque de dépendance (combien de fournisseurs, quel délai). Puis une question fermée sur le marché : existe-t-il du reconditionné, de la location, du partage ?',
      aEviter:
        'Remplacer l’analyse par trois devis. Trois devis comparent trois offres neuves entre elles ; ils ne disent jamais si l’achat neuf était nécessaire.',
    },
    {
      titre: '3. Retirer des unités de la commande, et chiffrer ce qu’on retire',
      detail:
        'Mutualiser, réaffecter, prolonger, acheter du reconditionné, sortir du stock ce qui y dort. Écris le couple de nombres avant/après — « 120 prévus, 40 achetés » — parce que c’est le seul gain du modèle qui n’a aucune contrepartie : l’objet n’est pas fabriqué.',
      aEviter:
        'Se contenter d’une déclaration de sobriété. Une intention ne retire aucune unité ; seul un nombre le fait.',
    },
    {
      titre: '4. Transformer trois des sept principes en lignes de cahier des charges',
      detail:
        'Choisis les trois qui sont matériels pour ce cas, dis pourquoi ces trois-là, et écris chacun avec un nombre dedans : « cellules disponibles à 8 ans », « coût du cycle de vie sur 8 ans », « assemblage en Europe ». Donne un poids à chacun dans la note d’attribution.',
      aEviter:
        'Réciter les sept sans en appliquer un seul, ou citer un critère durable sans pondération — un critère qui ne pèse rien ne change aucune décision.',
    },
    {
      titre: '5. Exiger une preuve en face de chaque critère',
      detail:
        'Un label, une certification, un rapport d’audit, un engagement contractuel, une fiche chiffrée. Note à côté de chaque preuve qui l’a vérifiée : le fabricant lui-même, un organisme tiers, ou personne. Et note ce que la preuve ne couvre pas.',
      aEviter:
        'Accepter une preuve auto-déclarée comme équivalente à une certification tierce, et présenter un label comme une garantie totale.',
    },
    {
      titre: '6. Fixer la durée de vie visée et organiser la fin de vie dès le contrat',
      detail:
        'Deux nombres côte à côte : durée d’amortissement comptable, durée de vie visée. Puis les moyens qui rendent la seconde atteignable — pièces, réparation, réaffectation — et la clause de reprise, négociée maintenant parce qu’elle ne se négociera plus.',
      aEviter:
        'Refermer le dossier à la livraison. Le troisième temps ne s’ajoute pas après coup : tout ce qui le rend possible s’écrit dans le contrat d’achat.',
    },
    {
      titre: '7. Refermer la boucle : reposer la question du besoin',
      detail:
        'En fin de vie, la première question n’est pas « lequel rachète-t-on ? » mais « ce besoin existe-t-il encore, et sous quelle forme ? ». Consigne l’usage réel constaté — ce qui n’a pas servi ne se rachète pas. C’est ce retour qui fait du processus un cycle et non une ligne.',
      aEviter:
        'Le renouvellement automatique à l’échéance comptable : c’est un achat que personne n’a décidé, justifié par un calendrier plutôt que par un besoin.',
    },
  ],

  liens: [
    {
      vers: 'trois-r',
      nature: 'partage',
      explication:
        'Les trois temps de l’achat durable et les 3R sont la même hiérarchie vue de deux côtés : acheter moins, c’est réduire ; utiliser plus longtemps, c’est réutiliser et réparer ; la fin de vie, c’est recycler — et dans les deux modèles le recyclage arrive en dernier parce qu’il détruit la valeur ajoutée pour ne récupérer que la matière.',
    },
    {
      vers: 'sobriete-qta',
      nature: 'partage',
      explication:
        'Acheter moins est exactement le Q de Questionner appliqué au matériel : dans les deux modèles, on interroge le besoin avant d’optimiser la solution, parce qu’une fois la quantité fixée il ne reste plus qu’à choisir la marque.',
    },
    {
      vers: 'effet-rebond',
      nature: 'soppose',
      explication:
        'Le rebond de l’achat a une forme très reconnaissable : « ce modèle consomme 25 % de moins, remplaçons tout le parc » — le gain unitaire est réel, l’impact total augmente parce qu’on vient de faire fabriquer un parc entier ; c’est précisément ce que le premier temps interdit.',
    },
    {
      vers: 'trois-postes',
      nature: 'alimente',
      explication:
        'Le poste des terminaux est celui où la fabrication pèse plus que l’usage : c’est donc à l’achat, et non au réglage, que se joue l’essentiel de l’empreinte matérielle du numérique — le cycle des achats durables est l’outil qui agit sur ce poste.',
    },
    {
      vers: 'chaine-de-valeur',
      nature: 'precise',
      explication:
        'Les achats sont une activité de soutien de la chaîne de valeur, et le cycle des achats durables dit comment la conduire : il transforme une fonction administrative en levier stratégique, puisque c’est le seul moyen d’agir sur les impacts qui se produisent chez les fournisseurs.',
    },
  ],

  pieges: [
    {
      titre: 'Commencer par le catalogue au lieu du besoin',
      explication:
        'C’est l’erreur de structure du modèle : on saute le premier temps et on entre directement dans la comparaison d’offres. La conséquence est mécanique — la quantité n’est plus discutable, et tout l’effort porte sur 20 % de l’impact pendant que 80 % a déjà été validé sans examen.',
      reflexe:
        'Impose-toi l’ordre à l’oral : « d’abord combien, ensuite lequel ». Et donne le couple de nombres avant/après pour prouver que le premier temps a eu lieu.',
    },
    {
      titre: 'Comparer les offres sur le prix d’achat',
      explication:
        '📘 Le coût du cycle de vie est prix d’achat + coût de fonctionnement + coût de l’élimination. Un équipement moins cher à l’achat mais énergivore, non réparable et coûteux à éliminer est plus cher — l’ignorer, c’est laisser gagner systématiquement l’offre la moins durable.',
      reflexe:
        'Sors la formule en trois termes et applique-la à un seul chiffre du cas. Une comparaison chiffrée sur huit ans vaut mieux qu’un paragraphe sur la durabilité.',
    },
    {
      titre: 'Prendre un label pour une garantie',
      explication:
        'Un label atteste un référentiel, à une date, sur un modèle précis. Il ne dit rien de la durée de vie réelle chez l’acheteur, ni des sous-traitants du sous-traitant. Et l’affichage d’un label de gamme sur toute une marque est un mécanisme classique de greenwashing.',
      reflexe:
        'Formule-le comme le cours : un label est un critère de sélection, pas une garantie absolue. Puis nomme ce qu’il ne couvre pas — c’est ce qui montre qu’on a compris à quoi sert une preuve.',
    },
    {
      titre: 'Croire que recycler règle le problème',
      explication:
        'Le recyclage intervient après l’extraction, la fabrication, le transport et l’usage : il ramasse ce qui reste. Une entreprise qui recycle beaucoup mais achète toujours plus reste dans une logique parfaitement linéaire.',
      reflexe:
        'Réponds dans l’ordre du modèle — éviter, faire durer, puis recycler — et dis explicitement que le vrai levier est d’éviter de fabriquer.',
    },
    {
      titre: 'Arrêter le raisonnement à la livraison',
      explication:
        'Le troisième temps est celui qu’on oublie, alors que c’est lui qui détermine combien de fois il faudra racheter. Or tout ce qui le rend possible — pièces détachées, réparabilité, garantie, clause de reprise — se négocie dans le contrat d’achat et nulle part ailleurs.',
      reflexe:
        'Termine toute réponse sur les achats par une phrase sur l’après : durée de vie visée, moyens de l’atteindre, et destination de l’équipement en fin de vie.',
    },
  ],

  variantes: [
    {
      sujet: 'Le nom du coût complet : « coûts du cycle de vie » ou « TCO » ?',
      formulations: [
        {
          texte: '« Les coûts du cycle de vie : prix d’achat, coût de fonctionnement, coût de l’élimination »',
          source: 'encyclopédie, les 7 principes des achats responsables',
        },
        {
          texte: '« Critères TCO » — le cours nomme par ailleurs le label TCO Certified et ses sept critères',
          source: 'supports du cours sur les labels IT',
        },
        {
          texte: '« Coût total de possession »',
          source: '📚 formulation courante en gestion — n’apparaît pas telle quelle dans les supports',
        },
      ],
      consigne:
        'Les deux premières viennent du cours, la troisième non. Emploie « coût du cycle de vie » et cite sa décomposition en trois termes : c’est la formulation sourcée, et c’est elle qu’on peut appliquer à un chiffre. Signale que TCO Certified est un label, pas un synonyme du coût complet — la confusion entre les deux est fréquente et se voit tout de suite.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman SA — les 40 vélos du pilote passés au cycle des achats',
    situation:
      'La décision est prise : un pilote de 40 vélos chez 6 entreprises genevoises sur 12 mois. Il reste à acheter — les vélos, leurs batteries, et de quoi suivre le parc. Le cycle des achats durables n’intervient donc pas pour choisir la stratégie, mais pour exécuter la décision sans que l’impact évité côté clients soit repris côté fournisseurs. Les chiffres qui suivent sont illustratifs.',
    deroule: [
      {
        etiquette: 'Le besoin',
        contenu:
          'Permettre à 120 salariés de 6 entreprises genevoises de faire leurs trajets courts à vélo pendant 12 mois, et savoir quand chaque vélo doit passer à l’atelier. Formulé comme un déplacement partagé et non comme un équipement individuel, le besoin ouvre le partage — et il ne contient le nom d’aucun produit.',
      },
      {
        etiquette: 'Les analyses',
        contenu:
          'Risque environnemental : extraction du lithium et packs batterie dont personne ne suit la fin de vie. Risque social : deux fournisseurs asiatiques aux conditions de travail inconnues. Risque de dépendance : 100 % des cellules chez ces deux-là, quatre mois de délai. Marché : deux assembleurs européens et un reconditionneur de packs, que personne n’avait consultés.',
      },
      {
        etiquette: '1 · Acheter moins',
        contenu:
          '120 vélos individuels deviennent 40 vélos partagés, dont 6 sortent du stock de démonstration : 34 vélos à produire. 86 vélos et 86 batteries ne seront jamais fabriqués — le plus gros gain du dossier, et il ne coûte rien. Côté suivi, le tableau partagé et le message automatique remplacent les 40 capteurs de position envisagés.',
      },
      {
        etiquette: '2 · Acheter mieux — les critères',
        contenu:
          'Quatre critères pondérés dans le cahier des charges : batterie remplaçable sans outil spécifique (25 %), disponibilité des cellules à 8 ans (25 %), transparence sur le site d’assemblage (20 %), coût du cycle de vie sur 8 ans (30 %). Emballages réutilisables et livraison groupée en clause obligatoire — les deux principes que personne ne demande jamais.',
      },
      {
        etiquette: '2 · Acheter mieux — le calcul',
        contenu:
          'Pack à 340 CHF : deux remplacements sur 8 ans plus l’élimination, soit 1 090 CHF. Pack à 480 CHF réparable cellule par cellule : un remplacement partiel, soit 700 CHF. Le moins cher à l’achat est le plus cher en coût de cycle de vie — et sur 40 vélos, l’écart atteint 15 600 CHF.',
      },
      {
        etiquette: 'Les preuves',
        contenu:
          'Fiche EPEAT pour les chargeurs, engagement contractuel de disponibilité des cellules à huit ans, nom du site d’assemblage avec acceptation d’un audit tiers. Le fournisseur le moins cher fournit la première et refuse la troisième : ce refus est l’information la plus utile du dossier.',
      },
      {
        etiquette: '3 · Utiliser plus longtemps',
        contenu:
          'Huit ans visés pour les cadres, cinq pour les batteries. Les moyens existent déjà dans l’entreprise : deux ateliers, des mécaniciens qui réparent toutes les marques, une révision par vélo tous les six mois, et la règle qu’un pack dont une cellule lâche est ouvert et non remplacé.',
      },
      {
        etiquette: 'La fin de vie et la boucle',
        contenu:
          'Reprise de chaque pack inscrite au contrat dès la signature : cellules valides remontées, reste orienté vers la filière DEEE. À douze mois, la question posée n’est pas « combien en rachète-t-on ? » mais « les 40 vélos ont-ils roulé ? ». Six vélos immobilisés signifient un prochain achat de 34, pas de 40.',
      },
    ],
    conclusion:
      'Le cycle des achats a produit trois éléments réutilisables ailleurs dans l’oral. Un chiffre d’évitement — 86 vélos non fabriqués — qui alimente directement le bord haut du Donut. Un critère d’exécution — la reprise contractuelle des batteries — qui était justement la condition d’admissibilité du basculement vers l’abonnement. Et une preuve que la compétence de réparation d’Atelier Léman n’est pas un poste de coût mais la ressource qui rend la durée de vie tenable : la même compétence distinctive qui apparaissait déjà au diagnostic interne, et qui devient ici un argument commercial vis-à-vis des six entreprises clientes.',
  },

  phraseOral:
    'Chez Atelier Léman, la décision la plus durable du pilote ne se prend pas au moment de choisir le fournisseur de batteries, elle se prend avant : en écrivant que le besoin est de faire circuler 120 salariés et non d’équiper 120 salariés, on passe de 120 vélos à 40, soit 86 batteries qu’aucun critère d’achat, aussi exigeant soit-il, n’aurait rendues acceptables — et c’est seulement une fois ces 86 batteries retirées de la commande que les sept principes servent à quelque chose sur les 34 qui restent.',

  aRetenir: [
    { cle: 'Les trois temps 📘', valeur: '1. Acheter moins (avant l’appel d’offres) · 2. Acheter mieux (l’appel d’offres) · 3. Utiliser plus longtemps, utiliser mieux (après)' },
    { cle: 'Le processus détaillé 📘', valeur: 'Besoin → Analyses (risques, marché) → Critères → Preuves → Utilisation → Fin de vie → et retour au besoin' },
    { cle: 'Pourquoi « cycle »', valeur: 'La fin de vie ne clôt pas le dossier : elle rouvre la question du besoin. C’est une boucle, pas une ligne' },
    { cle: 'Les 7 principes 📘', valeur: '① impacts environnementaux et sociaux ② coûts du cycle de vie ③ labels et certifications ④ fournisseurs engagés ⑤ durée de vie et économie circulaire ⑥ emballages ⑦ transports' },
    { cle: 'Le principe décisif 📘', valeur: 'Coût du cycle de vie = prix d’achat + coût de fonctionnement + coût de l’élimination — la réponse à « c’est trop cher »' },
    { cle: 'Les labels 📘', valeur: 'TCO Certified · Ecolabel européen · Energy Star · EPEAT · Blauer Engel — un critère de sélection, jamais une garantie absolue' },
    { cle: 'La preuve non documentaire 📘', valeur: 'Electronics Watch : monitoring indépendant de terrain, quand les papiers ne suffisent pas' },
    { cle: 'La boîte à outils suisse 📘', valeur: 'PAP.swiss et la matrice de pertinence de l’OFEV' },
    { cle: 'La correspondance avec les 3R', valeur: 'Acheter moins ≈ réduire · utiliser plus longtemps ≈ réutiliser et réparer · fin de vie ≈ recycler, en dernier' },
    { cle: 'L’erreur à ne pas faire', valeur: '« On recyclera » : le recyclage arrive après la fabrication — il ramasse, il n’évite rien' },
  ],

  notions: [
    'achats-it-responsables',
    'sept-principes-achats',
    'cout-cycle-de-vie',
    'labels-environnementaux',
    'electronics-watch',
    'pap-swiss',
    'cycle-de-vie',
    'trois-r',
    'economie-circulaire',
    'reconditionnement',
    'deee',
    'obsolescence',
    'eco-conception',
    'sobriete-numerique',
    'effet-rebond',
    'trois-postes-numerique',
    'odd-12',
    'greenwashing',
  ],
}
