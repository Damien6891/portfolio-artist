// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],

  css: ['./assets/css/main.css'],

  i18n: {
    locales: [
      { code: 'fr', language: 'fr-FR', file: 'fr.json' },
      { code: 'en', language: 'en-EN', file: 'en.json' },
    ],
    defaultLocale: 'fr',
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },
  },
});
