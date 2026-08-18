import { getNotion, methode, questions, type Question, type VerbeConsigne } from '@strat/content'
import { ajouterHistorique, enregistrerQuestionTraitee, melangerAvecGraine } from '@strat/domain'
import { Badge, Bouton, Carte, Encadre, EtatVide, Progression, useToast } from '@strat/ui'
import { useMemo, useState } from 'react'
import { EntetePage, LienNotion, Section } from '@app/components/Communs'
import { Lien, useRoutage } from '@app/router'
import { useProgression } from '@app/state/ProgressionContext'

/* ========================================================================= */
/* LISTE DES QUESTIONS                                                        */
/* ========================================================================= */

export function ListeQuestions() {
  const { naviguer } = useRoutage()
  const [filtre, setFiltre] = useState<'toutes' | 'officielle' | 'probable' | 'guidee'>('toutes')

  const liste = questions.filter((q) =>
    filtre === 'toutes' ? true : filtre === 'guidee' ? Boolean(q.guidage) : q.origine === filtre,
  )

  return (
    <>
      <EntetePage
        titre="Questions ouvertes"
        intro="Une question ouverte ne se traite pas en tapant une réponse puis en lisant le corrigé. Les questions guidées te font construire la réponse étape par étape."
      />

      <div className="chips" style={{ marginBottom: 'var(--e-4)' }}>
        {(
          [
            { v: 'toutes' as const, l: `Toutes (${questions.length})` },
            { v: 'officielle' as const, l: `Corrigées (${questions.filter((q) => q.origine === 'officielle').length})` },
            { v: 'probable' as const, l: `Probables (${questions.filter((q) => q.origine === 'probable').length})` },
            { v: 'guidee' as const, l: `Guidées (${questions.filter((q) => q.guidage).length})` },
          ]
        ).map((f) => (
          <button key={f.v} type="button" className="chip" aria-pressed={filtre === f.v} onClick={() => setFiltre(f.v)}>
            {f.l}
          </button>
        ))}
      </div>

      <ul className="liste-notions">
        {liste.map((q) => (
          <li key={q.id} className="liste-notions__item">
            <Lien vers={`/training/open/${q.id}`} className="liste-notions__lien">
              <span style={{ minWidth: 0 }}>
                <span className="liste-notions__nom">{q.enonce}</span>
                <span className="liste-notions__meta" style={{ display: 'block' }}>
                  {q.origine === 'officielle' ? `Corrigée n°${q.numero}` : `Probable n°${q.numero}`} ·{' '}
                  {q.notions.slice(0, 3).map((n) => getNotion(n)?.nomCourt ?? n).join(' · ')}
                </span>
              </span>
              <span className="liste-notions__fin">
                {q.guidage && <Badge ton="accent">Guidée</Badge>}
                <Badge ton={`p${q.priorite}` as 'p1' | 'p2' | 'p3'}>P{q.priorite}</Badge>
              </span>
            </Lien>
          </li>
        ))}
      </ul>

      <p className="legende centre" style={{ marginTop: 'var(--e-5)' }}>
        Méthode de référence : {methode.lisaec.map((e) => e.lettre).join('-')} — {methode.lisaec.map((e) => e.nom).join(', ')}.
      </p>
      <div className="rangee" style={{ justifyContent: 'center' }}>
        <Bouton onClick={() => naviguer('/exam')}>Passer en mode examen</Bouton>
      </div>
    </>
  )
}

/* ========================================================================= */
/* WORKFLOW GUIDÉ                                                             */
/* ========================================================================= */

const ETAPES = [
  'Comprendre la consigne',
  'Identifier les notions',
  "Choisir l'outil",
  'Construire le plan',
  'Choisir les arguments',
  "Choisir l'exemple",
  "Identifier l'arbitrage",
  'Rédiger la réponse',
  "S'auto-corriger",
  'Corrigé du cours',
] as const

