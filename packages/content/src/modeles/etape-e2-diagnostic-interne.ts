import type { EtapeAnalyse } from './types'

export const etape: EtapeAnalyse = {
  id: 'e2',
  numero: 2,
  slug: 'diagnostic-interne',
  titre: 'Le diagnostic interne',
  question:
    'De quoi cette entreprise est-elle réellement capable, et son avantage tiendra-t-il ?',
  entree:
    'Les opportunités et les menaces hiérarchisées de l’étape 1 — et, derrière elles, ce que le marché genevois de la mobilité douce exige de savoir faire pour y réussir.',
  sortie:
    'Trois forces et trois faiblesses hiérarchisées, chacune avec son verdict de durée, et un constat qui oriente tout le reste : chez Atelier Léman la valeur est logée dans le service et dans les gens, pas dans le vélo vendu.',
  minutes: '3:30 – 5:00',
  modeles: ['ressources-competences', 'chaine-de-valeur'],

  methode: [
    {
      titre: 'Reprendre ce que l’étape 1 a révélé, et en faire une liste de contrôle',
      detail:
        'Le diagnostic externe a montré ce qu’il faut maîtriser pour réussir sur ce marché — on appelle cela les facteurs clés de succès. On les reprend un par un et on pose une seule question à chaque fois : « le détenons-nous ? ». C’est ce qui empêche de partir dans un inventaire sans fin : on ne cherche pas tout ce que l’entreprise possède, on cherche ce qui compte ici. 🔎',
      aEviter:
        'Écrire en force ce qui est un facteur clé de succès. « La réputation compte beaucoup dans ce secteur » est de l’externe. « Notre réputation est excellente » est de l’interne. Confondre les deux fait perdre des points à coup sûr.',
    },
    {
      titre: 'Vider l’énoncé de ses noms — ce sont les ressources',
      detail:
        'Une ressource est ce que l’entreprise possède ou contrôle : un atelier, une trésorerie, une marque, un fichier clients. 📘 Le cours parle d’actifs matériels ou immatériels que l’entreprise va pouvoir déployer et valoriser. Test simple : une ressource se dit avec un nom.',
      aEviter:
        'Recopier les mots de l’énoncé en colonne sans les classer. Une liste non qualifiée ne produit ni force ni faiblesse.',
    },
    {
      titre: 'Chercher les verbes — ce sont les compétences',
      detail:
        'Une compétence est ce que l’entreprise sait faire de ses ressources. 📘 Le cours la définit comme la faculté de combiner et de coordonner des ressources en vue de leur valorisation. Test simple : une compétence se dit avec un verbe — diagnostiquer, fidéliser, négocier.',
      aEviter:
        'Transformer mécaniquement chaque ressource en compétence. Posséder un banc de diagnostic ne prouve pas qu’on sait s’en servir mieux que le voisin.',
    },
    {
      titre: 'Qualifier chaque ligne avec deux questions, pas une',
      detail:
        'Première question : la ressource est-elle tangible (on la compte, on l’évalue) ou intangible (réputation, culture, savoir-faire) ? 📘 Le cours appelle l’intangible la « richesse cachée » de l’entreprise. Seconde question, la seule qui décide de la durée : est-elle transférable — peut-on l’acheter à l’extérieur — et imitable — un concurrent peut-il la refaire ?',
      aEviter:
        'Confondre tangible et transférable. Les ressources humaines sont tangibles et pourtant peu transférables : personne n’achète une équipe soudée.',
    },
    {
      titre: 'Poser la chaîne de valeur et noter chaque maillon relativement',
      detail:
        'Neuf cases : cinq activités principales (logistique amont, production, logistique aval, marketing et ventes, services) et quatre activités de soutien (infrastructure, ressources humaines, développement technologique, approvisionnements). On donne une note à chacune, toujours face au meilleur concurrent présent sur le marché visé, jamais dans l’absolu. Une case forte devient une force, une case faible devient une faiblesse.',
      aEviter:
        'Décrire les neuf cases. 📘 Décrire n’est pas analyser : la chaîne de valeur sert à répondre à « où sommes-nous meilleurs ? » et « où sommes-nous moins bons ? », pas à réciter un schéma.',
    },
    {
      titre: 'Tester la durée de l’avantage — sur la combinaison, jamais sur un élément isolé',
      detail:
        '📘 Plus une ressource est immatérielle et liée aux processus internes, moins elle peut faire l’objet d’échange ou d’imitation. On prend donc l’ensemble qui produit l’avantage — outil plus données plus équipe plus réputation — et on demande : un concurrent bien financé rachète-t-il tout cela en douze mois ? Si oui, l’avantage est temporaire. Si non, il est durable.',
      aEviter:
        'Appeler avantage durable une technologie qui s’achète. Un logiciel ou un robot que le concurrent commande le lendemain n’est pas un avantage : c’est un coût d’entrée dans le métier.',
    },
    {
      titre: 'Hiérarchiser, puis s’arrêter',
      detail:
        'Trois forces et trois faiblesses au maximum, rangées de la plus décisive à la moins décisive, chacune tenant en une ligne. C’est cette liste courte, et elle seule, qui part dans le SWOT à l’étape suivante.',
      aEviter:
        'Rendre douze lignes de même poids. Un jury ne retient pas douze éléments : il retient celui qu’on a placé en premier.',
    },
  ],

  raisonnement: [
    {
      t: 'texte',
      contenu:
        'L’étape 1 vient de dire ce que le marché impose : des subventions genevoises qui solvabilisent une demande d’entreprise, des marques en ligne qui cassent les prix, deux fournisseurs de batteries en position de force. Rien de tout cela ne se décide depuis Carouge. L’étape 2 retourne la lunette et pose la seule question qui reste : avec quoi répond-on ? Le geste est très mécanique pour commencer — on relit l’énoncé et on le vide de ses noms, puis de ses verbes. Les noms sont les ressources, ce que l’entreprise possède. Les verbes sont les compétences, ce qu’elle sait en faire. Deux ateliers équipés à l’identique ne réparent pas au même niveau : toute la distinction tient là. 🔎',
    },
    {
      t: 'encadre',
      ton: 'info',
      titre: 'La définition du cours, mot à mot 📘',
      contenu:
        '« Le diagnostic interne est la démarche qui va aboutir à l’identification des forces et faiblesses d’une organisation à un moment donné. L’idée consiste à trouver des axes d’amélioration pour se démarquer de la concurrence et optimiser la compétitivité de l’entreprise. » Trois morceaux méritent qu’on s’arrête. « À un moment donné » : c’est une photographie, pas une prophétie — une force peut cesser d’en être une. « Se démarquer de la concurrence » : une force se juge par comparaison, jamais dans l’absolu. Et le cours ajoute « des activités principales aux activités de soutien », ce qui annonce déjà le second outil de l’étape : la chaîne de valeur.',
    },
    {
      t: 'question',
      contenu:
        '« Nos mécaniciens sont bons » : est-ce une force ?',
    },
    {
      t: 'encadre',
      ton: 'alerte',
      titre: 'Non — et c’est l’erreur la plus fréquente de l’étape',
      contenu:
        'Bons par rapport à qui ? Tant que la comparaison manque, la phrase est un compliment, pas un diagnostic. La version utilisable existe pourtant dans l’énoncé : « ils diagnostiquent en vingt minutes une panne électronique que les ateliers de quartier ne savent pas traiter ». Même fait, mais mesuré contre un concurrent nommé. 🔎 Retiens la règle : une force est toujours une force par rapport à quelqu’un.',
    },
    {
      t: 'renvoi',
      modele: 'ressources-competences',
      point: 'ressources',
      libelle: 'Ce que l’entreprise possède — la case « Ressources » du modèle 5',
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit : « elle répare et entretient des vélos de toutes marques, dans deux ateliers situés à Carouge et à Plainpalais ».',
      conclusion:
        'Deux ateliers, c’est une ressource physique : un nom, un actif, quelque chose qui figure au bilan et qu’un expert saurait chiffrer. Or ce qui s’évalue facilement s’achète facilement : un concurrent qui lève des fonds ouvre deux locaux à Genève en six mois. On note donc la ressource — elle est réelle — mais on sait déjà qu’elle ne fondera aucun avantage à elle seule.',
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit : « ils diagnostiquent des pannes électroniques que les ateliers de quartier ne savent pas traiter ».',
      conclusion:
        'Un verbe, donc une compétence et non une ressource. Et une compétence déjà formulée relativement, puisque l’énoncé nomme lui-même celui qui ne sait pas faire. C’est la seule ligne du cas qui soit d’emblée une force au sens du cours : elle passe le test du « par rapport à qui ». On la met en tête de liste sans hésiter.',
    },
    {
      t: 'renvoi',
      modele: 'ressources-competences',
      point: 'competences',
      libelle: 'Combiner et déployer les ressources — la case « Compétences »',
    },
    {
      t: 'tableau',
      entetes: ['Ce que dit l’énoncé', 'Ce que c’est', 'Le verdict de durée'],
      lignes: [
        ['« deux ateliers, Carouge et Plainpalais »', 'Ressource physique, tangible', 'Se loue, s’équipe → transférable'],
        ['« 6,2 M CHF de chiffre d’affaires »', 'Ressource financière, tangible', 'Se prête, se lève → transférable'],
        ['« 45 salariés, l’équipe est stable »', 'Ressource humaine, tangible', 'Ne se rachète pas → peu transférable'],
        ['« sa marque est connue localement »', 'Ressource de réputation, intangible', 'Quinze ans de bouche-à-oreille → peu imitable'],
        ['« ils diagnostiquent des pannes électroniques »', 'Compétence opérationnelle', 'Logée dans les personnes → peu imitable'],
        ['« batteries achetées à deux fournisseurs »', 'Ressource critique non contrôlée', 'Subie, jamais traitée → faiblesse'],
        ['Aucune vente en ligne nulle part dans l’énoncé', 'Compétence absente', 'Un manque se note aussi → faiblesse'],
      ],
      legende:
        'Colonne 1 : les mots de l’énoncé, recopiés tels quels — c’est ce qui rend l’analyse vérifiable. Colonne 2 : la case du modèle, nom pour une ressource, verbe pour une compétence. Colonne 3 : le seul critère que le cours retient pour juger la durée. 📘 🔎',
    },
    {
      t: 'encadre',
      ton: 'alerte',
      titre: 'Tangible n’est pas transférable — deux axes, pas un seul',
      contenu:
        'On croit lire un seul curseur, il y en a deux. Les ressources humaines sont tangibles — on compte quarante-cinq salariés — et pourtant peu transférables : personne n’achète une équipe soudée. 📘 Le critère du cours pour juger si un avantage tiendra n’est donc pas la tangibilité, c’est la transférabilité (peut-on l’acquérir à l’extérieur de l’entreprise ?) et l’imitabilité (un concurrent peut-il la refaire ?). 📚 La grille VRIO, très répandue ailleurs, est absente de ce cours : on peut la mentionner comme apport personnel, jamais comme du cours.',
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit : « les batteries, composant le plus cher et le plus critique du vélo, sont achetées à deux fournisseurs asiatiques ».',
      conclusion:
        'À l’étape 1, cette phrase servait à mesurer le pouvoir de négociation des fournisseurs — une pression venue du dehors, que l’entreprise subit. Ici elle dit autre chose : aucun second fournisseur, aucun contrat de durée, aucun plan de repli. Ce n’est plus seulement une pression, c’est une dépendance que l’entreprise n’a jamais traitée, donc une faiblesse interne. Le même fait sert deux fois, et pas pour dire la même chose : c’est exactement ce qu’un jury attend. 🔎',
    },
    {
      t: 'question',
      contenu:
        'On sait maintenant ce que l’entreprise possède et ce qu’elle sait faire. Mais où, dans son fonctionnement quotidien, cette valeur se crée-t-elle vraiment ?',
    },
    {
      t: 'texte',
      contenu:
        'C’est précisément la question de la chaîne de valeur. 📘 Elle décompose l’activité en étapes et fonctions qui génèrent des coûts et contribuent à la valeur finale de l’offre, et permet d’identifier les activités dans lesquelles l’entreprise se distingue et celles qu’elle doit améliorer. Cinq activités principales — faire entrer les ressources (logistique amont), transformer (production), faire sortir (logistique aval), convaincre d’acheter (marketing et ventes), accompagner après la vente (services) — surmontées de quatre activités de soutien qui les traversent toutes : infrastructure, ressources humaines, développement technologique, approvisionnements. On note chaque case face au meilleur concurrent présent sur le marché visé. Une case forte deviendra une force, une case faible une faiblesse : c’est là tout l’intérêt de l’outil.',
    },
    {
      t: 'tableau',
      entetes: ['Maillon', 'Note', 'Pourquoi cette note'],
      lignes: [
        ['Logistique amont — principale', '2 / 5', 'Réception et stock suspendus à deux fournisseurs'],
        ['Production — principale', '3 / 5', 'Assemblage correct, rien de distinctif'],
        ['Logistique aval — principale', '3 / 5', 'Livraison locale, sans difficulté ni avantage'],
        ['Marketing et ventes — principale', '2 / 5', 'Presque rien face aux marques en ligne'],
        ['Services — principale', '5 / 5', 'Diagnostic électronique toutes marques, en vingt minutes'],
        ['Infrastructure — soutien', '3 / 5', 'Structure de PME, ni lourde ni sophistiquée'],
        ['Ressources humaines — soutien', '4 / 5', 'Mécaniciens fidèles, formation assurée en interne'],
        ['Développement technologique — soutien', '2 / 5', 'Aucune offre nouvelle depuis deux ans'],
        ['Approvisionnements — soutien', '2 / 5', 'Deux fournisseurs, aucun plan de repli'],
      ],
      legende:
        'Notes illustratives, de 0 à 5, toujours attribuées face au meilleur atelier ou à la meilleure marque en ligne présents à Genève — jamais dans l’absolu. La note n’a aucune valeur en soi : ce qui compte, c’est l’écart entre les maillons. 🔎',
    },
    {
      t: 'renvoi',
      modele: 'chaine-de-valeur',
      point: 'services',
      libelle: 'Services — le maillon qui porte tout, chez Atelier Léman',
    },
    {
      t: 'observation',
      source:
        'Les deux notes les plus basses du tableau sont Approvisionnements (2 sur 5) et Marketing et ventes (2 sur 5).',
      conclusion:
        'Ce sont exactement les deux maillons dont dépend l’activité de vente de vélos : acheter les batteries, puis convaincre un particulier d’acheter le vélo. Autrement dit, l’option « défendre la vente » s’appuierait sur les deux points les plus faibles de l’entreprise, pendant que le seul maillon noté 5 sur 5 resterait accessoire. Le diagnostic ne tranche pas encore — ce sera le rôle du SWOT croisé puis du SAF — mais il vient de rendre une option nettement plus coûteuse à défendre que l’autre.',
    },
    {
      t: 'encadre',
      ton: 'alerte',
      titre: 'Deux libellés qui varient, un piège qui ne varie pas 📘',
      contenu:
        'Le support écrit « développement technologique » (slides 23 et 24) et « recherche et développement » (slide 21) pour la même case ; puis « approvisionnements », « achats » et « l’approvisionnement » au singulier pour la suivante. Ce ne sont pas des fautes du support, et il ne faut surtout pas les uniformiser : en citer deux prouve qu’on a lu les slides et rapporte des points. En revanche, ne confonds jamais les deux niveaux : les achats sont une activité de soutien — sélectionner et négocier avec un fournisseur — tandis que la logistique amont est une activité principale — réceptionner, stocker, manipuler ce qui a été acheté. Fonction de décision d’un côté, flux physique de l’autre.',
    },
    {
      t: 'renvoi',
      modele: 'chaine-de-valeur',
      point: 'approvisionnements',
      libelle: 'Approvisionnements — le maillon de soutien qui bloque une option',
    },
    {
      t: 'question',
      contenu:
        'Reste la question qui décide de tout : cet avantage tiendra-t-il, ou sera-t-il copié dans l’année ?',
    },
    {
      t: 'schema',
      schema: {
        h: 640,
        description:
          'Quatre éléments internes d’Atelier Léman convergent vers une combinaison unique, qu’un test de transférabilité et d’imitabilité sépare ensuite en avantage temporaire et avantage durable.',
        noeuds: [
          {
            id: 'banc',
            titre: 'Le banc de diagnostic',
            lignes: ['un équipement, tangible'],
            x: 40,
            y: 40,
            l: 185,
            h: 110,
          },
          {
            id: 'histo',
            titre: '15 ans de pannes archivées',
            lignes: ['un historique, intangible'],
            x: 285,
            y: 40,
            l: 185,
            h: 110,
          },
          {
            id: 'equipe',
            titre: 'L’équipe formée en interne',
            lignes: ['humaine, peu transférable'],
            x: 530,
            y: 40,
            l: 185,
            h: 110,
          },
          {
            id: 'repute',
            titre: 'La réputation genevoise',
            lignes: ['intangible, peu imitable'],
            x: 775,
            y: 40,
            l: 185,
            h: 110,
          },
          {
            id: 'combi',
            titre: 'LA COMBINAISON DES QUATRE',
            lignes: ['c’est elle qu’on teste,', 'jamais un élément isolé'],
            x: 290,
            y: 200,
            l: 420,
            h: 110,
            ton: 'accent',
          },
          {
            id: 'test',
            titre: 'TRANSFÉRABLE ? IMITABLE ?',
            lignes: ['un concurrent l’achète-t-il ?'],
            x: 290,
            y: 360,
            l: 420,
            h: 110,
            forme: 'losange',
            ton: 'alerte',
          },
          {
            id: 'temporaire',
            titre: 'Un élément seul → TEMPORAIRE',
            lignes: ['oui — il s’achète en six mois'],
            x: 40,
            y: 520,
            l: 420,
            h: 110,
            ton: 'danger',
          },
          {
            id: 'durable',
            titre: 'La combinaison → DURABLE',
            lignes: ['non — ni achetable, ni copiable', 'à douze mois'],
            x: 540,
            y: 520,
            l: 420,
            h: 110,
            ton: 'positif',
          },
        ],
        liens: [
          { de: 'banc', vers: 'combi' },
          { de: 'histo', vers: 'combi' },
          { de: 'equipe', vers: 'combi' },
          { de: 'repute', vers: 'combi' },
          { de: 'combi', vers: 'test' },
          { de: 'test', vers: 'temporaire', libelle: 'oui', ton: 'danger' },
          { de: 'test', vers: 'durable', libelle: 'non', ton: 'positif' },
        ],
        note:
          'Le test ne porte jamais sur un élément pris seul : ce qu’un concurrent devrait racheter, c’est l’ensemble — et c’est l’ensemble qui ne se rachète pas. 🔎',
      },
    },
    {
      t: 'renvoi',
      modele: 'ressources-competences',
      point: 'test',
      libelle: 'Transférable ? Imitable ? — le losange qui sépare le temporaire du durable',
    },
    {
      t: 'observation',
      source:
        'L’énoncé dit : « fondée il y a quinze ans », et plus loin « l’équipe est stable et se forme en interne ».',
      conclusion:
        'Deux marqueurs de temps, faciles à survoler, et pourtant décisifs. Ils disent qu’un concurrent bien financé peut commander demain le même banc de diagnostic, mais qu’il lui manquera quinze ans de pannes archivées et une équipe formée maison. 📘 Plus les ressources sont immatérielles et liées aux processus, moins elles peuvent faire l’objet d’échange ou d’imitation. La combinaison n’est donc ni achetable ni reconstituable à douze mois : l’avantage d’Atelier Léman est durable, et c’est le seul élément du cas dont on puisse le dire.',
    },
    {
      t: 'encadre',
      ton: 'info',
      titre: 'Ici, « durable » ne veut pas dire écologique',
      contenu:
        'Piège de vocabulaire, et il coûte cher. Dans « avantage concurrentiel durable », durable signifie qui se maintient dans le temps — la pérennité. Dans « business model durable », que l’étape suivante va croiser, durable signifie compatible avec les limites sociales et écologiques — la soutenabilité. Les deux sens cohabitent dans le cours, aucun n’est faux ; c’est le contexte qui tranche, et le dire au jury montre qu’on a vu le double emploi. 🔎',
    },
    {
      t: 'liste',
      titre: 'Ce qui bascule dans le SWOT — hiérarchisé, jamais en vrac',
      items: [
        'Force 1, majeure — savoir diagnostiquer et réparer toutes marques, électronique comprise, là où les ateliers de quartier renoncent.',
        'Force 2, majeure — quinze ans de réputation genevoise : une ressource intangible, absente des comptes, et peu imitable.',
        'Force 3 — une équipe de mécaniciens stable et formée en interne, tangible à compter mais impossible à racheter telle quelle.',
        'Faiblesse 1, majeure — deux fournisseurs asiatiques pour les batteries, sans second fournisseur ni contrat de durée.',
        'Faiblesse 2 — marketing et présence en ligne quasi inexistants, au moment précis où les marques low-cost arrivent par là.',
        'Faiblesse 3 — développement technologique presque nul : aucune offre nouvelle depuis deux ans.',
        'Verdict de durée — la combinaison atelier plus historique plus équipe plus réputation n’est ni transférable ni imitable à douze mois : elle peut fonder un avantage concurrentiel durable.',
      ],
    },
    {
      t: 'oral',
      contenu:
        'Le banc de diagnostic n’est pas l’avantage d’Atelier Léman : n’importe quel concurrent l’achète, c’est un ticket d’entrée dans le métier. L’avantage, c’est la combinaison de cet outil avec quinze ans de pannes archivées, une équipe formée en interne et une réputation genevoise — et cette combinaison-là n’est ni transférable ni imitable à douze mois, donc elle tient. Ce qui m’amène au point décisif du diagnostic interne : les deux maillons les plus faibles de la chaîne de valeur, les approvisionnements et le marketing, sont exactement ceux dont dépend la vente de vélos, tandis que le seul maillon noté au maximum, les services, est le seul qu’aucun concurrent ne peut acheter.',
    },
  ],

  livrable: {
    titre: 'Le brouillon, à la fin de l’étape 2',
    lignes: [
      'FORCES — hiérarchisées',
      '1. Diagnostic et réparation toutes marques → majeure, peu imitable',
      '2. Réputation locale, 15 ans → majeure, peu imitable',
      '3. Équipe stable, formée en interne → peu transférable',
      'FAIBLESSES — hiérarchisées',
      '1. Dépendance à 2 fournisseurs de batteries → majeure, bloque la vente',
      '2. Marketing et vente en ligne → insuffisants face au low-cost',
      '3. Développement technologique → quasi nul, rien de neuf en 2 ans',
      'CHAÎNE DE VALEUR — le profil en une ligne',
      'Haut : Services 5/5 · RH 4/5 — Bas : Approvisionnements, Marketing, Dév. techno 2/5',
      '(notes illustratives, face au meilleur concurrent genevois)',
      'TEST DE DURÉE',
      'Banc de diagnostic seul → s’achète → avantage temporaire',
      'Banc + 15 ans de pannes + équipe + réputation → non imitable → DURABLE',
      'CE QUE ÇA IMPOSE À LA SUITE',
      'La valeur est dans le service et dans les gens, pas dans le vélo vendu.',
      'Défendre la vente = s’appuyer sur les 2 maillons les plus faibles.',
    ],
  },

  pieges: [
    {
      titre: 'Juger une force dans l’absolu',
      explication:
        '« Nos mécaniciens sont bons », « notre équipe est sérieuse », « bonne ambiance » : ce sont des adjectifs, pas un diagnostic. 📘 Le cours dit que le diagnostic interne sert à « se démarquer de la concurrence » — donc toute force non comparée est vide.',
      reflexe:
        'Après chaque force écrite, ajouter mentalement « … mieux que qui, et de combien ? ». Si la réponse ne vient pas, la ligne n’est pas une force.',
    },
    {
      titre: 'Confondre ressource et compétence',
      explication:
        'Posséder un banc de diagnostic électronique et savoir s’en servir mieux que les autres sont deux choses différentes. La première est une ressource, la seconde une compétence — et c’est la seconde qui explique pourquoi deux ateliers équipés à l’identique ne réparent pas au même niveau.',
      reflexe:
        'Le test grammatical : nom = ressource, verbe = compétence. 🔎 « Un atelier » contre « diagnostiquer une panne ».',
    },
    {
      titre: 'Ne voir que ce qui figure au bilan',
      explication:
        '📘 Le cours appelle l’immatériel la « richesse cachée » de l’entreprise : réputation, culture, organisation, savoir-faire. Un diagnostic qui ne liste que les locaux, les machines et la trésorerie passe précisément à côté de ce qui fonde l’avantage, puisque c’est ce qui se copie le moins.',
      reflexe:
        'Se forcer à écrire au moins deux ressources intangibles avant de conclure l’inventaire. Chez Atelier Léman, la marque et l’historique de pannes.',
    },
    {
      titre: 'Appeler avantage durable une technologie qui s’achète',
      explication:
        'Si le concurrent passe commande et l’obtient, ce n’est pas un avantage : c’est un coût d’entrée dans le métier. 📘 L’avantage tient à la transférabilité et à l’imitabilité, pas à la sophistication de l’outil.',
      reflexe:
        'Poser la question à voix haute : « un concurrent capitalisé peut-il faire pareil en douze mois ? » Puis tester la combinaison, jamais l’élément isolé.',
    },
    {
      titre: 'Réciter les neuf cases de la chaîne de valeur',
      explication:
        'Décrire ce qu’est la logistique amont ne rapporte rien : le jury connaît le modèle. 📘 L’outil sert à identifier les activités où l’entreprise se distingue et celles qu’elle doit améliorer — donc à produire des forces et des faiblesses.',
      reflexe:
        'Ne prononcer que trois cases : la plus forte, la plus faible, et celle qui décide de l’option envisagée.',
    },
    {
      titre: 'Ranger les achats dans la logistique amont',
      explication:
        'Ce sont deux niveaux différents du même schéma. 📘 Les achats ou approvisionnements sont une activité de soutien : sélectionner et négocier. La logistique amont est une activité principale : réceptionner, stocker, manipuler.',
      reflexe:
        'Fonction de décision → soutien. Flux physique → principale. Chez Atelier Léman, le problème des deux fournisseurs est un problème d’achats, donc de soutien.',
    },
    {
      titre: 'Oublier que le problème est souvent en amont de l’entreprise',
      explication:
        'Une chaîne de valeur impeccable peut coexister avec une dépendance ou un impact désastreux, parce que le maillon fautif se trouve chez le fournisseur. 🔎 C’est le système de valeur : fournisseurs, entreprise, distributeurs, clients.',
      reflexe:
        'Après les neuf cases, remonter d’un cran : d’où viennent les batteries, dans quelles conditions, et que se passe-t-il si l’un des deux fournisseurs disparaît ?',
    },
  ],
}
