<template>
  <div class="user">
      <div class="headPortrait-bg"></div>
    <!--头像-->
       <ul>
         <li class="headPortrait">
          <img src="../../assets/12.png"/>
         </li>
         <li class="landRegister" v-if="state4">
           <span class="land" v-on:click="register('state')">登录</span><span class="register"  v-on:click="register('state1')">注册</span>
         </li>
         <li class="user1" v-if="state3">{{nickname}}</li>
       </ul>
    <!--详情选项-->
      <div class="subject">
          <div class="firstInformation">
            <div>设置个人资料<p v-on:click="personal('center')"></p></div>
            <div>收货地址管理<p v-on:click="personal('center1')"></p></div>
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
        <button type="button" v-if="state5" v-on:click="pullout('state5')">退出登录</button>
      </div>
    <!--注册信息提示框-->
    <div class="registerBox" v-if="state1">
      <h1>注册</h1>
      <div class="userInformation">
        <div>
          <label><img src="../../assets/f1.png"/></label>
          <input type="tel" placeholder="请输入您的手机号码" maxlength="11" v-model="tel" @keyup.enter="
          validData(
            $event.target,
            'tela',
            /^1\d{10}$/
          )">
          <p v-show="tela">您输入的手机号码有误</p>
        </div>
        <div>
          <label><img src="../../assets/t4.png"/></label>
          <input type="text" placeholder="请输入昵称" v-model="nickname" v-on:keyup.enter="verificatin(
            $event.target,
             'nickname1',
            /^[\u4e00-\u9fa5a-zA-Z0-9_]+$/
          )">
          <p v-show="nickname1">您输入的昵称不符合规范</p>
        </div>
        <div>
          <label><img src="../../assets/t1.png"/></label>
          <input type="password" placeholder="请输入密码" v-on:keyup.enter="verificatin(
            $event.target,
            'pess',
            /^(?=.{6,16}$)(?![0-9]+$)(?!.*(.).*\1)[0-9a-zA-Z]+$/
          )" v-model="pas">
          <p v-show="pess">您输入的密码有误</p>
        </div>
        <div>
          <label><img src="../../assets/t1.png"/></label>
          <input type="password" placeholder="请再次输入密码" v-on:keyup.enter="validData1" v-model="pass">
          <p v-show="pessd">您两次输入的密码不一致</p>
        </div>
      </div>
      <button type="button" v-on:click="confirm">确认</button>
    </div>
    <!--登陆页面-->
    <div class="landBox" v-if='state'>
      <h1>登&nbsp&nbsp录</h1>
      <div class="phone">
        <label><img src="../../assets/f1.png"/></label>
        <input type="text" placeholder="请输入手机号码" v-model="tel" maxlength="11" v-on:keyup.up="formbrue(
          $event.target,
           'nickname1',
           /^1\d{10}$/,
            strng4)">
      </div>
      <div class="psw">
        <label><img src="../../assets/t1.png"/></label>
        <input type="password" placeholder="请输入密码" v-model="pas">
      </div>
      <button type="button" class="londButton" v-on:click="pullout('state')">登&nbsp&nbsp录</button>
    </div>
    <!--个人资料页面-->
    <div class="personalData" v-if=center>
      <h1>个人资料</h1>
      <div>
        <label>昵&nbsp&nbsp&nbsp&nbsp&nbsp称&nbsp&nbsp:&nbsp&nbsp</label>
        <input type="text" placeholder="请输入您的昵称" v-model="nickname" v-on:keyup.enter="formbrue(
          $event.target,
           'nickname1',
            /^[\u4e00-\u9fa5a-zA-Z0-9_]+$/,
            strng
        )">
      </div>
      <div>
        <label>邮&nbsp&nbsp&nbsp&nbsp&nbsp箱&nbsp&nbsp:&nbsp&nbsp</label>
        <input type="email" placeholder="请输入您的邮箱" v-on:keyup.enter="formbrue(
          $event.target,
           'nickname1',
             /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            strng1
        )" v-model="eml">
      </div>
      <div>
        <label>性&nbsp&nbsp&nbsp&nbsp&nbsp别&nbsp&nbsp:&nbsp&nbsp</label>
          <span class="gender" :class="{'fyb':fun}" v-on:click="funs('fun')">保密</span>
        <span class="man" v-on:click="funs('fun1')" :class="{'fyb':fun1}">男</span>
        <span class="woman" v-on:click="funs('fun2')" :class="{'fyb':fun2}">女</span>
      </div>
      <div>
        <label>生&nbsp&nbsp&nbsp&nbsp&nbsp日&nbsp&nbsp:&nbsp&nbsp</label>
        <input type="text" placeholder="必填"v-on:keyup.enter="formbrue(
          $event.target,
           'nickname1',
             /^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/,
            strng3
        )" v-model="ban">
      </div>
      <div>
        <label>身份证号：</label>
        <input type="text" minlength="18" placeholder="选填" v-on:keyup.enter="formbrue(
          $event.target,
           'nickname1',
            /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
            strng4
        )" v-model="card">
      </div>
        <div class="jieshao">
          <label>个人介绍:</label>
          <input type="text"></input>
        </div>
      <button type="button" v-on:click="clic">确认</button>
    </div>
    <!--地址添加页-->
    <div class="addressAdd" v-if="center1">
        <h1>收货地址</h1>
        <div>
          <label>姓名：</label>
          <input type="text" placeholder="输入姓名">
        </div>
        <div>
          <label>手机：</label>
          <input type="tel" placeholder="输入姓名" v-model="tel">
        </div>
        <div>
          <label>邮政编码：</label>
          <input type="tel" placeholder="邮政编码">
        </div>
        <div>
          <select>
            <option>四川省</option>
            <option>广州省</option>
            <option>湖南省</option>
            <option>湖北省</option>
            <option>湖北省</option>
            <option>福建省</option>
          </select>
              <select>
                <option>成都市</option>
                <option>绵阳市</option>
                <option>广元市</option>
                <option>达州市</option>
                <option>西昌市</option>
                <option>攀枝花市</option>
              </select>>
                  <select>
                    <option>高新区</option>
                    <option>武侯区</option>
                    <option>锦江区</option>
                    <option>青羊区</option>
                    <option>双流区</option>
                    <option>天府新区</option>
                  </select>>
        </div>
        <div>
        <label>详细地址</label>
        <input type="text" placeholder="请填写详细的街道、楼栋、门牌号">
      </div>
          <button type="submit" v-on:click="clic1">确认地址</button>
    </div>
    <div class="mask" v-if="mask"></div>
    <div class="promp" v-if="prompdat">
          {{prompdata}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'user',
    data () {
      return {
        fun:true,
        fun1:false,
        fun2:false,
//        遮罩层状态
        mask:false,
//        个人资料状态
        prompdata:'ninhao',
//        错误提示框状态
        prompdat:false,
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
//        个人中心状态
        center:false,
        center1:false,
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
        arry :[],
       strng:'您输入的昵称你符合规范',
        strng1:'您的邮箱输入有误',
        strng3:'您的生日输入有误',
        strng4:'您的身份正号输入有误',
        eml:'',
        card:'',
        ban:''
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
            alert("您还未注册账号")
          }
          else {
            this.tel = '';
            this.pas ='';
            this.state = true
          }
        }
      },
      // 失去焦点时验证
      validData(tag,index,reg) {
        if(reg.test(tag.value)) {
          //          如果验证成功则隐藏提示信息
          this[index] = false
          let user = localStorage.getItem('stringarry');
//          数据解析
          let datastring = JSON.parse(user);
          for(var i =0;i<datastring.length;i++){
            if(datastring[i].tel === this.tel){
              this.tel = "";
              alert('您的账号已被注册')
            }
          }
      }
      else {
        this[index] = true
      }
      },
      verificatin(tag,index,reg){
        if(reg.test(tag.value)) {
//          如果验证成功则隐藏提示信息
          this[index] = false
        }
//        否则显示错误提示信息
        else {
          this[index] = true
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
        if(this.tela === false && this.nickname1 === false && this.pess === false && this.pessd === false && this.tel !== null && this.nickname !== null && this.pas !== null && this.pass !== null){
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
          this.nickname = datastring[j].name;
            }
            else {
              this.state = true
            }
          }
        }
      },
      personal(index){
        //        判断是否为登录状态
        if(this.state3 === true){
//        判断是个人资料还是地址页面
          if(index === 'center'){
//            显示个人信息页面
            this.center = true
          }
          else if(index === 'center1'){
            this.center1 = true
          }
        }
      },
