<template lang="jade">
  div(id="appWrap")
    hello
    pop-triggers(
      v-bind:store='store'
      v-bind:totalblocks='totalblocks'
      v-bind:w='w'
    )
    pre {{$data | json}}
</template>

<script>
import Hello from './components/Hello'
import PopTriggers from './components/PopTriggers'
import {store} from './assets/GetData.js'
// import {totalblocks} from './assets/GetData.js'

export default {
  data () {
    return {
      store: store,
      totalblocks: store.length,
      test: 'test',
      w: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }
  },
  components: {
    Hello,
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
