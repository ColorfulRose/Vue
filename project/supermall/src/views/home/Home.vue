<template>
  <div id="home">
    首页
  </div>
</template>

<script>


  // import HomeSwiper from "./childComps/HomeSwiper";
  // import RecommendView from "./childComps/RecommendView";
  // import FeatureView from "./childComps/FeatureView";
  //公共组件
  // import NavBar from "../../components/common/navbar/NavBar";
  // import TabControl from "../../components/content/tabControl/TabControl";
  // import GoodsList from "../../components/content/goods/GoodsList";
  // import Scroll from "../../components/common/scroll/Scroll";
  // import BackTop from "../../components/content/backTop/BackTop";
  //
  // import {getHomeMultidata,getHomeGoods} from "../../network/home";
  // import {debounce} from "../../common/utils";


  export default {
    name: "Home",

  }
</script>

<style scoped>
  #home{
    padding-top:44px;
    /*viewport height */
    height:100vh;
    position: relative;
  }
.home-nav{
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top:0;
  z-index: 9;
}

  .content{
    /*height:500px;*/
    overflow: hidden;
    position: absolute;
    top:44px;
    bottom:49px;
    left:0;
    right:0;
  }
</style>