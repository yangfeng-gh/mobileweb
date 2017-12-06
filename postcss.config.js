module.exports = {
  // parser: require('postcss-scss'),
  plugins: [
    require('postcss-partial-import'),
    require('postcss-advanced-variables'),
    require('postcss-nested'),
    require('autoprefixer'),
    // require('postcss-assets'),
    require('postcss-property-lookup'),
    require('postcss-px-to-viewport')({
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false
    }),
    require('cssnano')({
      preset: 'default'
    })
  ]
}