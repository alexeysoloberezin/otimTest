<template>
  <div class="flex items-center max-w-[1440px] mx-auto py-[35px] px-3">
    <NuxtLink to="/">
      <Logo />
    </NuxtLink>

    <Navigation class="mr-[91px] ml-auto"/>

    <LandSelect class="mr-3"/>

    <NuxtLink to="/">
      <Button >
        {{ $t('Let’s work') }}
      </Button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import Logo from "~/components/ui/Logo.vue";
import Navigation from "~/components/Navigation/Navigation.vue";
import Button from "~/components/ui/Button.vue";
import LandSelect from "~/components/ui/LandSelect.vue";
import {useI18n} from "vue-i18n";

const {messages} = useI18n()
</script>

<style scoped>

</style>