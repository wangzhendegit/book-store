<template>
  <div class="user">
      <div class="headPortrait-bg"></div>
    <!--头像-->
       <ul>
         <li class="headPortrait">
          <img src="../../assets/f1.jpg"/>
         </li>
         <li class="landRegister">
           <span class="land">登陆</span><span class="register">注册</span>
         </li>
         <li class="slogan">书山有路勤为径，学海无涯苦作舟</li>
       </ul>
    <!--详情选项-->
      <div class="subject">
          <div class="firstInformation">
            <div>设置个人资料<p></p></div>
            <div>收货地址管理<p></p></div>
          </div>
          <div class="secondInformation">
            <div>我的订单<p></p></div>
            <div>我的评价<p></p></div>
          </div>
          <div class="therdInformation">
            <div>商品收藏<p></p></div>
            <div>店铺收藏<p></p></div>
            <div>浏览记录<p></p></div>
          </div>
      </div>
    <!--注册信息提示框-->
    <div class="register">
      <h1>欢迎注册网上图书商城</h1>
      <div class="userInformation">
        <div>
          <label>手机号：</label>
          <input type="tel" placeholder="请输入您的手机号码">
        </div>
        <div>
          <input type="number" placeholder="请输入6位验证码">
          <label>获取验证码</label>
        </div>
        <div>
          <label>昵称：</label>
          <input type="text" placeholder="请输入昵称">
        </div>
        <div>
          <label>密码：</label>
          <input type="password" placeholder="请输入密码">
        </div>
        <div>
          <label>确认密码：</label>
          <input type="password" placeholder="请再次输入密码">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'user',
    data () {
      return {
        msg: '这是个人页面',
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../common/styles/user.less";
</style>
