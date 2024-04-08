<script setup lang="ts">
import {useAnimalStore} from "@/stores/AnimalRaceStore";
import {onMounted} from "vue";

const animalStore = useAnimalStore();

onMounted(async () => {
  await animalStore.updateLastWinners();
});

</script>

<template>
    <div v-if="animalStore.displayPlacementList">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-red-50 bg-white w-1/4 h-1/4">
        <div class="text-center">
          <h1 class="bold text-2xl underline mt-3">Winners</h1>
          <br>
          <ol v-for="(item, index) in animalStore.getLastWinners">
            <li>{{index+1}}. {{ item }}</li>
          </ol>
        </div>
      </div>
    </div>
</template>

<style scoped>



</style>