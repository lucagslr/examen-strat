import type { Cas } from './types'

/**
 * BIBLIOTHÈQUE DE CAS.
 * Les six cas du cours, chacun avec quatre modes d'usage dans l'application :
 * LIRE · ANALYSER (marquage d'extraits) · S'ENTRAÎNER · CORRIGÉ.
 */
export const cas: Cas[] = [
  // =========================================================== CIO ==========
  {
    id: 'cio',
    nom: 'Le CIO',
    sousTitre: 'Analyse des parties prenantes — corrigé officiel TP01',
    categorie: 'diagnostic',
    priorite: 2,
    texte: [
      "Le Comité international olympique organise les Jeux et attribue leur organisation à des villes candidates. Son fonctionnement dépend d'un ensemble d'acteurs aux intérêts divergents, dont certains disposent d'un pouvoir considérable sur ses décisions.",
      "Les athlètes constituent la ressource clé de l'organisation : le CIO vise la participation des meilleurs d'entre eux. Pourtant, jusqu'à récemment, leurs intérêts étaient peu pris en compte dans les décisions. Depuis 1981, une commission des athlètes permet à leurs représentants d'exprimer leurs avis sur les processus de décision et de qualification.",
      "Les villes et pays candidats doivent être suffisamment nombreux. Une situation avec pas ou une seule candidature, comme en 1984, est à proscrire car elle réduit les opportunités stratégiques du CIO.",
      "Les médias contrôlent la réputation du CIO et des Jeux. En 2001, la création des Olympic Broadcasting Services, seul fournisseur de matériaux vidéo des événements, a permis au CIO de contrôler les messages et d'éviter un impact négatif en cas d'incident.",
      "Les membres du CIO sont les décideurs pour l'attribution des Jeux. Ils sont accusés d'être partisans et de favoriser certains candidats pour des raisons non sportives.",
    ],
    extraits: [
      { id: 'cio-e1', texte: "Les athlètes constituent la ressource clé de l'organisation", marqueurs: ['PARTIE_PRENANTE', 'RESSOURCE'], explication: "Le corrigé qualifie explicitement leur importance stratégique : « ce sont les ressources clés ». On ne se contente pas de les lister." },
      { id: 'cio-e2', texte: 'Depuis 1981, une commission des athlètes', marqueurs: ['CHIFFRE'], explication: "Le corrigé date et factualise systématiquement : 1981, 1984, 2001. C'est le niveau de précision attendu." },
      { id: 'cio-e3', texte: "pas ou une seule candidature, comme en 1984", marqueurs: ['RISQUE', 'CHIFFRE'], explication: "Situation à proscrire car elle « réduit les opportunités stratégiques » : c'est une menace formulée en termes stratégiques." },
      { id: 'cio-e4', texte: 'Les médias contrôlent la réputation du CIO', marqueurs: ['PARTIE_PRENANTE', 'RISQUE'], explication: "Pouvoir élevé sur un actif immatériel — la réputation." },
      { id: 'cio-e5', texte: 'la création des Olympic Broadcasting Services, seul fournisseur de matériaux vidéo', marqueurs: ['RESSOURCE', 'INTERNE'], explication: "Réponse organisationnelle : le CIO internalise le canal pour contrôler les messages." },
      { id: 'cio-e6', texte: "Ils sont accusés d'être partisans et de favoriser certains candidats", marqueurs: ['RISQUE', 'PARTIE_PRENANTE'], explication: "Conflit d'intérêts : pouvoir élevé + intérêt personnel divergent de celui de l'organisation." },
    ],
    outilsPertinents: ['parties-prenantes', 'matrice-pouvoir-interet', 'conflit-interets', 'gouvernance'],
    outilsNonPertinents: ['bmc', 'trois-r', 'pour'],
    questions: [
      {
        id: 'cio-q1',
        enonce: 'Identifiez les parties prenantes du CIO et évaluez-les.',
        reponse:
          "Athlètes (intérêt fort, pouvoir historiquement faible mais croissant) ; villes et pays candidats (intérêt fort, pouvoir moyen) ; médias (intérêt fort, pouvoir élevé sur la réputation) ; membres du CIO (intérêt fort, pouvoir élevé — ce sont les décideurs). Ne jamais s'arrêter à la liste : le cours exige liste → évaluation → positionnement → action.",
        notions: ['parties-prenantes', 'matrice-pouvoir-interet'],
      },
      {
        id: 'cio-q2',
        enonce: 'Quelle action de management pour chaque partie prenante ?',
        reponse:
          "Athlètes : commission des athlètes depuis 1981 — les faire entrer dans la décision. Villes candidates : entretenir un vivier de candidatures. Médias : Olympic Broadcasting Services depuis 2001 — contrôler le canal. Membres du CIO : concevoir des processus qui réduisent les opportunités d'influence des candidats.",
        notions: ['parties-prenantes', 'gouvernance', 'conflit-interets'],
      },
      {
        id: 'cio-q3',
        enonce: "Pourquoi le conflit d'intérêts se traite-t-il autrement que par la communication ?",
        reponse:
          "Parce que le problème n'est pas un déficit d'information mais une divergence d'intérêts chez un acteur puissant. Le traitement est alors la conception de processus — donc de la gouvernance — et non un plan de communication.",
        notions: ['conflit-interets', 'gouvernance'],
      },
    ],
    chiffres: [
      { libelle: 'Commission des athlètes', valeur: '1981' },
      { libelle: 'Année à candidature unique', valeur: '1984' },
      { libelle: 'Olympic Broadcasting Services', valeur: '2001' },
    ],
    notions: ['parties-prenantes', 'matrice-pouvoir-interet', 'conflit-interets', 'gouvernance', 'ressources-intangibles'],
    sources: ['corrige-tp01', 'encyclopedie'],
  },

  // ====================================================== FUKUSHIMA =========
  {
    id: 'fukushima',
    nom: 'Fukushima',
    sousTitre: 'PESTEL et effets en cascade — corrigé officiel TP02A',
    categorie: 'diagnostic-externe',
    priorite: 1,
    texte: [
      "En mars 2011, l'accident nucléaire de Fukushima provoque une réaction mondiale dont les effets dépassent largement le secteur de l'énergie.",
      "Dans de nombreux pays, les gouvernements ont réagi à la pression politique générée par les groupes environnementaux, les médias et la société. Des mesures de réduction de l'impact du nucléaire ont été introduites au plus haut niveau politique, incluant la décision de mettre définitivement terme à la production d'énergie nucléaire, par exemple en Allemagne d'ici l'horizon 2022.",
      "En raison du remplacement de l'énergie nucléaire par d'autres ressources, le prix moyen de l'énergie augmente. Il en résulte des coûts plus importants pour les entreprises des secteurs consommant beaucoup d'énergie tels que la métallurgie ou la chimie.",
      "Un climat anxiogène croît à travers le monde. Il s'agit surtout de personnes désintéressées ou auparavant ignorantes des questions nucléaires, qui rejoignent les mouvements écologiques dans leur protestation contre la construction de nouvelles centrales.",
      "La fermeture rapide des centrales requiert un investissement supplémentaire dans les technologies alternatives — solaire, hydraulique, éoliennes — afin de garantir un approvisionnement suffisant. Conséquence supplémentaire : le développement de produits écoénergétiques dans tous les domaines.",
      "Immédiatement après l'incident, des groupes environnementaux ont renouvelé leurs protestations, argumentant que le monde, en particulier les gouvernements et les fournisseurs d'énergie, n'ont guère suffisamment appris de la catastrophe de Tchernobyl de 1986.",
      "Pour garantir un sentiment de sécurité et éviter d'autres incidents, les normes de sécurité ont été revues à la hausse et les contrôles renforcés. L'utilisation des ampoules électriques est régulée dans l'UE, où les ampoules inférieures aux normes d'efficacité prédéfinies ne peuvent plus être vendues depuis septembre 2012.",
    ],
    extraits: [
      { id: 'fuk-e1', texte: "la décision de mettre définitivement terme à la production d'énergie nucléaire, en Allemagne d'ici 2022", marqueurs: ['EXTERNE', 'MENACE', 'CHIFFRE'], explication: "Facteur politique : orientation gouvernementale, datée. Menace pour un opérateur nucléaire, opportunité pour un acteur renouvelable." },
      { id: 'fuk-e2', texte: 'le prix moyen de l’énergie augmente', marqueurs: ['EXTERNE', 'MENACE'], explication: "Facteur économique. Le corrigé ne s'arrête pas au constat : il explique le mécanisme de transmission vers les entreprises." },
      { id: 'fuk-e3', texte: 'des coûts plus importants pour la métallurgie ou la chimie', marqueurs: ['MENACE', 'EXTERNE'], explication: "Effet en cascade sur des secteurs NON énergétiques : c'est la leçon principale de ce corrigé." },
      { id: 'fuk-e4', texte: 'un climat anxiogène croît à travers le monde', marqueurs: ['EXTERNE'], explication: "Facteur socioculturel : évolution des mentalités et des comportements collectifs." },
      { id: 'fuk-e5', texte: 'investissement supplémentaire dans les technologies alternatives', marqueurs: ['EXTERNE', 'OPPORTUNITE'], explication: "Facteur technologique. Opportunité pour les fabricants de produits écoénergétiques." },
      { id: 'fuk-e6', texte: "n'ont guère suffisamment appris de la catastrophe de Tchernobyl de 1986", marqueurs: ['EXTERNE', 'CHIFFRE'], explication: "Facteur éthique dans le vocabulaire du corrigé — et une date à citer." },
      { id: 'fuk-e7', texte: 'les ampoules inférieures aux normes ne peuvent plus être vendues depuis septembre 2012', marqueurs: ['EXTERNE', 'CHIFFRE'], explication: "Facteur juridique : le corrigé écrit « Juridique » là où le cours écrit « Légal »." },
    ],
    outilsPertinents: ['pestel', 'strates-environnement', 'swot', 'porter-five-forces'],
    outilsNonPertinents: ['bmc', 'collecte-donnees-utilisateurs', 'pour'],
    questions: [
      {
        id: 'fuk-q1',
        enonce: 'Réalisez le PESTEL de Fukushima.',
        reponse:
          "Politique : réaction gouvernementale à la pression des groupes environnementaux, sortie du nucléaire en Allemagne d'ici 2022. Économique : hausse du prix moyen de l'énergie, coûts accrus pour la métallurgie et la chimie. Socioculturel : climat anxiogène, ralliement aux mouvements écologiques. Technologique : investissement dans le solaire, l'hydraulique et l'éolien, développement de produits écoénergétiques. Éthique : les leçons de Tchernobyl (1986) n'ont pas été tirées. Juridique : normes de sécurité relevées, régulation des ampoules dans l'UE depuis septembre 2012.",
        notions: ['pestel', 'facteur-politique', 'facteur-economique', 'facteur-socioculturel', 'facteur-technologique', 'facteur-environnemental-ethique', 'facteur-legal'],
      },
      {
        id: 'fuk-q2',
        enonce: "Montrez la chaîne qui va d'un fait macro à une conséquence stratégique.",
        reponse:
          "FAIT : accident de Fukushima, mars 2011. ÉVOLUTION : sortie programmée du nucléaire. IMPACT : le prix moyen de l'énergie augmente. OPPORTUNITÉ/MENACE : menace pour les industries énergivores, opportunité pour les fabricants de produits écoénergétiques. CONSÉQUENCE STRATÉGIQUE : investir dans l'efficacité énergétique, relocaliser, sécuriser des contrats d'approvisionnement long terme.",
        notions: ['pestel', 'strates-environnement', 'opportunite', 'menace'],
      },
      {
        id: 'fuk-q3',
        enonce: 'Comment ce fait PESTEL déplace-t-il les forces de Porter ?',
        reponse:
          "Le facteur clé de succès du secteur énergétique se déplace de « capacité nucléaire installée » vers « capacité renouvelable ». La menace des substituts (solaire, hydraulique, éolien) devient forte et le pouvoir des fournisseurs de technologies vertes augmente.",
        notions: ['strates-environnement', 'porter-five-forces', 'menace-substituts', 'facteurs-cles-succes'],
      },
    ],
    chiffres: [
      { libelle: 'Accident', valeur: 'mars 2011' },
      { libelle: 'Sortie du nucléaire en Allemagne', valeur: 'horizon 2022' },
      { libelle: 'Catastrophe de Tchernobyl', valeur: '1986' },
      { libelle: 'Régulation UE des ampoules', valeur: 'septembre 2012' },
    ],
    notions: ['pestel', 'strates-environnement', 'facteurs-cles-succes', 'menace-substituts', 'opportunite', 'menace'],
    sources: ['corrige-tp02a', 'encyclopedie'],
  },

  // ============================================= EAUX EMBOUTEILLÉES ========
  {
    id: 'eaux-embouteillees',
    nom: 'Les eaux embouteillées',
    sousTitre: 'Porter, notation 0-5 et océan rouge — corrigé officiel TP02B',
    categorie: 'diagnostic-externe',
    priorite: 1,
    texte: [
      "L'industrie mondiale des eaux embouteillées réunit des entreprises mondiales — Nestlé, Danone, mais aussi Coca-Cola et Pepsi — et des entreprises locales disposant d'un accès direct aux sources.",
      "Les sources et leur qualité sont très importantes. Les entreprises ont toutefois fait le nécessaire pour en minimiser les conséquences, en diversifiant les matériaux (plastique et verre) et en faisant jouer la concurrence sur le transport.",
      "Les acheteurs sont de différents types : grandes et moyennes surfaces, Horeca, individus. Il est facile de changer de marque ou d'utiliser un substitut, mais les préoccupations sanitaires augmentent la demande.",
      "Les barrières d'entrée sont hautes, en raison des dépenses pour la communication engagées par les entreprises mondiales et de l'accès aux sources locales.",
      "Il existe des substituts directs, comme l'eau du robinet et toutes les autres boissons.",
    ],
    extraits: [
      { id: 'eau-e1', texte: 'Nestlé, Danone, mais aussi Coca-Cola et Pepsi + entreprises locales', marqueurs: ['EXTERNE', 'MENACE'], explication: "Rivalité notée 4 (fort) : la justification nomme les acteurs, elle ne se contente pas d'un chiffre." },
      { id: 'eau-e2', texte: 'Les sources et leur qualité sont très importantes', marqueurs: ['EXTERNE', 'RESSOURCE'], explication: "Base du pouvoir des fournisseurs — mais tempéré par la diversification." },
      { id: 'eau-e3', texte: 'en diversifiant les matériaux et en faisant jouer la concurrence sur le transport', marqueurs: ['INTERNE', 'OPPORTUNITE'], explication: "Ce qui TEMPÈRE la force : c'est cette nuance qui produit un 3 (moyen) plutôt qu'un 4." },
      { id: 'eau-e4', texte: "Il est facile de changer de marque", marqueurs: ['EXTERNE', 'MENACE'], explication: "Coût de changement faible → pouvoir client élevé." },
      { id: 'eau-e5', texte: 'les préoccupations sanitaires augmentent la demande', marqueurs: ['EXTERNE', 'OPPORTUNITE'], explication: "Contrepoids : la justification est à double sens, c'est ce qui produit la note intermédiaire." },
      { id: 'eau-e6', texte: "Les barrières d'entrée sont hautes", marqueurs: ['EXTERNE', 'OPPORTUNITE'], explication: "Nouveaux entrants notés 2 (faible) : les barrières protègent les acteurs en place." },
      { id: 'eau-e7', texte: "l'eau du robinet et toutes les autres boissons", marqueurs: ['EXTERNE', 'MENACE'], explication: "Substituts notés 4 : même besoin satisfait autrement." },
    ],
    outilsPertinents: ['porter-five-forces', 'toile-porter', 'ocean-rouge', 'barriere-entree', 'menace-substituts'],
    outilsNonPertinents: ['pour', 'collecte-donnees-utilisateurs', 'trois-r'],
    questions: [
      {
        id: 'eau-q1',
        enonce: 'Notez les cinq forces sur la toile et justifiez.',
        reponse:
          "Rivalité 4 (fort) : entreprises mondiales et locales. Fournisseurs 3 (moyen) : les sources sont importantes, mais diversification des matériaux et mise en concurrence du transport. Acheteurs 3 (moyen) : GMS, Horeca, individus ; facile de changer de marque, mais les préoccupations sanitaires augmentent la demande. Nouveaux entrants 2 (faible) : barrières hautes — communication et accès aux sources. Substituts 4 (menace élevée) : eau du robinet et autres boissons.",
        notions: ['porter-five-forces', 'toile-porter', 'rivalite-concurrents', 'pouvoir-fournisseurs', 'pouvoir-clients', 'menace-nouveaux-entrants', 'menace-substituts'],
      },
      {
        id: 'eau-q2',
        enonce: 'Océan rouge ou océan bleu ? Concluez.',
        reponse:
          "« Le marché mondial de l'industrie de l'eau embouteillée est plus un océan rouge. Il y a une concurrence très forte qui nécessite une réduction des coûts par la taille et impose une forte différenciation des acteurs en matière de packaging, communication, d'image. Dans ces conditions, les entreprises mondiales sont enclines à acquérir les concurrents locaux, à la fois pour contrôler les sources et pour accroître leur position relative sur le marché. »",
        notions: ['ocean-rouge', 'domination-couts', 'option-differenciation', 'concentration'],
      },
      {
        id: 'eau-q3',
        enonce: 'Que t’apprend ce corrigé sur la manière de justifier une note ?',
        reponse:
          "La note n'est jamais seule : chaque chiffre est suivi d'une justification factuelle. La justification compte plus que la valeur — un examinateur accepte 3 ou 4 si l'argumentation est solide, mais refuse un 5 non justifié. Les justifications sont souvent à double sens (« facile de changer de marque MAIS les préoccupations sanitaires augmentent la demande ») : la nuance produit la note. Et l'analyse débouche sur une conclusion stratégique.",
        notions: ['toile-porter', 'attractivite-industrie'],
      },
    ],
    chiffres: [
      { libelle: 'Rivalité', valeur: '4 — fort' },
      { libelle: 'Fournisseurs', valeur: '3 — moyen' },
      { libelle: 'Acheteurs', valeur: '3 — moyen' },
      { libelle: 'Nouveaux entrants', valeur: '2 — faible' },
      { libelle: 'Substituts', valeur: '4 — menace élevée' },
    ],
    notions: ['porter-five-forces', 'toile-porter', 'ocean-rouge', 'barriere-entree', 'cout-changement', 'attractivite-industrie'],
    sources: ['corrige-tp02b', 'encyclopedie'],
  },

  // =========================================================== SMART =======
  {
    id: 'smart',
    nom: 'La Smart',
    sousTitre: 'Chaîne de valeur et combinaison d’activités — corrigé officiel TP04',
    categorie: 'diagnostic-interne',
    priorite: 2,
    texte: [
      "La Smart naît d'une alliance entre Swatch et Mercedes-Benz. L'entreprise applique une combinaison des connaissances de la construction automobile de Daimler et du système de fabrication simplifiée de Swatch.",
      "Les meilleurs fournisseurs de Smart sont localisés sur le même site, à Hambach, pour réduire les coûts des transports. L'entreprise a présélectionné ces fournisseurs et renforcé leur installation à Hambach.",
      "La commercialisation passe par la création de centres Smart en libre-service, où les voitures sont présentées dans une tour de verre transparente, les clients pouvant en prendre possession le jour même de l'achat.",
      "Le site de Hambach est inauguré par Jacques Chirac et Helmut Kohl en 1997. Un slogan, « réduire au maximum », accompagne la marque de 1998 à 2005.",
      "Le service après-vente s'appuie sur le réseau de réparateurs agréés Mercedes-Benz, une garantie des pneus, un contrôle automne/hiver et une gamme d'accessoires Smart collection.",
      "Une intense activité de R&D est menée sur le site de Hambach et aux sièges de Swatch et Mercedes-Benz. Les meilleurs ingénieurs des deux groupes y sont affectés.",
    ],
    extraits: [
      { id: 'smart-e1', texte: 'les meilleurs fournisseurs sont localisés sur le même site, à Hambach', marqueurs: ['INTERNE', 'RESSOURCE'], explication: "Logistique d'approvisionnement — et point de COMBINAISON qui fonde l'avantage. Le même fait réapparaît dans plusieurs activités : c'est voulu." },
      { id: 'smart-e2', texte: 'combinaison des connaissances de Daimler et du système de fabrication simplifiée de Swatch', marqueurs: ['INTERNE', 'RESSOURCE'], explication: "Compétence opérationnelle : ce que l'entreprise SAIT FAIRE de ses ressources." },
      { id: 'smart-e3', texte: 'centres Smart en libre-service, tour de verre transparente, possession le jour même', marqueurs: ['INTERNE'], explication: "Logistique de commercialisation ET mode d'accès constitutif de la proposition de valeur." },
      { id: 'smart-e4', texte: 'inauguration par Jacques Chirac et Helmut Kohl en 1997', marqueurs: ['CHIFFRE', 'INTERNE'], explication: "Marketing et ventes. Le corrigé date et nomme : c'est le niveau de précision attendu." },
      { id: 'smart-e5', texte: 'réparateur agréé Mercedes-Benz, garantie des pneus, Smart collection', marqueurs: ['INTERNE'], explication: "Services — activité principale n°5." },
      { id: 'smart-e6', texte: 'les meilleurs ingénieurs de Swatch et Mercedes-Benz', marqueurs: ['INTERNE', 'RESSOURCE'], explication: "Ressource humaine mobilisée par la GRH, activité de soutien." },
      { id: 'smart-e7', texte: 'intense R&D sur le site de Hambach et aux sièges', marqueurs: ['INTERNE'], explication: "Développement technologique, activité de soutien." },
    ],
    outilsPertinents: ['chaine-de-valeur', 'activites-principales', 'activites-soutien', 'competences', 'avantage-concurrentiel'],
    outilsNonPertinents: ['pestel', 'donut', 'pour'],
    questions: [
      {
        id: 'smart-q1',
        enonce: 'Analysez la chaîne de valeur de la Smart, activités principales.',
        reponse:
          "Logistique d'approvisionnement : fournisseurs localisés à Hambach pour réduire les coûts de transport. Fabrication : combinaison des connaissances Daimler et du système de fabrication simplifiée Swatch. Logistique et commercialisation : centres Smart en libre-service, tour de verre, possession le jour même. Marketing et ventes : inauguration par Chirac et Kohl en 1997, slogan « réduire au maximum » (1998-2005). Service après-vente : réparateur agréé Mercedes-Benz, garantie des pneus, contrôle automne/hiver, accessoires.",
        notions: ['chaine-de-valeur', 'activites-principales', 'logistique-approvisionnement', 'production', 'logistique-commercialisation', 'marketing-ventes', 'services'],
      },
      {
        id: 'smart-q2',
        enonce: 'Et les activités de soutien ?',
        reponse:
          "Infrastructure : concentration de la production, incluant les meilleurs fournisseurs, au site de Hambach. GRH : utilisation des meilleurs ingénieurs de Swatch et Mercedes-Benz. Approvisionnement : présélection des meilleurs fournisseurs et renforcement de leur installation à Hambach. Développement technologique : intense R&D sur le site et aux deux sièges.",
        notions: ['activites-soutien', 'infrastructure-entreprise', 'grh', 'approvisionnements', 'developpement-technologique'],
      },
      {
        id: 'smart-q3',
        enonce: "Pourquoi le site de Hambach revient-il dans quatre activités différentes ?",
        reponse:
          "Parce que c'est le point de COMBINAISON qui fonde l'avantage concurrentiel. « Leur combinaison peut être à l'origine d'un avantage concurrentiel » : l'avantage ne vient pas d'une activité isolée mais de l'articulation entre elles. Ne t'interdis donc pas les répétitions si elles sont significatives.",
        notions: ['chaine-de-valeur', 'avantage-concurrentiel', 'competences'],
      },
    ],
    chiffres: [
      { libelle: 'Inauguration de Hambach', valeur: '1997' },
      { libelle: 'Slogan « réduire au maximum »', valeur: '1998-2005' },
    ],
    notions: ['chaine-de-valeur', 'competences', 'ressources', 'avantage-concurrentiel', 'proposition-de-valeur'],
    sources: ['corrige-tp04', 'encyclopedie'],
  },

  // ===================================================== ONCLE HANSI =======
  {
    id: 'oncle-hansi',
    nom: "Le Marché de l'Oncle Hansi",
    sousTitre: 'Business model, BMC et équation de profit — corrigé officiel',
    categorie: 'business-model',
    priorite: 1,
    texte: [
      "En 2012, Steve Risch, jeune diplômé, rachète les droits de l'œuvre de Jean-Jacques Waltz, dit « l'oncle Hansi », figure du patrimoine alsacien, pour éviter sa dispersion.",
      "Il crée une marque ombrelle, « Marché de l'Oncle Hansi », regroupant d'abord 24 entreprises alsaciennes de l'agroalimentaire, qui commercialisent leurs produits sous un même label valorisant le savoir-faire et le patrimoine régionaux.",
      "Il sélectionne ses partenaires sur la base de trois critères : l'antériorité dans l'utilisation de l'imagerie Hansi, l'appartenance au groupement « saveurs d'Alsace » et la position de leader sur leur marché.",
      "Les entreprises adhèrent au groupement, versent une cotisation et une redevance sur les ventes réalisées sous le label. Ces redevances doivent rester limitées, pour éviter la concurrence des produits commercialisés sous la marque propre du producteur.",
      "En parallèle, Steve Risch démarche les enseignes de distribution pour installer des « corners Oncle Hansi », ouvre quelques boutiques et envisage un site de commercialisation. La logistique reste à la charge des entreprises adhérentes.",
      "Cinq ans plus tard, le chiffre d'affaires est de l'ordre d'un million d'euros, pour une dizaine de salariés, 170 références alimentaires et 55 références dans les arts de la table et l'édition.",
    ],
    extraits: [
      { id: 'hansi-e1', texte: "rachète les droits de l'œuvre de Jean-Jacques Waltz", marqueurs: ['RESSOURCE', 'INTERNE'], explication: "Ressource clé, de réputation, non transférable : « l'entreprise possède le label qui fonde la proposition de valeur »." },
      { id: 'hansi-e2', texte: '24 entreprises alsaciennes de l’agroalimentaire', marqueurs: ['PARTIE_PRENANTE', 'CHIFFRE'], explication: "Partenaires clés — et en même temps un segment de clients : les clients sont des partenaires." },
      { id: 'hansi-e3', texte: 'une cotisation et une redevance sur les ventes', marqueurs: ['CHIFFRE'], explication: "Deux flux de revenus de nature différente : l'un fixe et récurrent, l'autre variable et corrélé au succès." },
      { id: 'hansi-e4', texte: 'ces redevances doivent rester limitées', marqueurs: ['RISQUE'], explication: "Le point le plus fin du corrigé : le modèle contient une tension interne qui borne son propre prix." },
      { id: 'hansi-e5', texte: 'démarche les enseignes de distribution pour installer des corners', marqueurs: ['EXTERNE', 'PARTIE_PRENANTE'], explication: "Canal — et segment B2B. Sans les distributeurs, pas d'accès au marché." },
      { id: 'hansi-e6', texte: 'la logistique reste à la charge des entreprises adhérentes', marqueurs: ['INTERNE'], explication: "Décision d'architecture : faire faire, coûts variables plutôt que fixes." },
      { id: 'hansi-e7', texte: "un million d'euros, une dizaine de salariés", marqueurs: ['CHIFFRE'], explication: "Le modèle est asset-light : structure de coûts la plus légère possible." },
    ],
    outilsPertinents: ['bmc', 'rcov', 'equation-de-profit', 'proposition-de-valeur', 'ressources-intangibles'],
    outilsNonPertinents: ['pour', 'limites-planetaires', 'ai-act'],
    questions: [
      {
        id: 'hansi-q1',
        enonce: 'Quels sont les segments de clientèle visés ?',
        reponse:
          "Deux clientèles : les distributeurs (enseignes accueillant les corners, clients B2B) ; et les consommateurs de produits alsaciens, eux-mêmes en clientèle locale attachée aux produits régionaux et clientèle touristique. Point fort relevé par le corrigé : une proposition de valeur unique pour des clients différents.",
        notions: ['segments-clients', 'proposition-de-valeur'],
      },
      {
        id: 'hansi-q2',
        enonce: 'Quelle est la proposition de valeur ?',
        reponse:
          "Offrir un label « alsacien » à des clients locaux ou touristes. Trois ressorts : une consommation de qualité, garantie par les labels ; une démarche locavore, de proximité ; une forte identité régionale, valeurs traditionnelles et patrimoine. En somme : qualité + proximité + identité, cristallisées dans une marque-patrimoine.",
        notions: ['proposition-de-valeur', 'labels-environnementaux', 'ressources-intangibles'],
      },
      {
        id: 'hansi-q3',
        enonce: "Décrivez l'équation de profit.",
        reponse:
          "Elle confronte deux flux de revenus — les adhésions et les redevances, ces dernières devant être limitées pour éviter la concurrence des produits commercialisés sous la marque propre du producteur — et une structure de coûts qui doit être la plus légère possible. Les droits de la marque sont la propriété de l'entreprise ; la logistique reste à la charge des entreprises adhérentes.",
        notions: ['equation-de-profit', 'flux-revenus', 'structure-couts', 'architecture-de-valeur'],
      },
      {
        id: 'hansi-q4',
        enonce: "En quoi « les clients sont des partenaires » est-il un atout du modèle ?",
        reponse:
          "C'est un renversement de l'équation de profit : le client FINANCE une partie de la structure de coûts (le packaging est « subventionné » par les adhérents) au lieu de seulement générer du revenu. De plus, les coûts d'acquisition des clients sont supportés par les distributeurs. Cherche systématiquement ce type de renversement dans un cas.",
        notions: ['equation-de-profit', 'segments-clients', 'partenaires-cles', 'structure-couts'],
      },
      {
        id: 'hansi-q5',
        enonce: 'Quelles sont les limites et les risques du modèle ?',
        reponse:
          "Dépendance aux producteurs partenaires ; tension sur la redevance, avec risque de fuite vers la marque propre ; modèle mono-régional, peu transposable hors d'Alsace ; croissance bornée par le périmètre « Alsace authentique ».",
        notions: ['equation-de-profit', 'pouvoir-fournisseurs', 'focalisation'],
      },
    ],
    chiffres: [
      { libelle: 'Acquisition des droits', valeur: '2012' },
      { libelle: 'Entreprises alsaciennes au départ', valeur: '24' },
      { libelle: "Chiffre d'affaires à 5 ans", valeur: "de l'ordre d'un million d'euros" },
      { libelle: 'Effectif', valeur: 'une dizaine de salariés' },
      { libelle: 'Références', valeur: '170 alimentaires + 55 arts de la table et édition' },
    ],
    notions: ['bmc', 'rcov', 'equation-de-profit', 'proposition-de-valeur', 'segments-clients', 'ressources-cles', 'partenaires-cles', 'structure-couts', 'ressources-intangibles', 'avantage-concurrentiel-durable'],
    sources: ['corrige-hansi', 'encyclopedie'],
  },

  // ==================================================== SILVERDIGITAL ======
  {
    id: 'silverdigital',
    nom: 'SilverDigital SA',
    sousTitre: 'Accessibilité, exclusion indirecte et arbitrage stratégique',
    categorie: 'accessibilite',
    priorite: 1,
    texte: [
      "SilverDigital SA est une entreprise genevoise de services financiers digitaux. Elle a engagé une stratégie « Digital First » : réduction des guichets physiques, application mobile prioritaire, chatbot disponible 24 h/24.",
      "Les résultats à court terme sont bons : +15 % de marge opérationnelle, −20 % de coûts liés au support client, +10 % de nouveaux clients de moins de 40 ans.",
      "Mais l'entreprise a perdu 12 % de ses clients de plus de 65 ans en un an. Une enquête montre que 30 % des seniors déclarent préférer un contact humain.",
      "Marie-Louise P., 76 ans, cliente depuis plus de vingt ans, témoigne : « On me dit que le chatbot peut m'aider, mais je ne comprends pas ses réponses. »",
      "Dans l'application, il faut 4 étapes pour accéder à un agent humain, et le délai moyen d'attente est de 9 minutes. La taille de police n'est pas personnalisable et l'authentification à double facteur est obligatoire, sans alternative.",
      "Aucun manquement légal n'a été constaté. Un professeur en gouvernance numérique a toutefois évoqué publiquement le risque d'exclusion indirecte. L'European Accessibility Act est entré en application en juin 2025 et vise explicitement les banques et services financiers ; la révision de la LHand étendra les obligations au secteur privé.",
    ],
    extraits: [
      { id: 'sd-e1', texte: '+15 % de marge opérationnelle', marqueurs: ['INTERNE', 'CHIFFRE'], explication: "Résultat obtenu par l'entreprise : c'est une FORCE, interne." },
      { id: 'sd-e2', texte: '−20 % de coûts liés au support client', marqueurs: ['INTERNE', 'CHIFFRE'], explication: "Force apparente — mais une partie de ce gain est une EXTERNALISATION du coût vers les clients." },
      { id: 'sd-e3', texte: '−12 % de clients de plus de 65 ans', marqueurs: ['EXTERNE', 'MENACE', 'CHIFFRE'], explication: "Érosion mesurable d'un segment : c'est un fait de marché, donc externe. Symptôme de l'exclusion indirecte." },
      { id: 'sd-e4', texte: 'cliente depuis plus de vingt ans', marqueurs: ['RESSOURCE', 'INTERNE'], explication: "Ressource de réputation — la plus précieuse et la moins imitable, et précisément celle que la stratégie détruit." },
      { id: 'sd-e5', texte: '4 étapes et 9 minutes pour joindre un agent', marqueurs: ['INTERNE', 'CHIFFRE'], explication: "Faiblesse interne. Principe WCAG « Opérable » violé, obstacle organisationnel." },
      { id: 'sd-e6', texte: "la taille de police n'est pas personnalisable", marqueurs: ['INTERNE'], explication: "Faiblesse technique. Principe WCAG « Perceptible » violé." },
      { id: 'sd-e7', texte: 'Aucun manquement légal n’a été constaté', marqueurs: ['INTERNE'], explication: "Force apparente — et le cœur du cas : l'absence de manquement n'exonère pas du risque stratégique." },
      { id: 'sd-e8', texte: "risque d'exclusion indirecte", marqueurs: ['RISQUE', 'MENACE'], explication: "La notion centrale : une mesure neutre en apparence désavantage de fait un groupe." },
      { id: 'sd-e9', texte: "L'European Accessibility Act vise explicitement les banques", marqueurs: ['EXTERNE', 'OPPORTUNITE', 'MENACE'], explication: "Double lecture : menace (durcissement) ET opportunité (différenciation par l'anticipation)." },
      { id: 'sd-e10', texte: '30 % des seniors préfèrent un contact humain', marqueurs: ['EXTERNE', 'CHIFFRE', 'MENACE'], explication: "Attente du marché non satisfaite — et argument pour le canal humain." },
    ],
    outilsPertinents: ['accessibilite-numerique', 'pour', 'exclusion-indirecte', 'rne', 'swot', 'saf', 'donut', 'bmc-durable', 'parties-prenantes'],
    outilsNonPertinents: ['erac', 'toile-porter', 'trois-r'],
    questions: [
      {
        id: 'sd-q1',
        enonce: "Identifiez au moins 5 obstacles d'accessibilité.",
        reponse:
          "1) Navigation complexe dans l'application. 2) Multiplication des étapes d'authentification (2FA obligatoire). 3) Difficulté à joindre un conseiller humain (4 étapes, 9 minutes). 4) Chatbot peu compréhensible. 5) Taille de police non personnalisable. 6) Réduction des guichets physiques, qui supprime le canal humain.",
        notions: ['accessibilite-numerique', 'pour', 'utilisabilite'],
      },
      {
        id: 'sd-q2',
        enonce: 'Classez ces obstacles.',
        reponse:
          "Technique : police non modifiable, 2FA rigide, code non adapté aux technologies d'assistance. Ergonomique : navigation complexe, chatbot peu clair, parcours à 4 étapes. Organisationnel : suppression des guichets, délai de 9 minutes, absence de canal humain prioritaire. Stratégique : le choix « Digital First » qui privilégie les moins de 40 ans au détriment des seniors.",
        notions: ['exclusion-indirecte', 'accessibilite-numerique'],
      },
      {
        id: 'sd-q3',
        enonce: "La baisse de 12 % des plus de 65 ans est-elle une exclusion indirecte ?",
        reponse:
          "Oui. L'exclusion indirecte est une mesure neutre en apparence — la digitalisation — qui désavantage de fait un groupe, sans intention de discriminer. La perte de 12 % de clients seniors en un an, corrélée aux obstacles identifiés, en est le symptôme mesurable. Une entreprise peut respecter la loi tout en créant une exclusion indirecte.",
        notions: ['exclusion-indirecte', 'discrimination-directe'],
      },
      {
        id: 'sd-q4',
        enonce: "L'absence d'obligation légale exonère-t-elle l'entreprise ?",
        reponse:
          "Non. Il n'y a pas encore d'obligation pour le secteur privé financier en Suisse, mais l'EAA et la révision de la LHand étendent le champ. Surtout, le risque n'est pas juridique mais stratégique : responsabilité éthique (inclusion) et stratégique (réputation, fidélité, marché senior croissant).",
        notions: ['exclusion-indirecte', 'lhand', 'european-accessibility-act', 'double-levier-accessibilite'],
      },
      {
        id: 'sd-q5',
        enonce: 'Qui est responsable des réponses du chatbot ?',
        reponse:
          "L'entreprise SilverDigital, en tant qu'éditeur et déployeur — pas le chatbot ni le seul fournisseur de l'IA. La RNE et le droit (LPD, AI Act « risque limité » → transparence) imposent une responsabilité humaine : on doit pouvoir exiger qu'une décision automatisée soit examinée par un humain. La gouvernance de l'IA relève de la direction.",
        notions: ['enjeux-ethiques-ia', 'ai-act', 'rne', 'gouvernance-numerique-roles'],
      },
      {
        id: 'sd-q6',
        enonce: 'Quel est le dilemme stratégique central ?',
        reponse:
          "Rentabilité et modernisation à court terme (Digital First, baisse des coûts) VS inclusion et confiance à long terme (ne pas exclure les seniors, segment démographique croissant et fidèle). C'est un arbitrage entre performance financière immédiate et pérennité de la relation client.",
        notions: ['tensions-strategiques', 'ressources-intangibles'],
      },
      {
        id: 'sd-q7',
        enonce: 'Quel axe de la RNE privilégier, et pourquoi ?',
        reponse:
          "L'axe sociétal (inclusion numérique, accessibilité), articulé à l'axe économique : la confiance et le marché senior sont rentables à long terme. L'accessibilité est un double levier — responsabilité ET valeur durable. Il faut trancher : le cours n'attend pas « tous les axes », il attend une justification par le contexte.",
        notions: ['quatre-axes-rne', 'double-levier-accessibilite', 'rne'],
      },
      {
        id: 'sd-q8',
        enonce: 'Proposez trois mesures concrètes et réalistes.',
        reponse:
          "1) Maintenir un canal humain prioritaire pour les plus de 65 ans : ligne dédiée, permanence en agence, accès humain en un clic. 2) Rendre l'application accessible : police ajustable, contraste, parcours simplifié, conformité WCAG AA, authentification alternative (SMS, carte matricielle, agence). 3) Améliorer le chatbot avec une escalade facile vers un humain, et accompagner les seniors par des sessions de formation.",
        notions: ['accessibilite-numerique', 'pour', 'inclusion-numerique'],
      },
      {
        id: 'sd-q9',
        enonce: "Proposez un KPI d'accessibilité stratégique.",
        reponse:
          "Au moins un KPI de moyen et un de résultat. Moyen : taux de conformité WCAG AA, part des nouveaux projets intégrant l'accessibilité dès la conception. Résultat : taux de rétention des clients de plus de 65 ans, taux de réussite des parcours clés par des utilisateurs en situation de handicap, délai moyen et nombre d'étapes pour joindre un humain, taux d'abandon par segment d'âge.",
        notions: ['kpi-accessibilite', 'kpi'],
      },
      {
        id: 'sd-q10',
        enonce: "Proposez un modèle de gouvernance de l'accessibilité.",
        reponse:
          "Gouvernance : nommer un·e Accessibility Officer, budget dédié, rôles clairs (UX, développement, conformité, direction), inscrire l'accessibilité comme dimension de la RNE. Processus : conception inclusive, développement accessible, tests et audits réguliers, mise à jour continue. Performance : KPI de conformité, résultats d'audit, satisfaction utilisateurs, amélioration continue.",
        notions: ['gouvernance-numerique-roles', 'accessibilite-numerique', 'charte-numerique', 'kpi-accessibilite'],
      },
      {
        id: 'sd-q11',
        enonce: "Une entreprise financière doit-elle adapter son modèle numérique aux publics vulnérables si cela réduit sa rentabilité ?",
        reponse:
          "Oui — mais l'opposition rentabilité/inclusion est en partie fausse. Trois arguments : le gain de −20 % sur le support est partiellement une EXTERNALISATION du coût vers les clients et leurs proches, donc une rentabilité partiellement fictive ; la clientèle senior est un segment CROISSANT, y renoncer c'est renoncer à un marché en expansion ; le cadre légal évolue (EAA, LHand, art. 21A Cst-GE), l'accessibilité passera du choix à l'obligation. S'y ajoute que la ressource de réputation est la moins imitable et la plus longue à reconstruire. Contre-argument à intégrer : toute fonctionnalité a un coût, il faut une pesée des intérêts — la notion d'« aménagements raisonnables » de la LHand — donc viser un optimum supportable, pas le tout ou rien. La vraie question n'est pas SI mais COMMENT.",
        notions: ['externalite-negative', 'exclusion-indirecte', 'tensions-strategiques', 'lhand', 'ressources-intangibles', 'donut'],
      },
    ],
    chiffres: [
      { libelle: 'Marge opérationnelle', valeur: '+15 %' },
      { libelle: 'Coûts de support', valeur: '−20 %' },
      { libelle: 'Clients de moins de 40 ans', valeur: '+10 %' },
      { libelle: 'Clients de plus de 65 ans', valeur: '−12 %' },
      { libelle: 'Seniors préférant un contact humain', valeur: '30 %' },
      { libelle: 'Accès à un humain', valeur: '4 étapes, 9 minutes' },
      { libelle: 'European Accessibility Act', valeur: 'juin 2025' },
    ],
    notions: ['accessibilite-numerique', 'exclusion-indirecte', 'pour', 'rne', 'quatre-axes-rne', 'donut', 'bmc-durable', 'externalite-negative', 'tensions-strategiques', 'swot', 'saf', 'kpi-accessibilite', 'integrite-numerique'],
    sources: ['cas-silverdigital', 'encyclopedie'],
  },
]
