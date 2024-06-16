import {defineStore} from "pinia";
import axios from "axios";

export interface Recipe{
    id: number;
    title: string;
    tags: string[];
    ingredients: string[];
    amount: string[];
    instructions: string;
    likes: number;
    creatorName: string;
}

export const useCookBookStore = defineStore("CookBookStore",  {

    state:() => {
        return {
            recipes: [] as Recipe[],
        }
    },

    getters:{
        getRecipes(): Recipe[]{
            return this.recipes;
        },
    },
    actions: {
        fetchAllRecipes(){
            axios.get("http://localhost:8085/getAllRecipes").then((response) => {
                this.recipes = response.data;
            }).catch((error) => {
                console.log(error);
            });
        }
    }
})