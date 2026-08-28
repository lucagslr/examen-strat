import { FAMILLES_MODELE, getModele, modeles, parcours12h } from '@strat/content/modeles'
import { Badge, Bouton, Carte, EtatVide } from '@strat/ui'
import { useEffect, useMemo } from 'react'
import { EntetePage, LienNotion, Section } from '@app/components/Communs'
import { SchemaModele } from '@app/components/SchemaModele'
import { Lien, useRoutage } from '@app/router'
import { lienVersPoint } from '@app/routes/liens-modeles'
import '@app/styles/modeles.css'

/* =========================================================================
   LES MODÈLES
   -------------------------------------------------------------------------
   Les 25 schémas du cours, expliqués case par case. Le dessin n'est pas une
   illustration : chaque case est un lien vers son explication, et chaque
   explication dit à quoi la case sert, ce qu'on y met et l'erreur qu'on y
   commet.
   ========================================================================= */

const LIBELLE_FAMILLE = new Map<string, string>(FAMILLES_MODELE.map((f) => [f.id, f.libelle]))

const NATURE_LIEN: Record<string, string> = {
  alimente: 'alimente',
  prolonge: 'prolonge',
  precise: 'précise',
  soppose: 's’oppose à',
  partage: 'partage avec',
}

/* ========================================================================= */
/* INDEX                                                                      */
/* ========================================================================= */

