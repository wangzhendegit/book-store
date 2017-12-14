<template>
  <div class="box-list">
     <span class="iconfont">&#xe660;</span>
    <div class="book-top">
        <div class="book-list-info">
          <div>
            <img src="../../../static/1.jpg" alt="">
          </div>
          <ul>
            <li><span>作者</span><span>Nicholas C. Zakas</span></li>
            <li><span>页数</span><span>730</span></li>
            <li><span>书号</span><span>B00CBBJS5Y</span></li>
            <li><span>出版日期</span><span>2012年3月1日</span></li>
            <li>详情></li>
          </ul>
        </div>
        <div class="book-del">
          <h5>javascrit高级设计程序</h5>
          <div>
            <p>《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。
              《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信...
            </p>
          </div>
        </div>
        <div class="book-price">
          <div>$90</div>
          <div>1本</div>
        </div>
        <div class="box-btn">
          <span>加入购车</span>
          <span>立即购买</span>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    props:['bookInfo'],
    name: 'home',
    data () {
      return {}
    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../common/styles/home.less";
</style>
