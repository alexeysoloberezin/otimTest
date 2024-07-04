<template>
  <div @click="isOpen = !isOpen" class="relative sm:w-[52px] w-[40px] h-[40px] sm:h-[52px]">
    <div class="w-full h-full flex flex-col items-center justify-center border-2 border-[#0000001A] hover:border-[#0000003A] cursor-pointer rounded-full">
      <component :is="locales[locale]" class="sm:max-w-[16px] max-w-[24px]" />
    </div>

    <div v-if="isOpen" class="flex flex-col items-center z-10 border-2 sm:w-[52px] w-[40px] rounded-full py-1 border-[#0000001A] absolute sm:top-[58px] top-[45px] bg-white left-0">
      <div v-for="(item, key) in filteredLocales" @click="changeLocale(item)" :key="key" class="flex items-center hover:border-gray cursor-pointer rounded-full p-2">
        <component :is="locales[item]" class="sm:max-w-[16px] max-w-[24px]"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EuIcon from '~/components/Icons/EuIcon.vue';
import RuIcon from '~/components/Icons/RuIcon.vue';
import { useI18n } from 'vue-i18n';

const { availableLocales, locale, setLocale } = useI18n();

const locales = {
  'en': EuIcon,
  'ru': RuIcon
};

const isOpen = ref(false);

const filteredLocales = computed(() => {
  return Object.keys(locales).filter(key => key !== locale);
});

function changeLocale(newLocale: string) {
  locale.value = newLocale;
  localStorage.setItem('locale', newLocale);
  isOpen.value = false; // закрыть выпадающее меню после выбора локали
}
</script>

<style scoped>

</style>
