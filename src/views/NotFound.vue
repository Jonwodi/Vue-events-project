<template>
  <div
    class="flex flex-col justify-center text-center content-center mt-10 gap-y-6"
  >
    <h1 class="text-5xl">Oops!</h1>
    <h3 class="text-3xl">The {{ resource }} your looking for is not here</h3>
    <RouterLink class="text-3xl underline" :to="{ name: 'EventList' }"
      >Go back to home page</RouterLink
    >
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: "page",
    },
  },
};
</script>
