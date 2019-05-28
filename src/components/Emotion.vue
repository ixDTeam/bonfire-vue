<template>

  <span class='emoji'>
    <span v-if="emotion == 1">&#x1F60D</span>
    <span v-if="emotion == 2">&#x1F603</span>
    <span v-if="emotion == 3">&#x1F602</span>
    <span v-if="emotion == 4">&#x1F92A</span>
    <span v-if="emotion == 5">&#x1F973</span>
    <span v-if="emotion == 6">&#x1F641</span>
    <span v-if="emotion == 7">&#x1F929</span>
    <span v-if="emotion == 8">&#x1F60E</span>
    <span v-if="emotion == 9">&#x1F913</span>
  </span>
</template>

<script>


export default {
  name: 'Emotion',
  props: {
    emotion: Number,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
