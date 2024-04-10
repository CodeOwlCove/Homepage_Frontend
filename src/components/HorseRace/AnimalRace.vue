<script setup lang="ts" xmlns:v="http://www.w3.org/1999/xhtml">
import {ref, onMounted, onUnmounted} from 'vue';
import Animal from './Animal.vue';
import {useAnimalStore} from "@/stores/AnimalRaceStore";
import {storeToRefs} from "pinia";
import PointsScoreboard from "@/components/Scoreboard/PointsScoreboard.vue";
import AnimalRaceBetBoard from "@/components/Scoreboard/AnimalRaceBetBoard.vue";
import WinnerTable from "@/components/HorseRace/WinnerTable.vue";

const animalStore = useAnimalStore();

const maxProgress : number = 10000;
const winningProgress : number = 9000;

let eventSource: EventSource | null = null;

const tickTime = 250;

onMounted(() => {
  eventSource = new EventSource("http://localhost:8080/getAnimalRaceInformation");
  if(eventSource){
    eventSource.onmessage = ((event) => {
      animalStore.parseAnimalRaceInformationData(event.data);
    });
  }
});

onUnmounted(() => {
  if (eventSource) {
    eventSource.close();
  }
});

</script>

<template>
  <div class="border border-red-50 mt-6">
    <div class="grid grid-cols-2 mt-2 text-center">
      <div class="col-span-1 m-2">
        <h1 class="bold text-4xl underline">Animal Racing</h1>
      </div>
      <div class="col-span-1 mt-2">
        <p class="bold text-2xl">Current Phase: {{ animalStore.getCurrentState }}</p>
        <p class="text-1xl" v-if="animalStore.getCurrentState != 'RACING'">Remaining time in Phase: {{ animalStore.getTimeUntilNextGameState }}</p>
        <p class="text-1xl" v-else> Race in Progress... </p>
      </div>
    </div>
    <br>
    <br>
    <div class=" m-4 race-container">
      <table class="race-table">
        <tr class="animalRow" v-for="(animal, index) in animalStore.getAnimals">
          <td class="animalName">{{ animal.name }} </td>
          <td class="border" id="animal_table_data">
            <Animal :id="animal.id" :index="index" :progress="animal.progress" :name="animal.name" :state="animal.state" :tickTime="tickTime"></Animal>
            <div class="finish-line"></div>
          </td>
        </tr>
      </table>
    </div>
    <div class="grid grid-cols-2">
      <PointsScoreboard></PointsScoreboard>
      <AnimalRaceBetBoard></AnimalRaceBetBoard>
    </div>
    <WinnerTable></WinnerTable>
  </div>
</template>

<style scoped>

.race-container {
  display: block;
  position: relative;
}

.animalName {
  width: 10px;
}

table tr td {
  padding: 20px;
}

.race-table{
  width: 100%;
}

#animal_table_data {
  position: relative;
}

.finish-line {
  position: absolute;
  top: 0;
  left: 95%;
  height: 100%;
  border-left: 2px solid red;
}

</style>