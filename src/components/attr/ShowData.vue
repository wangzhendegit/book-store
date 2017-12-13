<template>
  <div class="show">

    <div>
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
            </div>
          </div>

        </li>
        <li v-for="item in showList" :key="item.id" v-else>
          <img :src="item.photo" alt="">
          <div class="right clearFloat">
            <div class="book-name">{{item.name}}</div>
            <div class="book-author">{{item.author}}</div>
            <div class="book-price">{{item.price}}</div>
            <div class="ido">
              <img :src=item.ido alt="">
            </div>
          </div>


    <div>
      <ul>
        <li v-for="role in bookList" :key="role.id" v-if='showList.length == 0'>
          <img :src='role.photo'>
          <div class="book-name">{{role.name}}</div>
          <div class="book-author">{{role.author}}</div>
          <div class="book-price">{{role.price}}</div>
        </li>
        <li v-for="item in showList" :key="item.id" v-else>
>>>>>>> 196eeb6ba9f3908373b5953c1cb73b41f5242868
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
<<<<<<< HEAD
=======

    props: ["showList",'bookList']
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
    @import "../../common/styles/attr.less";
>>>>>>> 196eeb6ba9f3908373b5953c1cb73b41f5242868
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
