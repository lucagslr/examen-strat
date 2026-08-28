/**
 * Les seuls chiffres du module que le reste de l'application peut lire sans
 * charger les 25 fiches.
 *
 * Le corpus « modèles » pèse près d'un mégaoctet : le hub « S'entraîner » ne
 * doit pas le télécharger pour afficher deux nombres sur des cartes. Ces
 * constantes sont donc volontairement écrites à la main — un test vérifie
 * qu'elles restent égales à la longueur réelle des listes.
 */
export const NB_MODELES = 25
export const NB_ETAPES_ANALYSE = 9
