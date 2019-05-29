<template>
  <div class="new color-bg fullscreen">
    <!-- <Form @add-Story="addStory"></Form> -->
    <div class="back-button" v-on:click="backStep()">Back</div>
    <div class="topic">
      <p class="text-block">Schreibe etwas über deinen
        <span class="link" v-on:click="nextStep('tell', 1)">Professor</span>, das
        <span class="link" v-on:click="nextStep('tell', 2)" >Essen in der Mensa</span> oder die
        <span class="link" v-on:click="nextStep('tell', 3)" >letzte Klausur</span> <br>
      </p>
    </div>
  </div>
</template>

<script>

import Form from '@/components/Form.vue'
import firebase from 'firebase/app'
import {db} from '@/config/db.js'



export default {
  name: 'New',
  components: {
    Form
  },
  data() {
    return {
      content: '',
      emotion: null,
      max_char: 10,
      remain_char: 10,
      status: false,
      topic: 0,
    };
  },
  methods: {
    nextStep(n, v){
      this.$router.push({path: n});
      this.topic = v;
      this.$store.commit('setTopic', v);
      this.$cookies.set('step', 1);
      console.log("Store wurde aktualisiert auf "+ this.$store.getters.getTopic);
    },
    backStep(){
      this.$router.back();
    },
    checkButton(){

    },
  }
}
</script>
