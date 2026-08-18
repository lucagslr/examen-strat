/**
 * Rapport de couverture du contenu.
 *   npm run report:content
 */
import { rapportCouverture, validerCorpus } from '@strat/domain'
import { notions, categories } from '@strat/content'

const r = rapportCouverture()
const { erreurs, avertissements } = validerCorpus()

const pct = (a: number, b: number) => (b === 0 ? '—' : `${Math.round((a / b) * 100)} %`)

console.log('=== STRAT CONTENT REPORT ===\n')
console.log(`Notions structurées          : ${r.notions}`)
console.log(`  dont priorité 1            : ${r.notionsPrioritaires}`)
console.log(`Catégories (chapitres)       : ${r.categories}`)
console.log(`Couverture de l'index        : ${pct(r.notionsRecherchables, r.notions)} (toutes recherchables)`)
console.log('')
console.log(`Questions officielles        : ${r.questionsOfficielles} / 22`)
console.log(`Questions probables          : ${r.questionsProbables} / 55`)
console.log(`  dont guidées pas à pas     : ${r.questionsGuidees}`)
console.log(`Flashcards                   : ${r.flashcards}`)
console.log(`Quiz                         : ${r.quiz} (${r.typesQuiz} mécaniques sur 8)`)
console.log('')
console.log(`Relations                    : ${r.relations} (${r.typesRelationsUtilises} types utilisés sur 17)`)
console.log(`Cas pratiques                : ${r.cas}`)
console.log(`Parcours guidés              : ${r.parcours}`)
console.log(`Combinaisons de notions      : ${r.combinaisons}`)
console.log(`Mini-jeux                    : ${r.jeux} (dont ${r.duels} duels « ne pas confondre »)`)
console.log('')
console.log(`Références cassées           : ${r.referencesCassees}`)
console.log(`Notions orphelines           : ${r.notionsOrphelines}`)
console.log(`Questions orphelines         : ${r.questionsOrphelines}`)
console.log('')

console.log('Répartition par chapitre :')
for (const c of [...categories].sort((a, b) => a.ordre - b.ordre)) {
  const n = notions.filter((x) => x.categorie === c.id).length
  if (n) console.log(`  ${c.nom.padEnd(32)} ${String(n).padStart(3)}`)
}
console.log('')

console.log(`Erreurs de validation        : ${erreurs.length}`)
console.log(`Avertissements               : ${avertissements.length}`)
console.log('')
console.log(erreurs.length === 0 ? 'Couverture : 100 %' : 'Couverture : INCOMPLÈTE')

if (erreurs.length) process.exit(1)
