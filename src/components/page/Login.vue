<template>
	<div id="login">
		<header>
			<p class="back"></p>
			<h4>用户登录</h4>
			<p>注册</p>
		</header>
		<div class="content">
			<form>
				<input type="text" placeholder="请输入手机号/邮箱" />
				<input type="password" placeholder="请输入密码" />
			</form>
			<input type="submit" value="登录" id="logBtn" />
			<p class="forget">忘记密码？</p>
			<div class="other">
				<h3>其他登录方式</h3>
				<a href="javascript:;" class="qq"></a>
				<a href="javascript:;"></a>
				<a href="javascript:;" class="weibo"></a>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>

input{width: 100%;height: 40px;border: none;border-radius: 2px;border-bottom: 1px solid #dadae0;font-size: 16px;margin-top: 8px;}
#logBtn{width: 100%;height: 48px;font-size: 20px;background: #474451;border-radius: 5px;}
.forget{width: 100%;text-align: right;margin-top: 18px;font-weight: 600}
.other>h3{margin-top: 80px;font-size: 18px;background: url(../../assets/images/icons_logLine@3x.png) no-repeat center center;background-size: 300px;}
.other a{display: inline-block;width: 30%;height: 100px;background: url(../../assets/images/L_wechat@3x.png) no-repeat center center;background-size: 45px;}
.other .qq{background: url(../../assets/images/L_QQ@3x.png) no-repeat center center;background-size: 38px;}
.other .weibo{background: url(../../assets/images/L_weibo@3x.png) no-repeat center center;background-size: 45px;}
</style>