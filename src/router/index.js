import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "MainPage",
      component: () => import("@/views/main-page/MainPage.vue"),
    },
    {
      path: "/secondary",
      name: "SecondaryPage",
      component: () => import("@/views/secondary-page/SecondaryPage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "mainPage" },
    },
  ],
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});
export default router;
