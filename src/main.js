import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

Vue.use(VueI18n)

import messages from './messages.js'

const i18n = new VueI18n({
  locale: 'sv',
  fallbackLocale: 'sv',
  messages: messages
})

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
  i18n,
  components: { App }
}).$mount('#app')
