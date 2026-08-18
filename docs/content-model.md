# Modèle de contenu

Ce document décrit la structure du corpus. Le code de référence est
`packages/content/src/types.ts`, qui en est la définition exécutable.

---

## Principe fondateur

> **Une seule source de vérité par notion.**

Il n'existe pas une définition de PESTEL dans le glossaire, une autre dans la
flashcard, une troisième dans le quiz. Il existe **une** notion `pestel`, et
tout le reste la référence par son identifiant.

```
NOTION pestel
│
├── définitionCours · explicationSimple · pourquoiExiste · objectif
├── usage (quand utiliser / quand ne pas utiliser)
├── commentUtiliser[] · exemples[] · pièges[] · limites[] · variantes[]
├── phraseExamen · chiffres[] · motsClés[] · sources[]
│
├── référencée par → relations
├── référencée par → flashcards
├── référencée par → quiz
├── référencée par → questions
├── référencée par → cas
├── référencée par → parcours et combinaisons
└── référencée par → mini-jeux
```

Conséquence : corriger une définition à un seul endroit la corrige partout.
La validation refuse toute référence vers une notion inexistante.

---

## Identifiants

Un identifiant de notion est **permanent**. La progression de l'utilisateur
est indexée dessus : le renommer ferait perdre son avancement.

Convention : minuscules, sans accent, mots séparés par des tirets.
`pestel`, `porter-five-forces`, `chaine-de-valeur`, `bmc-durable`,
`effet-rebond`, `exclusion-indirecte`.

Le `slug` d'URL est identique à l'`id`, ce qui rend `#/notions/pestel`
prévisible et partageable.

---

## Provenance et priorité

Le cours distingue trois niveaux de provenance ; le corpus les conserve dans
le champ `provenance` :

| Valeur | Signification | Statut à l'examen |
|---|---|---|
| `cours` | Enseigné dans les supports | À restituer fidèlement |
| `interpretation` | Lien logique reconstruit entre plusieurs éléments | À formuler comme son raisonnement |
| `complement` | Apport académique hors supports | Bonus, jamais présenté comme « du cours » |

La `priorite` reprend la hiérarchie du cours : `1` indispensable, `2` très
important, `3` complément. Elle pilote la sélection des flashcards, la
composition des sessions et le tri des résultats de recherche.

---

## Variantes : la règle de fidélité

Les supports du cours emploient parfois plusieurs formulations pour la même
chose. **On ne les uniformise jamais.** Le champ `variantes` conserve chaque
formulation, le document qui l'emploie, l'articulation entre elles et la
consigne d'examen.

```ts
variantes: [
  {
    sujet: 'Le « E » du PESTEL',
    formulations: [
      { libelle: 'Éthique',    ou: 'Cours 2, slide 10' },
      { libelle: 'Écologique', ou: 'Cours 2, slide 11' },
      { libelle: 'Le facteur environnemental et éthique', ou: 'Cours 2, slide 19' },
    ],
    explication: 'Dans ce cours, le « E » est un facteur fusionné…',
    consigneExamen: 'Énonce « environnemental et éthique », signale les autres.',
  },
]
```

Quatre variantes majeures sont documentées et testées : le E du PESTEL,
la matrice ERAC, les libellés de la chaîne de valeur, le plancher social
(assainissement / réseaux).

---

## Relations : des objets de première classe

Une relation n'est jamais une simple flèche. Elle porte un **type** et une
**description obligatoire** — une flèche sans phrase n'apprend rien.

```ts
{
  source: 'pestel',
  target: 'swot',
  type: 'ALIMENTE',
  description: "Le cours propose de restituer le PESTEL directement en
                opportunités / menaces : le format de sortie du PESTEL est
                déjà le format d'entrée du SWOT.",
}
```

### Les 17 types

| Groupe | Types |
|---|---|
| Flux | `ALIMENTE` · `EST_ALIMENTE_PAR` · `DEPEND_DE` · `PEUT_CONDUIRE_A` |
| Séquence | `PRECEDE` · `SUIT` |
| Composition | `FAIT_PARTIE_DE` · `CONTIENT` |
| Usage | `UTILISE` · `EST_UTILISE_PAR` · `ILLUSTRE` · `EST_EXEMPLE_DE` · `EST_APPLIQUE_DANS` |
| Contraste | `S_OPPOSE_A` · `NE_PAS_CONFONDRE` |
| Renfort | `COMPLETE` · `RENFORCE` |

### Déclaration dans un seul sens

Une relation se déclare une fois, dans son sens canonique. Le sens inverse est
**dérivé automatiquement** par `packages/domain/src/graph.ts` à partir de
`metaRelations[].inverse` :

