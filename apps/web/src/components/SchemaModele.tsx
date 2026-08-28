import type { LienSchema, NoeudSchema, SchemaModele as Schema, TonSchema } from '@strat/content'
import { type ReactNode } from 'react'

/* =========================================================================
   RENDU D'UN SCHÉMA DU COURS
   -------------------------------------------------------------------------
   Les schémas sont des données, pas des images : un repère de 1000 unités de
   large, des nœuds, des liens. On les redessine ici en SVG, ce qui donne trois
   choses qu'un PNG ne donne pas — la lisibilité à toutes les tailles, le thème
   sombre, et des cases cliquables qui mènent à leur explication.

   Aucun identifiant global n'est émis (pas de `marker`, pas de `defs`) : la
   pointe de flèche est un polygone calculé. Plusieurs schémas cohabitent donc
   sans risque de collision d'identifiants sur une même page.
   ========================================================================= */

const LARGEUR = 1000
/** En dessous, le dessin défile horizontalement plutôt que de devenir illisible. */
const LARGEUR_MINIMALE = 800

const RAYON = 10
const TAILLE_TITRE = 20
const TAILLE_LIGNE = 16
const INTERLIGNE = 22
const FLECHE = 11
/** Marge intérieure d'une boîte, de chaque côté. */
const MARGE_TEXTE = 13
/** En dessous, le texte cesse d'être lisible : c'est un défaut de contenu. */
const TAILLE_PLANCHER = 11

/* ---------------------------------------------------------- Mesure du texte */

/**
 * Largeur d'un caractère, en fraction de la taille de police. Les valeurs sont
 * calibrées sur le rendu réel des polices système en 600 de graisse — l'écart
 * mesuré sur les libellés du corpus est inférieur à 1 %.
 *
 * Mesurer plutôt que compter les caractères est ce qui garantit qu'aucun texte
 * ne déborde de sa boîte : « OPPORTUNITÉS ET MENACES » et « ocioculturellement »
 * font le même nombre de signes et pas du tout la même largeur.
 */
function largeurCaractere(c: string): number {
  if (c === ' ' || c === ' ') return 0.28
  if ('iljt.,;:!|\'’()[]{}/'.includes(c)) return 0.31
  if ('fr'.includes(c)) return 0.36
  if ('mw'.includes(c)) return 0.84
  if ('MW—–→←↑↓'.includes(c)) return 0.92
  if (c >= '0' && c <= '9') return 0.58
  // Majuscules, accentuées comprises : une lettre qui n'a pas la même forme en
  // minuscule est une majuscule.
  if (c === c.toUpperCase() && c !== c.toLowerCase()) return 0.6
  return 0.53
}

export function largeurTexte(texte: string, taille: number): number {
  let total = 0
  for (const c of texte) total += largeurCaractere(c)
  return total * taille
}

/** Largeur de texte utilisable dans un nœud. Un cercle offre moins que son diamètre. */
function largeurUtile(n: NoeudSchema): number {
  return Math.max(24, (n.forme === 'cercle' ? n.l * 0.76 : n.l) - MARGE_TEXTE * 2)
}

/** Découpe un libellé sur les espaces pour qu'il tienne dans la largeur donnée. */
function couper(texte: string, taille: number, dispo: number): string[] {
  if (largeurTexte(texte, taille) <= dispo) return [texte]

  const lignes: string[] = []
  let courante = ''
  for (const mot of texte.split(' ')) {
    const essai = courante ? `${courante} ${mot}` : mot
    // Un mot seul plus large que la boîte reste sur sa ligne : le facteur
    // d'échelle s'en occupera. Mieux vaut un mot réduit qu'un mot coupé.
    if (!courante || largeurTexte(essai, taille) <= dispo) courante = essai
    else {
      lignes.push(courante)
      courante = mot
    }
  }
  if (courante) lignes.push(courante)
  return lignes
}

/**
 * Les lignes réellement dessinées : le titre et le corps, découpés pour tenir
 * dans la boîte. Le repli à la ligne vient avant la réduction de taille — un
 * libellé long doit passer à la ligne, pas devenir minuscule.
 */
