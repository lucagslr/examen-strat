# STRAT

Application web locale de révision du cours **Stratégie 61-51** (HEG Genève).
Wikipédia pour explorer, Anki pour mémoriser, Duolingo pour pratiquer, simulateur d'oral pour l'examen — sans gamification artificielle.

Aucun serveur, aucune API, aucun compte, aucune télémétrie. Tout le cours est embarqué dans la page ; la progression ne quitte jamais le navigateur.

---

## Objectif

Le produit n'est pas l'interface : c'est le **graphe de connaissances**, les **méthodes d'apprentissage** et les **méthodes d'examen**. React ne sert qu'à les rendre navigables.

L'application entraîne huit capacités, dans cet ordre :

```
DÉCOUVRIR → COMPRENDRE → MÉMORISER → DISTINGUER
         → RELIER → APPLIQUER → ARGUMENTER → RÉPONDRE À L'EXAMEN
```

La question à laquelle elle doit permettre de répondre n'est pas « est-ce que je connais SWOT ? » mais : *face à un cas inconnu, est-ce que je reconnais les notions utiles, est-ce que je sais les relier, les appliquer et construire une réponse d'examen ?*

## Ce que contient l'application

| | |
|---|---|
| Notions | **219**, toutes reliées, toutes recherchables |
| Relations | **332**, chacune typée et expliquée |
| Questions corrigées | **22 / 22** |
| Questions probables | **55 / 55**, dont 8 guidées pas à pas |
| Flashcards | **139**, en 6 types |
| Quiz | **46**, en 8 mécaniques |
| Cas pratiques | **6** (CIO, Fukushima, eaux embouteillées, Smart, Oncle Hansi, SilverDigital) |
| Parcours guidés | **8** |
| Combinaisons de notions | **6** |
| Mini-jeux | **11**, dont 12 duels « ne pas confondre » |

## Lancer en local

```bash
npm install
npm run dev
```

L'application s'ouvre sur `http://localhost:5173`.

## Commandes

```bash
npm run dev              # serveur de développement
npm run build            # build statique dans apps/web/dist
npm run preview          # servir le build localement
npm run typecheck        # TypeScript strict sur tout le monorepo
npm run lint             # ESLint, dont les règles d'accessibilité
npm test                 # tests unitaires et de comportement
npm run validate:content # validation du corpus (échoue sur toute erreur)
npm run report:content   # rapport de couverture du contenu
npm run audit:final      # audit complet : contenu, sécurité, build
npm run verify           # tout l'enchaînement ci-dessus
```

## Architecture

```
strat/
├── apps/web/          Application React : routes, layouts, vues, interactions
├── packages/
│   ├── content/       LE CORPUS. Notions, relations, questions, cas, jeux…
│   ├── domain/        Logique pure : recherche, graphe, maîtrise, révision,
│   │                  sessions, erreurs, stockage, migration, export/import
│   ├── ui/            Composants visuels réutilisables et jetons de design
│   └── config/        Constantes partagées (versions, seuils, durées)
├── sources/           Les documents du cours, référence humaine
├── scripts/           Validation, rapports, audit
├── docs/              Modèle de contenu, architecture, modèle pédagogique
└── tests/             Tests de comportement bout en bout
```

Le flux de dépendances est strictement descendant :

```
sources  →  content  →  domain  →  web
                            ↑
                           ui
```

`domain` ne dépend jamais de React. `content` ne dépend de rien.

Voir [docs/architecture.md](docs/architecture.md).

## La règle fondamentale : une seule source de vérité par notion

Il n'existe **pas** une définition de PESTEL dans le glossaire, une autre dans la flashcard et une troisième dans le quiz. Il existe une notion `pestel`, et tout le reste la **référence** par son identifiant.

```ts
// packages/content/src/flashcards.ts
{ id: 'fc-memo-1', recto: '6 dimensions du PESTEL ?', notions: ['pestel'], … }
```

La validation refuse toute référence vers une notion inexistante. Voir [docs/content-model.md](docs/content-model.md).

## Fidélité au cours

Les supports comportent des variantes terminologiques. **Elles sont conservées, jamais uniformisées**, et affichées dans un encadré dédié sur la fiche notion :

- le **E du PESTEL** : Éthique / Écologique / Environnemental et éthique ;
- la matrice **ERAC** : Éliminer-Réduire-Augmenter-Créer *ou* Exclure-Renforcer-Atténuer-Créer ;
- la **chaîne de valeur** : R&D *ou* Développement technologique · Achats *ou* Approvisionnements ;
- le **plancher social** : Assainissement *ou* Réseaux, selon la liste ou le schéma.

Chaque variante indique le document qui l'emploie et la consigne d'examen associée. Des tests vérifient qu'elles ne disparaissent pas.

La hiérarchie des sources est explicite (`packages/content/src/categories.ts`) : encyclopédie → corrigés officiels → questions → méthodologie → flashcards → synthèse.

## Ajouter du contenu

Tout le corpus est du TypeScript typé, lisible et modifiable à la main.

### Ajouter une notion

