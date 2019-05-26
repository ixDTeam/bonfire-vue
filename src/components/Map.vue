<template>
  <div>
    <div class="map-zoom-button">
    <div class="zbtn plus" v-on:click='zoomIn()'>+</div>
    <div class="zbtn minus" v-on:click='zoomOut()'>-</div>
  </div>

  <gmap-map ref="mymap"
     :center="{lat: 50, lng: 20}"
     :zoom="this.lZoom"
     :options="mapStyle"
     >

 <gmap-polyline v-bind:path.sync="locations" v-bind:options="{ strokeColor:'#008000'}">
        </gmap-polyline>

  <GmapMarker v-for="story in stories" :key="story.id"
    :position="{lat: story.location._lat, lng: story.location._long}"
    :clickable="true"
    :draggable="false"
    :animation="google.maps.Animation.DROP"
  />

   </gmap-map>

</div>
</template>

<script>

import {gmapApi} from 'vue2-google-maps'


export default {
   name: 'Map',
   props: {
     lat: Number,
     lng: Number,
     stories: Array,
     locations: Array
   },

   computed: {
   google: gmapApi,

 },
   data: function() {

     return{
       lZoom: 5,
       maxZoom: 11,
       minZoom: 2,
       path: [
        {lat: 50, lng: 20},
        {lat: 51, lng: 23},
      ],
      mapStyle: {
        zoomControl: false,
        draggable: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: true,
          styles: [
              {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [
                      {
                          'color': '#e9e9e9'
                      },
                      {
                          'lightness': 17
                      }
                  ]
              },
              {
                  featureType: 'landscape',
                  elementType: 'geometry',
                  stylers: [
                      {
                          'color': '#f5f5f5'
                      },
                      {
                          'lightness': 20
                      }
                  ]
              },
              {
                  featureType: 'road.highway',
                  elementType: 'geometry.fill',
                  stylers: [
                      {
                          'color': '#ffffff'
                      },
                      {
                          'lightness': 17
                      }
                  ]
              },
              {
                  featureType: 'road.highway',
                  elementType: 'geometry.stroke',
                  stylers: [
                      {
                          'color': '#ffffff'
                      },
                      {
                          'lightness': 29
                      },
                      {
                          'weight': 0.2
                      }
                  ]
              },
              {
                  featureType: 'road.arterial',
                  elementType: 'geometry',
                  stylers: [
                      {
                          'color': '#ffffff'
                      },
                      {
                          'lightness': 18
                      }
                  ]
              },
              {
                  featureType: 'road.local',
                  elementType: 'geometry',
                  stylers: [
                      {
                          'color': '#ffffff'
                      },
                      {
                          'lightness': 16
                      }
                  ]
              },
              {
                  featureType: 'poi',
                  elementType: 'geometry',
                  stylers: [
                      {
                          'color': '#f5f5f5'
                      },
                      {
                          'lightness': 21
                      }
                  ]
              },
              {
                  featureType: 'poi.park',
                  elementType: 'geometry',
                  stylers: [
                      {
                          'color': '#dedede'
                      },
                      {
                          'lightness': 21
                      }
                  ]
              },
              {
                  elementType: 'labels.text.stroke',
                  stylers: [
                      {
                          'visibility': 'on'
                      },
                      {
                          'color': '#ffffff'
                      },
                      {
                          'lightness': 16
                      }
                  ]
              },
              {
                  elementType: 'labels.text.fill',
                  stylers: [
                      {
                          'saturation': 36
                      },
                      {
                          'color': '#333333'
                      },
                      {
                          'lightness': 40
                      }
                  ]
              },
              {
                  elementType: 'labels.icon',
                  stylers: [
                      {
                          'visibility': 'off'
                      }
                  ]
              },
              {
                  featureType: 'transit',
                  elementType: 'geometry',
                  stylers: [
                      {
                          'color': '#f2f2f2'
                      },
                      {
                          'lightness': 19
                      }
                  ]
              },
              {
                  featureType: 'administrative',
                  elementType: 'geometry.fill',
                  stylers: [
                      {
                          'color': '#fefefe'
                      },
                      {
                          'lightness': 20
                      }
                  ]
              },
              {
                  featureType: 'administrative',
                  elementType: 'geometry.stroke',
                  stylers: [
                      {
                          'color': '#fefefe'
                      },
                      {
                          'lightness': 17
                      },
                      {
                          'weight': 1.2
                      }
                  ]
              }
          ]
     }
   }
 },
   methods: {
     zoomIn(){
       if(this.lZoom < this.maxZoom){
        this.lZoom++;
        console.log('Zoom In', this.lZoom);
       }
       else console.log('Limit erreicht');
     },
     zoomOut(){
       if(this.lZoom > this.minZoom){
         this.lZoom--;
         console.log('Zoom Out', this.lZoom);
       }
       else console.log('Limit erreicht');

     }
   },
   watch: {
      	lat: function(newVal, oldVal) { // watch it
        this.$refs.mymap.$mapPromise.then((map) => {
          map.panTo({lat: this.lat, lng: this.lng});
        })
      }
    }
}
</script>
