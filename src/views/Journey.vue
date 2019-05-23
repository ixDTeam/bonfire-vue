<template>
  <div class="Journey">
    <div>
      <Map v-bind:lat="latCenter"  v-bind:lng="lngCenter">
      </Map>
      <div id="fader-feed-map">
      </div>
      <b-container fluid id="feed">
        <swiper id="story-swiper" :options="swiperOption" dir="rtl" ref="mySwiper" @slideChange="changeSlide">
            <swiper-slide v-for="story in stories" :key="story.id">
              <Story @delete-members="deleteMember" v-bind:content="story.content" v-bind:emotion="story.emotion" v-bind:id="story.id" > </Story>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
           <!-- <button @click="$emit('delete-member',m.id)">Del</button> -->
    </b-container>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Story from '@/components/Story.vue'
import Map from '@/components/Map.vue'
import {db} from '@/config/db.js'

export default {
  name: 'journey',
  components: {
    Story,
    Map
  },
  data() {
        return {
            stories: [],
            swiperOption: {
              slidesPerView: 1.2,
              spaceBetween: 2,
              centeredSlides: true,
            pagination: {
              el: '.swiper-pagination',
              dynamicBullets: true,
              clickable: true
            }
          },
        swiperSlides: [1, 2, 3, 4, 5],
        latCenter: 30,
        lngCenter: 10
        };
    },
    firestore() {
        return {
            stories: db.collection("object/"+this.$cookies.get('id')+"/story").orderBy('created', 'desc')
        };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {

      scrollToStory() {
          function isStory(value) {
            return value.id == this.$cookies.get('ownStoryID');
          }
          position = this.stories.findIndex(isStory) + 1;
          console.log(position);
        },

       deleteMember(id) {
           db.collection("object/"+this.$cookies.get('id')+"/story").doc(id).delete();
       },
       changeSlide(){
         let n = this.swiper.realIndex;
         var location = this.stories[n].location;
         this.latCenter = location.latitude;
         this.lngCenter = location.longitude;
       }
     },
     updated: function () {
       this.changeSlide();
       this.scrollToStory();
     }
}

</script>
