import { getNotion, jeux, type Duel } from '@strat/content'
import {
  ajouterHistorique,
  erreurDuel,
  erreurNotions,
  marquerNotionAppliquee,
  melangerAvecGraine,
} from '@strat/domain'
import { Badge, Bouton, Carte, Encadre, EtatVide, Progression } from '@strat/ui'
import { useMemo, useState } from 'react'
import { EntetePage, LienNotion, Section } from '@app/components/Communs'
import { Lien, useRoutage } from '@app/router'
import { useProgression } from '@app/state/ProgressionContext'

const CATALOGUE = [
  { id: 'interne-externe', nom: 'Interne ou externe ?', desc: "L'erreur la plus dangereuse du cours : confondre force et opportunité." },
  { id: 'pestel', nom: 'PESTEL Scanner', desc: "Classer une tendance, puis dire si elle est une opportunité ou une menace — le contexte change la réponse." },
  { id: 'quel-outil', nom: 'Quel outil ?', desc: "Reconnaître, face à une situation, l'outil du cours à sortir." },
  { id: 'porter', nom: 'Porter Arena', desc: 'Noter les forces de 0 à 5 et justifier — la justification compte plus que la note.' },
  { id: 'saf', nom: 'SAF Judge', desc: 'Ranger des affirmations en souhaitabilité, acceptabilité, faisabilité.' },
  { id: 'chaine-valeur', nom: 'Chaîne de valeur', desc: 'Remettre les activités dans l’ordre, puis rattacher les leviers durables.' },
  { id: 'bmc', nom: 'BMC Puzzle', desc: 'Envoyer chaque élément dans le bon bloc — certains en acceptent deux.' },
  { id: 'duels', nom: 'Ne pas confondre', desc: 'Distribuer les cartes entre deux notions voisines.' },
  { id: 'chaines', nom: 'Chaîne logique', desc: 'Reconstruire un enchaînement complet de raisonnement.' },
  { id: 'maillon', nom: 'Maillon manquant', desc: 'Retrouver la notion qui manque au milieu d’une chaîne.' },
  { id: 'phrases', nom: "Phrase d'examen", desc: 'Compléter les formulations à réutiliser telles quelles à l’oral.' },
] as const

export function Jeux() {
  return (
    <>
      <EntetePage
        titre="Mini-jeux"
        intro="Aucun jeu n'existe pour être amusant : chacun entraîne une erreur réelle d'examen. L'application reste entièrement utilisable sans eux."
      />
      <div className="grille grille--2">
        {CATALOGUE.map((j) => (
          <Carte key={j.id} variante="plate">
            <h2 className="carte__titre">{j.nom}</h2>
            <p className="petit secondaire">{j.desc}</p>
            <Lien
              vers={`/training/games/${j.id}`}
              className="btn btn--principal btn--pleine-largeur"
              style={{ marginTop: 'var(--e-2)' }}
            >
              Jouer
            </Lien>
          </Carte>
        ))}
      </div>
    </>
  )
}

export function Jeu({ id }: { id: string }) {
  const { naviguer } = useRoutage()
  const jeu = CATALOGUE.find((j) => j.id === id)

  if (!jeu)
    return <EtatVide titre="Jeu introuvable" action={<Bouton onClick={() => naviguer('/training/games')}>Retour</Bouton>} />

  return (
    <>
      <Bouton variante="discret" onClick={() => naviguer('/training/games')}>
        ← Tous les mini-jeux
      </Bouton>
      <EntetePage titre={jeu.nom} intro={jeu.desc} />
      {id === 'interne-externe' && <JeuInterneExterne />}
      {id === 'pestel' && <JeuPestel />}
      {id === 'quel-outil' && <JeuQuelOutil />}
      {id === 'porter' && <JeuPorter />}
      {id === 'saf' && <JeuSaf />}
      {id === 'chaine-valeur' && <JeuChaineValeur />}
      {id === 'bmc' && <JeuBmc />}
      {id === 'duels' && <JeuDuels />}
      {id === 'chaines' && <JeuChaines />}
      {id === 'maillon' && <JeuMaillon />}
      {id === 'phrases' && <JeuPhrases />}
    </>
  )
}

