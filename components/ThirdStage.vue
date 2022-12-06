<template>
  <div id="third-stage" class="relative w-full h-screen flex flex-col items-center">
    <WeeklyTopic class="third-part1 absolute transform 2xl:translate-y-[2.77778vw] "/>

    <h5 class="third-part1 absolute font-normal text-secondary-dark transform 2xl:translate-y-[13.26389vw]">以下兩個角色進行攜手合作</h5>
    
    <div class="third-part2 transform 2xl:translate-y-[18.33333vw] flex 2xl:w-[81.94444vw] 2xl:gap-x-[4.16667vw]">
      <div class="flex-1 flex flex-col items-center 2xl:gap-y-[1.11111vw] 2xl:h-[13.61111vw]">
        <BasePressButton />
        <h4 class="text-primary-default font-normal 2xl:h-[3.125vw]">
          前端工程師
        </h4>
      </div>

      <div class="flex-1 flex flex-col items-center 2xl:gap-y-[1.11111vw] 2xl:h-[13.61111vw]">
        <BasePressButton />
        <h4 class="text-primary-default font-normal 2xl:h-[3.125vw]">
          UI 設計師
        </h4>
      </div>

      <div class="flex-1 flex flex-col items-center 2xl:gap-y-[1.11111vw] 2xl:h-[13.61111vw]">
        <BasePressButton />
        <h4 class="text-primary-default font-normal 2xl:h-[3.125vw]">
          團體組(UI+前端)
        </h4>
      </div>

    </div>
  </div>
</template>