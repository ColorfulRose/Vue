<template>
  <!--
1划分目录结构
 asset 资源 img css
    normalize.css  初始化页面样式
 components 放公共的组件
   分为两类 :common 所有项目都可以用的组件 完全共同的组件;
           content 和当前项目相关的组件
 views 放一些组件
 store: 公共状态管理
 network: 网络相关的
 common :公共js文件
2.引用2个css文件 别名
3.vue.config和.editconfig 连个文件


安装路由命令  npm install --save
-->
  <div id="app">
    <router-view></router-view>
    <Tabbar>
     <TabBarItem path="/home" active-color="deeppink"  >
       <img slot="item-icon" src="./assets/img/tabbar/home.svg">
       <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg">
       <div slot="item-text" >首页</div>
     </TabBarItem>
      <TabBarItem path="/category" >
        <img slot="item-icon" src="./assets/img/tabbar/category.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg">
        <div slot="item-text" >分类</div>
      </TabBarItem>
      <TabBarItem path="/s_cart" >
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/shopcart_active.svg">
        <div slot="item-text" >购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile"  >
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg">
        <div slot="item-text" >我的</div>
      </TabBarItem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar/Tabbar'
import TabBarItem from "./components/tabbar/TabBarItem";
export default {
  name: 'App',
  components: {
    Tabbar,
    TabBarItem
  }
}
</script>

<style>
@import "assets/css/base.css";


</style>
