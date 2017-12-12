<template>
  <div class="user">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'user',
    data () {
      return {
        msg: '这是个人页面',
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
