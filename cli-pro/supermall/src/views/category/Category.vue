<template>
  <div class="wrapper">
  <ul class="content">
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>
    <li>33333333</li>


  </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Category",
    data(){
      return{
        scroll: null
      }
    },
    created() {
      // this.scoll = new BScroll('.wrapper',{

      // })
    },
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
        probeType:3,
        pullUpLoad:true
         })
      this.scroll.on('scroll',(position) => {
        console.log(position)
      })
      this.scroll.on('pullingUp',(position) => {
        console.log('上拉加载更多')
      })
    }
  }
</script>

<style scoped>
.wrapper{
  height: 200px;
  overflow: hidden;
}
</style>