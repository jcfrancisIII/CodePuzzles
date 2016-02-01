<template lang='jade'>
  div(
    class='carPiece'
    v-bind:style='addstyles'
    v-on:click='toggleForm(n)'
    v-bind:class='{"hoverP": n.isDim, "selected": this.selected}'
  )
    div.carX
    //-
      div(class='popout' v-if='n.msg')
        {{n.msg === 1 ? 'Sweeeet ride, TB!' : ''}}
        {{n.msg === 2 ? 'Here’s to a winning season!' : ''}}
        {{n.msg === 3 ? 'Can’t wait for race day!' : ''}}
        {{n.msg === 4 ? 'Tear is up, Trevor!' : ''}}
</template>

<script>

export default {
  props: {
    cindex: Number,
    open: Boolean,
    carstylea: Object,
    n: Object,
    totalblocks: Number,
    selected: Boolean
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
      if (n.isDim === false) {
        // console.log('box clicked to claim ' + n.isDim)
        // set parent index to pass to db input
        this.$parent.pindex = n.position

        if (this.open) {
          return false
        }
        this.open = !this.open
      }
    }
  }
}

</script>

<style lang="less">
.carWrap {
  perspective: 1000
}
.carPiece {
  float: left;
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  overflow: hidden;
  background-image: url('../imgs/998822.jpg');
  transition: 0.6s;
  transform-style: preserve-3d;

  cursor: default;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none;   /* Chrome/Safari/Opera */
  -khtml-user-select: none;    /* Konqueror */
  -moz-user-select: none;      /* Firefox */
  -ms-user-select: none;       /* IE/Edge */
  user-select: none;           /* non-prefixed version, currently */
}
.carPiece.hoverP {
  background-image: url('../imgs/892231.jpg') !important;
  transform: rotateY(360deg);
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
  content: '';
  font-size: 108%;
  line-height: 100%;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  color: rgba(255,255,255,0.1);
  font-weight: 300;
  font-family: sans-serif;
  text-align: center;
  margin-left: -2px;
}
.carPiece.hoverP .carX {
  background-color: rgba(0,0,0,0);
  border: 1px solid rgba(255,255,255,0);
}
.carPiece.hoverP .carX:before {
    content: '';
}
.carX:hover, .carPiece.selected .carX {
  border: 1px solid rgba(255,255,255,1);
}
.popout {
  position: absolute;
  width: 300px;
  line-height: 50px;
  bottom: -50px;
  box-sizing: border-box;
  font-size: 30px;
  right: 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  opacity: 0;
  transition: all 0.3s ease;
}
@media only screen and (min-width : 1600px) {
  .carX:before {
    line-height: 126%;
  }
}
</style>
