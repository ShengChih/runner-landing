<template>
  <div
    id="fourth-stage"
    :class="[
      'relative w-full h-screen flex flex-col items-center'
    ]"
  >
    <BarrierCardList
      :class="[
        'barrier-cards absolute transform',
        '2xl:translate-y-[7.01389vw]',
        '3xl:translate-y-[6.71875vw]'
      ]"
    />
    <BarrierIntroduce
      :class="[
        'barrier-topic absolute transform',
        '2xl:translate-y-[2.77778vw]',
        '3xl:translate-y-[2.08333vw]'
      ]"
    />
    <h5
      :class="[
        'barrier-topic absolute text-center text-secondary-dark transform',
        '2xl:translate-y-[13.26389vw]',
        '3xl:translate-y-[9.94792vw]'
      ]"
    >
      各路廠商強強聯手<br>
      共同設計出接地氣的網頁互動挑戰關卡
    </h5>
  </div>
</template>