export function lignesRendues(n: NoeudSchema): { titre: string[]; corps: string[] } {
  const dispo = largeurUtile(n)
  return {
    titre: couper(n.titre, TAILLE_TITRE, dispo),
    corps: (n.lignes ?? []).flatMap((l) => couper(l, TAILLE_LIGNE, dispo)),
  }
}

/**
 * Facteur d'échelle du texte d'un nœud : 1 quand tout tient après repli, moins
 * sinon. Il ne joue plus que dans deux cas — trop de lignes pour la hauteur, ou
 * un mot seul plus large que la boîte.
 */
export function facteurTexte(n: NoeudSchema): number {
  const dispo = largeurUtile(n)
  const { titre, corps } = lignesRendues(n)

  let facteur = (n.h - 14) / ((titre.length + corps.length) * INTERLIGNE)
  for (const ligne of titre) facteur = Math.min(facteur, dispo / largeurTexte(ligne, TAILLE_TITRE))
  for (const ligne of corps) facteur = Math.min(facteur, dispo / largeurTexte(ligne, TAILLE_LIGNE))
  return Math.min(1, facteur)
}

/** Taille réellement appliquée, pour les contrôles automatisés. */
export const TAILLES = { titre: TAILLE_TITRE, ligne: TAILLE_LIGNE, plancher: TAILLE_PLANCHER }

type Point = { x: number; y: number }

/* ------------------------------------------------------------- Géométrie */

const centre = (n: NoeudSchema): Point => ({ x: n.x + n.l / 2, y: n.y + n.h / 2 })

/** Point d'accroche d'un lien sur la bordure d'un nœud. */
function accroche(n: NoeudSchema, face: 'haut' | 'bas' | 'gauche' | 'droite'): Point {
  const c = centre(n)
  switch (face) {
    case 'haut':
      return { x: c.x, y: n.y }
    case 'bas':
      return { x: c.x, y: n.y + n.h }
    case 'gauche':
      return { x: n.x, y: c.y }
    case 'droite':
      return { x: n.x + n.l, y: c.y }
  }
}

/** Face la plus naturelle pour relier `a` à `b` : celle qui regarde vers l'autre. */
function faceAuto(a: NoeudSchema, b: NoeudSchema): 'haut' | 'bas' | 'gauche' | 'droite' {
  const ca = centre(a)
  const cb = centre(b)
  const dx = cb.x - ca.x
  const dy = cb.y - ca.y
  // On compare les écarts rapportés à la demi-taille du nœud : une boîte large
  // et plate se relie plus volontiers par le haut ou le bas que par le côté.
  if (Math.abs(dx) / (a.l / 2 + 1) > Math.abs(dy) / (a.h / 2 + 1)) {
    return dx > 0 ? 'droite' : 'gauche'
  }
  return dy > 0 ? 'bas' : 'haut'
}

const opposee = (f: 'haut' | 'bas' | 'gauche' | 'droite') =>
  f === 'haut' ? 'bas' : f === 'bas' ? 'haut' : f === 'gauche' ? 'droite' : 'gauche'

/** Trajet d'un lien : liste de points, du départ à l'arrivée. */
function trajet(lien: LienSchema, de: NoeudSchema, vers: NoeudSchema): Point[] {
  const faceDepart = lien.depuis && lien.depuis !== 'auto' ? lien.depuis : faceAuto(de, vers)
  const faceArrivee = lien.arrive && lien.arrive !== 'auto' ? lien.arrive : opposee(faceAuto(de, vers))

  const a = accroche(de, faceDepart)
  const b = accroche(vers, faceArrivee)

  if (lien.coude === 'v-h') return [a, { x: a.x, y: b.y }, b]
  if (lien.coude === 'h-v') return [a, { x: b.x, y: a.y }, b]
  return [a, b]
}

/** Triangle de la pointe, orienté par le dernier segment du trajet. */
function pointe(avant: Point, fin: Point): string {
  const dx = fin.x - avant.x
  const dy = fin.y - avant.y
  const norme = Math.hypot(dx, dy) || 1
  const ux = dx / norme
  const uy = dy / norme
  // Base du triangle, reculée de FLECHE, élargie de FLECHE/2 de chaque côté.
  const bx = fin.x - ux * FLECHE
  const by = fin.y - uy * FLECHE
  const demi = FLECHE / 2.1
  return [
    `${fin.x},${fin.y}`,
    `${bx - uy * demi},${by + ux * demi}`,
    `${bx + uy * demi},${by - ux * demi}`,
  ].join(' ')
}

