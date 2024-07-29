<template>
  <div class="todo-item bg-gray-100 rounded flex justify-between">
    <div class="todo title flex-1 p-4 flex gap-2 items-center" @click="$emit('onEdit')">
      <span :class="{ 'line-through': data.completed }">{{ data.title }}</span>
      <UBadge v-if="data.urgent" color="red" variant="soft">срочно</UBadge>
    </div>
    <div class="check p-4 grid place-items-center">
      <UCheckbox :modelValue="data.completed" name="checked" @click="$emit('onComplete')" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    title: string;
    urgent: boolean;
    completed: boolean;
  };
}>();
</script>
