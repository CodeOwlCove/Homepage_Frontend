import {defineStore } from "pinia";
import axios from "axios";

interface Animal{
    id: number;
    name: string;
    state: string;
    progress: number;
}

interface Bet{
    username: string;
    animalName: string;
    animalid: number;
    betAmount: number;
}

interface BetDetails{
    animalName: string;
    animalId: number;
    betAmount: number;
}

export const useAnimalStore = defineStore("AnimalRaceStore",   {
    //state
    state:() => {
        return {
            animals: {} as Animal[],
            currentState: "-1" as string,
            lastWinners: [] as string[],
            timeUntilNextGameState: -1 as number,
            animalRaceBets: {} as Bet[],
            displayPlacementList: true as boolean,
        }
    },

    getters:{
        getAnimals(): {id: number, name: string, state: string, progress: number}[]{
            return this.animals;
        },
        getCurrentState(): string{
            return this.currentState;
        },
        getLastWinners(): string[]{
            return this.lastWinners;
        },
        getDisplayPlacementList(): boolean{
            return this.displayPlacementList;
        },
        getTimeUntilNextGameState(): number{
            return this.timeUntilNextGameState;
        },
        getAnimalRaceBets(): { username: string, animalName: string, animalid: number, betAmount: number}[]{
            return this.animalRaceBets;
        }
    },

    actions: {
        setAnimals(newHorses: {id: number, name: string, state: string, progress: number}[]){
            this.animals = newHorses;
        },
        setAnimalRaceBets(newAnimalRaceBets: { username: string, animalName: string, animalid: number, betAmount: number}[]){
            this.animalRaceBets = newAnimalRaceBets;
        },
        parseAnimalRaceInformationData(data: string){
            const parsedData = JSON.parse(data);

            this.setAnimals(parsedData.animals as Animal[]);
            this.currentState = parsedData.gameState as string;
            this.timeUntilNextGameState = Math.floor(parsedData.timeUntilNextGameState) as number;

            if(this.currentState === "BETTING" && this.timeUntilNextGameState <= 5 || this.currentState === "RACING")
                this.displayPlacementList = false;
            else if(this.displayPlacementList === false && this.currentState === "FINISHED")
                this.displayPlacementList = true;

            this.lastWinners = parsedData.lastPlacementList as string[];


            const newBets: Bet[] = Object.entries(parsedData.placedBets).map(([key, value]) => {
                const betDetails = value as BetDetails;
                return {
                    username: key,
                    animalName: betDetails.animalName,
                    animalid: betDetails.animalId,
                    betAmount: betDetails.betAmount
                } as Bet;
            });

            this.setAnimalRaceBets(newBets);
        },
        getAnimalNameById(id: number): string{
            for (const animal of this.animals){
                if (animal.id === id){
                    return animal.name;
                }
            }
            return "Unknown";
        }
    }

    //getter
})