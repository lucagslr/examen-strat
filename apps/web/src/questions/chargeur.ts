/* =========================================================================
   MODULE QUESTIONS — chargement du corpus
   ---------------------------------------------------------------------------
   Source de vérité : les fichiers `.md` du dossier `/questions` à la racine du
   dépôt. Rien n'est recopié dans du TypeScript : ajouter un fichier suffit à
   le faire apparaître dans l'application, sans toucher au code.

   Trois informations sont dérivées des fichiers eux-mêmes :
     · le frontmatter (`question`, `tags`) ;
     · l'identité (numéro affiché, slug de route) déduite du nom de fichier,
       parce que les numéros sont dupliqués entre les deux séries de fiches ;
     · le regroupement et l'ordre, lus dans les deux fichiers `00_Index…`, qui
       listent les fiches par thème. C'est ce qui explique et absorbe les
       doublons de numéro.
   ========================================================================= */

import { analyserMarkdown, normaliser, slugifier, type Bloc } from './markdown'

/* ---------------------------------------------------------------- Types */

export interface Question {
  /** Identifiant unique et stable, indépendant du numéro affiché. */
  id: string
  /** Segment de route : `q15-la-chaine-de-valeur-de-porter`. */
  slug: string
  /** Numéro imprimé sur la fiche, `null` pour les documents d'index. */
  numero: number | null
  /** Numéro tel qu'il s'affiche : `Q15`. */
  reference: string | null
  /** Question réelle, issue du frontmatter ou à défaut du titre H1. */
  titre: string
  /** Titre H1 complet du fichier, conservé tel quel. */
  h1: string
  tags: string[]
  /** Tags réellement discriminants (les tags portés par presque tout le corpus sont écartés). */
  motsCles: string[]
  groupe: string
  groupeId: string
  /** Nom du fichier source. Jamais affiché : c'est une information technique. */
  fichier: string
  /** Document d'introduction (`00_…`) plutôt que question d'examen. */
  ressource: boolean
  /** Markdown du corps, frontmatter retiré. */
  source: string
}

export interface Groupe {
  id: string
  libelle: string
  questions: Question[]
}

/* ------------------------------------------------------- Lecture des fichiers */

/**
 * `eager` est volontaire : la page d'index a besoin des métadonnées de tout le
 * corpus. Ce module n'étant importé que par la route « Questions », Vite le
 * place dans un fragment chargé à la demande — l'accueil ne le télécharge pas.
 */
const FICHIERS = import.meta.glob('../../../../questions/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function nomFichier(chemin: string): string {
  return chemin.slice(chemin.lastIndexOf('/') + 1)
}

/* ----------------------------------------------------------- Frontmatter */

interface Frontmatter {
  champs: Record<string, string>
  tags: string[]
  corps: string
}

