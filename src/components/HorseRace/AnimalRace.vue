<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';
import Animal from './Animal.vue';
import {useAnimalStore} from "@/stores/AnimalRaceStore";
import {storeToRefs} from "pinia";
import PointsScoreboard from "@/components/Scoreboard/PointsScoreboard.vue";
import AnimalRaceBetBoard from "@/components/Scoreboard/AnimalRaceBetBoard.vue";

const animalStore = useAnimalStore();

const maxProgress : number = 10000;
const winningProgress : number = 9000;

const tickTime = 250;

onMounted(() => {
  const horseUpdateInterval = setInterval(() => {
    animalStore.updateProgress();
  }, tickTime);

  addEventListener('resize', () => {
    const td_element = document.getElementById('animal_table_data');
    const animalRows = document.getElementsByClassName('animalRow');
    const raceContainer = document.getElementsByClassName
  });

});

onUnmounted(() => {
  removeEventListener('resize', () => {
    console.log('removing event listener');
  });
})

</script>

<template>
  <div class="border border-red-50 mt-10">
    <h1 class="bold text-4xl underline m-2">Animal Racing</h1>
    <br>
    <br>
    <div class="m-4 race-container">
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

.animalRow{
  padding: 30px 1px 1px 1px;
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