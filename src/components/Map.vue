<template>
   <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
    >
      
    </gmap-map>
</template>

<script>
import gmapsInit from '../config/map';


export default {
   name: 'Map',
  async mounted() {
    try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);

      geocoder.geocode({ address: 'Osnabrück' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }
        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });
    } catch (error) {
      console.error(error);
    }
  },
  
}
</script>