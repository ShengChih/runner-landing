// https://nuxt.com/docs/api/configuration/nuxt-config
import * as PostCssConfig from './postcss.config'
import WindiCSS from 'vite-plugin-windicss'


export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      link: [undefined],
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }, { charset: 'utf-8' }],
      htmlAttrs: {
        lang: "tw"
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
    '@vueuse/nuxt'
  ],

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
    plugins: [
      WindiCSS()
    ],
    css: {
      postcss: PostCssConfig
    }
  },

  build: {
  }
})
