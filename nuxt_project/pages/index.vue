<template>
  <div class="main-page">
    <NoConnection v-if="status === 'error'" />
    <template v-else>
      <p class="text-lg text-center font-medium">Текущие todos:</p>
      <div class="todos-cnt mt-2 flex flex-col gap-2">
        <span v-if="!todos?.length">Нету todo :(</span>
        <TodoItem v-for="todo in todos?.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase()))" :key="todo.id" :data="todo" @complete="onComplete" />
      </div>
    </template>
  </div>
  <UButton :ui="{ rounded: 'rounded-full' }" icon="ep:plus" size="xl" class="absolute bottom-5 right-5" @click="onAddTodo" />
</template>

<script setup lang="ts">
import { editTodo } from "~/api";
import { useUserStore } from "~/store/user";

definePageMeta({
  layout: "with-header",
});

const userStore = useUserStore();
const { filter } = storeToRefs(userStore);

const URL = process.env.SERVER_URL || "http://localhost:5005";

const { data: todos, status, refresh } = await useFetch(URL);

const onComplete = async (data) => {
  await editTodo({ ...data, completed: !data.completed });
  refresh();
};

const onAddTodo = () => {
  navigateTo("/todos/add-todo");
};
</script>
