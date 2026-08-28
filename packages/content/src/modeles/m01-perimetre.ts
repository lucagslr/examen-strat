import type { Modele } from './types'

export const modele: Modele = {
  id: 'perimetre',
  numero: 1,
  slug: 'perimetre-strategique',
  nom: 'Périmètre stratégique',
  sousTitre: 'Définir ce que l’on analyse avant PESTEL et Porter',
  famille: 'cadrage',
  etape: 'e0',

  question: 'Sur quoi, exactement, porte l’analyse que je m’apprête à faire ?',

  enUnePhrase:
    'Le périmètre stratégique, c’est la phrase qui dit quel besoin, pour quels clients, avec quelle offre, sur quel territoire, sur quelle durée et pour quelle activité de l’entreprise on travaille — et tout ce qui vient après (PESTEL, Porter, SWOT) n’est vrai qu’à l’intérieur de cette phrase.',

  produit:
    'Une phrase de cadrage écrite en toutes lettres — un besoin, des clients, une offre, une zone, un horizon, un domaine d’activité — accompagnée de la liste courte de ce que l’on écarte volontairement.',

  quandUtiliser: [
    'Toujours, et en premier : c’est le geste d’ouverture de tout cas, avant le moindre outil. 📘 Le cours pose que « l’analyse de l’environnement commence par la définition du périmètre de la stratégie ».',
    'Quand l’énoncé décrit une entreprise qui fait plusieurs métiers à la fois : le périmètre force à choisir lequel on analyse.',
    'Quand on hésite entre deux outils : situer le fait dans son périmètre indique à quelle strate de l’environnement il appartient, donc quel outil sortir.',
    'Quand une analyse déjà commencée « tourne à vide » et produit des banalités : c’est presque toujours le signe d’un périmètre absent ou trop large.',
  ],

  quandNePasUtiliser: [
    'Ce n’est pas un outil de diagnostic : le périmètre ne dit rien sur la santé de l’entreprise, il dit seulement où regarder. Ne consacre pas trois minutes de l’oral à le justifier — une phrase suffit.',
    'Ce n’est pas non plus une décision stratégique. Choisir de sortir d’un marché est une option qui se teste au SAF ; délimiter le terrain d’analyse est une convention de travail que l’on annonce.',
  ],

  schema: {
    h: 970,
    description:
      'Six questions réunies dans un cadre — le besoin, les clients, l’offre, la zone géographique, l’horizon et le domaine d’activité — descendent vers une case unique, le périmètre stratégique, qui produit à son tour deux résultats : la phrase de cadrage qui rend les outils applicables, et la liste de ce que l’on écarte volontairement.',
    noeuds: [
      {
        id: 'questions',
        titre: 'LES SIX QUESTIONS DU CADRAGE',
        x: 16,
        y: 16,
        l: 968,
        h: 530,
        forme: 'cadre',
        ton: 'sourd',
      },
      {
        id: 'marche',
        titre: 'MARCHÉ / BESOIN',
        lignes: ['Que cherche réellement le client ?', 'le besoin, pas le nom du produit'],
        x: 40,
        y: 70,
        l: 440,
        h: 130,
        point: 'marche',
      },
      {
        id: 'clients',
        titre: 'CLIENTS',
        lignes: ['Qui achète ? Qui utilise ?', 'décide, paie, utilise'],
        x: 520,
        y: 70,
        l: 440,
        h: 130,
        point: 'clients',
      },
      {
        id: 'offre',
        titre: 'OFFRE / TECHNOLOGIES',
        lignes: ['Quelles solutions répondent', 'au besoin ? Les rivales comprises'],
        x: 40,
        y: 230,
        l: 440,
        h: 130,
        point: 'offre',
      },
      {
        id: 'zone',
        titre: 'ZONE GÉOGRAPHIQUE',
        lignes: ['Où se joue la concurrence ?', 'là où le client peut choisir'],
        x: 520,
        y: 230,
        l: 440,
        h: 130,
        point: 'zone',
      },
      {
        id: 'horizon',
        titre: 'HORIZON DE TEMPS',
        lignes: ['Sur quelle durée ce cadrage', 'tient-il ? Écrire une date'],
        x: 40,
        y: 390,
        l: 440,
        h: 130,
        point: 'horizon',
      },
      {
        id: 'das',
        titre: 'DAS — DOMAINE D’ACTIVITÉ',
        lignes: ['Quel bloc d’activités a ses', 'propres clients et concurrents ?'],
        x: 520,
        y: 390,
        l: 440,
        h: 130,
        point: 'das',
      },
      {
        id: 'perimetre',
        titre: 'PÉRIMÈTRE STRATÉGIQUE',
        lignes: ['Les six réponses assemblées', 'en une seule phrase, écrite'],
        x: 230,
        y: 610,
        l: 540,
        h: 130,
        ton: 'accent',
        point: 'centre',
      },
      {
        id: 'livrable',
        titre: 'LA PHRASE DE CADRAGE',
        lignes: ['PESTEL, Porter et le SWOT', 'deviennent enfin applicables'],
        x: 40,
        y: 800,
        l: 440,
        h: 130,
        ton: 'positif',
        point: 'livrable',
      },
      {
        id: 'exclus',
        titre: 'CE QU’ON LAISSE DE CÔTÉ',
        lignes: ['Ce qu’on écarte exprès,', 'et le motif de cet écart'],
        x: 520,
        y: 800,
        l: 440,
        h: 130,
        ton: 'alerte',
        point: 'exclus',
      },
    ],
    liens: [
      { de: 'questions', vers: 'perimetre', ton: 'accent' },
      { de: 'perimetre', vers: 'livrable', ton: 'positif' },
      { de: 'perimetre', vers: 'exclus', trait: 'pointille', ton: 'alerte' },
    ],
    note:
      'Le cours délimite par le besoin, pas par le produit : on analyse « le marché suisse des solutions d’hydratation », et non « l’eau en bouteille ».',
  },

  points: [
    {
      id: 'marche',
      libelle: 'MARCHÉ / BESOIN — que cherche réellement le client ?',
      cestQuoi:
        'La case qui nomme le **besoin** que l’on sert, c’est-à-dire le manque que le client cherche à combler — et non l’objet qu’on lui vend. Un besoin (le manque à combler) survit au produit qui le satisfait : le besoin « se déplacer en ville sans voiture » existait avant le vélo électrique et existera après lui.',
      question:
        'Si mon produit disparaissait demain, que ferait le client à la place ? La réponse nomme le besoin ; le produit n’en est qu’une des solutions.',
      quoiMettre: [
        'Le besoin exprimé en verbe, pas en nom de produit : « se déplacer », « rester hydraté », « ne pas tomber en panne » plutôt que « vélo », « bouteille », « pièce détachée ».',
        'Le déclencheur d’achat : à quel moment le besoin devient-il urgent ? (déménagement, panne, changement de loi, nouvelle prime cantonale).',
        'Le critère de satisfaction du client : ce qui, dans sa tête, distingue une bonne réponse d’une mauvaise (le prix ? le délai ? la tranquillité ?).',
        'Les solutions concurrentes du même besoin, même quand elles ne ressemblent pas au produit — ce sont les futurs substituts de Porter.',
      ],
      exemple:
        'Atelier Léman ne vend pas « des vélos électriques » : elle répond au besoin « se déplacer chaque jour dans l’agglomération genevoise sans voiture et sans y penser ». Formulé ainsi, le besoin fait apparaître d’un coup les vrais rivaux : les transports publics genevois, le scooter partagé, le vélo d’occasion — et rend crédible l’idée d’un abonnement mobilité, qui répond au même besoin par un autre produit.',
      piege:
        'Écrire le nom du produit dans cette case. « Marché : les vélos électriques. » On enferme alors toute l’analyse dans un objet, et les substituts deviennent invisibles.',
      reflexe:
        'Se forcer à écrire le besoin avec un verbe à l’infinitif. Si la phrase contient le nom du produit, elle est fausse : recommence.',
      notions: ['perimetre', 'menace-substituts'],
    },
    {
      id: 'clients',
      libelle: 'CLIENTS — qui achète, qui paie, qui utilise ?',
      cestQuoi:
        'La case qui identifie les personnes ou les organisations à l’intérieur du périmètre. Elle sépare trois rôles qui ne sont pas toujours tenus par la même personne : celui qui **décide**, celui qui **paie**, celui qui **utilise**.',
      question:
        'Pour un achat type, qui signe, qui débourse l’argent et qui se sert du produit ? Sont-ce trois personnes différentes ?',
      quoiMettre: [
        'Les segments, c’est-à-dire les groupes de clients qui achètent pour les mêmes raisons : particuliers, entreprises, collectivités publiques.',
        'Le rôle de chacun : décideur, payeur, utilisateur, prescripteur (celui qui recommande sans acheter, par exemple un médecin ou un responsable RH).',
        'La taille approximative de chaque segment et sa part dans le chiffre d’affaires — un segment qui pèse 3 % ne mérite pas le périmètre.',
        'Ce qui déclenche le renouvellement : à quelle fréquence ce client revient-il ? C’est ce chiffre qui décidera plus tard si un abonnement a du sens.',
        'Les clients que l’on ne sert pas et que l’on n’a pas l’intention de servir : ils appartiennent à la case « laissé de côté ».',
      ],
      exemple:
        'Chez Atelier Léman, le passage au B2B (business to business, c’est-à-dire la vente d’entreprise à entreprise) éclate les trois rôles : l’entreprise cliente **décide** et **paie**, mais c’est le salarié qui **utilise** le vélo. Conséquence immédiate : l’argument de vente change de nature — on ne parle plus de plaisir de rouler mais de coût par collaborateur et par mois, d’absence de gestion de flotte, d’image d’employeur. Le même produit, un autre discours.',
      piege:
        'Confondre le client et l’utilisateur, puis construire tout l’argumentaire pour la mauvaise personne. C’est l’erreur la plus fréquente dès qu’un cas passe du B2C au B2B.',
      reflexe:
        'Écrire les trois rôles côte à côte : décide / paie / utilise. Si les trois cases contiennent le même nom, on est en B2C ; si elles diffèrent, la proposition de valeur devra parler à chacune.',
      notions: ['perimetre', 'pouvoir-clients', 'parties-prenantes'],
    },
    {
      id: 'offre',
      libelle: 'OFFRE / TECHNOLOGIES — quelles solutions répondent au besoin ?',
      cestQuoi:
        'La case qui recense **toutes** les manières connues de satisfaire le besoin identifié plus haut, la nôtre comprise. Elle transforme un besoin abstrait en un ensemble de solutions concrètes que l’on peut comparer.',
      question:
        'Quelles technologies, quels modèles économiques, quels services répondent aujourd’hui à ce besoin — et lesquels y répondront demain ?',
      quoiMettre: [
        'Notre solution actuelle, décrite telle qu’elle est vécue par le client, pas telle qu’elle figure au catalogue.',
        'Les solutions rivales de même nature (les autres vélos électriques) : elles fonderont la rivalité concurrentielle de Porter.',
        'Les solutions de nature différente qui satisfont le même besoin (l’abonnement de transports publics, le scooter en libre-service) : ce sont les substituts.',
        'Les technologies qui montent et pourraient déplacer l’offre : batterie à charge rapide, connectivité, diagnostic à distance.',
        'Les modèles économiques disponibles : vente ferme, location, abonnement, leasing — car le même produit vendu autrement devient une autre offre.',
      ],
      exemple:
        'Pour le besoin « se déplacer chaque jour à Genève sans voiture », l’offre comprend le vélo électrique vendu 2 600 CHF (chiffre illustratif, cohérent avec le reste du parcours), le vélo d’occasion, l’abonnement Unireso, le scooter partagé, et — c’est l’intérêt de la case — l’abonnement mobilité tout compris que la direction envisage. Le placer dans la case « offre » dès le cadrage, c’est reconnaître qu’il s’agit d’une **autre façon de servir le même besoin**, et non d’un nouveau métier.',
      piege:
        'Ne lister que les solutions qui ressemblent à la nôtre. On obtient alors un périmètre confortable, où l’on est bien placé — et l’on découvre le substitut au moment où il a déjà pris le marché.',
      reflexe:
        'Ajouter systématiquement une ligne « et sinon, comment le client fait-il ? ». La réponse est presque toujours un substitut qu’on avait oublié.',
      notions: ['perimetre', 'menace-substituts', 'differenciation'],
    },
    {
      id: 'zone',
      libelle: 'ZONE GÉOGRAPHIQUE — où se joue la concurrence ?',
      cestQuoi:
        'La case qui délimite le territoire sur lequel les acteurs se disputent réellement les mêmes clients. Elle ne se confond ni avec le lieu d’implantation de l’entreprise, ni avec la zone où ses produits sont physiquement disponibles.',
      question:
        'Sur quel territoire un client peut-il, en pratique, choisir entre nous et un rival ? C’est là — et seulement là — que se joue la concurrence.',
      quoiMettre: [
        'L’échelle réelle du choix client : quartier, ville, canton, pays, Europe, monde. Elle se déduit de la distance que le client accepte de parcourir ou du périmètre de livraison.',
        'Le cadre réglementaire qui s’applique sur ce territoire — subventions, normes, fiscalité : il change à chaque frontière et modifie les règles du jeu.',
        'Les frontières qui ne se voient pas sur une carte : la vente en ligne fait entrer dans la zone des acteurs qui n’y ont aucune adresse.',
        'Le décalage entre l’activité de vente et l’activité de service : un service qui exige une présence physique a une zone plus étroite qu’un produit expédié.',
      ],
      exemple:
        'Atelier Léman occupe en réalité **deux zones**. La réparation se joue à l’échelle du quartier — personne ne traverse le canton pour un dérailleur : les rivaux sont les ateliers de Carouge et de Plainpalais. La vente de vélos, elle, se joue à l’échelle de l’Europe en ligne, puisqu’une marque low-cost allemande livre à Genève sans y avoir d’adresse. Constater ce décalage au cadrage explique déjà pourquoi l’entreprise est forte d’un côté et faible de l’autre.',
      piege:
        'Prendre la zone d’implantation pour la zone de concurrence : « nous sommes genevois, donc nos concurrents sont genevois ». La vente en ligne rend cette phrase fausse dans presque tous les cas récents.',
      reflexe:
        'Poser la question du côté du client, jamais du côté de l’entreprise : « d’où peut-il commander la même chose ? ». Si la réponse dépasse la ville, la zone dépasse la ville.',
      notions: ['perimetre', 'rivalite-concurrents', 'menace-nouveaux-entrants'],
    },
    {
      id: 'horizon',
      libelle: 'HORIZON DE TEMPS — sur quelle durée ce cadrage tient-il ?',
      cestQuoi:
        '🔎 La case qui date le périmètre. Un périmètre n’est pas éternel : il vaut pour une fenêtre de temps, au-delà de laquelle une technologie ou une loi l’aura déformé. 📘 La définition du cours associe explicitement le périmètre à un horizon, aux côtés de l’activité et du territoire.',
      question:
        'Sur combien d’années ma recommandation doit-elle tenir — et quel événement prévisible rendrait ce périmètre caduc avant l’échéance ?',
      quoiMettre: [
        'La durée retenue, en années : 3 ans pour une décision opérationnelle, 5 à 10 ans pour un engagement lourd (usine, réseau, flotte).',
        'La justification de cette durée : elle vient du cycle d’investissement du secteur, pas d’un chiffre rond choisi au hasard.',
        'Les échéances datées connues : entrée en vigueur d’une norme, fin d’un contrat fournisseur, fin d’un dispositif de subvention.',
        'Le point de bascule technologique attendu, s’il en existe un — c’est lui qui fixe la date de péremption du périmètre.',
      ],
      exemple:
        'Atelier Léman raisonne à trois ans : c’est la durée de vie utile d’une batterie et donc le cycle sur lequel un abonnement doit s’équilibrer. Deux échéances datées tombent dans cette fenêtre : la reconduction — incertaine — des subventions de la Ville de Genève à la mobilité douce, et le durcissement annoncé des règles suisses sur les déchets électroniques, qui touche directement les batteries. Un cadrage à dix ans ferait disparaître ces deux repères dans le flou.',
      piege:
        'Ne pas dater du tout, puis mélanger dans la même analyse des faits d’aujourd’hui et des tendances à quinze ans. On obtient un diagnostic qui ne se vérifie jamais.',
      reflexe:
        'Écrire une date, pas une durée vague. « Horizon 2029 » se contrôle ; « à moyen terme » ne veut rien dire et ne s’évalue pas.',
      notions: ['perimetre', 'demarche-strategique'],
    },
    {
      id: 'das',
      libelle: 'DAS — quel domaine d’activité stratégique ?',
      cestQuoi:
        '📘 Le **DAS**, domaine d’activité stratégique, est un sous-ensemble homogène d’activités d’une entreprise, avec ses propres clients, ses propres concurrents et ses propres facteurs clés de succès (ce qu’il faut maîtriser pour réussir dans ce secteur). C’est le niveau auquel Porter et le SWOT s’appliquent vraiment.',
      question:
        'Cette entreprise fait-elle un seul métier ou plusieurs ? Si je changeais de métier, changerais-je aussi de concurrents et de règles du jeu ?',
      quoiMettre: [
        'La liste des activités de l’entreprise, sans les trier pour l’instant.',
        'Pour chacune : ses clients, ses concurrents, ses facteurs clés de succès. Trois colonnes, trois mots par colonne, cela suffit.',
        'Le regroupement : deux activités qui partagent les trois colonnes forment un seul DAS ; si une colonne diffère, ce sont deux DAS.',
        'Le DAS effectivement retenu pour l’analyse, et les autres, annoncés comme mis de côté.',
        'La position approximative de l’entreprise sur chaque DAS — forte ou faible — car ce constat oriente déjà la décision.',
      ],
      exemple:
        'Atelier Léman a deux DAS. **DAS 1, vente de vélos** : clients particuliers aisés, concurrents les marques en ligne et les grandes enseignes, facteurs clés de succès le prix, le design et la notoriété — position **faible**. **DAS 2, réparation et service** : clients tous les propriétaires de vélos quelle que soit la marque, concurrents les ateliers de quartier, facteurs clés de succès la compétence technique, la proximité et le délai — position **forte**. Le découpage a déjà produit une intuition : la décision porte précisément sur un basculement du DAS 1 vers le DAS 2.',
      piege:
        'Traiter une entreprise multi-activités comme un bloc, puis lui appliquer un seul Porter. Le résultat est une moyenne qui ne décrit aucune des deux réalités — c’est le « PESTEL de Nestlé », vrai partout et utile nulle part.',
      reflexe:
        'Le test des trois colonnes : mêmes clients, mêmes concurrents, mêmes facteurs clés de succès ? Si une seule colonne diffère, on découpe.',
      notions: ['das', 'facteurs-cles-succes', 'niveaux-strategiques'],
    },
    {
      id: 'centre',
      libelle: 'PÉRIMÈTRE STRATÉGIQUE — la case centrale',
      cestQuoi:
        '📘 Le périmètre est la délimitation de ce que l’on analyse, décidée avant toute analyse. Le cours le définit comme le point de départ : « définir le périmètre de notre stratégie, identifier toutes les forces qui peuvent influer sur la capacité de l’entreprise à obtenir et conserver un avantage concurrentiel ». Concrètement, c’est **une phrase** qui assemble les six réponses précédentes.',
      question:
        'Puis-je énoncer, en une phrase et sans hésiter, le besoin, les clients, l’offre, la zone, l’horizon et le domaine d’activité sur lesquels je travaille ?',
      quoiMettre: [
        'Une phrase et une seule, construite sur le patron : « J’analyse [le besoin] pour [les clients], servi par [l’offre], sur [la zone], à l’horizon [la date], au sein du [DAS]. »',
        'Le bon grain d’analyse : ni « le marché du vélo » (valable pour personne), ni « les vélos rouges vendus à Carouge le samedi » (plus aucune dynamique à observer).',
        'Le test de validité : suis-je capable de nommer trois concurrents précis à l’intérieur de ce périmètre ? Si non, il est trop large.',
        'Le second test : existe-t-il encore une évolution à analyser à l’intérieur ? Si non, il est trop étroit.',
        'La justification, en une demi-phrase : pourquoi ce découpage-là et pas un autre.',
      ],
      exemple:
        '« J’analyse le besoin de mobilité quotidienne sans voiture des entreprises du canton de Genève, servi par des vélos électriques et par des offres d’abonnement, sur le canton de Genève, à l’horizon 2029, au sein du domaine réparation et service — parce que c’est là qu’Atelier Léman détient une compétence rare et que la décision porte sur ce basculement. » Une phrase, six réponses, une justification.',
      piege:
        'Croire que le périmètre se « comprend » sans s’écrire. Un périmètre gardé en tête dérive : on commence sur la mobilité genevoise et l’on finit sur le marché européen du vélo, sans s’en rendre compte.',
      reflexe:
        'Le dire à voix haute en ouverture de l’oral, avant le premier outil. C’est trente secondes, et très peu de candidats le font — l’écart se voit immédiatement.',
      notions: ['perimetre', 'demarche-strategique', 'strates-environnement'],
    },
    {
      id: 'livrable',
      libelle: 'LA PHRASE DE CADRAGE — ce que le périmètre rend possible',
      cestQuoi:
        'La case qui dit à quoi sert tout ce travail : une fois la phrase écrite, les outils cessent d’être des listes récitées et deviennent des instruments de mesure appliqués à un objet précis. 🔎 Le périmètre n’a pas de valeur en lui-même ; il a une valeur parce qu’il rend les quatre étapes suivantes utilisables.',
      question:
        'Qu’est-ce que ma phrase de cadrage change concrètement à la case suivante du processus ?',
      quoiMettre: [
        'Le PESTEL cadré : on ne cherche plus « les facteurs politiques » mais ceux qui touchent la mobilité douce à Genève d’ici 2029.',
        'Le Porter cadré : les cinq forces se comptent à l’intérieur du périmètre, ce qui rend les concurrents nommables un par un.',
        'Les facteurs clés de succès : ils n’existent que pour un secteur délimité — sans périmètre, on ne sait même pas de quel secteur on parle.',
        'Le SWOT cadré : une opportunité n’en est une que pour une entreprise donnée, sur un périmètre donné.',
        'Les parties prenantes : elles se recensent sur un territoire et une activité, pas dans l’absolu.',
      ],
      exemple:
        'Sur Atelier Léman, la phrase de cadrage produit immédiatement quatre effets : le PESTEL retient les subventions cantonales à la mobilité douce (facteur politique) plutôt que « l’inflation mondiale » ; Porter identifie l’État comme sixième force parce que la Ville subventionne ; les facteurs clés de succès deviennent nommables — compétence technique, proximité, délai d’intervention ; et le SWOT sait enfin de quelle activité il parle.',
      piege:
        'Écrire la phrase, puis l’oublier et faire quand même un PESTEL générique. Le cadrage devient alors un ornement d’introduction sans effet sur la suite.',
      reflexe:
        'À chaque facteur trouvé plus tard dans l’analyse, se demander : « est-il vrai à l’intérieur de mon périmètre ? ». Si non, il ne rentre pas.',
      notions: ['diagnostic-externe', 'pestel', 'porter-five-forces', 'swot'],
    },
    {
      id: 'exclus',
      libelle: 'CE QU’ON LAISSE DE CÔTÉ — l’exclusion annoncée',
      cestQuoi:
        '🔎 La case qui dit tout haut ce que le périmètre laisse dehors, et pourquoi. Un périmètre est un choix, donc un renoncement : nommer le renoncement prouve que l’on a choisi au lieu de subir.',
      question:
        'Qu’est-ce qu’un examinateur pourrait me reprocher d’avoir oublié — et suis-je capable d’expliquer pourquoi je l’ai écarté volontairement ?',
      quoiMettre: [
        'Les activités de l’entreprise non retenues, avec la raison : règles du jeu différentes, poids négligeable, décision déjà prise ailleurs.',
        'Les segments de clientèle écartés et ce qui les distingue de ceux que l’on garde.',
        'Les zones géographiques exclues, avec le motif : autre réglementation, autre structure de coûts, pas de présence.',
        'Les horizons écartés : ce que l’on ne prétend pas prévoir au-delà de la date retenue.',
        'Une phrase de reprise, prête à dire si la question tombe : « je l’ai écarté parce que… ; si vous le souhaitez, je peux montrer ce que cela changerait. »',
      ],
      exemple:
        'Atelier Léman annonce laisser de côté le vélo de loisir et de tourisme — saisonnier, obéissant à d’autres facteurs clés de succès — ainsi que toute perspective d’exportation, l’entreprise n’ayant ni la logistique ni la marque pour cela. Deux lignes, et la question « et le marché du loisir, vous n’en parlez pas ? » perd toute sa force : la réponse a été donnée avant d’être posée.',
      piege:
        'Se taire sur les exclusions par peur qu’elles ressemblent à des oublis. C’est l’inverse qui se produit : le silence se lit comme un oubli, l’annonce se lit comme un choix.',
      reflexe:
        'Terminer systématiquement le cadrage par la formule « je laisse volontairement de côté… , parce que… ». C’est une phrase, et elle change la perception de tout ce qui suit.',
      notions: ['perimetre', 'das'],
    },
  ],

  methode: [
    {
      titre: '1. Relever les faits de l’énoncé, sans les interpréter',
      detail:
        'Première lecture, crayon en main : souligner uniquement ce qui est observable — chiffres, dates, lieux, acteurs nommés, décisions déjà prises. On ne cherche pas encore le problème, on constitue la matière. Trente secondes suffisent sur un cas d’examen.',
      aEviter:
        'Commencer à juger dès la première lecture (« ils ont mal géré leurs fournisseurs »). Le jugement précoce fige le périmètre sur une hypothèse non vérifiée.',
    },
    {
      titre: '2. Remonter du symptôme au problème stratégique',
      detail:
        'L’énoncé donne des symptômes ; on cherche la cause structurelle. La technique des « pourquoi » enchaînés y mène : « les ventes baissent » → pourquoi ? → « les clients gardent leur vélo plus longtemps » → pourquoi ? → « les vélos durent et se réparent ». Le problème n’est pas commercial, il est structurel. Formuler ensuite la décision comme une alternative à deux branches, car une décision sans alternative ne se teste pas.',
      aEviter:
        'Répéter l’énoncé en guise de diagnostic : « le problème est que les ventes baissent de 8 % ». Cette phrase ne montre aucune analyse et coûte des points d’entrée.',
    },
    {
      titre: '3. Répondre aux quatre questions du dessin, dans l’ordre',
      detail:
        'Besoin d’abord (avec un verbe, jamais un nom de produit), puis clients (décide / paie / utilise), puis offre (toutes les solutions du même besoin, y compris celles qui ne nous ressemblent pas), puis zone (là où le client peut choisir entre nous et un rival). L’ordre compte : le besoin conditionne les trois autres réponses.',
      aEviter:
        'Commencer par la zone ou par l’offre. On délimite alors autour de ce que l’entreprise fait déjà, et le périmètre devient une description de l’existant au lieu d’un terrain d’analyse.',
    },
    {
      titre: '4. Dater l’analyse et découper en domaines d’activité',
      detail:
        'Fixer un horizon justifié par le cycle d’investissement du secteur, et repérer les échéances datées qui tombent dedans. Puis appliquer le test des trois colonnes — mêmes clients, mêmes concurrents, mêmes facteurs clés de succès ? — pour savoir si l’entreprise a un ou plusieurs domaines d’activité stratégiques, et choisir celui que l’on analyse.',
      aEviter:
        'Découper en DAS selon l’organigramme de l’entreprise. Le découpage se fait par les règles du jeu du marché, pas par les services internes.',
    },
    {
      titre: '5. Écrire le périmètre en une phrase, et l’écrire vraiment',
      detail:
        'Assembler les six réponses selon le patron : « J’analyse [besoin] pour [clients], servi par [offre], sur [zone], à l’horizon [date], au sein du [DAS]. » Puis appliquer les deux tests de calibrage : puis-je nommer trois concurrents précis à l’intérieur ? reste-t-il une dynamique à observer ? Si la réponse au premier est non, élargir a été une erreur ; si la réponse au second est non, on a trop rétréci.',
      aEviter:
        'Garder le périmètre en tête sans le noter. Il dérive alors au fil de l’exposé, et l’on se retrouve à parler du marché européen après avoir annoncé Genève.',
    },
    {
      titre: '6. Annoncer ce que l’on écarte, et pourquoi',
      detail:
        'Une ou deux lignes suffisent : les activités, segments ou zones laissés dehors, chacun avec son motif. C’est ce qui transforme une délimitation subie en un choix assumé, et c’est la partie que presque personne ne dit.',
      aEviter:
        'Exclure sans motiver. « Je ne parle pas du loisir » sonne comme une lacune ; « je laisse de côté le loisir, saisonnier et régi par d’autres facteurs clés de succès » sonne comme une décision.',
    },
    {
      titre: '7. Ouvrir la suite en s’appuyant sur le périmètre',
      detail:
        'Enchaîner explicitement : « à l’intérieur de ce périmètre, voici les facteurs macro-économiques qui pèsent ». La phrase de transition prouve que le cadrage sert à quelque chose et évite que le PESTEL redevienne une liste d’actualités.',
      aEviter:
        'Traiter le cadrage comme une formule d’introduction que l’on récite avant de faire, de toute façon, une analyse générique.',
    },
  ],

  liens: [
    {
      vers: 'pestel',
      nature: 'alimente',
      explication:
        'Le périmètre dit sur quoi porte le PESTEL : sans lui, les six facteurs macro-économiques deviennent une revue de presse valable pour toute l’économie et utile pour personne.',
    },
    {
      vers: 'porter',
      nature: 'alimente',
      explication:
        'Les cinq forces se comptent à l’intérieur du périmètre : c’est lui qui décide qui est un concurrent direct, qui est un substitut et qui est simplement hors sujet.',
    },
    {
      vers: 'parties-prenantes',
      nature: 'prolonge',
      explication:
        'Une fois le terrain délimité, on recense qui y détient un intérêt et un pouvoir — et cette liste servira jusqu’au bout, puisque l’acceptabilité du SAF se juge par rapport à des parties prenantes nommées.',
    },
    {
      vers: 'swot',
      nature: 'alimente',
      explication:
        'Une opportunité n’est une opportunité que pour une entreprise donnée sur un périmètre donné : c’est le périmètre qui rend les quatre cases du SWOT vérifiables au lieu d’opinions.',
    },
    {
      vers: 'ocean-bleu-erac',
      nature: 'soppose',
      explication:
        'Le périmètre borne délibérément le terrain pour rendre l’analyse possible ; l’océan bleu, lui, cherche ensuite à sortir de ce terrain — d’où l’ordre : on cadre pour comprendre, puis on décadre pour innover.',
    },
  ],

  pieges: [
    {
      titre: 'Sortir un outil avant d’avoir cadré',
      explication:
        'Le réflexe le plus fréquent à l’oral : « Alors, PESTEL : Politique, les tensions commerciales ; Économique, l’inflation… » Tout est vrai et rien n’est utilisable, parce que ces facteurs valent pour n’importe quelle entreprise de n’importe quel secteur. 📘 Le cours pose exactement l’inverse : l’analyse de l’environnement commence par la définition du périmètre.',
      reflexe:
        'S’interdire de prononcer le nom d’un outil avant d’avoir dit la phrase de cadrage. Le premier mot de l’exposé est « j’analyse… », pas « PESTEL ».',
    },
    {
      titre: 'Délimiter par le produit au lieu du besoin',
      explication:
        'Écrire « le marché du vélo électrique » ferme l’analyse sur un objet. Les transports publics, le scooter partagé et l’abonnement mobilité disparaissent du champ — or ce sont eux qui prennent le client. C’est la myopie qui a coûté cher aux loueurs de DVD face au streaming.',
      reflexe:
        'Formuler le marché avec un verbe : « se déplacer quotidiennement sans voiture ». Si la formulation contient le nom du produit, elle est trop étroite.',
    },
    {
      titre: 'Traiter une entreprise multi-activités comme un bloc',
      explication:
        'Un seul Porter, un seul SWOT pour une entreprise qui vend et qui répare : le résultat est une moyenne. Or Atelier Léman est faible sur la vente et forte sur le service — la moyenne dit « moyennement positionnée », ce qui est faux dans les deux cas et ne permet aucune décision. 📘 Porter et le SWOT s’appliquent au DAS.',
      reflexe:
        'Test des trois colonnes avant tout diagnostic : mêmes clients, mêmes concurrents, mêmes facteurs clés de succès ? Une seule différence suffit à découper.',
    },
    {
      titre: 'Rétrécir jusqu’à supprimer la dynamique',
      explication:
        'Par peur d’être trop vague, certains écrivent « les vélos électriques haut de gamme vendus à Carouge aux cadres de 35 à 45 ans ». À ce niveau de finesse, il n’y a plus ni concurrent identifiable ni tendance observable : l’analyse n’a plus de matière et la recommandation ne portera sur rien.',
      reflexe:
        'Deux tests opposés, toujours les deux : puis-je nommer trois concurrents précis ? (sinon trop large) et reste-t-il une évolution à analyser ? (sinon trop étroit).',
    },
    {
      titre: 'Confondre le périmètre d’analyse et la décision stratégique',
      explication:
        'Annoncer « mon périmètre, c’est l’abonnement mobilité B2B » revient à décider avant d’avoir analysé : on a choisi la réponse et l’on va chercher les arguments qui l’arrangent. Le périmètre délimite le terrain sur lequel plusieurs options resteront comparables ; il ne désigne pas l’option gagnante.',
      reflexe:
        'Vérifier que les deux branches de l’alternative tiennent à l’intérieur du périmètre annoncé. Si une seule y tient, le cadrage a préempté la décision : élargir.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman SA — cadrer avant de sortir le moindre outil',
    situation:
      'Point de départ, avant toute analyse. On dispose de l’énoncé et de rien d’autre : PME genevoise de 45 salariés, 6,2 M CHF de chiffre d’affaires, fabrication et vente de vélos électriques haut de gamme, réparation toutes marques dans deux ateliers (Carouge et Plainpalais). Ventes en recul de 8 % sur deux ans, batteries achetées à deux fournisseurs asiatiques, arrivée de marques low-cost en ligne, subventions croissantes de la Ville de Genève à la mobilité douce. La direction hésite entre défendre la vente de vélos et basculer vers un abonnement mobilité tout compris pour les entreprises genevoises. Aucun outil n’a encore été sorti — et c’est bien le sujet de cette fiche.',
    deroule: [
      {
        etiquette: 'Problème stratégique (pas le symptôme)',
        contenu:
          'Le modèle de revenus repose sur la vente d’un produit dont la durabilité même ralentit le renouvellement : plus le vélo est bon et bien réparé, moins il se rachète. Le recul de 8 % n’est pas la maladie, c’en est le symptôme.',
      },
      {
        etiquette: 'Marché / besoin',
        contenu:
          'Se déplacer chaque jour dans l’agglomération genevoise sans voiture, sans panne et sans avoir à s’en occuper. Formulé ainsi, le besoin ouvre la porte à l’abonnement — qui répond au même besoin par un autre produit.',
      },
      {
        etiquette: 'Clients',
        contenu:
          'Deux segments. Particuliers aisés (décide = paie = utilise). Entreprises genevoises de 20 à 200 salariés : l’employeur décide et paie, le collaborateur utilise — trois rôles, deux personnes, deux discours à tenir.',
      },
      {
        etiquette: 'Offre / technologies',
        contenu:
          'Vélo électrique vendu 2 600 CHF pour 1 400 CHF de coût (chiffres illustratifs) ; réparation à l’acte ; et, comme solutions du même besoin, l’abonnement Unireso, le scooter partagé, le vélo d’occasion, la location longue durée.',
      },
      {
        etiquette: 'Zone géographique',
        contenu:
          'Deux zones distinctes, et c’est le constat décisif : le service se joue à l’échelle du quartier (rivaux : ateliers de Carouge et Plainpalais), la vente se joue à l’échelle européenne en ligne (rivaux : marques low-cost livrant à Genève).',
      },
      {
        etiquette: 'Horizon de temps',
        contenu:
          'Trois ans, horizon 2029 : c’est la durée de vie utile d’une batterie, donc le cycle sur lequel un abonnement doit s’équilibrer. Deux échéances y tombent : reconduction des subventions municipales, durcissement des règles sur les déchets électroniques.',
      },
      {
        etiquette: 'Domaines d’activité stratégiques',
        contenu:
          'DAS 1 vente — clients particuliers, concurrents marques en ligne, facteurs clés : prix, design, notoriété → position faible. DAS 2 réparation et service — clients tous propriétaires, concurrents ateliers de quartier, facteurs clés : compétence technique, proximité, délai → position forte.',
      },
      {
        etiquette: 'Périmètre retenu, en une phrase',
        contenu:
          '« J’analyse le besoin de mobilité quotidienne sans voiture des entreprises du canton de Genève, servi par des vélos électriques et par des offres d’abonnement, sur le canton de Genève, à l’horizon 2029, au sein du domaine réparation et service — parce que c’est là que l’entreprise détient une compétence rare et que la décision porte sur ce basculement. »',
      },
    ],
    conclusion:
      'Sans avoir sorti un seul outil, le cadrage a déjà produit trois choses : le vrai problème (un modèle de revenus contredit par la durabilité du produit), un constat de position asymétrique (faible sur la vente, forte sur le service) et un terrain d’analyse assez précis pour que le PESTEL retienne les subventions cantonales plutôt que l’inflation mondiale. Reste à annoncer les exclusions — le vélo de loisir, saisonnier et régi par d’autres facteurs clés de succès, et l’exportation, hors de portée logistique — puis à enchaîner sur le diagnostic externe : « à l’intérieur de ce périmètre, voici les facteurs macro-économiques qui pèsent ».',
  },

  phraseOral:
    'Avant d’appliquer le moindre outil, je délimite : j’analyse le besoin de mobilité quotidienne sans voiture des entreprises genevoises, à l’horizon 2029, sur le domaine réparation et service — et non « le marché du vélo », parce que la vente et la réparation n’ont ni les mêmes concurrents ni les mêmes facteurs clés de succès ; je laisse volontairement de côté le vélo de loisir, saisonnier et régi par d’autres règles du jeu.',

  aRetenir: [
    {
      cle: 'La règle du cours 📘',
      valeur:
        '« L’analyse de l’environnement commence par la définition du périmètre de la stratégie. » Le périmètre n’est pas une introduction polie : c’est la première étape du processus.',
    },
    {
      cle: 'Les six réponses',
      valeur:
        'Un besoin · des clients · une offre · une zone · un horizon · un domaine d’activité. Assemblées, elles font une phrase — et cette phrase est le périmètre.',
    },
    {
      cle: 'Délimiter par le besoin',
      valeur:
        '« Le marché suisse des solutions d’hydratation », pas « l’eau en bouteille ». Le produit change, le besoin reste — et c’est le besoin qui révèle les substituts.',
    },
    {
      cle: 'Le bon grain',
      valeur:
        'Trop large : aucun concurrent nommable, l’analyse ne vaut pour personne. Trop étroit : plus aucune dynamique à observer. Les deux tests se posent ensemble.',
    },
    {
      cle: 'DAS 📘',
      valeur:
        'Sous-ensemble homogène d’activités, avec ses propres clients, concurrents et facteurs clés de succès. C’est à ce niveau — pas à celui de l’entreprise — que s’appliquent Porter et le SWOT.',
    },
    {
      cle: 'Facteur clé de succès ou force ?',
      valeur:
        'Test : « cette phrase serait-elle vraie pour un concurrent ? » Oui → facteur clé de succès, donc externe. Non → force ou faiblesse, donc interne.',
    },
    {
      cle: 'Le geste qui distingue 🔎',
      valeur:
        'Annoncer ce que l’on laisse volontairement de côté, avec le motif. Presque personne ne le fait, et cela transforme une délimitation subie en choix assumé.',
    },
  ],

  notions: [
    'perimetre',
    'das',
    'facteurs-cles-succes',
    'strates-environnement',
    'demarche-strategique',
    'parties-prenantes',
    'niveaux-strategiques',
    'diagnostic-externe',
  ],
}
