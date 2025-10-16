import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { createI18n } from 'vue-i18n'
import 'bootstrap'
import { useLocalStorage } from '@vueuse/core'

import '@lu.se/vue-template/icons'
import { messages as lumallMessages } from '@lu.se/vue-template'

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

import demoMessages from './messages.js'

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

const messages = {
  sv: {
    ...lumallMessages.sv,
    ...demoMessages.sv,
  },
  en: {
    ...lumallMessages.en,
    ...demoMessages.en,
  },
}

const i18n = createI18n({
  locale: useLocalStorage('language', 'sv').value,
  fallbackLocale: 'sv',
  legacy: false,
  allowComposition: true,
  // globalInjection: true,
  mode: 'composition',
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
  warnFallback: false,
  warnHtmlInMessage: 'off',
  silentFallbackWarn: true,
  // @todo just while developing
  silentTranslationWarn: true, // import.meta.env.MODE === 'production'

  // Remove warning on html in translation
  warnHtmlMessage: false,
})
i18n.global.mergeLocaleMessage('sv', { lumall: lumallMessages.sv })
// import.meta.env.MODE === 'production'

const app = createApp(App)
app.component('FaIcon', FontAwesomeIcon)
app.use(i18n)
app.use(router)
app.mount('#app')

console.log('Running in mode: ', import.meta.env.MODE)
console.log('messages: ', messages)
// console.log('i18n: ', Object.keys(i18n))
// console.log('i18n: ', typeof i18n['global'])
// console.log('i18n: ', Object.keys(i18n['__instances']))
