<template>
  <gmap-map ref="mymap"
     :center="{lat: 50, lng: 20}"
     :zoom="8"
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



[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0a2465"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text",
    "stylers": [
      {
        "weight": 6.5
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#092465"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#3653a1"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3653a1"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]
