<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)

  let tl: ReturnType<typeof gsap.timeline> | undefined

  console.log(window)

  onMounted(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#app',
        pin: true,
        scrub: true
      }
    })

    tl.set('#starting_visual .light-red', { opacity: 1 })
      .set('#starting_visual .light-orange', { opacity: 0 })
      .set('#starting_visual .light-green', { opacity: 0 })
      .to('#starting_visual .light-red', { opacity: 0 })
      .to('#starting_visual .light-orange', { opacity: 1 }, '<')
      .to('#starting_visual .light-orange', { opacity: 0 })
      .to('#starting_visual .light-green', { opacity: 1 }, '<')
      .to('#starting_visual .starting-point', { opacity: 0, duration: 4 })
      .to('#starting_visual .starting-point', { scaleX: 0, duration: 2 }, '<')
      .to('#starting_visual .starting-point', { scaleY: 0, yPercent: 50, duration: 2 }, '<')
      .to('#starting_visual .starting-info', { opacity: 0, duration: 0.2, scale: 0 }, '<')
      .to('#starting_visual .left-cloud', { scale: 0, opacity: 0, duration: 2, xPercent: 100, yPercent: -50 }, '<')
      .to('#starting_visual .right-cloud', { scale: 0, opacity: 0, duration: 2, xPercent: -100, yPercent: -50 }, '<')
      .to('#starting_visual .traffic-light', { opacity: 0 }, '<')
  })

  onUnmounted(() => {
    tl && tl.kill()
    tl = null
  })
}

</script>

<template>
  <div id="app" class="w-screen overflow-x-hidden flex flex-col">
    <NuxtLayout>
      <MainVisual />
      <div
        class="w-screen h-screen fixed flex justify-center top-0 left-0"
      >
        <Playground id="playground" class="fixed 2xl:top-[61.73611vw]" />
        <Dog class="fixed 2xl:translate-y-[34.86111vw] 2xl:translate-x-[-20.69444vw]" />
        <Cat class="fixed 2xl:translate-y-[34.16667vw] 2xl:translate-x-[-0.65972vw]" />
        <Pig class="fixed 2xl:translate-y-[39.65278vw] 2xl:translate-x-[20.27778vw]" />
        <Avatar class="right-0 avatar 2xl:translate-x-[-1.04167vw] 2xl:translate-y-[2.08333vw]" />
        <Map class="fixed 2xl:w-[18.05556vw] 2xl:h-[11.80556vw] 2xl:translate-x-[-38.88889vw] 2xl:translate-y-[57.91667vw]" />
        <SideMenu class="fixed 2xl:left-[-0.34722vw]" />
      </div>
    </NuxtLayout>
  </div>
</template>