/* ------------------------------------------------- Interne / externe ---- */
function JeuInterneExterne() {
  const [i, setI] = useState(0)
  const [phase, setPhase] = useState<'origine' | 'swot' | 'corrige'>('origine')
  const [origine, setOrigine] = useState<'INTERNE' | 'EXTERNE' | null>(null)
  const [swot, setSwot] = useState<string | null>(null)
  const items = useMemo(() => melangerAvecGraine(jeux.interneExterne, 5), [])
  const item = items[i]

  if (!item) return <FinDeJeu total={items.length} onRejouer={() => window.location.reload()} />

  const origineJuste = origine === item.origine
  const swotJuste = swot === item.swot

  return (
    <>
      <Progression valeur={i} max={items.length} libelle="Avancement" afficherTexte={false} />
      <Carte style={{ marginTop: 'var(--e-4)' }}>
        <p className="flashcard__texte" style={{ fontSize: 'var(--t-h3)' }}>
          « {item.texte} »
        </p>

        {phase === 'origine' && (
          <div className="grille grille--2" style={{ marginTop: 'var(--e-4)' }}>
            {(['INTERNE', 'EXTERNE'] as const).map((o) => (
              <Bouton
                key={o}
                taille="large"
                variante="principal"
                onClick={() => {
                  setOrigine(o)
                  setPhase('swot')
                }}
              >
                {o}
              </Bouton>
            ))}
          </div>
        )}

        {phase === 'swot' && (
          <>
            <Encadre ton={origineJuste ? 'succes' : 'erreur'} titre={origineJuste ? 'Bonne origine' : `C'était ${item.origine}`}>
              <p className="sans-marge">{item.explication}</p>
            </Encadre>
            <p className="petit" style={{ marginTop: 'var(--e-4)' }}>
              Maintenant, quelle case du SWOT ?
            </p>
            <div className="grille grille--2">
              {(item.origine === 'INTERNE' ? (['FORCE', 'FAIBLESSE'] as const) : (['OPPORTUNITE', 'MENACE'] as const)).map((s) => (
                <Bouton
                  key={s}
                  taille="large"
                  onClick={() => {
                    setSwot(s)
                    setPhase('corrige')
                  }}
                >
                  {s}
                </Bouton>
              ))}
            </div>
          </>
        )}

        {phase === 'corrige' && (
          <>
            <Encadre ton={swotJuste ? 'succes' : 'alerte'} titre={swotJuste ? 'Correct' : `C'était ${item.swot}`}>
              <p className="sans-marge">{item.explication}</p>
            </Encadre>
            <div className="rangee rangee--fin" style={{ marginTop: 'var(--e-4)' }}>
              <Bouton
                variante="principal"
                onClick={() => {
                  setI((x) => x + 1)
                  setPhase('origine')
                  setOrigine(null)
                  setSwot(null)
                }}
              >
                Suivant →
              </Bouton>
            </div>
          </>
        )}
      </Carte>
    </>
  )
}

/* ----------------------------------------------------- PESTEL Scanner ---- */
function JeuPestel() {
  const [i, setI] = useState(0)
  const [facteur, setFacteur] = useState<string | null>(null)
  const [qualif, setQualif] = useState<string | null>(null)
  const items = useMemo(() => melangerAvecGraine(jeux.pestel, 11), [])
  const item = items[i]

  const LETTRES = [
    { c: 'P', l: 'Politique' },
    { c: 'E', l: 'Économique' },
    { c: 'S', l: 'Socioculturel' },
    { c: 'T', l: 'Technologique' },
    { c: 'EE', l: 'Environnemental et éthique' },
    { c: 'L', l: 'Légal' },
  ]

  if (!item) return <FinDeJeu total={items.length} onRejouer={() => window.location.reload()} />

  return (
    <>
      <Progression valeur={i} max={items.length} libelle="Avancement" afficherTexte={false} />
      <Carte style={{ marginTop: 'var(--e-4)' }}>
        <p className="flashcard__texte" style={{ fontSize: 'var(--t-h3)' }}>
          « {item.texte} »
        </p>
        <p className="petit secondaire">Contexte : {item.contexte}</p>

        <p className="libelle" style={{ marginTop: 'var(--e-4)' }}>
          Quel facteur ?
        </p>
        <div className="chips">
          {LETTRES.map((f) => (
            <button
              key={f.c}
              type="button"
              className="chip"
              aria-pressed={facteur === f.c}
              disabled={Boolean(qualif)}
              onClick={() => setFacteur(f.c)}
            >
              {f.c} — {f.l}
            </button>
          ))}
        </div>

        {facteur && !qualif && (
          <>
            <p className="libelle" style={{ marginTop: 'var(--e-4)' }}>
              Opportunité ou menace, pour cette entreprise ?
            </p>
            <div className="grille grille--2">
              {(['OPPORTUNITE', 'MENACE'] as const).map((q) => (
                <Bouton key={q} taille="large" onClick={() => setQualif(q)}>
                  {q === 'OPPORTUNITE' ? 'Opportunité' : 'Menace'}
                </Bouton>
              ))}
            </div>
          </>
        )}

        {qualif && (
          <>
            <Encadre
              ton={facteur === item.facteur && qualif === item.qualification ? 'succes' : 'alerte'}
              titre={`Facteur ${item.facteur} · ${item.qualification === 'OPPORTUNITE' ? 'Opportunité' : 'Menace'}`}
            >
              <p className="sans-marge">{item.explication}</p>
            </Encadre>
            <div className="rangee rangee--fin" style={{ marginTop: 'var(--e-4)' }}>
              <Bouton
                variante="principal"
                onClick={() => {
                  setI((x) => x + 1)
                  setFacteur(null)
                  setQualif(null)
                }}
              >
                Suivant →
              </Bouton>
            </div>
          </>
        )}
      </Carte>
    </>
  )
}

