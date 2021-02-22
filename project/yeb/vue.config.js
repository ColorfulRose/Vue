
//代理 后端接口是8081  前端是8080
let proxyObj ={}
proxyObj['/'] = {
  //websocket
  ws:false,
  //  代理到哪里去 目标地址
  target:'http://localhost:8081',
  //发送请求头时host会被设置target
  changeOrigin: true,
  //不重写请求地址
  pathRewrite:{
    '^/':'/'
  }


}

module.export ={
  devServer:{
    host:'localhost',
    proxy:proxyObj
  }
}