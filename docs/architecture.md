# Architecture

---

## Flux de dépendances

```
sources/          les documents du cours, référence humaine
   │              (jamais lus à l'exécution)
   ▼
packages/content  LE CORPUS — ne dépend de rien
   │
   ▼
packages/domain   logique pure — ne dépend jamais de React
   │
   ▼                       packages/ui
apps/web  ◄────────────────  composants et jetons de design
```

La règle : **une flèche ne remonte jamais**. `domain` ignore l'existence de
React ; `content` ignore l'existence de `domain`. On peut donc réécrire
entièrement l'interface sans toucher au savoir, et tester la logique sans
monter un composant.

---

## Les paquets

### `packages/content`

Le corpus, en TypeScript typé et éditable à la main.

```
types.ts              le modèle de données (la référence)
categories.ts         chapitres, sources, métadonnées des relations
notions/              12 fichiers, un par chapitre du cours
relations.ts          332 relations typées et décrites
questions-officielles.ts   les 22 corrigées
questions-probables.ts     les 55 d'entraînement
guidages.ts           ateliers de construction pas à pas
flashcards.ts · quiz.ts · cas.ts · parcours.ts · jeux.ts · methode.ts
index.ts              assemblage, index d'accès et CONTENT_VERSION
```

Les index (`notionParId`, `notionParSlug`, `notionsParCategorie`) sont
construits une seule fois au chargement du module.

### `packages/domain`

Logique pure, entièrement testable sans navigateur.

| Module | Rôle |
|---|---|
| `validation.ts` | Contrôle du corpus, séparant erreurs et avertissements |
| `search.ts` | Index en mémoire, tolérance aux accents et fautes, filtres |
| `graph.ts` | Dérivation des relations inverses, voisinage, carte progressive |
| `mastery.ts` | Niveau de maîtrise 0-5 par paliers, agrégats par priorité et chapitre |
| `scheduler.ts` | Sélection et planification des flashcards |
| `sessions.ts` | Composition des sessions 5 / 10 / 20 minutes et ciblées |
| `mistakes.ts` | Registre des confusions |
| `storage.ts` | Lecture et écriture protégées du stockage local |
| `migration.ts` | Nettoyage et migration de données de forme inconnue |
| `exportImport.ts` | Sérialisation et import validé |
| `progress.ts` | Mutations pures de la progression |

Toutes les mutations sont **pures** : elles renvoient une nouvelle
progression. C'est le contexte React qui décide quand persister.

### `packages/ui`

Composants visuels et jetons de design. Aucune connaissance du domaine :
`Bouton`, `Carte`, `Badge`, `Progression`, `JaugeMaitrise`, `Onglets`,
`ControleSegmente`, `ChampRecherche`, `Dialogue`, `Toasts`, `Accordeon`,
`Encadre`, `EtatVide`, `Squelette`, `Chrono`, `Infobulle`, `Chip`.

Les styles sont en CSS pur, organisés en trois couches : `tokens.css`
(variables), `base.css` (réinitialisation et accessibilité), `components.css`.

### `apps/web`

```
router.tsx            routage par hash, ~120 lignes, sans dépendance
App.tsx               table de routage et chargement à la demande
layout/Coquille.tsx   les 5 entrées, barre basse ou latérale
state/                progression et fil conceptuel
components/           liens et blocs partagés, frontière d'erreur
routes/               un fichier par grand écran
styles/app.css        mises en page
```

---

## Décisions et leurs raisons

### Routage par hash

`#/notions/pestel` plutôt que `/notions/pestel`.

Sur un hébergement statique comme GitHub Pages, un chemin réel exige une règle
de réécriture serveur ou une page 404 de contournement pour survivre à un
rafraîchissement. Le hash n'en a pas besoin : **un lien direct et un F5
fonctionnent toujours**, à la racine comme dans un sous-chemin.

### `base` relative

`base: './'` dans `vite.config.ts`. Le même build fonctionne à la racine d'un
domaine et sous `/mon-depot/`, sans recompilation. `VITE_BASE` permet de forcer
une base absolue si nécessaire.

### Chargement à la demande

Seul l'accueil est dans le paquet initial ; chaque écran arrive à la demande.
Le corpus est isolé dans son propre morceau (`manualChunks`) pour que sa mise
en cache survive aux mises à jour du code applicatif.

### Frontière d'erreur

Les noms de fichiers portent une empreinte. Si l'application reste ouverte
pendant qu'une nouvelle version est publiée, un écran chargé à la demande peut
pointer vers un fichier disparu. `components/Frontiere.tsx` détecte ce cas
précis, l'explique en français et recharge — **une seule fois par session**,
pour ne jamais boucler. Toute autre erreur donne un message compréhensible et
une porte de sortie, jamais un écran blanc.

### Écriture différée du stockage

La progression est écrite 350 ms après la dernière modification, et
immédiatement si l'onglet passe en arrière-plan ou se ferme
(`visibilitychange`, `pagehide`). On ne sollicite pas le stockage à chaque
frappe, sans jamais risquer de perdre une session.

### Repli mémoire

Si `localStorage` est indisponible — navigation privée, quota plein — le
stockage bascule en mémoire et l'application le signale par un bandeau. Elle
reste entièrement utilisable.

### Mélange déterministe

`melangerAvecGraine` produit toujours le même ordre pour une graine donnée.
Les tests sont ainsi reproductibles, et un même quiz ne se réordonne pas sous
les doigts de l'utilisateur.

---

## Mode hors ligne

`apps/web/public/sw.js`, deux règles seulement :

1. **Uniquement la même origine.** Aucune requête tierce n'est interceptée,
   mise en cache ou relayée.
2. **Le document suit le réseau d'abord**, pour prendre en compte un
   déploiement récent ; les ressources versionnées suivent le cache d'abord,
   puisque leur nom change à chaque build.

Un échec de précache n'empêche pas l'installation : le cache se remplit à
l'usage.

---

## Stockage local

```
strat.progress.v1   progression   (versionnée, migrée, validée)
strat.prefs.v1      préférences   (lues avant le premier rendu)
```

Les préférences sont séparées pour que le script d'amorçage d'`index.html`
applique le thème **avant** le premier rendu, sans clignotement.

Ce qui est stocké : notions vues, niveaux de maîtrise, état des flashcards,
erreurs, historique borné à 300 entrées, notes personnelles, brouillons
d'examen, préférences. Rien d'autre.

---

## Chaîne de vérification

```
typecheck  →  lint  →  validate:content  →  test  →  build  →  audit:final
```

Le déploiement GitHub Pages n'a lieu que si **tout** réussit, et seulement sur
`main`. La CI construit aussi le site dans un sous-chemin, pour vérifier qu'il
ne suppose pas être hébergé à la racine.

`audit:final` vérifie en plus l'absence de secret, de requête réseau sortante,
d'injection HTML et de ressource distante dans le HTML livré — en analysant le
code débarrassé de ses commentaires, pour qu'un commentaire expliquant qu'on
évite `dangerouslySetInnerHTML` ne déclenche pas une fausse alerte.
