import { describe, expect, it } from 'vitest'
import { notions, NB_ETAPES_ANALYSE, NB_MODELES } from '@strat/content'
import {
  analyse,
  etapesAnalyse,
  getModele,
  getPointModele,
  modeles,
  parcours12h,
  type NoeudSchema,
  type SchemaModele,
} from '@strat/content/modeles'
import { facteurTexte, TAILLES } from '@app/components/SchemaModele'

/* =========================================================================
   Le corpus « modèles » tient deux promesses que rien d'autre ne vérifie :
   le dessin est juste (rien ne sort du cadre, rien ne se chevauche, aucun
   trait ne pointe dans le vide), et les deux sections se répondent (chaque
   renvoi de l'analyse tombe sur une case qui existe).
   ========================================================================= */

const LARGEUR = 1000
/**
 * Taille de police minimale, en unités du repère. Le dessin ne descend jamais
 * sous 800 unités de large à l'écran : 13 unités valent donc au moins ~10 px
 * réels, ce qui reste lisible sur un téléphone.
 */
const TAILLE_MINIMALE = 13
/** Les lignes secondaires peuvent descendre un peu plus bas que le titre. */
const TAILLE_MINIMALE_LIGNE = 11

const idsNotions = new Set(notions.map((n) => n.id))

function boites(schema: SchemaModele): NoeudSchema[] {
  return schema.noeuds.filter((n) => n.forme !== 'cadre' && n.forme !== 'cercle')
}

function seChevauchent(a: NoeudSchema, b: NoeudSchema): boolean {
  return a.x < b.x + b.l && b.x < a.x + a.l && a.y < b.y + b.h && b.y < a.y + a.h
}

/** Tous les schémas du corpus : ceux des modèles et ceux glissés dans l'analyse. */
const tousLesSchemas: { source: string; schema: SchemaModele }[] = [
  ...modeles.map((m) => ({ source: `modèle ${m.id}`, schema: m.schema })),
  ...etapesAnalyse.flatMap((e) =>
    e.raisonnement
      .filter((b): b is Extract<typeof b, { t: 'schema' }> => b.t === 'schema')
      .map((b, i) => ({ source: `étape ${e.id} · schéma ${i + 1}`, schema: b.schema })),
  ),
]

