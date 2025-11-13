import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { createI18n } from 'vue-i18n'
import 'bootstrap'
import { useLocalStorage } from '@vueuse/core'

// Import the self-installing plugin from the LU Vue Template package:
import luTemplate from '@lu.se/vue-template'

// The following is only to show that you can specify your own icons
// the same way as you would before, but now only the one that are
// specific to your app.
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faJackOLantern,
  faBars,
} from '@fortawesome/pro-light-svg-icons'

// Import your locale files (or define the messages here):
import en from './locales/en.json'
import sv from './locales/sv.json'

// You can either just define your own messages..:
const messages = {
  sv,
  en,
}

// // ..Or you can manually merge your messages with the messages
// // from the LU Vue Template package:
// import { messages as lumallMessages } from '@lu.se/vue-template'
// const messages = {
//   sv: {
//     ...lumallMessages.sv,
//     ...sv,
//   },
//   en: {
//     ...lumallMessages.en,
//     ...en,
//   },
//   // fr: {
//   //   ...lumallMessages.en,
//   // },
//   // su: {
//   //   ...lumallMessages.en,
//   // },
// }

const i18n = createI18n({
  locale: useLocalStorage('language', 'sv').value,
  fallbackLocale: 'sv',
  legacy: false,
  allowComposition: true,
  // globalInjection: true,
  mode: 'composition',
  messages,
  warnFallback: false,
  silentFallbackWarn: true,
  // @todo just while developing
  silentTranslationWarn: true, // import.meta.env.MODE === 'production'
  // Remove warning on html in translation
  warnHtmlMessage: false,
})

library.add(
  faJackOLantern,
  faBars,
)

const app = createApp(App)
app.use(i18n)
// This Vue plugin self-installs all i18n messages and icons
// the package needs:
app.use(luTemplate, i18n)
app.use(router)
app.mount('#app')

console.log('Running in mode: ', import.meta.env.MODE)
