import { getNotion, type NotionId } from '@strat/content'
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

/**
 * LE « TRAVELING CONCEPTUEL ».
 * Quand l'utilisateur navigue PESTEL → SWOT → SAF → parties prenantes, on
 * conserve le chemin parcouru pour qu'il puisse revenir en arrière sans perdre
 * son fil, ou recommencer. C'est un état de session, jamais persisté.
 */

export interface EtapeFil {
  id: NotionId
  nom: string
  slug: string
}

interface ContexteFil {
  fil: EtapeFil[]
  /** Ajoute une notion au fil, ou tronque si l'on revient sur une étape déjà visitée. */
  visiter: (id: NotionId) => void
  /** Revient à une étape précise : le fil est tronqué juste après elle. */
  revenirA: (index: number) => void
  effacer: () => void
}

const Contexte = createContext<ContexteFil | null>(null)

const LONGUEUR_MAX = 12

export function FournisseurFil({ children }: { children: ReactNode }) {
  const [fil, setFil] = useState<EtapeFil[]>([])

  const visiter = useCallback((id: NotionId) => {
    const notion = getNotion(id)
    if (!notion) return
    setFil((precedent) => {
      const dernier = precedent[precedent.length - 1]
      if (dernier?.id === id) return precedent

      // Revenir sur une notion déjà visitée tronque le fil au lieu de le rallonger :
      // le chemin reste lisible.
      const dejaVue = precedent.findIndex((e) => e.id === id)
      if (dejaVue >= 0) return precedent.slice(0, dejaVue + 1)

      const etape: EtapeFil = { id, nom: notion.nomCourt ?? notion.nom, slug: notion.slug }
      return [...precedent, etape].slice(-LONGUEUR_MAX)
    })
  }, [])

  const revenirA = useCallback((index: number) => {
    setFil((precedent) => precedent.slice(0, index + 1))
  }, [])

  const effacer = useCallback(() => setFil([]), [])

  const valeur = useMemo<ContexteFil>(() => ({ fil, visiter, revenirA, effacer }), [fil, visiter, revenirA, effacer])

  return <Contexte.Provider value={valeur}>{children}</Contexte.Provider>
}

export function useFil(): ContexteFil {
  const c = useContext(Contexte)
  if (!c) throw new Error('useFil doit être utilisé dans un FournisseurFil')
  return c
}
