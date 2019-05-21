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
  name: 'New',
  components: {
    Form
  },
  data() {
    return {
    };
  },
  methods: {
       addStory(content, emotion) {
           var created = new Date();
           console.log('created');
           db.collection("object/001/story").add({ content, emotion, created });
       }

}
}
</script>
