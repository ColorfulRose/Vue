import axios from 'axios'
// export function request(config,success,failure) {
// //  1.创建axios实例
//   const  instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   // ##发送网络请求
//   instance(config).then(res=>{
//     success(res)
//   }).catch(err=>{
//     failure(err)
//   })
// }

//222
// export function request(config) {
// //  1.创建axios实例
//   const  instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   // ##发送网络请求
//   instance(config.baseConfig).then(res=>{
//     config.success(res)
//   }).catch(err=>{
//     config.failure(err)
//   })
// }


//333
// export function request(config) {
//   return Promise((resolve,reject)=>{
//       const  instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//       })
//       // ##发送网络请求
//       instance(config).then(res=>{
//        resolve(res)
//       }).catch(err=>{
//         reject(err)
//       })
//
//     })
// }

//444
export function request(config) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  //axios的拦截器 :全局
  instance.interceptors.request.use(config=>{
    console.log(config);
    //1.比如config里的数据不符合服务器的要求
    //2.每次发送访问请求时，都希望在界面总显示一个请求的图标 成功之后再消失
    //3.某些网络请求是必须携带一些特殊的东袭击

    return config;
  },err=>{
    console.log(err);
  })
  //响应拦截
  instance.interceptors.response.use(res=>{
    console.log(res);
    return res.data
  },err=>{
    console.log(err);
  })

  //instance本身就是一个promise
  return instance(config)
}
