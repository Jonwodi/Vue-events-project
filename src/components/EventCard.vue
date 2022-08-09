<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <RouterLink :to="{ name: 'EventDetails', params: { id: props.event.id } }">
    <div
      class="border-black border-4 w-3/12 text-center px-3 pt-3 pb-10 mx-auto hover:bg-green-500 mt-10 hover:shadow-lg hover:shadow-black"
    >
      <span>@ {{ props.event.time }} on {{ props.event.date }}</span>
      <h4 class="font-bold mt-5">{{ props.event.title }}</h4>
    </div>
  </RouterLink>
</template>

<style scoped></style>
