import Firebase from 'firebase'

var Msgs = new Firebase('https://6car.firebaseio.com/msgs')

var store = []

Msgs.on('child_added', function (snapshot) {
  var item = snapshot.val()
  store.push(item)
})

export {store}

export {Msgs as path}
