import { createRouter, createWebHistory } from 'vue-router'
import HorseRace from "@/components/HorseRace/AnimalRace.vue";
import AnimalRace from "@/components/HorseRace/AnimalRace.vue";
import Introduction from "@/components/Introduction/Introduction.vue";
import Impressum from "@/components/Introduction/Impressum.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/AnimalRaceGame',
      name: 'Animal_Race_Game',
      component: AnimalRace
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/Impressum',
      name: 'Impressum',
      component: Impressum
    },
  ]
})

export default router
