<template>
  <div class="'wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props:{
      probeType: {
        type:Number,
        default: 0
      },
      pullUpLoad:{
        type: Boolean,
        default:false
      }
    },
    data(){
      return {
        scroll: null
      }
    },
    mounted() {
      //1创建BScroll
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad: this.pullUpLoad

      })
      //2监听滚动位置
      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll',(position) => {
          this.$emit('scroll',position)
        })
       }

    //  3监听上拉事件
      if(this.pullUpLoad){
        this.scroll.on('pullingUp',() => {
          //  上拉加载更多
          this.$emit('pullingUp')
        })
      }

      // this.scroll.refresh()

    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll&&this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>