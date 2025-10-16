<template>
  <LuHeader
    :navbarmenu="menu"
    :topmenu="menu"
    :mobilemenu="menu"
    has-login
    has-search
    empty-search
    :is-logged-in="isLoggedIn"
    avatar="JD"
    logo-url="https://www.lth.se"
    :logo-src="`${baseUrl}lumall/images/logo/lth_logo_${locale}.svg`"
    :logo-title="t('lthFull')"
    compact
    @login="login"
    @logout="logout"
  />

  <!-- key is hack to redraw component then locale changes -->
  <LuBreadCrumb
    v-if="false"
    :key="locale"
  />

  <LuMain
    :leftmenu="menu"
    compact
    last-updated="2021-11-30"
    page-manager-mail="john.doe1@lth.lu.se"
    :page-manager-notice="t('mail_only_for_support')"
  >
    <router-view />
  </LuMain>
  <LuToTop />
  <LuFooter
    :contact="{ name: t('lthFull'), box: '118', zip: '221 00', phone: '046-222 72 00', mail: 'info@lth.se' }"
    :social-media="{
      facebook: 'https://www.facebook.com/lundstekniskahogskola',
      linkedin: 'https://www.linkedin.com/school/lunds-tekniska-högskola',
      instagram: 'https://www.instagram.com/lth_lunduniversity',
      twitter: 'https://twitter.com/lthinfo',
      youtube: 'https://www.youtube.com/user/LunduniversityLTH/featured',
    }"
    :logo-src="`${baseUrl}lumall/images/logo/logo_lth_footer_${locale}@1x.png`"
    :logo-title="t('lthFull')"
    :short-cuts="menu"
  />
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import '@lu.se/vue-template/icons'
import '@lu.se/vue-template/iconsSocialMedia'
import { LuHeader, LuBreadCrumb, LuMain, LuFooter, LuToTop } from '@lu.se/vue-template/index.js'

import menuData from './menu.js'

const baseUrl = import.meta.env.BASE_URL
const isLoggedIn = ref(false)

const login = () => {
  isLoggedIn.value = 'JD'
}

const logout = () => {
  isLoggedIn.value = false
}

const menu = computed(() => menuData)

// const localMessages = {
//   sv: {
//     lthFull: 'Lunds Tekniska Högskola, LTH',
//     test_page: 'Testsida',
//   },
//   en: {
//     lthFull: 'Faculty of engineering, LTH',
//     test_page: 'Test page',
//   },
// }

const { t, locale } = useI18n()

// const browserLocale = navigator.language.split('-')[0] // e.g. 'sv' from 'sv-SE'
// const supportedLocales = ['en', 'sv']
// const newLocale = supportedLocales.includes(browserLocale) ? browserLocale : 'en'

// console.log('navigator.language: ', navigator.language)
// console.log('i18n.locale: ', locale.value)
// console.log('new_locale: ', newLocale)
// console.log(getLocaleMessage(locale.value))
// console.log(globalI18n.getLocaleMessage(locale.value))
// console.log('i18n: ', typeof i18n['global'])
</script>
