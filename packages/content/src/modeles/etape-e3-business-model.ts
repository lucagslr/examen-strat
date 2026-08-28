import type { EtapeAnalyse } from './types'

/**
 * ÉTAPE 3 — LE BUSINESS MODEL
 * ===========================
 *
 * L’étape qui manque à presque toutes les copies. Le diagnostic dit ce qui se
 * passe dehors et ce dont l’entreprise est capable ; il ne dit toujours pas
 * comment elle gagne de l’argent. Cette étape l’écrit — puis s’en sert pour
 * transformer l’option envisagée d’une intention en un système vérifiable.
 *
 * Elle consomme la sortie de l’étape 2 (ressources, compétences, chaîne de
 * valeur) et produit la phrase de faisabilité que le SAF réutilisera telle
 * quelle à l’étape 5.
 */
export const etape: EtapeAnalyse = {
  id: 'e3',
  numero: 3,
  slug: 'business-model',
  titre: 'Le business model',

  question:
    'Comment cette entreprise gagne-t-elle de l’argent, et l’option tient-elle debout ?',

  entree:
    'Les forces et les faiblesses sorties du diagnostic interne : ce qu’Atelier Léman possède, ce qu’elle sait faire, et les maillons de sa chaîne de valeur qui tiennent ou qui lâchent.',

  sortie:
    'La mécanique économique écrite noir sur blanc — qui paie, à quel rythme, ce que ça coûte et sous quelle forme — et le point précis où le modèle est fragile. Deux lignes de plus à verser dans les forces et les faiblesses avant de croiser le SWOT, et l’argument que la faisabilité du SAF réutilisera mot pour mot.',

  minutes: 'hors préparation courte',

  modeles: ['rcov', 'bmc'],

  /* --------------------------------------------------------------- Méthode */

  methode: [
    {
      titre: '1. Écrire le modèle actuel avant d’imaginer le suivant',
      detail:
        'Un business model, c’est la réponse à « qui paie, pour quoi, et qu’est-ce que ça coûte ». Commence par celui qui existe déjà, même s’il va mal — surtout s’il va mal. C’est lui l’étalon : sans point de départ, dire d’une option qu’elle « change tout » reste une impression.',
      aEviter:
        'Sauter directement au modèle envisagé. On n’a alors rien à comparer, et l’analyse se réduit à une description enthousiaste.',
    },
    {
      titre: '2. Annoncer le triptyque du cours, dans l’ordre',
      detail:
        '📘 Proposition de valeur, puis architecture de valeur, puis équation de profit. Trois mots, trois phrases : ce qu’on promet et à qui ; comment on le produit et on le livre ; ce qu’il reste après confrontation des revenus et des coûts. Annoncer cette structure avant de remplir quoi que ce soit montre qu’on sait où l’on va.',
      aEviter:
        'Réciter les neuf blocs du Canvas de 1 à 9 comme une liste de courses. La liste n’est pas une analyse, et l’ordre des numéros n’est pas l’ordre utile.',
    },
    {
      titre: '3. Formuler la proposition de valeur en trois morceaux',
      detail:
        '📘 À qui — la clientèle. Quelle promesse — une des huit du cours : prix, performances, simplicité, confort, sécurité, plaisir, distinction, personnalisation. Par quel mode d’accès — boutique, site, abonnement, leasing, libre-service. La troisième dimension est celle qu’on oublie, et c’est souvent elle qui change quand un modèle bascule.',
      aEviter:
        'Partir du produit. « Nous vendons des X » est une phrase de catalogue : elle ne dit ni pour qui, ni pourquoi eux, et elle bloque toute la suite.',
    },
    {
      titre: '4. Remplir le Canvas dans l’ordre utile',
      detail:
        '🔎 Segments, puis proposition de valeur, puis canaux et relations, puis revenus ; ensuite seulement ressources et activités, partenaires, et coûts en dernier. On descend du client vers la machine, parce que c’est le client qui décide de ce qu’il faut savoir faire — jamais l’inverse.',
      aEviter:
        'Commencer par ce qu’on connaît le mieux, en général les ressources. Le canvas se remplit alors autour de l’entreprise au lieu de se remplir autour du client.',
    },
    {
      titre: '5. Quand une option est en jeu, faire deux colonnes : avant / après',
      detail:
        '📘 Le Canvas est « essentiellement statique » : c’est une photo, pas un film. La parade tient en une feuille pliée en deux. On voit alors d’un coup d’œil combien de blocs bougent — et un modèle dont sept blocs sur neuf changent n’est pas une variante du précédent, c’est un autre modèle.',
      aEviter:
        'Dessiner un seul canvas, celui de l’option, en oubliant ce qu’il remplace. On perd la seule chose qui se démontre : l’ampleur du basculement.',
    },
    {
      titre: '6. Finir par la cohérence, puis nommer le point fragile',
      detail:
        'Trois questions, toujours les mêmes : les revenus couvrent-ils les coûts, et à quel rythme ? La promesse est-elle tenable avec les ressources écrites juste au-dessus ? Deux blocs se contredisent-ils ? On termine par une phrase unique : « le modèle bute ici ». Cette phrase est le livrable de l’étape, et elle repartira intacte dans la faisabilité du SAF.',
      aEviter:
        'S’arrêter au canvas rempli. Le tableau rempli est la matière première ; la cohérence est l’analyse. Sans elle, on a décrit sans rien conclure.',
    },
  ],

  /* ----------------------------------------------------------- Raisonnement */

  raisonnement: [
    {
      t: 'texte',
      contenu:
        'Le diagnostic est terminé. On sait ce qui se passe autour d’Atelier Léman — subventions publiques, marques low-cost en ligne — et on sait de quoi l’entreprise est capable : des mécaniciens capables de diagnostiquer une panne électronique, une marque locale, et une dépendance à deux fournisseurs de batteries. On ne sait toujours pas comment elle gagne de l’argent. 📘 Un business model, c’est « l’ensemble des modalités par lesquelles une organisation crée de la valeur et la répartit ». Traduit : qui paie, pour quoi, à quel rythme, ce que ça coûte, et ce qu’il en reste.',
    },
    {
      t: 'encadre',
      ton: 'info',
      titre: 'Pourquoi le business model n’est pas dans le diagnostic',
      contenu:
        '📘 Le cours le place au chapitre 3, après les diagnostics — pas au milieu d’eux. La raison est simple : le diagnostic répond à « que se passe-t-il autour ? » et « de quoi sommes-nous capables ? », le business model à « comment notre système économique fonctionne-t-il ? ». Ce n’est pas la même question, et le business model ne remplace donc ni le PESTEL ni Porter : il décrit le fonctionnement, pas la position face aux concurrents.',
    },
    {
      t: 'question',
      contenu:
        'Une question à la fois. D’abord : comment Atelier Léman gagne-t-elle de l’argent aujourd’hui ? Le modèle envisagé viendra après. Mélanger les deux dès la première phrase est la façon la plus rapide de produire une bouillie où l’on ne sait plus ce qui existe et ce qui est projeté.',
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit : les vélos sont « vendus 2 600 CHF en moyenne pour un coût de revient de 1 400 CHF ».',
      conclusion:
        'Voilà l’équation de profit actuelle, et elle tient en une phrase : 1 200 CHF de marge brute par vélo, encaissés en une seule fois, le jour de la livraison. Le mot qui compte n’est pas « 1 200 » mais « une seule fois » : l’argent rentre avant que le vélo ne soit sorti de l’atelier depuis longtemps, et il ne rentre plus jamais pour ce vélo-là.',
    },
    {
      t: 'renvoi',
      modele: 'rcov',
      point: 'profit',
      libelle: 'L’équation de profit : la confrontation revenus-coûts, pas une soustraction',
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit aussi : elle « répare et entretient des vélos de toutes marques, dans deux ateliers ».',
      conclusion:
        'Il y a donc deux sources de revenus, et elles n’ont pas le même rythme. La vente : gros montant, une fois, et en recul de 8 %. La réparation : petits montants, mais répétés, et indépendants du fait qu’on ait vendu le vélo ou non. C’est cette seconde source, aujourd’hui minoritaire, que l’option d’abonnement mettrait au centre du modèle.',
    },
    {
      t: 'renvoi',
      modele: 'rcov',
      point: 'revenus',
      libelle: 'Volume et structure des revenus : une ligne par source, et « ponctuel » ou « récurrent » à côté',
    },
    {
      t: 'tableau',
      entetes: ['📘 Le triptyque du cours', 'La question qu’il pose', 'Atelier Léman aujourd’hui'],
      lignes: [
        [
          'Proposition de valeur',
          'Pourquoi le client nous choisit-il ?',
          'Un vélo électrique suisse, fiable et réparable près de chez soi, vendu 2 600 CHF à un particulier genevois. Promesse : performances et distinction. Mode d’accès : l’achat en boutique.',
        ],
        [
          'Architecture de valeur',
          'Qui fait quoi pour que la promesse soit tenue ?',
          'Assemblage et réparation en interne — c’est là qu’est le savoir-faire. Batteries et cadres achetés dehors, les batteries à deux fournisseurs asiatiques seulement.',
        ],
        [
          'Équation de profit',
          'Que reste-t-il, et sous quelle forme ?',
          '1 200 CHF par vélo, encaissés une fois ; plus des réparations de petit montant mais répétées. Coûts très majoritairement variables : ils disparaissent si on vend moins.',
        ],
      ],
      legende:
        '📘 Ces trois éléments sont ceux des slides, dans cet ordre. Les annoncer avant de remplir quoi que ce soit vaut mieux qu’un canvas parfait sorti sans prévenir : le jury entend qu’on suit une structure, pas qu’on récite des cases.',
    },
    {
      t: 'encadre',
      ton: 'alerte',
      titre: 'Le test qui sauve la proposition de valeur',
      contenu:
        'Une proposition de valeur répond à « pourquoi le client nous choisit », jamais à « qu’est-ce que nous vendons ». Le test tient en une seconde : la phrase commence-t-elle par « nous vendons » ou par « le client obtient » ? ❌ « Nous vendons des vélos électriques haut de gamme. » ✅ « Le client obtient un vélo suisse fiable, réparable à quinze minutes de chez lui par des gens qui savent traiter l’électronique. » La première est un extrait de catalogue et ne permet aucune analyse ensuite.',
    },
    {
      t: 'renvoi',
      modele: 'bmc',
      point: 'valeur',
      libelle: 'Bloc 2 — Proposition de valeur : la charnière du canvas, à qui / quelle promesse / quel accès',
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit : « Les batteries, composant le plus cher et le plus critique du vélo, sont achetées à deux fournisseurs asiatiques. »',
      conclusion:
        'Dans le business model, cette phrase ne va pas dans les ressources — l’entreprise ne possède rien — mais dans les partenaires clés. 📘 Et le test du cours tranche immédiatement : si ce partenaire disparaît demain, le modèle tient-il ? Non : sans batterie, aucun vélo ne sort de l’atelier, et il n’existe pas de second rang de fournisseurs prêt à prendre le relais. C’est donc bien un partenaire clé au sens strict — et une fragilité que le diagnostic interne avait déjà notée, qui réapparaît ici sous un autre nom.',
    },
    {
      t: 'renvoi',
      modele: 'bmc',
      point: 'partenaires',
      libelle: 'Bloc 8 — Partenaires clés : le test « s’il disparaît, le modèle tient-il ? »',
    },
    {
      t: 'question',
      contenu:
        'Le modèle actuel est écrit. Vient la vraie question de l’étape : basculer vers un abonnement mobilité facturé aux entreprises, est-ce que cela change le business model — ou seulement la façon de présenter la facture ? Tant qu’on n’a pas répondu, l’option reste une direction, pas un projet.',
    },
    {
      t: 'tableau',
      entetes: ['Bloc du Canvas', 'Aujourd’hui — on vend un vélo', 'Demain — on loue une mobilité'],
      lignes: [
        [
          '1 — Segments de clients',
          'Des particuliers genevois aisés',
          'Des entreprises genevoises, via un responsable RH ou achats',
        ],
        [
          '2 — Proposition de valeur',
          'Un vélo haut de gamme : performances, distinction',
          'Des collaborateurs qui roulent toute l’année, sans gestion de flotte : simplicité, sécurité',
        ],
        [
          '3 — Canaux',
          'Deux ateliers et le bouche-à-oreille genevois',
          'La vente directe aux services RH, la livraison et l’entretien sur site',
        ],
        [
          '5 — Sources de revenus',
          'Une vente, 2 600 CHF, une fois',
          'Un loyer mensuel, encaissé tant que le contrat court',
        ],
        [
          '6 — Ressources clés',
          'Un stock de vélos destiné à être vendu',
          'Un parc détenu, plus la trésorerie qui permet de l’immobiliser',
        ],
        [
          '7 — Activités clés',
          'Assembler, vendre, réparer quand on apporte le vélo',
          'Maintenir un parc, remplacer sous 24 heures, piloter des contrats',
        ],
        [
          '9 — Structure de coûts',
          '1 400 CHF variables par vélo, récupérés à la vente',
          '1 400 CHF immobilisés par vélo, plus une main-d’œuvre récurrente',
        ],
      ],
      legende:
        '🔎 Sept blocs sur neuf changent. Seuls les partenaires et les relations clients restent proches de ce qu’ils étaient — et encore, la relation passe d’un lien personnel avec le mécanicien à un contrat annuel. (chiffres illustratifs)',
    },
    {
      t: 'texte',
      contenu:
        'C’est le moment du raisonnement où l’on gagne réellement des points. Un changement de prix déplace une ligne du canvas. Ici, sept blocs sur neuf bougent : le client n’est plus le même, la promesse n’est plus la même, le rythme de l’argent s’inverse et l’entreprise se met à posséder ce qu’elle vendait. Ce n’est donc pas une variante commerciale de l’activité actuelle, c’est un autre business model — et il faut le dire avec ces mots-là.',
    },
    {
      t: 'renvoi',
      modele: 'bmc',
      point: 'segments',
      libelle: 'Bloc 1 — Segments de clients : si le segment change, huit blocs sur neuf bougent',
    },
    {
      t: 'schema',
      schema: {
        h: 740,
        description:
          'Deux colonnes face à face — le modèle de vente à gauche, le modèle d’abonnement à droite — comparées sur trois lignes : ce que paie le client, ce que coûte le vélo, ce qu’il reste ; une bande en bas nomme le point fragile, la trésorerie.',
        noeuds: [
          {
            id: 'av',
            titre: 'AUJOURD’HUI — ON VEND UN VÉLO',
            x: 40,
            y: 40,
            l: 420,
            h: 70,
            forme: 'bande',
            ton: 'sourd',
          },
          {
            id: 'ap',
            titre: 'DEMAIN — ON LOUE UNE MOBILITÉ',
            x: 540,
            y: 40,
            l: 420,
            h: 70,
            forme: 'bande',
            ton: 'sourd',
          },
          {
            id: 'av-rev',
            titre: 'Le client paie 2 600 CHF',
            lignes: ['une fois, le jour de la livraison'],
            x: 40,
            y: 150,
            l: 420,
            h: 110,
          },
          {
            id: 'ap-rev',
            titre: 'Le client paie tous les mois',
            lignes: ['tant que le contrat court'],
            x: 540,
            y: 150,
            l: 420,
            h: 110,
          },
          {
            id: 'av-cout',
            titre: 'Le vélo coûte 1 400 CHF',
            lignes: ['décaissé, puis récupéré à la vente'],
            x: 40,
            y: 310,
            l: 420,
            h: 110,
          },
          {
            id: 'ap-cout',
            titre: 'Le même vélo reste à nous',
            lignes: ['1 400 CHF immobilisés par vélo', 'plus l’entretien tous les mois'],
            x: 540,
            y: 310,
            l: 420,
            h: 110,
          },
          {
            id: 'av-fin',
            titre: 'Marge : 1 200 CHF, tout de suite',
            lignes: ['mais il faut vendre pour encaisser'],
            x: 40,
            y: 470,
            l: 420,
            h: 110,
          },
          {
            id: 'ap-fin',
            titre: 'La même marge, mais étalée',
            lignes: ['la trésorerie porte le parc'],
            x: 540,
            y: 470,
            l: 420,
            h: 110,
            ton: 'alerte',
          },
          {
            id: 'fragile',
            titre: 'LE POINT FRAGILE : LA TRÉSORERIE',
            x: 40,
            y: 630,
            l: 920,
            h: 70,
            forme: 'bande',
            ton: 'accent',
          },
        ],
        liens: [
          { de: 'av', vers: 'av-rev' },
          { de: 'ap', vers: 'ap-rev' },
          { de: 'av-rev', vers: 'ap-rev' },
          { de: 'av-cout', vers: 'ap-cout' },
          { de: 'av-fin', vers: 'ap-fin' },
          { de: 'ap-fin', vers: 'fragile', ton: 'alerte' },
        ],
        note:
          'Rien n’a changé dans l’atelier : ce sont le rythme des revenus et la nature des coûts qui basculent. La faisabilité se joue là, pas sur la compétence — elle, l’entreprise l’a déjà. (chiffres illustratifs)',
      },
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit : « une PME genevoise de 45 salariés » qui réalise « 6,2 M CHF de chiffre d’affaires ».',
      conclusion:
        'Cette taille interdit d’immobiliser un parc de mille vélos, mais autorise un pilote. Chiffre illustratif : 40 vélos à 1 400 CHF font 56 000 CHF sortis de la trésorerie et amortis sur plusieurs années, en face de loyers mensuels qui rentrent au goutte-à-goutte. La même marge existe des deux côtés — elle n’arrive simplement pas au même moment. Le besoin en fonds de roulement, lui, change de nature : c’est ce chiffre-là, pas le chiffre d’affaires, qui décide si l’option est faisable.',
    },
    {
      t: 'renvoi',
      modele: 'rcov',
      point: 'charges',
      libelle: 'Volume et structure des charges : nommer le poste dominant, puis dire s’il est fixe ou variable',
    },
    {
      t: 'encadre',
      ton: 'succes',
      titre: 'La différence que fait cette étape, en deux versions',
      contenu:
        '❌ Sans business model, au SAF : « la faisabilité est moyenne, il faudra des moyens. » — une phrase vide, qui pourrait être dite de n’importe quelle option de n’importe quel cas. ✅ Avec : « la faisabilité bute sur un point précis : le modèle transforme un achat de stock revendu en quelques semaines en un parc immobilisé sur plusieurs années, alors que les revenus deviennent mensuels. Le besoin en fonds de roulement change de nature. C’est là qu’il faut regarder — pas sur la compétence, elle, nous l’avons. » 🔎 C’est le même SAF ; l’un est une opinion, l’autre une démonstration.',
    },
    {
      t: 'liste',
      titre: 'Le test de cohérence — les trois questions, toujours dans cet ordre',
      items: [
        'Les revenus couvrent-ils les coûts, et surtout : arrivent-ils au même rythme ? Ici, non — les coûts sortent d’un coup, les revenus rentrent mois par mois.',
        'La promesse est-elle tenable avec les ressources écrites juste au-dessus ? Promettre un vélo toujours disponible suppose un parc de remplacement qui n’existe nulle part aujourd’hui.',
        'Deux blocs se contredisent-ils ? C’est la question la plus rentable, parce que la réponse n’est visible dans aucun bloc pris isolément.',
      ],
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit : « la Ville et le Canton de Genève multiplient les subventions à la mobilité douce » — et, plus haut, que les batteries viennent « de deux fournisseurs asiatiques ».',
      conclusion:
        '🔎 Rapproche les deux et une incohérence apparaît : vendre une mobilité douce à des entreprises qui touchent de l’argent public, en s’appuyant sur une chaîne d’approvisionnement longue et peu documentée, expose la promesse au premier questionnement sérieux d’un service achats. Aucun bloc n’est faux pris seul ; c’est le croisement segment × partenaires qui produit le problème. Le dire explicitement à l’oral est la preuve qu’on analyse au lieu de décrire.',
    },
    {
      t: 'encadre',
      ton: 'alerte',
      titre: 'Les limites du Canvas — et une divergence à savoir citer',
      contenu:
        '📘 Le cours donne les limites avant le contenu : le Canvas « s’applique surtout à des entreprises monoactivité comme les start-up », il « se focalise essentiellement sur le fonctionnement interne » « en négligeant la concurrence », et il « reste essentiellement statique ». ⚠️ Les supports ne les comptent pas pareil : la fiche de méthode en distingue quatre, l’encyclopédie en regroupe trois — « centré interne » et « néglige la concurrence » y forment une seule limite. Les deux découpages sont justes ; savoir dire lequel on emploie vaut mieux que trancher. Les parades, elles, ne changent pas : un canvas par domaine d’activité, le PESTEL et Porter en amont, un canvas avant / après.',
    },
    {
      t: 'renvoi',
      modele: 'rcov',
      point: 'boucle',
      libelle: 'La boucle de retour : ce qui distingue le RCOV du Canvas, statique par construction',
    },
    {
      t: 'oral',
      contenu:
        'Aujourd’hui, Atelier Léman gagne de l’argent en une fois : 2 600 CHF encaissés contre 1 400 CHF de coût, plus des réparations petites mais répétées. L’option d’abonnement ne change pas le prix, elle change le modèle : sept blocs du Canvas sur neuf bougent, le client devient une entreprise, la promesse passe de la performance à la simplicité, et l’entreprise se met à posséder ce qu’elle vendait. La marge ne disparaît pas, elle s’étale — et deux variables qui n’existaient pas décident alors du résultat : le taux de renouvellement des contrats et le nombre d’interventions par vélo et par an. Le modèle est donc cohérent sur la promesse, l’atelier sait faire ; il bute sur la trésorerie, parce qu’un parc immobilisé fait face à des revenus mensuels. C’est ce point-là que je testerai dans la faisabilité.',
    },
  ],

  /* -------------------------------------------------------------- Livrable */

  livrable: {
    titre: 'Sur le brouillon, à la fin de l’étape 3',
    lignes: [
      'BM ACTUEL — PV : vélo suisse fiable + réparable à Carouge → particulier aisé (performances, distinction, achat en boutique).',
      'AV : assemblage + réparation dedans ; batteries dehors, 2 fournisseurs asiatiques → partenaire clé, pas de second rang.',
      'EP : 2 600 − 1 400 = 1 200 CHF, une fois. + réparations petites et répétées. Coûts surtout variables.',
      'BM ABONNEMENT — segments : entreprises GE. Revenus : loyer mensuel. Ressources : parc détenu + trésorerie.',
      'Coûts : 40 × 1 400 = 56 000 CHF immobilisés + entretien récurrent → variable devient fixe. (illustratif)',
      '7 blocs sur 9 changent → ce n’est pas un prix, c’est un autre modèle. Le dire avec ces mots.',
      'POINT FRAGILE = trésorerie : parc immobilisé vs revenus mensuels. ⚠️ à ressortir tel quel au SAF.',
      'Incohérence à surveiller : promesse de mobilité douce × approvisionnement asiatique opaque.',
      'Limites BMC 📘 : monoactivité · centré interne · néglige la concurrence · statique (3 ou 4 selon le support).',
      'Variables à suivre plus tard : taux de renouvellement · interventions par vélo et par an.',
    ],
  },

  /* ---------------------------------------------------------------- Pièges */

  pieges: [
    {
      titre: 'Ranger le business model dans le diagnostic',
      explication:
        '📘 Le cours le place au chapitre 3, après les diagnostics. Le glisser dans l’interne produit un doublon — on redécrit les ressources et les compétences — et fait perdre ce que le business model apporte seul : le rythme de l’argent et le test de cohérence.',
      reflexe:
        'Une phrase suffit à se replacer : le diagnostic dit ce qui se passe et de quoi on est capable ; le business model dit comment le système économique tourne. Trois questions différentes, trois moments différents.',
    },
    {
      titre: 'Décrire le produit à la place de la promesse',
      explication:
        'Écrire « nous vendons des vélos électriques » dans le bloc 2 fige tout le reste : les segments deviennent « les cyclistes », les canaux « la boutique », et plus aucune incohérence ne peut apparaître, puisque rien n’a été formulé du point de vue du client.',
      reflexe:
        'Commence la phrase par le client et finis-la par le bénéfice. Si un concurrent peut la reprendre telle quelle sans mentir, ce n’est pas encore une proposition de valeur.',
    },
    {
      titre: 'Expédier les revenus et les coûts parce qu’ils sont en bas de la feuille',
      explication:
        'Ces deux blocs portent l’équation de profit à eux seuls. Les bâcler, c’est décrire un modèle sans jamais dire s’il tient — et se priver du seul argument chiffré qu’on pourra sortir au SAF. C’est aussi là que se glisse la confusion entre chiffre d’affaires et profit.',
      reflexe:
        'Deux informations par bloc, jamais une : pour les revenus, combien et à quel rythme ; pour les coûts, quel poste domine et s’il est fixe ou variable. Quatre mots suffisent, et l’analyse tient debout.',
    },
    {
      titre: 'S’arrêter au canvas rempli',
      explication:
        'Un tableau complet ressemble à un travail fini, et c’est un piège : il ne dit rien. La note se gagne dans la ligne d’après — celle qui rapproche deux blocs et montre que la promesse n’est pas tenable, ou pas crédible.',
      reflexe:
        'Réserve tes trente dernières secondes à une seule phrase : « ces deux blocs se contredisent, et voilà pourquoi ». Une incohérence nommée vaut mieux que neuf cases parfaitement remplies.',
    },
  ],
}
