<template>
  <section class="p-4 rounded" >
    <h1 class="text-4xl font-bold mb-4" @click="toggleSection('intro')">Introduction</h1>
    <div v-if="showIntro">
      <div class="mb-4">
        <p class="text-l">
          My name is Luca and on this page I want to introduce myself and show you some of my Projects which I did throughout my studies.
          First of all I am no designer and frontend design is not my strong suite. So don't expect anything fancy on this page. I can create functional things but they are mostly crude and ugly.
        </p>
      </div>
      <div class="mb-4">
        <p class="text-l">
          I am currently finishing my Master's degree in "Human-Centered-Computing" at the University of Reutlingen and are looking for a job in the field of Software Development preferably as Fullstack-Developer.
          I am located in the Stuttgart area and are searching in this area. I am also open to remote work. If you are interested, feel free to read the rest of this page and contact me at <a href="mailto:work@rommler.de" class="text-blue-500 underline">work@rommler.de</a>.</p>
      </div>
    </div>
  </section>

  <section class="p-4 rounded">
    <h1 class="text-4xl font-bold mb-4" @click="toggleSection('earlyYears')"> Early Years </h1>
    <div v-if="showEarlyYears">
      <p class="text-l">
        Ever since I was a child I always were fascinated by computers (mostly games at the time) and this fascination drove me to learn more about them and how they work.
        I started programming when I was around 16 years old and at the start I had a hard time getting into it but after failing and failing again and again, one does slowly learn and understand what it takes and means to be a software developer.
        I started programming in school with Java and later started to create little silly games in Unity with C#. Game-development was always a big motivation for me to get better and more efficient in programming. But over the years I developed a passion about automation in general.
        Since then I love to automate things, thinking about how I can improve processes and make things more efficient.
      </p>
    </div>
  </section>

  <section class="p-4 rounded">
    <h1 class="text-4xl font-bold mb-4"  @click="toggleSection('education')">Education</h1>
    <div v-if="showEducation">
      <h2 class="text-2xl mb-4"> School Education </h2>
      <p class="text-l">
        I had a normal school education Germany until the upper grades (the last 3 years). In these last 3 years, because I knew even back then that I wanted to do something with Computer Science, I changed to a Computer-Science focused school.
        This school was the Max-Eyth-Gymnasium in Kirchheim unter Teck and I finished the Abitur there in 2014.
      </p>
      <br>
      <h2 class="text-2xl mb-4"> First Academic Studies (Aborted) </h2>
      <p class="text-l">
        After the Abitur (and a 6 Month trainee programm at Deutsche Telekomm) I decidet to studie Media-Computer-Science at the University Aalen.
        I studied there for 2 years but had personal issues and decided it was best to abort the studies and start again at a later point in time.
      </p>
      <br>
      <h2 class="text-2xl mb-4"> International Trading Committee</h2>
      <p class="text-l">
        After the aborted studies I decided that it would be best for me to get some work experience and so I started a "Ausbildung" at the "Internationale Handelskammer" at a company called "DBL-Südwest".
        There I started the education called "Fachinformatiker - Anwendungsentwickler" and finished it in 2 1/2 years in 2019.
        During this time I learned a lot about software development, how the general workday play out, a lot about company structures and how to work with colleagues which are familiar and foreign to computer science and software development.
      </p>
      <br>
      <h2 class="text-2xl mb-4"> Second Academic Studies (Success) </h2>
      <p class="text-l">
        After the "Ausbildung" I decided to start my studies again and this time I wanted to do it right.
        Determined I started my Bachelor's degree in "Communication- and Media-Computer Science" at the University of Reutlingen in 2019 and finished it in 2022. After that I finalised my studies with a Masters Degree in "Human-Centered-Computing" in 2024.
        During my studies I learned a lot about software development, -design and project management.
        I also learned a lot about how to work in a team and how to communicate with others as well as how to work with different languages, tools and strategies and how to efficiently use them to solve complex problems.
      </p>
    </div>
  </section>

  <section class="p-4 rounded">
    <h1 class="text-4xl font-bold mb-4" @click="toggleSection('profCareer')"> Professional Career </h1>
    <div v-if="showProfCareer">
      <p class="text-l"> I just finished my academic studies so my professional career is just beginning. But throughout my studies I worked at different companies as work student. </p>
      <br>
      <h3 class="text-2xl mb-4"> Daimler Trucks AG </h3>
      <p class="text-l">
        In my "Praksissemester" I worked for 6 months at the Daimler Trucks AG in the department "Onboard Charging". In this time, I conceptualized and developed a tool for automated network analysis between the electronic vehicle (the Truck) and the charging station.
        The tool analyzed the network traffic and showed the results in a analysis report to the the engineers. This tool was developed in Python (requirement) and was well received by the engineers.
        Additionally I developed multiple smaller tools for the engineers to help them with their daily work. For example I created a hex convert tool which decoded and encoded CAn-Messages depending on a special predetermined format.
      </p>
      <br>
      <h3 class="text-2xl mb-4"> Tutor </h3>
      <p class="text-l">
        During my studies I worked multiple years as a tutor for the course "Informatik 1" and "Informatik 2" at the University of Reutlingen.
        In this time I helped students with their projects, corrected their code and gave them feedback on how to improve their code and projects.
        I also held lectures and helped the professor with the organization of the course.
      </p>
      <br>
      <h1 class="text-2xl mb-4"> Bosch Sensortec </h1>
      <p class="text-l">
        During my Master's degree I worked as a work student at Bosch Sensortec in the department "R&D Smart Glasses". In this time I maintained and extended the calibration software of the so called "Smart Glasses".
        There I suggested and implemented a more modern and efficient way to structure and develop the software inside the team. After a bit of convincing the team lead, the team decided to use my structure and at the end these changes were well received and liked.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let showIntro = ref<boolean>(true);
let showEarlyYears = ref<boolean>(true);
let showEducation = ref<boolean>(true);
let showProfCareer = ref<boolean>(true);
let showProjects = ref<boolean>(true);

function toggleSection (sectionName: string) {
  switch(sectionName){
    case "intro":
      showIntro.value = !showIntro.value;
      break;
    case "earlyYears":
      showEarlyYears.value = !showEarlyYears.value;
      break;
    case "education":
      showEducation.value = !showEducation.value;
      break;
    case "profCareer":
      showProfCareer.value = !showProfCareer.value;
      break;
    case "projects":
      showProjects.value = !showProjects.value;
      break;
  }
}

</script>

<style scoped>

</style>