/**
 * Created by cff on 2017/12/15.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
  data:1,
  goodsList:[]
}
const mutations = {
  jia(state){
    state.data ++
  },
  jian(state){
    state.data --
  },
  addGoods:(state,data)=>{
    state.goodsList.push(data);
  },
}
const getters = {
  count:function (state) {
    return state.data += 1
  }
}
const actions = {

}
export default new Vuex.Store({
  //访问状态对象
  state,
  //触发的状态用commit访问
  mutations,
  getters,
  actions
})
