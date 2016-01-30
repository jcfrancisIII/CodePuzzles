<template lang='jade'>
  template(v-if='noob && open')
    pop-input(
      v-bind:cindex='pindex'
      v-bind:open.sync='open'
      v-bind:store='store'
      v-bind:nubBoxes='nubBoxes'
    )
  div#carWrap.row(v-bind:style='{width: this.w + "px"}')
    div(
      class='carPiece'
      v-el='carPiece'
      v-for='n in store'
      v-bind:index='$index'
      v-bind:class='{"hoverP": n.isDim, "selected": this.selectBox(n)}'
      v-bind:style='carStyleA'
      track-by='$index'
      v-on:click='toggleForm($index)'
    )
      div.carX
      //-
        div(class='popout' v-if='n.msg')
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
    },
    carStyleA () {
      var bgW = this.w
      // Use source image 2000 x 1333 to get the aspect ratio 0.6665
      var bgH = parseInt(bgW * 0.6665, 10)
      var divisions = this.totalblocks

      // Start looking for the width and height of the car pieces
      var area = bgW * bgH
      var blockArea = parseInt(area / divisions, 10)

      var blockSide = parseInt(Math.sqrt(blockArea), 10)

      console.log(blockSide)

      return {
        width: blockSide.toString() + 'px',
        'padding-bottom': blockSide.toString() + 'px',
        'background-size': bgW.toString() + 'px ' + bgH.toString() + 'px'
      }
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
    },
    selectBox (n) {
      // console.log(n.isDim)
      return false
    }
  },
  ready () {
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
#carWrap {
  width: 100%;
}
.carPiece {
  float: left;
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  overflow: hidden;
  background-image: url('../imgs/998822.jpg')
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
