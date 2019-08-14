<template>
  <div>
    <lu-nav-mobile :menu="menu"/>
    <lu-header :navbarmenu="menu" :topmenu="menu"/>

    <!-- key is hack to redraw component then locale changes -->
    <lu-bread-crumb :key="$i18n.locale"/>

    <lu-main :leftmenu="menu" lastUpdated="2019-06-25" pageManagerMail="johan.dahl@lth.lu.se">
        <!-- <transition name="fade"> -->
          <router-view/>
        <!-- </transition> -->
    </lu-main>
    <lu-footer
      :contact="{name: $t('lthFull'), box: '118', zip: '221 00', phone: '046-222 72 00', mail: 'info@lth.se'}"
      :socialMedia="{
        facebook: 'https://www.facebook.com/lundstekniskahogskola',
        linkedin: 'https://www.linkedin.com/school/lunds-tekniska-högskola',
        instagram: 'https://www.instagram.com/lth_lunduniversity',
        twitter: 'https://twitter.com/lthinfo',
        youtube: 'https://www.youtube.com/user/LunduniversityLTH/featured'
        }"/>
  </div>
</template>

<script>
import LuNavMobile from '@lu.se/vue-template/LuNavMobile'
import LuHeader from '@lu.se/vue-template/LuHeader'
import LuBreadCrumb from '@lu.se/vue-template/LuBreadCrumb'
import LuMain from '@lu.se/vue-template/LuMain'
import LuFooter from '@lu.se/vue-template/LuFooter'

import menu from './menu.js'

export default {
  name: 'App',
  data () {
    return {
      menu: []
    }
  },
  components: {
    LuNavMobile,
    LuHeader,
    LuBreadCrumb,
    LuMain,
    LuFooter
  },
  mounted () {
    this.menu = menu
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
