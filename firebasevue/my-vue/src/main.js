require('normalize-css')

import Vue from 'vue'
import App from './App'

console.log(App.$data)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
