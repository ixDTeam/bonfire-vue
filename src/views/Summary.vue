<template>
  <div class="summary">
      <div class="form" >
        <textarea id="new-story" autofocus v-validate="'max:10|min:4'"  data-vv-as="field" name="max_field"  class="content input" v-model="content" @keyup='charCounter()' placeholder="Schreibe deine Geschichte"></textarea>
        <div class="form submit-story">
          <button v-on:click="backStep()">Back</button>
          </div>
          <button v-on:click="nextStep('feel')">Publish</button>
        </div>
        <span class="char" id="remain-char">{{remain_char}}</span>
      </div>
  </div>
</template>

<script>

import Form from '@/components/Form.vue'
import firebase from 'firebase/app'
import {db} from '@/config/db.js'



export default {
  name: 'Summary',
  components: {
    Form
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
  methods: {
    nextStep(n){
      this.$router.push({path: n});
      this.$store.commit('setContent', this.content);
      console.log("Store wurde aktualisiert auf "+ this.$store.getters.getContent);
    },
     backStep(){
       this.$router.back();
     }
   }
}
</script>
