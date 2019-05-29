<template>
  <div class="add-poster fullscreen color-primary flex column v-center">
    <div class="drag-target">
      <span>Place your Story here</span>
    </div>
        <svg id="rect1" width="42px" height="25px" viewBox="0 0 42 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="wireframe" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-171.000000, -213.000000)" fill="#FD74BC">
                    <polygon id="Triangle" points="192 213.5 213 237.5 171 237.5"></polygon>
                </g>
            </g>
        </svg>
        <svg id="rect2" width="42px" height="25px" viewBox="0 0 42 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="wireframe" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-171.000000, -213.000000)" fill="#FD74BC">
                    <polygon id="Triangle" points="192 213.5 213 237.5 171 237.5"></polygon>
                </g>
            </g>
        </svg>
        <svg id="rect3" width="42px" height="25px" viewBox="0 0 42 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="wireframe" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-171.000000, -213.000000)" fill="#FD74BC">
                    <polygon id="Triangle" points="192 213.5 213 237.5 171 237.5"></polygon>
                </g>
            </g>
        </svg>
      <Story :key="story.id" v-bind:content="story.content" v-bind:emotion="story.emotion" v-bind:id="story.id"> </Story>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import {
  db
} from '@/config/db.js'
import Story from '@/components/Story.vue'

export default {
  name: 'addPoster',
  components: {
    Story,
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
