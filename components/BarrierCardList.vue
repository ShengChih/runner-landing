<template>
  <div
    :class="[
      'flex flex-col',
      '2xl:gap-y-[2.22222vw] 2xl:w-[85.97222vw] 2xl:h-[57.15278vw]',
      '3xl:gap-y-[0.41667vw] 3xl:w-[74.89583vw] 3xl:h-[42.86458vw]'
    ]"
  >
    <div
      :class="[
        'card card1 flex flex-no-wrap',
        '2xl:gap-x-[2.77778vw]',
        '3xl:gap-x-[2.08333vw]'
      ]"
    >
      <img
        alt="the f2e official website redesigned"
        src="~/assets/images/main/week_1.png"
        :class="[
          '2xl:h-[13.19444vw]',
          '3xl:h-[9.89583vw]'
        ]"
      >
      <div
        :class="[
          '2xl:h-[17.56944vw]',
          '3xl:h-[13.17708vw]'
        ]"
      >
        <h2
          :class="[
            'text-highlight-default flex items-center',
            '2xl:h-[5.20833vw]',
            '3xl:h-[3.90625vw]'
          ]"
        >
          Week 1
        </h2>
        <h3
          :class="[
            'text-primary-default flex items-center',
            '2xl:h-[4.93056vw] 2xl:py-[0.55556vw]',
            '3xl:h-[2.86458vw] 3xl:py-[0.41667vw]'
          ]"
        >
          The F2E 活動網站設計
        </h3>
        <div
          :class="[
            'text-secondary-dark flex flex-row',
            '2xl:h-[4.86111vw] 2xl:gap-x-[0.83333vw] 2xl:pt-[0.55556vw]',
            '3xl:h-[3.64583vw] 3xl:gap-x-[0.625vw] 3xl:pt-[0.41667vw]'
          ]"
        >
          <h5
            :class="[
              'border-secondary-dark rounded-[60PX]',
              '2xl:h-[2.91667vw] 2xl:px-[1.66667vw] 2xl:py-[0.27778vw]',
              '3xl:h-[2.1875vw] 3xl:px-[1.25vw] 3xl:py-[0.20833vw]'
            ]"
          >
            Parallax Scrolling
          </h5>
          <h5
            :class="[
              'border-secondary-dark rounded-[60PX]',
              '2xl:h-[2.91667vw] 2xl:px-[1.66667vw] 2xl:py-[0.27778vw]',
              '3xl:h-[2.1875vw] 3xl:px-[1.25vw] 3xl:py-[0.20833vw]'
            ]"
          >
            #版塊設計
          </h5>
        </div>
        <button
          :class="[
            'bg-secondary-dark font-medium text-white rounded-[60PX]',
            '2xl:px-[1.66667vw] 2xl:py-[0.27778vw] 2xl:h-[2.56944vw]',
            '3xl:px-[1.25vw] 3xl:py-[0.20833vw] 3xl:h-[1.92708vw]'
          ]"
        >
          查看關卡細節
        </button>
      </div>
    </div>

    <div
      :class="[
        'card card2 flex flex-no-wrap flex-row-reverse',
        '2xl:gap-x-[2.77778vw]',
        '3xl:gap-x-[2.08333vw]'
      ]"
    >
      <img
        alt=""
        src="~/assets/images/main/week_2.png"
        :class="[
          '2xl:h-[13.19444vw]',
          '3xl:h-[9.89583vw]'
        ]"
      >
      <div
        :class="[
          'flex flex-col items-end',
          '2xl:h-[17.56944vw]',
          '3xl:h-[13.17708vw]'
        ]"
      >
        <h2
          :class="[
            'text-highlight-default flex items-center',
            '2xl:h-[5.20833vw]',
            '3xl:h-[3.90625vw]'
          ]"
        >
          Week 2
        </h2>
        <h3
          :class="[
            'text-primary-default flex items-center',
            '2xl:h-[4.93056vw] 2xl:py-[0.55556vw]',
            '3xl:h-[2.86458vw] 3xl:py-[0.41667vw]'
          ]"
        >
          今晚，我想來點點簽
        </h3>
        <div
          :class="[
            'text-secondary-dark flex flex-row',
            '2xl:h-[4.86111vw] 2xl:gap-x-[0.83333vw] 2xl:pt-[0.55556vw]',
            '3xl:h-[3.64583vw] 3xl:gap-x-[0.625vw] 3xl:pt-[0.41667vw]'
          ]"
        >
          <h5
            :class="[
              'border-secondary-dark rounded-[60PX]',
              '2xl:h-[2.91667vw] 2xl:px-[1.66667vw] 2xl:py-[0.27778vw]',
              '3xl:h-[2.1875vw] 3xl:px-[1.25vw] 3xl:py-[0.20833vw]'
            ]"
          >
            Canvas
          </h5>
          <h5
            :class="[
              'border-secondary-dark rounded-[60PX]',
              '2xl:h-[2.91667vw] 2xl:px-[1.66667vw] 2xl:py-[0.27778vw]',
              '3xl:h-[2.1875vw] 3xl:px-[1.25vw] 3xl:py-[0.20833vw]'
            ]"
          >
            #凱鈿行動科技
          </h5>
        </div>
        <button
          :class="[
            'bg-secondary-dark font-medium text-white rounded-[60PX]',
            '2xl:px-[1.66667vw] 2xl:py-[0.27778vw] 2xl:h-[2.56944vw]',
            '3xl:px-[1.25vw] 3xl:py-[0.20833vw] 3xl:h-[1.92708vw]'
          ]"
        >
          查看關卡細節
        </button>
      </div>
    </div>

    <div
      :class="[
        'card card3 flex flex-no-wrap',
        '2xl:gap-x-[2.77778vw]',
        '3xl:gap-x-[2.08333vw]'
      ]"
    >
      <img
        alt=""
        src="~/assets/images/main/week_3.png"
        :class="[
          '2xl:h-[13.19444vw]',
          '3xl:h-[9.89583vw]'
        ]"
      >
      <div
        :class="[
          '2xl:h-[17.56944vw]',
          '3xl:h-[13.17708vw]'
        ]"
      >
        <h2
          :class="[
            'text-highlight-default flex items-center',
            '2xl:h-[5.20833vw]',
            '3xl:h-[3.90625vw]'
          ]"
        >
          Week 3
        </h2>
        <h3
          :class="[
            'text-primary-default flex items-center',
            '2xl:h-[4.93056vw] 2xl:py-[0.55556vw]',
            '3xl:h-[2.86458vw] 3xl:py-[0.41667vw]'
          ]"
        >
          Scrum 新手村
        </h3>
        <div
          :class="[
            'text-secondary-dark flex flex-row',
            '2xl:h-[4.86111vw] 2xl:gap-x-[0.83333vw] 2xl:pt-[0.55556vw]',
            '3xl:h-[3.64583vw] 3xl:gap-x-[0.625vw] 3xl:pt-[0.41667vw]'
          ]"
        >
          <h5
            :class="[
              'border-secondary-dark rounded-[60PX]',
              '2xl:h-[2.91667vw] 2xl:px-[1.66667vw] 2xl:py-[0.27778vw]',
              '3xl:h-[2.1875vw] 3xl:px-[1.25vw] 3xl:py-[0.20833vw]'
            ]"
          >
            JS draggable
          </h5>
          <h5
            :class="[
              'border-secondary-dark rounded-[60PX]',
              '2xl:h-[2.91667vw] 2xl:px-[1.66667vw] 2xl:py-[0.27778vw]',
              '3xl:h-[2.1875vw] 3xl:px-[1.25vw] 3xl:py-[0.20833vw]'
            ]"
          >
            #鈦坦科技
          </h5>
        </div>
        <button
          :class="[
            'bg-secondary-dark font-medium text-white rounded-[60PX]',
            '2xl:px-[1.66667vw] 2xl:py-[0.27778vw] 2xl:h-[2.56944vw]',
            '3xl:px-[1.25vw] 3xl:py-[0.20833vw] 3xl:h-[1.92708vw]'
          ]"
        >
          查看關卡細節
        </button>
      </div>
    </div>
  </div>
</template>
