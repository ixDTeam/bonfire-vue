<template>
  <div class="add-poster fullscreen color-primary flex column v-center">
    <div v-bind:class="{ moving: moving }" class="drag-target">
      <span v-on:click="postStory">Place your Story here</span>
    </div>
    <div class="flex column animation-tri">
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
    </div>
        <swiper @touchStart="isMoving" @touchEnd="notMoving" @slideChange="postStory" :options="swiperOption" ref="mySwiper" id="story-poster">
          <swiper-slide>
            <Story v-bind:class="{ moving: moving }" :key="story.id" v-bind:content="story.content" v-bind:emotion="story.emotion" v-bind:id="story.id" :created="story.created"> </Story>
          </swiper-slide>
          <swiper-slide>
            <div>
            </div>
          </swiper-slide>
        </swiper>

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
      moving: false,
      swiperOption: {
        direction: 'vertical',
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
              el: '.swiper-pagination',
              dynamicBullets: false
        }
      }
    };
  },
  props: ['id'],
  firestore() {
    return {
      story: db.collection("object/"+$cookies.get('id')+"/story").doc($cookies.get('ownStoryID'))
    };
  },
  methods: {
    isMoving(){
      console.log("Touch");
      this.moving = true;
    },

    notMoving(){
      console.log("No Touch");
      this.moving = false;
    },

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

      },
      slideChange () {
            console.log('Change');
        }
  }
}
</script>

<style>
.drag-target {
  padding: 15px 25px 15px 25px;
  transition: all 0.5s;
}
.drag-target.moving{
  padding: 45px 25px 15px 25px;
}

.story{
  transition: all 0.5s;
  transform: scale(1);
}

.story.moving{
  transform: scale(0.8);
}
</style>
