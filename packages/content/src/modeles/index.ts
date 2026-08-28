/**
 * Agrégation du corpus « modèles » et « analyse guidée ».
 *
 * Chaque schéma et chaque étape vit dans son propre fichier : on en ajoute un
 * en écrivant le fichier et en l'ajoutant à la liste ci-dessous. L'ordre des
 * listes est l'ordre d'affichage.
 */

import type { Analyse, EtapeAnalyse, Modele, ModeleId, PointId } from './types'

import { modele as m01 } from './m01-perimetre'
import { modele as m02 } from './m02-pestel'
import { modele as m03 } from './m03-porter'
import { modele as m04 } from './m04-parties-prenantes'
import { modele as m05 } from './m05-ressources-competences'
import { modele as m06 } from './m06-chaine-de-valeur'
import { modele as m07 } from './m07-swot'
import { modele as m08 } from './m08-saf'
import { modele as m09 } from './m09-ocean-bleu-erac'
import { modele as m10 } from './m10-rcov'
import { modele as m11 } from './m11-bmc'
import { modele as m12 } from './m12-bmc-durable'
import { modele as m13 } from './m13-wedding-cake'
import { modele as m14 } from './m14-donut'
import { modele as m15 } from './m15-durabilite-forte-faible'
import { modele as m16 } from './m16-agenda-2030'
import { modele as m17 } from './m17-trois-r'
import { modele as m18 } from './m18-achats-durables'
import { modele as m19 } from './m19-rne'
import { modele as m20 } from './m20-trois-postes'
import { modele as m21 } from './m21-effet-rebond'
import { modele as m22 } from './m22-sobriete-qta'
import { modele as m23 } from './m23-wcag-pour'
import { modele as m24 } from './m24-privacy'
import { modele as m25 } from './m25-collecte-oisf'

import { etape as e0 } from './etape-e0-cadrer'
import { etape as e1 } from './etape-e1-diagnostic-externe'
import { etape as e2 } from './etape-e2-diagnostic-interne'
import { etape as e3 } from './etape-e3-business-model'
import { etape as e4 } from './etape-e4-swot-options'
import { etape as e5 } from './etape-e5-saf-recommandation'
import { etape as e6 } from './etape-e6-durabilite'
import { etape as e7 } from './etape-e7-numerique'
import { etape as e8 } from './etape-e8-restituer'

import { casFilRouge } from './cas'
import { parcours12h } from './parcours'

export * from './types'
export { casFilRouge, parcours12h }

export const modeles: Modele[] = [
  m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12, m13,
  m14, m15, m16, m17, m18, m19, m20, m21, m22, m23, m24, m25,
]

export const etapesAnalyse: EtapeAnalyse[] = [e0, e1, e2, e3, e4, e5, e6, e7, e8]

export const analyse: Analyse = { cas: casFilRouge, etapes: etapesAnalyse }

/* --------------------------------------------------------------- Accès */

const parId = new Map(modeles.map((m) => [m.id, m]))
const parSlug = new Map(modeles.map((m) => [m.slug, m]))

export function getModele(idOuSlug: string): Modele | undefined {
  return parSlug.get(idOuSlug) ?? parId.get(idOuSlug)
}

export function getEtapeAnalyse(idOuSlug: string): EtapeAnalyse | undefined {
  return etapesAnalyse.find((e) => e.slug === idOuSlug || e.id === idOuSlug)
}

export function getPointModele(
  modele: ModeleId,
  point: PointId,
): { modele: Modele; point: Modele['points'][number] } | undefined {
  const m = parId.get(modele) ?? parSlug.get(modele)
  const p = m?.points.find((x) => x.id === point)
  return m && p ? { modele: m, point: p } : undefined
}

/** Familles présentes, dans l'ordre du processus. */
export const FAMILLES_MODELE = [
  { id: 'cadrage', libelle: 'Cadrer' },
  { id: 'externe', libelle: 'Regarder dehors' },
  { id: 'interne', libelle: 'Regarder dedans' },
  { id: 'business-model', libelle: 'Business model' },
  { id: 'synthese', libelle: 'Synthétiser' },
  { id: 'decision', libelle: 'Décider' },
  { id: 'durabilite', libelle: 'Durabilité' },
  { id: 'numerique', libelle: 'Numérique' },
] as const
