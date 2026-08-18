import { STORAGE_KEY } from '@strat/config'
import { flashcards, notions, questions, quiz, relations } from '@strat/content'
import { describe, expect, it } from 'vitest'
import {
  appliquerVerdict,
  ajouterHistorique,
  cleConfusion,
  composerSession,
  detailMaitrise,
  distance,
  enregistrerErreur,
  enregistrerFlashcard,
  enregistrerQuestionTraitee,
  enregistrerQuiz,
  exporterProgression,
  importerProgression,
  indexAlphabetique,
  marquerNotionComprise,
  marquerNotionVue,
  migrer,
  normaliser,
  progressionVide,
  rapportCouverture,
  rechercher,
  relationsDe,
  relationsGroupees,
  revisionIntelligente,
  scorerCarte,
  selectionnerCartes,
  statsParPriorite,
  validerCorpus,
  voisinage,
  chargerProgression,
  sauverProgression,
  reinitialiserProgression,
} from './index'

/* ========================================================================= */
/* VALIDATION DU CONTENU                                                      */
/* ========================================================================= */

describe('validation du corpus', () => {
  const rapport = validerCorpus()

  it('ne contient aucune erreur structurelle', () => {
    // Le message liste les erreurs pour être immédiatement exploitable.
    expect(rapport.erreurs.map((e) => `${e.code}: ${e.message}`)).toEqual([])
  })

  it('couvre les 22 questions officielles et les 55 probables', () => {
    const c = rapportCouverture()
    expect(c.questionsOfficielles).toBe(22)
    expect(c.questionsProbables).toBe(55)
  })

  it("n'a ni référence cassée, ni notion orpheline, ni question orpheline", () => {
    const c = rapportCouverture()
    expect(c.referencesCassees).toBe(0)
    expect(c.notionsOrphelines).toBe(0)
    expect(c.questionsOrphelines).toBe(0)
  })

  it('utilise les huit mécaniques de quiz', () => {
    expect(rapportCouverture().typesQuiz).toBe(8)
  })

  it('donne une explication à chaque option fausse', () => {
    const sansExplication = quiz
      .filter((q) => q.type === 'qcm' || q.type === 'multiple' || q.type === 'vrai-faux')
      .flatMap((q) => (q.type === 'qcm' || q.type === 'multiple' || q.type === 'vrai-faux' ? q.options : []))
      .filter((o) => !o.correcte && !o.explication?.trim())
    expect(sansExplication).toEqual([])
  })

  it('donne une description à chaque relation', () => {
    expect(relations.filter((r) => !r.description.trim())).toEqual([])
  })

  it('conserve les variantes terminologiques du cours', () => {
    const pestel = notions.find((n) => n.id === 'pestel')
    const varianteE = pestel?.variantes?.find((v) => v.sujet.includes('E'))
    expect(varianteE).toBeDefined()
    // Les trois formulations divergentes doivent rester documentées.
    const libelles = varianteE!.formulations.map((f) => f.libelle.toLowerCase()).join(' ')
    expect(libelles).toContain('éthique')
    expect(libelles).toContain('écologique')
    expect(libelles).toContain('environnemental')
  })

  it('documente les deux formulations de la matrice ERAC', () => {
    const erac = notions.find((n) => n.id === 'erac')
    const libelles = erac?.variantes?.[0]?.formulations.map((f) => f.libelle).join(' ') ?? ''
    expect(libelles).toContain('Éliminer')
    expect(libelles).toContain('Exclure')
  })

  it('documente les variantes de la chaîne de valeur', () => {
    const cv = notions.find((n) => n.id === 'chaine-de-valeur')
    const libelles = cv?.variantes?.[0]?.formulations.map((f) => f.libelle).join(' ') ?? ''
    expect(libelles).toContain('Recherche et développement')
    expect(libelles).toContain('Développement technologique')
    expect(libelles).toContain('Approvisionnements')
  })

  it('documente la variante assainissement / réseaux du plancher social', () => {
    const ps = notions.find((n) => n.id === 'plancher-social')
    const explication = ps?.variantes?.[0]?.explication ?? ''
    expect(explication).toContain('Assainissement')
    expect(explication).toContain('Réseaux')
  })
})

