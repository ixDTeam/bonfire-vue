<template>
  <div class="Journey">
    <div>
      <Map  v-bind:locations="storiesLocation" v-bind:stories="stories" v-bind:lat="latCenter" :panLat="panLat" :panLng="panLng"  v-bind:lng="lngCenter">
      </Map>
      <div id="fader-feed-map">
      </div>
      <b-container fluid id="feed">
        <swiper id="story-swiper" :options="swiperOption" ref="mySwiper" @slideChange="changeSlide">
            <swiper-slide v-for="story in stories" :key="story.id">
              <Story @delete-members="deleteMember" v-bind:content="story.content" v-bind:emotion="story.emotion" v-bind:id="story.id" :topic="story.topic" :city="story.locationName" :created="story.created"> </Story>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
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
    var lStoryID = $cookies.get('ownStoryID');
    var lownStoryIndex = $cookies.get('storyIndex');
        return {
            stories: [],
            storiesLocation: [],
            swiperOption: {
              centeredSlides: true,
              slidesPerView: 1.2,
              spaceBetween: 2,
            pagination: {
              el: '.swiper-pagination',
              dynamicBullets: true,
              clickable: true
            },
            breakpointsInverse: true,
            breakpoints: {
              // when window width is <= 640px
              640: {
                slidesPerView: 1.7,
                spaceBetween: 2,
              },
              1000: {
                slidesPerView: 2.5,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 3.5,
                spaceBetween: 25,
              }
            }
          },
        swiperSlides: [1, 2, 3, 4, 5],
        latCenter: 51.672756,
        lngCenter: 10.318538,
        panLat: 51.672756,
        panLng: 10.318538,
        ownStoryID: lStoryID,
        ownStoryIndex: lownStoryIndex
        };
    },
    firestore() {
      var stories = db.collection("object/"+this.$cookies.get('id')+"/story").orderBy('created', 'asc')
        return {
          stories
        };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {

      scrollToStory() {
        console.log(this.ownStoryIndex);
        this.swiper.slideTo(this.ownStoryIndex -1);
        },

       deleteMember(id) {
           db.collection("object/"+this.$cookies.get('id')+"/story").doc(id).delete();
       },

       changeSlide(){
             let n = this.swiper.realIndex;
             var location = this.stories[n].location;
             this.panLat = location.latitude;
             this.panLng = location.longitude;
         }
     },
     mounted: function(){
      this.scrollToStory();
     },
     watch: {

          // swiper.realIndex: {
          //   handler: function () {
          //     console.log("Test");
          //     let n = this.swiper.realIndex;
          //     var location = this.stories[n].location;
          //     this.latCenter = location.latitude;
          //     this.lngCenter = location.longitude;
          //   }
          // },

        	stories: function(newVal, oldVal) {
            immediate: true; // watch it
            let self = this;
            var stories = db.collection("object/"+this.$cookies.get('id')+"/story").orderBy('created', 'asc')
            stories.get().then(function(querySnapshot) {

              let n = self.swiper.realIndex;
              var location = self.stories[n].location;
              console.log(location)
              self.latCenter = location.latitude;
              self.lngCenter = location.longitude;

              self.storiesLocation = [];
              querySnapshot.forEach(function (documentSnapshot) {
              var data = documentSnapshot.data().location;
              // var location =
              self.storiesLocation.push({lat: documentSnapshot.data().location._lat, lng: documentSnapshot.data().location._long});
              });
            });
        }
      }
}

</script>
