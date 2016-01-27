<template lang='jade'>
  div(class='formWrap')
    form(id='form', v-on:submit.prevent='addItem')
      input(
        type='radio'
        id='one'
        value='1'
        v-model='picked'
        checked=false
      )
      label(for='one') Go Trevor
      input(
        type='radio'
        id='two'
        value='2'
        v-model='picked'
        checked=false
      )
      label(for='two') Yo Trev
      input(
        type='radio'
        id='three'
        value='3'
        v-model='picked'
        checked=false
      )
      label(for='three') Hi T
      div {{cindex}}
      div {{said}}
      input(type='submit', value='Claim it')
      ul.errors
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
        var pickedPosition = this.cindex
        console.log(pickedPosition)
        // check database for matching position with existing message (truthy if it doesnt match)
        var positionBool = this.store.some(function (item) {
          if (pickedPosition === item.position && item.msg === 0) {
            console.log('true msg ' + item.msg + ' position ' + item.position)
            return true
          }
        })

        return positionBool
      },
      nonePicked () {
        let picked = parseInt(this.picked, 10) || 0

        console.log(picked)
        if (picked) {
          return false
        } else {
          return true
        }
      }
    },
    methods: {
      addItem () {
        let picked = parseInt(this.picked, 10) || 0
        var pickedPosition = this.cindex
        if (picked === 0) { return }
        // check if the position is open
        console.log(this.cindex + ' ' + this.isValidPosition + ' ' + picked)
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
          this.$dispatch('test')
          this.picked = {}
          this.open = false
        }
      }
    }
  }

</script>

<style lang="less">
.formWrap {
  font-size: 30px;
}
</style>
