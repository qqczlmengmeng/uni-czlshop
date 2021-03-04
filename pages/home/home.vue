<template>
	<view class="home">
		
		<swiper circular :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in message">
				
					<image  v-bind:src="item.img" mode=""></image>
				
			</swiper-item>
			
		</swiper>
		
		<!-- 导航区域 -->
		<view class="nav" >
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navstopath(item.path)">
				<view :class="item.icon"> 
				</view>
				<text>{{item.title}}</text>
			</view>
	
			
		</view>
		<!-- 推荐商品 -->
		<view class="hotgoods">
			<view class="title">
			    推荐商品
			</view>
			<good-list :goods="goods" @reviewson='gogooddetail'></good-list>
			
		</view>
	</view>
</template>

<script>
	import goodlist from "../../components/good-list/good-list.vue"
	export default {
		components:{
			'good-list':goodlist
		},
		data() {
			return {
				message:[],
				goods:[],
				navs:[
					{
						icon:'iconfont icon-ziyuan',
						title:"商城超市",
						path:'/pages/goods/goods'
					},
					{
						icon:"iconfont icon-guanyuwomen",
						title:"联系我们",
						path:'/pages/contacts/contacts'
					},
					{
						icon:"iconfont icon-tupian",
						title:"社区图片",
						path:'/pages/imgs/imgs'
					},
					{
						icon:"iconfont icon-shipin",
						title:"视频介绍",
						path:'/pages/videos/videos'
					},
				]
			}
		},
		methods: {
			gogooddetail(id){
				
				uni.navigateTo({
					url:'../good_detail/good_detail?id='+id
				})
			},
			test(){
				console.log(this.message[0].img);
			},
			async getswiper(){
				// var _this=this
				// uni.request({
				// 	url:"http://localhost:8082/api/getlunbo",
				// 	success(res) {
				// 		console.log(res);
				// 		_this.message=res.data.message
				// 		if(res.data.status!==0){
				// 			return uni.showToast({
				// 				title:"获取数据失败"
				// 			})
				// 		}
				// 	}
				// })
				const res=await this.$myRuquest({
					url:'/api/getlunbo'
				})
				this.message=res.data.message
				
			},
			
			async gethotshops(){
				const res=await this.$myRuquest({
					url:'/api/getgoods?pageindex=1'
				})
				this.goods=res.data.message
				console.log(res.data.message);
			},
			navstopath(path){
				
				uni.navigateTo({
					url:path
				})
			}
		},
	
		onLoad() {
			this.getswiper()
			this.gethotshops()
			
		}
		
	}
</script>

<style lang="scss">
	.nav{
		display: flex;
		.nav_item{
			width: 25%;
			text-align: center;
			view{
				width: 110rpx;
				height: 110rpx;
				background: $shop-color;
				border-radius: 55rpx;
				margin: 10rpx auto;
			    line-height: 110rpx;
				color: #FFFFFF;
				font-size: 50rpx;
				
			}
			.icon-tupian{
				font-size: 40rpx;
			}
			text{
				font-size: 32rpx;
				
			}
		}
	}
	

	
.home{
	swiper{
		width: 750rpx;
		height: 380rpx;
		image{
			height: 100%;
            width: 100%;
		}
	}
	// .nav{
	// 	display: flex;
	// 	.nav_item{
	// 		width: 25%;
	// 		text-align: center;
	// 		view{
	// 			width: 120rpx;
	// 			height: 120rpx;
	// 			line-height: 120rpx;
	// 			background: $shop-color;
	// 			border-radius: 60rpx;
	// 			margin: 10px auto;
	// 			font-size: 50rpx;
	// 			color: #FFFFFF;
	// 		}
	// 		.icon-tupian{
	// 			font-size: 40rpx;
	// 		}
	// 		text{
	// 			font-size: 30rpx;
	// 		}
	// 	}
	// }
	
	.hotgoods{
		background: #eee;
		overflow: hidden;
		
		.title{
			text-align: center;
			height: 50px;
			line-height: 50px;
			color:$shop-color;
			font-size: 25px;
			background: #FFFFFF;
			margin: 7rpx auto;
		}
	}

}
</style>
