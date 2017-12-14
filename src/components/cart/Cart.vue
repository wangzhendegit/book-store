<template>

  <!--show页面-->
  <div class="cart">

    <div class="show" v-if="status">
      <div class="dele">
        <p class="del"  @click="click">编辑</p>
      </div>
      <div class="list">
        <ul>
          <li v-for="role in roleList" v-bind:del="false" :key="role.id">
            <img class="pic" :src="role.photo">
            <div class="right clearFloat">
              <div class="book-name">{{role.name}}</div>
              <div class="book-author">{{role.author}}</div>
              <div class="book-price">{{role.price}}</div>
              <div class="ido">
                <img :src=role.ido alt="">
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="button">
        <button type="button" @click="pahment"><p>前往支付</p></button>
      </div>
    </div>



    <!--删除页面-->
    <div class="out" v-if="status1">
      <div class="edit">
        <span class="cancel" @click="cancel">取消</span>
        <span class="check">选中删除</span>
      </div>
      <div class="list">
        <ul>
          <li v-for="role in roleList" :key="role.id">
            <div class="parent">
              <div class="no" v-if="n" @click="no"></div>
              <div class="yes" v-if="y" @click="yes"></div>
            </div>

            <img class="pic" :src="role.photo">
            <div class="right clearFloat">
              <div class="book-name">{{role.name}}</div>
              <div class="book-author">{{role.author}}</div>
              <div class="book-price">{{role.price}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>




    <!--支付页面-->
    <div class="pahment" v-if="status2">
      <p>2222222</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'cart',

    data () {
      return {
        status:true,
        status1:false,
        status2:false,
        y:false,
        n:true,
//        checked:false,
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
          }
        ],
      }
    },
    methods:{
      click(){
        this.status=false;
        this.status1=true;
        this.status2=false;
      },
      pahment(){
        this.status=false;
        this.status1=false;
        this.status2=true;

      },
      cancel(){
        this.status=true;
        this.status1=false;
        this.status2=false;
      },
      no(){
        this.n=false,
          this.y=true
      },
      yes(){
        this.n=true,
          this.y=false
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../common/styles/cart.less";
</style>
