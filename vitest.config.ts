import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@strat/content': r('./packages/content/src/index.ts'),
      '@strat/domain': r('./packages/domain/src/index.ts'),
      '@strat/ui': r('./packages/ui/src/index.tsx'),
      '@strat/config': r('./packages/config/src/index.ts'),
      '@app': r('./apps/web/src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [r('./tests/setup.ts')],
    include: ['packages/**/*.test.ts', 'packages/**/*.test.tsx', 'tests/**/*.test.ts', 'tests/**/*.test.tsx'],
    css: false,
    restoreMocks: true,
  },
})
