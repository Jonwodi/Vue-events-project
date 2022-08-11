<template>
  <p>Register the event here</p>
  <button
    class="bg-black px-5 py-2 text-white mt-5 hover:text-green-500"
    @click="register"
  >
    Register Me
  </button>
</template>

<script>
export default {
  props: ["event"],
  inject: ["GStore"],
  methods: {
    register() {
      // Call to API
      // If registered then redirect to the event details

      this.GStore.flashMessage =
        "You're successfully registered for" + this.event.title;

      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 3000);
      this.$router.push({
        name: "EventDetails",
      });
    },
  },
};
</script>
