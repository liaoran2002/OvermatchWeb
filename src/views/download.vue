<template>
	<mytitle></mytitle>
	<iframe id="can" :src="src" frameborder="0"></iframe>
	<myfoot></myfoot>
</template>

<script>
	export default {
		data() {
			return{
				src:''
			}
		},
		mounted(){
			this.src = '../../public/fire.html'
		}
	}
</script>

<style>
	#can{
		width: 100%;
		height: 1000px;
	}
</style>