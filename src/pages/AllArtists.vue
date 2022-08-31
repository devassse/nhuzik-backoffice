<template>
  <q-page class="flex q-pl-sm">

    <q-card class="artist-card q-mx-md q-mt-lg" v-for="i in 10" :key="i">
      <q-img class="artist-cover" src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
      <q-item-section class="absolute" style="top: 24%; right: 10px;">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </q-item-section>

      <q-card-section>
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
          Breve descrição ou excerto da histório do Artista, mais informação é encontrada clicando o Botão abaixo...
        </div>
        <q-rating v-model="stars" :max="5" size="32px" />
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

export default defineComponent({
  setup() {
    return {
      stars: ref(4)
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
