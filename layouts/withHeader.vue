<template>
  <div class="page-header h-14 flex items-center justify-between border-b px-2">
    <template v-if="$route.name !== 'index'">
      <Icon name="material-symbols-light:arrow-upward-alt-rounded" size="36" class="rotate-[270deg]" @click="() => navigateTo('/')" />
      <span>{{ headerText }}</span>
    </template>
    <Search v-if="$route.name === 'index'" />
    <span v-if="$route.name !== 'index'" class="w-9"></span>
  </div>
  <div class="page-content p-2 flex-1 flex flex-col">
    <slot />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const headerText = computed(() => {
  const routeArr = route.path.split("/");

  if (routeArr[routeArr.length - 1] === "addTodo") {
    return "Создание todo";
  } else {
    return "Редактирование todo";
  }
});
</script>
