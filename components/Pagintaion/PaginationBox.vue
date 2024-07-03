<template>
  <div>
    <slot :items="elements"></slot>

    <Pagination
        class="mt-[50px]"
        :currentPage="currentPage"
        :totalPages="totalPages"
        @update:setPage="setPage"
        @update:nextPage="nextPage"
        @update:prevPage="prevPage"
    />
  </div>
</template>

<script setup lang="ts">
import {usePagination} from "~/composables/usePagintaion";
import Pagination from "~/components/Pagintaion/Pagination.vue";

const props = defineProps<{
  items: unknown[]
}>()

const {
  items: elements, totalPages, currentPage, setPage, nextPage, prevPage
} = usePagination(props.items, {perPage: 5})
</script>

<style scoped>

</style>