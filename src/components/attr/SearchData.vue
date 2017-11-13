<template>
  <div class="search">
    <div class="searchBox">
      <input type="search" :placeholder="placeholder" @keyup="$emit('valueToPatent',$event.target.value)"/>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'attr',
    props:['placeholder'],
    data(){
      return{
        text:"Java"
      }
    }
  }
</script>
<style scoped>

</style>
