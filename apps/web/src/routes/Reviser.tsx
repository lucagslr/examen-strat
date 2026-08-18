import { categories, flashcards, getNotion, notions, type Flashcard, type Priorite } from '@strat/content'
import {
  ajouterHistorique,
  cartesDues,
  composerSession,
  enregistrerFlashcard,
  erreursTriees,
  notionsEnErreur,
  oublierErreur,
  revisionIntelligente,
  selectionnerCartes,
  sessionCiblee,
  statsParChapitre,
  type Verdict,
} from '@strat/domain'
import { Badge, Bouton, Carte, EtatVide, Progression, useToast } from '@strat/ui'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { EntetePage, LienNotion, Section, Texte } from '@app/components/Communs'
import { Lien, useRoutage } from '@app/router'
import { useProgression } from '@app/state/ProgressionContext'

/* ========================================================================= */
/* HUB                                                                        */
/* ========================================================================= */

export function Reviser() {
  const { progression } = useProgression()
  const { naviguer } = useRoutage()
  const dues = cartesDues(progression)
  const erreurs = erreursTriees(progression)

  return (
    <>
      <EntetePage
        titre="Réviser"
        intro="Mémoriser, puis corriger ce qui résiste. Les cartes qui te posent problème remontent automatiquement."
      />

      <div className="grille grille--2">
        <Carte variante="accent">
          <h2 className="carte__titre">Révision intelligente</h2>
          <p className="petit secondaire">
            Notions faibles d'abord, puis erreurs fréquentes, priorité examen, cartes jamais vues, cartes anciennes. Les
            notions voisines d'une notion faible remontent aussi.
          </p>
          <p className="petit">
            <strong>{dues}</strong> carte{dues > 1 ? 's' : ''} due{dues > 1 ? 's' : ''} sur {flashcards.length}.
          </p>
          <Bouton variante="principal" pleineLargeur onClick={() => naviguer('/review/flashcards')}>
            Démarrer
          </Bouton>
        </Carte>

        <Carte variante="plate">
          <h2 className="carte__titre">Mes erreurs</h2>
          <p className="petit secondaire">
            {erreurs.length === 0
              ? "Aucune erreur enregistrée pour l'instant. Fais un quiz ou un mini-jeu pour alimenter cette section."
              : `${erreurs.length} confusion${erreurs.length > 1 ? 's' : ''} repérée${erreurs.length > 1 ? 's' : ''}.`}
          </p>
          <Bouton pleineLargeur onClick={() => naviguer('/review/mistakes')}>
            Ouvrir
          </Bouton>
        </Carte>
      </div>

      <Section titre="Par chapitre">
        <div className="pile pile--serree">
          {statsParChapitre(progression)
            .filter((c) => c.total > 0)
            .map((c) => (
              <Carte key={c.categorie} variante="plate">
                <div className="rangee rangee--espace">
                  <strong className="petit">{c.nom}</strong>
                  <Bouton variante="discret" onClick={() => naviguer(`/review/flashcards?categorie=${c.categorie}`)}>
                    Réviser
                  </Bouton>
                </div>
                <Progression valeur={c.pourcentage} libelle={`Progression ${c.nom}`} />
              </Carte>
            ))}
        </div>
      </Section>

      <Section titre="Par priorité d'examen">
        <div className="grille grille--3">
          {([1, 2, 3] as Priorite[]).map((p) => (
            <Carte key={p} variante="plate">
              <h3 className="carte__titre">Priorité {p}</h3>
              <p className="legende">{flashcards.filter((f) => f.priorite === p).length} cartes</p>
              <Bouton pleineLargeur style={{ marginTop: 'var(--e-2)' }} onClick={() => naviguer(`/review/flashcards?priorite=${p}`)}>
                Réviser
              </Bouton>
            </Carte>
          ))}
        </div>
      </Section>
    </>
  )
}

/* ========================================================================= */
/* FLASHCARDS                                                                 */
/* ========================================================================= */

const LIBELLES_TYPE: Record<Flashcard['type'], string> = {
  definition: 'Définition',
  distinction: 'Distinction',
  composition: 'Composition',
  relation: 'Relation',
  application: 'Application',
  reconnaissance: 'Reconnaissance',
}

