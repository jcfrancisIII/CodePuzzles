<template lang='jade'>
  template(v-if='open')
      pop-input(
        v-bind:cindex='pindex'
        v-bind:open.sync='open'
        v-bind:store='store'
        v-bind:nubBoxes='nubBoxes'
      )
    div(v-if='!open') Select a square to claim
  div.blockWrap.row
    div(
      class='block'
      v-on:click='boxClick'
      v-for='n in store'
      v-bind:index='$index'
      v-bind:class='{"dim": n.isDim, "selected": selectBox}'
    )
      div(class='popout')
        {{n.msg === 0 ? '' : ''}}
        {{n.msg === 1 ? 'Go Trevor' : ''}}
        {{n.msg === 2 ? 'Yo Trev' : ''}}
        {{n.msg === 3 ? 'Hi T' : ''}}
</template>

<script>
import PopInput from './PopInput'

export default {
  props: {
    store: Array,
    w: Number,
    totalblocks: Number
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
  },
  methods: {
    boxClick (e) {
      this.toggleForm(e)
    },
    toggleForm (e) {
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
