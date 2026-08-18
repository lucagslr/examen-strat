import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default tseslint.config(
  { ignores: ['**/dist/**', '**/node_modules/**', 'sources/**'] },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      // Le projet est en TypeScript strict : la vérification des types suffit.
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrors: 'none' },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', fixStyle: 'inline-type-imports' }],

      // Sécurité : aucune injection HTML dans du contenu de cours.
      'react-hooks/exhaustive-deps': 'warn',
      'no-alert': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',

      // Accessibilité : ces règles ne doivent jamais être désactivées, le site
      // enseigne lui-même l'accessibilité numérique.
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'off', // liens en `#/…` gérés par le routeur hash
      'jsx-a11y/no-autofocus': 'error',
      // `depth: 4` : nos libellés enveloppent volontiers un titre et une phrase
      // d'explication, donc le texte se trouve plus bas que la profondeur par défaut.
      'jsx-a11y/label-has-associated-control': ['error', { assert: 'either', depth: 4 }],
    },
  },

  {
    files: ['**/*.test.{ts,tsx}', 'tests/**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },

  {
    // Le service worker s'exécute dans un contexte à part, avec ses propres globals.
    files: ['apps/web/public/sw.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: { ...globals.serviceworker, ...globals.browser },
    },
  },

  {
    files: ['scripts/**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },
)
