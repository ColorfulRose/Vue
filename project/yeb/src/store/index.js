import Vue from 'vue'
import Vuex from 'vuex'
Vue.vue(vuex);
export default new Vuex.Store({
  state:{
    routes:[]
  },
  mutations:{
    initRoutes(state,data){
      state.routes = data;
    }
  },
  actions:{

  }
})