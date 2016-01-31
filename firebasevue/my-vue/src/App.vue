<template lang="jade">
  div(class="appWrap")
    div(
      class='messageWrap initial-message modal-mask'
      v-if='completeNoob'
      transition='modal'
    )
      div.modal-wrapper
        div.modal-container
          div(class='messageBlock').
            Help us reveal the Trevor Bayne 6 Car
          a(v-on:click.prevent='closeNoob') CLAIM YOURS
    pop-blocks-wrap(
      v-bind:store='store'
      v-bind:totalblocks='totalblocks'
      v-bind:w='w'
      v-bind:noob='noob'
    )
    pre {{$data | json}}
</template>

<script>
import Firebase from 'firebase'
import PopBlocksWrap from './components/PopBlocksWrap'
import PopTriggers from './components/PopTriggers'
import {localNoobTest} from './assets/localNoobTest.js'

var Msgs = new Firebase('https://6car.firebaseio.com/msgs')

var store = {
  fetch () {
    var substore = []

    Msgs.on('child_added', function (snapshot) {
      var item = snapshot.val()
      substore.push(item)
    })

    Msgs.on('child_changed', function (snapshot) {
      var itemKey = snapshot.key()
      itemKey = parseInt(itemKey, 10)
      var itemVal = snapshot.val()
      console.log(`changed item key ${JSON.stringify(substore[itemKey])}`)
      substore.$set(itemKey, itemVal)
      console.log(`changed item key ${JSON.stringify(substore[itemKey])}`)
    })

    return substore
  }
}
/* set up the store with all of the blocks needed to make the car
var store = []
var totalblocks = 3000

for (var i = 0; i < totalblocks; i++) {
  store.push({
    position: i,
    msg: 0,
    isDim: false
  })
}

Msgs.set(store)

export {totalblocks}
*/

// helper style funciton
var setStyle = function (obj, propertyObj) {
  for (var property in propertyObj) {
    obj.style[property] = propertyObj[property]
  }
}
// end helper style funciton
//

export default {
  data () {
    return {
      store: store.fetch(),
      totalblocks: 3000,
      w: this.measureW() || 0,
      noob: localNoobTest.isNoob(),
      completeNoob: localNoobTest.isCompleteNoob()
    }
  },
  components: {
    PopTriggers,
    PopBlocksWrap
  },
  computed: {
  },
  methods: {
    measureW () {
      this.$nextTick(function () {
        var wWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

        // measure scrollbar
        var scrollDiv = document.createElement('div')
        setStyle(scrollDiv, { width: '100px', height: '100px', overflow: 'scroll', position: 'absolute', top: '-9999px'})
        document.body.appendChild(scrollDiv)

        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
        document.body.removeChild(scrollDiv)
        // measure scrollbar
        //

        // Fix math for the car pieces to fit the scrollbar
        this.w = wWidth - scrollbarWidth
        console.log('window ' + this.w)
      })
    },
    closeNoob () {
      console.log('complete noob close' + this.completeNoob)
      this.completeNoob = !this.completeNoob
    }
  },
  events: {
    noob () {
      this.noob = localNoobTest.isNoob()
      console.log('dispatched event noob. insure consistent values: ' + this.noob + ' vs ' + localNoobTest.isNoob())
    }
  },
  ready () {
    // Set completeNoob to false after inial visit
    localStorage.setItem('localCompleteNoobTest', 'false')

  }
}
</script>

<style lang='less'>
html { overflow-y: scroll; }
body {
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #060608;
}
pre {
  color: #fff;
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .97);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  color: #333;
}
</style>
