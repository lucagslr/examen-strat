import {
  categories,
  combinaisons,
  notions,
  parcours,
  type Notion,
  type Priorite,
  type TypeNotion,
} from '@strat/content'
import {
  cheminCategorie,
  connexionsTransversales,
  enfantsCarte,
  indexAlphabetique,
  niveauMaitrise,
  rechercher,
} from '@strat/domain'
import { Badge, Bouton, Carte, Chip, EtatVide, Onglets, PanneauOnglet } from '@strat/ui'
import { useEffect, useMemo, useRef, useState } from 'react'
import { EntetePage, LienNotion, ListeNotions } from '@app/components/Communs'
import { Lien, useRoutage } from '@app/router'
import { useProgression } from '@app/state/ProgressionContext'

const TYPES: { valeur: TypeNotion; libelle: string }[] = [
  { valeur: 'outil', libelle: 'Outils' },
  { valeur: 'notion', libelle: 'Notions' },
  { valeur: 'modele', libelle: 'Modèles' },
  { valeur: 'methode', libelle: 'Méthodes' },
  { valeur: 'acronyme', libelle: 'Acronymes' },
  { valeur: 'cadre-legal', libelle: 'Cadres légaux' },
  { valeur: 'chiffre', libelle: 'Chiffres' },
]

type Etat = 'jamais-vue' | 'en-cours' | 'maitrisee'

export function Notions() {
  const { route, naviguer } = useRoutage()
  const sousRoute = route.chemin.replace(/^\/notions\/?/, '') || 'index'
  const vue = ['map', 'paths', 'chapters', 'combinations'].includes(sousRoute) ? sousRoute : 'index'

  const onglets = [
    { id: 'index', libelle: 'Index' },
    { id: 'chapters', libelle: 'Chapitres' },
    { id: 'map', libelle: 'Carte' },
    { id: 'paths', libelle: 'Parcours' },
    { id: 'combinations', libelle: 'Combinaisons' },
  ]

  return (
    <>
      <EntetePage
        titre="Notions"
        intro={`${notions.length} notions du cours, toutes reliées entre elles. Cherche un mot, descends par chapitre, explore la carte ou suis un raisonnement complet.`}
      />

      <Onglets
        onglets={onglets}
        actif={vue}
        etiquette="Vues des notions"
        onChange={(id) => naviguer(id === 'index' ? '/notions' : `/notions/${id}`)}
      />

      <div style={{ marginTop: 'var(--e-4)' }}>
        <PanneauOnglet id="index" actif={vue}>
          <VueIndex />
        </PanneauOnglet>
        <PanneauOnglet id="chapters" actif={vue}>
          <VueChapitres />
        </PanneauOnglet>
        <PanneauOnglet id="map" actif={vue}>
          <VueCarte />
        </PanneauOnglet>
        <PanneauOnglet id="paths" actif={vue}>
          <VueParcours />
        </PanneauOnglet>
        <PanneauOnglet id="combinations" actif={vue}>
          <VueCombinaisons />
        </PanneauOnglet>
      </div>
    </>
  )
}

/* ========================================================================= */
/* INDEX A-Z + recherche + filtres                                            */
/* ========================================================================= */

