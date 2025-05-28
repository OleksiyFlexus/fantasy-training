import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/MainPageLayout.vue"),
    children: [
      {
        path: "/match",
        name: "match",
        component: () => import("@/views/MatchPage.vue"),
        props: true,
      },
      { path: "/players", component: () => import("@/views/PlayersPage.vue") },
      { path: "/teams", component: () => import("@/views/TeamsPage.vue") },
      { path: "/statistic", component: () => import("@/views/StatisticPage.vue") },
    ],
  },
  { path: "/all-matches", component: () => import("@/views/AllMatchesPage.vue") },

  { path: "/:pathMatch(.*)*", component: () => import("@/views/NotFound404.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
