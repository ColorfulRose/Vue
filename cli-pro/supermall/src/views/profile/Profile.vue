<template>
 <div>
   <Scroll class="content"></Scroll>
 </div>
</template>

<script>
  import Scroll from "../../components/common/scroll/Scroll";
  export default {
    name: "Profile",
    components:{
      Scroll
    }
  }
</script>

<style scoped>
.content{
  height: 400px;
  background-color: #42b983;
}
</style>