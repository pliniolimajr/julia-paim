export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  srcDir: 'src/',
  dir: {
    public: '../public',
  },
  css: ['~/style.css'],
  postcss: {
    plugins: { tailwindcss: {}, autoprefixer: {} },
  },
  runtimeConfig: {
    public: {
      formspreeEndpoint: process.env.NUXT_PUBLIC_FORMSPREE_ENDPOINT || process.env.VITE_FORMSPREE_ENDPOINT || '',
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover, interactive-widget=resizes-content' },
        { name: 'theme-color', content: '#f7f0e5' },
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/favicon.jpg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
    },
  },
})
