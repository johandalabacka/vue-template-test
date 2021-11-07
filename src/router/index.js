import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Page1 from '@/views/Page1'
import Page2 from '@/views/Page2'
import Page3 from '@/views/Page3'
import Page4 from '@/views/Page4'

Vue.use(Router)

export default new Router({
  // class used for active routes in LU template
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
