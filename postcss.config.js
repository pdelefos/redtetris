module.exports = (ctx) => {
  return ({
    plugins: {
      'postcss-import': {},
      'postcss-custom-properties': {},
      'postcss-cssnext': {},
      'cssnano': ctx.env === 'production' ? {} : false,
    },
    map: ctx.env === 'development'
  })
}

