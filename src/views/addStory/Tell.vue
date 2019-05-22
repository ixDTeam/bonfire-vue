<template>
  <div class="tell">
    <!-- <Form @add-Story="addStory"></Form> -->
    <div class="pop-up" v-if="errors.has('max_field')" show variant="danger">Du hast nicht so viele Zeichen.</div>
      <div class="form" >
        <textarea id="new-story" autofocus v-validate="'max:10|min:4'"  data-vv-as="field" name="max_field"  class="content input" v-model="content" @keyup='charCounter()' placeholder="Schreibe deine Geschichte"></textarea>
        <div class="form submit-story">
          <button v-on:click="backStep()">Back</button>
          </div>
          <button v-on:click="nextStep('feel')" :disabled="checkButton()"  >Next</button>
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
  name: 'Tell',
  components: {
    Form
  },
  data() {
    return {
      content: this.$store.getters.getContent,
      emotion: null,
      max_char: 10,
      remain_char: 10,
      status: false,
    };
  },
  methods: {
    charCounter(){
      var calc_char = this.max_char-this.content.length;
      if(calc_char > 0){
        this.remain_char = this.max_char-this.content.length
        }
      else{
        this.remain_char = 0;
      }
    },
    checkButton(){
      if(this.errors.items.length == 0 && !this.isFormDirty){
        return false;
      }
      else if(this.errors.items.length != 0){
        return true;
      }
    },
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
