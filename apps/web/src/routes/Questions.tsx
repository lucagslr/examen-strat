import { Badge, Bouton, Carte, ChampRecherche, Chip, EtatVide, Progression, useMediaQuery } from '@strat/ui'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { EntetePage, Section } from '@app/components/Communs'
import { Lien, useRoutage } from '@app/router'
import { RenduBlocs } from '@app/questions/composants/RenduMarkdown'
import {
  blocsDe,
  fiches,
  getQuestion,
  groupes,
  rechercherQuestions,
  ressources,
  type Question,
} from '@app/questions/chargeur'
import { renvoisDe, sommaireDe, structurerFiche, type SectionFiche } from '@app/questions/fiche'
import { useLectures } from '@app/questions/lecture'
import '@app/styles/questions.css'

/* =========================================================================
   QUESTIONS D'EXAMEN
   ---------------------------------------------------------------------------
   Deux écrans : l'index de toutes les fiches, et la fiche elle-même.
   Le contenu vient intégralement des fichiers Markdown du dossier
   `/questions` — rien n'est recopié ici, rien n'est résumé.
   ========================================================================= */

/* ========================================================================= */
/* Index                                                                      */
/* ========================================================================= */

export function Questions() {
  const [requete, setRequete] = useState('')
  const [groupeActif, setGroupeActif] = useState<string | null>(null)
  const { lues } = useLectures()

  const resultats = useMemo(() => {
    const base = groupeActif ? fiches.filter((q) => q.groupeId === groupeActif) : fiches
    return rechercherQuestions(base, requete)
  }, [requete, groupeActif])

  const nbLues = fiches.filter((q) => lues.has(q.id)).length

  return (
    <>
      <EntetePage
        titre="Questions d'examen"
        intro={`${fiches.length} questions corrigées pour apprendre à développer, schématiser et contextualiser une réponse. Chaque fiche donne la réponse en une phrase, puis le raisonnement complet.`}
      />

      <Section>
        <Carte variante="plate">
          <div className="rangee rangee--espace">
            <span className="petit secondaire">
              {nbLues} / {fiches.length} consultée{nbLues > 1 ? 's' : ''}
            </span>
            <span className="legende">La lecture est enregistrée sur cet appareil uniquement.</span>
          </div>
          <div style={{ marginTop: 'var(--e-2)' }}>
            <Progression valeur={nbLues} max={fiches.length} libelle="Questions consultées" />
          </div>
        </Carte>
      </Section>

      <Section>
        <ChampRecherche
          valeur={requete}
          onChange={setRequete}
          etiquette="Rechercher une question"
          placeholder="SWOT, Porter, Q15, chaîne de valeur…"
        />

        <div className="rangee" style={{ marginTop: 'var(--e-3)' }} role="group" aria-label="Filtrer par thème">
          <Chip actif={groupeActif === null} onClick={() => setGroupeActif(null)}>
            Toutes
          </Chip>
          {groupes.map((g) => (
            <Chip key={g.id} actif={groupeActif === g.id} onClick={() => setGroupeActif(g.id)}>
              {g.libelle}
              <span className="q-chip__compteur"> {g.questions.length}</span>
            </Chip>
          ))}
        </div>
      </Section>

      <Section>
        {resultats.length === 0 ? (
          <EtatVide
            titre="Aucune question ne correspond"
            action={
              <Bouton
                variante="principal"
                onClick={() => {
                  setRequete('')
                  setGroupeActif(null)
                }}
              >
                Tout afficher
              </Bouton>
            }
          >
            <p className="petit secondaire">
              La recherche porte sur le numéro, la question, les thèmes et le texte complet des fiches.
            </p>
          </EtatVide>
        ) : (
          <>
            <p className="legende" aria-live="polite">
              {resultats.length} question{resultats.length > 1 ? 's' : ''} affichée
              {resultats.length > 1 ? 's' : ''}
            </p>
            <ul className="q-cartes">
              {resultats.map((q) => (
                <CarteQuestion key={q.id} question={q} lue={lues.has(q.id)} />
              ))}
            </ul>
          </>
        )}
      </Section>

      <Section titre="Comment lire les fiches">
        <Carte variante="plate">
          <ul className="q-legende">
            <li>
              <span className="q-legende__signe" aria-hidden="true">
                📘
              </span>
              <span>
                <strong>Selon le cours</strong> — citable tel quel, chiffres compris.
              </span>
            </li>
            <li>
              <span className="q-legende__signe" aria-hidden="true">
                🔎
              </span>
              <span>
                <strong>À comprendre</strong> — le raisonnement, à assumer soi-même.
              </span>
            </li>
            <li>
              <span className="q-legende__signe" aria-hidden="true">
                📚
              </span>
              <span>
                <strong>Complément hors cours</strong> — à annoncer comme un apport extérieur.
              </span>
            </li>
            <li>
              <span className="q-legende__signe" aria-hidden="true">
                ⚠️
              </span>
              <span>
                <strong>Attention</strong> — piège, nuance ou écart entre les sources.
              </span>
            </li>
          </ul>
        </Carte>
      </Section>

      {ressources.length > 0 && (
        <Section titre="Mode d'emploi du dossier">
          <div className="grille grille--2">
            {ressources.map((r) => (
              <Lien key={r.id} vers={`/questions/${r.slug}`} className="q-ressource">
                <span className="q-ressource__titre">{r.titre}</span>
                <span className="legende">{r.groupe}</span>
              </Lien>
            ))}
          </div>
        </Section>
      )}
    </>
  )
}

