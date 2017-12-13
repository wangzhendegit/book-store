<template>
  <div class="show">
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
    </ul>
  </div>
</template>
<script>

  export default{
    props: ["showList"],
    data(){
      return {
        photo: ''
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">

  @import "../../common/styles/attr.less";

</style>
