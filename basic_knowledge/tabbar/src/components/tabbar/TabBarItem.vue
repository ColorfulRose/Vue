<template>
  <div class="tab-bar-item">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>

</template>

<script>
  export default {
    name: "TabBarItem"
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    height:24px;
    width: 24px;
    margin-top:2px;
    vertical-align: middle;
  }
</style>