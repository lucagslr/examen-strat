import type { Modele } from './types'

export const modele: Modele = {
  id: 'ocean-bleu-erac',
  numero: 9,
  slug: 'ocean-bleu-erac',
  nom: 'Océan bleu et matrice ERAC',
  sousTitre: 'Sortir de la concurrence frontale par l’innovation de valeur',
  famille: 'externe',
  etape: 'e4',

  question:
    'Faut-il continuer à se battre sur ce terrain-là, ou en changer — et si on en change, comment fabrique-t-on concrètement le nouveau terrain ?',

  enUnePhrase:
    'Quand l’analyse de Porter montre que le secteur est saturé (« océan rouge »), on cesse de vouloir battre les concurrents sur leurs critères : on reconstruit l’offre attribut par attribut avec la matrice ERAC — éliminer, réduire, augmenter, créer — pour atteindre un espace où la concurrence n’est plus pertinente (« océan bleu »).',

  produit:
    'Une proposition de valeur reconstruite, écrite attribut par attribut, avec les coûts qu’elle supprime en face de la valeur qu’elle ajoute. Autrement dit : une option stratégique de plus, formulée assez précisément pour être comparée aux autres au SAF.',

  quandUtiliser: [
    'Quand la toile de Porter donne une pression globale forte : rivalité élevée, offres interchangeables, guerre des prix. C’est le signal d’entrée du modèle.',
    'Quand l’entreprise perd du terrain sans faire de faute : elle exécute correctement une stratégie que tout le monde exécute.',
    'Quand le croisement faiblesse × menace du SWOT montre une marge prise en tenaille — coûts qui montent d’un côté, prix qui baissent de l’autre.',
    'Quand on doit produire des options vraiment distinctes : l’ERAC est la machine à fabriquer l’option « changer de modèle », face à l’option « consolider ».',
    'Quand la durabilité entre dans le raisonnement : 📘 le cours en fait explicitement un levier d’innovation-valeur, parce que l’éco-conception et la réparation ajoutent de la valeur en retirant du coût.',
  ],

  quandNePasUtiliser: [
    'Quand la toile de Porter est faible : le secteur est déjà peu disputé, la question n’est pas d’en sortir mais d’y construire des barrières.',
    'Quand le problème est d’exécution et non de positionnement : une entreprise qui livre en retard n’a pas besoin d’un océan bleu, elle a besoin de livrer à l’heure.',
    'Quand on n’a pas encore listé les attributs sur lesquels le secteur se bat. Sans cette liste, l’ERAC produit quatre idées sans rapport entre elles.',
    'Comme étiquette décorative posée sur n’importe quelle nouveauté. 📘 Le cours signale précisément cette faute : appeler « océan bleu » toute innovation.',
  ],

  schema: {
    h: 780,
    description:
      'En haut, l’océan rouge — le marché saturé — mène à l’océan bleu par l’innovation de valeur. En dessous, la matrice ERAC range ses quatre mouvements en deux groupes : Éliminer et Réduire font baisser les coûts, Augmenter et Créer font monter la valeur. Les quatre convergent vers une seule case : l’innovation-valeur.',
    noeuds: [
      {
        id: 'cadreCouts',
        titre: 'E + R → LES COÛTS BAISSENT',
        x: 40,
        y: 300,
        l: 440,
        h: 220,
        forme: 'cadre',
        ton: 'sourd',
      },
      {
        id: 'cadreValeur',
        titre: 'A + C → LA VALEUR MONTE',
        x: 520,
        y: 300,
        l: 440,
        h: 220,
        forme: 'cadre',
        ton: 'sourd',
      },
      {
        id: 'rouge',
        titre: 'OCÉAN ROUGE',
        lignes: [
          'Le marché tel qu’il existe déjà',
          'Tous se battent sur les mêmes',
          'critères : la guerre des prix',
        ],
        x: 40,
        y: 40,
        l: 420,
        h: 140,
        ton: 'danger',
        point: 'ocean-rouge',
      },
      {
        id: 'bleu',
        titre: 'OCÉAN BLEU',
        lignes: [
          'Un espace de marché nouveau',
          'que personne ne dispute encore :',
          'la concurrence perd sa force',
        ],
        x: 540,
        y: 40,
        l: 420,
        h: 140,
        ton: 'positif',
        point: 'ocean-bleu',
      },
      {
        id: 'bande',
        titre: 'MATRICE ERAC — 4 MOUVEMENTS',
        lignes: ['reconstruire l’offre, pas la subir'],
        x: 40,
        y: 210,
        l: 920,
        h: 70,
        forme: 'bande',
        ton: 'sourd',
        point: 'erac-matrice',
      },
      {
        id: 'e',
        titre: 'E — ÉLIMINER',
        lignes: [
          'Quel attribut du secteur',
          'peut disparaître sans manquer',
          'au client ? Coûts en moins.',
        ],
        x: 64,
        y: 356,
        l: 176,
        h: 140,
        point: 'e',
      },
      {
        id: 'r',
        titre: 'R — RÉDUIRE',
        lignes: [
          'Quel attribut est surdimensionné',
          'par rapport à ce que le client',
          'en fait vraiment ?',
        ],
        x: 280,
        y: 356,
        l: 176,
        h: 140,
        point: 'r',
      },
      {
        id: 'a',
        titre: 'A — AUGMENTER',
        lignes: [
          'Quel attribut mérite d’être',
          'poussé bien au-delà du niveau',
          'habituel du secteur ?',
        ],
        x: 544,
        y: 356,
        l: 176,
        h: 140,
        point: 'a',
      },
      {
        id: 'c',
        titre: 'C — CRÉER',
        lignes: [
          'Quel attribut n’existe nulle',
          'part dans le secteur et ferait',
          'venir de nouveaux clients ?',
        ],
        x: 760,
        y: 356,
        l: 176,
        h: 140,
        point: 'c',
      },
      {
        id: 'iv',
        titre: 'INNOVATION-VALEUR',
        lignes: [
          'E et R font baisser les coûts,',
          'A et C font monter la valeur.',
          'Les deux ensemble, ou rien.',
        ],
        x: 220,
        y: 580,
        l: 560,
        h: 140,
        ton: 'accent',
        point: 'innovation-valeur',
      },
    ],
    liens: [
      { de: 'rouge', vers: 'bleu', libelle: 'innovation de valeur', depuis: 'droite', arrive: 'gauche' },
      { de: 'rouge', vers: 'bande', libelle: 'l’outil du passage', depuis: 'bas', arrive: 'haut' },
      { de: 'e', vers: 'iv' },
      { de: 'r', vers: 'iv' },
      { de: 'a', vers: 'iv' },
      { de: 'c', vers: 'iv' },
    ],
    note: 'Une offre qui ajoute de la valeur en ajoutant du coût n’est pas un océan bleu : c’est de la différenciation classique. Le bleu commence quand la valeur monte pendant que les coûts baissent.',
  },

  points: [
    {
      id: 'ocean-rouge',
      libelle: 'OCÉAN ROUGE — le marché tel qu’il est',
      cestQuoi:
        '📘 Un marché qui existe d’ores et déjà et où se joue une concurrence intense. La couleur rouge symbolise le sang perdu par les entreprises qui s’y affrontent : tout le monde vend à peu près la même chose, aux mêmes clients, sur les mêmes critères — si bien qu’il ne reste plus que le prix comme argument.',
      question:
        'Sur ce terrain, est-ce que tous les acteurs se battent avec exactement les mêmes armes — et est-ce que quelqu’un y gagne encore de l’argent ?',
      quoiMettre: [
        'Le verdict de la toile de Porter, chiffré : forces globalement fortes = peu de valeur laissée aux entreprises en place.',
        'La liste des attributs sur lesquels tout le secteur s’aligne (prix, largeur de gamme, délai, garantie, showroom). Cette liste est la matière première de l’ERAC : sans elle, la matrice ne peut pas être remplie.',
        'Les signes concrets de la guerre des prix : promotions permanentes, marges qui s’érodent, offres qu’un client ne sait plus distinguer.',
        'La croissance du marché : un marché qui ne grossit plus oblige chaque acteur à prendre ses parts chez les autres — c’est ce qui fait monter la rivalité.',
        '📘 L’exemple du cours : la bière en Allemagne, marché saturé où « un grand nombre de petites brasseries locales ont couru à la ruine ou ont été reprises par de grandes marques ».',
      ],
      exemple:
        'Atelier Léman, domaine d’activité « vente de vélos » : rivalité notée 5 sur 5, nouveaux entrants 4, pouvoir des fournisseurs 4 (illustratif). Les marques en ligne vendent le même produit, comparé sur les mêmes fiches techniques, avec une structure de coûts plus légère. Les ventes reculent de 8 % sur deux ans sans qu’aucune faute n’ait été commise : c’est la définition d’un océan rouge.',
      piege:
        'Déclarer « océan rouge » à partir d’une impression — « il y a beaucoup de concurrents ». Le nombre d’acteurs n’est pas l’intensité de la rivalité : un secteur à trois acteurs peut être plus sanglant qu’un secteur à trente.',
      reflexe:
        'Faire la phrase complète, en partant de l’outil précédent : « la toile de Porter donne 5 en rivalité et 4 en menace d’entrée, donc océan rouge ». Le rouge est une conclusion de Porter, jamais une intuition.',
      notions: ['ocean-rouge', 'toile-porter', 'intensite-concurrentielle', 'das'],
    },
    {
      id: 'ocean-bleu',
      libelle: 'OCÉAN BLEU — l’espace que personne ne dispute',
      cestQuoi:
        '📘 Un nouvel espace de marché, où la concurrence est minime. Le bleu connote « la beauté et l’étendue de la mer, sans un navire — celui du concurrent — en vue ». L’idée n’est pas de mieux battre les concurrents, mais de se placer là où ils ne sont pas : la concurrence ne devient pas plus facile, elle devient moins pertinente.',
      question:
        'Qui d’autre vend exactement cela, à ces clients-là ? Si la réponse est « personne », il faut pouvoir dire pourquoi personne ne le fait.',
      quoiMettre: [
        'Le client visé, qui est souvent un non-client du secteur : quelqu’un qui a regardé l’offre existante et est reparti parce qu’elle ne lui convenait pas.',
        'Le besoin réel derrière l’achat — se déplacer — et non le produit habituel — posséder un vélo. C’est le changement de niveau qui ouvre l’espace.',
        'Ce qui rend la concurrence « moins directe » : les acteurs en place vendent autre chose, à d’autres personnes, jugé sur d’autres critères.',
        '📘 Les exemples du cours, tous cités tels quels : Cirque du Soleil, Netflix, Nespresso, Facebook (« un nouvel espace incontesté de marché, celui des réseaux sociaux sur internet »).',
        '📘 La durabilité comme levier : le cours écrit que « la durabilité devient un levier innovation-valeur » — éco-conception, réparabilité, circularité créent de la valeur tout en retirant du coût.',
      ],
      exemple:
        'Pour Atelier Léman, l’océan bleu n’est pas « un vélo mieux fini » : c’est l’abonnement mobilité tout compris vendu aux entreprises genevoises. Le client n’est plus le cycliste passionné mais le responsable des ressources humaines, qui n’achète pas un vélo mais une absence de problème. Aucune marque en ligne ne s’adresse à lui : elles vendent des produits, pas un service local d’exploitation de flotte.',
      piege:
        'Décrire l’océan bleu comme un marché définitivement sans concurrence. Le succès attire les imitateurs — Facebook, cité par le cours comme océan bleu, opère aujourd’hui dans un marché hyperconcurrentiel.',
      reflexe:
        '📚 Ajouter systématiquement la limite : « un océan bleu rougit ». Puis dire ce qu’on construit derrière l’innovation pour tenir — contrats pluriannuels, ancrage local, données d’usage, marque. C’est cette nuance qui distingue un candidat qui a compris d’un candidat qui récite.',
      notions: ['ocean-bleu', 'innovation-valeur', 'innovation-durable', 'economie-fonctionnalite'],
    },
    {
      id: 'erac-matrice',
      libelle: 'LA MATRICE ERAC — la mécanique du passage',
      cestQuoi:
        'L’outil qui fabrique concrètement l’océan bleu, au lieu de le souhaiter. On ne réinvente pas une offre d’un seul coup d’imagination : on prend la liste des attributs sur lesquels le secteur se bat et on passe chacun d’eux à quatre questions. Deux de ces mouvements font baisser les coûts, deux font monter la valeur perçue — et c’est cette combinaison, et elle seule, qui produit l’innovation-valeur.',
      question:
        'Attribut par attribut : celui-là, est-ce que je l’élimine, je le réduis, je l’augmente — ou est-ce que j’en crée un que personne ne propose ?',
      quoiMettre: [
        'La liste des attributs de concurrence du secteur, cinq à huit, formulés en noms : prix, largeur de gamme, showroom, délai de réparation, garantie, financement.',
        'Une ligne par attribut et une seule lettre par ligne : un même attribut ne peut pas être à la fois réduit et augmenté.',
        'Au moins un E ou un R. Sans mouvement de baisse, il n’y a pas d’innovation-valeur, seulement du coût supplémentaire.',
        'La variante d’acronyme du cours, à signaler à l’oral (voir la section « variantes » de cette fiche) : elle rapporte des points.',
        '📘 Le mot du cours pour dire ce que fait la matrice : reconstruire la proposition de valeur.',
      ],
      exemple:
        'Pour Atelier Léman, la colonne des attributs s’écrit avant tout le reste : prix du vélo, largeur de gamme, showroom, délai de réparation, garantie, disponibilité d’un vélo de remplacement, financement. Sept lignes. Chacune reçoit ensuite une lettre et une seule — c’est ce tableau à sept lignes qui est l’ERAC, pas les quatre cases isolées du schéma.',
      piege:
        'Traiter l’ERAC comme quatre cases vides à remplir librement. On obtient alors quatre idées sans rapport les unes avec les autres, dont on ne peut ni chiffrer l’effet ni vérifier l’équilibre.',
      reflexe:
        'Écrire d’abord la colonne des attributs, à gauche du brouillon, puis seulement la lettre en face de chacun. La matrice se remplit ligne par ligne, jamais case par case.',
      notions: ['erac', 'proposition-de-valeur', 'facteurs-cles-succes'],
    },
    {
      id: 'e',
      libelle: 'E — Éliminer (ou : Exclure)',
      cestQuoi:
        'Le mouvement qui supprime purement et simplement un attribut que tout le secteur propose. 📘 Le cours le définit ainsi : « supprimer les fonctionnalités inutiles, non créatrices de valeur pour le marché ». C’est le mouvement le plus rentable, parce qu’il retire une ligne entière du budget.',
      question:
        'Qu’est-ce que tout le secteur fait depuis toujours, par habitude, sans que le client y tienne vraiment ?',
      quoiMettre: [
        'Les attributs hérités de l’histoire du secteur, que plus personne n’a remis en cause depuis vingt ans.',
        'Ce qui coûte cher à produire ou à entretenir et que le client ne cite jamais spontanément quand on lui demande pourquoi il achète.',
        'Un attribut entier, pas une petite économie : après un E, l’attribut n’existe plus du tout.',
        '📘 Le cas du cours : le Cirque du Soleil a supprimé les animaux sauvages — « les animaux exigeant un entretien spécifique et régulier », donc un coût lourd pour une valeur devenue discutable.',
        'L’économie que la suppression dégage, chiffrée si possible : c’est elle qu’on placera en face du C.',
      ],
      exemple:
        'Atelier Léman élimine la vente du vélo au client final dans son offre entreprise : l’entreprise cliente n’achète plus de vélo, elle en obtient l’usage. Disparaissent avec cette ligne le financement du stock, la reprise d’ancien matériel et la négociation de remise à chaque commande.',
      piege:
        'Confondre éliminer et réduire : écrire « éliminer les remises » alors qu’on veut dire « en accorder moins ». Le mouvement devient flou et l’économie n’est plus chiffrable.',
      reflexe:
        'Appliquer un test binaire : après le mouvement, est-ce que l’attribut existe encore, même un peu ? Si oui, c’est un R, pas un E.',
      notions: ['erac', 'ocean-bleu'],
    },
    {
      id: 'r',
      libelle: 'R — Réduire (⚠ « Renforcer » dans l’autre formulation)',
      cestQuoi:
        'Le mouvement qui ramène un attribut nettement en dessous du standard du secteur, parce qu’il est surdimensionné par rapport à l’usage réel. 📘 Le cours parle d’« identifier les aspects de l’offre qui ne sont pas nécessaires aux buts ou objectifs de l’entreprise ». ⚠ Attention : dans la formulation du Cours Business Model durable, ce mouvement de baisse s’appelle Atténuer, et le R y désigne Renforcer, qui est une hausse.',
      question:
        'Sur quel attribut le secteur en fait-il trop, par habitude ou par surenchère entre concurrents plutôt que par demande du client ?',
      quoiMettre: [
        'Les attributs entretenus par la course entre concurrents : « il nous faut onze modèles parce que le voisin en propose douze ».',
        'Ce dont le client n’utilise qu’une fraction : autonomie de batterie, nombre d’options, amplitude d’horaires, profondeur de catalogue.',
        'Le niveau visé, écrit noir sur blanc : « de onze modèles à deux », et non « moins de modèles ».',
        'Le coût libéré par la réduction — stock, surface, personnel, immobilisation de trésorerie : c’est ce qui finance le A et le C.',
      ],
      exemple:
        'Atelier Léman réduit la largeur de gamme et le stock d’exposition : deux modèles standardisés au lieu de onze, un seul format de batterie. Chiffres illustratifs : la valeur du stock passe d’environ 240 000 CHF à 60 000 CHF, et le magasin de Plainpalais libère la moitié de sa surface au profit de l’atelier.',
      piege:
        'Réduire un attribut que le client considère comme un minimum d’accès au marché. On ne réduit pas la sécurité d’un vélo ni la conformité d’une batterie : on sort du marché, on ne le contourne pas.',
      reflexe:
        'Séparer les attributs de préférence — qu’on peut réduire sans perdre le client — des attributs d’accès, en dessous desquels l’offre cesse d’être achetable. Le dire explicitement à l’oral prouve qu’on a réfléchi au risque.',
      notions: ['erac', 'domination-couts'],
    },
    {
      id: 'a',
      libelle: 'A — Augmenter (⚠ « Atténuer » dans l’autre formulation)',
      cestQuoi:
        'Le mouvement qui pousse un attribut déjà existant très au-dessus du standard du secteur. 📘 Le cours le formule ainsi : « examiner si, en augmentant des caractéristiques ou des performances, il est possible d’attirer plus de clients ». ⚠ Attention : dans la formulation du Cours Business Model durable, ce mouvement de hausse s’appelle Renforcer, et le A y désigne Atténuer, qui est une baisse. Les deux lettres du milieu changent de sens selon le support cité.',
      question:
        'Sur quel attribut suis-je déjà bon — et que se passerait-il si j’y étais spectaculairement meilleur que tout le monde ?',
      quoiMettre: [
        'L’attribut sur lequel l’entreprise possède déjà une compétence distinctive : augmenter ce qu’on ne sait pas faire coûte cher et ne convainc personne.',
        'Le niveau cible, mesurable : « vélo de remplacement en moins de 24 heures », et non « un meilleur service ».',
        'Ce que le client gagne au passage, exprimé de son point de vue : du temps, de la tranquillité, de la disponibilité — pas des caractéristiques techniques.',
        'La preuve qui rend la promesse crédible : deux ateliers, des mécaniciens formés toutes marques, quinze ans de réputation locale.',
      ],
      exemple:
        'Atelier Léman augmente massivement la disponibilité de l’atelier : diagnostic le jour même, vélo de remplacement en 24 heures, intervention sur site pour une flotte. L’atelier cesse d’être un service après-vente subi pour devenir le cœur de l’offre — ce que les marques en ligne ne peuvent pas livrer à Genève.',
      piege:
        'Augmenter tout ce qui est déjà bon, par confort. Chaque A coûte de l’argent ; sans E ni R en face, la marge de l’offre nouvelle disparaît avant même le lancement.',
      reflexe:
        'Retenir un seul A majeur, et le présenter toujours accompagné de son financement : « j’augmente la disponibilité de l’atelier, et je la paie avec le stock que j’ai réduit ».',
      notions: ['erac', 'competence-distinctive', 'option-differenciation'],
    },
    {
      id: 'c',
      libelle: 'C — Créer',
      cestQuoi:
        '📘 « Innover en créant de nouvelles propositions de valeur — inventer des produits ou services qui offrent aux clients quelque chose de radicalement différent, une offre disruptive. » C’est le seul mouvement qui fait apparaître un attribut que personne, dans le secteur, ne propose aujourd’hui à personne.',
      question:
        'Qu’est-ce que personne ne vend dans ce secteur, et qui ferait venir des gens qui n’achètent pas du tout aujourd’hui ?',
      quoiMettre: [
        'Le non-client visé, nommé précisément : celui qui a regardé l’offre du secteur et est reparti sans acheter.',
        'L’attribut nouveau, formulé comme une promesse vérifiable — « tout compris, sans panne à gérer » — et non comme un slogan.',
        'Le modèle de revenu qui va avec : un attribut créé change souvent la façon d’être payé, l’abonnement remplaçant la vente unique.',
        '📘 La durabilité comme matière première du C : éco-conception, réemploi, réparation, allongement de la durée de vie — elles créent de la valeur en retirant du coût, donc elles servent à la fois de C et de E.',
        'Ce qu’il faut savoir faire pour tenir la promesse : sans compétence en face, le C reste une intention, et le jury le voit.',
      ],
      exemple:
        'Atelier Léman crée l’abonnement mobilité tout compris pour les entreprises genevoises : vélo, entretien, batterie, remplacement, reporting des kilomètres parcourus, le tout pour un montant mensuel par vélo. L’attribut créé n’est pas le vélo — il existait déjà — mais l’absence totale de gestion pour l’entreprise cliente.',
      piege:
        'Ne faire que du C. C’est l’erreur explicitement signalée par le cours : si l’on n’exclut et ne réduit rien, les coûts explosent et l’innovation n’est plus rentable.',
      reflexe:
        'Ne jamais présenter un C sans dire, dans la même phrase, ce qu’on a éliminé ou réduit pour le financer. « Je crée l’abonnement, et je le finance en éliminant la vente et en réduisant la gamme. »',
      notions: ['erac', 'innovation-durable', 'economie-fonctionnalite', 'eco-conception'],
    },
    {
      id: 'innovation-valeur',
      libelle: 'INNOVATION-VALEUR — le test qui valide tout',
      cestQuoi:
        '📘 « Garantir que vous créez simultanément de la valeur pour le client tout en réduisant vos coûts. » C’est ce qui sépare un océan bleu d’une simple montée en gamme. La logique classique oblige à choisir : plus de valeur, donc plus de coûts (différenciation), ou moins de coûts, donc moins de valeur (domination par les coûts). L’océan bleu prétend faire les deux à la fois — et c’est cette prétention qu’il faut démontrer, pas affirmer.',
      question:
        'Ma nouvelle offre coûte-t-elle moins cher à produire que l’ancienne, tout en valant davantage pour le client ?',
      quoiMettre: [
        'La colonne « coûts » : tout ce que E et R ont supprimé, chiffré autant que possible.',
        'La colonne « valeur » : tout ce que A et C ont ajouté, formulé du point de vue du client et non du producteur.',
        'La comparaison des deux colonnes : si la seconde n’est pas financée par la première, ce n’est pas de l’innovation-valeur.',
        'Le vocabulaire exact, à poser à l’oral : différenciation = valeur ↑ et coûts ↑ ; domination par les coûts = coûts ↓ et valeur ↓ ; innovation-valeur = valeur ↑ et coûts ↓.',
        'La conséquence observable : le prix peut baisser pendant que la marge monte. Quand cela se produit, on a bien changé de terrain.',
      ],
      exemple:
        'Atelier Léman, colonne coûts : plus de stock de vélos invendus, une seule référence de batterie, plus de remises négociées. Colonne valeur : zéro immobilisation pour l’entreprise cliente, zéro panne à gérer, une facture unique et prévisible. Chiffres illustratifs : un vélo vendu 2 600 CHF pour un coût de 1 400 CHF rapporte 1 200 CHF une fois ; le même vélo en abonnement à 95 CHF par mois rapporte 1 140 CHF la première année — et recommence l’année suivante sans nouvelle vente à conquérir.',
      piege:
        'Présenter comme océan bleu une offre simplement plus riche et plus chère. C’est de la différenciation classique : utile, souvent pertinente, mais ce n’est pas l’océan bleu, et l’examinateur fait la différence.',
      reflexe:
        '📘 Réciter la phrase du cours avant de conclure : « si ma proposition ne fait qu’ajouter de la valeur en ajoutant du coût, ce n’est pas un océan bleu ». Puis montrer les deux colonnes.',
      notions: ['innovation-valeur', 'differenciation', 'domination-couts', 'ocean-bleu'],
    },
  ],

  methode: [
    {
      titre: '1. Vérifier qu’on est bien en océan rouge',
      detail:
        'On repart de la toile de Porter du domaine d’activité concerné, pas d’une impression. Forces globalement fortes — rivalité élevée, entrants faciles, clients qui comparent — signifient que la valeur créée est captée par d’autres : le terrain est rouge. Une phrase suffit, mais elle doit citer des notes et des faits.',
      aEviter:
        'Passer directement à l’ERAC parce que l’idée est séduisante. Sans diagnostic en amont, la reconstruction de l’offre n’est qu’une préférence personnelle.',
    },
    {
      titre: '2. Lister les attributs sur lesquels le secteur se bat',
      detail:
        'Cinq à huit lignes, formulées en noms : prix, largeur de gamme, showroom, délai de réparation, garantie, financement. Ce sont les critères que tous les concurrents servent, à des degrés divers. C’est la colonne de gauche du tableau ERAC, et c’est l’étape que les candidats sautent le plus souvent.',
      aEviter:
        'Confondre attributs de concurrence et forces internes. « Nos mécaniciens sont bons » n’est pas un attribut du secteur : « la qualité de la réparation » en est un.',
    },
    {
      titre: '3. Passer chaque attribut aux quatre questions',
      detail:
        'Ligne par ligne, on attribue une lettre et une seule : E si l’attribut disparaît, R s’il descend nettement sous le standard, A s’il monte nettement au-dessus, C si l’attribut n’existait nulle part. Un attribut peut aussi rester tel quel — toutes les lignes n’ont pas besoin d’une lettre.',
      aEviter:
        'Mettre deux lettres sur une même ligne. Un attribut réduit et augmenté à la fois signifie qu’il n’a pas été assez découpé : il faut le scinder en deux attributs distincts.',
    },
    {
      titre: '4. Vérifier l’équilibre coûts / valeur',
      detail:
        'On compte : combien de E et de R d’un côté, combien de A et de C de l’autre. Chaque A et chaque C doivent être financés par au moins un mouvement de baisse identifié. Si la colonne de gauche est vide, on n’a pas fait d’ERAC, on a fait une liste de souhaits.',
      aEviter:
        'Se contenter d’un C brillant. 📘 C’est l’erreur nommée par le cours : sans E ni R, les coûts explosent et l’innovation n’est plus rentable.',
    },
    {
      titre: '5. Formuler la nouvelle proposition de valeur en une phrase',
      detail:
        'Une phrase qui contient trois choses : à qui l’on s’adresse (souvent un non-client), ce qu’on lui promet, et comment on est payé. « À l’entreprise genevoise, un service de mobilité tout compris facturé au mois, sans achat ni gestion de flotte. » Si la phrase ne tient pas debout, la matrice non plus.',
      aEviter:
        'Décrire le produit au lieu de la promesse. Le client n’achète pas un vélo à assistance : il achète le fait que ses collaborateurs arrivent au travail sans souci.',
    },
    {
      titre: '6. Passer le test de l’innovation-valeur',
      detail:
        'Deux colonnes côte à côte : ce qui baisse, ce qui monte. Si la valeur monte et que les coûts baissent, c’est un océan bleu. Si les deux montent, c’est une différenciation — on peut la défendre, mais il faut l’appeler par son nom.',
      aEviter:
        'Sauter cette vérification parce que l’idée « sonne » innovante. C’est précisément là que la note se joue.',
    },
    {
      titre: '7. Rebrancher la matrice sur la suite du processus',
      detail:
        'L’offre reconstruite n’est pas une conclusion : c’est une option stratégique parmi deux ou trois, à comparer aux autres au SAF — souhaitable, acceptable, faisable. Et elle a des conséquences internes : ce qu’on a éliminé côté client doit se traduire par des activités supprimées dans la chaîne de valeur.',
      aEviter:
        'Terminer sur l’ERAC comme si la décision était prise. Un candidat qui recommande son océan bleu sans l’avoir confronté au SAF laisse penser que la conclusion était écrite d’avance.',
    },
  ],

  liens: [
    {
      vers: 'porter',
      nature: 'alimente',
      explication:
        'La toile de Porter est ce qui déclenche l’océan bleu : tant que les forces sont modérées, la question ne se pose pas ; quand la pression globale est forte, rester revient à choisir la guerre des prix.',
    },
    {
      vers: 'swot',
      nature: 'prolonge',
      explication:
        'Le croisement faiblesse × menace du SWOT montre la marge prise en tenaille entre des fournisseurs qui montent leurs prix et des concurrents qui baissent les leurs — et c’est exactement la situation où l’ERAC devient la réponse, parce qu’aucune des deux pressions ne se combat frontalement.',
    },
    {
      vers: 'saf',
      nature: 'alimente',
      explication:
        'L’ERAC produit une option, pas une décision : le SAF vérifie ensuite qu’elle est souhaitable pour les parties prenantes, acceptable au regard du risque, et faisable avec les ressources disponibles.',
    },
    {
      vers: 'chaine-de-valeur',
      nature: 'prolonge',
      explication:
        'Un attribut éliminé du côté du client doit correspondre à des activités supprimées du côté de l’entreprise : sans cette traduction dans la chaîne de valeur, les coûts ne baissent pas et l’innovation-valeur reste une promesse.',
    },
    {
      vers: 'bmc-durable',
      nature: 'partage',
      explication:
        'La matrice ERAC apparaît dans les deux supports : le cours sur la chaîne de valeur l’emploie comme outil de repositionnement concurrentiel, le cours Business Model durable la reprend pour transformer un modèle d’affaires — avec un acronyme différent, qu’il faut savoir signaler.',
    },
  ],

  pieges: [
    {
      titre: 'Appeler « océan bleu » toute nouveauté',
      explication:
        '📘 Le cours signale nommément cette faute. Une gamme rafraîchie, un site web refait, un nouveau coloris ne créent aucun espace de marché : les concurrents restent les mêmes, les critères de comparaison aussi.',
      reflexe:
        'Poser le test de l’espace : après le changement, mes concurrents me comparent-ils encore sur les mêmes critères ? Si oui, je suis toujours dans le rouge.',
    },
    {
      titre: 'Ne faire que « Créer »',
      explication:
        '📘 Seconde faute nommée par le cours : sans élimination ni réduction, les coûts explosent et l’innovation n’est plus rentable. C’est le piège des candidats les plus imaginatifs, qui produisent quatre idées neuves et aucune économie.',
      reflexe:
        'Compter les lettres avant de conclure. Au moins un E ou un R pour chaque A ou C, et dire à voix haute ce que la baisse finance.',
    },
    {
      titre: 'Confondre océan bleu et différenciation',
      explication:
        'Ajouter du service, de la finition et de la marque en montant le prix, c’est de la différenciation classique : valeur en hausse, coûts en hausse. L’innovation-valeur exige que les coûts baissent en même temps.',
      reflexe:
        'Tracer les deux colonnes sur le brouillon. Si la colonne des coûts supprimés est vide, employer le mot « différenciation » et ne pas prétendre à l’océan bleu.',
    },
    {
      titre: 'Se tromper sur le sens du R et du A',
      explication:
        'Les deux supports du cours n’emploient pas le même acronyme, et ce sont précisément les deux lettres du milieu qui changent de sens : Réduire est une baisse, Renforcer est une hausse.',
      reflexe:
        'Dire le mouvement avant la lettre : « je baisse la largeur de gamme », puis « ce que le cours 3 appelle Réduire et le cours Business Model durable appelle Atténuer ». Le sens protège de l’étiquette.',
    },
    {
      titre: 'Oublier que l’océan bleu rougit',
      explication:
        '📚 Non explicité dans les supports, mais décisif à l’oral : le succès attire les imitateurs. Facebook, cité par le cours comme océan bleu, opère aujourd’hui dans un marché hyperconcurrentiel.',
      reflexe:
        'Terminer la présentation de l’option par la barrière à l’entrée qu’on construit derrière l’innovation : contrat pluriannuel, ancrage local, base installée, données d’usage.',
    },
  ],

  variantes: [
    {
      sujet: 'L’acronyme ERAC — et le sens du R et du A',
      formulations: [
        {
          texte: 'Éliminer – Réduire – Augmenter – Créer',
          source: 'Cours 3 (chaîne de valeur), slide 3',
        },
        {
          texte: 'Exclure – Renforcer – Atténuer – Créer',
          source: 'Cours Business Model durable, slide 22 — « Matrice ERAC »',
        },
      ],
      consigne:
        'Les deux couples sont conceptuellement identiques : Éliminer = Exclure et Réduire = Atténuer font baisser les coûts ; Augmenter = Renforcer et Créer font monter la valeur. Mais l’ordre des lettres n’est pas le même : la formulation du Cours 3 groupe les deux baisses puis les deux hausses (Éliminer ↓, Réduire ↓, Augmenter ↑, Créer ↑), tandis que la formulation du cours Business Model durable les alterne (Exclure ↓, Renforcer ↑, Atténuer ↓, Créer ↑). Autrement dit, le R et le A changent de sens d’un support à l’autre. À l’oral : retiens le sens des quatre mouvements, énonce-le avant la lettre, et signale la double formulation — c’est plus sûr que de parier sur les initiales, et cela montre que tu as lu les deux sources.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman SA — fabriquer l’option « basculer » avec l’ERAC',
    situation:
      'Le diagnostic externe est fait : la toile de Porter donne une pression élevée sur le domaine « vente de vélos » (rivalité 5, entrants 4, fournisseurs 4) et faible sur le domaine « réparation et service ». Le SWOT croisé a produit un enjeu central : sur quel modèle jouer l’avenir ? Il faut maintenant fabriquer une option qui ne consiste pas à mieux se battre sur le terrain de la vente — c’est le travail de l’ERAC.',
    deroule: [
      {
        etiquette: 'Constat de départ',
        contenu:
          'Océan rouge sur la vente : mêmes produits, mêmes fiches techniques, comparaison en ligne immédiate, marques low-cost mieux financées. Se battre au prix contre elles, c’est perdre lentement — les ventes reculent déjà de 8 % sur deux ans.',
      },
      {
        etiquette: 'Attributs du secteur',
        contenu:
          'Prix du vélo · largeur de gamme · showroom et essais · délai de réparation · garantie · financement · vélo de remplacement. Sept lignes, écrites avant toute idée.',
      },
      {
        etiquette: 'E — Éliminer',
        contenu:
          'La vente du vélo lui-même au client final, dans l’offre entreprise. L’entreprise cliente n’achète plus un objet, elle obtient un usage. Disparaissent le stock financé, la reprise d’ancien matériel et la négociation de remise.',
      },
      {
        etiquette: 'R — Réduire',
        contenu:
          'La largeur de gamme et le stock d’exposition : deux modèles standardisés au lieu de onze, un seul format de batterie. Illustratif : stock ramené d’environ 240 000 à 60 000 CHF, et moitié de la surface de Plainpalais rendue à l’atelier.',
      },
      {
        etiquette: 'A — Augmenter',
        contenu:
          'La disponibilité de l’atelier, très au-dessus du standard : diagnostic le jour même, vélo de remplacement en moins de 24 heures, intervention sur site pour une flotte. C’est le domaine où Atelier Léman est déjà fort — on pousse une compétence distinctive, pas une faiblesse.',
      },
      {
        etiquette: 'C — Créer',
        contenu:
          'L’abonnement mobilité tout compris pour les entreprises genevoises : vélo, entretien, batterie, remplacement et reporting des kilomètres, facturés au mois et par vélo. Le non-client visé est le responsable RH, qui n’a jamais acheté de vélo parce qu’il ne voulait pas gérer une flotte.',
      },
      {
        etiquette: 'Test innovation-valeur',
        contenu:
          'Coûts ↓ : plus de stock invendu, une seule référence de batterie, plus de remises. Valeur ↑ : zéro immobilisation et zéro panne à gérer pour le client, une facture prévisible. Les deux dans le même mouvement : c’est bien une innovation-valeur, pas une différenciation.',
      },
      {
        etiquette: 'Chiffrage illustratif',
        contenu:
          'Un vélo vendu 2 600 CHF pour un coût de 1 400 CHF rapporte 1 200 CHF une seule fois. À 95 CHF par mois, le même vélo rapporte 1 140 CHF la première année et recommence ensuite. Le pilote envisagé — 40 vélos chez 6 entreprises genevoises sur 12 mois — représente environ 45 600 CHF de revenus récurrents, à comparer aux 104 000 CHF d’une vente unique de 40 vélos.',
      },
    ],
    conclusion:
      'L’ERAC vient de fabriquer l’option « basculer vers l’abonnement mobilité » — et, au passage, l’option intermédiaire « hybride », qui conserve la vente aux particuliers tout en lançant l’abonnement en pilote. Ces options ne sont pas encore une recommandation : elles partent maintenant au SAF, où l’on vérifiera qu’elles sont souhaitables, acceptables et faisables. La faisabilité est le point sensible : passer de la vente à l’abonnement déplace le besoin en trésorerie, parce qu’on encaisse 95 CHF par mois là où l’on encaissait 2 600 CHF d’un coup.',
  },

  phraseOral:
    'La toile de Porter nous dit que le domaine « vente » est un océan rouge : y rester, c’est accepter la guerre des prix contre des acteurs mieux financés. L’ERAC me permet de changer de terrain sans changer de métier — j’élimine la vente du vélo, je réduis la gamme, j’augmente la disponibilité de l’atelier et je crée un abonnement mobilité pour les entreprises. Et le test tient : les coûts baissent pendant que la valeur monte, c’est une innovation-valeur ; si je m’étais contenté d’ajouter des services, j’aurais fait de la différenciation et je l’aurais dit.',

  aRetenir: [
    { cle: 'Océan rouge 📘', valeur: 'Un marché existant à concurrence intense — le rouge, c’est le sang des entreprises qui s’y affrontent.' },
    { cle: 'Océan bleu 📘', valeur: 'Un nouvel espace de marché où la concurrence est minime : on ne bat pas les concurrents, on les rend moins pertinents.' },
    { cle: 'D’où vient le verdict', valeur: 'De la toile de Porter : forces fortes ⇒ rouge, forces faibles ⇒ bleu. Jamais d’une impression.' },
    { cle: 'ERAC 📘', valeur: 'Quatre mouvements appliqués attribut par attribut : deux qui baissent les coûts, deux qui montent la valeur.' },
    { cle: 'La variante ⚠', valeur: 'Éliminer-Réduire-Augmenter-Créer (Cours 3) ou Exclure-Renforcer-Atténuer-Créer (Cours BM durable) : le R et le A changent de sens.' },
    { cle: 'Innovation-valeur 📘', valeur: 'Valeur ↑ et coûts ↓ en même temps. Valeur ↑ et coûts ↑, c’est de la différenciation.' },
    { cle: 'L’erreur nº 1', valeur: 'Ne faire que « Créer » : les coûts explosent et l’innovation n’est plus rentable.' },
    { cle: 'L’exemple du cours', valeur: 'Cirque du Soleil : animaux sauvages supprimés (coût ↓), spectacle théâtral créé (valeur ↑).' },
    { cle: 'La limite 📚', valeur: 'Un océan bleu rougit — Facebook, cité comme océan bleu, est aujourd’hui hyperconcurrentiel.' },
    { cle: 'Ce que ça produit', valeur: 'Une option stratégique, pas une décision : elle passe ensuite au SAF.' },
  ],

  notions: [
    'ocean-rouge',
    'ocean-bleu',
    'erac',
    'innovation-valeur',
    'differenciation',
    'option-differenciation',
    'domination-couts',
    'options-strategiques',
    'toile-porter',
    'intensite-concurrentielle',
    'das',
    'facteurs-cles-succes',
    'proposition-de-valeur',
    'economie-fonctionnalite',
    'innovation-durable',
    'competence-distinctive',
  ],
}