/* -------------------------------------------------------- Quel outil ---- */
function JeuQuelOutil() {
  const { modifier } = useProgression()
  const [i, setI] = useState(0)
  const [choix, setChoix] = useState<string | null>(null)
  const items = useMemo(() => melangerAvecGraine(jeux.quelOutil, 3), [])
  const item = items[i]

  const options = useMemo(
    () => (item ? melangerAvecGraine([item.outil, ...item.distracteurs], item.situation.length) : []),
    [item],
  )

  if (!item) return <FinDeJeu total={items.length} onRejouer={() => window.location.reload()} />

  return (
    <>
      <Progression valeur={i} max={items.length} libelle="Avancement" afficherTexte={false} />
      <Carte style={{ marginTop: 'var(--e-4)' }}>
        <p className="flashcard__texte" style={{ fontSize: 'var(--t-h3)' }}>
          « {item.situation} »
        </p>
        <div className="pile pile--serree" style={{ marginTop: 'var(--e-4)' }}>
          {options.map((o) => {
            const selectionne = choix === o
            const juste = o === item.outil
            return (
              <button
                key={o}
                type="button"
                className={`option${choix ? (juste ? ' option--correcte' : selectionne ? ' option--incorrecte' : '') : ''}`}
                disabled={Boolean(choix)}
                onClick={() => {
                  setChoix(o)
                  if (o === item.outil) modifier((p) => marquerNotionAppliquee(p, item.outil))
                  else modifier((p) => erreurNotions(p, [item.outil, o]))
                }}
              >
                <span className="option__marque" aria-hidden="true">
                  {choix ? (juste ? '✓' : selectionne ? '✕' : '·') : '○'}
                </span>
                <span>{getNotion(o)?.nom ?? o}</span>
              </button>
            )
          })}
        </div>
        {choix && (
          <>
            <Encadre ton={choix === item.outil ? 'succes' : 'alerte'} titre={getNotion(item.outil)?.nom ?? item.outil}>
              <p className="sans-marge">{item.explication}</p>
            </Encadre>
            <div className="rangee rangee--fin" style={{ marginTop: 'var(--e-4)' }}>
              <Bouton
                variante="principal"
                onClick={() => {
                  setI((x) => x + 1)
                  setChoix(null)
                }}
              >
                Suivant →
              </Bouton>
            </div>
          </>
        )}
      </Carte>
    </>
  )
}

/* ------------------------------------------------------- Porter Arena ---- */
function JeuPorter() {
  const [secteurIndex, setSecteur] = useState(0)
  const [notes, setNotes] = useState<Record<string, number>>({})
  const [corrige, setCorrige] = useState(false)
  const secteur = jeux.porterArena[secteurIndex]

  if (!secteur) return <EtatVide titre="Aucun secteur disponible" />

  const ecartMoyen =
    secteur.notes.reduce((s, n) => s + Math.abs((notes[n.force] ?? 0) - n.note), 0) / secteur.notes.length

  return (
    <>
      {jeux.porterArena.length > 1 && (
        <div className="chips" style={{ marginBottom: 'var(--e-4)' }}>
          {jeux.porterArena.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className="chip"
              aria-pressed={i === secteurIndex}
              onClick={() => {
                setSecteur(i)
                setNotes({})
                setCorrige(false)
              }}
            >
              {s.nom}
            </button>
          ))}
        </div>
      )}

      <Carte>
        <h2 className="carte__titre">{secteur.nom}</h2>
        <p className="petit secondaire">{secteur.description}</p>

        <div className="pile" style={{ marginTop: 'var(--e-4)' }}>
          {secteur.notes.map((n) => {
            const valeur = notes[n.force] ?? 0
            return (
              <div key={n.force}>
                <div className="rangee rangee--espace">
                  <label className="petit" htmlFor={`force-${n.force}`}>
                    <LienNotion id={n.force} />
                  </label>
                  <span className="petit secondaire">
                    {valeur} / 5{corrige && <strong> · corrigé : {n.note}</strong>}
                  </span>
                </div>
                <input
                  id={`force-${n.force}`}
                  type="range"
                  min={0}
                  max={5}
                  step={1}
                  value={valeur}
                  disabled={corrige}
                  onChange={(e) => setNotes((x) => ({ ...x, [n.force]: Number(e.target.value) }))}
                  style={{ width: '100%', accentColor: 'var(--c-accent)', minHeight: 'var(--cible-tactile)' }}
                />
                {corrige && (
                  <Encadre ton={Math.abs(valeur - n.note) <= 1 ? 'succes' : 'alerte'}>
                    <p className="sans-marge">{n.justification}</p>
                  </Encadre>
                )}
              </div>
            )
          })}
        </div>

        {!corrige ? (
          <Bouton variante="principal" pleineLargeur taille="large" style={{ marginTop: 'var(--e-4)' }} onClick={() => setCorrige(true)}>
            Comparer au corrigé
          </Bouton>
        ) : (
          <>
            <Encadre ton="info" titre="Conclusion attendue">
              <p className="sans-marge">{secteur.conclusion}</p>
            </Encadre>
            <Encadre titre="Ce qui compte vraiment">
              <p className="sans-marge">
                Écart moyen de {ecartMoyen.toFixed(1)} point. Mais la note n'est jamais seule : un examinateur accepte 3
                ou 4 si l'argumentation est solide, et refuse un 5 non justifié. Relis les justifications ci-dessus,
                elles sont l'exercice réel.
              </p>
            </Encadre>
          </>
        )}
      </Carte>
    </>
  )
}

