<template>
  <div class="show">
<<<<<<< HEAD
    <div>
      <ul v-if='showList.length == 0'>
        <li v-for="role in bookList" :key="role.id">
          <img :src="role.photo">
          <div class="right clearFloat">
            <div class="book-name">{{role.name}}</div>
            <div class="book-author">{{role.author}}</div>
            <div class="book-price">{{role.price}}</div>
            <div class="ido">
              <img :src=role.ido alt="">
            </div>
          </div>
        </li>

      </ul>

      <ul v-else>
        <li v-for="item in showList" :key="item.id">
          <img :src="item.photo" alt="">
          <div class="right clearFloat">
            <div class="book-name">{{item.name}}</div>
            <div class="book-author">{{item.author}}</div>
            <div class="book-price">{{item.price}}</div>
            <div class="ido">
              <img :src=item.ido alt="">
            </div>
=======
    <ul>
      <li v-for="item in showList" :key="item.id">

      <li v-for="role in bookList" :key="role.id" v-if='showList.length == 0'>
        <img :src="role.photo">
        <div class="right clearFloat">
          <div class="book-name">{{role.name}}</div>
          <div class="book-author">{{role.author}}</div>
          <div class="book-price">{{role.price}}</div>
          <div class="ido">
            <img :src=role.ido alt="">
>>>>>>> a93626a88d5e4af77db6817af59ffb72ccf7f133
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
<<<<<<< HEAD
  export default {
    name: 'attr',
    props: ["showList", 'bookList']
=======

  export default{
    props: ["showList"],
    data(){
      return {
        photo: ''
      }
    }

>>>>>>> a93626a88d5e4af77db6817af59ffb72ccf7f133
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
<<<<<<< HEAD
  @import "../../common/styles/attr.less";
=======

  @import "../../common/styles/attr.less";

>>>>>>> a93626a88d5e4af77db6817af59ffb72ccf7f133
</style>
