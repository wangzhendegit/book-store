<template>



  <div class="cart">
    <!--show页面-->
    <div class="show" v-if="status">
      <div class="dele">
        <p class="del"  @click="click">编辑</p>

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

    <div class="pahment" v-if="status2">
      <!--商品信息确认-->
      <div class="ok">
        <h3>商品信息确认</h3>
        <div class="ok-info">
          <ul>
            <li>
              <h5>价格信息</h5>
              <p>商品总价 :<span>{{infoList.total}}</span> </p>
              <p>运送费 :<span>{{infoList.transport}}</span> </p>
              <h5>订单总计 :<span style="color: #CC6633;font-weight: bold">{{infoList.and}}</span> </h5>
            </li>
            <li>
              <h3>收货信息</h3>
              <p>收货地址 :<span>{{infoList.address}}</span> </p>
              <p>收货人 :<span>{{infoList.person}}</span> </p>
              <p>邮编 :<span>{{infoList.zip}}</span> </p>
              <p>电话 :<span>{{infoList.phone}}</span> </p>
            </li>
            <li class="change-address" @click="revise1">
              <h3>修改地址</h3>
              <img src="../../../static/right.png" alt="">
            </li>
            <li class="change-address" @click="revise1">
              <h3>新增地址</h3>
              <img src="../../../static/right.png" alt="">
            </li>
          </ul>

        </div>
      </div>
      <!--选择支付方式-->
      <div class="choess">
        <h3>选择支付方式</h3>
        <div class="choess-list">
          <ul>
            <li>
              <img src="../../../static/V.png" alt="">
              <p>微信支付</p>
            </li>
            <li>
              <img src="../../../static/Z.png" alt="">
              <p>支付宝</p>
            </li>
            <li>
              <img src="../../../static/Y.png" alt="">
              <p>银行卡</p>
            </li>
            <li>
              <img src="../../../static/X.png" alt="">
              <p>信用卡</p>
            </li>
            <li>
              <img src="../../../static/visa.png" alt="">
              <p>VISA</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--修改新增地址-->
    <div class="revise" v-if="revise">
        <ul>
          <li><p>姓名 :<input type="text" placeholder="请填写您的真实姓名"></p></li>
          <li><p>联系电话 : <input type="text" placeholder="请填写我们联系您的电话号码"></p></li>
          <li><p>邮政编码 : <input type="text" placeholder="请填写您所在地区的邮政编码"></p></li>
          <li>
            <form action="myform">
              <select>
                <option value="0">四川</option>
                <option value="1">广州</option>
                <option value="2">广西</option>
                <option value="3">浙江</option>
              </select>
              <select>
                <option value="0">成都市</option>
                <option value="1">德阳市</option>
                <option value="2">绵阳市</option>
                <option value="3">广元市</option>
              </select>
              <select>
                <option value="0">武侯区</option>
                <option value="1">高新区</option>
                <option value="2">双流区</option>
                <option value="3">新都区</option>
              </select>
            </form>
          </li>
          <li><p>详细地址 : <input type="text" placeholder="请填写详细的街道、楼栋、门牌号"></p></li>
        </ul>
      <div class="added">
        <button type="button"><p>确认新增</p></button>
      </div>
    </div>


  </div>
    <!--<div class="pahment" v-if="status2">-->
      <!--<p>2222222</p>-->
    <!--</div>-->


</template>

<script>
  export default {
    name: 'cart',
    data () {
      return {
        revise:false,
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

        infoList:
          {
            "total": "￥ 128.60",
            "transport": "￥ 10",
            "and": "￥ 138.60",
            "address": "四川省 成都市 高新区 锦城大道东段拉德方斯东楼10层2号",
            "person": "从来不吃草莓",
            "zip": "61000",
            "phone": "18******7687"
          }

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

   
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../common/styles/cart.less";
</style>
