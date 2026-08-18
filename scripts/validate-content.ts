/**
 * Validation du corpus. Le build échoue sur toute erreur structurelle.
 *   npm run validate:content
 */
import { validerCorpus } from '@strat/domain'

const { erreurs, avertissements } = validerCorpus()

console.log('=== STRAT — VALIDATION DU CONTENU ===\n')

if (avertissements.length) {
  console.log(`Avertissements (${avertissements.length}) :`)
  for (const a of avertissements) console.log(`  ~ [${a.code}] ${a.message}`)
  console.log('')
}

if (erreurs.length) {
  console.log(`ERREURS (${erreurs.length}) :`)
  for (const e of erreurs) console.log(`  ✗ [${e.code}] ${e.message}`)
  console.log('\nValidation : ÉCHEC')
  process.exit(1)
}

console.log('Aucune erreur structurelle.')
console.log('Validation : SUCCÈS')
