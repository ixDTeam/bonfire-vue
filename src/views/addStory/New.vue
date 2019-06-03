<template>
  <div class="new color-bg fullscreen pad-t">
    <!-- <Form @add-Story="addStory"></Form> -->
    <div class="back-button" v-on:click="backStep()">Back</div>
    <div class="topic">
      <p class="text-block">Tell a story about
        <span class="link" v-on:click="nextStep('tell', 'Professor')">your professor,</span> <br> the
        <span class="link" v-on:click="nextStep('tell', 'Food in the cafeteria')" > food in the cafeteria</span> <br>
        or your
        <span class="link" v-on:click="nextStep('tell', 'Latest party')" >latest party</span> <br>
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

<style>



</style>
