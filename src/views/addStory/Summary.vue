<template>
  <div class="summary fullscreen color-bg">
  <button class="back-button" v-on:click="backStep()">Back</button>
      <div class="form summary">
        <textarea id="new-story" autofocus v-validate="'max:10|min:4'"  data-vv-as="field" name="max_field"  class="content input" v-model="content" placeholder="Schreibe deine Geschichte"></textarea>
          

          

        <span class="char" id="remain-char">{{remain_char}}</span>
        
      </div>
      <div class="summary-line">
          <span>Goofy Professor</span>
          <span>😅</span> 
          <span class="city">Osnabrück</span>
        </div>
      <button class="button button-main" v-on:click="addStory()">Publish</button>
  </div>
</template>

<script>

import firebase from 'firebase/app'
import {db} from '@/config/db.js'



export default {
  name: 'Summary',
  components: {

  },
  data() {
    return {
      content: this.$store.getters.getContent,
      emotion: this.$store.getters.getEmotion,
      location: this.$store.getters.getLocation,
      topic: this.$store.getters.getTopic,
      max_char: 10,
      remain_char: 10,
      status: false,
      locationName: this.$store.getters.getLocationName
    };
  },
  computed: {

  },
  methods: {
    addStory() {
      if(this.$cookies.get('id')){
        var created = new Date();
        var topic = this.topic;
        var content = this.content;
        var emotion = this.emotion;
        var location = this.location;
        console.log(location);
        db.collection("object/"+this.$cookies.get('id')+"/story").add({
          topic,
          content,
          emotion,
          created: new firebase.firestore.Timestamp.fromDate(new Date()),
          location: new firebase.firestore.GeoPoint(location.lat, location.lng)
        })
        .then(function(docRef) {
            console.log(docRef.id);
            $cookies.set('ownStoryID', docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    } else {
      alert('Leider hast du keine Berechtigung eine Geschichte zu schreiben!')
    }
    var nowDate = new Date();
    $cookies.set('ownStoryTime', nowDate);
    $cookies.set('step', 2);
    this.nextStep('giveaway')

  },

    nextStep(n){
      this.$router.replace({path: n});
      console.log("Store wurde aktualisiert auf "+ this.$store.getters.getContent);
    },
     backStep(){
       this.$router.back();
     }
     
   }
}
</script>
