/* eslint-disable @typescript-eslint/no-var-requires */
const isProd = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')
const nextTranslate = require('next-translate')

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US',
    localeDetection: false
  },
  ...nextTranslate()
})
