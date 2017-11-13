<template>
  <div class="show">
    <div>
      <ul>
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

        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'attr',
    props: ["showList",'bookList']
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
    @import "../../common/styles/attr.less";
</style>
