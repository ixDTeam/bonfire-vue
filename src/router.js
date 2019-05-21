import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        permissions:[
          {
            role: "guest",
            access: false,
            redirect: ""
          },
          {
            role: "registered",
            access: true,
            redirect: "/about"
          }
        ]
      }
    }
  ]
})
