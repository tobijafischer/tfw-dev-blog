// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-lenis',
  ],
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/kxl6riz.css' }]
    }
  },
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/app.css',
  ],
})
