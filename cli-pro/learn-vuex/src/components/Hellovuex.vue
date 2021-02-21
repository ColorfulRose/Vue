<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <h2>------getters 相关信息</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Hellovuex"
  }
</script>

<style scoped>

</style>