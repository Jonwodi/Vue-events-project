import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "EventList",
      component: EventList,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue"),
    },
    {
      path: "/event/:id",
      name: "EventDetails",
      props: true,
      component: () => import("../views/EventDetails.vue"),
    },
  ],
});

export default router;
