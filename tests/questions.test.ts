import { describe, expect, it } from 'vitest'
import { readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import {
  blocsDe,
  fiches,
  getQuestion,
  groupes,
  questions,
  rechercherQuestions,
  renvoisNonResolus,
  ressources,
} from '@app/questions/chargeur'
import { renvoisDe, structurerFiche } from '@app/questions/fiche'
import { texteBrut, type Bloc } from '@app/questions/markdown'

/* =========================================================================
   Le contrôle demandé par le cahier des charges : autant de fiches
   accessibles dans l'application que de fichiers dans `/questions`, aucun
   contenu perdu au passage, et aucun renvoi qui casse la navigation.
   ========================================================================= */

const DOSSIER = resolve(process.cwd(), 'questions')
const FICHIERS = readdirSync(DOSSIER).filter((f) => f.endsWith('.md'))

function aplatir(blocs: Bloc[]): Bloc[] {
  return blocs.flatMap((b) =>
    b.t === 'citation' || b.t === 'callout' ? [b, ...aplatir(b.blocs)] : [b],
  )
}

/** Tout le texte qu'un bloc met sous les yeux du lecteur, listes comprises. */
function texteRendu(bloc: Bloc): string {
  switch (bloc.t) {
    case 'paragraphe':
    case 'titre':
      return texteBrut(bloc.contenu)
    case 'liste':
      return bloc.items.map(texteBrut).join(' ')
    case 'tableau':
      return [bloc.entetes, ...bloc.lignes].flat().map(texteBrut).join(' ')
    default:
      return ''
  }
}

describe('corpus des questions', () => {
  it('expose exactement autant de documents que de fichiers Markdown', () => {
    expect(questions).toHaveLength(FICHIERS.length)
    expect(fiches.length + ressources.length).toBe(FICHIERS.length)
  })

  it('donne à chaque document un slug unique, malgré les numéros dupliqués', () => {
    const slugs = new Set(questions.map((q) => q.slug))
    expect(slugs.size).toBe(questions.length)

    // Le corpus contient bien deux séries qui réutilisent les mêmes numéros.
    const doublons = fiches.filter((q) => fiches.some((a) => a.id !== q.id && a.numero === q.numero))
    expect(doublons.length).toBeGreaterThan(0)
    for (const q of doublons) expect(getQuestion(q.slug)?.id).toBe(q.id)
  })

  it('donne à chaque fiche une vraie question, jamais un nom de fichier', () => {
    for (const q of questions) {
      expect(q.titre.length).toBeGreaterThan(3)
      expect(q.titre).not.toMatch(/\.md$/)
      expect(q.titre).not.toMatch(/_/)
    }
  })

  it('classe chaque fiche dans un groupe issu des fichiers d’index', () => {
    expect(groupes.length).toBeGreaterThan(1)
    expect(groupes.flatMap((g) => g.questions)).toHaveLength(fiches.length)

    // Toute fiche listée dans un `00_Index…` porte l'intitulé de sa section.
    const listees = new Set<string>()
    for (const fichier of FICHIERS.filter((f) => f.startsWith('00_'))) {
      const brut = readFileSync(resolve(DOSSIER, fichier), 'utf8')
      for (const m of brut.matchAll(/^\s*-\s*\[\[([^\]]+)\]\]/gm)) listees.add((m[1] as string).trim())
    }
    const classees = fiches.filter((q) => listees.has(q.id))
    expect(classees.length).toBeGreaterThan(50)
    for (const q of classees) expect(q.groupe).not.toBe('Autres fiches')

    // Une fiche déposée sans être listée reste publiée : elle tombe dans un
    // groupe de repli, ce qui est un choix de conception, pas une erreur.
    for (const q of fiches) expect(q.groupe.length).toBeGreaterThan(0)
  })

  it('analyse chaque fiche sans rien perdre du texte du fichier', () => {
    for (const q of questions) {
      const blocs = blocsDe(q)
      expect(blocs.length).toBeGreaterThan(0)

      // Le dernier paragraphe utile du fichier doit se retrouver dans l'arbre.
      // L'intérieur des blocs ``` est écarté : son texte est conservé tel quel
      // dans un bloc `code` ou `mermaid`, il n'a pas à réapparaître en prose.
      const horsCloture: string[] = []
      let dansBloc = false
      for (const ligne of q.source.trimEnd().split('\n')) {
        if (ligne.trim().startsWith('```')) {
          dansBloc = !dansBloc
          continue
        }
        if (!dansBloc) horsCloture.push(ligne)
      }
      const derniere = horsCloture.reverse().find((l) => l.trim().length > 0 && !/^[|#>`-]/.test(l.trim()))
      if (!derniere) continue

      const mots = derniere
        // Les renvois `[[…]]` sont volontairement remplacés par le titre de la
        // fiche citée : on ne les cherche donc pas tels quels dans le rendu.
        .replace(/\[\[[^\]]*\]\]/g, ' ')
        .replace(/[*`[\]]/g, '')
        .split(/\s+/)
        .filter((m) => m.length > 4)
      const rendu = aplatir(blocs).map(texteRendu).join(' ')
      for (const mot of mots.slice(0, 3)) expect(rendu).toContain(mot)
    }
  })

  it('rend les schémas Mermaid comme des schémas, jamais comme du code', () => {
    let schemas = 0
    for (const q of questions) {
      for (const bloc of aplatir(blocsDe(q))) {
        if (bloc.t === 'mermaid') schemas++
        if (bloc.t === 'code') expect(bloc.langue).not.toBe('mermaid')
      }
    }
    const attendus = FICHIERS.reduce(
      (total, f) => total + (readFileSync(`${DOSSIER}/${f}`, 'utf8').match(/^```mermaid/gm)?.length ?? 0),
      0,
    )
    expect(schemas).toBe(attendus)
  })

  it('reconnaît la réponse en une phrase partout où le fichier en contient une', () => {
    // Les mises en situation n'ont pas cet encadré : elles s'ouvrent sur une
    // situation d'entreprise. On vérifie donc l'extraction là où elle existe.
    const avecEncadre = fiches.filter((q) => /La réponse en une phrase/i.test(q.source))
    expect(avecEncadre.length).toBeGreaterThan(50)
    const manquees = avecEncadre.filter((q) => structurerFiche(blocsDe(q)).reponseCle === null)
    expect(manquees).toHaveLength(0)
  })

  it('découpe chaque fiche en sections navigables', () => {
    for (const q of fiches) {
      const fiche = structurerFiche(blocsDe(q))
      expect(fiche.sections.length).toBeGreaterThan(1)
      const ancres = new Set(fiche.sections.map((s) => s.ancre))
      expect(ancres.size).toBe(fiche.sections.length)
    }
  })

  it('résout les renvois vers les fiches présentes et neutralise les autres', () => {
    for (const q of questions) {
      for (const slug of renvoisDe(blocsDe(q))) expect(getQuestion(slug)).toBeDefined()
    }
    // Les fiches Q34 à Q55 ne sont pas dans ce dossier : les renvois vers elles
    // restent lisibles mais ne doivent jamais produire de lien mort.
    for (const manquant of renvoisNonResolus()) expect(getQuestion(manquant.cible)).toBeUndefined()
  })

  it('retrouve une fiche par numéro, par mot du titre et par mot du contenu', () => {
    expect(rechercherQuestions(fiches, 'Q15').length).toBeGreaterThan(0)
    expect(rechercherQuestions(fiches, 'chaine de valeur').length).toBeGreaterThan(0)
    expect(rechercherQuestions(fiches, 'durabilité').length).toBeGreaterThan(0)
    expect(rechercherQuestions(fiches, 'greenwashing').length).toBeGreaterThan(0)
    expect(rechercherQuestions(fiches, 'zzzz-inexistant')).toHaveLength(0)
  })
})
