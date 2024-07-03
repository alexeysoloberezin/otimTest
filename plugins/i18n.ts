import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en: {
        hello: 'Hello, baby-- {name}!'
      },
      ru: {
        hello: "Привет, детка-- {name}"
      }
    }
  })

  vueApp.use(i18n)
})