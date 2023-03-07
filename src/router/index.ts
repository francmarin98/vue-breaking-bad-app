import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "@/shared/pages/HomePage.vue";
import AboutPage from "@/shared/pages/AboutPage.vue";
import characterRoute from "@/modules/characters/router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage 
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    // {
    //   path: '/characters',
    //   name: 'characters',
    //   component: () => import('@/modules/characters/layout/CharacterLayout.vue')
    // },
    {
      path: '/:pathMatch(.*)', redirect: 'home'
      // path: '/:pathMatch(.*)', redirect: () => ({name: 'home'})
    }
  ]
})

// path: '/characters'
router.addRoute(characterRoute)

export default router
