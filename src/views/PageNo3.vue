<template>
  <LuRow>
    <h1>{{ t('page3_title') }}</h1>
    <h2>{{ t('page3_subheader') }}</h2>
    <ul>
      <li>
        {{ t('page3_icon_luvt') }}<fa-icon :icon="['fal', 'search']" />
      </li>
      <li>
        {{ t('page3_icon_app') }}<fa-icon :icon="['fal', 'jack-o-lantern']" />
      </li>
    </ul>
    <p
      v-for="i in 10"
      :key="i"
    >
      {{ t('page3_content') }}
    </p>
  </LuRow>
</template>

<script setup>
import { LuRow } from '@lu.se/vue-template'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
