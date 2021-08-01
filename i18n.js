module.exports = {
  locales: ['en-US', 'pt-BR'],
  defaultLocale: 'en-US',
  pages: {
    '*': ['common'],
    '/': ['home']
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default)
}
