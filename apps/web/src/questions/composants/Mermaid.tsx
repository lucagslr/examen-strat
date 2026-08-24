import { useEffect, useId, useRef, useState } from 'react'

/* =========================================================================
   MODULE QUESTIONS — schémas Mermaid
   ---------------------------------------------------------------------------
   Les schémas des fiches sont du raisonnement, pas de la décoration : ils sont
   donc réellement dessinés, jamais affichés sous forme de code.

   Sécurité. Deux protections se cumulent :
     · Mermaid tourne en `securityLevel: 'strict'` — les scripts et les gestes
       de clic sont désactivés, et le SVG produit passe par DOMPurify ;
     · le SVG est inséré via `DOMParser`, qui n'exécute rien, plutôt que par
       `dangerouslySetInnerHTML`.

   Poids. La librairie est importée dynamiquement, à la première fiche qui
   contient un schéma. L'accueil et l'index des questions ne la chargent pas.
   ========================================================================= */

/** Largeur en deçà de laquelle on préfère faire défiler plutôt que rapetisser. */
const LARGEUR_MINIMALE = 520

type Etat = 'attente' | 'pret' | 'echec'

function themeSombre(): boolean {
  if (typeof document === 'undefined') return false
  const choix = document.documentElement.dataset['theme']
  if (choix === 'sombre') return true
  if (choix === 'clair') return false
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches === true
}

/** Suit le thème effectif : choix explicite de l'utilisateur, sinon système. */
function useThemeSombre(): boolean {
  const [sombre, setSombre] = useState(themeSombre)

  useEffect(() => {
    const relire = () => setSombre(themeSombre())

    const mq = window.matchMedia?.('(prefers-color-scheme: dark)')
    mq?.addEventListener('change', relire)

    // Le choix explicite est porté par un attribut sur <html>.
    const observateur = new MutationObserver(relire)
    observateur.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    return () => {
      mq?.removeEventListener('change', relire)
      observateur.disconnect()
    }
  }, [])

  return sombre
}

/** Reprend les jetons de STRAT pour que les schémas restent dans la même palette. */
function variables(sombre: boolean) {
  return sombre
    ? {
        background: '#1e1e23',
        primaryColor: '#1b2f3d',
        primaryTextColor: '#ececea',
        primaryBorderColor: '#6fb3dd',
        secondaryColor: '#26262c',
        tertiaryColor: '#26262c',
        lineColor: '#8b8b85',
        textColor: '#ececea',
        clusterBkg: '#16161a',
        clusterBorder: '#4a4a53',
        edgeLabelBackground: '#1e1e23',
      }
    : {
        background: '#ffffff',
        primaryColor: '#e8f0f6',
        primaryTextColor: '#1a1a18',
        primaryBorderColor: '#1d5f8a',
        secondaryColor: '#f2f2f0',
        tertiaryColor: '#f2f2f0',
        lineColor: '#7a7a72',
        textColor: '#1a1a18',
        clusterBkg: '#fbfbfa',
        clusterBorder: '#c9c9c2',
        edgeLabelBackground: '#ffffff',
      }
}

export function Mermaid({ source, libelle }: { source: string; libelle: string }) {
  const conteneur = useRef<HTMLDivElement>(null)
  const [etat, setEtat] = useState<Etat>('attente')
  const sombre = useThemeSombre()
  const idBrut = useId()
  const id = `mmd${idBrut.replace(/[^a-zA-Z0-9]/g, '')}`

  useEffect(() => {
    let annule = false

    const dessiner = async () => {
      try {
        const mermaid = (await import('mermaid')).default
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: 'base',
          themeVariables: variables(sombre),
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
          flowchart: { curve: 'basis', padding: 12, useMaxWidth: false },
        })

        const { svg } = await mermaid.render(id, source)
        if (annule) return

        const cible = conteneur.current
        if (!cible) return

        // `DOMParser` construit les nœuds sans jamais exécuter de script.
        const document_ = new DOMParser().parseFromString(svg, 'text/html')
        const dessin = document_.body.querySelector('svg')
        if (!dessin) throw new Error('Schéma illisible')

        const largeur = Number.parseFloat(dessin.getAttribute('viewBox')?.split(/\s+/)[2] ?? '0')
        dessin.removeAttribute('width')
        dessin.removeAttribute('height')
        dessin.style.display = 'block'
        dessin.style.height = 'auto'
        dessin.style.width = '100%'
        if (Number.isFinite(largeur) && largeur > 0) {
          dessin.style.maxWidth = `${Math.ceil(largeur)}px`
          // En dessous de cette largeur le texte devient illisible : on laisse
          // alors le conteneur défiler horizontalement plutôt que réduire.
          dessin.style.minWidth = `${Math.ceil(Math.min(largeur, LARGEUR_MINIMALE))}px`
        }
        dessin.setAttribute('role', 'img')
        dessin.setAttribute('aria-label', libelle)

        cible.replaceChildren(document.importNode(dessin, true))
        setEtat('pret')
      } catch {
        if (!annule) setEtat('echec')
      }
    }

    setEtat('attente')
    void dessiner()

    return () => {
      annule = true
      // Mermaid laisse un nœud de mesure derrière lui en cas d'interruption.
      document.getElementById(`d${id}`)?.remove()
    }
  }, [source, sombre, id, libelle])

  return (
    <figure className="q-schema">
      {etat === 'attente' && (
        <div className="q-schema__cadre" aria-busy="true">
          <div className="squelette" style={{ height: '9rem', width: '100%' }} />
        </div>
      )}

      {/* Ce conteneur est piloté par l'effet ci-dessus, jamais par React : il
          reste donc systématiquement vide côté rendu, sinon les deux se
          disputeraient les mêmes nœuds. Le SVG porte son rôle et son libellé. */}
      <div className="q-schema__cadre defilement-x" ref={conteneur} hidden={etat !== 'pret'} />

      {etat === 'echec' && (
        <details className="q-schema__repli">
          <summary>Schéma non rendu — afficher sa description</summary>
          <pre>{source}</pre>
        </details>
      )}

      <figcaption className="q-schema__legende">Schéma</figcaption>
    </figure>
  )
}
