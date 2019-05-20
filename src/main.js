import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

import VeeValidate from 'vee-validate'
import { firestorePlugin } from 'vuefire'
import VueCookies from 'vue-cookies'

import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'

import Vuex from 'vuex'
import store from './store'
import cookieCheck from './cookieCheck'

import './assets/style.css'


Vue.use(firestorePlugin);
Vue.use(VeeValidate);
Vue.use(VueCookies);
Vue.use(SequentialEntrance);
Vue.use(Vuex);

Vue.config.productionTip = false;
VueCookies.config('14d');

new Vue({
  router,
  store,
  cookieCheck,
  render: h => h(App)
}).$mount('#app')
