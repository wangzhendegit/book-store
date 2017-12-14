<template>
  <div class="user">
      <div class="headPortrait-bg"></div>
    <!--头像-->
       <ul>
         <li class="headPortrait">
          <img src="../../assets/f1.jpg"/>
         </li>
         <li class="landRegister">
           <span class="land" v-on:click="register('state')">登陆</span><span class="register"  v-on:click="register('state1')">注册</span>
         </li>
         <li class="slogan">书山有路勤为径，学海无涯苦作舟</li>
       </ul>
    <!--详情选项-->
      <div class="subject">
          <div class="firstInformation">
            <div>设置个人资料<p v-on:click="displaydata"></p></div>
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
    <div class="registerBox" v-if="state1">
      <h1>欢迎注册网上图书商城</h1>
      <div class="userInformation">
        <div>
          <label>手机号&nbsp&nbsp：</label>
          <input type="tel" placeholder="请输入您的手机号码" maxlength="11" v-model="tel" @blur="
          validData(
            $event.target,
            /^1\d{10}$/
          )">
          <p style="display: none">您输入的手机号码有误</p>
        </div>
        <div>
          <input type="text" placeholder="请输入6位验证码" class="verificationCode" v-model="erification" name="verificam" @blur="
          validData(
            $event.target,
            'verificam'
          )">
          <label class="verificationButtom ">获取验证码</label>
          <p style="display: none">您输入的验证码有误</p>
        </div>
        <div>
          <label>昵称&nbsp&nbsp&nbsp&nbsp:&nbsp&nbsp&nbsp&nbsp</label>
          <input type="text" placeholder="请输入昵称" v-model="nickname" v-on:blur="validData(
            $event.target,
            /^[\u4e00-\u9fa5a-zA-Z0-9_]+$/
          )">
          <p style="display: none">您输入的昵称不符合规范</p>
        </div>
        <div>
          <label>密码&nbsp&nbsp&nbsp&nbsp:&nbsp&nbsp&nbsp&nbsp</label>
          <input type="password" placeholder="请输入密码" v-on:blur="validData(
            $event.target,
            /^(?=.{6,16}$)(?![0-9]+$)(?!.*(.).*\1)[0-9a-zA-Z]+$/
          )" v-model="pas">
          <p style="display: none">您输入的密码有误</p>
        </div>
        <div>
          <label>确认密码：</label>
          <input type="password" placeholder="请再次输入密码" v-model="pass">
          <p style="display: none">您两次输入的密码不一致</p>
        </div>
      </div>
      <button type="button" v-on:click="Jump('state1')">确认</button>
      <button type="button" v-on:click="Jump('state1')">取消</button>
    </div>
    <!--登陆页面-->
    <div class="landBox" v-if='state'>
      <h1>欢迎登陆掌上书城</h1>
      <div class="logo">
        <img src="../../assets/f2.jpg"/>
      </div>
      <div class="phone">
        <label>手机号：</label>
        <input type="text" placeholder="请输入手机号码">
      </div>
      <div class="psw">
        <label>密&nbsp&nbsp码：</label>
        <input type="password" placeholder="请输入密码">
      </div>
      <button type="button" class="londButton" v-on:click="landSuccess">登陆</button>
    </div>
    <!--个人资料页面-->
    <div class="personalData" v-if=false>
      <h1>个人资料</h1>
      <div>
        <label>昵&nbsp&nbsp&nbsp&nbsp&nbsp称&nbsp&nbsp:&nbsp&nbsp</label>
        <input type="text" placeholder="请输入您的昵称">
      </div>
      <div>
        <label>邮&nbsp&nbsp&nbsp&nbsp&nbsp箱&nbsp&nbsp:&nbsp&nbsp</label>
        <input type="email" placeholder="请输入您的邮箱">
      </div>
      <div>
        <label>性&nbsp&nbsp&nbsp&nbsp&nbsp别&nbsp&nbsp:&nbsp&nbsp</label>
        <label for="sercret">保密</label>
        <input type="radio" name="sex" id="sercret" checked = checked>
        <label for="woman">男</label>
        <input type="radio" name="sex" id="woman">
        <label for="man">保密</label>
        <input type="radio" name="sex" id="man">
      </div>
      <div>
        <label>生&nbsp&nbsp&nbsp&nbsp&nbsp日&nbsp&nbsp:&nbsp&nbsp</label>
        <input type="text" placeholder="必填">
      </div>
      <div>
        <label>身份证号：</label>
        <input type="text" minlength="18" placeholder="选填">
      </div>
        <div class="jieshao">
          <label>个人介绍:</label>
          <textarea></textarea>
        </div>
      <button type="button" v-on:click="personalDetermine">确认</button>
      <button type="button">取消</button>
    </div>
    <!--地址添加页-->
    <div class="addressAdd" v-if="false">
      <div>
        <h1>收货地址</h1>
        <div>
          <label>姓名：</label>
          <input type="text" placeholder="输入姓名">
        </div>
        <div>
          <label>手机：</label>
          <input type="tel" placeholder="输入姓名">
        </div>
        <div>
          <label>邮政编码：</label>
          <input type="tel" placeholder="邮政编码">
        </div>
        <div>
          <label>省市县区：</label>

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
//        定义登陆也状态
        state:false,