export function Modeles() {
  const { route, naviguer } = useRoutage()
  const familleActive = route.requete.get('famille')

  const groupes = useMemo(
    () =>
      FAMILLES_MODELE.map((f) => ({
        ...f,
        modeles: modeles.filter((m) => m.famille === f.id),
      })).filter((g) => g.modeles.length > 0),
    [],
  )

  const visibles = familleActive ? modeles.filter((m) => m.famille === familleActive) : modeles

  return (
    <>
      <EntetePage
        titre="Les modèles"
        intro={`Les ${modeles.length} schémas du cours, expliqués case par case : à quoi sert chaque case, ce qu’on y met, quand sortir l’outil, ce qu’il produit, et ce qui le relie aux autres. Chaque case du dessin est cliquable.`}
        actions={
          <Bouton variante="discret" onClick={() => naviguer('/training/analysis')}>
            Voir l’analyse déroulée
          </Bouton>
        }
      />

      {/* ------------------------------------------------ Parcours 12 h ---- */}
      <Section titre={parcours12h.titre}>
        <p className="petit secondaire">{parcours12h.intro}</p>
        <div className="md-seances">
          {parcours12h.seances.map((s) => (
            <article key={s.numero} className="md-seance">
              <div className="md-seance__entete">
                <h3 className="md-seance__titre">
                  {s.numero}. {s.titre}
                </h3>
                <span className="md-seance__duree">{s.duree} min</span>
              </div>
              <p className="petit secondaire sans-marge">{s.objectif}</p>
              {s.modeles.length > 0 && (
                <div className="md-jetons">
                  {s.modeles.map((id) => {
                    const m = getModele(id)
                    return m ? (
                      <Lien key={id} vers={`/training/models/${m.slug}`} className="md-jeton">
                        {m.nom}
                      </Lien>
                    ) : null
                  })}
                </div>
              )}
              {s.etapes && s.etapes.length > 0 && (
                <div className="md-jetons">
                  {s.etapes.map((id) => (
                    <Lien key={id} vers={`/training/analysis/${id}`} className="md-jeton">
                      Analyse · étape {id.replace('e', '')}
                    </Lien>
                  ))}
                </div>
              )}
              <p className="md-seance__controle sans-marge">
                <strong>Contrôle : </strong>
                {s.controle}
              </p>
            </article>
          ))}
        </div>
        <p className="legende centre" style={{ marginTop: 'var(--e-4)' }}>
          {parcours12h.seances.reduce((t, s) => t + s.duree, 0)} minutes au total, soit {parcours12h.heures} heures.
        </p>
      </Section>

      {/* --------------------------------------------------- Les fiches ---- */}
      <Section titre={familleActive ? LIBELLE_FAMILLE.get(familleActive) ?? 'Les modèles' : 'Les 25 schémas'}>
        <div className="md-familles">
          <Lien
            vers="/training/models"
            className="md-jeton"
            aria-current={!familleActive ? 'true' : undefined}
            style={
              !familleActive
                ? { borderColor: 'var(--c-accent)', color: 'var(--c-texte)', fontWeight: 620 }
                : undefined
            }
          >
            Tous · {modeles.length}
          </Lien>
          {groupes.map((g) => (
            <Lien
              key={g.id}
              vers={`/training/models?famille=${g.id}`}
              className="md-jeton"
              aria-current={familleActive === g.id ? 'true' : undefined}
              style={
                familleActive === g.id
                  ? { borderColor: 'var(--c-accent)', color: 'var(--c-texte)', fontWeight: 620 }
                  : undefined
              }
            >
              {g.libelle} · {g.modeles.length}
            </Lien>
          ))}
        </div>

        <ul className="md-grille">
          {visibles.map((m) => (
            <li key={m.id} className="md-carte">
              <Lien vers={`/training/models/${m.slug}`} className="md-carte__lien">
                <span className="md-carte__numero">SCHÉMA {String(m.numero).padStart(2, '0')}</span>
                <span className="md-carte__nom">{m.nom}</span>
                <span className="md-carte__question">{m.question}</span>
                <span className="md-carte__vignette" aria-hidden="true">
                  <SchemaModele schema={m.schema} titre={m.nom} />
                </span>
              </Lien>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}

/* ========================================================================= */
/* FICHE                                                                      */
/* ========================================================================= */

export function FicheModele({ slug }: { slug: string }) {
  const { route, naviguer } = useRoutage()
  const modele = getModele(slug)
  const pointVise = route.requete.get('point')

  // Arriver sur une case demandée — depuis un schéma, depuis le sommaire ou
  // depuis un renvoi de l'analyse — doit amener cette case sous les yeux.
  // Trois choses s'y opposent : la route parente remonte en haut de page à
  // chaque changement de chemin, la fiche arrive par un fragment chargé à la
  // demande, et elle est longue. On réessaie donc jusqu'à ce que la case
  // existe, sans dépasser une demi-seconde — au-delà, c'est qu'elle n'existe
  // pas et insister ne servirait à rien.
  useEffect(() => {
    if (!pointVise) return
    const echeance = Date.now() + 500
    let minuteur = 0

    const viser = () => {
      const cible = document.getElementById(`point-${pointVise}`)
      if (cible) {
        // Défilement instantané, et non fluide : la route parente remet la
        // page en haut peu après le montage, et elle interromprait une
        // animation en cours. Un lien profond doit de toute façon arriver
        // directement à destination, comme une ancre de navigateur.
        cible.scrollIntoView({ behavior: 'auto', block: 'start' })
        return
      }
      if (Date.now() < echeance) minuteur = window.setTimeout(viser, 40)
    }

    // On laisse passer la remontée en haut de page avant de viser.
    minuteur = window.setTimeout(viser, 60)
    return () => window.clearTimeout(minuteur)
  }, [pointVise, slug])

  if (!modele) {
    return (
      <EtatVide
        titre="Ce modèle n’existe pas"
        action={
          <Bouton variante="principal" onClick={() => naviguer('/training/models')}>
            Voir les modèles
          </Bouton>
        }
      >
        <p className="petit">Aucun schéma ne correspond à « {slug} ».</p>
      </EtatVide>
    )
  }

  const index = modeles.findIndex((m) => m.id === modele.id)
  const precedent = index > 0 ? modeles[index - 1] : undefined
  const suivant = index < modeles.length - 1 ? modeles[index + 1] : undefined

  return (
    <>
      <p className="petit">
        <Lien vers="/training/models">← Tous les modèles</Lien>
      </p>

      <EntetePage
        titre={modele.nom}
        intro={modele.sousTitre}
        actions={<span className="md-carte__numero">SCHÉMA {String(modele.numero).padStart(2, '0')}</span>}
      />

      <div className="rangee" style={{ gap: 'var(--e-2)', marginBottom: 'var(--e-4)' }}>
        <Badge ton="accent">{LIBELLE_FAMILLE.get(modele.famille) ?? modele.famille}</Badge>
        {modele.etape !== 'transverse' ? (
          <Lien vers={`/training/analysis/${modele.etape}`} className="petit">
            Voir l’étape correspondante de l’analyse →
          </Lien>
        ) : (
          <Badge>Transverse</Badge>
        )}
      </div>

      <div className="md-fiche">
        <div className="md-fiche__corps">
          {/* ------------------------------------------------ La question -- */}
          <Carte variante="accent">
            <p className="carte__meta">La question à laquelle ce schéma répond</p>
            <h2 className="carte__titre">{modele.question}</h2>
            <p className="sans-marge">{modele.enUnePhrase}</p>
          </Carte>

          {/* ---------------------------------------------------- Schéma -- */}
          <Section titre="Le schéma">
            <SchemaModele
              schema={modele.schema}
              titre={modele.nom}
              lienPoint={(point) => lienVersPoint(modele.slug, point)}
              legende={
                <span style={{ display: 'block', marginTop: 'var(--e-1)' }}>
                  Chaque case colorée mène à son explication.
                </span>
              }
            />
          </Section>

          {/* ------------------------------------------------- Quand ------- */}
          <Section titre="Quand le sortir">
            <ul>
              {modele.quandUtiliser.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
            {modele.quandNePasUtiliser && modele.quandNePasUtiliser.length > 0 && (
              <>
                <p className="md-point__intitule">Et quand ne pas le sortir</p>
                <ul>
                  {modele.quandNePasUtiliser.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </>
            )}
            <p className="petit secondaire">
              <strong>Ce qu’il produit : </strong>
              {modele.produit}
            </p>
          </Section>

          {/* ------------------------------------------- Case par case ----- */}
          <Section titre={`Case par case · ${modele.points.length} points`}>
            {modele.points.map((p) => (
              <article
                key={p.id}
                id={`point-${p.id}`}
                className={`md-point${pointVise === p.id ? ' md-point--vise' : ''}`}
              >
                <div className="md-point__entete">
                  <h3 className="md-point__libelle">{p.libelle}</h3>
                </div>

                <p className="sans-marge">{p.cestQuoi}</p>
                <p className="md-point__question">{p.question}</p>

                <span className="md-point__intitule">Ce qu’on y met</span>
                <ul>
                  {p.quoiMettre.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>

                <span className="md-point__intitule">Sur Atelier Léman</span>
                <p className="petit sans-marge">{p.exemple}</p>

                {p.piege && (
                  <p className="md-piege sans-marge">
                    <strong>Le piège : </strong>
                    {p.piege}
                    {p.reflexe && (
                      <span className="md-piege__reflexe">
                        <strong>Le réflexe : </strong>
                        {p.reflexe}
                      </span>
                    )}
                  </p>
                )}

                {p.notions && p.notions.length > 0 && (
                  <p className="legende" style={{ marginTop: 'var(--e-3)', marginBottom: 0 }}>
                    Fiches :{' '}
                    {p.notions.map((n, i) => (
                      <span key={n}>
                        {i > 0 && ' · '}
                        <LienNotion id={n} />
                      </span>
                    ))}
                  </p>
                )}
              </article>
            ))}
          </Section>

          {/* ---------------------------------------------- La méthode ----- */}
          <Section titre="Comment on fait">
            <ol className="md-methode">
              {modele.methode.map((e, i) => (
                <li key={i} className="md-methode__item">
                  <div>
                    <span className="md-methode__titre">{e.titre}</span>
                    <span className="petit secondaire">{e.detail}</span>
                    {e.aEviter && (
                      <span className="md-methode__eviter">À éviter ici : {e.aEviter}</span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          {/* ------------------------------------------------- Exemple ----- */}
          <Section titre={modele.exemple.titre}>
            <p className="petit secondaire">{modele.exemple.situation}</p>
            <div className="md-deroule">
              {modele.exemple.deroule.map((d, i) => (
                <div key={i} className="md-deroule__ligne">
                  <span className="md-deroule__etiquette">{d.etiquette}</span>
                  <span className="md-deroule__contenu">{d.contenu}</span>
                </div>
              ))}
            </div>
            <p className="petit" style={{ marginTop: 'var(--e-3)' }}>
              <strong>Ce que ça produit : </strong>
              {modele.exemple.conclusion}
            </p>
          </Section>

          {/* --------------------------------------------------- Liens ----- */}
          <Section titre="Ce qui le relie aux autres">
            <div className="md-liens">
              {modele.liens.map((l, i) => {
                const cible = getModele(l.vers)
                if (!cible) return null
                return (
                  <Lien key={i} vers={`/training/models/${cible.slug}`} className="md-lien">
                    <span className="md-lien__nature">{NATURE_LIEN[l.nature] ?? l.nature}</span>
                    <span className="md-lien__nom">{cible.nom}</span>
                    <span className="md-lien__explication">{l.explication}</span>
                  </Lien>
                )
              })}
            </div>
          </Section>

          {/* -------------------------------------------------- Pièges ----- */}
          <Section titre="Les pièges">
            {modele.pieges.map((p, i) => (
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

          {/* ------------------------------------------------ Variantes ---- */}
          {modele.variantes && modele.variantes.length > 0 && (
            <Section titre="Variante du cours">
              {modele.variantes.map((v, i) => (
                <div key={i} className="md-variante" style={{ marginTop: i === 0 ? 0 : 'var(--e-3)' }}>
                  <strong>{v.sujet}</strong>
                  <ul className="md-variante__formulations">
                    {v.formulations.map((f, j) => (
                      <li key={j}>
                        {f.texte} <span className="md-variante__source">— {f.source}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="petit sans-marge">{v.consigne}</p>
                </div>
              ))}
            </Section>
          )}

          {/* ---------------------------------------------------- Oral ----- */}
          <div className="md-oral">
            <span className="md-oral__intitule">À dire à l’oral</span>
            <p className="md-oral__phrase">« {modele.phraseOral} »</p>
          </div>

          {/* ----------------------------------------------- À retenir ----- */}
          <Section titre="À retenir">
            <div className="md-retenir">
              {modele.aRetenir.map((r, i) => (
                <div key={i} className="md-retenir__ligne">
                  <span className="md-retenir__cle">{r.cle}</span>
                  <span className="md-retenir__valeur">{r.valeur}</span>
                </div>
              ))}
            </div>
          </Section>

          {modele.notions.length > 0 && (
            <Section titre="Les fiches notions">
              <div className="md-jetons">
                {modele.notions.map((n) => (
                  <span key={n} className="md-jeton">
                    <LienNotion id={n} />
                  </span>
                ))}
              </div>
            </Section>
          )}

          {/* ------------------------------------------------ Navigation --- */}
          <nav className="rangee rangee--espace" style={{ marginTop: 'var(--e-6)' }}>
            {precedent ? (
              <Lien vers={`/training/models/${precedent.slug}`} className="petit">
                ← {precedent.nom}
              </Lien>
            ) : (
              <span />
            )}
            {suivant ? (
              <Lien vers={`/training/models/${suivant.slug}`} className="petit">
                {suivant.nom} →
              </Lien>
            ) : (
              <span />
            )}
          </nav>
        </div>

        {/* ----------------------------------------------------- Sommaire -- */}
        <aside className="md-fiche__cote" aria-label="Les cases du schéma">
          <p className="md-point__intitule" style={{ margin: 0 }}>
            Les cases
          </p>
          <ul className="md-sommaire">
            {modele.points.map((p) => (
              <li key={p.id}>
                <a href={lienVersPoint(modele.slug, p.id)} className="md-sommaire__lien">
                  {p.libelle}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  )
}
