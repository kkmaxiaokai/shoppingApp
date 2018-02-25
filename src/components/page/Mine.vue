<template>
	
<div id="mine">
		
	<header>
		<p></p>
		<h4>我的</h4>
		<p class="M_more"></p>
	</header>
	
	<div class="content">
		
		<div class="M_main">
			
			<div class="top">
				<img src="../../assets/images/mine_pic02@3x.png"/>
				<h3>Kevin</h3>
				<nav>
					<ul>
						<li>代付款</li>
						<li>已发货</li>
						<li>待收货</li>
						<li>待评价</li>
					</ul>
				</nav>
			</div>
			
			<div class="all">
				<h3>全部订单</h3>
				<p></p>
			</div>
			
			<div class="other">
				<h4>其他功能</h4>
				<ul>
					<li>我的收藏</li>
					<li>我的评价</li>
					<li>我的地址</li>
					<li>会员服务</li>
					<li>积分兑换</li>
					<li>帮助</li>
				</ul>
			</div>
			
		</div>
	</div>
		
		
</div>
	
</template>

<script>
	
export default{
	name:'mine'
}
</script>

<style scoped>
header>h4{width: 60%;}
header>.M_more{width: 20%;height: 48px;background: url(../../assets/images/icons_more@3x.png) no-repeat center center;background-size: 20px;}

.content{padding: 0 0;margin-bottom: 65px;}

.top{position: relative;width: 100%;height: 202px;background: url(../../assets/images/mine_pic01@3x.png) no-repeat top center;background-size: 100%;}
.top>img{width: 25%;position: absolute;top: 16px;left: 50%;margin-left: -50px;}
.top>h3{width: 80px;padding-right:20px;position: absolute;color: rgba(255,255,255,.9);top: 100%;margin-top: -85px;left: 50%;margin-left: -40px;background: url(../../assets/images/icons_rMoreW@3x.png) no-repeat 70px center;background-size: 8px;}
.top>nav{position: absolute;bottom: 0;left: 0;width: 100%;background: rgba(255,255,255,.5);}
.top>nav>ul{overflow: auto;}
.top>nav>ul>li{float: left;width: 25%;height: 32px;line-height: 32px;border-right: 1px solid #fff;font-size: 16px;color: rgba(255,255,255,.9);margin:4px 0;}
.top>nav>ul>li:last-child{border: none;}
.top>nav>ul>li:active{text-decoration: underline;}

.all{width: 100%;height: 48px;background: #fff url(../../assets/images/icons_rMoreB@3x.png) no-repeat 98% center;background-size: 12px;opacity: .8;}
.all:active{opacity: 1;}
.all>h3{width: 80%;line-height: 48px;font-size: 16px;text-align: left;text-indent: 12%;background: url(../../assets/images/icons_m_all@3x.png) no-repeat 16px center;background-size: 22px;}

.other{background: #fff;margin-top: 8px;}
.other>h4{height: 42px;line-height: 42px;text-align: left;text-indent: 16px;font-size: 16px;font-weight: 600;color: rgba(33,33,33,.5);border-bottom: 1px #dadada solid;}
.other>ul{overflow: auto;}
.other>ul>li{float: left;width: 33%;font-size: 15px; height: 118px; line-height: 118px;padding-top: 18px;}
.other>ul>li{border-bottom: 1px solid #dadada;background: no-repeat center 22px;background-size: 40px;opacity: .8;}
ul>li:nth-child(1),ul>li:nth-child(2),ul>li:nth-child(4),ul>li:nth-child(5){border-right: 1px solid #dadada;}
.other>ul>li:nth-child(1){background-image: url(../../assets/images/icons_m_collect@3x.png);}
.other>ul>li:nth-child(2){background-image: url(../../assets/images/icons_m_appraise@3x.png);}
.other>ul>li:nth-child(3){background-image: url(../../assets/images/icons_m_address@3x.png);}
.other>ul>li:nth-child(4){background-image: url(../../assets/images/icons_m_member@3x.png);}
.other>ul>li:nth-child(5){background-image: url(../../assets/images/icons_m_integral@3x.png);}
.other>ul>li:nth-child(6){background-image: url(../../assets/images/icons_m_help@3x.png);}
.other>ul>li:active{border: 1px solid #999;color: #212121;opacity: 1;}


</style>