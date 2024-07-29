<template>
  <!-- <Loading v-if="status === 'pending'" /> -->
  <div class="item-page flex flex-col gap-2 flex-1">
    <form class="flex flex-col flex-1 gap-2" @submit="onSubmit">
      <label class="flex flex-col gap-1">
        <span>Дело: <span v-if="state.completed" class="text-sm text-gray-400">(выполнено)</span></span>
        <UInput v-model="state.title" size="xl" style="font-size: 18px !important" :disabled="state.completed" />
      </label>
      <div class="toggle-cnt flex items-center gap-2">
        <UToggle color="orange" v-model="state.urgent" />
        <span>срочное</span>
      </div>
    </form>
    <UButton @click="onSubmit" size="xl" :disabled="state.completed">OK</UButton>
    <UButton @click="onRemove" size="xl" color="red">Удалить</UButton>
  </div>
</template>

<script setup lang="ts">
import { addTodo, editTodo, removeTodo } from "~/api";

const state = ref({
  title: "",
});
const editMode = ref(false);

const { id } = useRoute().params;

if (id !== "addTodo") {
  editMode.value = true;

  const { data } = await useFetch(`http://localhost:5005/todos/${id}`);

  state.value = data.value;
}

const onSubmit = async (e) => {
  e.preventDefault();

  if (editMode.value) {
    const payload = {};

    Object.keys(state.value).forEach((key) => {
      if (key === "_id") return;
      payload[key] = state.value[key];
    });

    await editTodo({ id: state.value._id, payload });
  } else {
    await addTodo({ payload: state.value });
  }
  navigateTo("/");
};

const onRemove = async () => {
  removeTodo({ id: state.value._id });
  navigateTo("/");
};

definePageMeta({
  layout: "with-header",
});
</script>
