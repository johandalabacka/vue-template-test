<template>
  <LuRow>
    <h1>{{ t('page2_title') }}</h1>
    <h2>{{ t('page2_subheader') }}</h2>
    <div class="masonry-tile">
      <a
        class="masonry-tile-img"
      >

        <div class="masonry-tile-img-bg">
          <img
            src="@/assets/logo.png"
            :alt="t('page2_img_text')"
          >
        </div>
        <div class="masonry-tile-img-content">
          <div class="blockline">
            <h1>
              <span class="a nav-block-link">{{ t('page2_img_text') }}<i class="fal fa-chevron-circle-right fa-sm" /></span>
            </h1>
          </div>
        </div>
      </a>
    </div>
    <span>
      {{ t('page2_content') }}
    </span>
  </LuRow>
</template>

<script setup>
import { LuRow } from '@lu.se/vue-template'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
