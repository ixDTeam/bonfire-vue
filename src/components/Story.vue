<template>
  <div class='story' :data-id=id>
    <span class='date'></span>
    <div class="your-story">Your Story</div>
    <p class='content'>{{content}}</p>
    <span class='headline'>{{topic}}</span>
    <span class='created'>{{completeDate}}</span>
    <span class='location'>
      <svg width="14px" height="18px" viewBox="0 0 10 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="wireframe" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="iPhone-8-Copy-3" transform="translate(-41.000000, -407.000000)">
                  <circle id="Oval" fill="#0A2465" cx="46" cy="412" r="1"></circle>
                  <path d="M42.9364463,414.615968 C42.3121488,413.369091 42,412.413768 42,411.75 C42,409.678932 43.790861,408 46,408 C48.209139,408 50,409.678932 50,411.75 C50,412.413768 49.6878513,413.369091 49.0635538,414.615968 C48.7733015,415.195673 48.4886937,415.778187 48.2097705,416.363428 L46.9027185,419.105903 C46.665108,419.604461 46.0683259,419.816 45.5697682,419.57839 C45.362756,419.479729 45.1959427,419.312915 45.0972815,419.105903 L43.79023,416.363429 C43.5113065,415.778188 43.2266985,415.195674 42.9364463,414.615968 Z" id="Path" stroke="#0A2465" stroke-width="1"></path>
              </g>
          </g>
      </svg>
      {{city}}
    </span>
    <span class="emoji"><Emotion :emotion="emotion"></Emotion></span>
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
