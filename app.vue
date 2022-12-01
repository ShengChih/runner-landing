<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)

  const timelines: ReturnType<typeof gsap.timeline>[] = []

  console.log(window)

  onMounted(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#first-stage',
        pinnedContainer: '#app',
        pin: true,
        scrub: true,
        markers: true,
        id: 't1'
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
      .to('#mask-top .f2e_logo', { opacity: 1 })

    timelines.push(t1)

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#second-stage',
        pinnedContainer: '#app',
        pin: true,
        scrub: true,
        markers: true,
        id: 't2'
      }
    })

    t2.set('#second-stage .asking', { opacity: 0 })
      .set('#second-stage .question1', { opacity: 0, xPercent: -10 } )
      .set('#second-stage .question2', { opacity: 0 } )
      .set('#second-stage .question3', { opacity: 0, xPercent: 10 } )
      .set('#mask-top .f2e_logo', { opacity: 0 } )
      .set('#mask-top .left-tree', { scaleX: 1.5, scaleY: -1.5, opacity: 0, yPercent: -5 })
      .set('#mask-top .right-tree', { scale: 1.5 , opacity: 0, yPercent: -4 })
      .to('#mask-top .f2e_logo', { opacity: 1, duration: 0.1 })
      .to('#second-stage .asking', { opacity: 1, duration: 0.1 })
      .to('#mask-top .playground', { scale: 0.7684, duration: 0.5 }, '<')
      .to('#mask-top .playground', { yPercent: 13, duration: 0.5 }, '<')
      .to('#mask-top .pig, .dog', { scale: 0.7086, duration: 0.5, yPercent: 15 }, '<')
      .to('#mask-top .cat', { scale: 0.70533, duration: 0.5, yPercent: 15 }, '<')
      .to('#mask-top .left-tree', { scaleX: 1, scaleY: -1 ,opacity: 1, yPercent: -5, duration: 0.5 }, '<')
      .to('#mask-top .right-tree', { scale:1, opacity: 1, yPercent: -5, duration: 0.5 }, '<')
      .to('#mask-top .wait', { duration: 1 })
      .to('#second-stage .question1', { opacity: 1, xPercent: 0, duration:0.5 })
      .to('#mask-top .left-tree', { xPercent: 40, yPercent: -10, duration:0.5 }, '<')
      .to('#mask-top .right-tree', { xPercent: -40, yPercent: -10, duration:0.5 }, '<')
      .to('#second-stage .question2', { opacity: 1, duration:0.5 })
      .to('#mask-top .left-tree', { xPercent: 100, yPercent: -20, duration:0.5 }, '<')
      .to('#mask-top .right-tree', { xPercent: -100, yPercent: -20, duration:0.5 }, '<')
      .to('#second-stage .question3', { opacity: 1, xPercent: 0, duration:0.5 })
      .to('#mask-top .left-tree', { xPercent: 100, opacity: 0, yPercent: -30, duration:0.5 }, '<')
      .to('#mask-top .right-tree', { xPercent: -100, opacity: 0, yPercent: -30, duration:0.5 }, '<')

    timelines.push(t2)

    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: '#third-stage',
        pin: true,
        pinnedContainer: '#app',
        scrub: true,
        markers: true,
        id: "t3",
        pinSpacing: true,
      }
    })

    t3.set('#third-stage .third-part1', { opacity: 0 })
      .set('#third-stage .third-part2', { opacity: 0, yPercent: 15 })
      .to('#second-stage', { opacity: 0, duration: 0.1 })
      .to('#mask-top .playground', { scale: 0.979, yPercent: 0, duration: 0.5 }, '<')
      .to('#mask-top .dog', { scale: 1.169, xPercent: -3, yPercent: -3, duration: 0.5 }, '<')
      .to('#mask-top .pig', { scale: 1.169, xPercent: 3, yPercent: -3, duration: 0.5 }, '<')
      .to('#mask-top .cat', { scale: 0.987, yPercent: 5, duration: 0.5 }, '<')
      .to('#mask-top .wait', { duration: 0.5 })
      .to('#third-stage .third-part1', { opacity: 1, duration: 0.3 })
      .to('#mask-top .wait', { duration: 0.3 })
      .to('#third-stage .third-part2', { opacity: 1, yPercent: 0, duration: 0.3 })
      .to('#mask-top .wait', { duration: 0.5 })
      .to('#third-stage .third-part1, .third-part2', { opacity: 0, duration: 1 })
      .to('#mask-top .wait', { duration: 1 })
      .to('#mask-top .playground', { scale: 0.681, duration: 0.5 }, '<')
      .to('#mask-top .playground', { yPercent: 15, duration: 0.5 }, '<')
      .to('#mask-top .dog', { scale: 0.39, xPercent: 40, yPercent:30, duration: 0.5 }, '<')
      .to('#mask-top .pig', { scale: 0.39, xPercent: -25, yPercent:40, duration: 0.5 }, '<')
      .to('#mask-top .cat', { scale: 0.282, xPercent: 0, yPercent:30, duration: 0.5 }, '<')

    timelines.push(t3)
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
      <div
        id="mask-top"
        class="wait w-screen h-screen fixed flex justify-center top-0 left-0"
      >
        <Tree class="left-tree fixed -scale-x-100 2xl:bottom-[-1.21389vw] 2xl:translate-x-[-31.94444vw] " />
        <Tree class="right-tree fixed 2xl:bottom-[-1.21389vw] 2xl:translate-x-[31.25vw] " />
        <Playground class="playground fixed 2xl:top-[61.73611vw]" />
        <Dog class="dog fixed 2xl:translate-y-[34.86111vw] 2xl:translate-x-[-20.69444vw]" />
        <Cat class="cat fixed 2xl:translate-y-[34.16667vw] 2xl:translate-x-[-0.65972vw]" />
        <Pig class="pig fixed 2xl:translate-y-[39.65278vw] 2xl:translate-x-[20.27778vw]" />
        <Avatar class="right-0 avatar 2xl:translate-x-[-1.04167vw] 2xl:translate-y-[2.08333vw]" />
        <JoinButton class="fixed 2xl:translate-x-[45.03472vw] 2xl:translate-y-[57.70833vw]" />
        <F2ELogo class="f2e_logo fixed 2xl:translate-y-[2.08333vw] 2xl:translate-x-[-40.27778vw] " />
        <Map class="fixed 2xl:w-[18.05556vw] 2xl:h-[11.80556vw] 2xl:translate-x-[-38.88889vw] 2xl:translate-y-[57.91667vw]" />
        <SideMenu class="fixed 2xl:left-[-0.34722vw]" />
      </div>
    </NuxtLayout>
  </div>
</template>
