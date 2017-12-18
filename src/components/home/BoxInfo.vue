<template>
  <div class="box-list">
     <span class="iconfont" @click = "$emit('closeBox')">&#xe660;</span>
    <div class="book-top">
        <div class="book-list-info">
          <div>
            <img :src="clickData.img" alt="">
          </div>
          <ul>
            <li><span>作者</span><span>{{clickData.author}}</span></li>
            <li><span>页数</span><span>730</span></li>
            <li><span>书号</span><span>B00CBBJS5Y</span></li>
            <li><span>出版日期</span><span>2012年3月1日</span></li>
            <li @click="$emit('clickDetails')">详情></li>
          </ul>
        </div>
        <div class="book-del">
          <h5>{{clickData.name}}</h5>
          <div>
            <p>{{clickData.describe}}</p>
          </div>
        </div>
        <div class="book-price">
          <div>￥{{clickData.price | money}}</div>
          <div>1本</div>
        </div>
        <div class="box-btn">
          <span @click="$emit('joinCart')" >加入购车</span>
          <span>立即购买</span>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    props:['bookInfo','clickData'],
    name: 'home',
    data () {
      return {}
    },
    methods:{
//      joinCart(clickData){
//        var arr;
//        if(localStorage.cartBook){
//          arr = JSON.parse(localStorage.cartBook)
//        }else {
//          arr = []
//        }
//        clickData.checked = false;
//        clickData.productNum = 1;
//        for(var i=0; i<arr.length;i++){
//          if(arr[i].id === clickData.id){
//            return alert('已经添加过该商品了')
//          }
//        }
//        arr.push(clickData)
//
//        localStorage.cartBook = JSON.stringify(arr);
//        alert('成功添加到购物车')
//        this.$router.push({path:'/cart'})
//      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../common/styles/home.less";
</style>
