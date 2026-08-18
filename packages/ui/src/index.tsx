import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'

import './styles/tokens.css'
import './styles/base.css'
import './styles/components.css'

/* ========================================================================= */
/* Bouton                                                                     */
/* ========================================================================= */

export interface ProprietesBouton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: 'defaut' | 'principal' | 'discret' | 'danger'
  taille?: 'normale' | 'large'
  pleineLargeur?: boolean
  pilule?: boolean
}

export function Bouton({
  variante = 'defaut',
  taille = 'normale',
  pleineLargeur,
  pilule,
  className = '',
  type = 'button',
  children,
  ...reste
}: ProprietesBouton) {
  const classes = [
    'btn',
    variante !== 'defaut' ? `btn--${variante}` : '',
    taille === 'large' ? 'btn--large' : '',
    pleineLargeur ? 'btn--pleine-largeur' : '',
    pilule ? 'btn--pilule' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={classes} {...reste}>
      {children}
    </button>
  )
}

/* ========================================================================= */
/* Carte                                                                      */
/* ========================================================================= */

export function Carte({
  variante = 'defaut',
  className = '',
  children,
  ...reste
}: {
  variante?: 'defaut' | 'plate' | 'accent'
  className?: string
  children: ReactNode
} & React.HTMLAttributes<HTMLDivElement>) {
  const classes = ['carte', variante !== 'defaut' ? `carte--${variante}` : '', className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...reste}>
      {children}
    </div>
  )
}

/* ========================================================================= */
/* Badge                                                                      */
/* ========================================================================= */

export function Badge({
  ton = 'neutre',
  children,
  className = '',
}: {
  ton?: 'neutre' | 'p1' | 'p2' | 'p3' | 'accent' | 'succes' | 'erreur'
  children: ReactNode
  className?: string
}) {
  const classes = ['badge', ton !== 'neutre' ? `badge--${ton}` : '', className].filter(Boolean).join(' ')
  return <span className={classes}>{children}</span>
}

/**
 * Badge de priorité d'examen.
 * La couleur ne porte jamais seule l'information : le texte et les pastilles
 * suffisent à comprendre le niveau.
 */
export function BadgePriorite({ priorite }: { priorite: 1 | 2 | 3 }) {
  const libelles = { 1: 'Priorité 1 — indispensable', 2: 'Priorité 2 — important', 3: 'Priorité 3 — complément' }
  const pastilles = { 1: '●●●', 2: '●●○', 3: '●○○' }
  return (
    <Badge ton={`p${priorite}` as 'p1' | 'p2' | 'p3'}>
      <span aria-hidden="true">{pastilles[priorite]}</span>
      {libelles[priorite]}
    </Badge>
  )
}

/* ========================================================================= */
/* Progression et jauge de maîtrise                                           */
/* ========================================================================= */

export function Progression({
  valeur,
  max = 100,
  libelle,
  afficherTexte = true,
}: {
  valeur: number
  max?: number
  libelle: string
  afficherTexte?: boolean
}) {
  const pct = max === 0 ? 0 : Math.round((valeur / max) * 100)
  return (
    <div className="progression">
      <div
        className="progression__piste"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={libelle}
      >
        <div className="progression__valeur" style={{ width: `${pct}%` }} />
      </div>
      {afficherTexte && <span className="progression__texte">{pct} %</span>}
    </div>
  )
}

/** Jauge 0-5 : lisible sans couleur, chaque cran est plein ou vide. */
export function JaugeMaitrise({ niveau, libelle }: { niveau: number; libelle?: string }) {
  return (
    <span className="jauge" role="img" aria-label={libelle ?? `Niveau de maîtrise ${niveau} sur 5`}>
      {[1, 2, 3, 4, 5].map((cran) => (
        <span key={cran} className={`jauge__cran${cran <= niveau ? ' jauge__cran--plein' : ''}`} />
      ))}
    </span>
  )
}

/* ========================================================================= */
/* Onglets                                                                    */
/* ========================================================================= */

export interface Onglet {
  id: string
  libelle: string
  /** Compteur optionnel affiché en exposant. */
  compteur?: number
}

/**
 * Onglets pilotés par l'appelant. Navigation clavier complète :
 * flèches pour changer d'onglet, Début/Fin pour aller aux extrémités.
 */
