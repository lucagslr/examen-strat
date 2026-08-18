import type { Notion } from '../types'

/** PARTIE III — CHOIX : SAF, positionnement et options (encyclopédie §15 à §16) */
export const notionsChoix: Notion[] = [
  {
    id: 'saf',
    slug: 'saf',
    nom: 'SAF — évaluer une stratégie',
    nomCourt: 'SAF',
    acronyme: 'SAF',
    aliases: ['souhaitabilité acceptabilité faisabilité', 'suitability acceptability feasibility', 'test SAF'],
    categorie: 'choix',
    type: 'outil',
    priorite: 1,
    definitionCours:
      "Avant de se lancer dans la mise en œuvre d'une stratégie, il s'agit de l'évaluer. En effet, bien qu'une évaluation après coup (à échéance du plan stratégique, par exemple 5 ans) soit plus aisée, car les résultats économiques sont mesurables et visibles, il est bien tard pour opérer des corrections. Pour éviter ce type de situation, un test de la stratégie est requis, l'approche SAF pour souhaitabilité (suitability), acceptabilité (acceptability) et faisabilité (feasibility).",
    explicationSimple:
      "Un test avant décollage. Il vaut mieux découvrir un problème sur le papier que cinq ans plus tard.",
    pourquoiExiste:
      "Une évaluation après coup est plus facile à faire, mais elle arrive trop tard pour corriger quoi que ce soit.",
    objectif: "Filtrer une ou plusieurs options stratégiques avant décision.",
    usage: {
      utiliserSi: [
        "on doit trancher entre deux ou trois options",
        "la question dit « recommandez », « proposez », « justifiez »",
        "on veut vérifier qu'une bonne idée est aussi acceptable et réalisable",
      ],
      nePasUtiliserPour: [
        "faire le diagnostic — le SAF vient après",
        "décrire un business model",
        "tester une seule option : le SAF prend tout son sens dans la comparaison",
      ],
    },
    commentUtiliser: [
      {
        titre: 'S — Souhaitabilité (outil : SWOT)',
        detail:
          "« La stratégie proposée prend-elle en compte les opportunités clés et les menaces auxquelles une organisation fait face ? » Correspondance entre l'environnement de l'entreprise et ses ressources.",
      },
      {
        titre: 'A — Acceptabilité (outils : analyse des parties prenantes, analyse des risques)',
        detail:
          "Attractivité de la stratégie auprès des parties prenantes, en prenant en compte leurs intérêts et pouvoirs d'influence : le retour attendu est-il acceptable ? le niveau de risque est-il acceptable ? les parties prenantes vont-elles s'opposer ?",
      },
      {
        titre: 'F — Faisabilité (outil : PESTEL)',
        detail:
          "Examen des contraintes internes et externes : dispose-t-on des ressources financières ou peut-on les acquérir ? les ressources humaines et les savoir-faire existent-ils ? y a-t-il des contraintes exogènes, notamment légales ?",
      },
      { titre: 'Conclure', detail: 'Le SAF sert à trancher, pas à décrire.' },
    ],
    exemples: [
      {
        texte:
          "SilverDigital, option « maintenir et professionnaliser un canal humain prioritaire » : souhaitabilité élevée (répond à la menace −12 % et exploite l'opportunité EAA) ; acceptabilité moyenne (les actionnaires sont réticents car l'option dégrade le −20 % de coûts de support — c'est là que se joue la décision) ; faisabilité élevée (rien d'insurmontable techniquement, et le droit pousse en ce sens).",
        cas: 'silverdigital',
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "On évalue avant, parce qu'après, c'est mesurable mais trop tard pour corriger.",
    pieges: [
      {
        erreur: 'Confondre souhaitabilité et acceptabilité.',
        pourquoi:
          "La souhaitabilité est la pertinence au regard du diagnostic ; l'acceptabilité est l'adhésion des acteurs. Une stratégie peut être parfaitement pertinente et refusée par les syndicats.",
      },
      {
        erreur: "Réduire la faisabilité à l'argent.",
        pourquoi: 'Le cours cite trois dimensions : financière, humaine/savoir-faire, légale.',
      },
      { erreur: 'Oublier de conclure.', pourquoi: 'Le SAF sert à trancher, pas à décrire.' },
      { erreur: "Ne tester qu'une seule option.", pourquoi: 'Le SAF prend tout son sens dans la comparaison de 2 ou 3 options.' },
    ],
    limites: [
      "🔎 Complément d'interprétation (à formuler comme ta réflexion, jamais comme du cours) : la faisabilité est définie comme portant sur des contraintes « internes et externes ». Les deux premières questions (ressources financières, RH et savoir-faire) relèvent de fait du diagnostic interne, même si le cours ne cite que le PESTEL comme outil. Ne « corrige » pas le cours à l'examen : cite l'association du cours, puis ajoute la nuance.",
    ],
    motsCles: ['évaluation', 'test', 'trancher', 'options'],
    sources: ['encyclopedie', 'glossaire', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'souhaitabilite',
    slug: 'souhaitabilite',
    nom: 'Souhaitabilité (Suitability)',
    nomCourt: 'Souhaitabilité',
    aliases: ['suitability', 'pertinence'],
    categorie: 'choix',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Cette partie du test se focalise sur la correspondance entre l'environnement de l'entreprise et ses ressources, en posant la question suivante : la stratégie proposée prend-elle en compte les opportunités clés et les menaces auxquelles une organisation fait face ? Outil : le SWOT.",
    explicationSimple: "Est-ce la bonne stratégie compte tenu de la situation ? Répond-elle au diagnostic ?",
    motsCles: ['SWOT', 'pertinence', 'opportunités', 'menaces'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'acceptabilite',
    slug: 'acceptabilite',
    nom: 'Acceptabilité (Acceptability)',
    nomCourt: 'Acceptabilité',
    aliases: ['acceptability', 'adhésion'],
    categorie: 'choix',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Cette partie du test porte sur l'attractivité de la stratégie proposée auprès des parties prenantes, en prenant en compte leurs intérêts et pouvoirs d'influence : le retour attendu est-il acceptable ? le niveau de risque est-il acceptable ? les parties prenantes vont-elles s'opposer à la stratégie ? Outils : analyse des parties-prenantes, analyse des risques.",
    explicationSimple: "Les acteurs vont-ils l'accepter, et le couple rendement/risque est-il tolérable ?",
    phraseExamen:
      "Une stratégie souhaitable et faisable mais inacceptable pour une partie prenante puissante et concernée échouera.",
    motsCles: ['parties prenantes', 'risque', 'retour', 'opposition'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'faisabilite',
    slug: 'faisabilite',
    nom: 'Faisabilité (Feasibility)',
    nomCourt: 'Faisabilité',
    aliases: ['feasibility', 'moyens'],
    categorie: 'choix',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Cette partie du test s'intéresse à l'examen des contraintes internes et externes potentielles qui pourraient avoir un impact sur la réalisation de la stratégie proposée : dispose-t-on des ressources financières pour conduire la stratégie ou peut-on les acquérir ? les ressources humaines et les savoir-faire existent-ils ou peuvent-ils être acquis ? y a-t-il des contraintes exogènes, notamment légales, limitant les possibilités de conduire la stratégie proposée en pratique ? Outil : PESTEL.",
    explicationSimple: "En a-t-on les moyens, et le droit ?",
    motsCles: ['ressources', 'savoir-faire', 'contraintes légales', 'PESTEL'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'options-strategiques',
    slug: 'options-strategiques',
    nom: 'Options et positionnement stratégiques',
    nomCourt: 'Options stratégiques',
    aliases: ['positionnement', 'orientations stratégiques'],
    categorie: 'choix',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Choix stratégique : choisissez une orientation — différenciation (leader mondial en durabilité), focalisation (ex : énergie verte), innovation durable. Le corrigé TP02B mentionne également la logique de domination par les coûts : « une concurrence très forte qui nécessite une réduction des coûts par la taille et impose une forte différenciation des acteurs ».",
    explicationSimple:
      "Ce que l'entreprise décide de faire, une fois le diagnostic posé. Cinq voies dans le vocabulaire du cours : domination par les coûts, différenciation, focalisation, innovation durable, océan bleu.",
    limites: [
      "⚠️ Les trois stratégies génériques de Porter (domination par les coûts / différenciation / focalisation) ne sont pas présentées comme un modèle formalisé dans les supports de ce cours. Utilise le vocabulaire du cours (différenciation / focalisation / innovation durable) plutôt qu'une présentation académique des « trois stratégies génériques ».",
    ],
    phraseExamen:
      "Ressources et compétences déterminent quelles options sont faisables ; la chaîne de valeur détermine où l'avantage peut être construit ; Porter détermine si le terrain est un océan rouge ou bleu ; le PESTEL détermine quelles options sont légales et opportunes.",
    motsCles: ['différenciation', 'focalisation', 'coûts', 'innovation durable'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'domination-couts',
    slug: 'domination-couts',
    nom: 'Domination par les coûts',
    nomCourt: 'Domination par les coûts',
    aliases: ['cost leadership', 'réduction des coûts par la taille'],
    categorie: 'choix',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "Être le producteur au coût le plus bas du secteur. 📘 Corrigé TP02B : « réduction des coûts par la taille » ; 📘 Cours 2 : « geler ou réduire les dépenses ».",
    explicationSimple: "Gagner en étant le moins cher — ce qui exige du volume et des économies d'échelle.",
    motsCles: ['volume', 'échelle', 'externalisation'],
    sources: ['encyclopedie', 'corrige-tp02b'],
    provenance: 'cours',
  },
  {
    id: 'option-differenciation',
    slug: 'option-differenciation',
    nom: 'Différenciation (option stratégique)',
    nomCourt: 'Option différenciation',
    aliases: ['leader mondial en durabilité'],
    categorie: 'choix',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Offrir une valeur perçue supérieure justifiant un prix supérieur. 📘 Cours 4, slide 39 : « différenciation (leader mondial en durabilité) » ; 📘 corrigé TP02B : packaging, communication, image.",
    explicationSimple: "Gagner en étant différent, pas en étant moins cher. Exige des ressources non imitables.",
    motsCles: ['valeur perçue', 'prix premium', 'réputation'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'focalisation',
    slug: 'focalisation',
    nom: 'Focalisation (niche)',
    nomCourt: 'Focalisation',
    aliases: ['niche', 'concentration'],
    categorie: 'choix',
    type: 'notion',
    priorite: 3,
    definitionCours: "Concentrer l'effort sur un segment étroit. 📘 Cours 4, slide 39 : « focalisation (ex : énergie verte) ».",
    explicationSimple: "Servir très bien un segment étroit plutôt que moyennement tout le monde.",
    motsCles: ['segment étroit', 'spécialisation'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'innovation-durable',
    slug: 'innovation-durable',
    nom: 'Innovation durable',
    categorie: 'choix',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Faire de la durabilité le moteur de la création de valeur. 📘 Cours 4, slide 39 ; 📘 Cours BM slide 20 : « La Durabilité devient un levier innovation-valeur ».",
    explicationSimple: "La contrainte écologique devient le moteur de l'offre, pas un coût subi.",
    phraseExamen:
      "À mesure que la réglementation avance (EAA, LHand, AI Act, exigences ESG), ce qui était une différenciation devient une condition d'accès au marché. La différenciation durable doit donc se déplacer en permanence.",
    motsCles: ['éco-conception', 'circularité', 'nouveaux revenus'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
]
