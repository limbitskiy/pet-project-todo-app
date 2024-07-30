<template>
  <div class="todo-item shadow-md bg-white rounded-md flex items-center justify-between">
    <div class="todo-start p-4 flex-1 flex gap-2 cursor-pointer" @click="onItemClick">
      <span :class="{ 'line-through text-gray-400': data.completed }">{{ data.title }}</span>
      <UBadge v-if="data.urgent" color="red" variant="subtle" size="xs" class="mb-2" :class="{ 'saturate-0': data.completed }">срочно</UBadge>
    </div>
    <div class="todo-end p-4">
      <UCheckbox :modelValue="data.completed" class="z-10" @input="emit('complete', data)" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: {
    id: string;
    title: string;
    completed?: boolean;
  };
}>();

const emit = defineEmits<{
  complete: [data: {}];
}>();

const onItemClick = () => {
  navigateTo(`/todos/${props.data._id}`);
};
</script>
