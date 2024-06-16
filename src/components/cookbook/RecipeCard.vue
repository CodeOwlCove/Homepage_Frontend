<template>
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
  <div class="md:flex">
    <div class="p-8" v-if="recipe != undefined">
      <h2>({{recipe.id}}) {{recipe.title}}</h2>

      <hr><br>

      <ul>
        <li v-for="(ingredient, index) in recipe.ingredients">{{recipe.amount[index]}} of {{recipe.ingredients[index]}}</li>
      </ul>

      <br><hr><br>

      <p v-html="formatString(recipe.instructions)"></p>

      <br><hr>

      <button :class="liked ? 'liked' : 'unliked'" @click="toggleLike">{{recipe.likes}} Likes</button>
      <p>Tags: {{recipe.tags}}</p>
      <p>Shared by: {{recipe.creatorName}}</p>
    </div>
  </div>
</div>


</template>

<script setup lang="ts">

import {type Recipe, useCookBookStore} from "@/stores/CookBookStore";
import {onMounted, ref} from "vue";
import Cookies from 'js-cookie';
import axios from "axios";

let liked = ref(false);
const cookBookStore = useCookBookStore();

const props = defineProps({
    recipe: Object as () => Recipe ,
})

onMounted(() => {
  liked.value = checkLiked();
})

function checkLiked() {
  const likedRecipes = Cookies.get('likedRecipes');
  if (likedRecipes && props.recipe) {
    return likedRecipes.split(',').includes(props.recipe.id.toString());
  }
  return false;
}

async function toggleLike() {
  if(props.recipe == undefined || Cookies.get('likedRecipes') == undefined) {
    return;
  }

  if (liked.value) {
    await axios.post(import.meta.env.VITE_POINTS_COOKBOOK_ENDPOINT + "/removeLike",{
        Id: props.recipe.id
    }).then((response) => {
      //@ts-ignore shit is not undefined here...
      let likedRecipes = Cookies.get('likedRecipes') ? Cookies.get('likedRecipes').split(',') : [];
      //@ts-ignore same here, shit is not undefined, dunno why LINTER is dumb
      likedRecipes = likedRecipes.filter(id => id !== props.recipe.id.toString());
      Cookies.set('likedRecipes', likedRecipes.join(','));
      cookBookStore.fetchAllRecipes();
    }).catch((error) => {
        console.error(error);
    });

  } else {
    await axios.post(import.meta.env.VITE_POINTS_COOKBOOK_ENDPOINT + `/addLike`, {
      Id: props.recipe.id,
    }).then((response) => {
      //@ts-ignore shit is not undefined here...
      const likedRecipes = Cookies.get('likedRecipes') ? Cookies.get('likedRecipes').split(',') : [];
      //@ts-ignore same here, shit is not undefined, dunno why LINTER is dumb
      likedRecipes.push(props.recipe.id.toString());
      Cookies.set('likedRecipes', likedRecipes.join(','));
      cookBookStore.fetchAllRecipes();
    }).catch((error) => {
      console.error(error);
    })
  }
  liked.value = !liked.value;
}

function formatString(input: string) {
  return input.replace(/\n/g, "<br><br>");
}

</script>

<style scoped>
button {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.liked {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}

.unliked {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}

button:hover {
  color: #fff;
  text-decoration: none;
}

.liked:hover {
  background-color: #157347;
  border-color: #146c43;
}

.unliked:hover {
  background-color: #0b5ed7;
  border-color: #0a58ca;
}
</style>