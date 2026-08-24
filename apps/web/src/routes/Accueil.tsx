import { PRIORITE_LABELS, notions } from '@strat/content'
import { aRevoir, cartesDues, niveauMaitrise, reprise, statsParPriorite } from '@strat/domain'
import { Badge, Bouton, Carte, JaugeMaitrise, Progression } from '@strat/ui'
import { EntetePage, Section } from '@app/components/Communs'
import { Lien, useRoutage } from '@app/router'
import { useProgression } from '@app/state/ProgressionContext'

/**
 * ACCUEIL.
 * Ne répond qu'à une seule question : « qu'est-ce que je dois faire maintenant ? »
 * Volontairement pas un tableau de bord.
 */
export function Accueil() {
  const { progression } = useProgression()
  const { naviguer } = useRoutage()

  const enCours = reprise(progression)
  const dues = cartesDues(progression)
  const priorites = statsParPriorite(progression)
  const revoir = aRevoir(progression, 5)

  return (
    <>
      <EntetePage
        titre={enCours.premiereVisite ? 'Bienvenue' : 'Que réviser maintenant ?'}
        intro={
          enCours.premiereVisite
            ? `Tout le cours est là : ${notions.length} notions reliées entre elles, les 22 questions corrigées, les 55 questions probables, six cas et la simulation d'oral 10 + 10.`
            : undefined
        }
      />

      {/* ------------------------------------------------- Continuer ---- */}
      <Section>
        <Carte variante="accent">
          {enCours.premiereVisite ? (
            <>
              <p className="carte__meta">Commencer</p>
              <h2 className="carte__titre">Par les fondamentaux</h2>
              <p className="petit secondaire">
                Le parcours « Du diagnostic à la décision » enchaîne les outils dans l'ordre où l'examen les attend.
              </p>
              <div className="rangee" style={{ marginTop: 'var(--e-4)' }}>
                <Bouton variante="principal" onClick={() => naviguer('/notions/paths')}>
                  Ouvrir le parcours
                </Bouton>
                <Bouton onClick={() => naviguer('/notions')}>Parcourir l'index</Bouton>
              </div>
            </>
          ) : (
            <>
              <p className="carte__meta">Continuer ma révision</p>
              <h2 className="carte__titre">{enCours.nom}</h2>
              <div className="rangee" style={{ gap: 'var(--e-4)' }}>
                <span className="rangee rangee--sans-retour" style={{ gap: 'var(--e-2)' }}>
                  <JaugeMaitrise niveau={enCours.niveau} />
                  <span className="petit secondaire">Niveau {enCours.niveau}/5</span>
                </span>
                {dues > 0 && (
                  <span className="petit secondaire">
                    {dues} carte{dues > 1 ? 's' : ''} à revoir
                  </span>
                )}
              </div>
              <div className="rangee" style={{ marginTop: 'var(--e-4)' }}>
                {enCours.notion && (
                  <Bouton variante="principal" onClick={() => naviguer(`/notions/${enCours.notion}`)}>
                    Reprendre
                  </Bouton>
                )}
                <Bouton onClick={() => naviguer('/review/flashcards')}>Réviser les cartes</Bouton>
              </div>
            </>
          )}
        </Carte>
      </Section>

      {/* --------------------------------------------- Révision rapide ---- */}
      <Section titre="Révision rapide">
        <div className="grille grille--3">
          {(
            [
              { duree: 5, detail: '3 flashcards · 2 quiz · 1 distinction' },
              { duree: 10, detail: '5 flashcards · 3 quiz · 1 question guidée' },
              { duree: 20, detail: 'cartes, relations, quiz et question ouverte' },
            ] as const
          ).map((s) => (
            <Carte key={s.duree} variante="plate">
              <h3 className="carte__titre">{s.duree} MIN</h3>
              <p className="legende">{s.detail}</p>
              <Bouton
                variante="principal"
                pleineLargeur
                style={{ marginTop: 'var(--e-3)' }}
                onClick={() => naviguer(`/review/session?duree=${s.duree}`)}
              >
                Démarrer
              </Bouton>
            </Carte>
          ))}
        </div>
      </Section>

      {/* --------------------------------------------- Priorités examen ---- */}
      <Section
        titre="Priorités examen"
        action={
          <Lien vers="/notions?priorite=1" className="petit">
            Voir les notions
          </Lien>
        }
      >
        <div className="pile">
          {priorites.map((p) => (
            <Carte key={p.priorite} variante="plate">
              <div className="rangee rangee--espace">
                <span className="rangee rangee--sans-retour" style={{ gap: 'var(--e-2)' }}>
                  <Badge ton={`p${p.priorite}` as 'p1' | 'p2' | 'p3'}>
                    <span aria-hidden="true">{PRIORITE_LABELS[p.priorite].icone}</span>
                    {PRIORITE_LABELS[p.priorite].court}
                  </Badge>
                  <span className="petit secondaire">
                    {p.maitrisees} / {p.total} maîtrisées
                  </span>
                </span>
                <Bouton variante="discret" onClick={() => naviguer(`/review/flashcards?priorite=${p.priorite}`)}>
                  Réviser
                </Bouton>
              </div>
              <div style={{ marginTop: 'var(--e-2)' }}>
                <Progression valeur={p.pourcentage} libelle={`Progression ${PRIORITE_LABELS[p.priorite].libelle}`} />
              </div>
            </Carte>
          ))}
        </div>
      </Section>

      {/* --------------------------------------------------- À revoir ---- */}
      <Section
        titre="À revoir"
        action={
          revoir.length > 0 ? (
            <Lien vers="/review/mistakes" className="petit">
              Mes erreurs
            </Lien>
          ) : undefined
        }
      >
        {revoir.length === 0 ? (
          <Carte variante="plate">
            <p className="petit secondaire sans-marge">
              Rien à signaler pour l'instant. Fais un quiz ou un mini-jeu : les confusions que tu commettras
              alimenteront automatiquement cette section.
            </p>
          </Carte>
        ) : (
          <ul className="liste-notions">
            {revoir.map((r) => (
              <li key={r.notion} className="liste-notions__item">
                <Lien vers={`/notions/${r.notion}`} className="liste-notions__lien">
                  <span style={{ minWidth: 0 }}>
                    <span className="liste-notions__nom">{r.nom}</span>
                    <span className="liste-notions__meta" style={{ display: 'block' }}>
                      {r.raison}
                    </span>
                  </span>
                  <span className="liste-notions__fin">
                    <JaugeMaitrise niveau={r.niveau} libelle={`${r.nom} : niveau ${r.niveau} sur 5`} />
                  </span>
                </Lien>
              </li>
            ))}
          </ul>
        )}
      </Section>

      {/* ------------------------------------------------ Raccourcis ---- */}
      <Section titre="Aller directement">
        <div className="grille grille--auto">
          <Carte variante="plate">
            <h3 className="carte__titre">Questions d'examen</h3>
            <p className="legende">
              Les questions corrigées : réponse en une phrase, développement, schémas et pièges.
            </p>
            <Bouton pleineLargeur style={{ marginTop: 'var(--e-3)' }} onClick={() => naviguer('/questions')}>
              Ouvrir
            </Bouton>
          </Carte>
          <Carte variante="plate">
            <h3 className="carte__titre">Simulation d'examen</h3>
            <p className="legende">10 minutes de préparation, 10 minutes de passage — le format du cours.</p>
            <Bouton pleineLargeur style={{ marginTop: 'var(--e-3)' }} onClick={() => naviguer('/exam')}>
              Ouvrir
            </Bouton>
          </Carte>
          <Carte variante="plate">
            <h3 className="carte__titre">Cas pratiques</h3>
            <p className="legende">CIO, Fukushima, eaux embouteillées, Smart, Oncle Hansi, SilverDigital.</p>
            <Bouton pleineLargeur style={{ marginTop: 'var(--e-3)' }} onClick={() => naviguer('/training/cases')}>
              Ouvrir
            </Bouton>
          </Carte>
          <Carte variante="plate">
            <h3 className="carte__titre">Questions ouvertes guidées</h3>
            <p className="legende">Construire la réponse étape par étape, méthode L-I-S-A-E-C.</p>
            <Bouton pleineLargeur style={{ marginTop: 'var(--e-3)' }} onClick={() => naviguer('/training/open')}>
              Ouvrir
            </Bouton>
          </Carte>
        </div>
      </Section>

      <p className="legende centre">
        {notions.filter((n) => niveauMaitrise(progression, n.id) >= 1).length} notion
        {notions.filter((n) => niveauMaitrise(progression, n.id) >= 1).length > 1 ? 's' : ''} explorée
        {notions.filter((n) => niveauMaitrise(progression, n.id) >= 1).length > 1 ? 's' : ''} sur {notions.length}.
      </p>
    </>
  )
}
