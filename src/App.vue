<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue';
import HorseRace from "@/components/HorseRace/AnimalRace.vue";
import TopNavbar from "@/components/NavBar/TopNavbar.vue";

const show = ref(false);

</script>

<template>
  <div id="app">
    <div id="top-nav-background" class="fixed top-0 z-50 w-full flex items-center pb-5">
      <div id="top-nav" class="block outline-2">
        <top-navbar></top-navbar>
      </div>
    </div>
    <div class="block pt-20 ml-10 mr-10">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

#app{
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
}

#top-nav{
  width: 90vw;
  margin-left: 5vw;
  margin-right: 5vw;
}

#top-nav-background{
  width: 100vw;
  background-color: #181818;
}

</style>



