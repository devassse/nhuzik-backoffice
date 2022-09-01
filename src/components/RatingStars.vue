<template>
  <div class="q-mt-xs">
    <q-rating v-model="stars" :max="7" size="24px" />

    <div class="shape"></div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    return {
      stars: ref(4)
    }
  }
}
</script>

<style>
.shape {
  border-color: #a0c7ff #fff #fff #fff;
  border-style: solid;
  border-width: 20px;
  width: 0;
  height: 0;
}

td:nth-child(3n+0) {
  background-color: #0000;
}
</style>
