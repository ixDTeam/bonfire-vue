<template>
  <b-container class="story-form">
    <span>{{remain_char}}</span>
    <textarea v-validate="'max:10|min:4'"  data-vv-as="field" name="max_field"  class="content input" v-model="content" @keyup='charCounter()' placeholder="Schreibe deine Geschichte" />
    <b-alert v-if="errors.has('max_field')" show variant="danger">Achtung Achtung</b-alert>

    <input  class="input" v-model="emotion" placeholder="Emotion" />
    
    <b-row>
      <b-col cols="4">
        <label>
          <input class="radio-hide" v-model="emotion" name="emotion" value="&#128512" type="radio">
          <div class="emoji">
            <span>&#128512</span>
          </div>
        </label>
      </b-col>
      <b-col cols="4">
        <label>
          <input class="radio-hide" v-model="emotion" name="emotion" value="&#128517" type="radio">
          <div class="emoji">
            <span>&#128517</span>
          </div>
        </label>
      </b-col>
      <b-col cols="4">
        <label>
          <input class="radio-hide" v-model="emotion" name="emotion" value="&#128522" type="radio">
          <div class="emoji">
            <span>&#128522</span>
          </div>
        </label>
      </b-col>
      <b-col cols="4">
        <label>
          <input class="radio-hide" v-model="emotion" name="emotion" value="&#128525" type="radio">
          <div class="emoji">
            <span>&#128525</span>
          </div>
        </label>
      </b-col>
      <b-col cols="4">
        <label>
          <input class="radio-hide" v-model="emotion" name="emotion" value="&#128531" type="radio">
          <div class="emoji">
            <span>&#128531</span>
          </div>
        </label>
      </b-col>
      <b-col cols="4">
        <label>
          <input class="radio-hide" v-model="emotion" name="emotion" value="&#128532" type="radio">
          <div class="emoji">
            <span>&#128532</span>
          </div>
        </label>
      </b-col>

     

     

    </b-row>
    
    


    <b-button v-on:click="addStory(content,emotion)" :disabled="checkButton()"  >Add</b-button>
</b-container>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      content: '',
      emotion: null,
      max_char: 10,
      remain_char: 10,
      status: false,
    };
  },
  methods: {
    addStory(content,emotion) {
        this.$emit('add-Story', content, emotion);
        this.content = null;
        this.emotion = null;
        },
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
      
    }
  },
  computed: {
    isFormDirty() {
      return Object.keys(this.fields).some(key => this.fields[key].dirty);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
