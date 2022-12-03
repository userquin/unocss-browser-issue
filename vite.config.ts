import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const root = resolve(fileURLToPath(import.meta.url), '..')
const r = (p: string) => resolve(root, p).replace(/\\/, '/')
export default defineConfig({
  resolve: {
    alias: {
      '@unocss/preset-icons/browser': r('./node_modules/@unocss/preset-icons/dist/browser.mjs'),
    },
  },
  optimizeDeps: {
    exclude: [
      '@iconify/utils/lib/loader/fs',
      '@iconify/utils/lib/loader/install-pkg',
      '@iconify/utils/lib/loader/node-loader',
      '@iconify/utils/lib/loader/node-loaders',
    ],
  },
  build: {
    rollupOptions: {
      external: [
        '@iconify/utils/lib/loader/fs',
        '@iconify/utils/lib/loader/install-pkg',
        '@iconify/utils/lib/loader/node-loader',
        '@iconify/utils/lib/loader/node-loaders',
      ],
    },
  },
})
