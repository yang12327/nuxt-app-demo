<template>
  <div class="m-4 bg-white">
    <NuxtLink class="pb-4 text-2xl text-slate-600" to="/">這裡是最外層 app.vue</NuxtLink>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
<script setup>
useHead({
  title: '歡迎光臨',
  titleTemplate: '%s - Nuxt 3 Blog',
})
</script>