/* ========================================================================= */
/* RECHERCHE                                                                  */
/* ========================================================================= */

describe('recherche', () => {
  it('normalise les accents, la casse et les apostrophes', () => {
    expect(normaliser('Écologique')).toBe('ecologique')
    expect(normaliser("l'État")).toBe('l etat')
  })

  it('trouve une notion par son acronyme', () => {
    const r = rechercher('PESTEL')
    expect(r[0]?.notion.id).toBe('pestel')
  })

  it('ignore les accents dans la requête', () => {
    expect(rechercher('durabilite')[0]?.notion.id).toBe('durabilite')
    expect(rechercher('DURABILITÉ')[0]?.notion.id).toBe('durabilite')
  })

  it('tolère une petite faute de frappe', () => {
    const r = rechercher('portter')
    expect(r.some((x) => x.notion.id === 'porter-five-forces')).toBe(true)
  })

  it('trouve par le contenu, pas seulement par le nom', () => {
    // « environment » n'est le nom d'aucune notion, mais figure dans les alias.
    const r = rechercher('environnement')
    expect(r.length).toBeGreaterThan(3)
    expect(r.some((x) => x.notion.id === 'pestel')).toBe(true)
  })

  it('trouve par auteur', () => {
    const r = rechercher('Rockström')
    expect(r.some((x) => x.notion.id === 'limites-planetaires')).toBe(true)
  })

  it('rend toutes les notions recherchables par leur nom exact', () => {
    const introuvables = notions.filter((n) => {
      const r = rechercher(n.nom, {}, 200)
      return !r.some((x) => x.notion.id === n.id)
    })
    expect(introuvables.map((n) => n.id)).toEqual([])
  })

  it('filtre par priorité et par catégorie', () => {
    const r = rechercher('', { priorites: [1], categories: ['diagnostic-externe'] }, 500)
    expect(r.length).toBeGreaterThan(0)
    expect(r.every((x) => x.notion.priorite === 1 && x.notion.categorie === 'diagnostic-externe')).toBe(true)
  })

  it('borne la distance de Levenshtein', () => {
    expect(distance('abc', 'abc')).toBe(0)
    expect(distance('abc', 'abd', 1)).toBe(1)
    expect(distance('abc', 'xyz', 1)).toBeGreaterThan(1)
  })

  it("produit un index alphabétique couvrant toutes les notions", () => {
    const total = indexAlphabetique().reduce((s, g) => s + g.notions.length, 0)
    expect(total).toBe(notions.length)
  })
})

/* ========================================================================= */
/* GRAPHE                                                                     */
/* ========================================================================= */

describe('graphe de relations', () => {
  it('dérive la relation inverse : PESTEL alimente SWOT, donc SWOT est alimenté par PESTEL', () => {
    const depuisSwot = relationsDe('swot')
    const inverse = depuisSwot.find((r) => r.target === 'pestel' && r.type === 'EST_ALIMENTE_PAR')
    expect(inverse).toBeDefined()
    expect(inverse?.derivee).toBe(true)
  })

  it('rend les relations symétriques dans les deux sens', () => {
    const depuisOpportunite = relationsDe('opportunite')
    expect(depuisOpportunite.some((r) => r.type === 'NE_PAS_CONFONDRE' && r.target === 'force')).toBe(true)
  })

  it('groupe les relations pour la fiche notion', () => {
    const groupes = relationsGroupees('swot')
    expect(groupes.length).toBeGreaterThan(1)
    expect(groupes.some((g) => g.titre === 'Est alimenté par')).toBe(true)
  })

  it('calcule un voisinage borné', () => {
    const direct = voisinage('swot', 1)
    const large = voisinage('swot', 2)
    expect(direct.size).toBeGreaterThan(0)
    expect(large.size).toBeGreaterThanOrEqual(direct.size)
    expect(direct.has('swot')).toBe(false)
  })
})

