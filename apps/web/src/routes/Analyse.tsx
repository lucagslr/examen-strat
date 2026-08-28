import {
  analyse,
  etapesAnalyse,
  getEtapeAnalyse,
  getModele,
  getPointModele,
  type BlocAnalyse,
} from '@strat/content/modeles'
import { Bouton, Carte, Encadre, EtatVide } from '@strat/ui'
import { EntetePage, Section } from '@app/components/Communs'
import { SchemaModele } from '@app/components/SchemaModele'
import { Lien, useRoutage } from '@app/router'
import { lienVersModele, lienVersPoint } from '@app/routes/liens-modeles'
import '@app/styles/modeles.css'

/* =========================================================================
   L'ANALYSE GUIDÉE
   -------------------------------------------------------------------------
   Un seul cas, déroulé du premier coup d'œil à la recommandation. On y voit
   quelqu'un réfléchir : ce que dit l'énoncé, ce qu'on en tire, la question
   qu'on se pose ensuite. Chaque geste renvoie vers la case du modèle qui le
   fonde, dans l'autre section.
   ========================================================================= */

/* ---------------------------------------------------------------- Un bloc */

function Bloc({ bloc }: { bloc: BlocAnalyse }) {
  switch (bloc.t) {
    case 'texte':
      return <p>{bloc.contenu}</p>

    case 'question':
      return <p className="an-question">{bloc.contenu}</p>

    case 'observation':
      return (
        <div className="an-observation">
          <p className="an-observation__source sans-marge">« {bloc.source} »</p>
          <span className="an-observation__fleche" aria-hidden="true">
            →
          </span>
          <p className="an-observation__conclusion sans-marge">{bloc.conclusion}</p>
        </div>
      )

    case 'liste':
      return (
        <div>
          {bloc.titre && <p className="md-point__intitule">{bloc.titre}</p>}
          <ul>
            {bloc.items.map((i, k) => (
              <li key={k}>{i}</li>
            ))}
          </ul>
        </div>
      )

    case 'tableau':
      return (
        <div className="md-tableau">
          <table>
            {bloc.legende && <caption>{bloc.legende}</caption>}
            <thead>
              <tr>
                {bloc.entetes.map((e, k) => (
                  <th key={k} scope="col">
                    {e}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bloc.lignes.map((ligne, k) => (
                <tr key={k}>
                  {ligne.map((cellule, j) => (
                    <td key={j}>{cellule}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'schema':
      return <SchemaModele schema={bloc.schema} titre="Schéma de l’étape" />

    case 'encadre':
      return (
        <Encadre ton={bloc.ton} titre={bloc.titre}>
          <p className="sans-marge">{bloc.contenu}</p>
        </Encadre>
      )

    case 'oral':
      return (
        <div className="md-oral">
          <span className="md-oral__intitule">À dire à l’oral</span>
          <p className="md-oral__phrase">« {bloc.contenu} »</p>
        </div>
      )

    case 'renvoi': {
      const cible = bloc.point ? getPointModele(bloc.modele, bloc.point) : undefined
      const modele = cible?.modele ?? getModele(bloc.modele)
      if (!modele) return null
      const href = bloc.point ? lienVersPoint(modele.slug, bloc.point) : lienVersModele(modele.slug)
      return (
        <p className="sans-marge">
          <a href={href} className="an-renvoi">
            <span className="an-renvoi__signe" aria-hidden="true">
              ▸
            </span>
            {bloc.libelle}
            <span className="an-renvoi__cible">
              {modele.nom}
              {cible ? ` · ${cible.point.libelle}` : ''}
            </span>
          </a>
        </p>
      )
    }
  }
}

/* ========================================================================= */
/* HUB                                                                        */
/* ========================================================================= */

export function Analyse() {
  const { naviguer } = useRoutage()
  const { cas } = analyse

  return (
    <>
      <EntetePage
        titre="L’analyse guidée"
        intro="Un cas, déroulé de bout en bout. À chaque étape : la question qu’on se pose, la méthode qu’on applique, le raisonnement à voix haute, et ce qu’on écrit sur son brouillon. Les renvois mènent à la case du modèle qui fonde chaque geste."
        actions={
          <Bouton variante="discret" onClick={() => naviguer('/training/models')}>
            Voir les modèles
          </Bouton>
        }
      />

      {/* --------------------------------------------------- L'énoncé ---- */}
      <Section titre="L’énoncé">
        <Carte variante="accent">
          <p className="carte__meta">Le cas</p>
          <h2 className="carte__titre">{cas.nom}</h2>
          {cas.enonce.map((p, i) => (
            <p key={i} className="petit">
              {p}
            </p>
          ))}
          <p className="md-point__question sans-marge">{cas.consigne}</p>
        </Carte>
      </Section>

      {/* ------------------------------------------------- Les chiffres ---- */}
      <Section titre="Lire l’énoncé : ce que chaque chiffre est venu faire là">
        <p className="petit secondaire">
          Un énoncé ne contient pas de détail décoratif. Avant tout outil, on repère les chiffres et les faits que la
          question ne commente pas : ce sont ceux qui décident.
        </p>
        <div className="md-deroule">
          {cas.chiffres.map((c, i) => (
            <div key={i} className="md-deroule__ligne">
              <span className="md-deroule__etiquette">
                {c.valeur}
                <span style={{ display: 'block', fontWeight: 400, color: 'var(--c-texte-3)' }}>{c.libelle}</span>
              </span>
              <span className="md-deroule__contenu">{c.pourquoi}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------- Les étapes ---- */}
      <Section titre={`Les ${etapesAnalyse.length} étapes`}>
        <ul className="md-grille">
          {etapesAnalyse.map((e) => (
            <li key={e.id} className="md-carte">
              <Lien vers={`/training/analysis/${e.slug}`} className="md-carte__lien">
                <span className="md-carte__numero">
                  ÉTAPE {e.numero} · {e.minutes}
                </span>
                <span className="md-carte__nom">{e.titre}</span>
                <span className="md-carte__question">{e.question}</span>
                {e.modeles.length > 0 && (
                  <span className="md-jetons" style={{ marginTop: 'auto', paddingTop: 'var(--e-2)' }}>
                    {e.modeles.map((id) => {
                      const m = getModele(id)
                      return m ? (
                        <span key={id} className="md-jeton">
                          {m.nom}
                        </span>
                      ) : null
                    })}
                  </span>
                )}
              </Lien>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}

/* ========================================================================= */
/* UNE ÉTAPE                                                                  */
/* ========================================================================= */

export function EtapeAnalyseVue({ slug }: { slug: string }) {
  const { naviguer } = useRoutage()
  const etape = getEtapeAnalyse(slug)

  if (!etape) {
    return (
      <EtatVide
        titre="Cette étape n’existe pas"
        action={
          <Bouton variante="principal" onClick={() => naviguer('/training/analysis')}>
            Revenir à l’analyse
          </Bouton>
        }
      >
        <p className="petit">Aucune étape ne correspond à « {slug} ».</p>
      </EtatVide>
    )
  }

  const index = etapesAnalyse.findIndex((e) => e.id === etape.id)
  const precedent = index > 0 ? etapesAnalyse[index - 1] : undefined
  const suivant = index < etapesAnalyse.length - 1 ? etapesAnalyse[index + 1] : undefined

  return (
    <>
      <p className="petit">
        <Lien vers="/training/analysis">← L’analyse guidée</Lien>
      </p>

      {/* Le fil : où on en est dans la chaîne. */}
      <nav className="an-fil" aria-label="Les étapes de l’analyse">
        {etapesAnalyse.map((e) => (
          <Lien
            key={e.id}
            vers={`/training/analysis/${e.slug}`}
            className="an-fil__etape"
            aria-current={e.id === etape.id ? 'step' : undefined}
          >
            <span className="an-fil__numero">ÉTAPE {e.numero}</span>
            <span className="an-fil__titre">{e.titre}</span>
          </Lien>
        ))}
      </nav>

      <EntetePage titre={`${etape.numero}. ${etape.titre}`} intro={etape.question} />

      {/* --------------------------------------------- Entrée / sortie ---- */}
      <div className="an-etape__meta">
        <dl className="an-etape__flux">
          <dt>Ce que l’étape consomme</dt>
          <dd>{etape.entree}</dd>
        </dl>
        <dl className="an-etape__flux">
          <dt>Ce qu’elle produit</dt>
          <dd>{etape.sortie}</dd>
        </dl>
      </div>

      {etape.modeles.length > 0 && (
        <div className="md-jetons" style={{ marginBottom: 'var(--e-5)' }}>
          {etape.modeles.map((id) => {
            const m = getModele(id)
            return m ? (
              <Lien key={id} vers={`/training/models/${m.slug}`} className="md-jeton">
                {m.nom} →
              </Lien>
            ) : null
          })}
        </div>
      )}

      {/* ----------------------------------------------------- Méthode ---- */}
      <Section titre="La méthode, applicable à n’importe quel cas">
        <ol className="md-methode">
          {etape.methode.map((m, i) => (
            <li key={i} className="md-methode__item">
              <div>
                <span className="md-methode__titre">{m.titre}</span>
                <span className="petit secondaire">{m.detail}</span>
                {m.aEviter && <span className="md-methode__eviter">À éviter ici : {m.aEviter}</span>}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* -------------------------------------------------- Raisonnement -- */}
      <Section titre="Le raisonnement, déroulé sur le cas">
        <div className="an-flux">
          {etape.raisonnement.map((b, i) => (
            <Bloc key={i} bloc={b} />
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------- Livrable ---- */}
      <Section titre="Ce qu’on a écrit sur son brouillon">
        <div className="an-livrable">
          <strong>{etape.livrable.titre}</strong>
          <ul className="an-livrable__lignes">
            {etape.livrable.lignes.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ------------------------------------------------------ Pièges ---- */}
      <Section titre="Les pièges de cette étape">
        {etape.pieges.map((p, i) => (
          <div key={i} className="md-piege" style={{ marginTop: i === 0 ? 0 : 'var(--e-3)' }}>
            <strong>{p.titre}</strong>
            <span style={{ display: 'block', marginTop: 'var(--e-1)' }}>{p.explication}</span>
            <span className="md-piege__reflexe">
              <strong>Le réflexe : </strong>
              {p.reflexe}
            </span>
          </div>
        ))}
      </Section>

      <nav className="rangee rangee--espace" style={{ marginTop: 'var(--e-6)' }}>
        {precedent ? (
          <Lien vers={`/training/analysis/${precedent.slug}`} className="petit">
            ← {precedent.numero}. {precedent.titre}
          </Lien>
        ) : (
          <span />
        )}
        {suivant ? (
          <Lien vers={`/training/analysis/${suivant.slug}`} className="petit">
            {suivant.numero}. {suivant.titre} →
          </Lien>
        ) : (
          <span />
        )}
      </nav>
    </>
  )
}
