<script setup>
import { ref } from 'vue';

import Header from './components/Header.vue';
import Question from './components/Question.vue';

const answers = ref([]);
const answerFiles = import.meta.glob('./answers/*.js');

for (const answer in answerFiles) {
  answerFiles[answer]().then((module) => {
    const { name, question, solution } = module;

    answers.value.push({
      name,
      question,
      solution,
    });
  });
}

</script>

<template>
  <Header />
  <main>
    <h1>Soluções dos exercícios</h1>
    <question
      v-for="(answer, index) in answers"
      :key="answer.name"
      class="question"
      :index="index"
      :name="answer.name"
      :question="answer.question"
      :solution="answer.solution"
    />
  </main>
</template>

<style lang="scss">

:root {
  --secondary: #E98074;
  --primary: #443180;
  --third: #F93D8A;
  --white: #ffffff;

  --text-section: #000;

  --background-transparent: linear-gradient(
      113.96deg, rgba(255, 255, 255, 0.2) 9.24%, rgba(255, 255, 255, 0.05) 89.01%);
  --background-body: radial-gradient(
    86.25% 99.66% at 83.52% 9.25%,
    var(--secondary) 0%, var(--primary) 30.88%, var(--primary) 69.74%, var(--third) 100%);
  --background-section: var(--white);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background: var(--background-body);
}

#app {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: var(--white);
  padding: 32px;
}

h1 {
  font-size: 32px;
}

h2 {
  font-size: 24px;
}

span {
  font-size: 18px;
}

main {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
