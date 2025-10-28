import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'
// import { resolve, dirname } from 'node:path'
// import { fileURLToPath } from 'node:url'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      /* options */
      // locale messages resource pre-compile option
      include: path.resolve(__dirname, './src/locales/*'),
      // include: resolve(dirname(fileURLToPath(import.meta.url)), './src/messages.js'),
      strictMessage: false,
    }),
    Components({ /* options */ }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2022',
  },
  server: {
    port: 8080, // default 3000
  },
  preview: {
    port: 8080, // default 5000 which doesn't work with chrome
  },
})
