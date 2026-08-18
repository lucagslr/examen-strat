import type { Notion } from '../types'

/** PARTIE V — ACCESSIBILITÉ ET INCLUSION NUMÉRIQUE (encyclopédie §31) */
export const notionsAccessibilite: Notion[] = [
  {
    id: 'accessibilite-numerique',
    slug: 'accessibilite-numerique',
    nom: 'Accessibilité numérique',
    aliases: ['a11y', 'accessibilité web', 'accessibilité'],
    categorie: 'accessibilite',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Capacité d'un service, site ou application à être utilisé par toutes les personnes, quelles que soient leurs capacités — visuelles, auditives, motrices, cognitives — et quel que soit leur équipement.",
    explicationSimple:
      "Ce n'est pas un service rendu à une minorité, c'est une amélioration de la qualité générale.",
    objectif:
      "Intégration dans la stratégie à trois niveaux : gouvernance (désigner un responsable, inscrire l'accessibilité dans la politique de l'entreprise), processus (l'intégrer dès la conception : design, développement, achats, marchés publics), performance (la mesurer par des KPI).",
    commentUtiliser: [
      { titre: '1. AUDITER', detail: 'WCAG niveau AA, tests automatiques + tests manuels + tests avec des utilisateurs réels.' },
      {
        titre: '2. PRIORISER',
        detail: 'Parcours critiques d’abord (ouvrir un compte, payer, contacter un humain), non-conformités bloquantes.',
      },
      {
        titre: '3. CORRIGER',
        detail:
          'P-O-U-R : contrastes et alternatives (P), navigation clavier et temps (O), langage clair et erreurs explicites (U), compatibilité lecteurs d’écran (R).',
      },
      {
        titre: "4. GARANTIR L'ALTERNATIVE",
        detail: 'Maintenir un canal alternatif humain (droit à une vie hors ligne, Art. 21A Cst-GE al. 2).',
      },
      { titre: '5. INTÉGRER AU PROCESSUS', detail: 'Accessibilité dès la conception, critères d’accessibilité dans les achats et cahiers des charges.' },
      { titre: '6. GOUVERNER', detail: 'Désigner un responsable, former les équipes.' },
      { titre: '7. MESURER', detail: 'KPI de moyen + KPI de résultat, revue périodique.' },
    ],
    exemples: [
      {
        texte:
          "Publics concernés, au-delà du handicap visuel permanent : handicaps permanents (cécité, malvoyance, surdité, moteur, cognitif) · handicaps temporaires (bras cassé, otite, œil opéré) · situations de handicap (environnement bruyant, forte luminosité, mains occupées, connexion lente, petit écran) · âge (vue, motricité fine, mémoire de travail, familiarité numérique) · langue et littératie (non-francophones, faible littératie, illectronisme).",
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "Concevoir pour les cas extrêmes améliore l'expérience de tous. Les sous-titres servent aussi dans le train ; le contraste élevé sert aussi en plein soleil ; un langage clair sert à tout le monde.",
    pieges: [
      {
        erreur: "Réduire l'accessibilité au handicap visuel permanent.",
        pourquoi: 'Le périmètre inclut les handicaps temporaires, les situations de handicap, l’âge, la langue et la littératie.',
      },
      {
        erreur: "Présenter l'accessibilité comme une contrainte réglementaire seule.",
        pourquoi: "Le cours en fait un « double levier stratégique » : responsabilité ET création de valeur durable.",
      },
    ],
    motsCles: ['inclusion', 'capacités', 'équipement', 'double levier'],
    sources: ['cours-leclere', 'encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'double-levier-accessibilite',
    slug: 'double-levier-accessibilite',
    nom: "Le double levier stratégique de l'accessibilité",
    nomCourt: 'Double levier',
    categorie: 'accessibilite',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "L'accessibilité est présentée comme un « double levier stratégique » : levier de responsabilité numérique (conformité, inclusion, non-discrimination) et levier de création de valeur durable (élargissement des publics et des marchés, renforcement de la réputation et de la confiance).",
    explicationSimple: "C'est la phrase qui transforme l'accessibilité d'un coût en un avantage.",
    phraseExamen:
      "Accessibilité → conformité et réduction du risque juridique et réputationnel, ET élargissement du marché adressable + différenciation + confiance → avantage concurrentiel durable.",
    motsCles: ['responsabilité', 'valeur durable', 'marché', 'réputation'],
    sources: ['cours-leclere', 'encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'wcag',
    slug: 'wcag',
    nom: 'WCAG — Web Content Accessibility Guidelines',
    nomCourt: 'WCAG',
    acronyme: 'WCAG',
    aliases: ['W3C', 'normes accessibilité web'],
    categorie: 'accessibilite',
    type: 'cadre-legal',
    priorite: 1,
    auteur: 'W3C',
    definitionCours:
      "Normes internationales d'accessibilité du web, structurées par les quatre principes POUR. Niveaux de conformité : A (minimal), AA (standard généralement exigé par les réglementations), AAA (renforcé).",
    explicationSimple: "Le standard international, transposé au niveau national (RGAA en France, eCH-0059 en Suisse).",
    chiffres: [{ libelle: 'Niveaux de conformité', valeur: 'A, AA, AAA — AA est le standard exigé' }],
    motsCles: ['POUR', 'niveaux', 'AA', 'W3C'],
    sources: ['cours-leclere', 'encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'pour',
    slug: 'pour',
    nom: 'POUR — les 4 principes WCAG',
    nomCourt: 'POUR',
    acronyme: 'POUR',
    aliases: ['Perceptible Utilisable Compréhensible Robuste', 'perceivable operable understandable robust', 'PUCR'],
    categorie: 'accessibilite',
    type: 'acronyme',
    priorite: 1,
    definitionCours:
      "P — Perceptible : l'information et les composants de l'interface doivent pouvoir être perçus par tous (texte alternatif, contraste suffisant, sous-titres, ne pas transmettre une information par la couleur seule, taille de police ajustable). O — Opérable / Utilisabilité : les composants et la navigation doivent pouvoir être utilisés (navigation entièrement au clavier, temps suffisant, pas de contenus provoquant des crises, zones cliquables suffisamment grandes). U — Understandable / Compréhensibilité : l'information et le fonctionnement doivent être compréhensibles (langage clair et simple, comportement prévisible, messages d'erreur explicites avec suggestion de correction, libellés de formulaire explicites). R — Robuste : le contenu doit être interprétable par une grande variété d'agents utilisateurs, y compris les technologies d'assistance (compatibilité lecteurs d'écran, code HTML valide et sémantique).",
    explicationSimple: "Quatre principes, un acronyme mémorisable : POUR.",
    variantes: [
      {
        sujet: 'Traduction française',
        formulations: [
          { libelle: 'O = Operable → « Utilisabilité »', ou: 'supports francophones du cours' },
          { libelle: 'U = Understandable → « Compréhensibilité »', ou: 'supports francophones du cours' },
        ],
        explication:
          "L'acronyme reste POUR dans les deux langues, mais les mots français ne suivent pas les initiales anglaises.",
        consigneExamen: 'Restitue les quatre principes dans l’ordre P-O-U-R en donnant les deux libellés.',
      },
    ],
    exemples: [
      {
        texte:
          "Diagnostic P-O-U-R de SilverDigital : P — taille de police non personnalisable ; O — 4 étapes pour joindre un agent, 9 minutes d'attente, double authentification obligatoire sans alternative ; U — chatbot incompris, parcours peu prévisible ; R — non documenté dans le cas.",
        cas: 'silverdigital',
        source: 'encyclopedie',
      },
    ],
    motsCles: ['perceptible', 'opérable', 'compréhensible', 'robuste'],
    sources: ['cours-leclere', 'memos', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'european-accessibility-act',
    slug: 'european-accessibility-act',
    nom: 'European Accessibility Act (EAA)',
    nomCourt: 'EAA',
    acronyme: 'EAA',
    aliases: ['directive accessibilité européenne', 'acte européen accessibilité'],
    categorie: 'accessibilite',
    type: 'cadre-legal',
    priorite: 1,
    annee: 'juin 2025',
    definitionCours:
      "Entré en application en juin 2025 ; vise explicitement les banques et services financiers, l'e-commerce, les transports, les livres numériques, les services de communication et les terminaux de paiement.",
    explicationSimple:
      "Pour SilverDigital, c'est à la fois une menace (durcissement réglementaire) et une opportunité (marché de la mise en conformité, différenciation par l'anticipation).",
    motsCles: ['UE', 'banques', 'services financiers', '2025'],
    sources: ['cours-leclere', 'encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'lhand',
    slug: 'lhand',
    nom: 'LHand — loi sur l’égalité pour les personnes handicapées',
    nomCourt: 'LHand',
    acronyme: 'LHand',
    aliases: ['loi handicap suisse', 'révision LHand', 'aménagements raisonnables'],
    categorie: 'accessibilite',
    type: 'cadre-legal',
    priorite: 1,
    annee: '2004, en cours de révision',
    definitionCours:
      "En vigueur depuis 2004, en cours de révision. Points principaux de la révision : extension du champ d'application aux prestations proposées par des privés (et non plus seulement par les collectivités publiques) ; aménagements raisonnables — obligation de prendre des mesures adaptées, dans la limite de la proportionnalité (coût, faisabilité) ; discrimination directe et discrimination indirecte, les deux étant visées ; reconnaissance des langues des signes ; renforcement des voies de droit.",
    explicationSimple:
      "La notion d'« aménagements raisonnables » est décisive pour l'arbitrage : elle impose une pesée des intérêts, donc un optimum supportable et non un « tout ou rien ».",
    motsCles: ['privé', 'proportionnalité', 'discrimination indirecte', 'langues des signes'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'cadre-legal-accessibilite',
    slug: 'cadre-legal-accessibilite',
    nom: "Autres cadres légaux de l'accessibilité",
    nomCourt: 'Cadres légaux a11y',
    aliases: ['eCH-0059', 'EN 301 549', 'ADA', 'Unruh Civil Rights Act', 'RGAA'],
    categorie: 'accessibilite',
    type: 'cadre-legal',
    priorite: 2,
    definitionCours:
      "eCH-0059 : standard suisse d'accessibilité des sites web publics, aligné sur les WCAG. EN 301 549 : norme européenne d'accessibilité des produits et services TIC. ADA (Americans with Disabilities Act) : base des contentieux d'accessibilité web aux États-Unis. Unruh Civil Rights Act (Californie). RGAA : référentiel général d'amélioration de l'accessibilité (France). Art. 21A Cst-GE, al. 4 : « L'État favorise l'inclusion numérique ».",
    explicationSimple: "Un empilement de textes, du standard technique international au droit constitutionnel genevois.",
    exemples: [
      {
        texte:
          "Le cas Domino's (Robles v. Domino's Pizza) : un client aveugle n'ayant pu commander via le site et l'application a poursuivi l'entreprise ; la Cour suprême des États-Unis a refusé en 2019 de se saisir du recours de Domino's, laissant s'appliquer la décision favorable au plaignant fondée sur l'ADA. Il montre que l'accessibilité numérique est un risque juridique et réputationnel réel, pour une entreprise ordinaire, sur un service banal.",
        source: 'cours-leclere',
      },
    ],
    motsCles: ['eCH-0059', 'ADA', 'RGAA', 'Domino’s'],
    sources: ['cours-leclere', 'encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'exclusion-indirecte',
    slug: 'exclusion-indirecte',
    nom: 'Exclusion indirecte (discrimination indirecte)',
    nomCourt: 'Exclusion indirecte',
    aliases: ['discrimination indirecte', 'effet discriminatoire'],
    categorie: 'accessibilite',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Une règle, une pratique ou une conception apparemment neutre qui désavantage en fait de manière disproportionnée les personnes en situation de handicap. Un service légal et performant exclut de fait une population sans intention discriminatoire.",
    explicationSimple:
      "Aucune règle ne dit « les personnes âgées ne sont pas bienvenues » — pourtant l'authentification obligatoire à double facteur, les 4 étapes pour joindre un humain et la police non ajustable produisent le même effet.",
    exemples: [
      {
        texte:
          "SilverDigital : −12 % de clients de plus de 65 ans en un an, corrélé aux obstacles d'accessibilité. Le cas nomme explicitement le risque : « un professeur en gouvernance numérique a évoqué le risque d'exclusion indirecte ».",
        cas: 'silverdigital',
        source: 'cas-silverdigital',
      },
    ],
    phraseExamen:
      "Ici le risque n'est pas juridique mais stratégique. La neutralité apparente d'un dispositif technique ne garantit pas la neutralité de ses effets, et l'absence de manquement à une règle existante n'exclut ni la discrimination indirecte, ni le risque futur lorsque la loi évolue.",
    pieges: [
      {
        erreur: 'Confondre obligation légale et responsabilité stratégique.',
        pourquoi: "C'est le cœur du cas SilverDigital : « aucun manquement légal constaté » n'exonère pas.",
      },
    ],
    motsCles: ['neutralité apparente', 'désavantage', 'intention', 'risque stratégique'],
    sources: ['encyclopedie', 'cas-silverdigital', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'discrimination-directe',
    slug: 'discrimination-directe',
    nom: 'Discrimination directe',
    categorie: 'accessibilite',
    type: 'notion',
    priorite: 3,
    definitionCours: "🔎 Traitement défavorable explicitement fondé sur le handicap.",
    explicationSimple: "La règle elle-même vise le groupe. Rare, et facile à identifier — contrairement à l'exclusion indirecte.",
    motsCles: ['explicite', 'traitement défavorable'],
    sources: ['encyclopedie'],
    provenance: 'interpretation',
  },
  {
    id: 'inclusion-numerique',
    slug: 'inclusion-numerique',
    nom: 'Inclusion numérique — les quatre verbes',
    nomCourt: 'Inclusion numérique',
    aliases: ['comprendre naviguer interagir bénéficier', 'fracture numérique'],
    categorie: 'accessibilite',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "L'inclusion numérique vise à ce que chacun puisse comprendre, naviguer, interagir et bénéficier des services numériques.",
    explicationSimple:
      "COMPRENDRE → le contenu est-il intelligible (langage clair, contraste, structure) ? NAVIGUER → peut-on se déplacer dans le service (clavier, ordre logique, repères) ? INTERAGIR → peut-on agir (formulaires, boutons, temps suffisant) ? BÉNÉFICIER → obtient-on réellement le service ?",
    phraseExamen:
      "Le quatrième verbe est décisif : un service techniquement conforme mais dont l'usager n'obtient pas ce qu'il cherche échoue. C'est la reprise exacte de l'idée du cours : tant que le consommateur final n'utilise pas toutes les fonctions, la valeur du produit est inférieure à 100 %.",
    motsCles: ['comprendre', 'naviguer', 'interagir', 'bénéficier'],
    sources: ['cours-leclere', 'encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'utilisabilite',
    slug: 'utilisabilite',
    nom: 'Utilisabilité',
    aliases: ['usability', 'facilité d’usage', 'UX'],
    categorie: 'accessibilite',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Accessibilité : le service peut techniquement être utilisé par une personne en situation de handicap (conformité WCAG, compatibilité lecteur d'écran). Utilisabilité : le service est effectivement facile et agréable à utiliser — efficacité, efficience, satisfaction.",
    explicationSimple:
      "Un service peut être accessible et inutilisable. Conforme AA sur le papier, mais avec un parcours en 12 étapes, un vocabulaire technique et des délais courts : la personne y accède sans réussir à s'en servir.",
    phraseExamen: "C'est exactement l'écart entre le U des 3U (Utilisable) et le B des quatre verbes (Bénéficier).",
    motsCles: ['efficacité', 'efficience', 'satisfaction', 'parcours'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'illectronisme',
    slug: 'illectronisme',
    nom: 'Illectronisme',
    aliases: ['illettrisme numérique', 'fracture numérique', 'UNI3'],
    categorie: 'accessibilite',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "Difficulté voire incapacité à utiliser les outils numériques, faute de compétences ou d'équipement. Le projet UNI3 (Université des seniors) cible les 60 ans et plus.",
    explicationSimple: "Ce n'est pas un handicap, c'est un manque de compétences ou d'équipement — mais l'effet d'exclusion est le même.",
    motsCles: ['compétences', 'équipement', 'seniors'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'kpi-accessibilite',
    slug: 'kpi-accessibilite',
    nom: "KPI d'accessibilité",
    nomCourt: 'KPI accessibilité',
    categorie: 'accessibilite',
    type: 'outil',
    priorite: 2,
    definitionCours:
      "Taux de conformité WCAG (niveau A / AA) — conformité technique. Nombre de non-conformités critiques. Taux de réussite des parcours clés par des utilisateurs en situation de handicap. Délai moyen d'accès à un conseiller humain. Taux d'abandon par segment d'âge. Nombre de réclamations liées à l'accessibilité. Part des collaborateurs formés à l'accessibilité. Part des nouveaux projets intégrant l'accessibilité dès la conception.",
    explicationSimple:
      "Distingue toujours KPI de MOYEN et KPI de RÉSULTAT. Le taux de conformité WCAG est un KPI de moyen (on a fait le travail technique). Le taux de réussite des parcours par de vrais utilisateurs est un KPI de résultat (le service fonctionne réellement).",
    phraseExamen: "Une bonne réponse propose au moins un KPI de moyen et un KPI de résultat.",
    motsCles: ['moyen', 'résultat', 'mesure', 'abandon'],
    sources: ['cours-leclere', 'encyclopedie'],
    provenance: 'cours',
  },
]