function VueIndex() {
  const { route } = useRoutage()
  const { progression } = useProgression()
  const [requete, setRequete] = useState('')
  const [prioritesActives, setPriorites] = useState<Priorite[]>(() => {
    const p = Number(route.requete.get('priorite'))
    return p === 1 || p === 2 || p === 3 ? [p as Priorite] : []
  })
  const [typesActifs, setTypes] = useState<TypeNotion[]>([])
  const [etatsActifs, setEtats] = useState<Etat[]>([])
  const [chapitre, setChapitre] = useState<string>(route.requete.get('categorie') ?? '')
  const refRecherche = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (route.requete.get('focus') === 'recherche') refRecherche.current?.focus()
  }, [route.requete])

  const niveauDe = useMemo(() => (id: string) => niveauMaitrise(progression, id), [progression])

  const resultats = useMemo(
    () =>
      rechercher(
        requete,
        {
          priorites: prioritesActives,
          types: typesActifs,
          etats: etatsActifs,
          categories: chapitre ? [chapitre] : [],
          niveauDe,
        },
        requete ? 60 : 1000,
      ).map((r) => r.notion),
    [requete, prioritesActives, typesActifs, etatsActifs, chapitre, niveauDe],
  )

  const groupes = useMemo(() => indexAlphabetique(resultats), [resultats])
  const lettresPresentes = new Set(groupes.map((g) => g.lettre))
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  const bascule = <T,>(liste: T[], v: T, set: (l: T[]) => void) =>
    set(liste.includes(v) ? liste.filter((x) => x !== v) : [...liste, v])

  const filtresActifs = prioritesActives.length + typesActifs.length + etatsActifs.length + (chapitre ? 1 : 0)

  return (
    <div className="pile pile--large">
      <div className="pile">
        <ChampRechercheNotion valeur={requete} onChange={setRequete} refInput={refRecherche} />

        <div className="chips">
          {([1, 2, 3] as Priorite[]).map((p) => (
            <Chip key={p} actif={prioritesActives.includes(p)} onClick={() => bascule(prioritesActives, p, setPriorites)}>
              Priorité {p}
            </Chip>
          ))}
          {(
            [
              { v: 'jamais-vue' as Etat, l: 'Jamais vue' },
              { v: 'en-cours' as Etat, l: 'En cours' },
              { v: 'maitrisee' as Etat, l: 'Maîtrisée' },
            ]
          ).map((e) => (
            <Chip key={e.v} actif={etatsActifs.includes(e.v)} onClick={() => bascule(etatsActifs, e.v, setEtats)}>
              {e.l}
            </Chip>
          ))}
          {TYPES.map((t) => (
            <Chip key={t.valeur} actif={typesActifs.includes(t.valeur)} onClick={() => bascule(typesActifs, t.valeur, setTypes)}>
              {t.libelle}
            </Chip>
          ))}
          {filtresActifs > 0 && (
            <Bouton
              variante="discret"
              onClick={() => {
                setPriorites([])
                setTypes([])
                setEtats([])
                setChapitre('')
              }}
            >
              Tout effacer ({filtresActifs})
            </Bouton>
          )}
        </div>

        <label className="petit secondaire">
          Chapitre{' '}
          <select className="champ" value={chapitre} onChange={(e) => setChapitre(e.target.value)} style={{ marginTop: 'var(--e-1)' }}>
            <option value="">Tous les chapitres</option>
            {categories
              .filter((c) => notions.some((n) => n.categorie === c.id))
              .sort((a, b) => a.ordre - b.ordre)
              .map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nom}
                </option>
              ))}
          </select>
        </label>

        <p className="legende" role="status" aria-live="polite">
          {resultats.length} notion{resultats.length > 1 ? 's' : ''}
          {requete ? ` pour « ${requete} »` : ''}.
        </p>
      </div>

      {!requete && (
        <nav className="index-az" aria-label="Index alphabétique">
          {alphabet.map((l) =>
            lettresPresentes.has(l) ? (
              <a key={l} href={`#/notions#lettre-${l}`} className="index-az__lettre" onClick={(e) => {
                e.preventDefault()
                document.getElementById(`lettre-${l}`)?.scrollIntoView({ block: 'start' })
              }}>
                {l}
              </a>
            ) : (
              <button key={l} className="index-az__lettre" disabled aria-hidden="true" tabIndex={-1}>
                {l}
              </button>
            ),
          )}
        </nav>
      )}

      {resultats.length === 0 ? (
        <EtatVide titre="Aucune notion ne correspond">
          <p className="petit">
            Essaie un mot plus court, un acronyme (PESTEL, SAF, ODD, RNE) ou retire un filtre. La recherche tolère les
            accents et les petites fautes de frappe.
          </p>
        </EtatVide>
      ) : requete ? (
        <ListeNotions notions={resultats} />
      ) : (
        groupes.map((g) => (
          <section key={g.lettre} id={`lettre-${g.lettre}`}>
            <h2 className="section__titre">{g.lettre}</h2>
            <ListeNotions notions={g.notions} />
          </section>
        ))
      )}
    </div>
  )
}

