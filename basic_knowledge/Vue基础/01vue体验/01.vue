<template>
	<div id="app">
		<h1>{{message}}</h1>
	</div>
</template>

<script>
	var vm = new Vue({
		el:'#app',
		data:{
			message:'Hello world,I am Vue.js'
		}
	});
</script>

<style>
</style>
