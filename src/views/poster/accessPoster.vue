<template>
<div class="fullscreen">
      
    <Poster v-if="poster.occupied" :key="poster.id" :content="poster.content" :emotion="poster.emotion" :topic="poster.topic" :created="poster.created" :city="poster.locationName" :time="time" :id="poster.id">
    </Poster>

  <div v-else>
    Du darsft nicht
  </div> 

    <!-- <h1 v-else v-if="this.error">Das Plakat kennen wir leider nicht finden.<br> Magst du den QR-Code erneut einscannen?</h1>
    <h1 v-else v-if="!poster.occupied && !this.error">Hier hängt noch nichts! Erzähl deine Geschichte! Lass dir dazu ein Geschenk schenken!</h1> -->

</div>
</template>

<script>
import firebase from 'firebase/app'
import {
  db
} from '@/config/db.js'
import Poster from '@/components/Poster.vue'


export default {
  name: 'poster',
  components: {
    Poster
  },
  props: ['id'],
  data() {

    return {
      poster: [],
      posterID: this.id,
      posterAccess: false,
      error: true,
      time: 0,
      maxSeconds : 60,
    };
  },
  computed: {
    getCounter: function () {
      var result = new Date($cookies.get('ownStoryTime'));
      var now = new Date();
      result.setDate(result.getDate() + 7);
    }
  },
  firestore() {
    return {
      poster: db.collection("poster/").doc(this.posterID)
    }
  },
  methods: {
  },
  watch: {
    immediate: true,
    poster: function(poster, oldposter) {

      if (!poster) {
        console.log("Plakat existier nicht!");
        this.error = true;
      } else if(poster){
        console.log("Plakat existiert!");

        this.error = false;
        var ownStoryID = $cookies.get('ownStoryID');

        if (!poster.occupied) { // Ist das Palakt belegt?
          console.log("Plakat nicht belegt!");
          if (!ownStoryID) { // Wurde eine Story geschrieben?
            console.log("Eigene Story existiert nicht!");
            this.posterAccess = false;
          } else if (ownStoryID && ownStoryID != "") {
            console.log("Story gefunden. Es darf gepostet werden");
            this.posterAccess = true;
            this.$router.replace({ name: 'addPoster', params: {id: this.posterID }});
          }
        } else if (poster.occupied) {
          if(poster.posted.seconds != undefined){
            var postedTime = new firebase.firestore.Timestamp(poster.posted.seconds, poster.posted.nanoseconds);
            console.log(postedTime);
            var postedTimeDate = postedTime.toDate();
            console.log(postedTimeDate);
            var now = new Date();
            postedTimeDate.setSeconds(postedTimeDate.getSeconds() + this.maxSeconds);
            this.time = postedTimeDate - now;
            console.log(this.time);

            if(this.time <= 0){
              console.log("Plakat ist abgelaufen!");
              db.collection("poster/").doc(this.posterID).set({
                occupied: false
              })
            }
          }
        }

      }
    }
  },
}
</script>
