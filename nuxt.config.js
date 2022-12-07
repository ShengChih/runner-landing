// https://nuxt.com/docs/api/configuration/nuxt-config
import * as PostCssConfig from './postcss.config'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      link: [undefined],
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }, { charset: 'utf-8' }],
      htmlAttrs: {
        lang: 'tw'
      },
      title: 'The F2E 4th'
    }
  },

  ssr: true,

  typescript: {
    strict: false,
    typeCheck: true
  },

  // auto import components
  components: {
    global: true,
    dirs: ['~/components']
  },

  modules: [
    // '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-windicss'
    // '@unocss/nuxt'
  ],

  // unocss: {
  //   // presets
  //   uno: true, // enabled `@unocss/preset-uno`
  //   icons: true, // enabled `@unocss/preset-icons`
  //   attributify: true, // enabled `@unocss/preset-attributify`,
  //   components: false,
  //
  //   // core options
  //   shortcuts: [],
  //   rules: [],
  //   theme: {
  //     breakpoints: {
  //       sm: '375px',
  //       md: '768px',
  //       xl: '1024px',
  //       2xl: '1440px', /** '2xl' , '3xl' unocss bug  */
  //       3xl: '1920px'
  //     },
  //     colors: {
  //       primary: {
  //         default: '#007FAB',
  //         dark: '#003A4F',
  //         tint: '#B0D2DE'
  //       },
  //       secondary: {
  //         default: '#FFC37D',
  //         dark: '#A46039',
  //         tint: '#FFE2A9'
  //       },
  //       highlight: {
  //         default: '#FF5136',
  //         dark: '#CD331A',
  //         tint: '#FFB5A4'
  //       },
  //       grey: {
  //         0: '#FFFFFF',
  //         20: '#CCCCCC',
  //         40: '#999999',
  //         60: '#666666',
  //         80: '#333333',
  //         100: '#000000'
  //       }
  //     }
  //   }
  // },

  css: [
    // '/assets/styles/tailwind.css',
    // '/assets/styles/windi.css',
    // 'animate.css/animate.min.css',
    // '/assets/styles/global.css'
  ],

  vite: {
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['..', '../../node_modules']
      }
    },
    css: {
      postcss: PostCssConfig
    }
  },

  build: {
  }
})
