import { createRouter, createWebHistory } from "vue-router";
import Syzygy from "@/views/Syzygy.vue";
import Registration from "@/registration/Registration.vue";
import Streaming from "@/views/Streaming.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Syzygy",
      component : Syzygy,
    },
    {
      path: "/registration/Registration.vue",
      name: "register",
      component: Registration,
    },
    {
      path: "/views/Streaming",
      name: "Streaming",
      component: Streaming,
    }
  ]
})


export default router