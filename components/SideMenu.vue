<template>
  <div class="h-screen flex flex-no-wrap">
    <img
      :class="[
        'h-full',
        '2xl:w-[1.38889vw]',
        '3xl:w-[1.04167vw]'
      ]"
      alt="menu"
      src="~/assets/images/bg/bg_menuSide.png"
    >
    <img
      :class="[
        'transform',
        '2xl:w-[4.16667vw] 2xl:h-[4.62986vw] 2xl:translate-y-[35.20833vw]',
        '3xl:w-[3.125vw] 3xl:h-[3.4724vw] 3xl:translate-y-[26.40625vw]'
      ]"
      alt="hide menu"
      src="~/assets/images/btn/btn_burger_open.png"
    >
  </div>
</template>
