<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="pt-10">
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
