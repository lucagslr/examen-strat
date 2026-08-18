import { cas, getNotion, type Cas as TypeCas, type MarqueurCas } from '@strat/content'
import { ajouterHistorique, marquerNotionAppliquee, melangerAvecGraine } from '@strat/domain'
import { Accordeon, Badge, Bouton, Carte, Encadre, EtatVide, Onglets, PanneauOnglet, useToast } from '@strat/ui'
import { useMemo, useState } from 'react'
import { EntetePage, LienNotion, Section } from '@app/components/Communs'
import { Lien, useRoutage } from '@app/router'
import { useProgression } from '@app/state/ProgressionContext'

const LIBELLES_MARQUEUR: Record<MarqueurCas, string> = {
  EXTERNE: 'Externe',
  INTERNE: 'Interne',
  CHIFFRE: 'Chiffre',
  RESSOURCE: 'Ressource',
  RISQUE: 'Risque',
  PARTIE_PRENANTE: 'Partie prenante',
  OPPORTUNITE: 'Opportunité',
  MENACE: 'Menace',
}

const TOUS_MARQUEURS = Object.keys(LIBELLES_MARQUEUR) as MarqueurCas[]

export function ListeCas() {
  return (
    <>
      <EntetePage
        titre="Cas pratiques"
        intro="Les six cas du cours, avec leurs corrigés officiels. Chacun se travaille en quatre modes : lire, analyser, s'entraîner, puis voir le corrigé."
      />
      <div className="grille grille--2">
        {cas.map((c) => (
          <Carte key={c.id} variante="plate">
            <div className="rangee rangee--espace">
              <h2 className="carte__titre sans-marge">{c.nom}</h2>
              <Badge ton={`p${c.priorite}` as 'p1' | 'p2' | 'p3'}>P{c.priorite}</Badge>
            </div>
            <p className="legende">{c.sousTitre}</p>
            <p className="petit secondaire">
              {c.questions.length} question{c.questions.length > 1 ? 's' : ''} · {c.extraits.length} extraits à analyser
            </p>
            <div className="carte-noeuds" style={{ marginBottom: 'var(--e-3)' }}>
              {c.outilsPertinents.slice(0, 4).map((o) => (
                <span key={o} className="badge">
                  {getNotion(o)?.nomCourt ?? o}
                </span>
              ))}
            </div>
            <Lien vers={`/training/cases/${c.id}`} className="btn btn--principal btn--pleine-largeur">
              Ouvrir le cas
            </Lien>
          </Carte>
        ))}
      </div>
    </>
  )
}

