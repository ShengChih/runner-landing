<template>
  <div class="traffic-light flex flex-wrap  2xl:w-[19.09722vw] 2xl:h-[10.69444vw] 2xl:pb-[0.41667vw]">
    <h1 class="traffic-text tracking-wider text-center text-highlight-default w-full 2xl:leading-[2.77778vw] 2xl:h-[2.77778vw]">
      READY?
    </h1>

    <div class="relative flex items-center w-full 2xl:h-[7.5vw]">
      <img
        alt="traffic_light"
        src="~/assets/images/main/ready_frame.png"
        class="absolute w-full h-full object-fit"
      >
      <div class="w-full absolute flex flex-no-wrap">
        <div class="grow flex-grow" />
        <div class=" flex flex-row 2xl:gap-x-[1.11111vw] 2xl:w-[12.43056vw] 2xl:h-[3.40278vw]">
          <img
            class="light-red 2xl:translate-x-[0.13889vw]"
            alt="red"
            src="~/assets/images/main/ready_3.png"
          >
          <img
            class="light-orange 2xl:translate-x-[0.13889vw]"
            alt="orange"
            src="~/assets/images/main/ready_2.png"
          >
          <img
            class="light-green 2xl:translate-x-[0.13889vw]"
            alt="green"
            src="~/assets/images/main/ready_1.png"
          >
        </div>
        <div class="grow-[2] flex-grow-[2]" />
      </div>
    </div>
  </div>
</template>
