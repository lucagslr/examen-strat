import {
  categories,
  groupesRelationsAffichage,
  metaRelationParType,
  notions,
  relations,
  type NotionId,
  type Relation,
  type TypeRelation,
} from '@strat/content'

/**
 * GRAPHE DE CONNAISSANCES.
 * Les relations sont déclarées dans un seul sens ; ce module dérive le sens
 * inverse à partir de `metaRelations[].inverse`, pour que chaque fiche notion
 * affiche ses relations entrantes comme ses relations sortantes.
 */

export interface RelationOrientee extends Relation {
  /** `true` si la relation a été dérivée de l'inverse déclaré. */
  derivee: boolean
}

/** Construit une fois pour toutes la liste des relations dans les deux sens. */
function construireIndex(): Map<NotionId, RelationOrientee[]> {
  const parNotion = new Map<NotionId, RelationOrientee[]>()

  const ajouter = (id: NotionId, r: RelationOrientee) => {
    const liste = parNotion.get(id)
    if (liste) liste.push(r)
    else parNotion.set(id, [r])
  }

  for (const r of relations) {
    ajouter(r.source, { ...r, derivee: false })

    const meta = metaRelationParType.get(r.type)
    if (!meta) continue

    if (meta.symetrique) {
      ajouter(r.target, { source: r.target, target: r.source, type: r.type, description: r.description, derivee: true })
    } else if (meta.inverse) {
      ajouter(r.target, {
        source: r.target,
        target: r.source,
        type: meta.inverse,
        description: r.description,
        derivee: true,
      })
    } else {
      // Type sans inverse déclaré (DEPEND_DE, RENFORCE…) : on rend malgré tout la
      // relation visible depuis la cible, sans inverser l'étiquette.
      ajouter(r.target, { ...r, derivee: true })
    }
  }

  return parNotion
}

const indexRelations = construireIndex()

export function relationsDe(id: NotionId): RelationOrientee[] {
  return indexRelations.get(id) ?? []
}

/** Relations groupées pour l'affichage de la fiche notion. */
export function relationsGroupees(id: NotionId): { titre: string; relations: RelationOrientee[] }[] {
  const toutes = relationsDe(id)
  const groupes: { titre: string; relations: RelationOrientee[] }[] = []
  const dejaVues = new Set<RelationOrientee>()

  for (const g of groupesRelationsAffichage) {
    const dedans = toutes.filter((r) => {
      // Une relation « sortante » se lit depuis la source ; une relation dérivée
      // sans inverse ne doit pas apparaître dans le groupe de son type d'origine.
      if (!g.types.includes(r.type)) return false
      if (r.derivee && r.source !== id) return false
      return r.source === id
    })
    if (dedans.length) {
      dedans.forEach((r) => dejaVues.add(r))
      groupes.push({ titre: g.titre, relations: dedans })
    }
  }

  const restantes = toutes.filter((r) => r.source === id && !dejaVues.has(r))
  if (restantes.length) groupes.push({ titre: 'Autres liens', relations: restantes })

  return groupes
}

/** Voisins directs d'une notion, tous types confondus. */
export function voisins(id: NotionId): NotionId[] {
  return [...new Set(relationsDe(id).map((r) => (r.source === id ? r.target : r.source)))].filter((n) => n !== id)
}

/**
 * Parcours en largeur borné : renvoie les notions à distance ≤ `profondeur`.
 * Utilisé par la révision intelligente (« remonter les notions liées à une notion faible »).
 */
export function voisinage(id: NotionId, profondeur = 1): Map<NotionId, number> {
  const distances = new Map<NotionId, number>([[id, 0]])
  let frontiere: NotionId[] = [id]

  for (let d = 1; d <= profondeur; d++) {
    const suivante: NotionId[] = []
    for (const n of frontiere) {
      for (const v of voisins(n)) {
        if (!distances.has(v)) {
          distances.set(v, d)
          suivante.push(v)
        }
      }
    }
    frontiere = suivante
    if (!frontiere.length) break
  }

  distances.delete(id)
  return distances
}

/** Les notions à ne pas confondre avec celle-ci — utilisé par les duels et les pièges. */
export function neePasConfondre(id: NotionId): NotionId[] {
  return relationsDe(id)
    .filter((r) => r.type === 'NE_PAS_CONFONDRE' && r.source === id)
    .map((r) => r.target)
}

// ---------------------------------------------------------------------------
// Carte progressive
// ---------------------------------------------------------------------------

export interface NoeudCarte {
  id: string
  libelle: string
  type: 'categorie' | 'notion'
  /** Nombre d'éléments sous ce nœud, pour dimensionner l'affichage. */
  taille: number
  priorite?: 1 | 2 | 3
}

/**
 * Enfants d'un nœud de la carte : sous-catégories d'abord, puis les notions
 * de la catégorie. On n'affiche jamais tous les nœuds d'un coup.
 */
export function enfantsCarte(idCategorie: string): NoeudCarte[] {
  const sous = categories
    .filter((c) => c.parent === idCategorie)
    .sort((a, b) => a.ordre - b.ordre)
    .map<NoeudCarte>((c) => ({
      id: c.id,
      libelle: c.nom,
      type: 'categorie',
      taille: notions.filter((n) => n.categorie === c.id).length + categories.filter((x) => x.parent === c.id).length,
    }))

  const propres = notions
    .filter((n) => n.categorie === idCategorie)
    .sort((a, b) => a.priorite - b.priorite || a.nom.localeCompare(b.nom, 'fr'))
    .map<NoeudCarte>((n) => ({
      id: n.id,
      libelle: n.nomCourt ?? n.nom,
      type: 'notion',
      taille: voisins(n.id).length,
      priorite: n.priorite,
    }))

  return [...sous, ...propres]
}

/** Chemin d'une catégorie jusqu'à la racine, pour le fil d'Ariane de la carte. */
export function cheminCategorie(id: string): string[] {
  const chemin: string[] = []
  let courant: string | undefined = id
  const vus = new Set<string>()
  while (courant && !vus.has(courant)) {
    vus.add(courant)
    chemin.unshift(courant)
    courant = categories.find((c) => c.id === courant)?.parent
  }
  return chemin
}

/**
 * Connexions transversales : relations entre notions de catégories différentes.
 * C'est ce qu'affiche le bouton « Voir les connexions avancées ».
 */
export function connexionsTransversales(): Relation[] {
  const categorieDe = new Map(notions.map((n) => [n.id, n.categorie]))
  return relations.filter((r) => categorieDe.get(r.source) !== categorieDe.get(r.target))
}

export function typesRelationsUtilises(): TypeRelation[] {
  return [...new Set(relations.map((r) => r.type))]
}
