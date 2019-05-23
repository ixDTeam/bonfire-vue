import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    storeID: '',
    access: '',
    sTopic: 0,
    sContent: '',
    sEmotion: 0,
    sLocation: {},
    sLocationName: ''
  },
  actions: {

  },
  mutations: {
    setID(state, localID) {
      state.storeID = localID;
      console.log(state.storeID);
    },
    setAccess(state, access) {
      state.access = access;
      console.log(state.access);
    },
    setTopic(state, sTopic) {
      state.sTopic = sTopic;
      console.log(state.sTopic);
    },
    setContent(state, sContent) {
      state.sContent = sContent;
      console.log(state.sContent);
    },
    setEmotion(state, sEmotion) {
      state.sEmotion = sEmotion;
      console.log(state.sEmotion);
    },
    setLocation(state, sLocation) {
      state.sLocation = sLocation;
      console.log(state.sLocation);
    },
    setLocationName(state, sLocationName) {
      state.sLocationName = sLocationName;
      console.log(state.sLocationName);
    }
  },
  getters: {
    getID: state => {
      return state.storeID;
    },
    getAccess: state => {
      return state.access;
    },
    getTopic: state => {
      return state.sTopic;
    },
    getContent: state => {
      return state.sContent;
    },
    getEmotion: state => {
      return state.sEmotion;
    },
    getLocation: state => {
      return state.sLocation;
    },
    getLocationName: state => {
      return state.sLocationName;
    }
  },
  modules: {}
})

export default store
