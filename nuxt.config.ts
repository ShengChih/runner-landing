// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },

  modules: [
    'nuxt-windicss',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],

  css: [
    'virtual:windi-base.css',
    'virtual:windi-components.css',
    'virtual:windi-utilities.css',
    'animate.css/animate.min.css'
  ],

  vite: {
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['..', '../../node_modules']
      }
    }
  }
})
