<template>
  <img
    src="../../public/favicon.svg"
    alt=""
  >
  <header>
    <h1>Informações do Aluno</h1>
    <div class="info">
      <span><b>Discente:</b> Luciano Weslen da Silva</span>
      <span><b>Turma:</b> 2020</span>
    </div>
  </header>
</template>

<style lang="scss" scoped>
img {
  width: 92px;
  margin: 0 auto;
}

header {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .info {
    background: var(--background-transparent);
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 16px;
  }
}

</style>
