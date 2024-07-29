<template>
  <div class="loader-wrap fixed inset-0 bg-black bg-opacity-40 w-full h-[100dvh] z-40 grid place-items-center overflow-hidden">
    <div class="loader flex flex-col items-center">
      <Icon name="eos-icons:bubble-loading" size="80" style="color: black" />
      <span class="text-center pt-5 text-xl font-bold text-black">Загрузка...</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
