import type { Modele } from './types'

export const modele: Modele = {
  id: 'swot',
  numero: 7,
  slug: 'swot',
  nom: 'SWOT',
  sousTitre: 'Synthèse du diagnostic interne + externe',
  famille: 'synthese',
  etape: 'e4',

  question: 'Que retenir des deux diagnostics — et quels choix cela ouvre-t-il ?',

  enUnePhrase:
    'Le SWOT range en quatre cases ce que les autres outils ont trouvé — forces et faiblesses dedans, opportunités et menaces dehors — pour qu’on puisse enfin les confronter.',

  produit:
    'Un tableau hiérarchisé, trois éléments majeurs par case, qui devient exploitable une fois croisé : deux ou trois enjeux stratégiques, puis deux ou trois options que le SAF départagera.',

  quandUtiliser: [
    'Quand le PESTEL, Porter, les ressources et compétences et la chaîne de valeur ont déjà produit leurs constats. Le SWOT est un point d’arrivée des diagnostics, jamais un point de départ.',
    'Quand un diagnostic long doit tenir sur une page lisible par une direction pressée.',
    'Quand on cherche à faire émerger des enjeux — c’est-à-dire des questions ouvertes — avant de formuler des options.',
    'À l’oral, pour tenir le fil en 10 minutes : quatre cases, on ne se perd pas.',
    'Au niveau d’un domaine d’activité stratégique (DAS), c’est-à-dire d’une activité homogène avec ses propres concurrents. Chez Atelier Léman, le SWOT « vente de vélos » et le SWOT « réparation » ne se ressemblent pas.',
  ],

  quandNePasUtiliser: [
    'Pour collecter de l’information : le SWOT n’a aucun contenu propre, il ne fait que ranger celui des autres.',
    'Pour analyser le macro-environnement ou l’industrie — c’est le travail du PESTEL et de Porter, qui l’alimentent.',
    'Pour comparer deux options entre elles : c’est le SAF (souhaitabilité, acceptabilité, faisabilité) qui compare.',
    'Comme conclusion d’un exposé : un SWOT qui s’arrête au tableau n’a décidé de rien.',
  ],

  schema: {
    h: 560,
    description:
      'Un carré partagé en quatre cases : en haut ce qui vient de l’entreprise — forces à gauche, faiblesses à droite ; en bas ce qui vient du dehors — opportunités à gauche, menaces à droite.',
    noeuds: [
      {
        id: 'forces',
        titre: 'FORCES',
        lignes: [
          'interne · positif',
          'ce que nous avons et savons faire',
          'ça disparaîtrait avec l’entreprise',
          'venu du diagnostic interne',
        ],
        x: 40,
        y: 80,
        l: 420,
        h: 190,
        ton: 'positif',
        point: 'forces',
      },
      {
        id: 'faiblesses',
        titre: 'FAIBLESSES',
        lignes: [
          'interne · négatif',
          'ce qui manque ou fonctionne mal',
          'ça dépend de nous, donc réparable',
          'venu du diagnostic interne',
        ],
        x: 540,
        y: 80,
        l: 420,
        h: 190,
        ton: 'alerte',
        point: 'faiblesses',
      },
      {
        id: 'opportunites',
        titre: 'OPPORTUNITÉS',
        lignes: [
          'externe · positif',
          'un changement du dehors à saisir',
          'existerait sans notre entreprise',
          'venu du PESTEL et de Porter',
        ],
        x: 40,
        y: 310,
        l: 420,
        h: 190,
        ton: 'positif',
        point: 'opportunites',
      },
      {
        id: 'menaces',
        titre: 'MENACES',
        lignes: [
          'externe · négatif',
          'un changement du dehors qui nuit',
          'on l’anticipe, on ne l’annule pas',
          'venu du PESTEL et de Porter',
        ],
        x: 540,
        y: 310,
        l: 420,
        h: 190,
        ton: 'danger',
        point: 'menaces',
      },
    ],
    liens: [],
    axes: {
      x: { libelle: 'EFFET', faible: 'positif', fort: 'négatif' },
      y: { libelle: 'ORIGINE', faible: 'externe', fort: 'interne' },
    },
    note:
      'Le tableau ne décide rien. Ce qui décide, c’est le croisement interne × externe : F × O, F × M, f × O, f × M. 🔎',
  },

  points: [
    {
      id: 'forces',
      libelle: 'FORCES — interne, positif',
      cestQuoi:
        'Une ressource (ce que l’entreprise possède), une compétence (ce qu’elle sait faire) ou une activité qu’elle exécute mieux que ses concurrents. C’est en elle : si l’entreprise fermait demain, la force fermerait avec elle. 📘',
      question:
        'Qu’avons-nous et que savons-nous faire, que les concurrents n’ont pas ou font moins bien ?',
      quoiMettre: [
        'Des ressources tangibles, c’est-à-dire matérielles : ateliers, machines, stock, trésorerie, brevets.',
        'Des ressources intangibles, c’est-à-dire immatérielles : marque, réputation, base de clients fidèles, savoir-faire jamais écrit nulle part.',
        'Une compétence distinctive : ce que l’équipe sait faire et qu’un concurrent ne peut ni copier vite ni racheter.',
        'Un maillon fort de la chaîne de valeur : l’activité précise où la marge se fabrique.',
        'Un chiffre qui prouve — un délai, un taux, une part de marché. « Bonne équipe » ne prouve rien et ne se croise avec rien.',
        'Toujours un écart, jamais une qualité en soi : une force se dit par rapport à quelqu’un.',
      ],
      exemple:
        'Atelier Léman : deux ateliers qui réparent toutes les marques, des mécaniciens qui diagnostiquent une panne de batterie en 20 minutes, quinze ans de réputation à Genève. Aucune marque en ligne ne livre ça avec le vélo.',
      piege:
        'Écrire un facteur clé de succès à la place d’une force. « La compétence technique est essentielle dans la réparation » décrit ce que le secteur exige de tous : c’est une caractéristique de l’industrie, donc externe.',
      reflexe:
        'Reformuler avec « nous » et un comparatif : « nous détenons cette compétence, contrairement aux ateliers de quartier ». Si la phrase ne supporte pas le « nous », ce n’est pas une force.',
      notions: ['force', 'ressources', 'competence-distinctive', 'chaine-de-valeur', 'facteurs-cles-succes'],
    },
    {
      id: 'faiblesses',
      libelle: 'FAIBLESSES — interne, négatif',
      cestQuoi:
        'Une ressource ou une compétence qui manque, ou une activité qu’on exécute moins bien que les autres. Comme la force, elle dépend de l’entreprise — donc elle est réparable, à un coût et dans un délai qu’on peut chiffrer. 📘',
      question:
        'Qu’est-ce qui, chez nous, nous empêchera de saisir ce qui se présente ou d’encaisser ce qui arrive ?',
      quoiMettre: [
        'Une dépendance : un fournisseur unique, un client qui pèse 40 % du chiffre d’affaires, une personne-clé sans remplaçant.',
        'Une activité de soutien absente : pas de développement technologique, pas de fonction achats structurée, pas de contrôle de gestion.',
        'Un maillon faible de la chaîne de valeur : là où le coût dérape, ou là où le client se plaint.',
        'Une compétence non détenue : vendre en ligne, piloter un abonnement, facturer au mois plutôt qu’à l’acte.',
        'Une limite financière : une trésorerie qui interdit d’immobiliser une flotte pendant douze mois.',
        'Le coût et le délai de réparation, quand on les connaît : c’est ce qui rendra le croisement f × O opérationnel.',
      ],
      exemple:
        'Atelier Léman : les batteries viennent de deux fournisseurs asiatiques et de personne d’autre ; la présence en ligne est quasi nulle ; personne dans l’entreprise n’a jamais géré un contrat d’abonnement. Trois faiblesses, trois chantiers chiffrables.',
      piege:
        'Confondre faiblesse et menace. « Les marques low-cost cassent les prix » se passe dehors : c’est une menace. La faiblesse, c’est « nos coûts fixes nous interdisent de suivre ces prix ».',
      reflexe:
        'Commencer la ligne par « nous ». Si la phrase parle du marché, du canton ou des concurrents, elle descend d’une case.',
      notions: ['faiblesse', 'ressources', 'chaine-de-valeur', 'developpement-technologique', 'diagnostic-interne'],
    },
    {
      id: 'opportunites',
      libelle: 'OPPORTUNITÉS — externe, positif',
      cestQuoi:
        'Une évolution du dehors dont l’entreprise pourrait profiter si elle décide de la saisir. Elle existe sans elle : le canton subventionnerait la mobilité douce même si Atelier Léman n’avait jamais ouvert. 📘',
      question:
        'Qu’est-ce qui bouge dehors et pourrait nous servir — et avons-nous de quoi le saisir ?',
      quoiMettre: [
        'Un facteur PESTEL favorable : subvention publique, sensibilité écologique croissante, norme qui décourage des concurrents.',
        'Une force de Porter qui s’affaiblit : clients moins concentrés, substitut moins crédible, barrière à l’entrée qui monte contre les autres.',
        'Un besoin non servi chez un segment de clients : les entreprises qui veulent des vélos sans vouloir les gérer.',
        'Un partenaire devenu disponible : un fournisseur européen, une commune, un assureur, un loueur.',
        'Une échéance, toujours : « d’ici 2027 », « tant que la subvention existe ». Une opportunité sans date n’est pas actionnable.',
      ],
      exemple:
        'Atelier Léman : la Ville de Genève multiplie les subventions à la mobilité douce et les entreprises cherchent à verdir les déplacements de leurs employés. 🔎 Chiffre illustratif : une aide couvrant 30 % du prix change entièrement le calcul d’une flotte de vélos à 2 600 CHF pièce.',
      piege:
        'Écrire une opportunité qu’on n’a pas les moyens de saisir. Une opportunité n’en est une que pour une entreprise capable de la prendre : sans trésorerie pour financer une flotte, la subvention est une opportunité… pour le concurrent.',
      reflexe:
        'Ajouter mentalement « pour nous, à condition de… ». Si la condition est hors de portée, la ligne se relit comme une menace, parce qu’un autre la saisira.',
      notions: ['opportunite', 'pestel', 'porter-five-forces', 'diagnostic-externe'],
    },
    {
      id: 'menaces',
      libelle: 'MENACES — externe, négatif',
      cestQuoi:
        'Une évolution du dehors qui peut dégrader la position ou la rentabilité de l’entreprise. Elle ne se décide pas : on l’anticipe, on l’absorbe, parfois on l’influence par le lobbying — on ne la supprime jamais. 📘',
      question: 'Qu’est-ce qui, dehors, peut nous faire mal — et à quelle échéance ?',
      quoiMettre: [
        'Une force de Porter qui se renforce : rivalité, pouvoir des fournisseurs, pouvoir des clients, nouveaux entrants, substituts.',
        'Un facteur PESTEL défavorable : réglementation coûteuse, taux de change, changement d’habitudes de consommation.',
        'Un déplacement des facteurs clés de succès : ce qu’il fallait maîtriser hier ne suffit plus pour réussir dans le secteur.',
        'L’État comme sixième force, quand il change les règles du jeu plutôt que de subir le marché.',
        'Un chiffre et une date : « −8 % de ventes sur deux ans », « la directive s’applique en 2027 ». Sans gravité ni échéance, on ne peut pas hiérarchiser.',
      ],
      exemple:
        'Atelier Léman : des marques en ligne vendent des vélos électriques nettement moins cher, deux fournisseurs asiatiques tiennent les batteries et peuvent relever leurs prix quand ils veulent, et les transports publics genevois restent un substitut très crédible.',
      piege:
        'Empiler dix menaces au même niveau. Une liste non hiérarchisée n’est pas un diagnostic, c’est de l’inquiétude — et elle rend le croisement impossible, puisqu’on ne sait plus quoi croiser.',
      reflexe:
        'Noter chaque menace sur deux critères — gravité si elle se réalise, échéance — puis n’en garder que trois.',
      notions: ['menace', 'porter-five-forces', 'pestel', 'etat-sixieme-force', 'facteurs-cles-succes'],
    },
  ],

  methode: [
    {
      titre: '1. Délimiter avant d’écrire quoi que ce soit',
      detail:
        'En haut de la feuille : quelle entreprise, quel domaine d’activité, quelle date. Un domaine d’activité stratégique est une activité homogène, avec ses propres concurrents et ses propres facteurs clés de succès. Chez Atelier Léman il y en a deux — vente de vélos, position faible ; réparation et service, position forte — et ils ne donnent pas le même tableau.',
      aEviter:
        'Faire « le SWOT de l’entreprise » quand elle exerce deux métiers différents : les cases finissent par se contredire et plus rien ne se croise.',
    },
    {
      titre: '2. Récolter, ne rien inventer',
      detail:
        'Le SWOT ne produit aucune information : il recopie. PESTEL et Porter remplissent Opportunités et Menaces ; ressources, compétences et chaîne de valeur remplissent Forces et Faiblesses. Chaque ligne doit pouvoir être rattachée à un outil et à un fait observable.',
      aEviter:
        'Remplir de tête. Un SWOT écrit sans diagnostic en amont est une opinion déguisée en outil, et ça se voit tout de suite : les cases contiennent des généralités comme « bonne équipe » ou « marché difficile ».',
    },
    {
      titre: '3. Trier avec une seule question',
      detail:
        'Pour chaque élément : « est-ce que cela existerait sans mon entreprise ? » Oui → externe, donc opportunité ou menace. Cela ne concerne qu’elle → interne, donc force ou faiblesse. C’est seulement une fois l’origine tranchée qu’on décide du signe, positif ou négatif.',
      aEviter:
        'Trier d’abord sur positif/négatif. C’est l’origine qui départage, pas le signe — et c’est là que se glisse la confusion force/opportunité, l’erreur la plus coûteuse de l’étape.',
    },
    {
      titre: '4. Hiérarchiser : trois éléments par case',
      detail:
        'Marque chaque ligne majeure 🔴, secondaire 🟠 ou mineure 🟡, puis ne garde que trois majeures par case. La raison n’est pas cosmétique : on va croiser les éléments majeurs entre eux, et croiser une force mineure avec une opportunité mineure produit une option sans intérêt.',
      aEviter:
        'Garder une ligne parce qu’elle est vraie. La question n’est pas « est-ce vrai ? » mais « est-ce structurant ? ».',
    },
    {
      titre: '5. Croiser interne × externe et écrire quatre phrases d’action 🔎',
      detail:
        'Prends les éléments majeurs deux à deux, toujours un du haut avec un du bas. F × O, le levier : comment cette force nous permet-elle de saisir cette opportunité ? — cela donne une direction de croissance, une offensive. F × M, la défense : comment cette force nous protège-t-elle de cette menace ? — cela donne un argumentaire. f × O, le chantier : que faut-il corriger pour ne pas rater cette opportunité ? — cela donne un plan d’action interne. f × M, le risque majeur : où sommes-nous le plus exposés ? — cela donne une alerte, souvent la ligne la plus importante de toute l’analyse, parce qu’une faiblesse qui rencontre une menace fait plus de dégâts que la somme des deux.',
      aEviter:
        'Croiser interne × interne (« notre atelier et notre réputation ») : deux forces additionnées restent une force, aucune information nouvelle n’en sort. Et ne saute jamais f × M parce qu’il est désagréable à écrire.',
    },
    {
      titre: '6. Nommer deux ou trois enjeux, dont une tension ⚖️',
      detail:
        'Un enjeu est une question stratégique ouverte que le croisement fait apparaître — « sur quel domaine jouer notre avenir ? ». Un enjeu au moins doit être une tension : deux termes également légitimes et incompatibles à court terme, par exemple « accepter de vendre moins de vélos pour gagner des revenus récurrents ? ». Nommer une tension à l’oral montre qu’on cherche un arbitrage et pas une bonne réponse.',
      aEviter:
        'Formuler l’enjeu comme une réponse déjà choisie. « Il faut lancer l’abonnement » n’est pas un enjeu, c’est une conclusion sortie trop tôt.',
    },
    {
      titre: '7. Sortir deux ou trois options comparables',
      detail:
        'Une option stratégique est une réponse complète et cohérente à l’enjeu central, qui engage l’entreprise dans une direction. Trois critères : distinctes, elles mènent à des situations différentes ; réalistes, aucune n’est un épouvantail ; comparables, on peut les décrire sur les mêmes lignes — ce qu’elles exploitent, ce qu’elles ignorent, leur risque principal, leur réversibilité — puis les passer au même SAF.',
      aEviter:
        'N’en produire qu’une : le SAF n’a alors rien à comparer et la recommandation paraît arbitraire. Ou en produire trois dont deux sont ridicules : le jury voit immédiatement que la conclusion était écrite d’avance.',
    },
  ],

  liens: [
    {
      vers: 'pestel',
      nature: 'alimente',
      explication:
        'Sens de lecture PESTEL → SWOT : un facteur PESTEL ne reste pas macro, il vient s’écrire en opportunité ou en menace. Si une ligne de la moitié basse du tableau ne vient ni du PESTEL ni de Porter, c’est qu’elle a été inventée.',
    },
    {
      vers: 'porter',
      nature: 'alimente',
      explication:
        'Sens de lecture Porter → SWOT : une force du secteur qui se renforce devient une menace, une force qui s’affaiblit devient une opportunité. Porter dit l’intensité, le SWOT dit ce qu’elle nous fait.',
    },
    {
      vers: 'ressources-competences',
      nature: 'alimente',
      explication:
        'Sens de lecture ressources et compétences → SWOT : une ressource rare et difficile à imiter s’écrit en force, une compétence non détenue s’écrit en faiblesse. Sans ce passage, les forces ne sont plus que des adjectifs flatteurs.',
    },
    {
      vers: 'saf',
      nature: 'alimente',
      explication:
        'Le SWOT ne choisit rien : il produit des enjeux, puis deux ou trois options — et c’est le SAF qui les départage sur souhaitabilité, acceptabilité et faisabilité.',
    },
    {
      vers: 'ocean-bleu-erac',
      nature: 'prolonge',
      explication:
        'Quand le croisement F × M conclut qu’on ne gagnera pas la guerre des prix, l’ERAC prolonge le SWOT : au lieu de défendre l’offre existante sur le terrain du concurrent, on la redessine.',
    },
  ],

  pieges: [
    {
      titre: 'Le SWOT rempli de tête',
      explication:
        'Écrit avant les diagnostics, il ne contient que des généralités — « bonne équipe », « marché difficile ». Le correcteur le repère en trois secondes : aucune ligne ne renvoie à un outil ni à un fait.',
      reflexe:
        'Devant chaque ligne, dire d’où elle vient : « Porter, pouvoir des fournisseurs » ou « PESTEL, politique ». Une ligne sans provenance se supprime.',
    },
    {
      titre: 'Le facteur clé de succès rangé dans les forces',
      explication:
        '« La compétence technique est essentielle dans la réparation » décrit ce que le secteur exige de tout le monde : c’est un facteur clé de succès, donc externe. Ce n’est pas un détail, c’est une confusion de niveau — l’entreprise prise pour l’industrie.',
      reflexe:
        'Transformer en écart : « nous détenons cette compétence, contrairement aux ateliers de quartier ». Là, et seulement là, c’est une force.',
    },
    {
      titre: 'S’arrêter aux quatre cases',
      explication:
        'Le tableau range, il ne conclut pas. Sans croisement, aucun enjeu n’en sort ; sans enjeu, aucune option ; sans option, rien à recommander. C’est la faute qui coûte le plus cher à l’oral, parce qu’elle transforme une analyse en inventaire.',
      reflexe:
        'Terminer systématiquement par « ce SWOT fait apparaître trois enjeux : … », après avoir écrit une phrase d’action par croisement.',
    },
    {
      titre: 'Croiser interne × interne',
      explication:
        '« Notre atelier et notre réputation » n’est pas un croisement : deux forces additionnées restent une force. Le croisement ne produit d’information que s’il met en présence quelque chose qu’on contrôle et quelque chose qu’on subit.',
      reflexe:
        'Vérifier que chaque croisement a un pied dans la moitié haute du tableau et un pied dans la moitié basse.',
    },
    {
      titre: 'Oublier le quadrant f × M',
      explication:
        'C’est le plus désagréable à écrire, donc le plus souvent sauté — et c’est presque toujours celui qui contient le vrai risque. Chez Atelier Léman : deux fournisseurs qui peuvent relever leurs prix pendant que les marques en ligne cassent les leurs. Aucune des quatre cases prise isolément ne montrait cette tenaille.',
      reflexe:
        'Écrire les quatre croisements dans l’ordre F × O, F × M, f × O, f × M, et ne considérer l’étape terminée qu’avec les quatre remplis.',
    },
  ],

  variantes: [
    {
      sujet: 'Statut du croisement : cours ou raisonnement personnel ?',
      formulations: [
        {
          texte:
            '« Le croisement doit toujours faire intervenir interne × externe » — présenté comme du contenu de cours 📘.',
          source: 'Fiche de méthode P06 — Étape 4, du SWOT aux options',
        },
        {
          texte:
            '« Le croisement systématique (matrice TOWS : SO/ST/WO/WT) n’est pas présenté dans les supports ; le cours reste au niveau de la vision synthétique qui permet de définir des objectifs stratégiques » 📚.',
          source: 'Encyclopédie STRAT, fiche SWOT — limites',
        },
      ],
      consigne:
        'Croise quand même, c’est ce qui fait la différence à l’oral — mais annonce-le comme ton raisonnement : « le cours en reste à la vision synthétique ; je pousse le raisonnement en croisant interne × externe ». Citer le nom TOWS est un bonus, jamais une obligation.',
    },
    {
      sujet: 'Portée du mot « diagnostic »',
      formulations: [
        { texte: '« Diagnostic » désigne le diagnostic externe seul.', source: 'Cours 2' },
        { texte: '« Diagnostic » désigne l’ensemble, interne et externe.', source: 'Cours 4, slide 2' },
      ],
      consigne:
        'Lis toujours le contexte. Quand on dit que le SWOT « contient les résultats du diagnostic », c’est l’acception large du Cours 4. Signaler la double acception en passant vaut des points.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman — le SWOT une fois les deux diagnostics posés',
    situation:
      'PME genevoise, 45 salariés, 6,2 M CHF de chiffre d’affaires, ventes en recul de 8 % sur deux ans. Le PESTEL a repéré les subventions genevoises à la mobilité douce ; Porter a montré un pouvoir fort des deux fournisseurs de batteries et une rivalité qui s’intensifie sur la vente ; le diagnostic interne a mis en avant l’atelier et la réputation, et pointé l’absence de présence en ligne. Reste à ranger tout ça, puis à croiser. Deux domaines : vente de vélos, position faible ; réparation et service, position forte.',
    deroule: [
      {
        etiquette: 'Forces — 3 au maximum',
        contenu:
          '🔴 Atelier toutes marques, diagnostic batterie en 20 min · 🔴 Réputation locale depuis 15 ans · 🟠 Équipe stable et formée.',
      },
      {
        etiquette: 'Faiblesses — 3 au maximum',
        contenu:
          '🔴 Batteries chez deux fournisseurs asiatiques et personne d’autre · 🟠 Présence en ligne quasi nulle · 🟡 Aucun développement technologique interne.',
      },
      {
        etiquette: 'Opportunités — 3 au maximum',
        contenu:
          '🔴 Subventions cantonales et communales à la mobilité douce · 🟠 Entreprises genevoises qui veulent verdir les déplacements de leurs employés · 🟡 Normes DEEE qui relèvent la barrière à l’entrée.',
      },
      {
        etiquette: 'Menaces — 3 au maximum',
        contenu:
          '🔴 Marques low-cost en ligne sur le domaine vente · 🔴 Pouvoir des deux fournisseurs de batteries · 🟠 Transports publics et scooters partagés comme substituts.',
      },
      {
        etiquette: 'F × O — levier',
        contenu:
          'L’atelier et la réputation permettent d’aller chercher la subvention autrement qu’en vendant un vélo : un abonnement mobilité tout compris pour les entreprises genevoises, où l’entretien devient le cœur de l’offre au lieu d’être un après-vente.',
      },
      {
        etiquette: 'F × M — défense',
        contenu:
          'Contre les marques en ligne, sortir du terrain du prix : ce qu’elles ne livreront jamais avec le colis, c’est une intervention en 24 h à Carouge ou à Plainpalais.',
      },
      {
        etiquette: 'f × O — chantier',
        contenu:
          'Avant d’immobiliser une flotte, sécuriser les batteries : un second fournisseur européen, un stock tampon, ou des pièces standardisées. Sans ce chantier, l’opportunité reste théorique.',
      },
      {
        etiquette: 'f × M — risque majeur ⚠️',
        contenu:
          'Si les fournisseurs relèvent leurs prix pendant que les marques en ligne cassent les leurs, la marge est prise en tenaille des deux côtés. 🔎 Chiffres illustratifs : un vélo vendu 2 600 CHF pour 1 400 CHF de coût laisse 1 200 CHF ; avec +15 % d’achat et −10 % de prix, il ne reste que 730 CHF, soit près de 40 % de marge en moins.',
      },
    ],
    conclusion:
      'Le tableau seul ne disait rien de neuf : ce sont les croisements qui ont fait apparaître trois enjeux — sur quel domaine jouer l’avenir, comment sortir de la dépendance batteries avant de s’engager, et ⚖️ la tension « accepter de vendre moins de vélos pour gagner des revenus récurrents ? ». De là sortent trois options comparables : A consolider la vente, B hybride (vente aux particuliers plus abonnement B2B lancé en pilote), C basculer vers l’opérateur de mobilité d’entreprise. Le SAF les départagera — c’est l’option B, un pilote de 40 vélos chez 6 entreprises genevoises sur 12 mois, qui sera retenue en fin de parcours.',
  },

  phraseOral:
    'Ce SWOT ne m’apprend rien tant que je ne le croise pas : ma force atelier face à la subvention cantonale ouvre un abonnement mobilité, mais ma dépendance aux deux fournisseurs de batteries face aux marques low-cost prend ma marge en tenaille — et c’est ce croisement-là, pas le tableau, qui me dit quelle question je dois trancher.',

  aRetenir: [
    {
      cle: 'Le SWOT en un mot',
      valeur:
        'Une vision synthétique 📘 : il ne produit rien, il range ce que le PESTEL, Porter, les ressources, les compétences et la chaîne de valeur ont produit.',
    },
    {
      cle: 'Le test de tri',
      valeur:
        '« Est-ce que cela existerait sans mon entreprise ? » Oui → externe (opportunité ou menace). Non → interne (force ou faiblesse).',
    },
    { cle: 'Le mémo', valeur: 'DEDANS = forces et faiblesses. DEHORS = opportunités et menaces.' },
    {
      cle: 'Le piège de niveau',
      valeur:
        'Un facteur clé de succès décrit ce que le secteur exige de tous : il est externe, jamais une force.',
    },
    {
      cle: 'La règle du croisement 🔎',
      valeur: 'Toujours interne × externe. Interne × interne ne produit aucune information nouvelle.',
    },
    {
      cle: 'Les quatre croisements',
      valeur:
        'F × O levier, offensive · F × M défense, argumentaire · f × O chantier, plan d’action interne · f × M risque majeur, alerte.',
    },
    {
      cle: 'Le quadrant qui rapporte',
      valeur:
        'f × M : une faiblesse qui rencontre une menace fait plus de dégâts que la somme des deux — et aucune case isolée ne le montre.',
    },
    {
      cle: 'Le format du livrable',
      valeur:
        'Trois éléments majeurs par case · quatre croisements écrits en phrases d’action · deux ou trois enjeux dont une tension ⚖️ · deux ou trois options distinctes, réalistes, comparables.',
    },
    { cle: 'Ce qui vient après', valeur: 'Les options passent au SAF : souhaitable, acceptable, faisable.' },
  ],

  notions: [
    'swot',
    'force',
    'faiblesse',
    'opportunite',
    'menace',
    'croisements-swot',
    'diagnostic-strategique',
    'diagnostic-interne',
    'diagnostic-externe',
    'facteurs-cles-succes',
    'das',
    'options-strategiques',
    'tensions-strategiques',
    'saf',
    'pestel',
    'porter-five-forces',
  ],
}
