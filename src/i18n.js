import { computed } from 'vue'
import { createI18n } from 'vue-i18n'
import { useLocalStorage } from '@vueuse/core'
import svLocale from '@/locales/sv.js'
import enLocale from '@/locales/en.js'

const i18n = createI18n({
  legacy: false,
  locale: useLocalStorage('language', 'sv').value, // set locale
  fallbackLocale: 'sv', // set fallback locale
  messages: { sv: svLocale, en: enLocale }, // set locale messages
  silentFallbackWarn: import.meta.env.MODE === 'production',
  silentTranslationWarn: import.meta.env.MODE === 'production',
  warnHtmlInMessage: 'off', // disable warning HTML in message (option api)
})

export default i18n
export const sv = computed(() => i18n.global.locale === 'sv')
export const t = i18n.global.t
export const locale = i18n.global.locale
