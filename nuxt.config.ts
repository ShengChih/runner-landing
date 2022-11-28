// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,

  typescript: {
    strict: false,
    typeCheck: true
  },

  // auto import components
  components: true,

  modules: [
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
    }
  },

  build: {

  }
})
