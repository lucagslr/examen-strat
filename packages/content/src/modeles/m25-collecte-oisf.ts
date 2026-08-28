import type { Modele } from './types'

export const modele: Modele = {
  id: 'collecte-oisf',
  numero: 25,
  slug: 'collecte-donnees',
  nom: 'Collecte de données',
  sousTitre: 'Les 4 méthodes vues en cours',
  famille: 'numerique',
  etape: 'transverse',

  question:
    'Sur quoi appuie-t-on une décision qui engage des clients — sur ce que la direction croit savoir d’eux, ou sur ce qu’on est allé vérifier auprès d’eux ?',

  enUnePhrase:
    'La collecte de données utilisateurs regroupe quatre façons d’aller chercher la matière première d’une décision — l’observation regarde ce que les gens font, l’interview cherche pourquoi ils le font, le sondage mesure combien ils sont à le faire, le focus group fait sortir ce qui se discute — et aucune des quatre ne vaut seule : c’est leur croisement qui produit un fait solide.',

  produit:
    'Un besoin d’utilisateur formulé en une phrase vérifiable, avec la trace de ce qui l’a établi (ce qu’on a vu, ce qu’on a entendu, ce qu’on a compté) — matière directement utilisable pour définir un segment, une proposition de valeur, ou corriger un parcours qui exclut.',

  quandUtiliser: [
    'Avant de lancer un service, une offre ou un canal numérique : c’est le moment où une heure d’observation coûte mille fois moins cher qu’un an de correction.',
    'Quand une question d’examen demande « comment l’entreprise aurait-elle pu éviter… ? » — c’est presque toujours la réponse attendue : elle n’a interrogé personne.',
    'Quand un cas oppose ce que dit la direction et ce que font réellement les clients : la collecte est l’outil qui tranche l’écart.',
    'Quand il faut fonder un segment de clientèle ou une proposition de valeur dans le BMC : sans donnée utilisateur, ces deux blocs ne sont que des hypothèses déguisées en certitudes.',
    'Quand on cherche un besoin latent — un besoin réel que personne n’a formulé : c’est la matière première de toute innovation de valeur.',
  ],

  quandNePasUtiliser: [
    '⚠️ Comme contenu de cours sourcé : ce thème n’apparaît dans aucun support de slides du cours. Il est reconstruit à partir des consignes de méthode (approche de type design thinking, standard à la HEG). Méthodologiquement fiable, mais à ne jamais annoncer par « comme vu dans le cours, slide… ».',
    'Pour analyser la concurrence ou le macro-environnement : demander à ses clients ce que fait un concurrent donne une rumeur, pas un diagnostic. Ce travail-là revient au PESTEL et à Porter.',
    'Pour faire valider une décision déjà prise : une collecte lancée après l’arbitrage ne sert qu’à fabriquer une justification, et se voit immédiatement dans la façon dont les questions sont écrites.',
    'Pour demander aux utilisateurs la solution : ils décrivent un problème, ils ne conçoivent pas l’offre. Confondre les deux produit des demandes de « moins cher, plus rapide » qui n’apprennent rien.',
  ],

  schema: {
    h: 1120,
    description:
      'Un objectif de collecte se répartit entre quatre méthodes — observation, interview, sondage, focus group — qui convergent vers une triangulation ; deux garde-fous, les règles de la question et les règles de la collecte, encadrent la descente vers le livrable, un besoin traduit en décision.',
    noeuds: [
      {
        id: 'objectif',
        titre: 'L’OBJECTIF DE LA COLLECTE',
        lignes: ['comprendre qui — pour décider quoi'],
        x: 40,
        y: 40,
        l: 920,
        h: 90,
        forme: 'bande',
        ton: 'accent',
        point: 'objectif',
      },
      {
        id: 'o',
        titre: 'O — OBSERVATION',
        lignes: ['qualitatif', 'voir ce que les gens FONT', 'sans intervenir'],
        x: 40,
        y: 190,
        l: 185,
        h: 180,
        point: 'observation',
      },
      {
        id: 'i',
        titre: 'I — INTERVIEW',
        lignes: ['qualitatif', 'comprendre le POURQUOI', 'et les émotions'],
        x: 285,
        y: 190,
        l: 185,
        h: 180,
        point: 'interview',
      },
      {
        id: 's',
        titre: 'S — SONDAGE',
        lignes: ['quantitatif', 'mesurer à grande échelle', 'et généraliser'],
        x: 530,
        y: 190,
        l: 185,
        h: 180,
        point: 'sondage',
      },
      {
        id: 'f',
        titre: 'F — FOCUS GROUP',
        lignes: ['qualitatif', 'faire émerger et confronter', 'des idées — 6 à 12 personnes'],
        x: 775,
        y: 190,
        l: 185,
        h: 180,
        point: 'focus-group',
      },
      {
        id: 'tri',
        titre: 'TRIANGULATION',
        lignes: ['croiser au moins deux méthodes', 'observer → interviewer → sonder'],
        x: 285,
        y: 470,
        l: 430,
        h: 150,
        ton: 'accent',
        point: 'triangulation',
      },
      {
        id: 'questions',
        titre: 'LES RÈGLES DE LA QUESTION',
        lignes: ['interview : ouvertes, neutres,', 'passé, 5 pourquoi', 'sondage : fermées, équilibrées'],
        x: 40,
        y: 720,
        l: 420,
        h: 170,
        ton: 'alerte',
        point: 'questions',
      },
      {
        id: 'ethique',
        titre: 'COLLECTER SANS ABUSER',
        lignes: ['but annoncé, transparence,', 'minimisation, compréhension,', 'données correctes'],
        x: 540,
        y: 720,
        l: 420,
        h: 170,
        ton: 'alerte',
        point: 'ethique',
      },
      {
        id: 'livrable',
        titre: 'LE BESOIN TRADUIT EN DÉCISION',
        lignes: ['segment · offre · correction'],
        x: 40,
        y: 990,
        l: 920,
        h: 90,
        forme: 'bande',
        ton: 'positif',
        point: 'livrable',
      },
    ],
    liens: [
      { de: 'objectif', vers: 'o', depuis: 'bas', arrive: 'haut' },
      { de: 'objectif', vers: 'i', depuis: 'bas', arrive: 'haut' },
      { de: 'objectif', vers: 's', depuis: 'bas', arrive: 'haut' },
      { de: 'objectif', vers: 'f', depuis: 'bas', arrive: 'haut' },
      { de: 'o', vers: 'tri', depuis: 'bas', arrive: 'haut', libelle: 'ce qu’on fait' },
      { de: 'i', vers: 'tri', depuis: 'bas', arrive: 'haut', libelle: 'pourquoi' },
      { de: 's', vers: 'tri', depuis: 'bas', arrive: 'haut', libelle: 'combien' },
      { de: 'f', vers: 'tri', depuis: 'bas', arrive: 'haut', libelle: 'ce qui se discute' },
      { de: 'tri', vers: 'livrable', depuis: 'bas', arrive: 'haut', ton: 'accent' },
      {
        de: 'questions',
        vers: 'livrable',
        depuis: 'bas',
        arrive: 'haut',
        trait: 'pointille',
        libelle: 'sinon la donnée est fausse',
        ton: 'alerte',
      },
      {
        de: 'ethique',
        vers: 'livrable',
        depuis: 'bas',
        arrive: 'haut',
        trait: 'pointille',
        libelle: 'sinon elle est illégitime',
        ton: 'alerte',
      },
    ],
    note: 'Les gens ne font pas ce qu’ils disent. C’est pour cette seule raison qu’il faut quatre méthodes et non une : observer dit quoi, interviewer dit pourquoi, sonder dit combien, le focus group dit ce qui fait débat.',
  },

  points: [
    {
      id: 'objectif',
      libelle: 'L’objectif de la collecte',
      cestQuoi:
        'La case d’entrée, et la seule qui ne parle pas de méthode. Avant de choisir entre observer, interroger, sonder ou réunir, on fixe deux choses : QUI l’on veut comprendre — un utilisateur, un public cible, une partie prenante — et QUELLE décision la donnée récoltée devra permettre de prendre. 🔎 Une collecte sans décision au bout n’est pas de la recherche, c’est de la curiosité facturée.',
      question:
        'Qui veut-on comprendre, et quelle décision précise cette donnée doit-elle rendre possible ?',
      quoiMettre: [
        'La personne visée, nommée sans euphémisme : pas « nos clients », mais « le responsable de flotte d’une PME de 20 à 80 salariés » ou « le client de plus de 65 ans qui vient sans rendez-vous ».',
        'La décision suspendue à la réponse, écrite au futur : « selon ce que nous trouverons, nous lancerons l’abonnement ou nous ne le lancerons pas ».',
        'L’hypothèse qu’on a en tête — parce qu’on en a toujours une — pour pouvoir la reconnaître si les données la contredisent.',
        'Ce qui rendrait l’hypothèse fausse, décidé à l’avance : c’est le seul garde-fou contre la collecte qui confirme ce qu’on croyait déjà.',
        'La date à laquelle la décision doit être prise : elle commande le choix de la méthode bien plus que le budget.',
      ],
      exemple:
        'Atelier Léman ne se demande pas « que pensent les Genevois du vélo électrique ? » — question qui n’engage rien. Elle se demande : « le responsable de flotte d’une PME genevoise de 20 à 80 salariés serait-il prêt à confier la mobilité de ses collaborateurs à un prestataire externe, et à quelles conditions ? » Décision suspendue : lancer ou non le pilote de 40 vélos chez 6 entreprises. Hypothèse de la direction : « ils veulent surtout économiser des places de parking ». Ce qui la rendrait fausse : si l’économie de parking n’apparaît jamais spontanément dans les entretiens.',
      piege:
        'Partir de la méthode plutôt que de la question — « faisons un sondage » — parce qu’un sondage est ce qui ressemble le plus à du sérieux. On obtient alors des pourcentages sur une question qui n’intéressait personne.',
      reflexe:
        'Écris la décision avant la première question. Si tu n’arrives pas à formuler ce que la donnée va changer, tu n’as pas encore d’objectif de collecte.',
      notions: ['collecte-donnees-utilisateurs', 'parties-prenantes'],
    },
    {
      id: 'observation',
      libelle: 'O — Observation (sans interaction)',
      cestQuoi:
        '🔎 Regarder des gens réels utiliser un service réel, sans intervenir, précisément pour ne pas modifier leur comportement. C’est la seule des quatre méthodes qui n’interroge personne : elle enregistre des faits, pas des déclarations. Donnée qualitative — un comportement observé, pas un chiffre.',
      question:
        'Que font réellement les gens — et en quoi cela diffère-t-il du parcours que nous avions prévu pour eux ?',
      quoiMettre: [
        'Les comportements effectifs, décrits au verbe d’action : il ouvre l’application, il attend, il la ferme, il téléphone.',
        'Les contournements — en anglais workarounds, littéralement « les chemins de traverse » : le papier collé sur l’écran, la double saisie, l’appel au collègue qui sait faire.',
        'Le langage corporel et les émotions visibles : hésitation, soupir, retour en arrière, abandon. Une frustration se voit avant de se dire.',
        'L’écart entre le parcours prévu et le parcours réel — c’est le livrable principal de l’observation, et souvent la découverte la plus rentable de toute la collecte.',
        'Le temps : combien de secondes à chaque étape, où ça bloque. Un chronomètre transforme une impression en fait.',
      ],
      exemple:
        'Un matin à l’atelier de Plainpalais, sans rien dire à personne : trois clients sur sept repartent avec leur vélo faute d’avoir compris qu’il fallait un rendez-vous. Deux autres tendent leur téléphone au mécanicien pour qu’il remplisse le formulaire à leur place. Aucun de ces cinq clients ne se plaindra jamais : ils rationaliseront en disant « c’était pratique ». L’observation, elle, a vu le contournement.',
      piege:
        'Intervenir. Dès qu’on demande « vous cherchez quelque chose ? », la personne se met en représentation et le comportement observé n’est plus le comportement réel.',
      reflexe:
        'Note tes questions au lieu de les poser, et garde-les pour l’interview qui suivra. L’observation trouve le QUOI ; elle ne saura jamais le POURQUOI, et c’est très bien ainsi.',
      notions: ['observation', 'besoin-latent', 'utilisabilite'],
    },
    {
      id: 'interview',
      libelle: 'I — Interview (entretien individuel)',
      cestQuoi:
        '🔎 Un entretien en tête-à-tête destiné à remonter des comportements vers leurs causes : motivations, contraintes, émotions, renoncements. Donnée qualitative, en profondeur. C’est la méthode qui donne accès à ce qu’aucun chiffre ne montre — et celle qui se rate le plus facilement, parce que mal questionner produit des réponses fausses sans que personne ne s’en aperçoive.',
      question:
        'Pourquoi cette personne a-t-elle fait ce qu’elle a fait — et qu’a-t-elle ressenti à ce moment-là ?',
      quoiMettre: [
        'Des questions ouvertes, qui appellent un récit : « racontez-moi la dernière fois où… ». Une question fermée dans une interview gaspille l’entretien.',
        'Des questions sur le passé et le présent : « qu’avez-vous fait ? », jamais « feriez-vous ? ». 📚 Une intention déclarée sur le futur n’a presque aucune valeur prédictive, parce que la personne décrit la version d’elle-même qu’elle aimerait être.',
        'La technique des 5 pourquoi : relancer « pourquoi ? » cinq fois de suite pour passer du symptôme à la cause racine. La première réponse est presque toujours une justification.',
        'Les émotions, demandées explicitement : « qu’avez-vous ressenti ? ». C’est là que se logent les besoins latents.',
        'Du silence. 🔎 Laisser passer trois secondes après une réponse fait souvent venir la vraie réponse — celle que la personne n’avait pas prévu de donner.',
        'Un échantillon petit mais varié : six à dix entretiens suffisent à faire apparaître les motifs récurrents ; ils ne permettront jamais de dire « 62 % des clients ».',
      ],
      exemple:
        'Huit responsables de flotte interrogés par Atelier Léman. Question de départ : « racontez-moi comment vos collaborateurs se déplacent entre deux rendez-vous en ville ». Réponse initiale : « on leur rembourse les transports ». Pourquoi ? « parce que les voitures de service coûtent cher ». Pourquoi ? « le parking surtout ». Pourquoi ? « on paie 320 francs par place et par mois à Carouge ». Pourquoi n’avoir pas déjà acheté des vélos ? « parce que personne chez nous ne veut gérer les pannes ». Cinq pourquoi, et le besoin réel apparaît : ce n’est pas le vélo, c’est l’absence de gestion des pannes. Chiffres illustratifs.',
      piege:
        'Poser des questions orientées — « ne trouvez-vous pas qu’un abonnement tout compris serait plus simple ? » — auxquelles un interlocuteur poli répondra oui. On sort de l’entretien conforté et exactement aussi ignorant qu’en entrant.',
      reflexe:
        'Relis chaque question avant de la poser : si elle contient déjà la réponse souhaitée, réécris-la en « racontez-moi… ». Et ne demande jamais la solution : l’utilisateur est expert de son problème, pas de ton offre.',
      notions: ['interview', 'besoin-latent'],
    },
    {
      id: 'sondage',
      libelle: 'S — Sondage (questionnaire)',
      cestQuoi:
        '🔎 Un questionnaire à questions fermées, diffusé largement, destiné à mesurer et à généraliser. Seule méthode quantitative des quatre : elle produit des pourcentages, donc des ordres de grandeur défendables devant un comité de direction. En contrepartie, elle ne capte aucune nuance et ne découvre rien qu’on n’ait déjà pensé à demander.',
      question:
        'Combien sont-ils à être dans ce cas — et l’écart entre les groupes est-il assez net pour fonder une décision ?',
      quoiMettre: [
        'Des questions fermées : oui/non, choix unique, échelle. Une question ouverte dans un sondage produit du texte que personne ne dépouillera.',
        'Une formulation neutre, sans adjectif orienté : « à quelle fréquence… » et non « appréciez-vous notre excellent service ? ».',
        'Un équilibre des choix de réponse : autant d’options négatives que positives, sinon la moyenne est fabriquée par la question elle-même.',
        'Un test préalable sur quelques personnes avant diffusion — le geste le plus rentable et le plus systématiquement oublié : il révèle les questions comprises de travers.',
        'Le plan d’analyse écrit avant l’envoi : pour chaque question, ce qu’on fera de la réponse. Toute question dont on ne sait pas quoi faire se supprime.',
        '📚 Qui a répondu, et qui n’a pas répondu : un questionnaire en ligne n’atteint que les gens déjà en ligne — les publics exclus sont précisément ceux qui manquent à l’échantillon.',
      ],
      exemple:
        'Atelier Léman envoie douze questions fermées à 150 entreprises genevoises de 10 à 100 salariés. Résultat illustratif : 41 % déclarent avoir au moins une place de parking louée par salarié mobile ; 68 % citent « personne pour s’occuper de l’entretien » comme premier frein à une flotte de vélos. Le second chiffre confirme à grande échelle ce que les huit entretiens avaient fait apparaître. Ce que le sondage ne dira jamais : pourquoi ce frein-là pèse plus que le prix.',
      piege:
        'Confondre le sondage et l’interview — poser des questions ouvertes à 150 personnes, ou vouloir « comprendre en profondeur » avec une échelle de 1 à 5. Les deux méthodes ne répondent pas à la même question et ne se remplacent jamais.',
      reflexe:
        'Un sondage ne s’écrit qu’après le qualitatif : on sonde pour mesurer une hypothèse que l’observation et l’interview ont fait naître. Sonder en premier revient à compter avant de savoir quoi compter.',
      notions: ['sondage', 'kpi'],
    },
    {
      id: 'focus-group',
      libelle: 'F — Focus group (groupe de discussion)',
      cestQuoi:
        '🔎 Une discussion organisée entre 6 et 12 participants, d’environ 45 minutes, menée par un animateur neutre. Ce qu’on y cherche n’est pas la somme des avis individuels — pour cela l’interview est meilleure — mais ce que la confrontation fait apparaître : les désaccords, les objections qu’un participant n’aurait pas formulées seul, les arguments qui convainquent les autres.',
      question:
        'Quand ces gens se parlent, qu’est-ce qui sort — et sur quoi ne sont-ils pas d’accord ?',
      quoiMettre: [
        'Le format, à citer tel quel : 6 à 12 participants, environ 45 minutes.',
        'Un animateur neutre, qui relance et ne donne jamais son avis — sinon le groupe s’aligne sur lui en quelques minutes.',
        'Des rôles séparés : un animateur qui parle, un observateur qui prend les notes. Une seule personne ne peut pas faire les deux.',
        'Un guide d’entretien préparé : la trame des questions, dans l’ordre, écrite avant la séance.',
        'Les désaccords, notés précisément : c’est la matière propre du focus group, celle qu’aucune autre méthode ne produit.',
        '🔎 Un choix de participants qui n’ont pas tous le même profil : un groupe homogène s’accorde vite et n’apprend rien.',
      ],
      exemple:
        'Atelier Léman réunit huit personnes pendant 45 minutes : quatre responsables de flotte, deux salariés qui utiliseraient les vélos, deux mécaniciens de l’atelier. Le désaccord surgit en dix minutes : les responsables veulent un tableau de bord numérique du parc, les salariés veulent surtout un vélo de remplacement en cas de panne, les mécaniciens signalent qu’un vélo de remplacement suppose un stock immobilisé. Aucune interview individuelle n’aurait produit ce triangle-là.',
      piege:
        'Le conformisme et le leader d’opinion : une personne assurée parle en premier, les autres s’alignent, et l’animateur repart avec un consensus qui n’existe pas. Le focus group produit alors l’illusion de la validation.',
      reflexe:
        'Fais écrire à chacun sa réponse sur un papier avant d’ouvrir la discussion, et cherche activement le désaccord : « qui voit les choses autrement ? ». Un focus group sans divergence est un focus group raté.',
      notions: ['focus-group'],
    },
    {
      id: 'triangulation',
      libelle: 'La triangulation — croiser les méthodes',
      cestQuoi:
        '🔎 Le cœur du schéma. Trianguler, c’est établir un même fait par au moins deux méthodes différentes, parce qu’aucune des quatre n’est fiable seule : l’observation voit sans comprendre, l’interview comprend sans généraliser, le sondage généralise sans nuancer, le focus group fait débattre sans mesurer. L’ordre habituel — observer, puis interviewer, puis sonder — n’est pas un rituel : chaque étape écrit les questions de la suivante.',
      question:
        'Ce que j’avance, est-ce que je l’ai vu, entendu ET compté — ou est-ce que je ne l’ai qu’entendu ?',
      quoiMettre: [
        'L’ordre de travail : observer pour repérer, interviewer pour expliquer, sonder pour dimensionner, réunir en groupe pour tester les réactions à une piste.',
        'Un fait par ligne, avec la ou les méthodes qui l’établissent — c’est ce tableau, et rien d’autre, qui sépare un constat d’une opinion.',
        'Les contradictions entre méthodes, gardées telles quelles : quand le sondage dit « le prix est le premier frein » et que l’observation montre des gens qui abandonnent avant même de voir le prix, la contradiction est l’information.',
        'Ce que chaque méthode ne peut pas dire, énoncé à voix haute : « nos huit entretiens ne permettent pas d’avancer un pourcentage ».',
        '🔎 Le point d’arrêt : on cesse de collecter quand les entretiens supplémentaires ne font plus apparaître de motif nouveau. Continuer au-delà coûte du temps sans rien produire.',
      ],
      exemple:
        'Chez Atelier Léman, trois méthodes disent la même chose par trois chemins. Observation : cinq clients sur sept butent sur la prise de rendez-vous. Interview : « personne chez nous ne veut gérer les pannes ». Sondage : 68 % citent l’entretien comme premier frein. Le fait triangulé s’écrit alors sans prudence excessive : ce que les entreprises genevoises n’ont pas, ce n’est pas le vélo, c’est quelqu’un pour s’en occuper. Chiffres illustratifs.',
      piege:
        'Se contenter d’une seule méthode et présenter son résultat comme un fait. Un chiffre issu du seul sondage, ou une citation issue du seul entretien, se retourne en trente secondes contre celui qui l’avance.',
      reflexe:
        'Devant chaque affirmation de ta réponse, pose la question : par quelle méthode le sais-je ? Deux méthodes concordantes, et l’affirmation tient. Une seule, et tu annonces sa limite avant que l’examinateur ne le fasse.',
      notions: ['collecte-donnees-utilisateurs', 'observation', 'interview', 'sondage'],
    },
    {
      id: 'questions',
      libelle: 'Les règles de la question',
      cestQuoi:
        'Le premier garde-fou. 🔎 Une méthode bien choisie mais mal questionnée produit des données fausses qui ont l’apparence de données vraies — c’est le pire résultat possible, pire qu’une absence de données. Les règles ne sont pas les mêmes des deux côtés : l’interview veut des questions ouvertes, le sondage des questions fermées, et les deux exigent la neutralité.',
      question:
        'Ma question laisse-t-elle la personne libre de me contredire — ou lui ai-je déjà soufflé la réponse ?',
      quoiMettre: [
        'Côté interview, le mémo O-N-P-5 : Ouvertes, Neutres, sur le Passé, avec les 5 pourquoi.',
        'Côté sondage : fermées, neutres, choix de réponse équilibrés, questionnaire testé avant diffusion.',
        'La règle commune, qui vaut pour les quatre méthodes : ne jamais demander la solution à l’utilisateur, seulement son problème et ce qu’il a fait.',
        'L’interdit du futur : « utiliseriez-vous ? » n’apprend rien. « Qu’avez-vous fait la dernière fois ? » apprend tout.',
        '📚 Le biais de désirabilité sociale : une personne interrogée tend à donner la réponse qu’elle croit valorisante. C’est le mécanisme qui explique la phrase-réflexe du chapitre — les gens ne font pas ce qu’ils disent.',
      ],
      exemple:
        'Version ratée, chez Atelier Léman : « seriez-vous intéressé par un abonnement mobilité tout compris à 95 francs par mois ? » — 70 % de oui polis, zéro signature. Version correcte : « combien avez-vous dépensé l’an dernier pour les déplacements urbains de vos collaborateurs, et qui s’en est occupé ? ». La seconde question porte sur du passé vérifiable ; elle a fait apparaître les 320 francs de parking mensuel que la première n’aurait jamais révélés. Chiffres illustratifs.',
      piege:
        'Écrire les questions au moment de les poser. Improvisée, une question glisse presque toujours vers le futur ou vers la solution — les deux formes qui rendent la réponse inutilisable.',
      reflexe:
        'Écris tes questions à l’avance et relis-les une par une avec un seul test : est-ce que je serais déçu par un « non » ? Si oui, la question est orientée.',
      notions: ['interview', 'sondage', 'besoin-latent'],
    },
    {
      id: 'ethique',
      libelle: 'Collecter sans abuser',
      cestQuoi:
        'Le second garde-fou. Interroger des gens, c’est traiter des données personnelles — donc entrer dans le champ de la protection des données. 📘 Le cours donne cinq principes de collecte : le but est indiqué au moment de la collecte, le traitement est transparent, les données sont minimisées, la personne comprend ce qui est collecté, et les données sont correctes. Le quatrième mérite l’attention : il ne suffit pas d’informer, il faut que la personne comprenne.',
      question:
        'Cette personne sait-elle ce que je collecte, pourquoi, et pourrais-je le lui expliquer en une phrase qu’elle comprendrait ?',
      quoiMettre: [
        '📘 Les cinq principes, dans l’ordre : but indiqué lors de la collecte · transparence de la collecte et du traitement · minimisation des données · compréhension de la collecte · données correctes.',
        '📘 La minimisation, appliquée concrètement : ne demander que ce qui sert la décision. Le nom, l’âge exact ou l’adresse ne se collectent pas « au cas où ».',
        'Le consentement obtenu avant l’enregistrement d’un entretien, et l’anonymisation des verbatims restitués à la direction.',
        '🔎 Le cas de l’observation : observer des gens sans leur parler suppose de les prévenir en amont ou de rester à un niveau agrégé — filmer un guichet à l’insu des clients ne se fait pas.',
        '📘 Le lien avec l’accessibilité : une explication que la personne ne peut pas lire ou pas comprendre ne satisfait pas le quatrième principe. Un formulaire de consentement illisible n’est pas un consentement.',
      ],
      exemple:
        'Avant chacun des huit entretiens, Atelier Léman annonce en trois phrases : ce qu’on cherche à décider, que la conversation est enregistrée, que les verbatims seront anonymisés, et que la personne peut demander l’effacement. Aucun nom de salarié, aucune donnée de santé, aucune géolocalisation ne sont demandés — ils ne serviraient à aucune des décisions en jeu. La minimisation n’est pas ici une contrainte juridique subie : c’est une donnée de moins à protéger.',
      piege:
        'Traiter la protection des données comme une formalité à cocher après coup, alors qu’elle se décide au moment où l’on écrit les questions — c’est-à-dire au moment où l’on choisit ce qu’on va collecter.',
      reflexe:
        'À chaque champ, à chaque question, demande : quelle décision cette donnée éclaire-t-elle ? Si la réponse ne vient pas immédiatement, la donnée ne se collecte pas.',
      notions: ['cinq-principes-collecte', 'minimisation-donnees', 'protection-donnees', 'privacy-by-design'],
    },
    {
      id: 'livrable',
      libelle: 'Le besoin traduit en décision',
      cestQuoi:
        '🔎 La sortie de l’outil, et son unique justification. La collecte ne s’arrête pas à un rapport : elle se termine par une phrase de besoin — qui, dans quelle situation, veut quoi, et pourquoi il ne l’obtient pas aujourd’hui — puis par ce que cette phrase change dans l’offre. C’est le chaînon entre le diagnostic et la décision.',
      question:
        'Qu’est-ce que cette collecte change concrètement à ce que nous allions faire — et si la réponse est « rien », pourquoi l’avons-nous menée ?',
      quoiMettre: [
        'La phrase de besoin, une seule, formulée du point de vue de l’utilisateur et non de l’entreprise.',
        'La traduction dans le business model : quel segment de clientèle, quelle proposition de valeur, quel canal.',
        'La correction du parcours quand la collecte a révélé une exclusion : un canal humain conservé à côté du canal numérique, un tarif adapté, une étape supprimée.',
        'Ce qu’on n’a pas su : une collecte honnête énonce ses angles morts, et ils deviennent le programme de la prochaine.',
        'Un indicateur de vérification, pour savoir plus tard si le besoin identifié était le bon — taux de réussite d’un parcours, taux d’abandon, délai pour joindre un humain.',
      ],
      exemple:
        'Phrase de besoin d’Atelier Léman : « le responsable de flotte d’une PME genevoise veut que ses collaborateurs se déplacent à vélo sans que personne en interne n’ait à gérer les pannes ». Traduction : le segment n’est pas le cycliste, c’est l’entreprise ; la proposition de valeur n’est pas le vélo, c’est la disponibilité garantie ; l’activité clé n’est pas la vente, c’est la maintenance — activité où l’atelier est déjà fort. Décision : pilote de 40 vélos chez 6 entreprises genevoises sur 12 mois, avec vélo de remplacement sous 24 heures. Indicateur : nombre de jours d’immobilisation par vélo et par an.',
      piege:
        'Rendre un rapport de collecte et s’arrêter là. Une donnée qui ne change aucune ligne de l’offre est une donnée qui n’a servi à rien, quelle qu’ait été la qualité de sa collecte.',
      reflexe:
        'Termine toujours par une phrase de la forme : « donc nous changeons X ». Sans ce « donc », la collecte n’a produit que du confort intellectuel.',
      notions: ['segments-clients', 'proposition-de-valeur', 'kpi-accessibilite', 'besoin-latent'],
    },
  ],

  methode: [
    {
      titre: '1. Écrire la décision avant la première question',
      detail:
        'Une phrase, au futur : « selon ce que nous trouverons, nous ferons A ou B ». Puis la personne à comprendre, désignée précisément. Ces deux lignes commandent tout le reste — méthode, nombre de personnes, calendrier.',
      aEviter:
        'Commencer par « faisons une étude ». Une étude sans décision au bout produit un document que personne ne rouvre.',
    },
    {
      titre: '2. Choisir la méthode d’après le type de question, pas d’après le budget',
      detail:
        'Quatre correspondances à savoir réciter : comprendre un usage réel → observation ; comprendre des motivations → interview ; mesurer et généraliser → sondage ; faire émerger et confronter des idées → focus group. Une question qui commence par « combien » appelle le quantitatif ; une question qui commence par « pourquoi » appelle le qualitatif.',
      aEviter:
        'Le réflexe du sondage par défaut, parce qu’il est le moins coûteux et le plus rassurant. Il ne découvre jamais rien qu’on n’ait pensé à demander.',
    },
    {
      titre: '3. Aller voir avant d’aller demander',
      detail:
        'Une heure d’observation sans interaction, avant tout entretien. Note les contournements et les écarts au parcours prévu ; ils fournissent les questions que tu n’aurais pas su inventer en salle de réunion.',
      aEviter:
        'Sauter l’observation parce qu’elle paraît improductive. C’est l’étape qui fait apparaître les besoins latents, ceux que personne ne sait formuler.',
    },
    {
      titre: '4. Écrire les questions, puis les relire une par une',
      detail:
        'Interview : ouvertes, neutres, sur le passé, cinq pourquoi. Sondage : fermées, neutres, choix équilibrés, testé sur quelques personnes. Un seul test pour toutes : serais-je déçu par un « non » ? Si oui, la question est orientée et se réécrit.',
      aEviter:
        'Poser une question au futur ou demander une solution. Les deux produisent des réponses aimables et sans valeur.',
    },
    {
      titre: '5. Croiser au moins deux méthodes avant d’affirmer quoi que ce soit',
      detail:
        'Un tableau à deux colonnes : le fait à gauche, la méthode qui l’établit à droite. Un fait établi par deux méthodes se défend ; un fait établi par une seule s’annonce avec sa limite. Les contradictions entre méthodes se gardent : elles sont l’information la plus intéressante du lot.',
      aEviter:
        'Généraliser à partir de huit entretiens, ou nuancer à partir d’un sondage. Chaque méthode a un domaine, et il n’est pas extensible.',
    },
    {
      titre: '6. Vérifier la légitimité de ce qu’on a collecté',
      detail:
        'Repasse les cinq principes sur ce que tu détiens : le but a-t-il été annoncé, le traitement est-il transparent, les données sont-elles minimales, la personne a-t-elle compris, les données sont-elles correctes ? Supprime tout champ dont tu ne peux pas nommer la décision qu’il éclaire.',
      aEviter:
        'Conserver « au cas où » des données que rien ne justifie. Chaque donnée gardée est un risque conservé et une dépense de stockage.',
    },
    {
      titre: '7. Traduire en une phrase de besoin, puis en une décision',
      detail:
        'Une phrase du point de vue de l’utilisateur — qui, dans quelle situation, veut quoi, et n’y arrive pas pourquoi — suivie de ce que cela change : un segment, une proposition de valeur, un canal, un parcours corrigé. Ajoute l’indicateur qui permettra de vérifier plus tard.',
      aEviter:
        'Terminer sur le constat. Sans « donc nous changeons X », la collecte reste un exercice, pas une étape de la décision.',
    },
  ],

  liens: [
    {
      vers: 'bmc',
      nature: 'alimente',
      explication:
        'Deux blocs du BMC ne peuvent pas s’écrire depuis un bureau : le segment de clientèle et la proposition de valeur. La collecte est ce qui les transforme d’hypothèses en faits — le segment est celui qu’on a observé, la valeur est celle que les entretiens ont fait sortir.',
    },
    {
      vers: 'ocean-bleu-erac',
      nature: 'alimente',
      explication:
        'Le « Créer » de l’ERAC ne s’invente pas : un nouveau critère de valeur vient d’un besoin latent, et un besoin latent se découvre par l’observation et les cinq pourquoi, jamais en demandant aux clients ce qu’ils veulent.',
    },
    {
      vers: 'wcag-pour',
      nature: 'alimente',
      explication:
        'L’accessibilité se vérifie et ne se déclare pas : le taux de conformité technique dit si les règles sont respectées, l’observation d’utilisateurs réels dit si les gens y arrivent — et c’est la seconde question qui décide du risque stratégique.',
    },
    {
      vers: 'privacy',
      nature: 'precise',
      explication:
        'Interroger des gens, c’est traiter des données personnelles : les cinq principes de collecte et la minimisation ne sont pas un chapitre voisin, ils s’appliquent à la première question du premier entretien.',
    },
    {
      vers: 'parties-prenantes',
      nature: 'prolonge',
      explication:
        'La matrice pouvoir-intérêt dit qui compte ; la collecte va chercher ce que ces gens-là disent réellement, au lieu de le déduire de leur position dans le tableau.',
    },
  ],

  pieges: [
    {
      titre: 'Confondre le sondage et l’interview',
      explication:
        'C’est l’erreur la plus fréquente et la plus visible. Le sondage est quantitatif et fermé, il mesure ce qu’on savait déjà devoir mesurer ; l’interview est qualitative et ouverte, elle découvre ce qu’on ne savait pas chercher. Les échanger revient à mesurer une hypothèse qu’on n’a pas encore formée.',
      reflexe:
        'Un mot par méthode : sonder, c’est compter ; interviewer, c’est comprendre. Et l’ordre ne s’inverse pas — on comprend d’abord, on compte ensuite.',
    },
    {
      titre: 'Poser des questions au futur ou demander la solution',
      explication:
        '« Utiliseriez-vous un abonnement à 95 francs ? » recueille une intention, c’est-à-dire une politesse. « Que feriez-vous à notre place ? » demande à un client de faire le métier du concepteur. Les deux formes remplissent des pages sans rien apprendre.',
      reflexe:
        'Ramène toute question au passé vérifiable : « qu’avez-vous fait la dernière fois, et combien cela vous a-t-il coûté ? ».',
    },
    {
      titre: 'S’arrêter à une seule méthode',
      explication:
        'Un chiffre de sondage seul se retourne (« votre échantillon est en ligne, donc il exclut ceux qui ne le sont pas ») ; une citation d’entretien seule ne prouve rien (« sur combien de personnes ? »). La force de la collecte n’est pas dans la méthode choisie mais dans le croisement.',
      reflexe:
        'Avant d’affirmer, demande-toi par quelle seconde méthode tu peux confirmer. Si aucune, annonce toi-même la limite : cela coûte moins cher que de se la faire annoncer.',
    },
    {
      titre: 'Croire ce que les gens disent plutôt que ce qu’ils font',
      explication:
        'Une personne interrogée rationalise, oublie, ou décrit la version d’elle-même qu’elle aimerait être. C’est un mécanisme ordinaire, pas de la mauvaise foi. Une collecte fondée sur le seul déclaratif se trompe donc systématiquement dans la même direction : trop optimiste.',
      reflexe:
        'La phrase du chapitre, à placer telle quelle : « les gens ne font pas ce qu’ils disent ». Puis va observer.',
    },
    {
      titre: 'Présenter cette méthode comme du contenu de cours sourcé',
      explication:
        '⚠️ Ce thème n’apparaît dans aucun support de slides. Il est reconstruit à partir des consignes de méthode, dans une logique de type design thinking standard à la HEG. L’annoncer comme un slide expose à une question de source à laquelle on ne pourra pas répondre.',
      reflexe:
        'Formule-le comme une méthode transversale : « la démarche de collecte utilisateur — observation, interview, sondage, focus group — appliquée à ce cas donnerait… ». Le raisonnement compte, la fausse référence coûte.',
    },
  ],

  variantes: [
    {
      sujet: 'Le mémo de la bonne interview : trois règles ou quatre ?',
      formulations: [
        {
          texte: 'Interview : questions ouvertes · écoute · 5 pourquoi',
          source: 'schéma n° 25 du corpus, ligne de bas de page',
        },
        {
          texte:
            'Bonne interview = O-N-P-5 : Ouverte · Neutre · Passé · 5 pourquoi',
          source: 'fiche 11 « Collecte de données utilisateurs », mémo final',
        },
      ],
      consigne:
        'Deux formulations pour la même idée, mais elles ne retiennent pas les mêmes règles : le schéma garde « écoute » là où la fiche impose « neutre » et « passé ». Ne tranche pas et ne fusionne pas silencieusement — la version la plus complète pour l’oral est O-N-P-5, parce que « neutre » et « passé » sont les deux règles dont l’oubli fabrique des données fausses ; ajoute « et l’écoute, c’est-à-dire le silence après la réponse », qui est ce que le schéma retient en propre.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman SA — aller vérifier avant de basculer',
    situation:
      'Le diagnostic est posé : ventes en recul de 8 % sur deux ans, marques low-cost en ligne, et une Ville de Genève qui subventionne la mobilité douce. Deux options sur la table — défendre la vente de vélos ou basculer vers un abonnement mobilité tout compris pour les entreprises genevoises. Personne, à ce stade, n’a parlé à une entreprise genevoise. La collecte intervient exactement ici : entre le diagnostic et le choix, pour que l’arbitrage porte sur des faits et non sur l’intuition de la direction. Les chiffres qui suivent sont illustratifs.',
    deroule: [
      {
        etiquette: 'Objectif',
        contenu:
          'Comprendre le responsable de flotte d’une PME genevoise de 20 à 80 salariés, pour décider si le pilote d’abonnement se lance ou non. Hypothèse de la direction : « ils veulent économiser des places de parking ».',
      },
      {
        etiquette: 'Observation — 1 matinée',
        contenu:
          'À l’atelier de Plainpalais, sans intervenir : trois clients sur sept repartent faute d’avoir compris qu’il fallait un rendez-vous ; deux tendent leur téléphone au mécanicien pour qu’il remplisse le formulaire. Aucun ne se plaindra. Le contournement est vu, pas déclaré.',
      },
      {
        etiquette: 'Interview — 8 entretiens',
        contenu:
          '« Racontez-moi comment vos collaborateurs se déplacent entre deux rendez-vous. » Cinq pourquoi plus tard : « personne chez nous ne veut gérer les pannes ». Au passage, le chiffre que personne n’avait demandé : 320 CHF par place de parking et par mois à Carouge.',
      },
      {
        etiquette: 'Sondage — 150 entreprises',
        contenu:
          'Douze questions fermées, testées sur cinq personnes avant envoi. 41 % louent au moins une place de parking par salarié mobile ; 68 % citent l’entretien comme premier frein à une flotte de vélos. L’hypothèse « parking » existe, mais elle arrive après « personne pour s’en occuper ».',
      },
      {
        etiquette: 'Focus group — 8 personnes, 45 min',
        contenu:
          'Quatre responsables de flotte, deux futurs utilisateurs, deux mécaniciens. Désaccord immédiat : tableau de bord numérique du parc contre vélo de remplacement sous 24 heures. Les mécaniciens signalent le coût du stock immobilisé. Le vrai arbitrage du service apparaît là.',
      },
      {
        etiquette: 'Triangulation',
        contenu:
          'Un même fait par trois chemins — observation, interview, sondage : ce qui manque aux entreprises genevoises n’est pas le vélo, c’est quelqu’un pour s’en occuper. La contradiction avec l’hypothèse de départ est notée telle quelle : le parking est un argument de vente, pas le besoin.',
      },
      {
        etiquette: 'Légitimité de la collecte',
        contenu:
          'But annoncé en trois phrases avant chaque entretien, enregistrement consenti, verbatims anonymisés. Aucun nom de salarié, aucune géolocalisation : ces données n’éclairaient aucune décision, elles n’ont pas été demandées.',
      },
      {
        etiquette: 'Livrable',
        contenu:
          'Phrase de besoin : « le responsable de flotte veut que ses collaborateurs roulent sans que personne en interne n’ait à gérer les pannes ». Décision : pilote de 40 vélos chez 6 entreprises sur 12 mois, avec remplacement sous 24 heures. Indicateur : jours d’immobilisation par vélo et par an.',
      },
    ],
    conclusion:
      'La collecte n’a pas choisi entre vendre et louer : elle a déplacé la question. Le besoin établi ne porte ni sur le vélo à 2 600 CHF ni sur son coût de 1 400 CHF, mais sur la disponibilité garantie — c’est-à-dire sur la maintenance, qui est justement le domaine d’activité où Atelier Léman est en position forte. Le segment devient l’entreprise et non le cycliste, la proposition de valeur devient la garantie de rouler et non l’objet, et l’activité clé bascule de la vente vers le service. Ces trois lignes se reportent directement dans le BMC ; le pilote de 40 vélos en est le test grandeur nature.',
  },

  phraseOral:
    'Avant de trancher entre vendre des vélos et vendre un abonnement, je vais chercher le fait qui manque : j’observe une matinée à l’atelier pour voir ce que les clients font vraiment, j’interviewe huit responsables de flotte avec cinq pourquoi pour savoir pourquoi ils ne l’ont pas déjà fait, et je sonde 150 entreprises pour savoir combien sont dans ce cas. Si les trois convergent, j’ai un fait ; si une seule parle, je n’ai qu’une opinion. Et ce que les trois disent ici, c’est que le besoin n’est pas le vélo mais quelqu’un pour s’en occuper — donc que la force de l’atelier en réparation est le vrai actif stratégique.',

  aRetenir: [
    { cle: 'Le mémo', valeur: 'O-I-S-F : Observation · Interview · Sondage · Focus group' },
    { cle: 'La phrase-réflexe', valeur: '« Les gens ne font pas ce qu’ils disent » — d’où l’observation avant l’entretien' },
    { cle: 'Qualitatif / quantitatif', valeur: 'Qualitatif : observation, interview, focus group · quantitatif : sondage seul' },
    { cle: 'Ce que chacune dit', valeur: 'Observer = quoi · interviewer = pourquoi · sonder = combien · focus group = ce qui fait débat' },
    { cle: 'Bonne interview', valeur: 'O-N-P-5 : Ouverte · Neutre · Passé · 5 pourquoi' },
    { cle: 'Bon sondage', valeur: 'Fermé · neutre · choix équilibrés · testé avant diffusion · analyse prévue' },
    { cle: 'Focus group', valeur: '6 à 12 participants · environ 45 minutes · animateur neutre · guide d’entretien' },
    { cle: 'La règle d’or', valeur: 'Trianguler : un fait établi par une seule méthode n’est pas un fait' },
    { cle: 'Les 5 principes 📘', valeur: 'But indiqué · transparence · minimisation · compréhension · données correctes' },
    { cle: 'Le livrable', valeur: 'Une phrase de besoin, puis « donc nous changeons X » — sinon la collecte n’a rien produit' },
    { cle: '⚠️ Provenance', valeur: 'Thème absent des slides, reconstruit d’après les consignes de méthode — à présenter comme méthode transversale' },
  ],

  notions: [
    'collecte-donnees-utilisateurs',
    'observation',
    'interview',
    'sondage',
    'focus-group',
    'besoin-latent',
    'cinq-principes-collecte',
    'minimisation-donnees',
    'protection-donnees',
    'segments-clients',
    'proposition-de-valeur',
    'exclusion-indirecte',
    'accessibilite-numerique',
    'utilisabilite',
    'parties-prenantes',
    'kpi',
  ],
}