//        定义注册页状态
        state1:false,
        state2:false,
        state3:false,
//        定义电话号码未匹配提示信息
        state4:false,
//        验证码错误提示信息
        state5:false,
//        验证错误昵称
        state6:false,
        msg: '这是个人页面',
//        电话号码
        tel:null,
//        验证码
        erification:null,
//        昵称
        nickname:null,
//        密码
        pas:null,
//        确认密码
        pass:null
      }
    },
    computed:{
     /* telephone(){
        console.log(this.let);
        //      定义全局匹配电话号码正则表达式;
       let sMobile = '/^1[3|4|5|8][0-9]\d{4,8}$/';
      if (sMobile.test(this.tel)){
        return this.tel;
      }
      else {
        alert("您输入的电话号码有误")
      }
      }*/
    },
    methods:{
//     登陆注册事件，参数传递当前点击的是登陆还是注册
      register(index){
        //获取对应的状态，判断处理登陆页面功能还是注册页面功能
        this[index] = true;
//       注册页面判断
        if(index === 'state1'){
        }
//        登陆页面判断
        else if (index === 'state'){
        }
      },
      // 失去焦点时验证
      validData(tag,reg) {
//        判断参数用于特殊判断验证码
        if(reg === 'verificam'){
          if(tag.value === ''){
            tag.nextElementSibling.nextElementSibling.style.display = "block";
          }
          else {
            tag.nextElementSibling.nextElementSibling.style.display = "none";
          }
        }
//        验证手机号，昵称，密码
        else if(reg.test(tag.value)) {
          tag.nextElementSibling.style.display = "none";
        }
        else {
          tag.nextElementSibling.style.display = "block";
        }
        if(this.pas === this.pass){
          tag.nextElementSibling.style.display = "none";
        }
        else {
          tag.nextElementSibling.style.display = "block";
        }
      },
//      登陆成功和注册成功函数
      Jump(index){
        //获取对应的状态，判断处理登陆页面功能还是注册页面功能
        this[index] = false;
        //        定义匹配匹配电话号码正则表达式
        let sMobile = /^1\d{10}$/,
        sMobile1 = /^[\u4e00-\u9fa5a-zA-Z0-9_]+$/;
        //       注册页面判断
        if(index === 'state1'){
//          匹配电话号码是否正确
          if ((!sMobile.test(this.tel))){
            this.state4 = true
          }
//          验证验证码是否正确
           if(this.erification === null){
           this.state5 = true
          }
          console.log(this.nickname);
          if (!(sMobile1.test(this.nickname))){
            this.state6 = true;
          }
        }
//        登陆页面判断
        else if (index === 'state'){
          console.log('2')
        }
      },
//      注册按钮确定时间
      registerButton(){
        if ((!sMobile.test(this.tel))){
         console.log("1")
        }
        if(this.erification === null){
          alert()
        }
        else {
          return
        }
//      显示个人中心主页
//        this.state = false
      },
//      取消按钮事件
      cancelButton(){
        this.state = false
      },
//     登陆事件
      landButton(){
        this.state1 = true
      },
//      登陆成功事件
      landSuccess(){
        this.state1 = false
      },
      //显示个人详情页事件
       displaydata(){
         this.state2 = true
       },
//       个人资料资料确定事件
      personalDetermine(){
         this.state2 = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../common/styles/user.less";
</style>
