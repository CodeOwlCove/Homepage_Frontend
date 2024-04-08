import {defineStore} from "pinia";
import axios from "axios";
import https from "https";

const httpsAgent = new https.Agent({
    rejectUnauthorized: false, // This line will ignore SSL certificate verification
});

export const useBetStore = defineStore("BetStore",  {
    //state
    state:() => {
        return {
            animalRaceBets: {} as { username: string, animalName: string, animalid: number, betAmount: number}[]
        }
    },

    getters:{
        getAnimalRaceBets(): { username: string, animalName: string, animalid: number, betAmount: number}[]{
            return this.animalRaceBets;
        },
    },

    actions: {
        setAnimalRaceBets(newAnimalRaceBets: { username: string, animalName: string, animalid: number, betAmount: number}[]){
            this.animalRaceBets = newAnimalRaceBets;
        },

        async updateBetScore(){
            await axios.get(import.meta.env.VITE_ANIMAL_RACE_ENDPOINT + "/GetAnimalRaceBets", {httpsAgent})
                .then((response) => {
                    const parsedData = [];
                    for (const username in response.data) {
                        const betData = response.data[username];
                        parsedData.push({
                            username: username,
                            animalName: betData.animalName,
                            animalid: betData.animalId,
                            betAmount: betData.betAmount
                        });
                    }
                    this.setAnimalRaceBets(parsedData);
                }).catch((error) => {
                    console.log(error);
                });
        },

        startUpdatingBets(interval: number){
            setInterval(() => {
                this.updateBetScore();
            }, interval);
        }
    }
})