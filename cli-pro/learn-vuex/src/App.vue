<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click = "addition">+</button>
    <button @click="subtraction">-</button>
    <H2>-------组件</H2>
    <Hellovuex></Hellovuex>


  </div>

</template>

<script>
import Hellovuex from "./components/Hellovuex";
export default {
  name: 'App',
  data(){
    return{
      message: '我是组件App'
    }
  },
  components: {
    Hellovuex
  },
  methods:{
    addition () {
      this.$store.commit('increament')
    },
    subtraction () {
      this.$store.commit('decreament')
    },
    addCount (count) {
      this.$store.commit('increament',count)
    }
  }
}
</script>

<style>

</style>
