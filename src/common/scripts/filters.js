/**
 * Created by cff on 2017/12/16.
 */
//==========================全局过滤定义 写法￥{{role.price | money('元') }} type为money后的一个参数，使用相当于是调用了money这个函数
 import Vue from 'vue'
 // Vue.filter('money',function (val,type) {
 //   if (!val) return ''
 //   // val = parseFloat(val)
 //   return val.toFixed(2) + type
 // })
Vue.filter('money',function (val) {
  // if (!val) return '0.00'
  return val.toFixed(2)
})
