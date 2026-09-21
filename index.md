---
title: ""
---

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
onMounted(() => {
  if (!route.path.endsWith('/en/')) {
    location.replace('/powershell-docs/en/')
  }
})
</script>

# PowerShell

Fundamentos teóricos

Administración de sistemas con PowerShell

![PowerShell Fundamentals](/Powershell.svg){.hero-dark}
![PowerShell Fundamentals](/Powershell.svg){.hero-light}