describe('corpus des modèles', () => {
  it('expose les 25 schémas du cours, numérotés et identifiés une seule fois', () => {
    expect(modeles).toHaveLength(25)
    expect(new Set(modeles.map((m) => m.id)).size).toBe(25)
    expect(new Set(modeles.map((m) => m.slug)).size).toBe(25)
    expect(modeles.map((m) => m.numero).sort((a, b) => a - b)).toEqual(
      Array.from({ length: 25 }, (_, i) => i + 1),
    )
    for (const m of modeles) expect(getModele(m.slug)?.id).toBe(m.id)
  })

  it('garde les compteurs allégés en accord avec le corpus réel', () => {
    // Le hub « S'entraîner » affiche ces deux nombres sans charger les fiches,
    // qui pèsent près d'un mégaoctet. Le raccourci n'est acceptable que tant
    // qu'il reste vrai.
    expect(NB_MODELES).toBe(modeles.length)
    expect(NB_ETAPES_ANALYSE).toBe(etapesAnalyse.length)
  })

  it('dessine chaque schéma à l’intérieur de son repère', () => {
    for (const { source, schema } of tousLesSchemas) {
      expect(schema.h, `${source} : hauteur`).toBeGreaterThan(0)
      expect(schema.description.length, `${source} : description`).toBeGreaterThan(10)
      for (const n of schema.noeuds) {
        const hors =
          n.x < 0 || n.y < 0 || n.x + n.l > LARGEUR || n.y + n.h > schema.h || n.l <= 0 || n.h <= 0
        expect(hors, `${source} : le nœud « ${n.id} » sort du repère`).toBe(false)
      }
    }
  })

  it('ne superpose jamais deux boîtes', () => {
    for (const { source, schema } of tousLesSchemas) {
      const liste = boites(schema)
      for (let i = 0; i < liste.length; i++) {
        for (let j = i + 1; j < liste.length; j++) {
          const a = liste[i] as NoeudSchema
          const b = liste[j] as NoeudSchema
          expect(
            seChevauchent(a, b),
            `${source} : « ${a.id} » et « ${b.id} » se chevauchent`,
          ).toBe(false)
        }
      }
    }
  })

  it('relie des nœuds qui existent', () => {
    for (const { source, schema } of tousLesSchemas) {
      const ids = new Set(schema.noeuds.map((n) => n.id))
      expect(ids.size, `${source} : identifiants de nœuds dupliqués`).toBe(schema.noeuds.length)
      for (const l of schema.liens) {
        expect(ids.has(l.de), `${source} : lien depuis « ${l.de} », qui n’existe pas`).toBe(true)
        expect(ids.has(l.vers), `${source} : lien vers « ${l.vers} », qui n’existe pas`).toBe(true)
      }
    }
  })

  it('garde des libellés lisibles sans les rétrécir', () => {
    // Le rendu réduit le texte qui ne tient pas plutôt que de le laisser
    // déborder : c'est un filet de sécurité, pas une autorisation. En dessous
    // de ce seuil, le texte devient trop petit à l'écran — la boîte est trop
    // étroite ou le libellé trop long, et cela se corrige dans le contenu.
    const trop: string[] = []
    for (const { source, schema } of tousLesSchemas) {
      for (const n of schema.noeuds) {
        if (n.forme === 'cadre') continue
        const facteur = facteurTexte(n)
        const titre = TAILLES.titre * facteur
        if (titre < TAILLE_MINIMALE) {
          trop.push(`${source} · titre « ${n.titre} » descend à ${titre.toFixed(1)} unités`)
        }
        // Les lignes secondaires supportent d'être un cran plus petites, mais
        // pas de devenir illisibles pour autant.
        const ligne = TAILLES.ligne * facteur
        if ((n.lignes?.length ?? 0) > 0 && ligne < TAILLE_MINIMALE_LIGNE) {
          trop.push(`${source} · lignes de « ${n.titre} » descendent à ${ligne.toFixed(1)} unités`)
        }
      }
    }
    expect(trop, 'libellés trop longs pour leur boîte').toEqual([])
  })

  it('fait correspondre chaque case du dessin à son explication, et l’inverse', () => {
    for (const m of modeles) {
      const points = new Set(m.points.map((p) => p.id))
      expect(points.size, `${m.id} : points dupliqués`).toBe(m.points.length)
      expect(m.points.length, `${m.id} : trop peu de points`).toBeGreaterThanOrEqual(3)

      const cites = new Set<string>()
      for (const n of m.schema.noeuds) {
        if (!n.point) continue
        expect(points.has(n.point), `${m.id} : le nœud « ${n.id} » vise le point « ${n.point} », absent`).toBe(true)
        cites.add(n.point)
      }

      // La promesse de la section : on clique une case, on lit son explication.
      // Un point que le dessin ne montre nulle part est inatteignable.
      for (const p of m.points) {
        expect(cites.has(p.id), `${m.id} : le point « ${p.id} » n’est relié à aucune case`).toBe(true)
      }
    }
  })

  it('ne cite que des notions et des modèles qui existent', () => {
    for (const m of modeles) {
      for (const n of m.notions) {
        expect(idsNotions.has(n), `${m.id} : notion inconnue « ${n} »`).toBe(true)
      }
      for (const p of m.points) {
        for (const n of p.notions ?? []) {
          expect(idsNotions.has(n), `${m.id} · ${p.id} : notion inconnue « ${n} »`).toBe(true)
        }
      }
      for (const l of m.liens) {
        expect(getModele(l.vers), `${m.id} : lien vers le modèle inconnu « ${l.vers} »`).toBeDefined()
        expect(l.vers, `${m.id} : lien vers lui-même`).not.toBe(m.id)
      }
    }
  })

  it('remplit chaque fiche : méthode, pièges, exemple et phrase d’oral', () => {
    for (const m of modeles) {
      expect(m.methode.length, `${m.id} : méthode`).toBeGreaterThanOrEqual(3)
      expect(m.pieges.length, `${m.id} : pièges`).toBeGreaterThanOrEqual(2)
      expect(m.liens.length, `${m.id} : liens`).toBeGreaterThanOrEqual(1)
      expect(m.exemple.deroule.length, `${m.id} : déroulé de l’exemple`).toBeGreaterThanOrEqual(3)
      expect(m.aRetenir.length, `${m.id} : à retenir`).toBeGreaterThanOrEqual(3)
      expect(m.phraseOral.length, `${m.id} : phrase d’oral`).toBeGreaterThan(40)
      expect(m.quandUtiliser.length, `${m.id} : quand utiliser`).toBeGreaterThanOrEqual(2)
    }
  })
})