```
déclaré :  pestel  ALIMENTE          swot
dérivé  :  swot    EST_ALIMENTE_PAR  pestel
```

La fiche SWOT affiche donc « Est alimenté par : PESTEL » sans que personne ait
eu à écrire la relation deux fois — et sans risque de divergence.

Les types `symetrique` (comme `NE_PAS_CONFONDRE`) se lisent identiquement dans
les deux sens.

### Cycles interdits

Les types marqués `acyclique` refusent les cycles : `A PRECEDE B PRECEDE A`
est une erreur de modélisation, pas une subtilité. La validation détecte le
cycle et affiche le chemin fautif.

---

## Les entités du corpus

### Notion

Le champ obligatoire minimal : `id`, `slug`, `nom`, `categorie`, `type`,
`priorite`, `definitionCours`, `explicationSimple`, `sources`, `provenance`.

`definitionCours` est la formulation du cours. **On ne la réécrit jamais**
parce qu'une autre tournure paraîtrait plus élégante. La reformulation
pédagogique a son champ : `explicationSimple`.

### Question

`origine` vaut `officielle` (les 22 corrigées) ou `probable` (les 55
d'entraînement). Le champ `notions` référence ; la `reponse` ne recopie jamais
une définition.

Le champ optionnel `guidage` transforme la question en atelier de construction
en 10 étapes : verbe de consigne → notions → outil → plan → arguments →
exemple → arbitrage → rédaction → auto-correction → corrigé.

Les guidages volumineux vivent dans `guidages.ts`, fusionnés dans `index.ts`.

### Flashcard

Six types, jamais uniquement « question → définition » :
`definition`, `distinction`, `composition`, `relation`, `application`,
`reconnaissance`. La validation exige que les six soient représentés.

### Quiz

Huit mécaniques : `qcm`, `multiple`, `vrai-faux`, `association`, `classement`,
`categorisation`, `ordonnancement`, `texte-a-trous`.

**Règle absolue** : toute option fausse porte une `explication` qui dit
*pourquoi* elle est fausse. Pas « mauvaise réponse ». La validation le vérifie
et le build échoue sinon.

### Cas

`texte` en paragraphes, `extraits` marquables (mode ANALYSER), `outilsPertinents`
et `outilsNonPertinents` (pour que le choix d'outil soit un vrai exercice),
`questions` avec leur corrigé, `chiffres` du cas.

### Parcours et combinaisons

Un **parcours** répond à une question par une suite ordonnée de notions, chaque
étape expliquant son rôle dans le raisonnement.

Une **combinaison** montre ce que produit l'assemblage de plusieurs outils :
`entrees[] → sorties[]`, avec explication, schéma texte et exemple.

### Mini-jeux

Regroupés dans un objet `Jeux` unique. Chacun cible une erreur réelle
d'examen. Les duels « ne pas confondre » alimentent directement le registre
des erreurs.

---

## Validation

`npm run validate:content` — le build échoue sur toute **erreur**, jamais sur
un simple avertissement.

### Erreurs bloquantes

- identifiant ou slug dupliqué ;
- relation vers une notion inexistante, réflexive, dupliquée, sans description ;
- cycle sur un type de relation acyclique ;
- catégorie, source ou cas inexistant ;
- notion sans définition, sans explication simple, sans source, à priorité invalide ;
- question, flashcard ou quiz sans notion ;
- option de quiz fausse sans explication ;
- QCM à plusieurs bonnes réponses ;
- texte à trous incohérent (nombre de trous ≠ nombre de réponses) ;
- type de flashcard ou de quiz absent du corpus ;
- couverture incomplète des 22 et des 55 questions, ou numéro manquant ;
- guidage orphelin, ou guidage sans arbitrage correct.

### Avertissements

- notion sans aucune relation déclarée ;
- notion de priorité 1 n'apparaissant dans aucune flashcard, quiz ou question ;
- parcours de moins de 3 étapes, duel de moins de 4 cartes.

`npm run report:content` affiche la couverture ; `npm run audit:final` y ajoute
les contrôles de sécurité et de build.

---

## Hiérarchie des sources

En cas de divergence entre documents, le rang le plus faible l'emporte
(`packages/content/src/categories.ts`) :

1. Encyclopédie complète
2. Corrigés officiels (TP01, TP02A, TP02B, TP04, Oncle Hansi, SilverDigital)
3. Questions d'examen corrigées
4. Méthodologie d'examen
5. Flashcards et mémos
6. Synthèse de priorité et glossaire
7. Contenus secondaires

Chaque notion, question et cas déclare ses `sources`, vérifiées à la
validation.
