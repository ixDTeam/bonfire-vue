<template>
  <div class="giveaway">
    <div class="color-bg fullscreen pad-t">
      <h1>Gib es weiter</h1>
      <div class="giveaway-alert fail" v-if="!checkStory">Your Story was not passed on yet!</div>
      <div class="giveaway-alert success" v-if="checkStory">Deine Story wurde weitergegeben!</div>
      <div class="countdown">
        <countdown :time="time" :interval="100" tag="span">
          <template slot-scope="props">{{ props.days }}</template>
        </countdown>
        <span class="description">Tage</span>
      </div>
      <p class="instruction">Gib dein Geschenk an jemanden weiter und bitte um eine weitere Geschichte <br> Dann kannst du alle Geschichten sehen!</p>
      
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
        storie: {},
        counting: false,
        time: result - now,
        checkStory: false,
        storyShow: false,
      };
  },
  firestore() {
      return {
          story: db.collection("object/"+this.$cookies.get('id')+"/story").doc(this.$cookies.get('ownStoryID'))
      };
  },
  computed:{

    getCounter: function () {
      // var now = new Date();
      var result = new Date($cookies.get('ownStoryTime'));
      result.setDate(result.getDate() + 7);
      return result;
    }
  },
  methods: {
   toggleStory: function(){
     this.storyShow = !this.storyShow;
   }
  },
  mounted: function(){

  },
  watch: {
    story: function(){

      let check = false;
      let id = this.$cookies.get('id');
      let ownStoryID = this.$cookies.get('ownStoryID');
      let position;
      let maxPosition;

      function isStory(value) {
        return value.id == ownStoryID;
      }

      this.$bind('storie', db.collection("object/"+id+"/story").orderBy('created', 'asc')).then(story => {
          maxPosition = story.length;
          position = story.findIndex(isStory) + 1;
          this.$cookies.set('storyIndex', position);
          console.log(maxPosition);
          console.log(position);
          if(position < maxPosition){
            console.log('Es git neues')
            this.$cookies.set('step', 3);
            // this.$router.replace({path: 'journey'});
            this.checkStory = false;
          } else if (position >= maxPosition){
            this.checkStory = true;
          }
        })

    }
  }
}
</script>
