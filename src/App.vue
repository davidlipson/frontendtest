<template>
  <div class="main">
    <Board :board="game.board" @add-to-path="addToPath" />
    <Panel @scroll-up="scrollUp" @scroll-down="scrollDown" :path="viewablePath" :offset="offset" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Board from './components/Board.vue'
import Panel from './components/Panel.vue'
import { Square, Game } from './types'

export default defineComponent({
  name: 'App',
  data() {
    return {
      game: new Game(),
      offset: 0,
      totalViewable: window.innerWidth < 1025 ? 3 : 20
    }
  },
  components: {
    Board,
    Panel
  },
  emits: ['addToPath', 'scrollUp', 'scrollDown'],
  mounted() {
    // update the viewable path when the window is resized
    window.addEventListener('resize', this.resizePanel)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resizePanel)
  },
  computed: {
    viewablePath(): Square[] {
      return this.game.viewablePath(this.offset, this.totalViewable)
    }
  },
  methods: {
    addToPath(square: Square) {
      this.game.addToPath(square)
      // on add, show the longest, most recent path for the viewport
      this.offset =
        this.game.path.length - this.totalViewable > 0
          ? this.game.path.length - this.totalViewable
          : this.offset
    },
    scrollDown() {
      if (this.offset < this.game.path.length - this.totalViewable) {
        this.offset++
      }
    },
    scrollUp() {
      if (this.offset > 0) {
        this.offset--
      }
    },
    resizePanel() {
      this.totalViewable = window.innerWidth < 1025 ? 3 : 20
      // on resize, show the longest, most recent path for the new viewport
      this.offset = Math.max(this.game.path.length - this.totalViewable, 0)
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

@media (min-width: 1025px) {
  .main {
    flex-direction: row;
    height: 100vh;
    width: 100vw;
  }
}
</style>
