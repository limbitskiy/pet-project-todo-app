<template>
  <div class="todo-page flex flex-col flex-1">
    <form class="todo-details flex-1 flex flex-col gap-2" @submit="onSubmit">
      <UInput v-model="state.title" color="white" variant="outline" size="xl" placeholder="Введите название todo" :disabled="state.completed" />
      <div class="toggle-group flex gap-2 items-center">
        <UToggle v-model="state.urgent" :disabled="state.completed" />
        <span>Срочно?</span>
      </div>
    </form>
    <div class="todo-btns flex flex-col gap-2">
      <UButton color="primary" size="xl" variant="solid" @click="onSubmit" :disabled="state.completed">OK</UButton>
      <UButton color="red" size="xl" variant="solid" @click="onRemove">Удалить</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navigateTo } from "nuxt/app";
import { addTodo, removeTodo, editTodo } from "~/api";

definePageMeta({
  layout: "with-header",
});

const route = useRoute();

const URI = process.env.SERVER_URI || "http://localhost:5005";

const state = ref({
  title: "",
  urgent: false,
});

const { data: todo } = await useFetch(`${URI}/todos/${route.params._id}`);

if (todo.value) {
  state.value = todo.value;
}

const onSubmit = async (e) => {
  e.preventDefault();

  if (state.value._id) {
    await editTodo(state.value);
  } else {
    await addTodo(state.value);
  }

  navigateTo("/");
};

const onRemove = async () => {
  await removeTodo(state.value._id);
  navigateTo("/");
};
</script>
