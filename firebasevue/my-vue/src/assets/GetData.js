import Firebase from 'firebase'

var Msgs = new Firebase('https://6car.firebaseio.com/msgs')

var store = []

var totalblocks = 6000

/* for (var i = 0; i < totalblocks; i++) {
  store.push({
    position: i,
    msg: 0,
    isDim: false
  })
}

Msgs.set(store) */
Msgs.on('child_added', function (snapshot) {
  var item = snapshot.val()
  store.push(item)
})

Msgs.on('child_changed', function (snapshot) {
  var item = snapshot.val()
  console.log(item)
})

export {store}

export {Msgs as path}

export {totalblocks}
