import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
})

Vue.use(Vuex)
// 定义共享变量
// 代码里mounted方法里，通过this.$store.state.xxx来获取
const state = {
  user: [],
  addressTree: []
}
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  plugins: [vuexLocal.plugin],
  strict: false
})
