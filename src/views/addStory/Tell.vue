<template>
  <div class="tell fullscreen color-bg">
    <!-- <Form @add-Story="addStory"></Form> -->

       <div class="back-button" v-on:click="backStep()">Back</div>
      <div class="form" >
        <textarea id="new-story" autofocus v-validate="'max:10|min:4'"  data-vv-as="field" name="max_field"  class="content input" v-model="content" @keyup='charCounter()' placeholder="Schreibe deine Geschichte"></textarea>




        <span class="char" id="remain-char">{{remain_char}}</span>
        <div class="pop-up" v-if="checkButton()" show variant="danger">Du hast nicht so viele Zeichen.</div>
         <button class="button button-main" v-on:click="nextStep('feel')" :disabled="checkButton()"  >Next</button>
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
      min_char: 4,
      remain_char: 10,
      status: false,
    };
  },
  computed: {
  isFormDirty() {
    return Object.keys(this.fields).some(key => this.fields[key].dirty);
    }
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
      else if(this.errors.items.length != 0 || this.content.length <= this.min_char){
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
