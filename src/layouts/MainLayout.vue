<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title></q-toolbar-title>
        <div>
          <a href="#">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#fff"
                d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" />
            </svg>
          </a>
        </div>

      </q-toolbar>
      <div class="q-px-lg q-pt-xs">
        <div class="text-h3"> Nhuzik</div>
        <div class="text-h5">Painel de Administração </div>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="270" :breakpoint="400">
      <q-scroll-area style="
          height: calc(100% - 135px);
          margin-top: 135px;
          border-right: 1px solid #ddd;
        ">
        <q-list padding>
          <q-list>
            <q-item-label header> Menus de Administração </q-item-label>
          </q-list>
          <q-item active clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Artistas</q-item-label>
              <q-item-label caption>Todos Artistas na Plataforma</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Músicas</q-item-label>
              <q-item-label caption>Trabalhos artísticos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Discografias</q-item-label>
              <q-item-label caption>Colecções dos Artistass</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Bibliografias</q-item-label>
              <q-item-label caption>Histórias de inspiração</q-item-label>
            </q-item-section>
          </q-item>
          <q-list>
            <q-item-label header> Definições da Plataforma </q-item-label>
          </q-list>
          <q-item clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Utilizadores</q-item-label>
              <q-item-label caption>Atribuição de privilégios</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Visualização</q-item-label>
              <q-item-label caption>Temas e Look & Feel</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" :src="cover" style="height: 135px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img :src="profile" />
          </q-avatar>
          <div class="text-weight-bold">João Devson Mucavel</div>
          <div>@devasse</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import profile from '../assets/img/devasse.jpg'
import cover from '../assets/img/cover.jpg'

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      profile,
      cover,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
