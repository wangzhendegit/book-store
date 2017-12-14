<template>
  <div class="show">
    <div>
      <ul v-if='showList.length == 0'>
        <li v-for="role in bookList" :key="role.id">
          <img :src="role.photo">
          <div class="right">
            <h5 class="book-name">{{role.name}}</h5>
            <p class="book-author">{{role.author}}</p>
            <p class="book-price">{{role.price}}</p>
          </div>
          <div class="ido">
            <img :src=role.ido alt="">
          </div>
        </li>
      </ul>

      <ul v-else>
        <li v-for="role in showList" :key="role.id">
          <img :src="role.photo">
          <div class="right">
            <h5 class="book-name">{{role.name}}</h5>
            <p class="book-author">{{role.author}}</p>
            <p class="book-price">{{role.price}}</p>
          </div>
          <!--<div class="ido">-->
          <!--<img :src=role.ido alt="">-->
          <!--</div>-->
        </li>
    </ul>
  </div>
    <p>别滑了，没有了~</p>
  </div>
</template>
<script>

  export default{
    props: ["showList","bookList"],
    data(){
      return {
        photo: ''
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/styles/attr.less";

  @import "../../common/styles/attr.less";
</style>
