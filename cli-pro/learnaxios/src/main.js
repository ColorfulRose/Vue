import Vue from 'vue'
import App from './App.vue'

import axios from  'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//3 用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000';
// axios.defaults.timeout = 5000




//axios 的基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
// //  自带promise  默认 get
// //   method: get,
// }).then(res => {
//   console.log(res);
// })
// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params:{
//     type: 'pop',
//     page: 1
//   }
// }).then( res => {
//   console.log(res)
// })
//
// //2axios 发送并发请求
// axios.all([axios({
//   url: '/home/multidata'
// }),axios({
//   url: '/home/data',
//   params:{
//     type: 'sell',
//     page: 2
//   }
// })]).then(
//   results => {
//   console.log(results)
// })

// axios({
//   url: '/category'
// })

//4 创建对应的axios实例
// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })
//
// instance1({
//   url: '/home/data',
//   params:{
//     type: 'pop',
//     page: 2
//   }
// }).then(res => {
//   console.log(res)
// })

// const  instance2 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 10000,
//   headers: {
//
//   }
//
// })

//5封装request模块
import  {request} from  "./network/request"
// request({
//   url: '/home/multidata'
// },res => {
//   console.log(res)
// },err => {
//   console.log(err)
// })

request({
  url: '/home/multidata'
}).then(res =>{
  console.log(res)
}).catch( err => {
  console.log(err)
})