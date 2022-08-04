import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    target: 'es2022'
  },
  server: {
    port: 8080 // default 3000
  },
  preview: {
    port: 8080 // default 5000 which doesn't work with chrome
  },
  // Remove warning on warning: "@charset" must be the first rule in the file
  // https://github.com/vitejs/vite/issues/5519#issuecomment-960441208
  // BUT it doesn't work with css: { preprocessorOptions: { css: { charset: false } } }
  // https://gitanswer.com/vite-build-includes-charset-problem-typescript-1063504356 works
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove()
              }
            }
          }
        }
      ]
    }
  }
})
