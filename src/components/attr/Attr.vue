<template>
<<<<<<< HEAD
  <div class="attr">
      <!--子组件-->
      <SearchData
        placeholder="请输入您想要查找的图书名称进行搜索"
        @valueToPatent="getValue"

      />
      <ShowData
        :book-list="roleList"
        :show-list="getMatchingArr"/>
=======
  <div class="attrs">
    <!--子组件-->
    <SearchData
      placeholder="请输入您想要查找的图书名称进行搜索"
      @valueToPatent="getValue"
    />
    <ShowData
      :bookList="roleList"
      :bookist="roleList"
      :showList="matchingArr"
    />
>>>>>>> a93626a88d5e4af77db6817af59ffb72ccf7f133
  </div>
</template>

<script>
  import SearchData from "./SearchData"
  import ShowData from "./ShowData"

  export default {
    name: 'attrs',
    components: {
      SearchData,
      ShowData
    },
    data () {
      return {
        test: {},
        roleList: [
          {

            "name": "JavaScript高级程序设计",
            "author": "Nicholas C. Zakas",
<<<<<<< HEAD
            "price":"￥ 99.5",
            "photo":"../../../static/2.png",
            "ido":"../../static/向右 (2).png"
=======
            "price": "￥30",
            "photo": "../../../static/2.png",
            "ido": "../../static/right.png"
>>>>>>> a93626a88d5e4af77db6817af59ffb72ccf7f133
          },
          {
            "name": "JVM高级特性与最佳实践（第2版）",
            "author": "周志明",
<<<<<<< HEAD
            "price":"￥ 99.5",
            "photo":"../../../static/1.jpg",
            "ido":"../../static/向右 (2).png"
=======
            "price": "￥30",
            "photo": "../../../static/1.jpg",
            "ido": "../../static/right.png"
          },
          {
            "photo": "../assets/",
            "name": "JavaScript高级程序设计",
            "author": "Nicholas C. Zakas",
            "price": "￥30"
>>>>>>> a93626a88d5e4af77db6817af59ffb72ccf7f133
          },
          {
            "name": "JavaScript权威指南（第6版）",
            "author": "David Flanagan",
<<<<<<< HEAD
            "price":"￥ 99.5",
            "photo":"../../../static/3.jpg",
            "ido":"../../static/向右 (2).png"
=======

            "price": "￥30",
            "photo": "../../../static/3.jpg",
            "ido": "../../static/right.png"

>>>>>>> a93626a88d5e4af77db6817af59ffb72ccf7f133
          },
          {
            "name": "编写高质量代码：改善Java程序的151个建议",
            "author": "秦小波",
<<<<<<< HEAD
            "price":"￥ 99.5",
            "photo":"../../../static/4.jpg",
            "ido":"../../static/向右 (2).png"
=======
            "price": "￥30",
            "photo": "../../../static/4.jpg",
            "ido": "../../static/right.png"


>>>>>>> a93626a88d5e4af77db6817af59ffb72ccf7f133
          },
          {
            "name": "JavaScript语言精粹(修订版)",
            "author": "Douglas Crockford",
<<<<<<< HEAD
            "price":"￥ 99.5",
            "photo":"../../../static/1.jpg",
            "ido":"../../static/向右 (2).png"
=======
            "price": "￥30",
            "photo": "../../../static/1.jpg",
            "ido": "../../static/right.png"

>>>>>>> a93626a88d5e4af77db6817af59ffb72ccf7f133
          },
          {
            "name": "深入理解ES6",
            "author": "Nicholas C. Zakas",
<<<<<<< HEAD
            "price":"￥ 99.5",
            "photo":"../../../static/2.png",
            "ido":"../../static/向右 (2).png"
=======

            "price": "￥30",
            "photo": "../../../static/2.png",
            "ido": "../../static/right.png"
>>>>>>> a93626a88d5e4af77db6817af59ffb72ccf7f133
          },
          {
            "name": "Java开发实战经典",
            "author": "李兴华",
<<<<<<< HEAD
            "price":"￥ 99.5",
            "photo":"../../../static/3.jpg",
            "ido":"../../static/向右 (2).png"
=======
            "photo": "../../../static/3.jpg",
            "ido": "../../static/right.png",

            "price": "￥30"

>>>>>>> a93626a88d5e4af77db6817af59ffb72ccf7f133
          }
        ],
        matchingArr: []
      }
    },
<<<<<<< HEAD
    computed: {
      getMatchingArr() {
        return this.matchingArr;
      }
    },
    methods:{
        getValue(val){
=======
    methods: {
      getValue(val){
>>>>>>> a93626a88d5e4af77db6817af59ffb72ccf7f133

        this.matchingArr = this.roleList.filter(function (role) {
          var reg = new RegExp(val, "ig");
//            console.log(reg.test(role.name))
<<<<<<< HEAD
            return reg.test(role.name)
          })
          setTimeout(() => {
            console.log(this.matchingArr);
          },1500)

        }
=======
          return reg.test(role.name)
        })
        console.log(this.matchingArr)
      }
>>>>>>> a93626a88d5e4af77db6817af59ffb72ccf7f133
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/styles/attr.less";
</style>
