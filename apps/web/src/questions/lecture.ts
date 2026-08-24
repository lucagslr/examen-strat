/* =========================================================================
   MODULE QUESTIONS — fiches déjà consultées
   ---------------------------------------------------------------------------
   Volontairement séparé de la progression du reste de STRAT : ce module ne lit
   ni n'écrit la clé de progression existante, il utilise la sienne. Ajouter les
   questions ne peut donc pas abîmer une progression déjà enregistrée.

   Comme le stockage du projet, une indisponibilité de `localStorage`
   (navigation privée, quota) ne fait rien échouer : on continue en mémoire.
   ========================================================================= */

import { useCallback, useEffect, useState } from 'react'

const CLE = 'strat.questions.lues.v1'

/** Repli mémoire quand `localStorage` est inaccessible. */
let memoire: string[] = []

function lire(): string[] {
  try {
    const brut = localStorage.getItem(CLE)
    if (!brut) return memoire
    const donnees: unknown = JSON.parse(brut)
    return Array.isArray(donnees) ? donnees.filter((v): v is string => typeof v === 'string') : memoire
  } catch {
    return memoire
  }
}

function ecrire(liste: string[]): void {
  memoire = liste
  try {
    localStorage.setItem(CLE, JSON.stringify(liste))
  } catch {
    // Quota ou stockage désactivé : la session reste utilisable en mémoire.
  }
}

const abonnes = new Set<(liste: string[]) => void>()

function diffuser(liste: string[]): void {
  for (const abonne of abonnes) abonne(liste)
}

/** Ensemble des fiches lues, réactif entre les écrans ouverts simultanément. */
export function useLectures(): {
  lues: ReadonlySet<string>
  marquerLue: (id: string) => void
  toutOublier: () => void
} {
  const [liste, setListe] = useState<string[]>(lire)

  useEffect(() => {
    abonnes.add(setListe)
    return () => {
      abonnes.delete(setListe)
    }
  }, [])

  const marquerLue = useCallback((id: string) => {
    const courant = lire()
    if (courant.includes(id)) return
    const suivant = [...courant, id]
    ecrire(suivant)
    diffuser(suivant)
  }, [])

  const toutOublier = useCallback(() => {
    ecrire([])
    diffuser([])
  }, [])

  return { lues: new Set(liste), marquerLue, toutOublier }
}
