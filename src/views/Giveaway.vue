<template>
  <div class="giveaway">
    <div>
      <h1>Giveaway</h1>
      <countdown :time="time" :interval="100" tag="p">
        <template slot-scope="props">{{ props.days }} days, {{ props.hours }} hours, {{ props.minutes }} minutes, {{ props.seconds }} seconds.</template>
      </countdown>
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
        counting: false,
        time: result - now
      };
  },
  firestore() {
      return {
          story: db.doc("object/"+this.$cookies.get('id')+"/story/"+this.$cookies.get('ownStoryID'))
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

    }
}
</script>
