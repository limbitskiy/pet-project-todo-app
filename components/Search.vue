<template>
  <div class="my-input flex items-center border rounded w-full">
    <input v-model="searchString" type="text" class="w-full focus:outline-none mx-2 p-2" placeholder="Поиск" @input="onInput" />
    <Icon v-if="search.length" name="clarity:times-line" size="25" class="mr-2" @click="onClearSearch" />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user";
const searchString = ref("");

const userStore = useUserStore();
const { setSearch } = userStore;
const { search } = storeToRefs(userStore);

const onInput = (e) => {
  setSearch(e.target.value);
};

const onClearSearch = (e) => {
  searchString.value = "";
  setSearch("");
};
</script>
