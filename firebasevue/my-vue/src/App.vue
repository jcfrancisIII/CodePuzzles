<template lang="jade">
  div(id="appWrap")
    hello
    pop-triggers(v-bind:store='store')
    pre {{$data | json}}
</template>

<script>
import Hello from './components/Hello'
import PopTriggers from './components/PopTriggers'
import {store} from './assets/GetData.js'

export default {
  data () {
    return {
      store: store,
      test: 'test'
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
}
</style>
