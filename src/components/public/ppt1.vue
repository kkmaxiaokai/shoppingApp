<template>
	
	<!--<mt-swipe :show-indicators="false">-->
			
			<!--在线图片数据引用，但现在未打包，地址还不是绝对地址-->
		<!--<mt-swipe-item v-for="item in banner" key="5">
			<router-link :to="item.imgLink"> <img :src="item.imgURL"/> </router-link>
		</mt-swipe-item>-->
	<!--</mt-swipe>-->
<div class="ppt">
	<mt-swipe :auto="4000">	  
		<mt-swipe-item >
			<img src="../../assets/images/banner1@3x.png"/>
		</mt-swipe-item>
		<mt-swipe-item>
			<img src="../../assets/images/banner2@3x.png"/>
		</mt-swipe-item>
		<mt-swipe-item>
		 	<img src="../../assets/images/banner3@3x.png"/>
		</mt-swipe-item>
		<mt-swipe-item>
		 	<img src="../../assets/images/banner4@3x.png"/>
		</mt-swipe-item>
	</mt-swipe>
	<!--<div class="square">
		<span class="I_first"></span>
		<span></span>
		<span></span>
		<span></span>
	</div>-->
</div>

</template>

<script>
export default {
  name: 'ppt'
//,
//data(){
//	return{
//		banner:[]
//	}
//},
//created(){
//	this.$http.get('/PPT').then(res=>{
//		console.log(res);
//		this.banner = res.data.data;
//	})
//}
}
</script>

<style scoped>
.mint-swipe{
	height: 180px;
	margin-top: 48px;
}
img{
	width: 100%;
	height: auto;
}
</style>
