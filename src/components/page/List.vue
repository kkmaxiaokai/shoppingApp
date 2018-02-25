<template>
<div id="list">
	
	<header>
		<p></p>
		<h4>分类</h4>
		<p class="L_search"></p>
	</header>
	
	<div class="content">
		
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">品牌推荐</mt-tab-item>
		  <mt-tab-item id="2">鞋靴</mt-tab-item>
		  <mt-tab-item id="3">服装</mt-tab-item>
		  <mt-tab-item id="4">美食</mt-tab-item>
		  <mt-tab-item id="5">配饰</mt-tab-item>
		  <mt-tab-item id="6">护肤</mt-tab-item>
		  <mt-tab-item id="7">电子产品</mt-tab-item>
		  <mt-tab-item id="8">杂货</mt-tab-item>
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		  	
		    <div class="L_right">
				<img src="../../assets/images/L_picBanner@3x.png" />
				<h3>热销推荐</h3>
				<img src="../../assets/images/L_pinpai@3x.png"/>
			</div>
			
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
		  </mt-tab-container-item>
		    <mt-tab-container-item id="4">
		    <mt-cell v-for="n in 8" :key="n" :title="'选项 ' + n" />
		  </mt-tab-container-item>
		    <mt-tab-container-item id="5">
		    <mt-cell v-for="n in 2" :key="n" :title="'选项 ' + n" />
		  </mt-tab-container-item>
		    <mt-tab-container-item id="6">
		    <mt-cell v-for="n in 3" :key="n" :title="'选项 ' + n" />
		  </mt-tab-container-item>
		    <mt-tab-container-item id="7">
		    <mt-cell v-for="n in 5" :key="n" :title="'选项 ' + n" />
		  </mt-tab-container-item>
		    <mt-tab-container-item id="8">
		    <mt-cell v-for="n in 1" :key="n" :title="'选项 ' + n" />
		  </mt-tab-container-item>
		</mt-tab-container>
		
	</div>
	
	
	
</div>
	
</template>

<script>
import ppt1 from '@/components/public/ppt1'


export default{
	name:'list',
	data(){
		return{
			selected:'1'
		}
	},
	components:{
		ppt1
	}
}

</script>

<style scoped>
header>h4{width: 60%;}
header>.L_search{width: 20%;height: 48px;background: url(../../assets/images/icons_Lsearch@3x.png) no-repeat center center;background-size: 18px;}
.content{margin-top: 48px;padding: 0;text-align: left;height: 90%;background: #fff;position:absolute;width:100%;}

.L_right{width: 100%;float: left;display: inline-block;}
.L_right>img{width: 90%;margin: 12px 5%;}
.L_right>h3{width: 100%;text-align: center;	font-size: 16px;background: url(../../assets/images/L_line@3x.png) no-repeat center center;background-size: 140px;}

.mint-navbar,.mint-tab-container{float: left;text-align: left;}
.mint-navbar{width: 25%;display: inline-block;border-right: 1px solid #dadada;height: 100%;}
.mint-tab-container{width: 75%;}
.mint-tab-item{margin-top: 8px;height: 48px;line-height:48px;font-size: 16px;text-indent: 16px;color: rgba(0,0,0,.8);margin-bottom: 4px;}

.mint-navbar .mint-tab-item.is-selected {position: relative;background: #2e2a38;color: #fff;}
.mint-navbar .mint-tab-item.is-selected:after{content: '';position: absolute;right: -1px;top: 50%;margin-top: -12px;border-right: 12px solid #fff;border-top: 12px solid transparent;border-bottom: 12px solid transparent;} 
	
</style>