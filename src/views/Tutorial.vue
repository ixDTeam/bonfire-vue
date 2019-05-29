<template>
  <div class="tutorial fullscreen color-bg pad-t">
    <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide class="tutorial-page">
      <h2>Headline</h2>
      <p>Lorem ipsum ist super cool.</p>
    </swiper-slide>
    <swiper-slide class="tutorial-page">I'm Slide 2</swiper-slide>
    <swiper-slide class="tutorial-page">I'm Slide 3</swiper-slide>
    <swiper-slide class="tutorial-page">
      <span v-if="!allowAccess">
      <h1>Your are not part of the gift!</h1>
      <p>You need to scan the qr-code on your giveaway to get access to the stories.<br> When you don't have a giveaway head over to the Universtiy of applied sciences Osnabrück and get yours!</p>
    </span>
    <span v-else>
      <h1>Share your story!</h1>
      <p>You need to scan the qr-code on your giveaway to get access to the stories.<br> When you don't have a giveaway head over to the Universtiy of applied sciences Osnabrück and get yours!</p>

    </span>
      <button :disabled="!allowAccess" class="button button-main button-tutorial" v-on:click="startJourney">Los gehts!</button>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev">
      <svg width="24px" height="37px" viewBox="0 0 24 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="wireframe" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g class="swiper-path" transform="translate(-318.000000, -390.000000)" stroke="#0A2465" stroke-width="7">
                  <polyline id="Path-5" transform="translate(338.863961, 408.792893) scale(-1, 1) rotate(-45.000000) translate(-338.863961, -408.792893) " points="327.863961 419.792893 349.863961 419.792893 349.863961 397.792893"></polyline>
              </g>
          </g>
      </svg>
    </div>
    <div class="swiper-button-next" slot="button-next">
      <svg width="24px" height="37px" viewBox="0 0 24 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="wireframe" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g class="swiper-path" transform="translate(-336.000000, -390.000000)" stroke="#0A2465" stroke-width="7">
                  <polyline id="Path-5" transform="translate(338.863961, 408.792893) rotate(-45.000000) translate(-338.863961, -408.792893) " points="327.863961 419.792893 349.863961 419.792893 349.863961 397.792893"></polyline>
              </g>
          </g>
      </svg>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>



export default {
  name: 'Tutorial',
  components: {

  },
  data() {
    return {
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
              el: '.swiper-pagination',
              dynamicBullets: false
        }
      }
  }
},
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      allowAccess(){
        return this.$store.getters.getAccess
      }
  },
  methods: {
    startJourney: function(){
      if(this.allowAccess){
          this.$router.push({path: 'new'})
      }
    }
  },
  mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
    }
 }
</script>
