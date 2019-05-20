import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
 state: {
   storeID: '',
   access: ''
 },
 actions: {

 },
 mutations: {
   setID (state, localID) {
     state.storeID = localID;
     console.log(state.storeID);
   },
   setAccess(state, access){
     state.access = access;
     console.log(state.access);
   }
 },
 getters: {
  getID: state => {
    return state.storeID;
  },
  getAccess: state => {
    return state.access;
  }
 },
 modules: {}
})

export default store
