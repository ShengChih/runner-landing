<template>
  <div id="third-stage" class="relative w-full h-screen flex flex-col items-center">
    <WeeklyTopic class="third-part1 absolute 2xl:translate-y-[40px] "/>

    <h5 class="third-part1 absolute font-normal text-secondary-dark 2xl:translate-y-[191px]">以下兩個角色進行攜手合作</h5>
    
    <div class="third-part2 2xl:translate-y-[264px] flex 2xl:w-[1180px] 2xl:gap-x-[60px]">
      <div class="flex-1 flex flex-col items-center 2xl:gap-y-[16px] 2xl:h-[196px]">
        <BasePressButton />
        <h4 class="text-primary-default font-normal 2xl:h-[45px]">
          前端工程師
        </h4>
      </div>

      <div class="flex-1 flex flex-col items-center 2xl:gap-y-[16px] 2xl:h-[196px]">
        <BasePressButton />
        <h4 class="text-primary-default font-normal 2xl:h-[45px]">
          UI 設計師
        </h4>
      </div>

      <div class="flex-1 flex flex-col items-center 2xl:gap-y-[16px] 2xl:h-[196px]">
        <BasePressButton />
        <h4 class="text-primary-default font-normal 2xl:h-[45px]">
          團體組(UI+前端)
        </h4>
      </div>

    </div>
  </div>
</template>