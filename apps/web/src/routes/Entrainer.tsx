import {
  cas,
  jeux,
  questions,
  quiz,
  NB_ETAPES_ANALYSE,
  NB_MODELES,
  type Quiz as TypeQuiz,
} from '@strat/content'
import {
  ajouterHistorique,
  enregistrerQuiz,
  erreurNotions,
  melangerAvecGraine,
  selectionnerQuiz,
} from '@strat/domain'
import { Bouton, Carte, Encadre, EtatVide, Progression, useToast } from '@strat/ui'
import { useCallback, useMemo, useState } from 'react'
import { EntetePage, LienNotion, Section, Texte } from '@app/components/Communs'
import { Lien, useRoutage } from '@app/router'
import { useProgression } from '@app/state/ProgressionContext'

/* ========================================================================= */
/* HUB                                                                        */
/* ========================================================================= */

export function Entrainer() {
  const { naviguer } = useRoutage()
  const nbGuidees = questions.filter((q) => q.guidage).length

  return (
    <>
      <EntetePage
        titre="S'entraîner"
        intro="Reconnaître, distinguer, appliquer, argumenter. Tout part des mêmes notions : ce sont les modes d'interaction qui changent."
      />

      {/* Avant de s'exercer : comprendre le raisonnement. Ces deux sections
          sont l'entrée pour qui part de zéro — les autres supposent acquis ce
          qu'elles enseignent. */}
      <Section titre="Apprendre le raisonnement">
        <div className="grille grille--2">
          <Carte variante="accent">
            <h2 className="carte__titre">Les modèles</h2>
            <p className="petit secondaire">
              Les {NB_MODELES} schémas du cours, expliqués case par case : à quoi sert chaque case, ce qu’on y met,
              quand sortir l’outil et ce qui le relie aux autres. Chaque case du dessin mène à son explication. Un
              découpage en huit séances permet de tout apprendre en moins de douze heures.
            </p>
            <Bouton variante="principal" pleineLargeur onClick={() => naviguer('/training/models')}>
              Ouvrir
            </Bouton>
          </Carte>

          <Carte variante="accent">
            <h2 className="carte__titre">L’analyse guidée</h2>
            <p className="petit secondaire">
              Un cas déroulé de bout en bout en {NB_ETAPES_ANALYSE} étapes : la question qu’on se pose, la méthode,
              le raisonnement à voix haute et le brouillon qu’on écrit. Chaque geste renvoie vers la case du modèle qui
              le fonde.
            </p>
            <Bouton variante="principal" pleineLargeur onClick={() => naviguer('/training/analysis')}>
              Ouvrir
            </Bouton>
          </Carte>
        </div>
      </Section>

      <Section titre="S’exercer">
      <div className="grille grille--2">
        <Carte variante="accent">
          <h2 className="carte__titre">Quiz</h2>
          <p className="petit secondaire">
            {quiz.length} questions fermées, huit mécaniques : QCM, réponses multiples, vrai/faux, association,
            classement, catégorisation, ordonnancement, texte à trous. Chaque erreur explique <em>pourquoi</em> c'est
            faux.
          </p>
          <Bouton variante="principal" pleineLargeur onClick={() => naviguer('/training/quiz')}>
            Démarrer
          </Bouton>
        </Carte>

        <Carte variante="plate">
          <h2 className="carte__titre">Questions ouvertes</h2>
          <p className="petit secondaire">
            {questions.length} questions, dont {nbGuidees} construites pas à pas selon L-I-S-A-E-C : verbe de consigne,
            notions, outil, plan, arguments, exemple, arbitrage, puis rédaction et auto-correction.
          </p>
          <Bouton pleineLargeur onClick={() => naviguer('/training/open')}>
            Ouvrir
          </Bouton>
        </Carte>

        <Carte variante="plate">
          <h2 className="carte__titre">Mini-jeux</h2>
          <p className="petit secondaire">
            Onze jeux, chacun ciblant une erreur réelle d'examen : interne/externe, PESTEL, quel outil, Porter Arena,
            SAF, chaîne de valeur, BMC, ne pas confondre, chaînes logiques, maillon manquant, phrase d'examen.
          </p>
          <Bouton pleineLargeur onClick={() => naviguer('/training/games')}>
            Ouvrir
          </Bouton>
        </Carte>

        <Carte variante="plate">
          <h2 className="carte__titre">Cas pratiques</h2>
          <p className="petit secondaire">
            {cas.length} cas du cours, chacun en quatre modes : lire, analyser en marquant les extraits, s'entraîner,
            puis voir le corrigé.
          </p>
          <Bouton pleineLargeur onClick={() => naviguer('/training/cases')}>
            Ouvrir
          </Bouton>
        </Carte>
        </div>
      </Section>

      <Section titre="Duels « ne pas confondre »">
        <p className="petit secondaire">
          Les {jeux.duels.length} confusions les plus dangereuses du cours, à trancher carte par carte.
        </p>
        <div className="carte-noeuds">
          {jeux.duels.map((d) => (
            <Lien key={d.id} vers={`/training/games/duels?duel=${d.id}`} className="noeud">
              {d.gauche.libelle} ≠ {d.droite.libelle}
            </Lien>
          ))}
        </div>
      </Section>
    </>
  )
}

