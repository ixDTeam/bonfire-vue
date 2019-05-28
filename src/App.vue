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

    <router-view/>

  </div>
</template>


<script>

export default {
  computed: {
    isGuest() {
      return this.$user.get().role === "guest";
    }
  },
  methods: {
    checkState(){
      var step;
      var devMode = 0;
      devMode = this.$cookies.get('devMode');
      step = this.$cookies.get('step');
      console.log(this.$route.name)
      if(this.$route.name != "accessPoster"){
        if (devMode == 0 || !devMode){
          if (step == 0){
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
    },

    toggleAuth() {
      let user;
      var cookieID = this.$cookies.get('id');
      console.log("Cookie gefunden! ID ist " +this.$cookies.get('id'));
      if (cookieID) {
        user = {
          role: "registered"
        };
      } else {
        user = {
          role: "guest"
        };
      }
      this.$user.set(user);
    }
  },
  created() {
    this.checkState();
  }
};
</script>

<style>

#app {
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
</style>
