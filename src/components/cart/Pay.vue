<template>
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

</template>
<script>
  export default {
    name: 'pay',
    data(){
      return{

      }
    }
  }
</script>
<style scoped>

</style>
