<template id='popinput' lang='jade'>
div(class='formWrap')
  form(id='form', v-on:submit.prevent='addItem')
    - var valOne = 'Go Trevor'
    - var valTwo = 'Yo Trev'
    - var valThree = 'Hi T'
    input(type='radio', id='one', value=valOne, v-model='picked', checked=false)
    label(for='one')= valOne
    input(type='radio', id='two', value=valTwo, v-model='picked', checked=false)
    label(for='two')= valTwo
    input(type='radio', id='three', value=valThree, v-model='picked', checked=false)
    label(for='three')= valThree
    div {{typeof picked === 'string' ? picked : ''}}
    input(type='submit', value='Claim it')
</template>

<script>
  import Vue from 'vue'
  import Firebase from 'firebase'

  /**
   * Setup firebase sync
   */
  var baseURL = 'https://6car.firebaseIO.com/'
  var Msgs = new Firebase(baseURL + 'msgs')

  /**
   * Create Vue app
   */
  var popinput = Vue.component(popinput, {
    template: '#popinput',
    // initial data
    data: function () {
      return {
        picked: {
        }
      }
    },
    methods: {
      addItem: function () {
        console.log('additem submit')
        Msgs.push({
          msg: this.picked,
          id: 'one'
        })
        this.picked = {}
      }
    }
  })

  export default popinput

</script>

<style lang="less">
.hello {
  h1 {
    font-size: 50px;
  }
}
</style>
