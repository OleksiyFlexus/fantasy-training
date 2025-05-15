
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // { path: "/:pathMatch(.*)*", component: () => import("@/pages/NotFound404.vue"), },

  { path: "/", component: () => import("@/views/HomePage.vue") },
  { path: "/loading", component: () => import("@/views/LoadingPage.vue") },
  { path: "/main", component: () => import("@/layouts/MainPageLayout.vue"), 
      children: [
        { path: "/match", component: () => import("@/views/MatchPage.vue"), },
        { path: "/players", component: () => import("@/views/PlayersPage.vue"), },
        { path: "/teams", component: () => import("@/views/TeamsPage.vue"), },
        { path: "/statistic", component: () => import("@/views/StatisticPage.vue"), },
      ],
  },
  { path: "/match-history", component: () => import("@/views/MatchesHistoryPage.vue") },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
