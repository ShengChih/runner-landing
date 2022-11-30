<script setup lang="ts">
if (process.client) {
  console.log(window)
}
</script>

<template>
  <div id="app" class="w-screen overflow-x-hidden flex justify-center">
    <NuxtLayout>
      <MainVisual />

      <Avatar class="right-0 avatar 2xl:translate-x-[-1.04167vw] 2xl:translate-y-[2.08333vw]" />
    </NuxtLayout>
  </div>
</template>
