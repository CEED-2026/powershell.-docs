<script setup>
import DefaultTheme from 'vitepress/theme'
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()
const isSpanish = computed(() => (page.value.filePath || '').startsWith('es/'))
const title = computed(() => isSpanish.value ? 'PS Fundamentos' : 'PowerShell Fundamentals')
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-title-before>
      <div class="custom-nav-title">
        <img class="logo-dark" src="/icon_dark.svg" :alt="title">
        <img class="logo-light" src="/icon_light.svg" :alt="title">
        <span class="title">{{ title }}</span>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style>
.VPNavBarTitle > a.title > img.VPImage,
.VPNavBarTitle > a.title > span {
  display: none !important;
}

.custom-nav-title {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--vp-c-text-1);
}

.logo-dark,
.logo-light {
  width: 24px;
  height: 24px;
}

.logo-dark {
  display: none;
}

.dark .logo-dark {
  display: block;
}

.dark .logo-light {
  display: none;
}

.logo-light {
  display: block;
}
</style>