function ChampRechercheNotion({
  valeur,
  onChange,
  refInput,
}: {
  valeur: string
  onChange: (v: string) => void
  refInput: React.RefObject<HTMLInputElement>
}) {
  return (
    <div className="recherche">
      <label className="visuellement-cache" htmlFor="recherche-notions">
        Rechercher une notion
      </label>
      <span className="recherche__icone" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="7" cy="7" r="4.5" />
          <path d="M10.5 10.5 14 14" strokeLinecap="round" />
        </svg>
      </span>
      <input
        id="recherche-notions"
        ref={refInput}
        type="search"
        className="champ"
        placeholder="Nom, acronyme, auteur, définition…"
        value={valeur}
        autoComplete="off"
        onChange={(e) => onChange(e.target.value)}
      />
      {valeur && (
        <Bouton variante="discret" className="recherche__effacer" onClick={() => onChange('')} aria-label="Effacer la recherche">
          ✕
        </Bouton>
      )}
    </div>
  )
}

/* ========================================================================= */
/* CHAPITRES                                                                  */
/* ========================================================================= */

function VueChapitres() {
  const { progression } = useProgression()
  return (
    <div className="pile">
      {categories
        .filter((c) => notions.some((n) => n.categorie === c.id))
        .sort((a, b) => a.ordre - b.ordre)
        .map((c) => {
          const liste = notions
            .filter((n) => n.categorie === c.id)
            .sort((a, b) => a.priorite - b.priorite || a.nom.localeCompare(b.nom, 'fr'))
          const maitrisees = liste.filter((n) => niveauMaitrise(progression, n.id) >= 4).length
          return (
            <Carte key={c.id} variante="plate">
              <div className="rangee rangee--espace">
                <h2 className="carte__titre sans-marge">{c.nom}</h2>
                <Badge>
                  {maitrisees}/{liste.length}
                </Badge>
              </div>
              <p className="legende">{c.description}</p>
              <details style={{ marginTop: 'var(--e-2)' }}>
                <summary className="petit" style={{ cursor: 'pointer', minHeight: 'var(--cible-tactile)', display: 'flex', alignItems: 'center' }}>
                  Voir les {liste.length} notions
                </summary>
                <ListeNotions notions={liste} />
              </details>
            </Carte>
          )
        })}
    </div>
  )
}

/* ========================================================================= */
/* CARTE PROGRESSIVE                                                          */
/* ========================================================================= */

