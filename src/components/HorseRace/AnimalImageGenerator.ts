export class AnimalImageGenerator{

    runningImages: string[] = [
        "HorseRace/Animals/Animal_0_Running.gif",
        "HorseRace/Animals/Animal_1_Running.gif",
        "HorseRace/Animals/Animal_2_Running.gif",
        "HorseRace/Animals/Animal_3_Running.gif",
        "HorseRace/Animals/Animal_4_Running.gif",
        "HorseRace/Animals/Animal_5_Running.gif",
        "HorseRace/Animals/Animal_6_Running.gif",
        "HorseRace/Animals/Animal_7_Running.gif"
    ];

    idleImages: string[] = [
        "HorseRace/Animals/Animal_0_Idle.gif",
        "HorseRace/Animals/Animal_1_Idle.gif",
        "HorseRace/Animals/Animal_2_Idle.gif",
        "HorseRace/Animals/Animal_3_Idle.gif",
        "HorseRace/Animals/Animal_4_Idle.gif",
        "HorseRace/Animals/Animal_5_Idle.gif",
        "HorseRace/Animals/Animal_6_Idle.gif",
        "HorseRace/Animals/Animal_7_Idle.gif"
    ];

    getRandomAnimalImageSet(): string[]{

        let randomIndex = Math.floor(Math.random() * this.runningImages.length);
        let randomRunningImage = this.runningImages[randomIndex];
        let randomIdleImage = this.idleImages[randomIndex];

        return [randomRunningImage, randomIdleImage];

    }


}