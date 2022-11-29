<script setup lang="ts">
if (process.client) {
  console.log(window)
}
</script>

<template>
  <div id="app" class="w-screen overflow-x-hidden flex justify-center">
    <NuxtLayout>
      <MainVisual />

      <Avatar class="right-0 avatar 2xl:translate-x-[-15px] 3xl:translate-x-[-20px]" />
    </NuxtLayout>
  </div>
</template>
