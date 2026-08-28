/**
 * Adresses des deux sections « modèles » et « analyse guidée ».
 *
 * Ce module ne contient que des fonctions : les garder à part des composants
 * évite de casser le rafraîchissement à chaud de React, qui exige qu'un fichier
 * de composants n'exporte que des composants. Il évite aussi que la route
 * « analyse » dépende du module de la route « modèles » pour trois lignes.
 */

/**
 * Une case expliquée. Le point passe par la requête et non par une ancre `#`,
 * qui serait interceptée par le routeur — l'adresse reste donc partageable et
 * rouvrable telle quelle.
 */
export function lienVersPoint(slugModele: string, point: string): string {
  return `#/training/models/${slugModele}?point=${encodeURIComponent(point)}`
}

export function lienVersModele(slugModele: string): string {
  return `#/training/models/${slugModele}`
}
