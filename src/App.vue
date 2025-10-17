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
    :logo-title="t('lth_full')"
    compact
    @login="login"
    @logout="logout"
  />

  <!-- key is hack to redraw component then locale changes -->
  <LuBreadCrumb
    v-if="true"
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
    :contact="{ name: t('lth_full'), box: '118', zip: '221 00', phone: '046-222 72 00', mail: 'info@lth.se' }"
    :social-media="{
      facebook: 'https://www.facebook.com/lundstekniskahogskola',
      linkedin: 'https://www.linkedin.com/school/lunds-tekniska-högskola',
      instagram: 'https://www.instagram.com/lth_lunduniversity',
      twitter: 'https://twitter.com/lthinfo',
      youtube: 'https://www.youtube.com/user/LunduniversityLTH/featured',
    }"
    :logo-src="`${baseUrl}lumall/images/logo/footer-logo-lth-sv-responsive.png`"
    :logo-title="t('lth_full')"
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
  isLoggedIn.value = true
}

const logout = () => {
  isLoggedIn.value = false
}

const menu = computed(() => menuData)

const { t, locale } = useI18n()

</script>
