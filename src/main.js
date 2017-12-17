// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import rem from './common/scripts/common.js'

import '../node_modules/swiper/dist/css/swiper.min.css';

Vue.config.productionTip = false;

import store from './store/common.js'

const vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
})


