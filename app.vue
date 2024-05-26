<template>
  <div>
    <NuxtLayout name="nav">
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
useSeoMeta({
  ogImage: '/favicon.gif'
})
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 2024 新生知訊網` : '2024 新生知訊網';
  }
})
</script>

<style lang="scss">
body {
  box-sizing: border-box;
}
</style>