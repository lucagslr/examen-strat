import type { Modele } from './types'

export const modele: Modele = {
  id: 'donut',
  numero: 14,
  slug: 'donut',
  nom: 'Économie du Donut',
  sousTitre: 'Plancher social + plafond écologique',
  famille: 'durabilite',
  etape: 'transverse',

  question:
    'Cette stratégie tient-elle dans l’espace où l’on peut vivre — au-dessus du plancher social, au-dessous du plafond écologique ?',

  enUnePhrase:
    'Le Donut superpose deux limites — un plancher social de douze besoins à couvrir pour que la vie soit digne, un plafond écologique de neuf limites planétaires à ne pas franchir — et appelle « espace sûr et juste » l’anneau compris entre les deux, seul endroit où une activité économique peut durer.',

  produit:
    'Un verdict à deux entrées sur une option : ce qu’elle fait au plafond (les impacts physiques) et ce qu’elle fait au plancher (l’accès, l’emploi, l’exclusion) — et surtout la mention explicite de l’échange caché quand elle améliore un bord en dégradant l’autre.',

  quandUtiliser: [
    'Quand on doit juger une option, pas la décrire : le Donut est une grille de verdict, il tranche « admissible » ou « pas admissible ».',
    'Quand une option se présente comme écologique : il force à vérifier le second bord, celui des gens.',
    'Quand une option se présente comme sociale : il force à vérifier le premier bord, celui de la planète.',
    'Quand on veut qualifier la durabilité dans le SWOT ou l’acceptabilité dans le SAF : le Donut fournit les deux critères, sans mot creux.',
    'En ouverture d’oral sur la durabilité : la définition du cours — satisfaire les besoins de tous, aujourd’hui et demain, ici et ailleurs, dans les limites planétaires — contient déjà les deux bords du Donut.',
  ],

  quandNePasUtiliser: [
    'Pour construire une solution : le Donut est un cadre normatif, il dit où il faut se trouver, jamais comment y aller. L’outil d’action est le BMC durable.',
    'Pour mesurer une performance financière : il ne contient ni chiffre d’affaires, ni marge, ni retour sur investissement.',
    'Pour arbitrer entre deux options également admissibles : à ce moment-là, on repasse au SAF.',
    'Comme argument moral décoratif en fin de réponse — un Donut cité sans les deux bords remplis ne rapporte rien.',
  ],

  schema: {
    h: 1070,
    description:
      'Cinq zones concentriques, de l’extérieur vers le centre : le dépassement écologique, le plafond écologique, l’espace sûr et juste, le plancher social et l’abaissement ; deux flèches descendent du dessin vers l’orientation qu’il impose et vers le test à appliquer à chaque option.',
    noeuds: [
      {
        id: 'c-depassement',
        titre: 'DÉPASSEMENT ÉCOLOGIQUE',
        x: 100,
        y: 40,
        l: 800,
        h: 800,
        forme: 'cercle',
        ton: 'danger',
        point: 'depassement',
      },
      {
        id: 'c-plafond',
        titre: 'PLAFOND ÉCOLOGIQUE',
        x: 170,
        y: 110,
        l: 660,
        h: 660,
        forme: 'cercle',
        ton: 'alerte',
        point: 'plafond',
      },
      {
        id: 'c-espace',
        titre: 'ESPACE SÛR ET JUSTE',
        x: 240,
        y: 180,
        l: 520,
        h: 520,
        forme: 'cercle',
        ton: 'positif',
        point: 'espace',
      },
      {
        id: 'c-plancher',
        titre: 'PLANCHER SOCIAL',
        x: 310,
        y: 250,
        l: 380,
        h: 380,
        forme: 'cercle',
        ton: 'alerte',
        point: 'plancher',
      },
      {
        id: 'c-manques',
        titre: 'ABAISSEMENT',
        lignes: ['manques sociaux'],
        x: 380,
        y: 320,
        l: 240,
        h: 240,
        forme: 'cercle',
        ton: 'danger',
        point: 'manques',
      },
      {
        id: 'n-regeneratrice',
        titre: 'ÉCONOMIE RÉGÉNÉRATRICE',
        lignes: ['et distributive : rendre plus', 'qu’on ne prend, partager mieux'],
        x: 40,
        y: 890,
        l: 420,
        h: 140,
        ton: 'positif',
        point: 'regeneratrice',
      },
      {
        id: 'n-test',
        titre: 'LE DOUBLE TEST',
        lignes: ['une option doit tenir', 'les deux bords à la fois'],
        x: 540,
        y: 890,
        l: 420,
        h: 140,
        ton: 'accent',
        point: 'double-test',
      },
    ],
    liens: [
      {
        de: 'c-depassement',
        vers: 'n-regeneratrice',
        depuis: 'bas',
        arrive: 'haut',
        libelle: 'l’orientation',
      },
      {
        de: 'c-depassement',
        vers: 'n-test',
        depuis: 'bas',
        arrive: 'haut',
        libelle: 'la règle de lecture',
        ton: 'accent',
      },
    ],
    note: 'Deux façons d’échouer, jamais une seule : franchir le plafond, ou tomber sous le plancher. Améliorer un bord en dégradant l’autre n’est pas de la durabilité — c’est un déplacement du problème.',
  },

  points: [
    {
      id: 'depassement',
      libelle: 'Dépassement écologique (overshoot)',
      cestQuoi:
        'L’anneau extérieur, celui où l’on se trouve dès qu’une limite planétaire est franchie : l’activité prélève ou rejette plus que ce que les grands équilibres de la Terre encaissent. Le mot du modèle est « dépassement » — en anglais overshoot, littéralement « tirer au-delà de la cible ».',
      question:
        'Quelles limites planétaires cette activité pousse-t-elle au-delà du seuil — et de combien, en valeur absolue et non par produit ?',
      quoiMettre: [
        '📘 L’état mondial, pour situer : 7 des 9 limites planétaires sont considérées comme dépassées en 2025.',
        '📘 Les repères chiffrés du cours : l’humanité consomme 1,7 planète ; il en faudrait 3 si tout le monde vivait comme un·e Suisse·sse moyen·ne ; le jour du dépassement 2025 est tombé le 24 juillet.',
        'Les émissions de l’entreprise en tonnes de CO₂ par an — le total, pas le ratio par unité vendue.',
        'Les matières prélevées : métaux, terres rares, eau — en nommant l’endroit où le prélèvement a lieu, pas seulement l’endroit où l’on fabrique.',
        'Le sort des déchets une fois sortis de l’entreprise : ce qui n’est pas repris reste un dépassement, même s’il n’apparaît nulle part dans les comptes.',
      ],
      exemple:
        'Atelier Léman achète ses batteries à deux fournisseurs asiatiques. Trois dépassements se lisent d’un coup : l’extraction du lithium (usage des sols, eau douce), le transport longue distance (climat), et des batteries en fin de vie dont personne ne suit la trajectoire (entités nouvelles). L’atelier de Carouge peut être irréprochable : le dépassement, lui, a lieu ailleurs.',
      piege:
        'Raisonner « par vélo ». Un impact unitaire qui baisse de 15 % pendant que les volumes montent de 30 % laisse le dépassement intact — il l’aggrave même.',
      reflexe:
        'Repose systématiquement la question en absolu : combien de tonnes au total cette année, contre l’an dernier ? Si la réponse manque, l’argument écologique ne tient pas.',
      notions: ['limites-planetaires', 'empreinte-ecologique', 'jour-depassement'],
    },
    {
      id: 'plafond',
      libelle: 'Plafond écologique',
      cestQuoi:
        '📘 La limite haute du Donut : les neuf limites planétaires, « au-delà desquelles les conditions de vie ne sont plus assurées et des basculements irréversibles peuvent se produire ». C’est la contribution du modèle de Rockström (2009) au Donut de Raworth.',
      question:
        'Où est le mur écologique de CETTE activité — quelle limite précise touche-t-elle en premier, et par quel mécanisme ?',
      quoiMettre: [
        '📘 Les neuf limites, à savoir citer : changement climatique · intégrité de la biosphère · changement d’usage des sols · eau douce · cycles de l’azote et du phosphore · acidification des océans · entités nouvelles dans la biosphère · appauvrissement de l’ozone stratosphérique · aérosols atmosphériques.',
        '📘 Les deux non dépassées, utiles parce qu’elles prouvent qu’un dépassement peut se résorber : l’ozone stratosphérique et les aérosols.',
        'La ou les deux limites réellement mobilisées par le cas — jamais les neuf, jamais une seule.',
        '📘 Le statut d’une limite, tel que le cours le formule via Katherine Richardson : un seuil franchi est un signal d’alerte, « comme lorsque l’on prend sa tension, ou bien sa température », pas un arrêt de mort.',
        'Le fait que le plafond est une contrainte physique et non un objectif négociable : c’est ce qui distingue le Donut d’un tableau d’objectifs.',
      ],
      exemple:
        'Pour Atelier Léman, le plafond ne se réduit pas au carbone. La limite la plus directement touchée est celle des entités nouvelles — les batteries lithium-ion mises en circulation et jamais reprises — et, en second, l’usage des sols là où le lithium est extrait. Dire « nos vélos évitent des trajets en voiture, donc nous sommes sous le plafond » revient à ne regarder qu’une limite sur neuf.',
      piege:
        'Réduire le plafond écologique à une seule ligne, le carbone. Une entreprise peut décarboner et continuer d’épuiser l’eau ou de disperser des métaux.',
      reflexe:
        'Nomme au moins deux limites différentes, dont une non climatique. C’est le signe, à l’oral, qu’on a compris que le plafond est pluriel.',
      notions: ['plafond-ecologique', 'limites-planetaires', 'durabilite-forte'],
    },
    {
      id: 'espace',
      libelle: 'Espace sûr et juste',
      cestQuoi:
        '📘 « La chair du donut » : l’anneau compris entre les deux limites, décrit par le cours comme « l’espace sûr et juste dans lequel les activités économiques de l’humanité devraient s’inscrire ». Sûr, parce que les conditions physiques y restent stables. Juste, parce que les besoins de chacun y sont couverts.',
      question:
        'Cette option ramène-t-elle l’activité dans l’anneau — ou la déplace-t-elle simplement d’un bord vers l’autre ?',
      quoiMettre: [
        'Les deux verdicts côte à côte : où en est-on sur le bord haut, où en est-on sur le bord bas. Un seul des deux ne dit rien.',
        'Le sens du mot « performance » selon le cours : une économie se juge « par la mesure dans laquelle les besoins des gens sont satisfaits sans dépasser le plafond écologique de la Terre ».',
        'Le mouvement, pas la position : est-ce que l’option rapproche de l’anneau, ou est-ce qu’elle éloigne ?',
        'Ce que l’option coûte au bord opposé — c’est presque toujours là que se cache la faiblesse d’une proposition « verte ».',
        '🔎 Le fait que l’anneau est un espace, pas un point : il n’y a pas un optimum unique, il y a une zone d’admissibilité dans laquelle plusieurs stratégies très différentes tiennent.',
      ],
      exemple:
        'L’abonnement mobilité d’Atelier Léman entre dans l’anneau à une condition précise : que le parc partagé fasse baisser le nombre de batteries mises en circulation (bord haut) sans réserver le service aux seules entreprises capables de payer (bord bas). Le même abonnement, vendu 95 CHF par mois et par vélo avec renouvellement obligatoire du vélo chaque année, ressort de l’anneau par les deux côtés à la fois.',
      piege:
        'Traiter l’anneau comme un but à atteindre une fois pour toutes, puis passer à autre chose. Le Donut est un état à tenir, pas une case à cocher.',
      reflexe:
        'Formule le verdict en deux temps : « sur le plafond… ; sur le plancher… ». Si la seconde moitié de la phrase manque, la réponse est incomplète.',
      notions: ['donut', 'durabilite', 'durabilite-forte'],
    },
    {
      id: 'plancher',
      libelle: 'Plancher social',
      cestQuoi:
        '📘 La limite basse du Donut : douze objectifs pour une « vie digne », qui doivent être atteints « dans le respect de la justice sociale et de la démocratie ». Le cours précise que ce plancher s’appuie sur la Déclaration universelle des droits de l’homme.',
      question:
        'Qui, dans cette décision, risque de passer sous l’un des douze seuils — chez nous, chez nos fournisseurs, ou parmi nos clients ?',
      quoiMettre: [
        '📘 Les douze objectifs (liste écrite, slide 24) : alimentation · santé · éducation · revenu et travail · logement · eau · assainissement · énergie · paix et justice · voix politique · équité sociale · égalité des genres.',
        '⚠️ Le schéma du Donut (slide 25) ne dit pas exactement la même chose : il porte « réseaux » là où la liste porte « assainissement ». Cette divergence se cite, elle ne se corrige pas — voir la variante plus bas.',
        'Les deux ou trois objectifs réellement en jeu dans le cas, avec le nom de ceux qu’ils concernent.',
        'Les personnes hors de l’entreprise : ouvriers de la mine, salariés du sous-traitant, riverains, clients qui n’ont plus accès au service.',
        '🔎 Le fait qu’un plancher se franchit par le bas sans intention de nuire : une hausse de prix, une dématérialisation, une fermeture d’atelier suffisent.',
      ],
      exemple:
        'Basculer vers l’abonnement touche trois objectifs du plancher chez Atelier Léman. Revenu et travail : deux mécaniciens de Plainpalais dont le poste dépend du volume de réparations tierces. Équité sociale : le particulier qui achetait un vélo à 2 600 CHF n’a plus d’offre s’il ne peut pas s’engager sur douze mois. Et, plus loin dans la chaîne, revenu et travail encore, chez les fournisseurs de batteries dont l’atelier ne sait rien des conditions.',
      piege:
        'Réduire le plancher social aux salariés de l’entreprise — c’est-à-dire aux seules personnes qu’on voit depuis le bureau de la direction.',
      reflexe:
        'Descends la chaîne de valeur maillon par maillon en te demandant à chaque fois : qui travaille ici, et qui est laissé dehors ?',
      notions: ['plancher-social', 'odd', 'agenda-2030', 'inclusion-numerique'],
    },
    {
      id: 'manques',
      libelle: 'Abaissement — le trou du donut',
      cestQuoi:
        'La zone sous le plancher, où des besoins fondamentaux ne sont pas couverts. 📘 Le visuel du cours porte la mention « abaissement » (en anglais shortfall) ; le schéma la nomme aussi « manques sociaux ». C’est la seconde façon d’échouer, symétrique du dépassement.',
      question:
        'Quel besoin fondamental cette option laisse-t-elle non couvert — et pour qui, nommément ?',
      quoiMettre: [
        'Le public exclu, désigné précisément : pas « certaines personnes », mais « les clients sans carte bancaire », « les seniors non connectés », « les ménages sous tel revenu ».',
        'Le mécanisme d’exclusion : un prix, une condition d’engagement, un canal unique, une compétence exigée.',
        '📘 L’état mondial du bord bas, symétrique du bord haut : les objectifs sociaux de l’ONU sont loin d’être atteints — le Donut est transgressé des deux côtés.',
        '🔎 Le fait qu’un abaissement ne se voit pas dans les comptes : la personne exclue n’achète pas, donc elle disparaît des chiffres.',
        'La phrase du cours qui sert de test : « Un service allégé au point d’exclure certains publics ne respecte pas le donut, même s’il réduit ses impacts techniques. »',
      ],
      exemple:
        'Si Atelier Léman ferme son guichet de Plainpalais et bascule la prise de rendez-vous sur une application, l’empreinte baisse — moins de surface chauffée, moins de papier. Mais les clients âgés qui venaient déposer leur vélo sans réserver perdent l’accès au service. L’atelier est redescendu vers le plafond en tombant sous le plancher : le bilan Donut est négatif, pas positif.',
      piege:
        'Compter une baisse d’impact comme un progrès de durabilité alors qu’elle a été obtenue en excluant des gens. C’est l’erreur la plus fréquente et la plus coûteuse.',
      reflexe:
        'Après chaque gain écologique annoncé, pose une seule question : qui a perdu quelque chose ? Si personne, dis-le. Si quelqu’un, nomme-le.',
      notions: ['plancher-social', 'accessibilite-numerique', 'inclusion-numerique', 'exclusion-indirecte'],
    },
    {
      id: 'regeneratrice',
      libelle: 'Économie régénératrice et distributive',
      cestQuoi:
        '📘 La mention portée par le visuel du cours à l’intérieur du Donut : le nom de l’économie compatible avec l’anneau. Régénératrice signifie qu’elle restitue au moins autant qu’elle prélève, au lieu de se contenter de prélever moins. Distributive signifie qu’elle répartit la valeur produite au lieu de la concentrer.',
      question:
        'Cette option restitue-t-elle quelque chose de réel — et à qui va la valeur qu’elle crée ?',
      quoiMettre: [
        'Ce que l’activité rend : matières remises en circulation, équipements prolongés, terrains ou compétences reconstitués.',
        'Ce qu’elle répartit : emplois, formation, marges laissées aux fournisseurs, accès élargi au service.',
        '🔎 La différence avec « moins polluant » : réduire une dégradation, c’est ralentir la chute ; régénérer, c’est reconstituer. Le cours défend la durabilité forte, où le capital naturel n’est pas substituable — donc où « moins mauvais » ne suffit pas.',
        'Le levier concret : les 3R dans l’ordre — réduire, puis réutiliser, puis seulement recycler.',
        'Le modèle de revenus, parce que c’est lui qui décide : qui reste propriétaire de l’objet détermine qui a intérêt à ce qu’il dure.',
      ],
      exemple:
        'Le pôle réparation d’Atelier Léman est déjà régénératif : il remet en circulation des vélos de toutes marques que le modèle de vente aurait remplacés. Le rendre distributif suppose une décision de plus — reverser une part de la marge d’abonnement à la formation d’apprentis mécaniciens, et publier la durée de vie moyenne réelle des vélos du parc plutôt que la garder pour soi.',
      piege:
        'Confondre « régénératrice » avec « écologique ». Un vélo fabriqué en aluminium recyclé, vendu selon la même logique de volume, ne régénère rien du tout.',
      reflexe:
        'Deux verbes, dans l’ordre : que rend-on, et à qui donne-t-on ? Si la réponse au premier est « rien », le mot régénératif ne s’emploie pas.',
      notions: ['economie-circulaire', 'economie-fonctionnalite', 'trois-r', 'durabilite-forte'],
    },
    {
      id: 'double-test',
      libelle: 'Le double test',
      cestQuoi:
        '🔎 La façon d’utiliser le Donut sur un cas d’examen : chaque option se juge deux fois, une fois contre le plafond, une fois contre le plancher. Un seul bord franchi suffit à la disqualifier — et deux verdicts positifs sont nécessaires, jamais un seul.',
      question:
        'Puis-je dire, pour cette option, ce qu’elle fait au plafond ET ce qu’elle fait au plancher, en une phrase chacun ?',
      quoiMettre: [
        'Le verdict haut : quelle limite planétaire l’option soulage, laquelle elle aggrave.',
        'Le verdict bas : quel objectif social l’option renforce, lequel elle met en danger.',
        'L’échange caché, s’il existe : « elle gagne ici en perdant là ». C’est la phrase qui rapporte des points.',
        'Le correctif qui ramène l’option dans l’anneau — un tarif d’entrée, un guichet maintenu, une reprise de batteries — parce qu’un verdict négatif sans correctif n’est qu’un refus.',
        '📘 Pour un service numérique, le cours donne quatre critères directement applicables : répondre à un besoin social réel ; rester accessible ; limiter ses impacts sur tout le cycle de vie ; ne pas entretenir artificiellement une hausse des usages sans utilité collective claire.',
      ],
      exemple:
        'Test de l’abonnement Atelier Léman. Bord haut : moins de vélos neufs par utilisateur, mais des batteries dont l’atelier devient responsable — favorable, à condition d’organiser la reprise. Bord bas : accès facilité pour les salariés d’entreprises, accès fermé aux particuliers modestes — défavorable. Échange caché : le gain écologique est financé par une perte d’accès. Correctif : garder l’offre de réparation ouverte à tous et un tarif réduit pour les indépendants.',
      piege:
        'Répondre sur un seul bord, presque toujours le bord écologique, et conclure « c’est durable ». Le correcteur attend la seconde moitié.',
      reflexe:
        'Compte tes phrases : deux verdicts, un échange, un correctif. Quatre phrases, et le Donut est exploité.',
      notions: ['donut', 'quatre-criteres-donut', 'saf'],
    },
  ],

  methode: [
    {
      titre: '1. Tracer les deux bords avant de juger quoi que ce soit',
      detail:
        'Sur le brouillon, deux colonnes : PLAFOND à gauche, PLANCHER à droite. Rien d’autre pour l’instant. Ce geste de dix secondes est ce qui empêche d’oublier le bord social, qui est le bord oublié dans neuf réponses sur dix.',
      aEviter:
        'Commencer par écrire « il faut être durable » : la phrase ne remplit aucune des deux colonnes et ne rapporte rien.',
    },
    {
      titre: '2. Remplir le bord écologique en valeur absolue',
      detail:
        'Nomme deux limites planétaires touchées par le cas, dont au moins une non climatique, et rattache chacune à un fait de l’énoncé — une matière, un transport, un déchet. Écris les quantités en total annuel, jamais par unité vendue.',
      aEviter:
        'Se contenter du CO₂, ou raisonner en impact par produit : c’est exactement ce qui permet à une entreprise d’aggraver son dépassement en affichant des progrès.',
    },
    {
      titre: '3. Remplir le bord social en descendant la chaîne',
      detail:
        'Parcours la chaîne de valeur de l’amont vers l’aval — fournisseurs, production, distribution, clients — et note à chaque maillon quel objectif du plancher est en jeu et pour qui. Retiens-en deux ou trois, ceux qui sont réellement matériels pour le cas.',
      aEviter:
        'Réciter les douze objectifs. Le correcteur attend une sélection argumentée, pas une liste apprise par cœur.',
    },
    {
      titre: '4. Situer l’activité : dedans, au-dessus, en dessous',
      detail:
        'Pour chaque bord, un verdict d’un mot suivi de sa preuve : « au-dessus du plafond, parce que… », « sous le plancher pour tel public, parce que… ». Une option peut très bien être dedans sur un bord et dehors sur l’autre : c’est le cas le plus intéressant.',
      aEviter:
        'Un verdict global du type « pas très durable ». Le Donut a deux bords précisément pour interdire ce genre de moyenne.',
    },
    {
      titre: '5. Chercher l’échange caché',
      detail:
        'Demande-toi si le gain obtenu sur un bord a été payé sur l’autre. Dématérialiser réduit les impacts et exclut ; produire local rapproche du plancher et peut coûter plus cher au client. Quand l’échange existe, nomme-le : c’est le point le mieux noté de tout le volet durabilité.',
      aEviter:
        'Présenter un gain unilatéral comme une preuve de durabilité. Un dépassement échangé contre un abaissement n’est pas un progrès, c’est un déplacement.',
    },
    {
      titre: '6. Proposer le correctif, puis passer à l’outil d’action',
      detail:
        'Termine par la condition qui ramènerait l’option dans l’anneau, puis dis explicitement que le Donut s’arrête là : il juge, il ne construit pas. La suite se joue dans le BMC durable, qui traduit le verdict en blocs concrets, et dans le SAF, où le bord social devient un critère d’acceptabilité.',
      aEviter:
        'Rester sur le constat. Un verdict négatif sans condition de retour dans l’anneau se lit comme un refus de choisir.',
    },
  ],

  liens: [
    {
      vers: 'wedding-cake',
      nature: 'partage',
      explication:
        'Le Wedding Cake et le Donut disent la même chose dans deux langages : le premier empile biosphère, société, économie pour montrer la dépendance ; le second met les mêmes trois niveaux en cercles pour montrer l’espace admissible entre eux.',
    },
    {
      vers: 'agenda-2030',
      nature: 'precise',
      explication:
        'Les ODD disent où l’on veut aller, les limites planétaires jusqu’où l’on peut aller, et le Donut installe les deux sur le même dessin : le plancher social est la traduction spatiale de l’ambition, le plafond celle de la contrainte.',
    },
    {
      vers: 'bmc-durable',
      nature: 'alimente',
      explication:
        'Le Donut donne le verdict, le BMC durable donne les leviers : chaque bord franchi se rattrape dans un bloc précis — les ressources pour les batteries, les segments pour les publics exclus, les revenus pour le modèle de propriété.',
    },
    {
      vers: 'saf',
      nature: 'alimente',
      explication:
        'Le bord bas du Donut est un test d’acceptabilité tout prêt : une option qui fait passer une partie prenante sous le plancher social sera refusée par elle, quelles que soient ses qualités financières.',
    },
    {
      vers: 'wcag-pour',
      nature: 'prolonge',
      explication:
        'Le schéma du Donut porte « réseaux » parmi les douze objectifs du plancher social : l’accès à l’information devient alors un besoin fondamental, et l’accessibilité numérique cesse d’être une bonne pratique pour devenir une condition de durabilité.',
    },
  ],

  pieges: [
    {
      titre: 'Traiter le Donut comme un business model',
      explication:
        'Le Donut ne contient ni client, ni revenu, ni ressource : il ne dit à aucun moment comment on gagne de l’argent. C’est un cadre normatif, au même titre que les ODD et les limites planétaires — il décrit l’espace, pas le chemin.',
      reflexe:
        'Dis-le toi-même à l’oral : « le Donut me donne le cadre de jugement ; l’outil qui le traduit en décisions, c’est le BMC durable ». La distinction vaut des points.',
    },
    {
      titre: 'Réduire le Donut à l’écologie',
      explication:
        'Le modèle a deux bords, et le bord social est celui qu’on oublie. Une réponse qui ne parle que d’émissions et de matières n’a utilisé que la moitié de l’outil — et rate précisément ce qui distingue le Donut des limites planétaires seules.',
      reflexe:
        'Impose-toi la structure « plafond… plancher… ». Si la deuxième moitié de la phrase ne vient pas, c’est qu’il manque le travail.',
    },
    {
      titre: 'Échanger un dépassement contre un abaissement',
      explication:
        'Réduire ses impacts en excluant des publics n’est pas de la durabilité : c’est passer d’un bord à l’autre. Le cours le formule ainsi : un service allégé au point d’exclure certains publics ne respecte pas le donut, même s’il réduit ses impacts techniques.',
      reflexe:
        'Après chaque gain annoncé sur un bord, vérifie l’autre bord avant de conclure. La question tient en trois mots : qui a perdu ?',
    },
    {
      titre: 'Confondre le plafond écologique et les ODD',
      explication:
        'Les dix-sept ODD sont une ambition politique adoptée en 2015 par 193 États ; les neuf limites planétaires sont un constat scientifique de 2009. Le Donut les fait cohabiter mais ne les confond pas : l’un est le plancher, l’autre le plafond.',
      reflexe:
        'Une phrase de séparation apprise par cœur : « ODD = ambition, limites planétaires = contraintes, Donut = l’espace entre les deux ».',
    },
    {
      titre: 'Réciter les douze objectifs du plancher',
      explication:
        'Citer la liste complète prend trente secondes des dix minutes de passage et ne démontre rien. Ce qui se note, c’est le choix de deux ou trois objectifs et la justification de ce choix par le cas.',
      reflexe:
        'Trois objectifs, chacun rattaché à une personne réelle du cas. Et si tu veux montrer que tu connais la liste, place la variante « assainissement / réseaux » : elle prouve que tu as lu les deux supports.',
    },
  ],

  variantes: [
    {
      sujet: 'Les douze objectifs du plancher social : deux libellés divergent',
      formulations: [
        {
          texte:
            'Alimentation · Santé · Éducation · Revenu et travail · Logement · Eau · Assainissement · Énergie · Paix et justice · Voix politique · Équité sociale · Égalité des genres',
          source: 'liste écrite, slide 24 du cours de durabilité',
        },
        {
          texte:
            'Eau · Alimentation · Santé · Éducation · Revenu et travail · Paix et justice · Représentation politique · Équité sociale · Égalité des sexes · Logement · Réseaux · Énergie',
          source: 'schéma du Donut, slide 25 du même document',
        },
      ],
      consigne:
        'Trois écarts : assainissement (liste) ↔ réseaux (schéma) ; voix politique ↔ représentation politique ; égalité des genres ↔ égalité des sexes. Les deux derniers sont des variantes de traduction, le premier est un écart de contenu — le modèle original de Raworth comporte une dimension networks, l’accès à l’information et aux réseaux de soutien. Ne tranche pas : dis « le cours donne douze dimensions ; deux libellés varient entre la liste et le schéma », cite en priorité les dix communes, et sache que mentionner « réseaux » ouvre directement sur l’inclusion numérique comme besoin fondamental.',
    },
    {
      sujet: 'Le nom de la limite basse',
      formulations: [
        { texte: 'Plancher social', source: 'cours de durabilité' },
        { texte: 'Fondement social', source: 'cours numérique de J. Recordon' },
      ],
      consigne:
        'Même notion, deux traductions du social foundation de Raworth. Emploie « plancher social », qui est le terme du support principal, et signale l’autre d’un mot si l’occasion se présente.',
    },
    {
      sujet: 'La date de Raworth',
      formulations: [
        { texte: 'Raworth (2017)', source: 'cours de durabilité et bibliographie officielle' },
        { texte: 'Raworth (2018)', source: 'cours numérique, slide 30' },
      ],
      consigne:
        'L’ouvrage Doughnut Economics est de 2017 ; 2018 correspond probablement à une édition ultérieure. Retiens 2017, conforme à la bibliographie officielle, et mentionne la divergence seulement si l’on t’interroge sur la source.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman SA — l’abonnement mobilité passé au Donut',
    situation:
      'Le diagnostic est fait et le business model est posé. Deux options restent sur la table : défendre la vente de vélos, ou basculer vers un abonnement mobilité tout compris pour les entreprises genevoises. Le Donut n’intervient pas pour choisir à la place de la direction — il intervient pour dire à quelles conditions l’option envisagée est admissible. Les chiffres qui suivent sont illustratifs.',
    deroule: [
      {
        etiquette: 'Plafond — première limite',
        contenu:
          'Entités nouvelles : environ 240 batteries lithium-ion mises en circulation chaque année, dont aucune n’est reprise en fin de vie. Le mécanisme est identifié, la quantité est en absolu.',
      },
      {
        etiquette: 'Plafond — seconde limite',
        contenu:
          'Usage des sols et eau douce, à l’endroit de l’extraction du lithium, chez deux fournisseurs asiatiques sur lesquels l’atelier n’a aucune visibilité. Un impact réel qui n’apparaît dans aucun compte de l’entreprise.',
      },
      {
        etiquette: 'Plafond — verdict',
        contenu:
          'Au-dessus. L’abonnement améliore le ratio — un vélo partagé sert plusieurs salariés — mais il déplace la propriété des batteries vers l’atelier, ce qui le rend enfin responsable de leur fin de vie. Favorable, à condition d’organiser la reprise.',
      },
      {
        etiquette: 'Plancher — revenu et travail',
        contenu:
          'Deux mécaniciens de Plainpalais dépendent du volume de réparations tierces ; en amont, des conditions de travail inconnues chez les fournisseurs de batteries. Deux points de fragilité, l’un interne, l’autre à l’autre bout de la chaîne.',
      },
      {
        etiquette: 'Plancher — équité sociale',
        contenu:
          'À 95 CHF par mois et par vélo, l’abonnement s’adresse aux entreprises. Le particulier qui achetait un vélo à 2 600 CHF n’a plus d’offre : il tombe sous le plancher par le prix et par la condition d’engagement.',
      },
      {
        etiquette: 'Plancher — verdict',
        contenu:
          'Sous le plancher pour un public identifié : les particuliers et les indépendants aux revenus modestes. Défavorable en l’état.',
      },
      {
        etiquette: 'L’échange caché',
        contenu:
          'Le gain écologique de l’abonnement est financé par une perte d’accès. C’est un dépassement échangé contre un abaissement, pas un progrès de durabilité.',
      },
      {
        etiquette: 'Le correctif',
        contenu:
          'Pilote de 40 vélos chez 6 entreprises genevoises sur 12 mois, avec deux conditions inscrites dès le départ : reprise et reconditionnement de toute batterie du parc, et maintien de la réparation toutes marques, ouverte à tous, au guichet de Plainpalais.',
      },
    ],
    conclusion:
      'Le Donut n’a pas dit à Atelier Léman de basculer vers l’abonnement : il a dit que le basculement n’est admissible qu’assorti d’une reprise des batteries et d’une porte laissée ouverte aux clients modestes. Ces deux conditions ne sont pas des intentions — elles se traduisent immédiatement dans deux blocs du BMC durable, les ressources clés et les segments de clientèle, et elles reviennent comme critères d’acceptabilité au moment du SAF.',
  },

  phraseOral:
    'Le Donut ne me dit pas si l’abonnement est rentable, il me dit à quelles conditions il est admissible : il doit faire baisser le nombre de batteries mises en circulation — c’est le bord haut — sans fermer la porte aux clients qui ne peuvent pas payer 95 francs par mois — c’est le bord bas. Une option qui n’améliore qu’un seul des deux bords n’est pas durable : elle a simplement déplacé le problème.',

  aRetenir: [
    { cle: 'Auteur et date', valeur: '📘 Kate Raworth, 2017 (⚠️ 2018 dans le cours numérique — retiens 2017)' },
    { cle: 'Les deux bords', valeur: 'Plafond écologique = 9 limites planétaires · plancher social = 12 objectifs pour une vie digne' },
    { cle: 'L’anneau', valeur: '« La chair du donut » : l’espace sûr et juste, seul endroit où une activité peut durer' },
    { cle: 'Les deux échecs', valeur: 'Dépassement (on franchit le plafond) · abaissement (on tombe sous le plancher)' },
    { cle: 'La règle', valeur: 'Une stratégie durable évite les deux — compenser l’un par l’autre n’est pas de la durabilité' },
    { cle: 'Ce qu’il est', valeur: 'Un cadre normatif de jugement, jamais un business model' },
    { cle: 'Ce qui le prolonge', valeur: 'Le BMC durable pour agir, le SAF pour arbitrer' },
    { cle: 'Le mot du visuel', valeur: '📘 « Économie régénératrice et distributive » : rendre plus qu’on ne prend, répartir au lieu de concentrer' },
    { cle: 'La variante à citer', valeur: 'Assainissement (liste, slide 24) ↔ réseaux (schéma, slide 25)' },
  ],

  notions: [
    'donut',
    'plancher-social',
    'plafond-ecologique',
    'limites-planetaires',
    'durabilite',
    'durabilite-forte',
    'wedding-cake',
    'agenda-2030',
    'odd',
    'externalite-negative',
    'economie-fonctionnalite',
    'bmc-durable',
    'quatre-criteres-donut',
    'inclusion-numerique',
    'greenwashing',
  ],
}
