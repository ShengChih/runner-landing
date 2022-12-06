<template>
  <div id="fifth-stage" class="relative flex justify-center w-full h-screen">

    <div class="relative flex flex-col items-center 2xl:h-[38.88889vw] 2xl:px-[3.50694vw] transform 2xl:translate-y-[5.83333vw]">
      <div class="flex flex-no-wrap h-min 2xl:gap-x-[12.77778vw]">

        <div class="date-card1 flex flex-col items-center 2xl:w-[20.97222vw] 2xl:h-[36.94444vw]">
          <div class="flex flex-col items-center bg-secondary-default 2xl:p-[1.38889vw]">
            <div class="flex flex-col items-center 2xl:gap-y-[1.04167vw] 2xl:pt-[0.55556vw]">
              <BasePressButton />
              <h2 class="text-highlight-default 2xl:h-[5.20833vw] 2xl:leading-[5.20833vw]">SIGN UP</h2>
            </div>
            <div class="flex flex-col items-center 2xl:gap-y-[0.83333vw] 2xl:mt-[0.83333vw]">
              <h4 class="text-center text-white bg-primary-default 2xl:rounded-[50PX] 2xl:h-[4.23611vw] 2xl:leading-[3.125vw] 2xl:px-[1.94444vw] 2xl:py-[0.55556vw]">10/13 - 11/6</h4>
              <h5 class="text-secondary-dark tracking-wider	2xl:h-[2.36111vw] 2xl:leading-[2.36111vw]">截止前可修改報名組別</h5>
            </div>
          </div>
          
          <img
            alt="date-weekLing"
            src="~/assets/images/main/date_weekLine.png"
            class="2xl:h-[9.72222vw]"
          >
        </div>

        <div class="date-card2 relative flex flex-col items-center 2xl:w-[22.98611vw] 2xl:h-[33.75vw]">
          <img
            alt="date-weekLing"
            src="~/assets/images/main/date_weekLine.png"
            class="absolute transform 2xl:translate-y-[24.02778vw] 2xl:h-[9.72222vw]"
          >
          <div class="absolute w-full flex flex-col items-center bg-secondary-default 2xl:p-[1.38889vw]">
            <div class="flex flex-col items-center 2xl:gap-y-[0.57361vw] 2xl:pt-[2.84722vw]">
              <img
                alt="date-weekLing"
                src="~/assets/images/main/date_start.png"
                class="2xl:h-[7.55139vw]"
              >
              <h2 class="text-highlight-default 2xl:h-[5.20833vw] 2xl:leading-[5.20833vw]">START</h2>
            </div>
            <div class="flex flex-col items-center  2xl:gap-y-[0.83333vw] 2xl:mt-[0.83333vw]">
              <h4 class="text-center text-white bg-primary-default 2xl:rounded-[50PX] 2xl:h-[4.23611vw] 2xl:leading-[3.125vw] 2xl:px-[1.94444vw] 2xl:py-[0.55556vw]">10/31 - 11/28</h4>
              <h5 class="text-center text-secondary-dark 	2xl:h-[4.72222vw] 2xl:leading-[2.36111vw]">10/31(一) UI、團體組開賽<br>11/7(一) 前端組開賽</h5>
            </div>
          </div>
        </div>

        <div class="date-card3 relative flex flex-col items-center 2xl:w-[22.08333vw] 2xl:h-[36.73611vw]">
          <img
            alt="date-weekLing"
            src="~/assets/images/main/date_weekLine.png"
            class="absolute 2xl:h-[9.72222vw] transform 2xl:translate-y-[27.01389vw]"
          >

          <div class="absolute flex flex-col items-center bg-secondary-default 2xl:p-[1.38889vw]">
            <div class="flex flex-col items-center 2xl:gap-y-[1.04167vw] 2xl:pt-[2.79583vw]">
              <img
                alt="date-weekLing"
                src="~/assets/images/main/date_upload.png"
                class="2xl:h-[7.55139vw]"
              >
              <h2 class="text-highlight-default 2xl:h-[5.20833vw] 2xl:leading-[5.20833vw]">UPLOAD</h2>
            </div>
            <div class="flex flex-col items-center 2xl:gap-y-[0.83333vw] 2xl:mt-[0.83333vw]">
              <h4 class="text-center text-white bg-primary-default 2xl:rounded-[50PX] 2xl:h-[4.23611vw] 2xl:leading-[3.125vw] 2xl:px-[1.94444vw] 2xl:py-[0.55556vw]">10/31 - 11/28</h4>
              <span class="text-center">
                <h5 class="text-secondary-dark tracking-wider	2xl:h-[2.36111vw] 2xl:leading-[2.36111vw]">依賽程登錄作品</h5>
                <p class="2xl:text-[18PX] text-highlight-default ">額外競賽： 主題豐厚獎金等著你</p>
              </span>
            </div>
          </div>
          
          
        </div>

      </div>
      <img
        alt="date-line"
        src="~/assets/images/main/date_line.png"
        class="date-line absolute 2xl:w-[100vw] 2xl:h-[6.94444vw] transform 2xl:translate-y-[32.5vw]"
      >
      <div
        class="absolute right-0 cover-date-line absolute bg-secondary-default 2xl:w-[100vw] 2xl:h-[6.94444vw] transform 2xl:translate-y-[32.5vw]"
      ></div>

    </div>

  </div>
</template>
