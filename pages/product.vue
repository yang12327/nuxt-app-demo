<template>
  <section class="container">
    <div>
      <h1 class="title">
        商品名稱
      </h1>
      <p class="description">
        這是商品敘述，絕對激安，錯過可惜
      </p>
      <div class="links">
        <a href="#" target="_blank" class="button--green">加入購物車</a>
        <a href="#" target="_blank" class="button--grey">立刻購買</a>
      </div>
    </div>
  </section>
</template>

<style>
/* ... */
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}

.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>

<script setup>
definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})
</script>