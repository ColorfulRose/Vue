import axios from 'axios'

export  function request(config){
    //  1. 创建axios的实例
    const instance = axios.create({
      baseURL: 'http://timemeetyou.com:8889/api/private/v1/',
      timeout:5000
    })
  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  },err => {

  })

  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err =>{

  })
    //返回一个promise
    return instance(config)



}