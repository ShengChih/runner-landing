const postcssImport = require('postcss-import')
const tailwindcssNesting = require('tailwindcss/nesting')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const px2vw = require('@our-patches/postcss-px-to-viewport')
const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')

const excludeCssAttributes = []
/*
[
  '*',
  '!min-width',
  '!min-height',
  '!font-size',
  '!filter',
  '!border-radius',
  '!column-gap',
  '!row-gap',
]
*/

module.exports = {
  plugins: [
    postcssImport,
    tailwindcssNesting,
    tailwindcss,
    process.env.NODE_ENV === 'production' ? autoprefixer : null,
    px2vw({
      unitToConvert: 'px',
      viewportWidth: 360,
      unitPrecision: 64,
      propList: excludeCssAttributes,
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['wrap'],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      include: [/\/fullpage\/mobile(\.module)?\.scss/],
      landscape: false
    }),
    px2vw({
      unitToConvert: 'px',
      viewportWidth: 1280,
      unitPrecision: 64,
      propList: excludeCssAttributes,
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['wrap'],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      include: [/\/fullpage\/pc(\.module)?\.scss/],
      landscape: false
    }),
    px2vw({
      unitToConvert: 'px',
      viewportWidth: 768,
      unitPrecision: 64,
      propList: excludeCssAttributes,
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['wrap'],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      include: [/\/fullpage\/tablet(\.module)?\.scss/],
      landscape: false
    }),
    process.env.NODE_ENV === 'production'
      ? cssnano({ preset: 'default' })
      : null,
    purgecss({
      content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './composables/**/*.{js,ts,vue}',
        './plugins/**/*.{js,ts,vue}',
        './app.{js,ts,vue}'
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}
