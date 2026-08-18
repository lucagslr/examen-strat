import type { Notion } from '../types'

/** PARTIE V — RNE, DONNÉES, IA (encyclopédie §28 à §30) */
export const notionsRne: Notion[] = [
  {
    id: 'rne',
    slug: 'rne',
    nom: 'Responsabilité Numérique des Entreprises (RNE)',
    nomCourt: 'RNE',
    acronyme: 'RNE',
    aliases: ['CDR', 'Corporate Digital Responsibility', 'numérique responsable', 'RSE numérique'],
    categorie: 'rne',
    type: 'modele',
    priorite: 1,
    definitionCours:
      "La Responsabilité Numérique des Entreprises (RNE) — en anglais Corporate Digital Responsibility (CDR) — est la conjonction entre les progrès du numérique et la responsabilité sociétale des entreprises (RSE). Elle vise à ce que les entreprises intègrent les enjeux du numérique de manière responsable dans leur stratégie et leurs activités.",
    explicationSimple:
      "La RSE appliquée au numérique : là où la RSE traite des impacts sociaux et environnementaux de l'activité en général, la RNE traite spécifiquement de ceux du numérique — données, IA, environnement, accessibilité.",
    objectif:
      "Bénéfices donnés par le Guide RNE : renforcer la confiance des clients, partenaires et collaborateurs ; anticiper les évolutions réglementaires (LPD, RGPD, AI Act, EAA) ; réduire les risques (cyber, réputationnels, juridiques) ; attirer et fidéliser les talents ; réduire les coûts (énergie, équipements, licences) ; se différencier sur son marché.",
    commentUtiliser: [
      { titre: '1. Diagnostic', detail: 'Où en sommes-nous sur les 4 axes ? (audit données / social / environnement / éthique)' },
      { titre: '2. Parties prenantes', detail: 'Qui est concerné ? matrice pouvoir × intérêt.' },
      { titre: '3. Priorisation', detail: 'Quels enjeux sont matériels pour notre activité ?' },
      { titre: '4. Formalisation', detail: 'Charte numérique rédigée collectivement.' },
      { titre: '5. Gouvernance', detail: 'Qui pilote ? DPO, CISO, Accessibility Officer, comité.' },
      {
        titre: '6. Intégration au Business Model',
        detail: 'Proposition de valeur, ressources, activités, coûts, impacts positifs, externalités négatives.',
      },
      { titre: '7. KPI', detail: 'Comment mesure-t-on ?' },
      { titre: '8. Amélioration continue', detail: 'Cycle de progrès continu.' },
    ],
    phraseExamen:
      "Chaque bénéfice de la RNE se traduit dans un outil du cours : confiance → ressource de réputation ; anticipation → facteur légal du PESTEL ; risques → acceptabilité du SAF ; talents → ressources humaines ; coûts → structure de coûts du BM ; différenciation → option stratégique.",
    pieges: [
      {
        erreur: "Répondre « tous les axes » à la question « quel axe privilégieriez-vous ? ».",
        pourquoi: "La bonne réponse justifie par le contexte de l'entreprise.",
        test:
          'Banque/assurance/santé → Données puis Social. E-commerce/streaming → Environnement. Déploiement d’IA sur les clients → Éthique et gouvernance. Service public → Social. PME industrielle → Environnement puis Données.',
      },
    ],
    motsCles: ['CDR', 'RSE', 'quatre axes', 'charte', 'gouvernance'],
    sources: ['guide-rne', 'cours-leclere', 'encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'quatre-axes-rne',
    slug: 'quatre-axes-rne',
    nom: 'Les 4 axes de la RNE',
    nomCourt: '4 axes RNE',
    acronyme: 'É-T-E-S',
    aliases: ['Économique Technologique Environnemental Sociétal', 'données social environnement éthique'],
    categorie: 'rne',
    type: 'acronyme',
    priorite: 1,
    definitionCours:
      "① Données : protection des données, cybersécurité, transparence. ② Social : inclusion, accessibilité, employabilité, conditions de travail. ③ Environnement : sobriété numérique, cycle de vie du matériel. ④ Éthique et gouvernance : usage responsable de l'IA, charte, transparence algorithmique.",
    explicationSimple:
      "Les quatre domaines couverts sont constants ; seules les étiquettes varient d'un support à l'autre.",
    variantes: [
      {
        sujet: 'Étiquettes des quatre axes',
        formulations: [
          { libelle: 'Économique / Technologique / Environnemental / Sociétal (É-T-E-S)', ou: 'certains schémas, mémos du cours' },
          { libelle: 'Données / Social / Environnement / Éthique et gouvernance', ou: 'Guide RNE de l’État de Genève et slides Leclère' },
        ],
        explication: "Les quatre domaines couverts sont constants ; les étiquettes varient légèrement selon le support.",
        consigneExamen: 'Restitue les quatre domaines et signale la variation d’étiquetage.',
      },
    ],
    motsCles: ['quatre', 'axes', 'É-T-E-S'],
    sources: ['guide-rne', 'cours-leclere', 'memos', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'charte-numerique',
    slug: 'charte-numerique',
    nom: 'Charte numérique',
    aliases: ['charte du numérique responsable', 'engagements numériques'],
    categorie: 'rne',
    type: 'outil',
    priorite: 2,
    definitionCours:
      "Document collectif énonçant les engagements d'une organisation sur ses pratiques numériques. Les 5 étapes de mise en place : 1. IDENTIFIER les enjeux numériques prioritaires ; 2. IMPLIQUER — rédiger la charte collectivement avec les équipes ; 3. FORMALISER des engagements concrets et vérifiables ; 4. DIFFUSER auprès des collaborateurs, clients et partenaires ; 5. FAIRE VIVRE — former, mesurer, réviser périodiquement.",
    explicationSimple:
      "≠ stratégie numérique (qui, elle, fixe des objectifs et des moyens). La charte dit ce qui est acceptable et ce qui ne l'est pas.",
    phraseExamen:
      "L'étape 2 est celle à souligner : la charte se rédige AVEC les équipes, pas pour elles. C'est ce qui la distingue d'un règlement descendant. Les collaborateurs sont traités en « engager avec attention » (co-décision), pas en « informer ».",
    motsCles: ['collectif', 'engagements', 'diffusion', 'progrès continu'],
    sources: ['guide-rne', 'charte-inr', 'encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'charte-inr',
    slug: 'charte-inr',
    nom: "Charte de l'Institut du Numérique Responsable (INR)",
    nomCourt: 'Charte INR',
    acronyme: 'INR',
    categorie: 'rne',
    type: 'cadre-legal',
    priorite: 3,
    definitionCours:
      "5 engagements : 1. Optimiser l'empreinte du numérique. 2. Rendre le numérique accessible à tous (accessibilité + inclusion). 3. Concevoir des services numériques éthiques et responsables. 4. Mettre le numérique au service de la durabilité. 5. Adopter une démarche de progrès continu. Le document mentionne également le RGAA et le Cycle de Vie complet des équipements et logiciels.",
    explicationSimple: "Cinq engagements opérationnels, dont l'accessibilité au deuxième rang.",
    motsCles: ['cinq engagements', 'progrès continu', 'RGAA'],
    sources: ['charte-inr'],
    provenance: 'cours',
  },
  {
    id: 'trois-u',
    slug: 'trois-u',
    nom: 'Les 3U — Utile, Utilisable, Utilisé',
    nomCourt: '3U',
    acronyme: '3U',
    categorie: 'rne',
    type: 'acronyme',
    priorite: 2,
    definitionCours: "Les services numériques doivent être Utiles, Utilisables, Utilisés.",
    explicationSimple:
      "UTILE → répond-il à un besoin réel ? (sobriété). UTILISABLE → peut-on s'en servir ? (accessibilité, utilisabilité). UTILISÉ → s'en sert-on effectivement ? (création de valeur par le consommateur final).",
    phraseExamen:
      "Un service qui échoue à l'un des trois U mobilise des ressources sans créer de valeur. Appliqué à SilverDigital : Utile ✅, Utilisable ❌ pour les seniors, donc Utilisé ❌ par 12 % de clientèle perdue.",
    motsCles: ['utile', 'utilisable', 'utilisé', 'valeur'],
    sources: ['charte-inr', 'encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'gouvernance-numerique-roles',
    slug: 'gouvernance-numerique-roles',
    nom: 'Les nouveaux rôles de la gouvernance numérique',
    nomCourt: 'Rôles de gouvernance',
    aliases: ['DPO', 'CDO', 'CISO', 'CAIO', 'Chief AI Officer', 'Accessibility Officer', 'Green Officer'],
    categorie: 'rne',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "DPO (Data Protection Officer / Délégué à la protection des données) : conformité LPD/RGPD, registre des traitements, analyses d'impact. CDO (Chief Data Officer) : gouvernance et valorisation des données. CISO (Chief Information Security Officer) : sécurité des systèmes d'information. Chief AI Officer : stratégie et conformité IA (AI Act). Green Chief Officer : empreinte environnementale du numérique. Accessibility Officer : conformité et culture de l'accessibilité.",
    explicationSimple:
      "L'existence de ces rôles est en soi un argument de gouvernance. Dans un cas, demander « qui est responsable de X dans cette entreprise ? » et constater qu'aucun rôle n'existe est un diagnostic de faiblesse organisationnelle.",
    phraseExamen:
      "Une ressource organisationnelle manquante est une faiblesse au sens du diagnostic interne. SilverDigital : aucune gouvernance de l'accessibilité identifiée.",
    motsCles: ['DPO', 'CISO', 'Accessibility Officer', 'faiblesse organisationnelle'],
    sources: ['cours-leclere', 'encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'cinq-principes-collecte',
    slug: 'cinq-principes-collecte',
    nom: 'Les 5 principes de la collecte de données',
    nomCourt: '5 principes collecte',
    categorie: 'rne',
    type: 'methode',
    priorite: 1,
    definitionCours:
      "1. But indiqué lors de la collecte. 2. Transparence de la collecte et du traitement. 3. Minimisation des données. 4. Compréhension de la collecte. 5. Données correctes.",
    explicationSimple:
      "Ils recoupent les grands principes de la LPD/RGPD : finalité, transparence, minimisation, information/consentement éclairé, exactitude.",
    phraseExamen:
      "Note le n°4 — « compréhension de la collecte ». Ce n'est pas seulement informer, c'est s'assurer que la personne comprend. C'est exactement le lien avec l'accessibilité et l'utilisabilité : une politique de confidentialité illisible ne satisfait pas ce principe.",
    motsCles: ['finalité', 'transparence', 'minimisation', 'compréhension', 'exactitude'],
    sources: ['cours-leclere', 'encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'minimisation-donnees',
    slug: 'minimisation-donnees',
    nom: 'Minimisation des données',
    categorie: 'rne',
    type: 'notion',
    priorite: 2,
    definitionCours: "Ne collecter que les données strictement nécessaires à la finalité.",
    explicationSimple:
      "Moins de données collectées = moins de risque cyber, moins de stockage, moins d'énergie. La minimisation est à la fois un principe de protection et un levier de sobriété.",
    motsCles: ['nécessaire', 'finalité', 'surface de risque'],
    sources: ['cours-leclere', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'privacy-by-design',
    slug: 'privacy-by-design',
    nom: 'Privacy by design',
    aliases: ['protection dès la conception'],
    categorie: 'rne',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "La protection de la vie privée est intégrée dès la conception du produit ou du service, pas ajoutée après coup.",
    explicationSimple: "Protéger la vie privée dès l'architecture du produit.",
    phraseExamen:
      "Parallèle méthodologique remarquable avec l'accessibilité : privacy by design ↔ accessibilité intégrée dès la conception. Dans les deux cas, corriger après coup coûte beaucoup plus cher et donne un résultat inférieur.",
    pieges: [
      {
        erreur: 'Confondre by design et by default.',
        pourquoi: 'By design = dès la conception. By default = dans les réglages par défaut.',
        test: 'Parle-t-on du moment de la conception, ou de l’état des réglages livrés ?',
      },
    ],
    motsCles: ['conception', 'architecture', 'anticipation'],
    sources: ['cours-leclere', 'memos', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'privacy-by-default',
    slug: 'privacy-by-default',
    nom: 'Privacy by default',
    aliases: ['réglages protecteurs par défaut'],
    categorie: 'rne',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Par défaut, seules les données strictement nécessaires sont traitées ; les paramètres les plus protecteurs sont activés d'origine. Implique un consentement libre et éclairé.",
    explicationSimple: "Faire en sorte que l'utilisateur soit protégé même s'il ne touche à aucun réglage.",
    motsCles: ['réglages', 'par défaut', 'consentement'],
    sources: ['cours-leclere', 'memos', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'opt-in',
    slug: 'opt-in',
    nom: 'Opt-in et double opt-in',
    nomCourt: 'Opt-in',
    aliases: ['consentement actif', 'double opt-in', 'opt-out'],
    categorie: 'rne',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "L'utilisateur doit activement consentir (opt-in) ; le double opt-in exige une confirmation supplémentaire (ex. e-mail de validation).",
    explicationSimple:
      "Opt-in : la case n'est pas cochée par défaut. Double opt-in : on confirme en deux temps, ce qui garantit un consentement libre et éclairé et en conserve la preuve.",
    motsCles: ['consentement', 'confirmation', 'preuve'],
    sources: ['cours-leclere', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'pets',
    slug: 'pets',
    nom: 'PETs — Privacy Enhancing Technologies',
    nomCourt: 'PETs',
    acronyme: 'PETs',
    categorie: 'rne',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "Technologies renforçant la confidentialité : chiffrement, anonymisation, pseudonymisation, calcul sécurisé. Le cours cite également le Digital Omnibus, paquet européen de simplification/adaptation du cadre numérique.",
    explicationSimple: "Les moyens techniques de la protection des données.",
    motsCles: ['chiffrement', 'anonymisation', 'pseudonymisation'],
    sources: ['cours-leclere'],
    provenance: 'cours',
  },
  {
    id: 'protection-donnees',
    slug: 'protection-donnees',
    nom: 'Protection des données — cadre légal',
    nomCourt: 'Protection des données',
    aliases: ['LPD', 'RGPD', 'GDPR', 'données personnelles'],
    categorie: 'rne',
    type: 'cadre-legal',
    priorite: 1,
    definitionCours:
      "LPD — Loi fédérale sur la protection des données (Suisse), révisée, en vigueur depuis le 1ᵉʳ septembre 2023. RGPD — Règlement général sur la protection des données (UE), qui s'applique aux entreprises suisses traitant des données de résidents de l'UE. Art. 21A Cst-GE — droit à l'intégrité numérique.",
    explicationSimple:
      "Une entreprise suisse opérant en Europe est soumise au RGPD même sans équivalent suisse — exactement comme pour l'AI Act.",
    motsCles: ['LPD', 'RGPD', 'extraterritorialité'],
    sources: ['cours-leclere', 'encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'integrite-numerique',
    slug: 'integrite-numerique',
    nom: "Droit à l'intégrité numérique (Art. 21A Cst-GE)",
    nomCourt: 'Intégrité numérique',
    aliases: ['art 21A', 'Constitution genevoise', 'droit à une vie hors ligne', 'droit à l’oubli'],
    categorie: 'rne',
    type: 'cadre-legal',
    priorite: 1,
    definitionCours:
      "Art. 21A — Droit à l'intégrité numérique. ¹ Toute personne a le droit à la sauvegarde de son intégrité numérique. ² L'intégrité numérique inclut notamment le droit d'être protégé contre le traitement abusif des données liées à sa vie numérique, le droit à la sécurité dans l'espace numérique, le droit à une vie hors ligne ainsi que le droit à l'oubli. ³ Le traitement des données personnelles dont la responsabilité incombe à l'État ne peut s'effectuer à l'étranger que dans la mesure où un niveau de protection adéquat est assuré. ⁴ L'État favorise l'inclusion numérique et sensibilise la population aux enjeux du numérique. Il s'engage en faveur du développement de la souveraineté numérique de la Suisse et collabore à sa mise en œuvre.",
    explicationSimple:
      "Un seul texte contient : protection des données, sécurité, droit à une vie hors ligne, droit à l'oubli, localisation des données, inclusion numérique et souveraineté numérique. Presque tous les thèmes du cours numérique y figurent.",
    phraseExamen:
      "Le « droit à une vie hors ligne » (al. 2) est le point le plus remarquable et le plus citable : il consacre juridiquement le droit de ne pas être numérisé. C'est l'argument juridique le plus fort contre une stratégie « Digital First » exclusive.",
    motsCles: ['Genève', 'vie hors ligne', 'oubli', 'inclusion', 'souveraineté'],
    sources: ['cours-leclere', 'encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'gouvernance-donnees',
    slug: 'gouvernance-donnees',
    nom: 'Gouvernance des données',
    categorie: 'rne',
    type: 'methode',
    priorite: 2,
    definitionCours:
      "🔎 Ensemble des rôles, règles, processus et responsabilités qui encadrent la collecte, la conservation, l'usage, le partage et la suppression des données dans l'organisation.",
    explicationSimple:
      "Quatre questions : QUI décide de l'usage des données (rôles : DPO, CDO, CISO) ? QUELLES données sont collectées et pourquoi (finalité, minimisation, registre) ? COMMENT sont-elles protégées (sécurité, chiffrement, PETs) ? COMBIEN DE TEMPS sont-elles conservées (durée de vie des données) ?",
    phraseExamen:
      "La dernière question a une dimension environnementale directe : le RGESN inclut « la durée de vie des données » parmi ses six leviers d'écoconception, et l'UNIL constate un ×4 des données stockées en quatre ans. Conserver des données inutiles coûte de l'énergie, de l'espace et augmente la surface de risque cyber.",
    chiffres: [
      { libelle: "Impact du numérique à l'UNIL en 2023", valeur: '3 200 t CO₂-e/an sur ~33 000 t au total', source: 'cours-recordon' },
      { libelle: 'Données stockées à l’UNIL 2019-2023', valeur: '×4 (dont 85 % de données de recherche)', source: 'cours-recordon' },
    ],
    motsCles: ['rôles', 'finalité', 'conservation', 'sobriété'],
    sources: ['cours-leclere', 'encyclopedie'],
    provenance: 'interpretation',
  },
  {
    id: 'cybersecurite',
    slug: 'cybersecurite',
    nom: 'Cybersécurité et gestion de crise',
    nomCourt: 'Cybersécurité',
    aliases: ['data breach', 'violation de données', 'NCSC', 'PFPDT'],
    categorie: 'rne',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Autorités et dispositifs cités : NCSC — Centre national pour la cybersécurité (Suisse), destinataire des annonces de cyberincidents ; PFPDT / edoeb — Préposé fédéral à la protection des données et à la transparence. Bonnes pratiques : plan de gestion de crise, procédure de notification en cas de data breach, politique de confidentialité claire et lisible, politique IA interne.",
    explicationSimple: "Se préparer avant l'incident, notifier pendant, communiquer après.",
    phraseExamen:
      "La communication de crise est explicitement listée comme compétence opérationnelle et technique dans le diagnostic interne. Le lien est direct.",
    motsCles: ['NCSC', 'notification', 'plan de crise', 'compétence'],
    sources: ['cours-leclere', 'encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'ia',
    slug: 'ia',
    nom: 'Intelligence artificielle — levier et risque',
    nomCourt: 'IA',
    acronyme: 'IA',
    aliases: ['intelligence artificielle', 'AI', 'LLM', 'ChatGPT'],
    categorie: 'rne',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Le cours présente l'IA en double lecture. Levier économique : productivité, nouveaux services, aide à la décision. Risques : biais et discrimination, opacité algorithmique, protection des données, impact environnemental, dépendance technologique, autonomie cognitive.",
    explicationSimple:
      "Comme tout le numérique : à traiter en double sens. Le levier est réel, le coût aussi.",
    chiffres: [
      { libelle: 'Requête moyenne ChatGPT', valeur: '~4,32 g CO₂, soit 4 à 5 fois une recherche Google', source: 'encyclopedie' },
      {
        libelle: 'Croissance de la consommation électrique du numérique (avec IA)',
        valeur: '16 %/an, doublement tous les 4 ans',
        source: 'cours-recordon',
      },
    ],
    phraseExamen: "L'IA n'est pas neutre : sa désirabilité doit être questionnée avant son déploiement.",
    motsCles: ['biais', 'opacité', 'énergie', 'dépendance'],
    sources: ['cours-leclere', 'encyclopedie', 'questions-officielles'],
    provenance: 'cours',
  },
  {
    id: 'ai-act',
    slug: 'ai-act',
    nom: 'AI Act européen',
    nomCourt: 'AI Act',
    aliases: ['règlement IA', 'niveaux de risque', 'AI Act UE'],
    categorie: 'rne',
    type: 'cadre-legal',
    priorite: 1,
    annee: '1er août 2024',
    definitionCours:
      "AI Act — en vigueur le 1ᵉʳ août 2024, règlement contraignant, application échelonnée. Approche par les risques : risque inacceptable (interdit), haut risque (obligations lourdes / conformité stricte), risque limité (transparence), risque minimal (libre). Calendrier : 1ᵉʳ août 2024 entrée en vigueur ; 2 août 2026 obligations de transparence applicables ; 2 décembre 2027 systèmes à haut risque « autonomes » ; 2 août 2028 systèmes à haut risque intégrés dans des produits.",
    explicationSimple:
      "Quatre niveaux de risque, un calendrier échelonné. Le cours reproduit aussi l'Annexe 1 du Code of Practice de la Commission européenne, avec les icônes « AI » proposées pour identifier les contenus générés par intelligence artificielle.",
    phraseExamen:
      "Point de calendrier très valorisant : les obligations de transparence sont applicables depuis le 2 août 2026, celles sur les systèmes à haut risque ne le sont pas encore.",
    exemples: [
      {
        texte:
          "Paysage réglementaire mondial : ONU — résolution sur l'IA du 21 mars 2024, non contraignante. États-Unis — Executive Order du 30 octobre 2023. Union européenne — AI Act, 1ᵉʳ août 2024, contraignant. Chine — règlements CAC (2022, 2023), contraignant et sectoriel. Suisse — décision du Conseil fédéral du 12 février 2025.",
        source: 'cours-leclere',
      },
    ],
    chiffres: [
      { libelle: 'Niveaux de risque', valeur: '4' },
      { libelle: 'Entrée en vigueur', valeur: '1ᵉʳ août 2024' },
    ],
    motsCles: ['inacceptable', 'élevé', 'limité', 'minimal', 'transparence'],
    sources: ['cours-leclere', 'encyclopedie', 'memos', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'position-suisse-ia',
    slug: 'position-suisse-ia',
    nom: "Position suisse sur l'IA",
    nomCourt: 'Suisse et IA',
    aliases: ['Convention Conseil de l’Europe', 'Apertus', 'Conseil fédéral IA'],
    categorie: 'rne',
    type: 'cadre-legal',
    priorite: 2,
    annee: '12 février 2025',
    definitionCours:
      "Décision du Conseil fédéral du 12.02.2025 : ratification de la Convention du Conseil de l'Europe sur l'IA ; réglementation intersectorielle limitée — pas de loi générale sur l'IA ; adaptation du droit existant plutôt que création d'un corpus nouveau ; réglementations sectorielles ciblées, notamment santé et transports. Apertus : modèle de langage développé à l'EPFL, cité comme exemple d'alternative souveraine.",
    explicationSimple:
      "Pragmatisme, mais risque de retard. Une entreprise suisse opérant en Europe est soumise à l'AI Act même sans loi suisse équivalente — exactement comme pour le RGPD.",
    phraseExamen:
      "Comparaison des approches : UE = réglementation ex ante, horizontale, par les risques (protection forte, charge de conformité). USA = décret exécutif, sectoriel et souple (innovation rapide, protection variable). Chine = ciblée sur les algorithmes et l'IA générative, contrôle étatique fort. Suisse = pas de loi générale, adaptation du droit existant. ONU = résolution non contraignante, cadre symbolique.",
    motsCles: ['Conseil fédéral', 'sectoriel', 'souveraineté', 'EPFL'],
    sources: ['cours-leclere', 'encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'enjeux-ethiques-ia',
    slug: 'enjeux-ethiques-ia',
    nom: "Enjeux éthiques de l'IA",
    nomCourt: 'Éthique de l’IA',
    aliases: ['biais algorithmiques', 'transparence algorithmique', 'explicabilité'],
    categorie: 'rne',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Biais algorithmiques : un système entraîné sur des données historiques reproduit les discriminations passées. Transparence / explicabilité : pouvoir expliquer une décision automatisée ; obligation de l'AI Act. Responsabilité : qui répond d'une décision prise par une IA ? Protection des données : les modèles s'entraînent sur des données personnelles. Impact environnemental. Autonomie cognitive. Souveraineté.",
    explicationSimple:
      "Le cours recommande aux entreprises d'établir une politique IA comme composante de la charte numérique : usages autorisés, données admissibles, obligation de mention, validation humaine.",
    phraseExamen:
      "La responsabilité des réponses d'un chatbot incombe à l'entreprise qui le déploie, pas au chatbot ni au seul fournisseur de l'IA : on doit pouvoir exiger qu'une décision automatisée soit examinée par un humain.",
    motsCles: ['biais', 'explicabilité', 'responsabilité', 'politique IA'],
    sources: ['cours-leclere', 'cas-silverdigital'],
    provenance: 'cours',
  },
]
