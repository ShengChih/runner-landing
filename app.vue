<script setup lang="ts">
// import '@unocss/reset/normalize.css'
// import 'virtual:windi.css'
import './global.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const isLoading = ref(true)
const maxTime = ref(3000)
const currentTime = ref(0)
const progress = ref(0)
const timer = ref(null)

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)

  const timelines: ReturnType<typeof gsap.timeline>[] = []

  const clearProgress = () => {
    if (timer.value) {
      clearInterval(timer.value)
    }
  }

  const updateProgress = () => {
    timer.value = setInterval(() => {
      if (!isLoading.value || progress.value > maxTime.value) {
        progress.value = 100
        clearProgress()
        return
      }

      currentTime.value += Math.floor(Math.random() * 150)
      progress.value = (currentTime.value / maxTime.value) * 100
    }, 100)
  }

  onMounted(() => {
    updateProgress()

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#first-stage',
        pinnedContainer: '#app',
        pin: true,
        scrub: true
      }
    })

    t1.set('#first-stage .light-red', { opacity: 1 })
      .set('#first-stage .light-orange', { opacity: 0 })
      .set('#first-stage .light-green', { opacity: 0 })
      .to('#first-stage .light-red', { opacity: 0 })
      .to('#first-stage .light-orange', { opacity: 1 }, '<')
      .to('#first-stage .light-orange', { opacity: 0 })
      .to('#first-stage .light-green', {
        opacity: 1,
        onComplete: () => {
          (document.querySelector('#first-stage .traffic-text') as HTMLElement).innerText = 'GO!!!'
        },
        onReverseComplete: () => {
          (document.querySelector('#first-stage .traffic-text') as HTMLElement).innerText = 'READY?'
        }
      }, '<')
      .to('#first-stage .starting-point', { opacity: 0, duration: 1 })
      .to('#first-stage .starting-point', { scaleX: 0, duration: 0.66 }, '<')
      .to('#first-stage .starting-point', { scaleY: 0, yPercent: 100, duration: 2 }, '<')
      .to('#first-stage .starting-info', { opacity: 0, duration: 0.2, scale: 0 }, '<')
      .to('#first-stage .left-cloud', { scale: 0, opacity: 0, duration: 2, xPercent: 100, yPercent: -50 }, '<')
      .to('#first-stage .right-cloud', { scale: 0, opacity: 0, duration: 2, xPercent: -100, yPercent: -50 }, '<')
      .to('#first-stage .traffic-light', { opacity: 0 }, '<')
      .to('#mask-top .f2e-logo', { opacity: 1 })

    timelines.push(t1)

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#second-stage',
        pinnedContainer: '#app',
        pin: true,
        scrub: true
      }
    })

    t2.set('#second-stage .asking', { opacity: 0 })
      .set('#second-stage .question1', { opacity: 0, xPercent: -10 })
      .set('#second-stage .question2', { opacity: 0 })
      .set('#second-stage .question3', { opacity: 0, xPercent: 10 })
      .set('#mask-top .f2e-logo', { opacity: 0 })
      .set('#mask-top .left-tree', { scaleX: 1.5, scaleY: -1.5, opacity: 0, yPercent: -5 })
      .set('#mask-top .right-tree', { scale: 1.5, opacity: 0, yPercent: -4 })
      .to('#mask-top .f2e-logo', { opacity: 1, duration: 0.1 })
      .to('#second-stage .asking', { opacity: 1, duration: 0.1 })
      .to('#mask-top .playground', { scale: 0.7684, duration: 0.5 }, '<')
      .to('#mask-top .playground', { yPercent: 13, duration: 0.5 }, '<')
      .to('#mask-top .pig, .dog', { scale: 0.7086, duration: 0.5, yPercent: 15 }, '<')
      .to('#mask-top .cat', { scale: 0.70533, duration: 0.5, yPercent: 15 }, '<')
      .to('#mask-top .left-tree', { scaleX: 1, scaleY: -1, opacity: 1, yPercent: -5, duration: 0.5 }, '<')
      .to('#mask-top .right-tree', { scale: 1, opacity: 1, yPercent: -5, duration: 0.5 }, '<')
      .to('#second-stage .question1', { opacity: 1, xPercent: 0, duration: 0.5 })
      .to('#mask-top .left-tree', { xPercent: 40, yPercent: -10, duration: 0.5 }, '<')
      .to('#mask-top .right-tree', { xPercent: -40, yPercent: -10, duration: 0.5 }, '<')
      .to('#second-stage .question2', { opacity: 1, duration: 0.5 })
      .to('#mask-top .left-tree', { xPercent: 100, yPercent: -20, duration: 0.5 }, '<')
      .to('#mask-top .right-tree', { xPercent: -100, yPercent: -20, duration: 0.5 }, '<')
      .to('#second-stage .question3', { opacity: 1, xPercent: 0, duration: 0.5 })
      .to('#mask-top .left-tree', { xPercent: 100, opacity: 0, yPercent: -30, duration: 0.5 }, '<')
      .to('#mask-top .right-tree', { xPercent: -100, opacity: 0, yPercent: -30, duration: 0.5 }, '<')

    timelines.push(t2)

    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: '#third-stage',
        pin: true,
        pinnedContainer: '#app',
        scrub: true
      }
    })

    t3.set('#third-stage .third-part1', { opacity: 0 })
      .set('#third-stage .third-part2', { opacity: 0, yPercent: 15 })
      .to('#second-stage', { opacity: 0, duration: 0.1 })
      .to('#mask-top .playground', { scale: 0.979, yPercent: 0, duration: 0.5 }, '<')
      .to('#mask-top .dog', { scale: 1.169, xPercent: -10, yPercent: -5, duration: 0.5 }, '<')
      .to('#mask-top .pig', { scale: 1.169, xPercent: 3, yPercent: -3, duration: 0.5 }, '<')
      .to('#mask-top .cat', { scale: 0.987, yPercent: -5, duration: 0.5 }, '<')
      .to('#third-stage .third-part1', { opacity: 1, duration: 0.3 })
      .to('#third-stage .third-part2', { opacity: 1, yPercent: 0, duration: 0.3 })
      .to('#third-stage .third-part1, .third-part2', { opacity: 0, duration: 1 })
      .to('#mask-top .playground', { scale: 0.681, duration: 0.5 }, '<')
      .to('#mask-top .playground', { yPercent: 15, duration: 0.5 }, '<')
      .to('#mask-top .dog', { scale: 0.39, xPercent: 40, yPercent: 30, duration: 0.5 }, '<')
      .to('#mask-top .pig', { scale: 0.39, xPercent: -25, yPercent: 40, duration: 0.5 }, '<')
      .to('#mask-top .cat', { scale: 0.282, xPercent: 0, yPercent: 30, duration: 0.5 }, '<')

    timelines.push(t3)

    const t4 = gsap.timeline({
      scrollTrigger: {
        trigger: '#fourth-stage',
        pin: true,
        pinnedContainer: '#app',
        scrub: true
      }
    })

    t4.set('#fourth-stage .barrier-topic, .card', { opacity: 0 })
      .set('#fourth-stage .barrier-cards', { yPercent: 100 })
      .to('#fourth-stage .barrier-topic', { opacity: 1, duration: 0.1 })
      .to('#fourth-stage .barrier-cards', { yPercent: -80, duration: 3 })
      .to(
        '#fourth-stage .card1',
        {
          keyframes: {
            '0%': { opacity: 0 },
            '50%': { opacity: 1 },
            '100%': { opacity: 0 }
          },
          duration: 1
        },
        '<'
      )
      .to(
        '#fourth-stage .card2',
        {
          keyframes: {
            '0%': { opacity: 0 },
            '50%': { opacity: 1 },
            '100%': { opacity: 0 }
          },
          delay: 0.5,
          duration: 1
        },
        '<'
      )
      .to(
        '#fourth-stage .card3',
        {
          keyframes: {
            '0%': { opacity: 0 },
            '50%': { opacity: 1 },
            '100%': { opacity: 0 }
          },
          delay: 0.5,
          duration: 1
        },
        '<'
      )
      .to('#mask-top .playground', { scale: 0.936, yPercent: 0, duration: 0.5 })
      .to('#mask-top .dog', { scale: 0.88, xPercent: -3, yPercent: 1, duration: 0.5 }, '<')
      .to('#mask-top .pig', { scale: 0.907, xPercent: 0, yPercent: -3, duration: 0.5 }, '<')
      .to('#mask-top .cat', { scale: 0.70, yPercent: 5, duration: 0.5 }, '<')
      .to('#fourth-stage .barrier-topic', { opacity: 0, duration: 0.1, delay: 1 })

    timelines.push(t4)

    const t5 = gsap.timeline({
      scrollTrigger: {
        trigger: '#fifth-stage',
        pin: true,
        pinnedContainer: '#app',
        scrub: true
      }
    })

    t5.set('#fifth-stage .date-card1, .date-card2, .date-card3', { opacity: 0, yPercent: 5 })
      .to('#fifth-stage .cover-date-line', {
        width: 0,
        duration: 2
      })
      .to('#fifth-stage .date-card1', { yPercent: 0, opacity: 1, duration: 0.3 })
      .to('#fifth-stage .date-card2', { yPercent: 0, opacity: 1, duration: 0.3 })
      .to('#fifth-stage .date-card3', { yPercent: 0, opacity: 1, duration: 0.3 })
      .to('#fifth-stage', { opacity: 0, duration: 3, delay: 1 })

    timelines.push(t5)

    const t6 = gsap.timeline({
      scrollTrigger: {
        trigger: '#sixth-stage',
        pin: true,
        pinnedContainer: '#app',
        scrub: true
      }
    })

    t6.set('#sixth-stage .sixth-text', { scale: 3, opacity: 0 })
      .set('#sixth-stage .cloud', { xPercent: -150 })
      .set('#sixth-stage .mumble', { xPercent: 150 })
      .to('#mask-top .playground', { scale: 0.979, yPercent: 0, duration: 0.5 }, '<')
      .to('#mask-top .dog', { scale: 1.169, xPercent: -10, yPercent: -5, duration: 0.5 }, '<')
      .to('#mask-top .pig', { scale: 1.169, xPercent: 3, yPercent: -3, duration: 0.5 }, '<')
      .to('#mask-top .cat', { scale: 0.987, yPercent: -5, duration: 0.5 }, '<')
      .to('#sixth-stage .cloud', { xPercent: 0, duration: 1 })
      .to('#sixth-stage .mumble', { xPercent: 0, duration: 1 }, '<')
      .to('#sixth-stage .sixth-text', { scale: 1, opacity: 1 }, '<')
      .to('#sixth-stage .cloud, .mumble, .sixth-text', { opacity: 0 })

    timelines.push(t6)

    const t7 = gsap.timeline({
      scrollTrigger: {
        trigger: '#seventh-stage',
        pin: true,
        pinnedContainer: '#app',
        scrub: true
      }
    })

    t7.set('#seventh-stage .topic', { opacity: 0 })
      .set('#seventh-stage .award-info', { xPercent: -100, opacity: 0 })
      .to('#seventh-stage .topic', { opacity: 0, duration: 0.2 })
      .to('#seventh-stage .award-info', { xPercent: 0, opacity: 1, duration: 1 }, '<')
      .to('#seventh-stage .award-light', { rotate: -1240, duration: 0.5, delay: 0.5 }, '<')
      .to('#mask-top .playground', { scale: 0.715, yPercent: 13, duration: 0.5 }, '<')
      .to('#mask-top .dog', { scale: 0.8245, xPercent: -10, yPercent: 10, duration: 0.5 }, '<')
      .to('#mask-top .pig', { scale: 0.871, xPercent: 3, yPercent: 5, duration: 0.5 }, '<')
      .to('#mask-top .cat', { scale: 0.5705, yPercent: 13, duration: 0.5 }, '<')
      .to('#seventh-stage', { opacity: 0, xPercent: 150, duration: 0.5, delay: 1 })

    timelines.push(t7)

    const t8 = gsap.timeline({
      scrollTrigger: {
        trigger: '#eighth-stage',
        pin: true,
        pinnedContainer: '#app',
        scrub: true,
        // markers: true,
        id: 't8'
      }
    })

    t8.set('#eighth-stage .topic', { opacity: 0 })
      .set('#eighth-stage .left-tree', { xPercent: -40, yPercent: 10, scale: 1.5, opacity: 0 })
      .set('#eighth-stage .right-tree', { xPercent: 40, yPercent: 10, scale: 1.5, opacity: 0 })
      .set('#eighth-stage .logo1, #eighth-stage .logo2, #eighth-stage .logo3', { opacity: 0, yPercent: 30 })
      .to('#mask-top .dog', { scale: 0.927, xPercent: -10, yPercent: 5, duration: 0.5 })
      .to('#mask-top .pig', { scale: 0.692, xPercent: 3, yPercent: 5, duration: 0.5 }, '<')
      .to('#mask-top .cat', { scale: 0.646, yPercent: 13, duration: 0.5 }, '<')
      .to('#eighth-stage .topic', { opacity: 1 }, '<')
      .to('#eighth-stage .left-tree, #eighth-stage .right-tree', { opacity: 1, duration: 0 })
      .to('#eighth-stage .left-tree, #eighth-stage .right-tree', { scale: 1, duration: 0.7 }, '<')
      .to('#eighth-stage .left-tree, #eighth-stage .right-tree', { xPercent: 0, yPercent: 0, duration: 1 }, '<')
      .to('#eighth-stage .logo1', { opacity: 1, yPercent: 0, duration: 0.5, delay: 0 })
      .to('#eighth-stage .logo2', { opacity: 1, yPercent: 0, duration: 0.5, delay: 0.3 })
      .to('#eighth-stage .logo3', { opacity: 1, yPercent: 0, duration: 0.5, delay: 0.3 })
      .to('#eighth-stage', { opacity: 0, xPercent: 150, duration: 0.5, delay: 1 })

    timelines.push(t8)

    const t9 = gsap.timeline({
      scrollTrigger: {
        trigger: '#ninth-stage',
        pin: true,
        pinnedContainer: '#app',
        scrub: true,
        // markers: true,
        id: 't9',
        pinSpacing: true
      }
    })

    t9.set('#mask-top .finish-logo', { opacity: 0, yPercent: 30 })
      .set('#mask-top .finish-line', { opacity: 0 })
      .set('#ninth-stage .finish-point', { scale: 1.5 })
      .set('#ninth-stage .left-cloud', { scale: 1.3, xPercent: -100, opacity: 0 })
      .set('#ninth-stage .right-cloud', { scale: 1.3, xPercent: 100, opacity: 0 })
      .set('#ninth-stage .finish-point', { opacity: 0 })
      .to('#ninth-stage .left-cloud', { opacity: 1, duration: 0.2 })
      .to('#ninth-stage .right-cloud', { opacity: 1, duration: 0.2 }, '<')
      .to('#ninth-stage .left-cloud', { scale: 1, duration: 2, xPercent: 20, yPercent: -50 }, '<')
      .to('#ninth-stage .right-cloud', { scale: 1, duration: 2, xPercent: -20, yPercent: -50 }, '<')
      .to('#ninth-stage .finish-point', { opacity: 1, duration: 0.2 })
      .to('#mask-top .finish-line', { opacity: 1, duration: 0 })
      .to('#mask-top .dog', { scale: 1.4, xPercent: -55, yPercent: 0, duration: 2 })
      .to('#mask-top .pig', { scale: 1.4, xPercent: 55, yPercent: 0, duration: 2 }, '<')
      .to('#mask-top .cat', { scale: 1.4, xPercent: 0, yPercent: 0, duration: 2 }, '<')
      .to('#ninth-stage .finish-point', { scale: 1, duration: 2 })
      .to('#mask-top .finish-line-l', { opacity: 1, duration: 0.1 }, '<')
      .to('#mask-top .finish-line-r', { opacity: 1, duration: 0.1 }, '<')
      .to('#mask-top .finish-line-l', { xPercent: -23.6, duration: 1 })
      .to('#mask-top .finish-line-l', { rotate: -10, duration: 0.5 })
      .to('#mask-top .finish-line-r', { rotate: 10, duration: 0.5 }, '<')
      .to('#mask-top .finish-line-l', { xPercent: -200, duration: 5 })
      .to('#mask-top .finish-line-r', { xPercent: 200, duration: 5 }, '<')
      .to('#mask-top .dog', { scale: 2, opacity: 0, duration: 3 })
      .to('#mask-top .pig', { scale: 2, opacity: 0, duration: 3 }, '<')
      .to('#mask-top .cat', { scale: 2, opacity: 0, duration: 3 }, '<')
      .to('#ninth-stage', { opacity: 0, duration: 3 })
      .to('#mask-top .f2e-logo', { opacity: 0, duration: 3 })
      .to('#mask-top .finish-logo', { opacity: 1, yPercent: 0, duration: 0.5 }, '<')
      .to('#mask-top .map', { opacity: 0, duration: 0.5 }, '<')
      .to('#mask-top .base-join-btn', { opacity: 0, duration: 0.5 }, '<')

    timelines.push(t9)

    setTimeout(() => {
      isLoading.value = false
    }, maxTime.value)
  })

  onUnmounted(() => {
    timelines && timelines.map(tl => tl && tl.kill())
  })
}

