import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home/Home'
import attr from '@/components/attr/Attr'
import cart from '@/components/cart/Cart'
import user from '@/components/user/User'


Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/attr',
      name: 'attr',
      component: attr
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
