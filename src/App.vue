<script setup lang="ts">
import Board from './components/Board.vue'
import Panel from './components/Panel.vue'
</script>

<template>
  <main>
    <Board />
    <Panel />
  </main>
</template>

<style scoped>
main {
  display: flex;
}

@media (min-width: 1024px) {
}
</style>
