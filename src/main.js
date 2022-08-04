import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { createI18n } from 'vue-i18n'
import 'bootstrap'

import '@lu.se/vue-template/icons'

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
  faPencil, faPlus
} from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import messages from './messages.js'
/**
 *  vee-validate provides validation on forms
 */
// eslint-disable-next-line camelcase

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

const i18n = createI18n({
  locale: 'sv',
  fallbackLocale: 'sv',
  // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
  silentFallbackWarn: true,
  // @todo just while developing
  silentTranslationWarn: true // import.meta.env.MODE === 'production'
})

const app = createApp(App)
app.component('FaIcon', FontAwesomeIcon)
app.use(i18n)
app.use(router)
app.mount('#app')
