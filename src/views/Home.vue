<template>
  <div class="home">
    <div>
      <Form @add-Story="addStory"></Form>
       <Story @delete-members="deleteMember" v-bind:content="story.content" v-bind:emotion="story.emotion" v-bind:id="story.id" v-for="story in stories" :key="story.id">
           <!-- <button @click="$emit('delete-member',m.id)">Del</button> -->
       </Story>
       
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Story from '@/components/Story.vue'
import Form from '@/components/Form.vue'
import {db} from '@/config/db.js'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Story,
    Form
  },
  data() {
        return {
            stories: []
        };
    },
    firestore() {
        return {
            stories: db.collection("object/001/story")
        };
    },
    methods: {
       addStory(content, emotion) {
           //alert('in addMember Parent');
           db.collection("object/001/story").add({ content, emotion });
       },
       deleteMember(id) {
           //alert('in deleteMember Parent');
           db.collection("object/001/story").doc(id).delete();
       }
     }
}
</script>
