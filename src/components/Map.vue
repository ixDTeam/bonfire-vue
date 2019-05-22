<template>
<<<<<<< HEAD
  <gmap-map ref="mymap"
     :center="{lat: 50, lng: 20}"
     :zoom="8"
=======
  <gmap-map
     :center="{lat: this.lat, lng: this.lng}"
     :zoom="5"
>>>>>>> style2
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

   <gmap-polyline v-if="path.length > 0" :path="path" ref="polyline">
      </gmap-polyline>
   </gmap-map>


</template>

<script>


export default {
   name: 'Map',
   props: {
     lat: Number,
     lng: Number,
   },
   data: function() {
     return{
       path: [
        {lat: 50, lng: 20},
        {lat: 51, lng: 23},
      ],
     }
   },
   methods: {
     panMap() {

     }
   },
   watch: {
      	lat: function(newVal, oldVal) { // watch it
        this.$refs.mymap.$mapObject.panTo({lat: this.lat, lng: this.lng})
      }
    }
}
</script>


<style>

a[href^="http://maps.google.com/maps"]{display:none !important}
a[href^="https://maps.google.com/maps"]{display:none !important}

.gmnoprint a, .gmnoprint span, .gm-style-cc {
    display:none;
}
.gmnoprint div {
    background:none !important;
}
</style>
