<template>
  <div class="book-details">
    <header>
      <span class="iconfont" @click="$emit('back')">&#xe6e3;</span>
      <h3>图书详情页</h3>
      <span class="iconfont">&#xe613;</span>
    </header>
    <div class="book-details-box">
      <div class="book-details-top">
        <div class="book-details-info">
          <div>
            <img :src="clickData.img" alt="">
          </div>
          <ul>
            <li><span>作者</span><span>{{clickData.author}}</span></li>
            <li><span>页数</span><span>730</span></li>
            <li><span>书号</span><span>B00CBBJS5Y</span></li>
            <li><span>出版日期</span><span>2012年3月1日</span></li>
            <li><span>售价</span><span>￥{{clickData.price}}</span></li>
          </ul>
        </div>
        <div><h5>{{clickData.name}}</h5></div>
        <div class="box-btn">
          <span @click="$emit('joinCart')">加入购车</span>
          <span>立即购买</span>
        </div>
      </div>
      <div class="book-content">
        <div class="book-item1 item">
          <h5>内容概要 --</h5>
          <p>《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。
            《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信... </p>
        </div>
        <div class="book-item2 item">
          <h5>作者简介 --</h5>
          <p>“如果你像我一样，想学习或者熟练掌握今天最热门的Web开发技术，《JavaScript高级程序设计》是一个绝佳的起点，适合在所有Ajax图书之前阅读。”

            ——J.Ambrose Little Microsoft MVP

            “《JavaScript高级程序设计》作者显然非常了解读者的需要，落笔切中要害，行文信息密集.单单对客户端通信、Web服务、正则表达式、DOM、XML处理等现代JavaScrpt技术的详细讲解，就已经物超所值。”

            ——JavaScriptkit.com </p>
        </div>
        <div class="book-item3 item">
          <h5>内容概要 --</h5>
          <p>
            Nicholas C. Zakas自2000年以来一直致力于Web应用程序，重点关注前端开发，并以写作和讲述前沿*实践而闻名。他曾经是雅虎主页的核心前端工程师，在雅虎的五年中不断磨练经验；他也是多本书的作者，其中包括JavaScript面向对象精要（No Starch Press，2014）和JavaScript高级程序设计（Wrox，2012）。
            刘振涛，腾讯前端工程师；infoQ 网站资深译者，负责重点连载专栏《深入浅出ES6》；长期关注Web开发领域新生，尤其是 Ecma* 6；爱好摄影、网球，重度信息癖（Infomania）患者。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['clickData'],
    name: 'home',
    data () {
      return {
        data:''
      }
    },
    methods:{

    },
    created() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" type="text/less" rel="stylesheet/less">
  @white-color: #fff;
  @red-color: #f10215;
  .book-details{

    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    background: #f7f7f7;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .4);
    header{
      box-sizing: border-box;
      padding: 0 15px;
      align-items: center;
      display: flex;
      justify-content: space-between;
      span{
        cursor: pointer;
        font-size:1rem;
      }
    }
    .book-details-box{
      height: 100%;
      overflow: scroll;
      background: #ffffff;
      box-sizing: border-box;
      padding: 0 15px;
      .book-details-top{
        .book-details-info{
          padding: 0.8rem 0 0.5rem;
          display: flex;
          div{
            height: 5rem;
            width: 4rem;
            img{
              object-fit: contain;
              width: 100%;
              height: 100%;
            }
          }
          ul {
            margin-left: 0.5rem;
            font-size: 0.6rem;
            li{
              height: 1rem;
              span:first-child{
                color: #999999;
                display: inline-block;
                width: 3rem;
              }
              span:last-child{
                color: #333333;
              }
              &:last-child{
                span:last-child{
                  color: @red-color;
                }
              }
            }
          }
        }
        .box-btn{
          padding: 0.8rem 0 1rem;
          height: 1.6rem;
          display: flex;
          justify-content: space-between;
          span{
            text-align: center;
            cursor: pointer;
            height: 1.6rem;
            line-height: 1.6rem;
            width: 48%;
            box-sizing: border-box;
            display: inline-block;
            font-size:0.7rem;
            font-weight: 500;
            border-radius: 4px;
          }
          span:first-child{
            background: @white-color;
            border: 1px solid @red-color;
            color: @red-color;
          }
          span:last-child{
            background: @red-color;
            margin-left: 5%;
            border: 1px solid @red-color;
            color: @white-color;
          }
        }
      }
      .book-content{
        border-top: 1px solid #f7f7f7;
        padding: 0.8rem 0 1.2rem 0;
        box-sizing: border-box;
        div{
          &.book-item3{
            margin-bottom: 30px;
          }
          padding-bottom: 1rem;
          h5{
            padding: 0.4rem 0;
            font-size:0.7rem;
            color: #333333;
          }
          p{
            text-align: justify;
            font-size: 0.7rem;
            color: #666;
          }
        }
      }
    }
  }

</style>
