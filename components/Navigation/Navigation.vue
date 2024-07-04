<template>
  <div>
    <nav>
      <ul class="flex items-center md:gap-[58px] sm:gap-5 gap-2">
        <li v-for="el in navigationList" :key="el.name">
          <NuxtLink :to="el.link" class="md:text-base text-sm">{{ $t(el.name) }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t, messages} = useI18n()

const navigationList = computed(() => {
  return [
    {
      name: 'Header.Works',
      link: "/"
    },
    {
      name: 'Header.About',
      link: "/"
    }
  ]
})
</script>

<style scoped>

</style>