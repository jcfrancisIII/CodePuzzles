<template lang="jade">
  div(id="getWrap")
    pop-triggers(
      v-bind:store='store'
      v-bind:totalblocks='totalblocks'
      v-bind:w='w'
    )
</template>

<script>
import PopTriggers from './PopTriggers'
// import {totalblocks} from './assets/GetData.js'

export default {
  props: {
    store: Array,
    totalblocks: Number,
    w: Number
  },
  data () {
    return {
    }
  },
  components: {
    PopTriggers
  }
}
</script>

<style lang='less'>
body {
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  width: 100%;
  height: 100%;
}
.row {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  position: relative;
  *zoom: 1;
  &:before, &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
}
</style>
