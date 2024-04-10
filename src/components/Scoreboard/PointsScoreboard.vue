<script setup lang="ts">
import {onMounted, onUnmounted} from "vue";
import {usePointScoreStore} from "@/stores/PointScoresStore";

const pointScoreStore = usePointScoreStore();
var timer: any;

onMounted(() => {
  pointScoreStore.updatePointsHighscore();
  timer = setInterval(() => { pointScoreStore.updatePointsHighscore(); }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});

</script>

<template>
  <div class="border border-red-50 m-5">
    <div class="m-5">
      <div class="text-2xl"><b><u>Top 10 Points:</u></b></div>
      <br>
      <ol class="border">
        <li class="grid grid-cols-10 text-center text-xl">
          <div class="col-span-3"> Points </div>
          <div class="col-span-7"> Username </div>
        </li>
      </ol>
      <ol v-for="user in pointScoreStore.getUser" class="mt-1 mb-1">
        <li class="grid grid-cols-10 text-center">
          <div class="col-span-3"> {{ user.points }} </div>
          <div class="col-span-7"> {{ user.username }} </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped>

</style>