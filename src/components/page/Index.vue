<template>
	
<div id="home">
		
	<header>
		<p></p>
		<h4>FIFTH SHOP</h4>
		<p></p>
	</header>
		
	<div class="content">
		
		<ppt1></ppt1>
		<input type="text" placeholder="搜索商品或品牌" class="search" />
			
		<div class="I_nav">
			<div class="navText">
				<p>5号铺自营品牌</p>
				<p>30天无忧退换货</p>
				<p>48小时快速退款</p>
			</div>
			<div class="nav">
				<a href="javascript:;">独家上新</a>
				<a href="javascript:;">折扣播报</a>
				<a href="javascript:;">基础必备</a>
				<a href="javascript:;">惊奇榜单</a>
			</div>
		</div>

		<div class="main">
			<div class="I_list">
				<h3>每日精选<span>MORE</span></h3>
				<img src="../../assets/images/I_jxt@3x.png" alt="" />
				<div class="I_jx">
					<img src="../../assets/images/I_zzs@3x.png"/>
					<img src="../../assets/images/I_yj@3x.png"/>
				</div>
			</div>
				
			<div class="I_list">
				<h3>铺子特惠<span>MORE</span></h3>
				<div class="I_yhL">
					<img src="../../assets/images/I_pzthPic01@3x.png"/>
				</div>
				<div class="I_yhR">
					<img src="../../assets/images/I_pzthPic02@3x.png"/>
				</div>
				<div class="I_yhR">
					<img src="../../assets/images/I_pzthPic03@3x.png"/>
				</div>
			</div>
			
			<div class="I_list">
				<h3>大家在看<span>MORE</span></h3>
				<ppt2></ppt2>
			</div>

			<div class="I_list">
				<h3>好物专题<span>MORE</span></h3>
				<div class="picList">
					<img src="../../assets/images/I_hwzt01@3x.png"/>
					<img src="../../assets/images/I_hwzt02@3x.png"/>
					<img src="../../assets/images/I_hwzt03@3x.png"/>
				</div>
			</div>

			<div class="I_list">
				<h3>猜你喜欢<span>MORE</span></h3>
				<div class="buyList">
					<div class="shopList">
						<img src="../../assets/images/I_buy01@3x.png"/>
						<p>Meizu/魅族 魅蓝Meizu手机</p>
						<b>¥1388.00</b>
					</div>
					<div class="shopList">
						<img src="../../assets/images/I_buy02@3x.png"/>
						<p>情侣呢大衣  韩版潮流衣服</p>
						<b>¥148.00</b>
					</div>
					<div class="shopList">
						<img src="../../assets/images/I_buy03@3x.png"/>
						<p>一字破洞牛仔裤男</p>
						<b>¥59.00</b>
					</div>
					<div class="shopList">
						<img src="../../assets/images/I_buy04@3x.png"/>
						<p>加绒牛仔裤女九分裤</p>
						<b>¥108.00</b>
					</div>
					<div class="shopList">
						<img src="../../assets/images/I_buy05@3x.png"/>
						<p>中长款呢子大衣外套</p>
						<b>¥168.00</b>
					</div>
					<div class="shopList">
						<img src="../../assets/images/I_buy06@3x.png"/>
						<p>回力男鞋帆布鞋一脚蹬懒人鞋</p>
						<b>¥69.00</b>
					</div>
				</div>
			</div>
		</div>
		<p>到底啦！</p>
	</div>
	
	
</div>
	
</template>

<script>
import ppt1 from '@/components/public/ppt1'
import ppt2 from '@/components/public/ppt2'

export default{
	name:'home',
	components:{
		ppt1,
		ppt2
	}
}
</script>

<style scoped>
	
header>h4{width: 60%;}
.search{
	position: fixed;
	z-index: 99;
	top: 60px;
	left: 0;
	margin-left: 4%;
	padding-left: 3%;
	width: 90%;
	height: 32px;
	background: rgba(255,255,255,.7) url(../../assets/images/icons_Isearch@3x.png) no-repeat 25% center;
	background-size: 16px;
	border: 1px solid #d6d6d6;
	border-radius: 14px;
	font-size: 15px;
	text-align: center;
}
.content{margin: 0 0 60px 0;padding: 0;}
.content>p{width: 100%;text-align: center;}

.I_nav{background: #fff;margin-top: 8px;padding-bottom: 24px;}
.I_nav>.navText{width: 100%;margin: 0 auto;padding: 8px 0 0 16px;}
.navText>p{
	width: 30%;
	margin-left: 1%;
	padding-left: 13px;
	float: left;
	background: url(../../assets/images/icons_true@3x.png) no-repeat left 3px;
	background-size: 12px;
	font-size: 12px;
	color: #6a6a6a;
}
.nav a{
	display: inline-block;
	width: 24%;
	height: 30px;
	text-align: center;
	padding-top: 50px;
	padding-bottom: 16px;
	background: no-repeat center -8px;
	font-size: 15px;
	color: rgba(33,33,33,.7);
	font-weight: 600;
}
.nav a:nth-child(1){background-image: url(../../assets/images/I_djsx@3x.png);background-size: 70px;}
.nav a:nth-child(2){background-image: url(../../assets/images/I_zkbb@3x.png);background-size: 70px;}
.nav a:nth-child(3){background-image: url(../../assets/images/I_jcbb@3x.png);background-size: 70px;}
.nav a:nth-child(4){background-image: url(../../assets/images/I_jqbd@3x.png);background-size: 65px;}

.main{width: 100%;text-align: left;}
.main img{width: 100%;vertical-align: middle;}
.I_list{background: #fff;margin-top: 8px;overflow: auto;}
.I_list>h3{
	width: 100%;
	line-height: 40px;
	background: url(../../assets/images/icons_hint@3x.png) no-repeat center left;
	background-size: 6px;
	font-size: 18px;
	font-weight: 600;
	padding-left: 4%;
	border-bottom: 1px solid #ccc;
}
.I_list>h3>span{color: rgba(33,33,33,.5);float: right;padding-right: 16px;font-size: 16px;}
.I_jx>img{width: 50%;float: left;}
.I_yhL>img,.I_yhR>img{width: 100%;}
.I_yhL{float: left;width: 50%;padding-left: 4.5%;padding-top: 8px;border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;}
.I_yhR{float: left;width: 50%;padding-left: 5%;padding-top: 8px;border-bottom: 1px solid #ccc;}
.I_yhR:last-child{padding-bottom: 10px;}
.picList{width: 92%;margin: 0 auto;padding-bottom: 12px;}
.picList>img{margin: 8px 0 4px 0;}

.buyList{width: 100%;margin-top: 8px;padding-left: 2px; border-bottom: 1px solid #dadada;overflow: auto;}
.shopList{width: 46%; float: left;margin-left: 10px;margin-bottom: 8px;border: 1px solid #dadada;}
.shopList:active{border: 1px solid #999;}
.shopList>img{width: 100%;margin-bottom: 4px;}
.shopList>p,.shopList>b{margin: 0;padding-left: 8px; font-size: 14px;color: rgba(33,33,33,.8);}
.shopList>p{width: 160px; overflow: hidden;white-space: nowrap; text-overflow:ellipsis;}
.shopList>b{color: rgba(203,47,0,1);}
.shopList:nth-child(3),.shopList:nth-child(5){margin-top: -20px;}

</style>