export function Flashcards() {
  const { route, naviguer } = useRoutage()
  const { progression, modifier } = useProgression()

  const categorie = route.requete.get('categorie') ?? undefined
  const notionCible = route.requete.get('notion') ?? undefined
  const prioriteBrute = Number(route.requete.get('priorite'))
  const priorite = prioriteBrute === 1 || prioriteBrute === 2 || prioriteBrute === 3 ? (prioriteBrute as Priorite) : undefined

  // Le paquet est figé au démarrage : il ne doit pas se réordonner à chaque
  // réponse, sinon l'utilisateur perd le fil de sa session.
  const [paquet] = useState<Flashcard[]>(() => {
    if (notionCible || categorie || priorite)
      return selectionnerCartes(progression, { taille: 30, categorie, notions: notionCible ? [notionCible] : undefined, priorite }).map(
        (c) => c.carte,
      )
    return revisionIntelligente(progression, 20).map((c) => c.carte)
  })

  const [index, setIndex] = useState(0)
  const [retournee, setRetournee] = useState(false)
  const [resultats, setResultats] = useState<Verdict[]>([])
  const debut = useMemo(() => Date.now(), [])

  const carte = paquet[index]
  const termine = index >= paquet.length

  const repondre = useCallback(
    (verdict: Verdict) => {
      if (!carte) return
      modifier((p) => enregistrerFlashcard(p, carte.id, verdict, carte.notions))
      setResultats((r) => [...r, verdict])
      setRetournee(false)
      setIndex((i) => i + 1)
    },
    [carte, modifier],
  )

  // Navigation clavier : espace pour retourner, 1/2/3 pour répondre.
  useEffect(() => {
    const surTouche = (e: KeyboardEvent) => {
      const cible = e.target as HTMLElement | null
      if (cible && ['INPUT', 'TEXTAREA', 'SELECT'].includes(cible.tagName)) return
      if (!carte) return
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        setRetournee((r) => !r)
      } else if (retournee && ['1', '2', '3'].includes(e.key)) {
        e.preventDefault()
        repondre(e.key === '1' ? 'ne-sais-pas' : e.key === '2' ? 'hesitant' : 'sais')
      }
    }
    window.addEventListener('keydown', surTouche)
    return () => window.removeEventListener('keydown', surTouche)
  }, [carte, retournee, repondre])

  // Consigne l'historique une fois, à la fin de la session.
  useEffect(() => {
    if (!termine || paquet.length === 0 || resultats.length !== paquet.length) return
    const sus = resultats.filter((r) => r === 'sais').length
    modifier((p) =>
      ajouterHistorique(p, {
        date: Date.now(),
        type: 'flashcards',
        libelle: `${paquet.length} flashcards révisées`,
        score: Math.round((sus / paquet.length) * 100),
        dureeSecondes: Math.round((Date.now() - debut) / 1000),
      }),
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [termine])

  if (paquet.length === 0)
    return (
      <>
        <EntetePage titre="Flashcards" />
        <EtatVide titre="Aucune carte à réviser ici" action={<Bouton onClick={() => naviguer('/review')}>Retour</Bouton>}>
          <p className="petit">Change de filtre, ou lance la révision intelligente qui puise dans tout le paquet.</p>
        </EtatVide>
      </>
    )

  if (termine) {
    const sus = resultats.filter((r) => r === 'sais').length
    const hesitants = resultats.filter((r) => r === 'hesitant').length
    const inconnus = resultats.filter((r) => r === 'ne-sais-pas').length
    return (
      <>
        <EntetePage titre="Session terminée" />
        <Carte variante="accent">
          <div className="grille grille--3">
            <div className="mesure">
              <span className="mesure__valeur">{sus}</span>
              <span className="mesure__libelle">Je sais</span>
            </div>
            <div className="mesure">
              <span className="mesure__valeur">{hesitants}</span>
              <span className="mesure__libelle">Hésitant</span>
            </div>
            <div className="mesure">
              <span className="mesure__valeur">{inconnus}</span>
              <span className="mesure__libelle">Je ne sais pas</span>
            </div>
          </div>
          <p className="petit secondaire" style={{ marginTop: 'var(--e-4)' }}>
            Les cartes ratées reviendront dès demain. Celles que tu sais s'espaceront progressivement.
          </p>
        </Carte>
        <div className="rangee" style={{ marginTop: 'var(--e-4)' }}>
          <Bouton variante="principal" onClick={() => window.location.reload()}>
            Nouvelle session
          </Bouton>
          <Bouton onClick={() => naviguer('/review')}>Retour</Bouton>
          {inconnus > 0 && <Bouton onClick={() => naviguer('/review/mistakes')}>Voir mes erreurs</Bouton>}
        </div>
      </>
    )
  }

  return (
    <>
      <div className="rangee rangee--espace" style={{ marginBottom: 'var(--e-4)' }}>
        <Bouton variante="discret" onClick={() => naviguer('/review')}>
          ← Quitter
        </Bouton>
        <span className="petit secondaire">
          {index + 1} / {paquet.length}
        </span>
      </div>

      <Progression valeur={index} max={paquet.length} libelle="Avancement de la session" afficherTexte={false} />

      {carte && (
        <div
          className={`flashcard${retournee ? ' flashcard--retournee' : ''}`}
          style={{ marginTop: 'var(--e-4)' }}
          role="button"
          tabIndex={0}
          aria-label={retournee ? 'Réponse affichée. Choisis ton verdict.' : 'Carte face question. Active pour voir la réponse.'}
          onClick={() => setRetournee((r) => !r)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setRetournee((r) => !r)
            }
          }}
        >
          <p className="flashcard__type">{LIBELLES_TYPE[carte.type]}</p>
          <p className="flashcard__texte">
            <Texte contenu={retournee ? carte.verso : carte.recto} />
          </p>
          {!retournee && <p className="flashcard__indice">Touche la carte ou appuie sur Espace pour voir la réponse</p>}
        </div>
      )}

      {retournee && carte && (
        <>
          <div className="verdicts" style={{ marginTop: 'var(--e-4)' }}>
            <Bouton taille="large" onClick={() => repondre('ne-sais-pas')}>
              Je ne sais pas <kbd>1</kbd>
            </Bouton>
            <Bouton taille="large" onClick={() => repondre('hesitant')}>
              Hésitant <kbd>2</kbd>
            </Bouton>
            <Bouton taille="large" variante="principal" onClick={() => repondre('sais')}>
              Je sais <kbd>3</kbd>
            </Bouton>
          </div>
          <p className="legende centre" style={{ marginTop: 'var(--e-3)' }}>
            Notions :{' '}
            {carte.notions.map((n, i) => (
              <span key={n}>
                {i > 0 && ' · '}
                <LienNotion id={n} />
              </span>
            ))}
          </p>
        </>
      )}
    </>
  )
}

