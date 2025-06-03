import { createRouter, createWebHistory } from "vue-router";
import Syzygy from "@/views/Syzygy.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Syzygy",
      component : Syzygy,
    },
  ]
})


export default router