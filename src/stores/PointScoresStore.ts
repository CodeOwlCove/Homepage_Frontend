import {defineStore} from "pinia";
import axios from "axios";

export const usePointScoreStore = defineStore("PointScoreStore",  {
    //state
    state:() => {
        return {
            user: {} as {UID: string, username: string, platform: string, points: number}[]
        }
    },

    getters:{
        getUser(): {UID: string, username: string, platform: string, points: number}[]{
            return this.user;
        },
    },

    actions: {
        setPoints(newUser: {UID: string, username: string, platform: string, points: number}[]){
            this.user = newUser;
        },

        async updatePointsHighscore(){
            await axios.get("http://localhost:8080/GetPointsHighscore")
                .then((response) => {
                    this.setPoints(response.data);
                }).catch((error) => {
                    console.log(error);
                });
        },

        startUpdatingPoints(interval: number){
            setInterval(() => {
                this.updatePointsHighscore();
            }, interval);
        }
    }
})