</script>

<template>
  <div id="app" class=" w-screen overflow-x-hidden flex flex-col">
    <NuxtLayout>
      <FirstStage />
      <SecondStage />
      <ThirdStage />
      <FourthStage />
      <FifthStage />
      <SixthStage />
      <SeventhStage />
      <EighthStage />
      <NinthStage />

      <div
        id="mask-top"
        class="wait w-screen h-screen fixed flex justify-center top-0 left-0"
      >
        <Tree
          :class="[
            'left-tree fixed transform -scale-x-100',
            '2xl:translate-y-[62.9861vw] 2xl:translate-x-[-31.94444vw]',
            '3xl:translate-y-[49.6875vw] 3xl:translate-x-[-24.58333vw]'
          ]"
        />
        <Tree
          :class="[
            'right-tree transform fixed ',
            '2xl:translate-y-[62.9861vw] 2xl:translate-x-[31.25vw]',
            '3xl:translate-y-[49.6875vw] 3xl:translate-x-[21.77083vw]'
          ]"
        />
        <Playground class="playground fixed transform 2xl:translate-y-[61.73611vw] 3xl:translate-y-[49.21875vw]" />
        <Dog
          :class="[
            'dog fixed transform',
            '2xl:translate-y-[34.86111vw] 2xl:translate-x-[-20.69444vw]',
            '3xl:translate-y-[24.11458vw] 3xl:translate-x-[-17.47396vw]'
          ]"
        />
        <Cat
          :class="[
            'cat fixed transform',
            '2xl:translate-y-[34.16667vw] 2xl:translate-x-[-0.65972vw]',
            '3xl:translate-y-[23.54167vw] 3xl:translate-x-[-0.05208vw]'
          ]"
        />
        <Pig
          :class="[
            'pig fixed transform',
            '2xl:translate-y-[39.65278vw] 2xl:translate-x-[20.27778vw]',
            '3xl:translate-y-[28.33333vw] 3xl:translate-x-[17.99479vw]'
          ]"
        />
        <Avatar
          :class="[
            'right-0 avatar transform',
            '2xl:translate-y-[2.08333vw] 2xl:translate-x-[-1.04167vw]',
            '3xl:translate-y-[1.5625vw] 3xl:translate-x-[-1.04167vw]'
          ]"
        />
        <JoinButton
          :class="[
            'base-join-btn fixed transform',
            '2xl:translate-y-[57.70833vw] 2xl:translate-x-[45.03472vw]',
            '3xl:translate-y-[46.19792vw] 3xl:translate-x-[46.27604vw]'
          ]"
        />
        <F2ELogo
          :class="[
            'f2e-logo fixed transform',
            '2xl:translate-y-[2.08333vw] 2xl:translate-x-[-40.27778vw] 2xl:w-[13.88889vw] 2xl:h-[10.34097vw]',
            '3xl:translate-y-[1.5625vw] 3xl:translate-x-[-42.70833vw] 3xl:w-[10.41667vw] 3xl:h-[7.75573vw]'
          ]"
        />
        <img
          alt="finish-line"
          src="~/assets/images/main/finishLine_l.png"
          :class="[
            'finish-line finish-line-l absolute transform',
            '2xl:translate-x-[-15.97222vw] 2xl:translate-y-[50.76389vw] 2xl:w-[95.20833vw] 2xl:h-[8.99306vw]',
            '3xl:translate-x-[-24.60938vw] 3xl:translate-y-[38.07292vw] 3xl:w-[50.78125vw] 3xl:h-[6.74479vw]'
          ]"
        >
        <img
          alt="finish-line"
          src="~/assets/images/main/finishLine_r.png"
          :class="[
            'finish-line finish-line-r absolute transform',
            '2xl:translate-x-[35.41667vw] 2xl:translate-y-[50.76389vw] 2xl:w-[95.20833vw] 2xl:h-[8.99306vw]',
            '3xl:translate-x-[24.60938vw] 3xl:translate-y-[38.07292vw] 3xl:w-[50.78125vw] 3xl:h-[6.74479vw]',
          ]"
        >
        <Map
          :class="[
            'map fixed transform',
            '2xl:w-[18.05556vw] 2xl:h-[11.80556vw] 2xl:translate-x-[-38.88889vw] 2xl:translate-y-[57.91667vw]',
            '3xl:w-[11.69375vw] 3xl:h-[7.29062vw] 3xl:translate-x-[-41.54115vw] 3xl:translate-y-[47.24063vw]'
          ]"
        />
        <SideMenu class="fixed 2xl:left-[-0.34722vw] 3xl:left-0" />
        <FinishLogo class="finish-logo fixed transform 2xl:translate-y-[8.61111vw] " />
      </div>

      <div v-if="isLoading" class="fixed w-screen h-screen top-0 left-0 bg-secondary-default flex items-center justify-center">
        <BaseLoading :progress="progress" class="2xl:w-[32.36111vw] 2xl:h-[16.52778vw] 3xl:w-[24.375vw] 3xl:h-[12.39583vw]" />
      </div>
    </NuxtLayout>
  </div>
</template>
