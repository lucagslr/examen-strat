import { MAX_IMPORT_BYTES, STORAGE_VERSION } from '@strat/config'
import { CONTENT_VERSION } from '@strat/content'
import { migrerDetaille } from './migration'
import type { Progression, ResultatImport } from './types'

/**
 * EXPORT / IMPORT DE LA PROGRESSION.
 *
 * Le fichier exporté ne contient QUE la progression — jamais le corpus.
 * À l'import, on ne fait jamais confiance au fichier : taille, format, version,
 * types et identifiants sont validés, et tout ce qui est invalide est ignoré.
 * Les messages d'erreur sont humains, jamais des traces techniques.
 */

const MARQUEUR = 'strat-progression'

export interface FichierExport {
  format: typeof MARQUEUR
  storageVersion: number
  contentVersion: number
  exporteLe: string
  progression: Progression
}

export function exporterProgression(p: Progression, maintenant = new Date()): string {
  const fichier: FichierExport = {
    format: MARQUEUR,
    storageVersion: STORAGE_VERSION,
    contentVersion: CONTENT_VERSION,
    exporteLe: maintenant.toISOString(),
    progression: p,
  }
  return JSON.stringify(fichier, null, 2)
}

export function nomFichierExport(maintenant = new Date()): string {
  const iso = maintenant.toISOString().slice(0, 10)
  return `strat-progression-${iso}.json`
}

/** Taille en octets d'une chaîne UTF-8, sans dépendre de l'API Blob. */
export function tailleOctets(texte: string): number {
  if (typeof TextEncoder !== 'undefined') return new TextEncoder().encode(texte).length
  // Repli : approximation suffisante pour un contrôle de garde-fou.
  return unescape(encodeURIComponent(texte)).length
}

export function importerProgression(contenu: string): ResultatImport {
  if (!contenu.trim())
    return { ok: false, message: 'Le fichier est vide. Choisis un fichier de progression exporté depuis STRAT.' }

  const taille = tailleOctets(contenu)
  if (taille > MAX_IMPORT_BYTES) {
    const ko = Math.round(taille / 1024)
    const maxKo = Math.round(MAX_IMPORT_BYTES / 1024)
    return {
      ok: false,
      message: `Ce fichier fait ${ko} Ko, au-delà de la limite de ${maxKo} Ko. Une progression STRAT est bien plus légère : le fichier choisi n'est probablement pas le bon.`,
    }
  }

  let donnees: unknown
  try {
    donnees = JSON.parse(contenu)
  } catch {
    return {
      ok: false,
      message: "Cette progression ne peut pas être importée : le fichier n'est pas au format attendu.",
    }
  }

  if (typeof donnees !== 'object' || donnees === null || Array.isArray(donnees))
    return { ok: false, message: 'Cette progression ne peut pas être importée : format non reconnu.' }

  const enveloppe = donnees as Partial<FichierExport>
  if (enveloppe.format !== MARQUEUR)
    return {
      ok: false,
      message: "Ce fichier n'a pas été exporté par STRAT. Utilise le bouton « Exporter ma progression » pour en produire un.",
    }

  if (typeof enveloppe.storageVersion === 'number' && enveloppe.storageVersion > STORAGE_VERSION)
    return {
      ok: false,
      message: `Ce fichier vient d'une version plus récente de STRAT (v${enveloppe.storageVersion}). Mets l'application à jour avant de l'importer.`,
    }

  const resultat = migrerDetaille(enveloppe.progression)
  if (!resultat)
    return { ok: false, message: 'Cette progression ne peut pas être importée : les données sont illisibles.' }

  const nbIgnores = resultat.ignores.length
  const message =
    nbIgnores === 0
      ? 'Progression importée.'
      : `Progression importée. ${nbIgnores} élément${nbIgnores > 1 ? 's ont' : ' a'} été ignoré${nbIgnores > 1 ? 's' : ''} car ${nbIgnores > 1 ? 'ils ne correspondent' : "il ne correspond"} plus au contenu actuel du cours.`

  return { ok: true, message, progression: resultat.progression, ignores: resultat.ignores }
}
