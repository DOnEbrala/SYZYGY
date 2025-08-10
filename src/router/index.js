import { createRouter, createWebHistory } from "vue-router";
import Syzygy from "@/views/Syzygy.vue";
import Registration from "@/registration/Registration.vue";
import Login from "@/registration/Login.vue";
import Streaming from "@/views/Streaming.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Syzygy",
      component : Syzygy,
    },
    // Backwards compatibility redirects
    {
      path: "/registration/Registration.vue",
      redirect: { name: "register" },
    },
    {
      path: "/registration",
      redirect: { name: "register" },
    },
    {
      path: "/register",
      name: "register",
      component: Registration,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/views/Streaming",
      name: "Streaming",
      component: Streaming,
    }
  ]
})


export default router