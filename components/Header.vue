<template>
  <div>
    <Logo />

    <h1>{{ $t('hello', { name: 'vue-i18n' }) }}</h1>

    <form>
      <label for="locale-select">{{ $t('language') }}: </label>
      <select id="locale-select" v-model="$i18n.locale">
        <option value="en">en</option>
        <option value="ru">ru</option>
      </select>
    </form>
  </div>
</template>

<script setup lang="ts">
import Logo from "~/components/ui/Logo.vue";
</script>

<style scoped>

</style>