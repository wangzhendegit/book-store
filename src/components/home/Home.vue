<template>
  <div class="home">
    <!--弹窗-->
    <transition name="fade">
      <BoxInfo
        :clickData='clickData'
        @closeBox="closeBox"
        v-if="hiddenBoxStatus"
        @clickDetails="clickDetails"
      ></BoxInfo>
    </transition>
    <!--书籍详情页面-->
    <transition name="slide-fade">
      <BookDetails
        v-if="showBook"
        @backHome="backHome"
        :clickData='clickData'
      ></BookDetails>
    </transition>
    <!--banner-->
    <div class="swiper-container1 swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in imgUrl"><img :src="item" alt=""></div>
      </div>
      <div class="swiper-pagination swiper-pagination1"></div>
    </div>

    <!--新闻-->
    <div class="swiper-container2 swiper2 news">
      <span class="iconfont">&#xe74e;</span>
      <div class="swiper-wrapper">
        <p class="swiper-slide" v-for="item in newsData">{{item}}</p>
      </div>
    </div>

    <!--图书列表-->
    <div class="book-list">
      <BookList
        v-for='item in bookAttrTitle'
        @bookInfoContent="bookInfoContent"
        :title="item"
        :bookInfo="bookInfo"
        :key="item.id">
      </BookList>
    </div>

  </div>
</template>

<script>
  import Swiper from 'swiper';
  import BookDetails from '@/components/home/BookDetails'
  import BoxInfo from '@/components/home/BoxInfo'
  import BookList from '@/components/home/Book'

  export default {
    props: ['bookInfo', 'BoxInfo'],
    components: {
      BookList,
      BoxInfo,
      BookDetails
    },
    name: 'home',
    data () {
      return {
        clickData:'',
        showBook:false,
        hiddenBoxStatus: false,
        bookAttrTitle: ['新书上架', '编辑推荐', '热门新书'],
        title: '掌上商城',
        imgUrl: ['./../../../static/banner1.png', './../../../static/banner2.png', './../../../static/banner3.png'],
        newsData: ['这是新闻一安徽省多拉回家四大皆空施蒂利克骄傲施蒂利克', '这是新闻二', '这是新闻三', '这是新闻四']
      }
    },
    methods: {
      bookInfoContent(index){
        this.clickData = this.bookInfo[index];
        this.hiddenBoxStatus = true
      },
      closeBox(){
        this.hiddenBoxStatus = false
      },
      backHome(){
        this.showBook = false;
      },
      clickDetails(){
        this.hiddenBoxStatus = false
        this.showBook = true;
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
            type: 'bullets',
            bulletElement: 'span',
            clickable: 'true',
          }
        })
//       新消息轮播
        var mySwiper2 = new Swiper('.swiper-container2', {
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          direction: 'vertical',
          loop: true,
          noSwiping: true,
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
</style>
