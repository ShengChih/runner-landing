<template>
  <div id="second-stage" class="relative w-full h-screen flex flex-col items-center">
    <Asking
      :class="[
        'asking absolute transform',
        '2xl:translate-y-[2.77778vw]',
        '3xl:translate-y-[2.08333vw]'
      ]"
    />
    <Questions
      :class="[
        'absolute transform',
        '2xl:translate-x-[0.34722vw] 2xl:translate-y-[16.04167vw]',
        '3xl:translate-x-0 3xl:translate-y-[13.48958vw]'
      ]"
    />
  </div>
</template>
