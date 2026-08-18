import { getNotion, type Notion, type NotionId } from '@strat/content'
import { niveauMaitrise } from '@strat/domain'
import { Badge, BadgePriorite, JaugeMaitrise } from '@strat/ui'
import type { ReactNode } from 'react'
import { Lien } from '@app/router'
import { useProgression } from '@app/state/ProgressionContext'

/** Lien vers une fiche notion, toujours cliquable, toujours nommé. */
export function LienNotion({ id, children }: { id: NotionId; children?: ReactNode }) {
  const notion = getNotion(id)
  if (!notion) return <span>{id}</span>
  return <Lien vers={`/notions/${notion.slug}`}>{children ?? notion.nomCourt ?? notion.nom}</Lien>
}

/** Ligne de liste : nom, catégorie, priorité, niveau de maîtrise. */
export function LigneNotion({ notion, sousTitre }: { notion: Notion; sousTitre?: string }) {
  const { progression } = useProgression()
  const niveau = niveauMaitrise(progression, notion.id)

  return (
    <li className="liste-notions__item">
      <Lien vers={`/notions/${notion.slug}`} className="liste-notions__lien">
        <span style={{ minWidth: 0 }}>
          <span className="liste-notions__nom">{notion.nom}</span>
          {notion.acronyme && notion.acronyme !== notion.nom && (
            <span className="liste-notions__meta"> · {notion.acronyme}</span>
          )}
          <span className="liste-notions__meta" style={{ display: 'block' }}>
            {sousTitre ?? notion.explicationSimple.slice(0, 90) + (notion.explicationSimple.length > 90 ? '…' : '')}
          </span>
        </span>
        <span className="liste-notions__fin">
          <JaugeMaitrise niveau={niveau} libelle={`${notion.nom} : niveau ${niveau} sur 5`} />
          <Badge ton={`p${notion.priorite}` as 'p1' | 'p2' | 'p3'}>P{notion.priorite}</Badge>
        </span>
      </Lien>
    </li>
  )
}

export function ListeNotions({ notions, vide }: { notions: Notion[]; vide?: ReactNode }) {
  if (notions.length === 0) return <>{vide}</>
  return (
    <ul className="liste-notions">
      {notions.map((n) => (
        <LigneNotion key={n.id} notion={n} />
      ))}
    </ul>
  )
}

/** En-tête de page standard. */
export function EntetePage({ titre, intro, actions }: { titre: string; intro?: ReactNode; actions?: ReactNode }) {
  return (
    <header className="page__entete">
      <div className="rangee rangee--espace">
        <h1 className="page__titre">{titre}</h1>
        {actions}
      </div>
      {intro && <p className="page__intro">{intro}</p>}
    </header>
  )
}

export function Section({ titre, action, children }: { titre?: string; action?: ReactNode; children: ReactNode }) {
  return (
    <section className="section">
      {titre && (
        <h2 className="section__titre">
          <span>{titre}</span>
          {action}
        </h2>
      )}
      {children}
    </section>
  )
}

export function Mesure({ valeur, libelle }: { valeur: ReactNode; libelle: string }) {
  return (
    <div className="mesure">
      <span className="mesure__valeur">{valeur}</span>
      <span className="mesure__libelle">{libelle}</span>
    </div>
  )
}

/**
 * Rendu sûr d'un texte du cours : aucun HTML n'est interprété.
 * On ne prend en charge que `**gras**`, volontairement, pour éviter tout
 * `dangerouslySetInnerHTML` sur du contenu.
 */
export function Texte({ contenu, className }: { contenu: string; className?: string }) {
  const morceaux = contenu.split(/(\*\*[^*]+\*\*)/g)
  return (
    <span className={className}>
      {morceaux.map((m, i) =>
        m.startsWith('**') && m.endsWith('**') && m.length > 4 ? <strong key={i}>{m.slice(2, -2)}</strong> : m,
      )}
    </span>
  )
}

export { BadgePriorite }
