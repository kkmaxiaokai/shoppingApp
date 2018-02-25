<template>
  <div id="app">
  	
  	<mt-header></mt-header>
  	
    <router-view/>
    
    <div class="footerNav">
    	<kk-footer v-model="isDefault">
    		<kk-footer-item id="/">
    			<img src="./assets/images/icons_bIndex.png" slot="icon-default">
    			<img src="./assets/images/icons_bIndex1.png" slot="icon-show">
    			首页
    		</kk-footer-item>
    		<kk-footer-item id="/List">
    			<img src="./assets/images/icons_bList.png" slot="icon-default">
    			<img src="./assets/images/icons_bList1.png" slot="icon-show">
    			列表
    		</kk-footer-item>
    		<kk-footer-item id="/Talk">
    			<img src="./assets/images/icons_bTalk.png" slot="icon-default">
    			<img src="./assets/images/icons_bTalk1.png" slot="icon-show">
    			社区
    		</kk-footer-item>
    		<kk-footer-item id="/ShopCar">
    			<img src="./assets/images/icons_bShopping.png" slot="icon-default">
    			<img src="./assets/images/icons_bShopping1.png" slot="icon-show">
    			购物车
    		</kk-footer-item>
    		<kk-footer-item id="/Mine">
    			<img src="./assets/images/icons_bMine.png" slot="icon-default">
    			<img src="./assets/images/icons_bMine1.png" slot="icon-show">
    			我的
    		</kk-footer-item>
    	</kk-footer>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app',
	data(){
		return{
			isDefault:this.$route.path
		}
	}
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mint-header,.mui-bar{
	width: 100%;
	position: fixed;
	z-index: 99;
	background: #2e2a38;
}
.mint-header{
	top: 0;
	height: 48px;
}
.mui-bar{
	bottom: 0;
	height: 56px;
}
header{
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
}

</style>