export function Onglets({
  onglets,
  actif,
  onChange,
  etiquette,
}: {
  onglets: Onglet[]
  actif: string
  onChange: (id: string) => void
  etiquette: string
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([])

  const surTouche = (e: React.KeyboardEvent, index: number) => {
    const dernier = onglets.length - 1
    let cible: number | null = null
    if (e.key === 'ArrowRight') cible = index === dernier ? 0 : index + 1
    else if (e.key === 'ArrowLeft') cible = index === 0 ? dernier : index - 1
    else if (e.key === 'Home') cible = 0
    else if (e.key === 'End') cible = dernier
    if (cible === null) return
    e.preventDefault()
    const onglet = onglets[cible]
    if (onglet) {
      onChange(onglet.id)
      refs.current[cible]?.focus()
    }
  }

  return (
    <div className="onglets" role="tablist" aria-label={etiquette}>
      {onglets.map((o, i) => (
        <button
          key={o.id}
          ref={(el) => {
            refs.current[i] = el
          }}
          type="button"
          role="tab"
          id={`onglet-${o.id}`}
          aria-selected={actif === o.id}
          aria-controls={`panneau-${o.id}`}
          tabIndex={actif === o.id ? 0 : -1}
          className="onglets__bouton"
          onClick={() => onChange(o.id)}
          onKeyDown={(e) => surTouche(e, i)}
        >
          {o.libelle}
          {o.compteur !== undefined && <span className="carte__meta"> {o.compteur}</span>}
        </button>
      ))}
    </div>
  )
}

export function PanneauOnglet({ id, actif, children }: { id: string; actif: string; children: ReactNode }) {
  if (id !== actif) return null
  return (
    <div role="tabpanel" id={`panneau-${id}`} aria-labelledby={`onglet-${id}`} tabIndex={0}>
      {children}
    </div>
  )
}

/* ========================================================================= */
/* Contrôle segmenté                                                          */
/* ========================================================================= */

export function ControleSegmente<T extends string>({
  options,
  valeur,
  onChange,
  etiquette,
}: {
  options: { valeur: T; libelle: string }[]
  valeur: T
  onChange: (v: T) => void
  etiquette: string
}) {
  return (
    <div className="segmente" role="group" aria-label={etiquette}>
      {options.map((o) => (
        <button
          key={o.valeur}
          type="button"
          className="segmente__option"
          aria-pressed={valeur === o.valeur}
          onClick={() => onChange(o.valeur)}
        >
          {o.libelle}
        </button>
      ))}
    </div>
  )
}

/* ========================================================================= */
/* Champ de recherche                                                         */
/* ========================================================================= */

export function ChampRecherche({
  valeur,
  onChange,
  placeholder = 'Rechercher…',
  etiquette,
  ...reste
}: {
  valeur: string
  onChange: (v: string) => void
  placeholder?: string
  etiquette: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>) {
  const id = useId()
  return (
    <div className="recherche">
      <label className="visuellement-cache" htmlFor={id}>
        {etiquette}
      </label>
      <span className="recherche__icone" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="7" cy="7" r="4.5" />
          <path d="M10.5 10.5 14 14" strokeLinecap="round" />
        </svg>
      </span>
      <input
        id={id}
        type="search"
        className="champ"
        value={valeur}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        {...reste}
      />
      {valeur && (
        <Bouton variante="discret" className="recherche__effacer" onClick={() => onChange('')} aria-label="Effacer la recherche">
          ✕
        </Bouton>
      )}
    </div>
  )
}

/* ========================================================================= */
/* Dialogue modal                                                             */
/* ========================================================================= */

/** Piège le focus dans le conteneur et restaure le focus précédent à la fermeture. */
function usePiegeFocus(actif: boolean, ref: React.RefObject<HTMLElement | null>, fermer: () => void) {
  useEffect(() => {
    if (!actif) return
    const precedent = document.activeElement as HTMLElement | null
    const conteneur = ref.current
    const focusables = () =>
      Array.from(
        conteneur?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((el) => el.offsetParent !== null || el === document.activeElement)

    focusables()[0]?.focus()

    const surTouche = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        fermer()
        return
      }
      if (e.key !== 'Tab') return
      const liste = focusables()
      if (liste.length === 0) return
      const premier = liste[0] as HTMLElement
      const dernier = liste[liste.length - 1] as HTMLElement
      if (e.shiftKey && document.activeElement === premier) {
        e.preventDefault()
        dernier.focus()
      } else if (!e.shiftKey && document.activeElement === dernier) {
        e.preventDefault()
        premier.focus()
      }
    }

    document.addEventListener('keydown', surTouche)
    return () => {
      document.removeEventListener('keydown', surTouche)
      precedent?.focus?.()
    }
  }, [actif, ref, fermer])
}

export function Dialogue({
  ouvert,
  titre,
  onFermer,
  children,
  actions,
}: {
  ouvert: boolean
  titre: string
  onFermer: () => void
  children: ReactNode
  actions?: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  usePiegeFocus(ouvert, ref, onFermer)
  const idTitre = useId()

  if (!ouvert) return null

  return (
    <div
      className="dialogue-fond"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onFermer()
      }}
    >
      <div className="dialogue" ref={ref} role="dialog" aria-modal="true" aria-labelledby={idTitre}>
        <div className="dialogue__entete">
          <h2 className="dialogue__titre" id={idTitre}>
            {titre}
          </h2>
          <Bouton variante="discret" onClick={onFermer} aria-label="Fermer">
            ✕
          </Bouton>
        </div>
        {children}
        {actions && <div className="dialogue__actions">{actions}</div>}
      </div>
    </div>
  )
}

