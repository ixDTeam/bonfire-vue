<template>
  <div class="giveaway">
    <div class="color-bg fullscreen">

    <div class="flex fullscreen column pad-t pad-l pad-r h-left" v-if="checkStory">
        <h1>Danke!</h1>
        <div class="giveaway-alert success" v-if="checkStory">Deine Story wurde weitergegeben!</div>
        <div class="button button-main">Sieh dir alle Storys an</div>
    </div>

    <div class="flex column pad-l pad-r" v-if="!checkStory">
        <div class="countdown vertical" >
          <countdown @progress="handleCountdownProgress" :emit-events="true" :time="time" :interval="1000" tag="span">
            <template slot-scope="props">{{ props.seconds }}</template>
          </countdown>
          <span class="description">Sekunden</span>
        </div>
        <h1>Gib es weiter</h1>
        <p class="instruction">Gib dein Geschenk an jemanden weiter und bitte um eine weitere Geschichte <br> Dann kannst du alle Geschichten sehen!</p>
        <div class="story" v-bind:class="{ show: storyShow }">
          <p class='content' ref="text" v-html="localContent">{{localContent}}</p>
          <span class="headline">Freaky Friday</span>
          <span class="created">vor 2 Tagen</span>
          <span class="location">Osnabrück</span>
          <span class="emoji"></span>
        </div>
    </div>


   </div>
  </div>
</template>

<script>

import firebase from 'firebase/app'
import {db} from '@/config/db.js'

export default {
  name: 'giveaway',
  components: {
  },
  data: function(){
    return {
        story: {},
        storie: [],
        counting: false,
        time: Number,
        checkStory: false,
        storyShow: false,
        destructionState: 6,
        maxSeconds: 60,
        localContent: 'Placeholder',
        maxItems: Number,
        totalSeconds: 0,
      };
  },
  firestore: {
   storie: db.collection("object/"+$cookies.get('id')+"/story").orderBy('created', 'asc'),
   story: db.collection("object/"+$cookies.get('id')+"/story").doc($cookies.get('ownStoryID'))
  },
  computed:{

  },
  methods: {

    handleCountdownProgress(data) {

      this.totalSeconds = data.totalSeconds
      if(data.totalSeconds < 60){ // Nur noch eine Minute

      }
    },

   toggleStory: function(){
     this.storyShow = !this.storyShow;
   },
   nextStep(n){
     if (this.checkStory){
          this.$router.push({path: n});
     }
   }
  },
  mounted: function(){

  },
  watch: {

    totalSeconds: {
      immediate: true, // watch it
      handler: function (totalSeconds, oldTotalseconds) {

               var destruction = 0;
               console.log("JAAAAA MACH ENGLISCH")
               if(totalSeconds == 0){
                 destruction = 10;
               }

               for (var loop = 0; loop < destruction; loop++){
               function getRandomInt(min, max) {
                   min = Math.ceil(min);
                   max = Math.floor(max);
                   return Math.floor(Math.random() * (max - min + 1)) + min;
               }
               var id = getRandomInt(1, 10)
               console.log(id);
               console.log(document.getElementById("Text_"+id));

               document.getElementById("Text_"+id).classList.add("blocked");
             }
           }
         },


    story: function(story, oldstory){
        var postedTime = new firebase.firestore.Timestamp(story.created.seconds, story.created.nanoseconds);
        console.log(postedTime);
        var postedTimeDate = postedTime.toDate();
        console.log(postedTimeDate);
        var now = new Date();
        postedTimeDate.setSeconds(postedTimeDate.getSeconds() + this.maxSeconds);
        this.time = postedTimeDate - now;
        console.log(this.time);


        console.log(this.story.content);
        var lcontent = this.story.content
        var regex = /\S+/g;
        var id = 0;
        var result = lcontent.replace(regex, function(a, b, c) {
            return "<span id=Text_" + (++id) + ">" + a + "</span>";
        });
        this.maxItems = id;
        this.localContent = result;


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

.content span{
  transition: all 1s;
}
.content .blocked {
  background-color: black;
  color: black;
}
</style>
