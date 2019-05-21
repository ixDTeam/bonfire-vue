<template>
  <div class='story' :data-id=id>
    <span class='date'></span>
    <p class='content'>{{content}}</p>
    <span class='emoji'>{{emotion}}</span>
    <div class="delete" @click="$emit('delete-members', id )">X</div>
  </div>
</template>

<script>




export default {
  name: 'Story',
  props: {
    content: String,
    emotion: String,
    id: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
