import type { EtapeAnalyse } from './types'

/**
 * ÉTAPE 8 — RESTITUER À L’ORAL
 * ============================
 *
 * La dernière étape de l’analyse guidée, et la seule qui ne cherche rien : tout
 * a été trouvé aux étapes précédentes. Celle-ci apprend à faire entendre le
 * raisonnement en dix minutes, après l’avoir structuré en dix minutes.
 *
 * Source principale : la fiche de méthode P10 « Piloter l’oral ». Le format —
 * dix minutes plus dix minutes, 40 % de la note — vient du cours 📘 ; le
 * découpage minute par minute est un guide de préparation reconstruit 🔎.
 */
export const etape: EtapeAnalyse = {
  id: 'e8',
  numero: 8,
  slug: 'restituer',
  titre: 'Restituer à l’oral',

  question:
    "Comment gérer les 10 minutes de préparation et les 10 minutes de passage ?",

  entree:
    'Toute l’analyse tient désormais sur une feuille : le problème reformulé, le périmètre, les opportunités et les menaces, les forces et les faiblesses, les quatre croisements, l’option retenue au SAF, la recommandation et ses indicateurs — jusqu’aux conditions de durabilité et à l’arbitrage numérique ajoutés en dernier. Rien n’a encore été prononcé, et c’est tout ce qui reste à faire.',

  sortie:
    'Un exposé de dix minutes tenu de bout en bout : ouvert sur le problème reformulé, refermé sur la tension du cas plutôt que sur un résumé — et un jury qui prend la parole à son tour pour ses relances.',

  minutes: "10 + 10",

  modeles: [
    'perimetre',
    'pestel',
    'porter',
    'ressources-competences',
    'chaine-de-valeur',
    'rcov',
    'swot',
    'saf',
  ],

  /* ------------------------------------------------------------- Méthode */

  methode: [
    {
      titre: 'Tracer la grille avant de la remplir',
      detail:
        'Les vingt premières secondes ne servent pas à analyser : elles servent à poser sur la feuille les cases qu’on va remplir — problème, décision, périmètre, domaines d’activité, externe, interne, croisements, options, décision, indicateurs, tension. Une page déjà structurée se remplit dans le désordre sans qu’on s’y perde, parce que chaque idée sait où aller. Une page blanche se remplit dans l’ordre où les idées arrivent, c’est-à-dire dans le désordre.',
      aEviter:
        'Écrire la première idée qui vient avant d’avoir tracé les cases. On la retrouve ensuite au milieu de la feuille, sans voisins.',
    },
    {
      titre: 'Souligner la phrase qui contient la décision',
      detail:
        'Presque tout énoncé contient une phrase qui dit ce qu’il faut trancher — souvent la dernière, souvent construite avec « ou ». C’est la consigne réelle, celle sur laquelle l’exposé sera jugé. On la souligne avant d’écrire quoi que ce soit d’autre, et on y revient chaque fois qu’on se demande si un développement mérite d’être dit.',
      aEviter:
        'Traiter l’énoncé comme une description à résumer. Un énoncé de cas n’appelle jamais un portrait d’entreprise : il appelle un choix.',
    },
    {
      titre: 'Structurer, jamais rédiger',
      detail:
        'On écrit des mots-clés et des flèches. Les flèches sont le plus important : ce sont elles, et non les mots, qui portent le raisonnement — « ce facteur → cette force → cette menace ». Dix minutes ne suffisent pas à écrire des phrases, et un candidat qui a des phrases sous les yeux finit toujours par les lire.',
      aEviter:
        'Rédiger l’introduction en toutes lettres. C’est la seule exception tolérable — et encore, sous forme de trois mots-clés, pas d’un paragraphe.',
    },
    {
      titre: 'Hiérarchiser sur le brouillon, pas au micro',
      detail:
        'Un outil se remplit largement puis se restitue étroitement. On remplit les six lettres du PESTEL si elles viennent, puis on barre celles qui ne déplacent rien, pendant la préparation. Trois facteurs analysés valent mieux que quinze cités, et le choix des trois est une décision : elle se prend au calme, pas en parlant.',
      aEviter:
        'Décider en direct de ce qu’on garde. On garde alors tout, par peur d’oublier, et l’exposé devient une énumération.',
    },
    {
      titre: 'Réserver la dernière minute à la tension et à l’ouverture',
      detail:
        'La minute 9:00–10:00 ne sert pas à ajouter du contenu : elle sert à relire, à nommer la tension du cas — l’arbitrage qu’on assume — et à préparer la première phrase. C’est la minute la plus rentable de la préparation, parce que l’ouverture donne le ton de tout l’exposé et que la tension est ce qui permet de tenir les questions.',
      aEviter:
        'Utiliser la dixième minute pour caser un outil de plus. Un outil supplémentaire mal amené coûte plus qu’il ne rapporte.',
    },
    {
      titre: 'Ouvrir en reformulant, pas en récitant',
      detail:
        'Quarante-cinq secondes qui font quatre choses : reformuler le problème, poser le périmètre, annoncer le plan, montrer la démarche. Reformuler, c’est déjà analyser — on dit ce que le problème est vraiment, et non ce que l’énoncé a décrit.',
      aEviter:
        'Commencer par « alors, PESTEL : Politique… ». Le jury entend un outil récité avant d’avoir entendu un problème.',
    },
    {
      titre: 'Garder la moitié du temps pour ce qui suit le diagnostic',
      detail:
        'Le diagnostic est un moyen ; la décision est la finalité. On trace une barre en face de 5:00 : au-delà, on ne diagnostique plus, on croise, on choisit, on recommande, on mesure. C’est le déséquilibre le plus fréquent et le plus coûteux.',
      aEviter:
        'Sept minutes de diagnostic et trente secondes de décision. L’analyse est alors invisible, parce qu’elle n’a servi à rien.',
    },
    {
      titre: 'Relier à voix haute, systématiquement',
      detail:
        'Après chaque élément cité, dire ce qu’il déplace : « ce facteur macro ne reste pas macro, il renforce le pouvoir des fournisseurs ». Citer, c’est lire l’énoncé ; relier, c’est analyser. C’est le geste qui sépare une réponse moyenne d’une bonne réponse, et il ne coûte qu’une demi-phrase à chaque fois.',
      aEviter:
        'Énumérer les cases d’un outil sans jamais dire ce qu’elles produisent ensemble.',
    },
    {
      titre: 'Refermer sur la tension, pas sur un résumé',
      detail:
        'Les trente dernières secondes nomment l’arbitrage assumé : ce qu’on accepte de sacrifier, et ce que ce sacrifice permet. Un résumé répète ce que le jury vient d’entendre ; une tension montre qu’on a compris ce qui était en jeu.',
      aEviter:
        'Terminer par « voilà, en résumé, j’ai fait un PESTEL, un Porter et un SWOT ». C’est la liste des outils, pas le résultat.',
    },
  ],

  /* -------------------------------------------------------- Raisonnement */

  raisonnement: [
    {
      t: 'texte',
      contenu:
        'Tout est trouvé. Le problème est reformulé, le diagnostic est fait, les options sont filtrées, la recommandation est écrite avec ses indicateurs. Et rien de tout cela n’a encore été entendu. L’étape qui reste ne cherche plus : elle transmet. C’est une compétence différente, et elle se travaille séparément — beaucoup de candidats perdent à l’oral une analyse qu’ils avaient réussie sur le papier.',
    },
    {
      t: 'encadre',
      ton: 'info',
      titre: 'Le format de l’épreuve 📘',
      contenu:
        'Dix minutes de préparation, puis dix minutes de passage — un exposé, puis les questions du jury. L’épreuve compte pour 40 % de la note. Deux conséquences immédiates, et toute la méthode qui suit en découle : la préparation ne laisse pas le temps de rédiger, et le passage ne laisse pas le temps de tout dire.',
    },
    {
      t: 'question',
      contenu:
        'Dix minutes de préparation devant une feuille blanche : on écrit quoi, dans quel ordre, et sous quelle forme ?',
    },
    {
      t: 'observation',
      source:
        'La direction hésite entre deux directions : défendre son activité de vente de vélos, ou basculer vers un abonnement mobilité tout compris facturé aux entreprises genevoises',
      conclusion:
        'C’est la dernière phrase de l’énoncé, et c’est la consigne réelle. Je l’entoure avant d’écrire autre chose : tout ce que je dirai devra servir à trancher entre ces deux directions. Un exposé qui décrit très bien Atelier Léman sans choisir est hors sujet, même si chaque phrase en est juste.',
    },
    {
      t: 'encadre',
      ton: 'alerte',
      titre: 'Ne rédige pas',
      contenu:
        'C’est la faute la plus coûteuse de la préparation 🔎. Dix minutes ne suffisent jamais à écrire des phrases, et un candidat qui a des phrases sous les yeux finit par les lire — or un oral évalue une pensée qui se déroule, pas un texte récité. On écrit des mots-clés et des flèches. Les flèches sont le plus important : ce sont elles qui portent le raisonnement, et ce sont elles qu’on prononcera.',
    },
    {
      t: 'schema',
      schema: {
        h: 820,
        description:
          'Deux colonnes : à gauche les dix minutes de préparation en trois tranches, à droite les dix minutes de passage en trois moments ; la dernière tranche de préparation alimente l’ouverture et la clôture de l’exposé, et une bande basse rappelle que la moitié du temps appartient à la décision.',
        noeuds: [
          {
            id: 'prep',
            titre: 'LES 10 MIN DE PRÉPARATION',
            x: 40,
            y: 40,
            l: 420,
            h: 70,
            ton: 'sourd',
          },
          {
            id: 'passage',
            titre: 'LES 10 MIN DE PASSAGE',
            x: 540,
            y: 40,
            l: 420,
            h: 70,
            ton: 'sourd',
          },
          {
            id: 'p1',
            titre: '0:00 → 5:00 — CHERCHER',
            lignes: ['cadrer, puis dehors, puis dedans', '2 opportunités, 2 menaces,', '2 forces, 2 faiblesses'],
            x: 40,
            y: 150,
            l: 420,
            h: 140,
          },
          {
            id: 'p2',
            titre: '5:00 → 8:00 — CROISER',
            lignes: ['F×O · F×M · f×O · f×M', 'puis 2 ou 3 options', 'ici naît la réponse'],
            x: 40,
            y: 320,
            l: 420,
            h: 140,
            ton: 'accent',
          },
          {
            id: 'p3',
            titre: '8:00 → 10:00 — TRANCHER',
            lignes: ['SAF, recommandation, 3 KPI', 'dernière minute : la tension', 'et la phrase d’ouverture'],
            x: 40,
            y: 490,
            l: 420,
            h: 140,
          },
          {
            id: 'd1',
            titre: '0:00 → 0:45 — OUVRIR',
            lignes: ['le problème reformulé', 'le périmètre, puis le plan', 'jamais « alors, PESTEL… »'],
            x: 540,
            y: 150,
            l: 420,
            h: 140,
          },
          {
            id: 'd2',
            titre: '0:45 → 4:30 — DIAGNOSTIQUER',
            lignes: ['3 facteurs, pas 6', 'relier, jamais énumérer', 'trois analysés > quinze cités'],
            x: 540,
            y: 320,
            l: 420,
            h: 140,
          },
          {
            id: 'd3',
            titre: '4:30 → 10:00 — DÉCIDER',
            lignes: ['options, SAF, recommandation', 'trois indicateurs', 'clore sur la tension'],
            x: 540,
            y: 490,
            l: 420,
            h: 140,
            ton: 'positif',
          },
          {
            id: 'moitie',
            titre: 'LA MOITIÉ DU TEMPS À LA DÉCISION',
            lignes: ['le diagnostic est un moyen —', 'la décision est la finalité'],
            x: 40,
            y: 670,
            l: 920,
            h: 110,
            forme: 'bande',
            ton: 'alerte',
          },
        ],
        liens: [
          { de: 'p1', vers: 'p2' },
          { de: 'p2', vers: 'p3' },
          { de: 'd1', vers: 'd2' },
          { de: 'd2', vers: 'd3' },
          { de: 'p3', vers: 'd1', depuis: 'droite', arrive: 'gauche', trait: 'pointille' },
          { de: 'p3', vers: 'd3', depuis: 'droite', arrive: 'gauche', trait: 'pointille' },
        ],
        note: 'La dernière tranche de préparation ne produit pas du contenu : elle produit les deux phrases qui comptent le plus — celle qui ouvre l’exposé et celle qui le referme.',
      },
    },
    {
      t: 'tableau',
      entetes: ['Tranche', 'Ce qu’on cherche', 'Ce qu’on écrit sur Atelier Léman'],
      lignes: [
        [
          '0:00 → 1:30',
          'Le problème réel, la décision à prendre, le périmètre, les domaines d’activité',
          'Problème : le modèle de revenus, pas les − 8 % · Périmètre : mobilité douce professionnelle, canton de Genève · 2 domaines : vente et service',
        ],
        [
          '1:30 → 3:30',
          'L’externe : trois facteurs PESTEL au plus, les deux forces de Porter qui dominent',
          'P subventions cantonales · T batteries · rivalité par les prix des marques en ligne · l’État en sixième force → 2 opportunités, 2 menaces',
        ],
        [
          '3:30 → 5:00',
          'L’interne : deux ressources ou compétences clés, un maillon fort, un maillon faible',
          'Diagnostic électronique et marque locale (fort) · approvisionnement en batteries (faible) → 2 forces, 2 faiblesses',
        ],
        [
          '5:00 → 6:30',
          'Les quatre croisements — c’est ici que naît la réponse',
          'F × O : atelier réputé + demande B2B subventionnée → abonnement · f × M : deux fournisseurs + guerre des prix',
        ],
        [
          '6:30 → 8:00',
          'Deux ou trois options réellement différentes, une ligne de SAF chacune',
          'A défendre la vente · B pilote d’abonnement · C bascule totale',
        ],
        [
          '8:00 → 9:00',
          'La recommandation, son format, les trois indicateurs qu’on citera',
          'B en pilote : 40 vélos, 6 entreprises, 12 mois — puis 3 indicateurs',
        ],
        [
          '9:00 → 10:00',
          'Respirer : relire, nommer la tension, préparer la phrase d’ouverture',
          'Tension : vendre moins de vélos neufs pour construire des revenus récurrents',
        ],
      ],
      legende:
        'Le format — dix minutes plus dix minutes — vient du cours 📘. Le découpage minute par minute est un guide de préparation 🔎, et la colonne de droite est le brouillon réel de ce cas.',
    },
    {
      t: 'renvoi',
      modele: 'perimetre',
      point: 'livrable',
      libelle:
        'La phrase de cadrage se prépare à 1:30 et se prononce à 0:20 : c’est le seul énoncé du brouillon qu’on dit presque mot pour mot.',
    },
    {
      t: 'observation',
      source: 'PESTEL, six lettres ; j’en ai rempli quatre sur mon brouillon',
      conclusion:
        'À l’oral je n’en citerai que trois. Je barre donc la quatrième maintenant, pendant la préparation, et non pendant que je parle : hiérarchiser est une décision, et une décision se prend au calme. Le brouillon garde les quatre, au cas où le jury demanderait ; l’exposé n’en dit que trois.',
    },
    {
      t: 'renvoi',
      modele: 'pestel',
      point: 'tri',
      libelle:
        'Le tri du PESTEL : la chaîne facteur → conséquence → opportunité ou menace, celle qui transforme une liste en analyse.',
    },
    {
      t: 'question',
      contenu:
        'La feuille est prête, l’examinateur dit « je vous écoute ». Par quoi commence-t-on ?',
    },
    {
      t: 'oral',
      contenu:
        'Le problème posé ici n’est pas la baisse des ventes en elle-même : c’est que le modèle de revenus d’Atelier Léman repose sur un renouvellement que la qualité même de ses vélos ralentit. Je vais donc raisonner sur le périmètre de la mobilité douce professionnelle dans le canton de Genève, en distinguant deux domaines d’activité — la vente et le service. Je conduirai un diagnostic externe puis interne, je les croiserai dans un SWOT, j’en tirerai deux options que je testerai par le SAF, et je conclurai par une recommandation et ses indicateurs.',
    },
    {
      t: 'encadre',
      ton: 'succes',
      titre: 'Ce que cette ouverture fait en quarante-cinq secondes',
      contenu:
        'Quatre choses à la fois 🔎 : elle reformule le problème, donc elle analyse déjà au lieu de répéter l’énoncé ; elle pose le périmètre, donc elle annonce ce qu’elle écarte ; elle annonce le plan, donc le jury sait où il va et cesse de se demander si on va y arriver ; et elle montre la démarche, donc la maîtrise. Très peu de candidats font cela, et cela s’entend dès la première phrase.',
    },
    {
      t: 'tableau',
      entetes: ['Moment', 'Durée', 'Ce qu’on dit'],
      lignes: [
        ['0:00 → 0:45', '45 s', 'Le problème reformulé, le périmètre, le plan annoncé'],
        ['0:45 → 2:45', '2 min', 'Diagnostic externe : trois facteurs, et ce que chacun déplace'],
        ['2:45 → 4:30', '1 min 45', 'Diagnostic interne : deux forces, deux faiblesses, le maillon faible nommé'],
        ['4:30 → 5:30', '1 min', 'Le business model : d’où vient l’argent aujourd’hui, d’où il viendrait demain'],
        ['5:30 → 7:00', '1 min 30', 'Le SWOT croisé, et les deux ou trois options qui en sortent'],
        ['7:00 → 8:30', '1 min 30', 'Le SAF : pourquoi deux options tombent, pourquoi une passe'],
        ['8:30 → 9:30', '1 min', 'La recommandation, son format, ses trois indicateurs'],
        ['9:30 → 10:00', '30 s', 'La tension, en ouverture — jamais un résumé'],
      ],
      legende:
        'Répartition illustrative 🔎. Le seul repère à retenir est la barre des 5:00 : au-delà, on ne diagnostique plus, on décide.',
    },
    {
      t: 'observation',
      source: 'Sur ma feuille, le diagnostic occupe les deux tiers de la page',
      conclusion:
        'C’est normal : c’est ce que j’ai cherché le plus longtemps. Mais ce n’est pas la proportion de l’exposé. La page dit ce que j’ai cherché, pas ce que je dois dire. Je trace donc un trait en haut de la feuille, en face de 5:00, pour me rappeler que la seconde moitié du temps appartient à ce qui suit le diagnostic.',
    },
    {
      t: 'observation',
      source: 'La Ville et le Canton de Genève multiplient les subventions à la mobilité douce',
      conclusion:
        'Si je m’arrête là, je n’ai rien analysé : j’ai lu l’énoncé à voix haute. J’enchaîne donc dans la même phrase — ce facteur ne reste pas macro, il solvabilise une demande d’entreprise qui n’existait pas, et il renforce la sixième force de Porter, l’État. Ce chaînage coûte une demi-phrase et vaut plus que trois facteurs supplémentaires cités.',
    },
    {
      t: 'renvoi',
      modele: 'porter',
      point: 'etat',
      libelle:
        'La sixième force, l’État : ici il ne régule pas, il finance — et il change qui, sur ce marché, est solvable.',
    },
    {
      t: 'encadre',
      ton: 'info',
      titre: 'Le geste rare : signaler une variante de vocabulaire',
      contenu:
        'Les supports du cours ne disent pas toujours la même chose, et ces écarts sont du contenu, pas des erreurs 📘. Sur ce cas, le maillon faible d’Atelier Léman est l’achat des batteries : le schéma de la chaîne de valeur nomme cette activité « Approvisionnements », un autre support la nomme « Achats ». De même, le « E » du PESTEL est « Écologique » sur un support et « Éthique » sur un autre. Dire au jury qu’on connaît les deux formulations et qu’on retient le sens prouve qu’on a lu les sources, et non une synthèse. C’est rare, et cela s’entend.',
    },
    {
      t: 'renvoi',
      modele: 'chaine-de-valeur',
      point: 'approvisionnements',
      libelle:
        'Le maillon des approvisionnements : l’activité de soutien où se loge la dépendance aux deux fournisseurs de batteries.',
    },
    {
      t: 'oral',
      contenu:
        'Le cours nomme ce maillon Approvisionnements dans le schéma de la chaîne de valeur, et Achats dans un autre support ; je retiens le sens, qui est le même — tout ce qui entre dans l’entreprise. Chez Atelier Léman, c’est précisément là qu’est la faiblesse : deux fournisseurs asiatiques sur le composant le plus cher du vélo.',
    },
    {
      t: 'observation',
      source: 'Mon SAF conclut que l’option B est la seule à passer les trois filtres, et la seule réversible',
      conclusion:
        'C’est cette phrase-là que je prononce, et non les neuf cases de mon tableau. Le jury n’a pas besoin d’entendre une grille remplie ; il a besoin d’entendre pourquoi A tombe sur la souhaitabilité, pourquoi C tombe sur la faisabilité, et ce qui reste debout. Un outil se restitue par sa conclusion, jamais par son formulaire.',
    },
    {
      t: 'renvoi',
      modele: 'saf',
      point: 'point-faible',
      libelle:
        'Le point faible du choix retenu : c’est lui qui impose le format pilote plutôt qu’un déploiement — et le dire, c’est montrer que la recommandation découle du diagnostic.',
    },
    {
      t: 'oral',
      contenu:
        'Je recommande donc l’option B, sous un format pilote : quarante vélos chez six entreprises genevoises sur douze mois, la vente aux particuliers maintenue pendant cette période. Ce format n’est pas de la prudence de principe, c’est la réponse au filtre que l’option passe le moins bien, la faisabilité financière — de l’ordre de 56 000 francs immobilisés, chiffre illustratif. Je la piloterai par cinq indicateurs datés ; j’en cite trois, les plus décisifs : le taux de renouvellement d’abonnement à douze mois, la marge par vélo et par an, et la part du chiffre d’affaires récurrent dans le total.',
    },
    {
      t: 'oral',
      contenu:
        'Pour finir, je souligne que cette recommandation repose sur un arbitrage assumé : accepter de vendre moins de vélos neufs pour construire des revenus récurrents plus résilients. C’est la tension centrale du cas, et le format pilote est précisément ce qui permet de la tester avant de s’y engager.',
    },
  ],

  /* ------------------------------------------------------------ Livrable */

  livrable: {
    titre: 'La feuille de préparation, telle qu’elle sert pendant les dix minutes de passage',
    lignes: [
      'PROBLÈME : le modèle de revenus s’essouffle — pas les − 8 %',
      'DÉCISION : défendre la vente OU basculer vers l’abonnement',
      'PÉRIMÈTRE : mobilité douce professionnelle, canton de Genève, 3 ans',
      'DAS : 1 vente (position faible) · 2 service (position forte)',
      'EXTERNE : P subventions · T batteries · rivalité prix · État = 6e force',
      'O1 demande B2B subventionnée · M1 marques low-cost en ligne',
      'INTERNE : F diagnostic électronique · F marque locale',
      'f 2 fournisseurs de batteries · f revenus liés au renouvellement',
      'F × O → abonnement mobilité entreprises ← la réponse',
      'f × M → dépendance batteries + guerre des prix = le risque à nommer',
      'OPTIONS A défendre · B pilote abonnement · C bascule totale',
      'SAF : A tombe en S · C tombe en F · B passe les trois',
      'DÉCIDÉ B — 40 vélos, 6 entreprises, 12 mois',
      'KPI 1 renouvellement à 12 mois · 2 marge / vélo / an · 3 part du CA récurrent',
      'TENSION : vendre moins de vélos neufs pour des revenus récurrents',
      'OUVERTURE : « le problème n’est pas la baisse des ventes, c’est… »',
      'TRAIT À 5:00 — après, on ne diagnostique plus, on décide',
    ],
  },

  /* -------------------------------------------------------------- Pièges */

  pieges: [
    {
      titre: 'Rédiger pendant la préparation',
      explication:
        'On commence par écrire l’introduction en toutes lettres, on y passe trois minutes, il en reste sept pour tout le reste — et le jour venu, on lit ce paragraphe au lieu de le dire. Un oral note une pensée qui se déroule, pas un texte récité : la lecture s’entend et fait baisser la note.',
      reflexe:
        'Des mots-clés et des flèches, jamais des phrases. Si une idée mérite d’être écrite, elle tient en quatre mots reliés par une flèche.',
    },
    {
      titre: 'Commencer par l’outil au lieu du problème',
      explication:
        'Ouvrir sur « alors, PESTEL : Politique… » revient à annoncer qu’on va appliquer une grille, sans avoir dit à quoi ni pourquoi. Le jury entend un candidat qui exécute une procédure, pas quelqu’un qui traite un cas.',
      reflexe:
        'La première phrase nomme le problème réel et le reformule. L’outil n’apparaît qu’en deuxième position, comme moyen.',
    },
    {
      titre: 'Sept minutes de diagnostic, trente secondes de décision',
      explication:
        'C’est le déséquilibre le plus fréquent, et il rend l’analyse inutile : on a démontré qu’on savait regarder, jamais qu’on savait choisir. Or c’est le choix qui est noté, parce que c’est lui qui engage.',
      reflexe:
        'Une barre en face de 5:00 sur la feuille. Passé cette barre, plus un mot de diagnostic : on croise, on choisit, on recommande, on mesure.',
    },
    {
      titre: 'Vouloir tout dire',
      explication:
        'On cite les six lettres du PESTEL, les cinq forces, les neuf blocs du canvas — et rien n’est analysé, faute de temps. La quantité citée est perçue comme une absence de hiérarchie, donc comme une absence de jugement.',
      reflexe:
        'Trois éléments analysés valent mieux que quinze cités. Annoncer le tri à voix haute : « sur les six dimensions, trois sont réellement structurantes ici, et voici pourquoi ».',
    },
    {
      titre: 'Inventer un chiffre',
      explication:
        'Sous la pression d’une question, on avance un pourcentage qu’on n’a pas. Une affirmation fausse coûte beaucoup plus qu’une incertitude assumée, surtout sur les chiffres, parce qu’elle jette un doute sur tout le reste.',
      reflexe:
        'Dire « selon l’ordre de grandeur présenté dans le cours », ou annoncer franchement qu’un chiffre est illustratif — comme les 56 000 francs du pilote.',
    },
    {
      titre: 'Finir par un résumé',
      explication:
        'Les trente dernières secondes sont celles dont le jury se souvient. Les dépenser à répéter ce qu’il vient d’entendre, ou à énumérer les outils employés, gaspille le seul moment où l’on peut montrer qu’on a compris l’enjeu.',
      reflexe:
        'Terminer sur la tension : ce qu’on accepte de sacrifier, et ce que ce sacrifice permet.',
    },
  ],
}
