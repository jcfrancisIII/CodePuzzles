<template lang='jade'>
div(
  class='messageWrap initial-message modal-mask animated'
  v-show='completenoob'
  transition='modal'
)
  div.modal-wrapper
    div.modal-container
      div.messageBlock
        h1 Trevor Bayne’s No. 6 AdvoCare car is here.
        h3 Pick a square and help be a part of the big reveal!
      button(class='modal-btn', v-on:click.prevent='closeNoob') CLAIM YOURS
</template>

<script>

export default {
  props: {
    completenoob: Boolean
  },
  methods: {
    closeNoob () {
      // console.log('complete noob close ' + this.completenoob)
      this.completenoob = false
      localStorage.setItem('localCompleteNoobTest', 'false')
    }
  }
}
</script>

<style lang="less">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.83);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  margin: 0px auto;
  padding: 0;
  background-color: #e2e2e2;
  border: 3px solid #e2e2e2;
  box-sizing: border-box;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  color: #03032E;
  width: 50%;
  min-width: 320px;
  overflow: hidden;
  text-align: center;
}
.messageBlock {
  background-color: #4EC5B9;
  padding: 20px 30px;
  h1 {
    font-weight: 900;
  }
  h3 {
    font-weight: 900;
  }
}
.modal-btn-wrap {
}
.modal-btn {
}
.modal-enter, .modal-leave {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
@charset "UTF-8";
button {
  overflow: hidden;
  position: relative;
  margin: 10px;
  padding: 10px 30px;
  border: 1px solid #F85F5F;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.5), 2px 2px 6px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.5), 2px 2px 6px rgba(0, 0, 0, 0.6);
  box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.5), 2px 2px 6px rgba(0, 0, 0, 0.6);
  background-size: 100%;
  background-image: linear-gradient(-80deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.05) 60%), -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #ff776b), color-stop(25%, #ff5723), color-stop(85%, #ff3e2b), color-stop(100%, #ff5723));
  background-image: -moz-linear-gradient(170deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.05) 60%), -moz-linear-gradient(#ff776b, #ff5723 25%, #ff3e2b 85%, #ff5723);
  background-image: -webkit-linear-gradient(170deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.05) 60%), -webkit-linear-gradient(#ff776b, #ff5723 25%, #ff3e2b 85%, #ff5723);
  background-image: linear-gradient(-80deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.05) 60%), linear-gradient(#ff776b, #ff5723 25%, #ff3e2b 85%, #ff5723);
  background-repeat: repeat-x;
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-size: 21px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  color: #fff;
  cursor: pointer;
}
button:active {
  background-color: #F13C12;
  background-image: none;
  -moz-box-shadow: inset 0 0px 4px rgba(0, 0, 0, 0.15), 1px 1px 4px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: inset 0 0px 4px rgba(0, 0, 0, 0.15), 1px 1px 4px rgba(0, 0, 0, 0.6);
  box-shadow: inset 0 0px 4px rgba(0, 0, 0, 0.15), 1px 1px 4px rgba(0, 0, 0, 0.6);
}
</style>
