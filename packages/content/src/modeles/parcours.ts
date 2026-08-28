import type { ParcoursModeles } from './types'

/**
 * Le découpage : partir de zéro et savoir tenir un oral en moins de douze
 * heures. L'ordre n'est pas celui des schémas, c'est celui du raisonnement —
 * on n'apprend pas un outil avant de savoir à quelle question il répond.
 *
 * Chaque séance se termine par un contrôle qu'on se fait à soi-même, à voix
 * haute. Tant qu'on ne sait pas le passer, on ne change pas de séance :
 * relire une deuxième fois coûte moins cher que découvrir le trou à l'oral.
 */
export const parcours12h: ParcoursModeles = {
  titre: 'Tout apprendre en moins de 12 heures',
  intro:
    'Huit séances, de une à deux heures. On commence par comprendre à quoi sert l’ensemble, puis on descend outil par outil, et on termine par l’exercice réel : dix minutes de préparation, dix minutes de passage. À la fin de chaque séance, un contrôle à voix haute — c’est le seul moyen de savoir si l’on a compris ou seulement lu.',
  heures: 11,

  seances: [
    {
      numero: 1,
      titre: 'À quoi sert tout ça, et dans quel ordre',
      duree: 60,
      objectif:
        'Comprendre que les outils forment une chaîne : chaque étape produit la matière première de la suivante. Sans cette carte, les outils restent une liste à réciter.',
      modeles: ['perimetre', 'parties-prenantes'],
      etapes: ['e0'],
      controle:
        'Redire de mémoire l’enchaînement complet — externe et interne, puis SWOT, puis options, puis SAF, puis recommandation — en expliquant pourquoi le SWOT est au milieu et pas au début.',
    },
    {
      numero: 2,
      titre: 'Regarder dehors',
      duree: 90,
      objectif:
        'Savoir transformer un fait de l’énoncé en opportunité ou en menace pour cette entreprise-là. C’est le geste que la plupart des candidats ne font pas : ils listent des thèmes au lieu de tirer des conséquences.',
      modeles: ['pestel', 'porter', 'ocean-bleu-erac'],
      etapes: ['e1'],
      controle:
        'Prendre un fait — « le canton subventionne les vélos d’entreprise » — et dérouler à voix haute : fait, évolution, conséquence pour le secteur, puis opportunité et menace, en disant pour qui.',
    },
    {
      numero: 3,
      titre: 'Regarder dedans',
      duree: 75,
      objectif:
        'Distinguer ce que l’entreprise possède de ce qu’elle sait faire, et savoir dire si son avantage tiendra. Une force se juge toujours par rapport à quelqu’un.',
      modeles: ['ressources-competences', 'chaine-de-valeur'],
      etapes: ['e2'],
      controle:
        'Citer une force d’Atelier Léman et prouver qu’elle est durable, en passant par la transférabilité et l’imitabilité — pas en affirmant qu’elle est « importante ».',
    },
    {
      numero: 4,
      titre: 'Comment l’entreprise gagne de l’argent',
      duree: 90,
      objectif:
        'Comprendre qu’un business model n’est pas un produit : c’est un système où les blocs se tiennent ou se contredisent. C’est aussi ce qui rend la faisabilité argumentable au lieu d’être une impression.',
      modeles: ['rcov', 'bmc'],
      etapes: ['e3'],
      controle:
        'Expliquer ce que le passage de la vente à l’abonnement change dans quatre blocs au moins, et nommer le bloc qui pose problème.',
    },
    {
      numero: 5,
      titre: 'Trancher',
      duree: 75,
      objectif:
        'Passer du diagnostic à la décision : croiser, générer des options réellement différentes, les filtrer, choisir, et rendre le choix vérifiable.',
      modeles: ['swot', 'saf'],
      etapes: ['e4', 'e5'],
      controle:
        'Produire les quatre croisements du SWOT sur le cas, puis dire quelle option on retient, ce qu’on sacrifie, et à quelle condition elle tient.',
    },
    {
      numero: 6,
      titre: 'La durabilité, sans casser la viabilité',
      duree: 105,
      objectif:
        'Placer la durabilité là où elle agit vraiment — dans le diagnostic, dans le business model, dans le SAF — et savoir nommer la tension entre coûts immédiats et bénéfices différés au lieu de la masquer.',
      modeles: [
        'wedding-cake',
        'donut',
        'durabilite-forte-faible',
        'agenda-2030',
        'trois-r',
        'bmc-durable',
      ],
      etapes: ['e6'],
      controle:
        'Expliquer la différence entre les ODD et les limites planétaires, puis dire où se cachent les externalités d’Atelier Léman et qui les paie.',
    },
    {
      numero: 7,
      titre: 'Le numérique, dans les deux sens',
      duree: 105,
      objectif:
        'Ne jamais répondre à sens unique sur une question numérique : localiser l’impact, tester l’effet rebond, questionner le besoin avant d’optimiser, et traiter la dimension sociale.',
      modeles: [
        'rne',
        'trois-postes',
        'effet-rebond',
        'sobriete-qta',
        'achats-durables',
        'wcag-pour',
        'privacy',
        'collecte-oisf',
      ],
      etapes: ['e7'],
      controle:
        'Démontrer en trois phrases qu’un gain d’efficacité de 30 % peut se solder par une hausse de la consommation totale, et dire quel indicateur permet de le voir.',
    },
    {
      numero: 8,
      titre: 'Restituer',
      duree: 60,
      objectif:
        'Faire l’exercice en vrai : dix minutes de préparation sur un cas, dix minutes à voix haute. Le contenu est acquis, c’est la conduite qui se travaille ici.',
      modeles: [],
      etapes: ['e8'],
      controle:
        'Dérouler l’analyse complète d’Atelier Léman à voix haute en dix minutes, en gardant la moitié du temps pour ce qui suit le diagnostic, et en terminant sur la tension plutôt que sur un résumé.',
    },
  ],
}
