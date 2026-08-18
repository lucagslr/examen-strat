import type { Jeux } from './types'

/**
 * MINI-JEUX.
 * Aucun jeu n'existe pour être amusant : chacun entraîne une erreur réelle d'examen.
 * L'application reste entièrement utilisable si les mini-jeux sont supprimés.
 */
export const jeux: Jeux = {
  // ------------------------------------------------- INTERNE / EXTERNE ----
  interneExterne: [
    { texte: "Le nombre de clients seniors augmente à Genève.", origine: 'EXTERNE', swot: 'OPPORTUNITE', explication: "Évolution démographique : facteur socioculturel du PESTEL. Elle existerait même sans l'entreprise." },
    { texte: "Notre marge opérationnelle a progressé de 15 %.", origine: 'INTERNE', swot: 'FORCE', explication: "Résultat obtenu par l'entreprise avec ses propres décisions." },
    { texte: "La taille de police de notre application n'est pas modifiable.", origine: 'INTERNE', swot: 'FAIBLESSE', explication: "Défaut de conception interne, corrigeable par l'entreprise." },
    { texte: "L'European Accessibility Act entre en application en juin 2025.", origine: 'EXTERNE', swot: 'OPPORTUNITE', explication: "Réglementation : facteur légal. Opportunité pour qui devance l'obligation — menace pour les retardataires." },
    { texte: "Nous avons perdu 12 % de nos clients de plus de 65 ans.", origine: 'EXTERNE', swot: 'MENACE', explication: "Le départ de clients est un fait de marché, donc externe. C'est le symptôme mesurable d'une exclusion indirecte." },
    { texte: "Nos ingénieurs maîtrisent une technique de fabrication simplifiée unique.", origine: 'INTERNE', swot: 'FORCE', explication: "Compétence opérationnelle : ce que l'entreprise sait faire." },
    { texte: "Le prix moyen de l'énergie augmente dans toute l'Europe.", origine: 'EXTERNE', swot: 'MENACE', explication: "Facteur économique du PESTEL. Menace pour les industries énergivores." },
    { texte: "Aucun collaborateur n'est responsable de l'accessibilité chez nous.", origine: 'INTERNE', swot: 'FAIBLESSE', explication: "Ressource organisationnelle manquante : absence de gouvernance dédiée." },
    { texte: "Des logiciels de déclaration fiscale remplacent progressivement les comptables.", origine: 'EXTERNE', swot: 'MENACE', explication: "Menace des substituts : le même besoin satisfait autrement." },
    { texte: "Nous détenons les droits exclusifs d'une œuvre patrimoniale régionale.", origine: 'INTERNE', swot: 'FORCE', explication: "Ressource de réputation, non transférable — la plus précieuse selon le cours." },
    { texte: "Les barrières à l'entrée de notre secteur sont très faibles.", origine: 'EXTERNE', swot: 'MENACE', explication: "Force de Porter : la menace agit même si personne n'entre, en bridant les prix." },
    { texte: "Notre structure de coûts est la plus légère du secteur.", origine: 'INTERNE', swot: 'FORCE', explication: "Choix d'architecture de valeur : externalisation, coûts variables plutôt que fixes." },
  ],

  // ------------------------------------------------------ PESTEL SCANNER ----
  pestel: [
    { texte: "Le taux d'intérêt augmente.", facteur: 'E', contexte: 'Entreprise fortement endettée en phase d’investissement', qualification: 'MENACE', explication: "Développement économique. Le renchérissement du crédit pèse sur un modèle qui a besoin de financer sa croissance." },
    { texte: "Le taux d'intérêt augmente.", facteur: 'E', contexte: 'Banque de détail disposant de dépôts importants', qualification: 'OPPORTUNITE', explication: "Même fait, qualification inverse : la marge d'intérêt se reconstitue. La catégorie seule ne suffit jamais — c'est tout l'intérêt du jeu." },
    { texte: "Une taxe carbone est instaurée sur les carburants.", facteur: 'P', contexte: 'Transporteur routier', qualification: 'MENACE', explication: "Orientation politique et fiscalité : hausse directe des coûts d'exploitation." },
    { texte: "Une taxe carbone est instaurée sur les carburants.", facteur: 'P', contexte: 'Opérateur de fret ferroviaire', qualification: 'OPPORTUNITE', explication: "Le mécanisme OPEP inversé : taxer rend le substitut compétitif de force." },
    { texte: "Le vieillissement de la population s'accélère.", facteur: 'S', contexte: 'Services financiers digitaux', qualification: 'OPPORTUNITE', explication: "Segment croissant — à condition de savoir le servir. Mal traité, il devient une menace." },
    { texte: "L'AI Act impose des obligations de transparence depuis août 2026.", facteur: 'L', contexte: 'Entreprise suisse déployant un chatbot en Europe', qualification: 'MENACE', explication: "Facteur légal : une entreprise suisse opérant en Europe y est soumise, même sans loi suisse équivalente." },
    { texte: "Le bien-être animal devient un critère d'achat déterminant.", facteur: 'EE', contexte: 'Producteur agroalimentaire conventionnel', qualification: 'MENACE', explication: "Dimension éthique du facteur fusionné environnemental et éthique. Risque réputationnel amplifié par les réseaux sociaux." },
    { texte: "Les limites planétaires dépassées imposent de nouveaux seuils réglementaires.", facteur: 'EE', contexte: 'Industriel énergivore', qualification: 'MENACE', explication: "Dimension environnementale : pression écologique traduite en contrainte." },
    { texte: "Les normes électriques diffèrent d'un pays à l'autre.", facteur: 'T', contexte: 'Fabricant exportateur d’appareils', qualification: 'MENACE', explication: "L'hétérogénéité des normes ajoute des coûts d'adaptation de production et de distribution." },
    { texte: "De nouvelles technologies de refroidissement des data centers arrivent à maturité.", facteur: 'T', contexte: 'Hébergeur suisse', qualification: 'OPPORTUNITE', explication: "Innovation technologique à encourager pour appuyer la stratégie — lecture du Cours 4." },
    { texte: "Une loi anti-gaspillage impose le don des invendus alimentaires.", facteur: 'L', contexte: 'Grande distribution', qualification: 'MENACE', explication: "Facteur légal : la règle ET son système répressif contraignent l'organisation." },
    { texte: "L'État subventionne les champions nationaux de l'énergie verte.", facteur: 'P', contexte: 'PME suisse du photovoltaïque', qualification: 'OPPORTUNITE', explication: "Le gouvernement acteur du marché — ce qui préfigure la 6ᵉ force de Porter." },
  ],

  // ---------------------------------------------------------- QUEL OUTIL ----
  quelOutil: [
    { situation: "Je veux comprendre la pression exercée par mes fournisseurs.", outil: 'porter-five-forces', distracteurs: ['pestel', 'swot', 'bmc', 'saf'], explication: "Pouvoir de négociation des fournisseurs : une des cinq forces. Attention, la main-d'œuvre compte aussi comme fournisseur." },
    { situation: "Je veux anticiper l'effet d'un changement de gouvernement sur mon secteur.", outil: 'pestel', distracteurs: ['porter-five-forces', 'chaine-de-valeur', 'rcov'], explication: "Facteur politique du macro-environnement : ce fait touche tous les secteurs, pas seulement le mien." },
    { situation: "Je veux savoir quelles activités internes créent réellement de la valeur.", outil: 'chaine-de-valeur', distracteurs: ['pestel', 'porter-five-forces', 'donut'], explication: "Elle met à plat la chaîne d'activités et met en relief celles qui créent de la valeur et celles qui coûtent." },
    { situation: "Je dois trancher entre trois options stratégiques.", outil: 'saf', distracteurs: ['swot', 'bmc', 'erac'], explication: "Le SAF est un test avant décollage. Il prend tout son sens dans la COMPARAISON de plusieurs options." },
    { situation: "Je veux décrire comment mon entreprise gagne de l'argent, bloc par bloc.", outil: 'bmc', distracteurs: ['swot', 'pestel', 'saf'], explication: "Neuf blocs, de la clientèle à la structure de coûts. À compléter par Porter, car le Canvas néglige la concurrence." },
    { situation: "Je veux synthétiser tout mon diagnostic pour faire émerger des enjeux.", outil: 'swot', distracteurs: ['pestel', 'rcov', 'toile-porter'], explication: "Vision synthétique. Il ne produit rien lui-même : il range ce que les autres outils ont produit." },
    { situation: "Je veux savoir qui peut bloquer mon projet et à quel point cela l'intéresse.", outil: 'matrice-pouvoir-interet', distracteurs: ['porter-five-forces', 'swot', 'bmc'], explication: "Deux axes, quatre quadrants, quatre traitements différents." },
    { situation: "Je veux sortir d'un marché saturé en réinventant mon offre.", outil: 'erac', distracteurs: ['saf', 'pestel', 'chaine-de-valeur'], explication: "Exclure, Renforcer, Atténuer, Créer — pour produire une innovation-valeur." },
    { situation: "Je veux comptabiliser les effets de mon activité sur des tiers.", outil: 'bmc-durable', distracteurs: ['bmc', 'rcov', 'toile-porter'], explication: "Les blocs 10 et 11 élargissent le compte de résultat à ce qui n'y figure pas." },
    { situation: "Je veux comprendre pourquoi mes clients seniors abandonnent l'application.", outil: 'collecte-donnees-utilisateurs', distracteurs: ['pestel', 'saf', 'erac'], explication: "Observer d'abord (ce qu'ils FONT), interviewer ensuite (pourquoi), sonder enfin (combien)." },
    { situation: "Je veux évaluer si mon service numérique est soutenable.", outil: 'quatre-criteres-donut', distracteurs: ['bmc', 'porter-five-forces', 'matrice-pouvoir-interet'], explication: "Besoin social réel, accessibilité, impacts sur tout le cycle de vie, absence de hausse artificielle des usages." },
    { situation: "Je veux décider quoi externaliser sans perdre mon avantage.", outil: 'chaine-de-valeur', distracteurs: ['pestel', 'donut', 'cinq-p'], explication: "On externalise les fonctions non stratégiques inefficaces — jamais ce qui fonde l'avantage concurrentiel." },
  ],

  // -------------------------------------------------------- PORTER ARENA ----
  porterArena: [
    {
      id: 'eaux',
      nom: "L'industrie mondiale des eaux embouteillées",
      description:
        "Des entreprises mondiales (Nestlé, Danone, mais aussi Coca-Cola et Pepsi) coexistent avec des acteurs locaux disposant d'un accès direct aux sources. Les sources et leur qualité sont importantes, mais les industriels ont diversifié les matériaux (plastique et verre) et mis le transport en concurrence. Les acheteurs sont de types variés — GMS, Horeca, individus : il est facile de changer de marque, mais les préoccupations sanitaires soutiennent la demande. Les barrières d'entrée sont hautes du fait des dépenses de communication et de l'accès aux sources. Substituts directs : l'eau du robinet et toutes les autres boissons.",
      notes: [
        { force: 'rivalite-concurrents', note: 4, justification: "La concurrence comprend des entreprises mondiales (Nestlé, Danone, Coca-Cola, Pepsi) et des entreprises locales ayant un accès direct aux sources." },
        { force: 'pouvoir-fournisseurs', note: 3, justification: "Les sources et leur qualité sont très importantes, mais les entreprises ont minimisé les conséquences en diversifiant les matériaux et en faisant jouer la concurrence sur le transport." },
        { force: 'pouvoir-clients', note: 3, justification: "Acheteurs de différents types ; il est facile de changer de marque ou d'utiliser un substitut, MAIS les préoccupations sanitaires augmentent la demande. La nuance produit la note intermédiaire." },
        { force: 'menace-nouveaux-entrants', note: 2, justification: "Les barrières d'entrée sont hautes : dépenses pour la communication et accès aux sources locales." },
        { force: 'menace-substituts', note: 4, justification: "Il y a des substituts directs, comme l'eau du robinet et toutes les autres boissons." },
      ],
      conclusion:
        "Plus un océan rouge : concurrence très forte nécessitant une réduction des coûts par la taille et imposant une forte différenciation (packaging, communication, image). D'où la tendance des entreprises mondiales à acquérir les concurrents locaux, pour contrôler les sources et accroître leur position relative.",
    },
    {
      id: 'services-financiers-digitaux',
      nom: 'Les services financiers digitaux à Genève',
      description:
        "Le marché compte des banques traditionnelles en cours de digitalisation et des néobanques agressives. Les clients changent facilement d'établissement, les comparateurs en ligne étant nombreux. Les barrières d'entrée restent élevées : agréments réglementaires, capital, conformité. Les fournisseurs critiques sont peu nombreux : hyperscalers pour l'hébergement, éditeurs de core banking. Les substituts progressent : paiement entre particuliers, portefeuilles de plateformes non bancaires. L'État est très présent : FINMA, LPD, European Accessibility Act.",
      notes: [
        { force: 'rivalite-concurrents', note: 4, justification: "Banques traditionnelles digitalisées et néobanques se disputent les mêmes segments, avec une guerre de l'expérience utilisateur plutôt que des prix." },
        { force: 'pouvoir-fournisseurs', note: 4, justification: "Dépendance forte aux hyperscalers et aux éditeurs de core banking, peu nombreux et difficilement substituables à court terme — c'est aussi un enjeu de souveraineté numérique." },
        { force: 'pouvoir-clients', note: 3, justification: "Le changement d'établissement est facilité par les comparateurs, mais l'inertie bancaire et les coûts de changement administratifs le tempèrent." },
        { force: 'menace-nouveaux-entrants', note: 2, justification: "Agréments réglementaires, exigences de capital et coûts de conformité constituent des barrières hautes." },
        { force: 'menace-substituts', note: 3, justification: "Paiement entre particuliers et portefeuilles de plateformes captent des usages, sans remplacer encore la relation bancaire complète." },
        { force: 'etat-sixieme-force', note: 4, justification: "FINMA, LPD, AI Act et European Accessibility Act structurent fortement le champ des possibles." },
      ],
      conclusion:
        "Secteur peu attractif structurellement, dominé par la pression des fournisseurs et de l'État. L'avantage ne peut donc pas venir des coûts : il doit venir d'une ressource peu imitable — la confiance et la qualité de la relation, y compris pour les publics vulnérables.",
    },
  ],

  // ------------------------------------------------------------ SAF JUDGE ----
  saf: [
    { affirmation: "L'option répond directement à la menace de perte des clients seniors identifiée au SWOT.", critere: 'SOUHAITABILITE', explication: "Correspondance entre l'environnement et les ressources : elle prend en compte les menaces clés." },
    { affirmation: "Elle exploite l'opportunité du vieillissement de la population.", critere: 'SOUHAITABILITE', explication: "Prise en compte des opportunités clés." },
    { affirmation: "Les actionnaires refuseront de dégrader la baisse de 20 % des coûts de support.", critere: 'ACCEPTABILITE', explication: "Attractivité auprès d'une partie prenante à pouvoir élevé et intérêt fort." },
    { affirmation: "Le niveau de risque réputationnel est-il tolérable ?", critere: 'ACCEPTABILITE', explication: "Question explicite du critère : « le niveau de risque est-il acceptable ? »" },
    { affirmation: "Les associations d'aînés relaieront favorablement la démarche.", critere: 'ACCEPTABILITE', explication: "Les parties prenantes vont-elles s'opposer, ou soutenir ?" },
    { affirmation: "Dispose-t-on des ressources financières pour financer le canal humain ?", critere: 'FAISABILITE', explication: "Première question du critère : ressources financières disponibles ou acquérables." },
    { affirmation: "Les compétences de conseil existent-elles encore en interne ?", critere: 'FAISABILITE', explication: "Deuxième question : ressources humaines et savoir-faire." },
    { affirmation: "Aucune contrainte légale ne s'oppose à un canal humain prioritaire.", critere: 'FAISABILITE', explication: "Troisième question : contraintes exogènes, notamment légales." },
    { affirmation: "Le routage prioritaire et la police ajustable sont techniquement réalisables.", critere: 'FAISABILITE', explication: "Contraintes internes de mise en œuvre." },
    { affirmation: "Le retour attendu sur cette option est-il suffisant au regard de l'investissement ?", critere: 'ACCEPTABILITE', explication: "« Le retour attendu est-il acceptable ? » — c'est bien l'acceptabilité, pas la faisabilité." },
    { affirmation: "La force « relation de confiance depuis vingt ans » est mobilisée par cette option.", critere: 'SOUHAITABILITE', explication: "Cohérence entre l'option et les ressources de l'entreprise." },
  ],

  // ------------------------------------------------------- CHAÎNE DE VALEUR ----
  chaineValeurOrdre: ['logistique-approvisionnement', 'production', 'logistique-commercialisation', 'marketing-ventes', 'services'],
  chaineValeurLeviers: [
    { element: "Rapprocher les fournisseurs pour réduire les kilomètres parcourus", activite: 'logistique-approvisionnement', explication: "Modèle Hambach : la localisation des fournisseurs sur le site réduit les transports." },
    { element: "Alimenter l'usine en énergie renouvelable", activite: 'production', explication: "Levier environnemental direct sur le maillon de transformation." },
    { element: "Mutualiser les tournées de livraison et réutiliser les emballages", activite: 'logistique-commercialisation', explication: "Optimisation du dernier kilomètre et des contenants." },
    { element: "Éviter le greenwashing et orienter la demande vers les offres sobres", activite: 'marketing-ventes', explication: "Le marketing peut réduire ou aggraver l'impact selon la demande qu'il stimule." },
    { element: "Proposer la réparation et la reprise en fin de vie", activite: 'services', explication: "La chaîne de valeur durable va jusqu'au recyclage ou à la fin de vie." },
    { element: "Mettre en place une comptabilité carbone et une gouvernance climat", activite: 'infrastructure-entreprise', explication: "Activité de soutien : impact transversal sur toutes les unités." },
    { element: "Former les équipes à la sobriété et organiser le télétravail", activite: 'grh', explication: "Activité de soutien — attention toutefois à l'effet rebond du télétravail." },
    { element: "Éco-concevoir les logiciels et réduire le stockage de données", activite: 'developpement-technologique', explication: "Sobriété numérique appliquée à l'activité de soutien technique." },
    { element: "Appliquer les 7 principes des achats responsables aux fournisseurs", activite: 'approvisionnements', explication: "Ne pas confondre avec la logistique d'approvisionnement : ici on NÉGOCIE et on ACQUIERT." },
  ],

  // ------------------------------------------------------------ BMC PUZZLE ----
  bmc: [
    { element: 'Cotisation annuelle versée par les adhérents', bloc: 'flux-revenus', explication: "Revenu récurrent et prévisible, indépendant du volume vendu." },
    { element: 'Redevance de 3 % sur les ventes sous label', bloc: 'flux-revenus', explication: "Revenu variable, corrélé au succès du label — mais il doit rester limité." },
    { element: "Les droits de l'œuvre de Jean-Jacques Waltz", bloc: 'ressources-cles', blocsAcceptes: ['ressources-cles', 'proposition-de-valeur'], explication: "Ressource clé avant tout — mais le label fonde aussi la proposition de valeur. Un élément peut légitimement relever de deux blocs : c'est ce qu'il faut savoir expliquer." },
    { element: '24 entreprises alsaciennes adhérentes', bloc: 'partenaires-cles', blocsAcceptes: ['partenaires-cles', 'segments-clients'], explication: "Partenaires clés ET segment de clients : « les clients sont des partenaires », c'est le renversement du modèle." },
    { element: 'Corners en grande distribution', bloc: 'canaux', explication: "Modalité par laquelle l'entreprise entre en contact avec le consommateur." },
    { element: 'Les enseignes de grande distribution', bloc: 'segments-clients', explication: "Segment B2B — celui qu'on oublie le plus souvent dans ce cas." },
    { element: 'Une dizaine de salariés', bloc: 'structure-couts', explication: "Poids de la structure : le modèle est volontairement asset-light." },
    { element: 'La logistique reste à la charge des adhérents', bloc: 'structure-couts', blocsAcceptes: ['structure-couts', 'partenaires-cles'], explication: "Décision d'architecture : faire faire, donc coûts variables plutôt que fixes." },
    { element: "Sélectionner et animer le réseau d'adhérents", bloc: 'activites-cles', explication: "Ce que l'entreprise doit absolument savoir faire pour que le modèle fonctionne." },
    { element: 'Chatbot disponible 24 h/24', bloc: 'canaux', blocsAcceptes: ['canaux', 'relations-clients'], explication: "Canal de contact ET dispositif de relation client : les deux lectures se défendent." },
    { element: "Un label garantissant qualité, proximité et identité régionale", bloc: 'proposition-de-valeur', explication: "La promesse faite au client — unique, pour des clients différents." },
    { element: "Le programme de fidélité et la sensibilisation à la consommation responsable", bloc: 'relations-clients', explication: "Acquérir, fidéliser, développer les ventes — et, en version durable, sensibiliser." },
  ],

  // ------------------------------------------------------ NE PAS CONFONDRE ----
  duels: [
    {
      id: 'duel-ressource-competence', priorite: 1,
      gauche: { notion: 'ressources', libelle: 'RESSOURCE', critere: "ce que l'entreprise POSSÈDE" },
      droite: { notion: 'competences', libelle: 'COMPÉTENCE', critere: "ce que l'entreprise SAIT FAIRE" },
      cartes: [
        { texte: 'Un logiciel propriétaire', cote: 'gauche', explication: "Actif technologique détenu : c'est un stock." },
        { texte: 'La capacité à gérer une crise médiatique', cote: 'droite', explication: "Aptitude opérationnelle et technique — le cours classe la communication de crise ici." },
        { texte: 'La réputation de la marque', cote: 'gauche', explication: "Ressource de réputation : intangible mais possédée." },
        { texte: 'Savoir coordonner des équipes internationales', cote: 'droite', explication: "Aptitude managériale explicitement citée par le cours." },
        { texte: 'Un site de production et ses équipements', cote: 'gauche', explication: "Ressource physique, tangible et cessible." },
        { texte: "Combiner la construction automobile de Daimler et la fabrication simplifiée de Swatch", cote: 'droite', explication: "C'est la définition même d'une compétence : combiner et coordonner des ressources." },
      ],
    },
    {
      id: 'duel-force-opportunite', priorite: 1,
      gauche: { notion: 'force', libelle: 'FORCE', critere: 'interne, dépend de l’entreprise' },
      droite: { notion: 'opportunite', libelle: 'OPPORTUNITÉ', critere: 'externe, existerait sans elle' },
      cartes: [
        { texte: 'Une base de clients fidèles depuis vingt ans', cote: 'gauche', explication: "Construite par l'entreprise : elle disparaîtrait avec elle." },
        { texte: 'Le vieillissement de la population genevoise', cote: 'droite', explication: "Évolution démographique indépendante de l'entreprise." },
        { texte: 'Un chatbot disponible 24 h/24', cote: 'gauche', explication: "Capacité interne déployée par l'entreprise." },
        { texte: "L'entrée en vigueur de l'European Accessibility Act", cote: 'droite', explication: "Réglementation externe — opportunité pour qui la devance." },
        { texte: 'Une marge opérationnelle supérieure au secteur', cote: 'gauche', explication: "Performance propre à l'entreprise." },
        { texte: "L'apparition de financements verts", cote: 'droite', explication: "Facteur économique du macro-environnement." },
      ],
    },
    {
      id: 'duel-pestel-porter', priorite: 1,
      gauche: { notion: 'pestel', libelle: 'PESTEL', critere: 'macro — touche tous les secteurs' },
      droite: { notion: 'porter-five-forces', libelle: 'PORTER', critere: 'industrie — touche mon secteur' },
      cartes: [
        { texte: "L'inflation atteint 4 %", cote: 'gauche', explication: "Facteur économique du macro-environnement." },
        { texte: 'Mes fournisseurs sont concentrés et peuvent imposer leurs prix', cote: 'droite', explication: "Pouvoir de négociation des fournisseurs." },
        { texte: 'Un nouveau gouvernement modifie la politique commerciale', cote: 'gauche', explication: "Facteur politique." },
        { texte: 'Les clients changent facilement de marque', cote: 'droite', explication: "Coût de changement faible → pouvoir des clients élevé." },
        { texte: "L'eau du robinet remplace l'eau en bouteille", cote: 'droite', explication: "Menace des substituts." },
        { texte: 'Les attentes sociétales en matière de durabilité progressent', cote: 'gauche', explication: "Facteur socioculturel." },
      ],
    },
    {
      id: 'duel-privacy', priorite: 1,
      gauche: { notion: 'privacy-by-design', libelle: 'BY DESIGN', critere: 'dès la conception' },
      droite: { notion: 'privacy-by-default', libelle: 'BY DEFAULT', critere: 'dans les réglages livrés' },
      cartes: [
        { texte: "L'architecture chiffre les données de bout en bout dès le premier prototype", cote: 'gauche', explication: "Choix d'architecture pris au moment de la conception." },
        { texte: 'La case de consentement publicitaire est décochée à la livraison', cote: 'droite', explication: "État du réglage par défaut, protecteur sans action de l'utilisateur." },
        { texte: 'Le profil est privé tant que l’utilisateur ne le rend pas public', cote: 'droite', explication: "Paramètre le plus protecteur activé d'origine." },
        { texte: "L'analyse d'impact est réalisée avant le développement", cote: 'gauche', explication: "Démarche intégrée en amont, pas ajoutée après coup." },
      ],
    },
    {
      id: 'duel-substitut-concurrent', priorite: 1,
      gauche: { notion: 'rivalite-concurrents', libelle: 'CONCURRENT', critere: 'même métier' },
      droite: { notion: 'menace-substituts', libelle: 'SUBSTITUT', critere: 'même besoin, autre moyen' },
      cartes: [
        { texte: 'Evian face à Vittel', cote: 'gauche', explication: "Deux eaux embouteillées : même métier." },
        { texte: "L'eau du robinet face à l'eau en bouteille", cote: 'droite', explication: "Même besoin — boire — satisfait autrement." },
        { texte: 'Un logiciel de déclaration fiscale face à un comptable', cote: 'droite', explication: "Exemple exact du cours : mêmes besoins de base, façon différente." },
        { texte: 'Une néobanque face à une banque traditionnelle', cote: 'gauche', explication: "Même activité réglementée, même métier." },
        { texte: 'La voiture électrique face au moteur à combustion', cote: 'droite', explication: "Exemple du cours, avec répercussions en cascade jusqu'à la métallurgie." },
      ],
    },
    {
      id: 'duel-approvisionnement', priorite: 1,
      gauche: { notion: 'approvisionnements', libelle: 'APPROVISIONNEMENT (soutien)', critere: 'négocie et acquiert' },
      droite: { notion: 'logistique-approvisionnement', libelle: "LOGISTIQUE D'APPROVISIONNEMENT (principale)", critere: 'réceptionne et manipule' },
      cartes: [
        { texte: 'Négocier un contrat-cadre avec un fournisseur de composants', cote: 'gauche', explication: "Fonction achat : activité de soutien." },
        { texte: 'Réceptionner et entreposer les matières premières', cote: 'droite', explication: "Logistique interne : activité principale." },
        { texte: "Inclure des clauses environnementales dans un appel d'offres", cote: 'gauche', explication: "Achat responsable — donc fonction achat." },
        { texte: 'Contrôler les stocks et organiser la manutention interne', cote: 'droite', explication: "Réception, stockage et manutention interne." },
      ],
    },
    {
      id: 'duel-vision-mission', priorite: 2,
      gauche: { notion: 'vision', libelle: 'VISION', critere: "formalise l'avenir" },
      droite: { notion: 'mission', libelle: 'MISSION', critere: 'explicite la finalité aux parties prenantes' },
      cartes: [
        { texte: "« Un ordinateur personnel sur chaque bureau »", cote: 'gauche', explication: "Bill Gates, 1974 : une image de l'avenir." },
        { texte: "« Apporter l'inspiration et l'innovation à chaque athlète dans le monde »", cote: 'droite', explication: "Nike, 2017 : une finalité adressée à des parties prenantes." },
        { texte: "« Nous voulons être le leader européen d'ici 2035 »", cote: 'gauche', explication: "Projection dans l'avenir, datée." },
        { texte: "« Notre raison d'être est de rendre la finance accessible à tous »", cote: 'droite', explication: "Finalité, objectif ultime — c'est le bloc (0) du BMC durable." },
      ],
    },
    {
      id: 'duel-but-objectif', priorite: 2,
      gauche: { notion: 'buts-objectifs', libelle: 'BUT (qualitatif)', critere: 'une direction' },
      droite: { notion: 'buts-objectifs', libelle: 'OBJECTIF (quantitatif)', critere: 'un résultat chiffré' },
      cartes: [
        { texte: '« Améliorer la satisfaction client »', cote: 'gauche', explication: "Aucune mesure : c'est une direction." },
        { texte: '« Réduire de 20 % les émissions d’ici 2030 »', cote: 'droite', explication: "Chiffré et daté." },
        { texte: '« Faire de bons produits plutôt que de l’argent »', cote: 'gauche', explication: "Jonathan Ive, Apple 2012 — un but qualitatif." },
        { texte: '« Infrastructures propres à 96 % en énergie verte »', cote: 'droite', explication: "Objectif environnemental quantifié d'Apple." },
      ],
    },
    {
      id: 'duel-durabilite', priorite: 1,
      gauche: { notion: 'durabilite-forte', libelle: 'DURABILITÉ FORTE', critere: 'capital naturel non substituable' },
      droite: { notion: 'durabilite-faible', libelle: 'DURABILITÉ FAIBLE', critere: 'substitution admise' },
      cartes: [
        { texte: 'Les limites planétaires sont une condition non négociable de toute activité', cote: 'gauche', explication: "Position explicitement défendue par le cours." },
        { texte: 'Un gain économique peut compenser une perte de biodiversité', cote: 'droite', explication: "Logique de substitution des capitaux." },
        { texte: 'Le Wedding Cake : la biosphère est le socle de la société et de l’économie', cote: 'gauche', explication: "Représentation visuelle de la durabilité forte." },
        { texte: 'Les trois cercles de taille égale suggèrent un arbitrage possible', cote: 'droite', explication: "Le modèle d'Elkington est, en ce sens, une représentation de durabilité faible." },
      ],
    },
    {
      id: 'duel-accessibilite-utilisabilite', priorite: 2,
      gauche: { notion: 'accessibilite-numerique', libelle: 'ACCESSIBILITÉ', critere: 'peut techniquement être utilisé' },
      droite: { notion: 'utilisabilite', libelle: 'UTILISABILITÉ', critere: 'est effectivement facile à utiliser' },
      cartes: [
        { texte: 'Le site est compatible avec les lecteurs d’écran', cote: 'gauche', explication: "Conformité technique, principe « Robuste »." },
        { texte: 'Le parcours de souscription ne compte que trois étapes claires', cote: 'droite', explication: "Efficacité et efficience du parcours réel." },
        { texte: 'Les contrastes respectent le niveau AA', cote: 'gauche', explication: "Critère de conformité mesurable." },
        { texte: "Une cliente de 76 ans obtient un rendez-vous sans aide extérieure", cote: 'droite', explication: "C'est le quatrième verbe : BÉNÉFICIER." },
      ],
    },
    {
      id: 'duel-rne-rse', priorite: 2,
      gauche: { notion: 'rne', libelle: 'RNE', critere: 'impacts du NUMÉRIQUE' },
      droite: { notion: 'durabilite', libelle: 'RSE / durabilité', critere: "impacts de l'activité en général" },
      cartes: [
        { texte: "Politique d'usage responsable de l'IA et transparence algorithmique", cote: 'gauche', explication: "Axe éthique et gouvernance de la RNE." },
        { texte: 'Réduction des émissions de la flotte de véhicules', cote: 'droite', explication: "Impact environnemental général, hors périmètre numérique." },
        { texte: "Allongement de la durée de vie du parc informatique", cote: 'gauche', explication: "Axe environnement de la RNE." },
        { texte: 'Conditions de travail dans les exploitations agricoles fournisseuses', cote: 'droite', explication: "Dimension sociale de la RSE, hors numérique." },
      ],
    },
    {
      id: 'duel-3r-ordre', priorite: 1,
      gauche: { notion: 'trois-r', libelle: 'RÉDUIRE (priorité 1)', critere: "éviter de produire le déchet" },
      droite: { notion: 'reconditionnement', libelle: 'RÉUTILISER (priorité 2)', critere: 'même fonction, autre propriétaire' },
      cartes: [
        { texte: 'Faire réparer son ordinateur plutôt que d’en acheter un neuf', cote: 'gauche', explication: "Le cours classe explicitement la réparation dans « Réduire »." },
        { texte: 'Acheter un smartphone reconditionné sur un marché d’occasion', cote: 'droite', explication: "Même fonction, mais par des personnes autres que les propriétaires initiaux." },
        { texte: "Limiter les emballages et produire des emballages réutilisables", cote: 'gauche', explication: "Cité dans la définition de « Réduire »." },
        { texte: "Revendre le parc informatique amorti à un reconditionneur", cote: 'droite', explication: "Prolongation de la vie utile par changement de propriétaire." },
      ],
    },
  ],

  // -------------------------------------------------------- CHAÎNE LOGIQUE ----
  chainesLogiques: [
    { id: 'chaine-diagnostic', intitule: 'Du diagnostic à la décision', ordre: ['pestel', 'porter-five-forces', 'swot', 'saf'], explication: "Macro, puis industrie, puis synthèse, puis évaluation. Le SWOT ne peut pas précéder ce qui l'alimente ; le SAF ne peut pas précéder les options qu'il teste." },
    { id: 'chaine-avantage', intitule: "La construction de l'avantage", ordre: ['ressources', 'competences', 'chaine-de-valeur', 'avantage-concurrentiel'], explication: "Posséder, savoir faire, exercer, surperformer. Chaque maillon conditionne le suivant." },
    { id: 'chaine-bm', intitule: 'Du client au profit', ordre: ['segments-clients', 'proposition-de-valeur', 'flux-revenus', 'equation-de-profit'], explication: "La proposition de valeur est « la source des flux de revenus que l'entreprise est en mesure de dégager »." },
    { id: 'chaine-sobriete', intitule: 'La sobriété numérique', ordre: ['besoins-fondamentaux', 'sobriete-numerique', 'effet-rebond', 'quatre-criteres-donut'], explication: "Questionner le besoin, choisir le moyen, anticiper le rebond, vérifier la compatibilité avec le donut." },
    { id: 'chaine-circularite', intitule: 'La hiérarchie circulaire', ordre: ['eco-conception', 'trois-r', 'economie-circulaire', 'odd-12'], explication: "Agir à la source, puis appliquer la hiérarchie, ce qui produit la circularité et sert l'ODD 12." },
    { id: 'chaine-bmc-durable', intitule: 'Vers le BM durable', ordre: ['business-model', 'externalite-negative', 'bmc-durable', 'metamorphose-bmc'], explication: "Décrire le modèle, repérer ce qu'il fait subir aux tiers, l'élargir en 12 blocs, puis transformer chaque bloc." },
  ],

  // -------------------------------------------------------- MAILLON MANQUANT ----
  maillonsManquants: [
    { id: 'mm-1', chaine: ['ressources', null, 'chaine-de-valeur', 'avantage-concurrentiel'], reponse: 'competences', distracteurs: ['pestel', 'bmc', 'donut'], explication: "La ressource est nécessaire, la compétence est ce qui la rend rentable." },
    { id: 'mm-2', chaine: ['pestel', null, 'swot', 'saf'], reponse: 'porter-five-forces', distracteurs: ['rcov', 'trois-r', 'wcag'], explication: "Le macro éclaire le micro : PESTEL puis Porter, avant la synthèse." },
    { id: 'mm-3', chaine: ['business-model', null, 'bmc-durable'], reponse: 'externalite-negative', distracteurs: ['toile-porter', 'focus-group', 'illectronisme'], explication: "C'est précisément ce que le Canvas classique ne voit pas, et que le bloc 11 comptabilise." },
    { id: 'mm-4', chaine: ['transformation-numerique', null, 'sobriete-numerique'], reponse: 'effet-rebond', distracteurs: ['cinq-p', 'marge', 'das'], explication: "Sans effet rebond, l'efficacité suffirait et la sobriété serait inutile." },
    { id: 'mm-5', chaine: ['accessibilite-numerique', null, 'avantage-concurrentiel-durable'], reponse: 'double-levier-accessibilite', distracteurs: ['economie-lineaire', 'concentration', 'pets'], explication: "C'est le double levier qui fait passer l'accessibilité du statut de coût à celui d'avantage." },
    { id: 'mm-6', chaine: ['odd-12', null, 'economie-circulaire'], reponse: 'trois-r', distracteurs: ['erac', 'saf', 'grh'], explication: "La cible de l'ODD 12 énonce prévention, réduction, recyclage et réutilisation — c'est la hiérarchie des 3R." },
    { id: 'mm-7', chaine: ['parties-prenantes', null, 'saf'], reponse: 'acceptabilite', distracteurs: ['faisabilite', 'marge', 'canaux'], explication: "L'analyse des parties prenantes est l'outil explicitement associé au critère d'acceptabilité." },
    { id: 'mm-8', chaine: ['limites-planetaires', null, 'donut'], reponse: 'plafond-ecologique', distracteurs: ['plancher-social', 'biocapacite', 'idg'], explication: "Les 9 limites constituent le bord extérieur du donut." },
  ],

  // ---------------------------------------------------------- PHRASE D'EXAMEN ----
  phrasesExamen: [
    { id: 'pe-1', segments: ['Le véritable arbitrage se situe entre ', null, ' et ', null, '.'], reponses: ['le court terme', 'le long terme'], propositions: ['le court terme', 'le long terme', 'le prix', 'la qualité'], notions: ['tensions-strategiques'], explication: "Une bonne conclusion prend position ET nomme la tension." },
    { id: 'pe-2', segments: ["Le SWOT n'est pas un outil de collecte mais un outil de ", null, '.'], reponses: ['synthèse'], propositions: ['synthèse', 'décision', 'mesure', 'prévision'], notions: ['swot'], explication: "Il n'a aucun contenu propre : il range ce que les autres outils ont produit." },
    { id: 'pe-3', segments: ['Le numérique soutient la durabilité s’il est lui-même ', null, ", sinon l'", null, ' annule les gains.'], reponses: ['sobre', 'effet rebond'], propositions: ['sobre', 'efficace', 'effet rebond', 'effet de levier'], notions: ['sobriete-numerique', 'effet-rebond'], explication: "La phrase-réflexe de toute question numérique × durabilité." },
    { id: 'pe-4', segments: ['Bien intégrée, la durabilité est une ', null, ' distinctive ; subie, elle devient une ', null, ' de coût.'], reponses: ['force', 'faiblesse'], propositions: ['force', 'faiblesse', 'opportunité', 'menace'], notions: ['swot', 'force', 'faiblesse'], explication: "Réponse à la question officielle n°3." },
    { id: 'pe-5', segments: ['Ici le risque n’est pas ', null, ' mais ', null, '.'], reponses: ['juridique', 'stratégique'], propositions: ['juridique', 'stratégique', 'financier', 'technique'], notions: ['exclusion-indirecte'], explication: "Phrase-clé du cas SilverDigital." },
    { id: 'pe-6', segments: ['Le BM durable internalise aujourd’hui les ', null, ' pour sécuriser la ', null, ' demain.'], reponses: ['externalités', 'viabilité'], propositions: ['externalités', 'marges', 'viabilité', 'croissance'], notions: ['bmc-durable', 'externalite-negative'], explication: "Réponse à la tension court terme / long terme." },
    { id: 'pe-7', segments: ['Le meilleur déchet est celui qu’on ne ', null, ' pas.'], reponses: ['produit'], propositions: ['produit', 'recycle', 'trie', 'vend'], notions: ['trois-r'], explication: "Justifie l'ordre des 3R : réduire d'abord." },
    { id: 'pe-8', segments: ['Les gens ne font pas ce qu’ils ', null, ' : il faut observer l’usage ', null, '.'], reponses: ['disent', 'réel'], propositions: ['disent', 'pensent', 'réel', 'prévu'], notions: ['observation'], explication: "Principe fondateur de la collecte de données utilisateurs." },
    { id: 'pe-9', segments: ['On évalue ', null, ', parce qu’après, c’est mesurable mais trop tard pour ', null, '.'], reponses: ['avant', 'corriger'], propositions: ['avant', 'après', 'corriger', 'décider'], notions: ['saf'], explication: "Justification du SAF comme test avant décollage." },
    { id: 'pe-10', segments: ['Le critère central n’est pas « moins », mais moins de ', null, ', sans réduire l’', null, '.'], reponses: ['superflu', 'essentiel'], propositions: ['superflu', 'confort', 'essentiel', 'accessoire'], notions: ['sobriete-numerique', 'sobriete-injuste'], explication: "Évite de présenter la sobriété comme une privation." },
  ],
}
