import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import messages from './messages.js'

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
