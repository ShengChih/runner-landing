<template>
  <div id="ninth-stage" class="relative w-full h-screen flex flex-col items-center">
    <LeftCloud
      :class="[
        'left-cloud absolute transform',
        '2xl:translate-y-[29.375vw] 2xl:translate-x-[-25.20833vw]',
        '3xl:translate-y-[22.03125vw] 3xl:translate-x-[-31.40625vw]'
      ]"
    />
    <RightCloud
      :class="[
        'right-cloud absolute transform',
        '2xl:translate-y-[31.59722vw] 2xl:translate-x-[35.17361vw]',
        '3xl:translate-y-[23.69792vw] 3xl:translate-x-[32.63021vw]'
      ]"
    />
    <img
      src="~/assets/images/main/finish.png"
      alt="finish-point"
      :class="[
        'finish-point absolute',
        '2xl:w-[99.30556vw] 2xl:h-[75vw]',
        '3xl:w-[74.47917vw] 3xl:h-[56.25vw]'
      ]"
    >
  </div>
</template>
