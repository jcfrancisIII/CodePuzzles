<template lang='jade'>
  template(v-if='noob && open')
    pop-input(
      v-bind:cindex='pindex'
      v-bind:open.sync='open'
      v-bind:store='store'
      v-bind:nubBoxes='nubBoxes'
    )
  canvas(
    v-el='canvas'
    id='canvas1'
  )
</template>

<script>
import PopInput from './PopInput'

export default {
  props: {
    store: Array,
    w: Number,
    totalblocks: Number,
    noob: Boolean
  },
  data () {
    return {
      open: false,
      pindex: 0,
      nubBoxes: []
    }
  },
  components: {
    PopInput
  },
  computed: {
    hasMsg (n) {
      console.log(n.msg)
    }
  },
  methods: {
    toggleForm (n) {
      console.log(n)
      this.pindex = n
      if (this.open) {
        return false
      }
      this.open = !this.open
    }
  }
}

</script>

<style lang="less">
#canvas1 {

}
</style>
