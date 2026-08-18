import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

/**
 * ROUTAGE PAR HASH.
 * Choisi délibérément : sur un hébergement statique comme GitHub Pages, il
 * garantit qu'un rafraîchissement ou un lien direct fonctionne toujours, sans
 * configuration serveur ni fichier 404 de contournement.
 */

export interface Route {
  /** Chemin sans le `#`, ex. `/notions/pestel`. */
  chemin: string
  /** Segments dynamiques extraits du motif. */
  params: Record<string, string>
  /** Paramètres de requête, ex. `#/review/flashcards?categorie=durabilite`. */
  requete: URLSearchParams
}

interface ContexteRoutage {
  route: Route
  naviguer: (chemin: string, options?: { remplacer?: boolean }) => void
  retour: () => void
}

const Contexte = createContext<ContexteRoutage | null>(null)

function lireHash(): { chemin: string; requete: URLSearchParams } {
  const brut = window.location.hash.replace(/^#/, '') || '/'
  const [chemin = '/', requete = ''] = brut.split('?')
  return { chemin: chemin || '/', requete: new URLSearchParams(requete) }
}

export function FournisseurRoutage({ children }: { children: ReactNode }) {
  const [etat, setEtat] = useState(lireHash)

  useEffect(() => {
    const surChangement = () => setEtat(lireHash())
    window.addEventListener('hashchange', surChangement)
    // Un premier hash vide est normalisé, pour que l'URL soit toujours partageable.
    if (!window.location.hash) window.location.replace(`${window.location.pathname}${window.location.search}#/`)
    return () => window.removeEventListener('hashchange', surChangement)
  }, [])

  const naviguer = useCallback((chemin: string, options?: { remplacer?: boolean }) => {
    const cible = chemin.startsWith('#') ? chemin : `#${chemin}`
    if (options?.remplacer) window.location.replace(`${window.location.pathname}${window.location.search}${cible}`)
    else window.location.hash = cible
  }, [])

  const retour = useCallback(() => window.history.back(), [])

  const valeur = useMemo<ContexteRoutage>(
    () => ({ route: { chemin: etat.chemin, params: {}, requete: etat.requete }, naviguer, retour }),
    [etat, naviguer, retour],
  )

  return <Contexte.Provider value={valeur}>{children}</Contexte.Provider>
}

export function useRoutage(): ContexteRoutage {
  const c = useContext(Contexte)
  if (!c) throw new Error('useRoutage doit être utilisé dans un FournisseurRoutage')
  return c
}

/** Remonte en haut de page à chaque changement de route, comme un vrai site. */
export function useRemonteeAuChangement(chemin: string) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [chemin])
}

/**
 * Fait correspondre un chemin à un motif contenant des segments `:param`.
 * Renvoie les paramètres, ou `null` si le motif ne correspond pas.
 */
export function apparier(motif: string, chemin: string): Record<string, string> | null {
  const segmentsMotif = motif.split('/').filter(Boolean)
  const segmentsChemin = chemin.split('/').filter(Boolean)
  if (segmentsMotif.length !== segmentsChemin.length) return null

  const params: Record<string, string> = {}
  for (let i = 0; i < segmentsMotif.length; i++) {
    const m = segmentsMotif[i] as string
    const c = segmentsChemin[i] as string
    if (m.startsWith(':')) params[m.slice(1)] = decodeURIComponent(c)
    else if (m !== c) return null
  }
  return params
}

/**
 * Lien interne. Rend une vraie balise `<a href="#/…">` : clic milieu,
 * « ouvrir dans un nouvel onglet » et copie du lien fonctionnent normalement.
 */
export function Lien({
  vers,
  children,
  className,
  onClick,
  ...reste
}: {
  vers: string
  children: ReactNode
  className?: string
  onClick?: () => void
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'>) {
  return (
    <a href={`#${vers}`} className={className} onClick={onClick} {...reste}>
      {children}
    </a>
  )
}
