<template>
  <div @click="addToPath()" class="square"></div>
</template>

<script lang="ts">
import { Square } from '@/types/square.js'
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
    }
  }
})
</script>

<style scoped>
.square {
  width: 100%;
  height: 100%;
}
</style>
