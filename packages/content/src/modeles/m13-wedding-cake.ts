import type { Modele } from './types'

/**
 * 13 — LE WEDDING CAKE DE LA DURABILITÉ
 * =====================================
 *
 * 📘 Sources du cours : `20260417_La_durabilité.pdf`, slide 11 (« Le "Wedding
 * Cake" ») et `20260529_JR_CoursNumDura_HEGGE.pdf`, slide 46 (« The SDG
 * "wedding cake". Source : Stockholm Resilience Institute »).
 *
 * Le dessin d'origine empile les 17 objectifs de développement durable en trois
 * étages traversés par un axe vertical. Il est redessiné ici en trois cercles
 * emboîtés, ce qui rend visible la même affirmation : l'économie est encastrée
 * dans la société, elle-même encastrée dans la biosphère.
 */

export const modele: Modele = {
  id: 'wedding-cake',
  numero: 13,
  slug: 'wedding-cake',
  nom: 'Wedding cake de la durabilité',
  sousTitre: 'L’économie dépend de la société, qui dépend de la biosphère',
  famille: 'durabilite',
  etape: 'transverse',

  question:
    'Quand deux objectifs s’opposent — de l’argent gagné d’un côté, un dégât écologique ou social de l’autre — lequel prime ?',

  enUnePhrase:
    'Les 17 objectifs de développement durable (les ODD, la liste mondiale adoptée par l’ONU en 2015) ne sont pas un menu où l’on choisit : ils s’empilent en trois étages — biosphère, société, économie — et chaque étage ne tient que si celui du dessous tient, ce qui interdit de racheter une perte en bas par un gain en haut.',

  produit:
    'Un ordre de priorité entre objectifs qui s’opposent, et un verdict sur un projet : quel étage il améliore, quel étage il dégrade, et ce qu’il faudrait corriger pour qu’il devienne recevable.',

  quandUtiliser: [
    'Quand deux objectifs entrent en conflit et qu’il faut dire lequel passe devant. C’est son seul vrai usage : il tranche, il ne planifie pas.',
    'Quand la question porte sur les ODD et qu’il faut montrer qu’on sait les ordonner, pas seulement les réciter.',
    'Pour critiquer la vision des « trois piliers » (économique, social, environnemental côte à côte) : le wedding cake est exactement la correction de cette image.',
    'Pour tester un projet présenté comme « vert » : quel étage gagne, quel étage perd ? Beaucoup de projets écologiques dégradent l’étage social.',
    'En ouverture d’une réponse d’oral sur la durabilité : trois étages posés en quinze secondes cadrent tout ce qui suit.',
  ],

  quandNePasUtiliser: [
    'Pour construire un plan d’action : c’est un cadre normatif, il dit ce qui doit primer, jamais quoi faire lundi matin. L’outil d’action est le business model canvas durable.',
    'Pour mesurer quoi que ce soit : il n’a ni seuil, ni chiffre, ni indicateur. Les seuils viennent des limites planétaires, les bornes viennent du donut.',
    'Comme argument moral tout seul. Sans un cas et un verdict étage par étage, ce n’est qu’un joli dessin — et l’examinateur le voit tout de suite.',
  ],

  schema: {
    h: 720,
    description:
      'Trois cercles emboîtés — la biosphère contient la société, qui contient l’économie — entourés de ce que cet emboîtement remplace, de ce qu’il impose et de ce qu’il sert à trancher.',
    noeuds: [
      {
        id: 'bio',
        titre: 'BIOSPHÈRE',
        lignes: ['ce qui rend la vie possible'],
        x: 280,
        y: 40,
        l: 440,
        h: 440,
        forme: 'cercle',
        ton: 'accent',
        point: 'biosphere',
      },
      {
        id: 'soc',
        titre: 'SOCIÉTÉ',
        lignes: ['ce qui rend la vie digne'],
        x: 350,
        y: 110,
        l: 300,
        h: 300,
        forme: 'cercle',
        point: 'societe',
      },
      {
        id: 'eco',
        titre: 'ÉCONOMIE',
        lignes: ['produire, répartir'],
        x: 420,
        y: 180,
        l: 160,
        h: 160,
        forme: 'cercle',
        point: 'economie',
      },
      {
        id: 'liste',
        titre: 'LES 17 ODD',
        lignes: ['17 cases de même taille', 'aucun ordre entre elles', '→ on croit choisir'],
        x: 40,
        y: 70,
        l: 220,
        h: 140,
        ton: 'alerte',
        point: 'liste-plate',
      },
      {
        id: 'odd17',
        titre: 'ODD 17',
        lignes: ['PARTENARIATS', 'au sommet, il traverse', 'les trois étages'],
        x: 40,
        y: 300,
        l: 220,
        h: 140,
        point: 'partenariats',
      },
      {
        id: 'regle',
        titre: 'LA RÈGLE',
        lignes: ['un gain en haut ne', 'rachète jamais une', 'perte en bas'],
        x: 740,
        y: 70,
        l: 220,
        h: 140,
        ton: 'positif',
        point: 'regle',
      },
      {
        id: 'forte',
        titre: 'DURABILITÉ FORTE',
        lignes: ['le capital naturel ne', 'se remplace pas par', 'du capital financier'],
        x: 740,
        y: 300,
        l: 220,
        h: 140,
        point: 'durabilite-forte',
      },
      {
        id: 'contraste',
        titre: 'CE QU’IL CORRIGE',
        lignes: ['3 cercles à égalité (1997) :', 'on arbitre, on compense', '= durabilité faible'],
        x: 40,
        y: 540,
        l: 420,
        h: 140,
        ton: 'danger',
        point: 'trois-cercles',
      },
      {
        id: 'usage',
        titre: 'CE QU’IL SERT À FAIRE',
        lignes: ['devant un projet : quel étage', 'gagne, lequel perd ?', 'la base prime toujours'],
        x: 540,
        y: 540,
        l: 420,
        h: 140,
        ton: 'positif',
        point: 'usage',
      },
    ],
    liens: [
      { de: 'liste', vers: 'bio', arrive: 'gauche' },
      { de: 'odd17', vers: 'bio', arrive: 'gauche', trait: 'pointille' },
      { de: 'bio', vers: 'regle', depuis: 'droite' },
      { de: 'bio', vers: 'forte', depuis: 'droite' },
      { de: 'bio', vers: 'contraste', depuis: 'bas', libelle: 'corrige', ton: 'danger' },
      { de: 'bio', vers: 'usage', depuis: 'bas', libelle: 'sert à décider' },
    ],
    note:
      '📘 Répartition des ODD par étage : biosphère 6 · 13 · 14 · 15 — société 1 à 5 · 7 · 11 · 16 — économie 8 · 9 · 10 · 12 — partenariats 17, au sommet, qui traverse tout.',
  },

  points: [
    {
      id: 'biosphere',
      libelle: 'BIOSPHÈRE — l’étage du bas',
      cestQuoi:
        'La biosphère, c’est la mince couche de la planète où la vie existe : climat stable, eau douce, océans, sols vivants. C’est l’étage qui porte les deux autres. 📘 Le cours y rattache les ODD 6 (eau propre), 13 (climat), 14 (vie aquatique) et 15 (vie terrestre).',
      question:
        'De quelles conditions naturelles cette activité dépend-elle, et lesquelles abîme-t-elle — ici comme ailleurs ?',
      quoiMettre: [
        'Ce que l’activité prélève : matières premières, métaux, eau, énergie, sols.',
        'Ce qu’elle rejette : gaz à effet de serre, déchets, pollutions chimiques (📘 le cours parle d’« entités nouvelles » introduites dans la biosphère).',
        'Les limites planétaires touchées — 📘 Rockström, 2009 : neuf seuils à ne pas franchir, dont 7 sur 9 sont dépassés en 2025. Et 📘 « tout est lié » : dépasser une limite pèse sur les autres.',
        'Tout le trajet du produit, pas seulement l’atelier : 📘 « ici et ailleurs » désigne la chaîne d’approvisionnement entière.',
        'La fin de vie : ce que devient l’objet une fois inutilisable, et qui s’en occupe.',
      ],
      exemple:
        'Atelier Léman : les batteries. Le lithium est extrait ailleurs, la batterie parcourt des milliers de kilomètres, et sa fin de vie n’est organisée par personne. Les ateliers de Carouge et de Plainpalais sont propres — l’étage biosphère, lui, se joue chez les deux fournisseurs asiatiques.',
      piege:
        'Ne regarder que ce qu’on voit : l’atelier, la vitrine, la ville. L’étage du bas est presque toujours en amont, chez les fournisseurs.',
      reflexe:
        'Remonter la chaîne d’un cran à chaque affirmation : « et avant nous, il se passe quoi ? ». Si la réponse est « on ne sait pas », c’est déjà un résultat d’analyse.',
      notions: ['limites-planetaires', 'capital-naturel', 'plafond-ecologique', 'pensee-systemique'],
    },
    {
      id: 'societe',
      libelle: 'SOCIÉTÉ — l’étage du milieu',
      cestQuoi:
        'L’étage des conditions d’une vie humaine digne : santé, éducation, revenu et travail, logement, énergie, eau, paix, égalité. 📘 Le cours y rattache les ODD 1 à 5, 7, 11 et 16. Il repose sur la biosphère et porte l’économie — il n’est ni le sommet, ni la base.',
      question: 'Qui vit de cette activité, qui la subit, et qui en est exclu ?',
      quoiMettre: [
        'Les salariés : nombre, qualification, conditions de travail — ici et chez les fournisseurs.',
        'Les clients servis, et surtout les clients exclus : par le prix, par la distance, par l’outil numérique exigé.',
        'Le territoire : bruit, sécurité, place occupée, emplois locaux, impôts payés.',
        'La transmission des savoir-faire : formation, apprentissage, métiers qui disparaissent.',
        'L’égalité de traitement entre les personnes touchées, ici et ailleurs.',
      ],
      exemple:
        'Atelier Léman : 45 salariés, des mécaniciens très qualifiés, un savoir-faire qui se transmet — l’étage tient à Genève. Il se fissure ailleurs : les conditions de travail chez les deux fournisseurs de batteries ne sont pas vérifiées. Et un vélo à 2 600 CHF exclut de fait les petits budgets.',
      piege:
        'Croire qu’un gain écologique rachète une perte sociale : supprimer un accueil au guichet « pour réduire l’empreinte » en laissant de côté une partie des clients.',
      reflexe:
        'L’étage du milieu compte aussi. 📘 Le cours le dit ailleurs avec le plancher social du donut : réduire ses impacts en excluant des publics, ce n’est pas de la durabilité, c’est un déplacement du problème.',
      notions: ['plancher-social', 'donut', 'exclusion-indirecte'],
    },
    {
      id: 'economie',
      libelle: 'ÉCONOMIE — l’étage du haut',
      cestQuoi:
        'L’étage de la production et de sa répartition : travail décent et croissance, industrie et innovation, inégalités, consommation et production responsables. 📘 ODD 8, 9, 10 et 12. C’est le plus petit cercle et le plus haut étage : il n’existe que si les deux autres tiennent.',
      question:
        'Comment cette activité gagne-t-elle de l’argent — et cette façon de gagner exige-t-elle d’abîmer les deux étages du dessous ?',
      quoiMettre: [
        'Le chiffre d’affaires, la marge, la structure de coûts.',
        'Le moteur de revenus : le volume vendu ? la durée d’usage ? un service, un abonnement ?',
        'Les emplois financés et les revenus distribués — c’est ce qui relie cet étage à celui du milieu.',
        'Les coûts réels que l’entreprise ne paie pas et qui retombent sur des tiers : ce sont les externalités négatives.',
        '📘 L’ODD 12 (consommation et production responsables) est le seul détaillé par le cours : c’est celui qui parle directement du modèle d’affaires.',
      ],
      exemple:
        'Atelier Léman : 6,2 M CHF de chiffre d’affaires, une marge d’environ 1 200 CHF par vélo (2 600 − 1 400) et des ventes en recul de 8 % sur deux ans. Le moteur, c’est le volume de vélos neufs — donc le volume de batteries neuves. Le sommet est adossé à une pression sur la base.',
      piege:
        'Commencer le raisonnement par cet étage, parce que c’est le seul qu’on sait chiffrer. On finit par juger le projet à sa marge.',
      reflexe:
        'Le lire en dernier : d’abord de quoi l’activité dépend, ensuite combien elle rapporte. L’ordre de lecture du schéma est l’ordre du raisonnement.',
      notions: ['odd-12', 'equation-de-profit', 'externalite-negative'],
    },
    {
      id: 'partenariats',
      libelle: 'ODD 17 — les partenariats',
      cestQuoi:
        '📘 Le dix-septième objectif ne s’installe dans aucun étage : dans le visuel du cours il est au sommet et traverse tout. Il dit qu’aucun acteur — ni un État, ni une entreprise, ni une association — n’atteint seul les seize autres.',
      question: 'Avec qui faut-il agir pour que ce projet tienne, et qui n’y arrivera pas seul ?',
      quoiMettre: [
        'Les pouvoirs publics : commune, canton, subventions, réglementation à venir.',
        'Les clients organisés en partenaires : entreprises pilotes, collectivités, groupements.',
        'Les fournisseurs, avec les exigences qu’on inscrit dans les contrats.',
        'La filière aval : réparateurs, recycleurs, plateformes de réemploi.',
        'Les financeurs : banque, fonds, aides publiques — un projet durable coûte d’abord, rapporte ensuite.',
      ],
      exemple:
        'Atelier Léman : la Ville de Genève multiplie les subventions à la mobilité douce, six entreprises genevoises accueilleraient le pilote, et un recycleur de batteries reste à trouver. Aucun de ces trois maillons ne peut être remplacé par du travail interne.',
      piege:
        'L’oublier. C’est l’erreur la plus fréquente sur ce schéma, parce que l’ODD 17 n’est ni un étage ni un thème : il est sur le côté, et il saute de la mémoire.',
      reflexe:
        'Le placer en une phrase à la fin de la description : « et le 17, les partenariats, traverse les trois étages ». 📘 Il correspond au dernier des 5P de l’Agenda 2030 : Populations, Planète, Prospérité, Paix, Partenariats.',
      notions: ['odd', 'agenda-2030', 'cinq-p', 'parties-prenantes'],
    },
    {
      id: 'liste-plate',
      libelle: 'LES 17 ODD EN LISTE — le problème que le schéma résout',
      cestQuoi:
        '📘 L’Agenda 2030 — adopté le 25 septembre 2015 par les 193 États membres de l’ONU, 17 objectifs, 169 cibles — présente les ODD comme dix-sept pictogrammes alignés, tous de la même taille. 🔎 Cette mise en page laisse croire qu’ils sont équivalents et indépendants, comme un menu.',
      question: 'Pourquoi faut-il un second dessin, alors qu’on a déjà la liste officielle ?',
      quoiMettre: [
        'Ce que la liste apporte : le QUOI viser, un langage commun à 193 États, aux investisseurs et aux ONG.',
        'Ce qu’elle ne dit pas : l’ordre, les dépendances, ce qui prime quand deux objectifs se contredisent.',
        'Les chiffres à savoir citer : 25.09.2015 · 193 États · 17 objectifs · 169 cibles · échéance 2030.',
        'Le tri à faire dans un cas : 2 à 4 ODD matériels, c’est-à-dire réellement en jeu dans l’activité, jamais les 17.',
        'Un indicateur par ODD retenu, sinon l’objectif reste décoratif.',
      ],
      exemple:
        'Atelier Léman ne « fait » pas les 17 ODD. Deux sont matériels : l’ODD 12 (consommation et production responsables), parce que tout se joue dans la durée de vie des vélos, et l’ODD 11 (villes et communautés durables), parce que la mobilité genevoise est le terrain. Le reste serait de l’affichage.',
      piege:
        'Réciter les dix-sept objectifs à l’oral : c’est long, c’est plat, et cela montre surtout qu’aucun choix n’a été fait.',
      reflexe:
        'Trois ODD au maximum, chacun avec un indicateur. 📘 Afficher des logos ODD sans transformer le modèle, c’est du SDG-washing — une forme de greenwashing.',
      notions: ['agenda-2030', 'odd', 'odd-12', 'greenwashing'],
    },
    {
      id: 'regle',
      libelle: 'LA RÈGLE DE DÉPENDANCE',
      cestQuoi:
        'L’emboîtement traduit en règle de décision : un gain à un étage supérieur ne justifie jamais une dégradation à un étage inférieur. Tout le reste du schéma sert à appliquer cette phrase.',
      question: 'Ce projet améliore quel étage — et en dégrade-t-il un plus bas ?',
      quoiMettre: [
        'Un verdict par étage : améliore, dégrade, ou sans effet. Trois lignes, pas trois pages.',
        'Le cas interdit : dégradation en bas, gain en haut. On ne compense pas, on corrige ou on renonce.',
        'Le cas symétrique, souvent oublié : gain écologique payé par une exclusion sociale. Interdit aussi, l’étage du milieu n’a rien en dessous de lui à sacrifier.',
        'Le cas acceptable : une perte au sommet, si la viabilité de l’entreprise tient. Une entreprise morte ne finance aucune transition.',
        'La correction à apporter, formulée comme une action : c’est elle qui rend un projet recevable.',
      ],
      exemple:
        'Atelier Léman, option « pousser la vente de vélos » : plus de marge si les volumes repartent, plus de batteries neuves donc plus de dégâts en bas. La règle refuse ce troc. Option « abonnement mobilité » : sommet fragilisé à court terme, base et milieu préservés — recevable.',
      piege:
        'Transformer la règle en interdiction de gagner de l’argent, et rendre une réponse qui condamne l’entreprise au lieu de la conseiller.',
      reflexe:
        'La règle ordonne, elle n’interdit pas. Dis-le ainsi : « la base ne se négocie pas, le sommet se discute ».',
      notions: ['durabilite-forte', 'tensions-strategiques'],
    },
    {
      id: 'durabilite-forte',
      libelle: 'DURABILITÉ FORTE — ce que le dessin défend',
      cestQuoi:
        '📘 « La durabilité forte considère le capital naturel comme non substituable par d’autres formes de capital (économique, social) et priorise la préservation des écosystèmes et des limites planétaires comme conditions de base à l’existence de toute vie humaine et activité économique. » Le wedding cake en est la mise en image.',
      question: 'Peut-on remplacer ce qu’on détruit ici par ce qu’on gagne ailleurs ?',
      quoiMettre: [
        'Les deux mots à prononcer : capital naturel, non substituable.',
        'Son opposé, la durabilité faible : les capitaux seraient interchangeables, une perte environnementale se compenserait par un gain économique.',
        '📚 Attention à la provenance : la durabilité faible n’est pas définie dans les supports du cours. Si tu l’emploies, signale-le.',
        'La conséquence pratique : il faut réduire en valeur absolue, pas seulement améliorer le rendement par unité produite.',
        'Le lien avec le dessin : des étages emboîtés ne peuvent pas s’échanger — c’est la même affirmation, sous forme de figure.',
      ],
      exemple:
        'Atelier Léman ne « compense » pas la fin de vie non organisée de ses batteries par ses 45 emplois genevois : ce sont deux étages différents, et l’un porte l’autre. La compensation supposerait qu’ils soient côte à côte.',
      piege:
        'Prendre la compensation carbone pour une réponse à l’étage du bas — acheter des crédits ne remet pas de lithium dans le sol.',
      reflexe:
        '📘 Le cours défend explicitement la durabilité forte. Le dire à l’oral et l’adosser au schéma vaut mieux qu’une définition récitée.',
      notions: ['durabilite-forte', 'durabilite-faible', 'capital-naturel'],
    },
    {
      id: 'trois-cercles',
      libelle: 'CE QU’IL CORRIGE — les trois cercles',
      cestQuoi:
        '📘 Elkington, 1997 : économique, social et environnemental, trois cercles de même taille sur le même plan, la durabilité logée à leur intersection. 🔎 Étant à égalité, ils autorisent implicitement l’arbitrage entre eux. 📘 Le Mickey Mouse Model (Peet, 2009) caricature ce que ce modèle devient en pratique : un cercle économique énorme et deux petites « oreilles ».',
      question: 'Quelle représentation ai-je sous les yeux — trois cercles côte à côte, ou trois étages emboîtés ?',
      quoiMettre: [
        'La progression en trois temps : trois cercles (Elkington, 1997) → critique (Mickey Mouse, Peet, 2009) → correction (wedding cake, Stockholm).',
        'Ce que chaque étape ajoute : l’égalité, puis le constat que l’économique domine, puis la hiérarchie.',
        'Le couple de mots qui sépare les deux images : équilibre d’un côté, dépendance de l’autre.',
        '📚 Le complément possible : Elkington a forgé en 1997 la triple bottom line — « people, planet, profit ».',
        'La conclusion à énoncer : on passe de la durabilité faible à la durabilité forte.',
      ],
      exemple:
        'Sur Atelier Léman, un raisonnement en trois cercles donnerait : des emplois qualifiés (social) et de la marge (économique) contre des batteries opaques (environnemental), donc un équilibre à peu près acceptable. Le wedding cake refuse ce calcul, parce que les trois termes ne sont pas au même niveau.',
      piege:
        'Présenter les trois cercles comme le bon modèle parce que c’est le plus connu, et laisser croire qu’on ignore la critique.',
      reflexe:
        'Les citer comme l’étape d’avant, avec leur limite. 🔎 Dérouler les trois dates rapporte plus qu’une définition exacte : cela montre qu’on a compris un déplacement, pas appris une fiche.',
      notions: ['trois-cercles-elkington', 'mickey-mouse-model', 'durabilite-faible'],
    },
    {
      id: 'usage',
      libelle: 'CE QU’IL SERT À FAIRE — et à quel outil il passe la main',
      cestQuoi:
        'Un cadre normatif : il dit ce qui doit primer, pas comment s’y prendre. On l’utilise pour trancher entre objectifs contradictoires, puis on passe à un outil qui, lui, produit des décisions.',
      question: 'L’ordre est posé — avec quoi je le transforme maintenant en décisions concrètes ?',
      quoiMettre: [
        'Le test du projet, étage par étage, en trois lignes.',
        'La correction à apporter avant validation, écrite comme une action et rattachée à son étage.',
        'Le passage au donut (Raworth, 2017) pour les bornes : plafond écologique du côté de la biosphère, plancher social du côté de la société.',
        'Le passage au business model canvas durable pour la traduction, bloc par bloc : mission, impacts positifs, externalités négatives.',
        '📘 Des indicateurs en valeur absolue, pas par unité produite — sinon on vend plus et on « progresse » en même temps.',
      ],
      exemple:
        'Pour Atelier Léman : le wedding cake dit que la base prime → le donut dit jusqu’où (limites planétaires touchées par les batteries) et pas en dessous de quoi (les clients que le prix exclut) → le BMC durable réécrit les blocs revenus, ressources clés et partenaires pour l’abonnement.',
      piege:
        'Traiter le wedding cake comme un business model : « on va appliquer le wedding cake ». Il ne s’applique pas, il ordonne.',
      reflexe:
        'Une phrase de passage, à dire telle quelle : « les ODD donnent la liste, le wedding cake l’ordre, le donut les bornes, le BMC durable les décisions ».',
      notions: ['donut', 'bmc-durable', 'kpi'],
    },
  ],

  methode: [
    {
      titre: '1. Poser les trois étages avant de parler du cas',
      detail:
        'Écris-les de bas en haut : biosphère, société, économie. Dix secondes. Le simple fait de les écrire dans cet ordre installe le raisonnement et t’empêche de démarrer par la marge.',
      aEviter:
        'Commencer par l’économie parce que c’est l’étage qu’on sait chiffrer : le reste du raisonnement suivra la mauvaise pente.',
    },
    {
      titre: '2. Remplir chaque étage avec les faits du cas, en remontant la chaîne',
      detail:
        'Biosphère : ce que l’activité prélève et rejette, sur tout le trajet du produit. Société : qui en vit, qui la subit, qui en est exclu. Économie : d’où vient l’argent et de quoi ce moteur dépend. Deux ou trois faits par étage suffisent.',
      aEviter:
        'Ne remplir que ce que l’entreprise maîtrise. 📘 « Ici et ailleurs » : l’étage du bas est presque toujours chez les fournisseurs.',
    },
    {
      titre: '3. Qualifier l’effet du projet sur chaque étage : améliore, dégrade, sans effet',
      detail:
        'Trois lignes, avec un signe devant chacune. Cette étape transforme une description en jugement — c’est elle qui produit la valeur du modèle.',
      aEviter:
        'Écrire « impact positif sur la durabilité » sans dire à quel étage : une phrase pareille ne tranche rien.',
    },
    {
      titre: '4. Appliquer la règle et prononcer le verdict',
      detail:
        'Une dégradation en bas ne se rachète pas par un gain en haut. Si un étage inférieur perd, le projet ne passe pas en l’état, même s’il est rentable et même s’il crée des emplois.',
      aEviter:
        'Conclure « il faut trouver un équilibre entre les trois dimensions » : c’est exactement la phrase que le wedding cake est fait pour rendre impossible.',
    },
    {
      titre: '5. Nommer la correction qui rendrait le projet recevable',
      detail:
        'Une action par étage dégradé, formulée avec un verbe : organiser la reprise des batteries, maintenir un canal accessible, exiger un audit fournisseur. C’est ce qui distingue un avis d’un refus.',
      aEviter:
        'Proposer une compensation à la place d’une correction : elle rétablit l’arbitrage que le modèle vient d’interdire.',
    },
    {
      titre: '6. Choisir 2 à 4 ODD matériels, puis passer à l’outil suivant',
      detail:
        'Retiens les objectifs réellement en jeu, avec un indicateur en valeur absolue pour chacun. Puis enchaîne : le donut pour les bornes, le business model canvas durable pour la traduction en décisions.',
      aEviter:
        'Rester au niveau du cadre. Le wedding cake ne se met pas en œuvre : il désigne l’outil qui, lui, se met en œuvre.',
    },
  ],

  liens: [
    {
      vers: 'agenda-2030',
      nature: 'precise',
      explication:
        'L’Agenda 2030 donne la liste des 17 objectifs ; le wedding cake dit dans quel ordre ils tiennent. Même matière, rangée — la liste dit quoi viser, le gâteau dit ce qui conditionne quoi.',
    },
    {
      vers: 'durabilite-forte-faible',
      nature: 'prolonge',
      explication:
        'Le wedding cake est la durabilité forte mise en image : si les étages sont emboîtés, le capital naturel n’est pas substituable. Cite toujours les deux ensemble, jamais l’un sans l’autre.',
    },
    {
      vers: 'donut',
      nature: 'alimente',
      explication:
        'Le wedding cake donne l’ordre, le donut donne les bornes : plafond écologique du côté biosphère, plancher social du côté société. On passe de « qui dépend de qui » à « jusqu’où, et pas en dessous de quoi ».',
    },
    {
      vers: 'bmc-durable',
      nature: 'alimente',
      explication:
        'Le wedding cake est normatif : il ne fait rien entrer dans l’entreprise. L’outil qui traduit sa hiérarchie en décisions, bloc par bloc, c’est le business model canvas durable.',
    },
    {
      vers: 'saf',
      nature: 'alimente',
      explication:
        'Au moment du choix, l’étage du bas devient un critère d’acceptabilité : une option qui dégrade la biosphère ne se rattrape pas par sa faisabilité financière.',
    },
  ],

  pieges: [
    {
      titre: 'Décrire la forme sans dire ce qu’elle affirme',
      explication:
        '« Trois étages, biosphère en bas, économie en haut » est une description de dessin. L’empilement est un argument : il retire le droit d’arbitrer entre les étages. Sans cette phrase, la réponse ne vaut rien.',
      reflexe:
        'Après avoir décrit, ajouter systématiquement : « ce que cette forme interdit, c’est de compenser ».',
    },
    {
      titre: 'Le confondre avec les trois piliers',
      explication:
        'Trois dimensions côte à côte, ce sont les trois cercles d’Elkington (1997) — une représentation de durabilité faible. Trois étages emboîtés, c’est le wedding cake. Les mots « équilibre » et « pilier » trahissent la confusion.',
      reflexe:
        'Employer « encastré » ou « emboîté », jamais « équilibre ». Et citer la progression : 1997 → 2009 → Stockholm.',
    },
    {
      titre: 'Croire que l’écologie autorise à sacrifier le social',
      explication:
        'Un projet qui réduit les émissions en excluant une partie des clients dégrade l’étage du milieu. Et ce milieu ne se rattrape nulle part : en dessous de lui il n’y a que la base, qui ne se sacrifie pas davantage.',
      reflexe:
        'Toujours prononcer un verdict sur les trois étages, pas seulement sur celui du bas.',
    },
    {
      titre: 'Oublier l’ODD 17 et la source',
      explication:
        'Deux détails qui rapportent : les partenariats traversent les trois étages, et le visuel vient du Stockholm Resilience — 📘 le cours écrit « Institute ». Les oublier signale une lecture de seconde main.',
      reflexe:
        'Terminer la description par : « au sommet, l’ODD 17, les partenariats, qui traverse tout — visuel du Stockholm Resilience ».',
    },
    {
      titre: 'En faire un outil d’action',
      explication:
        '« Nous allons appliquer le wedding cake » ne veut rien dire : le modèle hiérarchise des objectifs, il ne produit ni plan, ni indicateur, ni décision d’entreprise.',
      reflexe:
        'Enchaîner sur l’outil qui agit : le business model canvas durable — et sur le donut si la question porte sur les seuils.',
    },
  ],

  variantes: [
    {
      sujet: 'Le nom de l’institution qui publie le visuel',
      formulations: [
        {
          texte: '« The SDG "wedding cake". Source : Stockholm Resilience Institute »',
          source: '📘 Cours numérique et durabilité, slide 46',
        },
        {
          texte: 'Stockholm Resilience Centre (Center), le même institut suédois — nom sous lequel le cours cite aussi les limites planétaires de Rockström',
          source: '📘 Encyclopédie du cours, sections sur le wedding cake et sur les limites planétaires',
        },
      ],
      consigne:
        'Ne tranche pas et ne corrige pas la slide. Dis : « le visuel vient du Stockholm Resilience — le cours écrit Institute, l’institution s’appelle Centre ». Mentionner l’écart montre que tu as lu la source, pas un résumé. 📘 La slide 11 du cours durabilité, elle, titre simplement « Le "Wedding Cake" » sans nommer de source.',
    },
    {
      sujet: 'Le détail de la répartition des 17 ODD entre les étages',
      formulations: [
        {
          texte: 'Biosphère 6 · 13 · 14 · 15 — Société 1 à 5, 7, 11, 16 — Économie 8 · 9 · 10 · 12 — Partenariats 17',
          source: '📘 Structure du visuel telle que l’encyclopédie du cours la restitue',
        },
        {
          texte: 'Les slides montrent les trois étages et l’ODD 17 au sommet, sans détailler objectif par objectif',
          source: '📘 Slides 11 et 46 — 🔎 le détail objectif par objectif est reconstruit',
        },
      ],
      consigne:
        'Cite la répartition, elle est juste et elle impressionne — mais si on te demande d’où elle vient, dis que le principe de la hiérarchie est celui du cours et que le détail est la répartition standard du Stockholm Resilience. Ce qui est noté, c’est la hiérarchie, pas la liste.',
    },
  ],

  exemple: {
    titre: 'Atelier Léman passe ses deux options au wedding cake',
    situation:
      'Le diagnostic est fait : ventes en recul de 8 % sur deux ans, marques low-cost en ligne, batteries dépendantes de deux fournisseurs asiatiques, réparation solide, Ville de Genève qui subventionne la mobilité douce. Reste à trancher : défendre la vente de vélos, ou basculer vers un abonnement mobilité pour les entreprises genevoises ? Les chiffres ci-dessous sont illustratifs, cohérents avec le reste du dossier.',
    deroule: [
      {
        etiquette: 'Étage biosphère',
        contenu:
          'Lithium extrait ailleurs, transport longue distance, fin de vie des batteries non organisée. Limites planétaires touchées : climat, entités nouvelles, usage des sols. C’est l’étage le plus dégradé — et il est en amont, là où l’entreprise est faible.',
      },
      {
        etiquette: 'Étage société',
        contenu:
          '45 salariés, mécaniciens très qualifiés, savoir-faire transmis, deux ateliers dans la ville : l’étage tient à Genève. Il se fissure ailleurs — conditions de travail non vérifiées chez les fournisseurs — et le prix de 2 600 CHF exclut une partie des habitants.',
      },
      {
        etiquette: 'Étage économie',
        contenu:
          '6,2 M CHF, marge d’environ 1 200 CHF par vélo vendu (2 600 − 1 400), ventes en recul de 8 %. Le moteur de revenus est le volume de neuf : plus l’entreprise va bien, plus la base paie.',
      },
      {
        etiquette: 'ODD 17 — partenariats',
        contenu:
          'Ville de Genève (subventions), six entreprises genevoises prêtes à tester, recycleur de batteries à trouver. Aucun étage ne se redresse en interne.',
      },
      {
        etiquette: 'Verdict — option « défendre la vente »',
        contenu:
          'Sommet : améliore, si les volumes repartent. Milieu : sans effet. Base : dégrade, un vélo vendu de plus est une batterie de plus. Gain en haut payé en bas — la règle refuse.',
      },
      {
        etiquette: 'Verdict — option « abonnement mobilité »',
        contenu:
          'Base : améliore — l’atelier reste propriétaire (c’est l’économie de la fonctionnalité), donc il supporte la fin de vie et a intérêt à faire durer. Milieu : améliore, la réparation qualifiée devient le cœur du métier. Sommet : fragilise à court terme, moins de vélos neufs vendus.',
      },
      {
        etiquette: 'Correction exigée avant validation',
        contenu:
          'Organiser la reprise et le réemploi des batteries en fin de contrat, et vérifier les conditions de travail chez les deux fournisseurs : sans ces deux actions, l’abonnement améliore le discours plus que la base.',
      },
      {
        etiquette: 'ODD retenus et indicateurs',
        contenu:
          'ODD 12 (consommation et production responsables) et ODD 11 (villes et communautés durables). Indicateurs en absolu : durée de vie moyenne des vélos en service, nombre de batteries réemployées — pas « impact par vélo », qui s’améliore quand on en vend plus.',
      },
    ],
    conclusion:
      'Le wedding cake ne choisit pas l’abonnement parce qu’il serait sympathique : il constate qu’une option finance son sommet en entamant sa base, et que l’autre accepte un sommet plus mince pour préserver les deux étages porteurs. Le pilote — 40 vélos chez 6 entreprises genevoises sur 12 mois — passe, à condition d’organiser la fin de vie des batteries. La suite se joue avec le donut, qui donnera les bornes, puis avec le BMC durable, qui réécrira les blocs revenus, ressources clés et partenaires.',
  },

  phraseOral:
    'Si je dessine trois cercles côte à côte, j’autorise implicitement l’arbitrage : un peu moins d’environnement contre un peu plus d’économie. Le wedding cake retire cette autorisation, parce que l’économie y est encastrée dans la société, elle-même encastrée dans la biosphère. Concrètement, pour Atelier Léman, la question n’est donc plus « combien de vélos vendre », mais « quelle activité tient à l’intérieur de sa base » — et c’est ce déplacement de question qui fait pencher vers l’abonnement.',

  aRetenir: [
    {
      cle: 'Source 📘',
      valeur:
        'Stockholm Resilience — le cours écrit « Institute », l’institution s’appelle « Centre ». Slide 11 du cours durabilité, slide 46 du cours numérique.',
    },
    { cle: 'Les trois étages', valeur: 'Biosphère → Société → Économie, de bas en haut.' },
    {
      cle: 'La répartition 📘',
      valeur: 'Biosphère 6 · 13 · 14 · 15 — Société 1 à 5, 7, 11, 16 — Économie 8 · 9 · 10 · 12 — Partenariats 17, au sommet.',
    },
    { cle: 'Ce qu’il affirme', valeur: 'Un ordre de dépendance, pas un équilibre à trouver.' },
    { cle: 'La règle', valeur: 'Un gain à l’étage du haut ne rachète jamais une perte à l’étage du bas.' },
    { cle: 'Ce qu’il rejette', valeur: 'La substituabilité entre étages — donc la durabilité faible.' },
    { cle: 'Le mot à placer', valeur: '« Encastrée » : l’économie est encastrée dans la société, elle-même encastrée dans la biosphère.' },
    {
      cle: 'Sa place',
      valeur: 'Les ODD donnent la liste, le wedding cake l’ordre, le donut les bornes, le BMC durable les décisions.',
    },
    { cle: 'La progression à citer', valeur: '3 cercles (Elkington, 1997) → Mickey Mouse (Peet, 2009) → wedding cake (Stockholm).' },
  ],

  notions: [
    'wedding-cake',
    'odd',
    'agenda-2030',
    'cinq-p',
    'odd-12',
    'durabilite',
    'durabilite-forte',
    'durabilite-faible',
    'capital-naturel',
    'trois-cercles-elkington',
    'mickey-mouse-model',
    'limites-planetaires',
    'donut',
    'plancher-social',
    'plafond-ecologique',
    'externalite-negative',
    'bmc-durable',
    'economie-fonctionnalite',
    'pensee-systemique',
  ],
}
