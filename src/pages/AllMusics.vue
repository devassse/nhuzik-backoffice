<template>
  <q-page class="flex q-pl-sm">

    <q-card class="artist-card q-mx-md q-mt-lg" v-for="i in 10" :key="i">
      <q-img class="artist-cover" src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
      <q-item-section class="absolute" style="top: 16%; right: 10px;">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </q-item-section>
      <q-card-section>
        <div class="text-caption text-grey">
          Recentimente adicionadas
        </div>
        <div v-for="i in 6" :key="i">
          Marabenta como anima
          <audio controls>
            <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Todas Músicas
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      stars: ref(4)
    }
  }
})
</script>

<style lang="scss" scoped>
audio {
  filter: sepia(20%) saturate(70%) grayscale(1) contrast(99%) invert(12%);
  height: 20px;

  &::-webkit-media-controls-enclosure {
    border-radius: 5px;
  }
}
</style>
