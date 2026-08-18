/*
 * SERVICE WORKER — mode hors ligne.
 *
 * Deux règles seulement, volontairement :
 *  1. On ne met en cache QUE des ressources de même origine. Aucune requête
 *     vers un tiers n'est interceptée, mise en cache ou relayée.
 *  2. Le document HTML suit une stratégie « réseau d'abord », pour qu'un
 *     déploiement récent soit pris en compte dès qu'on est en ligne ; les
 *     ressources versionnées (JS, CSS, images) suivent « cache d'abord »,
 *     puisque leur nom change à chaque build.
 */

const VERSION = 'strat-v1'
const CACHE = `${VERSION}`

// Chemins relatifs au scope du service worker : fonctionne à la racine
// comme dans un sous-répertoire GitHub Pages.
const COQUILLE = ['./', './index.html', './manifest.webmanifest', './icone.svg']

self.addEventListener('install', (evenement) => {
  evenement.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(COQUILLE))
      .then(() => self.skipWaiting())
      .catch(() => {
        // Un échec de précache ne doit pas empêcher l'installation :
        // le cache se remplira à l'usage.
      }),
  )
})

self.addEventListener('activate', (evenement) => {
  evenement.waitUntil(
    caches
      .keys()
      .then((cles) => Promise.all(cles.filter((c) => c !== CACHE).map((c) => caches.delete(c))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (evenement) => {
  const requete = evenement.request

  if (requete.method !== 'GET') return

  const url = new URL(requete.url)
  // Règle absolue : on ignore tout ce qui n'est pas notre propre origine.
  if (url.origin !== self.location.origin) return

  const estDocument = requete.mode === 'navigate' || requete.destination === 'document'

  if (estDocument) {
    // Réseau d'abord, repli sur le cache si hors ligne.
    evenement.respondWith(
      fetch(requete)
        .then((reponse) => {
          const copie = reponse.clone()
          caches.open(CACHE).then((cache) => cache.put(requete, copie)).catch(() => {})
          return reponse
        })
        .catch(() =>
          caches
            .match(requete)
            .then((c) => c || caches.match('./index.html'))
            .then((c) => c || Response.error()),
        ),
    )
    return
  }

  // Ressources statiques : cache d'abord, puis réseau, avec mise en cache.
  // Les noms de fichiers portent une empreinte : une ressource en cache est
  // toujours la bonne version de cette ressource-là.
  evenement.respondWith(
    caches.match(requete).then(
      (enCache) =>
        enCache ||
        fetch(requete)
          .then((reponse) => {
            if (reponse && reponse.status === 200 && reponse.type === 'basic') {
              const copie = reponse.clone()
              caches.open(CACHE).then((cache) => cache.put(requete, copie)).catch(() => {})
            }
            return reponse
          })
          .catch(() => Response.error()),
    ),
  )
})
