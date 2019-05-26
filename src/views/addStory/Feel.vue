<template>
  <div class="feel fullscreen color-bg pad-t">
  <h1>Wähle deine Emotion aus</h1>
    <!-- <Form @add-Story="addStory"></Form> -->
    <div class="grid-9x9">
      <label>
        <input class="radio-hide" v-model="emotion" name="emotion" value="1" type="radio">
        <div class="emoji">
          <span>😂</span>
        </div>
      </label>
      <label>
        <input class="radio-hide" v-model="emotion" name="emotion" value="2" type="radio">
        <div class="emoji">
          <span>😂</span>
        </div>
      </label>
      <label>
        <input class="radio-hide" v-model="emotion" name="emotion" value="3" type="radio">
        <div class="emoji">
          <span>😂</span>
        </div>
      </label>
      <label>
        <input class="radio-hide" v-model="emotion" name="emotion" value="4" type="radio">
        <div class="emoji">
          <span>😂</span>
        </div>
      </label>
      <label>
        <input class="radio-hide" checked v-model="emotion" name="emotion" value="5" type="radio">
        <div class="emoji">
          <span>😂</span>
        </div>
      </label>
      <label>
        <input class="radio-hide" v-model="emotion" name="emotion" value="6" type="radio">
        <div class="emoji">
          <span>😂</span>
        </div>
      </label>
      <label>
        <input class="radio-hide" v-model="emotion" name="emotion" value="7" type="radio">
        <div class="emoji">
          <span>😂</span>
        </div>
      </label>
      <label>
        <input class="radio-hide" v-model="emotion" name="emotion" value="8" type="radio">
        <div class="emoji">
          <span>😂</span>
        </div>
      </label>
      <label>
        <input class="radio-hide" v-model="emotion" name="emotion" value="9" type="radio">
        <div class="emoji">
          <span>😂</span>
        </div>
      </label>
    </div>
    <div class="back-button" v-on:click="backStep()">Back</div>
    <div class="button button-main" v-on:click="nextStep('where')" :disabled="checkButton()">Next</div>
    </div>
</template>

<script>

import firebase from 'firebase/app'
import {db} from '@/config/db.js'

export default {
  name: 'Feel',
  components: {
  },
  data() {
    return {
      content: '',
      emotion: this.$store.getters.getEmotion,
      max_char: 10,
      remain_char: 10,
      status: false,
    };
  },
  methods: {
    checkContent(){
    },
    checkButton(){
      if(this.emotion){
        return false;
      }
      else {
        return true;
      }
    },
     nextStep(n){
       this.$router.push({path: n});
       let emotion = parseInt(this.emotion, 10);
       this.$store.commit('setEmotion', emotion);
       console.log("Store wurde aktualisiert auf "+ this.$store.getters.getEmotion);
     },
     backStep(){
       this.$router.back();
     }
   }
}
</script>
