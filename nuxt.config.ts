// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,

  typescript: {
    strict: true,
    typeCheck: true
  },

  // auto import components
  components: true,

  modules: [
    'nuxt-windicss',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],

  css: [
    // '/assets/styles/windicss.css',
    '/assets/styles/tailwind.css',
    // 'virtual:windi-base.css',
    // 'virtual:windi-components.css',
    // 'virtual:windi-utilities.css',
    'animate.css/animate.min.css',
    '/assets/styles/global.css'
  ],

  postcss: {
    plugins: {
      // 'postcss-windicss': {}
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },

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
