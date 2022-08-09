<template>
  <div
    v-if="event"
    class="border-black border-4 w-3/12 text-center px-3 pt-3 pb-10 mx-auto bg-green-500 mt-10"
  >
    <h1 class="font-bold mt-5">{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    // fetch event (by id) and set local data
    EventService.getEvent(this.id)
      .then((response) => {
        // handle success
        this.event = response.data;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
};
</script>
