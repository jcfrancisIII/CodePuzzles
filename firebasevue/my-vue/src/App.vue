<template lang="jade">
  div(class="appWrap")
    pop-triggers(
      v-bind:store='store'
      v-bind:totalblocks='totalblocks'
      v-bind:w='w'
    )
    pre {{$data | json}}
</template>

<script>
import Firebase from 'firebase'
import PopTriggers from './components/PopTriggers'

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
/*
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

export default {
  data () {
    return {
      store: store.fetch(),
      totalblocks: 3000,
      w: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }
  },
  components: {
    PopTriggers
  },
  events: {
    test () {
      // this.store = store.fetch()
    }
  },
  watch: {
    store: {
      handler (val, oVal) {
        // console.log('handled ' + JSON.stringify(val) + ' old \n \n' + JSON.stringify(oVal))
      }
    }
  }

}
</script>

<style lang='less'>
body {
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  width: 100%;
  height: 100%;
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
.appWrap {
  margin-top: 50px;
}
</style>
