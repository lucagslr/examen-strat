import type { Modele } from './types'

export const modele: Modele = {
  id: 'ressources-competences',
  numero: 5,
  slug: 'ressources-competences',
  nom: 'Ressources et compétences',
  sousTitre: 'Diagnostic interne : ce que l’entreprise possède vs sait faire',
  famille: 'interne',
  etape: 'e2',
  question:
    'Qu’est-ce que cette entreprise a de particulier par rapport à ses concurrents — et est-ce que ça tiendra ?',
  enUnePhrase:
    'Une ressource est ce que l’entreprise possède (un nom, un stock) ; une compétence est ce qu’elle sait en faire (un verbe, une aptitude) ; l’avantage naît de la combinaison des deux, et il ne dure que si cette combinaison n’est ni achetable ni imitable.',
  produit:
    'Une liste de ressources et de compétences qualifiées une à une — tangible ou non, transférable ou non — prête à basculer en forces et faiblesses hiérarchisées dans le SWOT, chacune avec son verdict de durabilité.',
  quandUtiliser: [
    'Dès que l’énoncé décrit ce que l’entreprise a ou sait faire : locaux, équipe, marque, brevet, savoir-faire, fichier clients.',
    'Juste après le diagnostic externe, pour retourner la lunette : Porter dit ce que le secteur fait subir, ici on répond « avec quoi je réponds ».',
    'Avant la chaîne de valeur : on inventorie d’abord ce qu’on a, on localise ensuite où ça crée de la valeur.',
    'Quand la question porte sur la durée d’un avantage — « cet avantage tiendra-t-il ? » est une question de ressources, pas de marché.',
    'Quand deux entreprises du même secteur n’ont pas la même rentabilité : elles subissent les mêmes cinq forces, donc l’explication est interne.',
    'Pour tester la faisabilité d’une option avant de la recommander : a-t-on les ressources et les compétences pour la tenir ?',
  ],
  quandNePasUtiliser: [
    'Pour expliquer une pression venue du marché — un fournisseur qui impose ses prix relève de Porter, pas du diagnostic interne.',
    'Pour décrire une tendance de société, une loi ou une technologie du secteur : c’est le PESTEL.',
    'Comme inventaire exhaustif : trois ressources qualifiées valent mieux que vingt ressources listées sans verdict.',
    'Pour juger une force dans l’absolu — « nos mécaniciens sont bons » ne veut rien dire tant qu’on n’a pas dit « meilleurs que qui ».',
  ],

  schema: {
    h: 880,
    description:
      'Deux colonnes — ce que l’entreprise possède, ce qu’elle sait faire — se subdivisent puis se rejoignent dans une case unique, la capacité à créer un avantage ; un test de transférabilité sépare ensuite l’avantage temporaire de l’avantage durable.',
    noeuds: [
      {
        id: 'ressources',
        titre: 'RESSOURCES',
        lignes: ['Ce que l’entreprise POSSÈDE', 'un actif, un stock — un nom'],
        x: 40,
        y: 40,
        l: 420,
        h: 110,
        point: 'ressources',
      },
      {
        id: 'competences',
        titre: 'COMPÉTENCES',
        lignes: ['Ce que l’entreprise SAIT FAIRE', 'une aptitude — un verbe'],
        x: 540,
        y: 40,
        l: 420,
        h: 110,
        point: 'competences',
      },
      {
        id: 'tangibles',
        titre: 'Tangibles (matérielles)',
        lignes: ['finances, sites, équipements', 'humaines : effectif, niveau', 'faciles à évaluer, donc à copier'],
        x: 40,
        y: 200,
        l: 200,
        h: 140,
        point: 'tangibles',
      },
      {
        id: 'intangibles',
        titre: 'Intangibles (immatérielles)',
        lignes: ['marque, réputation, culture', 'organisation, savoir-faire', 'peu copiables : richesse cachée'],
        x: 260,
        y: 200,
        l: 200,
        h: 140,
        point: 'intangibles',
      },
      {
        id: 'exemples',
        titre: 'Exemples de compétences',
        lignes: ['savoir livrer efficacement', 'savoir innover', 'savoir fidéliser'],
        x: 540,
        y: 200,
        l: 420,
        h: 140,
        point: 'exemples',
      },
      {
        id: 'combinaison',
        titre: 'RESSOURCES + COMPÉTENCES',
        lignes: ['la capacité à créer', 'un avantage concurrentiel'],
        x: 290,
        y: 400,
        l: 420,
        h: 110,
        ton: 'accent',
        point: 'combinaison',
      },
      {
        id: 'test',
        titre: 'TRANSFÉRABLE ? IMITABLE ?',
        lignes: ['le test qui décide de la durée'],
        x: 290,
        y: 560,
        l: 420,
        h: 110,
        forme: 'losange',
        ton: 'alerte',
        point: 'test',
      },
      {
        id: 'temporaire',
        titre: 'Avantage TEMPORAIRE',
        lignes: ['oui — le concurrent l’achète', 'ou le copie en une saison'],
        x: 40,
        y: 720,
        l: 420,
        h: 110,
        ton: 'danger',
        point: 'temporaire',
      },
      {
        id: 'durable',
        titre: 'Avantage DURABLE',
        lignes: ['non — lié aux personnes,', 'aux routines, à la réputation'],
        x: 540,
        y: 720,
        l: 420,
        h: 110,
        ton: 'positif',
        point: 'durable',
      },
    ],
    liens: [
      { de: 'ressources', vers: 'competences', libelle: 'déployées par', trait: 'pointille', depuis: 'droite', arrive: 'gauche' },
      { de: 'ressources', vers: 'tangibles' },
      { de: 'ressources', vers: 'intangibles' },
      { de: 'competences', vers: 'exemples' },
      { de: 'tangibles', vers: 'combinaison' },
      { de: 'intangibles', vers: 'combinaison' },
      { de: 'exemples', vers: 'combinaison' },
      { de: 'combinaison', vers: 'test' },
      { de: 'test', vers: 'temporaire', libelle: 'oui', ton: 'danger' },
      { de: 'test', vers: 'durable', libelle: 'non', ton: 'positif' },
    ],
    note:
      'Ressources + compétences → capacité à créer un avantage concurrentiel. Mais seule une combinaison qui ne s’achète pas et ne se copie pas rend cet avantage durable.',
  },

  points: [
    {
      id: 'ressources',
      libelle: 'RESSOURCES — ce que l’entreprise possède',
      cestQuoi:
        'Le stock de départ : tout ce que l’entreprise détient ou contrôle et qu’elle peut mettre en œuvre — de l’argent, des murs, des machines, des personnes, une marque, des données. Un actif, pas une aptitude : on peut en dresser l’inventaire, ligne par ligne.',
      question:
        'De quoi cette entreprise dispose aujourd’hui, qu’elle pourrait déployer autrement que comme elle le fait actuellement ?',
      quoiMettre: [
        'Physiques : bâtiments, ateliers, machines, outillage, stocks, capacité de production.',
        'Financières : trésorerie, fonds propres, capacité d’endettement, solidité de l’actionnariat.',
        'Humaines : effectif, qualifications, expertise, ancienneté et stabilité de l’équipe.',
        'Technologiques : brevets, logiciels, bases de données, savoir-faire protégé.',
        'Organisationnelles : procédures, routines de travail, outils de management, système d’information.',
        'De réputation : marque, notoriété, image, avis clients, ancrage local. 📘 Ces six natures sont la grille de synthèse du cours (Cours 3, slide 13).',
      ],
      exemple:
        'Atelier Léman : deux ateliers (Carouge et Plainpalais), un outillage de diagnostic électronique, un stock de pièces toutes marques, 6,2 M CHF de chiffre d’affaires, 45 salariés, une marque genevoise installée, un fichier clients de quinze ans — et deux contrats de fourniture de batteries en Asie.',
      piege:
        'Ne lister que ce qui figure au bilan. On écrit « locaux, machines, trésorerie » et on s’arrête, alors que la ressource la plus forte de l’entreprise est souvent celle qui ne s’y trouve pas.',
      reflexe:
        'Passer les six natures dans l’ordre, une par une, à voix basse. Les trois dernières — technologiques, organisationnelles, de réputation — sont celles qui décident de l’avantage.',
      notions: ['ressources', 'diagnostic-interne'],
    },
    {
      id: 'tangibles',
      libelle: 'Ressources tangibles (matérielles)',
      cestQuoi:
        'Les actifs qu’on voit, qu’on compte et qu’on chiffre. 📘 Le cours les définit par un critère précis : ce sont les ressources « relativement faciles à identifier et à évaluer ». C’est ce même critère qui fait leur faiblesse stratégique.',
      question:
        'Puis-je mettre un prix sur cette ressource — et si oui, un concurrent peut-il payer ce prix demain matin ?',
      quoiMettre: [
        'Ressources financières : résultat, flux de trésorerie, capacité de financement.',
        'Ressources physiques : sites de production, équipements, capacité, état du parc, niveau d’innovation des machines.',
        'Ressources humaines : effectif, niveau de qualification, ajustement de la masse salariale.',
        '📘 Le cours range aussi ici les brevets, les systèmes et le circuit de distribution — voir la variante signalée plus bas.',
        'Le repère pratique : tout ce qui a un prix affichable et une ligne dans les comptes.',
      ],
      exemple:
        'Atelier Léman : les deux ateliers, le pont de levage, le banc de diagnostic, le stock de batteries, la trésorerie que dégagent encore 6,2 M CHF de chiffre d’affaires. Une chaîne de vélos low-cost qui voudrait entrer à Genève achèterait tout cela en six mois.',
      piege:
        'Conclure à un avantage solide parce que l’équipement est moderne. Un bon outil n’est pas un avantage : c’est le coût d’entrée dans le métier, que tout concurrent sérieux paie aussi.',
      reflexe:
        'Enchaîner mentalement la formule : facile à identifier → facile à évaluer → facile à acheter → facile à imiter → avantage éphémère.',
      notions: ['ressources-tangibles', 'transferabilite'],
    },
    {
      id: 'intangibles',
      libelle: 'Ressources intangibles (immatérielles)',
      cestQuoi:
        'Ce que l’entreprise possède sans pouvoir le montrer : sa manière de s’organiser, ce que ses gens savent sans l’avoir écrit, ce que le marché pense d’elle. 📘 Le cours parle de la « richesse cachée » de l’entreprise — plus difficile à évaluer, et pour cette raison même plus difficile à copier.',
      question:
        'Qu’est-ce qui disparaîtrait si l’équipe partait demain et qu’il ne restait que les murs et les machines ?',
      quoiMettre: [
        'Organisation et management : procédures, contrôle qualité, coordination, façons de faire non écrites.',
        'Technologie utilisée : brevets, effort de recherche et développement, savoir-faire accumulé.',
        'Image de marque : réputation, notoriété, confiance, avis, recommandation.',
        'Engagement, cohésion et culture d’équipe — 📘 le cours les cite explicitement.',
        'Les données accumulées : historique de clients, de pannes, d’usages. 🔎 Elles se comportent comme de l’immatériel, parce qu’elles ne s’achètent nulle part.',
      ],
      exemple:
        'Atelier Léman : la réputation genevoise construite sur quinze ans, le bouche-à-oreille des cyclistes, l’habitude de travail entre mécaniciens, et l’historique des pannes de vélos électriques archivé depuis l’ouverture. Aucune de ces quatre lignes n’a de prix, et aucune ne se rachète.',
      piege:
        'Écarter l’immatériel parce qu’il paraît vague et « pas sérieux » à l’oral. C’est exactement l’inverse : c’est là que se trouve l’avantage, et l’examinateur attend qu’on aille le chercher.',
      reflexe:
        'Nommer le support concret de l’immatériel : qui le porte, depuis quand, et à quoi on le voit. « Réputation » est vague ; « quinze ans d’avis et un taux de retour clients supérieur à celui des ateliers de quartier » ne l’est plus.',
      notions: ['ressources-intangibles', 'transferabilite'],
    },
    {
      id: 'competences',
      libelle: 'COMPÉTENCES — ce que l’entreprise sait faire',
      cestQuoi:
        '📘 La faculté de combiner et de coordonner les ressources pour les valoriser dans les produits et services. Autrement dit : ce qui fait que deux entreprises équipées des mêmes machines ne sortent pas le même résultat.',
      question:
        'Que sait faire cette entreprise, avec ses ressources, qu’une autre équipée pareil ne saurait pas faire ?',
      quoiMettre: [
        'Aptitudes opérationnelles et techniques : système de fabrication, capacité d’innovation, techniques de commercialisation, gestion des opérations de promotion.',
        '📘 La communication de crise est classée par le cours parmi les compétences opérationnelles et techniques, pas parmi les managériales — c’est un point de détail souvent inversé.',
        'Aptitudes managériales : gestion de la qualité et des délais, décentralisation efficace de la décision, coordination des équipes.',
        'Aptitudes managériales encore : réactivité des dirigeants, qualité du management, gestion de l’information, communication interne.',
        'La forme : toujours un verbe d’action. Si la ligne s’écrit avec un nom, ce n’est pas une compétence, c’est une ressource.',
      ],
      exemple:
        'Atelier Léman sait diagnostiquer en vingt minutes une panne électronique que les ateliers de quartier renvoient au fabricant, sait réparer toutes marques et pas seulement les siennes, et sait transformer une réparation en relation suivie au comptoir. Trois verbes, trois compétences.',
      piege:
        'Confondre ressource et compétence, et écrire « des mécaniciens qualifiés » dans la colonne compétences. Les mécaniciens sont une ressource humaine ; ce qu’ils savent faire mieux qu’ailleurs est la compétence.',
      reflexe:
        'Le test grammatical : la ressource se dit avec un nom (un atelier, une marque, une base clients), la compétence avec un verbe (diagnostiquer, fidéliser, négocier). Ressource = avoir ; compétence = savoir faire.',
      notions: ['competences', 'ressources'],
    },
    {
      id: 'exemples',
      libelle: 'Exemples de compétences — savoir livrer, innover, fidéliser',
      cestQuoi:
        'La case du schéma qui donne le format attendu. Trois compétences types, formulées comme le cours les formule : « savoir + verbe ». Elles servent de gabarit pour écrire les siennes sur un cas inconnu.',
      question:
        'Cette compétence-là, l’entreprise la maîtrise-t-elle mieux que ses concurrents — et de combien ?',
      quoiMettre: [
        'Savoir livrer efficacement : tenir un délai, une qualité ou un coût que les autres ne tiennent pas.',
        'Savoir innover : sortir une offre nouvelle sans casser ce qui fonctionne déjà.',
        'Savoir fidéliser : faire revenir un client sans avoir à payer pour le reconquérir.',
        'Et pour chacune, la mention qui la rend utilisable : mieux que qui, et sur quel écart mesurable ?',
        '🔎 Une compétence sans point de comparaison n’est pas une compétence distinctive : c’est une description de poste.',
      ],
      exemple:
        'Atelier Léman : « savoir livrer » se traduit par un vélo réparé le jour même quand la concurrence en ligne renvoie en atelier partenaire sous dix jours ; « savoir fidéliser » se traduit par des clients qui reviennent pour l’entretien annuel. « Savoir innover » est en revanche faible : aucune offre nouvelle depuis deux ans. (illustratif)',
      piege:
        'Aligner des compétences génériques — « savoir vendre », « savoir gérer » — que n’importe quelle entreprise pourrait écrire. Une liste vraie pour tout le monde ne distingue personne.',
      reflexe:
        'Après chaque compétence, ajouter à voix basse « … mieux que les marques low-cost en ligne ». Si la phrase devient fausse ou creuse, la compétence n’entre pas dans le diagnostic.',
      notions: ['competences', 'competence-distinctive'],
    },
    {
      id: 'combinaison',
      libelle: 'RESSOURCES + COMPÉTENCES — la capacité à créer un avantage',
      cestQuoi:
        'Le point de jonction du schéma, et sa seule vraie affirmation : ni les ressources seules ni les compétences seules ne produisent quoi que ce soit. C’est leur mise en relation qui fait une activité mieux réalisée qu’ailleurs, donc un avantage concurrentiel.',
      question:
        'Quelle ressource, mise dans quelles mains, produit quoi que le client préfère et paie ?',
      quoiMettre: [
        'La ressource seule ne produit rien : une machine à l’arrêt ne crée aucune valeur.',
        'La compétence seule ne s’exerce pas : savoir réparer sans atelier ni pièces ne sert à rien.',
        'La combinaison des deux donne une activité mieux réalisée que chez le concurrent.',
        'Cette activité se traduit de deux façons seulement : un coût inférieur, ou une différenciation que le client accepte de payer.',
        'C’est cela, et rien d’autre, que le cours appelle avantage concurrentiel — un niveau de performance supérieur à celui des concurrents.',
      ],
      exemple:
        'Chez Atelier Léman, la combinaison s’écrit : banc de diagnostic (ressource physique) + historique de pannes (donnée accumulée) + mécaniciens formés (ressource humaine) + réputation locale (réputation) = une réparation électronique fiable et rapide que personne d’autre ne propose à Genève.',
      piege:
        'Poser la liste des ressources, poser la liste des compétences, et s’arrêter là. Deux colonnes recopiées ne sont pas un diagnostic : rien n’en sort pour la suite.',
      reflexe:
        'Terminer chaque ligne par sa destination : « → Force » ou « → Faiblesse ». Une ligne qui ne bascule dans aucune des deux n’avait pas à être écrite.',
      notions: ['avantage-concurrentiel', 'force', 'faiblesse'],
    },
    {
      id: 'test',
      libelle: 'TRANSFÉRABLE ? IMITABLE ? — le test de durée',
      cestQuoi:
        '📘 Le seul critère que le cours retient pour savoir si un avantage tiendra. La transférabilité porte sur la possibilité d’acquérir la ressource à l’extérieur de l’entreprise ; l’imitabilité, sur la possibilité de la reconstituer soi-même.',
      question:
        'Un concurrent bien financé peut-il obtenir la même chose — en l’achetant, ou en la refaisant — et en combien de temps ?',
      quoiMettre: [
        'Transférabilité : la ressource existe-t-elle sur un marché où elle se vend ?',
        'Imitabilité : à défaut de l’acheter, peut-on la reconstituer seul, et sous quel délai ?',
        '📘 Le gradient du cours, du plus au moins cessible : physiques, financières, humaines, technologiques, organisationnelles, de réputation. La valeur stratégique croît en descendant.',
        'Un avertissement du cours : tangible et transférable sont deux axes différents. Les ressources humaines sont tangibles — on compte les effectifs — mais peu transférables : une équipe soudée ne s’achète pas.',
        '📚 La grille VRIO (Valeur, Rareté, Imitabilité, Organisation) est absente de ce cours. On peut la mentionner comme apport personnel, jamais la présenter comme du cours.',
      ],
      exemple:
        'Atelier Léman, ressource par ressource : le banc de diagnostic → transférable (n’importe quel atelier l’achète) ; les mécaniciens → peu transférables individuellement, très peu en équipe ; la réputation genevoise → non transférable, non imitable à court terme ; les contrats batteries → transférables, donc sans valeur défensive.',
      piege:
        'Appeler avantage durable une technologie qui s’achète sur catalogue. Le logiciel, le robot ou la plateforme ne protègent de rien : ils s’achètent aussi en face.',
      reflexe:
        'Poser la question brutalement : « un concurrent capitalisé peut-il l’avoir ce soir, ou d’ici douze mois ? » Si la réponse est oui, l’avantage est temporaire — et il faut chercher plus bas dans le gradient.',
      notions: ['transferabilite', 'avantage-concurrentiel-durable'],
    },
    {
      id: 'temporaire',
      libelle: 'Avantage TEMPORAIRE — la sortie « oui »',
      cestQuoi:
        'L’issue défavorable du test. L’avantage existe réellement aujourd’hui, mais il repose sur quelque chose que le concurrent peut acheter ou recopier : il a une date de péremption, même si personne ne la connaît.',
      question:
        'Combien de mois cet avantage me reste-t-il avant que le premier concurrent sérieux l’ait aussi ?',
      quoiMettre: [
        'Tout ce qui s’achète : machine, logiciel, local, véhicule, campagne publicitaire.',
        'Tout ce qui se recrute : un profil rare se débauche, à condition d’y mettre le prix.',
        'Tout ce qui se lit de l’extérieur : un prix affiché, un catalogue, une promesse commerciale, une remise.',
        'Ce n’est pas pour autant inutile : 🔎 c’est le ticket d’entrée du métier, et le temps qu’il achète sert à construire l’avantage durable.',
      ],
      exemple:
        'Atelier Léman a été le premier atelier genevois équipé pour le diagnostic électronique. Cet avantage-là a fondu : deux chaînes s’équipent aujourd’hui du même banc. Ce qui n’a pas fondu, c’est ce que l’entreprise a accumulé pendant ce temps — les données de pannes et la réputation.',
      piege:
        'Balayer l’avantage temporaire d’un revers de main, comme s’il ne comptait pas. À l’oral, cela donne un diagnostic qui n’explique plus pourquoi l’entreprise gagne encore de l’argent aujourd’hui.',
      reflexe:
        'Le formuler comme une horloge : « avantage réel mais temporaire — il faut l’utiliser pour construire autre chose avant qu’il ne s’efface ».',
      notions: ['avantage-concurrentiel', 'transferabilite'],
    },
    {
      id: 'durable',
      libelle: 'Avantage DURABLE — la sortie « non »',
      cestQuoi:
        'L’issue favorable : ni achetable ni reproductible à court terme, parce que l’avantage tient à des personnes, à des routines, à du temps accumulé, ou à la combinaison de plusieurs éléments qui ne valent que reliés entre eux.',
      question:
        'Qu’est-ce qui, chez cette entreprise, exigerait de longues années à un concurrent — même très riche — pour être égalé ?',
      quoiMettre: [
        'Des routines : une manière de travailler que personne n’a écrite et qui s’est réglée à l’usage.',
        'Des données accumulées : quinze ans d’historique ne se rachètent pas, ils se vivent.',
        'Une réputation : elle se construit par le temps et la répétition, pas par le budget.',
        'Une combinaison : plusieurs ressources ordinaires articulées d’une façon qui, elle, ne se copie pas.',
        'Attention au mot : ici « durable » veut dire qui dure, pérenne. Pas écologique — ce second sens est celui du business model durable.',
      ],
      exemple:
        'Atelier Léman : la compétence d’atelier plus la réputation locale sont immatérielles, liées aux personnes et aux processus, donc peu transférables. C’est là — et pas dans la vente de vélos — que se trouve la base d’un avantage concurrentiel durable.',
      piege:
        'Confondre les deux sens de « durable » et se mettre à parler d’écologie au milieu d’un diagnostic interne. L’examinateur entend alors que le vocabulaire du cours n’est pas maîtrisé.',
      reflexe:
        'Dire le sens à haute voix quand on emploie le mot : « durable au sens de pérenne ». Une seconde de précision, et le doute est levé.',
      notions: ['avantage-concurrentiel-durable', 'ressources-intangibles'],
    },
  ],

  methode: [
    {
      titre: '1. Inventorier ce que l’entreprise possède',
      detail:
        'Passer les six natures dans l’ordre — physiques, financières, humaines, technologiques, organisationnelles, de réputation — et écrire une ligne par ressource trouvée dans l’énoncé ou déductible de lui. Une ligne = un nom.',
      aEviter:
        'Se contenter des trois premières natures parce qu’elles sont les plus visibles : c’est passer à côté de la « richesse cachée ».',
    },
    {
      titre: '2. Traduire chaque ressource en compétence',
      detail:
        'En face de chaque ressource, écrire ce que l’entreprise sait en faire, avec un verbe : « des mécaniciens » → « savoir diagnostiquer une panne électronique en vingt minutes ». Toute ressource ne donne pas une compétence, et c’est une information en soi.',
      aEviter:
        'Recopier la ressource dans la colonne compétence en changeant deux mots. Si le verbe manque, ce n’est pas une compétence.',
    },
    {
      titre: '3. Comparer au lieu de décrire',
      detail:
        'Reprendre chaque ligne et la confronter à un concurrent nommé du cas. Le diagnostic interne sert à « se démarquer de la concurrence » : une force se juge relativement, jamais dans l’absolu.',
      aEviter:
        'Les qualificatifs sans référent — excellent, solide, performant. Ils ne survivent pas à la question « par rapport à qui ? ».',
    },
    {
      titre: '4. Tester la transférabilité et l’imitabilité',
      detail:
        'Pour chaque ligne qui a survécu à l’étape 3, poser les deux questions du cours : cela s’achète-t-il à l’extérieur, cela se reproduit-il seul ? Marquer chaque ligne « temporaire » ou « durable ».',
      aEviter:
        'Sortir la grille VRIO : elle n’est pas dans les supports de ce cours, qui utilise à sa place le couple transférabilité / imitabilité.',
    },
    {
      titre: '5. Chercher la combinaison, pas l’élément isolé',
      detail:
        'Regarder si deux ou trois lignes ordinaires, assemblées, produisent quelque chose que personne ne peut assembler pareil. C’est presque toujours là que se trouve l’avantage durable — pas dans un actif unique.',
      aEviter:
        'Chercher la ressource miracle. Une entreprise a rarement un actif unique ; elle a souvent un assemblage unique.',
    },
    {
      titre: '6. Hiérarchiser et basculer dans le SWOT',
      detail:
        'Trois forces, trois faiblesses, ordonnées de la plus décisive à la moins décisive, chacune formulée en une ligne. C’est le livrable de l’étape 2 et l’entrée de l’étape suivante.',
      aEviter:
        'Rendre une liste de douze éléments non classés : à l’oral, dix minutes ne permettent d’en défendre que trois.',
    },
    {
      titre: '7. Rattacher chaque force à une activité',
      detail:
        'Dernier geste, qui ouvre la chaîne de valeur : dire dans quelle activité la force se manifeste — services, marketing, approvisionnements. Une force qu’on ne sait pas localiser est probablement une impression.',
      aEviter:
        'Enchaîner sur la chaîne de valeur sans ce raccord : on décrit alors neuf cases sans savoir ce qu’on y cherche.',
    },
  ],

  liens: [
    {
      vers: 'chaine-de-valeur',
      nature: 'prolonge',
      explication:
        'Ressources et compétences disent ce que l’entreprise a et sait faire ; la chaîne de valeur dit à quel endroit précis de l’activité cela se voit — et c’est cette localisation qui transforme une intuition en force démontrée.',
    },
    {
      vers: 'swot',
      nature: 'alimente',
      explication:
        'Chaque ressource ou compétence qualifiée sort d’ici avec une étiquette : ressource forte et peu imitable devient une Force, ressource manquante ou dépendante devient une Faiblesse. Le SWOT ne s’invente pas, il se remplit avec ce travail.',
    },
    {
      vers: 'porter',
      nature: 'soppose',
      explication:
        'Les deux modèles se répondent en miroir : Porter explique pourquoi un secteur est rentable ou non, le diagnostic interne explique pourquoi deux entreprises du même secteur, soumises aux mêmes cinq forces, ne gagnent pas la même chose.',
    },
    {
      vers: 'rcov',
      nature: 'alimente',
      explication:
        'Le R de RCOV, ce sont exactement ces ressources et compétences : le business model part de ce que l’entreprise possède et sait faire, sinon il décrit une entreprise qui n’existe pas.',
    },
    {
      vers: 'saf',
      nature: 'alimente',
      explication:
        'La faisabilité du SAF se teste ici : une option n’est faisable que si les ressources et les compétences qu’elle exige figurent déjà dans cet inventaire, ou peuvent y entrer dans le délai du projet.',
    },
  ],

  pieges: [
    {
      titre: 'Confondre ressource et compétence',
      explication:
        'La faute la plus fréquente, et la plus visible à l’oral : on range « une équipe qualifiée » ou « un logiciel de diagnostic » dans les compétences. Ce sont des ressources ; la compétence est ce qu’on en fait.',
      reflexe:
        'Le test du nom et du verbe, appliqué à chaque ligne avant de l’écrire. Ressource = avoir. Compétence = savoir faire.',
    },
    {
      titre: 'Juger une force dans l’absolu',
      explication:
        '« Nos mécaniciens sont bons » ne dit rien : bons par rapport à qui, sur quoi ? Le cours définit le diagnostic interne comme la démarche qui sert à se démarquer de la concurrence — donc toute force est relative.',
      reflexe:
        'Ajouter systématiquement un concurrent et un écart : « diagnostiquent en vingt minutes une panne que les ateliers de quartier renvoient au fabricant ».',
    },
    {
      titre: 'Ne voir que le tangible',
      explication:
        'On récite le bilan et on rend un diagnostic qui passe à côté de l’essentiel, parce que l’immatériel — la « richesse cachée » du cours — n’y figure pas.',
      reflexe:
        'Se forcer à écrire au moins deux lignes immatérielles : une d’organisation ou de savoir-faire, une de réputation.',
    },
    {
      titre: 'Appeler durable un avantage achetable',
      explication:
        'Une technologie, un équipement, une plateforme : tout cela s’achète, donc ne protège de rien. L’avantage naît de la combinaison — outil plus données plus équipe plus réputation — pas de l’outil.',
      reflexe:
        'Avant d’employer le mot durable, passer le double test du cours : transférable ? imitable ? Deux « non » et seulement deux « non » autorisent le mot.',
    },
    {
      titre: 'Sortir le VRIO comme si c’était du cours',
      explication:
        '📚 La grille VRIO / VRIN est un classique académique, mais elle est absente des supports de ce cours, qui lui préfère le critère de transférabilité et d’imitabilité. La citer comme du cours signale qu’on a révisé ailleurs que dans les slides.',
      reflexe:
        'Répondre d’abord avec le critère du cours, puis, si l’on veut montrer une lecture plus large, l’annoncer comme un apport personnel.',
    },
  ],

  variantes: [
    {
      sujet: 'Où le cours classe-t-il les brevets ?',
      formulations: [
        { texte: 'Les brevets figurent parmi les ressources tangibles.', source: 'Cours 3, slide 7' },
        { texte: 'La technologie et les brevets figurent parmi les actifs immatériels.', source: 'Cours 3, slide 10' },
        { texte: 'Les ressources technologiques sont dites « assez peu tangibles ».', source: 'Cours 3, slide 13' },
      ],
      consigne:
        'Le brevet est un actif juridique identifiable — donc évaluable, donc classé tangible — mais il protège un savoir immatériel : les deux lectures se tiennent. Signale la divergence si l’on t’interroge dessus, et tranche en expliquant pourquoi.',
    },
    {
      sujet: 'Trois grilles de classement qui se recouvrent',
      formulations: [
        { texte: 'Tangible / intangible, critère : facilité d’identification et d’évaluation.', source: 'Cours 3, slides 7 et 9' },
        { texte: 'Trois catégories de ressources matérielles et trois d’actifs immatériels.', source: 'Cours 3, slides 8 et 10' },
        { texte: 'Six natures, avec les critères de transférabilité et d’imitabilité.', source: 'Cours 3, slide 13' },
      ],
      consigne:
        'La grille des six natures est la synthèse des deux autres, enrichie du seul critère qui décide de la durée de l’avantage. C’est elle qu’il faut restituer en priorité, en mentionnant que le support la présente aussi sous deux formes plus simples.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman — étape 2, l’inventaire interne avant l’arbitrage',
    situation:
      'L’étape 1 est faite : les subventions de la Ville de Genève à la mobilité douce sont une opportunité, l’arrivée des marques low-cost en ligne une menace, et le pouvoir des deux fournisseurs asiatiques de batteries une pression forte. On retourne maintenant la lunette vers l’intérieur — avant de remplir le SWOT, et bien avant de trancher entre défendre la vente de vélos et basculer vers l’abonnement mobilité.',
    deroule: [
      {
        etiquette: 'Ressources physiques',
        contenu:
          'Deux ateliers, Carouge et Plainpalais ; un banc de diagnostic électronique ; un stock de pièces toutes marques. Tangibles, évaluables — donc achetables par un concurrent.',
      },
      {
        etiquette: 'Ressources financières',
        contenu:
          '6,2 M CHF de chiffre d’affaires, en recul de 8 % sur deux ans. La capacité d’investissement existe encore, mais elle se réduit : la décision ne peut pas attendre trois ans.',
      },
      {
        etiquette: 'Ressources humaines',
        contenu:
          '45 salariés, dont des mécaniciens très qualifiés et stables. Tangibles à compter, mais une équipe soudée ne se rachète pas : peu transférables.',
      },
      {
        etiquette: 'Ressources de réputation',
        contenu:
          'Marque locale réputée, quinze ans de bouche-à-oreille genevois. La ressource la moins imitable de tout l’inventaire — et celle qui ne figure nulle part dans les comptes.',
      },
      {
        etiquette: 'Ressource subie',
        contenu:
          'Deux fournisseurs asiatiques pour les batteries, c’est-à-dire pour le composant qui fait le prix et la fiabilité du produit. Ressource critique non contrôlée → colonne faiblesses.',
      },
      {
        etiquette: 'Compétences',
        contenu:
          'Savoir diagnostiquer et réparer toutes marques, y compris l’électronique que les ateliers de quartier refusent ; savoir fidéliser au comptoir. En revanche, ni savoir vendre en ligne, ni savoir innover : aucune offre nouvelle depuis deux ans.',
      },
      {
        etiquette: 'Test de durabilité',
        contenu:
          'Le banc de diagnostic s’achète → temporaire. La combinaison banc + historique de pannes + équipe formée + réputation ne s’achète pas et ne se reconstitue pas en douze mois → durable.',
      },
      {
        etiquette: 'Ce qui bascule au SWOT',
        contenu:
          'Forces : compétence de diagnostic et réparation toutes marques, réputation locale, équipe stable. Faiblesses : dépendance aux deux fournisseurs de batteries, marketing et présence en ligne insuffisants, développement technologique quasi inexistant.',
      },
    ],
    conclusion:
      'Le profil est net et il oriente la suite : la valeur d’Atelier Léman est dans le service et dans les gens, pas dans la machine vendue. Une stratégie qui reposerait sur le volume de vélos vendus jouerait contre son propre profil, tandis qu’un abonnement mobilité s’appuie exactement sur ce que l’entreprise sait faire et que personne ne peut acheter. Le diagnostic ne tranche pas encore — il rend l’arbitrage argumentable. Chiffres illustratifs.',
  },

  phraseOral:
    'Le banc de diagnostic n’est pas l’avantage d’Atelier Léman : n’importe quel concurrent l’achète, c’est un ticket d’entrée dans le métier. L’avantage, c’est la combinaison de cet outil avec quinze ans de pannes archivées, une équipe de mécaniciens formée et une réputation genevoise — et cette combinaison-là n’est ni transférable ni imitable à douze mois, donc elle tient.',

  aRetenir: [
    { cle: 'Ressource', valeur: 'ce que l’entreprise possède — un actif, un stock, un nom.' },
    { cle: 'Compétence', valeur: '📘 la faculté de combiner et de coordonner les ressources pour les valoriser — un verbe.' },
    { cle: 'Le mémo', valeur: 'ressource = avoir ; compétence = savoir faire. Deux ateliers équipés pareil ne réparent pas au même niveau.' },
    { cle: 'Tangible', valeur: '📘 relativement facile à identifier et à évaluer — donc facile à acheter, donc facile à imiter.' },
    { cle: 'Intangible', valeur: '📘 la « richesse cachée » : réputation, organisation, culture, savoir-faire. Difficile à évaluer, difficile à copier.' },
    { cle: 'Tangible ≠ transférable', valeur: 'les ressources humaines sont tangibles (on les compte) et peu transférables (on ne rachète pas une équipe soudée).' },
    { cle: 'Le critère du cours', valeur: 'transférabilité et imitabilité — pas le VRIO, absent des supports.' },
    { cle: 'Le gradient', valeur: 'physiques, financières, humaines, technologiques, organisationnelles, de réputation : la valeur stratégique croît en descendant.' },
    { cle: 'Durable, ici', valeur: 'pérenne, qui se maintient dans le temps. Pas écologique — ce sens-là appartient au business model durable.' },
    { cle: 'Ce que ça produit', valeur: 'des forces et des faiblesses hiérarchisées, chacune avec son verdict de durée, prêtes pour le SWOT.' },
  ],

  notions: [
    'diagnostic-interne',
    'ressources',
    'ressources-tangibles',
    'ressources-intangibles',
    'transferabilite',
    'competences',
    'competence-distinctive',
    'avantage-concurrentiel',
    'avantage-concurrentiel-durable',
    'force',
    'faiblesse',
    'chaine-de-valeur',
  ],
}
