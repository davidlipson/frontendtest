<template>
  <div class="main">
    <Board :board="board" @add-to-path="addToPath" />
    <Panel @scroll-up="scrollUp" @scroll-down="scrollDown" :path="viewablePath" :offset="offset" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Board from './components/Board.vue'
import Panel from './components/Panel.vue'
import { Square, initializeBoard } from './square'

export default defineComponent({
  name: 'App',
  data() {
    return {
      path: [] as Square[],
      board: initializeBoard(),
      offset: 0,
      viewable: 20
    }
  },
  components: {
    Board,
    Panel
  },
  emits: ['addToPath', 'scrollUp', 'scrollDown'],
  computed: {
    viewablePath() {
      console.log(this.offset, this.viewable, this.path.slice(this.offset, this.offset + this.viewable))
      return this.path.slice(this.offset, this.offset + this.viewable)
    }
  },
  methods: {
    addToPath(square: Square) {
      square.click()
      this.path.push(square)
    },
    scrollDown() {
      if (this.offset < this.path.length - this.viewable) {
        this.offset++
      }
    },
    scrollUp() {
      if (this.offset > 0) {
        this.offset--
      }
    }
  }
})
</script>

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
