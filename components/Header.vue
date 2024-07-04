<template>
  <div class="flex items-center max-w-[1440px] mx-auto md:py-[35px] py-3 sm:px-3 px-1.5">
    <NuxtLink to="/">
      <Logo />
    </NuxtLink>

    <Navigation class="md:mr-[91px] sm:mr-5 mr-2 ml-auto"/>

    <LandSelect class="sm:mr-3 mr-2"/>

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