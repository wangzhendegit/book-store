<template>

  <!--show页面-->
  <div class="cart">
    <div class="list">
      <div class="edit">
        <div>
          <label><input type="checkbox" checked="checked">全选</label>
        </div>
        <p @click="cartEdit" v-if="status">编辑</p>
        <p v-else @click="cartEdit">完成</p>
      </div>
      <div class="show-cart">
        <ul>
          <li v-for="(role,index) in roleList" :key="role.id">
            <div>
              <label><input type="checkbox"></label>
            </div>
            <img :src="role.photo">
            <div class="right">
              <div class="book-some">
                <h5 class="book-name">{{role.name}}</h5>
                <p class="book-author">{{role.author}}</p>
              </div>
              <div class="book-price-cart">
                <p>{{role.price}}</p>
                <p class="book-cart-num">
                  <button type="button" @click="subNum(index)">-</button>
                  <input type="number"  :value="roleList.num">
                  <button type="button" @click="addNum(index)">+</button>
                </p>
              </div>
            </div>
            <div class="ido">
              <img :src=role.ido alt="">
            </div>
          </li>
        </ul>
        <p>❀没有跟多了❀</p>
      </div>
      <div class="btn">
        <p>合计：<span>￥0.00</span></p>
        <button type="button" @click="" v-if="status" :class="{count: status }">去支付</button>
        <button type="button" v-else :class="{ delete: !status }">删除</button>
      </div>
    </div>
  </div>
    <!--删除页面-->

    <!--支付页面-->
    <!--<div class="pahment" v-if="status2">-->
      <!--<p>2222222</p>-->
    <!--</div>-->


</template>

<script>
  export default {
    name: 'cart',
    data () {
      return {
        status:true,
        roleList:[
          {
            "name": "JavaScript高级程序设计",
            "author": "Nicholas C. Zakas",
            "price":"￥ 99.5",
            "photo":"../../../static/2.png",
            "ido":"../../static/right.png",
          },
          {
            "name": "JVM高级特性与最佳实践（第2版）",
            "author": "周志明",
            "price":"￥ 99.5",
            "photo":"../../../static/1.jpg",
            "ido":"../../static/right.png",
          },
          {
            "name": "JavaScript权威指南（第6版）",
            "author": "David Flanagan",
            "price":"￥ 99.5",
            "photo":"../../../static/3.jpg",
            "ido":"../../static/right.png",
          },
          {
            "name": "JavaScript权威指南（第6版）",
            "author": "David Flanagan",
            "price":"￥ 99.5",
            "photo":"../../../static/3.jpg",
            "ido":"../../static/right.png",
          }
        ],
        cartNum:[],
        num:2
      }
    },
    computed:{
      disClick(){
        if(this.num > 1){
           return true
        }else {
          return false
        }
      }

    },
    methods:{
      subNum(index){
        this.roleList[index].num = this.num;
        console.log(this.roleList)
        return this.roleList[index].num -= 1
      },
      addNum(index){
        return this.num += 1
      },
      cartEdit(){
        this.status = !this.status
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../common/styles/cart.less";
</style>