/* ========================================================================= */
/* MES ERREURS                                                                */
/* ========================================================================= */

export function MesErreurs() {
  const { progression, modifier } = useProgression()
  const { naviguer } = useRoutage()
  const notifier = useToast()
  const erreurs = erreursTriees(progression)

  if (erreurs.length === 0)
    return (
      <>
        <EntetePage titre="Mes erreurs" />
        <EtatVide
          titre="Aucune erreur enregistrée."
          action={<Bouton variante="principal" onClick={() => naviguer('/training/quiz')}>Commencer un quiz</Bouton>}
        >
          <p className="petit">
            Chaque confusion commise dans un quiz, un duel ou un mini-jeu apparaîtra ici, avec le nombre de fois où tu
            l'as faite — et un bouton pour créer une session ciblée dessus.
          </p>
        </EtatVide>
      </>
    )

  return (
    <>
      <EntetePage
        titre="Mes erreurs"
        intro="Les confusions que tu répètes. C'est ici que se gagnent le plus de points : ce sont exactement les pièges signalés par le cours."
        actions={
          <Bouton variante="principal" onClick={() => naviguer('/review/session?erreurs=1')}>
            Session ciblée
          </Bouton>
        }
      />

      <ul className="liste-notions">
        {erreurs.map((e) => (
          <li key={e.id} className="liste-notions__item">
            <div className="liste-notions__lien" style={{ display: 'block', minHeight: 'auto' }}>
              <div className="rangee rangee--espace">
                <strong className="petit">{e.libelle}</strong>
                <Badge ton={e.occurrences >= 3 ? 'erreur' : 'neutre'}>
                  {e.occurrences} erreur{e.occurrences > 1 ? 's' : ''}
                </Badge>
              </div>
              <p className="legende sans-marge" style={{ marginTop: 'var(--e-1)' }}>
                {e.notions.map((n, i) => (
                  <span key={n}>
                    {i > 0 && ' · '}
                    <LienNotion id={n} />
                  </span>
                ))}
              </p>
              <div className="rangee" style={{ marginTop: 'var(--e-2)' }}>
                <Bouton variante="discret" onClick={() => naviguer(`/review/flashcards?notion=${e.notions[0] ?? ''}`)}>
                  Réviser
                </Bouton>
                <Bouton
                  variante="discret"
                  onClick={() => {
                    modifier((p) => oublierErreur(p, e.id))
                    notifier('Confusion retirée de la liste.')
                  }}
                >
                  Je ne la fais plus
                </Bouton>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

/* ========================================================================= */
/* SESSION COMPOSÉE (5 / 10 / 20 minutes, ou ciblée sur les erreurs)          */
/* ========================================================================= */

export function SessionRapide() {
  const { route, naviguer } = useRoutage()
  const { progression } = useProgression()

  const surErreurs = route.requete.get('erreurs') === '1'
  const dureeBrute = Number(route.requete.get('duree'))
  const duree = dureeBrute === 5 || dureeBrute === 10 || dureeBrute === 20 ? dureeBrute : 10

  const session = useMemo(
    () => (surErreurs ? sessionCiblee(progression, notionsEnErreur(progression), 10) : composerSession(progression, duree)),
    // Composée une seule fois au montage : la session ne doit pas se recomposer
    // pendant qu'on la fait.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const [etape, setEtape] = useState(0)
  const courante = session.etapes[etape]

  if (session.etapes.length === 0)
    return (
      <>
        <EntetePage titre="Session" />
        <EtatVide titre="Rien à réviser pour l'instant" action={<Bouton onClick={() => naviguer('/review')}>Retour</Bouton>} />
      </>
    )

  if (!courante)
    return (
      <>
        <EntetePage titre="Session terminée" />
        <Carte variante="accent">
          <p className="petit">
            {session.etapes.length} exercice{session.etapes.length > 1 ? 's' : ''} parcouru
            {session.etapes.length > 1 ? 's' : ''}, sur {session.notions.length} notion
            {session.notions.length > 1 ? 's' : ''}.
          </p>
          <div className="carte-noeuds" style={{ marginTop: 'var(--e-3)' }}>
            {session.notions.slice(0, 12).map((n) => (
              <Lien key={n} vers={`/notions/${n}`} className="noeud">
                {getNotion(n)?.nomCourt ?? n}
              </Lien>
            ))}
          </div>
        </Carte>
        <div className="rangee" style={{ marginTop: 'var(--e-4)' }}>
          <Bouton variante="principal" onClick={() => naviguer('/')}>
            Retour à l'accueil
          </Bouton>
          <Bouton onClick={() => window.location.reload()}>Nouvelle session</Bouton>
        </div>
      </>
    )

  // Chaque étape renvoie vers l'écran dédié : la session sert de fil conducteur.
  const destination =
    courante.type === 'flashcard'
      ? `/review/flashcards?notion=${session.notions[0] ?? ''}`
      : courante.type === 'quiz'
        ? `/training/quiz?id=${courante.refId}`
        : courante.type === 'distinction'
          ? `/training/games/duels?duel=${courante.refId}`
          : courante.type === 'question'
            ? `/training/open/${courante.refId}`
            : `/training/games/chaines`

  return (
    <>
      <EntetePage titre={surErreurs ? 'Session ciblée' : `Session ${duree} minutes`} />
      <Progression valeur={etape} max={session.etapes.length} libelle="Avancement de la session" />
      <Carte variante="accent" style={{ marginTop: 'var(--e-4)' }}>
        <p className="carte__meta">
          Étape {etape + 1} sur {session.etapes.length} —{' '}
          {courante.type === 'flashcard'
            ? 'flashcard'
            : courante.type === 'quiz'
              ? 'quiz'
              : courante.type === 'distinction'
                ? 'ne pas confondre'
                : courante.type === 'question'
                  ? 'question guidée'
                  : 'chaîne logique'}
        </p>
        <h2 className="carte__titre">{courante.libelle}</h2>
        <div className="rangee" style={{ marginTop: 'var(--e-4)' }}>
          <Bouton variante="principal" onClick={() => naviguer(destination)}>
            Faire cet exercice
          </Bouton>
          <Bouton onClick={() => setEtape((e) => e + 1)}>Passer</Bouton>
        </div>
      </Carte>
      <p className="legende centre" style={{ marginTop: 'var(--e-4)' }}>
        Reviens sur cette page après l'exercice pour enchaîner, ou passe à l'étape suivante.
      </p>
      <div className="rangee rangee--fin">
        <Bouton variante="discret" onClick={() => setEtape((e) => e + 1)}>
          Étape suivante →
        </Bouton>
      </div>
    </>
  )
}

export { categories, notions }
