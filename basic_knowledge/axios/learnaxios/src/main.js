import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import axios from 'axios'

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then(res=>{
//   console.log(res);
// })

// axios({
//   url:'http://152.136.185.210:8000/home/data?type=sell&page=1',
//   //专门针对get请求的参数拼接
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
//   console.log(res);
// })
//使用全局的配置和axios进行网络请求
// axios.defaults.baseURL='http://123.207.32.32:8000'
// axios.defaults.timeout=5000
// axios.all([axios({
//   // url:'http://123.207.32.32:8000/home/multidata',
//   url:'/home/multidata'
// }),axios({
//   // url:'http://152.136.185.210:8000/home/data?type=sell&page=1',
//   url:'/home/data',
//   params:{
//     type:'sell',
//     page:3
//   }
// })]).then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
// }))

//创建对应的axios实例
// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
// instance1({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res);
// })
// instance1({
//   url:'/home/data',
//   params:{
//     type:'sell',
//     page:1
//   }
// }).then(res=>{
//   console.log(res);
// })
//
// const instance2= axios.create({
//   baseURL: '',
//
//
// })

//##封装request请求
import {request} from "./network/request";
// request({
//   url:'/home/multidata',
// },res=>{
//   console.log(res);
// },err=>{
//   console.log(err);
// })

//222
// import {request} from "./network/request";
// request({
//   baseConfig:'',
//   success:function (res){
//   },
//   failure:function (err) {
//   }
// })

//333
request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})

