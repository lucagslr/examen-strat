# Modèle pédagogique

Ce document explique **pourquoi** l'application est organisée ainsi.
Le fil conducteur est celui du cours lui-même :

```
DÉCOUVRIR → COMPRENDRE → MÉMORISER → DISTINGUER
         → RELIER → APPLIQUER → ARGUMENTER → RÉPONDRE À L'EXAMEN
```

Une application de flashcards répond à « est-ce que Luca connaît SWOT ? ».
Celle-ci doit répondre à sept questions de plus : est-ce qu'il **distingue**
SWOT de PESTEL ? sait-il ce qui l'**alimente** ? sait-il l'**utiliser** ?
dans **SilverDigital** ? l'**expliquer à l'oral** ? passer de SWOT à SAF ?

C'est la différence entre mémoriser un cours et le maîtriser.

---

## Les six niveaux de maîtrise

« Notion consultée » ne signifie rien. Le niveau se construit par **paliers**,
chacun exigeant le précédent — on ne saute pas une marche.

| Niveau | Nom | Condition |
|---|---|---|
| 0 | Jamais vue | — |
| 1 | Découverte | La fiche a été ouverte |
| 2 | Comprise | La section « Comprendre » a été validée |
| 3 | Mémorisée | 60 % des flashcards de la notion sont au niveau ≥ 3 |
| 4 | Appliquée | Réussie dans un cas, un mini-jeu, ou 3 quiz à ≥ 70 % |
| 5 | Maîtrisée | Au moins une question d'examen traitée, quiz ≥ 85 % |

Le passage de 4 à 5 exige d'avoir **produit une réponse d'examen**. C'est
délibéré : le cours évalue un raisonnement, pas une récitation.

La fiche notion affiche le détail des critères et **ce qu'il reste à faire**
pour monter d'un niveau.

Implémentation : `packages/domain/src/mastery.ts`.

---

## Découvrir et comprendre

La fiche notion est structurée en quatre onglets — **Comprendre, Retenir,
Relier, S'entraîner** — qui reprennent exactement la progression ci-dessus.

L'onglet *Comprendre* ne commence pas par la définition mais l'entoure :

1. **Définition du cours**, fidèle, jamais réécrite ;
2. **En termes simples**, la reformulation pédagogique ;
3. **Pourquoi cette notion existe-t-elle ?** — la question que la plupart des
   supports omettent, et qui rend la notion mémorable ;
4. **Quand l'utiliser / quand ne pas l'utiliser**, en deux colonnes opposées ;
5. **Comment l'utiliser**, en étapes numérotées ;
6. **Exemples**, **variantes**, **limites**.

Le bloc « ne l'utilise pas pour » est aussi important que son symétrique :
la plupart des erreurs d'examen viennent d'un outil sorti au mauvais moment.

---

## Mémoriser

Six types de flashcards, jamais uniquement « question → définition » :

| Type | Ce qu'il entraîne |
|---|---|
| Définition | Restituer la formulation du cours |
| Distinction | Ne pas confondre deux notions voisines |
| Composition | Citer une liste complète (5 forces, 9 blocs, 3R…) |
| Relation | Savoir ce qui alimente quoi |
| Application | Reconnaître l'outil face à une situation |
| Reconnaissance | Classer une phrase du cas dans la bonne case |

Trois verdicts seulement : **je ne sais pas · hésitant · je sais**, au clavier
`1` `2` `3`, Espace pour retourner. Pas de système compliqué.

### Planification

L'ordre de priorité est celui du cours, dans cet ordre :

1. notions faibles ;
2. erreurs fréquentes ;
3. priorité d'examen ;
4. cartes jamais vues ;
5. cartes dont la dernière révision est ancienne.

Les intervalles s'espacent avec le niveau (1, 2, 4, 8, 16 jours). Un « je ne
sais pas » ramène la carte **au lendemain**, quel que soit son niveau, et fait
redescendre de deux crans.

### Révision intelligente

Quand une notion est faible, l'application remonte aussi **ses voisines dans
le graphe**. Réviser SAF isolément est moins efficace que réviser SAF avec
souhaitabilité, acceptabilité, faisabilité, parties prenantes et SWOT — parce
que c'est ainsi qu'il faudra le mobiliser.

Implémentation : `scheduler.ts`, fonction `revisionIntelligente`.

---

## Distinguer

Les confusions sont la première cause de points perdus. Le cours en identifie
une liste précise ; l'application en fait un exercice dédié.

Douze **duels** : ressource/compétence, force/opportunité, PESTEL/Porter,
substitut/concurrent, by design/by default, approvisionnement/logistique
d'approvisionnement, vision/mission, but/objectif, durabilité forte/faible,
accessibilité/utilisabilité, RNE/RSE, réduire/réutiliser.

Chaque duel présente les deux notions avec leur **critère de distinction**,
puis des cartes à distribuer. Chaque carte mal placée est expliquée.

Une erreur alimente automatiquement **Mes erreurs**, qui compte les
occurrences et permet de générer une **session ciblée**.

---

## Relier

C'est ce qui différencie l'application d'un PDF.

### Relations typées

Chaque relation porte un type et une **phrase explicative**. La fiche affiche
« Est alimenté par », « Alimente », « Fonctionne avec », « Ne pas confondre
avec », chaque élément cliquable.

### Le traveling conceptuel

