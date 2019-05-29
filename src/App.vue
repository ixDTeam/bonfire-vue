<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Welcome</router-link> |
      <router-link to="/tutorial">Tutorial</router-link> |
      <router-link to="/journey">Journey</router-link> |
      <router-link to="/giveaway">Giveaway</router-link> |
      <router-link to="/Start">Start</router-link> |
      <router-link to="/new">New</router-link> |
      <router-link to="/tell">Tell</router-link> |
      <router-link to="/feel">Feel</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition  name="fade"
         mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>

export default {
  computed: {
    isGuest() {
      return this.$user.get().role === "guest";
    },
    routeName(){
      return this.$route.name;
    }
  },
  methods: {
    checkState(){
      var step;
      var devMode = 0;

      var cookieID = this.$cookies.get('id');
      this.$store.commit('setID', cookieID);

      devMode = this.$cookies.get('devMode');
      step = this.$cookies.get('step');
      console.log(this.routeName)
      if(this.routeName != "accessPoster" && this.routeName != "addPoster"){
        if (devMode == 0 || !devMode){
          if (step == 0 || step == undefined){
            this.$router.push({path: '/'})
          }
          else if(step == 1){
            this.$router.push({path: 'new'})
          } else if (step == 2){
            this.$router.push({path: 'giveaway'})
          } else if (step == 3){
            this.$router.push({path: 'journey'})
          }
        }
      }
    }
  },
  mounted() {
    this.checkState()
  },


};
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: all 0.3s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateY(5%);
}

#app {
      background-color: #FD74BC;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

[v-cloak] {
  display: none;
}
</style>