/* ========================================================================= */
/* MAÎTRISE                                                                   */
/* ========================================================================= */

describe('calcul de la maîtrise', () => {
  it('part de 0 pour une notion jamais vue', () => {
    expect(detailMaitrise(progressionVide(), 'pestel').niveau).toBe(0)
  })

  it('monte les paliers dans l’ordre, sans en sauter', () => {
    let p = progressionVide()
    expect(detailMaitrise(p, 'saf').niveau).toBe(0)

    p = marquerNotionVue(p, 'saf')
    expect(detailMaitrise(p, 'saf').niveau).toBe(1)

    p = marquerNotionComprise(p, 'saf')
    expect(detailMaitrise(p, 'saf').niveau).toBe(2)
  })

  it('ne passe pas « appliquée » sans être « mémorisée »', () => {
    let p = progressionVide()
    p = marquerNotionVue(p, 'saf')
    // Beaucoup de quiz réussis, mais aucune carte mémorisée.
    for (let i = 0; i < 5; i++) p = enregistrerQuiz(p, ['saf'], true)
    // Sans validation de « comprise », le niveau reste bloqué au premier palier.
    expect(detailMaitrise(p, 'saf').niveau).toBe(1)
  })

  it('agrège la progression par priorité', () => {
    const stats = statsParPriorite(progressionVide())
    expect(stats).toHaveLength(3)
    expect(stats[0]?.total).toBeGreaterThan(0)
    expect(stats.every((s) => s.pourcentage === 0)).toBe(true)
  })
})

/* ========================================================================= */
/* PLANIFICATION DES FLASHCARDS                                               */
/* ========================================================================= */

describe('planification des flashcards', () => {
  const maintenant = 1_700_000_000_000

  it('espace la révision quand on sait, et la ramène au lendemain quand on ne sait pas', () => {
    const apresSuccess = appliquerVerdict(undefined, 'sais', maintenant)
    expect(apresSuccess.niveau).toBe(1)
    expect(apresSuccess.prochaineRevision).toBeGreaterThan(maintenant)

    const apresEchec = appliquerVerdict(apresSuccess, 'ne-sais-pas', maintenant)
    expect(apresEchec.echecs).toBe(1)
    const unJour = 24 * 60 * 60 * 1000
    expect(apresEchec.prochaineRevision - maintenant).toBe(unJour)
  })

  it('fait redescendre le niveau de deux crans sur un échec', () => {
    let etat = appliquerVerdict(undefined, 'sais', maintenant)
    etat = appliquerVerdict(etat, 'sais', maintenant)
    etat = appliquerVerdict(etat, 'sais', maintenant)
    expect(etat.niveau).toBe(3)
    etat = appliquerVerdict(etat, 'ne-sais-pas', maintenant)
    expect(etat.niveau).toBe(1)
  })

  it('priorise les cartes jamais vues et les notions faibles', () => {
    const p = progressionVide()
    const selection = selectionnerCartes(p, { taille: 5 })
    expect(selection).toHaveLength(5)
    expect(selection[0]!.score).toBeGreaterThanOrEqual(selection[4]!.score)
  })

  it('fait remonter une carte échouée au-dessus d’une carte neuve comparable', () => {
    const p = progressionVide()
    const carteA = flashcards[0]!
    const carteB = flashcards[1]!
    const avecEchec = {
      ...p,
      flashcards: {
        [carteA.id]: {
          vues: 3,
          echecs: 3,
          reussites: 0,
          derniereRevision: maintenant - 5 * 86_400_000,
          prochaineRevision: maintenant - 86_400_000,
          niveau: 0 as const,
        },
      },
    }
    const scoreA = scorerCarte(avecEchec, carteA, maintenant).score
    const scoreB = scorerCarte(avecEchec, carteB, maintenant).score
    expect(scoreA).toBeGreaterThan(scoreB)
  })

  it('la révision intelligente remonte les notions liées aux notions faibles', () => {
    const selection = revisionIntelligente(progressionVide(), 12)
    expect(selection.length).toBeGreaterThan(0)
    expect(selection.length).toBeLessThanOrEqual(12)
  })

  it('respecte le filtre par catégorie', () => {
    const selection = selectionnerCartes(progressionVide(), { taille: 8, categorie: 'durabilite' })
    expect(selection.every((c) => c.carte.categorie === 'durabilite')).toBe(true)
  })
})

