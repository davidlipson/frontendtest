<template>
  <div @click="addToPath()" :style="{ backgroundColor: square.colour }" class="square"></div>
</template>

<script lang="ts">
import { Square } from '@/square'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Square',
  props: {
    square: {
      type: Square,
      required: true
    }
  },
  methods: {
    addToPath() {
      this.$emit('addToPath', this.square)
    },
  }
})
</script>

<style scoped>
.square {
  width: 75px;
  height: 75px;
  padding: 0px;
  border-radius: 10px;
}

.square:hover {
  cursor: pointer;
  opacity: 0.8;
}

@media (min-width: 1024px) {
}
</style>
