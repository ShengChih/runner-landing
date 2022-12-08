<template>
  <div id="fifth-stage" class="relative flex justify-center w-full h-screen">
    <div
      :class="[
        'relative flex flex-col items-center transform',
        '2xl:h-[38.88889vw] 2xl:px-[3.50694vw] 2xl:translate-y-[5.83333vw]',
        '3xl:h-[29.58333vw] 3xl:px-[3.15104vw] 3xl:translate-y-[4.16667vw]'
      ]"
    >
      <div
        :class="[
          'flex flex-no-wrap h-min',
          '2xl:gap-x-[12.77778vw]',
          '3xl:gap-x-[9.58333vw]'
        ]"
      >
        <div
          :class="[
            'date-card1 flex flex-col items-center',
            '2xl:w-[20.97222vw] 2xl:h-[36.94444vw]',
            '3xl:w-[15.72917vw] 3xl:h-[27.70833vw]'
          ]"
        >
          <div
            :class="[
              'flex flex-col items-center bg-secondary-default',
              '2xl:p-[1.38889vw]',
              '3xl:p-[1.04167vw]'
            ]"
          >
            <div
              :class="[
                'flex flex-col items-center',
                '2xl:gap-y-[1.04167vw] 2xl:pt-[0.55556vw]',
                '3xl:gap-y-[0.78125vw] 3xl:pt-[0.41667vw]'
              ]"
            >
              <BasePressButton />
              <h2
                :class="[
                  'text-highlight-default flex items-center justify-center',
                  '2xl:h-[5.20833vw]',
                  '3xl:h-[3.90625vw]'
                ]"
              >
                SIGN UP
              </h2>
            </div>

            <div
              :class="[
                'flex flex-col items-center',
                '2xl:gap-y-[0.83333vw] 2xl:mt-[0.83333vw]'
              ]"
            >
              <h4
                :class="[
                  'text-center text-white bg-primary-default flex items-center justify-center rounded-[50PX]',
                  '2xl:h-[4.23611vw] 2xl:px-[1.94444vw] 2xl:py-[0.55556vw]',
                  '3xl:h-[3.17708vw] 3xl:px-[1.45833vw] 3xl:py-[0.41667vw]'
                ]"
              >
                10/13 - 11/6
              </h4>
              <h5
                :class="[
                  'text-secondary-dark tracking-wider flex items-center justify-center',
                  '2xl:h-[2.36111vw]',
                  '3xl:h-[1.77083vw]'
                ]"
              >
                截止前可修改報名組別
              </h5>
            </div>
          </div>

          <img
            alt="date-weekLing"
            src="~/assets/images/main/date_weekLine.png"
            :class="[
              '2xl:h-[9.72222vw]',
              '3xl:h-[7.29167vw]'
            ]"
          >
        </div>

        <div
          :class="[
            'date-card2 relative flex flex-col items-center',
            '2xl:w-[22.98611vw] 2xl:h-[33.75vw]',
            '3xl:w-[17.23958vw] 3xl:h-[25.3125vw]'
          ]"
        >
          <img
            alt="date-weekLing"
            src="~/assets/images/main/date_weekLine.png"
            :class="[
              'absolute transform ',
              '2xl:translate-y-[24.02778vw] 2xl:h-[9.72222vw]',
              '3xl:translate-y-[18.02083vw] 3xl:h-[7.29167vw]'
            ]"
          >
          <div
            :class="[
              'absolute w-full flex flex-col items-center bg-secondary-default',
              '2xl:p-[1.38889vw]',
              '3xl:p-[1.04167vw]'
            ]"
          >
            <div
              :class="[
                'flex flex-col items-center',
                '2xl:gap-y-[0.57361vw] 2xl:pt-[2.84722vw]',
                '3xl:gap-y-[0.43021vw] 2xl:pt-[2.13542vw]'
              ]"
            >
              <img
                alt="date-weekLing"
                src="~/assets/images/main/date_start.png"
                :class="[
                  '2xl:h-[7.55139vw]',
                  '3xl:h-[5.66354vw]'
                ]"
              >
              <h2
                :class="[
                  'text-highlight-default items-center justify-center',
                  '2xl:h-[5.20833vw]',
                  '3xl:h-[3.90625vw]'
                ]"
              >
                START
              </h2>
            </div>
            <div
              :class="[
                'flex flex-col items-center  ',
                '2xl:gap-y-[0.83333vw] 2xl:mt-[0.83333vw]',
                '3xl:gap-y-[0.625vw] 3xl:mt-[0.625vw]'
              ]"
            >
              <h4
                :class="[
                  'flex items-center justify-center text-center text-white bg-primary-default rounded-[50PX]',
                  '2xl:h-[4.23611vw] 2xl:px-[1.94444vw] 2xl:py-[0.55556vw]',
                  '3xl:h-[3.17708vw] 3xl:px-[1.45833vw] 3xl:py-[0.41667vw]'
                ]"
              >
                10/31 - 11/28
              </h4>
              <h5
                :class="[
                  'text-center text-secondary-dark flex items-center justify-center',
                  '2xl:h-[4.72222vw]',
                  '3xl:h-[3.54167vw]'
                ]"
              >
                10/31(一) UI、團體組開賽<br>11/7(一) 前端組開賽
              </h5>
            </div>
          </div>
        </div>

        <div
          :class="[
            'date-card3 relative flex flex-col items-center',
            '2xl:w-[22.08333vw] 2xl:h-[36.73611vw]',
            '3xl:w-[16.5625vw] 3xl:h-[27.55208vw]'
          ]"
        >
          <img
            alt="date-weekLing"
            src="~/assets/images/main/date_weekLine.png"
            :class="[
              'absolute transform ',
              '2xl:translate-y-[27.01389vw] 2xl:h-[9.72222vw]',
              '3xl:translate-y-[20.26042vw] 3xl:h-[7.29167vw]'
            ]"
          >

          <div
            :class="[
              'absolute flex flex-col items-center bg-secondary-default ',
              '2xl:p-[1.38889vw]',
              '3xl:p-[1.04167vw]'
            ]"
          >
            <div
              :class="[
                'flex flex-col items-center ',
                '2xl:gap-y-[1.04167vw] 2xl:pt-[2.79583vw]',
                '3xl:gap-y-[0.46875vw] 3xl:pt-[2.09687vw]'
              ]"
            >
              <img
                alt="date-weekLing"
                src="~/assets/images/main/date_upload.png"
                :class="[
                  '2xl:h-[7.55139vw]',
                  '3xl:h-[5.66354vw]'
                ]"
              >
              <h2
                :class="[
                  'text-highlight-default flex items-center justify-center',
                  '2xl:h-[5.20833vw]',
                  '3xl:h-[3.90625vw]'
                ]"
              >
                UPLOAD
              </h2>
            </div>
            <div
              :class="[
                'flex flex-col items-center',
                '2xl:gap-y-[0.83333vw] 2xl:mt-[0.83333vw]',
                '3xl:gap-y-[0.625vw] 3xl:mt-[0.625vw]'
              ]"
            >
              <h4
                :class="[
                  'flex items-center justify-center text-white bg-primary-default rounded-[50PX]',
                  '2xl:h-[4.23611vw] 2xl:px-[1.94444vw] 2xl:py-[0.55556vw]',
                  '3xl:h-[3.17708vw] 3xl:px-[1.45833vw] 3xl:py-[0.41667vw]'
                ]"
              >
                10/31 - 11/28
              </h4>
              <span class="text-center">
                <h5
                  :class="[
                    'text-secondary-dark tracking-wider ',
                    '2xl:h-[2.36111vw] 2xl:leading-[2.36111vw]',
                    '3xl:h-[1.77083vw] 3xl:leading-[1.77083vw]'
                  ]"
                >依賽程登錄作品</h5>
                <p
                  :class="[
                    'text-highlight-default',
                    '2xl:text-[18PX]'
                  ]"
                >額外競賽： 主題豐厚獎金等著你</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="date-line"
        src="~/assets/images/main/date_line.png"
        :class="[
          'date-line absolute transform',
          '2xl:w-[100vw] 2xl:h-[6.94444vw] 2xl:translate-y-[32.5vw]',
          '3xl:w-[75vw] 3xl:h-[5.20833vw] 3xl:translate-y-[24.375vw]'
        ]"
      >
      <div
        :class="[
          'absolute right-0 cover-date-line absolute transform bg-secondary-default',
          '2xl:w-[100vw] 2xl:h-[6.94444vw] 2xl:translate-y-[32.5vw]',
          '3xl:w-[75vw] 3xl:h-[5.20833vw] 3xl:translate-y-[24.375vw]'
        ]"
      />
    </div>
  </div>
</template>
