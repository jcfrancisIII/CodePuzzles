<template lang='jade'>
h1 {{ title }}
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      title: 'AdvoCare 6 Car'
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
