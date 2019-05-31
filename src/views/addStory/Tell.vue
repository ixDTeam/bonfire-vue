<template>
  <div class="tell fullscreen color-bg flex h-center">
    <!-- <Form @add-Story="addStory"></Form> -->
    <div class="header">
      <div class="back-button" v-on:click="backStep()">Back</div>
      <span class="char" id="remain-char">{{remain_char}}</span>
    </div>

      <div class="form" >
        <textarea ref="textarea" v-bind:style="{ fontSize: fontSize + 'rem' }" id="new-story" autofocus v-validate="'max:240'"  data-vv-as="field" name="max_field"  class="content input" v-model="content" @keyup='charCounter(), fontSizeCalc()' placeholder="Tell your story"></textarea>
        <!-- <button class="button button-main" v-if="checkButton()" :disabled="true">Du hast nicht so viele Zeichen.</button> -->
        <button class="button button-main" id="tell-button" v-on:click="nextStep('feel')" :disabled="checkButton() || tooLong()">
          <span v-if="checkButton()">You need to write something.</span>
          <span v-if="tooLong()">Sorry, that's too much.</span>
          <span v-if="!tooLong() && !checkButton()">Next</span>
        </button>
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
      max_char: 240,
      min_char: 4,
      remain_char: 240,
      status: false,
      fontSize: 50,
    };
  },
  computed: {
  isFormDirty() {
    return Object.keys(this.fields).some(key => this.fields[key].dirty);
    },
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
      if(this.errors.items.length == 0 && !this.isFormDirty &&  this.content.length > this.min_char){
        return false;
      }
      else if(this.content.length <= this.min_char){
        return true;
      }
      },
      tooLong(){
        if(this.errors.items.length != 0){
          return true;
        } else {
          return false;
        }
      },
    nextStep(n){
      this.$router.push({path: n});
      this.$store.commit('setContent', this.content);
      console.log("Store wurde aktualisiert auf "+ this.$store.getters.getContent);
    },
     backStep(){
       this.$router.back();
     },
     fontSizeCalc(){
        this.fontSize = 60;
       if(this.remain_char <= 180){
         this.fontSize = 45;
       }
       if(this.remain_char <= 130){
         this.fontSize = 40;
       }
      if(this.remain_char <= 100){
         this.fontSize = 35;
       }
       if(this.remain_char <= 75){
         this.fontSize = 30;
       }
     }
   }
}



</script>
