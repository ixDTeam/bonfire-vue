import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/start/:id',
      name: 'start',
      component: () => import('./views/Start.vue'),
      props: true
    },
    {
      path: '/start',
      name: 'start',
      component: () => import('./views/Start.vue')
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('./views/New.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
