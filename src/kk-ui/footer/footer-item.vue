<template>
	<div class="footer-item" :class="id==$parent.value?show:''" @click="jumpPage">
		<!--具名插槽-->
		<span class="footer-item-icon" v-show="id!=$parent.value"><slot name="icon-default"></slot></span>
		<span class="footer-item-icon" v-show="id==$parent.value"><slot name="icon-show"></slot></span>
		<span class="footer-item-text"><slot></slot></span>
	</div>
</template>

<script>
	export default{
		props:["id"],
		data(){
			return{
				show:"isShow"
			}
		},
		methods:{
			jumpPage(){
				this.$parent.$emit('input',this.id)
				this.$router.push(this.id)
//				console.log(this.$route.path)
			}
		},
//		用来监听底部导航的切换，手动输入时也改变路由地址
		watch:{
			"$route.path"(a){
				this.$parent.$emit('input',this.$route.path)
//				console.log(a)
			}
		}
	}
</script>

<style scoped lang="less">
.footer-item{
	flex: 1;
	text-align: center;
	font-size: 12px;
	color: rgba(255,255,255,.6);
	border-top: 1px solid #333;
	&.isShow{
		color: rgba(255,255,255,1)
	}
	.footer-item-icon{
		padding-top: 6px;
		display: block;
		img{
			width: 24px;
			height: 23px;
		}
	}
	.footer-item-text{
		display: block;
		margin-top: -5px;
	}
}
</style>