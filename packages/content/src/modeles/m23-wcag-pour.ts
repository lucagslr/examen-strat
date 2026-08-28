import type { Modele } from './types'

export const modele: Modele = {
  id: 'wcag-pour',
  numero: 23,
  slug: 'wcag-pour',
  nom: 'Accessibilité numérique : principes WCAG',
  sousTitre: 'Mémo : POUR',
  famille: 'numerique',
  etape: 'transverse',

  question:
    'Ce service numérique peut-il réellement être utilisé par tout le monde — et, si la réponse est non, par qui exactement ne peut-il pas l’être ?',

  enUnePhrase:
    'Les WCAG — Web Content Accessibility Guidelines, les normes internationales d’accessibilité du web — tiennent en quatre principes que l’acronyme POUR sert à retenir : le contenu doit être perceptible, utilisable, compréhensible et robuste ; et ces quatre mots servent moins à décrire un idéal qu’à ranger, ligne par ligne, les obstacles concrets d’un service précis.',

  produit:
    'Un diagnostic en quatre lignes — un obstacle nommé et une correction par principe —, deux indicateurs qui ne mesurent pas la même chose (la conformité technique et la réussite réelle du parcours), et une condition posée à la stratégie numérique : le canal humain qu’on ne ferme pas.',

  quandUtiliser: [
    'Dès qu’un cas comporte un service numérique tourné vers des usagers : site, application, chatbot, guichet en ligne, borne. POUR est la grille qui empêche de parler d’accessibilité en généralités.',
    'Quand l’énoncé donne des chiffres de fréquentation ou de clientèle par segment d’âge : une baisse concentrée sur un public est le symptôme mesurable d’un obstacle d’accessibilité.',
    'Quand une entreprise annonce une stratégie « digital first » ou la fermeture de guichets : POUR sert à instruire ce que la bascule coûte à ceux qui ne suivent pas.',
    'Au moment d’écrire des recommandations : chaque principe non tenu fournit une mesure concrète, chiffrable, et donc défendable au SAF.',
    'Dans le volet sociétal de la responsabilité numérique des entreprises (RNE) : POUR est l’outil qui remplit l’axe S, sinon resté déclaratif.',
  ],

  quandNePasUtiliser: [
    'Pour juger l’impact environnemental du numérique : POUR ne dit rien des terminaux, des data centers ni des réseaux. Ces trois postes relèvent d’un autre outil.',
    'Comme argument juridique autonome : les WCAG sont un standard technique, pas une loi. Ce sont les textes nationaux et européens qui rendent tout ou partie du standard obligatoire.',
    'Pour évaluer la qualité générale d’une interface : POUR mesure la possibilité d’usage, pas l’agrément. Un service parfaitement accessible peut rester laid, lent et pénible.',
    'En liste récitée. Quatre définitions apprises par cœur sans un seul fait de l’énoncé rattaché à chacune ne rapportent rien à l’oral.',
  ],

  schema: {
    h: 950,
    description:
      'Le standard WCAG se déploie en quatre principes — perceptible, utilisable, compréhensible, robuste — qui alimentent un diagnostic unique ; ce diagnostic est soumis au test des usagers réels, dont l’issue ouvre soit le double levier de l’accessibilité, soit l’exclusion indirecte.',
    noeuds: [
      {
        id: 'wcag',
        titre: 'WCAG — le standard international',
        lignes: ['3 niveaux : A · AA · AAA'],
        x: 40,
        y: 40,
        l: 920,
        h: 70,
        forme: 'bande',
        point: 'wcag',
      },
      {
        id: 'p',
        titre: 'P — PERCEPTIBLE',
        lignes: [
          '« je le perçois »',
          'texte alternatif, contraste,',
          'sous-titres, police réglable,',
          'jamais la couleur toute seule',
        ],
        x: 40,
        y: 190,
        l: 185,
        h: 170,
        point: 'perceptible',
      },
      {
        id: 'u',
        titre: 'U — UTILISABLE',
        lignes: [
          '« je peux m’en servir »',
          'tout au clavier, délais',
          'suffisants, zones cliquables',
          'larges, parcours sans blocage',
        ],
        x: 285,
        y: 190,
        l: 185,
        h: 170,
        point: 'utilisable',
      },
      {
        id: 'c',
        titre: 'C — COMPRÉHENSIBLE',
        lignes: [
          '« je comprends »',
          'langage clair, navigation',
          'prévisible, messages d’erreur',
          'qui disent quoi faire',
        ],
        x: 530,
        y: 190,
        l: 185,
        h: 170,
        point: 'comprehensible',
      },
      {
        id: 'r',
        titre: 'R — ROBUSTE',
        lignes: [
          '« ça marche chez moi »',
          'lecteur d’écran, code valide,',
          'navigateurs et appareils',
          'variés, connexion lente',
        ],
        x: 775,
        y: 190,
        l: 185,
        h: 170,
        point: 'robuste',
      },
      {
        id: 'diagnostic',
        titre: 'LE DIAGNOSTIC POUR',
        lignes: [
          'quatre lignes, une par',
          'principe : un obstacle du cas,',
          'une correction, un responsable',
        ],
        x: 290,
        y: 440,
        l: 420,
        h: 140,
        ton: 'accent',
        point: 'diagnostic',
      },
      {
        id: 'test',
        titre: 'LE TEST QUI TRANCHE',
        lignes: ['conforme ≠ réellement utilisable'],
        x: 40,
        y: 630,
        l: 920,
        h: 70,
        forme: 'bande',
        ton: 'alerte',
        point: 'test',
      },
      {
        id: 'exclusion',
        titre: 'L’EXCLUSION INDIRECTE',
        lignes: [
          'si on ne fait rien : un service',
          'légal et performant qui écarte',
          'de fait tout un public',
        ],
        x: 40,
        y: 770,
        l: 420,
        h: 140,
        ton: 'danger',
        point: 'exclusion',
      },
      {
        id: 'levier',
        titre: 'LE DOUBLE LEVIER',
        lignes: [
          'si on le fait : moins de risque',
          'ET plus de public, de confiance',
          'et de réputation',
        ],
        x: 540,
        y: 770,
        l: 420,
        h: 140,
        ton: 'positif',
        point: 'levier',
      },
    ],
    liens: [
      { de: 'wcag', vers: 'p', depuis: 'bas', arrive: 'haut' },
      { de: 'wcag', vers: 'u', depuis: 'bas', arrive: 'haut' },
      { de: 'wcag', vers: 'c', depuis: 'bas', arrive: 'haut' },
      { de: 'wcag', vers: 'r', depuis: 'bas', arrive: 'haut' },
      { de: 'p', vers: 'diagnostic', depuis: 'bas', arrive: 'haut' },
      { de: 'u', vers: 'diagnostic', depuis: 'bas', arrive: 'haut' },
      { de: 'c', vers: 'diagnostic', depuis: 'bas', arrive: 'haut' },
      { de: 'r', vers: 'diagnostic', depuis: 'bas', arrive: 'haut' },
      { de: 'diagnostic', vers: 'test', depuis: 'bas', arrive: 'haut', ton: 'accent' },
      {
        de: 'test',
        vers: 'exclusion',
        depuis: 'bas',
        arrive: 'haut',
        libelle: 'test échoué',
        ton: 'danger',
      },
      {
        de: 'test',
        vers: 'levier',
        depuis: 'bas',
        arrive: 'haut',
        libelle: 'test réussi',
        ton: 'positif',
      },
    ],
    note:
      'Les sous-titres servent à une personne sourde — et à quelqu’un dans un train. Le contraste sert une personne malvoyante — et quelqu’un au soleil. Concevoir pour les cas extrêmes améliore l’expérience de tous.',
  },

  points: [
    {
      id: 'wcag',
      libelle: 'WCAG — le standard, et les lois qui s’y accrochent',
      cestQuoi:
        '📘 Les WCAG (Web Content Accessibility Guidelines, « règles pour l’accessibilité des contenus web ») sont les normes internationales publiées par le W3C, l’organisme qui écrit les standards du web. Elles ne sont pas une loi : ce sont des critères techniques, organisés en trois niveaux de conformité — A pour le minimum, AA pour le standard exigé par la plupart des réglementations, AAA pour le renforcé. Ce sont ensuite les textes nationaux qui les rendent obligatoires, en tout ou en partie.',
      question:
        'De quel niveau de conformité parle-t-on, sur quel périmètre exactement — et quel texte rend ce niveau obligatoire pour CETTE entreprise ?',
      quoiMettre: [
        '📘 Les trois niveaux, avec la cible : A, AA, AAA — AA est le niveau généralement exigé, et c’est le seul chiffre à citer si l’on n’en cite qu’un.',
        '📘 Les transpositions : eCH-0059 est le standard suisse, aligné sur les WCAG, mais il vise les sites et applications des autorités publiques ; le RGAA est son équivalent français ; EN 301 549 est la norme européenne des produits et services numériques.',
        '📘 L’European Accessibility Act (EAA), en application depuis juin 2025, qui vise nommément le commerce en ligne, les banques et services financiers, les transports, les livres numériques et les terminaux de paiement.',
        '📘 La révision de la LHand, la loi suisse sur l’égalité pour les personnes handicapées : elle étend l’obligation aux prestations proposées par des acteurs privés et introduit les « aménagements raisonnables », c’est-à-dire une obligation d’agir pesée par la proportionnalité — le coût et la faisabilité entrent dans la balance.',
        '📘 À Genève, l’article 21A de la Constitution cantonale : droit à l’intégrité numérique, dont un droit à une vie hors ligne et un devoir de l’État de favoriser l’inclusion numérique.',
        'Le périmètre visé, qui n’est jamais « le site » : un parcours, de la première page jusqu’à la confirmation.',
      ],
      exemple:
        'Atelier Léman SA est une PME privée suisse. Aujourd’hui, aucune obligation directe : eCH-0059 vise les autorités publiques, pas un atelier de vélos. Mais deux mouvements la rattrapent — l’EAA, qui couvre le commerce en ligne dès qu’elle vend vers l’Union européenne, et la révision de la LHand, qui étendra l’obligation au privé. Et surtout, la Ville de Genève, qui subventionne la mobilité douce, commence à inscrire des critères d’accessibilité dans ses appels d’offres. Viser AA sur le parcours de réservation n’est donc pas de la générosité : c’est une condition d’accès au marché public local.',
      piege:
        'Annoncer « notre site est conforme WCAG » sans dire ni le niveau ni le périmètre. Une page d’accueil conforme AA ne dit rien du tunnel de paiement, qui est le seul endroit où l’argent se perd.',
      reflexe:
        'Deux mots obligatoires dès que tu prononces WCAG : le niveau (AA) et le parcours (« réserver une réparation », « payer son abonnement »). Sans eux, l’affirmation n’est pas vérifiable.',
      notions: ['wcag', 'cadre-legal-accessibilite', 'european-accessibility-act', 'lhand'],
    },
    {
      id: 'perceptible',
      libelle: 'P — Perceptible',
      cestQuoi:
        '📘 « L’information et les composants de l’interface doivent pouvoir être perçus par tous. » C’est le principe des sens : l’information doit atteindre la personne par au moins un canal qu’elle possède. Si elle n’arrive pas, les trois principes suivants sont sans objet — on ne peut pas se servir de ce qu’on ne perçoit pas.',
      question:
        'L’information arrive-t-elle jusqu’à la personne, quels que soient ses sens, son écran et sa lumière ambiante ?',
      quoiMettre: [
        '📘 Le texte alternatif sur les images : la phrase que le lecteur d’écran prononce à la place de l’image. Une photo sans alternative est un trou noir pour une personne aveugle.',
        '📘 Le contraste suffisant entre le texte et son fond. Le gris clair sur blanc est l’erreur la plus répandue, et la plus facile à corriger.',
        '📘 Les sous-titres des vidéos, et la transcription des contenus audio.',
        '📘 L’interdiction de transmettre une information par la couleur seule : « les champs en rouge sont obligatoires » exclut d’un coup les personnes daltoniennes et tous les écrans mal réglés.',
        '📘 La taille de police ajustable — l’agrandissement jusqu’à 200 % sans que la page se casse ni qu’un bouton disparaisse.',
        'Les documents joints : un PDF scanné est une image, donc illisible par un lecteur d’écran, même si un humain y voit du texte.',
      ],
      exemple:
        'Sur la page de l’abonnement mobilité d’Atelier Léman, les trois formules se distinguent uniquement par une pastille verte, orange ou rouge ; le prix mensuel est écrit en gris clair sur fond blanc ; la vidéo de présentation de l’atelier de Carouge n’a pas de sous-titres ; et le contrat téléchargeable est un scan. Quatre manquements au P, et pas un seul qui coûte cher à corriger. Exemple illustratif.',
      piege:
        'Croire que le P concerne « les aveugles ». Le contraste sert d’abord au client qui compare deux formules sur son téléphone, dehors, devant la vitrine de Carouge — c’est-à-dire à presque tout le monde.',
      reflexe:
        'Le test de l’impression en noir et blanc : si une information disparaît quand la couleur disparaît, le P n’est pas tenu. Trente secondes, aucun outil.',
      notions: ['pour', 'accessibilite-numerique'],
    },
    {
      id: 'utilisable',
      libelle: 'U — Utilisable (Operable en anglais)',
      cestQuoi:
        '📘 « Les composants et la navigation doivent pouvoir être utilisés. » C’est le principe de la commande : la personne perçoit l’information, mais peut-elle agir dessus — atteindre, cliquer, valider, revenir en arrière — avec le mode de contrôle dont elle dispose ? Attention au libellé : le schéma du cours écrit « U — Utilisable », l’encyclopédie écrit « O — Opérable ». C’est le même principe, deuxième de la liste, et la variante est signalée plus bas.',
      question:
        'La personne peut-elle agir — atteindre, cliquer, valider — sans souris, sans main sûre et sans se presser ?',
      quoiMettre: [
        '📘 La navigation entièrement au clavier : tout ce qui se fait à la souris doit se faire avec Tab, Entrée et les flèches. C’est le critère qui élimine le plus d’obstacles d’un coup.',
        '📘 Le temps suffisant pour agir : sessions qui n’expirent pas au bout de cinq minutes, délais paramétrables, possibilité de prolonger.',
        '📘 L’absence de contenus qui provoquent des crises : rien qui clignote plus de trois fois par seconde.',
        '📘 Des zones cliquables suffisamment grandes — pour une main tremblante, pour un doigt sur un petit écran.',
        'Le nombre d’étapes du parcours, qui est un obstacle en soi : quatre écrans pour joindre un humain excluent autant qu’un bouton trop petit.',
        'Les alternatives à un moyen d’authentification unique : une double authentification obligatoire sans autre voie (SMS, appel, guichet) bloque quiconque n’a pas le bon téléphone.',
      ],
      exemple:
        'Sur la réservation d’un créneau à l’atelier de Plainpalais : le sélecteur de date ne se pilote qu’à la souris, la session expire au bout de cinq minutes, le bouton « Réserver » fait vingt pixels de côté, et il faut quatre écrans pour obtenir le numéro d’un mécanicien. Un client de 72 ans qui répare son vélo depuis quinze ans abandonne à la troisième étape — et il n’appelle pas, parce que le numéro est justement derrière les quatre écrans. Exemple illustratif.',
      piege:
        'Juger l’utilisable à sa propre expérience : valide, à la souris, sur un ordinateur récent, avec une connexion rapide et sans limite de temps. Dans ces conditions, tout marche toujours.',
      reflexe:
        'Range la souris et refais le parcours entier au clavier — Tab, Entrée, Échap. Le premier endroit où tu es coincé est un obstacle U, et tu peux le nommer précisément à l’oral.',
      notions: ['pour', 'utilisabilite'],
    },
    {
      id: 'comprehensible',
      libelle: 'C — Compréhensible (Understandable en anglais)',
      cestQuoi:
        '📘 « L’information et le fonctionnement doivent être compréhensibles. » C’est le principe de la tête : la personne perçoit, elle peut agir — mais sait-elle ce qu’on lui demande, et surtout que faire lorsque ça échoue ? Le C est le principe des personnes âgées, des non-francophones, des faibles littératies, et de tout le monde un jour de fatigue.',
      question:
        'Quelqu’un qui découvre le service comprend-il ce qu’on lui demande — et sait-il quoi faire quand ça ne marche pas ?',
      quoiMettre: [
        '📘 Un langage clair et simple : pas de jargon, pas de sigle non développé, des phrases courtes.',
        '📘 Un comportement prévisible : le même menu à la même place, le même mot pour la même chose d’un écran à l’autre. Une action ne doit jamais surprendre.',
        '📘 Des messages d’erreur explicites, assortis d’une suggestion de correction. « Erreur 402 » n’est pas un message, c’est un code.',
        '📘 Des libellés de formulaire explicites : le champ dit ce qu’il attend et dans quel format.',
        'La cohérence de la navigation d’un bout à l’autre du parcours, y compris entre le site et l’application.',
        'Le comportement des assistants automatiques : un chatbot qui répond à côté fait échouer le C, même quand la page est parfaite.',
      ],
      exemple:
        'Atelier Léman remplace son standard téléphonique par un assistant automatique. À la question « mon moteur fait un bruit », il répond « votre demande ne correspond à aucun service référencé ». Un message compréhensible dirait : « Je n’ai pas de réponse pour ce bruit. Pour un diagnostic moteur, appelez le 022 000 00 00 ou choisissez un créneau à Carouge. » Même échec, mais avec une sortie. Exemple illustratif.',
      piege:
        'Confondre compréhensible et court. Un texte de six mots bourré de jargon — « authentification à double facteur non appairée » — échoue au C aussi sûrement qu’un pavé de trois cents mots.',
      reflexe:
        'Relis chaque message d’erreur avec une seule question : dit-il ce qui s’est passé ET ce qu’il faut faire maintenant ? Si la deuxième moitié manque, c’est un obstacle C, à écrire tel quel dans le diagnostic.',
      notions: ['pour', 'inclusion-numerique'],
    },
    {
      id: 'robuste',
      libelle: 'R — Robuste',
      cestQuoi:
        '📘 « Le contenu doit être interprétable par une grande variété d’agents utilisateurs, y compris les technologies d’assistance. » Un agent utilisateur, c’est le logiciel qui affiche le service : navigateur, application, lecteur d’écran. C’est le principe de la machine : on ne teste plus l’humain, on teste le logiciel qui se met entre lui et le service. Sans robustesse, les trois autres principes s’effondrent dès que l’usager n’a pas le matériel prévu.',
      question:
        'Le service tient-il debout ailleurs que sur l’ordinateur récent de celui qui l’a construit ?',
      quoiMettre: [
        '📘 La compatibilité avec les lecteurs d’écran : le logiciel qui lit la page à voix haute pour une personne aveugle.',
        '📘 Un code HTML valide et sémantique : un bouton déclaré comme bouton, un titre déclaré comme titre. Une image cliquable qui fait office de bouton n’est annoncée par aucun lecteur d’écran.',
        '📘 Le fonctionnement sur différents navigateurs et différents appareils, anciens compris.',
        'Le comportement en connexion lente, et ce qui reste affiché quand un script ne se charge pas.',
        'Le fait que le R est souvent absent des énoncés : dans le cas d’école du cours, il est explicitement « non documenté ». Le signaler est une réponse, pas une esquive.',
      ],
      exemple:
        'Le configurateur de vélo d’Atelier Léman est entièrement construit en JavaScript, sans structure de page derrière : le lecteur d’écran n’annonce ni les options ni le prix, et sur un téléphone de cinq ans l’écran reste blanc. L’atelier ne le sait pas, parce que personne n’a testé ailleurs que sur les deux ordinateurs de la direction. Exemple illustratif.',
      piege:
        'Sauter le R parce qu’il est technique et qu’on ne saurait pas quoi en dire. Un diagnostic à trois lignes sur quatre se voit immédiatement.',
      reflexe:
        'Quand l’énoncé ne dit rien sur le R, dis-le et propose le test : « le R n’est pas documenté ici ; je le vérifierais avec un lecteur d’écran, sur un appareil de cinq ans et en connexion lente. » Un trou nommé vaut mieux qu’un trou caché.',
      notions: ['pour', 'wcag'],
    },
    {
      id: 'diagnostic',
      libelle: 'Le diagnostic POUR — le livrable',
      cestQuoi:
        'Quatre lignes sur le brouillon, une par principe. Sur chacune : un obstacle nommé — tiré d’un fait de l’énoncé, pas d’une généralité —, la famille à laquelle il appartient, et la correction. C’est ce tableau que le jury attend, et il se remplit en deux minutes une fois le parcours choisi.',
      question:
        'Pour chacun des quatre principes : quel obstacle précis, tiré de quel fait de l’énoncé, corrigé comment et par qui ?',
      quoiMettre: [
        'Un fait de l’énoncé par ligne, recopié presque mot pour mot : « quatre étapes pour joindre un agent », « taille de police non personnalisable ». C’est ce qui prouve qu’on a lu le cas.',
        '📘 La famille de l’obstacle, car le cours demande de les classer : technique (le code, la police, le format), ergonomique (le parcours, les messages, le chatbot), organisationnel (les horaires, les délais, la suppression d’un guichet), stratégique (le choix « digital first » lui-même).',
        'La correction, concrète et bornée : « raccourci direct vers un humain sur chaque écran », « authentification alternative par SMS ou en agence ».',
        'Le responsable de la correction, parce qu’une mesure sans propriétaire ne se fait pas : développement, service client, direction.',
        'La priorité : le parcours critique d’abord — ouvrir un compte, payer, joindre un humain —, les non-conformités bloquantes avant les gênes.',
        'La mention explicite d’un principe non documenté, plutôt qu’une ligne inventée.',
      ],
      exemple:
        'Chez Atelier Léman, le diagnostic tient en quatre lignes : P — trois formules distinguées par la couleur seule, corriger par un libellé texte ; U — sélecteur de date à la souris seule, rendre le parcours pilotable au clavier ; C — « erreur 402 » sans explication, réécrire les messages ; R — non documenté, à tester au lecteur d’écran. Familles : technique, technique, ergonomique, technique. Priorité au U, parce que c’est là que les clients abandonnent.',
      piege:
        'Remplir les quatre lignes avec des généralités interchangeables — « améliorer l’accessibilité visuelle », « simplifier la navigation ». Ces phrases s’écrivent sans avoir lu le cas, et cela se voit.',
      reflexe:
        'Impose-toi une règle mécanique : chaque ligne doit contenir au moins un mot recopié de l’énoncé. Si tu ne peux pas, c’est que tu inventes.',
      notions: ['pour', 'accessibilite-numerique'],
    },
    {
      id: 'test',
      libelle: 'Le test qui tranche — conforme n’est pas utilisable',
      cestQuoi:
        '📘 Un service peut être conforme sur le papier et impraticable dans les faits. L’accessibilité dit que le service peut techniquement être utilisé ; l’utilisabilité dit qu’il l’est effectivement, avec efficacité et sans épuisement. C’est aussi le quatrième verbe de l’inclusion numérique : comprendre, naviguer, interagir — et bénéficier. Le dernier est celui qui compte, et c’est celui qu’aucun audit automatique ne mesure.',
      question:
        'Les gens obtiennent-ils réellement ce qu’ils venaient chercher — ou seulement l’écran qui le leur promet ?',
      quoiMettre: [
        '📘 Un indicateur de moyen : taux de conformité WCAG niveau A ou AA, nombre de non-conformités critiques, part des collaborateurs formés, part des nouveaux projets intégrant l’accessibilité dès la conception.',
        '📘 Un indicateur de résultat : taux de réussite d’un parcours clé par des utilisateurs en situation de handicap, taux d’abandon par segment d’âge, délai moyen d’accès à un conseiller humain, nombre de réclamations liées à l’accessibilité.',
        '📘 Le protocole de test : tests automatiques, puis tests manuels, puis tests avec de vrais utilisateurs. Les trois, dans cet ordre — le premier seul ne détecte qu’une fraction des obstacles.',
        'Le parcours retenu pour la mesure, nommé une fois pour toutes, sinon les chiffres ne se comparent pas d’une année sur l’autre.',
        '🔎 La règle de lecture : quand les deux indicateurs divergent, c’est celui de résultat qui commande. Une conformité en hausse et des abandons en hausse signifient qu’on a corrigé ce qui était facile à mesurer, pas ce qui bloquait.',
      ],
      exemple:
        'Atelier Léman se donne deux indicateurs sur le parcours « réserver une réparation » : le taux de conformité AA, à 78 % au départ, et la part des réservations menées jusqu’au bout par les clients de plus de 65 ans, à 41 %. Le premier rassure la direction, le second dit la vérité — six clients âgés sur dix n’obtiennent pas leur créneau. Chiffres illustratifs.',
      piege:
        'Donner un indicateur vague — « mieux servir nos clients », « améliorer la satisfaction ». Ce n’est pas mesurable, donc ce n’est pas un indicateur, et le jury le sanctionne systématiquement.',
      reflexe:
        'Toujours par paire : un indicateur de moyen et un indicateur de résultat, chacun avec son unité et sa valeur de départ. Une paire vaut mieux que cinq indicateurs isolés.',
      notions: ['kpi-accessibilite', 'utilisabilite', 'inclusion-numerique'],
    },
    {
      id: 'exclusion',
      libelle: 'L’exclusion indirecte — le risque si l’on ne fait rien',
      cestQuoi:
        '📘 Une règle, une pratique ou une conception apparemment neutre qui désavantage en fait, de manière disproportionnée, un groupe de personnes. Personne n’a écrit que les clients âgés n’étaient pas les bienvenus : c’est la double authentification obligatoire, les quatre étapes pour joindre un humain et la police non ajustable qui produisent le même résultat. Le service reste légal et performant, et il exclut quand même.',
      question:
        'Qui disparaît des chiffres, depuis quand, et par quel mécanisme apparemment neutre ?',
      quoiMettre: [
        'Le groupe désavantagé, nommé précisément : pas « les gens », mais « les clients de plus de 65 ans », « les indépendants sans smartphone récent », « les non-francophones ».',
        'Le mécanisme neutre en apparence, décrit sans procès d’intention : la digitalisation, la fermeture d’un guichet, une exigence de sécurité.',
        'Le chiffre qui le prouve, segmenté : une baisse globale ne prouve rien, une baisse concentrée sur un segment prouve tout.',
        '📘 Le constat d’absence de manquement légal, qui ne referme pas le dossier mais l’ouvre : « une entreprise peut respecter la loi tout en créant une exclusion indirecte ».',
        '📘 La phrase du cours, à citer telle quelle : « le risque n’est pas juridique, mais stratégique » — perte de clients, de réputation, de confiance et de parts de marché.',
        'La distinction d’avec la discrimination directe, qui vise explicitement le groupe et qui est rare : ici, l’intention manque et l’effet est là.',
      ],
      exemple:
        'Si le pilote d’abonnement d’Atelier Léman se pilote uniquement par l’application et que le guichet de Plainpalais réduit ses horaires, la part des clients de plus de 65 ans dans les réparations passe de 22 % à 14 % en un an. Aucune règle ne les a exclus : la conception l’a fait. Or ce sont eux qui reviennent chaque printemps depuis quinze ans, dans une PME dont la marque locale est justement le seul avantage que les marques low-cost en ligne ne peuvent pas copier. Chiffres illustratifs.',
      piege:
        'Conclure « c’est légal, donc c’est réglé ». C’est exactement l’erreur que le cours veut faire commettre : le cas d’école précise « aucun manquement légal constaté » pour voir qui s’arrête là.',
      reflexe:
        'Traite la phrase « aucun manquement légal constaté » comme le début du raisonnement, jamais comme sa fin. Enchaîne aussitôt : « le risque n’est pas juridique, mais stratégique », et nomme le public qui part.',
      notions: ['exclusion-indirecte', 'discrimination-directe', 'illectronisme'],
    },
    {
      id: 'levier',
      libelle: 'Le double levier — ce que l’accessibilité rapporte',
      cestQuoi:
        '📘 Le cours ne présente pas l’accessibilité comme une contrainte mais comme un « double levier stratégique » : levier de responsabilité numérique — inclusion, égalité d’accès, conformité, engagement éthique — et levier de création de valeur durable — meilleure expérience pour tous, élargissement des publics et des marchés, réputation et confiance. C’est la formulation qui transforme une ligne de coût en avantage concurrentiel, et c’est l’axe sociétal des quatre axes de la responsabilité numérique des entreprises.',
      question:
        'Qu’est-ce que l’accessibilité rapporte à CETTE entreprise, au-delà d’éviter une sanction ?',
      quoiMettre: [
        'Le marché élargi, chiffré si possible : le public concerné ne se limite pas aux handicaps permanents, il inclut les handicaps temporaires, les situations de handicap, l’âge, la langue et la littératie.',
        'Le bénéfice pour tous les clients, qui est l’argument le plus fort parce qu’il n’oppose personne : sous-titres dans le train, contraste au soleil, langage clair pour quiconque est pressé.',
        'La confiance et la réputation comme actif immatériel : long à construire, difficile à imiter, immédiat à perdre.',
        'Le risque évité, en face : désaffection d’un segment, mauvaise publicité, contentieux — le cours cite le procès intenté à une chaîne de pizzerias par un client aveugle qui ne pouvait pas commander en ligne.',
        'L’anticipation réglementaire comme différenciation : être conforme avant que l’EAA ou la LHand révisée n’y obligent, c’est arriver le premier sur un marché où les concurrents devront rattraper.',
        '📘 Les « aménagements raisonnables » : l’obligation se pèse — coût, faisabilité. On vise donc l’optimum supportable, pas le tout ou rien.',
      ],
      exemple:
        'Atelier Léman, 45 salariés et 6,2 M CHF de chiffre d’affaires, chiffre à 12 000 CHF la reprise du parcours de réservation. En face : les six entreprises genevoises visées par le pilote sont subventionnées par la Ville et demandent désormais un service utilisable par tous leurs collaborateurs, y compris ceux en situation de handicap. L’accessibilité cesse d’être un poste de dépense pour devenir la condition d’entrée dans l’appel d’offres. Chiffre illustratif.',
      piege:
        'Défendre l’accessibilité par la seule morale. Le jury attend un argument stratégique, et un argument moral seul se fait balayer d’un « nous n’en avons pas les moyens ».',
      reflexe:
        'Deux phrases, jamais une seule : ce que l’entreprise évite, et ce qu’elle gagne. Puis cite les « aménagements raisonnables » pour montrer que tu sais que cela se pèse — c’est ce qui rend la recommandation crédible.',
      notions: ['double-levier-accessibilite', 'lhand', 'rne', 'quatre-axes-rne'],
    },
  ],

  methode: [
    {
      titre: '1. Choisir un parcours, pas un site',
      detail:
        'Écris en haut du brouillon un parcours de bout en bout, celui dont dépend l’activité : « réserver une réparation », « souscrire l’abonnement », « joindre un humain ». Tout le reste du travail se fait à l’intérieur de ce parcours. C’est ce qui transforme un sujet immense en un objet traitable en dix minutes.',
      aEviter:
        'Annoncer qu’on va « auditer le site ». Un site entier ne s’audite pas à l’oral, et la réponse devient une liste de bonnes intentions.',
    },
    {
      titre: '2. Relever les faits bruts de l’énoncé, sans les qualifier',
      detail:
        'Recopie tel quel tout ce qui décrit l’usage : nombre d’étapes, délais d’attente, options figées, canaux supprimés, témoignages d’usagers, chiffres par segment d’âge. À ce stade, aucun jugement : on constitue la matière. Les phrases de témoignage sont particulièrement rentables, parce qu’elles nomment l’obstacle mieux qu’un audit.',
      aEviter:
        'Commencer par les principes et chercher ensuite des exemples pour les remplir. On finit toujours par inventer ce qui manque.',
    },
    {
      titre: '3. Ranger chaque fait sous un des quatre principes — et accepter les cases vides',
      detail:
        'Prends les faits un par un et demande-toi ce qui empêche l’usager : il ne perçoit pas (P), il ne peut pas agir (U), il ne comprend pas (C), son outil ne suit pas (R). Un fait peut relever de deux principes : choisis celui qui bloque en premier. Si un principe reste vide, écris « non documenté » et propose le test qui le remplirait.',
      aEviter:
        'Forcer un fait dans une case pour que les quatre lignes soient pleines. Une case honnêtement vide, assortie d’un test, vaut mieux qu’une case remplie au hasard.',
    },
    {
      titre: '4. Classer les obstacles en quatre familles',
      detail:
        'Reprends chaque obstacle et attribue-lui sa famille : technique, ergonomique, organisationnel, stratégique. Ce second classement révèle ce que le premier cache — si tous les obstacles sont techniques, la correction est un budget ; s’il y en a un de stratégique, c’est la stratégie elle-même qui est en cause, et c’est là que se joue la note.',
      aEviter:
        'Sauter cette étape parce qu’elle semble redondante. C’est elle qui distingue « le bouton est trop petit » de « le choix du tout-numérique exclut un public », et seule la seconde phrase est une réponse de stratégie.',
    },
    {
      titre: '5. Écrire une correction par obstacle, bornée et attribuée',
      detail:
        'Chaque ligne du diagnostic se termine par une mesure concrète, son propriétaire et, si possible, son ordre de grandeur en coût ou en délai. Priorise : les non-conformités bloquantes du parcours critique d’abord, le confort ensuite. Une mesure sans propriétaire ne se fait jamais.',
      aEviter:
        'Empiler des mesures sans les hiérarchiser. Une liste de douze corrections non priorisées se lit comme un refus de choisir.',
    },
    {
      titre: '6. Poser deux indicateurs qui ne mesurent pas la même chose',
      detail:
        'Un indicateur de moyen — le taux de conformité AA du parcours — et un indicateur de résultat — la part des usagers d’un segment qui vont au bout. Donne à chacun sa valeur de départ, même estimée, et dis explicitement lequel commande en cas de divergence.',
      aEviter:
        'Se contenter du taux de conformité. C’est le chiffre le plus facile à faire monter et le moins lié à ce que vivent les usagers.',
    },
    {
      titre: '7. Trancher, en nommant l’arbitrage',
      detail:
        'Termine par une position argumentée : le risque n’est pas juridique mais stratégique, l’accessibilité est un double levier, et la question n’est pas de savoir s’il faut le faire mais comment le faire de façon économiquement supportable. Pose la condition minimale — un canal humain joignable, digital-first sans être digital-only — et renvoie-la au SAF comme critère d’acceptabilité.',
      aEviter:
        'Rester au constat, ou promettre le « tout accessible ». Le premier ne décide pas, le second n’est pas crédible face à une PME de 45 salariés.',
    },
  ],

  liens: [
    {
      vers: 'rne',
      nature: 'precise',
      explication:
        'La responsabilité numérique des entreprises annonce quatre axes — économique, technologique, environnemental, sociétal ; POUR est l’outil qui remplit le quatrième, sans quoi l’axe sociétal reste une intention sans critère.',
    },
    {
      vers: 'sobriete-qta',
      nature: 'soppose',
      explication:
        'La sobriété allège le service, l’accessibilité l’enrichit : supprimer une fonction pour consommer moins peut supprimer précisément l’alternative dont un public dépend — c’est la sobriété injuste, et POUR est le garde-fou qui la détecte.',
    },
    {
      vers: 'donut',
      nature: 'alimente',
      explication:
        'Le schéma du plancher social porte « réseaux », c’est-à-dire l’accès à l’information : un service inaccessible fait tomber un public sous le plancher, et l’accessibilité cesse alors d’être une bonne pratique pour devenir une condition de durabilité.',
    },
    {
      vers: 'parties-prenantes',
      nature: 'alimente',
      explication:
        'Les publics exclus par un service sont des parties prenantes à fort intérêt et faible pouvoir : personne ne parle pour eux, ils partent en silence — et POUR est ce qui les rend visibles avant que le chiffre d’affaires ne les signale.',
    },
    {
      vers: 'saf',
      nature: 'alimente',
      explication:
        'Le diagnostic POUR entre au SAF par deux portes : l’acceptabilité, parce qu’une option qui exclut un public sera refusée par lui, et la faisabilité, parce que le coût de la mise en conformité est un chiffre à mettre dans la balance.',
    },
  ],

  pieges: [
    {
      titre: 'Réduire l’accessibilité au handicap visuel permanent',
      explication:
        'Le périmètre du cours est bien plus large : handicaps permanents, mais aussi handicaps temporaires — un bras cassé, un œil opéré —, situations de handicap — environnement bruyant, plein soleil, mains occupées, connexion lente, petit écran —, âge, langue et littératie. Réduire l’accessibilité aux personnes aveugles réduit du même coup l’argument économique à presque rien.',
      reflexe:
        'Cite trois publics de familles différentes dès ta première phrase : une personne malvoyante, un client avec un bras dans le plâtre, quelqu’un qui consulte son téléphone au soleil. Le périmètre est posé, et l’argument de marché devient évident.',
    },
    {
      titre: 'Confondre obligation légale et responsabilité stratégique',
      explication:
        'C’est le cœur du cas d’école du cours : « aucun manquement légal constaté », et pourtant douze pour cent des clients âgés sont partis en un an. La conformité protège d’une sanction, elle ne protège ni de la désaffection, ni de la réputation, ni du durcissement à venir de la loi.',
      reflexe:
        'Une phrase apprise par cœur : « le risque n’est pas juridique, mais stratégique ». Elle se place partout et elle démarque immédiatement une réponse informée d’une réponse de bon sens.',
    },
    {
      titre: 'Réciter POUR sans l’appliquer',
      explication:
        'Quatre définitions correctes et zéro fait de l’énoncé rattaché à chacune : c’est la réponse la plus fréquente, et elle vaut la moyenne au mieux. Le modèle n’est pas un contenu à restituer, c’est une grille à remplir avec le cas qu’on a sous les yeux.',
      reflexe:
        'Ne prononce jamais un des quatre mots sans le faire suivre de « ici, c’est… » et d’un fait précis. Quatre principes, quatre faits, quatre corrections : la structure porte la réponse toute seule.',
    },
    {
      titre: 'Opposer la sécurité et l’accessibilité comme si c’était insoluble',
      explication:
        'La double authentification obligatoire sans alternative est un obstacle U, et l’argument « c’est pour la sécurité » sert à clore le débat. Or la sécurité n’impose pas un canal unique : elle impose un niveau de garantie, que plusieurs voies peuvent atteindre — SMS, appel, carte matricielle, vérification en agence.',
      reflexe:
        'Reformule la contrainte au lieu de l’accepter : « quel niveau de sécurité faut-il ? » plutôt que « quel outil impose-t-on ? ». C’est ce déplacement qui débloque presque toujours l’arbitrage.',
    },
    {
      titre: 'Traiter l’accessibilité après le lancement',
      explication:
        'Le cours est explicite : l’accessibilité s’intègre à la gouvernance, au budget, à la conception, au développement, aux tests, à l’audit, aux mises à jour et aux indicateurs. Ajoutée après coup, elle coûte plusieurs fois le prix et ne rattrape jamais une architecture mal posée.',
      reflexe:
        'Dans toute recommandation, place au moins une mesure de gouvernance — un responsable désigné, un critère d’accessibilité dans les cahiers des charges d’achat — à côté des mesures techniques. C’est ce qui distingue une correction d’un dispositif.',
    },
  ],

  variantes: [
    {
      sujet: 'Le deuxième et le troisième principe changent de libellé selon le support',
      formulations: [
        {
          texte:
            'P — Perceptible · O — Opérable (Operable) · U — Understandable · R — Robuste. L’acronyme suit les initiales anglaises et l’avertissement du support est explicite : « les supports francophones traduisent O (Operable) par Utilisabilité et U (Understandable) par Compréhensibilité ».',
          source: 'encyclopédie §31, tableau des quatre principes WCAG',
        },
        {
          texte:
            'P — Perceptible · U — Utilisable · C — Compréhensible · R — Robuste, avec la ligne de bas de schéma « Percevoir · Utiliser · Comprendre · Fonctionner avec différents outils ».',
          source: 'schéma 23 du cours et fiche P09 sur le volet numérique',
        },
        {
          texte: 'Mémo écrit « P-U-C-R » ou « POUR » (Perceptible, Utilisable, Compréhensible, Robuste).',
          source: 'fiche de révision sur l’accessibilité numérique',
        },
      ],
      consigne:
        'Ne tranche pas, et surtout ne corrige pas le schéma : l’acronyme POUR est construit sur l’anglais, les libellés français ne suivent pas les initiales, et les deux jeux de mots désignent exactement les mêmes quatre principes, dans le même ordre. À l’oral, la formule qui rapporte est : « le deuxième principe, Operable en anglais, que les supports francophones rendent par Utilisable ; le troisième, Understandable, rendu par Compréhensible ». Ce qui ne varie jamais, c’est l’ordre — perception, action, compréhension, compatibilité —, et cet ordre est logique : on ne peut pas se servir de ce qu’on ne perçoit pas, ni comprendre ce dont on ne peut pas se servir.',
    },
    {
      sujet: 'Adjectif ou nom pour désigner chaque principe',
      formulations: [
        { texte: '« Perceptible / Perceptibilité », « Robuste / Robustesse » — les deux formes sont données côte à côte.', source: 'encyclopédie §31' },
        { texte: '« PERCEPTIBLE », « UTILISABLE », « COMPRÉHENSIBLE », « ROBUSTE » — uniquement des adjectifs.', source: 'schéma 23 du cours' },
      ],
      consigne:
        'Écart de forme, sans enjeu de contenu. Emploie les adjectifs, qui sont ceux du schéma et qui s’enchaînent naturellement après « le contenu doit être… ». Aucune raison de signaler cette variante à l’oral, sauf si l’on t’interroge sur la formulation exacte du support.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman SA — le parcours de réservation passé au POUR',
    situation:
      'La direction a tranché : le pilote se fera — 40 vélos chez 6 entreprises genevoises sur 12 mois. L’abonnement se pilote par une application (réserver un vélo, le débloquer, signaler une panne), et le guichet de Plainpalais réduit ses horaires pour financer l’opération. Avant que la recommandation soit écrite, le volet numérique passe par POUR, parce que la moitié des clients historiques de la réparation ont plus de soixante ans et que ce sont eux qui font la réputation locale de la marque. Les chiffres ci-dessous sont illustratifs.',
    deroule: [
      {
        etiquette: 'Le parcours retenu',
        contenu:
          '« Réserver une réparation et récupérer son vélo », de la page d’accueil jusqu’à la confirmation. Un seul parcours, celui dont vit l’atelier — pas le site entier.',
      },
      {
        etiquette: 'P — Perceptible',
        contenu:
          'Les trois formules d’abonnement ne se distinguent que par une pastille de couleur ; le prix mensuel est en gris clair sur blanc ; la vidéo de présentation n’a pas de sous-titres. Correction : un libellé texte par formule, contraste vérifié, sous-titres ajoutés. Famille : technique.',
      },
      {
        etiquette: 'U — Utilisable',
        contenu:
          'Le sélecteur de date ne se pilote qu’à la souris ; la session expire au bout de 5 minutes ; il faut 4 écrans pour obtenir le numéro d’un mécanicien. Correction : parcours entièrement pilotable au clavier, délai porté à 30 minutes, numéro direct affiché sur chaque écran. Famille : ergonomique, et le plus urgent.',
      },
      {
        etiquette: 'C — Compréhensible',
        contenu:
          '« Erreur 402 » à la validation, et « votre créneau n’est pas éligible » sans dire pourquoi. Correction : des messages qui disent ce qui s’est passé et ce qu’il faut faire ensuite, relus par une personne extérieure à l’équipe. Famille : ergonomique.',
      },
      {
        etiquette: 'R — Robuste',
        contenu:
          'Non documenté : personne n’a testé ailleurs que sur les deux ordinateurs de la direction. À vérifier avec un lecteur d’écran, sur un appareil de cinq ans et en connexion lente. Le dire vaut mieux que l’inventer.',
      },
      {
        etiquette: 'L’obstacle stratégique',
        contenu:
          'Il n’est dans aucune des quatre lignes : c’est le choix de faire de l’application le canal unique du pilote, doublé de la réduction des horaires du guichet. Famille : stratégique — et c’est la seule ligne qui remet en cause la décision elle-même.',
      },
      {
        etiquette: 'Les deux indicateurs',
        contenu:
          'De moyen : taux de conformité AA du parcours, 78 % au départ, cible 95 % à six mois. De résultat : part des réservations menées à terme par les clients de plus de 65 ans, 41 % au départ, cible 75 %. En cas de divergence, c’est le second qui commande.',
      },
      {
        etiquette: 'La condition posée au pilote',
        contenu:
          'Le pilote se lance avec un canal humain maintenu : une ligne directe affichée sur chaque écran et le guichet de Plainpalais ouvert aux horaires actuels pendant les douze mois. Digital-first, jamais digital-only. Coût estimé : 12 000 CHF pour la reprise du parcours, à comparer aux 22 % de clients âgés que la réparation ne peut pas perdre.',
      },
    ],
    conclusion:
      'POUR n’a pas dit non au pilote : il a nommé cinq obstacles précis, dont un seul est stratégique, et il a posé une condition qui coûte peu au regard de ce qu’elle protège. Cette condition ne reste pas une intention — elle repart dans deux outils : au SAF, où le maintien du canal humain devient un critère d’acceptabilité pour les clients historiques, et dans le business model, où le guichet de Plainpalais cesse d’être un coût à supprimer pour redevenir un canal de relation. Et l’argument tient dans les deux sens : moins de risque de désaffection, plus de crédibilité face à des entreprises clientes subventionnées qui demandent désormais un service utilisable par tous leurs collaborateurs.',
  },

  phraseOral:
    'Chez Atelier Léman, le parcours de réservation est conforme AA à 78 % — et pourtant six clients de plus de 65 ans sur dix ne vont pas au bout : la conformité est un indicateur de moyen, la réussite du parcours est un indicateur de résultat, et c’est le second qui commande. POUR me sert à nommer où ça casse, ici sur le U avec un sélecteur de date qui ne se pilote qu’à la souris, et à poser la seule condition qui compte pour le pilote : digital-first, jamais digital-only. Le risque n’est pas juridique — aucune loi n’oblige encore cette PME — il est stratégique, parce que le public qui part est précisément celui qui fait la réputation locale que les marques low-cost en ligne ne peuvent pas copier.',

  aRetenir: [
    { cle: 'Ce que c’est', valeur: '📘 WCAG : normes internationales du W3C, résumées par l’acronyme POUR' },
    { cle: 'Les quatre principes', valeur: 'Perceptible · Utilisable · Compréhensible · Robuste — l’ordre ne change jamais' },
    { cle: 'La variante à citer', valeur: '📘 O — Opérable / U — Understandable (encyclopédie) ↔ U — Utilisable / C — Compréhensible (schéma 23) ; mémo aussi noté P-U-C-R' },
    { cle: 'Les niveaux', valeur: 'A, AA, AAA — AA est la cible exigée par les réglementations' },
    { cle: 'Le cadre légal', valeur: '📘 eCH-0059 (public suisse) · EAA depuis juin 2025 · LHand en révision → le privé · art. 21A Cst-GE' },
    { cle: 'La règle des indicateurs', valeur: 'Un de moyen (conformité) ET un de résultat (parcours réussi) — le second commande' },
    { cle: 'Le risque', valeur: '📘 Exclusion indirecte : légal, performant, et excluant de fait' },
    { cle: 'La phrase', valeur: '📘 « Le risque n’est pas juridique, mais stratégique »' },
    { cle: 'Le gain', valeur: '📘 Double levier : responsabilité numérique ET création de valeur durable' },
    { cle: 'La recommandation type', valeur: '🔎 Digital-first, jamais digital-only : l’application plus un canal humain joignable' },
    { cle: 'La limite du modèle', valeur: 'POUR ne dit rien de l’empreinte environnementale du numérique — autre outil' },
  ],

  notions: [
    'accessibilite-numerique',
    'wcag',
    'pour',
    'double-levier-accessibilite',
    'exclusion-indirecte',
    'discrimination-directe',
    'inclusion-numerique',
    'utilisabilite',
    'kpi-accessibilite',
    'european-accessibility-act',
    'lhand',
    'cadre-legal-accessibilite',
    'illectronisme',
    'rne',
    'quatre-axes-rne',
    'sobriete-numerique',
  ],
}
