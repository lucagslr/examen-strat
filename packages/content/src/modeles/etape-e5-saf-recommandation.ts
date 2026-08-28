import type { EtapeAnalyse } from './types'

/**
 * ÉTAPE 5 — SAF, recommandation et KPI
 * ====================================
 *
 * L'étape où l'on cesse d'analyser et où l'on décide. Elle ne fabrique aucune
 * information nouvelle : elle consomme les options de l'étape 4 et produit une
 * décision assortie de quoi la vérifier.
 *
 * Provenance : 📘 cours · 🔎 raisonnement · 📚 hors cours.
 */
export const etape: EtapeAnalyse = {
  id: 'e5',
  numero: 5,
  slug: 'saf-recommandation',
  titre: 'SAF, recommandation et KPI',
  question: 'Comment trancher, et comment rendre la décision vérifiable ?',

  entree:
    'Deux ou trois options stratégiques réellement différentes, chacune rattachée au croisement du SWOT dont elle sort.',
  sortie:
    'Une option retenue avec, pour chaque option écartée, le filtre exact sur lequel elle est tombée ; la faiblesse assumée du choix ; une recommandation tranchée, chiffrée et conditionnée ; et cinq indicateurs datés — soit exactement l’objet que l’étape suivante passera au filtre de la durabilité.',

  minutes: '6:30 – 9:00',
  modeles: ['saf', 'parties-prenantes'],

  // -------------------------------------------------------------- Méthode

  methode: [
    {
      titre: '1. Aligner les options avant de les juger',
      detail:
        'Sur le brouillon, un tableau : les options en colonnes, les trois filtres en lignes. À côté de chaque option, écrire le croisement du diagnostic dont elle sort. Ce tableau existe pour une raison précise : sans lui, on ne compare rien, on plaide pour celle qu’on préférait déjà en arrivant.',
      aEviter:
        'Entrer dans le SAF avec une seule option. Le SAF n’a alors plus rien à comparer et il valide tout ce qu’on lui présente.',
    },
    {
      titre: '2. Filtre S — la bonne idée, au regard du diagnostic',
      detail:
        'Pour chaque option, nommer l’opportunité qu’elle exploite, la force sur laquelle elle s’appuie, la menace qu’elle traite. Un filtre, c’est un test qui laisse passer ou qui arrête : celui-ci arrête toute option qu’on ne peut rattacher à aucun croisement du diagnostic.',
      aEviter:
        'Parler des gens à ce stade. Dès qu’un nom de groupe apparaît — les salariés, les actionnaires, les clients —, on a glissé sur le filtre suivant sans s’en apercevoir.',
    },
    {
      titre: '3. Filtre A — acteur par acteur, jamais globalement',
      detail:
        'Lister qui doit dire oui, et pour chacun : ce qu’il gagne, ce qu’il perd, son pouvoir de blocage, et le remède si l’opposition est probable. Trois acteurs au minimum, dont un qui perd quelque chose — une stratégie n’est jamais bloquée par ceux qui y gagnent.',
      aEviter:
        'La phrase « les parties prenantes accepteront ». Elle ne nomme personne, ne cite aucun intérêt, et ne peut être ni vérifiée ni contredite.',
    },
    {
      titre: '4. Filtre F — dimension par dimension',
      detail:
        '📘 Répondre dans l’ordre du cours : l’argent est-il là, ou peut-on l’obtenir ? les personnes et les savoir-faire existent-ils, ou peuvent-ils s’acquérir ? y a-t-il une contrainte extérieure, notamment légale ? Chiffrer le montant à immobiliser et la durée avant le premier retour.',
      aEviter:
        'Réduire la faisabilité au budget. Une option peut être finançable et opérationnellement impossible faute de compétences ; l’inverse existe aussi.',
    },
    {
      titre: '5. Trancher, à voix haute et au présent',
      detail:
        'Une phrase : « je retiens l’option B ». Puis, pour chaque option écartée, la lettre du filtre sur lequel elle est tombée. C’est cette lettre qui transforme une préférence personnelle en élimination raisonnée, et c’est elle que le jury attend quand il demande « pourquoi pas l’autre ? ».',
      aEviter:
        'Conclure par « les trois options ont leurs mérites ». Tout le travail des étapes précédentes devient alors sans objet.',
    },
    {
      titre: '6. Nommer la faiblesse, puis en déduire le format',
      detail:
        'Aucune option ne passe les trois filtres haut la main — sinon elle serait déjà mise en œuvre. Dire lequel des trois elle passe le moins bien, et choisir le format qui y répond : une faiblesse d’acceptabilité se traite par la négociation ou le phasage, une faiblesse de faisabilité par le pilote, le partenariat ou l’étalement.',
      aEviter:
        'Cacher la faiblesse pour rendre la recommandation plus convaincante. Un jury qui la trouve lui-même conclut qu’elle a été manquée, pas assumée.',
    },
    {
      titre: '7. Poser trois à cinq indicateurs, avec cible et échéance',
      detail:
        'Un indicateur — un KPI, pour key performance indicator — est un chiffre qui dira, à une date fixée, si le pari était juste. Il en faut un économique, un opérationnel et un client ou social au minimum. Test de validité : si ce chiffre bouge dans le mauvais sens, qu’est-ce que je change ? Si la réponse est « rien », l’indicateur ne sert pas au pilotage.',
      aEviter:
        'Ne donner que des indicateurs financiers, ou donner un indicateur d’impact par unité au lieu du total.',
    },
  ],

  // --------------------------------------------------------- Raisonnement

  raisonnement: [
    {
      t: 'texte',
      contenu:
        'Il reste trois minutes et demie sur les dix de préparation, et le brouillon porte déjà tout le nécessaire : un diagnostic externe, un diagnostic interne, un business model, un SWOT croisé, et les options qui en sortent. Rien de nouveau n’entrera ici. Cette étape ne fabrique pas d’information, elle en consomme — pour produire une seule chose, une décision, et de quoi vérifier dans un an qu’elle était juste.',
    },

    {
      t: 'liste',
      titre: 'Ce que l’étape précédente a posé sur la table',
      items: [
        'A — Consolider la vente de vélos : élargir la gamme et ajuster les prix face aux marques en ligne. Elle sort du croisement force × menace.',
        'B — Lancer un abonnement mobilité en pilote auprès d’entreprises genevoises, tout en continuant à vendre aux particuliers. Elle sort du croisement force × opportunité.',
        'C — Basculer entièrement vers l’abonnement et arrêter la vente aux particuliers. Même croisement que B, mais sans filet.',
      ],
    },

    {
      t: 'question',
      contenu:
        'Les trois options sont défendables — c’est exactement le problème. Sur quoi je m’appuie pour n’en garder qu’une, autrement que sur ma préférence ?',
    },

    {
      t: 'texte',
      contenu:
        'Sur trois filtres. Un filtre, c’est un test qui laisse passer ou qui arrête : on fait passer chaque option par les trois, et on regarde laquelle survit. 📘 Le cours appelle cet outil le SAF, d’après trois mots anglais — suitability, acceptability, feasibility. En français : la souhaitabilité, « est-ce la bonne idée compte tenu du diagnostic ? » ; l’acceptabilité, « les personnes concernées vont-elles l’accepter ? » ; la faisabilité, « en avons-nous les moyens, et le droit ? ». Le mémo tient en trois mots : dois-je ? acceptent-ils ? puis-je ? 🔎 Et le mot décisif est « indépendants » : les trois ne sont pas trois façons de dire que c’est bien. Une option peut être excellente et refusée ; une autre peut être acceptée par tous et hors de portée. C’est précisément ce qui rend l’outil utile. 📘 Le cours dit aussi pourquoi on fait ce test maintenant : évaluer une stratégie cinq ans plus tard, quand les résultats sont mesurables, est plus facile — mais il est bien tard pour corriger.',
    },

    {
      t: 'renvoi',
      modele: 'saf',
      point: 'options',
      libelle:
        'Ce qu’il faut avoir en main avant de commencer : deux ou trois options réellement différentes, chacune rattachée à un croisement',
    },

    {
      t: 'question',
      contenu:
        'Premier filtre, la souhaitabilité. La question n’est pas « est-ce que ça me plaît », mais « est-ce que ça répond au problème que je viens de diagnostiquer ? ».',
    },

    {
      t: 'observation',
      source:
        'L’énoncé dit : « Depuis deux ans, les ventes de vélos reculent de 8 %. Des marques en ligne à bas prix se sont installées sur le marché suisse. »',
      conclusion:
        'Le recul n’est donc pas un accident de conjoncture : il a une cause nommée, et cette cause ne va pas disparaître d’elle-même. L’option A, qui consiste à mieux vendre des vélos, ne traite pas ce problème — elle en repousse l’échéance. Sa souhaitabilité est faible, et c’est là qu’elle tombe. On note la lettre : A tombe sur S. Cette lettre servira au moment de justifier le choix.',
    },

    {
      t: 'observation',
      source:
        'L’énoncé dit deux choses qui ne sont pas dans la même phrase : « la Ville et le Canton de Genève multiplient les subventions à la mobilité douce, notamment pour les entreprises qui équipent leurs collaborateurs » et « ses mécaniciens diagnostiquent des pannes électroniques que les ateliers de quartier ne savent pas traiter ».',
      conclusion:
        'Un fait dehors, un fait dedans, et ils se rencontrent : l’État solvabilise une demande d’entreprise qui n’existait pas, et l’atelier sait faire exactement ce qu’un parc d’entreprise réclame — de l’entretien et du diagnostic. L’option B est adossée à ce croisement force × opportunité. C’est ce qui rend sa souhaitabilité démontrable au lieu d’être affirmée : je peux la faire remonter jusqu’à deux phrases de l’énoncé. L’option C repose sur le même croisement, donc elle est tout aussi souhaitable — la différence entre B et C se jouera ailleurs.',
    },

    {
      t: 'renvoi',
      modele: 'saf',
      point: 'souhaitabilite',
      libelle:
        'Le test le plus court de la souhaitabilité : une option qu’on ne peut rattacher à aucun croisement du SWOT n’est pas souhaitable, elle est arbitraire',
    },

    {
      t: 'encadre',
      ton: 'alerte',
      titre: 'Ne pas glisser d’un filtre à l’autre sans s’en apercevoir',
      contenu:
        'Tant qu’on est sur la souhaitabilité, on ne parle que de faits du diagnostic : marché, concurrents, forces, faiblesses. Dès qu’un nom de groupe entre dans la phrase — « les mécaniciens n’aimeront pas », « les actionnaires trouveront ça risqué » —, on a changé de filtre. La remarque est bonne, elle est simplement rangée au mauvais endroit : on la met de côté et on la reprend deux minutes plus tard, sur l’acceptabilité. C’est la confusion la plus fréquente, et elle coûte cher : elle mène à répondre à un blocage social par un nouveau calcul de rentabilité.',
    },

    {
      t: 'question',
      contenu:
        'Deuxième filtre, l’acceptabilité. Qui doit dire oui pour que cela se fasse — et cette personne-là, avec ce qu’elle gagne et ce qu’elle perd, dira-t-elle oui ? Une partie prenante, c’est tout acteur qui subit la stratégie ou qui peut la faire échouer.',
    },

    {
      t: 'tableau',
      entetes: ['Qui doit dire oui', 'Ce qu’il gagne, ce qu’il perd', 'Verdict et remède'],
      lignes: [
        [
          'Entreprises clientes genevoises',
          'Gagnent un parc géré pour elles et allégé par la subvention ; perdent la propriété du vélo.',
          'Oui. C’est la demande que l’argent public rend solvable.',
        ],
        [
          'Direction',
          'Gagne une sortie au recul des ventes ; perd la marge immédiate de 1 200 CHF encaissée le jour de la livraison.',
          'Oui, à condition de voir la trésorerie tenir.',
        ],
        [
          'Mécaniciens',
          'Gagnent un travail régulier et prévisible ; perdent la variété du diagnostic toutes marques, qui est ce qui fait leur réputation.',
          'C’est ici que ça se joue. Remède : les associer à la définition du contrat de service, en former deux au diagnostic batterie.',
        ],
        [
          'Fournisseurs de batteries',
          'Ne gagnent ni ne perdent rien ; ils restent deux, tous deux en Asie.',
          'Indifférents — mais ils deviennent un risque dès qu’on s’engage sur une disponibilité.',
        ],
        [
          'Ville et Canton de Genève',
          'Gagnent une politique publique qui produit un effet visible et local.',
          'Favorables. Pouvoir fort, intérêt qui monte : à tenir informés, et à citer dans le dossier de subvention.',
        ],
      ],
      legende:
        'Écrire « les parties prenantes accepteront probablement » ne vaut rien : la phrase ne nomme personne, ne cite aucun intérêt, et ne peut être ni vérifiée ni contredite. La forme qui rapporte des points est toujours la même — tel acteur acceptera ou refusera parce que tel intérêt, donc tel remède.',
    },

    {
      t: 'observation',
      source:
        'L’énoncé dit : « ses mécaniciens sont réputés : ils diagnostiquent des pannes électroniques que les ateliers de quartier ne savent pas traiter. L’équipe est stable et se forme en interne. »',
      conclusion:
        'Ce qui était une force au filtre précédent devient un point de vigilance à celui-ci. Un abonnement transforme leur travail : la réparation ponctuelle, variée, valorisante, devient de la maintenance planifiée sur un parc uniforme. Ils ne bloqueront pas la décision par un vote — ils la videront de son contenu en la faisant mal. C’est le seul acteur du cas qui perd réellement quelque chose, donc le seul chez qui l’acceptabilité est en jeu. Le remède n’est pas financier : les associer à la définition du contrat de service et former deux d’entre eux au diagnostic batterie.',
    },

    {
      t: 'renvoi',
      modele: 'parties-prenantes',
      point: 'gerer',
      libelle:
        'Pouvoir fort et intérêt fort : l’acteur qu’on fait entrer dans la décision au lieu de l’informer une fois qu’elle est prise',
    },

    {
      t: 'question',
      contenu:
        'Troisième filtre, la faisabilité. 📘 Le cours pose trois questions dans cet ordre : dispose-t-on des ressources financières, ou peut-on les acquérir ? les ressources humaines et les savoir-faire existent-ils, ou peuvent-ils être acquis ? y a-t-il une contrainte extérieure, notamment légale ?',
    },

    {
      t: 'observation',
      source:
        'L’énoncé dit : « un vélo est vendu 2 600 CHF en moyenne pour un coût de revient de 1 400 CHF », et l’option B porte sur un pilote de 40 vélos.',
      conclusion:
        '40 × 1 400, cela fait environ 56 000 CHF immobilisés avant le premier abonnement encaissé — un ordre de grandeur illustratif, calculé à partir des seuls chiffres de l’énoncé. Et le montant n’est pas le vrai sujet : le modèle inverse le sens de l’argent. Aujourd’hui, 1 200 CHF de marge arrivent le jour de la livraison ; demain, la même somme arrive étalée sur plusieurs années. Pour une entreprise dont les ventes reculent de 8 %, c’est là que ça coince. La faisabilité de B est moyenne, et c’est son point faible. Celle de C est franchement faible : parc entier à financer d’un coup, métier d’opérateur à apprendre sans l’avoir jamais pratiqué. C tombe sur F.',
    },

    {
      t: 'observation',
      source:
        'L’énoncé dit : « les batteries, composant le plus cher et le plus critique du vélo, sont achetées à deux fournisseurs asiatiques ». La question ne le mentionne pas — c’est pour cela qu’il faut le relever.',
      conclusion:
        'Tant qu’on vend un vélo, une rupture d’approvisionnement retarde une livraison. Dès qu’on vend un abonnement, elle rompt un contrat : l’entreprise s’engage sur une disponibilité qu’elle ne maîtrise pas. Ce n’est pas un obstacle à la faisabilité — le pilote reste finançable — c’est la condition de réussite, c’est-à-dire la chose qui, si elle n’est pas obtenue, fait échouer la stratégie entière. Une recommandation qui ne la nomme pas n’est pas courageuse, elle est naïve.',
    },

    {
      t: 'renvoi',
      modele: 'saf',
      point: 'faisabilite',
      libelle:
        'Répondre dimension par dimension — argent, savoir-faire, droit — au lieu de réduire la faisabilité au budget',
    },

    {
      t: 'tableau',
      entetes: [
        'Le filtre',
        'A — consolider la vente',
        'B — pilote d’abonnement',
        'C — tout basculer',
      ],
      lignes: [
        [
          'S — dois-je ?',
          'Faible. Ne répond pas au recul structurel, elle le retarde.',
          'Forte. Exploite le croisement atelier réputé × subventions.',
          'Forte. Même croisement, en plus grand.',
        ],
        [
          'A — acceptent-ils ?',
          'Facile en interne, mais démobilisante : on ne propose rien.',
          'Bonne. Entreprises subventionnées ; mécaniciens à associer.',
          'Moyenne. Abandon des clients particuliers historiques.',
        ],
        [
          'F — puis-je ?',
          'Élevée. Rien de neuf à financer.',
          'Moyenne. Trésorerie à mobiliser pour 40 vélos.',
          'Faible. Parc entier à financer, métier à réinventer.',
        ],
        [
          'Réversible ?',
          'Totalement.',
          'Oui. 40 vélos d’occasion se revendent.',
          'Non. La vente est arrêtée, les clients partis.',
        ],
      ],
      legende:
        'Appréciations illustratives, construites à partir des seuls faits de l’énoncé. On remplit ce tableau ligne par ligne — les trois options sur la souhaitabilité, puis les trois sur l’acceptabilité, puis les trois sur la faisabilité : c’est ce qui force la comparaison au lieu du plaidoyer. La quatrième ligne, la réversibilité, ne vient pas du cours 🔎 : elle départage deux options de souhaitabilité comparable, ce qui est exactement le cas ici entre B et C.',
    },

    {
      t: 'texte',
      contenu:
        'Je retiens l’option B. A tombe sur la souhaitabilité : elle ne répond pas au recul structurel des ventes. C tombe sur la faisabilité : tout le parc à financer d’un coup et un métier entier à réinventer. B est la seule à passer les trois filtres — et la seule réversible : si le pilote échoue, quarante vélos d’occasion se revendent et l’atelier retrouve son modèle de départ. On dit cette phrase au présent, sans conditionnel : « je retiens », jamais « il semblerait que l’option B soit préférable ». 📘 Le SAF sert à trancher, pas à décrire — un SAF déroulé jusqu’au bout puis conclu par « les trois ont leurs mérites » annule tout le travail qui précède.',
    },

    {
      t: 'encadre',
      ton: 'succes',
      titre: 'Le mécanisme à rendre visible devant le jury',
      contenu:
        'Le format de la recommandation n’est pas choisi par prudence : il découle de la faiblesse que le SAF vient d’identifier. La faiblesse de B est financière — donc un pilote, et non un déploiement. Si la faiblesse avait été l’acceptabilité, le remède aurait été la négociation, le phasage ou la compensation, jamais le pilote. Prononcer cet enchaînement à voix haute — voici la faiblesse, donc voici le format — est ce qui distingue une vraie recommandation d’une conclusion timide. Et cela retourne l’aveu de faiblesse en argument.',
    },

    {
      t: 'schema',
      schema: {
        h: 620,
        description:
          'L’option retenue passe les trois filtres avec des résultats inégaux ; le plus faible des trois, la faisabilité financière, dicte le format pilote, dont découlent le sacrifice accepté, la condition de réussite et les indicateurs.',
        noeuds: [
          {
            id: 'retenue',
            titre: 'OPTION B — RETENUE',
            lignes: ['Abonnement mobilité, entreprises'],
            x: 40,
            y: 40,
            l: 920,
            h: 70,
            forme: 'bande',
            ton: 'accent',
          },
          {
            id: 's',
            titre: 'S — souhaitabilité : forte',
            lignes: ['Croisement force × opportunité', 'atelier réputé × subventions'],
            x: 40,
            y: 170,
            l: 260,
            h: 110,
            ton: 'positif',
          },
          {
            id: 'a',
            titre: 'A — acceptabilité : bonne',
            lignes: ['Sauf pour les mécaniciens :', 'leur métier change.'],
            x: 370,
            y: 170,
            l: 260,
            h: 110,
            ton: 'alerte',
          },
          {
            id: 'f',
            titre: 'F — faisabilité : moyenne',
            lignes: ['Le point faible du choix :', '≈ 56 000 CHF immobilisés.'],
            x: 700,
            y: 170,
            l: 260,
            h: 110,
            ton: 'danger',
          },
          {
            id: 'format',
            titre: 'LE FORMAT RÉPOND À LA FAIBLESSE',
            lignes: ['6 entreprises · 40 vélos · 12 mois'],
            x: 40,
            y: 330,
            l: 920,
            h: 70,
            forme: 'bande',
            ton: 'accent',
          },
          {
            id: 'sacrifice',
            titre: 'CE QU’ON SACRIFIE',
            lignes: ['Trésorerie immobilisée,', 'croissance plus lente.'],
            x: 40,
            y: 460,
            l: 260,
            h: 110,
          },
          {
            id: 'condition',
            titre: 'LA CONDITION DE RÉUSSITE',
            lignes: ['Un second fournisseur', 'de batteries hors Asie.'],
            x: 370,
            y: 460,
            l: 260,
            h: 110,
            ton: 'alerte',
          },
          {
            id: 'kpi',
            titre: 'COMMENT ON SAURA',
            lignes: ['5 KPI, chacun avec une cible', 'et une échéance.'],
            x: 700,
            y: 460,
            l: 260,
            h: 110,
            ton: 'positif',
          },
        ],
        liens: [
          { de: 'retenue', vers: 's', depuis: 'bas', arrive: 'haut' },
          { de: 'retenue', vers: 'a', depuis: 'bas', arrive: 'haut' },
          { de: 'retenue', vers: 'f', depuis: 'bas', arrive: 'haut' },
          { de: 'f', vers: 'format', libelle: 'dicte le format', ton: 'danger' },
          { de: 'format', vers: 'sacrifice', depuis: 'bas', arrive: 'haut' },
          { de: 'format', vers: 'condition', depuis: 'bas', arrive: 'haut' },
          { de: 'format', vers: 'kpi', depuis: 'bas', arrive: 'haut' },
        ],
        note: 'Le pilote n’est pas une prudence de principe : c’est la réponse à une faiblesse que le SAF a nommée. Une autre faiblesse aurait donné un autre format.',
      },
    },

    {
      t: 'tableau',
      entetes: ['L’indicateur', 'Famille', 'Cible à 12 mois', 'Pourquoi celui-là'],
      lignes: [
        [
          'Taux de renouvellement d’abonnement',
          'Client',
          '70 %',
          'C’est le pari même du modèle : la récurrence. S’il tombe, l’abonnement ne remplace pas la vente.',
        ],
        [
          'Marge par vélo et par an',
          'Économique',
          '≥ 300 CHF',
          'Vérifie que l’abonnement couvre la main-d’œuvre qui revient chaque année.',
        ],
        [
          'Interventions par vélo et par an',
          'Opérationnel',
          '≤ 3',
          'La variable qui peut tuer la rentabilité sans qu’on la voie venir.',
        ],
        [
          'Délai moyen d’intervention',
          'Opérationnel',
          '≤ 48 h',
          'C’est la promesse vendue : si elle n’est pas tenue, le renouvellement chutera l’année suivante.',
        ],
        [
          'Part du chiffre d’affaires récurrent',
          'Économique',
          '10 % du total',
          'Mesure la transformation du modèle, et pas seulement la santé de l’entreprise.',
        ],
      ],
      legende:
        'Cibles illustratives. Trois à cinq indicateurs, jamais plus, dont au moins un non financier — sinon on ne voit venir ni l’échec opérationnel ni l’échec social. Une famille environnementale existe aussi (durée de vie moyenne des batteries, taux de réemploi) : si l’argument durable est mobilisé auprès de la Ville, on remplace un indicateur par celui-là, on n’en ajoute pas un sixième. 📘 Et sur toute question d’impact, exiger la valeur absolue : un impact par unité peut baisser de 20 % pendant que le total augmente de 30 %, parce que les volumes ont explosé.',
    },

    {
      t: 'renvoi',
      modele: 'saf',
      point: 'kpi',
      libelle:
        'Le test d’un indicateur : si ce chiffre bouge dans le mauvais sens, qu’est-ce que je change ? Si la réponse est « rien », il ne sert pas au pilotage',
    },

    {
      t: 'oral',
      contenu:
        'Je retiens l’option B. Elle est la plus souhaitable, parce qu’elle exploite directement le croisement entre notre force — deux ateliers et des mécaniciens capables de diagnostiquer l’électronique — et l’opportunité des subventions cantonales à la mobilité douce. Son acceptabilité est bonne du côté des entreprises clientes, mais elle suppose d’associer les mécaniciens, dont le métier passe de la réparation ponctuelle à la maintenance planifiée. Sa faisabilité est son point faible : environ 56 000 CHF immobilisés avant le premier encaissement, dans une entreprise dont les ventes reculent de 8 %. C’est précisément pour cela que je recommande un pilote — six entreprises genevoises, quarante vélos, douze mois — et non un déploiement : le format répond à la faiblesse que le SAF a identifiée. Ce que nous acceptons de sacrifier, c’est de la trésorerie bloquée et une croissance plus lente ; ce que cela nous permet, c’est d’apprendre le métier d’opérateur de mobilité avec un risque borné et une sortie possible. La condition de réussite est le sourcing des batteries : sans un second fournisseur hors Asie, l’engagement de disponibilité est intenable. Et je saurai dans douze mois si j’avais raison, parce que je regarderai cinq chiffres : le taux de renouvellement d’abonnement, la marge par vélo et par an, le nombre d’interventions par vélo, le délai moyen d’intervention et la part du chiffre d’affaires récurrent.',
    },
  ],

  // -------------------------------------------------------------- Livrable

  livrable: {
    titre: 'Le brouillon à la fin de l’étape 5',
    lignes: [
      'SAF — A tombe sur S : ne répond pas au recul de 8 %',
      'SAF — C tombe sur F : parc entier + métier à réinventer',
      'SAF — B passe les trois → RETENUE, et seule réversible',
      'Point faible de B = F financière : ≈ 56 000 CHF immobilisés',
      'Acceptabilité : le point à traiter = les mécaniciens',
      '→ les associer au contrat de service + former 2 au diagnostic batterie',
      'RECO : pilote, 6 entreprises, 40 vélos, 12 mois, vente maintenue',
      'Sacrifice : trésorerie bloquée + croissance plus lente',
      'Condition de réussite : un 2e fournisseur de batteries hors Asie',
      'KPI : renouvellement 70 % · marge/vélo/an ≥ 300 CHF · interventions ≤ 3',
      'KPI : délai ≤ 48 h · part du CA récurrent 10 %',
      'Tension à dire en conclusion : marge immédiate contre revenu récurrent',
    ],
  },

  // --------------------------------------------------------------- Pièges

  pieges: [
    {
      titre: 'Faire le SAF et ne pas conclure',
      explication:
        'Dérouler les trois critères pour les trois options, puis dire « les trois ont leurs mérites ». 📘 Le SAF sert à trancher, pas à décrire : sans décision, le diagnostic entier ne débouche sur rien, et c’est l’erreur la plus coûteuse de tout l’oral.',
      reflexe:
        'Se donner une règle de temps : la phrase « je retiens l’option… » doit être prononcée, même si l’analyse n’est pas terminée. Une décision imparfaitement argumentée vaut mieux qu’une analyse parfaite sans décision.',
    },
    {
      titre: 'Traiter les trois critères comme un seul',
      explication:
        'Répondre trois fois « c’est une bonne option », avec trois formulations différentes. Les trois filtres testent des choses distinctes : la pertinence au regard du diagnostic, l’adhésion des acteurs, les moyens disponibles. Une option peut réussir l’un et échouer l’autre — c’est justement ce qui rend l’outil utile.',
      reflexe:
        'Le mémo en trois mots : dois-je ? acceptent-ils ? puis-je ? Si la réponse à deux filtres est la même phrase, c’est qu’un des deux n’a pas été fait.',
    },
    {
      titre: 'Répondre « les parties prenantes accepteront »',
      explication:
        'La phrase ne nomme personne, ne cite aucun intérêt, et ne peut être ni vérifiée ni contredite. Le jury la sanctionne immédiatement, parce qu’elle prouve que l’acceptabilité n’a pas été travaillée. Le cas d’école : une usine s’automatise, c’est rentable et techniquement faisable, et cinq cents suppressions de postes font tout échouer.',
      reflexe:
        'S’imposer une forme fixe — tel acteur acceptera ou refusera parce que tel intérêt précis, donc tel remède — et la répéter pour trois acteurs au moins, dont un qui perd quelque chose. Une acceptabilité où tout le monde est content est une acceptabilité qu’on n’a pas faite.',
    },
    {
      titre: 'Cacher la faiblesse de l’option retenue',
      explication:
        'On croit renforcer sa recommandation en la présentant sans défaut. L’effet est exactement inverse : un jury qui trouve lui-même la faiblesse conclut qu’elle a été manquée, pas assumée — et tout le raisonnement devient suspect.',
      reflexe:
        'Dire la faiblesse avant que le jury ne la trouve, et enchaîner sur le remède dans la même phrase : « son point faible est la faisabilité financière, c’est précisément pourquoi je recommande un pilote et non un déploiement ». La faiblesse devient alors la justification du format.',
    },
    {
      titre: 'Terminer sans indicateur, ou avec des indicateurs uniquement financiers',
      explication:
        'Sans indicateur, la décision reste invérifiable : dans un an, on saura si l’entreprise va bien, ce qui n’est pas la même chose que savoir si la stratégie a marché. Avec des indicateurs uniquement financiers, on ne voit venir ni l’échec opérationnel ni l’échec social. Et un indicateur d’impact exprimé par unité peut s’améliorer pendant que l’impact total empire.',
      reflexe:
        'Trois à cinq indicateurs, chacun avec une cible et une échéance, dont au moins un non financier. Puis, sur toute question d’impact, exiger la valeur absolue plutôt que la valeur par unité.',
    },
  ],
}
