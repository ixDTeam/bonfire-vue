<template>
  <b-container class="story-form">
    <span>{{remain_char}}</span>
    <textarea v-validate="'max:10|min:4'"  data-vv-as="field" name="max_field"  class="content input" v-model="content" @keyup='charCounter()' placeholder="Schreibe deine Geschichte" />
    <b-alert v-if="errors.has('max_field')" show variant="danger">Achtung Achtung</b-alert>

    <input v-validate="'email'" name="email"  class="input" v-model="emotion" placeholder="Emotion" />
    <b-alert v-if="errors.has('email')" show variant="danger">Muss Email sein</b-alert>


    <b-button v-on:click="addStory(content,emotion)" :disabled="errors.items.length>=0" >Add</b-button>
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
      remain_char: 10
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
