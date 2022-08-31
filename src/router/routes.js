const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("src/pages/AllArtists.vue") },
      { path: "/musics", component: () => import("src/pages/AllMusics.vue") },
      {
        path: "/discography",
        component: () => import("src/pages/DiscoGraphies.vue"),
      },
      {
        path: "/biography",
        component: () => import("src/pages/BioGraphies.vue"),
      },
      { path: "/users", component: () => import("src/pages/AdminUsers.vue") },
      {
        path: "/settings",
        component: () => import("src/pages/AppSettings.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
