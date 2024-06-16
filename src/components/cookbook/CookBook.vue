<template>
  <div>
    <br>
    <h1>CookBook</h1>
    <br>
    <button @click="openCreateRecipeCard()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Create new Recipe
    </button>

    <br>

    <div class="flex flex-wrap justify-between">
      <RecipeCard v-for="recipe in cookBookStore.recipes" :recipe="recipe" :key="recipe.id" class="w-full md:w-1/2"></RecipeCard>
    </div>

    <div v-if="showNewRecipeCard">
      <div class="fixed top-0 left-0 w-full h-full z-30" @click="showNewRecipeCard = false"></div> <!-- Overlay -->
      <div class="new-recipe-card bg-gray-200 border border-gray-300 shadow-lg z-40 rounded p-4">
        <NewRecipeCard @close="showNewRecipeCard = false" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {useCookBookStore} from "@/stores/CookBookStore";
import {onMounted, ref} from "vue";
import RecipeCard from "@/components/cookbook/RecipeCard.vue";
import NewRecipeCard from "@/components/cookbook/NewRecipeCard.vue";

let cookBookStore = useCookBookStore();

let showNewRecipeCard = ref(false);

onMounted(() => {
    console.log("Fetching recipes");
    cookBookStore.fetchAllRecipes();
})

function openCreateRecipeCard(){
  showNewRecipeCard.value = true;
}

</script>

<style scoped>

.new-recipe-card {
  width: 80vw;
  height: 75vh;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  overflow: auto;
}

</style>