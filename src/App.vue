<template>
  <div id="app">
    <router-view />
    <FooterGuide v-if="$route.meta.isshowFoot"/>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import { reqAddress } from './api'
export default {
  name:'App',
   mounted () {
      // 分发actoin, 从后台获取数据到state中
      this.$store.dispatch('getAddress')
    },

  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
