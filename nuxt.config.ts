// https://nuxt.com/docs/api/configuration/nuxt-config
import * as PostCssConfig from './postcss.config'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      link: [undefined],
      meta: [{ name: 'viewport', content: 'width=1024, initial-scale=1' }, { charset: 'utf-8' }]
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
    '/assets/styles/tailwind.css',
    'animate.css/animate.min.css',
    '/assets/styles/global.css'
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
