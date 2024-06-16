<template>
  <ul class="flex space-x-4 text-center mt-5 border-2 border-gray-600 p-3">
    <li class="flex-1">
      <RouterLink to="/" class="border-2 border-red-500">Home</RouterLink>
    </li>
    <li class="flex-1">
      <RouterLink to="/AboutMe/Education" class="border-2 border-red-500"> Education </RouterLink>
    </li>
    <li class="flex-1">
      <RouterLink to="/AboutMe/Projects" class="border-2 border-red-500"> Projects </RouterLink>
    </li>
    <li class="flex-1">
      <RouterLink to="/AnimalRaceGame" class="border-2 border-red-500">Animal Race Game</RouterLink>
    </li>
    <li class="flex-1">
      <RouterLink to="/CookBook" class="border-2 border-red-500">CookBook</RouterLink>
    </li>
    <li class="flex-1">
      <RouterLink to="/Impressum" class="border-2 border-red-500">Impressum</RouterLink>
    </li>
  </ul>

</template>

<script setup lang="ts">
import {ref} from 'vue';

</script>

<style scoped>

</style>