<template>
<Vue100vh>
  <div id="app" :style="cssProps">


    <transition  :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
  </Vue100vh>
</template>


<script>

export default {

  data() {
    const colorID =  Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    return{
      colorID: colorID,
      transitionName: 'fade',
      bgColor: '#FD74BC',
      textColorPrimary: '#0A2465',
      textColorContrast: '#ffffff'
    }
  },
  computed: {
    cssProps() {
      var bgColor;
      var textColorPrimary;
      var textColorContrast;
      if(this.colorID == 1){
        bgColor = '#FD74BC';
        textColorPrimary: '#0A2465';
        textColorContrast: '#ffffff';
      } else if (this.colorID == 2){
        bgColor = '#fee207';
        textColorPrimary: '#0A2465';
        textColorContrast: '#ffffff';
      } else {
        bgColor = '#00ff00';
        textColorPrimary: '#0A2465';
        textColorContrast: '#ffffff';
      }

      return {
        '--bg-color': bgColor,
        '--text-color-primary': textColorPrimary,
        '--text-color-contrast': textColorContrast
      }
    },
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

/* //>>>COLORS
// $bg-color: #FD74BC;

// $text-color-primary: #0A2465;
// $text-color-contrast: #ffff;



$bg-color: #ABFAA9;

$text-color-primary: #E75A7C;
$text-color-contrast: black; */



/* [v-cloak] {
  display: none;
} */
</style>
