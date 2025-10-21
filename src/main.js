import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { createI18n } from 'vue-i18n'
import 'bootstrap'
import { useLocalStorage } from '@vueuse/core'

import '@lu.se/vue-template/icons'
import LuTemplate from '@lu.se/vue-template'
// import { messages as lumallMessages } from '@lu.se/vue-template'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowLeft, faArrowRight, faArrowUp,
  faCaretCircleDown, faCaretCircleUp,
  faCheck, faCheckSquare, faChevronDoubleDown, faChevronDoubleUp,
  faCopy,
  faEdit, faEnvelope,
  faExternalLink, faHandshake,
  faHome,
  faHourglass,
  faPencil, faPlus,
} from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import en from './locales/en.json'
import sv from './locales/sv.json'

const messages = {
  sv,
  en,
}

library.add(
  faArrowLeft, faArrowRight, faArrowUp,
  faCaretCircleDown, faCaretCircleUp,
  faCheck,
  faCheckSquare,
  faChevronDoubleDown, faChevronDoubleUp,
  faCopy,
  faEdit,
  faEnvelope,
  faExternalLink,
  faHandshake,
  faHome,
  faHourglass,
  faPencil,
  faPlus)

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

// console.log({ i18n })

const app = createApp(App)
app.component('FaIcon', FontAwesomeIcon)
app.use(i18n)
app.use(LuTemplate, i18n)
app.use(router)
app.mount('#app')

console.log('i18n.global:', i18n.global)
console.log('i18n.global.messages.value:', i18n.global.messages.value)
// console.log('i18n.global.availableLocales:', i18n.global.availableLocales)
console.log('Running in mode: ', import.meta.env.MODE)
// console.log('messages: ', messages)
