<template>
  <div class="introduction">
    <div class="mt-10">
      <div class="text-center">
      <h1>Welcome to My Project</h1>
        <p>My name is CodeOwlCove aka Gwitninm, and I'm a developer working on this project.</p>
        <p>This project is built using Vue.js, TypeScript, and Vite. It's a fun and challenging project that I'm excited to share with you.</p>
        <p>Feel free to explore and let me know if you have any questions or feedback.</p>
        <p>To play the Animal Race game go to <a href="https://twitch.com/codeowlcove" target="_blank">My Twitch Channel</a> or <a href="https://twitch.com/codeowlcove/chat" target="_blank">Chat only</a> and enter the following commands:</p>
      </div>
      <div class="mt-5">
        <h1 class="text-3xl text-left">Commands:</h1>
        <table class="table border-spacing-0 border-collapse border-slate-500">
          <tr>
            <th class="border border-slate-600 w-5/12">Command</th>
            <th class="border border-slate-600">Description</th>
          </tr>
          <tr>
            <td class="border border-slate-700">!register</td>
            <td class="border border-slate-700">To register yourself. You need to do this if you want to play. You only need to register yourself once. Everyone starts with 100 points.</td>
          </tr>
          <tr>
            <td class="border border-slate-700">!enter &lt;animalID|animalName&gt; &lt;betAmount&gt;</td>
            <td class="border border-slate-700">This lets you bet on an Animal either though the ID or the name. Your bet is displayed on the page when successfully.</td>
          </tr>
          <tr>
            <td class="border border-slate-700">!getPoints</td>
            <td class="border border-slate-700">To see how much points you have left.</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// You can add your TypeScript code here
</script>

<style scoped>
.introduction {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.introduction h1 {
  color: #333;
  font-size: 2em;
}

.introduction p {
  color: #666;
  font-size: 1em;
  line-height: 1.6;
}
</style>