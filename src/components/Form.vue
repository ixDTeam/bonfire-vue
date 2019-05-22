<template>
<div class="new">
<div class="pop-up" v-if="errors.has('max_field')" show variant="danger">Du hast nicht so viele Zeichen.</div>
  <div class="form" >
    <textarea id="new-story" autofocus v-validate="'max:100|min:4'"  data-vv-as="field" name="max_field"  class="content input" v-model="content" @keyup='charCounter()' placeholder="Schreibe deine Geschichte"></textarea>
    <span class="char" id="remain-char">{{remain_char}}</span>
  </div>



<div class="form grid-9x9">
  <label>
    <input class="radio-hide" v-model="emotion" name="emotion" value=" 😂" type="radio">
    <div class="emoji">
      <span> 😂</span>
    </div>
  </label>
  <label>
    <input class="radio-hide" v-model="emotion" name="emotion" value=" 😂" type="radio">
    <div class="emoji">
      <span> 😂</span>
    </div>
  </label>
  <label>
    <input class="radio-hide" v-model="emotion" name="emotion" value=" 😂" type="radio">
    <div class="emoji">
      <span> 😂</span>
    </div>
  </label>
  <label>
    <input class="radio-hide" v-model="emotion" name="emotion" value=" 😂" type="radio">
    <div class="emoji">
      <span> 😂</span>
    </div>
  </label>
  <label>
    <input class="radio-hide" v-model="emotion" name="emotion" value=" 😂" type="radio">
    <div class="emoji">
      <span> 😂</span>
    </div>
  </label>
  <label>
    <input class="radio-hide" v-model="emotion" name="emotion" value=" 😂" type="radio">
    <div class="emoji">
      <span> 😂</span>
    </div>
  </label>
  <label>
    <input class="radio-hide" v-model="emotion" name="emotion" value=" 😂" type="radio">
    <div class="emoji">
      <span> 😂</span>
    </div>
  </label>
  <label>
    <input class="radio-hide" v-model="emotion" name="emotion" value=" 😂" type="radio">
    <div class="emoji">
      <span> 😂</span>
    </div>
  </label>
  <label>
    <input class="radio-hide" v-model="emotion" name="emotion" value=" 😂" type="radio">
    <div class="emoji">
      <span> 😂</span>
    </div>
  </label>
</div>





<div class="form submit-story">
  <button v-on:click="addStory(content,emotion)" :disabled="checkButton()"  >Geschichte abschicken</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      content: '',
      emotion: null,
      max_char: 100,
      remain_char: 100,
      status: false,
    };
  },
  methods: {
    addStory(content,emotion) {
      this.$getLocation()
        .then(coordinates => {
          console.log(coordinates);
          var location = {
            lat: coordinates.lat,
            lng: coordinates.lng
          };
          console.log(location);
          this.$emit('add-Story', content, emotion, location);
          this.content = null;
          this.emotion = null;
        });

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
