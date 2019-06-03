<template>
  <div class="qr">
    <div>
      <h1>Access Denied</h1>
   </div>
  </div>
</template>

<script>


export default {
  name: 'cookieRest',
  components: {
  },
  data() {
        return {
        };
    },
    methods: {

      resetCookie(){

        this.$cookies.remove('access');
        this.$cookies.remove('devMode');
        this.$cookies.remove('id');
        this.$cookies.remove('ownStoryID');
        this.$cookies.remove('ownStoryTime');
        this.$cookies.remove('ownStoryTime');
        this.$cookies.remove('storyIndex');

        alert("Reset aller Cookies");
        this.$router.replace('/');
      }
     },
     mounted: function () {
       this.resetCookie();

     }
}

</script>
