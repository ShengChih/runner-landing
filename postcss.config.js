// import postcss from 'postcss'
// import postcssImport from 'postcss-import'
// import tailwindcssNesting from 'tailwindcss/nesting'
// import tailwindcss from 'tailwindcss'
// import autoprefixer from 'autoprefixer'
// import postcssNested from 'postcss-nested'
// import postcssMixins from 'postcss-mixins'
// import postcssSimpleVars from 'postcss-simple-vars'
// import px2vw from '@our-patches/postcss-px-to-viewport'
// import cssnano from 'cssnano'
// import purgecss from '@fullhuman/postcss-purgecss'

const postcss = require('postcss')
const postcssImport = require('postcss-import')
const tailwindcssNesting = require('tailwindcss/nesting')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const postcssNested = require('postcss-nested')
const postcssMixins = require('postcss-mixins')
const postcssSimpleVars = require('postcss-simple-vars')
const px2vw = require('@our-patches/postcss-px-to-viewport')
// const px2rem = require('postcss-pxtorem')
const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')

const excludeCssAttributes = [
  '*',
  '!min-width',
  '!min-height',
  '!max-width',
  '!max-height',
  '!font-size',
  '!filter',
  '!border-radius',
  '!column-gap',
  '!row-gap'
]

module.exports = {
  plugins: [
    {
      postcssPlugin: 'grouped',
      Once (root, { result }) {
        return postcss([postcssImport, postcssMixins, postcssSimpleVars]).process(
          root,
          result.opts
        )
      }
    },
    tailwindcssNesting(postcssNested),
    tailwindcss({}),
    process.env.NODE_ENV === 'production' ? autoprefixer : null,
    // px2vw({
    //   unitToConvert: 'px',
    //   viewportWidth: 360,
    //   unitPrecision: 64,
    //   propList: excludeCssAttributes,
    //   viewportUnit: 'vw',
    //   fontViewportUnit: 'vw',
    //   selectorBlackList: ['wrap'],
    //   minPixelValue: 1,
    //   mediaQuery: true,
    //   replace: true,
    //   include: [/mobile.vw(\.module)?\.(scss|sass|css)/],
    //   landscape: false
    // }),
    px2vw({
      unitToConvert: 'px',
      viewportWidth: 1440,
      unitPrecision: 5,
      propList: excludeCssAttributes,
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      // include: [/desktop.vw(\.module)?\.(scss|sass|css)/],
      exclude: [/node_modules/, /assets\/styles\/global\.css/],
      landscape: false
    }),
    // px2vw({
    //   unitToConvert: 'px',
    //   viewportWidth: 768,
    //   unitPrecision: 64,
    //   propList: excludeCssAttributes,
    //   viewportUnit: 'vw',
    //   fontViewportUnit: 'vw',
    //   selectorBlackList: ['wrap'],
    //   minPixelValue: 1,
    //   mediaQuery: true,
    //   replace: true,
    //   include: [/tablet.vw(\.module)?\.(scss|sass|css)/],
    //   landscape: false
    // }),
    // px2rem({
    //   rootValue: 18,
    //   propList: ['*'],
    //   unitPrecision: 5,
    //   minPixelValue: 12,
    //   exclude: ['node_modules', 'assets']
    // }),
    process.env.NODE_ENV === 'production'
      ? cssnano({ preset: 'default' })
      : null,
    process.env.NODE_ENV === 'production'
      ? purgecss({
        stdin: true,
        stdout: true,
        content: [
          './components/**/*.{vue,js,ts}',
          './layouts/**/*.vue',
          './pages/**/*.vue',
          './composables/**/*.{js,ts,vue}',
          './plugins/**/*.{js,ts,vue}',
          './app.{js,ts,vue}',
          './assets/styles/global.css'
        ],
        css: [

        ],

        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      })
      : null
  ].filter(plugin => !!plugin)
}
