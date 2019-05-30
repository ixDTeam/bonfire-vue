<template>
<Vue100vh>
  <div id="app">


    <transition  :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
  </Vue100vh>
</template>


<script>

export default {
  data() {
    return{
      transitionName: 'fade'
    }
  },
  computed: {
    isGuest() {
      return this.$user.get().role === "guest";
    },
    routeName(){
      return this.$route.name;
    }
  },
  methods: {

  },
  mounted() {
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

/* [v-cloak] {
  display: none;
} */
</style>
