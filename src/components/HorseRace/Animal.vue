<script setup lang="ts">
import {computed, defineProps, onMounted, onUnmounted, ref} from 'vue';
import {watch} from 'vue';

const props = defineProps<{ name: string; id: number , progress: number, state: string, tickTime: number}>();

let runningImage = "src/assets/HorseRace/Animals/Animal_" + Math.floor(Math.random() * (8)) + "_Running.gif";
let idleImage = "src/assets/HorseRace/Animals/Animal_" + Math.floor(Math.random() * (8)) + "_Idle.gif";
let currentImage = idleImage;

onMounted(() => {
  addEventListener('resize', () => {
    const animalImg = document.getElementById('animal_' + props.id);
    const animalContainer = document.getElementById('animal-container');

    if (animalImg && animalContainer) {
      animalImg.style.left = props.progress * 0.0001 * animalContainer.offsetWidth + 'px';
    }
  });
})

onUnmounted(() => {
  removeEventListener('resize', () => {
    console.log('removing event listener');
  });
})

watch(() => props.progress, (newValue, oldValue) => {
  if(props.state == "RUNNING")
    currentImage = runningImage;
  else
    currentImage = idleImage;

  const animalImg = document.getElementById('animal_' + props.id);
  const animalContainer = document.getElementById('invis-animal-container');

  if (animalImg && animalContainer) {
    animalImg.style.left = (newValue - 250) * 0.0001 * animalContainer.offsetWidth + 'px';
  }
});

</script>

<template>
  <div>
    <div>
      <img :id="'animal_' + id" :src="currentImage" height="50" width="50" :style="{transition: tickTime + 'ms'}"/>
    </div>
    <div id="invis-animal-container"></div>
  </div>
</template>

<style scoped>

div {
  min-width: 300px;
}

img {
  position: relative;
  top: 0;
  left: 0;
}

</style>