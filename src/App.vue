<template>
  <div>
    <lu-header
      :navbarmenu="menu"
      :topmenu="menu"
      :mobilemenu="menu"
      has-login
      :is-logged-in="isLoggedIn"
      logo-url="https://www.lth.se"
      :logo-src="`${baseUrl}lumall/images/logo/logo_lu_${$root.$i18n.locale}.svg`"
      :logo-title="$t('lthFull')"
      @login="login"
      @logout="logout"
    />
    <lu-login
      ref="loginModal"
      :login-failed="loginFailed"
      @login="tryLogin"
      @cancel="cancelLogin"
    />

    <!-- key is hack to redraw component then locale changes -->
    <lu-bread-crumb :key="$i18n.locale" />

    <lu-main
      :leftmenu="
        menu"
      last-updated="2019-06-25"
      page-manager-mail="john.doe@lth.lu.se"
    >
      <router-view />
    </lu-main>
    <lu-footer
      :contact="{name: $t('lthFull'), box: '118', zip: '221 00', phone: '046-222 72 00', mail: 'info@lth.se'}"
      :social-media="{
        facebook: 'https://www.facebook.com/lundstekniskahogskola',
        linkedin: 'https://www.linkedin.com/school/lunds-tekniska-högskola',
        instagram: 'https://www.instagram.com/lth_lunduniversity',
        twitter: 'https://twitter.com/lthinfo',
        youtube: 'https://www.youtube.com/user/LunduniversityLTH/featured'
      }"
      :logo-src="`${baseUrl}lumall/images/logo/logo_lth_footer_${$root.$i18n.locale}@1x.png`"
      :logo-title="$t('lthFull')"
      :short-cuts="menu"
    />
  </div>
</template>

<script>
import '@lu.se/vue-template/icons'
import '@lu.se/vue-template/iconsSocialMedia'
import { LuHeader, LuBreadCrumb, LuMain, LuFooter, LuLogin } from '@lu.se/vue-template'

import menu from './menu.js'

export default {
  name: 'App',
  components: {
    LuHeader,
    LuBreadCrumb,
    LuMain,
    LuFooter,
    LuLogin
  },
  data () {
    return {
      menu: [],
      isLoggedIn: false,
      baseUrl: process.env.BASE_URL,
      loginFailed: false
    }
  },
  mounted () {
    this.menu = menu
  },
  methods: {
    login () {
      this.$refs.loginModal.show()
    },
    logout () {
      this.isLoggedIn = false
    },
    tryLogin ({ username, password }) {
      if (password === 'secret') {
        this.isLoggedIn = username
        this.$refs.loginModal.hide()
      } else if (password === 'wrong') {
        this.loginFailed = true
      } else {
        this.loginFailed = 'Network error'
      }
    },
    cancelLogin () {
      console.log('user canceled login')
    }
  },
  i18n: {
    messages: {
      sv: {
        lthFull: 'Lunds Tekniska Högskola, LTH'
      },
      en: {
        lthFull: 'Faculty of engineering, LTH'
      }
    }
  }
}
</script>
