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
      name: 'Home',
      component: Home
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/page2/page3',
      name: 'Page3',
      component: Page3
    },
    {
      path: '/page2/page4',
      name: 'Page4',
      component: Page4
    }
  ]
})
