<template>
  <a class="block hover:underline" :href="getHref" :target="target || '_parent'">
    {{ data }}
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: 'email' | 'tel' | 'link',
  target: string
  data: string
}>()

const getHref = computed(() => {
  const { data } = props
  switch (props.type) {
    case 'email':
      return 'mailto:' + data
    case 'tel':
      return 'tel:' + data
    default:
      return data
  }
})
</script>

<style scoped>

</style>