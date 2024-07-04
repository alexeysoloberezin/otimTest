<template>
  <div class="container md:pb-[120px] pb-[50px]">
    <div class="mt-[50px] md:mt-[120px] md:mb-[60px] mb-[25px] "
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

<style scoped lang="scss">
.section-with-preview{
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
}
</style>