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
        <img src="/Powershell.svg" :alt="title">
        <span class="title">{{ title }}</span>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>
