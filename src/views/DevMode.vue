<template>
  <div class="qr">
    <div>
      <h1>Access Denied</h1>
   </div>
  </div>
</template>

<script>


export default {
  name: 'devMode',
  components: {
  },
  props: ['devMode'],
  data() {
        return {
            stories: [],
            devMove: this.devMode,
            access: false
        };
    },
    methods: {

      setPathCookie(){

        if(this.devMove == 1){
          console.log("DevMode an");
          alert("DevMode an");
          this.$cookies.set('devMode', '1');
          this.$router.replace('/');

        } else {
          console.log("DevMode aus");
          alert("DevMode aus");
          this.$cookies.set('devMode', '0');
          this.$router.replace('/');
        }
      }
     },
     mounted: function () {
       this.setPathCookie();

     }
}

</script>
