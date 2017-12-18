<template>

  <!--show页面-->
  <div class="cart">
    <div class="list" v-if="bookList.length != 0">
      <div class="edit">
        <div @click="checkedClickAll ">
          <span class="iconfont" v-if="checkedAll" :class="{'checkedList':checkedAll}">&#xe665;</span>
          <span class="iconfont" v-else>&#xe614;</span> 全选
        </div>
        <p @click="cartEdit" v-if="status">编辑</p>
        <p v-else @click="cartEdit">完成</p>
      </div>
      <div class="show-cart">
        <ul>
          <li v-for="(item,index) in bookList" :key="item.id" @click="clickBookList(item)">
            <div @click.stop="selectedProduct(item)">
              <span class="iconfont" v-if="item.checked" :class="{'checkedList':item.checked}">&#xe665;</span>
              <span class="iconfont" v-else :class="{'noCheckedList':!item.checked}">&#xe614;</span>
            </div>
            <img :src="item.img">
            <div class="right">
              <div class="book-some">
                <h5 class="book-name">{{item.name}}</h5>
                <p class="book-author">{{item.author}}</p>
              </div>
              <div class="book-price-cart">
                <p>￥{{item.price | money }}</p>
                <p class="book-cart-num">
                  <button type="button" @click.stop="changNum(item,-1,$event)"
                          :class="{isClick:disableBtn(item.productNum,item.repertory,-1)}" class="iconfont">
                    &#xe666;</button>
                  <input type="number" v-model="item.productNum">
                  <button type="button" @click.stop="changNum(item,1,$event)" class="iconfont" :class="{isClick:disableBtn(item.productNum,item.repertory,1)}">&#xe64f;</button>
                </p>
              </div>
            </div>
            <div class="ido">
              <img src="../../../static/right.png" alt="">
            </div>
          </li>
        </ul>
        <p>❀没有跟多了❀</p>
      </div>
      <div class="btn">
        <p v-if="status">合计：<span>￥{{totalPrice | money }}</span></p>
        <p v-else style="color: #999">请选择需要删除的书籍</p>
        <button type="button" @click="goPay" v-if="status" :class="{count: status }">去支付</button>
        <button type="button" v-else :class="{ delete: !status }" @click="deleteClick()">删除</button>
      </div>

    </div>
    <div v-else class="cart-null">
      <p>购物车空空如也~</p>
      <router-link tag="button" type="button" :to="{name:'home',params:{title:'掌上书城',icon:'1'}}">去逛逛</router-link>
    </div>
    <transition name="slide-fade">
    <GoPay
      v-if="showPay"
      @back="back"
    ></GoPay>
  </transition>
    <transition name="slide-fade">
      <BookDetails
        @joinCart="joinCart(clickData)"
        :clickData="clickData"
        v-if="showBook"
        @back="backCart">
      </BookDetails>
    </transition>
  </div>


</template>

