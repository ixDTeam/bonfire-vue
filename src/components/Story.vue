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
    id: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .story {
    position: relative;
    margin: 50px 10vw;
    max-width: 300px;
    background-color: white;
    padding: 20px;
    border: 0px;
    border-style: solid;
    border-radius: 10px;
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .story .emoji {
    font-size: 40px;
  }

  .story .date {
    font-size: 14px;
  }

  .story .delete {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
</style>
