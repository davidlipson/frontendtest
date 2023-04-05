<template>
  <div class="board">
    <table>
      <tr class="rank" v-for="(rank, index) in board" :key="index">
        <td v-for="square in rank" :key="square.index">
          <Square @add-to-path="addToPath" :square="square" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { useBoardStore } from '@/stores'
import { defineComponent } from 'vue'
import Square from './Square.vue'
import type {Square as Piece} from '@/square'

export default defineComponent({
  name: 'Board',
  setup() {
    const {board, addSquare} = useBoardStore()
    return { board, addSquare  }
  },
  components: {
    Square
  },
  emits: ['addToPath'],
  methods: {
    addToPath(square: Piece) {
      this.addSquare(square)
    },
  }
})
</script>

<style scoped>
.board{
  background-color: aliceblue;
  border-radius: 10px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