describe('analyse guidée', () => {
  it('déroule un cas unique en étapes numérotées et enchaînées', () => {
    expect(etapesAnalyse.length).toBeGreaterThanOrEqual(6)
    expect(etapesAnalyse.map((e) => e.numero)).toEqual(etapesAnalyse.map((_, i) => i))
    expect(new Set(etapesAnalyse.map((e) => e.slug)).size).toBe(etapesAnalyse.length)
    expect(analyse.cas.enonce.length).toBeGreaterThanOrEqual(3)
    expect(analyse.cas.chiffres.length).toBeGreaterThanOrEqual(4)
  })

  it('renvoie toujours vers une case qui existe', () => {
    let renvois = 0
    for (const e of etapesAnalyse) {
      for (const bloc of e.raisonnement) {
        if (bloc.t !== 'renvoi') continue
        renvois++
        const modele = getModele(bloc.modele)
        expect(modele, `${e.id} : renvoi vers le modèle inconnu « ${bloc.modele} »`).toBeDefined()
        if (bloc.point) {
          expect(
            getPointModele(bloc.modele, bloc.point),
            `${e.id} : renvoi vers « ${bloc.modele} · ${bloc.point} », qui n’existe pas`,
          ).toBeDefined()
        }
      }
      for (const id of e.modeles) {
        expect(getModele(id), `${e.id} : modèle inconnu « ${id} »`).toBeDefined()
      }
    }
    // Les deux sections doivent réellement se répondre.
    expect(renvois).toBeGreaterThanOrEqual(20)
  })

  it('montre quelqu’un réfléchir, pas un corrigé', () => {
    for (const e of etapesAnalyse) {
      expect(e.raisonnement.length, `${e.id} : raisonnement trop court`).toBeGreaterThanOrEqual(8)
      expect(e.methode.length, `${e.id} : méthode`).toBeGreaterThanOrEqual(3)
      expect(e.livrable.lignes.length, `${e.id} : livrable`).toBeGreaterThanOrEqual(3)
      expect(e.pieges.length, `${e.id} : pièges`).toBeGreaterThanOrEqual(2)

      // Le geste central : relier un mot de l'énoncé à une conclusion.
      const observations = e.raisonnement.filter((b) => b.t === 'observation')
      expect(observations.length, `${e.id} : pas assez d’observations`).toBeGreaterThanOrEqual(2)
    }
  })
})

describe('parcours en 12 heures', () => {
  it('couvre les 25 modèles sans en citer aucun deux fois', () => {
    const cites = parcours12h.seances.flatMap((s) => s.modeles)
    expect(new Set(cites).size, 'un modèle est cité deux fois').toBe(cites.length)
    expect(new Set(cites)).toEqual(new Set(modeles.map((m) => m.id)))
  })

  it('tient dans les douze heures annoncées', () => {
    const total = parcours12h.seances.reduce((t, s) => t + s.duree, 0)
    expect(total).toBeLessThanOrEqual(12 * 60)
    expect(total / 60).toBeCloseTo(parcours12h.heures, 0)
  })

  it('ne renvoie que vers des étapes qui existent', () => {
    const ids = new Set(etapesAnalyse.map((e) => e.id))
    for (const s of parcours12h.seances) {
      for (const e of s.etapes ?? []) {
        expect(ids.has(e), `séance ${s.numero} : étape inconnue « ${e} »`).toBe(true)
      }
    }
  })
})
