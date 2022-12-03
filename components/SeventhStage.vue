<template>
  <div id="seventh-stage" class="relative w-full h-screen flex flex-col items-center">

    <div class="topic absolute 2xl:translate-y-[40px] flex flex-no-wrap 2xl:w-[627px] 2xl:h-[10.48611vw]">
      <h2 class="absolute 2xl:translate-y-[1.80694vw] 2xl:translate-x-[77.43px] text-center text-primary-default tracking-wider 2xl:h-[5.20833vw] 2xl:leading-[5.20833vw]">
        還有比賽等著你！
      </h2>
      <BaseTalkWindow />
    </div>

    <div class="award-info absolute 2xl:translate-y-[251px] flex 2xl:w-[1180px] 2xl:gap-x-[60px]">
      <div class="relative 2xl:w-[375px] 2xl:[375px]">
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
      
      <div class="flex flex-col 2xl:gap-y-[32px]">
        <div class="flex flex-col">
          <h4 class="text-highlight-default 2xl:h-[45px] 2xl:leading-[45px]">評審機制</h4>
          <p class="text-primary-default 2xl:leading-[29px] 2xl:h-[87px]">
            初選： 將由六角學院前端、UI 評審進行第一波篩選。<br>
            決選： 由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！
          </p>
        </div>
        <div class="flex flex-col">
          <h4 class="text-highlight-default 2xl:h-[45px] 2xl:leading-[45px]">獎項</h4>
          <ol type="1" class="text-primary-default 2xl:leading-[34px] 2xl:h-[126px]">
            <li>1. 初選佳作 共六十位 數位獎狀</li>
            <li>2. 個人企業獎 共六位 NTD <strong class="text-highlight-default">3,000</strong> /位</li>
            <li>3. 團體企業獎 共三組 NTD <strong class="text-highlight-default">10,000</strong> /組</li>
            <li>4. 以上皆提供完賽數位獎狀</li>
          </ol>
        </div>
      </div>

    </div>
  </div>
</template>