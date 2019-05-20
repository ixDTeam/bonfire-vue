<template>
  <div class="home">
    <div>
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
import Form from '@/components/Form.vue'
import {db} from '@/config/db.js'
import cookieCheck from '@/cookieCheck.js'

export default {
  name: 'home',
  components: {
    Story,
    Form,
    cookieCheck
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
