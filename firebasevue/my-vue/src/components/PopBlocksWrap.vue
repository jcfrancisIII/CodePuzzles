<template lang='jade'>
  div.interactWrap
    template(v-if='noob && open')
      pop-input(
        v-bind:cindex='pindex'
        v-bind:open.sync='open'
        v-bind:store='store'
        v-bind:nubBoxes='nubBoxes'
      )
    div#carWrapWrap(v-bind:style='stylewrapwrap')
      div#carWrap.row(v-bind:style='stylewrap')
        pop-blocks(
          v-for='n in store'
          v-bind:n='n'
          v-bind:open.sync='open'
          v-bind:totalblocks='totalblocks'
          v-bind:carstylea='carstylea'
          v-bind:index='$index'
          track-by='$index'
          v-bind:cindex='n.position'
          v-bind:selected='selected'
          v-bind:ref=cpieces
        )
        div(class='fullImage', v-if='imgFull')
</template>

<script>
import PopBlocks from './PopBlocks'
import PopInput from './PopInput'

export default {
  props: {
    store: Array,
    w: Number,
    totalblocks: Number,
    noob: Boolean,
    imgFull: Boolean
  },
  data () {
    return {
      open: false,
      pindex: 0,
      selected: false
    }
  },
  components: {
    PopBlocks,
    PopInput
  },
  computed: {
    stylewrapwrap () {
      var bgW = this.w || 0
      // Use source image 2000 x 1333 to get the aspect ratio 0.6665
      var bgH = bgW * 0.6665
      var divisions = this.totalblocks

      // Start looking for the width and height of the car pieces
      var area = bgW * bgH
      var blockArea = area / divisions

      var blockSide = Math.sqrt(blockArea)
      var wd = bgW - (blockSide * 2)
      var ht = bgH - (blockSide * 3)

      return {
        'width': wd + 'px',
        'height': ht + 'px'
      }
    },
    stylewrap () {
      var bgW = this.w || 0
      // Use source image 2000 x 1333 to get the aspect ratio 0.6665
      var bgH = bgW * 0.6665
      var divisions = this.totalblocks

      // Start looking for the width and height of the car pieces
      var area = bgW * bgH
      var blockArea = area / divisions

      var blockSide = Math.sqrt(blockArea)

      return {
        'width': bgW + 'px',
        'margin-left': '-' + blockSide * 2 + 'px'
      }
    },
    carstylea () {
      var bgW = this.w || 0
      // Use source image 2000 x 1333 to get the aspect ratio 0.6665
      var bgH = bgW * 0.6665
      var divisions = this.totalblocks

      // Start looking for the width and height of the car pieces
      var area = bgW * bgH
      var blockArea = area / divisions

      var blockSide = Math.sqrt(blockArea)

      var blockPerc = blockSide * 100 / bgW

      blockPerc = Math.floor(blockPerc * 100) / 100 - 0.02

      return {
        'width': blockPerc.toFixed(3) + '%',
        'padding-bottom': blockPerc.toFixed(3) + '%',
        'background-size': bgW.toFixed(3) + 'px ' + bgH.toFixed(3) + 'px'
      }
    }
  },
  methods: {
    toggleForm (n) {
      console.log('box clicked to claim' + n)
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
#carWrapWrap {
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  #carWrap {
    width: 100%;
  }
}
</style>
