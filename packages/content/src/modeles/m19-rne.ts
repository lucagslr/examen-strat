import type { Modele } from './types'

export const modele: Modele = {
  id: 'rne',
  numero: 19,
  slug: 'rne',
  nom: 'Responsabilité numérique des entreprises',
  sousTitre: 'Les 4 axes',
  famille: 'numerique',
  etape: 'transverse',

  question:
    'Une entreprise qui se numérise est-elle responsable — et responsable de quoi, exactement ?',

  enUnePhrase:
    'La RNE — Responsabilité Numérique des Entreprises, en anglais Corporate Digital Responsibility (CDR) — est la RSE appliquée au numérique : 📘 « la conjonction entre les progrès du numérique et la responsabilité sociétale des entreprises », et elle se découpe en quatre axes qu’il faut traiter ensemble — économique, technologique, environnemental, sociétal.',

  produit:
    'Un diagnostic à quatre entrées sur les usages numériques de l’entreprise : un fait établi par axe, un axe désigné comme prioritaire avec sa justification par le contexte, puis un livrable concret — une charte numérique co-rédigée, un rôle nommé qui en répond, un indicateur par axe.',

  quandUtiliser: [
    'Dès qu’une question mêle numérique et entreprise : « cette digitalisation est-elle responsable ? », « faut-il déployer cette IA ? », « que penser de leur application ? ». La RNE est la grille qui empêche de répondre à côté.',
    'Quand la consigne demande de prioriser — 📘 « quel axe privilégieriez-vous ? ». C’est la question type, et elle attend une réponse justifiée par l’activité de l’entreprise, pas une liste.',
    'En relecture, dans les dernières secondes de préparation : ai-je dit quelque chose sur les quatre axes, ou seulement sur celui que je connais le mieux ? Un axe muet s’entend.',
    'Quand un thème pointu tombe — données, IA, accessibilité, empreinte du cloud : chacun n’est qu’un morceau d’un axe, et le situer dans les quatre montre qu’on a une carte, pas un souvenir.',
    'Quand l’entreprise met en service un outil numérique nouveau : c’est le moment où les quatre axes bougent en même temps, et où l’on peut encore décider.',
  ],

  quandNePasUtiliser: [
    'Pour mesurer. La RNE dit ce qu’il faut regarder, jamais combien cela pèse : le chiffrage environnemental vient des trois postes T-D-R, le chiffrage social des KPI d’accessibilité.',
    'Pour trancher entre deux options stratégiques : ce n’est pas un outil de décision. Elle nourrit l’acceptabilité et la faisabilité du SAF, elle ne les remplace pas.',
    'Pour traiter la durabilité en général. La RNE ne couvre que le numérique — un déchet d’atelier, une tonne de CO₂ de transport ou un fournisseur douteux relèvent de la RSE, du Donut ou du wedding cake.',
    'Comme diagnostic externe. Elle regarde ce que l’entreprise fait de son numérique, pas ce que le marché lui impose : cela reste le travail du PESTEL et de Porter.',
  ],

  schema: {
    h: 790,
    description:
      'Quatre axes disposés en croix — économique en haut, sociétal à gauche, technologique à droite, environnemental en bas — pointent tous vers une case centrale, la RNE ; l’ensemble débouche en bas sur une bande qui porte le livrable : charte, rôles et indicateurs.',
    noeuds: [
      {
        id: 'cadre-axes',
        titre: 'LES 4 AXES — É-T-E-S',
        forme: 'cadre',
        x: 16,
        y: 16,
        l: 968,
        h: 628,
      },
      {
        id: 'eco',
        titre: 'É — ÉCONOMIQUE',
        lignes: ['Valeur, efficacité, viabilité.', 'Ce que le numérique', 'rapporte et ce qu’il coûte.'],
        x: 370,
        y: 80,
        l: 260,
        h: 140,
        point: 'economique',
      },
      {
        id: 'soc',
        titre: 'S — SOCIÉTAL',
        lignes: ['Accessibilité, inclusion,', 'emploi, transparence.', 'Qui reste dehors ?'],
        x: 40,
        y: 280,
        l: 260,
        h: 140,
        point: 'societal',
      },
      {
        id: 'rne',
        titre: 'RNE',
        lignes: ['La RSE appliquée', 'au numérique.', 'Quatre axes solidaires.'],
        x: 370,
        y: 280,
        l: 260,
        h: 140,
        ton: 'accent',
        point: 'rne-centre',
      },
      {
        id: 'tech',
        titre: 'T — TECHNOLOGIQUE',
        lignes: ['Données, cybersécurité,', 'dépendance, IA.', 'Maîtrise-t-on l’outil ?'],
        x: 700,
        y: 280,
        l: 260,
        h: 140,
        point: 'technologique',
      },
      {
        id: 'env',
        titre: 'E — ENVIRONNEMENTAL',
        lignes: ['Terminaux, énergie,', 'déchets, cycle de vie.', 'Où pèse notre numérique ?'],
        x: 370,
        y: 480,
        l: 260,
        h: 140,
        point: 'environnemental',
      },
      {
        id: 'livrable',
        titre: 'LE LIVRABLE',
        lignes: ['charte numérique · rôle · KPI/axe'],
        forme: 'bande',
        ton: 'positif',
        x: 40,
        y: 704,
        l: 920,
        h: 70,
        point: 'livrable',
      },
    ],
    liens: [
      { de: 'eco', vers: 'rne' },
      { de: 'soc', vers: 'rne' },
      { de: 'tech', vers: 'rne' },
      { de: 'env', vers: 'rne' },
      { de: 'cadre-axes', vers: 'livrable' },
    ],
    note:
      'Les quatre axes ne se hiérarchisent pas d’avance : c’est l’activité de l’entreprise qui dit lequel prime. Une banque commence par les données, un site de streaming par l’environnement, un service public par le sociétal.',
  },

  points: [
    {
      id: 'rne-centre',
      libelle: 'RNE — la case centrale',
      cestQuoi:
        '📘 « La conjonction entre les progrès du numérique et la responsabilité sociétale des entreprises (RSE). » Autrement dit : la RSE — la prise en charge par une entreprise des effets sociaux et environnementaux de son activité — appliquée à un domaine précis, le numérique. Le nom anglais, Corporate Digital Responsibility (CDR), dit la même chose. Ce n’est ni une norme, ni une loi : c’est un cadre de responsabilité volontaire, que la loi vient ensuite rattraper par morceaux (LPD, RGPD, AI Act, European Accessibility Act).',
      question:
        'Nos usages numériques tiennent-ils sur les quatre axes à la fois — ou seulement sur celui qui nous arrange ?',
      quoiMettre: [
        'Le périmètre : de quel numérique parle-t-on ? Les appareils, les logiciels, les données, l’IA, le site, l’infrastructure louée ? 📘 Sans périmètre, aucun chiffre n’est comparable.',
        '📘 Les six bénéfices donnés par le Guide RNE : confiance des clients et des collaborateurs · anticipation des évolutions réglementaires · réduction des risques cyber, réputationnels et juridiques · attraction et fidélisation des talents · réduction des coûts (énergie, équipements, licences) · différenciation sur le marché.',
        'Un fait par axe — pas quatre intentions. « Nous avons deux fournisseurs de batteries » est un fait ; « nous sommes attentifs à nos fournisseurs » n’en est pas un.',
        'L’axe prioritaire, et la phrase qui le justifie par l’activité de l’entreprise.',
        'Le nom de la personne ou du rôle qui pilote. Sans lui, la RNE reste une déclaration.',
      ],
      exemple:
        'Atelier Léman n’a jamais posé la question : l’entreprise fabrique des vélos, pas des logiciels. Mais le projet d’abonnement mobilité ajoute d’un coup une application de gestion de flotte, des capteurs sur 40 vélos et des données de trajets de collaborateurs d’autres entreprises. Le numérique cesse d’être un outil de bureau pour devenir une partie de l’offre — donc une partie de la responsabilité.',
      piege:
        'Traiter la RNE comme un synonyme de « écologie du numérique ». Trois axes sur quatre n’ont rien à voir avec le CO₂.',
      reflexe:
        'Se répéter la phrase de définition avant de commencer : c’est la RSE appliquée au numérique. Or la RSE n’a jamais été que de l’environnement — elle a toujours eu un versant social, économique et de gouvernance.',
      notions: ['rne', 'quatre-axes-rne', 'perimetre-numerique', 'transformation-numerique'],
    },
    {
      id: 'economique',
      libelle: 'É — Économique',
      cestQuoi:
        '📘 Valeur, efficacité, viabilité. C’est l’axe qui demande si le numérique déployé crée plus de valeur qu’il n’en consomme — non pas au prix affiché, mais au coût complet : 📘 « coût du cycle de vie = achat + fonctionnement + élimination ». C’est aussi l’axe le plus souvent oublié à l’oral, parce qu’il n’a pas l’air « responsable ». Il l’est pourtant : un dispositif numérique qui ruine l’entreprise ne protège personne.',
      question:
        'Ce que le numérique nous fait gagner couvre-t-il ce qu’il nous coûte, une fois tout compté ?',
      quoiMettre: [
        '📘 Le coût du cycle de vie en trois lignes : ce qu’on paie pour acheter, ce qu’on paie chaque mois pour faire tourner (licences, abonnements, hébergement, maintenance), ce qu’on paiera pour éliminer.',
        'Les gains réels et mesurables : temps gagné, erreurs évitées, tournées supprimées, stock réduit. Chiffrés, sinon ce sont des espoirs.',
        '📘 Les économies que la RNE elle-même produit — énergie, équipements, licences : c’est l’argument qui répond à l’objection « c’est trop cher ».',
        'La dépendance à un fournisseur, lue en coût : plus le coût de changement est élevé, plus le prix qu’il pourra imposer demain l’est aussi. C’est du pouvoir de négociation des fournisseurs au sens de Porter.',
        '📘 La différenciation : la responsabilité numérique peut être vendue, pas seulement subie.',
      ],
      exemple:
        'Pour le pilote d’abonnement : l’application de flotte est facturée en abonnement mensuel par vélo, les capteurs s’achètent une fois mais se remplacent tous les trois ou quatre ans, et personne n’a chiffré leur mise au rebut. Face à cela, un gain crédible : savoir à l’avance quel vélo va lâcher évite une immobilisation, et une immobilisation coûte un vélo de remplacement plus un déplacement. (chiffres illustratifs — l’important est d’avoir écrit les trois lignes de coût, pas d’avoir raison au franc près.)',
      piege:
        'Écrire le prix d’achat et s’arrêter là. C’est l’erreur nommée par le cours sur les achats : le prix affiché n’est qu’un tiers du coût.',
      reflexe:
        'Trois lignes obligatoires, jamais une : acheter — faire tourner — éliminer. Si la troisième ligne est vide, c’est déjà un résultat de diagnostic.',
      notions: ['cout-cycle-de-vie', 'sept-principes-achats', 'structure-couts', 'cout-changement'],
    },
    {
      id: 'technologique',
      libelle: 'T — Technologique',
      cestQuoi:
        '📘 Cybersécurité, données, dépendance, gouvernance, IA — avec la conformité LPD/RGPD et un cadre éthique. C’est l’axe de la maîtrise : l’entreprise sait-elle ce que sa technologie fait, avec quelles données, sous quelle règle, et que se passe-t-il le jour où elle tombe ? ⚠️ Dans l’étiquetage du Guide RNE, cet axe se dédouble en « Données » d’un côté et « Éthique et gouvernance » de l’autre — voir la variante plus bas.',
      question:
        'Maîtrise-t-on ce qu’on a mis en marche — les données collectées, la sécurité, l’algorithme, le fournisseur ?',
      quoiMettre: [
        'Les données : lesquelles, pourquoi, combien de temps. 📘 La minimisation — ne collecter que ce qui sert la finalité annoncée — est le principe le plus opératoire des cinq de la collecte.',
        '📘 Le cadre légal applicable : LPD révisée (Suisse, en vigueur depuis le 1ᵉʳ septembre 2023), RGPD dès qu’on traite des données de résidents de l’UE, AI Act pour l’IA, et à Genève l’art. 21A Cst-GE sur le droit à l’intégrité numérique.',
        '📘 La cybersécurité comme organisation, pas comme antivirus : plan de gestion de crise, procédure de notification en cas de fuite (le NCSC en Suisse), politique de confidentialité lisible.',
        'La dépendance : combien de fournisseurs critiques, où sont hébergées les données, que coûte un changement de prestataire. C’est la question de souveraineté numérique, posée à l’échelle d’une PME.',
        '📘 Si l’IA est en jeu : biais et discrimination, opacité de la décision, données d’entraînement, impact énergétique — 📘 une requête ChatGPT vaut environ 4,32 g de CO₂, soit quatre à cinq fois une recherche Google.',
        'Qui décide. 📘 DPO, CISO, Chief AI Officer : constater qu’aucun de ces rôles n’existe est un diagnostic, pas un oubli.',
      ],
      exemple:
        'L’application de flotte enregistrerait les trajets des collaborateurs des six entreprises pilotes. Atelier Léman deviendrait alors responsable de données de géolocalisation de personnes qui ne sont même pas ses clientes — la donnée la plus sensible du projet, dans une entreprise de 45 salariés qui n’a ni DPO, ni procédure de fuite, ni contrat de sous-traitance avec l’éditeur de l’application. C’est ici l’axe le plus faible, et de loin.',
      piege:
        'Répondre « nous sommes conformes » et considérer l’axe traité. 📘 La phrase du cas SilverDigital vaut ici aussi : « le risque n’est pas juridique, mais stratégique » — on peut être parfaitement en règle et perdre la confiance de ses clients.',
      reflexe:
        'Après la conformité, poser systématiquement la deuxième question : et si cela tombait, ou si cela fuitait, qui prévient qui, en combien de temps ? La réponse « on ne sait pas » est le vrai résultat.',
      notions: [
        'protection-donnees',
        'minimisation-donnees',
        'cybersecurite',
        'gouvernance-donnees',
        'integrite-numerique',
        'ia',
        'ai-act',
        'souverainete-numerique',
      ],
    },
    {
      id: 'environnemental',
      libelle: 'E — Environnemental',
      cestQuoi:
        '📘 Terminaux, énergie, déchets, cycle de vie, effet rebond. C’est l’axe qui refuse l’idée que le numérique serait immatériel — 📘 « le premier fait à rappeler est que le numérique n’est pas immatériel ». Un service qui semble virtuel repose sur des appareils fabriqués, des serveurs refroidis, des réseaux entretenus et de l’électricité.',
      question:
        'Où exactement notre numérique pèse-t-il — et le gain annoncé survit-il à l’augmentation du volume ?',
      quoiMettre: [
        '📘 Les trois postes T-D-R : terminaux, data centers, réseaux. Les ordres de grandeur français — terminaux environ 50 %, centres de données 46 %, réseaux 4 % — servent surtout à casser l’idée reçue que tout serait la faute des data centers.',
        '📘 Le poids de la fabrication : pour un terminal, produire coûte souvent plus que faire fonctionner. D’où la règle des achats IT — acheter moins, acheter mieux, utiliser plus longtemps.',
        '📘 Les DEEE, déchets d’équipements électriques et électroniques : difficiles à recycler, aggravés par l’obsolescence. Le levier n’est pas le bac de recyclage, c’est de ne pas fabriquer.',
        '📘 Le test de l’effet rebond, avec sa formule : impact total = impact par unité × nombre d’unités. Un gain de 30 % par unité disparaît si le volume double.',
        '📘 La sobriété Q-T-A dans cet ordre — Questionner le besoin, Transférer vers un moyen moins lourd, Améliorer techniquement. L’ordre courant est l’inverse, et c’est précisément l’erreur.',
      ],
      exemple:
        'Le projet ajoute 40 capteurs, une application sur les téléphones de six entreprises, et un hébergement de données de trajets. En face, un impact évité : la maintenance prédictive fait durer les vélos plus longtemps, et un vélo qui dure est la meilleure économie de matière qui soit. La question est celle du cours : l’impact évité dépasse-t-il l’impact créé ? Sur 40 vélos, ce n’est pas évident ; sur 400, la réponse changerait. Dire de quoi cela dépend vaut mieux que trancher trop vite.',
      piege:
        '📘 « Notre stratégie numérique est responsable parce que nos serveurs utilisent de l’énergie verte. » Cela ne couvre qu’une partie d’un seul des quatre axes — et pas la principale, puisque l’essentiel se joue à la fabrication des terminaux.',
      reflexe:
        'Localiser avant de conclure : terminaux, data centers ou réseaux ? Puis une phrase en absolu, jamais en pourcentage seul. « Moins par unité » n’est pas une conclusion, c’est un fait de départ.',
      notions: [
        'trois-postes-numerique',
        'effet-rebond',
        'sobriete-numerique',
        'achats-it-responsables',
        'deee',
        'cycle-de-vie',
      ],
    },
    {
      id: 'societal',
      libelle: 'S — Sociétal',
      cestQuoi:
        '📘 Accessibilité, inclusion, employabilité, conditions de travail, transparence. C’est l’axe des gens : celui qui demande qui n’arrive pas à se servir du service, et ce que cette personne devient ensuite. 📘 L’accessibilité numérique est la « capacité d’un service, site ou application à être utilisé par toutes les personnes, quelles que soient leurs capacités et leur équipement ».',
      question: 'Qui n’arrive pas à s’en servir — et que lui reste-t-il comme solution ?',
      quoiMettre: [
        '📘 Les quatre principes WCAG, mémo POUR : Perceptible (contrastes, alternatives textuelles, sous-titres), Utilisable (clavier, délais suffisants), Compréhensible (langage clair, erreurs explicites), Robuste (lecteurs d’écran, navigateurs variés).',
        '📘 Le vrai périmètre des publics : handicaps permanents, mais aussi handicaps temporaires (bras cassé), situations de handicap (soleil, bruit, connexion lente), âge, langue et littératie.',
        '📘 L’exclusion indirecte : une conception apparemment neutre qui désavantage de fait une population, sans intention de discriminer. Personne n’a écrit « les plus de 65 ans ne sont pas les bienvenus » — le parcours le dit à leur place.',
        'Le canal humain maintenu. 📘 L’art. 21A al. 2 Cst-GE consacre le « droit à une vie hors ligne » : c’est l’argument juridique le plus fort contre un digital-only.',
        'L’emploi et les compétences internes : qui va devoir apprendre un nouvel outil, et qui n’y arrivera pas seul.',
        '📘 Des KPI qui ne soient pas que techniques : taux de conformité, mais aussi taux de réussite d’un parcours et taux d’abandon des publics fragiles.',
      ],
      exemple:
        'Deux publics apparaissent. À l’intérieur : les mécaniciens d’Atelier Léman, dont la valeur est dans les mains et pas dans un écran — leur imposer une saisie sur tablette sans formation, c’est transformer une force en faiblesse. À l’extérieur : les entreprises clientes de moins de dix personnes, sans service RH ni informatique, pour qui une application de gestion de flotte est une charge et non un service. Une PME de six salariés a besoin d’un numéro de téléphone, pas d’un tableau de bord.',
      piege:
        '📘 Réduire l’accessibilité au handicap visuel permanent, et croire qu’elle concerne une minorité négligeable.',
      reflexe:
        'Renverser la phrase : concevoir pour les cas extrêmes améliore l’expérience de tous. Les sous-titres servent aussi dans le train, le contraste élevé aussi en plein soleil, le langage clair à tout le monde. 📘 C’est le « double levier » du cours : responsabilité et création de valeur.',
      notions: [
        'accessibilite-numerique',
        'pour',
        'exclusion-indirecte',
        'inclusion-numerique',
        'double-levier-accessibilite',
        'kpi-accessibilite',
      ],
    },
    {
      id: 'livrable',
      libelle: 'Le livrable — charte, rôle, KPI',
      cestQuoi:
        'Ce que la démarche doit produire, sinon elle n’a rien produit. 📘 Une charte numérique est un « document collectif énonçant les engagements d’une organisation sur ses pratiques numériques ». Elle se distingue d’une stratégie numérique : la stratégie fixe des objectifs et des moyens, la charte dit ce qui est acceptable et ce qui ne l’est pas.',
      question:
        'Qui s’engage, sur quoi précisément, qui en répond, et comment le vérifie-t-on dans six mois ?',
      quoiMettre: [
        '📘 Les cinq étapes de la charte : 1. Identifier les enjeux prioritaires · 2. Impliquer, c’est-à-dire la rédiger collectivement avec les équipes · 3. Formaliser des engagements concrets et vérifiables · 4. Diffuser auprès des collaborateurs, clients et partenaires · 5. Faire vivre — former, mesurer, réviser.',
        '📘 Un rôle nommé, choisi dans la liste du cours : DPO pour les données, CISO pour la sécurité, Accessibility Officer pour l’accessibilité, Green Chief Officer pour l’empreinte, Chief AI Officer pour l’IA. Dans une PME, une seule personne peut porter plusieurs casquettes — mais elle est nommée.',
        'Un indicateur par axe, dont au moins un exprimé en valeur absolue et non en pourcentage.',
        'Une date de revue. 📘 La RNE est une démarche de progrès continu : sans échéance, elle s’arrête au lendemain de la réunion.',
        '📚 Un cadre externe si l’on veut s’adosser à quelque chose : la charte de l’Institut du Numérique Responsable (INR) et ses cinq engagements sert de modèle — le cours la cite.',
      ],
      exemple:
        'Pour Atelier Léman, un livrable réaliste tient en cinq lignes : une charte d’une page rédigée avec les deux chefs d’atelier ; la directrice administrative désignée référente données et accessibilité ; l’engagement de conserver les trajets 90 jours au lieu de « indéfiniment » ; un numéro de téléphone garanti pour toute entreprise cliente, quel que soit son abonnement ; et une revue au bout du pilote de 12 mois. (illustratif — mais c’est le format attendu : engageable et vérifiable.)',
      piege:
        'Écrire une charte à la place des équipes et la diffuser par courriel. 📘 C’est l’étape 2 qui distingue une charte d’un règlement descendant : elle se rédige AVEC, pas POUR.',
      reflexe:
        'Passer chaque engagement au test de vérification : « comment saurai-je dans six mois si c’est tenu ? ». Un engagement qui ne passe pas ce test est un slogan.',
      notions: ['charte-numerique', 'charte-inr', 'gouvernance-numerique-roles', 'kpi', 'trois-u'],
    },
  ],

  methode: [
    {
      titre: '1. Fixer le périmètre numérique avant de juger quoi que ce soit',
      detail:
        'Écrire en une ligne de quel numérique on parle : les postes de travail ? le site ? l’application vendue au client ? les données ? l’IA ? l’hébergement loué ? 📘 La frontière retenue change complètement le résultat, exactement comme le périmètre d’un diagnostic stratégique.',
      aEviter:
        'Partir sur « le numérique de l’entreprise » sans dire lequel : on finit par mélanger l’imprimante du bureau et l’algorithme qui décide à la place d’un humain.',
    },
    {
      titre: '2. Faire un tour des quatre axes et poser UN fait par axe',
      detail:
        'É, T, E, S dans l’ordre, quatre lignes, un fait observable dans chacune — tiré de l’énoncé, pas de la culture générale. À ce stade on ne juge pas, on constate. Quatre faits en quatre lignes tiennent en deux minutes de préparation.',
      aEviter:
        'Remplir trois axes richement et laisser le quatrième vide en espérant que cela passe. Un axe muet est exactement ce que l’examinateur entend.',
    },
    {
      titre: '3. Demander qui est concerné, axe par axe',
      detail:
        '📘 La deuxième étape de la démarche RNE est la carte des parties prenantes : clients, collaborateurs, fournisseurs, autorités, riverains du service. Un même déploiement numérique est un gain pour l’un et une perte pour l’autre — et c’est cette asymétrie qui fait l’analyse.',
      aEviter:
        'Ne raisonner que du point de vue de l’entreprise. L’axe sociétal n’existe que si l’on a nommé quelqu’un d’autre qu’elle.',
    },
    {
      titre: '4. Désigner l’axe prioritaire et le justifier par l’activité',
      detail:
        '📘 La question tombe presque toujours sous la forme « quel axe privilégieriez-vous ? ». La réponse se déduit du métier : banque, assurance ou santé → données, puis social ; e-commerce ou streaming → environnement ; déploiement d’IA sur des clients → éthique et gouvernance ; service public → social ; PME industrielle → environnement, puis données.',
      aEviter:
        '📘 Répondre « tous les axes ». C’est le piège explicite du cours : la bonne réponse hiérarchise et dit pourquoi.',
    },
    {
      titre: '5. Chercher la contradiction entre deux axes',
      detail:
        'C’est là que se gagnent les points. Une mesure d’économie d’énergie qui supprime les alternatives accessibles est une 📘 « sobriété injuste » : elle sert E et détruit S. Une sécurité renforcée par une double authentification obligatoire sert T et exclut une partie des utilisateurs. Nommer l’arbitrage vaut mieux que célébrer la mesure.',
      aEviter:
        'Enchaîner quatre axes tous positifs. Si aucun ne frotte contre un autre, c’est qu’on est resté à la surface.',
    },
    {
      titre: '6. Formaliser : une charte co-rédigée et un rôle nommé',
      detail:
        '📘 Cinq étapes — identifier, impliquer, formaliser, diffuser, faire vivre — et un responsable désigné parmi les rôles du cours. Dans une PME, une seule personne peut cumuler ; l’important est qu’il y ait un nom en face de chaque axe prioritaire.',
      aEviter:
        'S’arrêter au diagnostic. Quatre axes analysés sans livrable, c’est une description, et une description ne se recommande pas.',
    },
    {
      titre: '7. Rebrancher sur la stratégie, jamais laisser la RNE à part',
      detail:
        '📘 « Chaque bénéfice de la RNE se traduit dans un outil du cours » : confiance → ressource de réputation ; anticipation réglementaire → facteur légal du PESTEL ; risques → acceptabilité du SAF ; talents → ressources humaines ; coûts → structure de coûts du business model ; différenciation → option stratégique. Une phrase de ce type, en fin de réponse, montre qu’on tient tout le cours ensemble.',
      aEviter:
        'Traiter la RNE comme un chapitre de morale posé à la fin. Elle n’a de valeur à l’oral que branchée sur un outil de décision.',
    },
  ],

  liens: [
    {
      vers: 'trois-postes',
      nature: 'precise',
      explication:
        'L’axe environnemental de la RNE dit qu’il y a un impact ; les trois postes T-D-R disent où il est — « le numérique consomme de l’énergie » est vague, « la moitié de l’impact vient de la fabrication des terminaux » est exploitable.',
    },
    {
      vers: 'wcag-pour',
      nature: 'precise',
      explication:
        'L’axe sociétal reste une intention tant qu’on ne l’a pas passé au POUR : Perceptible, Utilisable, Compréhensible, Robuste — c’est le seul moyen de transformer « notre service est inclusif » en quatre vérifications que quelqu’un peut faire.',
    },
    {
      vers: 'privacy',
      nature: 'precise',
      explication:
        'La protection dès la conception est la mise en œuvre concrète de l’axe technologique : elle transforme « nous respectons la LPD » en un choix d’architecture — collecter moins, par défaut, avant que le service n’existe.',
    },
    {
      vers: 'parties-prenantes',
      nature: 'alimente',
      explication:
        '📘 La deuxième étape de la démarche RNE est la matrice pouvoir × intérêt : sans elle, l’axe sociétal se résume au point de vue de l’entreprise, et l’on ne voit jamais celui qui subit le déploiement sans l’avoir demandé.',
    },
    {
      vers: 'bmc-durable',
      nature: 'prolonge',
      explication:
        '📘 La RNE ne s’arrête pas au diagnostic : elle doit entrer dans le business model — proposition de valeur, ressources, activités, coûts, impacts positifs et externalités négatives —, et c’est le canvas durable qui offre les cases pour l’y mettre.',
    },
  ],

  pieges: [
    {
      titre: 'Prendre un quart d’un axe pour la RNE entière',
      explication:
        '📘 « Notre stratégie numérique est responsable parce que nos serveurs utilisent de l’énergie verte » est l’exemple donné par le cours : cette phrase ne couvre qu’une partie d’un seul des quatre axes, et laisse intacts les données, l’accessibilité, la dépendance et le coût complet.',
      reflexe:
        'Compter sur ses doigts avant de conclure : ai-je dit quelque chose sur É, sur T, sur E, sur S ? Quatre doigts levés, sinon on continue.',
    },
    {
      titre: 'Répondre « tous les axes » quand on demande de prioriser',
      explication:
        '📘 Le cours signale explicitement ce piège. Dire que tout compte revient à ne rien décider — or la question « quel axe privilégieriez-vous ? » teste précisément la capacité à trancher en fonction du contexte.',
      reflexe:
        'Un axe, une phrase de justification tirée du métier de l’entreprise, et une mention des trois autres en second rang : « prioritairement T, parce que nous traiterons des données de géolocalisation de tiers ; E vient ensuite, à cause du parc de capteurs ».',
    },
    {
      titre: 'Confondre conformité et responsabilité',
      explication:
        '📘 « Le risque n’est pas juridique, mais stratégique. » Une entreprise peut être en règle sur toute la ligne et perdre des clients, sa réputation et sa place — c’est exactement ce que montre le cas SilverDigital, où aucun manquement légal n’a été constaté alors que 12 % de la clientèle de plus de 65 ans s’était évaporée.',
      reflexe:
        'Après avoir vérifié la loi, poser la deuxième question : et ceux qui ne portent pas plainte, où vont-ils ? La réponse est en général « chez le concurrent ».',
    },
    {
      titre: 'Oublier l’axe économique parce qu’il n’a pas l’air responsable',
      explication:
        'É est l’axe le plus souvent sauté. C’est pourtant lui qui rend la recommandation crédible : une mesure de responsabilité numérique qui n’est pas viable ne sera pas tenue, et une entreprise qui ferme ne protège plus personne.',
      reflexe:
        'Traduire chaque engagement en coût et en gain, même grossièrement. 📘 Le Guide RNE nomme d’ailleurs la réduction des coûts parmi ses bénéfices : l’argument existe, il suffit de le prendre.',
    },
    {
      titre: 'Livrer quatre axes analysés et rien à faire ensuite',
      explication:
        'Un diagnostic RNE sans charte, sans rôle nommé et sans indicateur est une description. À l’oral, la description consomme du temps et ne rapporte pas : c’est la partie « faire vivre » qui distingue une démarche d’une déclaration.',
      reflexe:
        'Terminer par trois éléments concrets et vérifiables : ce qu’on écrit, qui en répond, comment on le mesure. Trente secondes suffisent, et elles valent la moitié des points.',
    },
  ],

  variantes: [
    {
      sujet: 'Les étiquettes des quatre axes',
      formulations: [
        {
          texte: 'Économique · Technologique · Environnemental · Sociétal (É-T-E-S)',
          source: 'schéma 19 des supports et mémos du cours',
        },
        {
          texte: 'Données · Social · Environnement · Éthique et gouvernance',
          source: 'Guide RNE de l’État de Genève et slides Leclère',
        },
      ],
      consigne:
        'Les deux listes couvrent le même terrain : ce sont les étiquettes qui changent, pas les questions. 🔎 La correspondance n’est cependant pas terme à terme — ce que É-T-E-S range dans « Technologique » (données, cybersécurité, IA, gouvernance), le Guide le nomme séparément « Données » et « Éthique et gouvernance » ; et l’axe « Économique » y est présent sous une autre forme, dans les bénéfices annoncés du guide (réduction des coûts, différenciation, talents). À l’oral, annoncer les quatre domaines, dire quelle étiquette on emploie, et signaler l’autre en une phrase : c’est du gain net, cela prouve qu’on a lu plusieurs supports.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman — l’abonnement mobilité passé aux quatre axes',
    situation:
      'Le SWOT croisé puis le SAF ont retenu une option : un pilote de 40 vélos chez 6 entreprises genevoises sur 12 mois, avec entretien inclus et remplacement garanti. Pour tenir cette promesse, l’entreprise devrait ajouter une application de gestion de flotte, des capteurs de diagnostic sur les vélos, et donc traiter des données. La RNE arrive exactement ici — avant la décision définitive, quand tout est encore modifiable.',
    deroule: [
      {
        etiquette: 'Périmètre',
        contenu:
          'Ce qu’on compte : l’application de flotte, les 40 capteurs, l’hébergement des données de trajets, les téléphones des utilisateurs. Ce qu’on ne compte pas : la bureautique des deux ateliers, inchangée par le projet.',
      },
      {
        etiquette: 'É — Économique',
        contenu:
          'Abonnement mensuel par vélo pour l’application, capteurs achetés une fois et remplacés tous les trois à quatre ans, mise au rebut non chiffrée. En face : chaque panne anticipée évite une immobilisation et un vélo de remplacement. (illustratif)',
      },
      {
        etiquette: 'T — Technologique',
        contenu:
          'Des données de géolocalisation de collaborateurs qui ne sont pas nos clients, chez une PME de 45 salariés sans DPO, sans procédure de fuite et sans contrat de sous-traitance avec l’éditeur. LPD applicable, RGPD dès qu’un collaborateur est résident de l’UE.',
      },
      {
        etiquette: 'E — Environnemental',
        contenu:
          '40 capteurs à fabriquer, une application à héberger — impact créé ; des vélos qui durent plus longtemps grâce à la maintenance prédictive — impact évité. Sur 40 vélos l’arbitrage est incertain ; il basculerait sur un parc dix fois plus grand.',
      },
      {
        etiquette: 'S — Sociétal',
        contenu:
          'À l’intérieur, des mécaniciens dont la valeur n’est pas dans un écran et à qui l’on imposerait une saisie sur tablette. À l’extérieur, des entreprises clientes de six personnes sans service RH, pour qui un tableau de bord est une charge.',
      },
      {
        etiquette: 'La contradiction',
        contenu:
          'Le capteur qui sert l’axe environnemental — faire durer les vélos — est aussi celui qui crée le risque de l’axe technologique — savoir où roulent des personnes. Le même objet sert un axe et dégrade l’autre : c’est cela qu’il faut dire.',
      },
      {
        etiquette: 'Axe prioritaire',
        contenu:
          'T, l’axe technologique. Justification par l’activité : c’est la première fois qu’Atelier Léman détiendrait des données personnelles de tiers, et c’est le seul risque du projet capable de tuer la relation commerciale avec les six entreprises pilotes d’un seul coup.',
      },
      {
        etiquette: 'Livrable',
        contenu:
          'Une charte d’une page rédigée avec les deux chefs d’atelier ; la directrice administrative référente données et accessibilité ; conservation des trajets limitée à 90 jours ; un numéro de téléphone garanti à toute entreprise cliente ; revue à la fin du pilote. (illustratif)',
      },
    ],
    conclusion:
      'La RNE n’a pas changé la décision — le pilote reste recommandé — mais elle en a changé le contenu : le capteur devient optionnel et paramétrable, la durée de conservation devient une clause du contrat, et le canal téléphonique devient un engagement écrit plutôt qu’une habitude. C’est le rendement propre de ce modèle : il ne dit pas oui ou non, il dit à quelles conditions. Les deux points sortis ici — la donnée de tiers et l’arbitrage impact créé contre impact évité — repartent ensuite vers l’acceptabilité du SAF et vers les externalités du business model durable.',
  },

  phraseOral:
    'Je ne dis pas que ce projet est responsable ou qu’il ne l’est pas : je le passe aux quatre axes, et je constate que le même capteur sert l’axe environnemental en faisant durer les vélos et dégrade l’axe technologique en nous rendant détenteurs de données de géolocalisation de tiers — c’est cet arbitrage que je dois trancher, et je le tranche en priorisant l’axe technologique, parce qu’une PME de 45 salariés sans DPO ne survit pas à une fuite chez ses six premiers clients entreprises.',

  aRetenir: [
    {
      cle: 'Définition 📘',
      valeur:
        '« La conjonction entre les progrès du numérique et la responsabilité sociétale des entreprises (RSE). » En anglais : Corporate Digital Responsibility, CDR.',
    },
    {
      cle: 'Les 4 axes 📘',
      valeur:
        'É-T-E-S : Économique · Technologique · Environnemental · Sociétal — ou, selon le support, Données · Social · Environnement · Éthique et gouvernance.',
    },
    {
      cle: 'La question type 📘',
      valeur:
        '« Quel axe privilégieriez-vous ? » — jamais « tous ». Banque et santé → données ; streaming et e-commerce → environnement ; IA sur des clients → éthique ; service public → social.',
    },
    {
      cle: 'Le piège d’ouverture 📘',
      valeur:
        '« Nos serveurs tournent à l’énergie verte » ne couvre qu’une partie d’un seul axe sur quatre.',
    },
    {
      cle: 'La phrase qui coupe court 📘',
      valeur: '« Le risque n’est pas juridique, mais stratégique. » Être en règle ne suffit pas.',
    },
    {
      cle: 'Le livrable 📘',
      valeur:
        'Charte numérique en 5 étapes — identifier, impliquer, formaliser, diffuser, faire vivre —, un rôle nommé (DPO, CISO, Accessibility Officer…) et un KPI par axe.',
    },
    {
      cle: 'Où sont les points 🔎',
      valeur:
        'Dans la contradiction entre deux axes, pas dans quatre paragraphes bien remplis : un axe qui sert et un axe qui souffre, nommés tous les deux.',
    },
    {
      cle: 'Le branchement 📘',
      valeur:
        'Confiance → réputation ; réglementation → PESTEL légal ; risques → acceptabilité SAF ; talents → ressources humaines ; coûts → structure de coûts ; différenciation → option stratégique.',
    },
  ],

  notions: [
    'rne',
    'quatre-axes-rne',
    'charte-numerique',
    'charte-inr',
    'gouvernance-numerique-roles',
    'trois-u',
    'perimetre-numerique',
    'transformation-numerique',
    'protection-donnees',
    'minimisation-donnees',
    'cybersecurite',
    'gouvernance-donnees',
    'integrite-numerique',
    'ia',
    'ai-act',
    'souverainete-numerique',
    'trois-postes-numerique',
    'effet-rebond',
    'sobriete-numerique',
    'sobriete-injuste',
    'achats-it-responsables',
    'cout-cycle-de-vie',
    'deee',
    'accessibilite-numerique',
    'pour',
    'exclusion-indirecte',
    'inclusion-numerique',
    'double-levier-accessibilite',
    'kpi-accessibilite',
  ],
}
