import Firebase from 'firebase'
import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

var Msgs = new Firebase('https://6car.firebaseio.com/msgs')

const itemsCache = Object.create(null)

const store = new EventEmitter()

var totalblocks = 6000

/* for (var i = 0; i < totalblocks; i++) {
  store.push({
    position: i,
    msg: 0,
    isDim: false
  })
}

Msgs.set(store) */

const api = new Firebase('https://hacker-news.firebaseio.com/v0')
const store = new EventEmitter()

export default store

/**
 * Subscribe to real time updates of the top 100 stories,
 * and cache the IDs locally.
 */

api.child('topstories').on('value', snapshot => {
  topStoryIds = snapshot.val()
  store.emit('topstories-updated')
})

/**
 * Fetch an item data with given id.
 *
 * @param {Number} id
 * @return {Promise}
 */

store.fetchItem = () => {
  return api.child('item/' + id).once('value', snapshot => {
        const story = snapshot.val()
        resolve(story)
      }, reject)
}

/**
 * Fetch the given list of items.
 *
 * @param {Array<Number>} ids
 * @return {Promise}
 */

store.fetchItems = ids => {
  if (!ids || !ids.length) {
    return Promise.resolve([])
  } else {
    return Promise.all(ids.map(id => store.fetchItem(id)))
  }
}

Msgs.on('child_added', function (snapshot) {
  var item = snapshot.val()
  store.push(item)
})

Msgs.on('child_changed', function (snapshot) {
  var item = snapshot.val()
  console.log(item)
})

export {Msgs as path}

export {totalblocks}


