<script setup lang="ts">
import Board from './components/Board.vue'
import Panel from './components/Panel.vue'
</script>

<template>
  <div class="main">
    <Board />
    <Panel />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1024px) {
  .main {
    flex-direction: row;
    height: 100vh;
    width: 100vw;
  }
}
</style>
