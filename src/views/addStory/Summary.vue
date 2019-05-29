<template>
  <div class="summary fullscreen color-bg flex column v-center pad-t">
    <div class="back-button" v-on:click="backStep()">Back</div>
    <div class="summary-card">
      <textarea id="summary-story" autofocus v-validate="'max:10|min:4'"  data-vv-as="field" name="max_field"  class="content input" v-model="content" placeholder="Schreibe deine Geschichte"></textarea>
      <span class="t-r">{{topic}}</span>
      <span class="t-l">{{locationName}}</span>
      <span class="d-r"><Emotion :emotion="emotion"></Emotion></span>
    </div>
    <div class="emoji-edit hide">
      <div class="grid-9x9">
        <label>
          <input class="radio-hide" v-model="emotion" name="emotion" value="1" type="radio">
          <div class="emoji">
            <span>&#x1F60D</span>
          </div>
        </label>
        <label>
          <input class="radio-hide" v-model="emotion" name="emotion" value="2" type="radio">
          <div class="emoji">
            <span>&#x1F603</span>
          </div>
        </label>
        <label>
          <input class="radio-hide" v-model="emotion" name="emotion" value="3" type="radio">
          <div class="emoji">
            <span>&#x1F602</span>
          </div>
        </label>
        <label>
          <input class="radio-hide" v-model="emotion" name="emotion" value="4" type="radio">
          <div class="emoji">
            <span>&#x1F92A</span>
          </div>
        </label>
        <label>
          <input class="radio-hide" checked v-model="emotion" name="emotion" value="5" type="radio">
          <div class="emoji">
            <span>&#x1F973</span>
          </div>
        </label>
        <label>
          <input class="radio-hide" v-model="emotion" name="emotion" value="6" type="radio">
          <div class="emoji">
            <span>&#x1F641</span>
          </div>
        </label>
        <label>
          <input class="radio-hide" v-model="emotion" name="emotion" value="7" type="radio">
          <div class="emoji">
            <span>&#x1F929</span>
          </div>
        </label>
        <label>
          <input class="radio-hide" v-model="emotion" name="emotion" value="8" type="radio">
          <div class="emoji">
            <span>&#x1F60E</span>
          </div>
        </label>
        <label>
          <input class="radio-hide" v-model="emotion" name="emotion" value="9" type="radio">
          <div class="emoji">
            <span>&#x1F913</span>
          </div>
        </label>
      </div>
    </div>
    <button class="button button-main" v-on:click="addStory()">Publish</button>
  </div>
</template>

<script>

import firebase from 'firebase/app'
import {db} from '@/config/db.js'
import VueRouter from 'vue-router'

import Emotion from '@/components/Emotion.vue'

export default {
  name: 'Summary',
  components: {
    Emotion
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
        let self = this;
        var check = false;
        var created = new Date();
        var topic = this.topic;
        var content = this.content;
        var emotion = this.emotion;
        var location = this.location;
        var locationName = this.locationName;
        console.log(location);
        db.collection("object/"+this.$cookies.get('id')+"/story").add({
          topic,
          content,
          emotion,
          created: new firebase.firestore.Timestamp.fromDate(new Date()),
          location: new firebase.firestore.GeoPoint(location.lat, location.lng),
          locationName
        })
        .then(function(docRef) {
            console.log(docRef.id);
            $cookies.set('ownStoryID', docRef.id);

            var nowDate = new Date();
            $cookies.set('ownStoryTime', nowDate);
            $cookies.set('step', 2);
            self.$router.replace({path: 'giveaway'});
            check = true;
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

        if(check){
          console.log(check);
          this.$router.replace({path: 'giveaway'});
        }

    } else {
      alert('Leider hast du keine Berechtigung eine Geschichte zu schreiben!')
    }

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
