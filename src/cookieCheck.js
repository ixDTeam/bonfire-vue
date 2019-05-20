import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  name: 'cookieCheck',
  methods: {
    checkCookie(){
      var cookieID = this.$cookies.get('id');

      if (cookieID){
        console.log("Cookie gefunden! ID ist " +this.$cookies.get('id'));
        this.$store.commit('setAccess', true);
        this.$store.commit('setID', this.localID);

        console.log("Access gegeben " +this.$store.getters.getAccess);
        console.log("Store wurde aktualisiert auf "+ this.$store.getters.getID)
      }
    },
    mounted: function () {
      this.checkCookie();
    }
   },
  }