function VueCarte() {
  const [racine, setRacine] = useState('strategie')
  const [avancees, setAvancees] = useState(false)
  const chemin = cheminCategorie(racine)
  const enfants = enfantsCarte(racine)
  const transversales = useMemo(() => (avancees ? connexionsTransversales() : []), [avancees])

  return (
    <div className="pile pile--large">
      <p className="petit secondaire">
        On n'affiche jamais tous les nœuds d'un coup : descends niveau par niveau. La carte suit la structure du cours,
        de la stratégie jusqu'aux notions de détail.
      </p>

      <nav className="fil" aria-label="Chemin dans la carte">
        {chemin.map((id, i) => {
          const cat = categories.find((c) => c.id === id)
          return (
            <span key={id} className="rangee rangee--sans-retour" style={{ gap: 0 }}>
              {i > 0 && (
                <span className="fil__separateur" aria-hidden="true">
                  ›
                </span>
              )}
              <button
                type="button"
                className={`fil__etape${i === chemin.length - 1 ? ' fil__etape--courante' : ''}`}
                onClick={() => setRacine(id)}
                aria-current={i === chemin.length - 1 ? 'true' : undefined}
              >
                {cat?.nom ?? id}
              </button>
            </span>
          )
        })}
      </nav>

      <div className="carte-noeuds">
        {enfants.map((n) =>
          n.type === 'categorie' ? (
            <button key={n.id} type="button" className="noeud noeud--categorie" onClick={() => setRacine(n.id)}>
              {n.libelle}
              <span className="noeud__compteur">{n.taille}</span>
            </button>
          ) : (
            <Lien key={n.id} vers={`/notions/${n.id}`} className="noeud">
              {n.libelle}
              {n.priorite === 1 && <Badge ton="p1">P1</Badge>}
            </Lien>
          ),
        )}
      </div>

      {enfants.length === 0 && (
        <EtatVide titre="Aucune notion ici">
          <p className="petit">Remonte d'un niveau dans le fil ci-dessus.</p>
        </EtatVide>
      )}

      <div>
        <Bouton onClick={() => setAvancees((a) => !a)} aria-expanded={avancees}>
          {avancees ? 'Masquer' : 'Voir'} les connexions avancées
        </Bouton>
        {avancees && (
          <div style={{ marginTop: 'var(--e-3)' }}>
            <p className="legende">
              {transversales.length} relations traversent les chapitres. Ce sont elles qui font la différence à l'oral.
            </p>
            <ul className="liste-notions">
              {transversales.slice(0, 60).map((r, i) => (
                <li key={`${r.source}-${r.target}-${i}`} className="liste-notions__item">
                  <div className="liste-notions__lien" style={{ display: 'block' }}>
                    <p className="petit sans-marge">
                      <LienNotion id={r.source} /> <span className="legende">{r.type.replace(/_/g, ' ').toLowerCase()}</span>{' '}
                      <LienNotion id={r.target} />
                    </p>
                    <p className="legende sans-marge">{r.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            {transversales.length > 60 && (
              <p className="legende">Seules les 60 premières sont listées ici — les autres restent accessibles depuis chaque fiche notion.</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

/* ========================================================================= */
/* PARCOURS                                                                   */
/* ========================================================================= */

function VueParcours() {
  const { progression } = useProgression()
  const [ouvert, setOuvert] = useState<string | null>(parcours[0]?.id ?? null)

  return (
    <div className="pile">
      <p className="petit secondaire">
        Ici on ne navigue plus par chapitre mais par raisonnement : chaque parcours répond à une question et enchaîne
        les notions dans l'ordre où l'examen les attend.
      </p>

      {parcours.map((p) => {
        const actif = ouvert === p.id
        return (
          <Carte key={p.id} variante={actif ? 'accent' : 'plate'}>
            <button
              type="button"
              onClick={() => setOuvert(actif ? null : p.id)}
              aria-expanded={actif}
              style={{ all: 'unset', cursor: 'pointer', display: 'block', width: '100%' }}
            >
              <div className="rangee rangee--espace">
                <h2 className="carte__titre sans-marge">{p.nom}</h2>
                <Badge ton={`p${p.priorite}` as 'p1' | 'p2' | 'p3'}>{p.etapes.length} étapes</Badge>
              </div>
              <p className="legende sans-marge">{p.question}</p>
            </button>

            {actif && (
              <>
                <p className="petit secondaire" style={{ marginTop: 'var(--e-3)' }}>
                  {p.description}
                </p>
                <ol className="etapes" style={{ marginTop: 'var(--e-4)' }}>
                  {p.etapes.map((e, i) => {
                    const niveau = niveauMaitrise(progression, e.notion)
                    return (
                      <li key={e.notion} className="etape">
                        <span className={`etape__pastille${niveau >= 3 ? ' etape__pastille--faite' : ''}`}>{i + 1}</span>
                        <div>
                          <LienNotion id={e.notion} />
                          <p className="etape__role sans-marge">{e.role}</p>
                        </div>
                      </li>
                    )
                  })}
                </ol>
              </>
            )}
          </Carte>
        )
      })}
    </div>
  )
}

/* ========================================================================= */
/* COMBINAISONS                                                               */
/* ========================================================================= */

function VueCombinaisons() {
  return (
    <div className="pile">
      <p className="petit secondaire">
        Une combinaison, c'est ce que produit l'assemblage de plusieurs outils. C'est exactement ce qu'attend une
        question de cas : pas un outil isolé, mais un enchaînement.
      </p>

      {combinaisons.map((c) => (
        <Carte key={c.id} variante="plate">
          <h2 className="carte__titre">{c.nom}</h2>
          <p className="rangee petit" style={{ gap: 'var(--e-1)' }}>
            {c.entrees.map((e, i) => (
              <span key={e}>
                {i > 0 && <span className="legende"> + </span>}
                <LienNotion id={e} />
              </span>
            ))}
            <span className="legende" aria-hidden="true">
              ⟶
            </span>
            {c.sorties.map((s, i) => (
              <span key={s}>
                {i > 0 && <span className="legende"> + </span>}
                <strong>
                  <LienNotion id={s} />
                </strong>
              </span>
            ))}
          </p>
          <p className="petit secondaire">{c.explication}</p>
          <div className="defilement-x">
            <pre>{c.schema}</pre>
          </div>
          <p className="petit">
            <strong>Exemple.</strong> {c.exemple}
          </p>
          {c.question && (
            <Lien vers={`/training/open/${c.question}`} className="petit">
              Travailler la question associée →
            </Lien>
          )}
        </Carte>
      ))}
    </div>
  )
}

export type { Notion }
