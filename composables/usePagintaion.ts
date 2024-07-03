export interface PaginationOptions {
  perPage: number;
}

export interface PaginationResult<T> {
  currentPage: Ref<number>;
  totalPages: ComputedRef<number>;
  setPage: (page: number) => void;
  prevPage: () => void;
  nextPage: () => void;
  items: ComputedRef<T[]>;
}

export function usePagination<T>(items: T[], initialOptions: PaginationOptions): PaginationResult<T> {
  const currentPage = ref(1);
  const perPage = initialOptions.perPage;

  const totalPages = computed(() => Math.ceil(items.length / perPage));

  const setPage = (page: number) => {
    if (page > 0 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };

  const nextPage = () => {
    currentPage.value += 1
  }

  const prevPage = () => {
    currentPage.value -= 1
  }

  const paginatedItems = computed(() => {
    const startIndex = (currentPage.value - 1) * perPage;
    return items.slice(startIndex, startIndex + perPage);
  });

  return {
    currentPage,
    totalPages,
    setPage,
    prevPage,
    nextPage,
    items: paginatedItems,
  };
}