/* ========================================================================= */
/* QUIZ                                                                       */
/* ========================================================================= */

export function Quiz() {
  const { route, naviguer } = useRoutage()
  const { progression, modifier } = useProgression()
  const notifier = useToast()

  const idDemande = route.requete.get('id')
  const notionCible = route.requete.get('notion')

  const [serie] = useState<TypeQuiz[]>(() => {
    if (idDemande) {
      const q = quiz.find((x) => x.id === idDemande)
      return q ? [q] : []
    }
    if (notionCible) return quiz.filter((q) => q.notions.includes(notionCible))
    return selectionnerQuiz(progression, 10)
  })

  const [index, setIndex] = useState(0)
  const [scores, setScores] = useState<boolean[]>([])
  const question = serie[index]
  const termine = index >= serie.length

  const valider = useCallback(
    (correct: boolean, q: TypeQuiz) => {
      modifier((p) => {
        let suivant = enregistrerQuiz(p, q.notions, correct)
        if (!correct) suivant = erreurNotions(suivant, q.notions)
        return suivant
      })
      setScores((s) => [...s, correct])
    },
    [modifier],
  )

  if (serie.length === 0)
    return (
      <>
        <EntetePage titre="Quiz" />
        <EtatVide titre="Aucun quiz ne correspond" action={<Bouton onClick={() => naviguer('/training')}>Retour</Bouton>} />
      </>
    )

  if (termine) {
    const justes = scores.filter(Boolean).length
    const pct = Math.round((justes / serie.length) * 100)
    return (
      <>
        <EntetePage titre="Quiz terminé" />
        <Carte variante="accent">
          <div className="mesure">
            <span className="mesure__valeur">{pct} %</span>
            <span className="mesure__libelle">
              {justes} bonne{justes > 1 ? 's' : ''} réponse{justes > 1 ? 's' : ''} sur {serie.length}
            </span>
          </div>
          {pct < 70 && (
            <p className="petit secondaire" style={{ marginTop: 'var(--e-3)' }}>
              Les notions ratées sont remontées dans « Mes erreurs ». Une session ciblée dessus est souvent plus
              rentable qu'une révision générale.
            </p>
          )}
        </Carte>
        <div className="rangee" style={{ marginTop: 'var(--e-4)' }}>
          <Bouton variante="principal" onClick={() => window.location.reload()}>
            Nouvelle série
          </Bouton>
          <Bouton onClick={() => naviguer('/review/mistakes')}>Mes erreurs</Bouton>
          <Bouton onClick={() => naviguer('/training')}>Retour</Bouton>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="rangee rangee--espace" style={{ marginBottom: 'var(--e-3)' }}>
        <Bouton variante="discret" onClick={() => naviguer('/training')}>
          ← Quitter
        </Bouton>
        <span className="petit secondaire">
          {index + 1} / {serie.length}
        </span>
      </div>
      <Progression valeur={index} max={serie.length} libelle="Avancement du quiz" afficherTexte={false} />

      {question && (
        <QuestionQuiz
          key={question.id}
          question={question}
          onValider={(correct) => {
            valider(correct, question)
            if (!correct) notifier('Réponse incorrecte — lis l\'explication.', 'erreur')
          }}
          onSuivant={() => {
            if (index + 1 >= serie.length) {
              const justes = [...scores].filter(Boolean).length
              modifier((p) =>
                ajouterHistorique(p, {
                  date: Date.now(),
                  type: 'quiz',
                  libelle: `Quiz — ${serie.length} questions`,
                  score: Math.round((justes / serie.length) * 100),
                }),
              )
            }
            setIndex((i) => i + 1)
          }}
        />
      )}
    </>
  )
}

/** Aiguillage : chaque type de quiz a sa mécanique de réponse. */
function QuestionQuiz({
  question,
  onValider,
  onSuivant,
}: {
  question: TypeQuiz
  onValider: (correct: boolean) => void
  onSuivant: () => void
}) {
  const [corrige, setCorrige] = useState(false)
  const [correct, setCorrect] = useState(false)

  const terminer = (juste: boolean) => {
    if (corrige) return
    setCorrect(juste)
    setCorrige(true)
    onValider(juste)
  }

  return (
    <Carte style={{ marginTop: 'var(--e-4)' }}>
      <p className="carte__meta">{libelleType(question.type)}</p>
      <h2 className="carte__titre">{question.enonce}</h2>

      {(question.type === 'qcm' || question.type === 'multiple' || question.type === 'vrai-faux') && (
        <QuizChoix question={question} corrige={corrige} onTerminer={terminer} />
      )}
      {question.type === 'association' && <QuizAssociation question={question} corrige={corrige} onTerminer={terminer} />}
      {(question.type === 'classement' || question.type === 'ordonnancement') && (
        <QuizOrdre question={question} corrige={corrige} onTerminer={terminer} />
      )}
      {question.type === 'categorisation' && <QuizCategorisation question={question} corrige={corrige} onTerminer={terminer} />}
      {question.type === 'texte-a-trous' && <QuizTrous question={question} corrige={corrige} onTerminer={terminer} />}

      {corrige && (
        <>
          <Encadre ton={correct ? 'succes' : 'alerte'} titre={correct ? 'Correct' : 'À revoir'}>
            <p className="sans-marge">{question.correction}</p>
          </Encadre>
          <p className="legende" style={{ marginTop: 'var(--e-3)' }}>
            Notions :{' '}
            {question.notions.map((n, i) => (
              <span key={n}>
                {i > 0 && ' · '}
                <LienNotion id={n} />
              </span>
            ))}
          </p>
          <div className="rangee rangee--fin">
            <Bouton variante="principal" onClick={onSuivant}>
              Suivant →
            </Bouton>
          </div>
        </>
      )}
    </Carte>
  )
}

function libelleType(t: TypeQuiz['type']): string {
  const l: Record<TypeQuiz['type'], string> = {
    qcm: 'Choix unique',
    multiple: 'Réponses multiples',
    'vrai-faux': 'Vrai ou faux',
    association: 'Association',
    classement: 'Classement',
    categorisation: 'Catégorisation',
    ordonnancement: 'Ordonnancement',
    'texte-a-trous': 'Texte à trous',
  }
  return l[t]
}

/* --- QCM / multiple / vrai-faux ----------------------------------------- */
function QuizChoix({
  question,
  corrige,
  onTerminer,
}: {
  question: Extract<TypeQuiz, { type: 'qcm' | 'multiple' | 'vrai-faux' }>
  corrige: boolean
  onTerminer: (juste: boolean) => void
}) {
  const [choisies, setChoisies] = useState<string[]>([])
  const multiple = question.type === 'multiple'

  const basculer = (id: string) => {
    if (corrige) return
    if (multiple) setChoisies((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]))
    else setChoisies([id])
  }

  const verifier = () => {
    const attendues = question.options.filter((o) => o.correcte).map((o) => o.id).sort()
    const donnees = [...choisies].sort()
    onTerminer(attendues.length === donnees.length && attendues.every((a, i) => a === donnees[i]))
  }

  return (
    <>
      <div className="pile pile--serree" role={multiple ? 'group' : 'radiogroup'} aria-label={question.enonce}>
        {question.options.map((o) => {
          const selectionnee = choisies.includes(o.id)
          const classe = corrige
            ? o.correcte
              ? 'option option--correcte'
              : selectionnee
                ? 'option option--incorrecte'
                : 'option'
            : 'option'
          return (
            <button key={o.id} type="button" className={classe} aria-pressed={selectionnee} disabled={corrige} onClick={() => basculer(o.id)}>
              <span className="option__marque" aria-hidden="true">
                {corrige ? (o.correcte ? '✓' : selectionnee ? '✕' : '·') : selectionnee ? '●' : '○'}
              </span>
              <span>
                {o.texte}
                {corrige && !o.correcte && o.explication && <span className="option__explication">{o.explication}</span>}
              </span>
            </button>
          )
        })}
      </div>
      {!corrige && (
        <div className="rangee rangee--fin" style={{ marginTop: 'var(--e-4)' }}>
          <Bouton variante="principal" disabled={choisies.length === 0} onClick={verifier}>
            Valider
          </Bouton>
        </div>
      )}
    </>
  )
}

