<script>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";
import { watchEffect } from "vue";

export default {
  name: "Home",
  props: ["page"],
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      totalEvents: 0,
      url: `https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3/events`,
    };
  },
  created() {
    watchEffect(() => {
      this.events = null;
      EventService.getEvents(2, this.page)
        .then((response) => {
          // handle success
          this.events = response.data;
          this.totalEvents = response.headers["x-total-count"];
        })
        .catch(() => {
          // handle error
          this.$router.push({ name: "NetworkError" });
        });
    });
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalEvents / 2);
      return this.page < totalPages;
    },
  },
};
</script>

<template>
  <div class="py-10">
    <h1 class="text-center text-5xl font-bold">Event for good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <div class="flex justify-center items-center gap-56">
    <RouterLink
      :to="{ name: 'EventList', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
      class="hover:underline hover:text-red-500"
      >&#60; Previous</RouterLink
    >
    <RouterLink
      :to="{ name: 'EventList', query: { page: page + 1 } }"
      rel="next"
      v-if="hasNextPage"
      class="hover:underline hover:text-red-500"
      >Next &#62;</RouterLink
    >
  </div>
</template>
