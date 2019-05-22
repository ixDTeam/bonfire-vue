<template>
  <gmap-map
     :center="{lat: this.lat, lng: this.lng}"
     :zoom="5"
     :options="{
       zoomControl: false,
       mapTypeControl: false,
       scaleControl: false,
       streetViewControl: false,
       rotateControl: false,
       fullscreenControl: false,
       disableDefaultUi: false
     }"
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
