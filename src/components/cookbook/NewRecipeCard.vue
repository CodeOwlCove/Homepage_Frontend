<template>
  <div class="new-recipe-card bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <form @submit.prevent="submitRecipe" class="mb-4">
      <label class="block text-2xl font-bold"><u>New Recipe</u></label>

      <br>

      <div class="mb-4">
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" v-model="title" placeholder="Title" required />
      </div>

      <hr><br>

      <div class="flex">
        <div class="flex w-1/2">
          <div>
            <label class="block text-gray-700 text-1xl font-bold mb-2"><b>Ingredients</b></label>
            <div v-for="(ingredient, index) in ingredients" :key="index" class="mb-4">
              <div class="flex w-full">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-5 items-center justify-center" @click.prevent="removeIngredient(index)">X</button>
                <input class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-5" id="amount" type="text" v-model="amount[index]" placeholder="400g" required />
                <input class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ingredient" type="text" v-model="ingredients[index]" placeholder="Flower" required />
              </div>
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click.prevent="addIngredient">Add Ingredient</button>
          </div>
        </div>

        <br><br>

        <div class="w-1/2">
          <label class="block text-gray-700 text-1xl font-bold mb-2" for="tag">Tags</label>
          <div v-for="(tag, index) in tags" :key="index" class="mb-4">
            <div class="flex">
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-5" @click.prevent="removeTag(index)">X</button>
              <input class="shadow appearance-none border rounded 1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tag" type="text" v-model="tags[index]" placeholder="main_dish" required />
            </div>
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click.prevent="addTag">Add Tag</button>
        </div>
      </div>

      <br><hr><br>

      <div class="mb-4">
        <label class="block text-gray-700 text-1xl font-bold mb-2" for="instruction"> Instructions </label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="instruction" type="text" v-model="instruction" placeholder="Instruction text" required></textarea>
      </div>

      <br><hr><br>

      <div class="mb-4">
        <div class="flex">
          <label class="text-gray-700 text-sm font-bold mb-2 whitespace-nowrap mr-5 flex items-center justify-center" for="creatorName"> Created by: </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="creatorName" type="text" v-model="creatorName" placeholder="Creator Name" required />
        </div>
      </div>

      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Create</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from "axios";
import {useCookBookStore} from "@/stores/CookBookStore";

let title = ref('');
let ingredients = ref(['']);
let amount = ref(['']);
let tags = ref(['']);
let instruction = ref('');
let creatorName = ref('');

const emit = defineEmits(['close']);

const cookBookStore = useCookBookStore();

function addIngredient() {
  ingredients.value.push('');
  amount.value.push('');
}

function removeIngredient(index: number) {
  console.log(index);
  ingredients.value.splice(index, 1);
  amount.value.splice(index, 1);
}

function addTag() {
  tags.value.push('');
}

function removeTag(index: number) {
  tags.value.splice(index, 1);
}

function submitRecipe() {
  axios.post('http://localhost:8085/writeRecipe', {
    title: title.value,
    tags: tags.value,
    ingredients: ingredients.value,
    amount: amount.value,
    instructions: instruction.value,
    creatorName: creatorName.value,
  }).then((response) => {
    cookBookStore.fetchAllRecipes();
    emit('close');
  }).catch((error) => {
    console.log(error);
  });


  // Handle form submission here
  console.log({
    title: title.value,
    tags: tags.value,
    ingredients: ingredients.value,
    amount: amount.value,
    instructions: instruction.value,
    creatorName: creatorName.value,
  });
}
</script>

<style scoped>
/* Add your styles here */
</style>