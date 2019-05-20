<template>
  <div class="start">
    <div>
      <h1>Access Denied</h1>
   </div>
  </div>
</template>

<script>


export default {
  name: 'Start',
  components: {
  },
  props: ['id'],
  data() {
        return {
            stories: [],
            localID: this.id,
            access: false
        };
    },
    methods: {

      setPathCookie(){
        var cookieID = this.$cookies.get('id');

        if (!cookieID && this.localID){
          console.log("Kein Cookie gefunden!");

          this.$cookies.set('id', this.localID);
          this.$store.commit('setID', this.localID);
          this.access = true;

          console.log(" Cookie gesetzt! Variable wurde geändert auf " +this.localID);
          console.log("Store wurde aktualisiert auf "+ this.$store.getters.getID);

        } else if (cookieID && !this.localID){
          console.log("Cookie gefunden! ID ist " +this.$cookies.get('id'));

          this.localID = cookieID;
          this.access = true;
          this.$store.commit('setID', this.localID);

          console.log("Variable wurde geändert auf " +this.$store.getters.getID);
          console.log("Store wurde aktualisiert auf "+ this.$store.getters.getID)
        }
        if(this.access){
          this.$router.replace('/');
          console.log('Access granted')
        }
      }
     },
     mounted: function () {
       this.setPathCookie();
     }
}
</script>
