module.exports = ctx => {
  return {
    plugins: {
      "postcss-import": {},
      "postcss-custom-properties": {},
      "postcss-cssnext": {},
      "postcss-icss-values": {},
      "postcss-flexbugs-fixes": {},
      "postcss-font-magician": {
        variants: {
          "Roboto Condensed": {
            "300": [],
            "400": [],
            "700": []
          }
        },
        foundries: ["google"]
      },
      cssnano: ctx.env === "production" ? {} : false
    },
    map: ctx.env === "development"
  }
}
