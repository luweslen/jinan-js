<template>
  <a
    href="http://github.com/devweslen/jinan-js"
    target="_blank"
  >
    <i class="bx bxl-github" />
  </a>
</template>

<style lang="scss" scoped>
a {
  width: 48px;
  height: 48px;
  position: fixed;
  bottom: 32px;
  right: 32px;

  background: var(--secondary);
  color: var(--primary);

  text-decoration: none;
  font-size: 40px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  i {
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    i {
      opacity: 0.8;
    }
  }
}
</style>