En naviguant PESTEL → SWOT → SAF → parties prenantes, l'application conserve
le chemin :

```
PESTEL › SWOT › SAF › Parties prenantes
```

Chaque étape est cliquable pour revenir en arrière ; revenir sur une notion
déjà visitée **tronque** le fil au lieu de l'allonger, pour qu'il reste
lisible. C'est le chemin de compréhension, construit par l'utilisateur.

### La carte progressive

Jamais 300 nœuds d'un coup. On descend niveau par niveau, de `Stratégie` vers
les feuilles, avec un fil d'Ariane. Un bouton « Voir les connexions avancées »
révèle les relations qui **traversent les chapitres** — celles qui font la
différence à l'oral.

### Les parcours

Huit parcours par raisonnement, pas par chapitre. Chaque étape dit **son rôle**
dans l'enchaînement.

### Les combinaisons

Ce que produit l'assemblage de plusieurs outils :

```
PESTEL + PORTER + DIAGNOSTIC INTERNE  →  SWOT
SWOT + PARTIES PRENANTES + PESTEL     →  SAF
RESSOURCES + COMPÉTENCES + CHAÎNE     →  AVANTAGE DURABLE
```

---

## Appliquer

### Mini-jeux

Onze jeux, chacun ciblant une erreur réelle. Aucun n'existe pour être amusant.
L'application reste entièrement utilisable si on les supprime.

Le plus révélateur est **PESTEL Scanner** : la même tendance (« le taux
d'intérêt augmente ») est proposée deux fois, avec deux contextes différents,
et la bonne réponse s'inverse. La catégorie seule ne suffit jamais.

**Porter Arena** demande de noter les cinq forces de 0 à 5, puis compare aux
notes du corrigé — en rappelant que la **justification compte plus que la
note** : un examinateur accepte 3 ou 4 argumenté, refuse un 5 non justifié.

### Cas pratiques

Quatre modes, dans cet ordre : **Lire · Analyser · S'entraîner · Corrigé**.

Le mode *Analyser* est le cœur : on marque les extraits (externe, interne,
chiffre, ressource, risque, partie prenante, opportunité, menace), **puis**
seulement on choisit les outils pertinents. C'est exactement ce qu'il faudra
faire mentalement à l'examen : repérer d'abord, choisir ensuite.

La liste d'outils mélange délibérément pertinents et non pertinents.

Le corrigé n'est jamais montré avant d'avoir répondu.

---

## Argumenter

Une question ouverte ne se traite pas en tapant une réponse puis en lisant le
corrigé. Ce n'est pas ainsi qu'on apprend à **construire** une réponse.

Huit questions sont donc des ateliers en dix étapes, calqués sur L-I-S-A-E-C :

| Étape | Ce qu'elle entraîne | L-I-S-A-E-C |
|---|---|---|
| 1 | Identifier le verbe de consigne | **L**ire |
| 2 | Choisir les notions, écarter les distracteurs | **I**dentifier |
| 3 | Choisir l'outil | **I**dentifier |
| 4 | Remettre le plan dans l'ordre | **S**tructurer |
| 5 | Retenir les arguments pertinents | **A**rgumenter |
| 6 | Choisir un exemple du cours | **A**rgumenter (le I de D-E-I) |
| 7 | Nommer l'arbitrage | **C**onclure |
| 8 | Rédiger, ou formuler à voix haute | — |
| 9 | S'auto-corriger sur checklist | — |
| 10 | Découvrir le corrigé | — |

Chaque mauvais choix est expliqué. Les distracteurs sont choisis pour être
plausibles : à l'étape 2 de la question sur la transformation digitale,
« Porter » et « matrice pouvoir/intérêt » sont proposés — ils appartiennent au
cours, mais pas à cette question.

Le corrigé n'apparaît **qu'à l'étape 10**.

---

## Répondre à l'examen

Le cours prévoit un oral individuel : **10 minutes de préparation, 10 minutes
de passage**. L'application le reproduit exactement.

### Préparation

Question tirée au sort, chronomètre, bloc-notes — libre ou structuré selon les
blocs INTRO / NOTIONS / AXE 1 / AXE 2 / EXEMPLE / LIEN / ARBITRAGE /
CONCLUSION.

Un rappel L-I-S-A-E-C est disponible : cliquer sur une lettre donne **la
méthode**, jamais la réponse.

Ni le corrigé, ni les notions attendues ne sont accessibles. Un test le
vérifie.

### Passage

À zéro, l'écran bascule automatiquement. Ne restent que la question, les notes
et le chronomètre.

### Auto-évaluation

Checklist en neuf points, issue de la méthodologie du cours : verbe de
consigne, définition, mécanisme, outil, exemple, lien transversal, double sens
sur le numérique, arbitrage, conclusion.

**Puis seulement** le corrigé, avec phrase-type, piège et mémo.

L'historique conserve date, question, score d'auto-évaluation, durée et
notions à retravailler — et permet de refaire la question.

---

## Ce que l'application ne fait pas

- pas de points, pas de vies, pas de série, pas de classement, pas de monnaie ;
- pas de mascotte, pas de récompense artificielle ;
- pas de notification, pas de rappel intrusif ;
- pas de compte, pas de partage, pas de comparaison sociale.

Le plaisir doit venir d'une seule chose : **voir le réseau de notions devenir
clair**.
