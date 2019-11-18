const withPWA = require("next-pwa")
const withImages = require("next-images")

module.exports = withImages(
  withPWA({
    pwa: {
      dest: "public",
    },
    experimental: {
      publicDirectory: true,
    },
  })
)
