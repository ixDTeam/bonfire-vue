<template>
  <div class="feel">
    <!-- <Form @add-Story="addStory"></Form> -->
    <div class="form grid-9x9">
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
        <input class="radio-hide" v-model="emotion" name="emotion" value="5" type="radio">
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
    <button v-on:click="backStep()">Back</button>
    <button v-on:click="nextStep('where')" :disabled="checkButton()">Next</button>
    </div>
  </div>
</template>

<script>

import Form from '@/components/Form.vue'
import firebase from 'firebase/app'
import {db} from '@/config/db.js'



export default {
  name: 'Feel',
  components: {
    Form
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

    },
     nextStep(n){
       this.$router.push({path: n});
       this.$store.commit('setEmotion', this.emotion);
       console.log("Store wurde aktualisiert auf "+ this.$store.getters.getEmotion);
     },
     backStep(){
       this.$router.back();
     }
   }
}
</script>
