<template>
  <div class="new">
    <h1>New Story</h1>
    <Form @add-Story="addStory"></Form>
  </div>
</template>

<script>

import Form from '@/components/Form.vue'
import {db} from '@/config/db.js'


export default {
  name: 'new',
  components: {
    Form
  },
  data() {
    return {
    };
  },
  methods: {
       addStory(content, emotion) {
           //alert('in addMember Parent');
           db.collection("object/001/story").add({ content, emotion });
       }
  
}
}
</script>
