import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/q/:id',
      name: 'qr',
      component: () => import('./views/QR.vue'),
      props: true
    },
    {
      path: '',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: () => import('./views/Tutorial.vue'),
    },
    {
      path: '/journey',
      name: 'journey',
      component: () => import('./views/Journey.vue'),
    },
    {
      path: '/giveaway',
      name: 'giveaway',
      component: () => import('./views/Giveaway.vue'),
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('./views/New.vue')
    },
    {
      path: '/tell',
      name: 'tell',
      component: () => import('./views/Tell.vue')
    },
    {
      path: '/feel',
      name: 'feel',
      component: () => import('./views/Feel.vue')
    },
    {
      path: '/where',
      name: 'where',
      component: () => import('./views/Where.vue')
    },
    {
      path: '/summary',
      name: 'summary',
      component: () => import('./views/Summary.vue')
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
