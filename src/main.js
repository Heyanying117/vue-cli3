
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './vuex/store'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
Vue.config.productionTip = false
/* 注册全局组件 */
Vue.component('Header', Header)
Vue.component('Star', Star)
/* eslint-disable no-new */
new Vue({
  el: '#app',
 
  render: h => h(App),  // <App/>
  router,//配置路由
  /*  配置vuex*/
  store
})
