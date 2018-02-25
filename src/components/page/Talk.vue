<template>
	<div id="talk">
		
		<header>
			<h4>社区</h4>
		</header>
		
		<div class="main">
			
			<div class="T_list">
				<img src="../../assets/images/T_pic01@3x.png"/>
				<div class="T_content">
					<h4>周末买醉指南 如何一口气喝到多款精酿啤酒</h4>
					<p>只要能喝的下</p>
					<div class="count">
						<span>3290</span><span class="heart">45</span>
					</div>
					<div class="tit"><b>放肆户外</b></div>
				</div>
			</div>
			
			<div class="T_list">
				<img src="../../assets/images/T_pic02@3x.png"/>
				<div class="T_content">
					<h4>男士护肤解决方案丨精选护肤套装推荐</h4>
					<p>不得不承认的一个事实就是，护肤真的很麻烦</p>
					<div class="count">
						<span>18300</span><span class="heart">285</span>
					</div>
					<div class="tit"><b>护理研究</b></div>
				</div>
			</div>
			
			<div class="T_list">
				<img src="../../assets/images/T_pic01@3x.png"/>
				<div class="T_content">
					<h4>控制的快感  沉浮的欲望  故事从这里开始</h4>
					<p>只来不及解释了快上车</p>
					<div class="count">
						<span>10080</span><span class="heart">30</span>
					</div>
					<div class="tit"><b>潮流进阶</b></div>
				</div>
			</div>
			
			<div class="T_list">
				<img src="../../assets/images/T_pic01@3x.png"/>
				<div class="T_content">
					<h4>“抄袭”然后提价十倍 奢侈品牌在球鞋领域的崛起</h4>
					<p>平时被跪舔的大牌们纷纷中枪</p>
					<div class="count">
						<span>9090</span><span class="heart">35</span>
					</div>
					<div class="tit"><b>嗜鞋患者</b></div>
				</div>
			</div>
			
		</div>
		
		
	</div>
	
</template>

<script>
export default{
	name:'talk'
}
</script>

<style scoped>
header>h4{width: 100%;}

.T_list{width: 100%;margin-top: 8px;}
.T_list>img{width: 100%;vertical-align: middle;}

.T_content{text-align: left;padding: 10px;background: #fff;overflow: auto;}
.T_content>h4,.T_content>p{font-size: 15px;margin-bottom: 8px;}
.T_content>h4{font-weight: 600;}
.T_content>p{border-bottom: 1px solid #dadada;padding-bottom: 8px;}
.tit,.count{float: left;width: 50%;line-height: 30px;}
.count>span{
	background: url(../../assets/images/icons_eyes@3x.png) no-repeat 5px center;
	background-size: 18px;padding-left: 28px;margin-right: 10px;font-size: 14px;color: #666;}
.count>.heart{background: url(../../assets/images/icons_heart@3x.png) no-repeat 5px center;background-size:18px;}
.tit{text-align: right;padding-right: 4px;}
.tit>b{display: inline-block;width: 76px;line-height: 30px; background: #585560;color: rgba(255,255,255,.9);font-weight: normal;font-size: 16px;text-align: center;}

.main{margin-bottom: 66px;}
</style>