<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁 ({{ data }})</h1>
      <form class="my-4 flex space-x-4" action="/test" method="post">
        <NuxtLink to="/about">前往 About</NuxtLink>
        <NuxtLink to="/Product">前往 Product</NuxtLink>
        <NuxtLink to="/docs">前往 Docs</NuxtLink>
        <NuxtLink to="/custom">前往 Custom</NuxtLink>
        <button @click="refresh" type="button">Update</button>
        <input name="test" value="123" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
// const { data, refresh } = await useFetch('/home.json', {
//   // default: () => ({
//   //   success: false
//   // }),
//   // pick: ['success']
// })
const { data, refresh } = //await useAsyncData('test', async () => {
  //   let t = $fetch('/home.json');
  //   return await t
  // })
  // console.log(data)
  // await useAsyncData('data', () => fetch('http://localhost:3000/api/IP').then(response => response.text()), {
  //   default: () => ("Loading...")
  // })
  await fetchData('/test')
// refresh()
useHead({ title: '首頁' })
</script>