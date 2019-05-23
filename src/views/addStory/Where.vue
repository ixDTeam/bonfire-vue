<template>
  <div class="where fullscreen color-bg pad-t">
    <h1>We need your location</h1>
    <p>Erklräung hier warum wir das Brauchen. Wir speichern nicht etc.</p>
    <button class="back-button" v-on:click="backStep()">Back</button><br>

        <textarea v-if="!allowLocation" v-model="city" placeholder="Your City"></textarea><br>
        <button :disabled="disableButton " class="button" v-on:click="askLocation()">Next</button><br>
        <button  v-if="allowLocation" class="button sec" v-on:click="noLocation()">Ne Lass mal</button>

    </div>
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
             this.$router.push({path: 'summary'});

           }).catch(function(err) {
             alert('Leider hat das nicht funktioniert. Probier es doch bitte nochmal.');
          });
       } else {
         console.log("Kein GPS")
         var addressObj = {
            city: this.city,
        }
        this.$geocoder.send(addressObj, response => {
          console.log(response.results[0].geometry.formatted_adress);
          console.log(response.results[0].geometry.location);
          this.$store.commit('setLocation', response.results[0].geometry.location);
          this.$router.push({path: 'summary'});
         });
       }
      }
   }
}
</script>
