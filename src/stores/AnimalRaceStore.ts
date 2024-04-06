import {defineStore } from "pinia";
import axios from "axios";

export const useAnimalStore = defineStore("AnimalRaceStore",  {
    //state
    state:() => {
        return {
            animals: {} as {id: number, name: string, state: string, progress: number}[]
        }
    },

    getters:{
        getAnimals(): {id: number, name: string, state: string, progress: number}[]{
            return this.animals;
        },
    },

    actions: {
        setAnimals(newHorses: {id: number, name: string, state: string, progress: number}[]){
            this.animals = newHorses;
        },

        async updateProgress(){
            await axios.get("http://localhost:8080/horseRaceUpdateProgress")
                .then((response) => {
                    this.setAnimals(response.data);
                }).catch((error) => {
                    console.log(error);
                });
        }
    }

    //getter
})