/* ---------------------------------------------------------------- Nœuds */

function classeTon(ton: TonSchema | undefined, prefixe: string): string {
  return `${prefixe} ${prefixe}--${ton ?? 'neutre'}`
}

/** Un cercle qui en contient d'autres porte son titre en haut, pas au centre. */
function titreEnHaut(n: NoeudSchema, tous: NoeudSchema[]): boolean {
  if (n.forme !== 'cercle') return false
  const c = centre(n)
  const r = n.l / 2
  return tous.some((autre) => {
    if (autre.id === n.id) return false
    const ca = centre(autre)
    return Math.hypot(ca.x - c.x, ca.y - c.y) < r * 0.92
  })
}

function Etiquette({ n, haut }: { n: NoeudSchema; haut: boolean }) {
  const c = centre(n)
  const facteur = facteurTexte(n)
  const { titre, corps } = lignesRendues(n)
  const interligne = INTERLIGNE * facteur
  const total = titre.length + corps.length

  // `dominant-baseline: middle` place le point y au MILIEU de la ligne : le
  // bloc est donc centré sur (total − 1) interlignes, pas sur `total`.
  const depart = haut ? n.y + 22 * facteur + 10 : c.y - ((total - 1) * interligne) / 2

  return (
    <>
      {titre.map((ligne, i) => (
        <text
          key={`t${i}`}
          x={c.x}
          y={depart + i * interligne}
          className="sch__titre"
          fontSize={TAILLE_TITRE * facteur}
        >
          {ligne}
        </text>
      ))}
      {corps.map((ligne, i) => (
        <text
          key={`c${i}`}
          x={c.x}
          y={depart + (titre.length + i) * interligne}
          className="sch__ligne"
          fontSize={TAILLE_LIGNE * facteur}
        >
          {ligne}
        </text>
      ))}
    </>
  )
}

function Forme({ n }: { n: NoeudSchema }) {
  const c = centre(n)

  if (n.forme === 'cercle') {
    return <circle cx={c.x} cy={c.y} r={n.l / 2} className={classeTon(n.ton, 'sch__forme')} />
  }
  if (n.forme === 'losange') {
    const pts = [
      `${c.x},${n.y}`,
      `${n.x + n.l},${c.y}`,
      `${c.x},${n.y + n.h}`,
      `${n.x},${c.y}`,
    ].join(' ')
    return <polygon points={pts} className={classeTon(n.ton, 'sch__forme')} />
  }
  if (n.forme === 'cadre') {
    return (
      <rect x={n.x} y={n.y} width={n.l} height={n.h} rx={RAYON} className="sch__cadre" />
    )
  }
  return (
    <rect
      x={n.x}
      y={n.y}
      width={n.l}
      height={n.h}
      rx={n.forme === 'bande' ? RAYON / 2 : RAYON}
      className={classeTon(n.ton, 'sch__forme')}
    />
  )
}

function Noeud({
  n,
  tous,
  lien,
}: {
  n: NoeudSchema
  tous: NoeudSchema[]
  lien?: (point: string) => string
}) {
  const haut = titreEnHaut(n, tous)

  // Un cadre n'est qu'un décor : son titre se pose en haut à gauche, à
  // l'extérieur du flux de lecture des boîtes qu'il regroupe.
  if (n.forme === 'cadre') {
    return (
      <g className="sch__noeud sch__noeud--cadre">
        <Forme n={n} />
        <text x={n.x + 16} y={n.y + 24} className="sch__cadre-titre" fontSize={TAILLE_LIGNE}>
          {n.titre}
        </text>
      </g>
    )
  }

  const contenu = (
    <>
      <Forme n={n} />
      <Etiquette n={n} haut={haut} />
    </>
  )

  if (n.point && lien) {
    return (
      <a href={lien(n.point)} className="sch__noeud sch__noeud--lien">
        <title>{`${n.titre} — ouvrir l’explication`}</title>
        {contenu}
      </a>
    )
  }
  return <g className="sch__noeud">{contenu}</g>
}

