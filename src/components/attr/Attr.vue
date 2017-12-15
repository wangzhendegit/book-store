<template>

  <div class="attr">
      <!--子组件-->
      <SearchData
        placeholder="请输入您想要查找的图书名称进行搜索"
        @valueToPatent="getValue"

      />
      <ShowData
        :book-list= this.bookInfo
        :show-list="getMatchingArr"
        @clickBook = 'clickBook'
      />
    <!--书籍详情页面-->
    <transition name="slide-fade">
      <BookListAttr
        v-if="showBook"
        :clickData="clickData"
        :bookInfo='bookInfo'
        @back="back"
      ></BookListAttr>
    </transition>
  </div>
</template>

<script>
  import SearchData from "./SearchData"
  import ShowData from "./ShowData"
  import BookListAttr from '@/components/home/BookDetails'

  export default {
    props:['bookInfo'],
    name: 'attr',
    components: {
      SearchData,
      ShowData,
      BookListAttr
    },
    data () {
      return {
        showBook:false,
        test: {},
        roleList: [
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

          },
          {
            "name": "编写高质量代码：改善Java程序的151个建议",
            "author": "秦小波",
            "price":"￥ 99.5",
            "photo":"../../../static/4.jpg",
            "ido":"../../static/right.png",


          },
          {
            "name": "JavaScript语言精粹(修订版)",
            "author": "Douglas Crockford",
            "price":"￥ 99.5",
            "photo":"../../../static/1.jpg",
            "ido":"../../static/right.png",

          },
          {
            "name": "深入理解ES6",
            "author": "Nicholas C. Zakas",
            "price":"￥ 99.5",
            "photo":"../../../static/2.png",
            "ido":"../../static/right.png",

          },
          {
            "name": "Java开发实战经典",
            "author": "李兴华",
            "price":"￥ 99.5",
            "photo":"../../../static/3.jpg",
            "ido":"../../static/right.png",

          }
        ],
        matchingArr: [],
        clickData:'',
      }
    },
    computed: {
      getMatchingArr() {
        return this.matchingArr;
      }
    },
    methods:{
      clickBook(index){
        this.clickData = this.bookInfo[index];
        this.showBook = true
      },
      back(){
        this.showBook = false
      },
        getValue(val){

        this.matchingArr = this.bookInfo.filter(function (role) {
          var reg = new RegExp(val, "ig");
//            console.log(reg.test(role.name))
            return reg.test(role.name)
          })

        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/styles/attr.less";
</style>
