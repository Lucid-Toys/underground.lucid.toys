const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withImages = require('next-images')

module.exports = withImages(
  withPWA({
    reactStrictMode: true,
    pwa: {
      dest: 'public',
      runtimeCaching,
    },
  })
)
