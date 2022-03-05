<script setup>
import { defineProps } from 'vue';

defineProps({
  name: {
    type: String,
    default: '',
  },
  question: {
    type: String,
    default: '',
  },
  solution: {
    type: Function,
    default: () => {},
  },
  index: {
    type: Number,
    default: 0,
  },
});

function handleRunSolution(solutionRaw) {
  const solutionString = solutionRaw
    .replace('function solution() {', '')
    .slice(0, -1);

  eval(solutionString);
}
</script>

<template>
  <div class="question">
    <h2>Exercicio {{ index + 1 }}</h2>
    <span>{{ question }}</span>
    <pre>
      <code>{{ solution.toString().replace('solution', name) }}</code>
    </pre>
    <button @click="handleRunSolution(solution.toString())">
      <i class="bx bx-play" />
      Testar
    </button>
  </div>
</template>

<style lang="scss" scoped>
.question{
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: var(--background-transparent);
  padding: 16px;

  pre {
    background: #282a36;
    color: #f8f8f2;
    font-weight: 700;
    padding: 8px;

    white-space: wrap;
  }

  button {
    width: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    border: 0;
    background: var(--primary);
    color: var(--white);

    font-weight: 700;
    font-size: 16px;

    padding: 0.5rem 1rem;

    transition: all 0.2s ease-in-out;

    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    i {
      font-size: 24px;
    }

  }
}
</style>
