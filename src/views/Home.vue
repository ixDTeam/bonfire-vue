<template>
  <div class="home">
    <div>
     <Map>
       </Map>
      <sequential-entrance fromTop>
       <Story @delete-members="deleteMember" v-bind:content="story.content" v-bind:emotion="story.emotion" v-bind:id="story.id" v-for="story in stories" :key="story.id">
           <!-- <button @click="$emit('delete-member',m.id)">Del</button> -->
       </Story>
     </sequential-entrance>

       
     

       
       
   </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Story from '@/components/Story.vue'
import Map from '@/components/Map.vue'
import {db} from '@/config/db.js'

export default {
  name: 'home',
  components: {
    Story,
    Map
  },
  data() {
        return {
            stories: []
        };
    },
    firestore() {
        return {
            stories: db.collection("object/"+this.$store.getters.getID+"/story")
        };
    },
    methods: {

       deleteMember(id) {
           //alert('in deleteMember Parent');
           db.collection("object/001/story").doc(id).delete();
       }
     }
}
</script>
