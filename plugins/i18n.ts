import { createI18n } from 'vue-i18n'
import ru from '~/locales/ru.json'
import en from '~/locales/en.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const savedLocale = localStorage.getItem('locale') || 'en';
  const localesList = ['en', 'ru']

  const initialLocale = (savedLocale && localesList.includes(savedLocale)) ? savedLocale : 'en';

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: initialLocale,
    messages: {
      en, ru
    }
  })

  vueApp.use(i18n)
})