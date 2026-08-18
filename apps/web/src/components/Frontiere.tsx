import { Bouton, EtatVide } from '@strat/ui'
import { Component, type ErrorInfo, type ReactNode } from 'react'

/**
 * FRONTIÈRE D'ERREUR.
 *
 * Deux cas très différents à traiter :
 *
 * 1. **Module introuvable après un déploiement.** Les fichiers JavaScript
 *    portent une empreinte dans leur nom. Si l'application est restée ouverte
 *    pendant qu'une nouvelle version était publiée, un écran chargé à la
 *    demande peut pointer vers un fichier qui n'existe plus. Un rechargement
 *    récupère la version à jour — on le déclenche une seule fois, jamais en
 *    boucle.
 *
 * 2. **Toute autre erreur.** On affiche un message compréhensible et une porte
 *    de sortie, jamais un écran blanc ni une trace technique.
 */

const CLE_RECHARGEMENT = 'strat.rechargement-tente'

function estErreurDeChargement(erreur: Error): boolean {
  const message = `${erreur.name} ${erreur.message}`
  return (
    /Failed to fetch dynamically imported module/i.test(message) ||
    /Importing a module script failed/i.test(message) ||
    /error loading dynamically imported module/i.test(message) ||
    /ChunkLoadError/i.test(message)
  )
}

interface Etat {
  erreur: Error | null
  versionObsolete: boolean
}

export class Frontiere extends Component<{ children: ReactNode }, Etat> {
  override state: Etat = { erreur: null, versionObsolete: false }

  static getDerivedStateFromError(erreur: Error): Etat {
    return { erreur, versionObsolete: estErreurDeChargement(erreur) }
  }

  override componentDidCatch(erreur: Error, info: ErrorInfo) {
    // Aucune télémétrie : la trace reste dans la console du navigateur.
    console.error('[STRAT] erreur non rattrapée', erreur, info.componentStack)

    if (!estErreurDeChargement(erreur)) return

    // Un seul rechargement automatique par session, pour ne jamais boucler.
    let dejaTente = false
    try {
      dejaTente = sessionStorage.getItem(CLE_RECHARGEMENT) === '1'
      sessionStorage.setItem(CLE_RECHARGEMENT, '1')
    } catch {
      // Stockage de session indisponible : on s'abstient de recharger.
      dejaTente = true
    }
    if (!dejaTente) window.location.reload()
  }

  private reinitialiser = () => {
    try {
      sessionStorage.removeItem(CLE_RECHARGEMENT)
    } catch {
      /* sans conséquence */
    }
    window.location.reload()
  }

  override render() {
    const { erreur, versionObsolete } = this.state
    if (!erreur) return this.props.children

    return versionObsolete ? (
      <EtatVide
        titre="Une nouvelle version est disponible"
        action={
          <Bouton variante="principal" onClick={this.reinitialiser}>
            Recharger l'application
          </Bouton>
        }
      >
        <p className="petit">
          L'application a été mise à jour pendant que tu l'utilisais. Recharge la page pour continuer : ta progression
          est conservée, elle est enregistrée dans ce navigateur.
        </p>
      </EtatVide>
    ) : (
      <EtatVide
        titre="Quelque chose s'est mal passé"
        action={
          <Bouton variante="principal" onClick={this.reinitialiser}>
            Recharger l'application
          </Bouton>
        }
      >
        <p className="petit">
          Cet écran n'a pas pu s'afficher. Ta progression n'est pas perdue : elle est enregistrée dans ce navigateur, et
          tu peux l'exporter depuis les réglages.
        </p>
      </EtatVide>
    )
  }
}
