import type { Notion } from '../types'

/** PARTIE IV — CIRCULARITÉ ET ACHATS IT RESPONSABLES (encyclopédie §24 à §25) */
export const notionsCircularite: Notion[] = [
  {
    id: 'economie-circulaire',
    slug: 'economie-circulaire',
    nom: 'Économie circulaire',
    aliases: ['circularité', 'boucles', 'circular economy'],
    categorie: 'circularite',
    type: 'modele',
    priorite: 1,
    definitionCours:
      "L'économie circulaire des appareils numériques peut s'entendre comme l'extension de la vie utile des appareils numériques par le biais d'une amélioration de la fabrication et de la réutilisation, une minimisation du besoin de nouveaux appareils et des déchets électroniques. Tout cela dépend des efforts de réduction et de réutilisation, puis enfin seulement de recyclage.",
    explicationSimple:
      "Les mêmes étapes que l'économie linéaire, mais enroulées en spirales avec des boucles de retour de tailles différentes : partage, réutilisation, réparation, collecte et recyclage. Cinq leviers listés par le cours : écoconception, partage, réutilisation, réparation, retraitement.",
    commentUtiliser: [
      {
        titre: 'Les boucles ont des tailles différentes, et ce n’est pas décoratif',
        detail:
          'Plus la boucle est courte (partage, réutilisation), plus elle est proche de l’usage, plus elle préserve la valeur du produit et consomme peu d’énergie. Plus elle est longue (collecte et recyclage), plus elle détruit la valeur ajoutée et coûte en énergie.',
      },
      {
        titre: 'L’écoconception est placée à part, en tête',
        detail:
          'Elle n’est pas une boucle : elle agit à la source pour rendre toutes les boucles possibles (réparabilité, modularité, matériaux séparables).',
      },
      {
        titre: 'La circularité intègre le renouvelable et le biologique',
        detail: 'Ressources renouvelables, compostage et méthanisation : un second cycle, biologique, à côté du cycle technique.',
      },
    ],
    phraseExamen:
      "L'économie linéaire se termine par un mot brutal : « incinération et mise en décharge ». Le produit devient un déchet définitif. La circularité supprime cette fin.",
    pieges: [
      {
        erreur: "Croire qu'une entreprise « fait de l'économie circulaire » parce qu'elle recycle.",
        pourquoi: "Le recyclage est le dernier maillon. Une entreprise qui recycle beaucoup mais produit toujours plus reste dans une logique linéaire.",
      },
    ],
    motsCles: ['boucles', 'réemploi', 'réparation', 'ODD 12'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'economie-lineaire',
    slug: 'economie-lineaire',
    nom: 'Économie linéaire',
    categorie: 'circularite',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Une flèche droite, cinq étapes, une fin : traitement des matières premières → conception et production → distribution et transport → consommation et utilisation → incinération et mise en décharge.",
    explicationSimple: "Extraire, produire, distribuer, consommer, jeter.",
    motsCles: ['extraire', 'jeter', 'décharge'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'trois-r',
    slug: 'trois-r',
    nom: 'Les 3R — Réduire, Réutiliser, Recycler',
    nomCourt: '3R',
    acronyme: '3R',
    aliases: ['réduire réutiliser recycler', 'hiérarchie des déchets'],
    categorie: 'circularite',
    type: 'modele',
    priorite: 1,
    definitionCours:
      "① RÉDUIRE : « réduction » et « minimisation ». Moins de déchets sont produits car le gaspillage est évité. Il s'agit notamment de réparer des produits (à domicile ou dans une boutique de réparation), de limiter les emballages et de produire des emballages réutilisables, d'élaborer des politiques de promotion de la réduction des déchets. Chaque fois que nous faisons réparer un appareil numérique, plutôt que d'en acheter un nouveau, nous réduisons les déchets. ② RÉUTILISER : la réutilisation d'un objet avec la même fonction que celle pour laquelle il a initialement été produit, mais par des personnes autres que les propriétaires initiaux. C'est dans cette catégorie qu'entrent tous les sites web et marchés de vente d'occasion et de troc. Les appareils numériques ont souvent besoin d'être reconditionnés. ③ RECYCLER : sont ici inclus le démontage, la fragmentation, le désassemblage ou la séparation des éléments d'un produit jeté, et la conversion en des matériaux pour un autre produit ou processus.",
    explicationSimple:
      "Ce ne sont pas trois options équivalentes, c'est une hiérarchie. Réduire = 100 % d'impact évité (le produit n'est jamais fabriqué). Réutiliser = le produit garde sa forme et sa valeur. Recycler = le produit est détruit, on ne récupère que la matière.",
    pourquoiExiste:
      "Trois arguments justifient l'ordre. 1) Le cours le dit textuellement : « puis enfin seulement de recyclage ». 2) L'ODD 12 énonce « la prévention, la réduction, le recyclage et la réutilisation ». 3) La logique de conservation de la valeur.",
    phraseExamen:
      "Les 3R ne sont pas trois options équivalentes, c'est une hiérarchie. Le meilleur déchet est celui qu'on ne produit pas ; le deuxième meilleur est celui qui reste un produit ; le recyclage n'intervient qu'en dernier recours parce qu'il détruit toute la valeur ajoutée de la fabrication pour ne récupérer que la matière, et à un coût énergétique élevé.",
    pieges: [
      {
        erreur: 'Classer la réparation dans « Réutiliser ».',
        pourquoi:
          "Le cours classe la réparation dans « Réduire » : réparer, c'est éviter d'acheter du neuf, donc éviter de produire un déchet.",
        test: 'L’objet change-t-il de propriétaire ? Non, on le répare → Réduire. Oui, occasion/troc → Réutiliser.',
      },
      { erreur: "Inverser l'ordre des 3R.", pourquoi: 'Recycler n’est pas prioritaire — c’est un dernier recours.' },
    ],
    chiffres: [{ libelle: 'Ordre', valeur: 'Réduire > Réutiliser > Recycler' }],
    motsCles: ['hiérarchie', 'prévention', 'valeur ajoutée', 'ODD 12'],
    sources: ['encyclopedie', 'memos', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'eco-conception',
    slug: 'eco-conception',
    nom: 'Éco-conception',
    aliases: ['écoconception', 'design durable', 'eco-design'],
    categorie: 'circularite',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Levier de l'économie circulaire placé en tête du visuel OFEV. 📘 Cours BM : « éco-conception, impact social » comme levier innovation-valeur.",
    explicationSimple:
      "Concevoir un produit ou service en minimisant son impact sur tout son cycle de vie — matières, production, usage, fin de vie.",
    phraseExamen:
      "L'écoconception n'est pas une boucle : elle agit à la source, au moment de la conception, pour rendre toutes les boucles possibles.",
    motsCles: ['cycle de vie', 'réparabilité', 'modularité', 'à la source'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'reconditionnement',
    slug: 'reconditionnement',
    nom: 'Reconditionnement',
    aliases: ['refurbished', 'remise à neuf', 'circular computing'],
    categorie: 'circularite',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "Vérifier la fonctionnalité de l'appareil, faire l'inventaire des éléments matériels, nettoyer les composants et données et réaliser les éventuelles réparations nécessaires. Le cours nomme aussi cette pratique circular computing.",
    explicationSimple:
      "Note l'exigence de nettoyage des données : c'est le pont entre circularité et protection des données.",
    motsCles: ['occasion', 'données', 'réparation', 'inventaire'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'deee',
    slug: 'deee',
    nom: 'Déchets électroniques (DEEE)',
    nomCourt: 'DEEE',
    acronyme: 'DEEE',
    aliases: ['déchets électriques et électroniques', 'e-waste'],
    categorie: 'circularite',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "« Minimisation du besoin de nouveaux appareils et des déchets électroniques ». Guide RNE : « recycler les déchets électroniques dans les filières adéquates ».",
    explicationSimple: "Les terminaux en fin de vie. L'obsolescence rapide en aggrave le volume.",
    motsCles: ['fin de vie', 'filières', 'obsolescence'],
    sources: ['encyclopedie', 'guide-rne', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'cycle-de-vie',
    slug: 'cycle-de-vie',
    nom: 'Cycle de vie',
    aliases: ['ACV', 'analyse du cycle de vie', 'life cycle'],
    categorie: 'circularite',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "« Tout au long du cycle de vie informatique » (Cours 4). Charte INR : « prendre en compte le Cycle de Vie complet des équipements et logiciels ».",
    explicationSimple: "De l'extraction des matières à la fin de vie — le périmètre complet d'évaluation d'un impact.",
    motsCles: ['extraction', 'usage', 'fin de vie', 'périmètre'],
    sources: ['encyclopedie', 'charte-inr'],
    provenance: 'cours',
  },
  {
    id: 'achats-it-responsables',
    slug: 'achats-it-responsables',
    nom: 'Achats IT responsables',
    nomCourt: 'Achats IT responsables',
    aliases: ['achats durables', 'achats responsables', 'commande publique responsable'],
    categorie: 'circularite',
    type: 'methode',
    priorite: 2,
    definitionCours:
      "Le cycle des achats durables en 3 temps : 1. Acheter moins (avant l'appel d'offres) // ODD ; 2. Acheter mieux (appel d'offres) ; 3. Utiliser plus longtemps, utiliser mieux (après l'appel d'offres). Processus détaillé : Besoin → Analyses (risques, marché) → Critères (entreprises, produits) → Preuves (labels, certifications) → Utilisation (partage, réparation) → Fin de vie (réutilisation, recyclage), la fin de vie relançant l'analyse du besoin.",
    explicationSimple:
      "Le visuel est un cercle fermé : « utiliser mieux » ramène à « acheter moins ». Ce n'est pas une séquence linéaire mais une boucle.",
    commentUtiliser: [
      {
        titre: 'Tout commence par le BESOIN, pas par le produit',
        detail: 'La première boîte n’est pas « choisir un fournisseur » mais « besoin → analyse ». C’est la logique de sobriété.',
      },
      {
        titre: "L'appel d'offres n'est qu'une partie du processus",
        detail: 'Le levier le plus puissant — la remise en cause du besoin — se situe avant ; la durée de vie se joue après.',
      },
      {
        titre: 'Analyses → Critères → Preuves',
        detail: 'On analyse les risques, on en déduit des critères, on exige des preuves. Sans preuve, un critère est déclaratif.',
      },
    ],
    exemples: [
      {
        texte:
          "Acheter moins en IT : réduire le nombre de produits achetés, acheter du matériel reconditionné, reconditionner son matériel. Questions à poser : une utilisation multiple des appareils est-elle possible au sein de l'organisation ? est-il possible d'utiliser des appareils d'occasion ou remis à neuf ?",
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "La même structure logique traverse tout le cours : Questionner / Réduire / Acheter moins — agir sur le besoin AVANT d'agir sur la technique.",
    motsCles: ['acheter moins', 'acheter mieux', 'utiliser mieux', 'appel d’offres', 'boucle'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'sept-principes-achats',
    slug: 'sept-principes-achats',
    nom: 'Les 7 principes des achats responsables',
    nomCourt: '7 principes achats',
    categorie: 'circularite',
    type: 'methode',
    priorite: 2,
    definitionCours:
      "1. Minimiser les impacts environnementaux/sociaux. 2. Les coûts du cycle de vie (prix d'achat, coût de fonctionnement, coût de l'élimination). 3. Labels, certifications. 4. Fournisseurs engagés. 5. Durée de vie, économie circulaire. 6. Emballages. 7. Transports.",
    explicationSimple: "Sept critères à appliquer à toute décision d'achat.",
    phraseExamen:
      "Le principe n°2 est le plus stratégique : il déplace la décision d'achat du prix affiché vers le coût complet. C'est l'argument économique de la durabilité — celui qui répond à l'objection « c'est trop cher ».",
    motsCles: ['critères', 'labels', 'emballages', 'transports'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'cout-cycle-de-vie',
    slug: 'cout-cycle-de-vie',
    nom: 'Coût du cycle de vie',
    aliases: ['TCO', 'coût total de possession', 'life cycle cost'],
    categorie: 'circularite',
    type: 'notion',
    priorite: 2,
    definitionCours: "Prix d'achat + coût de fonctionnement + coût de l'élimination.",
    explicationSimple:
      "Un équipement moins cher à l'achat mais énergivore, non réparable et coûteux à éliminer est plus cher en coût de cycle de vie.",
    variantes: [
      {
        sujet: 'TCO',
        formulations: [
          { libelle: '« coûts du cycle de vie »', ou: 'formulation du cours' },
          { libelle: '« critères TCO »', ou: 'le cours parle du label TCO Certified' },
          { libelle: '« coût total de possession »', ou: "⚠️ n'apparaît pas tel quel dans les supports" },
        ],
        explication: '📚 Les deux notions se recouvrent largement, mais restitue la formulation du cours.',
      },
    ],
    motsCles: ['achat', 'fonctionnement', 'élimination'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'labels-environnementaux',
    slug: 'labels-environnementaux',
    nom: 'Labels et certifications environnementaux',
    nomCourt: 'Labels',
    aliases: ['TCO Certified', 'Ecolabel', 'Energy Star', 'EPEAT', 'Blauer Engel', 'Ange bleu'],
    categorie: 'circularite',
    type: 'cadre-legal',
    priorite: 2,
    definitionCours:
      "Labels et certifications environnementaux et sociaux cités : TCO Certified, Ecolabel européen, Energy Star, EPEAT, Der Blauer Engel (l'Ange bleu). Labels ISO : ISO 14'024 : 2018, ISO 14'021 : 2016, ISO 14'025. Les 7 critères TCO : fabrication socialement responsable ; fabrication respectueuse de l'environnement ; santé et sécurité des utilisateurs ; performance du produit ; extension de la durée de vie ; réduction des substances dangereuses ; récupération des matériaux.",
    explicationSimple:
      "Les labels réduisent l'asymétrie d'information et crédibilisent la promesse. 📚 Les trois normes ISO couvrent les trois types de déclarations environnementales : type I (écolabels certifiés par tierce partie), type II (auto-déclarations), type III (déclarations chiffrées de produit).",
    phraseExamen:
      "Les labels réduisent l'asymétrie d'information et crédibilisent la promesse → différenciation. Risque : greenwashing si l'affichage dépasse la réalité.",
    motsCles: ['certification', 'preuve', 'asymétrie d’information'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'electronics-watch',
    slug: 'electronics-watch',
    nom: 'Electronics Watch et la transparence de la production',
    nomCourt: 'Electronics Watch',
    aliases: ['monitoring indépendant', 'traçabilité sociale'],
    categorie: 'circularite',
    type: 'cadre-legal',
    priorite: 3,
    definitionCours:
      "Comment s'assurer de la transparence de la production du matériel ? Les ONG sur le terrain ; Electronics Watch, organisation indépendante de monitoring réunissant acheteurs publics, organisations de la société civile des régions de production d'électronique, et experts en droits humains et des chaînes d'approvisionnement mondiales.",
    explicationSimple: "Une réponse non technologique au problème de la traçabilité éthique.",
    phraseExamen:
      "La blockchain garantit l'intégrité de la donnée saisie, elle ne garantit pas la véracité de la saisie initiale. Le monitoring terrain d'Electronics Watch adresse précisément ce point aveugle. Les deux sont complémentaires.",
    motsCles: ['monitoring', 'droits humains', 'chaîne d’approvisionnement'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'pap-swiss',
    slug: 'pap-swiss',
    nom: 'PAP.swiss — outils pour des achats responsables',
    nomCourt: 'PAP.swiss',
    categorie: 'circularite',
    type: 'outil',
    priorite: 3,
    definitionCours:
      "PAP : www.pap.swiss — matrice des pertinences, coûts du cycle de vie, transport, bases juridiques, procédures d'achat, toolbox achats responsables. Le cours cite aussi la matrice de pertinence de l'OFEV sur les moyens de télécommunication et informatique.",
    explicationSimple: "La boîte à outils suisse officielle des achats responsables.",
    motsCles: ['OFEV', 'matrice de pertinence', 'toolbox'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'obsolescence',
    slug: 'obsolescence',
    nom: 'Obsolescence',
    aliases: ['obsolescence programmée', 'renouvellement'],
    categorie: 'circularite',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "Vieillissement (réel ou perçu) d'un produit poussant à le remplacer. L'obsolescence rapide des terminaux aggrave les DEEE et l'empreinte du numérique ; combattue par la durabilité/réparabilité (3R).",
    explicationSimple:
      "Le levier le plus efficace contre l'obsolescence est l'allongement de la durée de vie, cité comme bonne pratique par le Guide RNE.",
    motsCles: ['renouvellement', 'durée de vie', 'DEEE'],
    sources: ['glossaire', 'guide-rne'],
    provenance: 'cours',
  },
]
