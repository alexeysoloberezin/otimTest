// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ['~/assets/scss/global.scss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      apiBase: 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/', // укажите ваш базовый URL
    }
  },
  compatibilityDate: '2024-07-03',
})