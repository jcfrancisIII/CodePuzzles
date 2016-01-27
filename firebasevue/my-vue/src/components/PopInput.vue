<template lang='jade'>
  div(class='formWrap')
    form(id='form', v-on:submit.prevent='addItem')
      input(type='radio', id='one', value='1', v-model='picked', checked=false)
      label(for='one') Go Trevor
      input(type='radio', id='two', value='2', v-model='picked', checked=false)
      label(for='two') Yo Trev
      input(type='radio', id='three', value='3', v-model='picked', checked=false)
      label(for='three') Hi T
      div {{said}}
      input(type='submit', value='Claim it')
      ul.errors
        li(v-show='validation.pickDoesntExists') Choose a message to post! Duh.
        li(v-show='validation.positionFull') Oops, someone claimed your square...
          button(v-on:click='open = false') Claim a different square
</template>

<script>
  import {path} from '.././assets/GetData.js'

  export default {
    props: {
      cindex: Number,
      open: Boolean,
      store: Array,
      nubBoxes: Number
    },
    data () {
      return {
        picked: {
        },
        validation: {
          pickDoesntExists: false,
          positionFull: false
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
      isValidPosition () {
        let pickedPosition = this.cindex

        // check database for matching position (truthy if it doesnt match)
        return this.store.every(function (item) {
          console.log(item.position)
          if (item.position !== pickedPosition) {
            return true
          } else {
            return false
          }
        })
      },
      isPicked () {

        // check if they picked a message
        if (this.picked) {
          console.log('pick doesnt exist ' + this.validation.pickDoesntExists)

          return false
        } else {
          return true
        }

      }
    },
    methods: {
      addItem () {
        let picked = parseInt(this.picked, 10) || 0

        // check if they picked a message
        console.log('they did pick a message test ' + this.isPicked)

        if (this.isPicked) {
          this.validation.pickDoesntExists = false
        } else {
          this.validation.pickDoesntExists = true
          return
        }

        // check if the position is open
        console.log(this.cindex + ' ' + this.isValidPosition)
        if (this.isValidPosition) {
          path.push({
            msg: picked,
            position: this.cindex
          }, function (error) {
            if (error) {
              alert('db error: ' + error)
            }
          })

          // reset message pick and open dialog
          this.picked = {}
          this.open = false
        } else {

          // tell them the position was taken
          this.validation.positionFull = true
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
