<template>
	<div id="search">
		<header>
			<input type="text" name="" id="" placeholder="情侣杯子 迷你" />
			<p>取消</p>
		</header>
		<div class="content">
			<h3>热门搜索</h3>
			<div>特惠时尚毛呢大衣</div>
			<div>情侣杯</div>
			<div>冬日四件套</div>
			<div>男鞋</div>
			<div>白色毛衣男</div>
			<div>风衣</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	input{
		float: left;
		width: 72%;
		height: 32px;
		line-height: 32px;
		text-align: left;
		background: #3b3647;
		border: 1px solid #535353;
		border-radius: 5px;
		margin-top: 8px;
		margin-left: 24px;
		display: inline-block;
		background: url(../../assets/images/icons_Ssearch@3x.png) no-repeat 10px center;
		background-size: 20px;
		font-size: 16px;
		color: #dbdadd;
		line-height: 32px;
		padding-left: 40px;
	}
	.content{
		background: #FFFFFF;
		padding-bottom: 100%;
	}
	.content>h3{
		text-align: left;
		padding-left: 8px;
		font-size: 19px;
		font-weight: 600;
		margin: 8px 0 10px 0;
		color: #999;
	}
	.content>div{
		text-align: left;
		display: inline-block;
		border: 1px solid #aaaaaa;
		border-radius: 5px;
		font-size: 16px;
		color: #666;
		margin: 5px;
		padding: 3px 5px;
	}
	.content>div:nth-child(1),.content>div:nth-child(2){
		border: 1px solid #c73030;
		color: #c73030;
	}
</style>