/* ------------------------------------------------------------ SAF Judge ---- */
function JeuSaf() {
  const [affectations, setAffectations] = useState<Record<string, string>>({})
  const [corrige, setCorrige] = useState(false)
  const items = useMemo(() => melangerAvecGraine(jeux.saf, 29), [])
  const criteres = [
    { id: 'SOUHAITABILITE', l: 'Souhaitabilité' },
    { id: 'ACCEPTABILITE', l: 'Acceptabilité' },
    { id: 'FAISABILITE', l: 'Faisabilité' },
  ]

  const justes = items.filter((it) => affectations[it.affirmation] === it.critere).length

  return (
    <Carte>
      <p className="petit secondaire">Range chaque affirmation dans le bon critère du SAF.</p>
      <div className="pile" style={{ marginTop: 'var(--e-4)' }}>
        {items.map((it) => {
          const juste = affectations[it.affirmation] === it.critere
          return (
            <div key={it.affirmation}>
              <label className="libelle" htmlFor={`saf-${it.affirmation.slice(0, 20)}`}>
                {it.affirmation}
              </label>
              <select
                id={`saf-${it.affirmation.slice(0, 20)}`}
                className="champ"
                disabled={corrige}
                style={{ borderColor: corrige ? (juste ? 'var(--c-succes)' : 'var(--c-erreur)') : undefined }}
                value={affectations[it.affirmation] ?? ''}
                onChange={(e) => setAffectations((a) => ({ ...a, [it.affirmation]: e.target.value }))}
              >
                <option value="">— classer —</option>
                {criteres.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.l}
                  </option>
                ))}
              </select>
              {corrige && !juste && <p className="option__explication">{it.explication}</p>}
            </div>
          )
        })}
      </div>

      {!corrige ? (
        <Bouton
          variante="principal"
          pleineLargeur
          taille="large"
          style={{ marginTop: 'var(--e-4)' }}
          disabled={Object.keys(affectations).length < items.length}
          onClick={() => setCorrige(true)}
        >
          Valider
        </Bouton>
      ) : (
        <Encadre ton={justes === items.length ? 'succes' : 'alerte'} titre={`${justes} / ${items.length}`}>
          <p className="sans-marge">
            Rappel : souhaitabilité = pertinence au regard du diagnostic (SWOT) · acceptabilité = adhésion des parties
            prenantes et couple rendement/risque · faisabilité = moyens financiers, humains et contraintes légales.
          </p>
        </Encadre>
      )}
    </Carte>
  )
}

