import type { Notion } from '../types'

/** PARTIE IV — DURABILITÉ (encyclopédie §21 à §23) */
export const notionsDurabilite: Notion[] = [
  {
    id: 'durabilite',
    slug: 'durabilite',
    nom: 'Durabilité',
    aliases: ['sustainability', 'soutenabilité'],
    categorie: 'durabilite',
    type: 'notion',
    priorite: 1,
    origine: 'Extrait de l’Agenda 2030, p. 7.',
    definitionCours:
      "La durabilité correspond à « un fonctionnement pouvant satisfaire les besoins de tous les individus, aujourd'hui et demain, ici et ailleurs, dans le respect des limites planétaires ».",
    explicationSimple:
      "Chaque groupe de mots est un axe d'analyse : « les besoins » → la question du besoin (Max-Neef, Nussbaum, sobriété) ; « de tous les individus » → universalité, équité, inclusion, accessibilité ; « aujourd'hui et demain » → équité intergénérationnelle, tension court/long terme ; « ici et ailleurs » → équité géographique, chaînes d'approvisionnement mondiales ; « dans le respect des limites planétaires » → plafond écologique.",
    phraseExamen:
      "Cette seule phrase contient le plancher social (besoins de tous) et le plafond écologique (limites planétaires) — c'est-à-dire le Donut. Excellente ouverture d'oral.",
    motsCles: ['besoins', 'universalité', 'intergénérationnel', 'limites planétaires'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'durabilite-forte',
    slug: 'durabilite-forte',
    nom: 'Durabilité forte',
    aliases: ['capital naturel non substituable', 'strong sustainability'],
    categorie: 'durabilite',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "La durabilité forte considère le capital naturel comme non substituable par d'autres formes de capital (économique, social) et qui priorise la préservation des écosystèmes et des limites planétaires comme conditions de base à l'existence de toute vie humaine et activité économique.",
    explicationSimple: "On ne peut pas remplacer une forêt par de l'argent. C'est la position défendue par le cours.",
    phraseExamen:
      "Si le capital naturel est non substituable, alors la compensation carbone, le « verdissement » et les gains d'efficacité ne suffisent pas : il faut réduire en valeur absolue. C'est le fondement théorique de la sobriété par opposition à la simple efficacité.",
    motsCles: ['non substituable', 'écosystèmes', 'sobriété', 'absolu'],
    sources: ['encyclopedie', 'glossaire', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'durabilite-faible',
    slug: 'durabilite-faible',
    nom: 'Durabilité faible',
    aliases: ['weak sustainability', 'substituabilité des capitaux'],
    categorie: 'durabilite',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "⚠️ Non définie dans les supports. 📚 Complément théorique, à signaler comme tel : la durabilité faible pose que les différentes formes de capital sont substituables — on peut détruire du capital naturel si l'on crée en compensation suffisamment de capital économique ou technique.",
    explicationSimple:
      "L'idée qu'un gain économique peut compenser une perte environnementale. Le modèle des trois cercles d'Elkington en est une représentation.",
    limites: [
      "Cette notion n'est pas définie dans les supports du cours. Signale-le : le cours défend explicitement la durabilité forte.",
    ],
    motsCles: ['substitution', 'compensation', 'arbitrage'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'complement',
  },
  {
    id: 'capital-naturel',
    slug: 'capital-naturel',
    nom: 'Capital naturel, social, économique',
    nomCourt: 'Formes de capital',
    categorie: 'durabilite',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "Le cours nomme les trois formes de capital dans la définition de la durabilité forte mais ne les définit pas séparément.",
    explicationSimple:
      "🔎 Le capital naturel désigne les ressources et services fournis par les écosystèmes ; le capital social la qualité des liens, institutions et confiance ; le capital économique les actifs productifs et financiers.",
    motsCles: ['écosystèmes', 'liens sociaux', 'actifs'],
    sources: ['encyclopedie'],
    provenance: 'interpretation',
  },
  {
    id: 'developpement-durable',
    slug: 'developpement-durable',
    nom: 'Développement durable',
    aliases: ['DD', 'sustainable development'],
    categorie: 'durabilite',
    type: 'notion',
    priorite: 2,
    definitionCours:
      "Employé constamment dans les supports (Agenda 2030 « de développement durable », ODD, SDD 2030, les 3 cercles d'Elkington) mais pas défini séparément.",
    explicationSimple:
      "Développement qui répond aux besoins du présent sans compromettre ceux des générations futures.",
    limites: [
      "La bibliographie du cours contient des références critiques de cette notion : Bourg, « Transition écologique, plutôt que développement durable » (2012) ; Jackson, Prospérité sans croissance ; Meadows, The Limits to Growth. Le cours n'impose pas une position mais donne les matériaux du débat.",
    ],
    motsCles: ['générations futures', 'besoins', 'trois piliers'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'transition-ecologique',
    slug: 'transition-ecologique',
    nom: 'Transition écologique',
    categorie: 'durabilite',
    type: 'notion',
    priorite: 3,
    auteur: 'Dominique Bourg',
    annee: '2012',
    definitionCours:
      "Présent via la bibliographie : Bourg, D. (2012), « Transition écologique, plutôt que développement durable », Vraiment durable, 1(1), 77-96. Aussi présent dans le cours numérique (« Transition écologique / sociale : notion de besoin ? »).",
    explicationSimple:
      "Le titre même de l'article indique une critique de la notion de développement durable : on ne « développe » pas durablement, on transitionne.",
    motsCles: ['critique', 'Bourg', 'besoin'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'resilience',
    slug: 'resilience',
    nom: 'Résilience',
    categorie: 'durabilite',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "Présent comme compétence (« Résilience, flexibilité et agilité »), comme nom du Stockholm Resilience Center, et comme thème de l'exercice pratique (« Un système informatique d'entreprise résilient pour un futur incertain »). Bibliographie : Arthur Keller, Face au chaos : fonder des sociétés résilientes.",
    explicationSimple: "Capacité à encaisser un choc et à continuer de fonctionner.",
    exemples: [
      {
        texte:
          "Exercice du cours : imaginer le système informatique d'une PME face à une coupure de service des USA sur décision présidentielle et à une rupture des chaînes d'approvisionnement asiatiques (terres rares, processeurs).",
        source: 'cours-recordon',
      },
    ],
    motsCles: ['choc', 'redondance', 'souveraineté'],
    sources: ['encyclopedie', 'cours-recordon'],
    provenance: 'cours',
  },
  {
    id: 'empreinte-ecologique',
    slug: 'empreinte-ecologique',
    nom: 'Empreinte écologique',
    aliases: ['ecological footprint'],
    categorie: 'durabilite',
    type: 'chiffre',
    priorite: 2,
    definitionCours:
      "Surfaces terrestres et maritimes nécessaires pour produire les ressources consommées et pour absorber les déchets de la population.",
    explicationSimple: "Combien de planètes il faudrait si tout le monde vivait comme nous.",
    chiffres: [
      { libelle: 'Consommation mondiale', valeur: '1,7 planète', source: 'encyclopedie' },
      { libelle: 'Si tout le monde vivait comme un·e Suisse·sse moyen·ne', valeur: '3 planètes', source: 'encyclopedie' },
    ],
    motsCles: ['planètes', 'surfaces', 'absorption'],
    sources: ['encyclopedie', 'memos', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'biocapacite',
    slug: 'biocapacite',
    nom: 'Biocapacité',
    categorie: 'durabilite',
    type: 'notion',
    priorite: 3,
    definitionCours:
      "Capacité des écosystèmes à se régénérer et à absorber les déchets produits par l'homme, notamment la séquestration du CO₂.",
    explicationSimple: "Ce que la planète peut fournir et absorber en un an.",
    motsCles: ['régénération', 'séquestration'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'jour-depassement',
    slug: 'jour-depassement',
    nom: 'Jour du dépassement (Earth Overshoot Day)',
    nomCourt: 'Jour du dépassement',
    aliases: ['overshoot day', 'earth overshoot'],
    categorie: 'durabilite',
    type: 'chiffre',
    priorite: 2,
    definitionCours:
      "Une estimation obtenue en croisant l'empreinte écologique des activités humaines et la biocapacité de la Terre. En 2025 : 24 juillet, soulignant une surexploitation des ressources qui met en péril la capacité de la planète à se renouveler et compromet les conditions de vie future.",
    explicationSimple: "La date à laquelle on a consommé le budget annuel de la planète.",
    chiffres: [{ libelle: 'Jour du dépassement 2025', valeur: '24 juillet 2025', source: 'encyclopedie' }],
    motsCles: ['budget annuel', 'surexploitation'],
    sources: ['encyclopedie', 'memos', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'agenda-2030',
    slug: 'agenda-2030',
    nom: 'Agenda 2030',
    aliases: ['ONU 2015', 'programme 2030'],
    categorie: 'durabilite',
    type: 'cadre-legal',
    priorite: 1,
    annee: '2015',
    definitionCours:
      "Le 25 septembre 2015, les 193 États membres de l'ONU ont adopté l'Agenda 2030 de développement durable. Les 17 objectifs de développement durable (ODD) et leurs 169 cibles (sous-objectifs) forment la clé de voûte de l'Agenda 2030. Les ODD doivent être atteints par tous les États membres de l'ONU d'ici à 2030. Les ODD s'articulent autour des « 5P » : Populations, Planète, Prospérité, Paix et Partenariats.",
    explicationSimple: "Le cadre mondial de référence pour toute stratégie durable.",
    chiffres: [
      { libelle: 'Date d’adoption', valeur: '25 septembre 2015' },
      { libelle: 'États membres', valeur: '193' },
      { libelle: 'Objectifs', valeur: '17' },
      { libelle: 'Cibles', valeur: '169' },
      { libelle: 'Échéance', valeur: '2030' },
    ],
    phraseExamen: "25.09.2015 · 193 États · 17 objectifs · 169 cibles · 5P · échéance 2030.",
    motsCles: ['ONU', 'ODD', 'cibles', '5P'],
    sources: ['encyclopedie', 'memos', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'odd',
    slug: 'odd',
    nom: 'Objectifs de développement durable (ODD)',
    nomCourt: 'ODD',
    acronyme: 'ODD',
    aliases: ['SDG', 'sustainable development goals', '17 objectifs'],
    categorie: 'durabilite',
    type: 'cadre-legal',
    priorite: 1,
    definitionCours:
      "Les 17 objectifs de développement durable et leurs 169 cibles forment la clé de voûte de l'Agenda 2030.",
    explicationSimple:
      "Un référentiel partagé par 193 États, les investisseurs et les ONG : l'entreprise peut y situer son action.",
    commentUtiliser: [
      { titre: 'Langage commun', detail: 'Situer son action sur une grille reconnue mondialement.' },
      { titre: 'Grille de diagnostic', detail: 'Passer les 17 ODD en revue : impact positif / impact négatif.' },
      { titre: 'Source d’opportunités', detail: 'Les besoins non satisfaits correspondant aux ODD sont des marchés potentiels (océan bleu).' },
      { titre: 'Anticipation réglementaire', detail: 'Les ODD préfigurent les réglementations à venir.' },
      { titre: 'Alignement des parties prenantes', detail: 'Investisseurs ESG, clients, collaborateurs, pouvoirs publics.' },
      { titre: 'Structuration des KPI', detail: 'Les 169 cibles fournissent des indicateurs déjà formulés (MONET 2030 en Suisse).' },
    ],
    pieges: [
      {
        erreur: 'Afficher des logos ODD sans transformation réelle du modèle.',
        pourquoi: "C'est du SDG-washing, une forme de greenwashing.",
        test: "Les ODD affichés touchent-ils la proposition de valeur et les activités clés, ou seulement la communication ?",
      },
    ],
    motsCles: ['17', '169 cibles', 'référentiel', 'ESG'],
    sources: ['encyclopedie', 'glossaire', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'odd-12',
    slug: 'odd-12',
    nom: 'ODD 12 — consommation et production responsables',
    nomCourt: 'ODD 12',
    categorie: 'durabilite',
    type: 'cadre-legal',
    priorite: 1,
    definitionCours:
      "Établir des modes de consommation et de production durables. D'ici à 2030, réduire considérablement la production de déchets par la prévention, la réduction, le recyclage et la réutilisation. Appel pour les producteurs, les consommateurs, les communautés et les gouvernements à réfléchir sur leurs habitudes et usages en termes de consommation, de production de déchets, à l'impact environnemental et social de l'ensemble de la chaîne de valeur de nos produits.",
    explicationSimple:
      "Le seul ODD détaillé par le cours, et l'ODD central : il est relié aux achats durables, aux 3R et à l'ensemble de la chaîne de valeur.",
    phraseExamen:
      "Note l'ordre des verbes dans la cible : « prévention, réduction, recyclage et réutilisation » — la prévention et la réduction viennent avant le recyclage. C'est exactement la hiérarchie des 3R.",
    motsCles: ['déchets', 'prévention', 'chaîne de valeur', 'achats'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'cinq-p',
    slug: 'cinq-p',
    nom: 'Les 5P',
    acronyme: '5P',
    aliases: ['Populations Planète Prospérité Paix Partenariats', 'people planet prosperity peace partnership'],
    categorie: 'durabilite',
    type: 'acronyme',
    priorite: 1,
    definitionCours: "Les ODD s'articulent autour des « 5P » : Populations, Planète, Prospérité, Paix et Partenariats.",
    explicationSimple:
      "🔎 Populations : éliminer la pauvreté et la faim, garantir dignité et égalité. Planète : protéger les écosystèmes, agir sur le climat. Prospérité : une vie épanouissante en harmonie avec la nature, une économie inclusive. Paix : sociétés pacifiques, justes et inclusives. Partenariats : mobiliser les moyens par une coopération mondiale.",
    variantes: [
      {
        sujet: 'Le premier P',
        formulations: [
          { libelle: 'Populations (au pluriel)', ou: 'formulation du cours' },
          { libelle: 'People', ou: 'formulation onusienne standard' },
        ],
        explication: 'Retiens la formulation du cours : « Populations ».',
      },
    ],
    motsCles: ['cinq', 'dimensions', 'ODD'],
    sources: ['encyclopedie', 'memos', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'sdd-2030',
    slug: 'sdd-2030',
    nom: 'Stratégie pour le développement durable 2030 (Suisse)',
    nomCourt: 'SDD 2030',
    acronyme: 'SDD 2030',
    categorie: 'durabilite',
    type: 'cadre-legal',
    priorite: 3,
    definitionCours:
      "Dans sa Stratégie pour le développement durable 2030 (SDD 2030), le Conseil fédéral montre selon quelles priorités il entend mettre en œuvre l'Agenda 2030 pour le développement durable d'ici 2030.",
    explicationSimple: "La déclinaison suisse de l'Agenda 2030.",
    motsCles: ['Suisse', 'Conseil fédéral', 'priorités'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'monet-2030',
    slug: 'monet-2030',
    nom: 'Indicateurs MONET 2030',
    nomCourt: 'MONET 2030',
    categorie: 'pilotage',
    type: 'outil',
    priorite: 3,
    definitionCours:
      "Le nouveau concept de visualisation du système d'indicateurs MONET 2030 publié en ligne par l'Office fédéral de la statistique (OFS) permet de saisir d'un coup d'œil l'état d'avancement de la Suisse vers les Objectifs de développement durable (ODD) de l'Agenda 2030 ainsi que vers certains objectifs propres à la Suisse.",
    explicationSimple: "LE système d'indicateurs officiel suisse. À citer dès qu'une question porte sur la mesure de la durabilité en Suisse.",
    motsCles: ['OFS', 'indicateurs', 'Suisse', 'mesure'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'trois-cercles-elkington',
    slug: 'trois-cercles-elkington',
    nom: 'Les trois cercles du développement durable',
    nomCourt: 'Trois cercles',
    aliases: ['Elkington', 'triple bottom line', 'trois piliers', 'triple performance'],
    categorie: 'durabilite',
    type: 'modele',
    priorite: 2,
    auteur: 'John Elkington',
    annee: '1997',
    definitionCours: "Cadres conceptuels de la durabilité : les 3 cercles du DD (Elkington, 1997).",
    explicationSimple:
      "La durabilité se situe à l'intersection des trois dimensions — économique, social, environnemental. C'est le modèle le plus répandu. 📚 Elkington a forgé en 1997 la notion de Triple Bottom Line (« people, planet, profit »).",
    limites: [
      "🔎 Les trois cercles étant de taille égale et sur le même plan, ils suggèrent que l'on peut arbitrer entre eux, voire compenser une perte environnementale par un gain économique. C'est une représentation de durabilité faible.",
    ],
    motsCles: ['intersection', 'trois dimensions', 'égalité'],
    sources: ['encyclopedie', 'cours-recordon'],
    provenance: 'cours',
  },
  {
    id: 'mickey-mouse-model',
    slug: 'mickey-mouse-model',
    nom: 'Mickey Mouse Model',
    aliases: ['Peet 2009', 'critique des trois cercles'],
    categorie: 'durabilite',
    type: 'modele',
    priorite: 3,
    auteur: 'Peet',
    annee: '2009',
    definitionCours: "Mickey Mouse Model (Peet, 2009).",
    explicationSimple:
      "Une caricature critique : ce que devient le modèle des trois cercles en pratique — un cercle économique énorme avec deux petites « oreilles » social et environnemental accolées.",
    phraseExamen:
      "Le cours montre une progression : 3 cercles (Elkington 1997, les trois dimensions à égalité) → critique (Mickey Mouse, Peet 2009 : en réalité l'économique domine) → correction (Wedding Cake : hiérarchie imbriquée, la biosphère conditionne tout). Cette progression montre le passage de la durabilité faible à la durabilité forte.",
    motsCles: ['caricature', 'critique', 'domination économique'],
    sources: ['cours-recordon', 'encyclopedie'],
    provenance: 'cours',
  },
  {
    id: 'wedding-cake',
    slug: 'wedding-cake',
    nom: 'Wedding Cake des ODD',
    nomCourt: 'Wedding Cake',
    aliases: ['gâteau de mariage', 'Stockholm Resilience Centre', 'biosphère société économie'],
    categorie: 'durabilite',
    type: 'modele',
    priorite: 1,
    auteur: 'Stockholm Resilience Centre',
    definitionCours:
      "Les 17 ODD répartis en trois étages superposés reliés par un axe vertical, avec l'ODD 17 (Partenariats) au sommet : ÉCONOMIE (ODD 8, 9, 10, 12) encastrée dans SOCIÉTÉ (ODD 1, 2, 3, 4, 5, 7, 11, 16) encastrée dans BIOSPHÈRE (ODD 6, 13, 14, 15).",
    explicationSimple:
      "Les trois dimensions ne sont pas côte à côte mais imbriquées et hiérarchisées.",
    phraseExamen:
      "Les trois cercles suggèrent un équilibre et donc un arbitrage possible ; le Wedding Cake pose une dépendance et donc une condition non négociable. La biosphère n'est pas un pilier parmi trois : c'est le socle sans lequel les deux autres n'existent pas.",
    motsCles: ['imbriqué', 'hiérarchie', 'biosphère', 'socle'],
    sources: ['encyclopedie', 'memos', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'limites-planetaires',
    slug: 'limites-planetaires',
    nom: 'Limites planétaires',
    aliases: ['planetary boundaries', 'Rockström', '9 limites'],
    categorie: 'durabilite',
    type: 'modele',
    priorite: 1,
    auteur: 'Johan Rockström',
    annee: '2009',
    definitionCours:
      "Le concept des limites planétaires (« planetary boundaries » selon Johan Rockström 2009) identifie, pour neuf biens environnementaux vitaux, des seuils quantitatifs que la planète est en mesure de supporter. Lorsque ces limites sont dépassées en continu sur le long terme, la vie sur terre ne peut plus être assurée. Les neuf limites planétaires sont des processus naturels qui régulent la stabilité de la planète. En 2025, 7 / 9 limites planétaires sont considérées comme dépassées par la communauté scientifique.",
    explicationSimple:
      "Les neuf limites : changement climatique · érosion de la biodiversité · perturbation des cycles biogéochimiques de l'azote et du phosphore · changement d'usage des sols · utilisation de l'eau douce · introduction d'entités nouvelles dans la biosphère · acidification des océans · appauvrissement de l'ozone stratosphérique · augmentation des aérosols dans l'atmosphère.",
    commentUtiliser: [
      {
        titre: 'Les 7 dépassées',
        detail:
          'Changement climatique · intégrité de la biosphère · changement d’usage des sols · cycle de l’eau douce · cycles biogéochimiques (azote, phosphore) · acidification des océans · nouvelles pollutions chimiques.',
      },
      { titre: 'Les 2 non dépassées', detail: 'Appauvrissement de l’ozone stratosphérique ✅ · concentration atmosphérique en aérosols ✅' },
    ],
    exemples: [
      {
        texte:
          "L'ozone est un SUCCÈS : « certains dépassements peuvent se résorber dans la limite de sécurité en vert, comme cela a été le cas du trou dans la couche d'ozone, très important dans les années 1990, qui a fini par se refermer ».",
        source: 'encyclopedie',
      },
    ],
    phraseExamen:
      "Katherine Richardson : « Il est important de comprendre que les limites en elles-mêmes ne sont pas des seuils au-delà desquels il est impossible d'agir. Comme lorsque l'on prend sa tension, ou bien sa température » — une limite dépassée est un signal d'alerte médical, pas un arrêt de mort.",
    chiffres: [
      { libelle: 'Limites identifiées', valeur: '9 (Rockström, 2009)' },
      { libelle: 'Limites dépassées en 2025', valeur: '7 sur 9' },
    ],
    motsCles: ['seuils', 'Holocène', 'irréversible', 'tout est lié'],
    sources: ['encyclopedie', 'memos', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'donut',
    slug: 'donut',
    nom: 'Théorie du Donut',
    nomCourt: 'Donut',
    aliases: ['doughnut economics', 'Raworth', 'espace sûr et juste'],
    categorie: 'durabilite',
    type: 'modele',
    priorite: 1,
    auteur: 'Kate Raworth',
    annee: '2017',
    definitionCours:
      "Le Donut, proposé par l'économiste Kate Raworth (2017), est un cadre visuel pour évaluer la durabilité de l'économie combinant le concept de limites planétaires avec celui, complémentaire, de frontières sociales. Ce modèle propose de considérer la performance d'une économie par la mesure dans laquelle les besoins des gens sont satisfaits sans dépasser le plafond écologique de la Terre. Ces deux notions sont combinées et représentées sous la forme d'un Donut dont la « chair » correspond à l'espace sûr et juste dans lequel les activités économiques de l'humanité devraient s'inscrire.",
    explicationSimple:
      "Deux façons d'échouer : le DÉPASSEMENT (overshoot), on franchit le plafond écologique ; l'ABAISSEMENT (shortfall), on tombe sous le plancher social. Une stratégie durable doit éviter les deux.",
    phraseExamen:
      "Réduire ses impacts en excluant des publics n'est pas durable : c'est échanger un dépassement contre un abaissement. « Un service allégé au point d'exclure certains publics ne respecte pas le donut, même s'il réduit ses impacts techniques. »",
    exemples: [
      {
        texte:
          "SilverDigital : la digitalisation réduit l'empreinte (on redescend vers le plafond) mais exclut les seniors (on tombe sous le plancher). Ce n'est pas de la durabilité, c'est un déplacement du problème.",
        cas: 'silverdigital',
        source: 'doc-donut',
      },
    ],
    variantes: [
      {
        sujet: 'Date',
        formulations: [
          { libelle: 'Raworth (2017)', ou: 'cours de durabilité et bibliographie officielle' },
          { libelle: 'Raworth (2018)', ou: 'cours numérique de J. Recordon' },
        ],
        explication: "L'ouvrage Doughnut Economics est de 2017 ; 2018 correspond probablement à une édition ultérieure.",
        consigneExamen: 'Retiens 2017, conforme à la bibliographie officielle.',
      },
      {
        sujet: 'Nom de la limite basse',
        formulations: [
          { libelle: 'Plancher social', ou: 'cours durabilité' },
          { libelle: 'Fondement social', ou: 'cours numérique' },
        ],
        explication: 'Même notion.',
      },
    ],
    motsCles: ['plafond', 'plancher', 'espace sûr et juste', 'dépassement', 'abaissement'],
    sources: ['encyclopedie', 'doc-donut', 'glossaire', 'memos'],
    provenance: 'cours',
  },
  {
    id: 'plancher-social',
    slug: 'plancher-social',
    nom: 'Plancher social (fondement social)',
    nomCourt: 'Plancher social',
    aliases: ['fondement social', 'social foundation', '12 objectifs'],
    categorie: 'durabilite',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Le modèle du plancher social propose 12 objectifs pour une « vie digne ». Ces objectifs doivent être atteints dans le respect de la justice sociale et de la démocratie. Ce plancher social s'appuie sur la Déclaration universelle des droits de l'homme. Les 12 : alimentation · santé · éducation · revenu et travail · logement · eau · assainissement · énergie · paix et justice · voix politique · équité sociale · égalité des genres.",
    explicationSimple:
      "Besoins humains fondamentaux pour toute l'humanité, permettant à chacun·e d'avoir une vie digne. Tomber dessous = manque, le « trou » du donut.",
    variantes: [
      {
        sujet: 'Deux libellés divergents entre la liste et le schéma',
        formulations: [
          {
            libelle:
              'Alimentation · Santé · Éducation · Revenu et travail · Logement · Eau · Assainissement · Énergie · Paix et justice · Voix politique · Équité sociale · Égalité des genres',
            ou: 'liste écrite, slide 24',
          },
          {
            libelle:
              'Eau · Alimentation · Santé · Éducation · Revenu et travail · Paix et justice · Représentation politique · Équité sociale · Égalité des sexes · Logement · Réseaux · Énergie',
            ou: 'schéma du Donut, slide 25',
          },
        ],
        explication:
          "Trois écarts : Assainissement (liste) ↔ Réseaux (schéma) ; Voix politique ↔ Représentation politique ; Égalité des genres ↔ Égalité des sexes. Les deux derniers sont des variantes de traduction. Le premier est un écart de contenu : le modèle original de Raworth comporte une dimension Networks (accès à l'information et aux réseaux sociaux de soutien).",
        consigneExamen:
          "Ne tranche pas. Dis : « le cours donne douze dimensions ; deux libellés varient entre la liste et le schéma — assainissement d'un côté, réseaux de l'autre », et cite les dix communes en priorité. Si tu mentionnes « Réseaux », tu ouvres directement sur l'inclusion numérique comme dimension du plancher social.",
      },
    ],
    chiffres: [{ libelle: 'Objectifs du plancher social', valeur: '12' }],
    motsCles: ['vie digne', 'besoins fondamentaux', 'droits de l’homme'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'plafond-ecologique',
    slug: 'plafond-ecologique',
    nom: 'Plafond écologique',
    aliases: ['ecological ceiling', 'limite haute'],
    categorie: 'durabilite',
    type: 'notion',
    priorite: 1,
    definitionCours:
      "Limite haute du Donut : les limites planétaires, au-delà desquelles les conditions de vie ne sont plus assurées et des basculements irréversibles peuvent se produire.",
    explicationSimple: "Le bord extérieur du donut : les 9 limites planétaires à ne pas franchir.",
    motsCles: ['limites planétaires', 'dépassement', 'irréversible'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'iso-durabilite',
    slug: 'iso-durabilite',
    nom: 'Normes ISO en durabilité',
    nomCourt: 'Normes ISO',
    aliases: ['ISO 14000', 'ISO 14001', 'ISO 26000', 'ISO 50001', 'ISO 45001'],
    categorie: 'durabilite',
    type: 'cadre-legal',
    priorite: 3,
    definitionCours:
      "Plusieurs normes, notamment ISO, traitent de questions de durabilité et peuvent servir de base aux stratégies : le management environnemental, notamment à travers la famille de normes ISO 14000 qui donnent un modèle à suivre pour mettre en place et utiliser un système de management environnemental ; les approches de Responsabilité Sociétale et Environnementale, notamment à travers la norme ISO 26000 donnant les lignes directrices relatives à la responsabilité sociétale. ISO 14'001 : définit les critères d'un système de management environnemental (certification). ISO 50'001 : management de l'énergie, publiée le 15 juin 2011, fruit d'une collaboration entre 61 pays.",
    explicationSimple:
      "⚠️ ISO 26000 = lignes directrices, PAS une certification. C'est la nuance que le cours rend visible en la distinguant d'ISO 14001, qui est une certification.",
    limites: [
      "📚 Note de rigueur : ISO 45001 porte en réalité sur la santé et la sécurité au travail. Le libellé du cours (« questions liées au développement durable et facilite les démarches RSE ») est une description large. Restitue la formulation du cours, tu peux mentionner la portée réelle — qui est bien une dimension sociale de la RSE.",
    ],
    motsCles: ['certification', 'lignes directrices', 'management environnemental'],
    sources: ['encyclopedie', 'glossaire'],
    provenance: 'cours',
  },
  {
    id: 'certifications-durabilite',
    slug: 'certifications-durabilite',
    nom: 'Certifications en développement durable',
    nomCourt: 'Certifications DD',
    aliases: ['EcoEntreprise', 'B Corporation', 'B Corp'],
    categorie: 'durabilite',
    type: 'cadre-legal',
    priorite: 3,
    definitionCours: "Certifications citées par le cours : EcoEntreprise, B Corporation, ISO 14'001, ISO 45'001, ISO 50'001.",
    explicationSimple: "Des repères de crédibilité d'une démarche durable — et des armes contre le greenwashing.",
    motsCles: ['B Corp', 'crédibilité', 'preuve'],
    sources: ['encyclopedie'],
    provenance: 'cours',
  },
]
