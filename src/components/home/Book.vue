<template>
  <div>
      <h3>{{title}}</h3>
      <ul>
        <li v-for="(item,index) in bookInfo" :key="item.id" @click="$emit('bookInfoContent',index)">
          <img :src="item.img" alt="">
          <h5>{{item.name}}</h5>
          <p>￥{{item.price | money }}</p>
        </li>
        <!--<li>-->
          <!--<img src="../../../static/book2.jpg" alt="">-->
          <!--<h5>这是一个标题</h5>-->
          <!--<p>$99</p>-->
        <!--</li>-->
        <!--<li>-->
          <!--<img src="../../../static/book3.jpg" alt="">-->
          <!--<h5>这是一个标题</h5>-->
          <!--<p>$99</p>-->
        <!--</li>-->
        <!--<li>-->
          <!--<img src="../../../static/book4.png" alt="">-->
          <!--<h5>这是一个标题</h5>-->
          <!--<p>$99</p>-->
        <!--</li>-->
      </ul>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import filter from '../../common/scripts/filters'
  export default {
    props:['bookInfo','title'],
    name: 'home',
    data () {
      return {}
    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../common/styles/home.less";
</style>
