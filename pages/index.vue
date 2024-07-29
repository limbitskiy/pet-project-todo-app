<template>
  <div class="main-cnt">
    <!-- <div v-if="status === 'pending'" class="flex flex-col gap-2 my-3 px-1">
      <USkeleton v-for="number in 6" class="h-8 w-full" />
    </div> -->
    <h1 class="text-lg font-medium text-center">Список дел</h1>
    <div class="todo-cnt flex flex-col gap-2 mt-2">
      <TodoItem
        v-for="todo in todos.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))"
        :key="todo._id"
        :data="todo"
        @onComplete="() => onComplete({ id: todo._id, value: !todo.completed })"
        @onEdit="() => navigateTo(`/todos/${todo._id}`)"
      />
    </div>
    <div class="floating-btn absolute bottom-12 right-12">
      <UButton icon="ep:plus" :ui="{ rounded: 'rounded-full' }" size="xl" @click="onAddTodo"></UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { editTodo } from "~/api";
import { useUserStore } from "~/store/user";

definePageMeta({
  layout: "with-header",
});

const { data: todos, refresh } = await useFetch("http://localhost:5005");

const userStore = useUserStore();
const { search } = storeToRefs(userStore);

const onComplete = async ({ id, value }) => {
  const payload = {
    completed: value,
  };
  await editTodo({ id, payload });
  refresh();
};

const onAddTodo = () => {
  navigateTo("/todos/addTodo");
};
</script>
