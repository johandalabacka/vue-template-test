<template>
  <LuRow>
    <h1>{{ t('page1_title') }}</h1>
    <h2>{{ t('page1_subheader') }}</h2>
    <LuSpinner
      v-show="true"
      :text="t('loading')"
    />
    <span>
      {{ t('page1_content') }}
    </span>

    <template #right-column>
      <LuInfobox :title="t('infobox_title')">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="t('infobox_content')" />
      </LuInfobox>
    </template>
  </LuRow>
</template>

<script setup>
import { LuRow, LuInfobox, LuSpinner } from '@lu.se/vue-template'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
