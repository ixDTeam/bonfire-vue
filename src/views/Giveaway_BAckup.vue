<template>
  <div class="giveaway">
    <div>
      <h1>Giveaway</h1>
      <countdown :time="time" :interval="100" tag="p">
        <template slot-scope="props">{{ props.days }} days, {{ props.hours }} hours, {{ props.minutes }} minutes, {{ props.seconds }} seconds.</template>
      </countdown>
      <p v-if="checkStory">Your Story was not passed on</p>
      <p v-if="!checkStory">Deine Story wurde weitergegeben!</p>
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
        checkStory: false
      };
  },
  firestore() {
      return {
          story: db.collection("object/"+this.$cookies.get('id')+"/story").orderBy('created', 'desc')
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

      this.$bind('storie', db.collection("object/"+id+"/story").orderBy('created', 'asc')).then(geschichten => {
          maxPosition = geschichten.length;
          position = geschichten.findIndex(isStory) + 1;
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
