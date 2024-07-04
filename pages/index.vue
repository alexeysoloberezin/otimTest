<template>
  <div>
    <Section
        :title="$t('Articles.title')"
    >
      <Loader v-if="pending"></Loader>
      <PaginationBox
          v-else-if="status === 'success'"
          :items="posts"
      >
        <template v-slot="{ items }">
          <div class="xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  grid md:gap-8 gap-4">
            <NuxtLink
                v-for="post in items"
                :key="post.id"
                :to="'/posts/' + post.id"
            >
              <Post
                  :image="'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Moench_2339.jpg/1200px-Moench_2339.jpg' || post.image"
                  :preview="post.preview"
              />
            </NuxtLink>

          </div>
        </template>
      </PaginationBox>
      <div v-else class="text-red">{{ $t('Error_request') }}</div>

    </Section>


    <LetsWork/>
  </div>
</template>

<script setup lang="ts">
import Section from "~/components/ui/Section.vue";
import {useApi} from "~/composables/useApi";
import Post from "~/components/Post/Post.vue";
import PaginationBox from "~/components/Pagintaion/PaginationBox.vue";
import LetsWork from "~/components/ui/LetsWork.vue";
import Loader from "~/components/ui/Loader.vue";

definePageMeta({
  layout: 'main'
})

interface Post {
  id: string;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
}

const {pending, data: posts, status}: { pending: boolean; data: Post[] | []; status: string }
    = useApi('/posts', {
  method: 'get'
});

</script>

<style scoped>

</style>