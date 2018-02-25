<template>
	<div id="search">
		<header>
			<p></p>
			<input type="text" name="" id="" placeholder="冬季男装 韩版" />
		</header>
		<div class="content">
			
			<div class="LBtop">
				<div class="LBleft">
					<p>综合排序</p>
					<p>销量优先</p>
				</div>
				<div class="LBright">
					<p></p>
					<p>筛选</p>
				</div>
			</div>
			
			<div class="LBbottom">
				<div>
					<img src="../../assets/images/LBpic01@3x.png"/>
					<p>秋季中长款韩版男士外套</p>
					<strong><span>新品</span><span>包邮</span></strong>
					<b>￥168.00<span>2600人付款</span></b>
				</div>
				<div>
					<img src="../../assets/images/LBpic02@3x.png"/>
					<p>秋季中长款韩版男士外套</p>
					<strong><span>新品</span><span>包邮</span></strong>
					<b>￥168.00<span>2600人付款</span></b>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	header>p{
		height: 48px;
		background: url(../../assets/images/icons_topBack@3x.png) no-repeat 20px center;
		background-size: 12px;
	}
	header>input{
		float: left;
		width: 76%;
		margin-left: -16px;
		height: 32px;
		line-height: 32px;
		text-align: left;
		background: #3b3647;
		border: 1px solid #535353;
		border-radius: 5px;
		margin-top: 8px;
		display: inline-block;
		background: url(../../assets/images/icons_Ssearch@3x.png) no-repeat 10px center;
		background-size: 20px;
		font-size: 15px;
		color: #dadada;
		line-height: 32px;
		padding-left: 40px;
	}
	.content{
		padding-bottom: 100%;
		padding: 0;
	}
	.LBtop{
		height: 42px;
		line-height: 42px;
		background: #FFFFFF;
		display: flex;
	}
	.LBleft,.LBright{
		display: flex;
	}
	.LBleft{
		flex: .6;
	}
	.LBleft>p{
		display: inline-block;
		font-size: 16px;
		color: #484848;
		flex: 1;
	}
	.LBleft>p:nth-child(1){
		background: url(../../assets/images/icons_red@3x.png) no-repeat right 17px;
		background-size: 12px;
		color: #D25940;
		font-weight: 600;
	}
	.LBright{
		flex: .4;
	}
	.LBright>p{
		display: inline-block;
		font-size: 16px;
		color: #484848;
		flex: 1;
	}
	.LBright>p:nth-child(1){
		background: url(../../assets/images/icons_txtList@3x.png) no-repeat center 12px;
		background-size: 20px;
	}
	.LBright>p:nth-child(2){
		border-left: 1px solid #ccc;
		margin: 0;
	}
	.LBbottom>div{
		width: 49%;
		background: #FFFFFF;
		float: left;
		margin-top: 8px;
		line-height: 1.5em;
	}
	.LBbottom>div:nth-child(2n){
		margin-left: 2%;
	}
	.LBbottom>div>img{
		width: 100%;
	}
	.LBbottom>div>p{
		font-size: 16px;
		font-weight: 600;
		color: rgba(33,33,33,.8);
		padding-left: 8px;
		width: 96%;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.LBbottom>div>strong{
		
	}
	span{
		width: 30%;
		display: inline-block;
		text-align: left;
	}
</style>