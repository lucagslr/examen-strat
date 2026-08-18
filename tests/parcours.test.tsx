import { FournisseurToasts } from '@strat/ui'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from '@app/App'
import { FournisseurRoutage } from '@app/router'
import { FournisseurFil } from '@app/state/FilContext'
import { FournisseurProgression } from '@app/state/ProgressionContext'

/**
 * TESTS DE COMPORTEMENT.
 * On teste les parcours réels demandés par le cahier des charges :
 * ouvrir une notion, naviguer par une relation, faire une flashcard, un quiz,
 * enregistrer puis revoir une erreur, traiter une question ouverte, démarrer
 * un examen, exporter et importer sa progression.
 */

function monter(route = '/') {
  window.location.hash = `#${route}`
  return render(
    <FournisseurProgression>
      <FournisseurToasts>
        <FournisseurRoutage>
          <FournisseurFil>
            <App />
          </FournisseurFil>
        </FournisseurRoutage>
      </FournisseurToasts>
    </FournisseurProgression>,
  )
}

/** Le routeur écoute `hashchange` : en test, il faut le déclencher à la main. */
async function allerA(route: string) {
  window.location.hash = `#${route}`
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

beforeEach(() => {
  window.location.hash = '#/'
})

describe('accueil', () => {
  it("répond à « qu'est-ce que je dois faire maintenant ? »", async () => {
    monter('/')
    expect(await screen.findByRole('heading', { name: /bienvenue/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '5 MIN' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /priorités examen/i })).toBeInTheDocument()
  })

  it('propose les cinq entrées de navigation, et cinq seulement', () => {
    monter('/')
    const nav = screen.getByRole('navigation', { name: /navigation principale/i })
    for (const libelle of ['Accueil', 'Notions', 'Réviser', "S'entraîner", 'Examen'])
      expect(within(nav).getByText(libelle)).toBeInTheDocument()
  })

  it("propose d'emblée des notions prioritaires dans « À revoir »", async () => {
    monter('/')
    await screen.findByRole('heading', { name: /à revoir/i })
    // Sans historique, la section se remplit des notions de priorité 1 jamais vues,
    // plutôt que d'afficher un état vide inutile.
    expect(screen.getAllByText(/priorité examen/i).length).toBeGreaterThan(0)
  })
})

describe('notions', () => {
  it('ouvre une fiche notion et affiche la définition du cours', async () => {
    monter('/notions/pestel')
    expect(await screen.findByRole('heading', { name: 'PESTEL', level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/Appréhender l'environnement à l'aide de six facteurs/i)).toBeInTheDocument()
  })

  it('affiche les variantes terminologiques sans les uniformiser', async () => {
    monter('/notions/pestel')
    await screen.findByRole('heading', { name: 'PESTEL', level: 1 })
    expect(screen.getByRole('heading', { name: /variantes dans les supports/i })).toBeInTheDocument()
    expect(screen.getAllByText(/environnemental et éthique/i).length).toBeGreaterThan(0)
  })

  it('permet de naviguer par une relation, et construit le fil conceptuel', async () => {
    const utilisateur = userEvent.setup()
    monter('/notions/pestel')
    await screen.findByRole('heading', { name: 'PESTEL', level: 1 })

    await utilisateur.click(screen.getByRole('tab', { name: 'Relier' }))
    const lienSwot = await screen.findAllByRole('link', { name: /SWOT/ })
    await utilisateur.click(lienSwot[0]!)
    await allerA(new URL(lienSwot[0]!.getAttribute('href')!, 'http://x/').hash.slice(1))

    await waitFor(() => expect(screen.getByRole('heading', { name: 'SWOT', level: 1 })).toBeInTheDocument())
    // Le fil conserve le chemin parcouru : PESTEL › SWOT.
    const fil = screen.getByRole('navigation', { name: /chemin parcouru/i })
    expect(within(fil).getByRole('button', { name: 'PESTEL' })).toBeInTheDocument()
  })

  it('trouve une notion par la recherche, en ignorant les accents', async () => {
    const utilisateur = userEvent.setup()
    monter('/notions')
    const champ = await screen.findByRole('searchbox')
    await utilisateur.type(champ, 'durabilite')
    await waitFor(() => expect(screen.getAllByRole('link', { name: /Durabilité/ }).length).toBeGreaterThan(0))
  })

  it('affiche un état vide utile quand la recherche ne donne rien', async () => {
    const utilisateur = userEvent.setup()
    monter('/notions')
    const champ = await screen.findByRole('searchbox')
    await utilisateur.type(champ, 'zzzzqqqq')
    expect(await screen.findByText(/Aucune notion ne correspond/i)).toBeInTheDocument()
  })

  it('marque la notion comme comprise et fait monter le niveau de maîtrise', async () => {
    const utilisateur = userEvent.setup()
    monter('/notions/swot')
    await screen.findByRole('heading', { name: 'SWOT', level: 1 })

    await utilisateur.click(screen.getByRole('button', { name: /je la comprends/i }))
    expect(await screen.findByText(/Notion marquée comme comprise/i)).toBeInTheDocument()
  })
})

describe('révision', () => {
  it('retourne une flashcard et enregistre le verdict au clavier', async () => {
    const utilisateur = userEvent.setup()
    monter('/review/flashcards')

    const carte = await screen.findByRole('button', { name: /carte face question/i })
    expect(carte).toBeInTheDocument()

    // Espace retourne la carte, puis 3 = « je sais ».
    await utilisateur.keyboard(' ')
    await waitFor(() => expect(screen.getByRole('button', { name: /réponse affichée/i })).toBeInTheDocument())
    await utilisateur.keyboard('3')

    await waitFor(() => expect(screen.getByRole('button', { name: /carte face question/i })).toBeInTheDocument())
  })

  it("affiche un état vide explicite quand aucune erreur n'est enregistrée", async () => {
    monter('/review/mistakes')
    expect(await screen.findByText(/Aucune erreur enregistrée/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /commencer un quiz/i })).toBeInTheDocument()
  })
})

describe('entraînement', () => {
  it('corrige un quiz en expliquant pourquoi une réponse est fausse', async () => {
    const utilisateur = userEvent.setup()
    monter('/training/quiz?id=qz-swot-nature')

    await screen.findByText(/Le SWOT est avant tout/i)
    // On choisit délibérément une mauvaise réponse.
    await utilisateur.click(screen.getByRole('button', { name: /outil de collecte d'information/i }))
    await utilisateur.click(screen.getByRole('button', { name: /^valider$/i }))

    expect(await screen.findByText(/Le SWOT n'a AUCUN contenu propre/i)).toBeInTheDocument()
    expect(screen.getByText(/À revoir/i)).toBeInTheDocument()
  })

  it("enregistre l'erreur commise, et la retrouve dans « Mes erreurs »", async () => {
    const utilisateur = userEvent.setup()
    monter('/training/quiz?id=qz-swot-nature')

    await screen.findByText(/Le SWOT est avant tout/i)
    await utilisateur.click(screen.getByRole('button', { name: /outil de collecte d'information/i }))
    await utilisateur.click(screen.getByRole('button', { name: /^valider$/i }))
    await screen.findByText(/À revoir/i)

    await allerA('/review/mistakes')
    await waitFor(() => expect(screen.getByRole('heading', { name: /mes erreurs/i })).toBeInTheDocument())
    expect(screen.getByRole('button', { name: /session ciblée/i })).toBeInTheDocument()
  })

  it('guide une question ouverte étape par étape, sans montrer le corrigé', async () => {
    monter('/training/open/qo-1')
    await screen.findByText(/Quel est le verbe de consigne/i)
    // Le corrigé ne doit apparaître qu'à la dernière étape.
    expect(screen.queryByText(/Réponse de référence/i)).not.toBeInTheDocument()
  })

  it('ouvre un cas pratique dans ses quatre modes', async () => {
    monter('/training/cases/silverdigital')
    await screen.findByRole('heading', { name: /SilverDigital/i, level: 1 })
    for (const mode of ['Lire', 'Analyser', "S'entraîner", 'Corrigé'])
      expect(screen.getByRole('tab', { name: mode })).toBeInTheDocument()
  })

  it("ne montre pas le corrigé d'un cas avant de l'avoir demandé", async () => {
    const utilisateur = userEvent.setup()
    monter('/training/cases/oncle-hansi')
    await screen.findByRole('heading', { name: /Oncle Hansi/i, level: 1 })

    await utilisateur.click(screen.getByRole('tab', { name: "S'entraîner" }))
    // La première question porte sur les segments : son corrigé ne doit pas être visible.
    expect(screen.queryByText(/proposition de valeur unique pour des clients différents/i)).not.toBeInTheDocument()
    await utilisateur.click(await screen.findByRole('button', { name: /voir le corrigé/i }))
    expect(await screen.findByText(/proposition de valeur unique pour des clients différents/i)).toBeInTheDocument()
  })
})

describe('examen', () => {
  it('propose le format 10 + 10 du cours', async () => {
    monter('/exam')
    await screen.findByRole('heading', { name: /simulation d'examen/i })
    expect(screen.getAllByText('10:00')).toHaveLength(2)
    expect(screen.getAllByText(/préparation/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/passage oral/i).length).toBeGreaterThan(0)
  })

  it("démarre la préparation sans révéler la réponse ni les notions attendues", async () => {
    const utilisateur = userEvent.setup()
    monter('/exam')
    await screen.findByRole('heading', { name: /simulation d'examen/i })

    await utilisateur.click(screen.getByRole('button', { name: /démarrer la simulation/i }))
    await screen.findByText(/Question tirée/i)

    expect(screen.getByText(/Bloc-notes/i)).toBeInTheDocument()
    // Ni le corrigé, ni la liste des notions attendues ne sont rendus pendant la préparation.
    expect(screen.queryByRole('heading', { name: /réponse de référence/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /notions attendues/i })).not.toBeInTheDocument()
  })

  it("affiche un historique vide explicite au démarrage", async () => {
    monter('/history')
    expect(await screen.findByText(/Aucune session enregistrée/i)).toBeInTheDocument()
  })
})

describe('réglages et progression', () => {
  it('permet de changer de thème', async () => {
    const utilisateur = userEvent.setup()
    monter('/settings')
    await screen.findByRole('heading', { name: /réglages/i })

    await utilisateur.click(screen.getByRole('button', { name: 'Sombre' }))
    await waitFor(() => expect(document.documentElement.dataset.theme).toBe('sombre'))
  })

  it('demande confirmation avant de réinitialiser', async () => {
    const utilisateur = userEvent.setup()
    monter('/settings')
    await screen.findByRole('heading', { name: /réglages/i })

    await utilisateur.click(screen.getByRole('button', { name: /réinitialiser ma progression/i }))
    const dialogue = await screen.findByRole('dialog')
    expect(within(dialogue).getByText(/définitive/i)).toBeInTheDocument()
    expect(within(dialogue).getByRole('button', { name: /annuler/i })).toBeInTheDocument()
  })

  it("affiche un message humain quand l'import échoue", async () => {
    const utilisateur = userEvent.setup()
    monter('/settings')
    await screen.findByRole('heading', { name: /réglages/i })

    const champ = screen.getByLabelText(/fichier de progression à importer/i)
    const fichier = new File(['<html>pas du json</html>'], 'mauvais.json', { type: 'application/json' })
    await utilisateur.upload(champ, fichier)

    expect(await screen.findByText(/Import impossible/i)).toBeInTheDocument()
    expect(screen.getByText(/n'est pas au format attendu/i)).toBeInTheDocument()
    // Jamais de trace technique dans un message destiné à l'utilisateur.
    expect(screen.queryByText(/SyntaxError|JSON\.parse|at Object\./)).not.toBeInTheDocument()
  })
})

describe('accessibilité', () => {
  it("expose un lien d'évitement en premier élément focusable", async () => {
    const utilisateur = userEvent.setup()
    monter('/')
    await utilisateur.tab()
    expect(screen.getByRole('link', { name: /aller au contenu/i })).toHaveFocus()
  })

  it('donne un nom accessible à la navigation et au contenu principal', () => {
    monter('/')
    expect(screen.getByRole('navigation', { name: /navigation principale/i })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('permet de changer d’onglet aux flèches du clavier', async () => {
    const utilisateur = userEvent.setup()
    monter('/notions/pestel')
    await screen.findByRole('heading', { name: 'PESTEL', level: 1 })

    const ongletComprendre = screen.getByRole('tab', { name: 'Comprendre' })
    ongletComprendre.focus()
    await utilisateur.keyboard('{ArrowRight}')
    await waitFor(() => expect(screen.getByRole('tab', { name: 'Retenir' })).toHaveAttribute('aria-selected', 'true'))
  })

  it('annonce le nombre de résultats de recherche', async () => {
    monter('/notions')
    const statuts = await screen.findAllByRole('status')
    expect(statuts.some((s) => /notions?/i.test(s.textContent ?? ''))).toBe(true)
  })

  it("n'utilise jamais la couleur seule pour la priorité", async () => {
    monter('/notions/pestel')
    await screen.findByRole('heading', { name: 'PESTEL', level: 1 })
    // Le libellé textuel accompagne toujours la pastille colorée.
    expect(screen.getByText(/Priorité 1 — indispensable/i)).toBeInTheDocument()
  })
})

describe('routes inconnues', () => {
  it('affiche une page 404 utile plutôt qu’un écran blanc', async () => {
    monter('/route/qui/nexiste/pas')
    expect(await screen.findByText(/Cette page n'existe pas/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /retour à l'accueil/i })).toBeInTheDocument()
  })

  it('affiche un message clair pour une notion inconnue', async () => {
    monter('/notions/notion-qui-nexiste-pas')
    expect(await screen.findByText(/Cette notion n'existe pas/i)).toBeInTheDocument()
  })
})
