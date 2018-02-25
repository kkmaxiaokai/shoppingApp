<template>
	
<div id="shopCar">
	<header>
		<p></p>
		<h4>购物车</h4>
		<p>管理</p>
	</header>
		
	<div class="S_main">
		<div class="content">
			<div class="shopItem">
				<div class="left">
					<div class="mui-input-row mui-checkbox mui-left">
						<input name="checkbox" value="Item 1" type="checkbox" >
					</div>
				</div>
				<div class="right">
					<img src="../../assets/images/S_carPic01@3x.png"/>
					<div class="S_content">
						<h4>情侣呢大衣韩版潮流</h4>
							<select>
							  	<option>
							   	<span>黑色男款;</span>
							   	<span>XL</span>
							  	</option>
							</select>
							<div>
							<b>￥148.00</b>
							<div class="mui-numbox">
								<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
								<input class="mui-input-numbox" type="number" value="1" />
								<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
							</div>
					   </div>
					</div>
				</div>
			</div>
		</div>
			
		<div class="S_buy">
			<h3>大家在买</h3>
			<mt-swipe :auto="0">
				<mt-swipe-item>
				  	<div class="carList">
				  		<img src="../../assets/images/car_pic01@3x.png" />
				  		<p>潮流呢子大衣男 毛呢大衣</p>
				  		<b>￥148.00</b>
				  	</div>
				  	<div class="carList">
				  		<img src="../../assets/images/car_pic02@3x.png" />
				  		<p>港仔文艺 男短款休闲衣</p>
				  		<b>￥356.00</b>
				  	</div>
				  	<div class="carList">
				  		<img src="../../assets/images/car_pic03@3x.png" />
				  		<p>2018最新牛仔衣连帽</p>
				  		<b>￥223.00</b>
				  	</div>
				  	<div class="carList">
				  		<img src="../../assets/images/car_pic04@3x.png" />
				  		<p>潮流韩版棉衣风立领</p>
				  		<b>￥205.00</b>
				  	</div>
				  	<div class="carList">
				  		<img src="../../assets/images/car_pic05@3x.png" />
				  		<p>秋季韩版中长款风衣</p>
				  		<b>￥198.00</b>
				  	</div>
				  	<div class="carList">
				  		<img src="../../assets/images/car_pic06@3x.png" />
				  		<p>高街宽松涂鸦风牛仔衣</p>
				  		<b>￥158.00</b>
				  	</div>
				</mt-swipe-item>
				<mt-swipe-item>
				  	<div class="carList">
				  		<img src="../../assets/images/car_pic01@3x.png" />
				  		<p>潮流呢子大衣男 毛呢大衣</p>
				  		<b>￥148.00</b>
				  	</div>
				  	<div class="carList">
				  		<img src="../../assets/images/car_pic02@3x.png" />
				  		<p>港仔文艺 男短款休闲衣</p>
				  		<b>￥356.00</b>
				  	</div>
				  </mt-swipe-item>
				<mt-swipe-item>
				  	<div class="carList">
				  		<img src="../../assets/images/car_pic01@3x.png" />
				  		<p>潮流呢子大衣男 毛呢大衣</p>
				  		<b>￥148.00</b>
				  	</div>
				  	<div class="carList">
				  		<img src="../../assets/images/car_pic02@3x.png" />
				  		<p>港仔文艺 男短款休闲衣</p>
				  		<b>￥356.00</b>
				 	</div>
				</mt-swipe-item>
				<mt-swipe-item>
					<div class="carList">
						<img src="../../assets/images/car_pic01@3x.png" />
						<p>潮流呢子大衣男 毛呢大衣</p>
					  	<b>￥148.00</b>
				  	</div>
				  	<div class="carList">
				  		<img src="../../assets/images/car_pic02@3x.png" />
				  		<p>港仔文艺 男短款休闲衣</p>
				  		<b>￥356.00</b>
				  	</div>
			  	</mt-swipe-item>
			</mt-swipe>
		</div>
	</div>
		
	<div id="s_total">
		<div class="sT_left">
			<div class="mui-input-row mui-checkbox mui-left">
				<input name="checkbox" value="Item 1" type="checkbox" id="checkBtn" >
			</div>
			<p>全选</p>
		</div>
		<div class="sT_right">
			<input type="button" name="total" id="total" value="结算" />
			<p>合计：<b>￥2899.00</b></p>
		</div>
	</div>
	
</div>
	
</template>

<script>
export default{
	name:'shopCar'
}
</script>

<style scoped>
header>h4{width: 60%;}
header>.L_search{width: 20%;height: 48px;}

.S_main{margin-bottom: 110px;}
.content{background: #fff;padding: 12px 0;}
.shopItem{width: 100%; text-align: left; background: #fff; overflow: auto;padding-bottom:8px;border-bottom: 1px solid #dadada;}
.left{float: left; width: 20%;margin-left: -12px;margin-top: 30px;}
.right{float: left; width: 80%;}
.right>img,.right>.S_content{float: left;}
.right>img{width: 32%;margin-left: -16px;margin-right: 8px;}
.right>.S_content{width: 68%;margin-top: 8px;}
.S_content>h4{font-size: 16px;font-weight: 600;opacity: .95;}
.S_content>select{padding: 0;margin: 8px 0 0 0;color: #999;}

.S_content>div>b,.S_content>div>.mui-numbox{float: left;}
.S_content>div>b{color: rgba(240,0,0,.8);font-size: 15px;width: 35%;line-height: 33px;}
.S_content>div{margin-top: 8px;}
.S_content>div>.mui-numbox{width: 57%;margin-left: 8%;height: 28px;}

.S_buy{width: 100%;background: #fff;margin-top: 12px;}
.S_buy>h3{padding: 12px 0;border-bottom: 1px solid #DADADA;font-size: 16px;font-weight: 600;}
.carList{width: 30%;float: left;margin: 8px 0 8px 9px;text-align: left;}
.carList>img{width: 100%;}
.carList>p,.carList>b{margin: 0;padding-left: 2px; font-size: 14px;color: rgba(33,33,33,.8);}
.carList>p{width: 110px; overflow: hidden;white-space: nowrap; text-overflow:ellipsis;}
.carList>b{color: rgba(203,47,0,1);}

#s_total{width: 100%;height: 48px;position: fixed;z-index: 99;bottom: 56px;left: 0;background: #fff;border-top:1px solid #DADADA;}
.sT_left,.sT_right{float: left;line-height: 48px;}
.sT_left{width: 25%;}
.sT_left>div,.sT_left>p{float: left;width: 50%;}
.sT_left>div{margin-top:6px;margin-left: -10px;}
.sT_left>p{font-size: 16px;color: rgba(0,0,0,.7);margin: 0;}
.sT_right{width: 75%;}
.sT_right>p,.sT_right>input{float: right;}
.sT_right>p{font-size: 16px;color: rgba(33,33,33,.8);padding-right: 10px;}
.sT_right>p>b{color: rgba(240,0,0,.85);}
.sT_right>input{width: 99px;height: 48px;border:none;border-radius: 0;font-size: 17px;background: rgba(240,0,0,1);color: rgba(255,255,255,9);}

/*定义全选按钮大小*/
#checkBtn:before{font-size: 25px;}
/*定义选择商品圆按钮*/
.mui-checkbox{height: 30px;}
.mui-checkbox input[type=checkbox]:checked:before{color: #2e2a38;}
/*定义ppt的高度*/
.mint-swipe{height: 395px;}

</style>