export function FicheCas({ id }: { id: string }) {
  const casPratique = cas.find((c) => c.id === id)
  const { naviguer } = useRoutage()
  const [mode, setMode] = useState('lire')

  if (!casPratique)
    return <EtatVide titre="Cas introuvable" action={<Bouton onClick={() => naviguer('/training/cases')}>Retour</Bouton>} />

  return (
    <>
      <Bouton variante="discret" onClick={() => naviguer('/training/cases')}>
        ← Tous les cas
      </Bouton>
      <EntetePage titre={casPratique.nom} intro={casPratique.sousTitre} />

      <Onglets
        onglets={[
          { id: 'lire', libelle: 'Lire' },
          { id: 'analyser', libelle: 'Analyser' },
          { id: 'entrainer', libelle: "S'entraîner" },
          { id: 'corrige', libelle: 'Corrigé' },
        ]}
        actif={mode}
        onChange={setMode}
        etiquette="Modes de travail du cas"
      />

      <div style={{ marginTop: 'var(--e-5)' }}>
        <PanneauOnglet id="lire" actif={mode}>
          <ModeLire cas={casPratique} />
        </PanneauOnglet>
        <PanneauOnglet id="analyser" actif={mode}>
          <ModeAnalyser cas={casPratique} />
        </PanneauOnglet>
        <PanneauOnglet id="entrainer" actif={mode}>
          <ModeEntrainer cas={casPratique} />
        </PanneauOnglet>
        <PanneauOnglet id="corrige" actif={mode}>
          <ModeCorrige cas={casPratique} />
        </PanneauOnglet>
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ LIRE ---- */
function ModeLire({ cas: c }: { cas: TypeCas }) {
  return (
    <>
      <div className="cas-texte lecture">
        {c.texte.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {c.chiffres && c.chiffres.length > 0 && (
        <Section titre="Chiffres du cas">
          <div className="grille grille--auto">
            {c.chiffres.map((ch, i) => (
              <div key={i} className="mesure">
                <span className="mesure__valeur" style={{ fontSize: '1.15rem' }}>
                  {ch.valeur}
                </span>
                <span className="mesure__libelle">{ch.libelle}</span>
              </div>
            ))}
          </div>
        </Section>
      )}
    </>
  )
}

/* -------------------------------------------------------------- ANALYSER ---- */
function ModeAnalyser({ cas: c }: { cas: TypeCas }) {
  const { modifier } = useProgression()
  const notifier = useToast()
  const [marquages, setMarquages] = useState<Record<string, MarqueurCas[]>>({})
  const [marqueurActif, setMarqueur] = useState<MarqueurCas>('EXTERNE')
  const [phase, setPhase] = useState<'marquer' | 'outils' | 'corrige'>('marquer')
  const [outilsChoisis, setOutils] = useState<string[]>([])

  const optionsOutils = useMemo(
    () => melangerAvecGraine([...c.outilsPertinents, ...c.outilsNonPertinents], c.id.length * 13),
    [c],
  )

  const basculerExtrait = (idExtrait: string) => {
    if (phase !== 'marquer') return
    setMarquages((m) => {
      const actuels = m[idExtrait] ?? []
      return {
        ...m,
        [idExtrait]: actuels.includes(marqueurActif)
          ? actuels.filter((x) => x !== marqueurActif)
          : [...actuels, marqueurActif],
      }
    })
  }

  return (
    <>
      <Encadre ton="info" titre="Que vois-tu ?">
        <p className="sans-marge">
          Choisis un marqueur, puis touche les passages du texte qui en relèvent. C'est exactement ce qu'il faudra faire
          mentalement à l'examen : repérer d'abord, choisir l'outil ensuite.
        </p>
      </Encadre>

      {phase === 'marquer' && (
        <>
          <div className="chips" style={{ margin: 'var(--e-4) 0' }}>
            {TOUS_MARQUEURS.map((m) => (
              <button key={m} type="button" className="chip" aria-pressed={marqueurActif === m} onClick={() => setMarqueur(m)}>
                {LIBELLES_MARQUEUR[m]}
              </button>
            ))}
          </div>

          <div className="pile pile--serree">
            {c.extraits.map((e) => {
              const marques = marquages[e.id] ?? []
              return (
                <button
                  key={e.id}
                  type="button"
                  className={`option${marques.length ? ' option--correcte' : ''}`}
                  style={{ borderColor: marques.length ? 'var(--c-accent)' : undefined }}
                  onClick={() => basculerExtrait(e.id)}
                >
                  <span className="option__marque" aria-hidden="true">
                    {marques.length ? '✓' : '○'}
                  </span>
                  <span>
                    « {e.texte} »
                    {marques.length > 0 && (
                      <span className="option__explication">{marques.map((m) => LIBELLES_MARQUEUR[m]).join(' · ')}</span>
                    )}
                  </span>
                </button>
              )
            })}
          </div>

          <Bouton variante="principal" pleineLargeur taille="large" style={{ marginTop: 'var(--e-4)' }} onClick={() => setPhase('outils')}>
            J'ai fini de marquer
          </Bouton>
        </>
      )}

      {phase === 'outils' && (
        <>
          <h2 className="section__titre" style={{ marginTop: 'var(--e-5)' }}>
            Quels outils seraient pertinents ?
          </h2>
          <div className="pile pile--serree">
            {optionsOutils.map((o) => (
              <button
                key={o}
                type="button"
                className="option"
                aria-pressed={outilsChoisis.includes(o)}
                onClick={() => setOutils((l) => (l.includes(o) ? l.filter((x) => x !== o) : [...l, o]))}
              >
                <span className="option__marque" aria-hidden="true">
                  {outilsChoisis.includes(o) ? '●' : '○'}
                </span>
                <span>{getNotion(o)?.nom ?? o}</span>
              </button>
            ))}
          </div>
          <Bouton
            variante="principal"
            pleineLargeur
            taille="large"
            style={{ marginTop: 'var(--e-4)' }}
            disabled={outilsChoisis.length === 0}
            onClick={() => {
              setPhase('corrige')
              const justes = outilsChoisis.filter((o) => c.outilsPertinents.includes(o))
              modifier((p) => {
                let suivant = p
                for (const o of justes) suivant = marquerNotionAppliquee(suivant, o)
                return ajouterHistorique(suivant, {
                  date: Date.now(),
                  type: 'cas',
                  refId: c.id,
                  libelle: `Analyse du cas ${c.nom}`,
                })
              })
              notifier('Analyse enregistrée.', 'succes')
            }}
          >
            Comparer au corrigé
          </Bouton>
        </>
      )}

      {phase === 'corrige' && (
        <>
          <Section titre="Ce que tu as marqué, et ce qu'il fallait voir">
            <div className="pile pile--serree">
              {c.extraits.map((e) => {
                const marques = marquages[e.id] ?? []
                const attendus = e.marqueurs
                const correct = attendus.some((a) => marques.includes(a))
                return (
                  <Carte key={e.id} variante="plate">
                    <p className="petit sans-marge">« {e.texte} »</p>
                    <p className="legende sans-marge" style={{ marginTop: 'var(--e-1)' }}>
                      <span aria-hidden="true">{correct ? '✓' : marques.length ? '~' : '○'}</span> Attendu :{' '}
                      {attendus.map((a) => LIBELLES_MARQUEUR[a]).join(' · ')}
                      {marques.length > 0 && ` — tu as marqué : ${marques.map((m) => LIBELLES_MARQUEUR[m]).join(' · ')}`}
                    </p>
                    <p className="petit secondaire sans-marge" style={{ marginTop: 'var(--e-2)' }}>
                      {e.explication}
                    </p>
                  </Carte>
                )
              })}
            </div>
          </Section>

          <Section titre="Outils">
            <div className="grille grille--2">
              <Encadre ton="succes" titre="Pertinents">
                <ul className="sans-marge">
                  {c.outilsPertinents.map((o) => (
                    <li key={o}>
                      <LienNotion id={o} />
                      {outilsChoisis.includes(o) && <span className="legende"> ✓ tu l'as choisi</span>}
                    </li>
                  ))}
                </ul>
              </Encadre>
              <Encadre ton="erreur" titre="Hors sujet ici">
                <ul className="sans-marge">
                  {c.outilsNonPertinents.map((o) => (
                    <li key={o}>
                      <LienNotion id={o} />
                      {outilsChoisis.includes(o) && <span className="legende"> ✕ tu l'avais retenu</span>}
                    </li>
                  ))}
                </ul>
              </Encadre>
            </div>
          </Section>
        </>
      )}
    </>
  )
}

/* ------------------------------------------------------------ S'ENTRAÎNER ---- */
function ModeEntrainer({ cas: c }: { cas: TypeCas }) {
  const { progression, modifier } = useProgression()
  const notifier = useToast()
  const [index, setIndex] = useState(0)
  const [revele, setRevele] = useState(false)
  const question = c.questions[index]
  const cle = `cas-${c.id}-${question?.id ?? ''}`
  const [reponse, setReponse] = useState(progression.brouillonsExamen[cle] ?? '')

  if (!question)
    return (
      <Carte variante="accent">
        <h2 className="carte__titre">Toutes les questions du cas sont traitées</h2>
        <Bouton
          variante="principal"
          style={{ marginTop: 'var(--e-3)' }}
          onClick={() => {
            setIndex(0)
            setRevele(false)
          }}
        >
          Recommencer
        </Bouton>
      </Carte>
    )

  return (
    <>
      <p className="legende">
        Question {index + 1} sur {c.questions.length}
      </p>
      <Carte>
        <h2 className="carte__titre">{question.enonce}</h2>

        <label className="libelle" htmlFor={`rep-${question.id}`} style={{ marginTop: 'var(--e-4)' }}>
          Ta réponse
        </label>
        <textarea
          id={`rep-${question.id}`}
          className="champ champ--zone"
          value={reponse}
          onChange={(e) => setReponse(e.target.value)}
          placeholder="Réponds avant de regarder le corrigé — c'est là que se joue l'apprentissage."
        />

        {!revele ? (
          <div className="rangee rangee--fin" style={{ marginTop: 'var(--e-3)' }}>
            <Bouton
              onClick={() => {
                modifier((p) => ({ ...p, brouillonsExamen: { ...p.brouillonsExamen, [cle]: reponse } }))
                notifier('Réponse enregistrée.', 'succes')
              }}
            >
              Enregistrer
            </Bouton>
            <Bouton variante="principal" onClick={() => setRevele(true)}>
              Voir le corrigé
            </Bouton>
          </div>
        ) : (
          <>
            <Encadre ton="info" titre="Corrigé">
              <p className="sans-marge">{question.reponse}</p>
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
              <Bouton
                variante="principal"
                onClick={() => {
                  setIndex((i) => i + 1)
                  setRevele(false)
                  setReponse('')
                }}
              >
                Question suivante →
              </Bouton>
            </div>
          </>
        )}
      </Carte>
    </>
  )
}

/* --------------------------------------------------------------- CORRIGÉ ---- */
function ModeCorrige({ cas: c }: { cas: TypeCas }) {
  return (
    <>
      <Encadre ton="alerte" titre="À lire après avoir essayé">
        <p className="sans-marge">
          Le corrigé n'apprend rien s'il est lu avant. Passe d'abord par « Analyser » et « S'entraîner ».
        </p>
      </Encadre>

      <Section titre="Questions corrigées">
        <div className="pile pile--serree">
          {c.questions.map((q) => (
            <Accordeon key={q.id} titre={q.enonce}>
              <p className="petit">{q.reponse}</p>
              <p className="legende sans-marge">
                {q.notions.map((n, i) => (
                  <span key={n}>
                    {i > 0 && ' · '}
                    <LienNotion id={n} />
                  </span>
                ))}
              </p>
            </Accordeon>
          ))}
        </div>
      </Section>

      <Section titre="Notions mobilisées par ce cas">
        <div className="carte-noeuds">
          {c.notions.map((n) => (
            <Lien key={n} vers={`/notions/${n}`} className="noeud">
              {getNotion(n)?.nomCourt ?? n}
            </Lien>
          ))}
        </div>
      </Section>

      <Section titre="Sources">
        <p className="legende">{c.sources.join(' · ')}</p>
      </Section>
    </>
  )
}
