import type { Methode } from './types'

/** MÉTHODE D'EXAMEN — fiche 15 (`15_Methodologie_reponse_examen.md`). */
export const methode: Methode = {
  lisaec: [
    { lettre: 'L', nom: 'Lire', action: 'Décoder la consigne et le verbe', question: "Qu'attend-on de moi ?" },
    { lettre: 'I', nom: 'Identifier', action: 'Repérer les notions du cours visées', question: 'Quels outils mobiliser ?' },
    { lettre: 'S', nom: 'Structurer', action: 'Plan rapide : intro / 2-3 axes / conclusion', question: 'Dans quel ordre ?' },
    { lettre: 'A', nom: 'Argumenter', action: 'Définir → expliquer → illustrer', question: 'Quel exemple ?' },
    { lettre: 'E', nom: 'Étendre', action: 'Faire les liens transversaux', question: 'Quels autres chapitres ?' },
    { lettre: 'C', nom: 'Conclure', action: 'Trancher et arbitrer', question: 'Quelle position ?' },
  ],

  dei: [
    { lettre: 'D', nom: 'Définir', role: 'Poser la notion mobilisée, dans les mots du cours.' },
    { lettre: 'E', nom: 'Expliquer', role: 'Montrer le mécanisme, répondre au « pourquoi ».' },
    { lettre: 'I', nom: 'Illustrer', role: "Donner un exemple du cours, relié à l'argument. Sans exemple, la note plafonne." },
  ],

  verbes: [
    { verbe: 'definir', libelle: 'Définissez', attendu: 'Précision, exactitude.', piege: 'Ne pas délayer.' },
    { verbe: 'citer', libelle: 'Citez', attendu: 'Liste exacte et complète.', piege: 'Oublier un élément de la liste.' },
    { verbe: 'expliquer', libelle: 'Expliquez', attendu: 'Mécanisme, logique du « pourquoi ».', piege: 'Rester descriptif.' },
    { verbe: 'analyser', libelle: 'Analysez', attendu: 'Décomposer avec un outil (PESTEL, BMC…).', piege: "Oublier l'outil." },
    { verbe: 'discuter', libelle: 'Discutez', attendu: 'Thèse + antithèse + synthèse.', piege: 'Réponse à sens unique.' },
    { verbe: 'justifier', libelle: 'Justifiez', attendu: 'Prendre position ET la défendre.', piege: 'Ne pas argumenter.' },
    { verbe: 'recommander', libelle: 'Proposez / Recommandez', attendu: 'Solutions concrètes + faisabilité (SAF).', piege: 'Rester théorique.' },
    { verbe: 'comparer', libelle: 'Comparez', attendu: 'Critères explicites, tableau.', piege: 'Juxtaposer sans critère.' },
  ],

  planUniversel: [
    'Intro (2-3 phrases) : reformuler la question + annoncer l’angle et le plan.',
    'Corps (2 à 3 axes) : un argument = une idée + une notion + un exemple.',
    'Lien transversal (1-2 phrases) : relier à un autre chapitre.',
    'Conclusion (2-3 phrases) : trancher + nommer l’arbitrage.',
  ],

  checklistExamen: [
    "J'ai répondu au verbe de consigne",
    "J'ai défini les notions mobilisées",
    "J'ai expliqué un mécanisme",
    "J'ai utilisé au moins un outil du cours",
    "J'ai donné au moins un exemple relié",
    "J'ai fait un lien transversal",
    "J'ai traité le numérique en double sens (si applicable)",
    "J'ai identifié un arbitrage",
    "J'ai conclu en tranchant",
  ],

  erreursDeForme: [
    'Réponse descriptive (liste sans analyse) au lieu d’expliquer et d’arbitrer.',
    'Pas d’exemple, ou exemple non relié à l’argument.',
    'Pas d’outil mobilisé sur une question « analysez ».',
    'Réponse à sens unique sur une question « discutez ».',
    'Confondre interne et externe (force ≠ opportunité).',
    'Pas de conclusion, pas de position.',
  ],

  formulesConclusion: [
    "« En définitive, X n'est un levier que sous condition de Y. »",
    '« Le véritable arbitrage se situe entre … et …. »',
    "« La question n'est pas SI mais COMMENT le faire de façon économiquement supportable. »",
    "« Le gain n'est un gain net que si l'effet rebond est neutralisé. »",
  ],

  blocsNotesStructurees: ['INTRO', 'NOTIONS', 'AXE 1', 'AXE 2', 'EXEMPLE', 'LIEN', 'ARBITRAGE', 'CONCLUSION'],
}
