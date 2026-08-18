import { EXAM_ORAL_SECONDES, EXAM_PREPARATION_SECONDES } from '@strat/config'
import { getNotion, methode, questions, type Question } from '@strat/content'
import { ajouterHistorique, enregistrerQuestionTraitee, melangerAvecGraine, selectionnerQuestions } from '@strat/domain'
import { Badge, Bouton, Carte, Chrono, Encadre, EtatVide, useChrono, useToast } from '@strat/ui'
import { useState } from 'react'
import { EntetePage, LienNotion, Section } from '@app/components/Communs'
import { Lien, useRoutage } from '@app/router'
import { useProgression } from '@app/state/ProgressionContext'

/**
 * SIMULATION D'EXAMEN.
 * Le cours prévoit un oral individuel : 10 minutes de préparation,
 * 10 minutes de passage. L'application reproduit exactement ce format.
 */

type Phase = 'configuration' | 'preparation' | 'oral' | 'auto-evaluation' | 'corrige'
type Portee = 'prioritaires' | 'toutes' | 'theoriques' | 'cas' | 'aleatoire'

export function Examen() {
  const { naviguer } = useRoutage()
  const { progression, modifier } = useProgression()
  const notifier = useToast()

  const [phase, setPhase] = useState<Phase>('configuration')
  const [portee, setPortee] = useState<Portee>('prioritaires')
  const [question, setQuestion] = useState<Question | null>(null)
  const [notes, setNotes] = useState('')
  const [notesStructurees, setNotesStructurees] = useState<Record<string, string>>({})
  const [modeNotes, setModeNotes] = useState<'libre' | 'structure'>('structure')
  const [checklist, setChecklist] = useState<boolean[]>(() => methode.checklistExamen.map(() => false))
  const [debut, setDebut] = useState(0)
  const [lettreOuverte, setLettre] = useState<string | null>(null)

  const chronoPreparation = useChrono(EXAM_PREPARATION_SECONDES, phase === 'preparation', () => {
    setPhase('oral')
    notifier('Fin de la préparation. Passage à l’oral.', 'succes')
  })
  const chronoOral = useChrono(EXAM_ORAL_SECONDES, phase === 'oral', () => setPhase('auto-evaluation'))

  const tirer = () => {
    const filtre = (q: Question) => {
      if (portee === 'prioritaires') return q.priorite === 1
      if (portee === 'theoriques') return q.origine === 'probable'
      if (portee === 'cas') return q.origine === 'officielle'
      return true
    }
    const candidates = questions.filter(filtre)
    const choisie =
      portee === 'aleatoire'
        ? melangerAvecGraine(candidates, Date.now() % 100000)[0]
        : selectionnerQuestions(progression, 1, filtre)[0]
    if (!choisie) return
    setQuestion(choisie)
    setNotes('')
    setNotesStructurees({})
    setChecklist(methode.checklistExamen.map(() => false))
    setDebut(Date.now())
    setPhase('preparation')
  }

  /* --------------------------------------------------- Configuration ---- */
  if (phase === 'configuration')
    return (
      <>
        <EntetePage
          titre="Simulation d'examen"
          intro="Le format du cours : oral individuel, 10 minutes de préparation puis 10 minutes de passage, sur une question tirée au sort."
        />

        <Carte variante="accent">
          <div className="grille grille--2">
            <div className="mesure">
              <span className="mesure__valeur">10:00</span>
              <span className="mesure__libelle">Préparation</span>
            </div>
            <div className="mesure">
              <span className="mesure__valeur">10:00</span>
              <span className="mesure__libelle">Passage oral</span>
            </div>
          </div>
        </Carte>

        <Section titre="Sur quoi veux-tu être interrogé ?">
          <div className="pile pile--serree">
            {(
              [
                { v: 'prioritaires' as Portee, l: 'Questions prioritaires', d: 'Priorité 1 uniquement — le plus rentable.' },
                { v: 'toutes' as Portee, l: 'Toutes les questions', d: `Les ${questions.length} questions du corpus.` },
                { v: 'cas' as Portee, l: 'Questions corrigées', d: 'Les 22 questions dont le corrigé officiel existe.' },
                { v: 'theoriques' as Portee, l: 'Questions probables', d: "Les 55 questions d'entraînement." },
                { v: 'aleatoire' as Portee, l: 'Aléatoire', d: 'Tirage au sort pur, sans tenir compte de ta progression.' },
              ]
            ).map((o) => (
              <button key={o.v} type="button" className="option" aria-pressed={portee === o.v} onClick={() => setPortee(o.v)}>
                <span className="option__marque" aria-hidden="true">
                  {portee === o.v ? '●' : '○'}
                </span>
                <span>
                  <strong>{o.l}</strong>
                  <span className="option__explication">{o.d}</span>
                </span>
              </button>
            ))}
          </div>
        </Section>

        <Bouton variante="principal" taille="large" pleineLargeur onClick={tirer}>
          Démarrer la simulation
        </Bouton>

        <div className="rangee" style={{ justifyContent: 'center', marginTop: 'var(--e-4)' }}>
          <Lien vers="/history" className="petit">
            Voir mon historique d'examens →
          </Lien>
        </div>
      </>
    )

  if (!question) return <EtatVide titre="Aucune question tirée" action={<Bouton onClick={() => setPhase('configuration')}>Recommencer</Bouton>} />

  /* ------------------------------------------------------ Préparation ---- */
  if (phase === 'preparation')
    return (
      <div className="examen-scene">
        <div className="examen-entete">
          <div>
            <p className="legende sans-marge">Préparation</p>
            <Chrono secondes={chronoPreparation.restant} total={EXAM_PREPARATION_SECONDES} etiquette="Temps de préparation" />
          </div>
          <Bouton onClick={() => setPhase('oral')}>Passer à l'oral →</Bouton>
        </div>

        <Carte variante="accent">
          <p className="carte__meta">Question tirée</p>
          <h1 className="carte__titre" style={{ fontSize: 'var(--t-h2)' }}>
            {question.enonce}
          </h1>
        </Carte>

        {/* Rappel L-I-S-A-E-C : la méthode, jamais la réponse. */}
        <Carte variante="plate">
          <p className="libelle">Méthode</p>
          <div className="chips">
            {methode.lisaec.map((e) => (
              <button
                key={e.lettre}
                type="button"
                className="chip"
                aria-pressed={lettreOuverte === e.lettre}
                onClick={() => setLettre(lettreOuverte === e.lettre ? null : e.lettre)}
              >
                {e.lettre}
              </button>
            ))}
          </div>
          {lettreOuverte && (
            <Encadre titre={methode.lisaec.find((e) => e.lettre === lettreOuverte)?.nom}>
              <p className="sans-marge">
                {methode.lisaec.find((e) => e.lettre === lettreOuverte)?.action} —{' '}
                <em>{methode.lisaec.find((e) => e.lettre === lettreOuverte)?.question}</em>
              </p>
            </Encadre>
          )}
        </Carte>

        <Carte>
          <div className="rangee rangee--espace" style={{ marginBottom: 'var(--e-3)' }}>
            <p className="libelle sans-marge">Bloc-notes</p>
            <div className="segmente" role="group" aria-label="Mode de prise de notes">
              <button type="button" className="segmente__option" aria-pressed={modeNotes === 'structure'} onClick={() => setModeNotes('structure')}>
                Structuré
              </button>
              <button type="button" className="segmente__option" aria-pressed={modeNotes === 'libre'} onClick={() => setModeNotes('libre')}>
                Libre
              </button>
            </div>
          </div>

          {modeNotes === 'libre' ? (
            <textarea
              className="champ champ--zone"
              style={{ minHeight: '16rem' }}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Feuille blanche."
              aria-label="Notes libres"
            />
          ) : (
            <div className="bloc-notes">
              {methode.blocsNotesStructurees.map((bloc) => (
                <div key={bloc} className="bloc-notes__champ">
                  <label className="libelle" htmlFor={`bloc-${bloc}`}>
                    {bloc}
                  </label>
                  <textarea
                    id={`bloc-${bloc}`}
                    className="champ"
                    rows={2}
                    value={notesStructurees[bloc] ?? ''}
                    onChange={(e) => setNotesStructurees((n) => ({ ...n, [bloc]: e.target.value }))}
                  />
                </div>
              ))}
            </div>
          )}
        </Carte>

        <p className="legende centre">
          Pendant la préparation, ni la réponse, ni les notions attendues, ni le corrigé ne sont accessibles — comme à
          l'examen.
        </p>
      </div>
    )

  /* ------------------------------------------------------------- Oral ---- */
  if (phase === 'oral')
    return (
      <div className="examen-scene">
        <div className="examen-entete">
          <div>
            <p className="legende sans-marge">Passage oral</p>
            <Chrono secondes={chronoOral.restant} total={EXAM_ORAL_SECONDES} etiquette="Temps de passage" />
          </div>
          <Bouton onClick={() => setPhase('auto-evaluation')}>Terminer →</Bouton>
        </div>

        <Carte variante="accent">
          <h1 className="carte__titre" style={{ fontSize: 'var(--t-h2)' }}>
            {question.enonce}
          </h1>
        </Carte>

        <Carte>
          <p className="libelle">Tes notes</p>
          {modeNotes === 'libre' ? (
            <p className="petit" style={{ whiteSpace: 'pre-wrap' }}>
              {notes || <span className="secondaire">Aucune note prise.</span>}
            </p>
          ) : (
            <dl>
              {methode.blocsNotesStructurees.map((bloc) =>
                notesStructurees[bloc]?.trim() ? (
                  <div key={bloc} style={{ marginBottom: 'var(--e-3)' }}>
                    <dt className="libelle">{bloc}</dt>
                    <dd className="petit" style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                      {notesStructurees[bloc]}
                    </dd>
                  </div>
                ) : null,
              )}
            </dl>
          )}
        </Carte>

        <p className="legende centre">Parle à voix haute. Aucun corrigé n'est affiché avant la fin.</p>
      </div>
    )

  /* -------------------------------------------------- Auto-évaluation ---- */
  if (phase === 'auto-evaluation') {
    const coches = checklist.filter(Boolean).length
    return (
      <>
        <EntetePage titre="Auto-évaluation" intro={question.enonce} />
        <Carte>
          <ul className="checklist">
            {methode.checklistExamen.map((c, i) => (
              <li key={i}>
                <label className="checklist__item">
                  <input
                    type="checkbox"
                    className="checklist__case"
                    checked={checklist[i] ?? false}
                    onChange={(e) =>
                      setChecklist((l) => {
                        const copie = [...l]
                        copie[i] = e.target.checked
                        return copie
                      })
                    }
                  />
                  <span>{c}</span>
                </label>
              </li>
            ))}
          </ul>
          <p className="petit">
            <strong>{coches}</strong> / {methode.checklistExamen.length} critères remplis.
          </p>
        </Carte>

        <Bouton
          variante="principal"
          taille="large"
          pleineLargeur
          style={{ marginTop: 'var(--e-4)' }}
          onClick={() => {
            modifier((p) =>
              enregistrerQuestionTraitee(
                ajouterHistorique(p, {
                  date: Date.now(),
                  type: 'examen',
                  refId: question.id,
                  libelle: question.enonce,
                  score: Math.round((coches / methode.checklistExamen.length) * 100),
                  autoEvaluation: { coche: coches, total: methode.checklistExamen.length },
                  dureeSecondes: Math.round((Date.now() - debut) / 1000),
                  notionsFaibles: question.notions.slice(0, 5),
                }),
                question.notions,
              ),
            )
            setPhase('corrige')
          }}
        >
          Voir la correction
        </Bouton>
      </>
    )
  }

  /* ---------------------------------------------------------- Corrigé ---- */
  return (
    <>
      <EntetePage titre="Correction" intro={question.enonce} />

      <Carte>
        <h2 className="carte__titre">Réponse de référence</h2>
        <p className="lecture">{question.reponse}</p>

        {question.phraseType && (
          <Encadre ton="info" titre="Phrase-type">
            <p className="sans-marge">« {question.phraseType} »</p>
          </Encadre>
        )}
        {question.piege && (
          <Encadre ton="alerte" titre="Piège">
            <p className="sans-marge">{question.piege}</p>
          </Encadre>
        )}
        {question.memo && (
          <Encadre ton="succes" titre="Mémo">
            <p className="sans-marge">{question.memo}</p>
          </Encadre>
        )}
      </Carte>

      <Section titre="Notions attendues">
        <div className="carte-noeuds">
          {question.notions.map((n) => (
            <Lien key={n} vers={`/notions/${n}`} className="noeud">
              {getNotion(n)?.nomCourt ?? n}
            </Lien>
          ))}
        </div>
      </Section>

      <Section titre="Tes notes de préparation">
        <Carte variante="plate">
          {modeNotes === 'libre' ? (
            <p className="petit" style={{ whiteSpace: 'pre-wrap' }}>
              {notes || <span className="secondaire">Aucune note.</span>}
            </p>
          ) : (
            <dl>
              {methode.blocsNotesStructurees.map((bloc) =>
                notesStructurees[bloc]?.trim() ? (
                  <div key={bloc} style={{ marginBottom: 'var(--e-2)' }}>
                    <dt className="libelle">{bloc}</dt>
                    <dd className="petit" style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                      {notesStructurees[bloc]}
                    </dd>
                  </div>
                ) : null,
              )}
            </dl>
          )}
        </Carte>
      </Section>

      <div className="rangee">
        <Bouton variante="principal" onClick={() => setPhase('configuration')}>
          Nouvelle simulation
        </Bouton>
        <Bouton onClick={() => naviguer('/history')}>Mon historique</Bouton>
      </div>
    </>
  )
}

