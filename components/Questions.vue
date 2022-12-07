<template>
  <div
    :class="[
      'flex',
      '2xl:gap-x-[1.38889vw] 2xl:w-[97.91667vw] 2xl:h-[32.01389vw]',
      '3xl:gap-x-[1.04167vw] 3xl:w-[75vw] 3xl:h-[24.01042vw]'
    ]"
  >
    <div
      :class="[
        'question1 flex flex-col w-full h-full',
        '2xl:gap-y-[0.27778vw]',
        '3xl:gap-y-[0.20833vw]'
      ]"
    >
      <h4
        :class="[
          'text-highlight-default text-center',
          '2xl:h-[3.125vw]',
          '3xl:h-[2.34375vw]'
        ]"
      >
        羨慕別人的酷酷網頁動畫？
      </h4>
      <img
        alt="question-1"
        :class="[
          '2xl:h-[28.61111vw]',
          '3xl:h-[21.45833vw]'
        ]"
        src="~/assets/images/main/question_1.png"
      >
    </div>

    <div
      :class="[
        'question2 flex flex-col w-full h-full',
        '2xl:gap-y-[0.27778vw]',
        '3xl:gap-y-[0.20833vw]'
      ]"
    >
      <h4
        :class="[
          'text-highlight-default text-center',
          '2xl:h-[3.125vw]',
          '3xl:h-[2.34375vw]'
        ]"
      >
        滿足不了同事的許願？
      </h4>
      <img
        alt="question-2"
        :class="[
          'text-highlight-default text-center',
          '2xl:h-[28.61111vw]',
          '3xl:h-[21.45833vw]'
        ]"
        src="~/assets/images/main/question_2.png"
      >
    </div>

    <div
      :class="[
        'question2 flex flex-col w-full h-full',
        '2xl:gap-y-[0.27778vw]',
        '3xl:gap-y-[0.20833vw]'
      ]"
    >
      <h4
        :class="[
          'text-highlight-default text-center',
          '2xl:h-[3.125vw]',
          '3xl:h-[2.34375vw]'
        ]"
      >
        動畫技能樹太雜無從下手？
      </h4>
      <img
        alt="question-3"
        :class="[
          'text-highlight-default text-center',
          '2xl:h-[28.61111vw]',
          '3xl:h-[21.45833vw]'
        ]"
        src="~/assets/images/main/question_3.png"
      >
    </div>
  </div>
</template>
