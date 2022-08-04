import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Page1 from '@/views/Page1.vue'
import Page2 from '@/views/Page2.vue'
import Page3 from '@/views/Page3.vue'
import Page4 from '@/views/Page4.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'home_title'
      }
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1,
      meta: {
        title: 'page1_title'
      }
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2,
      meta: {
        title: 'page2_title'
      }
    },
    {
      path: '/page2/page3',
      name: 'page3',
      component: Page3,
      meta: {
        title: 'page3_title'
      }
    },
    {
      path: '/page2/page4',
      name: 'page4',
      component: Page4,
      meta: {
        title: 'page4_title'
      }
    }
  ]
})

export default router
