<template>
  <div id="seventh-stage" class="relative w-full h-screen flex flex-col items-center">
    <div
      :class="[
        'topic absolute flex flex-no-wrap transform',
        '2xl:translate-y-[2.77778vw] 2xl:w-[43.54167vw] 2xl:h-[10.48611vw]',
        '3xl:translate-y-[2.08333vw] 3xl:w-[32.65625vw] 3xl:h-[7.86458vw]'
      ]"
    >
      <h2
        :class="[
          'absolute transform flex items-center justify-center text-primary-default tracking-wider',
          '2xl:translate-y-[1.80694vw] 2xl:translate-x-[5.37708vw] 2xl:h-[5.20833vw]',
          '3xl:translate-y-[1.35417vw] 3xl:translate-x-[4.03333vw] 3xl:h-[3.90625vw]'
        ]"
      >
        還有比賽等著你！
      </h2>
      <BaseTalkWindow />
    </div>

    <div
      :class="[
        'award-info absolute transform flex',
        '2xl:translate-y-[17.43056vw] 2xl:w-[81.94444vw] 2xl:gap-x-[4.16667vw]',
        '3xl:translate-y-[13.07292vw] 3xl:w-[62.5vw] 3xl:gap-x-[3.125vw]'
      ]"
    >
      <div
        :class="[
          'relative',
          '2xl:w-[35.20833vw] 2xl:[35.20833vw]',
          '3xl:w-[19.53125vw] 3xl:h-[19.53125vw]'
        ]"
      >
        <img
          alt="award-light"
          src="~/assets/images/main/award_light.png"
          class="award-light absolute w-full h-full "
        >
        <img
          alt="award-trophy"
          src="~/assets/images/main/award_trophy.png"
          class="absolute w-full h-full"
        >
      </div>

      <div
        :class="[
          'flex flex-col',
          '2xl:gap-y-[2.22222vw]',
          '3xl:gap-y-[3.125vw]'
        ]"
      >
        <div class="flex flex-col">
          <h4
            :class="[
              'text-highlight-default flex items-center',
              '2xl:h-[3.125vw]',
              '3xl:h-[2.34375vw]'
            ]"
          >
            評審機制
          </h4>
          <p
            :class="[
              'text-primary-default',
              '2xl:leading-[2.01389vw] 2xl:h-[6.04167vw]',
              '3xl:leading-[1.51042vw] 3xl:h-[3.02083vw]'
            ]"
          >
            初選： 將由六角學院前端、UI 評審進行第一波篩選。<br>
            決選： 由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！
          </p>
        </div>
        <div class="flex flex-col">
          <h4
            :class="[
              'text-highlight-default flex items-center',
              '2xl:h-[3.125vw]',
              '3xl:h-[2.34375vw]'
            ]"
          >
            獎項
          </h4>
          <ol
            type="1"
            :class="[
              'text-primary-default',
              '2xl:leading-[2.36111vw] 2xl:h-[8.75vw]',
              '3xl:leading-[1.77083vw] 3xl:h-[6.5625vw]'
            ]"
          >
            <li>1. 初選佳作 共六十位 數位獎狀</li>
            <li>2. 個人企業獎 共六位 NTD <strong class="text-highlight-default">3,000</strong> /位</li>
            <li>3. 團體企業獎 共三組 NTD <strong class="text-highlight-default">10,000</strong> /組</li>
            <li>4. 以上皆提供完賽數位獎狀</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
