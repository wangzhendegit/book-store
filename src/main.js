// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import rem from './common/scripts/common.js'

import '../node_modules/swiper/dist/css/swiper.min.css';

Vue.config.productionTip = false;

// window.bookInfo = [];
// getData()
// function getData() {
//   // 使用axios进行数据请求
//   axios.get('https://www.aulence.com/data/book-info.json')
//     .then((res) => {
//       // 如果请求成功，将bookList空数组替换为请求到的数组
//       window.bookInfo = res.data;
//     })
//     .catch(function () {
//       console.error('数据请求错误');
//     });
// }
/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
})

