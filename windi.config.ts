import { defineConfig } from 'windicss/helpers'
import type { Plugin } from 'windicss/types/interfaces'

// plugins
import TypographyPlugin from 'windicss/plugin/typography'
import AspectRatioPlugin from 'windicss/plugin/aspect-ratio'
import FiltersPlugin from 'windicss/plugin/filters'

export default defineConfig({
  darkMode: 'class', // or 'media'
  extract: {
    include: ['**/*.{js.vue,html,jsx,tsx}']
  },
  attributify: true,
  theme: {
    extend: {
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
  plugins: [
    // filters plugin require for navbar blur
    FiltersPlugin as Plugin,
    TypographyPlugin as Plugin,
    AspectRatioPlugin as Plugin
  ] as Plugin[]
})