function CarteQuestion({ question, lue }: { question: Question; lue: boolean }) {
  return (
    <li className="q-carte">
      <Lien vers={`/questions/${question.slug}`} className="q-carte__lien">
        <span className="q-carte__entete">
          {question.reference && <span className="q-carte__numero">{question.reference}</span>}
          {lue && (
            <Badge ton="succes">
              <span aria-hidden="true">✓</span> Lue
            </Badge>
          )}
        </span>

        <span className="q-carte__question">{question.titre}</span>

        <span className="q-carte__meta">
          {[question.groupe, ...question.motsCles].join(' · ')}
        </span>

        <span className="q-carte__action" aria-hidden="true">
          Voir la réponse →
        </span>
      </Lien>
    </li>
  )
}

/* ========================================================================= */
/* Fiche                                                                      */
/* ========================================================================= */

export function FicheQuestion({ slug }: { slug: string }) {
  const { naviguer } = useRoutage()
  const question = getQuestion(slug)
  const { marquerLue } = useLectures()
  const large = useMediaQuery('(min-width: 1000px)')

  useEffect(() => {
    if (question) marquerLue(question.id)
  }, [question, marquerLue])

  const fiche = useMemo(() => (question ? structurerFiche(blocsDe(question)) : null), [question])

  // Le sommaire ne change pas l'URL : le routeur travaille sur le hash, une
  // ancre `#…` le ferait sortir de la fiche. On déplace donc le focus puis la
  // vue — dans cet ordre, sinon la prise de focus annule le défilement doux.
  const aller = useCallback((ancre: string) => {
    const cible = document.getElementById(ancre)
    if (!cible) return
    // Donner le focus au titre amène la section à l'écran et place le lecteur
    // d'écran au bon endroit. `scroll-margin-top` gère le décalage sous
    // l'en-tête collant.
    cible.setAttribute('tabindex', '-1')
    cible.focus()
    cible.scrollIntoView({ block: 'start' })
  }, [])

  if (!question || !fiche) {
    return (
      <EtatVide
        titre="Cette question n'existe pas"
        action={
          <Bouton variante="principal" onClick={() => naviguer('/questions')}>
            Retour aux questions
          </Bouton>
        }
      >
        <p className="petit secondaire">Toutes les fiches restent accessibles depuis l'index des questions.</p>
      </EtatVide>
    )
  }

  const liste = question.ressource ? ressources : fiches
  const position = liste.findIndex((q) => q.id === question.id)
  const precedente = position > 0 ? liste[position - 1] : undefined
  const suivante = position >= 0 && position < liste.length - 1 ? liste[position + 1] : undefined
  const sommaire = sommaireDe(fiche)

  return (
    <article className="q-fiche">
      <Lien vers="/questions" className="q-retour">
        <span aria-hidden="true">←</span> Questions
      </Lien>

      <header className="q-fiche__entete">
        {question.reference && <p className="q-fiche__numero">{question.reference}</p>}
        <h1 className="q-fiche__titre">{question.titre}</h1>
        <p className="q-fiche__meta">{[question.groupe, ...question.motsCles].join(' · ')}</p>
      </header>

      {fiche.reponseCle && (
        <section className="q-reponse" aria-labelledby={`${question.slug}-reponse`}>
          <h2 className="q-reponse__intitule" id={`${question.slug}-reponse`}>
            La réponse en une phrase
          </h2>
          <div className="q-reponse__corps">
            <RenduBlocs blocs={fiche.reponseCle} />
          </div>
        </section>
      )}

      {fiche.avertissements.length > 0 && (
        <div className="q-avertissements">
          <RenduBlocs blocs={fiche.avertissements} />
        </div>
      )}

      <div className="fiche">
        <div className="q-corps">
          {!large && sommaire.length > 1 && (
            <details className="q-sommaire q-sommaire--repliable">
              <summary>Sommaire · {sommaire.length} sections</summary>
              <ListeSommaire entrees={sommaire} onAller={aller} />
            </details>
          )}

          {fiche.introduction.length > 0 && (
            <div className="q-intro">
              <RenduBlocs blocs={fiche.introduction} />
            </div>
          )}

          {fiche.sections.map((s) => (
            <SectionFicheRendue key={s.ancre} section={s} />
          ))}

          <RenvoisFiche question={question} />

          <nav className="q-navigation" aria-label="Navigation entre les questions">
            {precedente ? (
              <Lien vers={`/questions/${precedente.slug}`} className="q-navigation__lien">
                <span className="legende">← Question précédente</span>
                <span className="q-navigation__titre">{precedente.titre}</span>
              </Lien>
            ) : (
              <span />
            )}
            {suivante ? (
              <Lien vers={`/questions/${suivante.slug}`} className="q-navigation__lien q-navigation__lien--fin">
                <span className="legende">Question suivante →</span>
                <span className="q-navigation__titre">{suivante.titre}</span>
              </Lien>
            ) : (
              <span />
            )}
          </nav>

          <div className="centre" style={{ marginTop: 'var(--e-5)' }}>
            <Bouton onClick={() => naviguer('/questions')}>Retour aux questions</Bouton>
          </div>
        </div>

        {large && sommaire.length > 1 && (
          <aside className="fiche__cote" aria-label="Sommaire de la fiche">
            <div className="q-sommaire">
              <p className="q-sommaire__titre">Sommaire</p>
              <ListeSommaire entrees={sommaire} onAller={aller} />
            </div>
          </aside>
        )}
      </div>
    </article>
  )
}

