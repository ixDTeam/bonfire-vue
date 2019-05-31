<template>
  <div class="giveaway">
    <div class="color-bg fullscreen">

    <div class="flex fullscreen column pad-t pad-l pad-r h-left" v-if="checkStory">
        <h1>Nice! <br> Your story was passed on.</h1>
         <h2 class="emoji-giveaway">&#x1F60D</h2>
        <div class="giveaway-alert success" v-if="checkStory">You now have full access to all other stories of the journey.</div>
       
        <div class="button button-main" v-if="checkStory" v-on:click="nextStep('journey')" >Look at the other stories</div>
    </div>

    <div class="flex column pad-l pad-r" v-if="!checkStory">
        <div v-bind:class="{ animationpulse: checkCountdown }" class="countdown vertical seconds" >
          <countdown tag="div" class="countdown-timer" @progress="handleCountdownProgress" :emit-events="true" :time="time" :interval="1000">
            <template slot-scope="props">{{ props.seconds }}</template>
          </countdown>
          <span class="description">seconds</span>
        </div>

        <span v-if="storyDestory">
          <h1>You are too late.</h1>
          <img class="emoji-animation" src="@/assets/others/emoji.gif">
          <p class="instruction">With that the journey of your gift is unfortunately over. But you can start a new journey. Just head over to the Universiy of Applied Scieneces Osnabrück and start over.</p>
        </span>
        <span v-else>
          <h1>Give away your gift!</h1>
          <p class="instruction">You now have a limited time to pass your gift to the next person. <br> Then you can experience what stories the others have told.</p>
        </span>
        <div class="story" v-bind:class="{ show: storyShow, destory: storyDestory }">
          <p class='content'>{{story.content}}</p>
          <span class="headline">{{story.topic}}</span>
          <span class="created">{{completeDate}}</span>
          <span class="location">{{story.locationName}}</span>
          <span class="emoji"><Emotion :emotion="story.emotion"></Emotion></span>
        </div>
    </div>


   </div>
  </div>
</template>

<script>

import firebase from 'firebase/app'
import {db} from '@/config/db.js'

import Emotion from '@/components/Emotion.vue'

export default {
  name: 'giveaway',
  components: {
    Emotion
  },
  data: function(){
    var dataDate = new Date();
    return {
        story: {},
        storie: [],
        counting: false,
        time: Number,
        checkStory: false,
        storyShow: false,
        storyDestory: false,
        destructionState: 6,
        maxSeconds: 60,
        localContent: 'Placeholder',
        maxItems: Number,
        totalSeconds: 0,
        completeDate: String
      };
  },
  firestore: {
   storie: db.collection("object/"+$cookies.get('id')+"/story").orderBy('created', 'asc'),
   story: db.collection("object/"+$cookies.get('id')+"/story").doc($cookies.get('ownStoryID'))
  },
  computed:{
    checkCountdown(){
      if(this.totalSeconds > 0){
        console.log("Hide Countdown");
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {

    

    handleCountdownProgress(data) {

      this.totalSeconds = data.totalSeconds
      console.log("Sekunden noch: "+this.totalSeconds)

      if(this.totalSeconds <= 0){
        this.storyDestory = true;
      } else {
        this.storyDestory = false;
      }

    },

   toggleStory: function(){
     this.storyShow = !this.storyShow;
   },
   nextStep(n){
          this.$router.push({path: n});
   }
  },
  mounted: function(){

  },
  watch: {


    story: function(story, oldstory){
        var postedTime = new firebase.firestore.Timestamp(story.created.seconds, story.created.nanoseconds);
        console.log(postedTime);
        var postedTimeDate = postedTime.toDate();
        console.log(postedTimeDate);

        // Datum für Anzeige aufbereiten
        this.completeDate = postedTimeDate.getDate() + "." + (postedTimeDate.getMonth() + 1) + "." + postedTimeDate.getFullYear();


        var now = new Date();
        postedTimeDate.setSeconds(postedTimeDate.getSeconds() + this.maxSeconds);
        this.time = postedTimeDate - now;
        console.log(this.time);

        if(this.time <= 0){
          console.log("Vorbei");
          this.storyDestory = true;
        }
      },

    storie: function(){

      let check = false;
      let id = this.$cookies.get('id');
      let ownStoryID = this.$cookies.get('ownStoryID');
      let position;
      let maxPosition;

      function isStory(value) {
        return value.id == ownStoryID;
      }

      console.log(this.storie);
      maxPosition = this.storie.length;
      position = this.storie.findIndex(isStory) + 1;
      this.$cookies.set('storyIndex', position);
      console.log(maxPosition);
      console.log(position);
      if(position < maxPosition){
        console.log('Es gibt neues')
        this.$cookies.set('step', 3);
        // this.$router.replace({path: 'journey'});
        this.checkStory = true;
      } else if (position >= maxPosition){
        this.checkStory = false;
      }
    }
  }
}
</script>

<style>

.story.destory{
  opacity: 0;
  transition: all 3s;
}

.content span{
  transition: all 1s;
}
.content .blocked {
  background-color: black;
  color: black;
}
</style>
