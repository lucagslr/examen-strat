import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url))

/**
 * `base` est relatif par défaut : le site fonctionne aussi bien à la racine
 * d'un domaine que dans un sous-chemin GitHub Pages (`/mon-depot/`), sans
 * recompilation. Il reste surchargeable par la variable `VITE_BASE`.
 */
export default defineConfig(({ mode }) => ({
  base: process.env.VITE_BASE ?? './',
  plugins: [react()],
  resolve: {
    alias: {
      '@strat/content': r('../../packages/content/src/index.ts'),
      '@strat/domain': r('../../packages/domain/src/index.ts'),
      '@strat/ui': r('../../packages/ui/src/index.tsx'),
      '@strat/config': r('../../packages/config/src/index.ts'),
      '@app': r('./src'),
    },
  },
  build: {
    target: 'es2022',
    sourcemap: mode !== 'production',
    // Le corpus est volumineux : on le sépare du code applicatif pour que
    // la mise en cache du navigateur reste efficace entre deux déploiements.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('packages/content/src')) return 'corpus'
          // Les fiches Markdown forment un fragment à part : elles changent
          // indépendamment du code, et ne sont chargées qu'avec leur route.
          if (/[\\/]questions[\\/][^\\/]+\.md/.test(id)) return 'questions'
          if (id.includes('node_modules/react')) return 'react'
        },
      },
    },
    chunkSizeWarningLimit: 1200,
  },
  server: { port: 5173, open: false },
  preview: { port: 4173 },
}))
