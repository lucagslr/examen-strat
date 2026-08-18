import type { Question } from './types'

/**
 * LES 22 QUESTIONS D'EXAMEN CORRIGÉES.
 * Source : `13_Questions_examens_corrigees.md`, elles-mêmes issues du document
 * de révision fourni par le cours. Les réponses sont fidèles aux corrigés.
 *
 * Logique transversale : presque toutes ces questions sont « numérique × durabilité
 * × stratégie ». Le réflexe gagnant : répondre EN DOUBLE SENS (le numérique soutient
 * ET freine la durabilité) et CITER UN OUTIL DU COURS.
 */
export const questionsOfficielles: Question[] = [
  {
    id: 'qo-1',
    origine: 'officielle',
    numero: 1,
    enonce: "Comment la transformation digitale peut-elle soutenir la durabilité d'une entreprise ?",
    reponse:
      "Le numérique soutient la durabilité par : la dématérialisation (moins de papier et de déplacements), l'optimisation des ressources (capteurs, pilotage énergétique), la mesure d'impact (données carbone), la traçabilité (chaîne d'approvisionnement), l'économie de la fonctionnalité (services au lieu de biens). MAIS — à ne jamais omettre — il a un coût écologique propre : data centers, terminaux, effet rebond.",
    notions: ['transformation-numerique', 'sobriete-numerique', 'effet-rebond', 'odd', 'economie-fonctionnalite', 'trois-postes-numerique'],
    phraseType:
      "Le numérique est un levier de durabilité à condition d'être lui-même sobre, sinon l'effet rebond annule les gains.",
    memo: 'Dématérialiser / Optimiser / Mesurer / Tracer — mais sobriété d’abord.',
    commentConstruire:
      "Structure OCDE : effet direct (coût du numérique) → effet facilitateur (gain permis) → effet systémique (rebond) → bilan net et arbitrage.",
    categorie: 'numerique',
    priorite: 1,
    sources: ['questions-officielles', 'encyclopedie'],
    guidage: {
      verbeAttendu: 'expliquer',
      ceQueLeVerbeImplique: [
        'montrer le mécanisme, pas seulement lister',
        'répondre au « pourquoi »',
        'ne pas se contenter d’une énumération',
      ],
      notionsAttendues: ['transformation-numerique', 'sobriete-numerique', 'effet-rebond', 'trois-postes-numerique'],
      notionsDistracteurs: ['porter-five-forces', 'matrice-pouvoir-interet', 'das'],
      outilsAttendus: ['effets-ocde', 'chaine-valeur-durable'],
      planAttendu: [
        { id: 'p1', libelle: 'Définition et contexte' },
        { id: 'p2', libelle: 'Apports du numérique' },
        { id: 'p3', libelle: 'Limites et impacts négatifs' },
        { id: 'p4', libelle: "Conditions d'une digitalisation durable" },
        { id: 'p5', libelle: 'Conclusion et arbitrage' },
      ],
      arguments: [
        { texte: 'Optimisation énergétique par capteurs et pilotage', pertinent: true },
        { texte: 'Meilleure mesure de l’impact (données carbone, ACV outillée)', pertinent: true },
        { texte: 'Traçabilité de la chaîne d’approvisionnement', pertinent: true },
        { texte: 'Réduction de certains déplacements par la dématérialisation', pertinent: true },
        {
          texte: 'Hausse du nombre de data centers et de leur consommation',
          pertinent: false,
          pourquoi: "C'est un impact négatif, pas un apport : il appartient à l'axe « limites », pas à l'axe « apports ».",
        },
        {
          texte: 'Le numérique est immatériel donc sans impact',
          pertinent: false,
          pourquoi: "Le cours affirme exactement l'inverse : « le premier fait à rappeler est que le numérique n'est pas immatériel ».",
        },
      ],
      exemplesProposes: [
        { texte: 'SilverDigital — la digitalisation réduit l’empreinte mais exclut les seniors', adapte: true, cas: 'silverdigital' },
        { texte: 'Data centers et IA : +16 %/an, ~4,32 g CO₂ par requête ChatGPT', adapte: true },
        {
          texte: 'Le Cirque du Soleil supprime les animaux sauvages',
          adapte: false,
          pourquoi: "Excellent exemple d'innovation-valeur, mais sans rapport avec le numérique.",
        },
      ],
      arbitrages: [
        { texte: 'Efficacité numérique vs sobriété', correct: true },
        { texte: 'Prix vs pouvoir des fournisseurs', correct: false },
        { texte: 'Court terme (gains d’efficacité) vs long terme (croissance des usages)', correct: true },
      ],
      checklist: [
        "J'ai défini la transformation numérique",
        "J'ai cité au moins trois apports concrets",
        "J'ai mentionné le coût propre du numérique (3 postes)",
        "J'ai placé l'effet rebond",
        "J'ai donné un exemple du cours",
        "J'ai fait un lien transversal (chaîne de valeur, BM durable ou RNE)",
        "J'ai nommé l'arbitrage",
        "J'ai conclu en tranchant",
      ],
    },
  },
  {
    id: 'qo-2',
    origine: 'officielle',
    numero: 2,
    enonce: "Réalisez un PESTEL en intégrant les enjeux écologiques et éthiques (secteur alimentaire).",
    reponse:
      "Points saillants du secteur alimentaire : P (réglementation agricole, souveraineté alimentaire) ; E (prix des matières premières, inflation) ; S (locavorisme, véganisme, défiance) ; T (agritech, traçabilité) ; É écologique/éthique (bilan carbone, bien-être animal, gaspillage) ; L (étiquetage, normes sanitaires, lois anti-gaspillage). Le « E » du cours est fusionné : il couvre à la fois l'environnemental et l'éthique.",
    notions: ['pestel', 'facteur-environnemental-ethique', 'facteur-politique', 'facteur-legal', 'opportunite', 'menace'],
    piege: "Ne pas confondre PESTEL (externe macro) et diagnostic interne.",
    commentConstruire: "Une ligne par facteur, chacune : fait → mécanisme → opportunité ou menace → échéance.",
    categorie: 'diagnostic-externe',
    priorite: 1,
    sources: ['questions-officielles', 'encyclopedie'],
  },
  {
    id: 'qo-3',
    origine: 'officielle',
    numero: 3,
    enonce: "La durabilité peut-elle être une force dans un SWOT ? Justifiez.",
    reponse:
      "Oui. Une démarche durable crédible est une force interne (ressource immatérielle : réputation, marque, conformité anticipée) et ouvre des opportunités externes (marchés verts, réglementation favorable). Elle peut aussi devenir une faiblesse si elle alourdit les coûts, ou une menace (durcissement normatif) pour les retardataires.",
    notions: ['swot', 'force', 'ressources-intangibles', 'durabilite-forte', 'double-levier-accessibilite'],
    phraseType: "Bien intégrée, la durabilité est une force distinctive ; subie, elle devient une faiblesse de coût.",
    commentConstruire:
      "Prendre position (oui), puis montrer les quatre cases : force si intégrée, faiblesse si subie, opportunité de marché, menace réglementaire pour les retardataires.",
    categorie: 'diagnostic',
    priorite: 1,
    sources: ['questions-officielles', 'encyclopedie'],
  },
  {
    id: 'qo-4',
    origine: 'officielle',
    numero: 4,
    enonce: "Comment réduire l'empreinte carbone via la chaîne de valeur ?",
    reponse:
      "Analyser chaque maillon : logistique amont (fournisseurs proches, low-carbon), production (énergie renouvelable, sobriété), logistique aval (mutualisation, transport bas carbone), marketing/ventes (numérique sobre), services (réparation, réemploi). Activités de soutien : achats responsables, RH (sensibilisation, mobilité).",
    notions: ['chaine-valeur-durable', 'chaine-de-valeur', 'activites-principales', 'activites-soutien', 'externalite-negative', 'achats-it-responsables'],
    memo: 'Décarboner = remonter la chaîne maillon par maillon.',
    commentConstruire: "Un tableau à deux colonnes : activité / levier. Terminer sur les activités de soutien, souvent oubliées.",
    categorie: 'diagnostic-interne',
    priorite: 1,
    sources: ['questions-officielles', 'encyclopedie'],
  },
  {
    id: 'qo-5',
    origine: 'officielle',
    numero: 5,
    enonce: "Comment transformer un business model en BM durable ? Quelles tensions court terme / long terme ?",
    reponse:
      "Méthode : métamorphose du BMC — chaque bloc passe au durable — plus l'ajout des blocs Mission, Impacts positifs et Externalités négatives. Tensions CT/LT : investissements immédiats vs bénéfices différés ; hausse de coûts vs réputation et risque évité ; exigence actionnariale de court terme vs résilience de long terme.",
    notions: ['bmc-durable', 'metamorphose-bmc', 'mission', 'impacts-positifs', 'externalite-negative', 'tensions-strategiques'],
    phraseType: "Le BM durable internalise les externalités aujourd'hui pour sécuriser la viabilité demain.",
    piege: "Ne pas se contenter de lister — montrer l'arbitrage.",
    commentConstruire:
      "Bloc par bloc, puis la tension, puis le mécanisme d'auto-financement : les économies d'efficacité de la première vague financent la R&D de la seconde.",
    categorie: 'business-model-durable',
    priorite: 1,
    sources: ['questions-officielles', 'metamorphose-bmc'],
    guidage: {
      verbeAttendu: 'expliquer',
      ceQueLeVerbeImplique: ['montrer le mécanisme de transformation', 'nommer la tension', 'ne pas se limiter à une liste de blocs'],
      notionsAttendues: ['bmc-durable', 'metamorphose-bmc', 'externalite-negative', 'tensions-strategiques', 'mission'],
      notionsDistracteurs: ['pestel', 'toile-porter', 'focus-group'],
      outilsAttendus: ['bmc-durable', 'metamorphose-bmc'],
      planAttendu: [
        { id: 'p1', libelle: 'Rappel du BM classique et de ses angles morts' },
        { id: 'p2', libelle: 'La méthode : métamorphose bloc par bloc' },
        { id: 'p3', libelle: 'Les trois blocs ajoutés (0, 10, 11)' },
        { id: 'p4', libelle: 'La tension court terme / long terme' },
        { id: 'p5', libelle: 'Conclusion : mécanisme d’auto-financement' },
      ],
      arguments: [
        { texte: 'Revenus déplacés vers le leasing, les services et la remise à neuf', pertinent: true },
        { texte: 'Ressources clés priorisées renouvelables, recyclées ou certifiées', pertinent: true },
        { texte: 'Investissement initial plus élevé, bénéfices à long terme', pertinent: true },
        {
          texte: 'Le BM durable supprime la contrainte de rentabilité',
          pertinent: false,
          pourquoi: "Faux : le modèle reste bon si revenus > coûts, en y ajoutant deux conditions supplémentaires.",
        },
        {
          texte: 'Il suffit de communiquer sur les ODD',
          pertinent: false,
          pourquoi: "C'est du SDG-washing : le test est de savoir si les ODD touchent la proposition de valeur et les activités clés, pas seulement la communication.",
        },
      ],
      exemplesProposes: [
        { texte: 'Oncle Hansi — locavorisme et circuits courts comme dimension durable du modèle', adapte: true, cas: 'oncle-hansi' },
        { texte: 'SilverDigital — le −20 % de coûts de support est en partie une externalisation', adapte: true, cas: 'silverdigital' },
        { texte: 'Fukushima — sortie du nucléaire', adapte: false, pourquoi: "C'est un exemple de PESTEL, pas de transformation de business model." },
      ],
      arbitrages: [
        { texte: 'Court terme (rentabilité immédiate) vs long terme (viabilité, réputation, risque évité)', correct: true },
        { texte: 'Différenciation vs domination par les coûts', correct: false },
      ],
      checklist: [
        "J'ai rappelé la structure du BMC classique",
        "J'ai cité les trois blocs ajoutés",
        "J'ai traité au moins trois blocs transformés",
        "J'ai nommé explicitement la tension CT/LT",
        "J'ai donné un exemple",
        "J'ai proposé un mécanisme de résolution (auto-financement)",
        "J'ai conclu",
      ],
    },
  },
  {
    id: 'qo-6',
    origine: 'officielle',
    numero: 6,
    enonce: "En quoi la collaboration ouverte et les partenariats soutiennent-ils une stratégie durable ?",
    reponse:
      "Les partenariats (ODD 17) mutualisent ressources et savoirs, ferment les boucles d'économie circulaire, partagent les coûts de R&D verte et renforcent la traçabilité. La coopétition — coopérer entre concurrents sur le durable — crée des externalités positives, au sens du système de valeur.",
    notions: ['coopetition', 'systeme-de-valeur', 'externalite-positive', 'cinq-p', 'partenaires-cles', 'economie-circulaire'],
    commentConstruire: "Définir la coopétition, expliquer le mécanisme de mutualisation, illustrer, puis relier au système de valeur.",
    categorie: 'diagnostic-interne',
    priorite: 2,
    sources: ['questions-officielles', 'encyclopedie'],
  },
  {
    id: 'qo-7',
    origine: 'officielle',
    numero: 7,
    enonce: "Comment le numérique permet-il de mesurer et piloter l'impact écologique ?",
    reponse:
      "Capteurs IoT, tableaux de bord carbone, analyse du cycle de vie outillée, reporting ESG automatisé, suivi temps réel des consommations. Le numérique permet de rendre visible, donc pilotable, l'impact. Limite : la mesure a elle-même un coût numérique et ne vaut que si elle déclenche l'action.",
    notions: ['transformation-numerique', 'kpi', 'cycle-de-vie', 'cout-cycle-de-vie', 'oris'],
    commentConstruire: "Lister les outils, expliquer le mécanisme « rendre visible = rendre pilotable », puis nuancer par le coût de la mesure.",
    categorie: 'numerique',
    priorite: 2,
    sources: ['questions-officielles'],
  },
  {
    id: 'qo-8',
    origine: 'officielle',
    numero: 8,
    enonce: "Les données en temps réel peuvent-elles optimiser la logistique de façon durable ?",
    reponse:
      "Oui : optimisation des tournées (moins de kilomètres à vide), prévision de la demande (moins de surstock et de gaspillage), maintenance prédictive (durée de vie allongée). Mais : dépendance aux data centers, effet rebond (plus d'efficacité → plus de volume), enjeux de protection des données.",
    notions: ['effet-rebond', 'data-center', 'protection-donnees', 'logistique-commercialisation', 'chaine-valeur-durable'],
    phraseType:
      "La donnée optimise la logistique, à condition que les gains d'efficacité ne soient pas réabsorbés par la croissance des volumes.",
    commentConstruire: "Double sens obligatoire : trois apports, trois limites, puis la condition.",
    categorie: 'numerique',
    priorite: 2,
    sources: ['questions-officielles'],
  },
  {
    id: 'qo-9',
    origine: 'officielle',
    numero: 9,
    enonce: "Faites un PESTEL d'une entreprise en transition écologique.",
    reponse:
      "Même grille qu'en Q2, centrée sur la transition : P (subventions, taxe carbone) ; E (coût de l'énergie, financements verts) ; S (attentes sociétales, acceptation sociale) ; T (technologies propres) ; É (limites planétaires, pression écologique) ; L (réglementation environnementale, AI Act si numérique).",
    notions: ['pestel', 'limites-planetaires', 'donut', 'facteur-environnemental-ethique', 'facteur-politique'],
    commentConstruire:
      "Réutiliser les six questions guides du cours : lois et politiques ; impact économique sur les secteurs clés ; acceptation sociale et changements de comportement ; innovations à encourager ; engagements environnementaux et éthiques ; conformité réglementaire.",
    categorie: 'diagnostic-externe',
    priorite: 1,
    sources: ['questions-officielles', 'encyclopedie'],
  },
  {
    id: 'qo-10',
    origine: 'officielle',
    numero: 10,
    enonce: "Comment intégrer les parties prenantes dans une stratégie durable ?",
    reponse:
      "Cartographier via la matrice intérêt × pouvoir, puis adapter : gérer de près les puissants et intéressés, satisfaire les puissants, informer les intéressés, veiller sur les autres. En durabilité, élargir aux parties prenantes non marchandes : environnement, générations futures, société — logique ODD et durabilité forte.",
    notions: ['parties-prenantes', 'matrice-pouvoir-interet', 'durabilite-forte', 'odd', 'acceptabilite'],
    memo: 'Pouvoir × Intérêt → 4 stratégies. La durabilité élargit le cercle des parties prenantes.',
    categorie: 'diagnostic',
    priorite: 1,
    sources: ['questions-officielles', 'corrige-tp01'],
  },
  {
    id: 'qo-11',
    origine: 'officielle',
    numero: 11,
    enonce: "Qu'est-ce que l'éco-conception et en quoi sert-elle un modèle durable ?",
    reponse:
      "Concevoir un produit ou service en minimisant son impact sur tout le cycle de vie : matières, production, usage, fin de vie. Elle sert le BM durable : moins de ressources, durabilité et réparabilité, circularité. Lien fort avec les achats IT responsables et les 3R.",
    notions: ['eco-conception', 'cycle-de-vie', 'trois-r', 'economie-circulaire', 'bmc-durable'],
    commentConstruire: "D-E-I : définir, expliquer le mécanisme de réduction à la source, illustrer par les 3R ou le RGESN.",
    categorie: 'circularite',
    priorite: 2,
    sources: ['questions-officielles'],
  },
  {
    id: 'qo-12',
    origine: 'officielle',
    numero: 12,
    enonce: "Transparence et labels : comment soutiennent-ils le positionnement stratégique ?",
    reponse:
      "Les labels (qualité, environnement) réduisent l'asymétrie d'information et crédibilisent la promesse, ce qui permet la différenciation. La transparence bâtit la confiance, axe sociétal de la RNE. Risque : le greenwashing si l'affichage dépasse la réalité.",
    notions: ['labels-environnementaux', 'greenwashing', 'option-differenciation', 'ocean-bleu', 'proposition-de-valeur'],
    commentConstruire: "Mécanisme économique (asymétrie d'information) → effet stratégique (différenciation) → risque (greenwashing) → condition (preuve).",
    categorie: 'business-model-durable',
    priorite: 2,
    sources: ['questions-officielles', 'corrige-hansi'],
  },
  {
    id: 'qo-13',
    origine: 'officielle',
    numero: 13,
    enonce: "L'innovation digitale est-elle compatible avec la durabilité ? Discutez.",
    reponse:
      "Oui — dématérialisation, optimisation, nouveaux modèles (fonctionnalité, partage). Non ou attention — empreinte des data centers, IA énergivore (+16 %/an), effet rebond, obsolescence accélérée. Synthèse : compatible SI guidée par la sobriété numérique (« mieux avec moins »).",
    notions: ['transformation-numerique', 'sobriete-numerique', 'effet-rebond', 'data-center', 'obsolescence', 'debat-numerique-durabilite'],
    phraseType:
      "L'innovation digitale n'est durable que si elle questionne d'abord le besoin (sobriété), avant d'optimiser.",
    commentConstruire: "« Discutez » = thèse + antithèse + synthèse. Ne jamais répondre à sens unique.",
    categorie: 'numerique',
    priorite: 1,
    sources: ['questions-officielles'],
  },
  {
    id: 'qo-14',
    origine: 'officielle',
    numero: 14,
    enonce: "Quels sont les freins internes à une stratégie durable ?",
    reponse:
      "Coûts d'investissement, résistance au changement, manque de compétences, culture court-termiste, priorité à la rentabilité immédiate, absence de gouvernance dédiée (pas de Green ou Sustainability Officer). Ce sont des faiblesses du diagnostic interne.",
    notions: ['diagnostic-interne', 'faiblesse', 'competences', 'gouvernance-numerique-roles', 'tensions-strategiques'],
    commentConstruire: "Classer les freins : financiers, humains, culturels, organisationnels. Puis proposer un levier pour chacun.",
    categorie: 'diagnostic-interne',
    priorite: 2,
    sources: ['questions-officielles'],
  },
  {
    id: 'qo-15',
    origine: 'officielle',
    numero: 15,
    enonce: "Qu'est-ce que le greenwashing et comment l'éviter ?",
    reponse:
      "Communication qui survend l'engagement écologique réel : allégations vagues, sans preuve. On l'évite par des preuves chiffrées, des labels indépendants, la transparence, la cohérence entre le discours et la chaîne de valeur, et un reporting vérifiable.",
    notions: ['greenwashing', 'labels-environnementaux', 'externalite-negative', 'facteur-environnemental-ethique'],
    piege: "Un BM « durable » de façade est du greenwashing si les externalités négatives restent cachées dans les coûts.",
    categorie: 'business-model-durable',
    priorite: 1,
    sources: ['questions-officielles'],
  },
  {
    id: 'qo-16',
    origine: 'officielle',
    numero: 16,
    enonce: "Quel est l'impact environnemental des data centers et comment le réduire ?",
    reponse:
      "Forte consommation d'électricité et d'eau (refroidissement) ; l'un des 3 postes d'impact du numérique avec les terminaux et les réseaux. Réduction : efficacité énergétique (PUE), énergies renouvelables, mutualisation et cloud optimisé, sobriété (réduire les usages superflus), allongement de vie du matériel.",
    notions: ['data-center', 'trois-postes-numerique', 'sobriete-numerique', 'effet-rebond'],
    commentConstruire:
      "Chiffres d'abord (415 TWh en 2024, ~945 TWh en 2030, moins de 3 % de l'électricité mondiale), puis leviers, puis la nuance de l'effet rebond.",
    categorie: 'numerique',
    priorite: 1,
    sources: ['questions-officielles'],
  },
  {
    id: 'qo-17',
    origine: 'officielle',
    numero: 17,
    enonce: "L'IA et sa consommation énergétique : enjeu et réponses ?",
    reponse:
      "La demande des data centers liée à l'IA croît d'environ +16 %/an, soit un doublement tous les quatre ans. Une requête de chatbot représente environ 4,32 g CO₂, ordre de grandeur du cours. Réponses : sobriété d'usage (questionner le recours à l'IA), modèles plus petits et plus efficients, énergie décarbonée, mesure de l'empreinte.",
    notions: ['ia', 'data-center', 'sobriete-numerique', 'effet-rebond', 'autonomie-cognitive'],
    phraseType: "L'IA n'est pas neutre : sa désirabilité doit être questionnée avant son déploiement.",
    categorie: 'rne',
    priorite: 1,
    sources: ['questions-officielles'],
  },
  {
    id: 'qo-18',
    origine: 'officielle',
    numero: 18,
    enonce: "Quels leviers d'économie circulaire pour les appareils numériques ?",
    reponse:
      "Les 3R dans l'ordre : Réduire (acheter moins) → Réutiliser (reconditionné, mutualisation) → Recycler (en dernier). Plus l'allongement de la durée de vie, la réparabilité, le leasing, les clauses environnementales d'achat. Relève de l'ODD 12.",
    notions: ['trois-r', 'economie-circulaire', 'reconditionnement', 'achats-it-responsables', 'odd-12', 'economie-fonctionnalite'],
    memo: '3R = Réduire > Réutiliser > Recycler (l’ordre compte !).',
    categorie: 'circularite',
    priorite: 1,
    sources: ['questions-officielles'],
  },
  {
    id: 'qo-19',
    origine: 'officielle',
    numero: 19,
    enonce: "La blockchain peut-elle améliorer la traçabilité durable ? Discutez.",
    reponse:
      "Oui — registre infalsifiable, donc traçabilité des matières, lutte anti-fraude, preuve d'origine pour les labels. Mais — certaines blockchains sont très énergivores, complexité et coût ; le gain doit dépasser l'empreinte. À présenter comme exemple technologique, pas comme contenu de cours sourcé. La blockchain garantit l'intégrité de la donnée saisie, pas la véracité de la saisie initiale : c'est là qu'intervient le monitoring de terrain d'Electronics Watch.",
    notions: ['electronics-watch', 'effet-rebond', 'labels-environnementaux', 'systeme-de-valeur'],
    piege: "Hypothèse non présente dans les decks : à présenter comme un exemple technologique, jamais comme du cours.",
    categorie: 'circularite',
    priorite: 2,
    sources: ['questions-officielles', 'encyclopedie'],
  },
  {
    id: 'qo-20',
    origine: 'officielle',
    numero: 20,
    enonce: "Quels risques la numérisation fait-elle peser (au-delà de l'écologie) ?",
    reponse:
      "Dépendance au numérique, cybersécurité et data breach, exclusion numérique (accessibilité), économie de l'attention et dark patterns, perte de souveraineté des données, technoféodalisme. Réponse RNE : protection des données, inclusion, éthique, gouvernance.",
    notions: ['cybersecurite', 'exclusion-indirecte', 'economie-attention', 'dark-patterns', 'souverainete-numerique', 'technofeodalisme', 'rne'],
    categorie: 'rne',
    priorite: 1,
    sources: ['questions-officielles'],
  },
  {
    id: 'qo-21',
    origine: 'officielle',
    numero: 21,
    enonce: "Le cloud soutient-il ou freine-t-il la durabilité ?",
    reponse:
      "Soutient — mutualisation des serveurs (taux d'usage élevé), efficacité supérieure à des serveurs locaux sous-utilisés, scalabilité. Freine — concentration de la consommation en data centers, effet rebond (le cloud « illimité » encourage le stockage inutile), dépendance.",
    notions: ['data-center', 'effet-rebond', 'souverainete-numerique', 'gouvernance-donnees'],
    phraseType: "Le cloud est plus efficient par unité, mais son abondance perçue nourrit l'effet rebond.",
    categorie: 'numerique',
    priorite: 1,
    sources: ['questions-officielles'],
  },
  {
    id: 'qo-22',
    origine: 'officielle',
    numero: 22,
    enonce: "Comment intégrer les ODD dans une stratégie digitale ? Et l'automatisation face aux déchets ?",
    reponse:
      "Aligner les projets numériques sur des ODD précis (12 consommation responsable, 9 innovation, 13 climat). L'automatisation peut réduire les déchets (tri intelligent, maintenance prédictive, optimisation matière) mais génère des déchets électroniques (DEEE) et un coût numérique : l'arbitrage doit être explicité.",
    notions: ['odd', 'odd-12', 'economie-circulaire', 'trois-r', 'effet-rebond', 'deee'],
    commentConstruire:
      "Partir des ODD comme grille, choisir 2 ou 3 ODD précis, montrer l'apport de l'automatisation, puis son coût, puis trancher.",
    categorie: 'durabilite',
    priorite: 1,
    sources: ['questions-officielles'],
  },
]
