import type { Modele } from './types'

export const modele: Modele = {
  id: 'effet-rebond',
  numero: 21,
  slug: 'effet-rebond',
  nom: 'Effet rebond',
  sousTitre: 'Plus d’efficacité ne garantit pas moins d’impact total',
  famille: 'numerique',
  etape: 'transverse',

  question:
    'Un gain d’efficacité annoncé quelque part se traduit-il vraiment par une baisse de l’impact total — ou sera-t-il réabsorbé par une hausse des usages ?',

  enUnePhrase:
    'L’effet rebond est le mécanisme par lequel un progrès technique réel — moins d’énergie, moins de matière, moins d’argent pour rendre le même service — rend ce service si peu coûteux qu’on en consomme davantage, au point que l’impact total peut rester stable, voire augmenter, alors que l’impact de chaque unité a bel et bien baissé.',

  produit:
    'Un verdict en valeur absolue sur un bénéfice annoncé : le gain unitaire chiffré, l’évolution probable du volume, le seuil à partir duquel le second annule le premier, et la condition à poser pour que le gain reste net.',

  quandUtiliser: [
    'Dès qu’un énoncé annonce un gain — « −30 % de consommation », « moins de papier », « moins de trajets ». C’est le réflexe déclencheur : un gain annoncé est toujours un gain par unité.',
    'Dès qu’une solution numérique est présentée comme écologique : cloud, intelligence artificielle, dématérialisation, capteurs, application. Le cours en fait le test central du volet numérique.',
    'Quand une option repose sur le partage ou l’abonnement — vélos partagés, flotte mutualisée, économie de la fonctionnalité : rendre un usage plus facile est précisément ce qui déclenche le rebond.',
    'Quand une réponse est en train de partir à sens unique, du côté positif. Le rebond est l’outil qui fait passer d’un avis à un raisonnement.',
    'Au moment d’arbitrer entre deux options : il transforme un argument vague — « c’est plus écologique » — en une condition testable.',
  ],

  quandNePasUtiliser: [
    'Pour refuser toute technologie. Le schéma dit « l’impact total PEUT augmenter », pas « augmentera » : le rebond est un risque à tester, jamais une condamnation.',
    'Pour mesurer l’impact propre d’une solution numérique — c’est le rôle des trois postes T-D-R, terminaux, data centers et réseaux. Le rebond porte sur ce que le gain déclenche, pas sur ce que la solution coûte.',
    'Quand le volume est physiquement bloqué et que ce blocage est démontré : quarante vélos restent quarante vélos. Encore faut-il l’écrire, plutôt que de le supposer.',
    'Comme phrase décorative jetée en conclusion. Un rebond cité sans les deux facteurs — gain unitaire et évolution du volume — ne prouve rien et ne rapporte rien.',
  ],

  schema: {
    h: 760,
    description:
      'Une chaîne de quatre cases va de gauche à droite : l’efficience monte, le coût par usage baisse, l’usage augmente, et l’impact total peut finalement monter. De la dernière case descend l’arithmétique qui explique le paradoxe, puis deux cases parallèles — les quatre formes du rebond et le test en valeur absolue — qui mènent toutes deux à la parade, la sobriété questionner-transférer-améliorer.',
    noeuds: [
      {
        id: 'efficience',
        titre: 'EFFICIENCE ↑',
        lignes: ['La technique s’améliore :', 'moins d’énergie, moins de', 'matière pour le même service'],
        x: 40,
        y: 40,
        l: 185,
        h: 140,
        point: 'efficience',
      },
      {
        id: 'cout',
        titre: 'COÛT PAR USAGE ↓',
        lignes: ['Une unité de service coûte', 'moins cher et pèse moins', 'lourd qu’avant'],
        x: 285,
        y: 40,
        l: 185,
        h: 140,
        point: 'cout-unitaire',
      },
      {
        id: 'usage',
        titre: 'USAGE ↑',
        lignes: ['Comme c’est moins cher,', 'on en fait plus — et on', 'en fait des choses nouvelles'],
        x: 530,
        y: 40,
        l: 185,
        h: 140,
        ton: 'alerte',
        point: 'usage',
      },
      {
        id: 'total',
        titre: 'IMPACT TOTAL PEUT ↑',
        lignes: ['Le gain unitaire est réel,', 'mais il est réabsorbé :', 'le total peut ne pas baisser'],
        x: 775,
        y: 40,
        l: 185,
        h: 140,
        ton: 'danger',
        point: 'impact-total',
      },
      {
        id: 'formule',
        titre: 'IMPACT TOTAL = UNITAIRE × VOLUME',
        lignes: ['un gain par unité ne conclut rien'],
        x: 40,
        y: 240,
        l: 920,
        h: 70,
        forme: 'bande',
        ton: 'accent',
        point: 'formule',
      },
      {
        id: 'formes',
        titre: 'LES QUATRE FORMES DU REBOND',
        lignes: [
          'Direct · le même usage coûte moins',
          'Indirect · on dépense ailleurs',
          'De marché · le prix baisse',
          'De croissance · on produit plus',
        ],
        x: 40,
        y: 350,
        l: 420,
        h: 170,
        point: 'formes',
      },
      {
        id: 'verdict',
        titre: 'LE TEST — CONCLURE EN ABSOLU',
        lignes: [
          'Combien au total cette année ?',
          'Combien l’an dernier ?',
          'Si le total ne baisse pas,',
          'il n’y a pas de gain.',
        ],
        x: 540,
        y: 350,
        l: 420,
        h: 170,
        ton: 'alerte',
        point: 'verdict',
      },
      {
        id: 'sobriete',
        titre: 'LA PARADE — SOBRIÉTÉ Q → T → A',
        lignes: ['Questionner le besoin d’abord,', 'transférer vers un moyen sobre,', 'améliorer seulement ensuite'],
        x: 270,
        y: 570,
        l: 460,
        h: 140,
        ton: 'positif',
        point: 'sobriete',
      },
    ],
    liens: [
      { de: 'efficience', vers: 'cout', depuis: 'droite', arrive: 'gauche' },
      { de: 'cout', vers: 'usage', depuis: 'droite', arrive: 'gauche' },
      { de: 'usage', vers: 'total', depuis: 'droite', arrive: 'gauche' },
      { de: 'total', vers: 'formule', depuis: 'bas', arrive: 'haut', libelle: 'l’arithmétique', ton: 'accent' },
      { de: 'formule', vers: 'formes', depuis: 'bas', arrive: 'haut', libelle: 'par quel chemin' },
      { de: 'formule', vers: 'verdict', depuis: 'bas', arrive: 'haut', libelle: 'comment trancher' },
      { de: 'formes', vers: 'sobriete', depuis: 'bas', arrive: 'haut' },
      { de: 'verdict', vers: 'sobriete', depuis: 'bas', arrive: 'haut', libelle: 'la seule vraie parade', ton: 'positif' },
    ],
    note:
      '📘 Exemple du cours : une technologie devient moins chère → on l’utilise davantage → le gain initial est réduit ou annulé. Le schéma écrit « peut » : le rebond est un risque à démontrer, pas une fatalité à réciter.',
  },

  points: [
    {
      id: 'efficience',
      libelle: 'Efficience ↑ — le gain technique de départ',
      cestQuoi:
        'La première case, et le seul fait vraiment certain du schéma. L’efficience, c’est obtenir le même résultat avec moins de moyens — moins d’électricité, moins de matière, moins de temps, moins d’argent. Elle se distingue de l’efficacité, qui demande seulement si le but est atteint, sans regarder ce qu’il a coûté. Ici, le progrès est réel et mesurable : personne ne le conteste, et c’est justement ce qui rend le piège efficace.',
      question:
        'Quel gain est annoncé, chiffré comment, et sur quelle unité porte-t-il exactement — par requête, par appareil, par kilomètre, par client ?',
      quoiMettre: [
        'Le gain tel qu’il est annoncé, avec son chiffre et son signe : « −35 % d’électricité », « deux fois plus rapide », « moitié moins de papier ».',
        'L’unité de référence, écrite noir sur blanc. Un pourcentage sans dénominateur n’est pas une donnée, c’est un argument de vente.',
        'Qui a mesuré ce gain, et sur quel périmètre : le fabricant sur son banc d’essai, l’hébergeur sur son parc, un audit indépendant.',
        'Ce que le gain ne couvre pas, presque toujours la fabrication : 📘 pour les terminaux, la fabrication pèse souvent plus lourd que tout l’usage.',
        '🔎 La durée sur laquelle le gain est promis : un gain de 35 % la première année ne dit rien de la troisième, quand le matériel aura vieilli.',
      ],
      exemple:
        'Atelier Léman envisage une plateforme de réservation pour son abonnement mobilité. L’hébergeur genevois annonce 35 % d’électricité en moins par réservation grâce à un centre de données récent (chiffre illustratif). Le gain est crédible et il est unitaire : il porte sur une réservation, pas sur l’année.',
      piege:
        'Prendre le gain annoncé pour la conclusion. « Le nouvel hébergeur consomme 35 % de moins, donc notre impact baisse de 35 % » : la deuxième moitié de la phrase ne découle pas de la première.',
      reflexe:
        'Écris le gain sous la forme « −35 % PAR réservation », en majuscules sur le mot PAR. Ce seul mot rappelle qu’il manque le second facteur.',
      notions: ['transformation-numerique', 'eco-conception', 'effet-offre-usage'],
    },
    {
      id: 'cout-unitaire',
      libelle: 'Coût / impact par usage ↓ — le déclencheur',
      cestQuoi:
        'La conséquence immédiate du gain, et le vrai moteur du rebond : chaque unité de service devient moins chère, moins lourde, moins pénible. Le coût dont parle cette case n’est pas seulement monétaire — c’est tout ce qui freinait l’usage : le prix, oui, mais aussi le temps d’attente, l’effort, l’encombrement, la mauvaise conscience.',
      question:
        'Qu’est-ce qui devient moins cher, plus rapide ou plus facile — et surtout, qui le ressent : l’entreprise, le client, l’utilisateur final ?',
      quoiMettre: [
        'Le coût monétaire par unité, avant et après. C’est le déclencheur le plus visible, rarement le plus puissant.',
        'L’impact physique par unité : kilowattheures, grammes de CO₂, litres d’eau, kilos de matière.',
        'Le temps et l’effort économisés : trois clics au lieu d’un déplacement. 🔎 Un usage rendu instantané est un usage rendu illimité.',
        'Le prix perçu par celui qui décide d’utiliser : un abonnement forfaitaire fait tomber le coût marginal à zéro dans la tête du salarié, même s’il ne l’est pas dans les comptes.',
        '🔎 Le signal envoyé : dire « c’est vert maintenant » lève le dernier frein, celui de la retenue volontaire. C’est le rebond moral, le plus difficile à chiffrer.',
      ],
      exemple:
        'Chez Atelier Léman, l’abonnement mobilité facture l’entreprise cliente au forfait mensuel. Pour le salarié qui prend un vélo, le trajet ne coûte plus rien du tout : ni argent, ni réservation à justifier, ni carte à sortir. Le coût par usage n’a pas seulement baissé, il a disparu du champ de conscience de la personne qui décide.',
      piege:
        'Ne compter que l’argent. Beaucoup de rebonds se déclenchent sans qu’un franc change de main : c’est la facilité, pas le prix, qui multiplie les usages.',
      reflexe:
        'Passe les trois déclencheurs en revue à voix haute : moins cher, plus rapide, plus facile. Si l’un des trois répond oui, le rebond est possible.',
      notions: ['effet-offre-usage', 'economie-fonctionnalite', 'economie-attention'],
    },
    {
      id: 'usage',
      libelle: 'Usage ↑ — la réaction des utilisateurs',
      cestQuoi:
        'La case comportementale, celle que les calculs d’ingénieur oublient. Ce qui devient moins coûteux est utilisé davantage : par les mêmes personnes, par de nouvelles personnes, et pour des choses qu’on ne faisait pas du tout avant. Personne ne décide de « faire un effet rebond » — il se produit parce que chaque décision individuelle est parfaitement raisonnable.',
      question:
        'Qui va en faire plus, pourquoi le ferait-il, et quel geste de retenue va disparaître maintenant que ça ne coûte plus rien ?',
      quoiMettre: [
        'La hausse du volume chez les utilisateurs actuels : plus de trajets, plus de requêtes, plus de fichiers conservés.',
        'Les nouveaux utilisateurs que la baisse de prix rend solvables — c’est le rebond de marché qui commence.',
        'Les usages entièrement nouveaux, ceux qui n’existaient pas parce qu’ils étaient absurdes au prix d’avant.',
        'Les gestes de retenue qui s’effacent : on ne trie plus ses photos, on ne coupe plus la vidéo, on ne regroupe plus ses déplacements.',
        '🔎 L’effet de substitution manquée : un usage nouveau ne remplace pas toujours un usage ancien. S’il s’ajoute, il n’évite rien.',
      ],
      exemple:
        'Sur le pilote d’Atelier Léman — 40 vélos chez 6 entreprises genevoises pendant 12 mois — le rebond ne se joue pas dans les serveurs mais sur la route. Si un salarié prend le vélo électrique pour un trajet qu’il faisait à pied ou en tram, l’abonnement n’évite aucune voiture : il ajoute un usage au lieu d’en remplacer un. Le vélo électrique reste peu impactant, mais le bénéfice annoncé — « nous retirons des voitures de la ville » — s’effondre.',
      piege:
        'Chercher une mauvaise intention. Le rebond n’est pas de la triche : le salarié qui prend un vélo gratuit fait un choix rationnel et même agréable.',
      reflexe:
        'Formule la question à l’envers : « qu’est-ce que cet usage remplace ? ». Si la réponse est « rien », l’usage s’ajoute et l’impact aussi.',
      notions: ['boucle-retroaction', 'effet-rebond', 'economie-attention'],
    },
    {
      id: 'impact-total',
      libelle: 'Impact total peut ↑ — le verdict du schéma',
      cestQuoi:
        'La dernière case, et la seule qui compte pour juger. Elle porte un mot décisif : « peut ». Le schéma n’affirme pas que l’impact total augmente — il affirme que rien, dans les trois cases précédentes, ne garantit qu’il baisse. Trois issues sont possibles : le total baisse (gain net), le total stagne (gain mangé), le total monte (rebond complet, parfois appelé backfire).',
      question:
        'L’an prochain, le total absolu — tonnes, kilowattheures, appareils, francs — sera-t-il inférieur à celui de cette année, oui ou non ?',
      quoiMettre: [
        'Le total annuel avant et le total annuel projeté après. Deux nombres, la même unité, la même période.',
        'La comparaison des deux vitesses : de combien baisse l’unitaire, de combien monte le volume. C’est la seule chose à comparer.',
        'Le seuil de bascule : le facteur de croissance du volume à partir duquel le gain est intégralement annulé.',
        'L’impact de fabrication de ce qu’il a fallu produire pour obtenir le gain — nouveaux serveurs, nouveaux terminaux, nouveaux capteurs.',
        '🔎 L’horizon retenu : un an, trois ans, la durée de vie du matériel. Le rebond met du temps à se déployer, un bilan à six mois ne le voit pas.',
      ],
      exemple:
        'Atelier Léman passe de 400 à 1 500 réservations par mois avec l’abonnement, tandis que chaque réservation consomme 35 % de moins. Le total est multiplié par 0,65 × 3,75, soit environ 2,4 : l’impact de la plateforme a plus que doublé pendant que son indicateur unitaire s’améliorait de 35 %. Les deux chiffres sont vrais en même temps, et c’est exactement ce que dit la case (chiffres illustratifs).',
      piege:
        'Transformer « peut » en « va », et conclure que tout progrès technique est vain. C’est l’erreur symétrique de la naïveté, et elle coûte autant de points.',
      reflexe:
        'Conclus toujours par une condition, jamais par une sentence : « le gain sera net si et seulement si le volume croît moins vite que le gain unitaire ».',
      notions: ['effet-rebond', 'effets-ocde', 'limites-planetaires'],
    },
    {
      id: 'formule',
      libelle: 'Impact total = impact unitaire × volume',
      cestQuoi:
        '📘 L’arithmétique qui tient tout le schéma, et la seule formule à retenir par cœur de tout le volet numérique. Elle a deux facteurs : l’efficacité technique agit sur le premier, les comportements et le marché sur le second. Agir sur un seul facteur ne dit rien du produit.',
      question:
        'Ai-je les deux facteurs sous les yeux, ou seulement le premier — celui que l’entreprise a choisi de communiquer ?',
      quoiMettre: [
        '📘 La démonstration chiffrée du cours, trois lignes qui se dessinent en dix secondes : avant, 1 unité × 10 = 10 ; après, 1 unité × 5 = 5, soit −50 % par unité ; en réel, 3 unités × 5 = 15, soit +50 % au total.',
        'Le seuil de bascule, qui se calcule de tête : si l’unitaire baisse de 35 %, il reste 0,65 ; le volume peut croître jusqu’à 1 ÷ 0,65 ≈ 1,5 fois avant que le gain soit annulé.',
        'Les deux facteurs remplis avec des ordres de grandeur, même approximatifs. Un ordre de grandeur assumé vaut mieux qu’un chiffre absent.',
        '🔎 Le fait que le volume dépend de décisions humaines, donc pilotables : c’est précisément ce qui rend la parade possible.',
        '📘 L’exemple du cours : si l’impact par requête baisse de 30 % mais que le nombre de requêtes double, la consommation totale augmente tout de même.',
      ],
      exemple:
        'Pour Atelier Léman : 0,65 (l’unitaire après gain) × 3,75 (le volume multiplié) ≈ 2,4. Et le seuil : au-delà de 1,5 fois le volume actuel, soit environ 615 réservations par mois, le gain d’efficience de l’hébergeur est intégralement mangé. Ce nombre-là, 615, est ce qu’il faut savoir dire — c’est lui qui transforme un avis en pilotage.',
      piege:
        'Comparer deux ratios entre eux — « notre impact par vélo est meilleur que celui du concurrent » — et croire qu’on a parlé d’impact. Deux ratios ne font jamais un total.',
      reflexe:
        'Devant tout chiffre, demande-toi : « ceci est-il un total ou un par-quelque-chose ? ». Si c’est un par-quelque-chose, il manque encore le nombre d’unités.',
      notions: ['effet-rebond', 'trois-postes-numerique', 'data-center'],
    },
    {
      id: 'formes',
      libelle: 'Les quatre formes du rebond',
      cestQuoi:
        '📘 Le cours distingue quatre chemins par lesquels un gain se réabsorbe. Ils ne s’excluent pas : un même projet peut en cumuler deux ou trois. Savoir en nommer la forme précise, plutôt que de dire « il y a un effet rebond », est ce qui fait la différence à l’oral.',
      question:
        'Par quel chemin exactement le gain va-t-il repartir — le même usage, une autre dépense, un marché élargi, ou une production accrue ?',
      quoiMettre: [
        '📘 Direct : le même usage devient moins coûteux, on l’utilise davantage. Le streaming devient plus efficient, on regarde plus d’heures.',
        '📘 Indirect : l’argent ou le temps économisé est dépensé ailleurs. Le télétravail économise des trajets, mais permet de s’installer plus loin et d’accroître les déplacements de loisir.',
        '📘 De marché : la technologie moins chère se diffuse plus largement. Le stockage cloud devient si bon marché qu’on ne supprime plus rien.',
        '📘 De croissance : l’efficacité nourrit la productivité, donc la croissance, donc de nouveaux usages. C’est la forme la plus lente et la plus massive.',
        '📚 L’ancêtre du concept : Jevons observe en 1865 que des machines à vapeur plus efficaces ont fait exploser la consommation britannique de charbon, pas baisser. Hors cours, mais le glossaire retient « paradoxe de Jevons » comme synonyme.',
      ],
      exemple:
        'L’abonnement d’Atelier Léman cumule deux formes. Direct : le trajet devient gratuit pour le salarié, il en fait plus. De marché : à 95 CHF par mois et par vélo, le vélo électrique devient accessible à des entreprises qui n’auraient jamais acheté un vélo à 2 600 CHF — le parc genevois de vélos électriques grossit donc au lieu de se substituer.',
      piege:
        'Se contenter du rebond direct, le plus intuitif, et manquer le rebond de marché — qui est presque toujours le plus lourd quand une offre devient un abonnement.',
      reflexe:
        'Balaye les quatre dans l’ordre en une phrase chacune, puis garde les deux qui mordent réellement sur le cas. Le correcteur entend que la grille est complète.',
      notions: ['effet-rebond', 'effets-ocde', 'boucle-retroaction'],
    },
    {
      id: 'verdict',
      libelle: 'Le test — conclure en valeur absolue',
      cestQuoi:
        'La règle de décision. Un gain unitaire est un fait ; seuls les totaux absolus permettent de conclure. Cette case transforme le schéma en outil : elle dit quel chiffre exiger avant d’accepter qu’une option soit qualifiée de durable.',
      question:
        'Le total absolu a-t-il baissé d’une année sur l’autre — et si l’entreprise ne peut pas répondre, pourquoi ne le peut-elle pas ?',
      quoiMettre: [
        'Deux totaux datés, même périmètre, même unité. C’est la forme minimale d’une preuve.',
        'Le périmètre couvert et, surtout, ce qui en est exclu : la fabrication, l’amont fournisseur, la fin de vie.',
        '📘 Un indicateur de suivi en absolu, pas seulement en ratio : mesurer la seule performance par unité laisse passer exactement le cas que le schéma décrit.',
        'Un garde-fou : un plafond de volume, une clause de non-renouvellement du matériel, un engagement de substitution — ce qui empêche le volume de partir.',
        '🔎 La phrase de repli quand les totaux manquent : « le gain unitaire est établi, le bilan absolu ne l’est pas encore ; voici le chiffre que je demanderais ». Dire de quoi ça dépend vaut mieux que trancher sans données.',
      ],
      exemple:
        'Le tableau de bord du pilote Atelier Léman ne doit pas afficher « kWh par réservation » mais « kWh totaux du mois » et « nombre de batteries en circulation ». Sur douze mois, un seul indicateur compte : le parc a-t-il remplacé des voitures — mesuré par une enquête auprès des 6 entreprises — ou s’est-il ajouté aux mobilités existantes ?',
      piege:
        'Accepter un KPI par unité comme preuve de durabilité, parce qu’il est celui que l’entreprise publie. C’est le mécanisme ordinaire du greenwashing, sans qu’il y ait forcément intention de tromper.',
      reflexe:
        'Une seule question, apprise par cœur : « en absolu, ça donne quoi ? ». Elle suffit à faire tomber neuf arguments verts sur dix.',
      notions: ['greenwashing', 'quatre-criteres-donut', 'externalite-negative'],
    },
    {
      id: 'sobriete',
      libelle: 'La parade — sobriété Q → T → A',
      cestQuoi:
        '📘 La seule réponse structurelle au rebond, parce qu’elle agit sur le second facteur de la formule — le volume — là où l’efficacité n’agit que sur le premier. Trois gestes dans un ordre imposé : questionner le besoin, transférer vers un moyen moins impactant, améliorer techniquement. La logique courante fait exactement l’inverse : améliorer, transférer, questionner en dernier.',
      question:
        'Ce besoin est-il réel ? Peut-on le satisfaire autrement ? Et seulement alors : comment l’optimiser ?',
      quoiMettre: [
        '📘 Q — Questionner : ce besoin est-il réel, ce service est-il nécessaire, peut-on ne pas le faire du tout ? En première intention, pas en dernier recours.',
        '📘 T — Transférer : le besoin peut-il être couvert par un moyen moins impactant — mutualiser, revenir à un moyen non numérique, réutiliser l’existant ?',
        '📘 A — Améliorer : le besoin confirmé et le moyen choisi, optimiser la technique. C’est l’étape utile, mais elle vient en troisième.',
        '📘 La distinction à savoir dire : l’efficacité réduit l’impact par unité, la sobriété agit sur le besoin et le volume. Sans sobriété, les gains d’efficacité peuvent être annulés par l’effet rebond.',
        '⚠️ Sobriété n’est pas suppression : le cours parle d’une « sélection raisonnée de ce qui est nécessaire », pas d’un renoncement. Supprimer une alternative accessible au nom de la sobriété serait une sobriété injuste.',
      ],
      exemple:
        'Sur la plateforme de réservation d’Atelier Léman. Q : les 6 entreprises veulent-elles une application, ou simplement savoir quel vélo est disponible et quand il revient d’atelier ? T : un tableau partagé et un SMS automatique couvriraient peut-être le besoin sans application ni serveur dédié. A : si l’application est confirmée, alors seulement — pages légères, pas de géolocalisation permanente, données minimisées.',
      piege:
        'Sauter directement au A parce que c’est la partie technique, celle qu’on sait faire. Optimiser un usage qu’on n’a jamais interrogé, c’est fabriquer un rebond soigné.',
      reflexe:
        'Impose-toi l’ordre à voix haute — « d’abord questionner, ensuite transférer, enfin améliorer » — même si la réponse au Q est oui. L’ordre est ce qui est noté.',
      notions: ['sobriete-numerique', 'sobriete-injuste', 'rgesn'],
    },
  ],

  methode: [
    {
      titre: '1. Isoler le gain annoncé et nommer son unité',
      detail:
        'Repère dans l’énoncé la phrase qui promet un progrès et récris-la sous la forme « X % de moins PAR unité ». Si l’unité n’est pas donnée, c’est déjà une information : le bénéfice est invérifiable en l’état, et tu peux le dire.',
      aEviter:
        'Recopier le pourcentage tel quel dans ta réponse. Un chiffre sans dénominateur circule sans être vérifié — c’est exactement ce que le schéma dénonce.',
    },
    {
      titre: '2. Trouver le déclencheur : qu’est-ce qui devient plus facile ?',
      detail:
        'Passe les trois déclencheurs : moins cher, plus rapide, plus facile. Puis identifie qui les ressent — l’entreprise qui paie, ou l’utilisateur qui décide. Le rebond naît chez celui qui décide, pas chez celui qui paie.',
      aEviter:
        'Ne regarder que le prix. Un forfait qui met le coût marginal à zéro dans la tête de l’utilisateur déclenche plus de rebond qu’une baisse de tarif de 20 %.',
    },
    {
      titre: '3. Nommer la forme du rebond attendue',
      detail:
        'Balaye les quatre formes du cours — direct, indirect, de marché, de croissance — et retiens la ou les deux qui mordent réellement sur le cas, avec la phrase de mécanisme qui va avec. « Rebond de marché : le service devient accessible à des clients qui n’achetaient pas, donc le parc total grossit. »',
      aEviter:
        'Dire « il y a un risque d’effet rebond » et passer à la suite. Sans forme nommée ni mécanisme, la phrase ne prouve pas qu’on a compris le modèle.',
    },
    {
      titre: '4. Poser l’arithmétique et calculer le seuil de bascule',
      detail:
        'Écris impact total = impact unitaire × volume, place tes deux facteurs, puis calcule le point de bascule : 1 divisé par le facteur unitaire restant. Un gain de 35 % laisse 0,65 ; 1 ÷ 0,65 ≈ 1,5. Au-delà d’une fois et demie le volume actuel, il n’y a plus de gain du tout.',
      aEviter:
        'Attendre d’avoir des chiffres exacts. Un ordre de grandeur annoncé comme tel — « disons que le volume triple » — fait avancer le raisonnement, une absence de chiffre l’arrête.',
    },
    {
      titre: '5. Conclure en valeur absolue, sous condition',
      detail:
        'Formule le verdict en une phrase à deux branches : « le gain sera net si le volume croît moins vite que X ; au-delà, l’impact total augmente malgré le progrès technique ». C’est cette structure conditionnelle qui distingue une analyse d’un avis.',
      aEviter:
        'Trancher dans un sens ou dans l’autre sans condition. « C’est écologique » et « c’est du greenwashing » sont deux façons de ne pas avoir fait le calcul.',
    },
    {
      titre: '6. Proposer la parade, et la rendre vérifiable',
      detail:
        'Termine par la sobriété dans l’ordre Q → T → A, puis attache-lui un garde-fou concret : un plafond de volume, un indicateur suivi en absolu, une clause de reprise du matériel, une durée d’engagement sur le parc existant. Une parade sans garde-fou reste une intention.',
      aEviter:
        'Conclure par « il faudra rester vigilant ». Le jury attend le chiffre qu’on surveillera et le seuil au-delà duquel on change de décision.',
    },
  ],

  liens: [
    {
      vers: 'sobriete-qta',
      nature: 'alimente',
      explication:
        'L’effet rebond est le diagnostic, la sobriété est l’ordonnance : le rebond montre que l’efficacité n’agit que sur l’impact unitaire, et Q → T → A est le seul geste qui attrape l’autre facteur, le volume.',
    },
    {
      vers: 'trois-postes',
      nature: 'precise',
      explication:
        'T-D-R dit où se loge l’impact d’une unité — terminaux, data centers, réseaux — et l’effet rebond dit combien d’unités il y aura : les deux se multiplient l’un l’autre, et on ne peut conclure qu’en tenant les deux.',
    },
    {
      vers: 'donut',
      nature: 'alimente',
      explication:
        'Le plafond écologique du Donut est une limite physique, donc absolue : le test du rebond est ce qui fournit le chiffre en absolu sans lequel on ne peut pas dire si une option repasse sous le plafond ou non.',
    },
    {
      vers: 'achats-durables',
      nature: 'precise',
      explication:
        'Remplacer un parc parce que le nouveau modèle consomme 25 % de moins est un rebond en soi : la fabrication a déjà eu lieu — d’où la règle des achats IT, acheter moins et utiliser plus longtemps avant d’acheter mieux.',
    },
    {
      vers: 'rne',
      nature: 'partage',
      explication:
        'Le rebond est l’argument central de l’axe environnemental de la RNE, mais il traverse aussi l’axe économique : un gain d’efficience réinvesti en volume ne produit ni économie de coût durable, ni réduction d’impact.',
    },
  ],

  pieges: [
    {
      titre: 'Traiter un gain unitaire comme un gain tout court',
      explication:
        'C’est l’erreur que le schéma existe pour empêcher, et c’est la plus fréquente à l’oral. « Le cloud est plus efficient, donc migrer réduit notre empreinte » enchaîne un fait vrai et une conclusion qui n’en découle pas : 📘 le cloud est plus efficient par unité, mais son abondance perçue nourrit l’effet rebond.',
      reflexe:
        'Dès qu’un pourcentage apparaît, cherche son dénominateur et dis-le à voix haute. « −35 % par réservation » ne s’entend pas comme « −35 % ».',
    },
    {
      titre: 'Faire du rebond une fatalité',
      explication:
        'Répondre « de toute façon il y aura un effet rebond, donc ça ne sert à rien » est aussi faux que la naïveté inverse. Le schéma écrit « peut » : le rebond dépend du volume, le volume dépend de décisions, et ces décisions sont précisément l’objet de la stratégie.',
      reflexe:
        'Après avoir signalé le risque, donne toujours la condition qui le désamorce. Un risque nommé sans parade est un constat, pas une recommandation.',
    },
    {
      titre: 'Confondre le rebond avec l’impact propre de la solution',
      explication:
        'Deux choses différentes. L’impact propre, c’est ce que coûte la solution elle-même — serveurs, terminaux, réseau, DEEE futurs : cela se traite avec T-D-R. Le rebond, c’est ce que le gain déclenche ensuite chez les utilisateurs. Une réponse complète les traite l’un après l’autre, pas l’un à la place de l’autre.',
      reflexe:
        'Deux lignes sur ton brouillon : « ce que ça coûte » et « ce que ça déclenche ». Si la seconde est vide, il manque le rebond ; si c’est la première, il manque T-D-R.',
    },
    {
      titre: 'Croire que le rebond ne concerne que le numérique',
      explication:
        'Le schéma est rangé dans le volet numérique parce que c’est là qu’il mord le plus fort, mais le mécanisme est général : isolation thermique et hausse de la température de confort, moteurs sobres et voitures plus lourdes, vélos partagés et trajets qui se faisaient à pied. Le savoir permet de placer le modèle dans une question qui ne parle pas de numérique.',
      reflexe:
        'Garde un exemple non numérique en réserve. Il prouve qu’on a compris un mécanisme, pas mémorisé un chapitre.',
    },
    {
      titre: 'Oublier le rebond de marché quand l’offre devient un abonnement',
      explication:
        'Passer de la vente à l’abonnement rend un service accessible à des clients qui n’achetaient pas. Le parc total grossit, même si chaque unité est mieux utilisée. C’est le point aveugle de toutes les propositions d’économie de la fonctionnalité, et il est souvent le plus lourd.',
      reflexe:
        'Devant tout modèle par abonnement ou partage, pose la question de la substitution : ce service remplace-t-il un usage existant, ou en crée-t-il un nouveau ?',
    },
  ],

  variantes: [
    {
      sujet: 'Le nom de la première case : efficience ou efficacité ?',
      formulations: [
        { texte: 'EFFICIENCE ↑', source: 'schéma n° 21, « Effet rebond »' },
        { texte: 'Efficacité technique ↑', source: 'fiche du volet numérique, partie 4.1' },
      ],
      consigne:
        'Divergence de formulation entre deux supports, pas de fond — mais la nuance vaut d’être connue, parce qu’elle est notée. L’efficacité demande si le but est atteint ; l’efficience demande s’il est atteint avec moins de moyens. Le mécanisme du rebond porte sur l’efficience au sens strict : c’est parce qu’une unité coûte moins qu’on en consomme plus. À l’oral, emploie le mot du schéma — efficience — et signale d’un mot que le cours écrit aussi « efficacité technique ». Montrer qu’on a lu les deux supports rapporte ; trancher entre eux ne rapporte rien.',
    },
    {
      sujet: 'La formulation de la dernière case',
      formulations: [
        { texte: 'IMPACT TOTAL PEUT ↑', source: 'schéma n° 21, dernière case' },
        { texte: 'Impact TOTAL stable ou en hausse', source: 'fiche du volet numérique, partie 4.1' },
      ],
      consigne:
        'Là, l’écart porte sur le fond et il faut savoir le dire. Le schéma laisse trois issues ouvertes — le total baisse, stagne ou monte — tandis que la fiche n’en retient que deux, en écartant d’emblée la baisse. Prends la formulation du schéma, qui est la plus prudente et la plus juste : « peut » est le mot qui transforme le rebond en risque à démontrer plutôt qu’en verdict à réciter. Puis ajoute que le cours, lui, va jusqu’à « stable ou en hausse » pour l’usage massif du numérique — sur ce terrain précis, l’observation lui donne raison.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman SA — l’abonnement mobilité passé au test du rebond',
    situation:
      'Le diagnostic est posé et l’option a été retenue : un pilote de 40 vélos chez 6 entreprises genevoises sur 12 mois, plutôt que de défendre la vente de vélos. La direction met en avant deux bénéfices — des vélos mieux utilisés que ceux qui dorment dans les garages, et une plateforme de réservation hébergée chez un prestataire 35 % plus sobre par requête. Le test du rebond intervient ici, avant d’écrire ces bénéfices dans la recommandation. Tous les chiffres qui suivent sont illustratifs.',
    deroule: [
      {
        etiquette: 'Le gain annoncé, et son unité',
        contenu:
          '−35 % d’électricité PAR réservation, mesuré par l’hébergeur sur son propre parc. Gain réel, périmètre étroit : il ne couvre ni les terminaux des salariés, ni la fabrication des vélos et des batteries.',
      },
      {
        etiquette: 'Le déclencheur',
        contenu:
          'Le forfait mensuel facturé à l’entreprise met le coût marginal du trajet à zéro pour le salarié qui décide. Moins cher, plus rapide, plus facile : les trois déclencheurs répondent oui.',
      },
      {
        etiquette: 'La forme du rebond — direct',
        contenu:
          'Le même usage devient gratuit à la marge, donc plus fréquent : les réservations passent de 400 à 1 500 par mois une fois les 6 entreprises entrées dans le pilote.',
      },
      {
        etiquette: 'La forme du rebond — de marché',
        contenu:
          'À 95 CHF par mois et par vélo, le vélo électrique devient accessible à des entreprises qui n’auraient jamais acheté un vélo à 2 600 CHF. Le parc genevois grossit : l’offre s’ajoute au lieu de remplacer.',
      },
      {
        etiquette: 'L’arithmétique',
        contenu:
          '0,65 × 3,75 ≈ 2,4. L’impact total de la plateforme est multiplié par 2,4 alors que son indicateur unitaire s’est amélioré de 35 %. Les deux affirmations sont vraies en même temps.',
      },
      {
        etiquette: 'Le seuil de bascule',
        contenu:
          '1 ÷ 0,65 ≈ 1,5 : au-delà d’environ 615 réservations par mois, le gain de l’hébergeur est intégralement mangé. C’est le chiffre à inscrire au tableau de bord du pilote.',
      },
      {
        etiquette: 'La parade — Q, T, A',
        contenu:
          'Q : les entreprises veulent-elles une application, ou savoir quand leur vélo revient d’atelier ? T : tableau partagé et SMS automatique à tester d’abord. A : si l’application est confirmée, pages légères et données minimisées, pas de suivi permanent.',
      },
      {
        etiquette: 'Le garde-fou chiffré',
        contenu:
          'Deux indicateurs en absolu, revus chaque trimestre : kilowattheures totaux de la plateforme, et part des trajets qui remplacent réellement une voiture — mesurée par enquête auprès des 6 entreprises, pas estimée.',
      },
    ],
    conclusion:
      'Le test du rebond n’a pas invalidé l’abonnement : il a désarmé deux arguments de vente et fourni deux conditions. Les bénéfices « hébergeur plus sobre » et « vélos mieux utilisés » ne peuvent pas figurer tels quels dans la recommandation — ils y entrent assortis d’un seuil, 615 réservations mensuelles, et d’une mesure de substitution. Ces deux conditions se retrouvent ensuite dans le SAF, où elles pèsent sur la faisabilité, et dans le Donut, où le bilan absolu est ce qui permet de dire si le plafond écologique est respecté.',
  },

  phraseOral:
    'L’hébergeur annonce 35 % d’électricité en moins, mais c’est 35 % par réservation : si l’abonnement fait passer Atelier Léman de 400 à 1 500 réservations par mois, l’impact total est multiplié par 2,4 alors même que l’indicateur unitaire s’améliore. Le point de bascule est à 615 réservations : au-delà, il n’y a plus de gain du tout. Je ne dis donc pas que l’abonnement est plus écologique — je dis qu’il l’est à condition de questionner le besoin avant d’optimiser la technique, et de suivre un total absolu plutôt qu’un ratio.',

  aRetenir: [
    { cle: 'La définition du cours', valeur: '📘 Lorsqu’un gain est atteint quelque part, une hausse d’utilisation ou d’impacts a lieu ailleurs' },
    { cle: 'La formule', valeur: 'Impact total = impact unitaire × nombre d’unités — deux facteurs, jamais un seul' },
    { cle: 'La chaîne', valeur: 'Efficience ↑ → coût par usage ↓ → usage ↑ → impact total PEUT ↑' },
    { cle: 'Le mot décisif', valeur: '« Peut » : le rebond est un risque à démontrer, pas une fatalité à réciter' },
    { cle: 'Les quatre formes', valeur: '📘 Direct · indirect · de marché · de croissance' },
    { cle: 'Le seuil de bascule', valeur: '1 ÷ (facteur unitaire restant) : un gain de 35 % tient jusqu’à 1,5 fois le volume' },
    { cle: 'La règle de preuve', valeur: 'Seuls les totaux absolus permettent de conclure ; un gain unitaire est un fait, pas une conclusion' },
    { cle: 'La parade', valeur: '📘 Sobriété Q → T → A : questionner le besoin, transférer, améliorer — dans cet ordre' },
    { cle: 'La phrase du cours', valeur: '📘 Le cloud est plus efficient par unité, mais son abondance perçue nourrit l’effet rebond' },
    { cle: 'À ne pas confondre', valeur: 'T-D-R = ce que la solution coûte · rebond = ce que le gain déclenche' },
  ],

  notions: [
    'effet-rebond',
    'sobriete-numerique',
    'sobriete-injuste',
    'trois-postes-numerique',
    'data-center',
    'transformation-numerique',
    'effets-ocde',
    'boucle-retroaction',
    'effet-offre-usage',
    'economie-fonctionnalite',
    'economie-attention',
    'achats-it-responsables',
    'obsolescence',
    'cycle-de-vie',
    'deee',
    'greenwashing',
    'externalite-negative',
    'quatre-criteres-donut',
    'limites-planetaires',
    'rne',
    'quatre-axes-rne',
    'rgesn',
    'eco-conception',
  ],
}
