<template lang='jade'>
  div(class='formWrap')
    form(id='form', v-on:submit.stop.prevent='addItem')
      input(type='radio', id='one', value='1', v-model='picked', checked=false)
      label(for='one') Go Trevor
      input(type='radio', id='two', value='2', v-model='picked', checked=false)
      label(for='two') Yo Trev
      input(type='radio', id='three', value='3', v-model='picked', checked=false)
      label(for='three') Hi T
      div {{said}}
      input(type='submit', value='Claim it')
</template>

<script>
  import {path} from '.././assets/GetData.js'

  export default {
    props: {
      cindex: Number,
      open: Boolean,
      store: Array
    },
    data () {
      return {
        picked: {
        }
      }
    },
    computed: {
      said () {
        let picked = this.picked

        if (picked === '1') {
          return 'Go Trevor'
        } else if (picked === '2') {
          return 'Yo Trev'
        } else if (picked === '3') {
          return 'Hi T'
        }
      },
      isValidId () {
        return true
      }
    },
    methods: {
      addItem () {
        if (this.isValidId) {
          path.push({
            msg: this.picked,
            position: this.cindex
          }, function (error) {
            if (error) {
              alert('db error: ' + error)
            } else {
              console.log(this.store[this.store.length - 1].msg)
            }
          }.bind(this))

          this.picked = {}
          this.open = false
        }
      }
    }
  }

</script>

<style lang="less">
.hello {
  h1 {
    font-size: 50px;
  }
}
</style>
