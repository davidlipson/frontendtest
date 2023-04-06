<template>
  <div class="panel">
    <div class="path-element arrow" @click="scrollUp">
      <i class="bi bi-arrow-up"></i>
    </div>

    <div class="path-element" v-for="(square, index) in viewablePath" :key="square.index">
      <p class="path-element-id">{{ index + 1 + offset }}.</p>
      <p class="path-element-value">{{ square?.squareName() }}</p>
    </div>

    <div class="path-element arrow" @click="scrollDown(elements)">
      <i class="bi bi-arrow-down"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { useBoardStore } from '@/stores'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Panel',
  data() {
    const { offset } = useBoardStore();
    return {
      offset
    }
  },
  setup() {
    const { increaseOffset, decreaseOffset, path } = useBoardStore();
    return { decreaseOffset, increaseOffset, path, elements: 18}
  },
  computed: {
    viewablePath() {
      return this.path.slice(this.offset, this.offset + this.elements)
    }
  },
  methods: {
    scrollUp() {
      this.offset = this.decreaseOffset()
    },
    scrollDown(elements: number) {
      this.offset = this.increaseOffset(elements)
    }
  }
})
</script>ƒ

<style scoped>
.path-element {
  font-size: 16px;
  border-radius: 2px;
  color: black;
  background-color: rgb(255, 250, 240);
  border: 1px solid;
  font-weight: bold;
  padding: 10px;
  display: flex;
  height: 5%;
  cursor: pointer;
}

.path-element:hover {
  opacity: 0.8;
}

.arrow {
  text-align: center;
  width: 100%;
  background-color: rgb(255, 250, 240, 0.5);
}

.arrow:hover {
  background-color: rgb(255, 250, 240) !important;
}

.bi{
  width: 100%;
  font-size: 20px !important;
}

.path-element-id {
  width: 50%;
}

.path-element-value {
  width: 50%;
}

.panel {
  flex-direction: row;
  width: 90vmin;
}

@media (max-width: 1024px) {
  .panel {
    margin-top: 10px;
    margin-bottom: 5vmin;
  }
}

@media (min-width: 1024px) {
  .panel {
    width: 200px;
    height: 90vmin;
    margin-left: 10px;
  }
}
</style>
