<template>
  <div class="pahment">
    <header>
      <span class="iconfont" @click="$emit('back')">&#xe6e3;</span>
      <h3>去支付</h3>
      <span class="iconfont"></span>
    </header>
    <div class="pay-box">
      <!--商品信息确认-->
      <div class="ok">
        <h3>商品信息确认</h3>
        <div class="ok-info">
          <ul>
            <li>
              <h5>价格信息</h5>
              <p>商品总价 :<span>{{infoList.zongjia}}</span> </p>
              <p>运送费 :<span>{{infoList.yunsongfei}}</span> </p>
              <h4>订单总计 :<span style="color: #CC6633;font-weight: bold">{{infoList.zongji}}</span> </h4>
            </li>
            <li>
              <h5>收货信息</h5>
              <p>收货地址 :<span>{{infoList.shouhuodizhi}}</span> </p>
              <p>收货人 :<span>{{infoList.shouhuoren}}</span> </p>
              <p>邮编 :<span>{{infoList.youbian}}</span> </p>
              <p>电话 :<span>{{infoList.dianhua}}</span> </p>
            </li>
            <li class="change-address">
              <h5>修改地址</h5>
              <img src="../../../static/right.png" alt="">
            </li>
            <li class="change-address">
              <h5>新增地址</h5>
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
  </div>

</template>
<script>
  export default {
    name: 'pay',
    data(){
      return{
        infoList:{
          "zongjia":"￥ 128.50",
          "yunsongfei":"￥ 10.00",
          "zongji":"￥ 10.00",
          "shouhuodizhi":"四川省 成都市 高新区 锦城大道东段拉德方斯东楼10层2号",
          "shouhuoren":"从来不吃草莓",
          "youbian":"610000",
          "dianhua":"18*****7687",
        },
      }
    }
  }
</script>
<style scoped lang="less">
@import "../../common/styles/pay.less";
</style>
