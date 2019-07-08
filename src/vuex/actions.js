/* 用来间接修改数据状态的 */
import {reqAddress,reqCategorys,reqShops} from '../api'
/* 引入常量名 */
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-types'
export default{
  /* 获取当前地址的异步action */
  async getAddress({commit, state}) {
    const { longitude, latitude } = state
    // 发异步ajax请求
    const result = await reqAddress(longitude, latitude)
    // 有了结果后, 提交mutation
    if (result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
  },
  async getCategorys({commit}){


    /* 发异步请求 */
    const result = await reqCategorys()

    /* 有了结果后，提交给mutation */
    if(result.code===0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,categorys)
    }
  },
  async getShops({commit,state}){
    const {latitude, longitude} = state
    /* 发异步请求 */
    const result = await reqShops({latitude, longitude})

    /* 有了结果后，提交给mutation */
    if(result.code===0){
      const shops = result.data
      commit(RECEIVE_SHOPS,shops)
    }
  }

}
/* actions会触发mutations调用 */
