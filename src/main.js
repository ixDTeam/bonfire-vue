import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'

import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate'
import * as VueGoogleMaps from 'vue2-google-maps';

import { firestorePlugin } from 'vuefire'
import VueCookies from 'vue-cookies'

import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'

import Vuex from 'vuex'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueGeolocation from 'vue-browser-geolocation'


import VueRouterUserRoles from "vue-router-user-roles";
import VueCountdown from '@chenfengyuan/vue-countdown';

import Geocoder from "@pderas/vue2-geocoder";


import 'swiper/dist/css/swiper.css'
import './assets/style/style.css'


import './assets/style/crazy.scss'


const progressOptions = {
  latencyThreshold: 200, // Number of ms before progressbar starts showing, default: 100,
  router: true, // Show progressbar when navigating routes, default: true
  http: false // Show progressbar when doing Vue.http, default: true
};

Vue.use(firestorePlugin);
Vue.use(VeeValidate);
Vue.use(VueCookies);
Vue.use(SequentialEntrance);
Vue.use(Vuex);
Vue.use(VueRouterUserRoles, { router });
Vue.use(VueAwesomeSwiper)
Vue.use(VueGeolocation);
Vue.use(Geocoder, {
  // defaultCountryCode: 'DE', // e.g. 'CA'
  defaultLanguage: 'de', // e.g. 'en'
  defaultMode: 'adress', // or 'lat-lng'
  googleMapsApiKey: 'AIzaSyC0p6rXwRKcXYuBp5IMBBMbrXeAO3a2BuI'
});
Vue.component(VueCountdown.name, VueCountdown);
Vue.use(Notifications);

let user;
let getUser;
let cookieID = window.$cookies.get('id');


Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC0p6rXwRKcXYuBp5IMBBMbrXeAO3a2BuI",
  }
});

Vue.config.productionTip = false;
VueCookies.config('14d');

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
