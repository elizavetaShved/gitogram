import { createRouter, createWebHistory } from "vue-router";
import { routerParams, routerQuery } from "@/enums/router-params";
import { errors } from "@/enums/errors";
import { checkAuthorize } from "@/api/rest/authorizeGithub";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/repositories-list",
    //   name: "repositories-list",
    //   component: () => import("@/pages/repositories-list/repositories-list.vue"),
    // },
    {
      path: `/${routerParams.repositoriesList}`,
      name: routerParams.repositoriesList,
      component: () => import("@/pages/secondary-page/secondary-page.vue"),
    },
    {
      path: `/${routerParams.stories}/:${routerQuery.id}`,
      name: routerParams.stories,
      component: () => import("@/pages/stories-page/stories-page.vue"),
    },
    {
      path: `/${routerParams.auth}`,
      name: routerParams.auth,
      component: () => import("@/pages/auth-page/auth-page.vue"),
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

router.beforeEach((to, from, next) => {
  checkAuthorize()
    .then((data) => {
      const defaultPageName = routerParams.repositoriesList;

      if (to.name) {
        const authPage = to.name === routerParams.auth;
        const userAuthorized = data.response?.status !== errors.unauthorized;

        // если автроризованный юзер на Авторизации - редирект на главную
        if (authPage && userAuthorized) {
          next({ name: defaultPageName });
          return;
        }

        // если неавторизованный пользователь в приложении - редирект на стр.Авториз
        if (!authPage && !userAuthorized) {
          throw new Error();
        }
        next();
      } else {
        next({ name: defaultPageName });
      }
    })
    .catch(() => {
      // TODO обрабоать ошибку "Не авторизован"
      console.log("Не авторизован");
      next({ name: routerParams.auth });
    });
});

export default router;
