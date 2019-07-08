/* 引入vue */
import Vue from 'vue'
import Vuex from 'vuex'

/* 引入自定文件 */
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
/* 声明使用插件 */
Vue.use(Vuex)
/* 暴露 */
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
