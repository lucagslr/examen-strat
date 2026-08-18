import type { Notion } from '../types'

/** PARTIE V — NUMÉRIQUE ET SOBRIÉTÉ (encyclopédie §26 à §27) */
export const notionsNumerique: Notion[] = [
  {
    id: 'transformation-numerique',
    slug: 'transformation-numerique',
    nom: 'Transformation numérique (digitale)',
    nomCourt: 'Transformation numérique',
    aliases: ['transformation digitale', 'digitalisation', 'numérisation'],
    categorie: 'numerique',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Le numérique est présenté par le cours comme matériel, énergivore, politique et addictif — à rebours de l'image d'immatérialité. « Le premier fait à rappeler est que le numérique n'est pas immatériel. »",
    explicationSimple:
      "Le numérique soutient la durabilité par la dématérialisation, l'optimisation des ressources, la mesure d'impact, la traçabilité et l'économie de la fonctionnalité. MAIS il a un coût écologique propre (data centers, terminaux, effet rebond).",
    phraseExamen:
      "Le numérique est un levier de durabilité à condition d'être lui-même sobre, sinon l'effet rebond annule les gains.",
    pieges: [
      {
        erreur: 'Répondre à sens unique sur le numérique.',
        pourquoi:
          "Toute question numérique × durabilité doit être traitée en double sens : soutient ✅ / freine ⚠️. Ne jamais omettre le coût propre.",
        test: "Ai-je dit à la fois ce que le numérique permet ET ce qu'il coûte ?",
      },
    ],
    motsCles: ['dématérialisation', 'optimisation', 'double sens', 'coût propre'],
    sources: ['encyclopedie', 'questions-officielles'],
    provenance: 'cours',
  },
  {
    id: 'trois-postes-numerique',
    slug: 'trois-postes-numerique',
    nom: 'Les 3 postes d’impact du numérique',
    nomCourt: '3 postes (T-D-R)',
    acronyme: 'T-D-R',
    aliases: ['terminaux data centers réseaux', 'trois postes'],
    categorie: 'numerique',
    type: 'acronyme',
    priorite: 1,
    definitionCours: "Terminaux + data centers + réseaux.",
    explicationSimple:
      "Répartition de l'impact en France : terminaux ~50 %, centres de données 46 %, réseaux 4 %. La moitié de l'impact vient de nos appareils — donc de leur fabrication et de leur renouvellement.",
    phraseExamen:
      "Le chiffre le plus utile en oral : terminaux ~50 %, data centers 46 %, réseaux 4 %. Il permet de contrer l'idée reçue que le problème est uniquement les data centers, et il justifie tout le chapitre sur les achats IT responsables et les 3R.",
    chiffres: [
      { libelle: 'Terminaux (France)', valeur: '~50 %', source: 'doc-donut' },
      { libelle: 'Centres de données (France)', valeur: '46 %', source: 'doc-donut' },
      { libelle: 'Réseaux (France)', valeur: '4 %', source: 'doc-donut' },
      { libelle: 'Numérique mondial en 2019', valeur: "5,6 % de l'électricité mondiale et 4 % des émissions de GES", source: 'guide-rne' },
      { libelle: 'Numérique en France (2022)', valeur: "~4,4 % de l'empreinte carbone nationale", source: 'doc-donut' },
    ],
    motsCles: ['terminaux', 'data centers', 'réseaux', 'fabrication'],
    sources: ['encyclopedie', 'memos', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'data-center',
    slug: 'data-center',
    nom: 'Data center (centre de données)',
    nomCourt: 'Data center',
    aliases: ['centre de données', 'serveur', 'hébergement'],
    categorie: 'numerique',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Infrastructure hébergeant serveurs et stockage. L'un des 3 postes du numérique ; gros consommateur d'électricité et d'eau (refroidissement).",
    explicationSimple:
      "Réduction possible : efficacité énergétique (PUE), énergies renouvelables, mutualisation/cloud optimisé, sobriété (réduire les usages superflus), allongement de vie du matériel. Trois leviers techniques du cours : consolidation des centres de données, virtualisation des serveurs et du stockage, techniques de refroidissement et gestion de l'alimentation.",
    chiffres: [
      { libelle: 'Consommation mondiale 2024', valeur: '~415 TWh, soit 1,5 % de la consommation électrique mondiale, +12 %/an sur cinq ans', source: 'doc-donut' },
      { libelle: "Demande d'électricité d'ici 2030 (AIE)", valeur: '~945 TWh — plus que la consommation totale du Japon', source: 'encyclopedie' },
      { libelle: "Part de l'électricité mondiale en 2030", valeur: 'un peu moins de 3 %', source: 'encyclopedie' },
      { libelle: 'Aux États-Unis, part dans la croissance de la demande d’ici 2030', valeur: 'près de la moitié', source: 'encyclopedie' },
    ],
    phraseExamen:
      "Ces trois leviers sont des leviers d'efficacité. L'efficacité seule est menacée par l'effet rebond : un excellent oral les cite ET ajoute qu'ils doivent être accompagnés d'une démarche de sobriété.",
    motsCles: ['électricité', 'eau', 'refroidissement', 'PUE', 'virtualisation'],
    sources: ['encyclopedie', 'doc-donut', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'effet-rebond',
    slug: 'effet-rebond',
    nom: 'Effet rebond',
    aliases: ['rebound effect', 'paradoxe de Jevons', 'effet retour'],
    categorie: 'numerique',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Lorsqu'un gain est atteint quelque part, une augmentation d'utilisation ou d'impacts aura lieu quelque part d'autre. Quatre types : direct, indirect, de marché, croissance.",
    explicationSimple:
      "🔎 Direct : le gain d'efficacité rend l'usage moins coûteux, donc on l'utilise davantage (un serveur plus efficace ⇒ on héberge plus de services dessus). Indirect : l'argent ou le temps économisé est dépensé ailleurs (le télétravail économise des trajets mais permet de s'installer plus loin et d'accroître les déplacements de loisir). De marché : les gains font baisser les prix, ce qui élargit la demande (le stockage cloud devient si bon marché qu'on ne supprime plus rien). Croissance : les gains alimentent la croissance économique globale.",
    pourquoiExiste:
      "C'est LA notion qui permet de nuancer toute réponse d'examen sur le numérique. Dès qu'on dit « le numérique permet d'optimiser et donc de réduire l'impact », il faut y répondre.",
    phraseExamen:
      "Le numérique offre un gain d'efficacité réel et mesurable ; mais ce gain n'est un gain net que si trois conditions sont réunies : que l'impact propre de la solution numérique soit inférieur au gain obtenu, que le besoin ait été questionné en amont, et que le gain ne soit pas réinvesti dans une augmentation des usages. Sans cela, on observe un effet rebond.",
    exemples: [
      { texte: "Le cloud est plus efficient par unité, mais son abondance perçue nourrit l'effet rebond.", source: 'questions-officielles' },
      { texte: "La donnée optimise la logistique, à condition que les gains d'efficacité ne soient pas réabsorbés par la croissance des volumes.", source: 'questions-officielles' },
    ],
    motsCles: ['direct', 'indirect', 'marché', 'croissance', 'réabsorption'],
    sources: ['encyclopedie', 'cours-recordon', 'glossaire', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'effet-offre-usage',
    slug: 'effet-offre-usage',
    nom: "Effet d'offre / effet d'usage",
    nomCourt: 'Offre / usage',
    categorie: 'numerique',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "L'offre = impact de produire et fournir la technologie ; l'usage = impact lié à son utilisation. À différencier des gains permis par cet usage.",
    explicationSimple: "Deux sources d'impact à ne pas confondre avec le bénéfice que l'usage procure ailleurs.",
    motsCles: ['production', 'utilisation', 'gains'],
    sources: ['questions-probables', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'boucle-retroaction',
    slug: 'boucle-retroaction',
    nom: 'Boucle de rétroaction offre / usages',
    nomCourt: 'Boucle de rétroaction',
    aliases: ['feedback positif', 'auto-amplification', 'Shift Project'],
    categorie: 'numerique',
    type: 'modele',
    priorite: 2,
    auteur: 'The Shift Project',
    annee: '2025',
    definitionCours: "Boucle de rétroaction positive (qui se renforce continuellement) de l'offre et des usages.",
    explicationSimple:
      "🔎 Plus d'infrastructures et de capacités → plus de services proposés → plus d'usages adoptés → plus de besoins ressentis → plus de demande d'infrastructures → et ainsi de suite.",
    phraseExamen:
      "« Rétroaction positive » ne veut pas dire « bénéfique ». En systémique, une rétroaction positive est une boucle qui s'auto-amplifie — donc explosive et non régulée. C'est le contraire d'un système stable.",
    motsCles: ['systémique', 'auto-amplification', 'utilité créée'],
    sources: ['cours-recordon', 'encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'sobriete-numerique',
    slug: 'sobriete-numerique',
    nom: 'Sobriété numérique',
    aliases: ['mieux avec moins', 'digital sufficiency', 'sobriété'],
    categorie: 'numerique',
    type: 'methode',
    priorite: 1,
    definitionCours:
      "Proposition n°2 : changer la logique de déploiement du numérique. 1. Sobriété : questionner les besoins en première intention. 2. Lucidité : penser les conséquences directes et indirectes.",
    explicationSimple:
      "Sobriété = questionner les besoins EN PREMIÈRE INTENTION. Pas en dernier recours, pas après avoir optimisé : d'abord. Lucidité = penser les conséquences DIRECTES ET INDIRECTES, c'est-à-dire anticiper l'effet rebond.",
    pourquoiExiste:
      "Le processus courant est AMÉLIORER → TRANSFÉRER → QUESTIONNER : on optimise d'abord ce qui existe, on se demande en dernier si c'était utile. Quand on améliore d'abord, on optimise des usages qu'on n'a jamais interrogés, et les gains sont absorbés par la croissance de ces usages.",
    usage: {
      utiliserSi: [
        "la question porte sur l'impact du numérique et sur ce qu'il faut faire",
        "on veut dépasser la seule efficacité technique",
        "on conçoit un service numérique",
      ],
      nePasUtiliserPour: [
        'justifier la suppression d’aides à la compréhension ou d’alternatives accessibles — ce serait une sobriété injuste',
      ],
    },
    commentUtiliser: [
      { titre: 'QUESTIONNER', detail: 'Ce besoin est-il réel ? ce service est-il nécessaire ? peut-on ne pas le faire ?' },
      {
        titre: 'TRANSFÉRER',
        detail: 'Peut-on le satisfaire autrement, avec un moyen moins impactant ? (mutualiser, revenir à un moyen non numérique)',
      },
      { titre: 'AMÉLIORER', detail: 'Si le besoin est confirmé et le moyen choisi, optimiser techniquement (efficacité énergétique, éco-conception).' },
    ],
    phraseExamen:
      "La même structure logique traverse tout le cours : Questionner / Réduire / Acheter moins, puis Transférer / Réutiliser / Acheter mieux, puis Améliorer / Recycler / Utiliser mieux et plus longtemps. Agir sur le besoin AVANT d'agir sur la technique.",
    pieges: [
      {
        erreur: 'Présenter la sobriété comme une privation.',
        pourquoi:
          "« La sobriété numérique ne doit pas être comprise comme une simple réduction de moyens. Elle doit être une sélection raisonnée de ce qui est nécessaire. » Le critère central n'est pas « moins », mais moins de superflu, sans réduire l'essentiel.",
      },
    ],
    chiffres: [{ libelle: 'Mémo', valeur: 'Q-T-A : Questionner → Transférer → Améliorer' }],
    motsCles: ['questionner', 'transférer', 'améliorer', 'lucidité', 'besoin'],
    sources: ['encyclopedie', 'cours-recordon', 'memos', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'sobriete-injuste',
    slug: 'sobriete-injuste',
    nom: 'Sobriété injuste',
    categorie: 'numerique',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Réduire les vidéos inutiles, limiter les flux de données, simplifier l'interface ou restreindre certaines fonctionnalités peut être pertinent ; en revanche, supprimer des aides à la compréhension, des alternatives accessibles ou des fonctions réellement utiles reviendrait à faire une sobriété injuste.",
    explicationSimple: "Une sobriété qui atteint le plancher social en supprimant ce qui rend le service accessible et compréhensible.",
    phraseExamen:
      "« Moins de superflu, sans réduire l'essentiel » : la sobriété fait redescendre sous le plafond écologique, l'accessibilité empêche de tomber sous le plancher social.",
    motsCles: ['plancher social', 'accessibilité', 'essentiel'],
    sources: ['doc-donut', 'encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'rgesn',
    slug: 'rgesn',
    nom: "RGESN — référentiel général d'écoconception des services numériques",
    nomCourt: 'RGESN',
    acronyme: 'RGESN',
    categorie: 'numerique',
    type: 'cadre-legal',
    priorite: 3,
    annee: '2024',
    definitionCours:
      "Le Référentiel général d'écoconception des services numériques (RGESN) 2024 fournit un cadre concret. Il a été publié dans une version 2024 portée notamment par la DINUM, le ministère de la Transition écologique, l'ADEME et l'Institut du Numérique Responsable. Il demande de réduire les impacts des services numériques en agissant sur l'architecture, les contenus, les flux, l'hébergement, les composants et la durée de vie des données.",
    explicationSimple:
      "Six leviers d'écoconception : architecture · contenus · flux · hébergement · composants · durée de vie des données.",
    exemples: [
      {
        texte:
          "Sur la vidéo, il recommande d'ajuster la définition au contexte de visualisation, car une résolution trop élevée augmente à la fois la consommation énergétique du terminal et le volume de données transférées. Cette logique résume la sobriété numérique : ne pas supprimer l'usage utile, mais adapter la qualité technique au besoin réel.",
        source: 'doc-donut',
      },
    ],
    motsCles: ['écoconception', 'six leviers', 'durée de vie des données'],
    sources: ['doc-donut', 'encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'effets-ocde',
    slug: 'effets-ocde',
    nom: 'Effets directs, facilitateurs et systémiques (OCDE)',
    nomCourt: 'Tripartition OCDE',
    aliases: ['effets directs', 'effets facilitateurs', 'enabling effects', 'effets systémiques'],
    categorie: 'numerique',
    type: 'modele',
    priorite: 2,
    auteur: 'OCDE',
    definitionCours:
      "L'OCDE distingue précisément les effets directs des technologies numériques, leurs effets facilitateurs et leurs effets systémiques. Elle souligne que les bénéfices environnementaux indirects du numérique peuvent être contrebalancés par ses impacts propres et par des effets rebond, ce qui rend le bilan net complexe à établir.",
    explicationSimple:
      "🔎 Direct : l'impact propre du numérique (fabrication des terminaux, data centers, réseaux). Facilitateur (enabling) : ce que le numérique permet d'économiser ailleurs (optimisation logistique, télétravail, maintenance prédictive). Systémique : les transformations de comportements et de structures économiques induites — y compris les effets rebond.",
    phraseExamen:
      "L'outil analytique le plus rigoureux pour toute question numérique × durabilité : effet direct (coût du numérique) — effet facilitateur (gain permis) — effet systémique (rebond et transformation des usages) — bilan net.",
    motsCles: ['direct', 'facilitateur', 'systémique', 'bilan net'],
    sources: ['doc-donut', 'encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'quatre-criteres-donut',
    slug: 'quatre-criteres-donut',
    nom: 'Les 4 critères d’un service numérique compatible avec le Donut',
    nomCourt: '4 critères Donut',
    categorie: 'numerique',
    type: 'methode',
    priorite: 2,
    definitionCours:
      "Un service numérique compatible avec le donut doit respecter quatre critères : 1. répondre à un besoin social réel ; 2. rester accessible ; 3. limiter ses impacts sur l'ensemble de son cycle de vie ; 4. éviter d'entretenir artificiellement une hausse des usages sans utilité collective claire.",
    explicationSimple: "Une grille d'évaluation directement applicable à un service numérique dans un cas.",
    exemples: [
      {
        texte:
          "Appliquée à SilverDigital : ① oui (services financiers) ② non (exclusion des seniors) ③ partiellement ④ oui. Verdict : incompatible sur le critère 2.",
        cas: 'silverdigital',
        source: 'doc-donut',
      },
    ],
    phraseExamen:
      "Le donut donne le cadre, la sobriété numérique donne la méthode. La question décisive n'est pas de savoir si le numérique peut être durable en général, mais quels services méritent réellement les ressources qu'ils mobilisent.",
    motsCles: ['besoin social', 'accessible', 'cycle de vie', 'utilité collective'],
    sources: ['doc-donut'],
    provenance: 'cours',
  },
  {
    id: 'economie-attention',
    slug: 'economie-attention',
    nom: "Économie de l'attention",
    aliases: ['attention economy', 'temps de cerveau disponible', 'capitalisme de surveillance'],
    categorie: 'numerique',
    type: 'notion',
    priorite: 2,
    auteur: 'Zuboff & Mouzon (2022) ; Durand (2020)',
    definitionCours:
      "Économie de l'attention, technoféodalisme. « Si c'est gratuit, c'est que c'est vous ~~le produit~~ la matière première ». Dark patterns et exploitation du système dopaminergique. Modèle d'affaire : publicité ciblée.",
    explicationSimple:
      "La correction typographique du cours (« le produit → la matière première ») est volontaire : l'utilisateur n'est pas le produit vendu, il est la matière première transformée en prédictions comportementales, qui sont, elles, le produit vendu.",
    chiffres: [
      { libelle: 'Part de la publicité dans les revenus de Google', valeur: '~75 %', source: 'cours-recordon' },
      { libelle: 'Part de la publicité dans les revenus de Meta', valeur: '~99 %', source: 'cours-recordon' },
    ],
    phraseExamen:
      "Les entreprises vendent à notre insu des prédictions de nos comportements. C'est antinomique de la sobriété numérique, qui questionne le besoin.",
    motsCles: ['dopamine', 'publicité ciblée', 'bulles de filtres', 'prédictions'],
    sources: ['cours-recordon', 'encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'dark-patterns',
    slug: 'dark-patterns',
    nom: 'Dark patterns',
    aliases: ['interfaces trompeuses', 'design manipulateur'],
    categorie: 'numerique',
    type: 'notion',
    priorite: 2,
    auteur: 'Hémont & Rossi (2023) ; Sharpe & Spooner (2025)',
    definitionCours: "Dark patterns et exploitation du système dopaminergique.",
    explicationSimple:
      "Interfaces conçues pour manipuler l'utilisateur : cases pré-cochées, faux compte à rebours, culpabilisation, boucles dopaminergiques.",
    phraseExamen: "À proscrire dans une démarche de sobriété numérique et de RNE — ils s'opposent frontalement au consentement libre et éclairé.",
    motsCles: ['manipulation', 'consentement', 'interface'],
    sources: ['cours-recordon', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'technofeodalisme',
    slug: 'technofeodalisme',
    nom: 'Technoféodalisme',
    aliases: ['plateformes dominantes', 'Durand'],
    categorie: 'numerique',
    type: 'notion',
    priorite: 3,
    auteur: 'Durand (2020)',
    definitionCours: "Rapport de force inégal entre plateformes et utilisateur·trices : économie de l'attention, technoféodalisme.",
    explicationSimple: "Domination de l'économie par quelques plateformes captant la valeur et l'attention.",
    motsCles: ['plateformes', 'captation', 'dépendance'],
    sources: ['cours-recordon', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'cyber-power',
    slug: 'cyber-power',
    nom: 'Cyber power',
    aliases: ['puissance géopolitique du numérique', 'Cattaruzza'],
    categorie: 'numerique',
    type: 'notion',
    priorite: 3,
    auteur: 'Cattaruzza',
    annee: '2021',
    definitionCours:
      "Notion de cyber power, derrière laquelle se cache une « redistribution de la puissance entre acteurs publics et acteurs privés, qui sont en grande partie producteurs et propriétaires des infrastructures, des logiciels et/ou des compétences ».",
    explicationSimple: "Le numérique est un levier de puissance géopolitique, pas seulement un outil.",
    motsCles: ['géopolitique', 'infrastructures', 'acteurs privés'],
    sources: ['cours-recordon'],
    provenance: 'cours',
  },
  {
    id: 'souverainete-numerique',
    slug: 'souverainete-numerique',
    nom: 'Souveraineté numérique',
    aliases: ['dépendance technologique', 'hyperscalers', 'Apertus'],
    categorie: 'numerique',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "🔎 Capacité d'un État ou d'une organisation à maîtriser ses infrastructures, ses données et ses choix technologiques sans dépendance critique à des acteurs étrangers. Le cours cite des cas suisses : le data center au cœur de Lausanne, le boom des centres de données poussé par l'IA, la méfiance du chef de l'armée suisse vis-à-vis de Microsoft, et « Une immense supercherie : comment Microsoft, Google et Amazon font croire qu'ils renforcent la souveraineté numérique européenne et suisse ».",
    explicationSimple:
      "L'exercice du cours l'illustre : imaginer le système informatique d'une PME face à une coupure de service des USA sur décision présidentielle et à une rupture des chaînes d'approvisionnement asiatiques.",
    phraseExamen:
      "Réponse type : logiciels libres et hébergement souverain, réversibilité et portabilité des données, redondance des fournisseurs, allongement de la durée de vie du parc, matériel reconditionné et réparable, stock de pièces critiques, réduction du besoin (sobriété), compétences internes maintenues (autonomie cognitive).",
    motsCles: ['dépendance', 'terres rares', 'hébergement', 'résilience'],
    sources: ['cours-recordon', 'encyclopedie'],
    provenance: 'interpretation',
  },
  {
    id: 'autonomie-cognitive',
    slug: 'autonomie-cognitive',
    nom: 'Autonomie cognitive',
    categorie: 'numerique',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Bonnes pratiques individuelles, autonomie cognitive. Tariq Krim : « À l'ère de l'IA, réfléchir est un acte salutaire. C'est pour cela que chaque semaine j'écris avant tout pour moi-même. Car écrire c'est avant tout réfléchir. » → Écrire des idées, faire des schémas, relier des concepts, construire des suites logiques d'arguments… sans LLM, en partant d'une page blanche.",
    explicationSimple: "Capacité à penser par soi-même sans délégation systématique à un outil.",
    phraseExamen:
      "C'est une notion stratégique : une organisation qui perd ses capacités d'analyse propre devient dépendante de ses fournisseurs d'outils — c'est un risque de compétence au sens du diagnostic interne.",
    motsCles: ['LLM', 'délégation', 'compétence', 'dépendance'],
    sources: ['cours-recordon', 'encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'besoins-fondamentaux',
    slug: 'besoins-fondamentaux',
    nom: 'Besoins humains fondamentaux et satisfiers',
    nomCourt: 'Besoins / satisfiers',
    aliases: ['Max-Neef', 'Doyal Gough', 'Nussbaum', 'capabilités', 'satisfier'],
    categorie: 'numerique',
    type: 'modele',
    priorite: 2,
    auteur: 'Max-Neef (1989, 1992) ; Doyal & Gough (1991-2015) ; Nussbaum (2000, 2006)',
    definitionCours:
      "Max-Neef : matrice des besoins (9×4), tels que subsistance, affection, loisirs ; notion de satisfiers — « moyens de satisfaire ces besoins fondamentaux, qui varient dans le temps, en fonction de la culture ». Doyal & Gough : niveau 1 (survie physique + autonomie individuelle), niveau 2 (caractéristiques universelles de satisfaction des besoins) ; trois besoins fondamentaux : appartenir/participer, intégrité et santé physique, autonomie et capacité de raisonnement. Nussbaum : capabilités, soit la liberté réelle de choisir et d'agir.",
    explicationSimple:
      "BESOIN : stable, universel, limité en nombre (communiquer, se distraire). SATISFIER : variable, culturel, infiniment extensible (smartphone dernier cri, streaming 4K).",
    phraseExamen:
      "La sobriété ne consiste pas à réduire les besoins mais à choisir des satisfiers moins coûteux. C'est ce qui permet de répondre à l'objection « la sobriété c'est la privation » : non, c'est la substitution de satisfiers.",
    exemples: [
      {
        texte:
          "Nussbaum appliqué à l'accessibilité : avoir une application n'est pas avoir la capacité de l'utiliser. Marie-Louise P., 76 ans, a accès au chatbot mais n'a pas la capabilité d'en tirer parti.",
        cas: 'silverdigital',
        source: 'cours-recordon',
      },
    ],
    motsCles: ['besoin', 'satisfier', 'capabilité', 'sobriété désirable'],
    sources: ['cours-recordon', 'encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'oris',
    slug: 'oris',
    nom: 'Oris',
    categorie: 'numerique',
    type: 'outil',
    priorite: 3,
    definitionCours:
      "Extension Google Chrome développée par un élève en échange à la HEG, estimant en temps réel l'empreinte carbone liée à l'usage de plateformes (Google, ChatGPT, YouTube, Netflix), en affichant les volumes de données transférées, les requêtes liées à l'IA et une estimation du CO₂ associé.",
    explicationSimple:
      "Son intérêt : rendre visible un phénomène abstrait — l'impact du numérique repose sur des infrastructures éloignées et invisibles.",
    motsCles: ['mesure', 'visibilité', 'comportement'],
    sources: ['doc-donut'],
    provenance: 'cours',
  },
  {
    id: 'perimetre-numerique',
    slug: 'perimetre-numerique',
    nom: 'Périmètre du numérique',
    categorie: 'numerique',
    type: 'notion',
    priorite: 3,
    auteur: 'Roussilhe',
    annee: '2025',
    definitionCours:
      "Périmètre du numérique. À considérer également : suites de logiciels (bureautique, design, etc.) — systèmes d'IA ?",
    explicationSimple:
      "Quand on mesure « l'impact du numérique », que compte-t-on ? Terminaux ? réseaux ? data centers ? logiciels ? IA ? La frontière change complètement le résultat.",
    phraseExamen:
      "Toujours définir le périmètre avant de citer un chiffre — c'est aussi la première étape du diagnostic stratégique.",
    motsCles: ['frontière', 'mesure', 'comparabilité'],
    sources: ['cours-recordon'],
    provenance: 'cours',
  },
  {
    id: 'debat-numerique-durabilite',
    slug: 'debat-numerique-durabilite',
    nom: 'Les deux positions du débat numérique × durabilité',
    nomCourt: 'Les deux positions',
    categorie: 'numerique',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "La première affirme que le numérique peut rester un levier majeur de durabilité, à condition d'être mieux piloté, mieux mesuré et mieux conçu — l'OCDE recommande d'utiliser les technologies numériques pour améliorer la performance environnementale tout en réduisant leur empreinte. La seconde soutient que l'efficacité seule ne suffira pas si le modèle économique reste fondé sur l'expansion continue des usages — les données de l'IEA, de l'Arcep et de l'ADEME montrent une hausse structurelle. Une stratégie crédible suppose donc des arbitrages : moins de surqualité, moins de stockage inutile, moins de fonctionnalités gadgets, moins de dépendance à des infrastructures lourdes lorsque le gain social est faible. La position la plus solide n'est ni le techno-solutionnisme, ni la réduction indistincte.",
    explicationSimple: "Le modèle de réponse nuancée attendu par le cours.",
    phraseExamen:
      "La difficulté centrale ne vient pas d'abord de la technique, mais du modèle économique. Une grande partie de l'économie numérique est structurée par l'augmentation du nombre d'utilisateurs, du temps passé, des interactions et des volumes de données. Or cette logique est en tension directe avec la sobriété.",
    motsCles: ['techno-solutionnisme', 'arbitrage', 'modèle économique', 'nuance'],
    sources: ['doc-donut', 'encyclopedie'],
    provenance: 'cours',
  },
]