export function QuestionOuverte({ id }: { id: string }) {
  const question = questions.find((q) => q.id === id)
  const { naviguer } = useRoutage()

  if (!question)
    return (
      <EtatVide titre="Question introuvable" action={<Bouton onClick={() => naviguer('/training/open')}>Retour à la liste</Bouton>} />
    )

  if (!question.guidage) return <QuestionSimple question={question} />
  return <QuestionGuidee question={question} />
}

/** Questions sans guidage : énoncé, rédaction, puis corrigé — jamais avant. */
function QuestionSimple({ question }: { question: Question }) {
  const { naviguer } = useRoutage()
  const { progression, modifier } = useProgression()
  const notifier = useToast()
  const cle = `q-${question.id}`
  const [reponse, setReponse] = useState(progression.brouillonsExamen[cle] ?? '')
  const [corrigeVisible, setCorrigeVisible] = useState(false)

  return (
    <>
      <Bouton variante="discret" onClick={() => naviguer('/training/open')}>
        ← Toutes les questions
      </Bouton>
      <EntetePage
        titre={question.enonce}
        intro={`${question.origine === 'officielle' ? 'Question corrigée' : 'Question probable'} n°${question.numero}`}
      />

      <Section titre="Ta réponse">
        <label className="libelle" htmlFor="reponse-libre">
          Rédige, ou formule à voix haute puis note tes points clés
        </label>
        <textarea
          id="reponse-libre"
          className="champ champ--zone"
          style={{ minHeight: '14rem' }}
          value={reponse}
          onChange={(e) => setReponse(e.target.value)}
          placeholder="Intro · axes · exemple · lien transversal · arbitrage · conclusion"
        />
        <div className="rangee rangee--fin" style={{ marginTop: 'var(--e-2)' }}>
          <Bouton
            onClick={() => {
              modifier((p) => ({ ...p, brouillonsExamen: { ...p.brouillonsExamen, [cle]: reponse } }))
              notifier('Brouillon enregistré.', 'succes')
            }}
          >
            Enregistrer
          </Bouton>
        </div>
      </Section>

      <Section titre="Auto-correction">
        <ChecklistAutoCorrection />
      </Section>

      {!corrigeVisible ? (
        <Bouton
          variante="principal"
          pleineLargeur
          taille="large"
          onClick={() => {
            setCorrigeVisible(true)
            modifier((p) =>
              enregistrerQuestionTraitee(
                ajouterHistorique(p, { date: Date.now(), type: 'question-ouverte', refId: question.id, libelle: question.enonce }),
                question.notions,
              ),
            )
          }}
        >
          Voir la réponse de référence
        </Bouton>
      ) : (
        <CorrigeQuestion question={question} />
      )}
    </>
  )
}

