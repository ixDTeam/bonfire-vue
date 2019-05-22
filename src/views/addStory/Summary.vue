<template>
  <div class="summary">
      <div class="form" >
        <textarea id="new-story" autofocus v-validate="'max:10|min:4'"  data-vv-as="field" name="max_field"  class="content input" v-model="content" placeholder="Schreibe deine Geschichte"></textarea>
        <span>{{topic}}</span><br>
        <span>{{emotion}}</span><br>
        <span>{{location}}</span><br>
        <div class="form submit-story">
          <button v-on:click="backStep()">Back</button>
          </div>
          <button v-on:click="addStory()">Publish</button>
        </div>
        <span class="char" id="remain-char">{{remain_char}}</span>
      </div>
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
          created,
          location: new firebase.firestore.GeoPoint(location.lat, location.lng)
        });
        this.$router.replace({path: 'journey'});
    } else {
      alert('Leider hast du keine Berechtigung eine Geschichte zu schreiben!')
    }
  },

    nextStep(n){
      this.$router.push({path: n});
      console.log("Store wurde aktualisiert auf "+ this.$store.getters.getContent);
    },
     backStep(){
       this.$router.back();
     }
   }
}
</script>
