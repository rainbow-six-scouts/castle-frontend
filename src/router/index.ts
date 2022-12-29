import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
  ],
});

router.beforeResolve((route) => {
  document.title = route.name
    ? `Rainbow Six Scouts | ${route.name.toString()}`
    : "Rainbow Six Scouts";
});

export default router;
