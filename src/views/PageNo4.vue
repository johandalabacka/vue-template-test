<template>
  <LuRow>
    <h1>{{ t('page4_title') }}</h1>
    <h2>{{ t('page4_subheader') }}</h2>
    <span>{{ t('page4_content') }}
    </span>
  </LuRow>
</template>

<script setup>
import { LuRow } from '@lu.se/vue-template'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>
