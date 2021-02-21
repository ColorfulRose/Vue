import Vue from "vue";
import Vuex from 'vuex' ;

//1安装插件
 Vue.use( Vuex)

//2 创建对象
const store =new Vuex.Store({
  state:{
    counter:1000
  },
  mutations:{
    increament(state) {
      state.counter++
    },
    decreament(state){
      state.counter--
    },
    increamentCount(state,count){
      state.counter += count
    }
  },
  actions:{
  //异步操作要放在此处
  },
  getters:{
    powerCounter(state){
      return state.counter*state.counter
    }
  },
  modules:{

  }

})
//3导出store
export default  store