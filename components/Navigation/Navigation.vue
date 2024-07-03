<template>
  <div>
    <nav>
      <ul class="flex items-center gap-[58px]">
        <li v-for="el in navigationList" :key="el.name">
          <NuxtLink :to="el.link" class="text-base">{{ $t(el.name) }}</NuxtLink>
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