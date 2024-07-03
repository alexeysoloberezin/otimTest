import {UseFetchOptions} from "nuxt/app";

export function useApi<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  const config = useRuntimeConfig();

  const fetchOptions: UseFetchOptions<T> = {
    ...options,
    baseURL: config.public.apiBase,
  };

  return useFetch(url, fetchOptions);
}
