<template>
  <div class='poster' :data-id=id>
    <div class="top">
      <span class='poster-emoji'>{{emotion}}</span>
    </div>
    <div class="bottom">
      <p class='poster-content'>{{content}}</p>
      <span class='poster-headline'>Goofy Professor</span>
      <span class='poster-location'>Osnabrück</span>
    </div>
    
  </div>

</template>

<script>




export default {
  name: 'Poster',
  props: {
    content: String,
    emotion: Number,
    id: String,
    city: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
