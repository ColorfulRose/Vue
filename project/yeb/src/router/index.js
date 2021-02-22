import Vue from 'vue'

import VueRouter from 'vue-router'

// import Login from '../views/Login';
//懒加载
const Login=()=>import('../views/Login')
  import Home from  '../views/Home';
import test1 from "../views/test1";
import test2 from "../views/test2";

Vue.use(VueRouter)


const routes = [
  {
    path:'/',
    name:'Login',
    component:Login,
    hidden:true
  },
  {
    path:'/home',
    name:'导航一',
    component:Home,
    children:[
      {
        path:'/test1',
        name:'选项1',
        component:test1
      },
      {
        path:'/test2',
        name:'选项2',
        component:test2
      }
    ]
  },

]
// const router = new VueRouter({
//   routes
// })
export default new VueRouter({
  routes // 这里使用ES6的简写写法，正常应该是这样写'routes : routes '
})