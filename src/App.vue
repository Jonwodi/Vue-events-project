<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="pt-10">
    <div
      class="text-center bg-green-500"
      id="flashMessage"
      v-if="GStore.flashMessage"
    >
      {{ GStore.flashMessage }}
    </div>
    <nav class="flex justify-center items-center gap-5">
      <RouterLink
        class="hover:underline hover:text-green-500"
        :to="{ name: 'EventList' }"
        >Events</RouterLink
      >
      |
      <RouterLink
        class="hover:underline hover:text-green-500"
        :to="{ name: 'About' }"
        >About</RouterLink
      >
    </nav>
  </div>
  <RouterView />
</template>

<script>
export default {
  inject: ["GStore"],
};
</script>
