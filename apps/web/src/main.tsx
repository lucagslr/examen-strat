import { FournisseurToasts } from '@strat/ui'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@app/App'
import { FournisseurRoutage } from '@app/router'
import { FournisseurFil } from '@app/state/FilContext'
import { FournisseurProgression } from '@app/state/ProgressionContext'
import '@app/styles/app.css'

const racine = document.getElementById('racine')
if (!racine) throw new Error('Élément racine introuvable dans index.html')

createRoot(racine).render(
  <StrictMode>
    <FournisseurProgression>
      <FournisseurToasts>
        <FournisseurRoutage>
          <FournisseurFil>
            <App />
          </FournisseurFil>
        </FournisseurRoutage>
      </FournisseurToasts>
    </FournisseurProgression>
  </StrictMode>,
)

/**
 * Mode hors ligne.
 * Le service worker met en cache la coquille et les ressources statiques après
 * le premier chargement. Il n'effectue aucune requête vers l'extérieur.
 */
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`
    navigator.serviceWorker.register(`${base}sw.js`, { scope: base }).catch(() => {
      // Sans service worker l'application reste parfaitement fonctionnelle en ligne.
    })
  })
}
