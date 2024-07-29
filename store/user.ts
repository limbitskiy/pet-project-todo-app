import { defineStore } from "pinia";

export const useUserStore = defineStore(
  "user",
  () => {
    const state = ref({
      isLoading: false,
      search: "",
    });

    const search = computed(() => state.value.search);

    const setSearch = (str) => {
      state.value.search = str;
    };

    return { search, setSearch };
  },
  { persist: true }
);
