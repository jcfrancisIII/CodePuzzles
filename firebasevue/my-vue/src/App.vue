<template lang="jade">
  div(class="appWrap")
    get-data(
      v-bind:store='store'
      v-bind:totalblocks='totalblocks'
      v-bind:w='w'
    )
    pre {{$data | json}}
</template>

<script>
import Firebase from 'firebase'
import GetData from './components/GetData'

var Msgs = new Firebase('https://6car.firebaseio.com/msgs')

var store = {
  fetch () {
    const substore = []

    Msgs.on('child_added', function (snapshot) {
      var item = snapshot.val()
      substore.push(item)
    })

    Msgs.on('child_changed', function (snapshot) {
      var item = snapshot.val()
      console.log(item)
    })

    return substore
  }
}
/*
var totalblocks = 6000

 for (var i = 0; i < totalblocks; i++) {
  store.push({
    position: i,
    msg: 0,
    isDim: false
  })
}

Msgs.set(store)

export {Msgs as path}

export {totalblocks}
*/

export default {
  data () {
    return {
      store: store.fetch(),
      totalblocks: 6000,
      w: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }
  },
  components: {
    GetData
  },
  events: {
    test () {
      this.store = store.fetch()
    }
  }

}
</script>

<style lang='less'>
.appWrap {
  margin-top: 50px;
}
</style>
