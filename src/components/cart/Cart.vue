<template>

  <!--show页面-->
  <div class="cart">

    <div class="show" v-if="status">
      <div class="dele">
        <p class="del"  @click="click">编辑</p>
      </div>
      <div class="list">
        <ul>
          <li v-for="role in roleList" :key="role.id">
            <img :src="role.photo">
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
      <p>1111111</p>
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
        roleList:[
          {
            "name": "JavaScript高级程序设计",
            "author": "Nicholas C. Zakas",
            "price":"￥ 99.5",
            "photo":"../../../static/2.png",
            "ido":"../../static/向右 (2).png"
          },
          {
            "name": "JVM高级特性与最佳实践（第2版）",
            "author": "周志明",
            "price":"￥ 99.5",
            "photo":"../../../static/1.jpg",
            "ido":"../../static/向右 (2).png"
          },
          {
            "name": "JavaScript权威指南（第6版）",
            "author": "David Flanagan",
            "price":"￥ 99.5",
            "photo":"../../../static/3.jpg",
            "ido":"../../static/向右 (2).png"
          }
        ],
      }
    },
    methods:{
      click(){
        this.status=false
        this.status1=true;
        this.status2=false;
      },
      pahment(){

        this.status=false
        this.status1=false;
        this.status2=true;

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../common/styles/cart.less";
</style>