/* ========================================================================= */
/* Notifications                                                              */
/* ========================================================================= */

interface Toast {
  id: number
  message: string
  ton: 'neutre' | 'succes' | 'erreur'
}

const ContexteToast = createContext<(message: string, ton?: Toast['ton']) => void>(() => {})

export function FournisseurToasts({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const compteur = useRef(0)

  const notifier = useCallback((message: string, ton: Toast['ton'] = 'neutre') => {
    const id = ++compteur.current
    setToasts((t) => [...t, { id, message, ton }])
    window.setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4200)
  }, [])

  return (
    <ContexteToast.Provider value={notifier}>
      {children}
      {/* aria-live : les messages sont annoncés aux lecteurs d'écran. */}
      <div className="toasts" role="status" aria-live="polite" aria-atomic="false">
        {toasts.map((t) => (
          <div key={t.id} className={`toast${t.ton !== 'neutre' ? ` toast--${t.ton}` : ''}`}>
            {t.message}
          </div>
        ))}
      </div>
    </ContexteToast.Provider>
  )
}

export function useToast() {
  return useContext(ContexteToast)
}

/* ========================================================================= */
/* Accordéon                                                                  */
/* ========================================================================= */

export function Accordeon({
  titre,
  children,
  ouvertParDefaut = false,
  compteur,
}: {
  titre: ReactNode
  children: ReactNode
  ouvertParDefaut?: boolean
  compteur?: number
}) {
  const [ouvert, setOuvert] = useState(ouvertParDefaut)
  const idContenu = useId()

  return (
    <div className="accordeon">
      <button
        type="button"
        className="accordeon__bouton"
        aria-expanded={ouvert}
        aria-controls={idContenu}
        onClick={() => setOuvert((o) => !o)}
      >
        <span>
          {titre}
          {compteur !== undefined && <span className="carte__meta"> · {compteur}</span>}
        </span>
        <svg className="accordeon__chevron" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M5 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {ouvert && (
        <div className="accordeon__contenu" id={idContenu}>
          {children}
        </div>
      )}
    </div>
  )
}

/* ========================================================================= */
/* Encadré                                                                    */
/* ========================================================================= */

export function Encadre({
  ton = 'neutre',
  titre,
  children,
}: {
  ton?: 'neutre' | 'alerte' | 'info' | 'succes' | 'erreur'
  titre?: string
  children: ReactNode
}) {
  const icones = { neutre: '·', alerte: '⚠', info: 'ℹ', succes: '✓', erreur: '✕' }
  return (
    <div className={`encadre${ton !== 'neutre' ? ` encadre--${ton}` : ''}`}>
      {titre && (
        <p className="encadre__titre">
          <span aria-hidden="true">{icones[ton]}</span>
          {titre}
        </p>
      )}
      {children}
    </div>
  )
}

/* ========================================================================= */
/* État vide et squelette                                                     */
/* ========================================================================= */