/* ========================================================================= */
/* HISTORIQUE                                                                 */
/* ========================================================================= */

export function Historique() {
  const { progression } = useProgression()
  const { naviguer } = useRoutage()
  const [filtre, setFiltre] = useState<string>('tous')

  const entrees = progression.historique.filter((h) => (filtre === 'tous' ? true : h.type === filtre))

  const dateLisible = (ms: number) =>
    new Date(ms).toLocaleDateString('fr-CH', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })

  if (progression.historique.length === 0)
    return (
      <>
        <EntetePage titre="Historique" />
        <EtatVide
          titre="Aucune session enregistrée"
          action={<Bouton variante="principal" onClick={() => naviguer('/exam')}>Passer une simulation</Bouton>}
        >
          <p className="petit">
            Chaque session de flashcards, quiz, question ouverte, cas ou examen sera consignée ici — uniquement dans ce
            navigateur.
          </p>
        </EtatVide>
      </>
    )

  return (
    <>
      <EntetePage titre="Historique" intro="Tout est stocké localement. Rien n'est envoyé nulle part." />

      <div className="chips" style={{ marginBottom: 'var(--e-4)' }}>
        {(
          [
            { v: 'tous', l: 'Tout' },
            { v: 'examen', l: 'Examens' },
            { v: 'question-ouverte', l: 'Questions' },
            { v: 'quiz', l: 'Quiz' },
            { v: 'flashcards', l: 'Flashcards' },
            { v: 'cas', l: 'Cas' },
            { v: 'jeu', l: 'Mini-jeux' },
          ]
        ).map((f) => (
          <button key={f.v} type="button" className="chip" aria-pressed={filtre === f.v} onClick={() => setFiltre(f.v)}>
            {f.l}
          </button>
        ))}
      </div>

      <ul className="liste-notions">
        {entrees.map((h) => (
          <li key={h.id} className="liste-notions__item">
            <div className="liste-notions__lien" style={{ display: 'block', minHeight: 'auto' }}>
              <div className="rangee rangee--espace">
                <span className="petit">
                  <strong>{h.libelle}</strong>
                </span>
                {h.score !== undefined && <Badge ton={h.score >= 70 ? 'succes' : 'erreur'}>{h.score} %</Badge>}
              </div>
              <p className="legende sans-marge">
                {dateLisible(h.date)}
                {h.autoEvaluation && ` · ${h.autoEvaluation.coche}/${h.autoEvaluation.total} critères`}
                {h.dureeSecondes ? ` · ${Math.round(h.dureeSecondes / 60)} min` : ''}
              </p>
              {h.notionsFaibles && h.notionsFaibles.length > 0 && (
                <p className="legende sans-marge" style={{ marginTop: 'var(--e-1)' }}>
                  À retravailler :{' '}
                  {h.notionsFaibles.map((n, i) => (
                    <span key={n}>
                      {i > 0 && ' · '}
                      <LienNotion id={n} />
                    </span>
                  ))}
                </p>
              )}
              {h.refId && h.type !== 'flashcards' && h.type !== 'jeu' && (
                <div className="rangee" style={{ marginTop: 'var(--e-2)' }}>
                  <Bouton
                    variante="discret"
                    onClick={() =>
                      naviguer(h.type === 'cas' ? `/training/cases/${h.refId}` : `/training/open/${h.refId}`)
                    }
                  >
                    Refaire
                  </Bouton>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
