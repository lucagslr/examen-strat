import type { EtapeAnalyse } from './types'

/**
 * ÉTAPE 1 DE L'ANALYSE GUIDÉE — LE DIAGNOSTIC EXTERNE
 * ===================================================
 *
 * Le maillon qui consomme le cadrage de l'étape 0 (un problème, un périmètre,
 * deux domaines d'activité) et produit la matière première de l'étape 2 : des
 * opportunités, des menaces, et les facteurs clés de succès du secteur.
 *
 * Trois modèles y passent, dans cet ordre : PESTEL (le macro), Porter (le
 * micro), et — seulement si la pression est forte — l'océan bleu et sa matrice
 * ERAC. Deux variantes du cours sont signalées ici : le « E » du PESTEL et
 * l'acronyme ERAC. Elles se conservent, elles ne s'uniformisent pas.
 *
 * Provenance : 📘 cours · 🔎 raisonnement · 📚 hors cours.
 */

export const etape: EtapeAnalyse = {
  id: 'e1',
  numero: 1,
  slug: 'diagnostic-externe',
  titre: 'Le diagnostic externe',

  question:
    'Qu’est-ce qui, autour de l’entreprise, peut favoriser ou menacer sa réussite ?',

  entree:
    'Le cadrage de l’étape 0 : un problème formulé — le modèle de revenus dépend d’un renouvellement qui ralentit —, un périmètre — la mobilité douce professionnelle dans le canton de Genève —, et deux domaines d’activité séparés, la vente de vélos et la réparation-service.',

  sortie:
    'Des opportunités et des menaces hiérarchisées, chacune accompagnée de son mécanisme ; le constat que les deux domaines d’activité ont des profils concurrentiels opposés ; et les facteurs clés de succès du secteur, que l’étape 2 ira vérifier un par un à l’intérieur de l’entreprise.',

  minutes: '1:30 – 3:30',

  modeles: ['pestel', 'porter', 'ocean-bleu-erac'],

  // -------------------------------------------------------------------------
  // La méthode : les gestes de l'étape, applicables à n'importe quel cas
  // -------------------------------------------------------------------------
  methode: [
    {
      titre: '1. Rappeler le périmètre à voix haute, avant d’ouvrir le moindre outil',
      detail:
        'Une phrase, pas plus : quelle activité, quel territoire, quel horizon de temps. Elle vient de l’étape 0, on ne la refabrique pas. Sans elle, les six cases du PESTEL se remplissent de faits d’actualité parfaitement vrais et parfaitement inutilisables. 📘 Le cours pose d’ailleurs que l’analyse de l’environnement commence par la définition du périmètre.',
      aEviter:
        'Ouvrir le PESTEL avant d’avoir dit sur quoi il porte — c’est le « PESTEL de toute l’économie », qui ne décide de rien.',
    },
    {
      titre: '2. Descendre du macro vers le micro, jamais l’inverse',
      detail:
        'D’abord le PESTEL — le grand environnement, que tous les acteurs du secteur subissent de la même façon. Ensuite Porter — l’affrontement entre les acteurs d’un même secteur. 📘 Le cours sépare explicitement les deux niveaux. La raison est mécanique : les tendances macro déplacent les rapports de force du micro, alors que l’inverse n’arrive presque jamais.',
      aEviter:
        'Commencer par les concurrents parce qu’ils sont les plus faciles à nommer, puis remonter au contexte pour meubler.',
    },
    {
      titre: '3. Pour chaque fait retenu, écrire la chaîne entière',
      detail:
        'Quatre maillons, toujours dans cet ordre : le fait observable, ce qu’il change, la conséquence pour le secteur, puis l’opportunité ou la menace pour cette entreprise-là. C’est le geste central de l’étape. Un facteur qui s’arrête au premier maillon n’est pas une analyse, c’est un titre de journal.',
      aEviter:
        'Écrire « Technologique : l’intelligence artificielle » et passer à la case suivante. Et alors ?',
    },
    {
      titre: '4. Hiérarchiser au lieu de cataloguer',
      detail:
        '📘 Une excellente réponse sélectionne les facteurs réellement déterminants plutôt que de produire un PESTEL exhaustif sans hiérarchie. Le critère de tri n’est pas l’intérêt du fait, c’est son effet sur la décision à prendre : un facteur qui ne fait pencher la balance ni d’un côté ni de l’autre se cite en trois mots, puis s’abandonne.',
      aEviter:
        'Vouloir remplir les six lettres à tout prix, quitte à inventer un fait que l’énoncé ne donne pas.',
    },
    {
      titre: '5. Faire un Porter par domaine d’activité, avec un fait derrière chaque note',
      detail:
        'Porter s’applique à un secteur — pas à une entreprise, pas à « l’économie ». Si l’étape 0 a dégagé deux domaines, on trace deux toiles : c’est leur comparaison qui rapporte des points. Chaque force reçoit une note de 0 à 5 et, juste à côté, le fait de l’énoncé qui la justifie. Et on n’oublie pas la sixième : 📘 le cours ajoute l’État aux cinq forces classiques.',
      aEviter:
        'Compter les concurrents au lieu de mesurer l’intensité de l’affrontement, et additionner les six notes pour en faire un score global.',
    },
    {
      titre: '6. Construire le pont : nommer un facteur macro qui déplace une force',
      detail:
        'C’est le geste qui sépare une bonne réponse d’une excellente. 🔎 Une subvention publique rend le marché attractif, donc augmente la menace des nouveaux entrants. Une norme coûteuse alourdit les coûts des installés, mais élève aussi la barrière à l’entrée et les protège. Un même fait peut jouer dans les deux sens selon la force qu’il déplace.',
      aEviter:
        'Poser le PESTEL puis Porter côte à côte, sans jamais dire ce que l’un fait à l’autre.',
    },
    {
      titre: '7. Trancher la question du terrain, puis trier',
      detail:
        'Si la toile est large — pression forte —, la question devient : vaut-il encore la peine de se battre là ? 📘 C’est l’entrée de l’océan bleu et de la matrice ERAC. Ensuite seulement, on recopie tout dans deux colonnes hiérarchisées, opportunités et menaces, et on note ce qu’il faut maîtriser pour réussir dans ce secteur — les facteurs clés de succès, que l’étape 2 ira vérifier.',
      aEviter:
        'Terminer sur une liste à plat, sans hiérarchie, sans mécanisme et sans facteurs clés de succès : l’étape suivante n’aurait rien à traiter.',
    },
  ],

  // -------------------------------------------------------------------------
  // Le raisonnement, déroulé à voix haute sur le cas
  // -------------------------------------------------------------------------
  raisonnement: [
    {
      t: 'texte',
      contenu:
        'On arrive ici avec le cadrage de l’étape 0 et rien d’autre : un périmètre — la mobilité douce professionnelle dans le canton de Genève —, deux domaines d’activité, un problème formulé. On doit en ressortir avec deux listes, et deux seulement. Une opportunité 🔎, c’est un fait extérieur à l’entreprise qui peut la servir ; une menace, un fait extérieur qui peut lui nuire. Le mot qui compte est « extérieur » : personne, dans l’entreprise, ne peut décider que le fait n’existe pas. Si à la fin de l’étape on n’a pas cette liste hiérarchisée, l’étape a échoué.',
    },
    {
      t: 'question',
      contenu:
        'Par quoi commencer ? Par ce qui est le plus loin de l’entreprise, ou par ce qui est le plus proche ?',
    },
    {
      t: 'encadre',
      ton: 'info',
      titre: 'La météo et le match',
      contenu:
        'Par le plus loin. 📘 Le cours distingue deux niveaux. Le macro-environnement, c’est le climat général : les lois, l’économie, les technologies, les valeurs de la société — tout le monde le subit, personne ne le décide. Le micro-environnement, ou industrie, c’est l’affrontement entre les acteurs d’un même secteur : qui pousse qui, qui prend l’argent. Le PESTEL est l’outil du premier, Porter celui du second. Autrement dit : le PESTEL est la météo, Porter est le match. La météo change les conditions du match, mais ce n’est pas elle qui marque les buts. Garder l’image en tête évite l’erreur la plus fréquente de l’exercice — mettre les concurrents dans le PESTEL.',
    },
    {
      t: 'renvoi',
      modele: 'pestel',
      point: 'tri',
      libelle:
        'La case du PESTEL qui décrit la chaîne à écrire : un fait, une conséquence pour le secteur, puis une opportunité ou une menace.',
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit : « la Ville et le Canton de Genève multiplient les subventions à la mobilité douce, notamment pour les entreprises qui équipent leurs collaborateurs ».',
      conclusion:
        'C’est ce que font les pouvoirs publics : le fait se range donc en « P — Politique ». Mais le ranger ne suffit pas, il faut dire ce qu’il produit. Une subvention fait baisser le coût d’entrée pour une entreprise cliente ; une demande professionnelle qui n’était pas solvable le devient. C’est seulement à ce moment-là qu’on a le droit d’écrire le mot « opportunité » — et de préciser pour qui : pour celui qui sait servir une flotte d’entreprise.',
    },
    {
      t: 'schema',
      schema: {
        h: 700,
        description:
          'Un fait de l’énoncé descend en trois étapes — ce qu’il change, puis sa conséquence pour le secteur — avant de se dédoubler en une opportunité et une menace pour la même entreprise.',
        noeuds: [
          {
            id: 'fait',
            titre: 'LE FAIT — écrit dans l’énoncé',
            lignes: [
              '« Le Canton subventionne les',
              'entreprises qui équipent leurs',
              'collaborateurs en vélos »',
            ],
            x: 250,
            y: 40,
            l: 500,
            h: 140,
            ton: 'sourd',
          },
          {
            id: 'change',
            titre: 'CE QUE ÇA CHANGE',
            lignes: ['le coût d’entrée d’une entreprise', 'cliente baisse fortement'],
            x: 250,
            y: 220,
            l: 500,
            h: 110,
          },
          {
            id: 'secteur',
            titre: 'LA CONSÉQUENCE POUR LE SECTEUR',
            lignes: ['une demande B2B solvable apparaît', 'là où il n’y en avait pas'],
            x: 250,
            y: 370,
            l: 500,
            h: 110,
            ton: 'alerte',
          },
          {
            id: 'oppo',
            titre: 'OPPORTUNITÉ',
            lignes: ['pour qui sait servir une flotte', 'd’entreprise — notre atelier'],
            x: 40,
            y: 520,
            l: 420,
            h: 140,
            ton: 'positif',
          },
          {
            id: 'menace',
            titre: 'MENACE',
            lignes: ['le marché devient visible : des', 'acteurs mieux financés arrivent'],
            x: 540,
            y: 520,
            l: 420,
            h: 140,
            ton: 'danger',
          },
        ],
        liens: [
          { de: 'fait', vers: 'change' },
          { de: 'change', vers: 'secteur' },
          { de: 'secteur', vers: 'oppo' },
          { de: 'secteur', vers: 'menace' },
        ],
        note: 'La fourche du bas n’est pas une hésitation : c’est la fin du raisonnement. Un marché qu’un subside rend rentable devient un marché que d’autres remarquent. 🔎 Celui qui n’écrit que la branche gauche s’est arrêté au milieu du chemin.',
      },
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit : « des marques en ligne à bas prix se sont installées sur le marché suisse ».',
      conclusion:
        'Tentant de l’écrire en « Économique », ou en « Socioculturel » au nom des habitudes d’achat en ligne. Ce serait la faute classique. Des concurrents nommés, ce sont des acteurs du secteur : c’est du micro, donc du Porter — la rivalité, et derrière elle la faiblesse des barrières à l’entrée. Le test tient en une phrase 🔎 : si le fait désigne quelqu’un qui se bat contre nous, il n’a rien à faire dans le PESTEL.',
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit : « les batteries, composant le plus cher et le plus critique du vélo, sont achetées à deux fournisseurs asiatiques ».',
      conclusion:
        'Deux lectures, et il faut les deux. Côté macro, la batterie est la pièce qui commande le coût, l’autonomie et la durée de vie : c’est une dépendance technologique du secteur entier, donc le « T ». Côté micro, « deux fournisseurs » sur la pièce la plus chère se lit d’un coup d’œil : pouvoir de négociation de l’amont élevé. Un même fait peut alimenter le PESTEL et Porter — et le dire vaut mieux que de choisir.',
    },
    {
      t: 'tableau',
      entetes: ['Lettre', 'Le fait, dans l’énoncé', 'Ce qu’il produit pour le secteur', 'Pour Atelier Léman'],
      lignes: [
        [
          'P — Politique',
          'Subventions cantonales à la mobilité douce, ciblées entreprises',
          'Une demande professionnelle solvable apparaît là où il n’y en avait pas',
          'OPPORTUNITÉ majeure — et, du même mouvement, une menace d’entrée',
        ],
        [
          'E — Économique',
          'Rien de donné',
          'Le pouvoir d’achat compte sur un produit à 2 600 CHF, mais l’énoncé n’en dit rien',
          'Case non renseignée — on le signale, on ne la remplit pas',
        ],
        [
          'S — Socioculturel',
          'Des employeurs qui équipent leurs collaborateurs',
          'Se déplacer autrement devient un sujet d’entreprise, plus seulement de particulier',
          'OPPORTUNITÉ — le client bascule du particulier vers l’employeur',
        ],
        [
          'T — Technologique',
          'La batterie est le composant le plus cher et le plus critique',
          'Le vélo devient un objet électronique : plus cher à produire, plus dur à réparer',
          'MENACE sur les coûts — OPPORTUNITÉ sur la réparation, que peu savent faire',
        ],
        [
          'É — Écologique / Éthique',
          'Batteries achetées à deux fournisseurs asiatiques',
          'L’origine et la fin de vie des batteries deviennent des questions posées au vendeur',
          'MENACE de réputation, à surveiller plus qu’à trancher aujourd’hui',
        ],
        [
          'L — Légal',
          'Rien de donné',
          'Les règles sur les déchets électroniques se durcissent un peu partout 📚',
          'Hypothèse, pas un fait du cas — à annoncer comme telle',
        ],
      ],
      legende:
        '📘 Les six dimensions viennent du cours ; le contenu des trois autres colonnes est reconstruit à partir de l’énoncé 🔎. Les deux lignes « rien de donné » ne sont pas des trous à combler. Dire « l’énoncé ne donne pas le cadre légal ; s’il se durcissait sur les batteries, l’effet serait double — nos coûts monteraient, mais la barrière à l’entrée aussi » est bien plus solide que d’inventer une norme qui tombe à pic.',
    },
    {
      t: 'encadre',
      ton: 'alerte',
      titre: 'Le « E » du PESTEL — une variante à citer 📘',
      contenu:
        'Les supports du cours ne s’accordent pas sur ce que désigne le « E ». Une slide écrit « Éthique », une autre « Écologique », une troisième « environnemental et éthique » ; le corrigé de TP écrit « Éthique », et remplace au passage « Légal » par « Juridique ». Ce n’est pas une coquille à corriger, c’est du contenu. À l’oral : énoncer « environnemental et éthique » — la formulation la plus complète, celle qui couvre à la fois la pollution et les conditions de travail — puis signaler en une incise que les supports emploient aussi les deux autres. Savoir citer une variante montre qu’on a lu les sources, et non une synthèse.',
    },
    {
      t: 'texte',
      contenu:
        'Six cases sont posées. Combien en garder ? Trois. 📘 Le cours est explicite : une excellente réponse sélectionne les facteurs réellement déterminants plutôt que de produire un PESTEL exhaustif sans hiérarchie. Le critère n’est pas l’intérêt du fait mais son effet sur la décision à prendre — ici : défendre la vente de vélos, ou basculer vers un abonnement mobilité pour les entreprises ? Le politique, le technologique et le socioculturel font pencher la balance. Les trois autres, en l’état de l’énoncé, ne la font pas bouger : on les cite en trois mots et on avance.',
    },
    {
      t: 'oral',
      contenu:
        '« Sur les six dimensions, trois sont réellement structurantes ici. Le politique, parce que les subventions cantonales créent une demande d’entreprise qui n’existait pas. Le technologique, parce que la batterie commande à la fois le coût du vélo et la difficulté de le réparer. Le socioculturel, parce que le client de la mobilité douce devient l’employeur et non plus le particulier. Les trois autres existent, mais elles ne changent pas la décision — et l’énoncé ne dit rien du cadre légal, que je ne vais donc pas inventer. »',
    },
    {
      t: 'question',
      contenu:
        'Le climat est posé. Reste la question qui décide vraiment : dans ce secteur, qui prend l’argent ?',
    },
    {
      t: 'texte',
      contenu:
        'C’est à cela que sert Porter. 📘 Six forces pressent sur la rentabilité d’un secteur : la rivalité entre les concurrents déjà installés, la menace de ceux qui pourraient entrer, le pouvoir des fournisseurs, celui des clients, la menace des substituts — un autre moyen de satisfaire le même besoin — et, le cours l’ajoute explicitement, l’État. Règle de lecture 🔎 : plus une force est puissante, plus elle capte de valeur, et moins il en reste pour les entreprises du secteur. Un secteur où les six forces sont fortes est un secteur où l’on travaille beaucoup pour peu.',
    },
    {
      t: 'observation',
      source:
        'L’étape 0 a séparé deux domaines d’activité : la vente de vélos d’un côté, la réparation et le service de l’autre.',
      conclusion:
        'Donc deux toiles de Porter, pas une. Porter s’applique à un secteur, et deux activités qui n’ont ni les mêmes clients, ni les mêmes concurrents, ni les mêmes facteurs clés de succès ne forment pas un secteur. Une toile unique moyennerait une position faible et une position forte, et ne montrerait rien du tout. C’est ici que le cadrage de l’étape 0 se rentabilise : sans lui, on ferait le mauvais dessin.',
    },
    {
      t: 'tableau',
      entetes: ['Force', 'Vente', 'Réparation', 'Le fait qui justifie la note'],
      lignes: [
        [
          'Rivalité',
          '5',
          '2',
          'Des marques en ligne bien moins chères sur un marché qui ne grandit plus — contre des ateliers de quartier peu outillés',
        ],
        [
          'Nouveaux entrants',
          '4',
          '2',
          'Vendre en ligne demande peu de capital — former un mécanicien qui diagnostique l’électronique demande des années',
        ],
        [
          'Fournisseurs',
          '4',
          '2',
          'Deux sources pour la batterie, pièce la plus chère — les pièces d’entretien, elles, se trouvent partout',
        ],
        [
          'Clients',
          '3',
          '2',
          'Le particulier compare vingt références en dix minutes — celui dont le vélo est immobilisé ne compare pas',
        ],
        [
          'Substituts',
          '3',
          '1',
          'Tram, bus, scooter et trottinette en libre-service, télétravail — mais rien ne remplace la réparation d’un vélo qu’on possède déjà',
        ],
        [
          'État — la 6ᵉ force 📘',
          '2',
          '1',
          'Le canton subventionne plus qu’il ne contraint : ici, l’État joue pour l’entreprise et non contre elle',
        ],
      ],
      legende:
        'Notes de 0 à 5, illustratives 🔎 : elles résument l’argumentation, elles ne la remplacent pas — ce qui compte à l’oral, c’est la colonne de droite. Le résultat est frappant : pression globale forte sur la vente, faible sur la réparation. Les deux profils sont opposés, et l’entreprise fait l’essentiel de son bruit sur le domaine le moins attractif des deux. La conclusion apparaît toute seule, sans qu’on ait eu à la chercher : Atelier Léman se bat sur le mauvais terrain.',
    },
    {
      t: 'renvoi',
      modele: 'porter',
      point: 'attractivite',
      libelle:
        'La case qui explique comment lire une toile : plus le polygone est grand, moins il reste de valeur pour ceux qui sont déjà là.',
    },
    {
      t: 'renvoi',
      modele: 'porter',
      point: 'substituts',
      libelle:
        'La case des substituts, et le test qui évite de les confondre avec les concurrents : même produit, ou seulement même besoin ?',
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit : « depuis deux ans, les ventes de vélos reculent de 8 % » — alors que, dans la même phrase, le canton multiplie les subventions à la mobilité douce.',
      conclusion:
        'Les deux faits semblent se contredire : le marché est porté, et l’entreprise recule. La contradiction se dissout dès qu’on regarde les deux toiles. La demande ne baisse pas ; elle change de forme et de payeur — elle passe du particulier qui achète un vélo à l’employeur qui équipe ses collaborateurs. Le recul de 8 % n’est donc pas un symptôme commercial : c’est le signe que l’entreprise reste positionnée sur le domaine que la demande est en train de quitter. 🔎',
    },
    {
      t: 'renvoi',
      modele: 'porter',
      point: 'etat',
      libelle:
        'La sixième force 📘 — celle qu’on oublie le plus souvent, et qui est ici la plus favorable des six.',
    },
    {
      t: 'oral',
      contenu:
        '« Un même facteur macro peut jouer dans les deux sens, selon la force de Porter qu’il déplace. Les subventions cantonales sont pour nous une opportunité, parce qu’elles rendent solvable une demande d’entreprise qui ne l’était pas. Mais elles rendent aussi ce marché visible et rentable : elles augmentent donc la menace des nouveaux entrants, mieux financés que nous. C’est exactement le type de lien que le PESTEL seul ne produit jamais. »',
    },
    {
      t: 'renvoi',
      modele: 'ocean-bleu-erac',
      point: 'ocean-rouge',
      libelle:
        'La case de l’océan rouge : le marché tel qu’il est, où tout le monde se bat sur les mêmes critères — c’est la toile « vente » d’Atelier Léman.',
    },
    {
      t: 'liste',
      titre:
        'Pression forte sur la vente : faut-il continuer à se battre là ? La matrice ERAC répond en quatre mouvements 🔎',
      items: [
        'Éliminer — que fait tout le secteur sans que ce soit indispensable ? La vente du vélo au client : c’est elle qui bloque son budget et qui nous met face aux marques en ligne.',
        'Réduire — qu’est-ce qui est surdimensionné ? La largeur de gamme et le stock d’exposition, deux coûts que le client ne paie jamais vraiment.',
        'Augmenter — qu’est-ce qui mérite d’être bien meilleur qu’ailleurs ? La disponibilité de l’atelier et le délai d’intervention, c’est-à-dire le terrain où l’entreprise est déjà forte.',
        'Créer — qu’est-ce qui n’existe nulle part ? Un abonnement mobilité tout compris facturé à l’entreprise : vélo, entretien, remplacement et assistance dans un seul prix mensuel.',
        '⚠ Ne faire que « Créer » est l’erreur type : sans les deux premiers mouvements, les coûts montent avec la valeur et l’innovation cesse d’être rentable. 📘 Le cours cite le Cirque du Soleil, qui a supprimé des attributs traditionnels du cirque tout en renforçant l’expérience artistique.',
      ],
    },
    {
      t: 'encadre',
      ton: 'alerte',
      titre: 'ERAC — deux formulations dans les supports 📘',
      contenu:
        'Le Cours 3 écrit Éliminer – Réduire – Augmenter – Créer. Le cours « Business model durable » écrit Exclure – Renforcer – Atténuer – Créer. Le R et le A changent donc de sens d’un support à l’autre : « réduire » devient « renforcer », « augmenter » devient « atténuer ». Les quatre mouvements, eux, sont identiques — deux qui font baisser les coûts, deux qui font monter la valeur. À l’oral : énoncer le mouvement avant la lettre — « j’élimine, c’est-à-dire j’exclus, la vente du vélo » — et signaler la double formulation. C’est plus sûr que de parier sur les initiales, et cela prouve qu’on a lu les deux sources.',
    },
    {
      t: 'oral',
      contenu:
        '« Mon diagnostic externe tient en trois phrases. Un : le macro joue pour nous — les subventions cantonales créent une demande d’entreprise solvable, et la mobilité douce devient un sujet d’employeur. Deux : le micro joue contre nous, mais sur un seul de nos deux domaines — la vente est un océan rouge, avec une rivalité et des barrières à l’entrée qui nous désavantagent, tandis que la réparation est un domaine nettement plus protégé. Trois : le facteur qui décide, c’est la batterie, parce qu’elle est à la fois notre dépendance amont et la raison pour laquelle notre atelier est difficile à imiter. J’en retiens quatre facteurs clés de succès pour ce secteur, que je vais maintenant confronter à ce que l’entreprise sait faire. »',
    },
  ],

  // -------------------------------------------------------------------------
  // Le livrable : le brouillon, tel qu'on l'a écrit
  // -------------------------------------------------------------------------
  livrable: {
    titre: 'Brouillon — fin de l’étape 1',
    lignes: [
      'PÉRIMÈTRE — mobilité douce professionnelle, canton de Genève',
      '',
      'PESTEL — les 3 facteurs qui décident',
      '  P  subventions cantonales B2B → demande solvable qui n’existait pas',
      '  T  batterie = pièce critique → coût + réparation difficile',
      '  S  la mobilité douce devient un sujet d’employeur',
      '  E / É / L  cités, non déterminants — L non renseigné dans l’énoncé',
      '',
      'PORTER — deux domaines, deux toiles (0 à 5, illustratif)',
      '  VENTE       riv. 5 · entrants 4 · fourn. 4 · clients 3 · subst. 3 · État 2 → FORTE',
      '  RÉPARATION  riv. 2 · entrants 2 · fourn. 2 · clients 2 · subst. 1 · État 1 → FAIBLE',
      '',
      'OPPORTUNITÉS',
      '  O1  subventions cantonales → marché B2B solvable      [majeure]',
      '  O2  employeurs genevois acquis à la mobilité douce',
      '  O3  électronique embarquée → barrière à l’entrée haute en réparation',
      '',
      'MENACES',
      '  M1  marques en ligne low-cost sur la vente             [majeure]',
      '  M2  deux fournisseurs sur la batterie                  [majeure]',
      '  M3  le marché subventionné attire mieux financé que nous',
      '  M4  substituts : TPG, scooters et trottinettes partagés, télétravail',
      '',
      'CONSTAT DE STRUCTURE',
      '  Les deux domaines ont des profils OPPOSÉS — on fait du chiffre sur le mauvais.',
      '',
      'FCS DU SECTEUR → à vérifier en interne, étape 2',
      '  1. diagnostiquer et réparer l’électronique embarquée',
      '  2. être à quelques minutes du client (un vélo immobilisé ne voyage pas)',
      '  3. savoir vendre à une entreprise : contrat, disponibilité garantie',
      '  4. pouvoir financer un parc qu’on ne vend plus',
    ],
  },

  // -------------------------------------------------------------------------
  // Les pièges propres à cette étape
  // -------------------------------------------------------------------------
  pieges: [
    {
      titre: 'Mettre la concurrence dans le PESTEL',
      explication:
        'C’est l’erreur numéro un. On écrit « Économique : arrivée de marques low-cost », et on vient de confondre les deux niveaux du diagnostic. Une marque concurrente est un acteur du secteur : elle relève du micro, donc de Porter. Le PESTEL ne parle jamais de quelqu’un en particulier.',
      reflexe:
        'Un test unique : le fait désigne-t-il quelqu’un qui se bat contre nous ? Si oui, il va dans Porter. Si c’est un climat que tout le secteur subit, il va dans le PESTEL.',
    },
    {
      titre: 'Nommer un thème sans écrire la chaîne',
      explication:
        '« Technologique : les batteries. » Et alors ? Un mot posé dans une case ne dit ni ce qui change, ni pour qui, ni dans quel sens. C’est le défaut qui fait qu’un PESTEL de vingt lignes peut ne rien valoir.',
      reflexe:
        'Quatre maillons obligatoires, à chaque fois : le fait, ce qu’il change, la conséquence pour le secteur, l’opportunité ou la menace pour cette entreprise-là.',
    },
    {
      titre: 'Qualifier un facteur d’opportunité sans dire pour qui',
      explication:
        'Un facteur externe n’est une opportunité ni une menace en soi 🔎 : il le devient pour une entreprise donnée. La hausse de la demande locale est une opportunité pour un producteur suisse et une menace pour un importateur lointain. « Sensibilité écologique → opportunité » ne prouve aucune analyse.',
      reflexe:
        'Terminer chaque ligne par « … pour Atelier Léman, parce que… ». Si la phrase ne se termine pas, c’est que le raisonnement n’est pas fini.',
    },
    {
      titre: 'Faire un seul Porter pour deux domaines d’activité',
      explication:
        'Porter s’applique à un secteur. Mélanger la vente et la réparation revient à faire la moyenne d’une position faible et d’une position forte : la toile devient tiède et ne dit plus rien. Or c’est justement l’écart entre les deux toiles qui contient la réponse au cas.',
      reflexe:
        'Une toile par domaine identifié à l’étape 0, puis une phrase de comparaison. Cette phrase vaut souvent à elle seule plus que les douze notes qui la précèdent.',
    },
    {
      titre: 'Confondre concurrent et substitut',
      explication:
        'Concurrent = même produit, autre marque. Substitut = même besoin, autre solution. 📘 Une autre marque de vélo électrique est un concurrent ; le tram, le scooter en libre-service et le télétravail sont des substituts. Les confondre vide les deux forces de leur sens.',
      reflexe:
        'Formuler le besoin sans le produit : ici « se déplacer en ville », et non « avoir un vélo ». Toutes les réponses à ce besoin qui viennent d’un autre métier sont des substituts.',
    },
    {
      titre: 'Inventer un fait pour remplir une case',
      explication:
        'Les six lettres du PESTEL donnent envie d’être toutes servies. On se souvient alors d’une norme, d’une crise, d’une statistique — et on l’ajoute au cas. Un examinateur repère immédiatement le fait qui ne vient pas de l’énoncé, et tout le reste devient suspect.',
      reflexe:
        'Annoncer la case vide, puis proposer l’hypothèse comme hypothèse : « l’énoncé ne dit rien du cadre légal ; si les règles sur les déchets électroniques se durcissaient, l’effet serait double ». On garde le raisonnement et on perd la fausse certitude.',
    },
    {
      titre: 'Oublier la sixième force',
      explication:
        '📘 Le cours ajoute l’État aux cinq forces classiques, et en Suisse il est souvent décisif. L’oublier ici reviendrait à passer à côté du fait le plus favorable du cas : c’est le canton qui crée le marché B2B dont dépend toute la recommandation finale.',
      reflexe:
        'Après les cinq forces, poser systématiquement la question : « l’État change-t-il les règles du jeu de ce secteur — et joue-t-il pour moi ou contre moi ? »',
    },
  ],
}