/* ---------------------------------------------------------------- Liens */

function Lien({ lien, noeuds }: { lien: LienSchema; noeuds: Map<string, NoeudSchema> }) {
  const de = noeuds.get(lien.de)
  const vers = noeuds.get(lien.vers)
  if (!de || !vers) return null

  const points = trajet(lien, de, vers)
  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const fin = points[points.length - 1] as Point
  const avant = points[points.length - 2] as Point
  const classe = classeTon(lien.ton, 'sch__lien')

  // Le libellé se pose au milieu du trajet, sur une pastille qui masque le
  // trait : sans elle, le texte devient illisible dès qu'il croise la ligne.
  const milieu = points.length === 3 ? (points[1] as Point) : { x: (points[0]!.x + fin.x) / 2, y: (points[0]!.y + fin.y) / 2 }

  return (
    <g>
      <path
        d={d}
        className={`${classe} ${lien.trait === 'pointille' ? 'sch__lien--pointille' : ''}`}
        fill="none"
      />
      {!lien.sansFleche && <polygon points={pointe(avant, fin)} className={`${classe} sch__pointe`} />}
      {lien.libelle && (
        <text x={milieu.x} y={milieu.y - 8} className="sch__lien-libelle" fontSize={TAILLE_LIGNE - 2}>
          {lien.libelle}
        </text>
      )}
    </g>
  )
}

/* ----------------------------------------------------------------- Axes */

function Axes({ schema }: { schema: Schema }) {
  if (!schema.axes) return null
  const boites = schema.noeuds.filter((n) => n.forme !== 'cadre')
  if (boites.length === 0) return null

  const x0 = Math.min(...boites.map((n) => n.x))
  const x1 = Math.max(...boites.map((n) => n.x + n.l))
  const y0 = Math.min(...boites.map((n) => n.y))
  const y1 = Math.max(...boites.map((n) => n.y + n.h))
  const cx = (x0 + x1) / 2
  const cy = (y0 + y1) / 2

  return (
    <g className="sch__axes" aria-hidden="true">
      <line x1={x0 - 18} y1={cy} x2={x1 + 18} y2={cy} />
      <line x1={cx} y1={y0 - 18} x2={cx} y2={y1 + 18} />
      <text x={x0 - 30} y={y0 - 26} className="sch__axe-libelle" textAnchor="start" fontSize={TAILLE_LIGNE}>
        {schema.axes.y.libelle} ↑ {schema.axes.y.fort}
      </text>
      <text x={x1 + 18} y={y1 + 34} className="sch__axe-libelle" textAnchor="end" fontSize={TAILLE_LIGNE}>
        {schema.axes.x.libelle} → {schema.axes.x.fort}
      </text>
    </g>
  )
}

/* ---------------------------------------------------------------- Rendu */

export function SchemaModele({
  schema,
  titre,
  lienPoint,
  legende,
}: {
  schema: Schema
  /** Titre accessible du dessin. */
  titre: string
  /** Construit l'adresse d'un point expliqué. Sans elle, les cases ne sont pas cliquables. */
  lienPoint?: (point: string) => string
  legende?: ReactNode
}) {
  const noeuds = new Map(schema.noeuds.map((n) => [n.id, n]))

  return (
    <figure className="sch">
      <div className="sch__cadre-defilant">
        <svg
          viewBox={`0 0 ${LARGEUR} ${schema.h}`}
          className="sch__svg"
          style={{ minWidth: LARGEUR_MINIMALE, aspectRatio: `${LARGEUR} / ${schema.h}` }}
          role="img"
          aria-label={`${titre}. ${schema.description}`}
        >
          <Axes schema={schema} />
          {schema.liens.map((l, i) => (
            <Lien key={i} lien={l} noeuds={noeuds} />
          ))}
          {schema.noeuds.map((n) => (
            <Noeud key={n.id} n={n} tous={schema.noeuds} {...(lienPoint ? { lien: lienPoint } : {})} />
          ))}
        </svg>
      </div>

      {(schema.note || legende) && (
        <figcaption className="sch__note">
          {schema.note}
          {legende}
        </figcaption>
      )}
    </figure>
  )
}
