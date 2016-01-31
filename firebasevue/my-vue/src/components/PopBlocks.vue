<template lang='jade'>
  div(
    class='carPiece'
    v-el='carPiece'
    v-bind:style='addstyles'
  )
    div.carX
</template>

<script>

export default {
  props: {
    cIndex: Number,
    open: Boolean,
    carstylea: Object,
    n: Object,
    totalblocks: Number
  },
  data () {
    return {
    }
  },
  computed: {
    addstyles () {
      var styles = this.carstylea // get the unchanging styles passed from parent
      var bgW = parseFloat(styles['background-size']) // get the window width
      var blockSide = parseFloat(styles.width) * bgW / 100 // get the height and width of the car pieces from the styles
      var index = this.n.position // get the block number to use as an index for calculations from parent v-for
      var divisions = this.totalblocks // get totalblocks passed down from app to match db
      var divisionsX = parseFloat(bgW / blockSide) // get the number of blocks across x before next line
      var divisionsY = parseFloat(divisions / divisionsX)

      var bgpX = 0 // set up the background position variables for clipping the car image
      var bgpY = 0

      var column = 0
      var row = 0

      // what row are we in?

      for (var r = 0; r < divisionsY; r++) {
        if (index < divisionsX * r) {
          row = r
          break
        }
      }
      // what column are we in?
      var rowStop = bgW * row
      var colStart = rowStop - bgW
      var colStop = colStart + blockSide
      var indexStop = index * blockSide
      for (var c = 0; c < divisionsX; c++) {
        if (indexStop > colStart && indexStop < colStop) {
          column = c
          break
        }
        if (colStop < rowStop) {
          colStop += blockSide
        }
      }

      bgpX = column * blockSide// clip x axis iterativly

      bgpY = (row - 1) * blockSide // clip y axis iterativly

      styles.backgroundPosition = '-' + bgpX.toString() + 'px -' + bgpY.toString() + 'px' // final declaration

      return styles
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
.carPiece {
  float: left;
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  overflow: hidden;
  background-image: url('../imgs/892231.jpg')
}
.carPiece.hoverP {
  background-image: url('../imgs/892231.jpg') !important;
}
.carX {
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 5% 5%;
  box-sizing: border-box;
  transition: all 600ms ease;
  border-right: 1px solid rgba(255,255,255,0.2);
  opacity: 1;
  border-top: 1px solid rgba(255,255,255,0.2);
  border-bottom: 1px solid rgba(255,255,255,0);
  border-left: 1px solid rgba(255,255,255,0);
  overflow: hidden;
}
.carX:before {
    content: 'A';
    font-size: 100%;
    line-height: 100%;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    color: rgba(255,255,255,0.1);
    font-weight: 300;
    font-style: oblique;
}
.carX.hoverX {
  background-color: rgba(0,0,0,0);
  border: 1px solid rgba(255,255,255,0);
}
.carX.hoverX:before {
    content: '';
}
.carX:hover {
  border: 1px solid rgba(255,255,255,1);
}
</style>
