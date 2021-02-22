import {getRequest, request} from './api'
export const initMenu = (router,store)=>{
  if (store.state.routes.length>0){
    return;
  }
  getRequest('/systems/config/menu').then(data=>{
    if (data){
      //格式化好的routes
      let fmtRoutes = formatRoutes(data);
      //添加到路由
      router.addRoutes(fmtRoutes)
      //将数据存进vuex
      store.commit('initRoutes',fmtRoutes)
    }
  })
}
export const formatRoutes=(routes)=>{
  let fmRoutes=[];
  routes.forEach(routes=>{
    let{
      path,
      component,
      name,
      iconCls,
      children
    }=router;
    if (children&&children instanceof Array){
      //递归
      children = formatRoutes(children)
    }
    let fmRouter ={
      path:path,
      name:name,
      iconCls:iconCls,
      children:children,
      component(resolve){
        if(component.startsWith('Emp')){
          request(['../views/emp'+component+'.vue'],resolve)
        }else if(component.startsWith('Per')){
          request(['../views/per'+component+'.vue'],resolve)
        }else if (component.startsWith('Sal')){
          request(['../views/sal'+component+'.vue'],resolve)
        }else if (component.startsWith('Sta')){
          request(['../views/sta'+component+'.vue'],resolve)
        }else if (component.startsWith('Sys')){
          request(['../views/sys'+component+'.vue'],resolve)
        }
      }
    }
    fmRoutes.push(fmRouter)
  })
}