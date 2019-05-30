<template>
  <div class="welcome fullscreen flex column color-primary bg-animation">
    <div class="pad-t welcome-intro">
      <div class="welcome-headline">
        <h2>Share your thoughts <br> like</h2>
        <div class="number">
          <span id="number-user">322</span>
          <span class="number-description">Students</span>
        </div>
      </div>

      <img class="img-blur" id="img1" src="@/assets/others/story.png"></img>

     
      
    </div>
    <button class="button button-main" v-on:click="startTutorial">Los gehts!</button>
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
          this.$router.push({path: 'tutorial'})
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
