<template>
  <div
    :class="[
      'traffic-light flex flex-wrap',
      '2xl:w-[19.09722vw] 2xl:h-[10.69444vw] 2xl:pb-[0.41667vw]',
      '3xl:w-[14.32292vw] 3xl:h-[8.02083vw] 3xl:pb-[0.3125vw]'
    ]"
  >
    <h1
      :class="[
        'traffic-text tracking-wider flex items-cetner justify-center text-highlight-default w-full',
        '2xl:h-[2.77778vw]',
        '3xl:h-[2.34375vw]'
      ]"
    >
      READY?
    </h1>

    <div
      :class="[
        'relative flex items-center w-full',
        '2xl:h-[7.5vw]',
        '3xl:h-[5.625vw]'
      ]"
    >
      <img
        alt="traffic_light"
        src="~/assets/images/main/ready_frame.png"
        class="absolute w-full h-full object-fit"
      >
      <div class="w-full absolute flex flex-no-wrap">
        <div class="grow flex-grow" />
        <div
          :class="[
            'flex flex-row',
            '2xl:gap-x-[1.11111vw] 2xl:w-[12.43056vw] 2xl:h-[3.40278vw]',
            '3xl:gap-x-[0.83333vw] 3xl:w-[9.32292vw] 3xl:h-[2.55208vw]',
          ]"
        >
          <img
            class="light-red"
            alt="red"
            src="~/assets/images/main/ready_3.png"
          >
          <img
            class="light-orange"
            alt="orange"
            src="~/assets/images/main/ready_2.png"
          >
          <img
            class="light-green"
            alt="green"
            src="~/assets/images/main/ready_1.png"
          >
        </div>
        <div class="grow-[2] flex-grow-[2]" />
      </div>
    </div>
  </div>
</template>
