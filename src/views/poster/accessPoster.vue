<template>
<div class="fullscreen">

    <h1 v-if="this.error">Das Plakat kennen wir leider nicht finden.<br> Magst du den QR-Code erneut einscannen?</h1>
    <h1 v-if="!poster.occupied && !this.error">Hier hängt noch nichts! Erzähl deine Geschichte! Lass dir dazu ein Geschenk schenken!</h1>

     <!--<div v-if="poster.occupied && !this.error" class="countdown">
       <countdown class="poster-countdown" :time="time" :interval="100" tag="span">
         <template slot-scope="props">{{ props.days }}</template>
       </countdown>
      </div>-->

    <Poster v-if="poster.occupied" :key="poster.id" v-bind:content="poster.content" v-bind:emotion="poster.emotion" v-bind:id="poster.id"> </Poster>
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
      ownStoryID: String,
      posterAccess: false,
      error: true,
      time: 0,
      maxDays : 3,
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
      // console.log(poster.posted.seconds);
      //
      // if(poster.posted.seconds !== undefined){
      //   var postedTime = new firebase.firestore.Timestamp(poster.posted.seconds, poster.posted.nanoseconds);
      //   console.log(postedTime);
      //   var postedTimeDate = postedTime.toDate();
      //   console.log(postedTimeDate);
      //   var now = new Date();
      //   postedTimeDate.setDate(postedTimeDate.getDate() + this.maxDays);
      //   this.time = postedTimeDate - now;
      //   console.log(this.time);
      //
      //   if(this.time <= 0){
      //     console.log("Plakat ist abgelaufen!");
      //     db.collection("poster/").doc(this.posterID).set({
      //       occupied: false
      //     })
      //   }
      // }


      if (!poster) {
        console.log("Plakat existier nicht!");
        this.error = true;
      } else if(poster){
        this.error = false;

        if(poster.posted){
          var postedTime = new firebase.firestore.Timestamp(poster.posted.seconds, poster.posted.nanoseconds);
          console.log(postedTime);
          var postedTimeDate = postedTime.toDate();
          console.log(postedTimeDate);
          var now = new Date();
          postedTimeDate.setDate(postedTimeDate.getDate() + this.maxDays);
          this.time = postedTimeDate - now;
          console.log(this.time);

          if(this.time <= 0){
            console.log("Plakat ist abgelaufen!");
            db.collection("poster/").doc(this.posterID).set({
              occupied: false
            })
          }
        }

        console.log("Plakat existiert!");
        if (!poster.occupied) { // Ist das Palakt belegt?
          console.log("Plakat nicht belegt!");
          if (!this.ownStoryID) { // Wurde eine Story geschrieben?
            console.log("Keine Story geschrieben!");
            this.posterAccess = false;
          } else if (this.ownStoryID) {
            console.log("Story gefunden. Es darf gepostet werden");
            this.posterAccess = true;
            this.$router.replace({ name: 'addPoster', params: {id: this.posterID }});
          }
        } else if (this.poster.occupied) {
          console.log("Plakat belegt!");
        }
      }
    }
  },
}
</script>
