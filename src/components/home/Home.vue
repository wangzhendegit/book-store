<template>
  <div class="home">
    <!--banner-->
    <div class="swiper-container1 swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in imgUrl"><img :src="item" alt=""></div>
      </div>
      <div class="swiper-pagination swiper-pagination1" ></div>
    </div>
    <!--新闻-->
    <div class="swiper-container2 swiper2 news">
      <span class="iconfont">&#xe74e;</span>
      <div class="swiper-wrapper">
        <p class="swiper-slide" v-for="item in newsData">{{item}}</p>
      </div>
    </div>
    <!--<div v-for="item in bookInfo">{{item.name}}</div>-->
    <!--图书列表-->
    <div class="book-list">
      <BookList :bookInfoContent="bookInfoContent" v-for='item in bookAttrTitle' :title="item" :bookInfo="bookInfo" :key="item.id"></BookList>
    </div>
  </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import BookList from '@/components/home/Book'

  export default {
    props:['bookInfo'],
    components:{
      BookList,
    },
    name: 'home',
    data () {
      return {
        bookAttrTitle:['新书上架','编辑推荐','热门新书'],
        msg: '这是首页页面',
        title: '掌上商城',
        imgUrl: ['./../../../static/banner1.png', './../../../static/banner2.png', './../../../static/banner3.png'],
        newsData:['这是新闻一qqqqqqqqqqqqqqqqqqsdah安徽省多拉回家四大皆空施蒂利克骄傲施蒂利克','这是新闻二','这是新闻三','这是新闻四']
      }
    },
    methods: {
      bookInfoContent(index){

      },
      swiperUser(){
//        轮播图
        var mySwiper1 = new Swiper('.swiper-container1', {
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          direction: 'horizontal',
          loop: true,

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination1 .swiper-pagination',
            type:'bullets',
            bulletElement : 'span',
            clickable:'true',
          }
        })
//       新消息轮播
        var mySwiper2 = new Swiper('.swiper-container2',{
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          direction:'vertical',
          loop: true,
          noSwiping : true,
        });
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
  @import "../../common/styles/homeList.less";
</style>
