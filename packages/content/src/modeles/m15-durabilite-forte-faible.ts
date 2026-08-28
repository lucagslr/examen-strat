import type { Modele } from './types'

export const modele: Modele = {
  id: 'durabilite-forte-faible',
  numero: 15,
  slug: 'durabilite-forte-faible',
  nom: 'Durabilité forte vs durabilité faible',
  sousTitre: 'Le capital naturel est-il substituable ?',
  famille: 'durabilite',
  etape: 'transverse',

  question:
    'Quand une entreprise abîme un morceau de nature, peut-elle le remplacer par autre chose — de l’argent, une machine, un certificat — ou faut-il préserver ce morceau-là, lui et pas un autre ?',

  enUnePhrase:
    'Toute la distinction tient dans un seul mot, substituable : la durabilité faible répond oui, les différentes formes de capital s’échangent et il suffit de compenser ; la durabilité forte répond non, le capital naturel est la condition de base de tout le reste — et 📘 le cours défend explicitement la seconde.',

  produit:
    'Une position affichée, et surtout ses conséquences concrètes : l’ordre des actions (éviter, réduire, puis seulement compenser) et le type d’indicateur retenu (une valeur absolue plutôt qu’un ratio par unité). C’est ce couple ordre + indicateur qui se réutilise ensuite dans le BMC durable et dans les KPI de la recommandation.',

  quandUtiliser: [
    'Dès qu’un énoncé contient le mot « compenser », l’expression « neutre en carbone », un pourcentage d’amélioration « par unité » ou un label acheté : ce sont les signatures de la durabilité faible, et il faut les nommer.',
    'Quand on vous demande de trancher entre deux plans d’action durables qui contiennent les mêmes mesures techniques : la différence n’est jamais dans les mesures, elle est dans la contrainte qu’on se donne.',
    'Quand il faut justifier pourquoi un gain d’efficacité ne suffit pas — c’est le fondement théorique de la sobriété et de l’ordre des 3R.',
    'En ouverture du volet durabilité, pour poser le cadre en deux phrases avant d’entrer dans le donut, le wedding cake ou le BMC durable : ces trois-là supposent la position forte sans toujours la dire.',
    'Quand une question porte sur les indicateurs : choisir une intensité plutôt qu’un absolu, c’est adopter la position faible sans l’avoir annoncé.',
  ],

  quandNePasUtiliser: [
    'Pour faire le diagnostic externe à la place du PESTEL : ce schéma ne recense aucun facteur, il arbitre une manière de les traiter.',
    'Pour trancher une décision stratégique complète : il fixe une contrainte, il ne compare pas des options. C’est le SAF qui note, et le RCOV qui vérifie que le modèle tient.',
    'Pour disqualifier d’un mot toute mesure de compensation : la position forte ne l’interdit pas, elle la déclasse au rang de second choix, pour le résiduel.',
    'Comme argument moral isolé. Sorti sans conséquence opérationnelle — indicateur, ordre des actions, plafond chiffré — il ne rapporte rien à l’oral.',
  ],

  schema: {
    h: 840,
    description:
      'Une question unique — le capital naturel est-il substituable — se sépare en deux colonnes : à gauche la durabilité forte, la nature comme socle, puis éviter et réduire en valeur absolue ; à droite la durabilité faible, trois capitaux interchangeables, puis optimiser et compenser en suivant une intensité ; les deux colonnes redescendent vers une case unique, la position retenue par le cours.',
    noeuds: [
      {
        id: 'question',
        titre: 'CAPITAL NATUREL SUBSTITUABLE ?',
        lignes: ['peut-on remplacer la nature', 'par de l’argent ou des machines ?'],
        x: 290,
        y: 40,
        l: 420,
        h: 110,
        ton: 'accent',
        point: 'question',
      },
      {
        id: 'forte',
        titre: 'DURABILITÉ FORTE',
        lignes: ['NON — il n’est pas substituable', '📘 la position du cours'],
        x: 40,
        y: 200,
        l: 420,
        h: 110,
        ton: 'positif',
        point: 'forte',
      },
      {
        id: 'faible',
        titre: 'DURABILITÉ FAIBLE',
        lignes: ['OUI — en partie, contre du', 'capital ou de la technique 📚'],
        x: 540,
        y: 200,
        l: 420,
        h: 110,
        ton: 'alerte',
        point: 'faible',
      },
      {
        id: 'nature-socle',
        titre: 'LA NATURE EST LE SOCLE',
        lignes: ['biosphère ⊃ société ⊃ économie', 'aucun étage ne remplace l’autre'],
        x: 40,
        y: 360,
        l: 420,
        h: 110,
        point: 'nature-socle',
      },
      {
        id: 'trois-capitaux',
        titre: 'NATURE ↔ TECHNIQUE ↔ CAPITAL',
        lignes: ['trois capitaux interchangeables', 'seul le total compte'],
        x: 540,
        y: 360,
        l: 420,
        h: 110,
        point: 'trois-capitaux',
      },
      {
        id: 'eviter',
        titre: 'ÉVITER, PUIS RÉDUIRE',
        lignes: ['on suit un chiffre ABSOLU', 'tonnes de CO₂ totales'],
        x: 40,
        y: 520,
        l: 420,
        h: 110,
        ton: 'positif',
        point: 'eviter',
      },
      {
        id: 'compenser',
        titre: 'OPTIMISER, PUIS COMPENSER',
        lignes: ['on suit une INTENSITÉ', 'kg de CO₂ par vélo vendu'],
        x: 540,
        y: 520,
        l: 420,
        h: 110,
        ton: 'alerte',
        point: 'compenser',
      },
      {
        id: 'position',
        titre: 'CE QUE LE COURS RETIENT 📘',
        lignes: ['la durabilité FORTE', 'il ne définit pas la faible'],
        x: 290,
        y: 690,
        l: 420,
        h: 110,
        ton: 'accent',
        point: 'position',
      },
    ],
    liens: [
      { de: 'question', vers: 'forte', libelle: 'non', depuis: 'bas', arrive: 'haut', coude: 'v-h' },
      { de: 'question', vers: 'faible', libelle: 'oui', depuis: 'bas', arrive: 'haut', coude: 'v-h' },
      { de: 'forte', vers: 'nature-socle' },
      { de: 'faible', vers: 'trois-capitaux' },
      { de: 'nature-socle', vers: 'eviter' },
      { de: 'trois-capitaux', vers: 'compenser' },
      { de: 'eviter', vers: 'position', ton: 'positif', depuis: 'bas', arrive: 'haut', coude: 'v-h' },
      {
        de: 'compenser',
        vers: 'position',
        libelle: 'non retenue',
        trait: 'pointille',
        depuis: 'bas',
        arrive: 'haut',
        coude: 'v-h',
      },
    ],
    note:
      '⚠️ Le cours ne définit que la colonne de gauche. La colonne de droite est reconstruite par opposition (📚 hors cours) — dis-le à l’oral, c’est une information sur le cours, pas un trou dans ta réponse.',
  },

  points: [
    {
      id: 'question',
      libelle: 'Le test — substituable, oui ou non ?',
      cestQuoi:
        'La case de départ tient dans un seul mot : substituable. Substituer, c’est remplacer une chose par une autre sans que l’ensemble ait perdu quoi que ce soit — échanger un billet de vingt francs contre deux billets de dix ne lèse personne. La question du schéma applique ce mot au capital naturel, c’est-à-dire au stock de ressources et de services rendus par les écosystèmes : l’eau d’une nappe, un sol, un climat stable, des espèces, un gisement de métal. Répondre oui ouvre toute la colonne de droite, répondre non toute celle de gauche. Rien d’autre ne sépare les deux positions.',
      question:
        'Si cette activité détruit un morceau précis de nature, peut-on le remplacer par autre chose — une somme d’argent, un procédé, une forêt plantée ailleurs — sans que le total ait baissé ?',
      quoiMettre: [
        'Le capital naturel en jeu, nommé au singulier et au concret : pas « l’environnement », mais l’eau d’une nappe, un hectare de sol, le lithium d’un gisement, une tonne de CO₂ dans l’atmosphère.',
        'Ce qu’on propose de mettre à la place : un certificat carbone, un procédé plus efficace, un versement à un fonds de restauration, un matériau recyclé, un label.',
        'Le test de réversibilité : si l’échange tourne mal, peut-on revenir en arrière ? Une espèce éteinte ne revient pas, un climat basculé ne se rebascule pas.',
        'Les mots de l’énoncé qui trahissent un « oui » non assumé : « compensé », « neutre en carbone », « −15 % par unité », « nous finançons en contrepartie », « nous rendons à la nature ».',
        '📘 Le mot exact du cours est « substituable ». C’est celui qu’on attend à l’oral — « remplaçable » ou « échangeable » font perdre le point.',
      ],
      exemple:
        'Chez Atelier Léman, le capital naturel en jeu n’est pas « l’écologie du vélo » : c’est le lithium et le cobalt d’un gisement précis, l’eau et les sols des sites d’extraction chez les deux fournisseurs asiatiques, et la tonne de CO₂ du transport longue distance. Ce qu’on propose de mettre à la place, c’est un certificat climat acheté à Genève. La question devient donc parfaitement concrète : un certificat acheté à Genève reconstitue-t-il une nappe polluée à 9 000 kilomètres ?',
      piege:
        'Poser la question sur « l’environnement » en général. Personne ne peut y répondre : l’environnement n’est ni substituable ni non substituable, ce n’est pas un objet, c’est une catégorie.',
      reflexe:
        'Descendre au stock précis avant de trancher. Une phrase de la forme « la ressource X, détruite ici, est-elle remplaçable par Y ? » — si tu ne peux pas remplir X et Y, tu n’as pas encore de question.',
      notions: ['capital-naturel', 'durabilite', 'limites-planetaires'],
    },
    {
      id: 'forte',
      libelle: 'DURABILITÉ FORTE — la réponse « non » 📘',
      cestQuoi:
        'La position que le cours définit et retient. 📘 Définition exacte, slide 10 : « La durabilité forte considère le capital naturel comme non substituable par d’autres formes de capital (économique, social) et qui priorise la préservation des écosystèmes et des limites planétaires comme conditions de base à l’existence de toute vie humaine et activité économique. » Chaque groupe de mots de cette phrase porte un argument distinct — c’est pour ça qu’il vaut la peine de la citer plutôt que de la résumer.',
      question:
        'Est-ce que je traite les écosystèmes comme la condition de mon activité, ou comme une ressource parmi d’autres, à arbitrer contre les autres ?',
      quoiMettre: [
        '« capital naturel » : la nature est traitée comme un stock qu’on peut entamer et épuiser, pas comme un décor stable.',
        '« non substituable » : le cœur de la définition. Aucune somme, aucune machine ne rachète une nappe polluée ni une espèce disparue.',
        '« priorise » : il y a une hiérarchie entre les formes de capital, pas un équilibre à trois branches.',
        '« conditions de base » : ce n’est pas un facteur parmi d’autres, c’est le préalable — ce qui doit être vrai avant que le reste existe.',
        '« de toute vie humaine et activité économique » : l’économie est dedans, pas à côté. La contrainte écologique n’est pas extérieure à l’entreprise.',
        'Les trois arguments qui la soutiennent : l’irréversibilité (ce qui est détruit ne revient pas), l’interdépendance (📘 « tout est lié » — dépasser une limite planétaire en déplace d’autres), et la hiérarchie logique : sans biosphère pas de société, sans société pas d’économie.',
      ],
      exemple:
        'Appliqué à Atelier Léman : la marque, les deux ateliers, les mécaniciens très qualifiés sont du capital économique et humain — ils se reconstruisent, se rachètent, se forment. Le gisement de lithium entamé et la nappe polluée, non. Dire cela ne condamne pas l’entreprise : cela dit seulement que sa marge de manœuvre est du côté du nombre de batteries qu’elle met en circulation, pas du côté de ce qu’elle verse en contrepartie.',
      piege:
        'Réciter la définition sans en tirer une conséquence. « Le capital naturel est non substituable » suivi d’un silence ne prouve rien : c’est une phrase apprise, pas un raisonnement.',
      reflexe:
        'Enchaîner immédiatement sur la conséquence opérationnelle : « donc la compensation et les gains d’efficacité ne suffisent pas, il faut réduire en valeur absolue ». C’est cette suite-là qui montre qu’on a compris.',
      notions: ['durabilite-forte', 'capital-naturel', 'limites-planetaires', 'wedding-cake'],
    },
    {
      id: 'faible',
      libelle: 'DURABILITÉ FAIBLE — la réponse « oui » 📚',
      cestQuoi:
        '⚠️ Attention au statut de cette case : le cours ne définit pas la durabilité faible. Il définit la forte et laisse la faible se déduire par opposition. 📚 Complément théorique, à présenter comme tel : la durabilité faible pose que les différentes formes de capital sont substituables — on peut détruire du capital naturel si l’on crée en compensation assez de capital économique ou technique. Ce n’est pas une position absurde ni malhonnête : c’est une position, avec un raisonnement qu’il faut savoir exposer avant de le discuter.',
      question:
        'Ce qui est proposé maintient-il vraiment le capital total — ou seulement le compte que l’entreprise préfère montrer ?',
      quoiMettre: [
        'La thèse : ce qui compte est le capital total (naturel + technique + humain + financier), pas chaque poste pris séparément.',
        'Le corollaire : une perte naturelle est acceptable dès qu’un gain technique ou financier au moins équivalent la couvre.',
        'L’argument historique qu’il faut citer avant de discuter, sinon on caricature : le charbon a remplacé le bois de chauffage et a épargné les forêts d’Europe. La substitution a parfois fonctionné.',
        'Ses formes courantes en entreprise : compensation carbone, gains d’efficacité annoncés par unité, fonds de restauration, labels achetés, « neutralité » revendiquée.',
        '⚠️ Son statut dans le cours : non définie. Le dire à l’oral est un point gagné — cela montre qu’on a repéré que le cours prend parti, au lieu de croire qu’il a oublié une définition.',
      ],
      exemple:
        'L’offre que l’agence fait à Atelier Léman est une application intégrale de la position faible, sans que le mot soit prononcé : acheter des certificats climat couvrant les émissions de chaque batterie, passer à un modèle 15 % plus efficient, et communiquer sur un « vélo neutre en carbone ». Le raisonnement sous-jacent est celui du capital total : ce qui est retiré à l’atmosphère d’un côté est remis de l’autre, donc rien n’a bougé.',
      piege:
        'La présenter comme du contenu de cours, ou à l’inverse comme une escroquerie. Les deux erreurs coûtent : la première est fausse sur la source, la seconde empêche de montrer qu’on sait discuter une position.',
      reflexe:
        'Trois temps, toujours dans cet ordre : « 📚 le cours ne la définit pas, je la reconstruis » — « voici son raisonnement, et il tient historiquement » — « voici pourquoi il échoue ici : l’irréversibilité ».',
      notions: [
        'durabilite-faible',
        'trois-cercles-elkington',
        'mickey-mouse-model',
        'developpement-durable',
      ],
    },
    {
      id: 'nature-socle',
      libelle: 'NATURE = condition de base',
      cestQuoi:
        'La forme que prend le monde une fois qu’on a répondu non : les trois dimensions ne sont plus côte à côte mais emboîtées, l’économie dans la société, la société dans la biosphère. C’est ce que dessine le wedding cake du Stockholm Resilience Centre, et c’est ce que chiffrent les limites planétaires. Un emboîtement interdit ce qu’une juxtaposition autorise : on ne troque pas un étage contre un autre, parce que l’étage du dessous porte celui du dessus.',
      question:
        'Si cet étage-là cède, les étages du dessus tiennent-ils encore — ou tombent-ils avec lui ?',
      quoiMettre: [
        'L’emboîtement 📘 : biosphère ⊃ société ⊃ économie. La biosphère n’est pas un pilier parmi trois, c’est le socle sans lequel les deux autres n’existent pas.',
        'Les neuf limites planétaires (📘 Rockström, 2009), dont sept sont considérées comme dépassées : elles donnent au socle des seuils chiffrés, donc discutables et vérifiables.',
        '📘 « Tout est lié » : le dépassement d’une limite en déplace d’autres. On ne compense donc pas poste par poste un système dont les composants interagissent.',
        'L’irréversibilité : la substitution suppose qu’on puisse revenir en arrière ; une espèce éteinte, un sol perdu, un climat basculé l’interdisent.',
        'Ce que cette case rend indéfendable, en une phrase : « un peu moins d’environnement contre un peu plus d’économie ».',
      ],
      exemple:
        'Pour Atelier Léman, l’emboîtement se lit dans sa propre chaîne d’approvisionnement : ses ventes (économie) dépendent de la disponibilité des batteries, qui dépend de la stabilité sociale et réglementaire des régions d’extraction (société), qui dépend elle-même de l’eau et des sols de ces régions (biosphère). Une tension sur l’eau là-bas devient un problème de livraison ici, et aucune somme versée à Genève ne raccourcit ce chemin.',
      piege:
        'Traiter l’emboîtement comme une image poétique — « la nature nous entoure ». Il porte une conséquence précise et testable : l’absence d’arbitrage possible entre les étages.',
      reflexe:
        'Formuler la dépendance dans le sens de la contrainte : non pas « l’économie a besoin de la nature », mais « si l’étage du bas cède, celui du haut n’a plus de plancher ». Le mot à placer est « condition », pas « importance ».',
      notions: ['wedding-cake', 'limites-planetaires', 'plafond-ecologique', 'durabilite-forte'],
    },
    {
      id: 'trois-capitaux',
      libelle: 'NATURE ↔ TECHNIQUE ↔ CAPITAL',
      cestQuoi:
        'La forme que prend le monde une fois qu’on a répondu oui : trois capitaux placés sur le même plan, reliés par des flèches à double sens, donc échangeables. Ce dessin existe dans le cours sous un nom précis — 📘 les 3 cercles du développement durable (Elkington, 1997), qui placent économique, social et environnemental à égalité, la durabilité se trouvant à leur intersection. Ce sont ces flèches à double sens qui font toute la durabilité faible : enlève-les, la colonne s’effondre.',
      question:
        'Ce schéma met-il les trois dimensions côte à côte, ou l’une dans l’autre ? La réponse décide de tout le reste.',
      quoiMettre: [
        '📘 Les 3 cercles du DD (Elkington, 1997) : économique, social, environnemental, de taille égale, la durabilité à l’intersection. 📚 Elkington a forgé la même année la notion de Triple Bottom Line — « people, planet, profit ».',
        '🔎 Pourquoi c’est une image de durabilité faible : trois cercles de même taille sur le même plan suggèrent qu’on peut arbitrer entre eux, donc compenser une perte de l’un par un gain de l’autre.',
        '📘 La critique que le cours met juste après : le Mickey Mouse Model (Peet, 2009) — ce que devient le modèle en pratique, un cercle économique énorme et deux petites oreilles social et environnemental.',
        'La progression à savoir raconter en trois temps : trois cercles (1997, égalité) → caricature (2009, l’économique domine) → wedding cake (hiérarchie emboîtée). C’est exactement le passage de la durabilité faible à la durabilité forte.',
        'Les autres formes de capital, à nommer pour que « substituable » ait un sens : capital technique et financier, capital humain (compétences), capital social (liens, institutions, confiance).',
      ],
      exemple:
        'Atelier Léman fonctionne aujourd’hui sur ce dessin sans le savoir : sa réputation locale et ses mécaniciens (capital humain et social) sont réellement excellents, et l’entreprise s’en sert comme d’un contrepoids moral aux batteries opaques. C’est une substitution implicite — du capital social mis en face d’un capital naturel entamé. Elle est confortable, elle rassure la direction, et elle ne change rien au gisement.',
      piege:
        'Citer les trois cercles comme si c’était la bonne réponse du cours, parce que c’est le schéma le plus connu du développement durable et qu’on l’a vu partout ailleurs.',
      reflexe:
        'Se rappeler l’ordre dans lequel le cours les présente : il montre les trois cercles pour les critiquer, pas pour les recommander. Cite-les toujours avec leur critique attachée — Peet, 2009 — sinon tu défends la position que le cours écarte.',
      notions: [
        'trois-cercles-elkington',
        'mickey-mouse-model',
        'durabilite-faible',
        'capital-naturel',
      ],
    },
    {
      id: 'eviter',
      libelle: 'ÉVITER, PUIS RÉDUIRE — le chiffre absolu',
      cestQuoi:
        'La traduction opérationnelle de la colonne de gauche, et la partie qui rapporte des points parce que presque personne n’y descend. Si le capital naturel ne se remplace pas, alors la seule action qui compte vraiment est celle qui n’entame pas le stock : éviter d’abord, réduire ensuite, compenser en dernier et seulement le résiduel. Et l’indicateur suit : on ne mesure plus un ratio par produit, on mesure un total.',
      question:
        'Mon indicateur descend-il quand mon volume monte ? Si oui, ce n’est pas un indicateur absolu, c’est un ratio déguisé.',
      quoiMettre: [
        'L’ordre 📘 des 3R, avec la phrase que tout le monde saute : « Tout cela dépend des efforts de réduction et de réutilisation, puis enfin seulement de recyclage. »',
        'Un indicateur en valeur absolue : tonnes de CO₂ totales de l’entreprise, nombre d’unités mises sur le marché, mètres cubes d’eau prélevés. Jamais une intensité toute seule.',
        'Un plafond daté et décroissant — par exemple « −4 % par an en absolu » — plutôt qu’un pourcentage d’amélioration par unité, qui ne borne rien.',
        'La compensation, conservée mais déclassée : réservée au résiduel, annoncée comme second choix, et pas comme le cœur du plan.',
        '📘 Ce que ce n’est pas, et qu’il faut dire pour ne pas se faire piéger : une privation générale. « Le critère central n’est pas moins, mais moins de superflu, sans réduire l’essentiel. »',
      ],
      exemple:
        'Pour Atelier Léman, le passage à cette colonne change trois lignes du tableau de bord. On abandonne « kg de CO₂ par vélo vendu » au profit de deux chiffres absolus : le nombre de batteries mises en circulation dans l’année, et les tonnes de CO₂ totales, extraction comprise. Et la mesure la plus forte n’est pas un achat de certificats : c’est l’allongement de la durée de vie des vélos par l’atelier, qui fait baisser le premier chiffre sans rien acheter à personne.',
      piege:
        'Annoncer « réduire » et proposer en fait « recycler ». Le recyclage est populaire parce qu’il ne demande de renoncer à rien — c’est précisément pour ça que le cours le met en dernier.',
      reflexe:
        'Vérifier chaque mesure proposée en la classant : est-ce qu’elle évite, réduit, réutilise, recycle, ou compense ? Si le plan ne contient rien dans les deux premières colonnes, ce n’est pas un plan de durabilité forte.',
      notions: ['trois-r', 'kpi', 'durabilite-forte', 'externalite-negative'],
    },
    {
      id: 'compenser',
      libelle: 'OPTIMISER, PUIS COMPENSER — l’intensité',
      cestQuoi:
        'La traduction opérationnelle de la colonne de droite. Elle est séduisante parce qu’elle ne demande de renoncer à rien : on améliore un ratio, on achète le reste, et le chiffre communiqué s’améliore. Son point aveugle est le volume — un ratio par unité peut baisser pendant que le total monte. C’est le test pratique qui permet de reconnaître la position faible chez n’importe quelle entreprise, quels que soient ses discours : demande simplement quel indicateur elle suit.',
      question:
        'Est-ce que je réduis vraiment, ou est-ce que j’améliore un ratio pendant que le total continue de monter ?',
      quoiMettre: [
        'Les mesures typiques : crédits carbone, flotte ou machines renouvelées pour « −15 % par unité », matériau recyclé, label acheté, communication sur la neutralité.',
        'Le calcul qui les démasque, et qui tient en une ligne au brouillon : efficacité × volume. +20 % de volume avec −15 % par unité donne 1,20 × 0,85 = 1,02, soit +2 % en absolu.',
        '📘 Le nom de ce mécanisme dans le cours numérique : l’effet rebond — le gain d’efficacité est repris, en tout ou partie, par la hausse de l’usage.',
        'La frontière du greenwashing : communiquer les impacts positifs en taisant les externalités négatives, ou compenser année après année sans jamais réduire.',
        '📘 Le cours invite explicitement à la prudence sur ce terrain, via une lecture de la Fedevaco sur les conséquences des projets de compensation carbone pour les populations impactées par le changement climatique.',
      ],
      exemple:
        'Chiffrage illustratif chez Atelier Léman : la direction veut regagner les 8 % de ventes perdus et viser +20 % de vélos vendus sur trois ans, avec des batteries annoncées 15 % moins émettrices. Le tableau de bord actuel, en kg de CO₂ par vélo, affichera un progrès de 15 %. Le total, lui, fait 1,20 × 0,85 = +2 %. L’entreprise communiquera une amélioration tout en émettant davantage : c’est l’effet rebond au niveau d’une PME.',
      piege:
        'Traiter le choix de l’indicateur comme une question technique de reporting. C’est une prise de position philosophique déguisée en détail méthodologique — et c’est le meilleur endroit où la repérer.',
      reflexe:
        'Devant tout pourcentage annoncé, demander « par quoi ? ». Par unité, par produit, par employé, par franc de chiffre d’affaires : dans tous ces cas, il manque le volume, et donc le seul chiffre qui compte.',
      notions: [
        'effet-rebond',
        'greenwashing',
        'kpi',
        'externalite-negative',
        'durabilite-faible',
      ],
    },
    {
      id: 'position',
      libelle: 'Ce que le cours retient 📘',
      cestQuoi:
        'La case du bas n’est pas une conclusion morale, c’est une information d’examen. 📘 Le cours donne la définition de la durabilité forte, slide 10, et ne donne aucune définition de la faible : il prend parti, et il le fait par ce déséquilibre même. Sur une question ouverte, la position attendue est donc la forte — mais la meilleure réponse expose d’abord la faible honnêtement, puis dit pourquoi le cours ne la retient pas, et finit par ce que la position forte n’exige pas.',
      question:
        'Ai-je dit quelle position je prends, pourquoi celle-là plutôt que l’autre, et ce qu’elle n’implique pas ?',
      quoiMettre: [
        'La citation 📘, aussi près du mot à mot que possible : « non substituable par d’autres formes de capital (économique, social) […] conditions de base à l’existence de toute vie humaine et activité économique ».',
        'Le statut de l’autre colonne : 📚 non définie dans les supports, reconstruite par opposition. Le signaler vaut mieux que de faire semblant qu’elle vient du cours.',
        'Les trois arguments, dans l’ordre : irréversibilité, interdépendance (📘 « tout est lié »), hiérarchie logique.',
        'Les deux caricatures à écarter avant qu’on te les oppose : « il faudrait arrêter toute activité économique » — non, rester dans les limites ; « la technologie est inutile » — non, elle aide mais ne dispense pas d’arbitrer.',
        'Le test pratique qui clôt proprement : « quel indicateur suivez-vous, une intensité ou un absolu ? » — la réponse révèle la position réelle, quels que soient les discours.',
      ],
      exemple:
        'Formulé pour Atelier Léman : « Le cours définit la durabilité forte et pas la faible — il prend parti. Je prends donc la même position, et pour l’atelier cela signifie une chose concrète : je ne juge plus le plan à ses certificats, je le juge au nombre de batteries qu’il met en circulation. »',
      piege:
        'Rester au niveau philosophique. Une réponse qui oppose deux visions du monde sans jamais toucher un indicateur, un ordre d’actions ou un euro plafonne très vite.',
      reflexe:
        'Terminer toute réponse sur ce schéma par une conséquence chiffrable pour l’entreprise du cas. Deux phrases suffisent : quel indicateur change, quelle mesure passe en premier.',
      notions: ['durabilite-forte', 'durabilite-faible', 'durabilite'],
    },
  ],

  methode: [
    {
      titre: '1. Nommer le capital naturel réellement en jeu',
      detail:
        'Relis l’énoncé et écris une ligne : quel stock naturel précis cette activité entame-t-elle ? De l’eau, un sol, un gisement, un climat, une population d’espèces. Un seul, le plus gros, suffit pour commencer. Sans cette ligne, tout ce qui suit est du commentaire.',
      aEviter:
        'Écrire « l’environnement » ou « la planète ». Un mot qui ne désigne aucun stock ne peut pas être testé, et la question de la substituabilité devient sans objet.',
    },
    {
      titre: '2. Repérer la phrase de substitution',
      detail:
        'Cherche dans l’énoncé ce que l’entreprise propose de mettre à la place : un certificat, un procédé plus efficace, un versement, un recyclage, un label. Elle est presque toujours là, formulée en positif — « neutre en carbone », « nous compensons », « −15 % par appareil », « nous finançons la reforestation ».',
      aEviter:
        'Chercher le mot « substituable » dans le texte. Il n’y sera jamais : c’est ton mot d’analyse, pas le leur.',
    },
    {
      titre: '3. Appliquer le test de réversibilité',
      detail:
        'Une question, une réponse : ce qui est détruit revient-il ? Si oui, la substitution se discute honnêtement. Si non — et c’est le cas d’un climat, d’une espèce, d’un sol, d’une nappe — la position faible échoue sur ce cas précis, et tu peux le démontrer au lieu de l’affirmer.',
      aEviter:
        'Trancher sur l’intention de l’entreprise (« ils sont sincères », « c’est du greenwashing »). Le test porte sur la nature du stock, pas sur la moralité du dirigeant.',
    },
    {
      titre: '4. Regarder l’indicateur — c’est là que la position se trahit',
      detail:
        'Cherche le chiffre que l’entreprise suit. S’il porte un « par » — par produit, par employé, par franc de chiffre d’affaires — c’est une intensité, donc une position faible non déclarée. Pose alors le calcul efficacité × volume : c’est trente secondes de brouillon et cela transforme une opinion en démonstration.',
      aEviter:
        'Prendre le choix de l’indicateur pour un détail de reporting. C’est le point le plus opérationnel de tout le schéma.',
    },
    {
      titre: '5. Exposer la position faible avant de la discuter',
      detail:
        'Deux phrases : sa thèse (le capital total se maintient) et son meilleur argument historique (le charbon a épargné les forêts d’Europe). Puis la limite : la substitution suppose la réversibilité. Une position réfutée après avoir été exposée compte double ; une position caricaturée ne compte pas.',
      aEviter:
        'La présenter comme une malhonnêteté. Beaucoup d’entreprises l’adoptent sans le savoir, y compris celle du cas que tu traites.',
    },
    {
      titre: '6. Requalifier les mesures dans le bon ordre',
      detail:
        'Reprends chaque mesure du plan et range-la : éviter, réduire, réutiliser, recycler, compenser. Puis réécris le plan dans cet ordre. C’est souvent le moment où l’on découvre qu’un plan entier tient dans les deux dernières colonnes — et c’est cela, le diagnostic.',
      aEviter:
        'Interdire la compensation. La position forte la déclasse au rang de second choix pour le résiduel, elle ne la supprime pas.',
    },
    {
      titre: '7. Annoncer la position, et sa limite',
      detail:
        'Dis explicitement laquelle des deux tu retiens et pourquoi le cours retient la même. Puis désamorce la caricature : la durabilité forte pose un plafond, pas une privation — 📘 « moins de superflu, sans réduire l’essentiel ». Et si le donut a été vu, ajoute qu’il y a aussi un plancher social sous lequel on ne descend pas.',
      aEviter:
        'Transformer la durabilité forte en décroissance générale. C’est le contresens que l’examinateur attend, et il suffit d’une phrase pour l’éviter.',
    },
  ],

  liens: [
    {
      vers: 'wedding-cake',
      nature: 'partage',
      explication:
        'Le wedding cake est le dessin de la durabilité forte : trois étages emboîtés au lieu de trois piliers échangeables — dire l’un, c’est dire l’autre, et c’est pour ça que la biosphère y est au socle et non sur le côté.',
    },
    {
      vers: 'donut',
      nature: 'prolonge',
      explication:
        'La durabilité forte pose le plafond écologique ; le donut ajoute en dessous un plancher social sous lequel on ne descend pas — ensemble, ils délimitent l’espace où l’entreprise a le droit d’opérer.',
    },
    {
      vers: 'trois-r',
      nature: 'precise',
      explication:
        'Réduire, réutiliser, puis enfin seulement recycler : c’est la non-substituabilité traduite en ordre d’actions, et c’est exactement pourquoi « c’est recyclable » ne suffit jamais à conclure.',
    },
    {
      vers: 'effet-rebond',
      nature: 'precise',
      explication:
        'L’effet rebond est la preuve chiffrée que la position faible échoue sur ses propres termes : le gain d’efficacité est repris par la hausse du volume, et le total en valeur absolue remonte.',
    },
    {
      vers: 'bmc-durable',
      nature: 'alimente',
      explication:
        'La durabilité forte décide de ce qu’on écrit dans la case « externalités négatives » du BMC durable : 📘 le cours dit « réduire ou compenser », et la position forte impose de lire cette formule dans cet ordre-là.',
    },
  ],

  pieges: [
    {
      titre: 'Définir sans le mot « substituable »',
      explication:
        'On explique que la durabilité forte « protège davantage la nature » ou qu’elle est « plus exigeante ». C’est vrai et sans valeur : cela ne dit ni ce qui la distingue, ni ce qu’elle interdit. Le concept central est un seul mot, et il est dans la définition du cours.',
      reflexe:
        'Ouvrir par le mot : « Toute la différence tient à un mot, substituable. » Puis dérouler. La phrase suivante est déjà à moitié faite.',
    },
    {
      titre: 'Caricaturer la durabilité faible',
      explication:
        'La présenter comme du cynisme ou du greenwashing empêche de montrer qu’on sait discuter une thèse. Elle a un raisonnement — le capital total — et un précédent historique réel : la substitution du charbon au bois a épargné les forêts d’Europe.',
      reflexe:
        'Exposer d’abord, réfuter ensuite. Une position réfutée après avoir été correctement exposée vaut bien plus qu’une position moquée.',
    },
    {
      titre: 'Présenter la durabilité faible comme du contenu de cours',
      explication:
        '⚠️ Le cours ne la définit pas. Il définit la forte et laisse la faible se déduire par opposition — c’est un choix, il prend position. Attribuer au cours une définition qu’il ne donne pas est exactement le type d’erreur qu’un examinateur relève.',
      reflexe:
        'Marquer la provenance à voix haute : « 📘 le cours définit la forte ; 📚 la faible, je la reconstruis par opposition, elle n’est pas dans les supports ».',
    },
    {
      titre: 'Rester au niveau philosophique',
      explication:
        'Opposer deux visions du monde pendant deux minutes sans jamais toucher à un indicateur, à un ordre d’actions ou à un chiffre. La distinction devient alors décorative, et la note plafonne.',
      reflexe:
        'Descendre systématiquement sur trois lignes : l’indicateur (intensité ou absolu), l’ordre des 3R, le statut de la compensation. Ce sont les trois endroits où la position devient visible.',
    },
    {
      titre: 'Confondre durabilité forte et décroissance générale',
      explication:
        'Conclure « il faut donc moins de tout, arrêter de produire ». La position forte impose un plafond à ne pas franchir, pas une privation uniforme — et le donut ajoute même un plancher sous lequel il est interdit de descendre.',
      reflexe:
        'Garder en réserve la formule 📘 du cours : « Le critère central n’est pas moins, mais moins de superflu, sans réduire l’essentiel. » Une phrase, et le contresens est écarté.',
    },
  ],

  variantes: [
    {
      sujet: 'Le traitement d’une externalité négative : « ou » ou bien un ordre ?',
      formulations: [
        {
          texte:
            '« Une entreprise responsable cherche à : maximiser les impacts positifs (valeur partagée), réduire ou compenser les externalités négatives (via l’innovation, la réglementation interne, ou la compensation carbone par exemple). »',
          source: '📘 Cours Business Model durable — bloc « externalités négatives »',
        },
        {
          texte:
            '« Tout cela dépend des efforts de réduction et de réutilisation, puis enfin seulement de recyclage. »',
          source: '📘 Cours 5 — le modèle des 3R',
        },
      ],
      consigne:
        'Les deux phrases viennent du même cours et ne disent pas tout à fait la même chose. La première emploie « ou », qui met grammaticalement réduire et compenser sur le même plan : les deux voies auraient la même valeur. La seconde impose au contraire un ordre strict, et le renforce par « puis enfin seulement ». La définition de la durabilité forte tranche dans le sens de la seconde : si le capital naturel n’est pas substituable, compenser ne peut pas équivaloir à réduire. À l’oral, cite la formule exacte du BM durable — « réduire ou compenser » — puis ajoute que l’ordre des mots n’est pas neutre et que le reste du cours le confirme. Signaler la tension vaut mieux que de la gommer : c’est une lecture des supports, pas une correction.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman SA — « un vélo neutre en carbone » passé au test de substituabilité',
    situation:
      'Le volet durabilité arrive après le business model. Le BMC durable a fait remonter deux externalités négatives : l’extraction du lithium et du cobalt chez les deux fournisseurs asiatiques, et la fin de vie des batteries. Une agence propose alors à la direction une réponse simple et vendable : acheter des certificats climat couvrant les émissions de chaque batterie, passer à un modèle annoncé 15 % moins émetteur, et communiquer sur un « vélo neutre en carbone » pour reprendre les 8 % de ventes perdus. La direction trouve cela raisonnable. Ce schéma sert exactement à savoir si ça l’est.',
    deroule: [
      {
        etiquette: 'Le capital naturel en jeu',
        contenu:
          'Pas « l’écologie du vélo », mais trois stocks nommés : le lithium et le cobalt d’un gisement, l’eau et les sols des sites d’extraction, et le carbone de l’atmosphère via le transport longue distance. Trois stocks, trois questions distinctes.',
      },
      {
        etiquette: 'La phrase de substitution',
        contenu:
          '« Nous compensons les émissions de chaque batterie et nos batteries émettent 15 % de moins. » Ce qui est proposé à la place du capital naturel : un certificat acheté et un gain d’efficacité — donc du capital financier et du capital technique.',
      },
      {
        etiquette: 'Le test de réversibilité',
        contenu:
          'Le certificat compense éventuellement du carbone, à supposer que le projet financé tienne ses promesses. Il ne reconstitue ni la nappe polluée ni le gisement entamé. Sur deux des trois stocks, la substitution n’a même pas d’objet : rien n’est proposé en face.',
      },
      {
        etiquette: 'L’indicateur actuel',
        contenu:
          'Kilos de CO₂ par vélo vendu. Un ratio, donc une intensité — position faible non déclarée. Personne dans l’entreprise ne l’a choisie consciemment : c’est l’indicateur que l’agence a proposé parce qu’il s’améliore facilement.',
      },
      {
        etiquette: 'Le calcul qui tranche (chiffres illustratifs)',
        contenu:
          'Objectif de la direction : +20 % de vélos vendus sur trois ans. Gain annoncé : −15 % par batterie. Total : 1,20 × 0,85 = 1,02, soit +2 % d’émissions réelles. Le tableau de bord affichera −15 %, l’atmosphère recevra +2 %. C’est l’effet rebond.',
      },
      {
        etiquette: 'Les indicateurs de la position forte',
        contenu:
          'Deux chiffres absolus qui remplacent le ratio : le nombre de batteries mises en circulation dans l’année, et les tonnes de CO₂ totales, extraction comprise. Les deux montent quand l’activité monte — c’est précisément ce qu’on leur demande.',
      },
      {
        etiquette: 'Les mesures, remises dans l’ordre',
        contenu:
          'Éviter : ne pas ouvrir de gamme à renouvellement rapide. Réduire : allonger la durée de vie, ce que l’atelier sait déjà faire mieux que ses concurrents. Réutiliser : reconditionner les batteries en fin de première vie. Recycler : la filière, en dernier recours. Compenser : le résiduel seulement, et annoncé comme tel.',
      },
      {
        etiquette: 'L’effet sur la décision stratégique',
        contenu:
          'Le pilote d’abonnement — 40 vélos chez 6 entreprises genevoises sur 12 mois, soit 56 000 CHF de matériel immobilisé à 1 400 CHF l’unité — fait baisser le nombre de batteries en circulation à service rendu égal, parce que l’entreprise reste propriétaire et a intérêt à prolonger la vie du parc. C’est une réduction, pas une compensation.',
      },
    ],
    conclusion:
      'La conclusion n’est pas que l’agence a tort de proposer des certificats : c’est que ces certificats ne sont pas un plan, ils en sont la dernière ligne. Une fois les indicateurs passés en valeur absolue, l’option « défendre la vente de vélos avec un argument vert » et l’option « basculer vers l’abonnement » cessent d’être équivalentes : la première fait monter le nombre de batteries en circulation, la seconde le fait baisser. La durabilité forte n’a donc pas ajouté un critère moral à la décision — elle a départagé deux options que le tableau de bord précédent affichait comme comparables. Cette phrase-là part telle quelle dans la souhaitabilité du SAF.',
  },

  phraseOral:
    'Chez Atelier Léman, l’offre « vélo neutre en carbone » applique sans le dire une durabilité faible : elle admet qu’un certificat acheté à Genève remplace une nappe polluée à l’autre bout du monde, et elle se mesure en kilos de CO₂ par vélo vendu ; or 📘 le cours définit la durabilité forte, qui tient le capital naturel pour non substituable — je change donc d’abord d’indicateur, je passe aux tonnes totales et au nombre de batteries mises en circulation, et je constate alors que le pilote d’abonnement fait baisser cet absolu là où la compensation le laissait monter de 2 %.',

  aRetenir: [
    {
      cle: 'Le mot qui départage',
      valeur:
        '« Substituable ». La faible dit oui, la forte dit non. Tout le reste en découle.',
    },
    {
      cle: 'La définition 📘',
      valeur:
        'Slide 10 : « non substituable par d’autres formes de capital (économique, social) […] conditions de base à l’existence de toute vie humaine et activité économique ».',
    },
    {
      cle: 'Le statut de la faible ⚠️',
      valeur:
        'Non définie dans les supports. 📚 Reconstruite par opposition — le cours prend position par ce silence même.',
    },
    {
      cle: 'Les trois arguments',
      valeur:
        'Irréversibilité · interdépendance (📘 « tout est lié ») · hiérarchie logique biosphère → société → économie.',
    },
    {
      cle: 'Le test pratique',
      valeur:
        'Quel indicateur suit l’entreprise ? Une intensité (par unité) = position faible. Un absolu (total) = position forte.',
    },
    {
      cle: 'Le calcul de trente secondes',
      valeur:
        'Efficacité × volume. +20 % de volume et −15 % par unité font 1,20 × 0,85 = +2 % en absolu.',
    },
    {
      cle: 'L’ordre 📘',
      valeur:
        'Réduction et réutilisation, « puis enfin seulement de recyclage ». Compenser vient après tout le reste.',
    },
    {
      cle: 'Ce que ce n’est pas 📘',
      valeur:
        'Une privation générale : « Le critère central n’est pas moins, mais moins de superflu, sans réduire l’essentiel. »',
    },
    {
      cle: 'Le dessin de chaque camp',
      valeur:
        'Forte = wedding cake (étages emboîtés). Faible = 📘 les 3 cercles d’Elkington (1997), critiqués par le Mickey Mouse Model (Peet, 2009).',
    },
  ],

  notions: [
    'durabilite-forte',
    'durabilite-faible',
    'capital-naturel',
    'durabilite',
    'limites-planetaires',
    'wedding-cake',
    'trois-cercles-elkington',
    'mickey-mouse-model',
    'donut',
    'plafond-ecologique',
    'trois-r',
    'effet-rebond',
    'externalite-negative',
    'greenwashing',
    'economie-fonctionnalite',
    'kpi',
    'developpement-durable',
    'transition-ecologique',
  ],
}
