import type { Modele } from './types'

export const modele: Modele = {
  id: 'saf',
  numero: 8,
  slug: 'saf',
  nom: 'SAF',
  sousTitre: 'Évaluer et choisir une option stratégique',
  famille: 'decision',
  etape: 'e5',
  question:
    'Entre deux ou trois options toutes défendables, laquelle retenir — et comment justifier ce choix autrement que par une préférence personnelle ?',
  enUnePhrase:
    'Le SAF fait passer chaque option par trois filtres qui testent des choses différentes — est-ce la bonne idée (souhaitabilité), l’accepteront-ils (acceptabilité), en sommes-nous capables (faisabilité) — puis il oblige à trancher.',
  produit:
    'Une option retenue et nommée, la raison précise pour laquelle chaque autre option tombe, la faiblesse assumée du choix retenu, et le format de recommandation qui répond à cette faiblesse.',
  quandUtiliser: [
    'Quand le SWOT croisé a produit deux ou trois options et qu’il faut en garder une seule.',
    'Quand la consigne contient un verbe de décision : « recommandez », « proposez », « quelle option retenez-vous ? », « justifiez ».',
    'Quand une idée paraît excellente et qu’on veut vérifier qu’elle est aussi acceptable et réalisable — les deux endroits où les bonnes idées meurent.',
    'Quand un jury demande « pourquoi pas l’autre option ? » : le SAF donne le filtre exact sur lequel l’autre est tombée.',
  ],
  quandNePasUtiliser: [
    'Pour faire le diagnostic : le SAF vient après, il ne fabrique pas d’information, il en consomme.',
    'Pour décrire un business model — c’est le rôle du RCOV ou du BMC, que le SAF utilise ensuite comme preuve de faisabilité.',
    'Sur une seule option isolée : sans comparaison, le SAF se transforme en plaidoyer et valide tout ce qu’on lui présente.',
  ],

  schema: {
    h: 940,
    description:
      'Trois options entrent dans trois filtres indépendants — souhaitabilité, acceptabilité, faisabilité ; une seule option en ressort, sa faiblesse est nommée, cette faiblesse dicte le format de la recommandation, et des KPI rendent la décision vérifiable.',
    noeuds: [
      {
        id: 'options',
        titre: '3 OPTIONS ISSUES DU SWOT CROISÉ',
        lignes: ['Une seule option : pas de choix.'],
        x: 40,
        y: 40,
        l: 920,
        h: 70,
        forme: 'bande',
        point: 'options',
      },
      {
        id: 's',
        titre: 'S — SOUHAITABILITÉ',
        lignes: ['« Dois-je ? »', 'Répond-elle au diagnostic ?', 'Outil du cours : le SWOT.'],
        x: 40,
        y: 170,
        l: 260,
        h: 140,
        point: 'souhaitabilite',
      },
      {
        id: 'a',
        titre: 'A — ACCEPTABILITÉ',
        lignes: [
          '« Acceptent-ils ? »',
          'Retour ? Risque ? Opposition ?',
          'Outil : les parties prenantes.',
        ],
        x: 370,
        y: 170,
        l: 260,
        h: 140,
        point: 'acceptabilite',
      },
      {
        id: 'f',
        titre: 'F — FAISABILITÉ',
        lignes: ['« Puis-je ? »', 'Argent, savoir-faire, légal.', 'Outil du cours : le PESTEL.'],
        x: 700,
        y: 170,
        l: 260,
        h: 140,
        point: 'faisabilite',
      },
      {
        id: 'retenue',
        titre: 'OPTION STRATÉGIQUE RETENUE',
        lignes: [
          'Une seule, nommée, justifiée.',
          'Les autres : on dit pourquoi non.',
          'Le SAF sert à trancher.',
        ],
        x: 290,
        y: 390,
        l: 420,
        h: 140,
        ton: 'accent',
        point: 'option-retenue',
      },
      {
        id: 'faiblesse',
        titre: 'LE POINT FAIBLE DU CHOIX',
        lignes: [
          'Le filtre qui passe le moins bien.',
          'On le nomme, on ne le cache pas.',
          'C’est lui qui dicte le format.',
        ],
        x: 40,
        y: 600,
        l: 420,
        h: 140,
        ton: 'alerte',
        point: 'point-faible',
      },
      {
        id: 'reco',
        titre: 'LA RECOMMANDATION',
        lignes: [
          'Tranchée, assumée, conditionnée.',
          'Quoi, pourquoi, comment, quand.',
          'Le format traite la faiblesse.',
        ],
        x: 540,
        y: 600,
        l: 420,
        h: 140,
        ton: 'positif',
        point: 'recommandation',
      },
      {
        id: 'kpi',
        titre: 'LES KPI',
        lignes: ['Économique, opérationnel, client,', 'environnemental. En absolu.'],
        x: 40,
        y: 790,
        l: 920,
        h: 110,
        point: 'kpi',
      },
    ],
    liens: [
      { de: 'options', vers: 's', depuis: 'bas', arrive: 'haut' },
      { de: 'options', vers: 'a', depuis: 'bas', arrive: 'haut' },
      { de: 'options', vers: 'f', depuis: 'bas', arrive: 'haut' },
      { de: 's', vers: 'retenue', depuis: 'bas', arrive: 'haut' },
      { de: 'a', vers: 'retenue', depuis: 'bas', arrive: 'haut' },
      { de: 'f', vers: 'retenue', depuis: 'bas', arrive: 'haut' },
      { de: 'retenue', vers: 'faiblesse', depuis: 'bas', arrive: 'haut' },
      {
        de: 'faiblesse',
        vers: 'reco',
        depuis: 'droite',
        arrive: 'gauche',
        libelle: 'dicte le format',
      },
      { de: 'reco', vers: 'kpi', depuis: 'bas', arrive: 'haut' },
    ],
    note: 'Les trois filtres échouent pour des raisons différentes — inutile, bloquée, impossible — et chaque échec appelle un remède différent : abandonner, renégocier, ou étaler.',
  },

  points: [
    {
      id: 'options',
      libelle: 'Les options à tester',
      cestQuoi:
        'La matière première du SAF : deux ou trois orientations concurrentes, sorties du croisement des forces, faiblesses, opportunités et menaces. Un « croisement » du SWOT, c’est un couple du type force × opportunité, dont on tire une action.',
      question:
        'Ai-je bien deux ou trois options réellement différentes, formulées chacune en une action, et rattachées chacune à un croisement de mon SWOT ?',
      quoiMettre: [
        'Une option offensive : on s’appuie sur une force pour saisir une opportunité (croisement F × O).',
        'Une option défensive : on corrige une faiblesse ou on protège l’entreprise d’une menace (croisements f × O ou F × M).',
        'L’option « on ne change rien » — elle sert de point de comparaison, et il faut la traiter comme les autres, pas la mépriser.',
        'Pour chacune : un verbe d’action, un périmètre, un horizon. « Se diversifier » n’est pas une option, c’est un souhait.',
        'Le croisement du SWOT dont chaque option est issue, écrit à côté : c’est ce qui rendra la souhaitabilité démontrable au lieu d’être affirmée.',
      ],
      exemple:
        'Atelier Léman sort trois options de son SWOT croisé. A — consolider la vente de vélos (baisser les prix, élargir la gamme). B — lancer un abonnement mobilité en pilote pour des entreprises genevoises, tout en continuant à vendre. C — basculer entièrement vers l’abonnement et arrêter la vente aux particuliers. Les trois sont défendables : c’est exactement pour cela que le SAF est nécessaire.',
      piege:
        'Tester une seule option. Le SAF perd alors tout pouvoir de discrimination : on trouve toujours de bonnes raisons de valider ce qu’on avait déjà décidé.',
      reflexe:
        'Toujours écrire au moins deux options franchement opposées, dont une prudente et une radicale. La bonne réponse est presque toujours entre les deux — et il faut avoir posé les deux pour pouvoir le dire.',
      notions: ['options-strategiques', 'croisements-swot', 'swot'],
    },

    {
      id: 'souhaitabilite',
      libelle: 'S — Souhaitabilité (suitability)',
      cestQuoi:
        '📘 Le premier filtre. Il porte sur « la correspondance entre l’environnement de l’entreprise et ses ressources » et pose une seule question : la stratégie proposée prend-elle en compte les opportunités clés et les menaces auxquelles l’organisation fait face ? Autrement dit : est-ce la bonne idée compte tenu du diagnostic ? 📘 L’outil associé par le cours est le SWOT.',
      question:
        'Cette option exploite-t-elle une opportunité réelle, s’appuie-t-elle sur une force réelle, et répond-elle à la menace que j’ai identifiée comme la plus sérieuse ?',
      quoiMettre: [
        'L’opportunité que l’option exploite, nommée telle qu’elle figure dans le SWOT — pas une opportunité inventée pour l’occasion.',
        'La force sur laquelle elle s’appuie : sans elle, l’option est peut-être bonne pour un concurrent, pas pour cette entreprise.',
        'La menace qu’elle traite, et l’écart entre l’ampleur de la menace et l’ampleur de la réponse.',
        'La cohérence avec la mission et les valeurs affichées : une option rentable qui contredit ce que l’entreprise dit être n’est pas souhaitable.',
        '🔎 Le test le plus court : si l’option ne se rattache à aucun croisement du SWOT, elle n’est pas souhaitable — elle est arbitraire.',
      ],
      exemple:
        'Option A (consolider la vente) : souhaitabilité faible. Elle ne répond pas au déclin de 8 % sur deux ans, qui n’est pas un accident conjoncturel mais l’arrivée de marques low-cost en ligne. Option B (pilote d’abonnement) : souhaitabilité forte — elle exploite l’opportunité « subventions de la Ville à la mobilité douce » et s’appuie sur la force « mécaniciens très qualifiés, deux ateliers », tout en contournant la menace du prix, puisqu’un abonnement ne se compare pas à un prix d’achat.',
      piege:
        'Confondre souhaitabilité et acceptabilité. La souhaitabilité, c’est la pertinence au regard du diagnostic ; l’acceptabilité, c’est l’adhésion des personnes. Une stratégie peut être parfaitement pertinente et refusée par les salariés — et le remède n’est alors pas de refaire l’analyse de marché.',
      reflexe:
        'Devant ce filtre, on ne parle que de faits du diagnostic. Dès qu’un nom de personne ou de groupe apparaît dans la phrase (« les actionnaires », « les employés »), on a glissé sur l’acceptabilité : on remet la remarque dans la bonne case.',
      notions: ['souhaitabilite', 'swot', 'croisements-swot', 'opportunite', 'menace', 'mission'],
    },

    {
      id: 'acceptabilite',
      libelle: 'A — Acceptabilité (acceptability)',
      cestQuoi:
        '📘 Le deuxième filtre. Il porte sur « l’attractivité de la stratégie proposée auprès des parties prenantes, en prenant en compte leurs intérêts et pouvoirs d’influence ». Une partie prenante, c’est tout acteur qui subit la stratégie ou peut la faire échouer. 📘 Le cours pose trois sous-questions et deux outils : analyse des parties prenantes, analyse des risques.',
      question:
        'Qui doit dire oui pour que cela se fasse — et cette personne-là, avec ses intérêts et son pouvoir, dira-t-elle oui ?',
      quoiMettre: [
        '📘 Sous-question 1 — le retour attendu est-il acceptable ? Un gain différé de trois ans n’a pas la même valeur pour un actionnaire et pour un directeur de projet.',
        '📘 Sous-question 2 — le niveau de risque est-il acceptable ? On parle du risque tel qu’il est perçu par celui qui le porte, pas du risque théorique.',
        '📘 Sous-question 3 — les parties prenantes vont-elles s’opposer ? Il faut nommer lesquelles, une par une.',
        'Le placement de chaque partie prenante dans la matrice intérêt × pouvoir : celle qui a fort intérêt et fort pouvoir et qui dit non fait tomber l’option à elle seule.',
        'Pour chaque opposition repérée : le remède — renégocier, phaser dans le temps, compenser, associer au projet, ou former.',
        '🔎 Ce que chacun perd, pas seulement ce qu’il gagne : une stratégie n’est bloquée que par ceux qui y perdent quelque chose.',
      ],
      exemple:
        'Option B chez Atelier Léman, partie prenante par partie prenante. Entreprises clientes genevoises : favorables, la subvention cantonale à la mobilité douce allège la facture, et l’abonnement supprime pour elles la gestion d’un parc. Direction : favorable, elle cherche une sortie au déclin des ventes. Mécaniciens : c’est là que se joue l’acceptabilité — leur métier passe de la réparation ponctuelle, valorisante et variée, à de la maintenance planifiée sur un parc uniforme. Remède : les associer à la définition du contrat de service et former deux d’entre eux au diagnostic batterie. Fournisseurs de batteries : indifférents, mais leur nombre (deux, tous deux asiatiques) devient un risque puisque l’entreprise s’engage désormais sur une disponibilité.',
      piege:
        'Écrire « les parties prenantes accepteront probablement ». C’est une phrase vide : elle ne nomme personne, ne cite aucun intérêt, et ne peut être ni vérifiée ni contredite. Le jury la sanctionne immédiatement.',
      reflexe:
        'S’imposer la forme « [acteur] acceptera / refusera parce que [intérêt précis], donc [remède] », et la répéter pour trois acteurs minimum, dont un qui perd quelque chose. Une acceptabilité où tout le monde est content est une acceptabilité qui n’a pas été faite.',
      notions: [
        'acceptabilite',
        'parties-prenantes',
        'matrice-pouvoir-interet',
        'conflit-interets',
        'tensions-strategiques',
      ],
    },

    {
      id: 'faisabilite',
      libelle: 'F — Faisabilité (feasibility)',
      cestQuoi:
        '📘 Le troisième filtre. Il examine « les contraintes internes et externes potentielles » qui pourraient empêcher la réalisation, à travers trois questions : dispose-t-on des ressources financières ou peut-on les acquérir ? les ressources humaines et les savoir-faire existent-ils ou peuvent-ils être acquis ? y a-t-il des contraintes exogènes, notamment légales ? 📘 L’outil associé par le cours est le PESTEL.',
      question:
        'Avec ce que nous avons aujourd’hui, ou ce que nous pouvons raisonnablement obtenir, sommes-nous capables de le faire — et est-ce autorisé ?',
      quoiMettre: [
        '📘 Financier : le montant à immobiliser, sous quelle forme (trésorerie, crédit, leasing), et pendant combien de temps avant le premier retour.',
        '📘 Humain et savoir-faire : les compétences que l’option suppose, celles qu’on a, celles qu’on doit acquérir — et en combien de mois.',
        '📘 Légal et contraintes exogènes : autorisations, normes, contrats en cours. C’est la contrainte qu’on oublie le plus, et elle est éliminatoire.',
        '🔎 Au-delà des trois dimensions du cours, on peut ajouter le technologique, l’organisationnel et le temporel — mais présente-les comme ton complément, pas comme du cours.',
        'La distinction entre « impossible » et « pas encore » : une option infaisable aujourd’hui peut devenir faisable en partenariat, en pilote, ou étalée sur deux exercices.',
      ],
      exemple:
        'Option B : faisabilité moyenne, et c’est son point faible. Financier — 40 vélos à 1 400 CHF de coût de revient font environ 56 000 CHF immobilisés avant le premier abonnement encaissé, sans compter les batteries de rechange (chiffre illustratif, cohérent avec les données du cas). Humain — les mécaniciens savent réparer, ils ne savent pas encore piloter un parc et planifier une maintenance ; c’est une compétence de gestion, pas de mécanique. Légal — rien n’interdit la location de vélos à des entreprises ; en revanche l’abonnement suppose un contrat de service avec des engagements de délai, donc une exposition juridique nouvelle. Option C (bascule complète) : faisabilité faible, tout le parc à financer d’un coup et un métier entier à réinventer.',
      piege:
        'Réduire la faisabilité au budget. Une option peut être financièrement faisable et opérationnellement impossible faute de compétences ; l’inverse existe aussi — on sait faire, et on n’a pas la trésorerie.',
      reflexe:
        'Répondre dimension par dimension, à voix haute, dans l’ordre argent / savoir-faire / droit. Et citer l’association du cours (faisabilité → PESTEL) avant d’ajouter, comme ta propre lecture 🔎, que les deux premières questions relèvent en pratique du diagnostic interne, puisque le cours parle de contraintes « internes et externes ». Ne corrige jamais le cours : cite-le, puis nuance.',
      notions: [
        'faisabilite',
        'ressources',
        'competences',
        'pestel',
        'facteur-legal',
        'diagnostic-interne',
      ],
    },

    {
      id: 'option-retenue',
      libelle: 'L’option retenue',
      cestQuoi:
        'Le livrable du SAF : une option, une seule, désignée explicitement — et pour chaque option écartée, le filtre exact sur lequel elle est tombée. 📘 Le SAF sert à trancher, pas à décrire.',
      question:
        'Quelle option je retiens, et sur quel filtre précis chacune des autres est-elle tombée ?',
      quoiMettre: [
        'Une phrase de décision au présent : « je retiens l’option B ». Pas de conditionnel, pas de « semble », pas de « pourrait ».',
        'Pour chaque option écartée, la lettre du filtre qui l’a fait tomber : c’est ce qui distingue une élimination raisonnée d’une préférence.',
        'Le rappel du croisement de SWOT qui fonde la souhaitabilité de l’option retenue — c’est l’argument le plus solide dont on dispose.',
        '🔎 Un mot sur la réversibilité : à souhaitabilité comparable, l’option qu’on peut arrêter au bout d’un an vaut mieux que celle qui engage cinq ans.',
      ],
      exemple:
        'Je retiens l’option B. A tombe sur la souhaitabilité : elle ne répond pas au déclin structurel, elle en repousse l’échéance. C tombe sur la faisabilité : le parc entier à financer et un métier à réinventer d’un coup, sans avoir jamais exploité un abonnement. B est la seule à passer les trois filtres, et c’est aussi la seule réversible : si le pilote échoue, l’atelier revend 40 vélos d’occasion et retrouve son modèle de départ.',
      piege:
        'Terminer le SAF sans conclure — dérouler les trois critères pour les trois options, puis dire « les trois ont leurs mérites ». C’est l’erreur la plus coûteuse : tout le travail précédent devient inutile.',
      reflexe:
        'Se donner une règle de temps à l’oral : la phrase « je retiens l’option… » doit être prononcée, même si l’analyse n’est pas complète. Une décision imparfaitement argumentée vaut mieux qu’une analyse parfaite sans décision.',
      notions: ['saf', 'options-strategiques', 'bonne-strategie', 'verbes-consigne'],
    },

    {
      id: 'point-faible',
      libelle: 'Le point faible du choix retenu',
      cestQuoi:
        '🔎 Le filtre que l’option retenue passe le moins bien. Il existe toujours : une option qui passerait les trois filtres haut la main serait déjà mise en œuvre. Le nommer n’affaiblit pas la recommandation — c’est ce qui la rend crédible, et c’est ce qui en détermine le format.',
      question:
        'Lequel des trois filtres mon option retenue passe-t-elle le moins bien, et que faut-il changer dans la mise en œuvre pour que ce point cesse d’être un risque ?',
      quoiMettre: [
        'La lettre du filtre concerné : S, A ou F. Une seule, la plus faible.',
        'La raison précise de cette faiblesse, chiffrée si possible.',
        'La condition de réussite qui en découle : la chose qui, si elle n’est pas obtenue, fait échouer la stratégie.',
        'Le remède, choisi selon le filtre : une faiblesse d’acceptabilité se traite par la négociation et l’association des acteurs ; une faiblesse de faisabilité se traite par le pilote, le partenariat ou l’étalement.',
        'Ce qu’on accepte de sacrifier en choisissant ce remède — croissance plus lente, trésorerie immobilisée, part de marché cédée.',
      ],
      exemple:
        'Le point faible de l’option B est la faisabilité financière : environ 56 000 CHF immobilisés avant le premier encaissement, dans une entreprise dont les ventes reculent de 8 % (chiffre illustratif). La condition de réussite est ailleurs et il faut la nommer aussi : le sourcing des batteries. Avec deux fournisseurs asiatiques seulement, un engagement contractuel de disponibilité expose l’atelier à une rupture qu’il ne maîtrise pas.',
      piege:
        'Cacher la faiblesse pour rendre la recommandation plus convaincante. L’effet est inverse : un jury qui trouve lui-même la faiblesse conclut qu’elle a été manquée, pas dissimulée — et tout le raisonnement devient suspect.',
      reflexe:
        'Dire la faiblesse avant que le jury ne la trouve, et enchaîner immédiatement sur le remède : « son point faible est la faisabilité financière, c’est précisément pourquoi je recommande un pilote et non un déploiement ». La faiblesse devient alors la justification du format.',
      notions: ['saf', 'faisabilite', 'tensions-strategiques', 'resilience'],
    },

    {
      id: 'recommandation',
      libelle: 'La recommandation',
      cestQuoi:
        '🔎 La traduction de la décision en action datée. Trois qualités : tranchée (une décision, pas un éventail), assumée (on nomme ce qu’on sacrifie), conditionnée (on dit à quelle condition elle tient).',
      question:
        'Quoi exactement, pourquoi, sous quelle forme, à quel horizon — et qu’est-ce qui la ferait échouer ?',
      quoiMettre: [
        'QUOI — la décision en une phrase, avec un périmètre chiffré : combien, pour qui, pendant combien de temps.',
        'POURQUOI — rattaché au SAF et au croisement de SWOT, jamais à une intuition.',
        'COMMENT — le format qui traite la faiblesse identifiée : pilote, partenariat, phasage, acquisition de compétence.',
        'QUAND — un horizon et au moins un jalon intermédiaire, sinon la décision n’est jamais évaluée.',
        'CE QU’ON SACRIFIE — croissance plus lente, trésorerie bloquée, clients historiques moins servis.',
        'LA CONDITION DE RÉUSSITE — le point unique sans lequel rien ne tient.',
      ],
      exemple:
        'Je recommande de lancer l’abonnement mobilité en pilote — 6 entreprises genevoises, 40 vélos, 12 mois — tout en maintenant la vente aux particuliers pendant cette période. Ce que nous acceptons de sacrifier : une part de trésorerie immobilisée et une croissance plus lente qu’avec un déploiement complet. Ce que cela nous permet : apprendre le métier d’opérateur de mobilité avec un risque borné et une sortie possible. La condition de réussite est le sourcing des batteries : sans un second fournisseur hors Asie, l’engagement de disponibilité est intenable.',
      piege:
        'Recommander sans condition de réussite — « il n’y a qu’à le faire ». Une recommandation sans condition n’est pas courageuse, elle est naïve : elle ne dit pas ce qu’il faut surveiller.',
      reflexe:
        'Vérifier que la recommandation contient le mot « parce que » (le lien au SAF), le mot « si » ou « à condition que » (la condition), et un chiffre (le périmètre). Si l’un des trois manque, la phrase n’est pas une recommandation.',
      notions: ['plan-action', 'buts-objectifs', 'bonne-strategie', 'economie-fonctionnalite'],
    },

    {
      id: 'kpi',
      libelle: 'Les KPI',
      cestQuoi:
        'Les indicateurs qui permettront de savoir, dans douze mois, si la décision était bonne. 🔎 Un KPI transforme une recommandation en hypothèse testable : sans lui, on saura seulement si l’entreprise va bien, ce qui n’est pas la même chose que savoir si la stratégie a marché.',
      question:
        'Quel chiffre, mesuré quand et comparé à quelle cible, me dira que mon pari était juste — ou faux assez tôt pour corriger ?',
      quoiMettre: [
        'Un KPI économique : le modèle est-il rentable ? Marge par unité et par an, part du chiffre d’affaires récurrent.',
        'Un KPI opérationnel : tenons-nous la promesse ? Délai d’intervention, nombre d’interventions par unité et par an.',
        'Un KPI client ou social : la valeur est-elle perçue, et l’équipe suit-elle ? Taux de renouvellement, rotation du personnel.',
        'Un KPI environnemental si l’argument durable est mobilisé : durée de vie moyenne, taux de réemploi.',
        'Pour chacun : une cible et une échéance. « Améliorer la satisfaction » n’est pas un KPI ; « 70 % de renouvellement à 12 mois » en est un.',
        '📘 Sur toute question d’impact, exiger la valeur absolue : un impact par unité peut baisser pendant que le total augmente — c’est l’effet rebond.',
      ],
      exemple:
        'Pour le pilote d’Atelier Léman : taux de renouvellement d’abonnement à 12 mois — c’est le pari même du modèle, la récurrence ; marge par vélo et par an — vérifie que l’abonnement couvre la main-d’œuvre récurrente ; nombre d’interventions par vélo et par an — la variable qui peut tuer la rentabilité sans qu’on la voie venir ; délai moyen d’intervention — c’est la promesse elle-même ; part du chiffre d’affaires récurrent dans le total — mesure la transformation du modèle.',
      piege:
        'Ne donner que des KPI financiers, ou donner un KPI d’impact par unité. Le premier laisse passer l’échec opérationnel et social ; le second peut s’améliorer de 20 % pendant que l’impact total augmente de 30 %, parce que les volumes ont explosé.',
      reflexe:
        'Trois à cinq KPI, jamais plus, et au moins un non financier. Puis un test : « si ce chiffre bouge dans le mauvais sens, qu’est-ce que je change ? » Si la réponse est « rien », le KPI ne sert pas au pilotage.',
      notions: ['kpi', 'controle', 'effet-rebond', 'greenwashing'],
    },
  ],

  methode: [
    {
      titre: '1. Aligner les options sur une même ligne',
      detail:
        'Écrire deux ou trois options, chacune en un verbe d’action avec un périmètre, et noter à côté le croisement du SWOT dont elle sort. Sur brouillon, un tableau : options en colonnes, S / A / F en lignes.',
      aEviter:
        'Comparer une option précise à une option vague : la vague gagne toujours, parce qu’aucun de ses défauts n’est visible.',
    },
    {
      titre: '2. Passer la souhaitabilité, pour toutes les options d’un coup',
      detail:
        'Ligne S du tableau. Pour chaque option, une seule question : quelle opportunité exploite-t-elle, quelle menace traite-t-elle, sur quelle force s’appuie-t-elle ? Une option qui échoue ici est abandonnée, pas retravaillée.',
      aEviter:
        'Commencer par la faisabilité. C’est confortable et stérilisant : on ne proposerait jamais que ce qu’on sait déjà faire, et l’entreprise ne se transformerait jamais.',
    },
    {
      titre: '3. Passer l’acceptabilité, partie prenante par partie prenante',
      detail:
        'Ligne A. Lister trois ou quatre acteurs, les placer mentalement dans la matrice intérêt × pouvoir, et pour chacun répondre aux trois sous-questions du cours : le retour est-il acceptable, le risque est-il acceptable, vont-ils s’opposer ? Une option qui échoue ici n’est pas morte : elle se renégocie, se phase, se compense.',
      aEviter:
        'Répondre globalement (« les parties prenantes accepteront »). L’acceptabilité n’a de sens que par acteur, parce que les intérêts divergent — c’est tout l’intérêt du critère.',
    },
    {
      titre: '4. Passer la faisabilité, dimension par dimension',
      detail:
        'Ligne F. Trois cases minimum : argent, savoir-faire, droit. Chiffrer l’argent même approximativement, nommer la compétence manquante, chercher activement la contrainte légale. Une option qui échoue ici se traite par le partenariat, le pilote ou l’étalement.',
      aEviter:
        'Écrire « faisable » sans rien derrière. Faisable ne veut pas dire « on y arriverait en se donnant du mal » : cela veut dire avec les ressources dont on dispose ou celles qu’on peut raisonnablement obtenir.',
    },
    {
      titre: '5. Trancher, et dire pourquoi les autres tombent',
      detail:
        'Lire le tableau en colonnes. Retenir l’option qui passe les trois filtres, et pour chacune des autres nommer la lettre du filtre qui l’élimine. À souhaitabilité comparable, préférer l’option la plus réversible.',
      aEviter:
        'Conclure par « les trois options ont leurs mérites ». Le SAF sert à trancher : sans décision, il n’a rien produit.',
    },
    {
      titre: '6. Nommer la faiblesse du choix, et en déduire le format',
      detail:
        'Repérer le filtre que l’option retenue passe le moins bien, l’annoncer, puis choisir le format de mise en œuvre qui répond exactement à cette faiblesse : pilote pour une faiblesse financière, association et formation pour une faiblesse d’acceptabilité, partenariat pour une compétence manquante.',
      aEviter:
        'Choisir un pilote « par prudence ». Le format doit être la réponse à un diagnostic, sinon c’est une conclusion timide et le jury l’entend comme telle.',
    },
    {
      titre: '7. Poser trois à cinq KPI, dont un non financier',
      detail:
        'Un par famille : économique, opérationnel, client ou social, et environnemental si l’argument durable a été mobilisé. Chacun avec une cible et une échéance. Sur tout indicateur d’impact, donner la valeur absolue en plus de la valeur par unité.',
      aEviter:
        'Empiler dix indicateurs. Au-delà de cinq, plus personne ne les regarde, et le tableau de bord remplace le pilotage.',
    },
  ],

  liens: [
    {
      vers: 'swot',
      nature: 'prolonge',
      explication:
        'Le SWOT croisé fabrique les options, le SAF les trie : si une option ne se rattache à aucun croisement du SWOT, elle tombe d’emblée sur la souhaitabilité, et c’est le cours lui-même qui associe la souhaitabilité au SWOT.',
    },
    {
      vers: 'parties-prenantes',
      nature: 'partage',
      explication:
        'L’acceptabilité, c’est la matrice intérêt × pouvoir rejouée sur une option précise : une partie prenante à fort pouvoir et fort intérêt qui dit non fait tomber une stratégie par ailleurs excellente.',
    },
    {
      vers: 'ressources-competences',
      nature: 'partage',
      explication:
        'La faisabilité relit l’inventaire des ressources et des compétences : ce qu’on n’a pas et qu’on ne peut pas acquérir en temps utile borne les options possibles, et une compétence à acquérir est une option en soi.',
    },
    {
      vers: 'pestel',
      nature: 'partage',
      explication:
        'Le cours associe explicitement la faisabilité au PESTEL, parce que la contrainte externe — surtout légale — est celle qu’on oublie le plus, et qu’elle suffit à rendre une option impossible quels que soient les moyens.',
    },
    {
      vers: 'bmc',
      nature: 'precise',
      explication:
        'Le business model transforme la faisabilité en points identifiés : sans lui, « nous saurons faire » reste une impression ; avec lui, on voit quelle ressource clé manque et quel poste de coût explose.',
    },
  ],

  pieges: [
    {
      titre: 'Faire un SAF sans conclure',
      explication:
        'Dérouler les trois critères pour chaque option, puis s’arrêter. Le jury attend une décision : sans elle, le travail d’analyse ne vaut rien, parce que le SAF sert précisément à trancher.',
      reflexe:
        'S’imposer la phrase « je retiens l’option X, et voici sur quel filtre chacune des autres tombe » comme dernière phrase obligatoire de la séquence.',
    },
    {
      titre: 'Traiter les trois critères comme trois façons de dire « c’est bien »',
      explication:
        'Les trois filtres testent des choses différentes et échouent pour des raisons différentes : une option peut être inutile (S), bloquée (A) ou impossible (F). Confondre les trois, c’est perdre le seul apport de l’outil — savoir pourquoi une option échoue, donc si elle est rattrapable.',
      reflexe:
        'Le cas d’école : une usine s’automatise, c’est économiquement pertinent et techniquement faisable, mais 500 postes disparaissent et les syndicats s’y opposent. Le blocage est l’acceptabilité — refaire le calcul de rentabilité ne servira à rien.',
    },
    {
      titre: 'Réduire la faisabilité à l’argent',
      explication:
        '📘 Le cours cite trois dimensions : financière, humaine et savoir-faire, légale. Une entreprise peut avoir le budget et pas la compétence, ou la compétence et pas la trésorerie ; et une contrainte légale rend une option impossible quel que soit le budget.',
      reflexe:
        'Répondre à voix haute dans l’ordre argent, savoir-faire, droit, en une phrase chacun. Trois phrases, et le critère est traité.',
    },
    {
      titre: 'Dire « les parties prenantes accepteront »',
      explication:
        'La phrase ne nomme personne et ne peut être ni vérifiée ni contredite. Or l’acceptabilité est le critère le plus souvent fatal aux stratégies durables : elles sont souhaitables et faisables, et elles échouent parce qu’un acteur y voit un coût immédiat pour un bénéfice différé.',
      reflexe:
        'Nommer trois acteurs, dont au moins un qui perd quelque chose, et donner pour chacun l’intérêt en jeu puis le remède.',
    },
    {
      titre: 'Cacher la faiblesse du choix, ou finir sans KPI',
      explication:
        'Une option retenue a toujours un point faible ; le taire fait passer l’analyse pour incomplète dès que le jury le trouve. Et une recommandation sans indicateur reste invérifiable : on ne saura jamais si la décision était bonne.',
      reflexe:
        'Deux phrases de clôture, toujours les mêmes : « son point faible est [filtre], c’est pourquoi je recommande [format] » puis « je saurai dans douze mois si j’avais raison en regardant [KPI] ».',
    },
  ],

  exemple: {
    titre: 'Atelier Léman SA — choisir entre défendre la vente et basculer vers l’abonnement',
    situation:
      'Le diagnostic est fait. À l’externe, le PESTEL a repéré les subventions de la Ville de Genève à la mobilité douce et les marques low-cost en ligne ; Porter a montré une rivalité qui se joue désormais sur le prix. À l’interne, les forces sont les mécaniciens qualifiés et la marque locale, les faiblesses la dépendance à deux fournisseurs de batteries asiatiques et le recul de 8 % des ventes sur deux ans. Le SWOT croisé a produit trois options. Il faut maintenant en retenir une et la défendre.',
    deroule: [
      {
        etiquette: 'Les options',
        contenu:
          'A — consolider la vente de vélos. B — lancer un abonnement mobilité en pilote pour des entreprises genevoises, en continuant de vendre. C — basculer entièrement vers l’abonnement et arrêter la vente aux particuliers.',
      },
      {
        etiquette: 'S — Souhaitabilité',
        contenu:
          'A : faible, elle ne répond pas au déclin structurel, elle le repousse. B : forte, elle exploite le croisement « force atelier × opportunité subventions » et contourne la guerre des prix, puisqu’un abonnement ne se compare pas à un prix d’achat. C : forte également.',
      },
      {
        etiquette: 'A — Acceptabilité',
        contenu:
          'A : facile en interne mais démobilisante, on demande aux équipes de défendre un terrain qui se rétrécit. B : bonne — entreprises clientes favorables grâce à la subvention, direction favorable ; les mécaniciens sont le point à traiter, leur métier passe de la réparation ponctuelle à la maintenance planifiée. C : moyenne, elle abandonne les clients particuliers historiques qui font la réputation de la marque.',
      },
      {
        etiquette: 'F — Faisabilité',
        contenu:
          'A : élevée, rien de nouveau à apprendre. B : moyenne — environ 56 000 CHF de trésorerie immobilisée pour 40 vélos à 1 400 CHF de coût, et une compétence de gestion de parc à acquérir (chiffres illustratifs). C : faible — parc entier à financer, métier d’opérateur à réinventer d’un coup.',
      },
      {
        etiquette: 'Le verdict',
        contenu:
          'Je retiens B. A tombe sur la souhaitabilité, C sur la faisabilité. B est la seule à passer les trois filtres, et la seule réversible : si le pilote échoue, l’atelier revend 40 vélos d’occasion.',
      },
      {
        etiquette: 'Le point faible',
        contenu:
          'La faisabilité financière, et une condition de réussite hors bilan : le sourcing des batteries. Avec deux fournisseurs asiatiques, un engagement contractuel de disponibilité expose l’atelier à une rupture qu’il ne maîtrise pas.',
      },
      {
        etiquette: 'La recommandation',
        contenu:
          'Un pilote de 40 vélos chez 6 entreprises genevoises sur 12 mois, la vente aux particuliers maintenue pendant cette période, deux mécaniciens formés au diagnostic batterie et associés à la définition du contrat de service, et la recherche d’un second fournisseur de batteries hors Asie lancée en parallèle.',
      },
      {
        etiquette: 'Les KPI',
        contenu:
          'Taux de renouvellement d’abonnement à 12 mois (le pari du modèle) ; marge par vélo et par an ; nombre d’interventions par vélo et par an ; délai moyen d’intervention ; part du chiffre d’affaires récurrent dans le total.',
      },
    ],
    conclusion:
      'Le SAF n’a pas seulement désigné l’option B : il a dit pourquoi les deux autres tombent, il a localisé la fragilité de B dans la faisabilité, et c’est cette localisation qui a produit le format « pilote » plutôt qu’un déploiement. La suite du travail est le business model de l’abonnement, qui transformera l’estimation de trésorerie en équation de profit vérifiable.',
  },

  phraseOral:
    'Je retiens l’option B parce qu’elle est la seule à passer les trois filtres — souhaitable puisqu’elle exploite le croisement force-atelier × opportunité-subvention de mon SWOT, acceptable à condition d’associer les mécaniciens dont le métier change — et je recommande un pilote de 40 vélos précisément parce que le filtre qu’elle passe le moins bien est la faisabilité financière : le format de ma recommandation est la réponse à la faiblesse que mon SAF a identifiée.',

  aRetenir: [
    {
      cle: 'Pourquoi le SAF existe 📘',
      valeur:
        'Tester la stratégie avant sa mise en œuvre. Une évaluation après cinq ans est plus facile, parce que les résultats sont mesurables — mais il est bien tard pour corriger.',
    },
    {
      cle: 'Le mémo des trois filtres',
      valeur: 'S = dois-je ? · A = acceptent-ils ? · F = puis-je ?',
    },
    {
      cle: 'Les outils associés 📘',
      valeur:
        'Souhaitabilité → le SWOT. Acceptabilité → analyse des parties prenantes et analyse des risques. Faisabilité → le PESTEL. Restitue ces associations telles que le cours les pose.',
    },
    {
      cle: 'Les trois sous-questions de l’acceptabilité 📘',
      valeur:
        'Le retour attendu est-il acceptable ? Le niveau de risque est-il acceptable ? Les parties prenantes vont-elles s’opposer ?',
    },
    {
      cle: 'Les trois questions de la faisabilité 📘',
      valeur:
        'A-t-on les ressources financières ou peut-on les acquérir ? Les ressources humaines et les savoir-faire existent-ils ? Y a-t-il des contraintes exogènes, notamment légales ?',
    },
    {
      cle: 'Trois échecs, trois remèdes 🔎',
      valeur:
        'Inutile → on abandonne. Bloquée → on renégocie, on phase, on compense. Impossible → partenariat, pilote, étalement.',
    },
    {
      cle: 'L’ordre compte 🔎',
      valeur:
        'S puis A puis F. Commencer par la faisabilité est confortable et stérilisant : on ne propose jamais que ce qu’on sait déjà faire.',
    },
    {
      cle: 'La recommandation',
      valeur:
        'Tranchée (une décision, pas un éventail), assumée (on nomme ce qu’on sacrifie), conditionnée (on dit à quelle condition elle tient).',
    },
    {
      cle: 'Le mécanisme à montrer',
      valeur:
        'Le format de la recommandation découle de la faiblesse identifiée par le SAF. Ce n’est pas une prudence de principe, c’est une réponse à un diagnostic.',
    },
    {
      cle: 'La règle d’or des KPI d’impact 📘',
      valeur:
        'En valeur absolue, jamais seulement par unité : un impact unitaire peut baisser de 20 % pendant que le total augmente de 30 %.',
    },
    {
      cle: 'Le complément à ne pas transformer en correction 🔎',
      valeur:
        'Le cours associe la faisabilité au PESTEL tout en la définissant par des contraintes « internes et externes ». Cite l’association du cours, puis ajoute que les deux premières questions relèvent en pratique du diagnostic interne.',
    },
  ],

  notions: [
    'saf',
    'souhaitabilite',
    'acceptabilite',
    'faisabilite',
    'options-strategiques',
    'swot',
    'croisements-swot',
    'parties-prenantes',
    'matrice-pouvoir-interet',
    'ressources',
    'competences',
    'pestel',
    'facteur-legal',
    'kpi',
    'controle',
    'tensions-strategiques',
    'bonne-strategie',
  ],
}
