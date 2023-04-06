<template>
  <div class="panel">
    <div class="path-element" v-for="(square, index) in path" :key="square.index">
      <p class="path-element-id">{{ index + 1 }}.</p>
      <p class="path-element-value">{{ square.squareName() }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { useBoardStore } from '@/stores'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Panel',
  setup() {
    const { path } = useBoardStore()
    return { path }
  },
  components: {}
})
</script>

<style scoped>
.path-element {
  font-size: 16px;
  border-radius: 5px;
  color: black;
  background-color: rgb(255, 250, 240);
  height: 40px;
  font-weight: bold;
  padding: 10px;
  display: flex;
  margin: 5px 0px;
}

.path-element:first-of-type {
  margin-top: 0px;
}

.path-element p {
  margin-top: -3px;
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
  overflow: scroll;
  scroll-behavior: calc(100% - 20px);
}

@media (max-width: 1024px) {
  .panel {
    /*max-height: calc(100vh - 90vmin - 10vmin - 10px);*/
    max-height: 30vmin;
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
