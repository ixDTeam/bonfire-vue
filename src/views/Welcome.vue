<template>
  <div class="welcome fullscreen bg-animation pad-t">
    <div>
      <h1>Herzlich Willkommen</h1>
      <button class="button button-main" v-on:click="startTutorial">Los gehts!</button><br>
      <button class="button sec" v-on:click="testCookie">Cookie generieren</button>
   </div>
  </div>
</template>

<script>

import * as cookieCheck from '../cookieCheck.js';

export default {
  name: 'welcome',
  components: {
  },
  methods: {
    checkCookie: function(){
      var cookieID = this.$cookies.get('id');
      if (cookieID){
        this.$store.commit('setAccess', true);
        this.$store.commit('setID', cookieID);
        this.$cookies.set('access', true);

        console.log("Cookie gefunden! ID ist " +this.$cookies.get('id'));
        console.log("Access gegeben " +this.$store.getters.getAccess);
        console.log("Store wurde aktualisiert auf "+ this.$store.getters.getID)
        console.log("Step fetgelegt "+ this.$cookies.get('step'))
      }
      },
      startTutorial: function(){
        if(this.$store.getters.getAccess){
          this.$router.push({path: 'tutorial'})
        }
      },
      testCookie: function(){
        this.$cookies.set('id', '001');
      }
    },
    created() {
      this.checkCookie();
    }
}
</script>
