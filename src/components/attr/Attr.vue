<template>
  <div class="attr">
      <!--子组件-->
      <SearchData
        placeholder="请输入搜索名称"
        @valueToPatent="getValue"

      />
      <ShowData
        :bookist="roleList"
        :showList="matchingArr"/>
  </div>
</template>

<script>
  import SearchData from "./SearchData"
  import ShowData from "./ShowData"

  export default {
    name: 'attr',
    components: {
      SearchData,
      ShowData
    },
    data () {
      return {
        test:{},
        roleList:[
          {
            "photo":"../assets/",
            "name": "JavaScript高级程序设计",
            "author": "Nicholas C. Zakas",
            "price":"￥30"
          },
          {
            "name": "深入理解Java虚拟机：JVM高级特性与最佳实践（第2版）",
            "author": "周志明",
            "price":"￥30"
          },
          {
            "name": "JavaScript权威指南（第6版）",
            "author": "David Flanagan",
            "price":"￥30"
          },
          {
            "name": "编写高质量代码：改善Java程序的151个建议",
            "author": "秦小波",
            "price":"￥30"
          },
          {
            "name": "JavaScript语言精粹(修订版)",
            "author": "Douglas Crockford",
            "price":"￥30"
          },
          {
            "name": "深入理解ES6",
            "author": "Nicholas C. Zakas",
            "price":"￥30"
          },
          {
            "name": "Java开发实战经典",
            "author": "李兴华",
            "price":"￥30"
          }
        ],
        matchingArr:[]
      }
    },
    methods:{
        getValue(val){

          this.matchingArr=this.roleList.filter(function (role) {
            var reg=new RegExp(val,"ig");
//            console.log(reg.test(role.name))
            return reg.test(role.name)
          })
          console.log(this.matchingArr)
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