<script>
  import {mapState, mapMutations, mapGetters} from 'vuex'
  //  import Vue from 'vue'
  import GoPay from '@/components/cart/pay'
  import BookDetails from '@/components/home/BookDetails'
  import filter from '../../common/scripts/filters'
  export default {
    name: 'cart',
    components: {
      GoPay,
      BookDetails
    },
    data () {
      return {
        clickData:[],
        deleteBook:[],
        showBook:false,
        disableButton: false,
        totalPrice: 0,
        checkedAll: false,
        total: '',
        showPay: false,
        status: true,
        bookList: [
//          {
//            name: "JavaScript高级程序设计",
//            author: "Nicholas C. Zakas",
//            price: 10,
//            img: "../../../static/2.png",
//            checked: false,
//            productNum: 4,
//            repertory: 4
//          },
//          {
//            name: "JVM高级特性与最佳实践（第2版）",
//            author: "周志明",
//            price: 10,
//            img: "../../../static/1.jpg",
//            checked: false,
//            productNum: 1,
//            repertory: 22
//
//          },
//          {
//            name: "JavaScript权威指南（第6版）",
//            author: "David Flanagan",
//            price: 29.5,
//            img: "../../../static/3.jpg",
//            checked: false,
//            productNum: 3,
//            repertory: 33
//
//          },
//          {
//            name: "JavaScript权威指南（第6版）",
//            author: "David Flanagan",
//            price: 91.01,
//            img: "../../../static/3.jpg",
//            checked: false,
//            productNum: 4,
//            repertory: 6
//          }
        ]
      }
    },
    computed: {
      //    写法一
//      ...mapState(['data']),
//      ...mapGetters(['count']),
//      backTotal(index){
//        var val = 0;
//        if(this.checked){
//          val += parseFloat(this.bookList.price) * parseFloat(this.bookList.num)
//        }
//       val = val.toFixed(2);
//       return val
//      }

    },
    methods: {
      getDataBook(){
        this.bookList = JSON.parse(localStorage.joinCartBook)
      },
//      ==================== 此段代码多处使用后期需要合并优化===============================
      joinCart(clickData){
        var arr;
        if(localStorage.joinCartBook){
          arr = JSON.parse(localStorage.joinCartBook)
        }else {
          arr = []
        }
        clickData.checked = false;
        clickData.productNum = 1;
        for(var i=0; i<arr.length;i++){
          if(arr[i].id === clickData.id){
            return alert('已经添加过该商品了')
          }
        }
        arr.push(clickData)

        localStorage.joinCartBook = JSON.stringify(arr);
        alert('成功添加到购物车')
        this.$router.push({path:'/cart'})
      },
    //      ==================== 此段代码多处使用后期需要合并优化===============================
//      删除事件
      deleteClick(){
        let len = 0;
        let index = 0;
        console.log(this.bookList)
        this.bookList.forEach((item,idx) => {
          if(item.checked){
            len++
          }
        });
        if(len===0){
          alert('你还没有选中要删除的商品')
        }
        console.log(len)
        while (len){
          if(this.bookList[index].checked){
            this.bookList.splice(index,1)
            len--
          }else {
            index++
          }
        }
//        数据删除后存储一下数据
        localStorage.joinCartBook = JSON.stringify(this.bookList);
      },
//      传递本次点击的页面数据
      clickBookList(item){
        this.clickData = item;
        this.showBook = true;
      },
      backCart(){
        this.showBook = false;
      },
//      处理件数最少和最大的情况
      disableBtn(item, rep, idx){
//        最少时候数据处理
        if (idx === -1) {
          if (item === 1) {
            return true
          } else {
            return
          }
//          最大时候的数据处理
        } else if (idx === 1) {
          if (item === rep) {
            return true
          } else {
            return
          }
        }
      },
//      点击加减按钮
      changNum(product, way, event){
        if(event)event.preventDefault();
//        判断是家还是减
        if (way > 0) {
          if (product.productNum >= product.repertory) {
            alert('哎呀~已经是最大库存量了~')
            return
          }
          product.productNum++;
        } else {
          if (product.productNum <= 1) {
            alert('最少也要买一件啊~')
            return
          }
          product.productNum--;
        }
        this.calcTotal()
      },
//      选择每一个书籍列表
      selectedProduct(item){
//        判断item里面的数据是否有checked，如果没有就在当前item数据中添加
        if (typeof item.checked === 'undefined') {
//          全局添加
//          Vue.set(item,'checked',true)
//          局部添加
          this.$set(item, 'checked', false)
        } else {
          item.checked = !item.checked
        }
//        在选ze状态下取消一个选项，全选变成未选中
        if (!item.checked) {
          this.checkedAll = false
        }
//        循环列表，如果列表为全选中，那么全选按钮变成选中,采用计数的方式，如果最后得到的数据和len相等，说明已经全选
        let len = this.bookList.length;
        let lenNum = 0
        for (var i = 0; i < len; i++) {
          if (this.bookList[i].checked) {
            lenNum += 1
          }
        }
        if (lenNum === len) {
          this.checkedAll = true
        }
        this.calcTotal()
      },
//      全选按钮函数
      checkedClickAll(){
        var _this = this
        this.checkedAll = !this.checkedAll;
        this.bookList.forEach(function (val, index) {
          if (typeof val.checked === 'undefined') {
//          全局添加
//          Vue.set(item,'checked',true)
//          局部添加
            _this.$set(val, 'checked', _this.checkedAll)
          } else {
            val.checked = _this.checkedAll
          }
        })
        this.calcTotal()
      },
//      计算总价函数
      calcTotal(){
        var _this = this;
        this.totalPrice = 0;
        this.bookList.forEach(function (item, index) {
          if (item.checked) {
            _this.totalPrice += item.price * item.productNum
          }
        })
      },
//      编辑按钮
      cartEdit(){
        this.status = !this.status
        this.bookList.forEach(function (val, index) {
          if (typeof val.checked === 'undefined') {
//          全局添加
//          Vue.set(item,'checked',true)
//          局部添加
            _this.$set(val, 'checked', false)
          } else {
            val.checked = false
          }
        })
        this.checkedAll = false;
      },
//      点击去支付后的返回按钮
      back(){
        this.showPay = false
      },
//      去支付按钮
      goPay(){
        this.showPay = true
      }
    },
    mounted: function () {
      this.getDataBook()
    }

//    vuex写法二
//    computed:mapState({
//      count:function (state) {
//         return state.data
//      }
//    }),
//    computed:{
//      count(){
//        return this.$store.state.data
//      },
//      disClick(){
//        if(this.num > 1){
//           return true
//        }else {
//          return false
//        }
//      },
//
//    },

//    局部过滤器使用
//    filters: {
//      money: function (value) {
//        if (!value) return ''
//        value = parseFloat(value)
//        return value.toFixed(2)
//      }
//    }

  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../common/styles/cart.less";
</style>
