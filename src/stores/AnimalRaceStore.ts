import {defineStore } from "pinia";
import axios from "axios";

export const useAnimalStore = defineStore("AnimalRaceStore",   {
    //state
    state:() => {
        return {
            animals: {} as {id: number, name: string, state: string, progress: number}[],
            currentState: ["" , ""] as string[],
            lastWinners: [] as string[],
            displayPlacementList: true as boolean,
        }
    },

    getters:{
        getAnimals(): {id: number, name: string, state: string, progress: number}[]{
            return this.animals;
        },
        getCurrentState(): string[]{
            return this.currentState;
        },
        getLastWinners(): string[]{
            return this.lastWinners;
        },
        getDisplayPlacementList(): boolean{
            return this.displayPlacementList;
        }
    },

    actions: {
        setAnimals(newHorses: {id: number, name: string, state: string, progress: number}[]){
            this.animals = newHorses;
        },

        async updateProgress(){
            await axios.get(import.meta.env.VITE_ANIMAL_RACE_ENDPOINT + "/animalRaceUpdateProgress")
                .then((response) => {
                    this.setAnimals(response.data);
                }).catch((error) => {
                    console.log(error);
                });
        },

        async updateState(){
            await axios.get(import.meta.env.VITE_ANIMAL_RACE_ENDPOINT + "/animalRaceState")
                .then((response) => {
                    this.currentState = response.data;

                    if(this.currentState[0] === "FINISHED" && !this.displayPlacementList)
                            this.updateLastWinners();

                    if(this.currentState[0] === "BETTING" && Number.parseInt(this.currentState[1]) <= 5 && this.displayPlacementList)
                            this.displayPlacementList = false;

                }).catch((error) => {
                    console.log(error);
                });
        },

        async updateLastWinners(){
            await axios.get(import.meta.env.VITE_ANIMAL_RACE_ENDPOINT + "/getLastWinners")
                .then((response) => {
                    this.displayPlacementList = true;
                    this.lastWinners = response.data;
                }).catch((error) => {
                    console.log(error);
                });
        }
    }

    //getter
})