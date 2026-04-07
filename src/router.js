import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import PageNo1 from '@/views/PageNo1.vue'
import PageNo2 from '@/views/PageNo2.vue'
import PageNo3 from '@/views/PageNo3.vue'
import PageNo4 from '@/views/PageNo4.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'home_title',
      },
    },
    {
      path: '/page1',
      name: 'page1',
      component: PageNo1,
      meta: {
        title: 'page1_title',
      },
    },
    {
      path: '/page2',
      name: 'page2',
      component: PageNo2,
      meta: {
        title: 'page2_title',
      },
    },
    {
      path: '/page2/page3',
      name: 'page3',
      component: PageNo3,
      meta: {
        title: 'page3_title',
      },
    },
    {
      path: '/page2/page4',
      name: 'page4',
      component: PageNo4,
      meta: {
        title: 'page4_title',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFoundPage,
    },
  ],
})

export default router
