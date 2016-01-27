<template lang='jade'>
  div.block
    div(
      v-on:click='toggle'
      v-for='n in nubBoxes'
      v-bind:index='$index'
    ) click me {{pindex}}
    template(v-if='open')
      pop-input(
        v-bind:cindex='pindex'
        v-bind:open.sync='open'
        v-bind:store='store'
        v-bind:nubBoxes='nubBoxes'
      )
    div(v-else) Select a square to claim
</template>

<script>
import PopInput from './PopInput'

export default {
  props: {
    store: Array
  },
  data () {
    return {
      open: false,
      pindex: 0,
      nubBoxes: 20
    }
  },
  components: {
    PopInput
  },
  methods: {
    toggle (e) {
      this.pindex = parseInt(e.target.attributes.index.value, 10)
      if (this.open) {
        return false
      }
      this.open = !this.open
    }
  }
}

</script>

<style lang="less">
.block {
  background: rgba(0, 0, 0, 0.2);
  div {
    font-size: 30px;
    color: rgba(0, 0, 0, 0.4);
  }
}
</style>
