<template>
  <b-container id="app">
    <div id="nav">
      <router-link to="/">Welcome</router-link> |
      <router-link to="/tutorial">Tutorial</router-link> |
      <router-link to="/journey">Journey</router-link> |
      <router-link to="/giveaway">Giveaway</router-link> |
      <router-link to="/Start">Start</router-link> |
      <router-link to="/new">New</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </b-container>
</template>


<script>

export default {
  computed: {
    isGuest() {
      return this.$user.get().role === "guest";
    }
  },
  methods: {
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
