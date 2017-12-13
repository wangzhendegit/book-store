<template>
  <div class="home">
    <!--banner-->
    <div class="swiper-container banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in imgUrl"><img :src="item" alt=""></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!--新闻-->
    <div class="swiper-container2 news">
      <span class="iconfont">&#xe74e;</span>
      <div class="swiper-wrapper">
        <p class="swiper-slide" v-for="item in newsData">{{item}}</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  export default {
    name: 'home',
    data () {
      return {
        msg: '这是首页页面',
        title: '掌上商城',
        colorList: ['red', 'yellow', 'gray', 'pink'],
        imgUrl: ['./../../../static/banner1.png', './../../../static/banner2.png', './../../../static/banner3.png'],
        newsData:['这是新闻一qqqqqqqqqqqqqqqqqqsdah安徽省多拉回家四大皆空施蒂利克骄傲施蒂利克','这是新闻二','这是新闻三','这是新闻四']
      }
    },
    methods: {
      swiperUser(){
        var mySwiper2 = new Swiper('.swiper-container2',{
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          direction:'vertical',
          loop: true,
        })
        var mySwiper = new Swiper('.swiper-container', {
          //可选选项，自动滑动
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          direction: 'horizontal',
          loop: true,

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            type:'bullets',
            bulletElement : 'span',
            clickable:'true'
          },

          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

        })
      }
    },
    mounted(){
      this.swiperUser();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
  @import "../../common/styles/home.less";
</style>
