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
4.项目的模块划分 tabbar与路由映射
-->
  <div id="app">
    <router-view></router-view>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabbar/MainTabBar";


export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>

    @import "assets/css/base.css";
    /* 配置别名以后 路径前面就不需要加 ./ */
    /*@import "assets/css/base.css";*/
</style>
