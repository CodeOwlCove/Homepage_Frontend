<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue';
import HorseRace from "@/components/HorseRace/AnimalRace.vue";
import TopNavbar from "@/components/NavBar/TopNavbar.vue";

const show = ref(false);

</script>

<template>
  <div id="app" class="container mx-auto">
    <div id="top-nav" class="block outline-2">
      <top-navbar></top-navbar>
    </div>
    <div class="block">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

#app{
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

</style>