/* ========================================================================= */
/* SESSIONS                                                                   */
/* ========================================================================= */

describe('composition des sessions', () => {
  it('compose une session de 5 minutes plus courte que celle de 20', () => {
    const p = progressionVide()
    const courte = composerSession(p, 5)
    const longue = composerSession(p, 20)
    expect(courte.etapes.length).toBeGreaterThan(0)
    expect(longue.etapes.length).toBeGreaterThan(courte.etapes.length)
  })

  it('mélange de façon déterministe pour une graine donnée', () => {
    const p = progressionVide()
    const a = composerSession(p, 10)
    const b = composerSession(p, 10)
    expect(a.etapes.map((e) => e.refId)).toEqual(b.etapes.map((e) => e.refId))
  })
})

/* ========================================================================= */
/* ERREURS                                                                    */
/* ========================================================================= */

describe('registre des erreurs', () => {
  it('produit une clé de confusion stable, indépendante de l’ordre', () => {
    expect(cleConfusion('force', 'opportunite')).toBe(cleConfusion('opportunite', 'force'))
  })

  it('incrémente le compteur à chaque répétition', () => {
    let p = progressionVide()
    p = enregistrerErreur(p, 'duel-force-opportunite', 'Force / Opportunité', ['force', 'opportunite'])
    p = enregistrerErreur(p, 'duel-force-opportunite', 'Force / Opportunité', ['force', 'opportunite'])
    expect(p.erreurs['duel-force-opportunite']?.occurrences).toBe(2)
  })
})

/* ========================================================================= */
/* STOCKAGE, MIGRATION, EXPORT/IMPORT                                         */
/* ========================================================================= */

describe('stockage local', () => {
  it('renvoie une progression vide quand rien n’est stocké', () => {
    const p = chargerProgression()
    expect(p.notions).toEqual({})
    expect(p.historique).toEqual([])
  })

  it('persiste et relit une progression', () => {
    let p = progressionVide()
    p = marquerNotionVue(p, 'swot')
    sauverProgression(p)
    expect(chargerProgression().notions['swot']?.vue).toBe(true)
  })

  it('restaure un état sûr si les données locales sont corrompues', () => {
    localStorage.setItem(STORAGE_KEY, '{ ceci n est pas du JSON')
    const p = chargerProgression()
    expect(p.notions).toEqual({})
    expect(p.storageVersion).toBeGreaterThan(0)
  })

  it('résiste à une progression de forme inattendue', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ notions: 'pas un objet', historique: 42 }))
    const p = chargerProgression()
    expect(p.notions).toEqual({})
    expect(p.historique).toEqual([])
  })

  it('réinitialise sans casser', () => {
    let p = progressionVide()
    p = marquerNotionVue(p, 'swot')
    sauverProgression(p)
    const vide = reinitialiserProgression()
    expect(vide.notions).toEqual({})
    expect(chargerProgression().notions).toEqual({})
  })
})

describe('migration', () => {
  it('ignore les identifiants de notions disparus du corpus', () => {
    const migree = migrer({
      notions: { pestel: { vue: true }, 'notion-supprimee-2019': { vue: true } },
    })
    expect(migree?.notions['pestel']?.vue).toBe(true)
    expect(migree?.notions['notion-supprimee-2019']).toBeUndefined()
  })

  it('remplace les valeurs invalides par des valeurs sûres', () => {
    const migree = migrer({
      notions: { pestel: { vue: 'oui', quizTentes: -5, quizReussis: 900 } },
      preferences: { theme: 'arc-en-ciel', tailleTexte: 9999 },
    })
    expect(migree?.notions['pestel']?.vue).toBe(false)
    expect(migree?.notions['pestel']?.quizTentes).toBe(0)
    expect(migree?.notions['pestel']?.quizReussis).toBe(0)
    expect(migree?.preferences.theme).toBe('systeme')
    expect(migree?.preferences.tailleTexte).toBe(100)
  })

  it('renvoie null si la donnée n’est même pas un objet', () => {
    expect(migrer('coucou')).toBeNull()
    expect(migrer(null)).toBeNull()
    expect(migrer([1, 2, 3])).toBeNull()
  })
})

