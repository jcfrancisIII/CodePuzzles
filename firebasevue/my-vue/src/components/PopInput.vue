<template lang='jade'>
div(
    class='modal-mask'
    v-show='open'
    transition='modal'
  )
  div.modal-wrapper
    div.modal-container
      a(
        class='closeBtn'
        v-on:click='closeWindow'
      ) ×
      form(id='form', v-on:submit.prevent='addItem')
        div.selectWrap
          //-
            select(v-model='picked')
              option(
                id='one'
                value='1'
                selected
              ) Sweeeet ride, TB!
              option(
                id='two'
                value='2'
              ) Here’s to a winning season!
              option(
                id='three'
                value='3'
              ) Can’t wait for race day!
              option(
                id='four'
                value='4'
              ) Tear is up, Trevor!
            div {{cindex}}
            div {{said}}
          button REVEAL THIS SPOT
          ul.errors
            li(v-show='validation.positionFull') Oops, someone claimed your square...
              button(v-on:click='open = false') Claim a different square
</template>

<script>
  import Firebase from 'firebase'
  // set up the path again for writing
  var path = new Firebase('https://6car.firebaseio.com/msgs')

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
          positionFull: false
        }
      }
    },
    computed: {
      said () {
        let picked = this.picked

        if (picked === '1') {
          return 'Sweeeet ride, TB!'
        } else if (picked === '2') {
          return 'Here’s to a winning season!'
        } else if (picked === '3') {
          return 'Can’t wait for race day!'
        } else if (picked === '4') {
          return 'Tear is up, Trevor!'
        }
      },
      isValidPosition () {
        var pickedPosition = this.cindex
        // console.log(`picked position ${pickedPosition}`)
        // check database for matching position with existing message (truthy if it doesnt match)
        var positionBool = this.store.some(function (item) {
          if (pickedPosition === item.position && item.msg === 0) {
            return true
          }
        })

        return positionBool
      },
      nonePicked () {
        let picked = parseInt(this.picked, 10) || 0

        // console.log(`nonepicked computed in popinput ${picked}`)
        if (picked) {
          return false
        } else {
          return true
        }
      }
    },
    methods: {
      addItem () {
        // console.log(this.picked)
        // console.log(this.cindex)
        let picked = parseInt(this.picked, 10) || 0
        var pickedPosition = this.cindex
        // remove code for message if (picked === 0) { return }
        // console.log('message blank' + picked)
        // console.log('position' + this.cindex)

        // check if the position is open
        // console.log('add item in popinput. position:' + this.cindex + ' validity: ' + this.isValidPosition + ' pick: ' + picked)
        if (this.isValidPosition) {
          path.child(pickedPosition).set({
            position: this.cindex,
            msg: picked,
            isDim: true
          }, function (error) {
            if (error) {
              alert('db error: ' + error)
            }
          })
          // reset message pick and open dialog
          this.picked = {}
          this.open = false
          // set local store for next visit
          localStorage.setItem('localNoobTest', 'false')
          this.$dispatch('noob')
        }
      },
      closeWindow () {
        this.open = false
      }
    }
  }

</script>

<style lang="less">
  .modal-container {
    position: relative;
    .closeBtn {
      font-size: 33px;
      position: absolute;
      top: 0px;
      right: 0px;
      color: #333;
      padding: 9px;
      transition: all 0.3s ease;
      line-height: 0.5em;
      &:hover {
        cursor: pointer;
        color: #ff3e2b;
      }
    }
    ul {
      margin: 0;
    }
  }
</style>
