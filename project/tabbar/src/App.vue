<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="deepPink">
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/home.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img  src="./assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template v-slot:item-text><div>首页</div></template>
      </tab-bar-item>

      <tab-bar-item path="/category">
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/category.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img  src="./assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template v-slot:item-text><div>分类</div></template>
      </tab-bar-item>

      <tab-bar-item path="/cart">
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/shopcart.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img  src="./assets/img/tabbar/shopcart_active.svg" alt="">
        </template>
        <template v-slot:item-text><div>购物车</div></template>
      </tab-bar-item>

      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/profile.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img  src="./assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template v-slot:item-text><div>我的</div></template>
      </tab-bar-item>

    </tab-bar>
  </div>
  <router-view />
</template>
<script>
  import TabBar from "./components/tabbar/TabBar";
  import TabBarItem from "./components/tabbar/TabBarItem";
  export default {
    name:'app',
    components:{
      TabBar,
      TabBarItem,
    }
  }
</script>
<style>
  @import "assets/css/base.css";
  .tab-bar-item  img{
    height: 24px;
    width: 24px;
    margin-top:3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>
