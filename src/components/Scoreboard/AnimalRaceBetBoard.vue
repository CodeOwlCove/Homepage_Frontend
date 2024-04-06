<script setup lang="ts">
import {onMounted, onUnmounted} from "vue";
import {useBetStore} from "@/stores/BetStore";


const betStore = useBetStore();

onMounted(() => {
  betStore.startUpdatingBets(3000);
});

</script>

<template>
  <div class="border border-red-50 m-5">
    <div class="m-5">
      <div class="text-2xl"><b><u>Current Bets:</u></b></div>
      <br>
      <table class="table-auto border border-slate-500">
        <tr>
          <th class="w-6/12 border border-slate-600 text-xl bold">Username</th>
          <th class="w-3/12 border border-slate-600 text-xl bold">Animal</th>
          <th class="w-3/12 border border-slate-600 text-xl bold">Bet</th>
        </tr>
        <tr v-for="(item, index) in betStore.getAnimalRaceBets" :key="index">
          <td class="w-6/12 border border-slate-700"> {{ item.username }} </td>
          <td class="w-3/12 border border-slate-700"> {{ item.animalName}} </td>
          <td class="w-3/12 border border-slate-700"> {{ item.betAmount}} </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>

table {
  width: 100%;
}

td {
  text-align: center;
}

</style>