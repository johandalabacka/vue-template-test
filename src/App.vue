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
    :page-manager-mail="t('page_manager')"
    :page-manager-notice="t('mail_only_for_support')"
  >
    <router-view v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </LuMain>
  <LuToTop />
  <LuFooter
    :contact="{ name: t('lth_full'), box: '118', zip: '221 00', phone: '046-222 72 00', mail: 'info@lth.se' }"
    :logo-src="`${baseUrl}lumall/images/logo/lth_logo_footer_${locale}.svg`"
    :logo-title="t('lth_full')"
    :short-cuts="menu"
  />
</template>

<script setup>
import { computed, ref } from 'vue'
import { t, locale } from '@/i18n.js'
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

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
