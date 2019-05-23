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
      <button class="button button-main" v-on:click="startJourney">Los gehts!</button>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
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
              dynamicBullets: true
        }
      }
  }
},
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
  },
  methods: {
    startJourney: function(){
        this.$router.push({path: 'new'})
    }
  },
  mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
    }
 }
</script>
