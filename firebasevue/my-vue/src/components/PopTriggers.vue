<template lang='jade'>
  template(v-if='noob && open')
    pop-input(
      v-bind:cindex='pindex'
      v-bind:open.sync='open'
      v-bind:store='store'
      v-bind:nubBoxes='nubBoxes'
    )
  div.blockWrap.row
    div(
      class='block'
      v-for='n in store'
      v-bind:index='$index'
      v-bind:class='{"dim": n.isDim, "selected": selectBox}'
      track-by='$index'
      v-on:click='toggleForm($index)'
    )
      div(class='popout' v-if='n.msg')
        {{n.msg === 1 ? 'Sweeeet ride, TB!' : ''}}
        {{n.msg === 2 ? 'Here’s to a winning season!' : ''}}
        {{n.msg === 3 ? 'Can’t wait for race day!' : ''}}
        {{n.msg === 4 ? 'Tear is up, Trevor!' : ''}}
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
.blockWrap {
  position: relative;
  .block {
    background: rgba(0, 0, 0, 0.2);
    font-size: 30px;
    color: rgba(0, 0, 0, 0.6);
    width: 10px;
    height: 10px;
    float: left;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0);
    display: block;
    padding: 0px;
    transition: all 0.3s ease;
    &.dim {
      background: rgba(0, 0, 0, 0.3);
      color: rgba(0, 0, 0, 0.4);
    }
    &:hover {
      border: 1px solid rgba(255, 255, 255, 1);
      .popout {
        opacity: 1
      }
    }
    .popout {
      position: absolute;
      width: 300px;
      line-height: 50px;
      top: -50px;
      box-sizing: border-box;
      font-size: 30px;
      right: 20px;
      text-align: center;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      opacity: 0;
      transition: all 0.3s ease;
    }
  }
}
</style>
