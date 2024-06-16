import { createRouter, createWebHistory } from 'vue-router'
import HorseRace from "@/components/HorseRace/AnimalRace.vue";
import AnimalRace from "@/components/HorseRace/AnimalRace.vue";
import Introduction from "@/components/Introduction/Introduction.vue";
import Impressum from "@/components/Introduction/Impressum.vue";
import AboutView from "@/views/AboutView.vue";
import AboutProjectsView from "@/views/AboutProjectsView.vue";
import CookBookView from "@/views/CookBookView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/AboutMe/Education',
      name: 'About Me',
      component: AboutView
    },
    {
      path: '/AboutMe/Projects',
      name: 'About Me Projects' +
          '',
      component: AboutProjectsView
    },
    {
      path: '/AnimalRaceGame',
      name: 'Animal_Race_Game',
      component: AnimalRace
    },
    {
      path: '/CookBook',
      name: 'Cookbook',
      component: CookBookView
    },
    {
      path: '/Impressum',
      name: 'Impressum',
      component: Impressum
    },
  ]
})

export default router
