<template>
  <div>
    <div class="container py-3">
      <Loader v-if="pending"></Loader>
    </div>
    <Section
        v-else-if="status === 'success' && post"
        :title="post.title"
        :preview="post.preview"
    >
      <img v-if="post.image" :src="post.image" alt="">
      <div class="max-w-[695px]">
        <p class="text-sm">{{ $t('About') }}</p>
        <p class="md:text-3xl sm:text-xl text-md md:mt-[32px] mt-[16px]">{{ post.description }}</p>
      </div>
    </Section>
    <div v-else class="text-red">{{ $t('Error_request') }}</div>
    <LetsWork/>
  </div>
</template>

<script setup lang="ts">
import Section from "~/components/ui/Section.vue";
import LetsWork from "~/components/ui/LetsWork.vue";
import {useApi} from "~/composables/useApi";
import Loader from "~/components/ui/Loader.vue";

definePageMeta({
  layout: 'main'
})

const route = useRoute()
const postId = route.params.id

interface Post {
  id: string;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
}

const {data: post, status, pending}: { pending: boolean; data: Post | null; status: string }
    = useApi('/posts/' + postId, {
  method: 'get'
});
</script>

<style scoped>

</style>