/** Workflow complet en 10 étapes, calqué sur L-I-S-A-E-C. */
function QuestionGuidee({ question }: { question: Question }) {
  const g = question.guidage!
  const { naviguer } = useRoutage()
  const { progression, modifier } = useProgression()
  const notifier = useToast()

  const [etape, setEtape] = useState(0)
  const [verbe, setVerbe] = useState<VerbeConsigne | null>(null)
  const [notionsChoisies, setNotions] = useState<string[]>([])
  const [outilsChoisis, setOutils] = useState<string[]>([])
  const [plan, setPlan] = useState<string[]>(() =>
    melangerAvecGraine(g.planAttendu.map((b) => b.id), question.id.length * 41),
  )
  const [argsChoisis, setArgs] = useState<string[]>([])
  const [exemple, setExemple] = useState<string | null>(null)
  const [arbitrage, setArbitrage] = useState<string | null>(null)
  const [reponse, setReponse] = useState(progression.brouillonsExamen[`q-${question.id}`] ?? '')
  const [checklist, setChecklist] = useState<boolean[]>(() => g.checklist.map(() => false))
  const [autoNote, setAutoNote] = useState<string | null>(null)

  const notionsMelangees = useMemo(
    () => melangerAvecGraine([...g.notionsAttendues, ...g.notionsDistracteurs], question.id.length * 23),
    [g, question.id],
  )
  const argsMelanges = useMemo(() => melangerAvecGraine(g.arguments, question.id.length * 7), [g, question.id])

  const suivant = () => setEtape((e) => Math.min(e + 1, ETAPES.length - 1))
  const precedent = () => setEtape((e) => Math.max(e - 1, 0))

  const bascule = (liste: string[], v: string, set: (l: string[]) => void) =>
    set(liste.includes(v) ? liste.filter((x) => x !== v) : [...liste, v])

  const deplacerBloc = (i: number, delta: number) => {
    const j = i + delta
    if (j < 0 || j >= plan.length) return
    const copie = [...plan]
    const a = copie[i] as string
    const b = copie[j] as string
    copie[i] = b
    copie[j] = a
    setPlan(copie)
  }

  return (
    <>
      <Bouton variante="discret" onClick={() => naviguer('/training/open')}>
        ← Toutes les questions
      </Bouton>

      <EntetePage
        titre={question.enonce}
        intro={`${question.origine === 'officielle' ? 'Question corrigée' : 'Question probable'} n°${question.numero} — construction guidée`}
      />

      <Progression valeur={etape} max={ETAPES.length - 1} libelle="Avancement de la construction" />
      <p className="legende" style={{ marginTop: 'var(--e-2)' }}>
        Étape {etape + 1} / {ETAPES.length} — {ETAPES[etape]}
      </p>

      <Carte style={{ marginTop: 'var(--e-4)' }}>
        {/* --- 1. Verbe de consigne ------------------------------------ */}
        {etape === 0 && (
          <>
            <h2 className="carte__titre">Quel est le verbe de consigne ?</h2>
            <p className="petit secondaire">Le verbe commande la forme de la réponse. C'est le L de L-I-S-A-E-C.</p>
            <div className="pile pile--serree">
              {methode.verbes.map((v) => (
                <button
                  key={v.verbe}
                  type="button"
                  className={`option${verbe && verbe === v.verbe ? (v.verbe === g.verbeAttendu ? ' option--correcte' : ' option--incorrecte') : ''}`}
                  aria-pressed={verbe === v.verbe}
                  onClick={() => setVerbe(v.verbe)}
                >
                  <span className="option__marque" aria-hidden="true">
                    {verbe === v.verbe ? (v.verbe === g.verbeAttendu ? '✓' : '✕') : '○'}
                  </span>
                  <span>
                    <strong>{v.libelle}</strong>
                    {verbe === v.verbe && <span className="option__explication">{v.attendu} · Piège : {v.piege}</span>}
                  </span>
                </button>
              ))}
            </div>
            {verbe === g.verbeAttendu && (
              <Encadre ton="succes" titre="Ce que ce verbe implique">
                <ul className="sans-marge">
                  {g.ceQueLeVerbeImplique.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </Encadre>
            )}
          </>
        )}

        {/* --- 2. Notions ---------------------------------------------- */}
        {etape === 1 && (
          <>
            <h2 className="carte__titre">Quelles notions mobiliser ?</h2>
            <p className="petit secondaire">Le I de L-I-S-A-E-C. Attention aux distracteurs : tout n'est pas pertinent.</p>
            <div className="pile pile--serree">
              {notionsMelangees.map((n) => {
                const choisie = notionsChoisies.includes(n)
                const attendue = g.notionsAttendues.includes(n)
                return (
                  <button
                    key={n}
                    type="button"
                    className={`option${choisie ? (attendue ? ' option--correcte' : ' option--incorrecte') : ''}`}
                    aria-pressed={choisie}
                    onClick={() => bascule(notionsChoisies, n, setNotions)}
                  >
                    <span className="option__marque" aria-hidden="true">
                      {choisie ? (attendue ? '✓' : '✕') : '○'}
                    </span>
                    <span>
                      {getNotion(n)?.nom ?? n}
                      {choisie && !attendue && (
                        <span className="option__explication">Cette notion n'est pas centrale pour cette question.</span>
                      )}
                    </span>
                  </button>
                )
              })}
            </div>
          </>
        )}

        {/* --- 3. Outil ------------------------------------------------ */}
        {etape === 2 && (
          <>
            <h2 className="carte__titre">Quel outil du cours mobiliser ?</h2>
            <p className="petit secondaire">Sans outil, une question « analysez » perd des points d'office.</p>
            <div className="pile pile--serree">
              {melangerAvecGraine([...g.outilsAttendus, ...g.notionsDistracteurs.slice(0, 3)], 97).map((o) => {
                const choisi = outilsChoisis.includes(o)
                const attendu = g.outilsAttendus.includes(o)
                return (
                  <button
                    key={o}
                    type="button"
                    className={`option${choisi ? (attendu ? ' option--correcte' : ' option--incorrecte') : ''}`}
                    aria-pressed={choisi}
                    onClick={() => bascule(outilsChoisis, o, setOutils)}
                  >
                    <span className="option__marque" aria-hidden="true">
                      {choisi ? (attendu ? '✓' : '✕') : '○'}
                    </span>
                    <span>{getNotion(o)?.nom ?? o}</span>
                  </button>
                )
              })}
            </div>
          </>
        )}

        {/* --- 4. Plan ------------------------------------------------- */}
        {etape === 3 && (
          <>
            <h2 className="carte__titre">Construis le plan</h2>
            <p className="petit secondaire">Le S de L-I-S-A-E-C. Remets les blocs dans l'ordre.</p>
            <ol className="pile pile--serree" style={{ listStyle: 'none', padding: 0 }}>
              {plan.map((idBloc, i) => {
                const bloc = g.planAttendu.find((b) => b.id === idBloc)
                const aSaPlace = g.planAttendu[i]?.id === idBloc
                return (
                  <li
                    key={idBloc}
                    className="rangee rangee--espace"
                    style={{
                      border: `1px solid ${couleurBordureBloc(aSaPlace)}`,
                      borderRadius: 'var(--r-2)',
                      padding: 'var(--e-2) var(--e-3)',
                      background: 'var(--c-fond-2)',
                    }}
                  >
                    <span className="petit">
                      <strong>{i + 1}.</strong> {bloc?.libelle}
                    </span>
                    <span className="rangee rangee--sans-retour" style={{ gap: 'var(--e-1)' }}>
                      <Bouton variante="discret" disabled={i === 0} onClick={() => deplacerBloc(i, -1)} aria-label={`Monter ${bloc?.libelle}`}>
                        ↑
                      </Bouton>
                      <Bouton
                        variante="discret"
                        disabled={i === plan.length - 1}
                        onClick={() => deplacerBloc(i, 1)}
                        aria-label={`Descendre ${bloc?.libelle}`}
                      >
                        ↓
                      </Bouton>
                    </span>
                  </li>
                )
              })}
            </ol>
            {plan.every((b, i) => g.planAttendu[i]?.id === b) && (
              <Encadre ton="succes" titre="Plan correct">
                <p className="sans-marge">C'est l'ordre attendu par le corrigé.</p>
              </Encadre>
            )}
          </>
        )}

        {/* --- 5. Arguments -------------------------------------------- */}
        {etape === 4 && (
          <>
            <h2 className="carte__titre">Quels arguments retenir ?</h2>
            <p className="petit secondaire">Le A de L-I-S-A-E-C. Chaque argument doit servir le plan.</p>
            <div className="pile pile--serree">
              {argsMelanges.map((a, i) => {
                const choisi = argsChoisis.includes(a.texte)
                return (
                  <button
                    key={i}
                    type="button"
                    className={`option${choisi ? (a.pertinent ? ' option--correcte' : ' option--incorrecte') : ''}`}
                    aria-pressed={choisi}
                    onClick={() => bascule(argsChoisis, a.texte, setArgs)}
                  >
                    <span className="option__marque" aria-hidden="true">
                      {choisi ? (a.pertinent ? '✓' : '✕') : '○'}
                    </span>
                    <span>
                      {a.texte}
                      {choisi && !a.pertinent && a.pourquoi && <span className="option__explication">{a.pourquoi}</span>}
                    </span>
                  </button>
                )
              })}
            </div>
          </>
        )}

        {/* --- 6. Exemple ---------------------------------------------- */}
        {etape === 5 && (
          <>
            <h2 className="carte__titre">Quel exemple citer ?</h2>
            <p className="petit secondaire">Le I de D-E-I. Privilégie toujours un exemple du cours.</p>
            <div className="pile pile--serree">
              {g.exemplesProposes.map((ex, i) => {
                const choisi = exemple === ex.texte
                return (
                  <button
                    key={i}
                    type="button"
                    className={`option${choisi ? (ex.adapte ? ' option--correcte' : ' option--incorrecte') : ''}`}
                    aria-pressed={choisi}
                    onClick={() => setExemple(ex.texte)}
                  >
                    <span className="option__marque" aria-hidden="true">
                      {choisi ? (ex.adapte ? '✓' : '✕') : '○'}
                    </span>
                    <span>
                      {ex.texte}
                      {choisi && !ex.adapte && ex.pourquoi && <span className="option__explication">{ex.pourquoi}</span>}
                      {choisi && ex.adapte && ex.cas && (
                        <span className="option__explication">
                          <Lien vers={`/training/cases/${ex.cas}`}>Ouvrir le cas complet →</Lien>
                        </span>
                      )}
                    </span>
                  </button>
                )
              })}
            </div>
          </>
        )}

        {/* --- 7. Arbitrage -------------------------------------------- */}
        {etape === 6 && (
          <>
            <h2 className="carte__titre">Quel arbitrage nommer en conclusion ?</h2>
            <p className="petit secondaire">Le C de L-I-S-A-E-C. Une conclusion qui ne tranche pas ne vaut rien.</p>
            <div className="pile pile--serree">
              {g.arbitrages.map((a, i) => {
                const choisi = arbitrage === a.texte
                return (
                  <button
                    key={i}
                    type="button"
                    className={`option${choisi ? (a.correct ? ' option--correcte' : ' option--incorrecte') : ''}`}
                    aria-pressed={choisi}
                    onClick={() => setArbitrage(a.texte)}
                  >
                    <span className="option__marque" aria-hidden="true">
                      {choisi ? (a.correct ? '✓' : '✕') : '○'}
                    </span>
                    <span>{a.texte}</span>
                  </button>
                )
              })}
            </div>
            <Encadre titre="Formules du cours">
              <ul className="sans-marge">
                {methode.formulesConclusion.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </Encadre>
          </>
        )}

        {/* --- 8. Rédaction -------------------------------------------- */}
        {etape === 7 && (
          <>
            <h2 className="carte__titre">Rédige ou formule ta réponse</h2>
            <Encadre ton="info" titre="Ton plan">
              <ol className="sans-marge">
                {plan.map((b) => (
                  <li key={b}>{g.planAttendu.find((x) => x.id === b)?.libelle}</li>
                ))}
              </ol>
            </Encadre>
            <label className="libelle" htmlFor="redaction" style={{ marginTop: 'var(--e-4)' }}>
              Mode texte — ou note tes points clés si tu réponds à voix haute
            </label>
            <textarea
              id="redaction"
              className="champ champ--zone"
              style={{ minHeight: '14rem' }}
              value={reponse}
              onChange={(e) => setReponse(e.target.value)}
              placeholder="Rédige ta réponse complète, ou lis-la à voix haute en 60 à 90 secondes."
            />
            <div className="rangee rangee--fin" style={{ marginTop: 'var(--e-2)' }}>
              <Bouton
                onClick={() => {
                  modifier((p) => ({ ...p, brouillonsExamen: { ...p.brouillonsExamen, [`q-${question.id}`]: reponse } }))
                  notifier('Réponse enregistrée.', 'succes')
                }}
              >
                Enregistrer
              </Bouton>
            </div>
          </>
        )}

        {/* --- 9. Auto-correction -------------------------------------- */}
        {etape === 8 && (
          <>
            <h2 className="carte__titre">Auto-correction</h2>
            <p className="petit secondaire">Coche ce que ta réponse contenait réellement.</p>
            <ul className="checklist">
              {g.checklist.map((c, i) => (
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
              <strong>{checklist.filter(Boolean).length}</strong> / {g.checklist.length} éléments présents.
            </p>
            <fieldset style={{ border: 0, padding: 0, marginTop: 'var(--e-4)' }}>
              <legend className="libelle">J'aurais été</legend>
              <div className="chips">
                {['insuffisant', 'moyen', 'bon', 'très bon'].map((n) => (
                  <button key={n} type="button" className="chip" aria-pressed={autoNote === n} onClick={() => setAutoNote(n)}>
                    {n}
                  </button>
                ))}
              </div>
            </fieldset>
          </>
        )}

        {/* --- 10. Corrigé --------------------------------------------- */}
        {etape === 9 && <CorrigeQuestion question={question} />}
      </Carte>

      <div className="rangee rangee--espace" style={{ marginTop: 'var(--e-4)' }}>
        <Bouton onClick={precedent} disabled={etape === 0}>
          ← Précédent
        </Bouton>
        {etape < ETAPES.length - 1 ? (
          <Bouton
            variante="principal"
            onClick={() => {
              if (etape === 8) {
                modifier((p) =>
                  enregistrerQuestionTraitee(
                    ajouterHistorique(p, {
                      date: Date.now(),
                      type: 'question-ouverte',
                      refId: question.id,
                      libelle: question.enonce,
                      autoEvaluation: { coche: checklist.filter(Boolean).length, total: g.checklist.length },
                    }),
                    question.notions,
                  ),
                )
              }
              suivant()
            }}
          >
            {etape === 8 ? 'Voir le corrigé' : 'Suivant →'}
          </Bouton>
        ) : (
          <Bouton variante="principal" onClick={() => naviguer('/training/open')}>
            Terminer
          </Bouton>
        )}
      </div>
    </>
  )
}

/** Vert quand le bloc est déjà à sa place, neutre sinon. */
function couleurBordureBloc(aSaPlace: boolean): string {
  return aSaPlace ? 'var(--c-succes)' : 'var(--c-bordure-forte)'
}

function ChecklistAutoCorrection() {
  const [coches, setCoches] = useState<boolean[]>(() => methode.checklistExamen.map(() => false))
  return (
    <ul className="checklist">
      {methode.checklistExamen.map((c, i) => (
        <li key={i}>
          <label className="checklist__item">
            <input
              type="checkbox"
              className="checklist__case"
              checked={coches[i] ?? false}
              onChange={(e) =>
                setCoches((l) => {
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
  )
}

function CorrigeQuestion({ question }: { question: Question }) {
  return (
    <>
      <h2 className="carte__titre">Réponse de référence</h2>
      <p className="lecture">{question.reponse}</p>

      {question.phraseType && (
        <Encadre ton="info" titre="Phrase-type à réutiliser">
          <p className="sans-marge">« {question.phraseType} »</p>
        </Encadre>
      )}

      {question.commentConstruire && (
        <Encadre titre="Comment construire la réponse">
          <p className="sans-marge">{question.commentConstruire}</p>
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

      <p className="legende" style={{ marginTop: 'var(--e-4)' }}>
        Notions mobilisées :{' '}
        {question.notions.map((n, i) => (
          <span key={n}>
            {i > 0 && ' · '}
            <LienNotion id={n} />
          </span>
        ))}
      </p>
    </>
  )
}
