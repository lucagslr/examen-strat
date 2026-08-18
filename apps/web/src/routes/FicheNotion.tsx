import {
  cas as tousLesCas,
  categorieParId,
  flashcards,
  getNotion,
  getNotionBySlug,
  parcours,
  questions,
  quiz,
  type NotionId,
} from '@strat/content'
import {
  ajouterFlashcard,
  detailMaitrise,
  marquerNotionComprise,
  marquerNotionVue,
  relationsGroupees,
  voisinage,
} from '@strat/domain'
import {
  Accordeon,
  Badge,
  BadgePriorite,
  Bouton,
  Carte,
  Encadre,
  EtatVide,
  JaugeMaitrise,
  Onglets,
  PanneauOnglet,
  useToast,
} from '@strat/ui'
import { useEffect, useMemo, useState } from 'react'
import { LienNotion, Section, Texte } from '@app/components/Communs'
import { Lien, useRoutage } from '@app/router'
import { useFil } from '@app/state/FilContext'
import { useProgression } from '@app/state/ProgressionContext'

/**
 * FICHE NOTION — l'écran central.
 * Structure : Comprendre · Retenir · Relier · S'entraîner.
 * Une colonne sur mobile, deux sur grand écran avec un aparté collant.
 */
export function FicheNotion({ slug }: { slug: string }) {
  const notion = getNotionBySlug(slug)
  const { progression, modifier } = useProgression()
  const { fil, visiter, revenirA, effacer } = useFil()
  const { naviguer } = useRoutage()
  const notifier = useToast()
  const [onglet, setOnglet] = useState('comprendre')

  useEffect(() => {
    if (!notion) return
    modifier((p) => marquerNotionVue(p, notion.id))
    visiter(notion.id)
    setOnglet('comprendre')
    // `modifier` et `visiter` sont stables ; on ne réagit qu'au changement de notion.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notion?.id])

  if (!notion) {
    return (
      <EtatVide titre="Cette notion n'existe pas" action={<Bouton onClick={() => naviguer('/notions')}>Retour à l'index</Bouton>}>
        <p className="petit">Le lien est peut-être ancien. Toutes les notions restent accessibles depuis l'index.</p>
      </EtatVide>
    )
  }

  const maitrise = detailMaitrise(progression, notion.id)
  const categorie = categorieParId.get(notion.categorie)
  const groupes = relationsGroupees(notion.id)

  const cartesDeLaNotion = flashcards.filter((f) => f.notions.includes(notion.id))
  const quizDeLaNotion = quiz.filter((q) => q.notions.includes(notion.id))
  const questionsDeLaNotion = questions.filter((q) => q.notions.includes(notion.id))
  const casDeLaNotion = tousLesCas.filter((c) => c.notions.includes(notion.id) || c.outilsPertinents.includes(notion.id))
  const parcoursDeLaNotion = parcours.filter((p) => p.etapes.some((e) => e.notion === notion.id))

  return (
    <>
      {/* ------------------------------------------ Traveling conceptuel ---- */}
      {fil.length > 1 && (
        <nav className="fil" aria-label="Chemin parcouru entre les notions" style={{ marginBottom: 'var(--e-4)' }}>
          {fil.map((etape, i) => (
            <span key={etape.id} className="rangee rangee--sans-retour" style={{ gap: 0 }}>
              {i > 0 && (
                <span className="fil__separateur" aria-hidden="true">
                  ›
                </span>
              )}
              <button
                type="button"
                className={`fil__etape${i === fil.length - 1 ? ' fil__etape--courante' : ''}`}
                aria-current={i === fil.length - 1 ? 'true' : undefined}
                onClick={() => {
                  revenirA(i)
                  naviguer(`/notions/${etape.slug}`)
                }}
              >
                {etape.nom}
              </button>
            </span>
          ))}
          <Bouton variante="discret" onClick={effacer} className="pousse" aria-label="Effacer le chemin parcouru">
            ✕
          </Bouton>
        </nav>
      )}

      <div className="fiche">
        <div>
          {/* ------------------------------------------------- En-tête ---- */}
          <header className="page__entete">
            <div className="rangee" style={{ marginBottom: 'var(--e-2)' }}>
              {categorie && (
                <Lien vers={`/notions?categorie=${categorie.id}`} className="legende">
                  {categorie.nom.toUpperCase()}
                </Lien>
              )}
              <BadgePriorite priorite={notion.priorite} />
              {notion.provenance !== 'cours' && (
                <Badge>{notion.provenance === 'interpretation' ? 'Interprétation' : 'Complément hors cours'}</Badge>
              )}
            </div>
            <h1 className="page__titre">{notion.nom}</h1>
            {notion.acronyme && notion.acronyme !== notion.nom && <p className="legende sans-marge">{notion.acronyme}</p>}
            <div className="rangee" style={{ marginTop: 'var(--e-3)' }}>
              <JaugeMaitrise niveau={maitrise.niveau} libelle={`Niveau ${maitrise.niveau} sur 5`} />
              <span className="petit secondaire">
                {maitrise.libelle} — niveau {maitrise.niveau}/5
              </span>
            </div>
          </header>

          <Onglets
            onglets={[
              { id: 'comprendre', libelle: 'Comprendre' },
              { id: 'retenir', libelle: 'Retenir' },
              { id: 'relier', libelle: 'Relier' },
              { id: 'entrainer', libelle: "S'entraîner" },
            ]}
            actif={onglet}
            onChange={setOnglet}
            etiquette="Sections de la fiche"
          />

          <div style={{ marginTop: 'var(--e-5)' }}>
            {/* ================================================ COMPRENDRE ==== */}
            <PanneauOnglet id="comprendre" actif={onglet}>
              <Section titre="Définition du cours">
                <Carte variante="plate">
                  <p className="sans-marge">
                    <Texte contenu={notion.definitionCours} />
                  </p>
                </Carte>
              </Section>

              <Section titre="En termes simples">
                <p className="lecture">
                  <Texte contenu={notion.explicationSimple} />
                </p>
              </Section>

              {notion.pourquoiExiste && (
                <Section titre="Pourquoi cette notion existe-t-elle ?">
                  <p className="lecture">{notion.pourquoiExiste}</p>
                </Section>
              )}

              {notion.objectif && (
                <Section titre="Objectif">
                  <p className="lecture">{notion.objectif}</p>
                </Section>
              )}

              {(notion.origine || notion.auteur || notion.annee) && (
                <Section titre="Origine">
                  {notion.auteur && (
                    <p className="petit sans-marge">
                      <strong>Auteur.</strong> {notion.auteur}
                    </p>
                  )}
                  {notion.annee && (
                    <p className="petit sans-marge">
                      <strong>Année.</strong> {notion.annee}
                    </p>
                  )}
                  {notion.origine && <p className="petit lecture">{notion.origine}</p>}
                </Section>
              )}

              {notion.usage && (
                <Section titre="Quand l'utiliser ?">
                  <div className="grille grille--2">
                    <Encadre ton="succes" titre="Utilise cet outil si…">
                      <ul className="sans-marge">
                        {notion.usage.utiliserSi.map((u, i) => (
                          <li key={i}>{u}</li>
                        ))}
                      </ul>
                    </Encadre>
                    <Encadre ton="erreur" titre="Ne l'utilise pas pour…">
                      <ul className="sans-marge">
                        {notion.usage.nePasUtiliserPour.map((u, i) => (
                          <li key={i}>{u}</li>
                        ))}
                      </ul>
                    </Encadre>
                  </div>
                </Section>
              )}

              {notion.commentUtiliser && notion.commentUtiliser.length > 0 && (
                <Section titre="Comment l'utiliser">
                  <ol className="etapes">
                    {notion.commentUtiliser.map((e, i) => (
                      <li key={i} className="etape">
                        <span className="etape__pastille">{i + 1}</span>
                        <div>
                          <strong className="petit">{e.titre}</strong>
                          {e.detail && <p className="etape__role sans-marge">{e.detail}</p>}
                        </div>
                      </li>
                    ))}
                  </ol>
                </Section>
              )}

              {notion.exemples && notion.exemples.length > 0 && (
                <Section titre="Exemples">
                  <div className="pile">
                    {notion.exemples.map((ex, i) => (
                      <Carte key={i} variante="plate">
                        <p className="petit">{ex.texte}</p>
                        {ex.cas && (
                          <Lien vers={`/training/cases/${ex.cas}`} className="petit">
                            Voir le cas complet →
                          </Lien>
                        )}
                      </Carte>
                    ))}
                  </div>
                </Section>
              )}

              {notion.variantes && notion.variantes.length > 0 && (
                <Section titre="Variantes dans les supports">
                  <div className="pile">
                    {notion.variantes.map((v, i) => (
                      <Encadre key={i} ton="alerte" titre={v.sujet}>
                        <ul>
                          {v.formulations.map((f, j) => (
                            <li key={j}>
                              <strong>{f.libelle}</strong> <span className="legende">— {f.ou}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="petit">{v.explication}</p>
                        {v.consigneExamen && (
                          <p className="petit sans-marge">
                            <strong>À l'examen.</strong> {v.consigneExamen}
                          </p>
                        )}
                      </Encadre>
                    ))}
                  </div>
                </Section>
              )}

              {notion.limites && notion.limites.length > 0 && (
                <Section titre="Limites">
                  <ul className="petit">
                    {notion.limites.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                </Section>
              )}

              <Carte variante={maitrise.criteres[1]?.atteint ? 'accent' : 'defaut'}>
                <div className="rangee rangee--espace">
                  <span className="petit">
                    {maitrise.criteres[1]?.atteint
                      ? 'Tu as marqué cette notion comme comprise.'
                      : 'Tu as lu et compris cette section ?'}
                  </span>
                  <Bouton
                    variante={maitrise.criteres[1]?.atteint ? 'discret' : 'principal'}
                    onClick={() => {
                      const nouvelEtat = !maitrise.criteres[1]?.atteint
                      modifier((p) => marquerNotionComprise(p, notion.id, nouvelEtat))
                      notifier(nouvelEtat ? 'Notion marquée comme comprise.' : 'Marque retirée.', 'succes')
                    }}
                  >
                    {maitrise.criteres[1]?.atteint ? 'Annuler' : 'Je la comprends'}
                  </Bouton>
                </div>
              </Carte>
            </PanneauOnglet>

            {/* =================================================== RETENIR ==== */}
            <PanneauOnglet id="retenir" actif={onglet}>
              {notion.phraseExamen && (
                <Section titre="Phrase d'examen">
                  <Carte variante="accent">
                    <p className="lecture" style={{ fontSize: 'var(--t-h3)', lineHeight: 1.45 }}>
                      « {notion.phraseExamen} »
                    </p>
                    <PhraseVersFlashcard notionId={notion.id} />
                  </Carte>
                </Section>
              )}

              {notion.chiffres && notion.chiffres.length > 0 && (
                <Section titre="Chiffres à citer">
                  <div className="grille grille--auto">
                    {notion.chiffres.map((c, i) => (
                      <div key={i} className="mesure">
                        <span className="mesure__valeur" style={{ fontSize: '1.1rem' }}>
                          {c.valeur}
                        </span>
                        <span className="mesure__libelle">{c.libelle}</span>
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              {notion.pieges && notion.pieges.length > 0 && (
                <Section titre="Pièges">
                  <div className="pile">
                    {notion.pieges.map((p, i) => (
                      <Encadre key={i} ton="alerte" titre={p.erreur}>
                        <p className="petit">{p.pourquoi}</p>
                        {p.test && (
                          <p className="petit sans-marge">
                            <strong>Test.</strong> {p.test}
                          </p>
                        )}
                      </Encadre>
                    ))}
                  </div>
                </Section>
              )}

              <Section titre={`Flashcards (${cartesDeLaNotion.length})`}>
                {cartesDeLaNotion.length === 0 ? (
                  <p className="petit secondaire">Aucune carte ne porte spécifiquement sur cette notion.</p>
                ) : (
                  <>
                    <div className="pile pile--serree">
                      {cartesDeLaNotion.map((c) => (
                        <Accordeon key={c.id} titre={c.recto}>
                          <p className="petit sans-marge">
                            <Texte contenu={c.verso} />
                          </p>
                        </Accordeon>
                      ))}
                    </div>
                    <Bouton
                      variante="principal"
                      style={{ marginTop: 'var(--e-4)' }}
                      onClick={() => naviguer(`/review/flashcards?notion=${notion.id}`)}
                    >
                      Réviser ces {cartesDeLaNotion.length} cartes
                    </Bouton>
                  </>
                )}
              </Section>

              <Section titre="Mes notes">
                <NotesPersonnelles notionId={notion.id} />
              </Section>
            </PanneauOnglet>

            {/* ==================================================== RELIER ==== */}
            <PanneauOnglet id="relier" actif={onglet}>
              {groupes.length === 0 ? (
                <EtatVide titre="Aucune relation déclarée">
                  <p className="petit">Cette notion n'est reliée à aucune autre dans le corpus.</p>
                </EtatVide>
              ) : (
                groupes.map((g) => (
                  <Section key={g.titre} titre={g.titre}>
                    <ul className="liste-notions">
                      {g.relations.map((r, i) => (
                        <li key={`${r.target}-${i}`} className="liste-notions__item">
                          <div className="liste-notions__lien" style={{ display: 'block', minHeight: 'auto' }}>
                            <p className="sans-marge">
                              <LienNotion id={r.target} />
                            </p>
                            <p className="legende sans-marge">{r.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Section>
                ))
              )}

              {parcoursDeLaNotion.length > 0 && (
                <Section titre="Parcours qui traversent cette notion">
                  <div className="pile pile--serree">
                    {parcoursDeLaNotion.map((p) => (
                      <Carte key={p.id} variante="plate">
                        <Lien vers="/notions/paths">
                          <strong>{p.nom}</strong>
                        </Lien>
                        <p className="legende sans-marge">{p.question}</p>
                        <p className="petit sans-marge" style={{ marginTop: 'var(--e-2)' }}>
                          {p.etapes.map((e, i) => (
                            <span key={e.notion}>
                              {i > 0 && <span className="legende"> → </span>}
                              {e.notion === notion.id ? (
                                <strong>{notion.nomCourt ?? notion.nom}</strong>
                              ) : (
                                <LienNotion id={e.notion} />
                              )}
                            </span>
                          ))}
                        </p>
                      </Carte>
                    ))}
                  </div>
                </Section>
              )}

              <Section titre="Voisinage">
                <p className="legende">Notions à un ou deux liens de distance — utile pour élargir une réponse.</p>
                <div className="carte-noeuds">
                  {[...voisinage(notion.id, 2).entries()]
                    .sort((a, b) => a[1] - b[1])
                    .slice(0, 24)
                    .map(([id, d]) => (
                      <Lien key={id} vers={`/notions/${id}`} className="noeud">
                        {getNotion(id)?.nomCourt ?? getNotion(id)?.nom ?? id}
                        <span className="noeud__compteur">{d === 1 ? 'direct' : '2e'}</span>
                      </Lien>
                    ))}
                </div>
              </Section>
            </PanneauOnglet>

            {/* ================================================ S'ENTRAÎNER ==== */}
            <PanneauOnglet id="entrainer" actif={onglet}>
              <div className="grille grille--2">
                <Carte variante="plate">
                  <h3 className="carte__titre">Flashcards</h3>
                  <p className="legende">{cartesDeLaNotion.length} carte(s) portant sur cette notion.</p>
                  <Bouton
                    pleineLargeur
                    disabled={cartesDeLaNotion.length === 0}
                    style={{ marginTop: 'var(--e-3)' }}
                    onClick={() => naviguer(`/review/flashcards?notion=${notion.id}`)}
                  >
                    Réviser
                  </Bouton>
                </Carte>

                <Carte variante="plate">
                  <h3 className="carte__titre">Quiz</h3>
                  <p className="legende">{quizDeLaNotion.length} question(s) fermée(s).</p>
                  <Bouton
                    pleineLargeur
                    disabled={quizDeLaNotion.length === 0}
                    style={{ marginTop: 'var(--e-3)' }}
                    onClick={() => naviguer(`/training/quiz?notion=${notion.id}`)}
                  >
                    Démarrer
                  </Bouton>
                </Carte>
              </div>

              {questionsDeLaNotion.length > 0 && (
                <Section titre={`Questions d'examen (${questionsDeLaNotion.length})`}>
                  <ul className="liste-notions">
                    {questionsDeLaNotion.slice(0, 12).map((q) => (
                      <li key={q.id} className="liste-notions__item">
                        <Lien vers={`/training/open/${q.id}`} className="liste-notions__lien">
                          <span style={{ minWidth: 0 }}>
                            <span className="liste-notions__nom">{q.enonce}</span>
                            <span className="liste-notions__meta" style={{ display: 'block' }}>
                              {q.origine === 'officielle' ? `Question corrigée n°${q.numero}` : `Question probable n°${q.numero}`}
                              {q.guidage ? ' · guidée pas à pas' : ''}
                            </span>
                          </span>
                        </Lien>
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {casDeLaNotion.length > 0 && (
                <Section titre="Cas où cette notion s'applique">
                  <div className="pile pile--serree">
                    {casDeLaNotion.map((c) => (
                      <Carte key={c.id} variante="plate">
                        <Lien vers={`/training/cases/${c.id}`}>
                          <strong>{c.nom}</strong>
                        </Lien>
                        <p className="legende sans-marge">{c.sousTitre}</p>
                      </Carte>
                    ))}
                  </div>
                </Section>
              )}
            </PanneauOnglet>
          </div>
        </div>

        {/* ------------------------------------------------------ Aparté ---- */}
        <aside className="fiche__cote">
          <Carte variante="plate">
            <h2 className="carte__titre">Progression</h2>
            <div className="rangee" style={{ marginBottom: 'var(--e-3)' }}>
              <JaugeMaitrise niveau={maitrise.niveau} />
              <span className="petit secondaire">{maitrise.libelle}</span>
            </div>
            <ul className="petit" style={{ listStyle: 'none', padding: 0 }}>
              {maitrise.criteres.map((c, i) => (
                <li key={i} className="rangee rangee--espace" style={{ padding: 'var(--e-1) 0' }}>
                  <span>
                    <span aria-hidden="true">{c.atteint ? '✓' : '○'}</span> {c.libelle}
                  </span>
                  {c.valeur && <span className="legende">{c.valeur}</span>}
                </li>
              ))}
            </ul>
            {maitrise.prochaineEtape && (
              <Encadre ton="info" titre="Prochaine étape">
                <p className="sans-marge">{maitrise.prochaineEtape}</p>
              </Encadre>
            )}
          </Carte>

          {notion.motsCles && notion.motsCles.length > 0 && (
            <Carte variante="plate" style={{ marginTop: 'var(--e-3)' }}>
              <h2 className="carte__titre">Mots-clés</h2>
              <p className="legende sans-marge">{notion.motsCles.join(' · ')}</p>
            </Carte>
          )}

          <Carte variante="plate" style={{ marginTop: 'var(--e-3)' }}>
            <h2 className="carte__titre">Sources</h2>
            <ul className="legende" style={{ paddingLeft: 'var(--e-4)' }}>
              {notion.sources.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Carte>
        </aside>
      </div>
    </>
  )
}

/** Ajoute au paquet la carte « phrase d'examen » de cette notion, si elle existe. */
function PhraseVersFlashcard({ notionId }: { notionId: NotionId }) {
  const { progression, modifier } = useProgression()
  const notifier = useToast()
  const carte = useMemo(
    () => flashcards.find((f) => f.notions[0] === notionId && f.id.startsWith('fc-phrase')) ?? flashcards.find((f) => f.notions.includes(notionId)),
    [notionId],
  )
  if (!carte) return null
  const dejaAjoutee = progression.flashcardsAjoutees.includes(carte.id)

  return (
    <Bouton
      variante={dejaAjoutee ? 'discret' : 'defaut'}
      disabled={dejaAjoutee}
      onClick={() => {
        modifier((p) => ajouterFlashcard(p, carte.id))
        notifier('Ajoutée à tes cartes prioritaires.', 'succes')
      }}
    >
      {dejaAjoutee ? '✓ Dans tes cartes' : 'Je veux la mémoriser'}
    </Bouton>
  )
}

function NotesPersonnelles({ notionId }: { notionId: NotionId }) {
  const { progression, modifier } = useProgression()
  const [texte, setTexte] = useState(progression.notes[notionId] ?? '')
  const notifier = useToast()

  useEffect(() => {
    setTexte(progression.notes[notionId] ?? '')
  }, [notionId, progression.notes])

  return (
    <>
      <label className="libelle" htmlFor={`notes-${notionId}`}>
        Ce que tu veux retenir avec tes propres mots
      </label>
      <textarea
        id={`notes-${notionId}`}
        className="champ champ--zone"
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        placeholder="Ta reformulation, un exemple personnel, un moyen mnémotechnique…"
      />
      <div className="rangee rangee--fin" style={{ marginTop: 'var(--e-2)' }}>
        <Bouton
          onClick={() => {
            modifier((p) => ({ ...p, notes: texte.trim() ? { ...p.notes, [notionId]: texte } : omettre(p.notes, notionId) }))
            notifier('Note enregistrée.', 'succes')
          }}
        >
          Enregistrer
        </Bouton>
      </div>
    </>
  )
}

function omettre<T extends Record<string, unknown>>(objet: T, cle: string): T {
  const copie = { ...objet }
  delete copie[cle]
  return copie
}
