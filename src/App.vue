<template>
  <div id="app">
    <header>
      <h3 v-if="!$route.params.title">掌上商城</h3>
      <h3 v-else>{{$route.params.title}}</h3>
    </header>
    <main>
      <router-view/>
    </main>
    <nav>
      <ul>
        <router-link tag="li" :to="{name:'home',params:{title:'掌上书城',icon:'1'}}" :class="{checkedNav:navControl}">
          <i class="iconfont">&#xe60e;</i>
          <p>首页</p>
        </router-link>
        <router-link tag="li" :to="{name:'attr',params:{title:'分类',icon:'2'}}">
          <i class="iconfont">&#xe611;</i>
          <p>分类</p>
        </router-link>
        <router-link tag="li" :to="{name:'cart',params:{title:'购物车',icon:'3'}}">
          <i class="iconfont">&#xe612;</i>
          <p>购物车</p>
        </router-link>
        <router-link tag="li" :to="{name:'user',params:{title:'个人',icon:'4'}}" >
          <i class="iconfont">&#xe644;</i>
          <p>个人</p>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        mes: "",
        navControl:true
      }
    },
    methods: {
      add(){
//     axios.get()
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

  @import "common/styles/common";

</style>