1. Ouvrir le fichier du chapitre concerné dans `packages/content/src/notions/`.
2. Ajouter un objet `Notion`. Champs obligatoires : `id`, `slug`, `nom`, `categorie`, `type`, `priorite`, `definitionCours`, `explicationSimple`, `sources`, `provenance`.
3. Lui ajouter au moins une relation dans `relations.ts` — sinon la validation signale une notion orpheline.
4. `npm run validate:content`

> L'`id` est permanent. La progression de l'utilisateur en dépend : ne jamais le renommer après publication.

### Ajouter une question

Dans `questions-officielles.ts` ou `questions-probables.ts`. Le champ `notions` doit référencer des notions existantes ; ne jamais recopier une définition dans la réponse.

Pour la rendre **guidée pas à pas**, ajouter une entrée dans `guidages.ts`, clé = identifiant de la question.

### Ajouter une flashcard

Dans `flashcards.ts`. Choisir un `type` parmi les six : `definition`, `distinction`, `composition`, `relation`, `application`, `reconnaissance`. La première notion de `notions` est la notion propriétaire.

### Ajouter un quiz

Dans `quiz.ts`. **Toute option fausse doit porter une `explication` disant pourquoi elle est fausse** — la validation le vérifie et le build échoue sinon.

### Ajouter un cas

Dans `cas.ts` : `texte` en paragraphes, `extraits` marquables, `outilsPertinents` et `outilsNonPertinents`, `questions` avec leur corrigé.

### Modifier une relation

Dans `relations.ts`. Une relation se déclare **dans un seul sens** ; le sens inverse est dérivé automatiquement à partir de `metaRelations[].inverse`. La `description` est obligatoire : une flèche sans phrase n'apprend rien.

Types acycliques (`ALIMENTE`, `PRECEDE`, `FAIT_PARTIE_DE`…) : un cycle fait échouer la validation.

## Stockage local

- Clé `strat.progress.v1`, versionnée par `STORAGE_VERSION`.
- Toute lecture est validée, parsée et protégée : une valeur corrompue produit un **état sûr**, jamais un plantage.
- Les identifiants disparus du corpus sont ignorés silencieusement ; la progression survit aux mises à jour du contenu.
- Si `localStorage` est indisponible (navigation privée, quota), l'application bascule en mémoire et le signale.

Contenu stocké : notions vues, niveaux de maîtrise, état des flashcards, erreurs, historique, notes personnelles, préférences. **Rien d'autre.**

## Export / import

- **Exporter** produit un JSON contenant uniquement la progression, jamais le corpus.
- **Importer** ne fait jamais confiance au fichier : taille bornée (512 Ko), format vérifié, version contrôlée, types validés, identifiants inconnus ignorés. Les messages d'erreur sont humains, jamais des traces techniques.
- **Réinitialiser** efface la progression ; le cours reste évidemment intact.

## Déployer sur GitHub Pages

Le workflow `.github/workflows/ci.yml` déploie automatiquement sur `main`, **uniquement si** typecheck, lint, validation du contenu, tests, build et audit final réussissent.

Dans les réglages du dépôt : **Settings → Pages → Source : GitHub Actions**.

Le site fonctionne à la racine d'un domaine comme dans un sous-chemin (`/mon-depot/`), sans reconfiguration :

- `base` est relatif dans `vite.config.ts` ;
- le routage est **par hash** (`#/notions/pestel`), donc un rafraîchissement ou un lien direct fonctionne toujours, sans règle de réécriture serveur ni page 404 de contournement.

Pour forcer une base absolue : `VITE_BASE=/mon-depot/ npm run build`.

## Installation sur l'écran d'accueil

L'application est installable (PWA) : manifeste, icônes, mode plein écran, orientation libre. Après le premier chargement, un service worker met en cache la coquille et les ressources : **elle fonctionne hors ligne**, y compris dans les transports ou juste avant l'examen.

Le service worker n'intercepte **que** les ressources de même origine. Aucune requête vers un tiers.

## Accessibilité

Le site enseigne l'accessibilité numérique : il l'applique.

- Navigation clavier complète — index, flashcards (Espace, 1/2/3), quiz, onglets (flèches), dialogues, examen.
- Lien d'évitement, focus toujours visible, sémantique HTML, labels de formulaire.
- Cibles tactiles d'au moins 44 px.
- Aucune information portée par la **couleur seule** : les priorités portent texte et pastilles.
- Texte redimensionnable, réglage de taille intégré, zoom navigateur préservé.
- Erreurs et changements annoncés (`aria-live`).
- `prefers-reduced-motion` respecté, plus une préférence in-app.

Les règles `jsx-a11y` sont actives en CI et ne sont jamais désactivées.

## Sécurité

Sans serveur, la sécurité se joue ailleurs — elle est vérifiée automatiquement par `npm run audit:final` :

- aucun secret, clé, jeton ou mot de passe dans le code ;
- aucune requête réseau sortante, aucun script distant, aucune police distante ;
- aucun `dangerouslySetInnerHTML`, aucune injection HTML — le rendu du texte du cours ne prend en charge que `**gras**` ;
- toute lecture de `localStorage` est protégée ;
- tout import est validé et borné.

## Licence et contenu

Le contenu pédagogique provient des supports du cours (dossier `sources/`), à usage de révision personnelle.