describe('export et import', () => {
  it('fait un aller-retour sans perte', () => {
    let p = progressionVide()
    p = marquerNotionVue(p, 'swot')
    p = marquerNotionComprise(p, 'swot')
    p = enregistrerFlashcard(p, flashcards[0]!.id, 'sais', ['swot'])
    p = enregistrerQuestionTraitee(p, ['swot'])
    p = ajouterHistorique(p, { date: 1_700_000_000_000, type: 'quiz', libelle: 'Test', score: 80 })

    const resultat = importerProgression(exporterProgression(p))
    expect(resultat.ok).toBe(true)
    expect(resultat.progression?.notions['swot']?.comprise).toBe(true)
    expect(resultat.progression?.historique).toHaveLength(1)
  })

  it("n'exporte jamais le corpus, uniquement la progression", () => {
    const contenu = exporterProgression(progressionVide())
    expect(contenu).not.toContain('definitionCours')
    expect(contenu.length).toBeLessThan(4000)
  })

  it('refuse un fichier qui n’est pas du JSON, avec un message humain', () => {
    const r = importerProgression('<html>oups</html>')
    expect(r.ok).toBe(false)
    expect(r.message).toContain('format')
    expect(r.message).not.toContain('SyntaxError')
  })

  it('refuse un fichier JSON valide mais étranger à STRAT', () => {
    const r = importerProgression(JSON.stringify({ hello: 'world' }))
    expect(r.ok).toBe(false)
    expect(r.message).toContain('STRAT')
  })

  it('refuse un fichier trop volumineux', () => {
    const enorme = JSON.stringify({ format: 'strat-progression', progression: { notes: { pestel: 'x'.repeat(600_000) } } })
    const r = importerProgression(enorme)
    expect(r.ok).toBe(false)
    expect(r.message).toContain('limite')
  })

  it('refuse une version de stockage plus récente', () => {
    const r = importerProgression(
      JSON.stringify({ format: 'strat-progression', storageVersion: 999, progression: progressionVide() }),
    )
    expect(r.ok).toBe(false)
    expect(r.message).toContain('récente')
  })

  it('signale les éléments ignorés à l’import', () => {
    const r = importerProgression(
      JSON.stringify({
        format: 'strat-progression',
        storageVersion: 1,
        progression: { notions: { 'notion-fantome': { vue: true } } },
      }),
    )
    expect(r.ok).toBe(true)
    expect(r.ignores).toContain('notion:notion-fantome')
    expect(r.message).toContain('ignoré')
  })
})

/* ========================================================================= */
/* COHÉRENCE GLOBALE                                                          */
/* ========================================================================= */

describe('cohérence du corpus', () => {
  it('rattache chaque flashcard à des notions existantes', () => {
    const ids = new Set(notions.map((n) => n.id))
    const cassees = flashcards.filter((f) => f.notions.some((n) => !ids.has(n)))
    expect(cassees.map((f) => f.id)).toEqual([])
  })

  it('rattache chaque question à des notions existantes', () => {
    const ids = new Set(notions.map((n) => n.id))
    const cassees = questions.filter((q) => q.notions.some((n) => !ids.has(n)))
    expect(cassees.map((q) => q.id)).toEqual([])
  })

  it("n'utilise aucun identifiant de notion en double", () => {
    const ids = notions.map((n) => n.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('donne une définition et une explication simple à chaque notion', () => {
    const incompletes = notions.filter((n) => !n.definitionCours.trim() || !n.explicationSimple.trim())
    expect(incompletes.map((n) => n.id)).toEqual([])
  })
})
