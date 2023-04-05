<template>
  <div class="panel">
  <div class="path-element" v-for="square in path" :key="square.index">
    <p> {{ square.squareName() }}</p>
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
  font-size: 20px;
  color: black;
  background-color: beige;
  height: 50px;
  width: 50px;
  margin: 0px 5px;
  border-radius: 10px;
  padding: 10px;
  flex: 0 0 10%;
}
.panel {
  display: flex; 
  flex-wrap: wrap;
  padding: 10px 5px;
  flex-direction: row;
  background-color: rgb(194, 222, 246);
  width: 400px;
  border-radius: 10px;
  margin-left: 10px;
}
</style>