/* ------------------------------------------------------ Chaîne de valeur ---- */
function JeuChaineValeur() {
  const [ordre, setOrdre] = useState<string[]>(() => melangerAvecGraine(jeux.chaineValeurOrdre, 47))
  const [phase, setPhase] = useState<'ordre' | 'leviers'>('ordre')
  const [affectations, setAffectations] = useState<Record<string, string>>({})
  const [corrige, setCorrige] = useState(false)

  const deplacer = (i: number, d: number) => {
    const j = i + d
    if (j < 0 || j >= ordre.length) return
    const c = [...ordre]
    const a = c[i] as string
    const b = c[j] as string
    c[i] = b
    c[j] = a
    setOrdre(c)
  }

  const ordreJuste = ordre.every((o, i) => o === jeux.chaineValeurOrdre[i])
  const activites = [...new Set(jeux.chaineValeurLeviers.map((l) => l.activite))]

  return (
    <Carte>
      {phase === 'ordre' ? (
        <>
          <h2 className="carte__titre">Remets les 5 activités principales dans l'ordre</h2>
          <ol className="pile pile--serree" style={{ listStyle: 'none', padding: 0 }}>
            {ordre.map((o, i) => (
              <li
                key={o}
                className="rangee rangee--espace"
                style={{ border: '1px solid var(--c-bordure-forte)', borderRadius: 'var(--r-2)', padding: 'var(--e-2) var(--e-3)' }}
              >
                <span className="petit">
                  <strong>{i + 1}.</strong> {getNotion(o)?.nom ?? o}
                </span>
                <span className="rangee rangee--sans-retour" style={{ gap: 'var(--e-1)' }}>
                  <Bouton variante="discret" disabled={i === 0} onClick={() => deplacer(i, -1)} aria-label="Monter">
                    ↑
                  </Bouton>
                  <Bouton variante="discret" disabled={i === ordre.length - 1} onClick={() => deplacer(i, 1)} aria-label="Descendre">
                    ↓
                  </Bouton>
                </span>
              </li>
            ))}
          </ol>
          <Bouton variante="principal" pleineLargeur taille="large" style={{ marginTop: 'var(--e-4)' }} onClick={() => setPhase('leviers')}>
            Valider l'ordre
          </Bouton>
        </>
      ) : (
        <>
          <Encadre ton={ordreJuste ? 'succes' : 'alerte'} titre={ordreJuste ? 'Ordre correct' : "L'ordre attendu"}>
            <p className="sans-marge">
              {jeux.chaineValeurOrdre.map((o, i) => (
                <span key={o}>
                  {i > 0 && ' → '}
                  {getNotion(o)?.nomCourt ?? o}
                </span>
              ))}
            </p>
          </Encadre>

          <h2 className="carte__titre" style={{ marginTop: 'var(--e-5)' }}>
            Rattache chaque levier durable à son activité
          </h2>
          <div className="pile">
            {jeux.chaineValeurLeviers.map((l) => {
              const juste = affectations[l.element] === l.activite
              return (
                <div key={l.element}>
                  <label className="libelle" htmlFor={`lev-${l.element.slice(0, 18)}`}>
                    {l.element}
                  </label>
                  <select
                    id={`lev-${l.element.slice(0, 18)}`}
                    className="champ"
                    disabled={corrige}
                    style={{ borderColor: corrige ? (juste ? 'var(--c-succes)' : 'var(--c-erreur)') : undefined }}
                    value={affectations[l.element] ?? ''}
                    onChange={(e) => setAffectations((a) => ({ ...a, [l.element]: e.target.value }))}
                  >
                    <option value="">— activité —</option>
                    {activites.map((a) => (
                      <option key={a} value={a}>
                        {getNotion(a)?.nom ?? a}
                      </option>
                    ))}
                  </select>
                  {corrige && !juste && <p className="option__explication">{l.explication}</p>}
                </div>
              )
            })}
          </div>
          {!corrige && (
            <Bouton
              variante="principal"
              pleineLargeur
              taille="large"
              style={{ marginTop: 'var(--e-4)' }}
              disabled={Object.keys(affectations).length < jeux.chaineValeurLeviers.length}
              onClick={() => setCorrige(true)}
            >
              Valider
            </Bouton>
          )}
        </>
      )}
    </Carte>
  )
}

/* ------------------------------------------------------------ BMC Puzzle ---- */
function JeuBmc() {
  const [affectations, setAffectations] = useState<Record<string, string>>({})
  const [corrige, setCorrige] = useState(false)
  const items = useMemo(() => melangerAvecGraine(jeux.bmc, 59), [])
  const blocs = [...new Set(jeux.bmc.flatMap((b) => [b.bloc, ...(b.blocsAcceptes ?? [])]))]

  const estJuste = (element: string) => {
    const item = jeux.bmc.find((b) => b.element === element)
    if (!item) return false
    const choix = affectations[element]
    return choix === item.bloc || (item.blocsAcceptes?.includes(choix ?? '') ?? false)
  }

  return (
    <Carte>
      <p className="petit secondaire">
        Envoie chaque élément dans le bon bloc. Certains éléments relèvent légitimement de deux blocs : c'est ce qu'il
        faut savoir expliquer.
      </p>
      <div className="pile" style={{ marginTop: 'var(--e-4)' }}>
        {items.map((it) => (
          <div key={it.element}>
            <label className="libelle" htmlFor={`bmc-${it.element.slice(0, 18)}`}>
              {it.element}
            </label>
            <select
              id={`bmc-${it.element.slice(0, 18)}`}
              className="champ"
              disabled={corrige}
              style={{ borderColor: corrige ? (estJuste(it.element) ? 'var(--c-succes)' : 'var(--c-erreur)') : undefined }}
              value={affectations[it.element] ?? ''}
              onChange={(e) => setAffectations((a) => ({ ...a, [it.element]: e.target.value }))}
            >
              <option value="">— bloc —</option>
              {blocs.map((b) => (
                <option key={b} value={b}>
                  {getNotion(b)?.nom ?? b}
                </option>
              ))}
            </select>
            {corrige && <p className="option__explication">{it.explication}</p>}
          </div>
        ))}
      </div>
      {!corrige && (
        <Bouton
          variante="principal"
          pleineLargeur
          taille="large"
          style={{ marginTop: 'var(--e-4)' }}
          disabled={Object.keys(affectations).length < items.length}
          onClick={() => setCorrige(true)}
        >
          Valider
        </Bouton>
      )}
    </Carte>
  )
}

