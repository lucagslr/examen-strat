import { MAX_IMPORT_BYTES } from '@strat/config'
import { CONTENT_VERSION, cas, flashcards, notions, questions, quiz, relations } from '@strat/content'
import {
  exporterProgression,
  importerProgression,
  majPreferences,
  nomFichierExport,
  statsGlobales,
} from '@strat/domain'
import { Bouton, Carte, ControleSegmente, Dialogue, Encadre, useToast } from '@strat/ui'
import { useRef, useState } from 'react'
import { EntetePage, Mesure, Section } from '@app/components/Communs'
import { useProgression } from '@app/state/ProgressionContext'

/**
 * Lit un fichier texte. `Blob.text()` n'existe pas partout (Safari ancien,
 * certains environnements de test) : on retombe alors sur FileReader.
 */
function lireFichier(fichier: File): Promise<string> {
  if (typeof fichier.text === 'function') return fichier.text()
  return new Promise((resoudre, rejeter) => {
    const lecteur = new FileReader()
    lecteur.onload = () => resoudre(String(lecteur.result ?? ''))
    lecteur.onerror = () => rejeter(lecteur.error ?? new Error('lecture impossible'))
    lecteur.readAsText(fichier)
  })
}

export function Reglages() {
  const { progression, modifier, remettreAZero, remplacer } = useProgression()
  const notifier = useToast()
  const refFichier = useRef<HTMLInputElement>(null)
  const [dialogueReset, setDialogueReset] = useState(false)
  const [messageImport, setMessageImport] = useState<{ ok: boolean; texte: string } | null>(null)

  const stats = statsGlobales(progression)

  /** Export : on ne passe par aucun service, uniquement un objet URL local. */
  const exporter = () => {
    try {
      const contenu = exporterProgression(progression)
      const blob = new Blob([contenu], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const lien = document.createElement('a')
      lien.href = url
      lien.download = nomFichierExport()
      document.body.appendChild(lien)
      lien.click()
      document.body.removeChild(lien)
      URL.revokeObjectURL(url)
      notifier('Progression exportée.', 'succes')
    } catch {
      notifier("L'export n'a pas pu être généré par ce navigateur.", 'erreur')
    }
  }

  const importer = async (fichier: File) => {
    setMessageImport(null)
    if (fichier.size > MAX_IMPORT_BYTES) {
      setMessageImport({
        ok: false,
        texte: `Ce fichier fait ${Math.round(fichier.size / 1024)} Ko, au-delà de la limite de ${Math.round(
          MAX_IMPORT_BYTES / 1024,
        )} Ko. Une progression STRAT est bien plus légère.`,
      })
      return
    }
    let contenu: string
    try {
      contenu = await lireFichier(fichier)
    } catch {
      setMessageImport({ ok: false, texte: 'Le fichier n’a pas pu être lu par ce navigateur.' })
      return
    }
    const resultat = importerProgression(contenu)
    setMessageImport({ ok: resultat.ok, texte: resultat.message })
    if (resultat.ok && resultat.progression) {
      remplacer(resultat.progression)
      notifier('Progression importée.', 'succes')
    }
  }

  return (
    <>
      <EntetePage titre="Réglages" intro="Affichage, accessibilité, sauvegarde de ta progression." />

      {/* ---------------------------------------------------- Affichage ---- */}
      <Section titre="Affichage">
        <Carte variante="plate">
          <p className="libelle">Thème</p>
          <ControleSegmente
            etiquette="Thème de l'application"
            valeur={progression.preferences.theme}
            onChange={(v) => modifier((p) => majPreferences(p, { theme: v }))}
            options={[
              { valeur: 'systeme', libelle: 'Système' },
              { valeur: 'clair', libelle: 'Clair' },
              { valeur: 'sombre', libelle: 'Sombre' },
            ]}
          />
        </Carte>

        <Carte variante="plate" style={{ marginTop: 'var(--e-3)' }}>
          <label className="libelle" htmlFor="taille-texte">
            Taille du texte — {progression.preferences.tailleTexte} %
          </label>
          <input
            id="taille-texte"
            type="range"
            min={80}
            max={160}
            step={10}
            value={progression.preferences.tailleTexte}
            onChange={(e) => modifier((p) => majPreferences(p, { tailleTexte: Number(e.target.value) }))}
            style={{ width: '100%', accentColor: 'var(--c-accent)', minHeight: 'var(--cible-tactile)' }}
          />
          <p className="legende sans-marge">
            S'ajoute au zoom du navigateur. Le texte reste entièrement redimensionnable sans perte de fonctionnalité.
          </p>
        </Carte>

        <Carte variante="plate" style={{ marginTop: 'var(--e-3)' }}>
          <label className="checklist__item" htmlFor="animations-reduites">
            <input
              id="animations-reduites"
              type="checkbox"
              className="checklist__case"
              checked={progression.preferences.animationsReduites}
              onChange={(e) => modifier((p) => majPreferences(p, { animationsReduites: e.target.checked }))}
            />
            <span>
              <strong>Réduire les animations</strong>
              <span className="option__explication">
                L'application respecte déjà la préférence système « réduire les animations ». Cette case l'applique même
                si le système ne la demande pas.
              </span>
            </span>
          </label>
        </Carte>
      </Section>

      {/* ------------------------------------------------- Ma progression ---- */}
      <Section titre="Ma progression">
        <div className="grille grille--3">
          <Mesure valeur={`${stats.pourcentageGlobal} %`} libelle="Progression globale" />
          <Mesure valeur={`${stats.notionsVues}/${stats.notionsTotal}`} libelle="Notions explorées" />
          <Mesure valeur={`${stats.notionsMaitrisees}`} libelle="Notions maîtrisées" />
          <Mesure valeur={`${stats.cartesVues}/${stats.cartesTotal}`} libelle="Cartes travaillées" />
          <Mesure valeur={`${stats.erreursActives}`} libelle="Confusions repérées" />
          <Mesure valeur={`${stats.sessions}`} libelle="Sessions enregistrées" />
        </div>
      </Section>

      {/* ------------------------------------------------ Export / import ---- */}
      <Section titre="Sauvegarde">
        <Encadre ton="info" titre="Sans compte, la sauvegarde est locale">
          <p className="sans-marge">
            Effacer les données de ce navigateur effacerait ta progression. Exporte-la régulièrement : le fichier ne
            contient que ta progression, jamais le contenu du cours.
          </p>
        </Encadre>

        <div className="rangee" style={{ marginTop: 'var(--e-4)' }}>
          <Bouton variante="principal" onClick={exporter}>
            Exporter ma progression
          </Bouton>
          <Bouton onClick={() => refFichier.current?.click()}>Importer une progression</Bouton>
          <input
            ref={refFichier}
            type="file"
            accept="application/json,.json"
            className="visuellement-cache"
            aria-label="Fichier de progression à importer"
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) void importer(f)
              e.target.value = ''
            }}
          />
        </div>

        {messageImport && (
          <div style={{ marginTop: 'var(--e-3)' }}>
            <Encadre ton={messageImport.ok ? 'succes' : 'erreur'} titre={messageImport.ok ? 'Import réussi' : 'Import impossible'}>
              <p className="sans-marge">{messageImport.texte}</p>
            </Encadre>
          </div>
        )}

        <div className="rangee" style={{ marginTop: 'var(--e-4)' }}>
          <Bouton variante="danger" onClick={() => setDialogueReset(true)}>
            Réinitialiser ma progression
          </Bouton>
        </div>
      </Section>

      {/* ------------------------------------------------------- À propos ---- */}
      <Section titre="À propos">
        <Carte variante="plate">
          <p className="petit">
            STRAT est une application entièrement locale. Aucun serveur, aucune API, aucun compte, aucune télémétrie,
            aucun cookie. Tout le contenu du cours est embarqué dans la page ; ta progression ne quitte jamais ce
            navigateur.
          </p>
          <dl className="petit">
            <div className="rangee rangee--espace">
              <dt>Version du contenu</dt>
              <dd className="sans-marge">{CONTENT_VERSION}</dd>
            </div>
            <div className="rangee rangee--espace">
              <dt>Notions</dt>
              <dd className="sans-marge">{notions.length}</dd>
            </div>
            <div className="rangee rangee--espace">
              <dt>Relations</dt>
              <dd className="sans-marge">{relations.length}</dd>
            </div>
            <div className="rangee rangee--espace">
              <dt>Questions</dt>
              <dd className="sans-marge">
                {questions.filter((q) => q.origine === 'officielle').length} corrigées +{' '}
                {questions.filter((q) => q.origine === 'probable').length} probables
              </dd>
            </div>
            <div className="rangee rangee--espace">
              <dt>Flashcards · quiz · cas</dt>
              <dd className="sans-marge">
                {flashcards.length} · {quiz.length} · {cas.length}
              </dd>
            </div>
          </dl>
        </Carte>
      </Section>

      <Dialogue
        ouvert={dialogueReset}
        titre="Réinitialiser ta progression ?"
        onFermer={() => setDialogueReset(false)}
        actions={
          <>
            <Bouton onClick={() => setDialogueReset(false)}>Annuler</Bouton>
            <Bouton
              variante="danger"
              onClick={() => {
                remettreAZero()
                setDialogueReset(false)
                notifier('Progression réinitialisée.', 'succes')
              }}
            >
              Tout effacer
            </Bouton>
          </>
        }
      >
        <p className="petit">
          Cette action efface tes niveaux de maîtrise, tes flashcards, tes erreurs, ton historique et tes notes
          personnelles. Elle est définitive.
        </p>
        <p className="petit secondaire">
          Le contenu du cours n'est pas concerné : les {notions.length} notions resteront évidemment disponibles.
        </p>
        <Encadre ton="alerte" titre="Avant de continuer">
          <p className="sans-marge">Exporte ta progression si tu veux pouvoir la restaurer plus tard.</p>
        </Encadre>
      </Dialogue>
    </>
  )
}