/* --- Association --------------------------------------------------------- */
function QuizAssociation({
  question,
  corrige,
  onTerminer,
}: {
  question: Extract<TypeQuiz, { type: 'association' }>
  corrige: boolean
  onTerminer: (juste: boolean) => void
}) {
  const droites = useMemo(() => melangerAvecGraine(question.paires.map((p) => p.droite), question.id.length * 17), [question])
  const [choix, setChoix] = useState<Record<string, string>>({})

  const verifier = () => onTerminer(question.paires.every((p) => choix[p.gauche] === p.droite))

  return (
    <>
      <div className="pile pile--serree">
        {question.paires.map((p) => {
          const juste = choix[p.gauche] === p.droite
          return (
            <div key={p.gauche} className="rangee rangee--espace" style={{ gap: 'var(--e-3)' }}>
              <label className="petit" htmlFor={`asso-${question.id}-${p.gauche}`} style={{ flex: '1 1 40%' }}>
                {p.gauche}
              </label>
              <select
                id={`asso-${question.id}-${p.gauche}`}
                className="champ"
                style={{ flex: '1 1 55%', borderColor: corrige ? (juste ? 'var(--c-succes)' : 'var(--c-erreur)') : undefined }}
                disabled={corrige}
                value={choix[p.gauche] ?? ''}
                onChange={(e) => setChoix((c) => ({ ...c, [p.gauche]: e.target.value }))}
              >
                <option value="">— choisir —</option>
                {droites.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          )
        })}
      </div>
      {!corrige ? (
        <div className="rangee rangee--fin" style={{ marginTop: 'var(--e-4)' }}>
          <Bouton variante="principal" disabled={Object.keys(choix).length < question.paires.length} onClick={verifier}>
            Valider
          </Bouton>
        </div>
      ) : (
        <ul className="petit" style={{ marginTop: 'var(--e-3)' }}>
          {question.paires.map((p) => (
            <li key={p.gauche}>
              <strong>{p.gauche}</strong> → {p.droite}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

/* --- Classement / ordonnancement ---------------------------------------- */
function QuizOrdre({
  question,
  corrige,
  onTerminer,
}: {
  question: Extract<TypeQuiz, { type: 'classement' | 'ordonnancement' }>
  corrige: boolean
  onTerminer: (juste: boolean) => void
}) {
  const [ordre, setOrdre] = useState<string[]>(() => melangerAvecGraine(question.ordreCorrect, question.id.length * 31))

  // Réordonnancement par boutons : entièrement utilisable au clavier,
  // contrairement à un glisser-déposer.
  const deplacer = (i: number, delta: number) => {
    if (corrige) return
    const j = i + delta
    if (j < 0 || j >= ordre.length) return
    const copie = [...ordre]
    const a = copie[i] as string
    const b = copie[j] as string
    copie[i] = b
    copie[j] = a
    setOrdre(copie)
  }

  const verifier = () => onTerminer(ordre.every((e, i) => e === question.ordreCorrect[i]))

  return (
    <>
      <ol className="pile pile--serree" style={{ listStyle: 'none', padding: 0 }}>
        {ordre.map((e, i) => {
          const juste = corrige && e === question.ordreCorrect[i]
          return (
            <li
              key={e}
              className="rangee rangee--espace"
              style={{
                border: `1px solid ${corrige ? (juste ? 'var(--c-succes)' : 'var(--c-erreur)') : 'var(--c-bordure-forte)'}`,
                borderRadius: 'var(--r-2)',
                padding: 'var(--e-2) var(--e-3)',
                background: 'var(--c-fond-2)',
              }}
            >
              <span className="petit">
                <strong>{i + 1}.</strong> {e}
              </span>
              {!corrige && (
                <span className="rangee rangee--sans-retour" style={{ gap: 'var(--e-1)' }}>
                  <Bouton variante="discret" onClick={() => deplacer(i, -1)} disabled={i === 0} aria-label={`Monter ${e}`}>
                    ↑
                  </Bouton>
                  <Bouton variante="discret" onClick={() => deplacer(i, 1)} disabled={i === ordre.length - 1} aria-label={`Descendre ${e}`}>
                    ↓
                  </Bouton>
                </span>
              )}
            </li>
          )
        })}
      </ol>
      {!corrige ? (
        <div className="rangee rangee--fin" style={{ marginTop: 'var(--e-4)' }}>
          <Bouton variante="principal" onClick={verifier}>
            Valider
          </Bouton>
        </div>
      ) : (
        <Encadre titre="Le bon ordre">
          <ol className="sans-marge">
            {question.ordreCorrect.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ol>
          <p className="petit" style={{ marginTop: 'var(--e-2)' }}>
            {question.justificationOrdre}
          </p>
        </Encadre>
      )}
    </>
  )
}

/* --- Catégorisation ------------------------------------------------------ */
function QuizCategorisation({
  question,
  corrige,
  onTerminer,
}: {
  question: Extract<TypeQuiz, { type: 'categorisation' }>
  corrige: boolean
  onTerminer: (juste: boolean) => void
}) {
  const [affectations, setAffectations] = useState<Record<string, string>>({})

  const verifier = () => onTerminer(question.elements.every((e) => affectations[e.texte] === e.cible))

  return (
    <>
      <div className="pile pile--serree">
        {question.elements.map((e) => {
          const juste = affectations[e.texte] === e.cible
          return (
            <div key={e.texte}>
              <label className="libelle" htmlFor={`cat-${question.id}-${e.texte}`}>
                {e.texte}
              </label>
              <select
                id={`cat-${question.id}-${e.texte}`}
                className="champ"
                disabled={corrige}
                style={{ borderColor: corrige ? (juste ? 'var(--c-succes)' : 'var(--c-erreur)') : undefined }}
                value={affectations[e.texte] ?? ''}
                onChange={(v) => setAffectations((a) => ({ ...a, [e.texte]: v.target.value }))}
              >
                <option value="">— classer —</option>
                {question.categoriesCibles.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.libelle}
                  </option>
                ))}
              </select>
              {corrige && !juste && (
                <p className="option__explication">
                  Réponse : <strong>{question.categoriesCibles.find((c) => c.id === e.cible)?.libelle}</strong>
                  {e.explication ? ` — ${e.explication}` : ''}
                </p>
              )}
            </div>
          )
        })}
      </div>
      {!corrige && (
        <div className="rangee rangee--fin" style={{ marginTop: 'var(--e-4)' }}>
          <Bouton variante="principal" disabled={Object.keys(affectations).length < question.elements.length} onClick={verifier}>
            Valider
          </Bouton>
        </div>
      )}
    </>
  )
}

/* --- Texte à trous ------------------------------------------------------- */
function QuizTrous({
  question,
  corrige,
  onTerminer,
}: {
  question: Extract<TypeQuiz, { type: 'texte-a-trous' }>
  corrige: boolean
  onTerminer: (juste: boolean) => void
}) {
  const [reponses, setReponses] = useState<string[]>(() => question.reponses.map(() => ''))
  const propositions = useMemo(() => melangerAvecGraine(question.propositions, question.id.length * 13), [question])

  const verifier = () => onTerminer(reponses.every((r, i) => r === question.reponses[i]))

  let compteurTrou = -1
  return (
    <>
      <p className="lecture" style={{ fontSize: 'var(--t-h3)', lineHeight: 1.9 }}>
        {question.segments.map((s, i) => {
          if (s !== null) return <span key={i}>{s}</span>
          compteurTrou++
          const trou = compteurTrou
          const juste = corrige && reponses[trou] === question.reponses[trou]
          return (
            <span key={i}>
              <label className="visuellement-cache" htmlFor={`trou-${question.id}-${trou}`}>
                Trou {trou + 1}
              </label>
              <select
                id={`trou-${question.id}-${trou}`}
                className="champ"
                disabled={corrige}
                style={{
                  display: 'inline-block',
                  width: 'auto',
                  minWidth: '9rem',
                  borderColor: corrige ? (juste ? 'var(--c-succes)' : 'var(--c-erreur)') : undefined,
                }}
                value={reponses[trou] ?? ''}
                onChange={(e) =>
                  setReponses((r) => {
                    const c = [...r]
                    c[trou] = e.target.value
                    return c
                  })
                }
              >
                <option value="">…</option>
                {propositions.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </span>
          )
        })}
      </p>
      {!corrige ? (
        <div className="rangee rangee--fin" style={{ marginTop: 'var(--e-4)' }}>
          <Bouton variante="principal" disabled={reponses.some((r) => !r)} onClick={verifier}>
            Valider
          </Bouton>
        </div>
      ) : (
        <Encadre titre="Phrase complète">
          <p className="sans-marge">
            <Texte
              contenu={question.segments
                .map((s, i) => {
                  if (s !== null) return s
                  const trou = question.segments.slice(0, i).filter((x) => x === null).length
                  return `**${question.reponses[trou]}**`
                })
                .join('')}
            />
          </p>
        </Encadre>
      )}
    </>
  )
}
