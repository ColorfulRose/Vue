import axios from 'axios'

export  function request(config){
  // return new Promise((resolve,reject) => {
  //   //  1. 创建axios的实例
  //   const instance = axios.create({
  //     baseURL: 'http://123.207.32.32:8000',
  //     timeout:5000
  //   })
  //   instance(config)
  //     .then(res => {
  //       resolve(res)
  //     })
  //     .catch(err => {
  //       reject(err)
  //     })
  //
  // })


    //  1. 创建axios的实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout:5000
    })

  //拦截器 全局
  // axios.interceptors.request.use()
  instance.interceptors.request.use(config => {
    console.log(config);
    // 1比如config 的一些信息不符合服务器要求
    //2.每次发送网络请求时,都希望在界面中显示一个请求图标
    // 3.某些网络请求( 登录界面) 必须携带一些特殊的信息
    return config
  },err => {

  })

  instance.interceptors.response.use(res => {

  },err =>{

  })

    return instance(config)



}