/* --------------------------------------------------------------- Duels ---- */
function JeuDuels() {
  const { route } = useRoutage()
  const { modifier } = useProgression()
  const idDemande = route.requete.get('duel')
  const [index, setIndex] = useState(() => {
    const i = jeux.duels.findIndex((d) => d.id === idDemande)
    return i >= 0 ? i : 0
  })
  const duel = jeux.duels[index]

  if (!duel) return <EtatVide titre="Aucun duel" />

  return (
    <>
      <div className="chips" style={{ marginBottom: 'var(--e-4)' }}>
        {jeux.duels.map((d, i) => (
          <button key={d.id} type="button" className="chip" aria-pressed={i === index} onClick={() => setIndex(i)}>
            {d.gauche.libelle} ≠ {d.droite.libelle}
          </button>
        ))}
      </div>
      <PartieDuel key={duel.id} duel={duel} onErreur={() => modifier((p) => erreurDuel(p, duel.id))} />
    </>
  )
}

function PartieDuel({ duel, onErreur }: { duel: Duel; onErreur: () => void }) {
  const [reponses, setReponses] = useState<Record<string, 'gauche' | 'droite'>>({})
  const [corrige, setCorrige] = useState(false)
  const cartes = useMemo(() => melangerAvecGraine(duel.cartes, duel.id.length * 19), [duel])
  const justes = cartes.filter((c) => reponses[c.texte] === c.cote).length

  return (
    <Carte>
      <div className="grille grille--2" style={{ marginBottom: 'var(--e-4)' }}>
        <Encadre ton="info" titre={duel.gauche.libelle}>
          <p className="sans-marge">{duel.gauche.critere}</p>
          <p className="legende sans-marge">
            <LienNotion id={duel.gauche.notion} />
          </p>
        </Encadre>
        <Encadre ton="info" titre={duel.droite.libelle}>
          <p className="sans-marge">{duel.droite.critere}</p>
          <p className="legende sans-marge">
            <LienNotion id={duel.droite.notion} />
          </p>
        </Encadre>
      </div>

      <div className="pile pile--serree">
        {cartes.map((c) => {
          const choix = reponses[c.texte]
          const juste = choix === c.cote
          return (
            <div
              key={c.texte}
              style={{
                border: `1px solid ${corrige ? (juste ? 'var(--c-succes)' : 'var(--c-erreur)') : 'var(--c-bordure)'}`,
                borderRadius: 'var(--r-2)',
                padding: 'var(--e-3)',
              }}
            >
              <p className="petit sans-marge">{c.texte}</p>
              <div className="grille grille--2" style={{ marginTop: 'var(--e-2)' }}>
                {(['gauche', 'droite'] as const).map((cote) => (
                  <Bouton
                    key={cote}
                    aria-pressed={choix === cote}
                    disabled={corrige}
                    onClick={() => setReponses((r) => ({ ...r, [c.texte]: cote }))}
                  >
                    {cote === 'gauche' ? duel.gauche.libelle : duel.droite.libelle}
                  </Bouton>
                ))}
              </div>
              {corrige && !juste && <p className="option__explication">{c.explication}</p>}
            </div>
          )
        })}
      </div>

      {!corrige ? (
        <Bouton
          variante="principal"
          pleineLargeur
          taille="large"
          style={{ marginTop: 'var(--e-4)' }}
          disabled={Object.keys(reponses).length < cartes.length}
          onClick={() => {
            setCorrige(true)
            if (cartes.some((c) => reponses[c.texte] !== c.cote)) onErreur()
          }}
        >
          Valider
        </Bouton>
      ) : (
        <Encadre ton={justes === cartes.length ? 'succes' : 'alerte'} titre={`${justes} / ${cartes.length}`}>
          <p className="sans-marge">
            {justes === cartes.length
              ? 'Distinction maîtrisée.'
              : "Cette confusion a été ajoutée à « Mes erreurs » : tu pourras générer une session ciblée dessus."}
          </p>
        </Encadre>
      )}
    </Carte>
  )
}

