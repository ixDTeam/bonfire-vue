<template>
  <div class="where fullscreen color-bg pad-t flex column">
    <div class="back-button" v-on:click="backStep()">Back</div>
    <div v-if="allowLocation" class="pad-l pad-r">
      <h1>We need your location...</h1>
      <p>...so you can experience the journey of your gift. <b>Don't worry. We won't store your exact position.</b> Just your city.</p>
    </div>


    <div v-if="!allowLocation" class="pad-l pad-r">
      <p><b>That's totally fine.</b> You can tell us your city just by typing it here:</p>
    </div>

    <textarea v-if="!allowLocation" v-model="city" placeholder="Enter Your City..." class="input-location"></textarea><br>

    <button :disabled="checkButton()" class="button button-main button-where" v-on:click="askLocation()"><span v-if="buttonDisabled">Waiting...</span><span v-else>Next</span></button>
    <div  v-if="allowLocation && !buttonDisabled"  class="button sec fixed" v-on:click="noLocation()">No, I don't want that.</div>
  </div>
</template>

<script>

import firebase from 'firebase/app'
import {db} from '@/config/db.js'
import Map from '@/components/Map.vue'


export default {
  name: 'Where',
  components: {
    Map
  },
  data() {
    return {
      content: '',
      allowLocation: true,
      emotion: this.$store.getters.getEmotion,
      city: '',
      max_char: 10,
      remain_char: 10,
      status: false,
      buttonDisabled: false
    };
  },
  computed:{
    disableButton: function (){
      if(!this.allowLocation && this.city == ''){
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    checkContent(){
    },
   checkButton(){
     if(this.allowLocation){
       return false;
     } else {
       if(this.city.length > 2){
         return false;
       }
       else {
         return true;
       }
     }

    },
     nextStep(n){
       this.$router.push({path: n});
       this.$store.commit('setEmotion', this.emotion);
       console.log("Store wurde aktualisiert auf "+ this.$store.getters.getEmotion);
     },
     backStep(){
       this.$router.back();
     },
     noLocation(){
       this.allowLocation = false;
     },
     askLocation() {
       this.buttonDisabled = true;
       var self = this
       if (this.allowLocation){
         this.$getLocation()
           .then(coordinates => {
             console.log(coordinates);
             var location = {
               lat: coordinates.lat,
               lng: coordinates.lng
             };
             console.log(location);
             this.$store.commit('setLocation', location);
             console.log("Store wurde aktualisiert auf "+ this.$store.getters.getLocation);

             this.$geocoder.setDefaultMode('lat-lng');

             this.$geocoder.send(location, response => {

               if(response.results == 0) {
                 alert("Leider haben wir deine Stadt nicht gefunden. Versuche es erneut.");
               } else {
                 console.log(response)
                 var location = response.results[0].address_components[3].long_name+", "+response.results[0].address_components[5].long_name;
                 console.log(location);
                 this.$store.commit('setLocationName', location);
                 this.buttonDisabled = false;
                 this.$router.push({path: 'summary'});
               }
             })


           }).catch(function(err) {
              self.allowLocation = false;
             alert('Leider hat das nicht funktioniert. Bitte trag deine Stadt manuell ein');
          });
       } else {
         console.log("Kein GPS")
         var addressObj = {
            city: this.city,
        }
        //this.$store.commit('setLocationName', this.city);
        this.$geocoder.setDefaultMode('address');
        this.$geocoder.send(addressObj, response => {
          console.log(response);
          if(response.results == 0) {
            console.log("Mhhhh");
            alert("Leider haben wir deine Stadt nicht gefunden. Versuche es erneut.");
          } else {
            console.log(response.results[0].formatted_address);
            console.log(response.results[0].geometry.location);
            this.$store.commit('setLocationName', response.results[0].formatted_address);
            this.$store.commit('setLocation', response.results[0].geometry.location);
            this.buttonDisabled = false;
            this.$router.push({path: 'summary'});
          }


        })
       }
      }
   }
}
</script>
