import type { Notion } from '../types'

/** PARTIE III — BUSINESS MODEL (encyclopédie §17 à §20) */
export const notionsBusinessModel: Notion[] = [
  {
    id: 'business-model',
    slug: 'business-model',
    nom: 'Business Model (modèle économique)',
    nomCourt: 'Business Model',
    aliases: ['modèle économique', 'BM', 'modèle d’affaires'],
    categorie: 'business-model',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Le business model désigne l'ensemble des modalités par lesquelles une organisation crée de la valeur et la répartit. Ces modalités concernent : 1. la proposition de valeur faite aux clients ; 2. les ressources et les compétences mises en œuvre dans l'offre (l'architecture de valeur) ; 3. le profit dégagé par la confrontation entre les revenus dégagés par l'activité et les coûts supportés par l'offre (l'équation de profit).",
    explicationSimple:
      "La stratégie dit où aller. Le Business Model dit comment l'entreprise fonctionne concrètement pour créer et capter de la valeur.",
    objectif: "Traduire un choix stratégique en architecture opérationnelle et économique.",
    commentUtiliser: [
      { titre: 'Proposition de valeur', detail: 'Ce qu’on promet, à qui.' },
      { titre: 'Architecture de valeur', detail: 'Comment on le produit et le délivre.' },
      { titre: 'Équation de profit', detail: 'Ce qu’il en reste.' },
    ],
    phraseExamen:
      "La stratégie choisit le combat, le business model est la machine qui le mène. Un changement de stratégie impose souvent de reconfigurer le business model.",
    pieges: [
      {
        erreur: 'Confondre stratégie et business model.',
        pourquoi:
          "La stratégie choisit le périmètre, alloue les ressources et se positionne sur 3 à 10 ans, en regardant l'extérieur autant que l'intérieur. Le BM décrit le fonctionnement courant, principalement interne et relation client.",
      },
    ],
    variantes: [
      {
        sujet: 'Deuxième formulation du cours',
        formulations: [
          {
            libelle: "« l'ensemble des modalités par lesquelles une organisation crée de la valeur et la répartit »",
            ou: 'Cours BM, slide 2',
          },
          {
            libelle: "« un business model décrit les choix d'une entreprise pour générer des revenus »",
            ou: 'Cours BM, slide 3',
          },
        ],
        explication:
          "Deux formulations complémentaires de la même chose. La seconde insiste sur les ressources et compétences mobilisées, l'offre faite aux clients et l'organisation interne.",
      },
      {
        sujet: 'Création / délivrance / capture de valeur',
        formulations: [
          { libelle: '« crée de la valeur et la répartit »', ou: 'Cours BM, slide 2' },
          { libelle: '« décrit la production et la délivrance »', ou: 'Cours BM, slide 6' },
          { libelle: '« capture de valeur »', ou: '📚 terminologie standard, absente des supports' },
        ],
        explication:
          "Le cours emploie « production et délivrance » et « crée de la valeur et la répartit ». Le mot « capture » est un complément terminologique standard.",
      },
    ],
    motsCles: ['créer', 'délivrer', 'capter', 'répartir', 'valeur'],
    sources: ['encyclopedie', 'glossaire', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'proposition-de-valeur',
    slug: 'proposition-de-valeur',
    nom: 'Proposition de valeur',
    aliases: ['value proposition', 'promesse', 'offre'],
    categorie: 'business-model',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "La proposition de valeur désigne la structure de l'offre de produits et de services formulée pour une clientèle, ainsi que les éléments de valorisation de cette offre. Elle s'exprime dans un espace à trois dimensions : 1. la clientèle, qui regroupe les individus auxquels l'entreprise formule une proposition de valeur ; 2. les promesses liées aux produits ou aux services, qui s'expriment le plus souvent en termes de prix, performances, simplicité, confort, sécurité, plaisir, distinction, personnalisation ; 3. les modes d'accès aux produits et services. La proposition de valeur est la source des flux de revenus que l'entreprise est en mesure de dégager.",
    explicationSimple:
      "Ce qu'on promet, à qui, et comment on le rend accessible. Les huit promesses sont l'outil le plus rapide pour caractériser une offre.",
    commentUtiliser: [
      { titre: 'Identifier la clientèle', detail: 'À qui la promesse est-elle formulée ?' },
      {
        titre: 'Identifier la promesse parmi les huit',
        detail: 'Prix · performances · simplicité · confort · sécurité · plaisir · distinction · personnalisation.',
      },
      { titre: 'Identifier les modes d’accès', detail: 'Boutique, corner, e-commerce, application, abonnement, leasing, libre-service.' },
    ],
    exemples: [
      {
        texte:
          "Oncle Hansi : un label « alsacien » reposant sur la recherche d'une consommation de qualité (sanctionnée par les labels), une démarche locavore, et une région marquée par une forte identité — « une proposition de valeur unique pour des clients différents ».",
        source: 'corrige-hansi',
        cas: 'oncle-hansi',
      },
      {
        texte:
          "Les huit promesses illustrées : prix (hard discount) · performances (la caméra de cinéma) · simplicité (Netflix supprime les pénalités de retard) · confort (catalogue 24/7, chatbot 24 h/24) · sécurité (2FA, labels sanitaires) · plaisir (Cirque du Soleil) · distinction (Nespresso, label alsacien) · personnalisation (catalogue Netflix).",
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "Face à un cas, demande-toi laquelle des huit promesses l'entreprise fait réellement : c'est le moyen le plus rapide de caractériser une proposition de valeur.",
    pieges: [
      {
        erreur: 'Oublier la troisième dimension, les modes d’accès.',
        pourquoi:
          "Chez Smart (centres en libre-service, tour de verre, possession le jour même) et Hansi (corners, boutiques), le mode d'accès est constitutif de la proposition de valeur.",
      },
    ],
    motsCles: ['promesse', 'clientèle', 'modes d’accès', 'huit promesses'],
    sources: ['encyclopedie', 'corrige-hansi', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'architecture-de-valeur',
    slug: 'architecture-de-valeur',
    nom: 'Architecture de valeur',
    aliases: ['production et délivrance', 'organisation de la chaîne de valeur'],
    categorie: 'business-model',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Décrit la production et la délivrance de la proposition de valeur à travers les ressources et compétences de l'entreprise. Il s'agit principalement de la chaîne de valeur et du système de valeur. La gestion de l'architecture de valeur s'organise autour de quelques décisions stratégiques : faire (intégration) ou faire faire (externalisation) ; gérer la dualité coûts fixes et coûts variables.",
    explicationSimple: "Comment on fabrique et on livre la promesse — et à quel coût.",
    exemples: [
      {
        texte:
          "Hansi : la structure de coûts doit être « la plus légère possible » car « la logistique reste à la charge des entreprises » adhérentes → externalisation maximale, coûts fixes minimaux.",
        source: 'corrige-hansi',
        cas: 'oncle-hansi',
      },
    ],
    phraseExamen: "On externalise les fonctions non stratégiques qui ne seraient pas efficaces — donc jamais ce qui fonde l'avantage concurrentiel.",
    motsCles: ['faire ou faire faire', 'coûts fixes', 'coûts variables', 'chaîne de valeur'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'faire-ou-faire-faire',
    slug: 'faire-ou-faire-faire',
    nom: 'Faire ou faire faire (intégration / externalisation)',
    nomCourt: 'Faire / faire faire',
    aliases: ['outsourcing', 'externalisation', 'intégration'],
    categorie: 'business-model',
    type: 'notion',
    priorite: 3,
    definitionCours: "Faire (intégration) ou faire faire (externalisation) — décision stratégique de l'architecture de valeur.",
    explicationSimple:
      "Faire : contrôle de la qualité, protection du savoir-faire, captation de la marge — mais coûts fixes élevés et rigidité. Faire faire : flexibilité, coûts variables, expertise externe — mais perte de contrôle et dépendance.",
    phraseExamen: "Règle du cours : on externalise les fonctions non stratégiques qui ne seraient pas efficaces. Jamais ce qui fonde l'avantage.",
    motsCles: ['intégration', 'externalisation', 'dépendance'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'couts-fixes-variables',
    slug: 'couts-fixes-variables',
    nom: 'Coûts fixes et coûts variables',
    nomCourt: 'Fixes / variables',
    categorie: 'business-model',
    type: 'notion',
    priorite: 3,
    definitionCours: "Gérer la dualité coûts fixes et coûts variables — décision stratégique de l'architecture de valeur.",
    explicationSimple:
      "📚 Le coût fixe ne dépend pas du volume produit (loyer, amortissement, salaires permanents) ; le coût variable en dépend (matières, commissions). Beaucoup de coûts fixes ⇒ fort effet de levier au-dessus du seuil de rentabilité, mais forte fragilité en cas de baisse d'activité.",
    motsCles: ['levier', 'résilience', 'seuil de rentabilité'],
    sources: ['encyclopedie'],
    provenance: 'complement',
  },
  {
    id: 'equation-de-profit',
    slug: 'equation-de-profit',
    nom: 'Équation de profit',
    aliases: ['profit', 'revenus moins coûts'],
    categorie: 'business-model',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "L'équation de profit est le résultat de la confrontation entre les REVENUS générés et les COÛTS supportés lors de la réalisation de la proposition de valeur. Le schéma RCOV est plus précis : Profit = (volume et structure des revenus) − (volume et structure des charges).",
    explicationSimple:
      "Le mot clé est « structure ». Il ne suffit pas de dire « ça rapporte plus que ça ne coûte » : il faut analyser d'où vient l'argent, de combien de sources, avec quel poids relatif, quels coûts dominent, et si le modèle a besoin d'échelle.",
    commentUtiliser: [
      { titre: 'Sources de revenus', detail: 'D’où vient l’argent ? de combien de sources ? récurrentes ou ponctuelles ?' },
      { titre: 'Structure des revenus', detail: 'Quel poids relatif de chaque source ? quelle dépendance ?' },
      { titre: 'Structure des coûts', detail: 'Fixes ou variables ? quel poste dominant ? quels coûts cachés ?' },
      { titre: 'Volume', detail: 'Le modèle a-t-il besoin d’échelle pour être rentable ?' },
    ],
    exemples: [
      {
        texte:
          "Oncle Hansi (corrigé) : « L'équation de profit est la résultante de la confrontation de deux flux de revenus (les adhésions et les redevances, ces dernières devant être limitées pour éviter la concurrence des produits commercialisés sous la marque propre du producteur) et d'une structure de coûts qui doit être la plus légère possible. Les droits de la marque sont la propriété de l'entreprise ; la logistique reste à la charge des entreprises. »",
        source: 'corrige-hansi',
        cas: 'oncle-hansi',
      },
    ],
    phraseExamen:
      "Chez Hansi, les clients sont des partenaires : ils financent une partie de la structure de coûts au lieu de seulement générer du revenu. Cherche systématiquement ce type de renversement dans un cas.",
    pieges: [
      {
        erreur: "Confondre avec Profit = Prix − Coûts de Porter.",
        pourquoi:
          "Porter raisonne à l'unité pour montrer la pression des forces ; le RCOV raisonne en agrégats pour décrire l'architecture économique.",
      },
      {
        erreur: 'Ignorer les coûts cachés.',
        pourquoi:
          "Le BMC durable ajoute « coûts non visibles (sociaux/environnementaux) » : l'équation de profit classique ignore les externalités, c'est précisément sa limite.",
      },
    ],
    motsCles: ['revenus', 'coûts', 'structure', 'volume'],
    sources: ['encyclopedie', 'corrige-hansi', 'glossaire', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'rcov',
    slug: 'rcov',
    nom: 'Modèle RCOV',
    nomCourt: 'RCOV',
    acronyme: 'RCOV',
    aliases: ['Resources Competences Organization Value', 'Demil Lecocq Warnier'],
    categorie: 'business-model',
    type: 'modele',
    priorite: 1,
    auteur: 'B. Demil, X. Lecoq et V. Warnier',
    annee: '2013',
    origine: "D'après B. Demil, X. Lecoq et V. Warnier, Stratégie et business model, Pearson, 2013.",
    definitionCours:
      "RCOV — Resources, Competences, Organization and Value proposition. Les ressources et compétences détenues par l'entreprise alimentent d'un côté l'offre de produits et de services (→ volume et structure des revenus), de l'autre l'organisation de la chaîne de valeur (→ volume et structure des charges) ; la confrontation dégage le profit.",
    explicationSimple:
      "Trois observations décisives : les ressources et compétences sont AU SOMMET (tout part d'elles) ; il y a une FLÈCHE DE RETOUR de l'organisation vers les ressources — le modèle est dynamique et bouclé ; les deux branches sont symétriques et se rejoignent dans le profit.",
    commentUtiliser: [
      { titre: 'Ressources + compétences', detail: 'Ce que l’entreprise possède et sait faire.' },
      { titre: 'Organisation de la chaîne de valeur', detail: 'Comment elle s’organise pour produire et délivrer.' },
      { titre: 'Proposition de valeur', detail: 'L’offre de produits et de services.' },
      { titre: 'Revenus / charges', detail: 'Volume et structure de chaque côté.' },
      { titre: 'Profit', detail: 'Le solde — et l’organisation régénère les ressources (boucle de retour).' },
    ],
    exemples: [
      {
        texte:
          "Oncle Hansi : Ressources = la marque/le label (immatériel peu imitable), les droits de l'œuvre. Compétences/organisation = fédérer un réseau de producteurs leaders, négocier avec la distribution, structure légère. Valeur = label de qualité + identité régionale. → Profit = cotisations + redevances − coûts légers.",
        source: 'corrige-hansi',
        cas: 'oncle-hansi',
      },
    ],
    phraseExamen:
      "Le RCOV part des ressources et compétences et montre une boucle dynamique jusqu'au profit ; le Canvas part de la proposition de valeur et déplie neuf blocs opérationnels, au prix d'une vision statique qui néglige la concurrence.",
    motsCles: ['dynamique', 'boucle', 'ressources', 'profit'],
    sources: ['encyclopedie', 'glossaire', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'bmc',
    slug: 'bmc',
    nom: 'Business Model Canvas',
    nomCourt: 'BMC',
    acronyme: 'BMC',
    aliases: ['Canvas', 'BCM', 'neuf blocs', 'Osterwalder', 'Pigneur'],
    categorie: 'business-model',
    type: 'outil',
    priorite: 1,
    auteur: '📚 Osterwalder & Pigneur (non nommés dans les supports)',
    definitionCours:
      "Il a pour objet de proposer une représentation visuelle du business model de l'entreprise à partir de la proposition de valeur. La représentation CANVAS permet d'analyser en trois phases le business model d'une entreprise.",
    explicationSimple:
      "Neuf blocs sur une page. La moitié droite est le monde du client (qui, quoi, comment on l'atteint, ce qu'il paie) ; la moitié gauche est le monde de la production (avec qui, avec quoi, en faisant quoi, à quel coût). La proposition de valeur est la charnière au centre.",
    usage: {
      utiliserSi: [
        "on doit décrire le fonctionnement économique d'une entreprise bloc par bloc",
        "on analyse un mini-cas de type Oncle Hansi",
        "on veut vérifier la cohérence entre segment, promesse et revenus",
      ],
      nePasUtiliserPour: [
        "analyser la concurrence — aucun bloc n'y est consacré, il faut compléter par Porter",
        "un portefeuille d'activités multiples — le modèle est pensé pour le monoactivité",
        "décrire une dynamique d'évolution — le modèle est statique",
      ],
    },
    commentUtiliser: [
      { titre: '1. Segments de clients', detail: 'Qui servons-nous ? Combien de segments distincts ?' },
      { titre: '2. Proposition de valeur', detail: 'Quelle promesse ? Laquelle des 8 dimensions ? — c’est le cœur.' },
      { titre: '3. Canaux', detail: 'Comment atteint-on le client ?' },
      { titre: '4. Relations clients', detail: 'Comment acquiert-on et fidélise-t-on ?' },
      { titre: '5. Flux de revenus', detail: '« Que sont-ils prêts à payer ? Comment payent-ils ? »' },
      { titre: '6. Ressources clés', detail: 'Que faut-il posséder absolument ?' },
      { titre: '7. Activités clés', detail: 'Que faut-il absolument savoir faire ?' },
      { titre: '8. Partenaires clés', detail: 'Avec qui ? sous quelle forme ?' },
      { titre: '9. Structure de coûts', detail: 'Quels postes dominants ? fixes ou variables ?' },
      { titre: 'Phase 3 — confrontation', detail: 'Revenus vs coûts → une équation de profit originale.' },
    ],
    exemples: [
      {
        texte:
          "Méthode générale à reproduire : pour chaque phrase du cas, demande-toi à quel bloc elle répond. « acquiert les droits de l'œuvre » → ressource clé. « regroupe 24 entreprises alsaciennes » → partenaires clés. « versent une cotisation et une redevance » → flux de revenus. « démarche les enseignes pour des corners » → canaux. « la logistique reste à la charge des entreprises » → structure de coûts.",
        source: 'corrige-hansi',
        cas: 'oncle-hansi',
      },
    ],
    phraseExamen:
      "Les deux questions du cours sur les revenus sont à citer telles quelles : « Que sont-ils prêts à payer ? Comment payent-ils ? » La seconde est souvent oubliée et elle est décisive : abonnement, à l'usage, à l'unité, leasing, freemium — c'est un choix de modèle.",
    limites: [
      "Il s'applique surtout à des entreprises monoactivité comme les start-up.",
      "Il se focalise essentiellement sur le fonctionnement interne de l'entreprise, en négligeant la concurrence.",
      "Il reste essentiellement statique — c'est une photo, pas un film.",
    ],
    pieges: [
      {
        erreur: 'Oublier les limites du BMC.',
        pourquoi:
          "Le cours donne les limites AVANT le contenu : monoactivité, néglige la concurrence, statique. C'est une erreur classique de l'oublier.",
      },
    ],
    variantes: [
      {
        sujet: 'Sigle',
        formulations: [
          { libelle: 'Canvas', ou: 'Cours BM' },
          { libelle: 'BCM', ou: 'Cours BM, slides 9 et 16 — inversion présente dans les slides' },
          { libelle: 'BMC', ou: 'usage courant et forme correcte' },
        ],
        explication: "Il s'agit du même objet — Business Model Canvas. « BMC » est la forme correcte.",
      },
    ],
    chiffres: [{ libelle: 'Blocs', valeur: '9' }],
    motsCles: ['neuf blocs', 'visuel', 'statique', 'monoactivité'],
    sources: ['encyclopedie', 'corrige-hansi', 'glossaire', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'segments-clients',
    slug: 'segments-clients',
    nom: 'Segments de clients',
    nomCourt: 'Segments',
    aliases: ['clientèle', 'customer segments'],
    categorie: 'business-model',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Identifient les différents groupes d'individus ou d'organisations que cible l'entreprise.",
    explicationSimple: "Qui sert-on ? Et combien de groupes réellement distincts y a-t-il ?",
    exemples: [
      {
        texte:
          "Oncle Hansi : deux clientèles — les distributeurs (B2B) ; et les consommateurs de produits alsaciens, eux-mêmes en clientèle locale attachée aux produits régionaux et clientèle touristique.",
        source: 'corrige-hansi',
        cas: 'oncle-hansi',
      },
    ],
    pieges: [{ erreur: 'Oublier le segment distributeurs.', pourquoi: 'Ne citer que les consommateurs est le piège du cas Hansi.' }],
    motsCles: ['cible', 'groupes', 'B2B', 'B2C'],
    sources: ['encyclopedie', 'corrige-hansi'],
    provenance: 'cours',
  },
  {
    id: 'canaux',
    slug: 'canaux',
    nom: 'Canaux',
    aliases: ['canaux de distribution', 'channels', 'canaux de communication'],
    categorie: 'business-model',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Les modalités par lesquelles une entreprise entre en contact avec ses segments de clients pour leur apporter une proposition de valeur.",
    explicationSimple: "Par où passe l'offre pour atteindre le client.",
    exemples: [
      {
        texte: "Hansi : corners en grande distribution, boutiques propres, projet de site de commercialisation.",
        source: 'corrige-hansi',
        cas: 'oncle-hansi',
      },
    ],
    motsCles: ['contact', 'distribution', 'accès'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'relations-clients',
    slug: 'relations-clients',
    nom: 'Relations clients',
    aliases: ['customer relationships', 'fidélisation'],
    categorie: 'business-model',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Ont pour fonction d'acquérir et de fidéliser des clients ainsi que de développer les ventes.",
    explicationSimple: "Comment on obtient un client, et comment on le garde.",
    motsCles: ['acquisition', 'fidélisation', 'ventes'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'flux-revenus',
    slug: 'flux-revenus',
    nom: 'Flux de revenus (sources de revenus)',
    nomCourt: 'Flux de revenus',
    aliases: ['sources de revenus', 'revenue streams'],
    categorie: 'business-model',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Ce bloc appréhende les flux financiers que l'entreprise dégage auprès de chaque segment de clients : « Que sont-ils prêts à payer ? Comment payent-ils ? »",
    explicationSimple:
      "Deux questions, pas une. La seconde — comment payent-ils — est décisive : abonnement, à l'usage, à l'unité, leasing, freemium.",
    exemples: [
      { texte: "Hansi : cotisations d'adhésion + redevances sur les ventes réalisées sous le label.", source: 'corrige-hansi', cas: 'oncle-hansi' },
    ],
    motsCles: ['paiement', 'récurrence', 'modèle tarifaire'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'ressources-cles',
    slug: 'ressources-cles',
    nom: 'Ressources clés',
    aliases: ['key resources', 'actifs requis'],
    categorie: 'business-model',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Identifient les actifs les plus importants requis pour réaliser la proposition de valeur. Ces ressources peuvent être physiques, intellectuelles, humaines ou financières.",
    explicationSimple:
      "Ce qu'il faut posséder absolument. ⚠️ Cette typologie en quatre catégories est plus courte que les six natures du Cours 3 : « intellectuelles » recouvre technologiques + réputation.",
    exemples: [
      { texte: "Hansi : les droits de l'œuvre de Jean-Jacques Waltz et la marque ombrelle.", source: 'corrige-hansi', cas: 'oncle-hansi' },
    ],
    motsCles: ['actifs', 'indispensable', 'physique', 'intellectuel'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'activites-cles',
    slug: 'activites-cles',
    nom: 'Activités clés',
    aliases: ['key activities'],
    categorie: 'business-model',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Désignent les choses les plus importantes qu'une entreprise doit faire pour que le modèle fonctionne. Ces activités sont de natures très différentes : la production, la résolution de problèmes, l'utilisation de plateforme, la mise en réseau.",
    explicationSimple: "Ce qu'il faut absolument savoir faire.",
    exemples: [
      {
        texte: "Hansi : sélectionner et animer le réseau d'adhérents, gérer la marque et le packaging, démarcher la distribution.",
        source: 'corrige-hansi',
        cas: 'oncle-hansi',
      },
    ],
    motsCles: ['production', 'plateforme', 'réseau'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'partenaires-cles',
    slug: 'partenaires-cles',
    nom: 'Partenaires clés',
    aliases: ['key partners', 'alliances', 'joint-venture'],
    categorie: 'business-model',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Reprend le système de valeur de l'entreprise. Il décrit le réseau de fournisseurs et de partenaires grâce auquel le modèle fonctionne : par exemple, alliance, coopétition, joint-venture, relations contractuelles.",
    explicationSimple: "Avec qui, et sous quelle forme juridique.",
    phraseExamen: "Le bloc des partenaires clés reprend le système de valeur : c'est le lien explicite Canvas ↔ chaîne et système de valeur.",
    motsCles: ['réseau', 'alliance', 'coopétition'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'structure-couts',
    slug: 'structure-couts',
    nom: 'Structure de coûts',
    aliases: ['cost structure', 'coûts'],
    categorie: 'business-model',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Les trois derniers blocs (ressources, activités, partenaires) se traduisent par des coûts dont la structure, le niveau et les flux sont identifiés dans le dernier bloc.",
    explicationSimple:
      "Ce que le modèle coûte — et, en version durable, ce qu'il coûte à d'autres sans que cela y figure (coûts non visibles, sociaux et environnementaux).",
    exemples: [
      { texte: "Hansi : « la plus légère possible », logistique externalisée aux adhérents.", source: 'corrige-hansi', cas: 'oncle-hansi' },
    ],
    motsCles: ['postes', 'fixes', 'variables', 'coûts cachés'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'bmc-durable',
    slug: 'bmc-durable',
    nom: 'BMC durable (Sustainable Business Model Canvas)',
    nomCourt: 'BMC durable',
    aliases: ['sustainable BMC', 'business model durable', 'canvas durable', '12 blocs'],
    categorie: 'business-model-durable',
    type: 'outil',
    priorite: 1,
    definitionCours:
      "The Sustainable Business Model Canvas — 12 blocs numérotés de 0 à 11 : (0) Mission, (1) Clients, (2) Proposition de valeur, (3) Canaux de distribution, (4) Relation client, (5) Sources de revenus, (6) Ressources, (7) Activités, (8) Partenaires, (9) Structure des coûts, (10) Impacts positifs, (11) Externalités négatives. Dans le cadre du BMC, les impacts positifs et les externalités négatives sont des notions liées à la création de valeur au-delà du seul aspect économique. Une entreprise responsable cherche à maximiser les impacts positifs (valeur partagée) et à réduire ou compenser les externalités négatives (via l'innovation, la réglementation interne, ou la compensation carbone).",
    explicationSimple:
      "Le Canvas classique est aveugle à deux choses : la raison d'être de l'entreprise (en amont) et les effets de son activité sur la société et l'environnement (en aval). Le BMC durable ajoute exactement ces trois blocs manquants.",
    commentUtiliser: [
      {
        titre: 'La mission (0) devient le point de départ',
        detail:
          "Avant même les clients. Au lieu de demander « quel besoin solvable puis-je servir ? », on demande « pourquoi cette entreprise existe-t-elle ? ». La numérotation à 0 signifie que la mission précède et conditionne tous les autres blocs.",
      },
      {
        titre: 'Les blocs 10 et 11 élargissent le compte de résultat',
        detail:
          "Ils comptabilisent ce que l'entreprise fait subir ou apporte à des tiers qui ne sont pas dans son compte de résultat.",
      },
      {
        titre: 'La réflexion stratégique change de nature',
        detail:
          "BMC classique : le modèle est bon si revenus > coûts. BMC durable : revenus > coûts ET impacts positifs maximisés ET externalités négatives réduites ou compensées.",
      },
    ],
    exemples: [
      {
        texte:
          "SilverDigital — (10) Impacts positifs : réduction de l'empreinte par la digitalisation, disponibilité 24 h/24, inclusion des clients éloignés géographiquement. (11) Externalités négatives : exclusion indirecte des seniors, report de la charge cognitive sur des personnes vulnérables, report du coût du support sur les proches aidants et les associations, perte de lien social, empreinte des infrastructures numériques rarement comptabilisée.",
        cas: 'silverdigital',
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "Un modèle rentable dont les externalités négatives sont massives devient stratégiquement fragile : il est exposé au risque réglementaire (le coût externe finira par être internalisé), au risque réputationnel et au risque de perte de sens pour les collaborateurs.",
    motsCles: ['mission', 'impacts positifs', 'externalités', '12 blocs'],
    sources: ['encyclopedie', 'glossaire', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'impacts-positifs',
    slug: 'impacts-positifs',
    nom: 'Impacts positifs',
    categorie: 'business-model-durable',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Ce sont les effets bénéfiques que l'activité de l'entreprise peut générer pour la société (création d'emplois, inclusion sociale, amélioration de la qualité de vie), l'environnement (réduction des déchets, économie circulaire, baisse des émissions de CO₂) et les clients (accès à des produits/services plus durables ou éthiques). Où les intégrer dans le BMC : proposition de valeur (offre avec bénéfice social/environnemental), relations clients (sensibilisation à une consommation responsable), partenariats clés (avec des ONG ou coopératives locales).",
    explicationSimple:
      "Les impacts positifs se construisent du côté client et partenaires — symétriquement aux externalités négatives qui se repèrent du côté production.",
    motsCles: ['valeur partagée', 'société', 'environnement', 'clients'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'metamorphose-bmc',
    slug: 'metamorphose-bmc',
    nom: 'La métamorphose du Business Model Canvas',
    nomCourt: 'Métamorphose du BMC',
    aliases: ['transformation durable du BMC', 'BM traditionnel BM durable'],
    categorie: 'business-model-durable',
    type: 'methode',
    priorite: 1,
    definitionCours:
      "Pour 9 variables, une correspondance en trois colonnes : BM traditionnel → BM intégrant le développement durable → nouvelles pratiques DD. Raison d'être : de la profitabilité seule à une mission centrée sur l'impact positif. Segments : ciblage de segments qui valorisent la durabilité. Propositions de valeur : produits qui minimisent l'impact, matériaux durables, plus-value sociale. Canaux : e-commerce vert ou distribution locale. Relations clients : transparence, partage d'informations sur la durabilité, engagement communautaire. Sources de revenus : services, leasing, remise à neuf ; diversification par la vente de crédits carbone. Ressources clés : priorité aux ressources renouvelables, recyclées ou certifiées. Activités clés : pratiques éco-responsables, processus industriels verts. Partenariats : acteurs engagés, objectifs ESG, ONG et institutions académiques. Structure de coûts : investissement initial plus élevé mais bénéfices à long terme ; réinvestissement des économies d'efficacité énergétique en R&D.",
    explicationSimple:
      "Une grille de transformation bloc par bloc : question de durabilité → transformation possible → conséquence stratégique.",
    commentUtiliser: [
      { titre: 'Partir d’un bloc du BMC traditionnel' },
      { titre: 'Poser la question de durabilité', detail: '« Et si on regardait ce bloc du point de vue social/environnemental ? »' },
      { titre: 'Formuler la transformation possible' },
      { titre: 'En tirer la conséquence stratégique', detail: 'Y compris les inconvénients.' },
    ],
    exemples: [
      {
        texte:
          "Bloc « Sources de revenus » : traditionnel = vente du produit (transfert de propriété). Question : pourquoi vendre le produit plutôt que l'usage ? que devient-il après la vente ? Transformation : leasing / services / remise à neuf / reprise. Conséquences : l'entreprise garde la propriété donc l'intérêt à faire durable, revenus récurrents, accès à un gisement de matières — MAIS besoin de trésorerie accru et gestion logistique du retour.",
        source: 'metamorphose-bmc',
      },
    ],
    phraseExamen:
      "La réponse à la tension court terme / long terme est dans la structure de coûts : investissement initial plus élevé, bénéfices à long terme, puis réinvestissement des économies d'efficacité énergétique en R&D. C'est un mécanisme d'auto-financement de la transition — les économies de la première vague financent la seconde.",
    motsCles: ['transformation', 'bloc par bloc', 'CT/LT', 'ESG'],
    sources: ['metamorphose-bmc', 'encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'economie-fonctionnalite',
    slug: 'economie-fonctionnalite',
    nom: 'Économie de la fonctionnalité',
    nomCourt: 'Économie de la fonctionnalité',
    aliases: ['product as a service', 'leasing', 'vente de l’usage'],
    categorie: 'business-model-durable',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Génération de revenus à travers des modèles durables comme la vente de services, le leasing ou la remise à neuf de produits (métamorphose du BMC, bloc « sources de revenus »).",
    explicationSimple:
      "Vendre l'usage d'un bien plutôt que le bien lui-même. L'entreprise garde la propriété et a donc intérêt à des produits durables.",
    phraseExamen:
      "En gardant la propriété, l'entreprise internalise l'intérêt à la durabilité : c'est un levier direct d'économie circulaire.",
    motsCles: ['usage', 'leasing', 'propriété', 'circularité'],
    sources: ['glossaire', 'metamorphose-bmc'],
    provenance: 'cours',
  },
  {
    id: 'greenwashing',
    slug: 'greenwashing',
    nom: 'Greenwashing',
    aliases: ['écoblanchiment', 'verdissement de façade', 'SDG-washing'],
    categorie: 'business-model-durable',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Communication qui survend l'engagement écologique réel (allégations vagues, sans preuve). On l'évite par : preuves chiffrées, labels indépendants, transparence, cohérence entre discours et chaîne de valeur, reporting vérifiable.",
    explicationSimple: "Afficher plus de vert qu'il n'y en a.",
    pourquoiExiste:
      "Le facteur environnemental et éthique du PESTEL explique le mécanisme : une attitude irresponsable et non éthique génère des réactions de l'opinion publique, amplifiées par les médias et réseaux sociaux.",
    phraseExamen:
      "Un BM « durable » de façade est du greenwashing si les externalités négatives restent cachées dans les coûts. Le test du SDG-washing : les ODD affichés touchent-ils la proposition de valeur et les activités clés, ou seulement la communication ?",
    motsCles: ['preuve', 'labels', 'transparence', 'réputation'],
    sources: ['encyclopedie', 'questions-officielles', 'glossaire'],
    provenance: 'cours',
  },
]
