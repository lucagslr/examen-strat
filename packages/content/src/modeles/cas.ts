import type { CasAnalyse } from './types'

/**
 * Le fil rouge. Un seul cas, repris par les 25 fiches « modèle » et déroulé
 * de bout en bout par les neuf étapes de l'analyse guidée. Il vient des fiches
 * de méthode du cours, où il sert déjà d'exemple continu.
 *
 * L'énoncé est écrit comme un énoncé d'examen : des faits, des chiffres, et
 * une décision à prendre — jamais l'analyse elle-même.
 */
export const casFilRouge: CasAnalyse = {
  id: 'atelier-leman',
  nom: 'Atelier Léman SA',

  enonce: [
    'Atelier Léman SA est une PME genevoise de 45 salariés, fondée il y a quinze ans, qui réalise 6,2 M CHF de chiffre d’affaires.',
    'Elle exerce deux activités. La première : elle assemble et vend des vélos électriques haut de gamme, vendus 2 600 CHF en moyenne pour un coût de revient de 1 400 CHF. La seconde : elle répare et entretient des vélos de toutes marques, dans deux ateliers situés à Carouge et à Plainpalais.',
    'Sa marque est connue localement et ses mécaniciens sont réputés : ils diagnostiquent des pannes électroniques que les ateliers de quartier ne savent pas traiter. L’équipe est stable et se forme en interne.',
    'Les batteries, composant le plus cher et le plus critique du vélo, sont achetées à deux fournisseurs asiatiques.',
    'Depuis deux ans, les ventes de vélos reculent de 8 %. Des marques en ligne à bas prix se sont installées sur le marché suisse. Dans le même temps, la Ville et le Canton de Genève multiplient les subventions à la mobilité douce, notamment pour les entreprises qui équipent leurs collaborateurs.',
    'La direction hésite entre deux directions : défendre son activité de vente de vélos, ou basculer vers un abonnement mobilité tout compris facturé aux entreprises genevoises — vélo, entretien, remplacement et assistance inclus.',
  ],

  consigne:
    'Analysez la situation d’Atelier Léman SA et formulez une recommandation argumentée.',

  chiffres: [
    {
      valeur: '45 salariés · 6,2 M CHF',
      libelle: 'La taille de l’entreprise',
      pourquoi:
        'Fixe l’ordre de grandeur de ce qui est faisable. Une PME de cette taille ne finance pas un parc de mille vélos, mais elle peut mener un pilote. Ce chiffre servira à l’étape du SAF, dans la faisabilité financière.',
    },
    {
      valeur: '2 600 CHF vendu · 1 400 CHF de coût',
      libelle: 'La marge unitaire de la vente',
      pourquoi:
        'C’est l’équation de profit actuelle : 1 200 CHF encaissés le jour de la livraison. Le chiffre devient décisif quand on le compare au modèle d’abonnement, où la même somme arrive étalée sur plusieurs années. C’est là que se logera le vrai obstacle.',
    },
    {
      valeur: 'Deux activités distinctes',
      libelle: 'Vente de vélos · réparation et service',
      pourquoi:
        'Les deux n’ont ni les mêmes clients, ni les mêmes concurrents, ni les mêmes facteurs clés de succès : ce sont deux domaines d’activité stratégiques. Les traiter ensemble produirait une analyse fausse, parce qu’elle moyennerait une position faible et une position forte.',
    },
    {
      valeur: 'Deux fournisseurs de batteries',
      libelle: 'La concentration de l’approvisionnement',
      pourquoi:
        'La question ne le mentionne pas — c’est précisément pour cela qu’il faut le relever. Deux fournisseurs sur le composant le plus cher, c’est un pouvoir de négociation des fournisseurs élevé, et une faiblesse interne qui va bloquer une des options.',
    },
    {
      valeur: '− 8 % sur deux ans',
      libelle: 'Le recul des ventes',
      pourquoi:
        'C’est le symptôme, pas le problème. Tout le travail de la première étape consiste à remonter du symptôme au problème : pourquoi les ventes reculent-elles, et le modèle de revenus est-il encore adapté ?',
    },
    {
      valeur: 'Subventions cantonales à la mobilité douce',
      libelle: 'L’intervention publique',
      pourquoi:
        'L’État solvabilise une demande d’entreprise qui n’existait pas. C’est une opportunité pour qui sait servir des flottes — et, en même temps, un appel d’air pour des concurrents mieux financés. Un même fait produit une opportunité et une menace : c’est le geste central du diagnostic externe.',
    },
    {
      valeur: 'Mécaniciens capables de diagnostiquer l’électronique',
      libelle: 'La compétence rare',
      pourquoi:
        'Une compétence liée aux personnes et aux processus internes, donc peu transférable et peu imitable. C’est le seul élément du cas qui puisse fonder un avantage concurrentiel qui dure.',
    },
  ],
}
