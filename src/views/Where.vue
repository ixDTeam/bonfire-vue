<template>
  <div class="where">
    <h1>We need your location</h1>
    <p>Erklräung hier warum wir das Brauchen. Wir speichern nicht etc.</p>
    <button v-on:click="backStep()">Back</button><br>
    <button v-on:click="nextStep('where')" :disabled="checkButton()">Ok Next</button><br>
    <button v-on:click="nextStep('where')" :disabled="checkButton()">Ne Lass mal</button>
    </div>
  </div>
</template>

<script>

import Form from '@/components/Form.vue'
import firebase from 'firebase/app'
import {db} from '@/config/db.js'



export default {
  name: 'Where',
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
