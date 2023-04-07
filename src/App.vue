<template>
  <div class="main">
    <Board :board="game.board" @add-to-path="addToPath" />
    <Panel
      @scroll-up="scrollUp"
      @scroll-down="scrollDown"
      :path="viewablePath"
      :offset="offset"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Board from './components/Board.vue'
import Panel from './components/Panel.vue'
import { Square, Board as Game } from './types'

export default defineComponent({
  name: 'App',
  data() {
    return {
      game: new Game(),
      offset: 0,
      totalViewable: window.innerWidth < 1025 ? 3 : 20,
    }
  },
  components: {
    Board,
    Panel
  },
  emits: ['addToPath', 'scrollUp', 'scrollDown'],
  mounted() {
    window.addEventListener('resize', this.resizePanel)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizePanel)
  },
  computed: {
    viewablePath(): Square[] {
      return this.game.viewablePath(this.offset, this.totalViewable);
    }
  },
  methods: {
    addToPath(square: Square) {
      this.game.addToPath(square)
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
      this.offset = 0 // can fix this to  be better
      this.totalViewable = window.innerWidth < 1025 ? 3 : 20
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
