<template>
  <div class="giveaway">
    <div>
      <h1>Giveaway</h1>
      <countdown :time="time" :interval="100" tag="p">
    <template slot-scope="props">New Year Countdown：{{ props.days }} days, {{ props.hours }} hours, {{ props.minutes }} minutes, {{ props.seconds }} seconds.</template>
  </countdown>
   </div>
  </div>
</template>

<script>
Vue.component(VueCountdown.name, VueCountdown);

export default {
  name: 'giveaway',
  components: {
  },
  data: function(){
    var now = new Date();
    var newYear = new Date(now.getFullYear() + 1, 0, 1);
    return {
        counting: false,
        time: newYear - now,
      };
  },
  methods: {

    }
}
</script>
