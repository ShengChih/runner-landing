module.exports = {
  corePlugins: {
    preflight: true
  },
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}'
  ],
  theme: {
    screens: {
      sm: { min: '375px', max: '767px' },
      md: { min: '768px', max: '1439px' },
      '2xl': { min: '1440px', max: '1919px' }
    },
    extend: {
      screens: {
        '3xl': { min: '1920px' }
      },
      fontFamily: {},
      colors: {
        primary: {
          default: '#007FAB',
          dark: '#003A4F',
          tint: '#B0D2DE'
        },
        secondary: {
          default: '#FFC37D',
          dark: '#A46039',
          tint: '#FFE2A9'
        },
        highlight: {
          default: '#FF5136',
          dark: '#CD331A',
          tint: '#FFB5A4'
        },
        grey: {
          0: '#FFFFFF',
          20: '#CCCCCC',
          40: '#999999',
          60: '#666666',
          80: '#333333',
          100: '#000000'
        }
      }
    }
  },
  plugins: []
}