/* ------------------------------------------------------- Chaîne logique ---- */
function JeuChaines() {
  const [index, setIndex] = useState(0)
  const chaine = jeux.chainesLogiques[index]
  const [ordre, setOrdre] = useState<string[]>(() =>
    melangerAvecGraine(jeux.chainesLogiques[0]?.ordre ?? [], 71),
  )
  const [corrige, setCorrige] = useState(false)

  if (!chaine) return <EtatVide titre="Aucune chaîne" />

  const deplacer = (i: number, d: number) => {
    const j = i + d
    if (j < 0 || j >= ordre.length) return
    const c = [...ordre]
    const a = c[i] as string
    const b = c[j] as string
    c[i] = b
    c[j] = a
    setOrdre(c)
  }

  const juste = ordre.every((o, i) => o === chaine.ordre[i])

  return (
    <>
      <div className="chips" style={{ marginBottom: 'var(--e-4)' }}>
        {jeux.chainesLogiques.map((c, i) => (
          <button
            key={c.id}
            type="button"
            className="chip"
            aria-pressed={i === index}
            onClick={() => {
              setIndex(i)
              setOrdre(melangerAvecGraine(c.ordre, 71 + i))
              setCorrige(false)
            }}
          >
            {c.intitule}
          </button>
        ))}
      </div>

      <Carte>
        <h2 className="carte__titre">{chaine.intitule}</h2>
        <ol className="pile pile--serree" style={{ listStyle: 'none', padding: 0 }}>
          {ordre.map((o, i) => (
            <li
              key={o}
              className="rangee rangee--espace"
              style={{
                border: `1px solid ${corrige ? (o === chaine.ordre[i] ? 'var(--c-succes)' : 'var(--c-erreur)') : 'var(--c-bordure-forte)'}`,
                borderRadius: 'var(--r-2)',
                padding: 'var(--e-2) var(--e-3)',
              }}
            >
              <span className="petit">
                <strong>{i + 1}.</strong> {getNotion(o)?.nom ?? o}
              </span>
              {!corrige && (
                <span className="rangee rangee--sans-retour" style={{ gap: 'var(--e-1)' }}>
                  <Bouton variante="discret" disabled={i === 0} onClick={() => deplacer(i, -1)} aria-label="Monter">
                    ↑
                  </Bouton>
                  <Bouton variante="discret" disabled={i === ordre.length - 1} onClick={() => deplacer(i, 1)} aria-label="Descendre">
                    ↓
                  </Bouton>
                </span>
              )}
            </li>
          ))}
        </ol>
        {!corrige ? (
          <Bouton variante="principal" pleineLargeur taille="large" style={{ marginTop: 'var(--e-4)' }} onClick={() => setCorrige(true)}>
            Valider
          </Bouton>
        ) : (
          <Encadre ton={juste ? 'succes' : 'alerte'} titre={juste ? 'Chaîne correcte' : "L'ordre attendu"}>
            <p className="sans-marge">
              {chaine.ordre.map((o, i) => (
                <span key={o}>
                  {i > 0 && ' → '}
                  {getNotion(o)?.nomCourt ?? o}
                </span>
              ))}
            </p>
            <p className="petit" style={{ marginTop: 'var(--e-2)' }}>
              {chaine.explication}
            </p>
          </Encadre>
        )}
      </Carte>
    </>
  )
}

/* ------------------------------------------------------ Maillon manquant ---- */
function JeuMaillon() {
  const [i, setI] = useState(0)
  const [choix, setChoix] = useState<string | null>(null)
  const items = useMemo(() => melangerAvecGraine(jeux.maillonsManquants, 83), [])
  const item = items[i]
  const options = useMemo(
    () => (item ? melangerAvecGraine([item.reponse, ...item.distracteurs], item.id.length * 3) : []),
    [item],
  )

  if (!item) return <FinDeJeu total={items.length} onRejouer={() => window.location.reload()} />

  return (
    <>
      <Progression valeur={i} max={items.length} libelle="Avancement" afficherTexte={false} />
      <Carte style={{ marginTop: 'var(--e-4)' }}>
        <p className="flashcard__texte" style={{ fontSize: 'var(--t-h3)' }}>
          {item.chaine.map((n, k) => (
            <span key={k}>
              {k > 0 && <span className="secondaire"> → </span>}
              {n === null ? (
                <strong style={{ color: 'var(--c-accent)' }}>{choix ? (getNotion(choix)?.nomCourt ?? choix) : '?'}</strong>
              ) : (
                (getNotion(n)?.nomCourt ?? n)
              )}
            </span>
          ))}
        </p>
        <div className="pile pile--serree" style={{ marginTop: 'var(--e-4)' }}>
          {options.map((o) => {
            const selectionne = choix === o
            const juste = o === item.reponse
            return (
              <button
                key={o}
                type="button"
                className={`option${choix ? (juste ? ' option--correcte' : selectionne ? ' option--incorrecte' : '') : ''}`}
                disabled={Boolean(choix)}
                onClick={() => setChoix(o)}
              >
                <span className="option__marque" aria-hidden="true">
                  {choix ? (juste ? '✓' : selectionne ? '✕' : '·') : '○'}
                </span>
                <span>{getNotion(o)?.nom ?? o}</span>
              </button>
            )
          })}
        </div>
        {choix && (
          <>
            <Encadre ton={choix === item.reponse ? 'succes' : 'alerte'}>
              <p className="sans-marge">{item.explication}</p>
            </Encadre>
            <div className="rangee rangee--fin" style={{ marginTop: 'var(--e-4)' }}>
              <Bouton
                variante="principal"
                onClick={() => {
                  setI((x) => x + 1)
                  setChoix(null)
                }}
              >
                Suivant →
              </Bouton>
            </div>
          </>
        )}
      </Carte>
    </>
  )
}

