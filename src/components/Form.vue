<template>
  <div class="story-form">
    <textarea class="content input" v-model="content" placeholder="Schreibe deine Geschichte" />
    <input class="input" v-model="emotion" placeholder="Emotion" />
    <span>Wähle eine Emotion:</span>
    <button></button>
    <b-button v-on:click="addStory(content,emotion)" >Add</b-button>
</div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      content: null,
      emotion: null
    };
  },
  methods: {
    addStory(content,emotion) {
        this.$emit('add-Story', content, emotion);
        this.content = null;
        this.emotion = null;
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