function ListeSommaire({
  entrees,
  onAller,
}: {
  entrees: { ancre: string; intitule: string | null; titre: string }[]
  onAller: (ancre: string) => void
}) {
  return (
    <ol className="q-sommaire__liste">
      {entrees.map((e) => (
        <li key={e.ancre}>
          <button type="button" className="q-sommaire__lien" onClick={() => onAller(e.ancre)}>
            {e.intitule && <span className="q-sommaire__intitule">{e.intitule}</span>}
            <span>{e.titre}</span>
          </button>
        </li>
      ))}
    </ol>
  )
}

function SectionFicheRendue({ section }: { section: SectionFiche }) {
  return (
    <section className={`q-section q-section--${section.variante}`} aria-labelledby={section.ancre}>
      <h2 className="q-section__titre" id={section.ancre}>
        {section.intitule && <span className="q-section__intitule">{section.intitule}</span>}
        <span>{section.titre}</span>
      </h2>
      <RenduBlocs blocs={section.blocs} />
    </section>
  )
}

/**
 * « Voir aussi » : les fiches réellement citées par celle-ci, dédoublonnées.
 * Les renvois restent aussi cliquables à l'endroit exact où le texte les cite.
 */
function RenvoisFiche({ question }: { question: Question }) {
  const liees = useMemo(() => {
    const vus = new Set<string>()
    const sortie: Question[] = []
    for (const slug of renvoisDe(blocsDe(question))) {
      const cible = getQuestion(slug)
      if (!cible || cible.id === question.id || vus.has(cible.id)) continue
      vus.add(cible.id)
      sortie.push(cible)
    }
    return sortie
  }, [question])

  if (liees.length === 0) return null

  return (
    <section className="q-voir-aussi" aria-labelledby={`${question.slug}-voir-aussi`}>
      <h2 className="q-section__titre" id={`${question.slug}-voir-aussi`}>
        <span>Voir aussi</span>
      </h2>
      <ul className="q-cartes q-cartes--compact">
        {liees.map((q) => (
          <li key={q.id} className="q-carte">
            <Lien vers={`/questions/${q.slug}`} className="q-carte__lien">
              {q.reference && <span className="q-carte__numero">{q.reference}</span>}
              <span className="q-carte__question">{q.titre}</span>
              <span className="q-carte__action" aria-hidden="true">
                Ouvrir →
              </span>
            </Lien>
          </li>
        ))}
      </ul>
    </section>
  )
}