//      表单失去焦点事件
      formbrue(tag,ind,reg,rompt){
//        验证函数覅用
        this.frompersonal(tag,ind,reg,rompt)
      },
//      表单验证
      frompersonal(tag,ind,reg,rompt){
//        表单验证
        if (reg.test(tag.value)){
//          验证成功隐藏当前错误提示信息
          this.index = true
        }
        else {
//          显示遮罩
          this.mask = true;
//          错误信息提示
          this.prompdata = rompt;
//          显示错提示信息
          this.prompdat = true;
//          储存当前的this
          let thisa = this;
//          延时函数，错误信息显示1s自动消失
          setTimeout(function () {
            thisa.mask = false;
            thisa.prompdat = false;
          },2000);
          //        验证失败显示当前错误提示信息
          this.index = false
      }
    },
      clic(){
//        修改成功后显示昵称
        this.state3 = true;
//        推出修改
        this.center = false
      },
      clic1(){
        this.center1 = false;
      },
      funs(index){
        if(index === 'fun'){
          this.fun = true
          this.fun1 = false
          this.fun2 = false
        }
        else  if(index === 'fun1'){
          this.fun1 = true
          this.fun = false
          this.fun2 = false
        }
        else {
          this.fun2 = true
          this.fun = false
          this .fun1 = false
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../common/styles/user.less";
</style>
