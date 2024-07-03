// types/i18n.d.ts
import 'vue-i18n'

declare module 'vue-i18n' {
  // Расширьте интерфейс VueI18n, чтобы добавить типизацию для $t
  export interface VueI18n {
    t(key: string, ...args: any[]): string
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t(key: string, ...args: any[]): string
  }
}
