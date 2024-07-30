export const useUserStore = defineStore("user", () => {
  const state = ref({
    loading: false,
    filter: "",
  });

  const filter = computed(() => state.value.filter);

  const setFilter = (str) => {
    state.value.filter = str;
  };

  return { filter, setFilter };
});
