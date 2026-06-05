// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit', 'nuxt-security'],
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  ssr: true,
  nitro: {
    preset: 'node-server',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/en'], // tes routes de base i18n
      failOnError: false,
    },
  },

  // For hostinger mail
  runtimeConfig: {
    mailUser: '',
    mailPass: '',
  },

  // Security - avoid same IP to send to many email
  routeRules: {
    '/**': {
      headers: {
        'content-security-policy':
          "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com; default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; upgrade-insecure-requests",
      },
    },
    '/api/contact': {
      security: {
        rateLimiter: {
          tokensPerInterval: 2,
          interval: 3600000,
        },
      },
    },
  },

  // security for youtube videos
  security: {
    rateLimiter: false,
    headers: {
      crossOriginEmbedderPolicy: false,
      referrerPolicy: 'strict-origin-when-cross-origin',
      contentSecurityPolicy: {
        'frame-src': [
          "'self'",
          'https://www.youtube.com',
          'https://www.youtube-nocookie.com',
        ],
      },
    },
  },

  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxt/image', 'nuxt-security'],

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
