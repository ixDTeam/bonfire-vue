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
  
}
</script>
