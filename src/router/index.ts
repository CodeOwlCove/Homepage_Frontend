import { createRouter, createWebHistory } from 'vue-router'
import HorseRace from "@/components/HorseRace/AnimalRace.vue";
import AnimalRace from "@/components/HorseRace/AnimalRace.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Animal_Race_Game',
      component: AnimalRace
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
