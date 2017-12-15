<template>
  <div class="user">
      <div class="headPortrait-bg"></div>
    <!--头像-->
       <ul>
         <li class="headPortrait">
          <img src="../../assets/12.png"/>
         </li>
         <li class="landRegister" v-if="state4">
           <span class="land" v-on:click="register('state')">登陆</span><span class="register"  v-on:click="register('state1')">注册</span>
         </li>
         <li class="user1" v-if="state3">{{nickname}}</li>
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
        <button type="button" v-if="state5" v-on:click="pullout('state5')">推出登陆</button>
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
            'tela',
            /^1\d{10}$/
          )">
          <p v-show="tela">您输入的手机号码有误</p>
        </div>
        <div>
          <label><img src="../../assets/t4.png"/></label>
          <input type="text" placeholder="请输入昵称" v-model="nickname" v-on:blur="validData(
            $event.target,
             'nickname1',
            /^[\u4e00-\u9fa5a-zA-Z0-9_]+$/
          )">
          <p v-show="nickname1">您输入的昵称不符合规范</p>
        </div>
        <div>
          <label><img src="../../assets/t1.png"/></label>
          <input type="password" placeholder="请输入密码" v-on:blur="validData(
            $event.target,
            'pess',
            /^(?=.{6,16}$)(?![0-9]+$)(?!.*(.).*\1)[0-9a-zA-Z]+$/
          )" v-model="pas">
          <p v-show="pess">您输入的密码有误</p>
        </div>
        <div>
          <label><img src="../../assets/t1.png"/></label>
          <input type="password" placeholder="请再次输入密码" v-on:blur="validData1" v-model="pass">
          <p v-show="pessd">您两次输入的密码不一致</p>
        </div>
      </div>
      <button type="button" v-on:click="confirm">确认</button>
    </div>
    <!--登陆页面-->
    <div class="landBox" v-if='state'>
      <h1>登&nbsp&nbsp陆</h1>
      <div class="phone">
        <label><img src="../../assets/f1.png"/></label>
        <input type="text" placeholder="请输入手机号码" v-model="tel">
      </div>
      <div class="psw">
        <label><img src="../../assets/t1.png"/></label>
        <input type="password" placeholder="请输入密码" v-model="pas">
      </div>
      <button type="button" class="londButton" v-on:click="pullout('state')">登&nbsp&nbsp陆</button>
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
//        登陆显示昵称
        state3:false,
//        隐藏登陆和注册按钮
        state4:true,
//        退出登录按钮
        state5:false,
//        定义电话号码未匹配提示信息
        tela:false,
//        昵称错误提示信息
        nickname1:false,
//        验证密码
        pess:false,
//        密码确认
        pessd:false,
        msg: '这是个人页面',
//        电话号码
        tel:null,
//        昵称
        nickname:null,
//        密码
        pas:null,
//        确认密码
        pass:null,
//        定义本地储存数组
        arry :[]
      }
    },
    methods:{
//     登陆注册事件，参数传递当前点击的是登陆还是注册
      register(index){
//       注册页面判断
        if(index === 'state1'){
          //获取对应的状态，判断处理登陆页面功能还是注册页面功能
          this.state1= true;
//          进入注册页面时晴空原有诗句
          this.tel = null;
          this.nickname = null;
          this.pas = null;
          this.pass = null
        }
//        登陆页面判断
        else if (index === 'state'){
//        获取本地数据判断是否存在账号
            let user = localStorage.getItem('stringarry');
//          数据解析
          let datastring = JSON.parse(user);
          if(datastring === null){
            alert("您还为注册账号")
          }
          else {
            this.state = true
          }
        }
      },
      // 失去焦点时验证
      validData(tag,index,reg) {
        if(index === 'tela'){
          let user = localStorage.getItem('stringarry');
//          数据解析
          let datastring = JSON.parse(user);
          for(var i =0;i<datastring.length;i++){
            if(datastring[i].tel === this.tel){
              alert('您的电话号码已被注册')
            }
            else {
              //        验证手机号，昵称，密码
              if(reg.test(tag.value)) {
//          如果验证成功则隐藏提示信息
                this[index] = false
              }
//        否则显示错误提示信息
              else {
                this[index] = true
              }
            }
          }
        }
      },
//      判断两次输入的密码是否一致
      validData1(){
//        判断密码和第二次输入的密码是否一致
          if(this.pas === this.pass){
          this.pessd = false
        }
        else {
          this.pessd = true
        }
      },
//      注册成功后页面进行跳转函数
      confirm(){
//       用于接收电话号码和昵称
        let obj = {};
//        判断注册页面中输入的值全部验证成功
        if(this.tel !== null && this.nickname1 !== null && this.pess !== null && this.pass !== false){
//          将电话号码和昵称对象扶植
          obj.tel = this.tel;
          obj.name = this.nickname;
          obj.psaaew = this.pas;
//          将对象添加到数组
          this.arry.push(obj);
//          将其转化成JSON字符串
          let stringArry = JSON.stringify(this.arry);
//          储存到本地
          localStorage.setItem('stringarry',stringArry);
//          推出注册页面
          this.state1 = false;
          this.state3 = true;
          this.state4 = false;
          this.state5 = true;
        }
      },
      pullout(index){
        if (index === 'state5'){
          this.state3 = false;
          this.state4 = true;
          this.state5 = false
        }
        else if(index ==='state'){
          let user = localStorage.getItem('stringarry');
//          数据解析
          let datastring = JSON.parse(user);
          for ( var j = 0;j < datastring.length;j++ ){
            if(this.tel === datastring[j].tel && this.pas === datastring[j].psaaew){
          this.state = false;
              this.state3 = true;
          this.state4 = false;
          this.state5 = true;
            }
            else {
              this.state = true
            }
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../common/styles/user.less";
</style>
