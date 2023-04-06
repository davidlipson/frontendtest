<template>
  <div class="panel-container">
    <div class="panel">
      <div class="path-element" v-for="(square, index) in path" :key="index">
        <p class="path-element-id">{{ index + 1 + offset }}.</p>
        <p class="path-element-value">{{ square?.squareName() }}</p>
      </div>
    </div>

    <div class="navigation">
      <div class="arrow" @click="scrollUp">
        <i class="bi bi-arrow-up"></i>
      </div>
      <div class="arrow-divider"></div>
      <div class="arrow" @click="scrollDown">
        <i class="bi bi-arrow-down"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Square } from '@/square'

export default defineComponent({
  name: 'Panel',
  props: {
    path: {
      type: Array<Square>,
      required: true
    },
    offset: {
      type: Number,
      required: true
    }
  },
  methods: {
    scrollUp() {
      this.$emit('scrollUp')
    },
    scrollDown() {
      this.$emit('scrollDown')
    }
  }
})
</script>

<style scoped>
.path-element {
  font-size: 15px;
  color: black;
  background-color: rgb(255, 250, 240);
  font-weight: bold;
  padding: 10px;
  display: flex;
  height: calc(90vmin / 20);
  cursor: pointer;
}

.path-element:hover {
  opacity: 0.8;
}

.arrow {
  text-align: center;
  background-color: rgb(255, 250, 240, 0.5);
  height: 50px;
  padding-top: 7px !important;
  padding: 3px;
}

.arrow:hover {
  cursor: pointer;
  color: black;
}

.arrow-divider {
  height: calc(90vmin - 100px);
  background-color: rgb(255, 250, 240, 0);
}

.arrow:hover {
  background-color: rgb(255, 250, 240) !important;
}

.bi {
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
  display: flex;
  flex-direction: column;
  width: 90vmin;
}

.panel-container {
  display: flex;
  flex-direction: row;
}

.navigation{
  width: 30px;
}

@media (max-width: 1024px) {
  .panel-container {
    margin-top: 10px;
    margin-bottom: 5vmin;
  }
  .panel{
    width: calc(90vmin - 30px);
  }
  .arrow-divider{
    display: none;
  }
}

@media (max-width: 600px) {
  .path-element {
   font-size: 12px;
   height: 30px;
  }
}

@media (min-width: 1024px) {
  .panel-container {
    margin-left: 10px;
  }
  .panel {
    width: 200px;
    height: 90vmin;
    background-color: rgba(255, 255, 255, 0.233);
  }
}
</style>
