import axios from "axios";
import { Message } from 'element-ui';
import router from '../router'
// import {fillParams} from "vue-router/src/util/params";
//请求拦截器
axios.interceptors.request.use(config=>{
  //如果存在token，请求携带这个token
  if (window.sessionStorage.getItem('tokenStr')){
    config.headers['Authorization'] = window.sessionStorage.getItem('tokenStr')
  }
  return config;
},error => {
  console.log(error)
})




//响应拦截器
axios.interceptors.response.use(success=>{
//  业务逻辑错误
    if (success.status&&success.status == 200){
      if (success.data.code == 500||success.date.code == 401||success.data.code == 403){
        Message.error({message:success.data.message});
        return;
      }
      //其他都是成功的
      else if (success.data.message){
        Message.success({message:success.data.message})
      }
    }
    return success.data;
},error => {
  if(error.respond.code == 504||error.respond.code ==404){
    Message.error({message:'访问服务器失败'})
  }else if(error.respond.code == 403){
    Message.error({message:'权限不足，请联系管理员'})
  }else if(error.respond.code ==401){
    Message.error({message:'请登录'})
    router.replace('/');
  }
  else{
    if (error.respond.data.message){
      Message.error({message:error.respond.data.message})
    }else{
      Message.error({message:'未知错误'})
    }
  }
  return;
});


//传送json格式的post请求
let base = ''
export const postRequest=(url,params)=>{
  return axios({
    method:'post',
    url:'${base}${url}',
    data: params
  })
}
//
export const putRequest=(url,params)=>{
  return axios({
    method:'put',
    url: '${base}${url}',
    data:params
  })
}
export const getRequest=(url,params)=>{
  return axios({
    method:'get',
    url: '${base}${url}',
    data:params
  })
}
export const deleteRequest=(url,params)=>{
  return axios({
    method:'delete',
    url: '${base}${url}',
    data:params
  })
}
