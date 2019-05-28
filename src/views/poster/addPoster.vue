<template>
<div class="qr">
  <div>

    <drop class="drop"
			:class="{ over }"
			@dragover="over = true"
			@dragleave="over = false"
			@drop="postStory">
				<h1>Drag to here</h1>
		</drop>
    <drag class="drag" :transfer-data="{ example: 'styling' }">
      <Poster :key="story.id" v-bind:content="story.content" v-bind:emotion="story.emotion" v-bind:id="story.id"> </Poster>
    </drag>
  </div>
</div>
</template>

<script>
import firebase from 'firebase/app'
import {
  db
} from '@/config/db.js'
import Poster from '@/components/Poster.vue'
import { Drag, Drop } from 'vue-drag-drop';

export default {
  name: 'addPoster',
  components: {
    Poster,
    Drag,
    Drop
  },
  data() {
    return {
      over: false,
      poster: [],
      story: [],
      posterID: this.id,
      ownStoryID: String,
      posterAccess: false,
    };
  },
  props: ['id'],
  firestore() {
    return {
      story: db.collection("object/"+$cookies.get('id')+"/story").doc($cookies.get('ownStoryID'))
    };
  },
  methods: {

      postStory() {

        var self = this;
        this.over = false;
        var check = false;
        var posted = new Date();

        var topic = this.story.topic;
        var content = this.story.content;
        var emotion = this.story.emotion;
        var location = this.story.location;
        var locationName = this.story.locationName;
        var occupied = true;

        var posterID = this.posterID
        console.log(this.posterID)

        db.collection("poster/").doc(posterID).set({
          topic,
          content,
          emotion,
          posted: new firebase.firestore.Timestamp.fromDate(new Date()),
          location,
          locationName,
          occupied
        })
        .then(function(docRef) {
            self.$router.replace({ name: 'accessPoster', params: {id: posterID }});
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

      }
  }
}
</script>
