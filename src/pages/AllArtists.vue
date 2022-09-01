<template>
  <q-page class="flex q-pl-sm justify-center">

    <q-card class="artist-card q-mx-md q-mt-lg" v-for="i in 10" :key="i">
      <q-img class="artist-cover" src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
      <q-item-section class="absolute" style="top: 21%; right: 10px;">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </q-item-section>

      <q-card-section class="q-pb-sm">
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            <q-label>Xinduminguana</q-label>
            <div class="text-subtitle1">
              (Domingos Howana)
            </div>
          </div>
        </div>

      </q-card-section>

      <q-card-section class="q-pt-none">
        <div>
          Breve descrição ou excerto da histório do Artista...
        </div>
        <rating-stars></rating-stars>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Detalhes
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import RatingStars from 'src/components/RatingStars.vue'

export default defineComponent({
  components: {
    RatingStars
  },
  setup() {
    return {

    }
  }
})
</script>

<style lang="scss" scoped>
</style>
