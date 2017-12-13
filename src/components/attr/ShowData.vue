<template>
  <div class="show">

    <div>
      <ul>
        <li v-for="item in showList" :key="item.id">
          <div class="book-name">{{item.name}}</div>
          <div class="book-author">{{item.author}}</div>
          <div class="book-price">{{item.price}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'attr',
    props: ["showList"],
    data(){
      return {
        photo:''
      }
    }
  }
</script>
<style scoped>

</style>
