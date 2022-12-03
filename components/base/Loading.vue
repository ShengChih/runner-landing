<script setup>
const props = defineProps({
  progress: 0
})

const progressStyle = computed(() => {
  return `width: ${props.progress}%`
})

</script>

<template>
  <div class="flex flex-col items-center">
    <img
      alt="loading-gif"
      src="~/assets\images\loading.gif"
      class="2xl:w-[13.19444vw] 2xl:h-[8.47222vw]"
    >
    <div class="border-primary-default 2xl:w-full 2xl:h-[1.11111vw] 2xl:rounded-[20PX]">
      <div :style="progressStyle" class="bg-primary-default 2xl:h-[1.11111vw] 2xl:rounded-[20PX]"></div>
    </div>
  </div>
</template>