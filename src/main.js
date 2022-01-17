import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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
Vue.component('FaIcon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'sv',
  fallbackLocale: 'sv',
  // Don't warn if fallback is used
  silentFallbackWarn: true,
  messages: messages
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  render: h => h(App),
  router,
  i18n
}).$mount('#app')
