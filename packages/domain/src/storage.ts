import { PREFS_KEY, STORAGE_KEY, STORAGE_VERSION } from '@strat/config'
import { CONTENT_VERSION } from '@strat/content'
import type { Preferences, Progression } from './types'
import { migrer, preferencesParDefaut, progressionVide } from './migration'

export { preferencesParDefaut, progressionVide } from './migration'

/**
 * STOCKAGE LOCAL.
 * Toute lecture est validée, parsée et protégée : une valeur corrompue ne doit
 * jamais faire planter l'application, elle doit produire un état sûr.
 */

function stockageDisponible(): Storage | null {
  try {
    if (typeof localStorage === 'undefined') return null
    const sonde = '__strat_test__'
    localStorage.setItem(sonde, '1')
    localStorage.removeItem(sonde)
    return localStorage
  } catch {
    // Navigation privée, quota nul, stockage désactivé : on continue en mémoire.
    return null
  }
}

/** Repli en mémoire quand `localStorage` est indisponible : l'app reste utilisable. */
const memoire = new Map<string, string>()

function lireBrut(cle: string): string | null {
  const s = stockageDisponible()
  if (s) {
    try {
      return s.getItem(cle)
    } catch {
      return memoire.get(cle) ?? null
    }
  }
  return memoire.get(cle) ?? null
}

function ecrireBrut(cle: string, valeur: string): boolean {
  const s = stockageDisponible()
  if (s) {
    try {
      s.setItem(cle, valeur)
      return true
    } catch {
      // Quota dépassé : on bascule en mémoire plutôt que de perdre la session.
      memoire.set(cle, valeur)
      return false
    }
  }
  memoire.set(cle, valeur)
  return false
}

export function chargerProgression(): Progression {
  const brut = lireBrut(STORAGE_KEY)
  if (!brut) return progressionVide()

  let donnees: unknown
  try {
    donnees = JSON.parse(brut)
  } catch {
    return progressionVide()
  }

  const migree = migrer(donnees)
  return migree ?? progressionVide()
}

export function sauverProgression(p: Progression): boolean {
  const aSauver: Progression = { ...p, majLe: Date.now(), storageVersion: STORAGE_VERSION, contentVersion: CONTENT_VERSION }
  try {
    return ecrireBrut(STORAGE_KEY, JSON.stringify(aSauver))
  } catch {
    return false
  }
}

export function reinitialiserProgression(): Progression {
  const s = stockageDisponible()
  try {
    s?.removeItem(STORAGE_KEY)
  } catch {
    /* ignoré : l'état en mémoire est réinitialisé juste après */
  }
  memoire.delete(STORAGE_KEY)
  const vide = progressionVide()
  sauverProgression(vide)
  return vide
}

/** Les préférences sont stockées à part pour être lisibles avant le premier rendu. */
export function chargerPreferences(): Preferences {
  const brut = lireBrut(PREFS_KEY)
  if (!brut) return { ...preferencesParDefaut }
  try {
    const p = JSON.parse(brut) as Partial<Preferences>
    return {
      theme: p.theme === 'clair' || p.theme === 'sombre' ? p.theme : 'systeme',
      animationsReduites: typeof p.animationsReduites === 'boolean' ? p.animationsReduites : false,
      tailleTexte:
        typeof p.tailleTexte === 'number' && p.tailleTexte >= 80 && p.tailleTexte <= 160 ? p.tailleTexte : 100,
    }
  } catch {
    return { ...preferencesParDefaut }
  }
}

export function sauverPreferences(p: Preferences): void {
  try {
    ecrireBrut(PREFS_KEY, JSON.stringify(p))
  } catch {
    /* préférence non persistée : sans conséquence fonctionnelle */
  }
}
