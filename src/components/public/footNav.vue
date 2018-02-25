<template>
	<div class="footNav">
	 <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/List">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">列表</span>
			</router-link>
			
			<router-link class="mui-tab-item" to="/Talk">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">社区</span>
			</router-link>
			
			<router-link class="mui-tab-item" to="/ShopCar">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Mine">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.mui-icon-home:before{
		content: "";
		background: url(../../assets/images/icons_bIndex.png) no-repeat center center;
	}
	.mui-icon-home{
		background: url(../../assets/images/icons_bIndex1.png) no-repeat center center;
	}
</style>