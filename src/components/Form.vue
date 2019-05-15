<template>
  <div >
    <input v-model="content" placeholder="Schreibe deine Geschichte" />
    <input v-model="emotion" placeholder="Emotion" />
    <button v-on:click="addStory(content,emotion)" >Add</button>
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
