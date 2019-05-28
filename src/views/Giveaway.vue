<template>
  <div class="giveaway">
    <div class="color-bg fullscreen">

    <div class="flex column pad-t pad-l pad-r h-left" v-if="checkStory">
        <h1>Danke!</h1>
        <div class="giveaway-alert success" v-if="checkStory">Deine Story wurde weitergegeben!</div>
    </div>

    <div class="flex column pad-l pad-r" v-if="!checkStory">
        <div class="countdown vertical" >
          <countdown :time="time" :interval="100" tag="span">
            <template slot-scope="props">{{ props.days }}</template>
          </countdown>
          <span class="description">Tage</span>
        </div>
        <h1>Gib es weiter</h1>
        <p class="instruction">Gib dein Geschenk an jemanden weiter und bitte um eine weitere Geschichte <br> Dann kannst du alle Geschichten sehen!</p>
        
    </div>

        <div class="story" v-on:click="toggleStory" v-bind:class="{ show: storyShow }">
          <p class='content'>{{story.content}}</p>
          <span class="headline">Freaky Friday</span>
          <span class="created">vor 2 Tagen</span>
          <span class="location">Osnabrück</span>
          <span class="emoji"></span>
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
    var result = new Date($cookies.get('ownStoryTime'));
    var now = new Date();
    result.setDate(result.getDate() + 7);

    return {
        story: {},
        storie: [],
        counting: false,
        time: result - now,
        checkStory: false,
        storyShow: false,
      };
  },
  firestore: {
   storie: db.collection("object/"+$cookies.get('id')+"/story").orderBy('created', 'asc'),
   story: db.collection("object/"+$cookies.get('id')+"/story").doc($cookies.get('ownStoryID'))
  },
  computed:{

    getCounter: function () {
      // var now = new Date();
      var result = new Date($cookies.get('ownStoryTime'));

      console.log(result)
      result.setDate(result.getDate() + 7);
      return result;
    }
  },
  methods: {
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
