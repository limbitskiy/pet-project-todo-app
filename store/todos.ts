import { defineStore } from "pinia";

export const useTodoStore = defineStore(
  "todo",
  () => {
    const state = ref({});

    return { state };
  },
  { persist: true }
);
