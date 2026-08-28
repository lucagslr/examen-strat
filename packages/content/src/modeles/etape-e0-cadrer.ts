import type { EtapeAnalyse } from './types'

/**
 * ÉTAPE 0 — CADRER LE PROBLÈME
 * ============================
 *
 * Le premier maillon de l'analyse guidée. Elle ne consomme rien d'autre que
 * l'énoncé brut et produit la fiche de cadrage que le diagnostic externe
 * (étape 1) prendra telle quelle en entrée.
 *
 * 📘 Le cours pose que « l'analyse de l'environnement commence par la
 * définition du périmètre de la stratégie » et que l'analyse des parties
 * prenantes est « le début de toute analyse pour réaliser un plan ». Tout le
 * reste de l'étape est du 🔎 raisonnement reconstruit à partir de là.
 */
export const etape: EtapeAnalyse = {
  id: 'e0',
  numero: 0,
  slug: 'cadrer',
  titre: 'Cadrer le problème',

  question: 'Quel est le vrai problème, sur quel périmètre, et qui décide ?',

  entree:
    'L’énoncé brut du cas, tel qu’on le découvre : des faits, des chiffres et une direction qui hésite — aucune analyse encore, aucun outil sorti.',

  sortie:
    'Une fiche de cadrage : le problème formulé en une phrase, la décision écrite comme une alternative, le périmètre délimité (mobilité douce professionnelle dans le canton de Genève, horizon 2029), deux domaines d’activité séparés avec leurs facteurs clés de succès, et les parties prenantes à fort pouvoir nommées.',

  minutes: '0:00 – 1:30',

  modeles: ['perimetre', 'parties-prenantes'],

  /* ------------------------------------------------------------- Méthode */

  methode: [
    {
      titre: '1. Lire l’énoncé deux fois, crayon en main',
      detail:
        'La première lecture sert à comprendre l’histoire, rien d’autre. La seconde sert à marquer : les chiffres, les dates, les noms d’acteurs, et les verbes qui annoncent une décision — « hésite entre », « envisage de », « doit choisir ». On souligne, on ne conclut pas encore.',
      aEviter:
        'Commencer à analyser dès la troisième ligne. On se fixe alors sur le premier fait rencontré, et on lit tout le reste de l’énoncé pour lui donner raison.',
    },
    {
      titre: '2. Écrire la décision à trancher, sous forme d’alternative',
      detail:
        'En haut de la feuille, une seule ligne : « A ou B ». Tout ce qu’on analysera ensuite n’a qu’un but — choisir entre les deux et savoir dire pourquoi. Si l’énoncé ne donne pas l’alternative, on la formule soi-même : un cas sans décision n’est pas un cas de stratégie.',
      aEviter:
        'Rester sur « analyser la situation ». On produit alors une description, alors que l’examinateur attend un choix argumenté.',
    },
    {
      titre: '3. Remonter du symptôme au problème',
      detail:
        'Un énoncé donne des symptômes : un chiffre qui baisse, un client qui se plaint, un délai qui s’allonge. On enchaîne trois fois « pourquoi ? » jusqu’à tomber sur une cause de structure — un modèle de revenus, une dépendance, une compétence absente. C’est elle, le problème stratégique.',
      aEviter:
        'Répéter le symptôme comme diagnostic. « Le problème, c’est que les ventes baissent » est la phrase de l’énoncé remise dans l’ordre : elle ne montre aucune analyse, et surtout elle ne se décide pas.',
    },
    {
      titre: '4. Écrire le périmètre en une phrase, sur la feuille',
      detail:
        'Six réponses assemblées : quel besoin, pour quels clients, avec quelle offre, sur quelle zone, à quel horizon, dans quel domaine d’activité. Deux tests de validité : puis-je nommer trois concurrents précis à l’intérieur ? Reste-t-il une évolution à observer dedans ? Non au premier, c’est trop large ; non au second, c’est trop étroit.',
      aEviter:
        'Garder le périmètre « dans la tête ». Un périmètre non écrit dérive : on commence sur la mobilité genevoise et on finit sur le marché européen du vélo sans s’en apercevoir.',
    },
    {
      titre: '5. Découper les domaines d’activité avant tout outil',
      detail:
        'Pour chaque activité de l’entreprise, trois colonnes : ses clients, ses concurrents, ses facteurs clés de succès — c’est-à-dire ce qu’il faut maîtriser pour réussir dans ce secteur. Deux activités qui partagent les trois colonnes forment un seul domaine ; si une seule colonne diffère, on découpe. 📘 Porter et le SWOT ne s’appliquent qu’à ce niveau.',
      aEviter:
        'Traiter une entreprise multi-activités comme un bloc. Le résultat est une moyenne, qui décrit une entreprise « moyennement bien placée » n’existant nulle part.',
    },
    {
      titre: '6. Nommer les acteurs, et les noter deux fois chacun',
      detail:
        'Chaque acteur reçoit deux notes : son pouvoir — peut-il dire non ? — et son intérêt — la décision change-t-elle quelque chose pour lui ? Le croisement des deux commande le traitement. On le fait maintenant et pas plus tard, parce que l’acceptabilité, testée en toute fin de parcours, se juge nom par nom.',
      aEviter:
        'Se contenter d’une phrase générale du type « les parties prenantes seront probablement favorables ». Sans nom d’acteur, elle ne vaut rien devant un jury.',
    },
    {
      titre: '7. Annoncer ce qu’on laisse volontairement de côté',
      detail:
        'Une dernière ligne : ce que le périmètre exclut, et pourquoi. C’est la ligne la plus rentable de l’étape — elle transforme un oubli possible en choix assumé, et désamorce la question avant qu’elle soit posée.',
      aEviter:
        'Se taire sur les exclusions par peur qu’elles ressemblent à des oublis. C’est l’inverse qui se produit : le silence se lit comme un oubli, l’annonce se lit comme un choix.',
    },
  ],

  /* -------------------------------------------------------- Raisonnement */

  raisonnement: [
    {
      t: 'texte',
      contenu:
        'Dix minutes de préparation, une feuille blanche, un énoncé qu’on découvre. Le réflexe naturel est de sortir un outil tout de suite — « alors, PESTEL : Politique… ». C’est l’erreur la plus coûteuse du parcours, parce qu’un outil appliqué à un objet mal défini produit des phrases vraies et inutilisables. Les quatre-vingt-dix premières secondes ne servent donc à aucun outil : elles servent à savoir de quoi on parle.',
    },
    {
      t: 'question',
      contenu:
        'Première question, avant tout le reste : qu’est-ce qu’on me demande de décider ?',
    },
    {
      t: 'observation',
      source:
        'L’énoncé se termine par : « la direction hésite entre défendre son activité de vente de vélos, ou basculer vers un abonnement mobilité tout compris facturé aux entreprises genevoises ».',
      conclusion:
        'La décision est déjà écrite, et elle est écrite comme une alternative : A ou B. Je l’inscris en haut de ma feuille, et elle devient mon filtre. Chaque fait que je rencontrerai ensuite passera par une seule question — est-ce que ceci pèse sur le choix entre A et B ? Les faits qui ne pèsent pas restent dehors, et l’analyse arrête de gonfler.',
    },
    {
      t: 'question',
      contenu: 'Deuxième question : et le problème, c’est quoi ? Le recul de 8 % des ventes ?',
    },
    {
      t: 'observation',
      source: '« Depuis deux ans, les ventes de vélos reculent de 8 %. »',
      conclusion:
        'C’est un symptôme, pas un problème. On le voit à ceci : personne ne peut décider « d’arrêter la baisse ». Un problème stratégique est une cause de structure sur laquelle une décision peut mordre. Le −8 % est le thermomètre ; il reste à trouver la fièvre.',
    },
    {
      t: 'texte',
      contenu:
        'La technique tient en trois « pourquoi ? » enchaînés. Les ventes baissent — pourquoi ? Parce que des marques en ligne à bas prix sont arrivées, et parce qu’un vélo bien construit, bien réparé, se garde plus longtemps. Pourquoi cela fait-il si mal ? Parce que chez Atelier Léman tout l’argent d’un client arrive le jour de la livraison : 2 600 CHF encaissés, 1 400 CHF de coût, et plus rien ensuite jusqu’au vélo suivant. Pourquoi est-ce structurel ? Parce que la qualité du produit et la compétence de l’atelier — les deux forces de l’entreprise — repoussent elles-mêmes la date du prochain achat.',
    },
    {
      t: 'encadre',
      ton: 'succes',
      titre: 'Le problème, formulé',
      contenu:
        '« Le modèle de revenus d’Atelier Léman repose sur un renouvellement que la durabilité de son propre produit ralentit. » Une phrase, une cause — et une décision devient possible : soit on accélère le renouvellement, c’est défendre la vente ; soit on change de modèle de revenus, c’est l’abonnement. Remarque que le problème bien posé contient déjà l’alternative. Quand ce n’est pas le cas, c’est qu’on n’est pas remonté assez loin.',
    },
    {
      t: 'texte',
      contenu:
        'Troisième question : sur quoi, exactement, va porter mon analyse ? Le premier réflexe est de délimiter par le besoin, jamais par le produit. Un besoin, c’est le manque que le client cherche à combler ; il survit au produit qui le satisfait. Atelier Léman ne vend donc pas « des vélos électriques » : elle répond au besoin « se déplacer chaque jour dans l’agglomération genevoise sans voiture ». Formulé ainsi, le besoin fait apparaître d’un coup des rivaux qu’un cadrage par le produit aurait cachés — les transports publics, le scooter partagé, le vélo d’occasion — et il rend l’abonnement crédible : c’est le même besoin, servi autrement.',
    },
    {
      t: 'renvoi',
      modele: 'perimetre',
      point: 'marche',
      libelle:
        'Le périmètre commence par le besoin, exprimé avec un verbe, jamais par le nom du produit',
    },
    {
      t: 'observation',
      source:
        '« Elle répare et entretient des vélos de toutes marques, dans deux ateliers situés à Carouge et à Plainpalais » — et, plus loin, « des marques en ligne à bas prix se sont installées sur le marché suisse ».',
      conclusion:
        'Les deux activités ne se disputent pas le même territoire. Personne ne traverse le canton pour un dérailleur : la réparation se joue à l’échelle du quartier. La vente, elle, se joue face à une marque étrangère qui livre à Genève sans y avoir d’adresse. Deux zones de concurrence dans la même entreprise — c’est le premier indice qu’il y a ici deux métiers, et non un seul.',
    },
    {
      t: 'renvoi',
      modele: 'perimetre',
      point: 'zone',
      libelle:
        'La zone est celle où le client peut choisir, pas celle où l’entreprise a son adresse',
    },
    {
      t: 'tableau',
      entetes: ['', 'DAS 1 — vente de vélos', 'DAS 2 — réparation et service'],
      lignes: [
        ['Clients', 'particuliers aisés', 'tous les propriétaires de vélos, toutes marques'],
        ['Concurrents', 'marques en ligne, grandes enseignes', 'ateliers de quartier'],
        [
          'Facteurs clés de succès',
          'prix, design, notoriété',
          'compétence technique, proximité, délai',
        ],
        ['Position d’Atelier Léman', 'faible', 'forte'],
      ],
      legende:
        'DAS, pour domaine d’activité stratégique 📘 : un ensemble d’activités homogène, avec ses propres clients, ses propres concurrents et ses propres facteurs clés de succès. Le test du découpage tient en une question — les trois premières lignes sont-elles identiques d’une colonne à l’autre ? Une seule qui diffère suffit à séparer deux domaines. Ici les trois diffèrent : ce sont bien deux métiers, et il serait faux de leur appliquer un seul Porter.',
    },
    {
      t: 'observation',
      source:
        '« Leurs mécaniciens diagnostiquent des pannes électroniques que les ateliers de quartier ne savent pas traiter. »',
      conclusion:
        'Sur le DAS 2, l’entreprise détient précisément le facteur clé de succès du secteur — la compétence technique. Sur le DAS 1, elle ne détient ni le prix ni l’échelle. Le cadrage vient de produire une intuition stratégique avant le moindre outil : l’entreprise est forte là où la décision propose d’aller, et faible là où elle se tient aujourd’hui. Ce n’est pas encore une réponse, mais c’est déjà une direction.',
    },
    {
      t: 'renvoi',
      modele: 'perimetre',
      point: 'das',
      libelle:
        'Le test des trois colonnes, et pourquoi Porter et le SWOT s’appliquent au domaine et non à l’entreprise',
    },
    {
      t: 'encadre',
      ton: 'alerte',
      titre: 'Facteur clé de succès ou force ? Le test à poser dès maintenant',
      contenu:
        '« La compétence technique compte beaucoup dans la réparation » est un facteur clé de succès : c’est une règle du secteur, donc de l’externe. « Nos mécaniciens sont parmi les meilleurs du canton » est une force : c’est un atout propre, donc de l’interne. Une seule question sépare les deux — cette phrase serait-elle vraie pour un concurrent ? Si oui, externe ; si elle ne vaut que pour cette entreprise, interne. Les confondre fait basculer la moitié du SWOT du mauvais côté, et le croisement final devient faux.',
    },
    {
      t: 'texte',
      contenu:
        'Reste à assembler. Le périmètre s’écrit en une phrase, six réponses dedans : « J’analyse le besoin de mobilité quotidienne sans voiture des entreprises du canton de Genève, servi par des vélos électriques et par des offres d’abonnement, sur le canton de Genève, à l’horizon 2029, au sein du domaine réparation et service. » L’horizon 2029 n’est pas un chiffre rond choisi au hasard : c’est à peu près la durée de vie utile d’une batterie, donc le cycle sur lequel un abonnement devra s’équilibrer.',
    },
    {
      t: 'renvoi',
      modele: 'perimetre',
      point: 'centre',
      libelle: 'Le patron de la phrase de cadrage, et ses deux tests de validité',
    },
    {
      t: 'question',
      contenu:
        'Quatrième et dernière question : qui a son mot à dire — et qui peut faire échouer ce qu’on décidera ?',
    },
    {
      t: 'tableau',
      entetes: ['Acteur', 'Pouvoir', 'Intérêt', 'Case, et ce qu’on en fait'],
      lignes: [
        ['Les mécaniciens', 'fort', 'fort', 'Gérer de près — les associer à la conception du pilote'],
        [
          'La Ville et le canton',
          'fort',
          'faible',
          'Satisfaire — leur proposer le pilote comme vitrine cantonale',
        ],
        ['La banque', 'fort', 'faible', 'Satisfaire — l’avertir avant que la trésorerie bouge'],
        [
          'Les clients particuliers de Carouge',
          'faible',
          'fort',
          'Informer — en faire la preuve sociale, pas la rumeur',
        ],
        [
          'Les magasins de vélo de loisir',
          'faible',
          'faible',
          'Surveiller — et savoir dire pourquoi on ne fait rien',
        ],
      ],
      legende:
        'Deux notes par acteur, jamais une seule 📘 : le pouvoir dit l’intensité du traitement, l’intérêt en dit la nature. Trente secondes d’écriture ici, et le critère d’acceptabilité du SAF, tout à la fin, aura des noms à citer au lieu d’une formule creuse.',
    },
    {
      t: 'renvoi',
      modele: 'parties-prenantes',
      point: 'gerer',
      libelle:
        'Pouvoir fort × intérêt fort : chercher l’acteur dont le métier change, pas la direction',
    },
    {
      t: 'observation',
      source:
        '« La Ville et le Canton de Genève multiplient les subventions à la mobilité douce, notamment pour les entreprises qui équipent leurs collaborateurs. »',
      conclusion:
        'Une seule phrase, deux usages. Ici, elle nomme un acteur à pouvoir fort et intérêt faible : il fixe le montant et les conditions sans regarder cet atelier en particulier — c’est le quadrant le plus instable, celui d’où viennent presque tous les blocages. À l’étape suivante, la même phrase reviendra comme facteur politique du PESTEL et comme sixième force de Porter. Le cadrage ne consomme pas les faits : il les range.',
    },
    {
      t: 'renvoi',
      modele: 'parties-prenantes',
      point: 'satisfaire',
      libelle: 'Pouvoir fort × intérêt faible : le géant endormi, et ce qui peut le réveiller',
    },
    {
      t: 'schema',
      schema: {
        h: 600,
        description:
          'Quatre flèches partent de l’énoncé du cas, à gauche, vers quatre questions empilées — quel problème, quel périmètre, quel domaine d’activité, qui a son mot à dire — dont les réponses se rassemblent à droite dans une fiche de cadrage unique.',
        noeuds: [
          {
            id: 'enonce',
            titre: 'L’ÉNONCÉ',
            lignes: ['des faits,', 'des chiffres,', 'une hésitation'],
            x: 40,
            y: 180,
            l: 200,
            h: 200,
            ton: 'sourd',
          },
          {
            id: 'q1',
            titre: '1 · QUEL PROBLÈME ?',
            lignes: ['Pas le symptôme : la cause', 'sur laquelle une décision mord'],
            x: 300,
            y: 30,
            l: 380,
            h: 110,
          },
          {
            id: 'q2',
            titre: '2 · QUEL PÉRIMÈTRE ?',
            lignes: ['Quel besoin, quels clients,', 'quelle zone, quel horizon ?'],
            x: 300,
            y: 170,
            l: 380,
            h: 110,
          },
          {
            id: 'q3',
            titre: '3 · QUEL DOMAINE D’ACTIVITÉ ?',
            lignes: ['Clients, concurrents et', 'facteurs clés de succès propres ?'],
            x: 300,
            y: 310,
            l: 380,
            h: 110,
          },
          {
            id: 'q4',
            titre: '4 · QUI A SON MOT À DIRE ?',
            lignes: ['Qui peut dire non ?', 'Qui subit sans pouvoir ?'],
            x: 300,
            y: 450,
            l: 380,
            h: 110,
          },
          {
            id: 'fiche',
            titre: 'LA FICHE DE CADRAGE',
            lignes: ['sept lignes', 'de brouillon'],
            x: 740,
            y: 180,
            l: 220,
            h: 200,
            ton: 'accent',
          },
        ],
        liens: [
          { de: 'enonce', vers: 'q1', depuis: 'droite', arrive: 'gauche' },
          { de: 'enonce', vers: 'q2', depuis: 'droite', arrive: 'gauche' },
          { de: 'enonce', vers: 'q3', depuis: 'droite', arrive: 'gauche' },
          { de: 'enonce', vers: 'q4', depuis: 'droite', arrive: 'gauche' },
          { de: 'q1', vers: 'fiche', depuis: 'droite', arrive: 'gauche' },
          { de: 'q2', vers: 'fiche', depuis: 'droite', arrive: 'gauche' },
          { de: 'q3', vers: 'fiche', depuis: 'droite', arrive: 'gauche' },
          { de: 'q4', vers: 'fiche', depuis: 'droite', arrive: 'gauche' },
        ],
        note:
          'Quatre-vingt-dix secondes, quatre questions, sept lignes de brouillon. Et une huitième ligne, la plus rentable de toutes : ce qu’on laisse volontairement de côté.',
      },
    },
    {
      t: 'renvoi',
      modele: 'perimetre',
      point: 'exclus',
      libelle: 'L’exclusion annoncée : la ligne qui transforme un oubli possible en choix assumé',
    },
    {
      t: 'oral',
      contenu:
        '« Avant d’appliquer le moindre outil, je cadre. Le problème n’est pas le recul de 8 % des ventes — ça, c’est le symptôme : c’est que le modèle de revenus d’Atelier Léman repose sur un renouvellement que la durabilité de son propre produit ralentit. D’où l’alternative : défendre la vente, ou basculer vers l’abonnement mobilité aux entreprises. J’analyse donc le besoin de mobilité quotidienne sans voiture des entreprises du canton de Genève, à l’horizon 2029, au sein du domaine réparation et service — et non le marché du vélo en général, où les acteurs, les subventions et la réglementation ne sont pas les mêmes. Je laisse volontairement de côté le vélo de loisir, saisonnier et régi par d’autres facteurs clés de succès, ainsi que toute perspective d’exportation. Enfin, trois acteurs commanderont la suite : les mécaniciens, à associer ; le canton, à tenir satisfait ; les clients particuliers de Carouge, à informer. »',
    },
  ],

  /* ----------------------------------------------------------- Livrable */

  livrable: {
    titre: 'La fiche de cadrage, telle qu’elle est sur le brouillon',
    lignes: [
      'DÉCISION : défendre la vente de vélos OU basculer vers l’abonnement mobilité B2B',
      'PROBLÈME : les revenus dépendent d’un renouvellement que la durabilité du produit ralentit — le −8 % n’en est que le symptôme',
      'PÉRIMÈTRE : mobilité quotidienne sans voiture · entreprises · canton de Genève · horizon 2029',
      'DAS 1 vente — particuliers · rivaux marques en ligne · FCS prix et notoriété → position faible',
      'DAS 2 réparation — tous propriétaires · rivaux ateliers de quartier · FCS compétence, proximité, délai → position forte',
      'DAS retenu : le 2, parce que la décision porte précisément sur le basculement du 1 vers le 2',
      'FCS à vérifier au diagnostic interne : compétence technique · proximité · délai d’intervention',
      'PARTIES PRENANTES à fort pouvoir : mécaniciens (gérer de près) · canton et banque (satisfaire) · clients de Carouge (informer)',
      'LAISSÉ DE CÔTÉ : le vélo de loisir, saisonnier et régi par d’autres FCS · l’export, ni logistique ni marque pour cela',
      'NOTÉ POUR PLUS TARD : deux fournisseurs de batteries seulement — ça se traitera au diagnostic interne',
    ],
  },

  /* ------------------------------------------------------------- Pièges */

  pieges: [
    {
      titre: 'Sortir un outil dès la première phrase',
      explication:
        '« Alors, PESTEL : Politique… » avant même de savoir quelle activité on analyse. On produit des faits vrais — l’inflation mondiale, les tensions commerciales — et sans le moindre effet sur le choix à faire. C’est le « PESTEL de Nestlé » : valable pour l’eau minérale, les capsules de café et la nourriture pour animaux à la fois, donc utile pour aucune des trois.',
      reflexe:
        'S’interdire le premier outil tant que la phrase de périmètre n’est pas écrite sur la feuille. Quatre-vingt-dix secondes, pas davantage — mais elles passent avant.',
    },
    {
      titre: 'Prendre le symptôme pour le diagnostic',
      explication:
        '« Le problème, c’est que les ventes baissent. » C’est la phrase de l’énoncé remise dans l’ordre : elle ne montre aucune analyse, et surtout elle ne se décide pas — personne ne signe une décision « d’arrêter la baisse ».',
      reflexe:
        'Trois « pourquoi ? » enchaînés, jusqu’à tomber sur une cause de structure : un modèle de revenus, une dépendance, une compétence absente. Puis vérifier que le problème obtenu contient déjà l’alternative à trancher — sinon, on n’est pas remonté assez loin.',
    },
    {
      titre: 'Confondre un facteur clé de succès et une force',
      explication:
        '« La compétence technique compte beaucoup dans la réparation » est une règle du secteur, donc de l’externe : c’est un facteur clé de succès. « Nos mécaniciens sont parmi les meilleurs du canton » est un atout propre, donc de l’interne : c’est une force. Les échanger fait basculer la moitié du SWOT du mauvais côté, et le croisement final — celui d’où sortiront les options — devient faux.',
      reflexe:
        'Une seule question, posée à chaque phrase : serait-elle vraie pour un concurrent ? Si oui, externe. Si elle ne vaut que pour cette entreprise, interne.',
    },
    {
      titre: 'Traiter une entreprise multi-activités comme un bloc',
      explication:
        'Un seul Porter et un seul SWOT pour la vente et pour la réparation, alors que les clients, les concurrents et les facteurs clés de succès diffèrent d’une activité à l’autre. Le résultat est une moyenne : elle décrit une entreprise « moyennement bien placée » qui n’existe pas, et elle efface justement l’écart — faible d’un côté, forte de l’autre — sur lequel toute la décision repose.',
      reflexe:
        'Le test des trois colonnes, appliqué avant tout outil : mêmes clients, mêmes concurrents, mêmes facteurs clés de succès ? Une seule colonne différente suffit à séparer deux domaines d’activité.',
    },
    {
      titre: 'Remettre les parties prenantes à la fin',
      explication:
        'On les garde « pour l’acceptabilité », et le jour venu on écrit « les parties prenantes accepteront probablement ». Une phrase sans nom d’acteur ne vaut rien : l’acceptabilité se juge nom par nom, et les noms se trouvent dans l’énoncé, dès le début.',
      reflexe:
        'Recenser les acteurs au cadrage, avec deux notes chacun — pouvoir, intérêt. Le tableau prend trente secondes et il resservira tel quel à l’étape du SAF.',
    },
  ],
}
