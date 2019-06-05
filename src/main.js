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

import Vue100vh from 'vue-div-100vh'





import 'swiper/dist/css/swiper.css'
import './assets/style/style.css'


import './assets/style/crazy.scss'




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
  defaultLanguage: 'en', // e.g. 'en'
  defaultMode: 'adress', // or 'lat-lng'
  googleMapsApiKey: 'AIzaSyBjZceEco779NRdrv0vyA3viaJmnpNv3oM'
});
Vue.component(VueCountdown.name, VueCountdown);
Vue.component(Vue100vh);


let user;
let getUser;
let cookieID = window.$cookies.get('id');


Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBjZceEco779NRdrv0vyA3viaJmnpNv3oM",
  }
});

Vue.config.productionTip = false;
VueCookies.config('14d');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--xl', `${vh}px`);
console.log('Resize');
