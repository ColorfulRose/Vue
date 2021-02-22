<template>
  <div class="nav-bar" >
    <div class="left"><slot></slot></div>
    <div class="center"><slot></slot></div>
    <div class="right"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }
  .left,.right{
    width: 60px;
    background: #42b983;
  }
  .center{
    flex: 1;
  }
</style>