<template>
  <div class="new color-bg fullscreen pad-t">
    <!-- <Form @add-Story="addStory"></Form> -->
    <h1> Wähle ein Thema </h1><br>
    <button class="back-button" v-on:click="backStep()" >Back</button>
    <button class="button" v-on:click="nextStep('tell', 1)" >Topic 1</button>
    <button class="button" v-on:click="nextStep('tell', 2)" >Topic 2</button>
    <button class="button" v-on:click="nextStep('tell', 3)" >Topic 3</button>
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