function separerFrontmatter(brut: string): Frontmatter {
  // Un BOM en tête de fichier empêcherait de reconnaître le frontmatter.
  const texte = brut.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n')
  const m = texte.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!m) return { champs: {}, tags: [], corps: texte }

  const champs: Record<string, string> = {}
  let tags: string[] = []

  for (const ligne of (m[1] as string).split('\n')) {
    const coupe = ligne.indexOf(':')
    if (coupe < 0) continue
    const cle = ligne.slice(0, coupe).trim()
    let valeur = ligne.slice(coupe + 1).trim()

    if (cle === 'tags') {
      tags = valeur
        .replace(/^\[|\]$/g, '')
        .split(',')
        .map((t) => t.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean)
      continue
    }

    valeur = valeur.replace(/^["']|["']$/g, '')
    if (valeur) champs[cle] = valeur
  }

  return { champs, tags, corps: texte.slice(m[0].length) }
}

/* ------------------------------------------------------------- Numérotation */

/**
 * Le corpus compte deux séries de fiches numérotées : les questions `Qnn` et
 * les mises en situation `CASnn`. Elles se reconnaissent au nom de fichier, à
 * l'en-tête H1 et aux renvois, d'où ces trois expressions jumelles.
 */
const SERIES = 'Q|CAS'
const FICHIER_NUMEROTE = new RegExp(`^(${SERIES})(\\d+)`, 'i')
const TITRE_NUMEROTE = new RegExp(`^(?:${SERIES})\\s*\\d+\\s*[—–-]\\s*`, 'i')
const RENVOI_NUMEROTE = new RegExp(`\\[\\[(${SERIES})(\\d+)`, 'gi')
/** Le tag qui ne fait que répéter le numéro (`q60`, `cas-07`) n'apprend rien. */
const TAG_NUMERO = new RegExp(`^(?:${SERIES})-?\\d+$`, 'i')

/** `Q07` → `Q07` ; `CAS7` → `CAS 7`, comme l'écrivent le titre et l'index. */
function referenceDe(serie: string, numero: number): string {
  return serie.toUpperCase() === 'Q' ? `Q${String(numero).padStart(2, '0')}` : `CAS ${numero}`
}

/* --------------------------------------------------- Regroupement et ordre */

/**
 * Les deux fichiers `00_Index…` listent les fiches sous des intitulés de
 * section. On s'en sert pour l'ordre de lecture et pour les filtres : la
 * taxonomie vient donc du corpus, elle n'est pas inventée ici.
 */
function lireIndex(): { ordre: string[]; groupes: Map<string, string> } {
  const ordre: string[] = []
  const groupes = new Map<string, string>()

  // Les index sont classés par la première fiche qu'ils citent : une série
  // qui commence à Q56 se lit après une série qui commence à Q01, quel que
  // soit le nom du fichier.
  const cheminsIndex = Object.keys(FICHIERS)
    .filter((c) => /\/00_/.test(c))
    .map((chemin) => ({ chemin, depart: departIndex(FICHIERS[chemin] as string) }))
    .sort((a, b) => (a.depart === b.depart ? a.chemin.localeCompare(b.chemin) : a.depart - b.depart))

  for (const { chemin } of cheminsIndex) {
    let sectionCourante: string | null = null
    for (const ligne of (FICHIERS[chemin] as string).split(/\r?\n/)) {
      const titre = ligne.match(/^#{2,3}\s+(.*)$/)
      if (titre) {
        sectionCourante = nettoyerIntituleSection((titre[1] as string).trim())
        continue
      }
      // Les index listent leurs fiches soit en puces, soit en tableau.
      const nue = ligne.trim()
      const enListe = /^-\s/.test(nue)
      const enTableau = nue.startsWith('|')
      if (!sectionCourante || (!enListe && !enTableau)) continue

      const renvoi = nue.match(/\[\[([^\]|\\]+)/)
      if (!renvoi) continue
      const base = (renvoi[1] as string).trim()
      if (!groupes.has(base)) {
        groupes.set(base, sectionCourante)
        ordre.push(base)
      }
    }
  }

  return { ordre, groupes }
}

/**
 * Plus petite fiche citée par un index, `Infinity` s'il n'en cite aucune.
 * Les deux séries du corpus se suivent : les `Qnn` d'abord, les `CASnn`
 * ensuite, d'où le décalage appliqué à la seconde.
 */
function departIndex(source: string): number {
  let minimum = Number.POSITIVE_INFINITY
  for (const m of source.matchAll(RENVOI_NUMEROTE)) {
    const decalage = (m[1] as string).toUpperCase() === 'Q' ? 0 : 1000
    minimum = Math.min(minimum, decalage + Number.parseInt(m[2] as string, 10))
  }
  return minimum
}

/** `A. Diagnostic externe` → `Diagnostic externe` ; `Bloc C — Modèle…` → `Modèle…`. */
function nettoyerIntituleSection(brut: string): string {
  return brut
    .replace(/^[A-J]\.\s*/, '')
    .replace(/^Bloc\s+[A-Z]\s*[—–-]\s*/i, '')
    .trim()
}

/* ------------------------------------------------------------ Construction */

function construire(): Question[] {
  const { ordre, groupes } = lireIndex()
  const rang = new Map(ordre.map((base, i) => [base, i]))

  const brutes = Object.entries(FICHIERS).map(([chemin, contenu]): Question => {
    const fichier = nomFichier(chemin)
    const base = fichier.replace(/\.md$/i, '')
    const { champs, tags, corps } = separerFrontmatter(contenu)

    const h1 = corps.match(/^#\s+(.*)$/m)?.[1]?.trim() ?? base.replace(/_/g, ' ')
    const mNumero = base.match(FICHIER_NUMEROTE)
    const numero = mNumero ? Number.parseInt(mNumero[2] as string, 10) : null
    // Tout fichier qui n'appartient à aucune série numérotée est un document
    // d'appui : index, mode d'emploi, synthèse.
    const ressource = mNumero === null

    // Le frontmatter porte parfois la vraie question, parfois seulement la
    // référence (`question: Q61`) : dans ce cas elle ne dit rien et on retombe
    // sur le H1, débarrassé de son préfixe « Q61 — » déjà affiché à part.
    const annonce = champs['question']?.trim()
    const titre =
      annonce && !TAG_NUMERO.test(annonce) ? annonce : h1.replace(TITRE_NUMEROTE, '').trim()

    return {
      id: base,
      slug: slugifier(base),
      numero,
      reference: mNumero ? referenceDe(mNumero[1] as string, numero as number) : null,
      titre,
      h1,
      tags,
      motsCles: [],
      groupe: groupes.get(base) ?? (ressource ? 'Mode d’emploi' : 'Autres fiches'),
      groupeId: '',
      fichier,
      ressource,
      source: corps,
    }
  })

  // Un tag présent sur presque toutes les fiches ne distingue rien : on le
  // retire de l'affichage sans jamais l'exclure de la recherche.
  const frequence = new Map<string, number>()
  for (const q of brutes) for (const t of new Set(q.tags)) frequence.set(t, (frequence.get(t) ?? 0) + 1)
  const seuil = brutes.length * 0.6

  for (const q of brutes) {
    q.groupeId = slugifier(q.groupe)
    q.motsCles = q.tags.filter((t) => !TAG_NUMERO.test(t) && (frequence.get(t) ?? 0) < seuil).slice(0, 4)
  }

  return brutes.sort((a, b) => {
    // Les documents d'index en premier, puis l'ordre de lecture du corpus.
    if (a.ressource !== b.ressource) return a.ressource ? -1 : 1
    const ra = rang.get(a.id) ?? Number.MAX_SAFE_INTEGER
    const rb = rang.get(b.id) ?? Number.MAX_SAFE_INTEGER
    if (ra !== rb) return ra - rb
    if ((a.numero ?? 0) !== (b.numero ?? 0)) return (a.numero ?? 0) - (b.numero ?? 0)
    return a.id.localeCompare(b.id, 'fr')
  })
}

export const questions: Question[] = construire()

/** Fiches d'examen, sans les documents d'index. */
export const fiches: Question[] = questions.filter((q) => !q.ressource)

/** Documents d'introduction : mode d'emploi, alertes de vérification. */
export const ressources: Question[] = questions.filter((q) => q.ressource)

const parSlug = new Map(questions.map((q) => [q.slug, q]))

export function getQuestion(slug: string): Question | undefined {
  return parSlug.get(slug)
}

/** Groupes non vides, dans l'ordre de lecture. */
export const groupes: Groupe[] = (() => {
  const carte = new Map<string, Groupe>()
  for (const q of fiches) {
    const existant = carte.get(q.groupeId)
    if (existant) existant.questions.push(q)
    else carte.set(q.groupeId, { id: q.groupeId, libelle: q.groupe, questions: [q] })
  }
  return [...carte.values()]
})()

/* --------------------------------------------------- Résolution des renvois */

/** `Q06_Du_SWOT_a_la_recommandation` → la fiche, quelle que soit la casse. */
const parCleRenvoi = new Map<string, Question>()
for (const q of questions) parCleRenvoi.set(cleRenvoi(q.id), q)

function cleRenvoi(brut: string): string {
  return normaliser(brut.replace(/\.md$/i, '')).replace(/[^a-z0-9]/g, '')
}

export function resoudreRenvoi(cible: string): { slug: string; libelle: string } | null {
  const q = parCleRenvoi.get(cleRenvoi(cible))
  return q ? { slug: q.slug, libelle: q.titre } : null
}

/** Renvois `[[…]]` du corpus qui ne correspondent à aucun fichier présent. */
export function renvoisNonResolus(): { source: string; cible: string }[] {
  const manquants: { source: string; cible: string }[] = []
  for (const q of questions) {
    for (const m of q.source.matchAll(/\[\[([^\]\n]+)\]\]/g)) {
      // `[[cible|libellé]]`, et sa variante échappée `[[cible\|libellé]]` que
      // le corpus emploie à l'intérieur des tableaux : seule la cible compte.
      const cible = (m[1] as string).split('|')[0]!.replace(/\\$/, '').trim()
      if (!parCleRenvoi.has(cleRenvoi(cible))) manquants.push({ source: q.id, cible })
    }
  }
  return manquants
}

/* ------------------------------------------------------- Analyse à la demande */

const cacheBlocs = new Map<string, Bloc[]>()

/** Analyse complète d'une fiche, mémorisée : une fiche n'est analysée qu'une fois. */
export function blocsDe(question: Question): Bloc[] {
  const enCache = cacheBlocs.get(question.id)
  if (enCache) return enCache
  const blocs = analyserMarkdown(question.source, {
    resoudreRenvoi,
    prefixeAncre: question.slug,
  })
  cacheBlocs.set(question.id, blocs)
  return blocs
}

/* ------------------------------------------------------------- Recherche */

const cacheRecherche = new Map<string, string>()

/** Texte normalisé d'une fiche : titre, numéro, tags, groupe et contenu. */
function botteDeFoin(q: Question): string {
  const enCache = cacheRecherche.get(q.id)
  if (enCache !== undefined) return enCache
  const texte = normaliser(
    [q.reference ?? '', q.titre, q.h1, q.groupe, q.tags.join(' '), q.source].join('\n'),
  )
  cacheRecherche.set(q.id, texte)
  return texte
}

/** Titre, numéro, thème et tags : ce sur quoi une correspondance vaut plus. */
const cacheEntete = new Map<string, string>()

function entete(q: Question): string {
  const enCache = cacheEntete.get(q.id)
  if (enCache !== undefined) return enCache
  const texte = normaliser([q.reference ?? '', q.titre, q.groupe, q.tags.join(' ')].join('\n'))
  cacheEntete.set(q.id, texte)
  return texte
}

/**
 * Recherche locale : chaque mot saisi doit apparaître quelque part dans la
 * fiche. Accents et casse sont ignorés, et `Q15` trouve bien la question 15.
 *
 * Les fiches dont le titre ou le thème répond à la requête passent devant
 * celles qui ne font que mentionner les mots dans leur développement — sinon
 * chercher « chaîne de valeur » noierait la fiche qui porte ce titre.
 */
export function rechercherQuestions(liste: Question[], requete: string): Question[] {
  const mots = normaliser(requete).split(/\s+/).filter(Boolean)
  if (mots.length === 0) return liste

  const retenues: { question: Question; score: number; rang: number }[] = []

  liste.forEach((question, rang) => {
    if (!mots.every((mot) => botteDeFoin(question).includes(mot))) return
    const dansEntete = entete(question)
    const score = mots.every((mot) => dansEntete.includes(mot)) ? 2 : mots.some((mot) => dansEntete.includes(mot)) ? 1 : 0
    retenues.push({ question, score, rang })
  })

  // À score égal, on conserve l'ordre de lecture du corpus.
  return retenues.sort((a, b) => b.score - a.score || a.rang - b.rang).map((r) => r.question)
}
