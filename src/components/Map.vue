<template>
  <gmap-map ref="mymap"
     :center="{lat: 50, lng: 20}"
     :zoom="5"
     :options="mapStyle"
     >

  <GmapMarker
    :position="{lat: this.lat, lng: this.lng}"
    :clickable="true"
    :draggable="false"
  />

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
      mapStyle: {
        zoomControl: true,
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
     // panMap() {
     //   this.$refs.mymap.$mapObject.panTo({lat: this.lat, lng: this.lng})
     // }
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
