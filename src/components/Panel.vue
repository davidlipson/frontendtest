<template>
  <div class="panel-container">
    <div class="panel">
      <div class="path-element" v-for="(square, index) in path" :key="index">
        <p class="path-element-id">{{ index + 1 + offset }}.</p>
        <p class="path-element-value">{{ square?.squareName() }}</p>
      </div>
    </div>
    <Navigation @scroll-down="scrollDown" @scroll-up="scrollUp" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Square } from '@/types/square'
import Navigation from './Navigation.vue'

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
  components: {
    Navigation
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

.path-element:nth-of-type(even) {
  background-color: rgb(252, 242, 227) !important;
}

.path-element:hover {
  opacity: 0.8;
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
  background-color: rgb(214, 214, 214);
}

.panel-container {
  display: flex;
  flex-direction: row;
  height: 90vmin;
}

@media (max-width: 1025px) {
  .panel-container {
    margin-top: 10px;
    margin-bottom: 5vmin;
    height: 120px;
  }

  .panel {
    width: calc(90vmin - 30px);
  }

  .path-element {
    height: 40px;
  }
}

@media (max-width: 600px) {
  .path-element {
    font-size: 13px;
  }
}

@media (min-width: 1025px) {
  .panel-container {
    margin-left: 10px;
  }

  .panel {
    width: 200px;
  }
}
</style>
