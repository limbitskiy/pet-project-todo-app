<template>
  <div class="main-page">
    <p class="text-lg text-center font-medium">Текущие todos:</p>
    <div class="todos-cnt mt-2 flex flex-col gap-2">
      <TodoItem v-for="todo in todos.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase()))" :key="todo.id" :data="todo" @complete="onComplete" />
    </div>
  </div>
  <UButton :ui="{ rounded: 'rounded-full' }" icon="ep:plus" size="xl" class="absolute bottom-5 right-5" @click="() => navigateTo('/todos/add-todo')" />
</template>

<script setup lang="ts">
import { editTodo } from "~/api";
import { useUserStore } from "~/store/user";

definePageMeta({
  layout: "with-header",
});

const userStore = useUserStore();
const { filter } = storeToRefs(userStore);

const URI = process.env.SERVER_URI || "http://localhost:5005";

const { data: todos, refresh } = await useFetch(URI);

const onComplete = async (data) => {
  await editTodo({ ...data, completed: !data.completed });
  refresh();
};
</script>
