<template>
  <div class="show">
    <div>
      <!--用v-if去判断传进来的showList的长度是否为0 如果为零表示没有在搜索状态，显示默认的数据列表bookList，如果不为零那么就显示过滤之后穿过的的showList-->
      <ul v-if='showList.length == 0'>
        <li v-for="(role,index) in bookList" :key="role.id" @click="$emit('clickBook',index)">
          <img :src="role.img">
          <div class="right">
            <h5 class="book-name">{{role.name}}</h5>
            <p class="book-author">{{role.author}}</p>
            <p class="book-price">￥{{role.price}}</p>
          </div>
          <div class="ido">
            <img src='../../../static/right.png' alt="">
          </div>
        </li>
      </ul>

      <ul v-else>
        <li v-for="(role,index) in showList" :key="role.id" @click="$emit('clickBook',index)">
          <img :src="role.img">
          <div class="right">
            <h5 class="book-name">{{role.name}}</h5>
            <p class="book-author">{{role.author}}</p>
            <p class="book-price">￥{{role.price}}.00</p>
          </div>
          <div class="ido">
            <img src='../../../static/right.png' alt="">
          </div>
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

</style>
