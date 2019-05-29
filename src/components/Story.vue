<template>
  <div class='story' :data-id=id>
    <span class='date'></span>
    <p class='content'>{{content}}</p>
    <span class='headline'>Goofy Professor</span>
    <span class='created'>{{completeDate}}</span>
    <span class='location'>Osnabrück</span>
    <span class="emoji"><Emotion :emotion="emotion"></Emotion></span>
    <div class="delete" @click="$emit('delete-members', id )">X</div>
  </div>
</template>

<script>


import Emotion from '@/components/Emotion.vue'
import firebase from 'firebase/app'

export default {
  name: 'Story',
  components: {
    Emotion
  },
  props: {
    content: String,
    emotion: Number,
    id: String,
    topic: String,
    city: String,
    created: Object
  },
  computed: {
    completeDate: function () {
      var postedTime = new firebase.firestore.Timestamp(this.created.seconds, this.created.nanoseconds);
      var postedTimeDate = postedTime.toDate();
      var completeDate  = postedTimeDate.getDate() + "." + (postedTimeDate.getMonth() + 1) + "." + postedTimeDate.getFullYear();
      // Datum für Anzeige aufbereiten
      return completeDate

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
