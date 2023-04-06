<template>
  <table cellspacing="0">
    <tr class="rank" v-for="(rank, index) in board" :key="index">
      <td :style="{ backgroundColor: square.colour() }" v-for="square in rank" :key="square.index">
        <Square @add-to-path="addToPath" :square="square" />
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { useBoardStore } from '@/stores'
import { defineComponent } from 'vue'
import Square from './Square.vue'
import type { Square as Piece } from '@/square'

export default defineComponent({
  name: 'Board',
  setup() {
    const { board, addSquare } = useBoardStore()
    return { board, addSquare }
  },
  components: {
    Square
  },
  emits: ['addToPath'],
  methods: {
    addToPath(square: Piece) {
      this.addSquare(square)
    }
  }
})
</script>

<style scoped>
table {
  table-layout: fixed;
  width: 90vmin;
  height: 90vmin;
  empty-cells: show;
}

td:hover {
  cursor: pointer;
  opacity: 0.8;
}

@media (max-width: 1024px) {
  table {
    margin-top: 5vmin;
  }
}
</style>
