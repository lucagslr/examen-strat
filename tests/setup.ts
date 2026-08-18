import '@testing-library/jest-dom/vitest'
import { afterEach, beforeEach } from 'vitest'
import { cleanup } from '@testing-library/react'

/**
 * Environnement de test.
 * Chaque test part d'un stockage vierge : la progression d'un test ne doit
 * jamais fuir dans le suivant.
 */

beforeEach(() => {
  localStorage.clear()
  document.documentElement.removeAttribute('data-theme')
  document.documentElement.removeAttribute('data-animations')
})

afterEach(() => {
  cleanup()
})

// jsdom n'implémente pas matchMedia : on fournit un substitut inerte.
if (!window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }),
  })
}

// jsdom expose un `scrollTo` qui journalise « Not implemented » à chaque appel.
// On le remplace systématiquement, pas seulement s'il est absent.
Object.defineProperty(window, 'scrollTo', { writable: true, configurable: true, value: () => {} })
Object.defineProperty(Element.prototype, 'scrollIntoView', {
  writable: true,
  configurable: true,
  value: () => {},
})
