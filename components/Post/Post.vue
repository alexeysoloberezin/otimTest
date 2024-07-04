<template>
  <div class="post cursor-pointer group relative">
    <img :src="image" alt=""
         class="md:h-[280px] min-h-[100px] w-full object-cover delay-75 transition-transform duration-300 group-hover:-translate-y-6">
    <p class="md:mt-[34px] mt-3 transition-transform duration-300 delay-100 group-hover:-translate-y-6">{{ preview }}</p>
    <div class="post-readMore text-pink transition sm:opacity-0 bottom-0  left-0">{{ $t('Read more') }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string,
  preview: string,
}>();
</script>

<style scoped lang="scss">
.post {
  @media (min-width: 600px) {
    .post-readMore {
      transform: translateY(20px);
    }

    &:hover {
      .post-readMore {
        opacity: 1;
        transition-delay: .25s;
        transform: translateY(0px);
      }
    }
  }
}
</style>
