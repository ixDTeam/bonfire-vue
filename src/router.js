import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/q/:id',
      name: 'qr',
      component: () =>
        import ('./views/QR.vue'),
      props: true
    },
    {
      path: '/p/:id',
      name: 'accessPoster',
      component: () =>
        import ('./views/poster/accessPoster.vue'),
      props: true
    },
    {
      path: '/p/:id/add',
      name: 'addPoster',
      component: () =>
        import ('./views/poster/addPoster.vue'),
      props: true
    },
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '*',
      name: '404',
      component: Welcome
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: () =>
        import ('./views/Tutorial.vue'),
    },
    {
      path: '/journey',
      name: 'journey',
      component: () =>
        import ('./views/Journey.vue'),
    },
    {
      path: '/giveaway',
      name: 'giveaway',
      component: () =>
        import ('./views/Giveaway.vue'),
    },
    {
      path: '/new',
      name: 'new',
      component: () =>
        import ('./views/addStory/New.vue')
    },
    {
      path: '/tell',
      name: 'tell',
      component: () =>
        import ('./views/addStory/Tell.vue')
    },
    {
      path: '/feel',
      name: 'feel',
      component: () =>
        import ('./views/addStory/Feel.vue')
    },
    {
      path: '/where',
      name: 'where',
      component: () =>
        import ('./views/addStory/Where.vue')
    },
    {
      path: '/summary',
      name: 'summary',
      component: () =>
        import ('./views/addStory/Summary.vue')
    },
    {
      path: '/start/:id',
      name: 'start',
      component: () =>
        import ('./views/Start.vue'),
      props: true
    },
    {
      path: '/start',
      name: 'start',
      component: () =>
        import ('./views/Start.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import ( /* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        permissions: [{
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


let isFirstTransition = true;

router.beforeEach((to, from, next) => {
  var devMode = $cookies.get('devMode');
  var step = $cookies.get('step');
  var nextView

  if (step == 0 || step == undefined) {
     nextView = 'welcome'
     console.log("Welcome!")
   } else if (step == 1) {
     nextView = 'new'
     console.log("New!")
   } else if (step == 2){
     nextView = 'giveaway'
     console.log("Giveaway!")
   } else if (step == 3){
     nextView = 'journey'
     console.log("Journey!")
   }

  const shouldRedirect = Boolean(
    to.name === "welcome" &&
    step != undefined &&
    nextView
    && isFirstTransition
  );

  if (shouldRedirect) next({ name: nextView });
  else next();

  isFirstTransition = false;
});



export default router

// router.beforeEach((to, from, next) => {
//   console.log(to.path)
//   console.log(router.currentRoute.path);
//   var step;
//   var devMode;
//   devMode = $cookies.get('devMode');
//   step = $cookies.get('step');
//   var nextView;
//
//
//     if (to.name != "accessPoster" && to.name != "addPoster") {
//       console.log("Kein Poster!")
//       if (devMode == 0 || devMode == undefined) {
//         if (to.name != from.name) {
//           if (step == 0 || step == undefined) {
//             nextView = 'welcome'
//             console.log("Welcome!")
//           } else if (step == 1) {
//             nextView = 'new'
//             console.log("New!")
//           } else if (step == 2){
//             nextView = 'giveaway'
//             console.log("Giveaway!")
//           } else if (step == 3){
//             nextView = 'journey'
//             console.log("Journey!")
//           }
//         }
//         console.log(nextView)
//         if (to.path != router.currentRoute.path) {
//           next({ name: nextView })
//       } else {
//         // next()
//       }
//     };
//   }

  // if (to.name != "accessPoster" && to.name != "addPoster") {
  //   console.log("Kein Poster!")
  //   if (devMode == 0 || devMode == undefined) {
  //     // if (to.name != from.name) {
  //     //   if (step == 0 || step == undefined) {
  //     //     next({
  //     //       path: 'welcome'
  //     //     })
  //     //   } else if (step == 1) {
  //     //     next({
  //     //       path: 'new'
  //     //     })
  //     //   } //else if (step == 2){
  //     //   //   next({ path: 'giveaway' })
  //     //   // } else if (step == 3){
  //     //   //   next({ path: 'journey' })
  //     //   // }
  //     // }
  //   } else {
  //     next();
  //   }
  // };
// })
