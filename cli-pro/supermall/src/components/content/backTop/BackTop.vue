<template>
  <div class="back-top" @click="backClick">
    <img src="../../../assets/img/common/top.png">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    methods:{
      backClick(){
      //  回到顶部
      }
    }
  }
</script>

<style scoped>
.back-top{
  position: fixed;
  right:8px;
  bottom: 53px;
}
  .back-top img{
    width: 43px;
    height: 43px;
  }

</style>