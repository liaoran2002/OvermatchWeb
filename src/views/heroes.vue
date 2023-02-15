<template>
	<mytitle></mytitle>
	<iframe id="hero" :src="sr" frameborder="0" scrolling="no" height="100%"></iframe>
	<myfoot></myfoot>
</template>

<script>
	export default {
		data() {
			return{
				sr:''
			}
		},
		mounted(){
			this.sr = `../../public/index.html`
		}
	}
</script>

<style>
	#hero{
		width: 100%;
		height: 3315px;
		border:medium none;
	}
</style>