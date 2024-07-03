<template>
  <div class="container pb-[120px]">
    <div class="mt-[120px] mb-[60px] "
      :class="{'section-with-preview': !!preview}"
    >
      <h1 class="title">{{ title }}</h1>
      <p v-if="preview" class="subtitle">{{ preview }}</p>
    </div>

    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string,
  preview?: string,
}>()
</script>

<style scoped>
.section-with-preview{
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 50px;
}
</style>