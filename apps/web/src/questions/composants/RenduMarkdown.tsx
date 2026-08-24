import { Fragment, type ReactNode } from 'react'
import { Lien } from '@app/router'
import type { Bloc, Inline, Marqueur, TonCallout } from '../markdown'
import { texteBrut } from '../markdown'
import { Mermaid } from './Mermaid'

/* =========================================================================
   MODULE QUESTIONS — rendu du Markdown
   ---------------------------------------------------------------------------
   L'arbre analysé devient des éléments React. Aucune chaîne HTML n'est
   injectée : le contenu du cours ne peut donc pas exécuter de code.

   Le rendu est fidèle et complet — chaque bloc du fichier est affiché — mais
   il n'est pas neutre : les marqueurs du corpus (📘 🔎 📚 ⚠️), les encadrés,
   les tableaux de synthèse et les schémas reçoivent chacun leur traitement.
   ========================================================================= */

/* ------------------------------------------------------------- En ligne */

export function RenduInline({ contenu }: { contenu: Inline[] }): ReactNode {
  return contenu.map((n, i) => {
    switch (n.t) {
      case 'texte':
        return <Fragment key={i}>{n.v}</Fragment>
      case 'gras':
        return (
          <strong key={i}>
            <RenduInline contenu={n.enfants} />
          </strong>
        )
      case 'italique':
        return (
          <em key={i}>
            <RenduInline contenu={n.enfants} />
          </em>
        )
      case 'code':
        return <code key={i}>{n.v}</code>
      case 'lien':
        return n.href.startsWith('http') ? (
          <a key={i} href={n.href} target="_blank" rel="noopener noreferrer">
            <RenduInline contenu={n.enfants} />
          </a>
        ) : (
          <Lien key={i} vers={n.href}>
            <RenduInline contenu={n.enfants} />
          </Lien>
        )
      case 'renvoi':
        return n.cible ? (
          <Lien key={i} vers={`/questions/${n.cible}`} className="q-renvoi">
            {n.libelle}
          </Lien>
        ) : (
          // Une référence vers une fiche absente reste lisible, sans faire
          // croire à un lien mort.
          <span key={i} className="q-renvoi q-renvoi--absent">
            {n.libelle}
            <span className="visuellement-cache"> (fiche non disponible dans ce dossier)</span>
          </span>
        )
    }
  })
}

/* ------------------------------------------------------------- Marqueurs */

const MARQUEURS: Record<Marqueur, string> = {
  cours: 'Selon le cours',
  raisonnement: 'À comprendre',
  complement: 'Complément hors cours',
  attention: 'Attention',
}

/* -------------------------------------------------------------- Encadrés */

const CALLOUTS: Record<TonCallout, { libelle: string; signe: string }> = {
  danger: { libelle: 'Les pièges', signe: '⚠' },
  warning: { libelle: 'Attention', signe: '⚠' },
  note: { libelle: 'À savoir', signe: 'ℹ' },
  tip: { libelle: 'Conseil', signe: '✓' },
  info: { libelle: 'À savoir', signe: 'ℹ' },
}

/* ---------------------------------------------------------------- Blocs */

export function RenduBlocs({ blocs }: { blocs: Bloc[] }): ReactNode {
  return blocs.map((b, i) => <RenduBloc key={i} bloc={b} />)
}

function RenduBloc({ bloc }: { bloc: Bloc }): ReactNode {
  switch (bloc.t) {
    case 'titre': {
      const Balise = (bloc.niveau <= 2 ? 'h3' : bloc.niveau === 3 ? 'h4' : 'h5') as 'h3' | 'h4' | 'h5'
      return (
        <Balise id={bloc.ancre} className="q-sous-titre">
          <RenduInline contenu={bloc.contenu} />
        </Balise>
      )
    }

    case 'paragraphe':
      return bloc.marqueur ? (
        <p className={`q-marque q-marque--${bloc.marqueur}`}>
          <span className="visuellement-cache">{MARQUEURS[bloc.marqueur]} : </span>
          <RenduInline contenu={bloc.contenu} />
        </p>
      ) : (
        <p>
          <RenduInline contenu={bloc.contenu} />
        </p>
      )

    case 'liste': {
      const Balise = bloc.ordonnee ? 'ol' : 'ul'
      return (
        <Balise className="q-liste">
          {bloc.items.map((item, i) => (
            <li key={i}>
              <RenduInline contenu={item} />
            </li>
          ))}
        </Balise>
      )
    }

    case 'citation':
      return (
        <blockquote className="q-citation">
          <RenduBlocs blocs={bloc.blocs} />
        </blockquote>
      )

    case 'callout': {
      const { libelle, signe } = CALLOUTS[bloc.ton]
      return (
        <aside className={`q-encadre q-encadre--${bloc.ton}`}>
          <p className="q-encadre__titre">
            <span className="q-encadre__signe" aria-hidden="true">
              {signe}
            </span>
            {bloc.titre ?? libelle}
          </p>
          <div className="q-encadre__corps">
            <RenduBlocs blocs={bloc.blocs} />
          </div>
        </aside>
      )
    }

    case 'tableau':
      return <RenduTableau bloc={bloc} />

    case 'code':
      // Les schémas ASCII du corpus valent par leur alignement : police à
      // chasse fixe, espaces préservés, défilement propre sur petit écran.
      return (
        <div className="q-code defilement-x">
          <pre>
            <code>{bloc.contenu}</code>
          </pre>
        </div>
      )

    case 'mermaid':
      return <Mermaid source={bloc.source} libelle="Schéma du raisonnement" />

    case 'separateur':
      return <hr className="q-filet" />
  }
}

/* ------------------------------------------------------------- Tableaux */

function RenduTableau({ bloc }: { bloc: Extract<Bloc, { t: 'tableau' }> }): ReactNode {
  // Les tableaux de synthèse (« À retenir ») ont un en-tête vide : la première
  // colonne y tient lieu d'intitulé de ligne. On les rend en conséquence,
  // plutôt que d'afficher une bande d'en-tête vide.
  if (bloc.enTeteVide) {
    return (
      <div className="q-tableau q-tableau--synthese defilement-x">
        <table>
          <tbody>
            {bloc.lignes.map((ligne, i) => (
              <tr key={i}>
                {ligne.map((cellule, j) =>
                  j === 0 ? (
                    <th key={j} scope="row">
                      <RenduInline contenu={cellule} />
                    </th>
                  ) : (
                    <td key={j}>
                      <RenduInline contenu={cellule} />
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  // Le conteneur défile horizontalement plutôt que de rétrécir le texte. On ne
  // lui ajoute pas de `tabindex` : les navigateurs rendent désormais les zones
  // défilantes atteignables au clavier, et les cellules contiennent souvent des
  // renvois qui les rendent de toute façon accessibles à la tabulation.
  return (
    <div className="q-tableau defilement-x">
      <table>
        <thead>
          <tr>
            {bloc.entetes.map((cellule, i) => (
              <th key={i} scope="col">
                <RenduInline contenu={cellule} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bloc.lignes.map((ligne, i) => (
            <tr key={i}>
              {ligne.map((cellule, j) => (
                <td key={j} data-entete={texteBrut(bloc.entetes[j] ?? [])}>
                  <RenduInline contenu={cellule} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
