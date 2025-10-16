<template>
  <LuRow>
    <h1>{{ i18n.t('welcome_header') }}</h1>
    <h2>Essential Links</h2>
    <p>{{ i18n.t('mail_only_for_support') }}</p>
    <p>{{ i18n.t('lthFull') }}</p>
    <p>{{ i18n.t('welcome_header') }}</p>
    <p> {{ browserLocale }} </p>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
  </ul>
  </LuRow>
</template>

<script setup>
import { LuRow } from '@lu.se/vue-template'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const i18n = useI18n()
// console.log('welcome_header: ', te('welcome_header'), t('welcome_header'))
// console.log('lthFull: ', te('lthFull'), t('lthFull'))
// const { t, locale, te, availableLocales, id, fallbackWarn, isGlobal, messages, fallbackRoot, missingWarn, inheritLocale, getLocaleMessage } = useI18n({ useScope: 'global' })
// console.log('t: ', Object.keys(t))
// console.log(Object.keys(i18n.availableLocales))
// console.log('id: ', id)
// console.log('lthFull: ', i18n.te('lthFull'), i18n.t('lthFull'))
// console.log('admin: ', i18n.te('admin'), i18n.t('admin'))
// console.log('isGlobal: ', i18n.isGlobal)
// console.log('locale: ', i18n.locale.value)
// console.log('messages sv: ', i18n.messages.value['sv'])
// console.log('getLocaleMessage: ', typeof i18n.getLocaleMessage('sv'))

// const { t: local_t, messages: localMessages } = useI18n({ useScope: 'local' })
// console.log('local_t: ', Object.keys(local_t))
// console.log('localMessages sv: ', localMessages.value['sv'])
// console.log('global welcome_header: ', te('welcome_header') ? t('welcome_header') : 'NOT FOUND')
// console.log('local welcome_header: ', local_t('welcome_header'))

const browserLocale = computed(() => navigator.language)

</script>
