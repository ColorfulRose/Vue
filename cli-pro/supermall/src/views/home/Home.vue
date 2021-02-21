<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <Scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentscroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <HomeSwiper :banners="banners"></HomeSwiper>
      <RecommendView :recommends="recommends"></RecommendView>
      <FeatureView></FeatureView>
      <TabControl :titles="['流行','新款','精选']"
                  @tabClick="tabClick" ref="tabControl"> </TabControl>
      <goods-list :goods = "showGoods"></goods-list>
    </Scroll>
<!--    .native  当需要监听组件的原生事件时,必须给对应的事件加native-->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>


  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";
  //公共组件
  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";

  import {getHomeMultidata,getHomeGoods} from "../../network/home";
  import {debounce} from "../../common/utils";


  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        goods:{
          'pop':  {page: 0,list: []},
          'new':  {page: 0,list: []},
          'sell': {page: 0,list: []}
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,

      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    components: {
      FeatureView,
      HomeSwiper,
      RecommendView,

      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    created() {
    //  1请求多个数据
      this.getHomeMultidata()
      //2.请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');


    },
    mounted() {
      //监听item中图片加载完成
      const refresh = debounce(this.$refs.scroll.refresh,50)
      this.$bus.$on('itemImageLoad',() => {
        refresh()
      })

      //2. 获取tabcontrol的offsettop  所有的组件都有有个属性


    },
    methods:{
      //事件监听
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType= 'sell'
        }
      },
      //回到顶部
      backClick(){
       this.$refs.scroll.scrollTo(0,0,500)
      },
      contentscroll(position){
        this.isShowBackTop = (-position.y) >1000
      },
      loadMore(){
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.scroll.refresh()
      },
      //网络请求
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
        //  将拿到的图片存进list数组中,每个page都不断push进list
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1;
          //完成加载更多
          this.$refs.scroll.finishPullUp()

        })
      }
    }
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