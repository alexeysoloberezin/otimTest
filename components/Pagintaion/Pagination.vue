<template>
  <nav aria-label="Page navigation example">
    <ul class="flex items-center gap-2 h-10 text-base">
      <li v-if="currentPage !== 1" @click="$emit('update:prevPage')">
        <div
            class="pag-btn-nextPrev pag-btn-base">
          <span class="sr-only">Previous</span>
          <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 1 1 5l4 4"/>
          </svg>
        </div>
      </li>
      <li v-for="el in visiblePages" :key="el" @click="$emit('update:setPage', el)">
        <div
            :class="['pag-btn', 'pag-btn-base',{ 'active': el === currentPage }]"
        >
          {{ el }}
        </div>
      </li>
      <li v-if="currentPage !== totalPages" @click="$emit('update:nextPage')">
        <div
            class="pag-btn-nextPrev pag-btn-base">
          <span class="sr-only">Next</span>
          <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 9 4-4-4-4"/>
          </svg>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  totalPages: number,
  currentPage: number
}>()

const emit = defineEmits(['update:prevPage', 'update:setPage', 'update:nextPage'])

const visiblePages = computed(() => {
  const {totalPages, currentPage} = props
  const pages = []

  const startPage = Math.max(currentPage - 2, 1)
  const endPage = Math.min(currentPage + 2, totalPages)

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return pages
})
</script>

<style scoped lang="scss">
.pag-btn-base {
  @apply flex items-center justify-center px-4 h-10 sm:w-[44px] sm:h-[44px] w-[34px] h-[34px] sm:text-base text-sm sm:py-0 pt-0.5  px-3 rounded-lg hover:transition cursor-pointer;
}

.pag-btn {
  @apply bg-light hover:bg-dark hover:text-white;
  &:not(.active) {
    @apply bg-light hover:text-white hover:bg-gray;
  }

  &.active {
    @apply text-white bg-dark;
  }
}


.pag-btn-nextPrev {
  @apply border border-light hover:border-gray;
  svg {
    flex-shrink: 0;
    opacity: 0.2;
    transform: scale(0.8);
  }
}
</style>