/* ------------------------------------------------------- Phrase d'examen ---- */
function JeuPhrases() {
  const [i, setI] = useState(0)
  const [reponses, setReponses] = useState<string[]>([])
  const [corrige, setCorrige] = useState(false)
  const items = useMemo(() => melangerAvecGraine(jeux.phrasesExamen, 97), [])
  const item = items[i]
  const propositions = useMemo(() => (item ? melangerAvecGraine(item.propositions, item.id.length) : []), [item])

  if (!item) return <FinDeJeu total={items.length} onRejouer={() => window.location.reload()} />

  let trou = -1
  const juste = item.reponses.every((r, k) => reponses[k] === r)

  return (
    <>
      <Progression valeur={i} max={items.length} libelle="Avancement" afficherTexte={false} />
      <Carte style={{ marginTop: 'var(--e-4)' }}>
        <p className="lecture" style={{ fontSize: 'var(--t-h3)', lineHeight: 2 }}>
          {item.segments.map((s, k) => {
            if (s !== null) return <span key={k}>{s}</span>
            trou++
            const t = trou
            return (
              <span key={k}>
                <label className="visuellement-cache" htmlFor={`ph-${item.id}-${t}`}>
                  Trou {t + 1}
                </label>
                <select
                  id={`ph-${item.id}-${t}`}
                  className="champ"
                  disabled={corrige}
                  style={{
                    display: 'inline-block',
                    width: 'auto',
                    minWidth: '9rem',
                    borderColor: corrige ? (reponses[t] === item.reponses[t] ? 'var(--c-succes)' : 'var(--c-erreur)') : undefined,
                  }}
                  value={reponses[t] ?? ''}
                  onChange={(e) =>
                    setReponses((r) => {
                      const c = [...r]
                      c[t] = e.target.value
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
          <Bouton
            variante="principal"
            pleineLargeur
            taille="large"
            disabled={item.reponses.some((_, k) => !reponses[k])}
            onClick={() => setCorrige(true)}
          >
            Valider
          </Bouton>
        ) : (
          <>
            <Encadre ton={juste ? 'succes' : 'alerte'} titre="Phrase complète">
              <p className="sans-marge">
                {item.segments
                  .map((s, k) => {
                    if (s !== null) return s
                    const t = item.segments.slice(0, k).filter((x) => x === null).length
                    return item.reponses[t]
                  })
                  .join('')}
              </p>
              <p className="petit" style={{ marginTop: 'var(--e-2)' }}>
                {item.explication}
              </p>
            </Encadre>
            <div className="rangee rangee--fin" style={{ marginTop: 'var(--e-4)' }}>
              <Bouton
                variante="principal"
                onClick={() => {
                  setI((x) => x + 1)
                  setReponses([])
                  setCorrige(false)
                }}
              >
                Suivant →
              </Bouton>
            </div>
          </>
        )}
      </Carte>
    </>
  )
}

function FinDeJeu({ total, onRejouer }: { total: number; onRejouer: () => void }) {
  const { naviguer } = useRoutage()
  const { modifier } = useProgression()
  return (
    <Carte variante="accent">
      <h2 className="carte__titre">Série terminée</h2>
      <p className="petit secondaire">{total} situations parcourues.</p>
      <div className="rangee" style={{ marginTop: 'var(--e-4)' }}>
        <Bouton
          variante="principal"
          onClick={() => {
            modifier((p) => ajouterHistorique(p, { date: Date.now(), type: 'jeu', libelle: `Mini-jeu — ${total} situations` }))
            onRejouer()
          }}
        >
          Rejouer
        </Bouton>
        <Bouton onClick={() => naviguer('/training/games')}>Autres jeux</Bouton>
      </div>
    </Carte>
  )
}

export { Section, Badge }
