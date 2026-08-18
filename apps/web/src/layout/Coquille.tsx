import { Bouton, useMediaQuery } from '@strat/ui'
import { type ReactNode } from 'react'
import { Lien, useRoutage } from '@app/router'
import { useProgression } from '@app/state/ProgressionContext'

/**
 * COQUILLE APPLICATIVE.
 * Cinq entrées principales, jamais plus : Accueil, Notions, Réviser,
 * S'entraîner, Examen. Barre en bas sur mobile, barre latérale sur desktop —
 * même structure fonctionnelle dans les deux cas.
 */

interface Entree {
  chemin: string
  libelle: string
  icone: ReactNode
  /** Préfixes de routes qui allument cette entrée. */
  prefixes: string[]
}

const ico = (d: string) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
)

const ENTREES: Entree[] = [
  { chemin: '/', libelle: 'Accueil', prefixes: ['/'], icone: ico('M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5') },
  {
    chemin: '/notions',
    libelle: 'Notions',
    prefixes: ['/notions', '/combinaisons'],
    icone: ico('M4 4h11a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2V4ZM17 6h3v14H6'),
  },
  {
    chemin: '/review',
    libelle: 'Réviser',
    prefixes: ['/review'],
    icone: ico('M3 7h13a4 4 0 0 1 0 8H7l3-3m-3 3 3 3M3 7v10'),
  },
  {
    chemin: '/training',
    libelle: "S'entraîner",
    prefixes: ['/training'],
    icone: ico('M12 3v3m0 12v3M3 12h3m12 0h3M6.5 6.5 8.6 8.6m6.8 6.8 2.1 2.1m0-11-2.1 2.1m-6.8 6.8-2.1 2.1'),
  },
  {
    chemin: '/exam',
    libelle: 'Examen',
    prefixes: ['/exam', '/history'],
    icone: ico('M12 3 3 7l9 4 9-4-9-4ZM7 10v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5'),
  },
]

function estActif(chemin: string, entree: Entree): boolean {
  if (entree.chemin === '/') return chemin === '/'
  return entree.prefixes.some((p) => chemin === p || chemin.startsWith(`${p}/`))
}

export function Coquille({ children }: { children: ReactNode }) {
  const { route, naviguer } = useRoutage()
  const desktop = useMediaQuery('(min-width: 900px)')
  const { progression, stockageIndisponible } = useProgression()

  const navigation = (
    <nav className="nav" aria-label="Navigation principale">
      {desktop && (
        <Lien vers="/" className="nav__marque">
          STRAT
        </Lien>
      )}
      {ENTREES.map((e) => {
        const actif = estActif(route.chemin, e)
        return (
          <Lien key={e.chemin} vers={e.chemin} className="nav__lien" aria-current={actif ? 'page' : undefined}>
            <span className="nav__icone">{e.icone}</span>
            <span>{e.libelle}</span>
          </Lien>
        )
      })}
      {desktop && (
        <div className="nav__pied">
          <Lien vers="/settings" className="nav__lien" aria-current={route.chemin === '/settings' ? 'page' : undefined}>
            <span className="nav__icone">
              {ico('M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z')}
            </span>
            <span>Réglages</span>
          </Lien>
        </div>
      )}
    </nav>
  )

  return (
    <div className="appli">
      <a className="lien-evitement" href="#contenu-principal">
        Aller au contenu
      </a>

      {navigation}

      <div className="zone-principale">
        {!desktop && (
          <header className="entete">
            <Lien vers="/" className="entete__marque">
              STRAT
            </Lien>
            <div className="entete__actions">
              <Bouton variante="discret" onClick={() => naviguer('/notions?focus=recherche')} aria-label="Rechercher une notion">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <circle cx="7" cy="7" r="4.5" />
                  <path d="M10.5 10.5 14 14" strokeLinecap="round" />
                </svg>
              </Bouton>
              <Bouton variante="discret" onClick={() => naviguer('/settings')} aria-label="Réglages">
                ⚙
              </Bouton>
            </div>
          </header>
        )}

        {stockageIndisponible && (
          <p className="banniere-hors-ligne" role="status">
            Ta progression ne peut pas être enregistrée dans ce navigateur (navigation privée ou stockage plein). Elle
            reste active jusqu'à la fermeture de l'onglet.
          </p>
        )}

        {progression.preferences.tailleTexte !== 100 && (
          <span className="visuellement-cache">Taille de texte réglée à {progression.preferences.tailleTexte} %.</span>
        )}

        <main className="contenu" id="contenu-principal" tabIndex={-1}>
          {children}
        </main>
      </div>
    </div>
  )
}
