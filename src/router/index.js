import Vue from 'vue'
import Router from 'vue-router'

import Demo from '~/components/Demo'
import About from '~/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Demo
    },
    {
      path: '/about',
      component: About
    }
  ]
})
