<template>
	<div class="footer">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		props:["value"]
	}
</script>

<style scoped>
.footer{
	display: flex;
	position: fixed;
	z-index: 99;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 56px;
	background: #2E2A38;
}
</style>