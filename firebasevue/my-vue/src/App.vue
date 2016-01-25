<template lang="jade">
  div(id="app")
    hello
    popinput
</template>

<script>
import Hello from './components/Hello'
import PopInput from './components/PopInput'
export default {
  components: {
    Hello,
    'popinput': PopInput
  }
}
</script>

<style lang='less'>
body {
  font-family: Helvetica, sans-serif;
}
</style>
