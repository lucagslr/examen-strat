import { EtatVide, Bouton } from '@strat/ui'
import { lazy, Suspense, type ReactNode } from 'react'
import { Frontiere } from '@app/components/Frontiere'
import { Coquille } from '@app/layout/Coquille'
import { apparier, useRemonteeAuChangement, useRoutage } from '@app/router'
import { Accueil } from '@app/routes/Accueil'

// Le corpus est volumineux : seul l'accueil est chargé d'emblée, le reste
// arrive à la demande. Après le premier chargement complet, tout est en cache.
const Notions = lazy(() => import('@app/routes/Notions').then((m) => ({ default: m.Notions })))
const FicheNotion = lazy(() => import('@app/routes/FicheNotion').then((m) => ({ default: m.FicheNotion })))
const Reviser = lazy(() => import('@app/routes/Reviser').then((m) => ({ default: m.Reviser })))
const Flashcards = lazy(() => import('@app/routes/Reviser').then((m) => ({ default: m.Flashcards })))
const MesErreurs = lazy(() => import('@app/routes/Reviser').then((m) => ({ default: m.MesErreurs })))
const SessionRapide = lazy(() => import('@app/routes/Reviser').then((m) => ({ default: m.SessionRapide })))
const Entrainer = lazy(() => import('@app/routes/Entrainer').then((m) => ({ default: m.Entrainer })))
const Quiz = lazy(() => import('@app/routes/Entrainer').then((m) => ({ default: m.Quiz })))
const ListeQuestions = lazy(() => import('@app/routes/QuestionOuverte').then((m) => ({ default: m.ListeQuestions })))
const QuestionOuverte = lazy(() => import('@app/routes/QuestionOuverte').then((m) => ({ default: m.QuestionOuverte })))
const Modeles = lazy(() => import('@app/routes/Modeles').then((m) => ({ default: m.Modeles })))
const FicheModele = lazy(() => import('@app/routes/Modeles').then((m) => ({ default: m.FicheModele })))
const Analyse = lazy(() => import('@app/routes/Analyse').then((m) => ({ default: m.Analyse })))
const EtapeAnalyseVue = lazy(() => import('@app/routes/Analyse').then((m) => ({ default: m.EtapeAnalyseVue })))
const Jeux = lazy(() => import('@app/routes/Jeux').then((m) => ({ default: m.Jeux })))
const Jeu = lazy(() => import('@app/routes/Jeux').then((m) => ({ default: m.Jeu })))
const ListeCas = lazy(() => import('@app/routes/Cas').then((m) => ({ default: m.ListeCas })))
const FicheCas = lazy(() => import('@app/routes/Cas').then((m) => ({ default: m.FicheCas })))
const Questions = lazy(() => import('@app/routes/Questions').then((m) => ({ default: m.Questions })))
const FicheQuestion = lazy(() => import('@app/routes/Questions').then((m) => ({ default: m.FicheQuestion })))
const Examen = lazy(() => import('@app/routes/Examen').then((m) => ({ default: m.Examen })))
const Historique = lazy(() => import('@app/routes/Examen').then((m) => ({ default: m.Historique })))
const Reglages = lazy(() => import('@app/routes/Reglages').then((m) => ({ default: m.Reglages })))

/**
 * Table de routage, du plus spécifique au plus général.
 * Chaque entrée reçoit les paramètres extraits du motif.
 */
const ROUTES: { motif: string; rendre: (params: Record<string, string>) => ReactNode }[] = [
  { motif: '/', rendre: () => <Accueil /> },

  { motif: '/notions', rendre: () => <Notions /> },
  { motif: '/notions/map', rendre: () => <Notions /> },
  { motif: '/notions/paths', rendre: () => <Notions /> },
  { motif: '/notions/chapters', rendre: () => <Notions /> },
  { motif: '/notions/combinations', rendre: () => <Notions /> },
  { motif: '/notions/:slug', rendre: (p) => <FicheNotion slug={p.slug ?? ''} /> },

  { motif: '/review', rendre: () => <Reviser /> },
  { motif: '/review/flashcards', rendre: () => <Flashcards /> },
  { motif: '/review/mistakes', rendre: () => <MesErreurs /> },
  { motif: '/review/session', rendre: () => <SessionRapide /> },

  { motif: '/training', rendre: () => <Entrainer /> },
  { motif: '/training/models', rendre: () => <Modeles /> },
  { motif: '/training/models/:slug', rendre: (p) => <FicheModele slug={p.slug ?? ''} /> },
  { motif: '/training/analysis', rendre: () => <Analyse /> },
  { motif: '/training/analysis/:slug', rendre: (p) => <EtapeAnalyseVue slug={p.slug ?? ''} /> },
  { motif: '/training/quiz', rendre: () => <Quiz /> },
  { motif: '/training/open', rendre: () => <ListeQuestions /> },
  { motif: '/training/open/:id', rendre: (p) => <QuestionOuverte id={p.id ?? ''} /> },
  { motif: '/training/games', rendre: () => <Jeux /> },
  { motif: '/training/games/:id', rendre: (p) => <Jeu id={p.id ?? ''} /> },
  { motif: '/training/cases', rendre: () => <ListeCas /> },
  { motif: '/training/cases/:id', rendre: (p) => <FicheCas id={p.id ?? ''} /> },

  { motif: '/questions', rendre: () => <Questions /> },
  { motif: '/questions/:slug', rendre: (p) => <FicheQuestion slug={p.slug ?? ''} /> },

  { motif: '/exam', rendre: () => <Examen /> },
  { motif: '/history', rendre: () => <Historique /> },
  { motif: '/settings', rendre: () => <Reglages /> },
]

function Chargement() {
  return (
    <div className="pile" aria-busy="true" aria-live="polite">
      <span className="visuellement-cache">Chargement…</span>
      <div className="squelette" style={{ height: '2rem', width: '55%' }} />
      <div className="squelette" style={{ height: '1rem', width: '85%' }} />
      <div className="squelette" style={{ height: '10rem' }} />
    </div>
  )
}

export function App() {
  const { route, naviguer } = useRoutage()
  useRemonteeAuChangement(route.chemin)

  for (const r of ROUTES) {
    const params = apparier(r.motif, route.chemin)
    if (params) {
      return (
        <Coquille>
          {/* La clé remonte la frontière à chaque changement de route : une
              erreur sur un écran n'empêche pas d'en ouvrir un autre. */}
          <Frontiere key={route.chemin}>
            <Suspense fallback={<Chargement />}>{r.rendre(params)}</Suspense>
          </Frontiere>
        </Coquille>
      )
    }
  }

  return (
    <Coquille>
      <EtatVide
        titre="Cette page n'existe pas"
        action={
          <Bouton variante="principal" onClick={() => naviguer('/')}>
            Retour à l'accueil
          </Bouton>
        }
      >
        <p className="petit">
          L'adresse <code>{route.chemin}</code> ne correspond à aucune page. Toutes les notions restent accessibles
          depuis l'index.
        </p>
      </EtatVide>
    </Coquille>
  )
}
