<template>
  <div id="app">
    <h2>{{result}}</h2>
    <h2>----------------------</h2>
    <helloworld></helloworld>
  </div>
</template>

<script>
import Helloworld from "./components/Helloworld";
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Helloworld
  },
  data(){
    return{
      result: ''
    }
  },
  created() {
    axios({
      url: 'http://123.207.32.32:8000/home/multidata'
    }).then(res => {
      this.result = res ;
    })
  }
}
</script>

<style>

</style>
