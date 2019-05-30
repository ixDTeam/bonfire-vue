<template>
  <div>
    <div class="map-zoom-button">
    <div class="zbtn plus"  v-on:click='zoomIn()'>+</div>
    <div class="zbtn minus" v-on:click='zoomOut()'>-</div>
  </div>

  <gmap-map ref="mymap"
     :center="{lat: lat, lng: lng}"
     :zoom="this.lZoom"
     :options="mapStyle"
     >

<gmap-polyline v-bind:path.sync="locations" v-bind:options="{ strokeColor:'#FD74BC'}"></gmap-polyline>


  <gmap-custom-marker v-for="story in stories" :marker="{ lat: story.location._lat, lng: story.location._long }" :offsetY="7">

    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g class="map-marker" transform="translate(-287.000000, -185.000000)" fill="#FD74BC" stroke="#0A2465" stroke-width="2">
                <circle id="Oval" cx="295" cy="193" r="7"></circle>
            </g>
        </g>
    </svg>
  </gmap-custom-marker>

  <gmap-custom-marker class="marker_active" style="z-index: 1000"  :marker="{ lat: panLat, lng: panLng }" :offsetY="7">

    <svg width="32px" height="32px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g class="map-marker" transform="translate(-287.000000, -185.000000)" fill="#000" stroke="#0A2465" stroke-width="2">
                <circle id="Oval" cx="295" cy="193" r="7"></circle>
            </g>
        </g>
    </svg>
  </gmap-custom-marker>



   </gmap-map>

</div>
</template>

<script>

import {gmapApi} from 'vue2-google-maps'
import GmapCustomMarker from 'vue2-gmap-custom-marker';


export default {
   name: 'Map',
   props: {
     lat: Number,
     lng: Number,
     stories: Array,
     locations: Array,
     panLat: Number,
     panLng: Number
   },
   components: {
       'gmap-custom-marker': GmapCustomMarker
   },

   computed: {
   google: gmapApi,

 },
   data: function() {

     return{
       lZoom: 8,
       maxZoom: 11,
       minZoom: 2,
       path: [
        {lat: 50, lng: 20},
        {lat: 51, lng: 23},
      ],
      customIcon: {
        path: 'cx=100 cy=50 rx=100 ry=50',
        fillColor: 'white',
        fillOpacity: 1,
        scale: 0.1,
        strokeColor: 'black',
        strokeWeight: 3
      },
      customIconBig: {
        path: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
        fillColor: 'red',
        fillOpacity: 1,
        scale: 0.2,
        strokeColor: 'black',
        strokeWeight: 3
      },
      marker: {
                lat: 52.60229509638775,
                lng: 0.0247059387528408
            },
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
       else {
          console.log('Limit erreicht');
       }
     },
     zoomOut(){
       if(this.lZoom > this.minZoom){
         this.lZoom--;
         console.log('Zoom Out', this.lZoom);
       }
       else {
        console.log('Limit erreicht');
       }

     }
   },
   watch: {
      	panLat: { // watch it
          immediate: true,
          handler() {
            this.$refs.mymap.$mapPromise.then((map) => {
              map.panTo({lat: this.panLat, lng: this.panLng});
          })
        }
      }
    }
  }
</script>


<style>
.marker_active{
  z-index: 200!important;
}


</style>
