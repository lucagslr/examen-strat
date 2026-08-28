import type { EtapeAnalyse } from './types'

/**
 * ÉTAPE 4 — DU SWOT CROISÉ AUX OPTIONS
 * ====================================
 *
 * L'étape charnière du parcours. Avant elle, on comprend ; après elle, on
 * choisit. Elle consomme les quatre listes que les étapes 1 et 2 ont produites
 * et les frotte les unes aux autres jusqu'à ce qu'il en sorte des questions à
 * trancher, puis des options réellement différentes.
 *
 * Provenance : 📘 cours · 🔎 raisonnement · 📚 hors cours. Le croisement
 * systématique est signalé pour ce qu'il est — la fiche de méthode le donne
 * comme du cours, l'encyclopédie note qu'il n'est pas formalisé dans les
 * supports. La divergence se conserve, elle ne s'uniformise pas.
 */
export const etape: EtapeAnalyse = {
  id: 'e4',
  numero: 4,
  slug: 'swot-options',
  titre: 'Du SWOT croisé aux options',

  question: 'Comment passe-t-on d’un diagnostic à de vrais choix ?',

  entree:
    'Quatre listes encore séparées : les opportunités et les menaces sorties du PESTEL et de Porter à l’étape 1, les forces et les faiblesses sorties des ressources, des compétences et de la chaîne de valeur à l’étape 2, plus la mécanique de revenus mise à plat à l’étape 3 et l’endroit précis où elle est fragile.',

  sortie:
    'Deux ou trois options stratégiques distinctes, réalistes et décrites sur exactement les mêmes lignes — donc comparables —, chacune rattachée au croisement du SWOT dont elle sort : c’est ce que l’étape 5 passera au filtre du SAF, souhaitable, acceptable, faisable.',

  minutes: '5:00 – 6:30',

  modeles: ['swot', 'ocean-bleu-erac'],

  /* --------------------------------------------------------------- Méthode */

  methode: [
    {
      titre: '1. Écrire l’en-tête avant la première ligne',
      detail:
        'Trois mots en haut du brouillon : quelle entreprise, quel domaine d’activité, quelle date. Un domaine d’activité stratégique — un DAS — est une activité assez homogène pour avoir ses propres concurrents et ses propres conditions de réussite. Deux DAS donnent deux SWOT différents, et c’est normal : le tableau n’a de sens que pour un terrain précis.',
      aEviter:
        'Remplir les cases pendant que le périmètre est encore flou. On écrit alors des lignes vraies pour un métier et fausses pour l’autre, et le tableau finit par se contredire tout seul.',
    },
    {
      titre: '2. Remplir par recopie, jamais de mémoire',
      detail:
        'Le tableau n’a aucun contenu propre : chaque ligne vient d’un outil déjà utilisé. En haut, ce que le diagnostic interne a trouvé ; en bas, ce que le diagnostic externe a trouvé. Devant chaque ligne, on doit pouvoir dire son origine à voix haute — « Porter, pouvoir des fournisseurs », « PESTEL, politique ». Une ligne sans origine se raye.',
      aEviter:
        'Écrire de tête. Ça se voit en trois secondes : les cases se remplissent de généralités du type « bonne équipe » ou « marché difficile », qui ne se croisent avec rien parce qu’elles ne disent rien.',
    },
    {
      titre: '3. Trier sur l’origine, et seulement ensuite sur le signe',
      detail:
        'Une question par élément : « est-ce que cela existerait sans cette entreprise ? » Oui → dehors, donc opportunité ou menace. Non → dedans, donc force ou faiblesse. C’est une fois l’origine tranchée qu’on regarde si l’élément aide ou nuit. L’ordre compte : trier d’abord sur positif ou négatif est exactement ce qui fabrique la confusion entre une force et une opportunité.',
      aEviter:
        'Ranger un facteur clé de succès dans les forces. Un facteur clé de succès décrit ce que le secteur exige de tous ses acteurs : il est dehors, jamais chez nous.',
    },
    {
      titre: '4. Hiérarchiser jusqu’à trois lignes par case',
      detail:
        'Marquer chaque ligne majeure, secondaire ou mineure, puis ne garder que trois majeures par case. Ce n’est pas de la mise en forme : on va croiser les lignes majeures entre elles, et croiser deux éléments mineurs produit une option que personne n’aura envie de défendre.',
      aEviter:
        'Garder une ligne parce qu’elle est vraie. La question n’est pas « est-ce vrai ? » mais « est-ce que cela change une décision ? ».',
    },
    {
      titre: '5. Croiser dedans × dehors, et écrire quatre phrases d’action',
      detail:
        'Un croisement prend toujours un pied en haut du tableau et un pied en bas. F × O : en quoi cette force nous permet-elle de saisir cette opportunité ? F × M : en quoi cette force nous protège-t-elle de cette menace ? f × O : que faut-il corriger d’abord pour ne pas rater cette opportunité ? f × M : que donne la rencontre de cette faiblesse et de cette menace ? Chaque réponse s’écrit comme une phrase qui commence par un verbe.',
      aEviter:
        'Croiser deux éléments de la même moitié du tableau : deux forces additionnées restent une force, rien de neuf n’apparaît. Et ne jamais sauter f × M sous prétexte qu’il est désagréable à écrire.',
    },
    {
      titre: '6. Remonter aux enjeux, dont une tension',
      detail:
        'Un enjeu est une question stratégique ouverte que le croisement fait apparaître : il se termine par un point d’interrogation, jamais par un impératif. Deux ou trois suffisent. L’un au moins doit être une tension : deux termes également légitimes qu’on ne peut pas satisfaire en même temps à court terme. La nommer montre qu’on cherche un arbitrage, pas une bonne réponse.',
      aEviter:
        'Formuler l’enjeu comme la conclusion déjà choisie. « Il faut lancer l’abonnement » n’est pas un enjeu, c’est la fin de l’exposé arrivée quatre minutes trop tôt.',
    },
    {
      titre: '7. Sortir deux ou trois options, décrites sur les mêmes lignes',
      detail:
        'Une option est une réponse complète à l’enjeu central, qui engage l’entreprise dans une direction. Trois qualités, et il les faut toutes les trois : distinctes, elles ne mènent pas au même endroit ; réalistes, aucune n’est là pour faire nombre ; comparables, chacune est décrite sur les mêmes lignes — ce qu’elle exploite, ce qu’elle ignore, son risque principal, sa réversibilité. C’est cette dernière exigence qui rend l’étape 5 possible.',
      aEviter:
        'S’arrêter à une seule option, ou en aligner trois dont deux sont des épouvantails. Dans les deux cas le filtre suivant n’a rien à filtrer, et la recommandation paraît décidée d’avance.',
    },
  ],

  /* ---------------------------------------------------------- Raisonnement */

  raisonnement: [
    {
      t: 'texte',
      contenu:
        'On arrive ici avec quatre tas de notes qui ne se parlent pas : ce que le dehors a donné à l’étape 1, ce que le dedans a donné à l’étape 2, et la mécanique de revenus mise à plat à l’étape 3. Le SWOT ne va rien ajouter à ces notes — il ne contient aucune information qui ne soit déjà écrite ailleurs. Sa seule utilité est de les mettre en présence. 📘 Le cours l’appelle une « vision synthétique » : un point d’arrivée des diagnostics, et un point de départ des options.',
    },
    {
      t: 'question',
      contenu:
        'Quatre listes bien rangées, c’est rassurant. Mais qu’est-ce qui, là-dedans, oblige à décider quoi que ce soit ?',
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit : « ses mécaniciens sont réputés : ils diagnostiquent des pannes électroniques que les ateliers de quartier ne savent pas traiter ».',
      conclusion:
        'Le membre de phrase « que les ateliers de quartier ne savent pas traiter » est décisif. Sans lui, on n’aurait qu’un compliment ; avec lui, on a un écart mesurable par rapport à quelqu’un — donc une force. Le test de tri confirme : cette compétence disparaîtrait si Atelier Léman fermait, elle est bien du dedans.',
    },
    {
      t: 'renvoi',
      modele: 'swot',
      point: 'forces',
      libelle: 'Pourquoi une force se dit toujours par rapport à quelqu’un',
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit : « les batteries, composant le plus cher et le plus critique du vélo, sont achetées à deux fournisseurs asiatiques ».',
      conclusion:
        'Deux gestes ici. Le tri d’abord : cette dépendance n’existe que chez Atelier Léman — un concurrent qui a cinq fournisseurs ne l’a pas — donc c’est une faiblesse, pas une menace. Le rang ensuite : composant le plus cher, produit central, deux sources seulement. On la marque majeure 🔴, ce qui veut dire une seule chose : elle servira au croisement.',
    },
    {
      t: 'renvoi',
      modele: 'swot',
      point: 'faiblesses',
      libelle: 'La frontière entre « nos coûts nous interdisent de suivre » et « les prix baissent »',
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit : « la Ville et le Canton de Genève multiplient les subventions à la mobilité douce, notamment pour les entreprises qui équipent leurs collaborateurs ».',
      conclusion:
        'Le canton subventionnerait la mobilité douce même si Atelier Léman n’avait jamais ouvert : c’est dehors, donc une opportunité. Et le mot « entreprises » désigne le client — ce n’est pas le cycliste du samedi qui devient solvable, c’est l’employeur. Retenir ce mot évite de conclure « il faut baisser nos prix aux particuliers », qui serait à côté du sujet.',
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit : « des marques en ligne à bas prix se sont installées sur le marché suisse » — et, une ligne plus haut, « les ventes de vélos reculent de 8 % ».',
      conclusion:
        'Le fait est dehors et il nuit : menace. Attention, le −8 % n’est pas une deuxième menace, c’est la mesure de celle-là. Il donne la gravité et l’ordre de grandeur qui permettront de la classer devant les autres. Une menace sans gravité ni échéance ne se hiérarchise pas, donc ne se croise pas.',
    },
    {
      t: 'renvoi',
      modele: 'swot',
      point: 'menaces',
      libelle: 'Hiérarchiser une menace sur deux critères : gravité et échéance',
    },
    {
      t: 'encadre',
      ton: 'alerte',
      titre: 'Le piège de niveau, à repérer avant d’écrire',
      contenu:
        '« La compétence technique est essentielle dans la réparation » n’a rien à faire dans les forces. Cette phrase décrit ce que le secteur exige de tous ses acteurs — un facteur clé de succès, donc du dehors. La force, c’est « nous la détenons, contrairement aux ateliers de quartier ». On confond sinon l’entreprise et son industrie, et cette confusion-là se voit immédiatement.',
    },
    {
      t: 'tableau',
      entetes: ['Case', 'Majeur 🔴', 'Majeur 🔴', 'Ensuite 🟠 🟡'],
      lignes: [
        [
          'FORCES — dedans, positif',
          'Atelier toutes marques, diagnostic batterie en 20 min',
          'Réputation locale depuis 15 ans',
          '🟠 Équipe stable, formée en interne · 🟡 flux de réparations déjà récurrent (étape 3)',
        ],
        [
          'FAIBLESSES — dedans, négatif',
          'Batteries chez deux fournisseurs et personne d’autre',
          'Trésorerie : hors d’état d’immobiliser un parc de vélos (étape 3)',
          '🟠 Présence en ligne quasi nulle · 🟡 aucun développement technologique',
        ],
        [
          'OPPORTUNITÉS — dehors, positif',
          'Subventions cantonales et communales, ciblées entreprises',
          '—',
          '🟠 Entreprises qui veulent verdir les trajets · 🟡 normes sur les déchets électroniques',
        ],
        [
          'MENACES — dehors, négatif',
          'Marques en ligne à bas prix sur le DAS vente',
          'Pouvoir des deux fournisseurs de batteries',
          '🟠 Transports publics et scooters partagés',
        ],
      ],
      legende:
        'Trois lignes par case au maximum. Les deux lignes marquées « étape 3 » viennent du business model : c’est ce que cette étape-là avait produit et qui n’avait pas encore de case. 🔎 Le classement 🔴 🟠 🟡 est illustratif : il ne sert qu’à savoir quoi croiser avec quoi.',
    },
    {
      t: 'question',
      contenu:
        'Le tableau est rempli, hiérarchisé, honnête. Et alors ? À ce stade je n’ai encore rien décidé du tout — qu’est-ce qui va me faire passer de quatre listes à une question à trancher ?',
    },
    {
      t: 'texte',
      contenu:
        'La réponse tient dans un seul geste : croiser. On prend un élément du haut, quelque chose qu’on contrôle, et un élément du bas, quelque chose qu’on subit, et on demande ce que leur rencontre produit. La règle ne souffre pas d’exception : toujours dedans × dehors. ⚠️ Une précaution de provenance, qui rapporte des points si on la dit : la fiche de méthode présente ce croisement systématique comme du contenu de cours 📘, alors que l’encyclopédie note qu’il n’est pas formalisé dans les supports, lesquels en restent à la « vision synthétique » 📚. À l’oral, annonce-le donc comme ton raisonnement : « le cours en reste à la synthèse ; je la pousse en croisant interne × externe ». Citer le nom de la matrice, TOWS, est un bonus, jamais une obligation.',
    },
    {
      t: 'schema',
      schema: {
        h: 580,
        description:
          'Quatre cases en carré : en haut les croisements qui partent d’une force, en bas ceux qui partent d’une faiblesse ; à gauche ceux qui rencontrent une opportunité, à droite ceux qui rencontrent une menace. Chaque case dit ce que le croisement produit.',
        noeuds: [
          {
            id: 'fo',
            titre: 'F × O — LEVIER',
            lignes: [
              'ma force sert cette opportunité',
              'ça produit : une offensive',
              'Léman : l’abonnement mobilité B2B',
            ],
            x: 40,
            y: 80,
            l: 420,
            h: 200,
            ton: 'positif',
          },
          {
            id: 'fm',
            titre: 'F × M — DÉFENSE',
            lignes: [
              'ma force me protège de la menace',
              'ça produit : un argumentaire',
              'Léman : intervention 24 h à Genève',
            ],
            x: 540,
            y: 80,
            l: 420,
            h: 200,
            ton: 'neutre',
          },
          {
            id: 'wo',
            titre: 'f × O — CHANTIER',
            lignes: [
              'ma faiblesse bloque l’opportunité',
              'ça produit : un plan interne',
              'Léman : sécuriser les batteries',
            ],
            x: 40,
            y: 320,
            l: 420,
            h: 200,
            ton: 'alerte',
          },
          {
            id: 'wm',
            titre: 'f × M — RISQUE MAJEUR',
            lignes: [
              'la faiblesse rencontre la menace',
              'ça produit : une alerte',
              'Léman : la marge prise en tenaille',
            ],
            x: 540,
            y: 320,
            l: 420,
            h: 200,
            ton: 'danger',
          },
        ],
        liens: [],
        axes: {
          x: { libelle: 'DEHORS', faible: 'opportunité', fort: 'menace' },
          y: { libelle: 'DEDANS', faible: 'faiblesse', fort: 'force' },
        },
        note:
          'Un croisement a toujours un pied en haut et un pied en bas. La case en bas à droite est celle qu’on saute le plus souvent, et celle qui contient presque toujours le vrai risque. 🔎',
      },
    },
    {
      t: 'tableau',
      entetes: ['Croisement', 'Ce qu’il produit', 'La phrase d’action, sur le cas'],
      lignes: [
        [
          'F × O — levier',
          'une direction de croissance',
          'Utiliser l’atelier et la réputation pour aller chercher la subvention autrement qu’en vendant un vélo : un abonnement mobilité tout compris pour les entreprises genevoises, où l’entretien devient le cœur de l’offre au lieu d’en être le service après-vente.',
        ],
        [
          'F × M — défense',
          'un argumentaire',
          'Refuser le terrain du prix face aux marques en ligne et leur opposer ce qu’un colis ne contient pas : une intervention en 24 h à Carouge ou à Plainpalais, sur n’importe quelle marque.',
        ],
        [
          'f × O — chantier',
          'un plan d’action interne',
          'Sécuriser les batteries avant d’immobiliser une flotte : un second fournisseur européen, un stock tampon ou un format standardisé. Tant que ce chantier n’est pas ouvert, l’opportunité reste théorique.',
        ],
        [
          'f × M — risque majeur ⚠️',
          'une alerte',
          'Nommer la tenaille : si les deux fournisseurs relèvent leurs prix pendant que les marques en ligne cassent les leurs, la marge est attaquée des deux côtés en même temps.',
        ],
      ],
      legende:
        'Chaque phrase commence par un verbe. Un croisement écrit au présent de constat — « nous sommes dépendants » — n’a pas encore été croisé, il a seulement été recopié.',
    },
    {
      t: 'observation',
      source:
        'L’énoncé donne deux chiffres qu’on n’avait pas encore utilisés : un vélo vendu 2 600 CHF pour un coût de revient de 1 400 CHF.',
      conclusion:
        'Ils servent enfin, et ils servent précisément au croisement f × M. La marge unitaire est de 1 200 CHF. 🔎 Chiffrage illustratif : +15 % sur l’achat de la batterie et −10 % sur le prix de vente, il reste 730 CHF — près de 40 % de marge en moins, sans qu’aucune faute de gestion ait été commise. Ce calcul de vingt secondes transforme une inquiétude en argument.',
    },
    {
      t: 'encadre',
      ton: 'succes',
      titre: 'Regarde ce que f × M vient de faire apparaître',
      contenu:
        'Il ne dit pas « nous avons une faiblesse » d’un côté et « il existe une menace » de l’autre. Il dit qu’une faiblesse rencontre une menace, et que la combinaison fait plus de dégâts que la somme des deux. Aucune des quatre cases prise isolément ne montrait cette tenaille. Un tableau qui range s’appelle un inventaire ; deux éléments qu’on met en présence et qui produisent ce que ni l’un ni l’autre ne contenait, ça s’appelle une analyse.',
    },
    {
      t: 'renvoi',
      modele: 'ocean-bleu-erac',
      point: 'ocean-rouge',
      libelle: 'F × M vient de conclure qu’on ne gagnera pas la guerre des prix — voilà à quoi ressemble un terrain saturé',
    },
    {
      t: 'liste',
      titre: 'Ce que les croisements font remonter : trois enjeux, formulés en questions 🔎',
      items: [
        'Enjeu 1 — Sur lequel des deux domaines jouer l’avenir de l’entreprise : la vente de vélos, ou la réparation et le service ?',
        'Enjeu 2 — Comment sortir de la dépendance aux deux fournisseurs de batteries, et faut-il l’avoir fait avant de s’engager sur une flotte ?',
        'Enjeu 3 ⚖️ — Faut-il accepter de vendre moins de vélos aujourd’hui pour gagner des revenus qui reviennent chaque mois ?',
      ],
    },
    {
      t: 'encadre',
      ton: 'info',
      titre: 'Pourquoi l’enjeu 3 ne ressemble pas aux deux autres',
      contenu:
        'Les deux premiers ont une bonne réponse quelque part : on peut trouver un second fournisseur, on peut choisir un domaine. Le troisième n’en a pas. Vendre un vélo rapporte 1 200 CHF le jour de la livraison ; le même vélo en abonnement rapporte à peu près autant, mais étalé sur des années. Les deux termes sont légitimes et incompatibles à court terme : c’est une tension ⚖️, et une tension ne se résout pas, elle s’arbitre. La nommer à voix haute montre qu’on ne cherche pas la bonne réponse mais le prix de chaque réponse.',
    },
    {
      t: 'texte',
      contenu:
        'Un enjeu reste une question ; il faut maintenant des réponses. Une option stratégique 🔎 est une réponse complète et cohérente à l’enjeu central, qui engage l’entreprise dans une direction. Trois qualités, et il les faut toutes. Distinctes : elles ne mènent pas au même endroit, sinon on ne choisit rien. Réalistes : chacune est défendable par quelqu’un de sérieux — trois options dont deux sont des épouvantails, et le jury comprend tout de suite que la conclusion était écrite d’avance. Comparables : décrites sur les mêmes lignes, faute de quoi l’étape suivante n’aura rien à mettre en face de quoi.',
    },
    {
      t: 'renvoi',
      modele: 'ocean-bleu-erac',
      point: 'erac-matrice',
      libelle: 'L’option qui redessine l’offre au lieu de la défendre se construit attribut par attribut',
    },
    {
      t: 'tableau',
      entetes: ['', 'A — Consolider', 'B — Hybride', 'C — Basculer'],
      lignes: [
        [
          'En quoi elle consiste',
          'Défendre la vente : réduire les coûts, renforcer la présence en ligne',
          'Garder la vente aux particuliers et lancer l’abonnement B2B en pilote',
          'Sortir de la vente et devenir un opérateur de mobilité d’entreprise',
        ],
        [
          'Ce qu’elle exploite',
          'rien de neuf',
          'la force atelier × l’opportunité subventions',
          'la même chose, poussée à fond',
        ],
        [
          'Ce qu’elle ignore',
          'que le recul est structurel, pas conjoncturel',
          '—',
          'le client particulier historique',
        ],
        [
          'Son risque principal',
          'continuer à perdre lentement',
          'faire tourner deux modèles en parallèle',
          'trésorerie immobilisée, changement de métier',
        ],
        ['Réversibilité', 'totale', 'élevée', 'faible'],
        [
          'Le pari qu’elle fait',
          'le marché finira par se stabiliser',
          'apprendre sans tout risquer',
          'le service est le vrai métier',
        ],
      ],
      legende:
        '🔎 Options reconstruites, chiffres illustratifs. Les mêmes lignes pour les trois : c’est ce parallélisme, et rien d’autre, qui rendra le SAF possible à l’étape suivante.',
    },
    {
      t: 'encadre',
      ton: 'erreur',
      titre: 'Ce tableau n’est pas encore le SAF',
      contenu:
        'Il décrit, il ne tranche pas — et il ne doit surtout pas trancher ici. Écrire « je retiens B » à ce moment revient à sauter le filtre : souhaitable, acceptable, faisable. L’étape 4 s’arrête juste avant la décision, avec deux ou trois portes ouvertes et une grille qui permettra de les fermer une par une. La faute symétrique existe aussi et coûte autant : passer du SWOT directement à la recommandation, sans jamais écrire d’options. Il manque alors tout le milieu du raisonnement, et la conclusion semble tomber du ciel.',
    },
    {
      t: 'oral',
      contenu:
        'Mon SWOT ne m’apprend rien tant que je ne le croise pas. Ma force atelier, face aux subventions cantonales, ouvre un abonnement mobilité pour les entreprises genevoises ; mais ma dépendance à deux fournisseurs de batteries, face aux marques en ligne, prend ma marge en tenaille — 1 200 CHF par vélo aujourd’hui, environ 730 dans ce scénario. De là, trois enjeux, dont une vraie tension : accepter de vendre moins maintenant pour encaisser plus longtemps. Et de là, trois options — consolider, hybrider, basculer — que je vais passer au SAF.',
    },
  ],

  /* --------------------------------------------------------------- Livrable */

  livrable: {
    titre: 'Ce qu’il y a sur le brouillon à la fin de l’étape 4',
    lignes: [
      'SWOT — DAS « réparation et service » · 3 lignes max par case, majeures en 🔴',
      'F × O → abonnement mobilité B2B, l’atelier au cœur de l’offre',
      'F × M → sortir du prix : intervention 24 h à Genève, toutes marques',
      'f × O → sécuriser les batteries AVANT d’immobiliser une flotte',
      'f × M ⚠️ → tenaille sur la marge : 1 200 CHF → ~730 (illustratif)',
      'Enjeu 1 : quel domaine porte l’avenir ? · Enjeu 2 : sortir de la dépendance ?',
      'Enjeu 3 ⚖️ tension : vendre moins maintenant pour encaisser chaque mois',
      'Option A consolider · B hybride, en pilote · C basculer',
      'Lignes de comparaison prêtes : exploite / ignore / risque / réversibilité',
      '→ ne PAS trancher ici. C’est le SAF qui tranche, à l’étape 5.',
    ],
  },

  /* ----------------------------------------------------------------- Pièges */

  pieges: [
    {
      titre: 'S’arrêter au tableau',
      explication:
        'Le SWOT rangé, hiérarchisé, bien aligné — et puis plus rien. C’est la faute la plus fréquente de l’étape et la plus coûteuse : sans croisement, aucun enjeu ; sans enjeu, aucune option ; sans option, rien à recommander. L’exposé devient un inventaire présenté avec sérieux.',
      reflexe:
        'S’imposer une phrase de sortie obligatoire : « ce SWOT fait apparaître trois enjeux… ». Tant qu’on ne peut pas la prononcer, l’étape n’est pas finie.',
    },
    {
      titre: 'Croiser dedans × dedans',
      explication:
        'On met bout à bout deux forces — « notre atelier et notre réputation » — et on croit avoir croisé. Deux forces additionnées restent une force. Le croisement ne fabrique de l’information que s’il met en présence quelque chose qu’on contrôle et quelque chose qu’on subit.',
      reflexe:
        'Vérifier du doigt que chaque croisement a un pied dans la moitié haute du tableau et un pied dans la moitié basse. Quatre croisements, quatre vérifications.',
    },
    {
      titre: 'Sauter le quadrant f × M',
      explication:
        'C’est le plus désagréable à écrire, puisqu’il oblige à dire où l’entreprise est à découvert — donc c’est celui qu’on oublie. Et c’est presque toujours celui qui contient le vrai risque : chez Atelier Léman, la tenaille entre des fournisseurs qui peuvent monter leurs prix et des concurrents qui cassent les leurs.',
      reflexe:
        'Écrire les quatre croisements dans l’ordre F × O, F × M, f × O, f × M, et considérer l’étape ouverte tant que la quatrième ligne est vide.',
    },
    {
      titre: 'L’option unique, ou les deux épouvantails',
      explication:
        'Une seule option, et le filtre suivant n’a rien à comparer : la recommandation paraît arbitraire. Trois options dont deux sont manifestement absurdes, et c’est pire — le jury comprend que la conclusion était écrite avant l’analyse, et tout l’exposé perd sa crédibilité rétroactivement.',
      reflexe:
        'Se demander, pour chaque option : quelqu’un de sérieux pourrait-il la défendre pendant deux minutes ? Si non, elle ne compte pas. Mieux vaut deux options réelles que trois dont une est un décor.',
    },
    {
      titre: 'Faire un seul SWOT pour deux métiers',
      explication:
        'Atelier Léman vend des vélos, position faible, et répare toutes marques, position forte. Fondre les deux dans un seul tableau revient à en faire la moyenne : la faiblesse de l’un masque la force de l’autre, et les croisements deviennent illisibles parce qu’ils mélangent deux marchés qui n’ont ni les mêmes clients ni les mêmes concurrents.',
      reflexe:
        'Écrire le nom du domaine d’activité en haut du tableau avant la première ligne. Si une ligne ne vaut pas pour ce domaine-là, elle appartient à l’autre tableau.',
    },
  ],
}
