<template>
  <div class="navigation">
    <div class="arrow" @click="scrollUp">
      <i class="bi bi-arrow-up"></i>
    </div>
    <div class="arrow-divider"></div>
    <div class="arrow" @click="scrollDown">
      <i class="bi bi-arrow-down"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navigation',
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

.navigation {
  width: 30px;

}

@media (max-width: 1025px) {
  .arrow-divider {
    display: none;
  }
  .navigation{
    height: calc(15vmin);
  }
  .arrow {
    height: 50%;
    padding: none !important;
  }
}
</style>
