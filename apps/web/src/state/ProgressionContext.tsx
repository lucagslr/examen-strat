import {
  chargerPreferences,
  chargerProgression,
  sauverPreferences,
  sauverProgression,
  reinitialiserProgression as reinitialiser,
  type Progression,
} from '@strat/domain'
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'

/**
 * PROGRESSION LOCALE.
 * Toute la progression vit ici. Les mutations sont des fonctions pures du
 * package `domain` ; ce contexte se contente de les appliquer et de persister.
 */

interface ContexteProgression {
  progression: Progression
  /** Applique une transformation pure et persiste le résultat. */
  modifier: (f: (p: Progression) => Progression) => void
  remettreAZero: () => void
  remplacer: (p: Progression) => void
  /** `true` si l'écriture dans localStorage a échoué (navigation privée, quota). */
  stockageIndisponible: boolean
}

const Contexte = createContext<ContexteProgression | null>(null)

export function FournisseurProgression({ children }: { children: ReactNode }) {
  const [progression, setProgression] = useState<Progression>(() => {
    const chargee = chargerProgression()
    // Les préférences sont stockées à part pour être lisibles avant le rendu.
    return { ...chargee, preferences: chargerPreferences() }
  })
  const [stockageIndisponible, setStockageIndisponible] = useState(false)

  // Écriture différée : on ne sollicite pas le stockage à chaque frappe.
  const enAttente = useRef<number | null>(null)
  const derniere = useRef(progression)
  derniere.current = progression

  const planifierSauvegarde = useCallback(() => {
    if (enAttente.current !== null) window.clearTimeout(enAttente.current)
    enAttente.current = window.setTimeout(() => {
      const ok = sauverProgression(derniere.current)
      if (!ok) setStockageIndisponible(true)
      enAttente.current = null
    }, 350)
  }, [])

  // Sauvegarde immédiate si l'onglet passe en arrière-plan ou se ferme.
  useEffect(() => {
    const vider = () => {
      if (enAttente.current !== null) {
        window.clearTimeout(enAttente.current)
        enAttente.current = null
      }
      sauverProgression(derniere.current)
    }
    const surVisibilite = () => {
      if (document.visibilityState === 'hidden') vider()
    }
    document.addEventListener('visibilitychange', surVisibilite)
    window.addEventListener('pagehide', vider)
    return () => {
      document.removeEventListener('visibilitychange', surVisibilite)
      window.removeEventListener('pagehide', vider)
      vider()
    }
  }, [])

  const modifier = useCallback(
    (f: (p: Progression) => Progression) => {
      setProgression((p) => {
        const suivante = f(p)
        derniere.current = suivante
        return suivante
      })
      planifierSauvegarde()
    },
    [planifierSauvegarde],
  )

  const remettreAZero = useCallback(() => {
    const vide = reinitialiser()
    setProgression(vide)
    derniere.current = vide
  }, [])

  const remplacer = useCallback(
    (p: Progression) => {
      setProgression(p)
      derniere.current = p
      planifierSauvegarde()
    },
    [planifierSauvegarde],
  )

  // Les préférences pilotent le thème : on les applique au document et on les
  // persiste séparément, pour que le script d'amorçage de index.html les lise.
  useEffect(() => {
    const p = progression.preferences
    const racine = document.documentElement
    if (p.theme === 'systeme') delete racine.dataset.theme
    else racine.dataset.theme = p.theme
    if (p.animationsReduites) racine.dataset.animations = 'reduites'
    else delete racine.dataset.animations
    racine.style.setProperty('--echelle-texte', String(p.tailleTexte / 100))
    sauverPreferences(p)
  }, [progression.preferences])

  const valeur = useMemo<ContexteProgression>(
    () => ({ progression, modifier, remettreAZero, remplacer, stockageIndisponible }),
    [progression, modifier, remettreAZero, remplacer, stockageIndisponible],
  )

  return <Contexte.Provider value={valeur}>{children}</Contexte.Provider>
}

export function useProgression(): ContexteProgression {
  const c = useContext(Contexte)
  if (!c) throw new Error('useProgression doit être utilisé dans un FournisseurProgression')
  return c
}