export function EtatVide({ titre, children, action }: { titre: string; children?: ReactNode; action?: ReactNode }) {
  return (
    <div className="etat-vide">
      <p className="etat-vide__titre">{titre}</p>
      {children}
      {action && <div className="etat-vide__action">{action}</div>}
    </div>
  )
}

export function Squelette({ hauteur = '1rem', largeur = '100%' }: { hauteur?: string; largeur?: string }) {
  return <div className="squelette" style={{ height: hauteur, width: largeur }} aria-hidden="true" />
}

/* ========================================================================= */
/* Chrono                                                                     */
/* ========================================================================= */

export function formaterDuree(secondes: number): string {
  const s = Math.max(0, Math.round(secondes))
  const m = Math.floor(s / 60)
  return `${String(m).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
}

export function Chrono({ secondes, total, etiquette }: { secondes: number; total: number; etiquette: string }) {
  const ratio = total === 0 ? 0 : secondes / total
  const classe = secondes === 0 ? 'chrono chrono--fin' : ratio < 0.2 ? 'chrono chrono--alerte' : 'chrono'
  return (
    <div>
      <p className={classe} aria-hidden="true">
        {formaterDuree(secondes)}
      </p>
      {/* Le temps restant est annoncé par minute, pas à chaque seconde. */}
      <p className="visuellement-cache" role="timer" aria-live="polite">
        {etiquette} : {Math.ceil(secondes / 60)} minute{Math.ceil(secondes / 60) > 1 ? 's' : ''} restante
        {Math.ceil(secondes / 60) > 1 ? 's' : ''}
      </p>
    </div>
  )
}

/** Compte à rebours. `onFin` est appelé une seule fois, à zéro. */
export function useChrono(dureeSecondes: number, actif: boolean, onFin?: () => void) {
  const [restant, setRestant] = useState(dureeSecondes)
  const refFin = useRef(onFin)
  refFin.current = onFin

  useEffect(() => {
    setRestant(dureeSecondes)
  }, [dureeSecondes])

  useEffect(() => {
    if (!actif) return
    // L'intervalle se pilote entièrement depuis la mise à jour fonctionnelle :
    // il n'a besoin d'aucune dépendance sur la valeur courante.
    const t = window.setInterval(() => {
      setRestant((r) => {
        if (r <= 0) return 0
        if (r <= 1) {
          window.clearInterval(t)
          refFin.current?.()
          return 0
        }
        return r - 1
      })
    }, 1000)
    return () => window.clearInterval(t)
  }, [actif])

  return { restant, reinitialiser: () => setRestant(dureeSecondes) }
}

/* ========================================================================= */
/* Infobulle                                                                  */
/* ========================================================================= */

export function Infobulle({ texte, children }: { texte: string; children: ReactNode }) {
  const [visible, setVisible] = useState(false)
  const id = useId()
  return (
    <span
      className="infobulle"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <span aria-describedby={visible ? id : undefined}>{children}</span>
      {visible && (
        <span className="infobulle__contenu" role="tooltip" id={id}>
          {texte}
        </span>
      )}
    </span>
  )
}

/* ========================================================================= */
/* Chips de filtre                                                            */
/* ========================================================================= */

export function Chip({
  actif,
  onClick,
  children,
}: {
  actif: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button type="button" className="chip" aria-pressed={actif} onClick={onClick}>
      {children}
    </button>
  )
}

/* ========================================================================= */
/* Utilitaires                                                                */
/* ========================================================================= */

/** Media query réactive, utilisée pour basculer barre du bas / barre latérale. */
export function useMediaQuery(requete: string): boolean {
  const [correspond, setCorrespond] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(requete).matches : false,
  )

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia(requete)
    const surChangement = (e: MediaQueryListEvent) => setCorrespond(e.matches)
    setCorrespond(mq.matches)
    mq.addEventListener('change', surChangement)
    return () => mq.removeEventListener('change', surChangement)
  }, [requete])

  return correspond
}

/** Annonce polie destinée aux lecteurs d'écran, sans effet visuel. */
export function Annonce({ message }: { message: string }) {
  return (
    <p className="visuellement-cache" role="status" aria-live="polite">
      {message}
    </p>
  )
}

export function useIdStable(prefixe: string) {
  const id = useId()
  return useMemo(() => `${prefixe}-${id.replace(/:/g, '')}`, [prefixe, id])
}
