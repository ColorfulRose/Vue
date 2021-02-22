<template>
  <div id="nav">
    <router-view></router-view>
    <MainTabBar></MainTabBar>
  </div>
  <router-view />
</template>
<script>
  import MainTabBar from "./components/content/mainTabbar/MainTabBar";
  export default {
    name:'app',
    components:{
      MainTabBar
    }
  }
</script>
<style>
  @import "assets/css/base.css";

</style>
