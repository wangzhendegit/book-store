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
    <div class="registerBox" v-if="state1">
      <h1>注册</h1>
      <div class="userInformation">
        <div>
          <label><img src="../../assets/f1.png"/></label>
          <input type="tel" placeholder="请输入您的手机号码" maxlength="11" v-model="tel" @blur="
          validData(
            $event.target,
            'state4',
            /^1\d{10}$/
          )">
          <p v-show="tela">您输入的手机号码有误</p>
        </div>
        <div>
          <label><img src="../../assets/t4.png"/></label>
          <input type="text" placeholder="请输入昵称" v-model="nickname" v-on:blur="validData(
            $event.target,
             'state5',
            /^[\u4e00-\u9fa5a-zA-Z0-9_]+$/
          )">
          <p style="display: none">您输入的昵称不符合规范</p>
        </div>
        <div>
          <label><img src="../../assets/t1.png"/></label>
          <input type="password" placeholder="请输入密码" v-on:blur="validData(
            $event.target,
            'state6',
            /^(?=.{6,16}$)(?![0-9]+$)(?!.*(.).*\1)[0-9a-zA-Z]+$/
          )" v-model="pas">
          <p style="display: none">您输入的密码有误</p>
        </div>
        <div>
          <label><img src="../../assets/t1.png"/></label>
          <input type="password" placeholder="请再次输入密码">
          <p style="display: none">您两次输入的密码不一致</p>
        </div>
      </div>
      <button type="button" v-on:click="Jump('state1')">确认</button>
    </div>
    <!--登陆页面-->
    <div class="landBox" v-if='state'>
      <h1>登&nbsp&nbsp陆</h1>
      <div class="phone">
        <label><img src="../../assets/f1.png"/></label>
        <input type="text" placeholder="请输入手机号码">
      </div>
      <div class="psw">
        <label><img src="../../assets/t1.png"/></label>
        <input type="password" placeholder="请输入密码">
      </div>
      <button type="button" class="londButton">登&nbsp&nbsp陆</button>
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
        tela:false,
//        昵称错误提示信息
        state5:false,
//        验证密码
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
      validData(tag,index,reg) {
//        验证手机号，昵称，密码
        if (reg.test(tag.value)) {
           this[index] = false
        }
        else {
        console.log(index)
         this[index] = true
          console.log( this[index])
        }
        if(this.pas === this.pass){
          tag.nextElementSibling.style.display = "none";
        }
        else {
          tag.nextElementSibling.style.display = "block";
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../common/styles/user.less";
</style>
