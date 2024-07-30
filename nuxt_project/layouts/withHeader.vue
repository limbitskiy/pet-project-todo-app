<template>
  <div class="layout-with-header flex-1 overflow-hidden flex flex-col">
    <div class="header h-12 flex items-center justify-between gap-2 bg-white">
      <Icon v-if="currentLocation !== Locations['2']" name="material-symbols-light:arrow-back" size="30" class="ml-2 cursor-pointer" @click="() => navigateTo('/')" />
      <div v-if="currentLocation === Locations['2']" class="search flex gap-2 mx-2 flex-1 items-center">
        <Icon name="material-symbols-light:search" size="30" class="text-gray-300" />
        <input v-model="input" class="w-full focus:outline-none flex-1" focus placeholder="Фильтр" @input="onInput" />
        <Icon v-if="filter.length" name="iconamoon:sign-times-light" size="30" class="text-gray-500 cursor-pointer" @click="onClearFilter" />
      </div>
      <span v-else>{{ currentLocation === Locations["0"] ? "Создание todo" : "Редактирование todo" }}</span>
      <span v-if="currentLocation !== Locations['2']" class="w-8 mr-2"></span>
    </div>
    <div class="content p-4 bg-gray-50 flex-1 flex flex-col">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user";

const route = useRoute();
const userStore = useUserStore();

const { setFilter } = userStore;
const { filter } = storeToRefs(userStore);

const enum Locations {
  "creation",
  "editing",
  "homepage",
}

const input = ref("");

const onInput = (e) => {
  setFilter(e.target.value);
};

const onClearFilter = (e) => {
  input.value = "";
  setFilter("");
};

const currentLocation = computed(() => {
  const routeArr = route.path.split("/");

  if (route.path === "/") {
    return Locations["2"];
  } else if (routeArr[routeArr.length - 1] === "add-todo") {
    return Locations["0"];
  } else {
    return Locations["1"];
  }
});
</script>
