<template>
  <div id="eighth-stage" class="relative w-full h-screen flex flex-col items-center">
    <img
      alt="tree"
      src="~/assets/images/bg/bg_decorate_04.png"
      :class="[
        'left-tree absolute transform',
        '2xl:translate-y-[33.61111vw] 2xl:translate-x-[-23.22917vw] 2xl:w-[22.98611vw]',
        '3xl:translate-y-[28.125vw] 3xl:translate-x-[-25.75521vw] 3xl:w-[17.23958vw]',
      ]"
    >

    <img
      alt="tree"
      src="~/assets/images/bg/bg_decorate_08.png"
      :class="[
        'right-tree absolute transform',
        '2xl:translate-y-[35.41667vw] 2xl:translate-x-[21.31944vw] 2xl:w-[23.75vw]',
        '3xl:translate-y-[29.47917vw] 3xl:translate-x-[23.28125vw] 3xl:w-[17.8125vw]'
      ]"
    >

    <div
      :class="[
        'topic flex flex-no-wrap absolute transform ',
        '2xl:translate-y-[2.77778vw] 2xl:w-[32.36111vw] 2xl:h-[10.48611vw]',
        '3xl:translate-y-[2.08333vw] 3xl:w-[24.27083vw] 3xl:h-[7.86458vw]'
      ]"
    >
      <h2
        :class="[
          'absolute flex items-center text-primary-default tracking-wider transform ',
          '2xl:translate-y-[1.80694vw] 2xl:translate-x-[7.50417vw] 2xl:h-[5.20833vw]',
          '3xl:translate-y-[1.35521vw] 2xl:translate-x-[5.62812vw] 2xl:h-[3.90625vw]'
        ]"
      >
        贊助單位
      </h2>
      <img
        :class="[
          'h-full',
          '2xl:w-[6.84514vw]',
          '3xl:w-[5.13385vw]'
        ]"
        alt="talk_left"
        src="~/assets/images/bg/bg_talking_l.png"
      >
      <img
        :class="[
          'h-full',
          '2xl:w-[18.67083vw]',
          '3xl:w-[14.00313vw]'
        ]"
        alt="tak_middle"
        src="~/assets/images/bg/bg_talking_c.png"
      >
      <img
        :class="[
          'h-full',
          '2xl:w-[6.84514vw]',
          '3xl:w-[5.13385vw]'
        ]"
        alt="talk_right"
        src="~/assets/images/bg/bg_talking_r.png"
      >
    </div>

    <div
      :class="[
        'logo flex flex-no-wrap absolute transform ',
        '2xl:translate-y-[15vw] 2xl:w-[83.05556vw] 2xl:h-[25.625vw] 2xl:gap-x-[8.71528vw]',
        '3xl:translate-y-[12.70833vw] 3xl:w-[62.29167vw] 3xl:h-[19.21875vw] 3xl:gap-x-[6.53646vw]',
      ]"
    >
      <div
        :class="[
          'logo1 flex flex-col justify-center items-center',
          '2xl:gap-y-[0.83333vw]',
          '3xl:gap-y-[0.625vw]'
        ]"
      >
        <div
          :class="[
            'relative flex justify-center items-center',
            '2xl:w-[21.875vw]',
            '3xl:w-[16.40625vw]'
          ]"
        >
          <img
            alt="btn-sponsor-on"
            class="w-full"
            src="~/assets/images/btn/btn_sponsor_h.png"
          >
          <img
            alt="btn-sponsor-off"
            class="btn-sponsor-off hover:opacity-0 absolute top-0 left-0 w-full"
            src="~/assets/images/btn/btn_sponsor.png"
          >
          <img
            alt=""
            :class="[
              'absolute transform',
              '2xl:translate-x-[-0.45139vw] 2xl:translate-y-[-0.65972vw] 2xl:w-[17.36111vw]',
              '3xl:translate-x-[-0.28646vw] 3xl:translate-y-[-0.44271vw] 3xl:w-[13.02083vw]'
            ]"
            src="~/assets/images/main/logo_blockstudio.png"
          >
        </div>
        <div
          :class="[
            'flex justify-center border-secondary-dark rounded-[60PX]',
            '2xl:px-[1.66667vw] 2xl:py-[0.27778vw]',
            '3xl:px-[1.25vw] 3xl:py-[0.20833vw]'
          ]"
        >
          <h5 class="text-secondary-dark tracking-wider">
            #版塊設計
          </h5>
        </div>
      </div>
      <div
        :class="[
          'logo1 flex flex-col justify-center items-center',
          '2xl:gap-y-[0.83333vw]',
          '3xl:gap-y-[0.625vw]'
        ]"
      >
        <div
          :class="[
            'relative flex justify-center items-center',
            '2xl:w-[21.875vw]',
            '3xl:w-[16.40625vw]'
          ]"
        >
          <img
            alt="btn-sponsor-on"
            class="w-full"
            src="~/assets/images/btn/btn_sponsor_h.png"
          >
          <img
            alt="btn-sponsor-off"
            class="btn-sponsor-off hover:opacity-0 absolute top-0 left-0 w-full"
            src="~/assets/images/btn/btn_sponsor.png"
          >
          <img
            alt=""
            :class="[
              'absolute transform',
              '2xl:translate-x-[-0.45139vw] 2xl:translate-y-[-0.65972vw] 2xl:w-[17.36111vw]',
              '3xl:translate-x-[-0.28646vw] 3xl:translate-y-[-0.44271vw] 3xl:w-[13.02083vw]'
            ]"
            src="~/assets/images/main/logo_titansoft.png"
          >
        </div>
        <div
          :class="[
            'flex justify-center border-secondary-dark rounded-[60PX]',
            '2xl:px-[1.66667vw] 2xl:py-[0.27778vw]',
            '3xl:px-[1.25vw] 3xl:py-[0.20833vw]'
          ]"
        >
          <h5 class="text-secondary-dark tracking-wider">
            #鈦坦科技
          </h5>
        </div>
      </div>
      <div
        :class="[
          'logo1 flex flex-col justify-center items-center',
          '2xl:gap-y-[0.83333vw]',
          '3xl:gap-y-[0.625vw]'
        ]"
      >
        <div
          :class="[
            'relative flex justify-center items-center',
            '2xl:w-[21.875vw]',
            '3xl:w-[16.40625vw]'
          ]"
        >
          <img
            alt="btn-sponsor-on"
            class="w-full"
            src="~/assets/images/btn/btn_sponsor_h.png"
          >
          <img
            alt="btn-sponsor-off"
            class="btn-sponsor-off hover:opacity-0 absolute top-0 left-0 w-full"
            src="~/assets/images/btn/btn_sponsor.png"
          >
          <img
            alt=""
            :class="[
              'absolute transform',
              '2xl:translate-x-[-0.45139vw] 2xl:translate-y-[-0.65972vw] 2xl:w-[17.36111vw]',
              '3xl:translate-x-[-0.28646vw] 3xl:translate-y-[-0.44271vw] 3xl:w-[13.02083vw]'
            ]"
            src="~/assets/images/main/logo_kdanmobile.png"
          >
        </div>
        <div
          :class="[
            'flex justify-center border-secondary-dark rounded-[60PX]',
            '2xl:px-[1.66667vw] 2xl:py-[0.27778vw]',
            '3xl:px-[1.25vw] 3xl:py-[0.20833vw]'
          ]"
        >
          <h5 class="text-secondary-dark tracking-wider">
            #凱鈿科技
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
