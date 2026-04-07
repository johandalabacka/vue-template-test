import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import i18n from './i18n.js'
import 'bootstrap'

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
