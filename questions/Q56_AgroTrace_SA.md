---
tags: [strategie, mise-en-situation, q56]
question: Q56
entreprise: "AgroTrace SA"
sujet: "faut-il numériser toute la traçabilité alimentaire ?"
type: mise-en-situation-complexe
---

> ⬅ — · [[00_Index_30_mises_en_situation|🗂 Index]] · [[Q57_MetalJura]] ➡

# Q56 — AgroTrace SA : faut-il numériser toute la traçabilité alimentaire ?

## Situation / Énoncé

**AgroTrace SA** est une PME vaudoise de **180 employés** qui produit des plats préparés pour la grande distribution suisse. Son modèle repose sur des volumes importants, des marges faibles et une dépendance à quelques grands distributeurs. Ceux-ci demandent davantage de traçabilité, de preuves d'origine et d'informations environnementales. La direction envisage une plateforme combinant **capteurs IoT, cloud et blockchain** pour suivre les matières premières depuis la ferme jusqu'au magasin.

Le projet coûterait **2,5 millions CHF**. Il pourrait accélérer les rappels de lots et réduire les pertes, mais augmenterait les besoins informatiques, le stockage et la dépendance à un fournisseur cloud américain.

### Question d'examen

**En tant que consultant, réalisez un diagnostic stratégique de ce projet et recommandez à AgroTrace si elle doit déployer cette solution sur toute sa chaîne de valeur.**

## 1. Découpage de la question & pose des bases

### Décorticage du sujet

Le piège serait de répondre directement : « oui, la blockchain améliore la traçabilité ». La question demande d'abord un **diagnostic**, puis une **recommandation**. Il faut donc demander : quel problème est réellement à résoudre ? Où se situe-t-il dans la chaîne de valeur ? Quelles données sont nécessaires ? Quelles nouvelles dépendances la solution crée-t-elle ?

### Environnement & contexte

- **PESTEL :** attentes croissantes de traçabilité dans les dimensions socioculturelle, écologique/éthique et légale.
- **Porter :** quelques grands distributeurs possèdent un fort pouvoir de négociation.
- **Concurrence :** les fournisseurs capables de prouver rapidement l'origine et la qualité peuvent mieux défendre leurs référencements.
- **Risque :** un rappel mal ciblé peut détruire des produits sains et dégrader la réputation.

Côté interne, AgroTrace possède la compétence agroalimentaire et connaît ses flux, mais maîtrise probablement moins le **cloud, la cybersécurité et la gouvernance des données**.

## 2. Développement des notions & définitions claires

- **PESTEL :** analyse des grandes tendances extérieures : Politique, Économique, Socioculturelle, Technologique, Écologique/Éthique et Légale.
- **5(+1) forces de Porter :** rivalité, entrants, substituts, pouvoir clients, pouvoir fournisseurs, plus **l'État** dans la version du cours.
- **Chaîne de valeur :** décompose l'entreprise en logistique amont, production, logistique aval, marketing/vente, services et activités de soutien.
- **RNE :** responsabilité numérique sur quatre axes : économique, technologique, environnemental, sociétal.
- **Minimisation des données :** collecter uniquement ce qui sert un objectif déterminé.
- **Effet rebond :** une technologie plus efficace peut entraîner tellement plus d'usage que le gain initial diminue.
- **SAF :** Souhaitabilité, Acceptabilité, Faisabilité.

## 3. Argumentation — Pourquoi et Comment

### Pourquoi agir ?

1. Les distributeurs veulent une preuve plus fine de l'origine et de la qualité : ne pas répondre peut devenir une **menace commerciale**.
2. Une meilleure traçabilité peut réduire les pertes lors d'un rappel : on isole un lot au lieu de détruire une gamme entière.
3. La donnée peut réduire le gaspillage, mais seulement si elle est utilisée pour prendre des décisions.
4. Le projet peut aussi déplacer le pouvoir vers le fournisseur cloud.

### Comment agir ?

1. Cartographier chaque maillon de la chaîne de valeur.
2. Pour chaque donnée, poser : **quelle décision cette donnée améliore-t-elle ?**
3. Classer les usages par criticité : sécurité alimentaire, température, rappel, gaspillage, information client.
4. Lancer un pilote sur quelques produits sensibles.
5. Mesurer : temps de localisation d'un lot, pertes, coût de rappel, volume de données réellement utilisé, coût numérique.
6. Prévoir clauses de portabilité et réversibilité cloud.

### Preuve & logique

**Pression distributeur → besoin de preuve → meilleure traçabilité → réaction plus rapide → réduction du risque commercial.**

Mais : **plus de capteurs → plus de données → plus de stockage et de dépendance → besoin de sobriété et de gouvernance.**

## 4. Exemples & mélange des concepts

- Un capteur de température est utile si la température déclenche une décision de retrait ou d'alerte.
- En revanche, collecter en permanence une information qui n'est jamais utilisée ajoute un coût sans créer de valeur.
- La blockchain n'est pertinente que si plusieurs acteurs doivent partager une preuve commune et si une base de données classique ne suffit pas.

**Interconnexion :** PESTEL explique la pression ; Porter explique le pouvoir des distributeurs ; la chaîne de valeur localise les usages ; la RNE encadre données/cyber/empreinte ; SAF décide du rythme.

## 5. Graphique / schéma visuel

```mermaid
flowchart LR
    A[Pressions PESTEL et distributeurs] --> B[Besoin de traçabilité]
    B --> C[Pilote ciblé]
    C --> D[Gains qualité et pertes]
    D --> E[Risques cloud / données / rebond]
    E --> F[Déploiement progressif]
```

| SAF | Évaluation |
|---|---|
| **Souhaitabilité** | Élevée : répond au risque qualité et aux exigences clients. |
| **Acceptabilité** | Moyenne : coût, données et dépendance doivent être acceptés. |
| **Faisabilité** | Moyenne : compétences métier fortes, cloud/cyber à renforcer. |

## 6. Problèmes, risques & erreurs à éviter

- Verrouillage fournisseur.
- Cyber-risque.
- Coût d'investissement élevé.
- Effet rebond informationnel : « puisqu'on peut tout collecter, on collecte tout ».
- Greenwashing si la traçabilité est présentée comme durable sans mesurer l'empreinte du système.

### Le piège classique

**Commencer par la technologie.** À l'examen, commence par le problème, montre la causalité, puis justifie la technologie.

### Recommandation

Déployer **progressivement et sélectivement**. Priorité aux données critiques, gouvernance interne, clauses de portabilité et KPI économiques + environnementaux. La stratégie n'est pas « tout tracer », mais **tracer ce qui réduit réellement un risque ou améliore une décision**.

---

---

⬅ — · [[00_Index_30_mises_en_situation|🗂 Index des 30 cas]] · [[Q57_MetalJura]] ➡
