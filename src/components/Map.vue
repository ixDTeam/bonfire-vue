<template>
  <gmap-map
     :center="{lat: this.lat, lng: this.lng}"
     :zoom="5"
     style="width:100%;  height: 400px;"
   >
   </gmap-map>


</template>

<script>
// import gmapsInit from '../config/map';


export default {
   name: 'Map',
   props: {
     lat: Number,
     lng: Number,
   },
   data: function() {
     return{

     }
   }
}
</script>
