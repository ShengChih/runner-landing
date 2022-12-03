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
      class="2xl:w-[190px] 2xl:h-[122px]"
    >
    <div class="border-primary-default 2xl:w-full 2xl:h-[16px] 2xl:rounded-[20px]">
      <div :style="progressStyle" class="bg-primary-default 2xl:h-[16px] 2xl:rounded-[20px]"></div>
    </div>
  </div>
</template>