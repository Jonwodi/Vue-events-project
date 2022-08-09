<script>
// import TheWelcome from "@/components/TheWelcome.vue";
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "Home",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      url: `http://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3/events`,
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        // handle success
        this.events = response.data;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
};
</script>

<template>
  <div class="py-10">
    <h1 class="text-center text-5xl font-bold">Event for good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
