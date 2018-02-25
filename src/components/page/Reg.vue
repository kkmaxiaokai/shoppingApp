<template>
	<div id="reg">
		
		<header>
			<p class="back"></p>
			<h4>用户注册</h4>
			<p>登录</p>
		</header>
		
		<div class="content">
			<form action="" method="post">
				<label>
					<span>用户名：</span>
					<input type="text" placeholder="请输入用户名" />
				</label>
				<label>
					<span>密码：</span>
					<input type="password" placeholder="请输入密码" />
				</label>
				<label>
					<span>重复密码：</span>
					<input type="password" placeholder="请重复输入密码" />
				</label>
				<label id="tel">
					<span>手机号：</span>
					<input type="text" placeholder="请输入手机号" />
					<button>获取验证码</button>
				</label>
				<label>
					<span>验证码：</span>
					<input type="text" placeholder="请输入验证码" />
				</label>
			</form>
			
			<input type="submit" value="注册" id="regBtn" />
		</div>
		
		
	</div>
</template>

<script>
</script>

<style scoped>
label{display: block;width: 100%;height: 56px;margin-top: 8px;}
span,input{float: left;}
span{display: inline-block;width: 25%;line-height: 48px;text-align: center;font-size: 16px;}
input{width: 75%;height: 40px;border: none;border-radius: 2px;border-bottom: 1px solid #dadae0;font-size: 14px;}

#tel{position: relative;}
button{position: absolute;top: 3px;right: 3px;background: rgba(67,66,113,.6);color:rgba(255,255,255,.8)}
#regBtn{width: 100%;height: 48px;font-size: 20px;background: #474451;border-radius: 5px ;}
</style>