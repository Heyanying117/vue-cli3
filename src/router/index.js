import Vue from 'vue'
import VueRuter from 'vue-router'
 import routes from '../router/routes'

/* 声明使用插件 */
Vue.use(VueRuter)
export default new VueRuter({
    routes
})
