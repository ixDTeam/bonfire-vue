<template>
  <div class='story' :data-id=id>
    <span class='date'></span>
    <p class='content'>{{content}}</p>
    <span class='headline'>Goofy Professor</span>
    <span class='created'>vor 3 Tagen</span>
    <span class='location'>Osnabrück</span>
    <span class="emoji"><Emotion :emotion="emotion"></Emotion></span>
    <div class="delete" @click="$emit('delete-members', id )">X</div>
  </div>
</template>

<script>


import Emotion from '@/components/Emotion.vue'

export default {
  name: 'Story',
  components: {
    Emotion
  },
  props: {
    content: String,
    emotion: Number,
    id: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
