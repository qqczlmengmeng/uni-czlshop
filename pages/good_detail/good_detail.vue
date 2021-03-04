<template>
	<view class="gooddetail">
		<!-- 轮播图区域 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swiper" :key="index">
				<image :src="item.src" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 详细参数区域 -->
		<view class="info" v-for="(item,index) in info">
			<view class="price">
				<text> ${{item.sell_price}}</text>
				<text> ${{item.market_price}}</text>
			</view>
			<view class="title">
				{{item.title}}
			</view>
		</view>
		<view class="line"></view>
		<view class="info2" v-for="(item,index) in info">
			<view>货号:{{item.goods_no}}</view>
			<view>库存:{{item.stock_quantity}}</view>
		</view>
		<view class="line"></view>
		<!-- 详细介绍 -->
		<text class="text1">详细信息</text>
		<view class="line2"></view>
		<view class="desc" v-for="(item,index) in desc">
		<rich-text :nodes="item.content"></rich-text>
		</view>
		<view class="goodnav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
		
		
	</view>
</template>

<script>
	import uniGoodsNav from '../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		components:{
			uniGoodsNav
		},
		data() {
			return {
				id:0,
				swiper:[],
				info:[],
				desc:[],
				 options: [{
				            icon: '../../static/icon/kefu.png',
				            text: '客服'
				        }, {
				            icon: '../../static/icon/dianpu.png',
				            text: '店铺',
				            info: 1,
				            infoBackgroundColor:'#ff0000',
				            infoColor:"#fff"
				        }, {
				            icon: '../../static/icon/carts.png',
				            text: '购物车',
				            info: 2
				        },
						],
				        buttonGroup: 
						[
						{
				          text: '加入购物车',
				          backgroundColor: '#ff0000',
				          color: '#fff'
				        },
				        {
				          text: '立即购买',
				          backgroundColor: '#ffa200',
				          color: '#fff'
				        }
				        ]
			}
		},
		methods: {
			onClick (e) {
			        uni.showToast({
			          title: `点击${e.content.text}`,
			          icon: 'none'
			        })
			      },
			      buttonClick (e) {
			        console.log(e)
					alert("所选商品id为:"+this.id)
			        this.options[2].info++
			      },
			async getgoodsdetail(){
				var res=await this.$myRuquest({
					url:'/api/goods/getdesc/'+this.id
				})
				
				this.desc=res.data.message
				
			},
			async getswiper(){
				var res=await this.$myRuquest({
					url:'/api/getthumimages/'+this.id
				})
				this.swiper=res.data.message
			},
			async getinfo(){
				var res= await this.$myRuquest({
					url:'/api/goods/getinfo/'+this.id
				})
				
				this.info=res.data.message
			}
		},
		onLoad(options) {
			this.id=options.id;
			this.getgoodsdetail()
			this.getswiper()
			this.getinfo()
			console.log(this.desc);
			
		}
	}
</script>

<style lang="scss">
	.goodnav{
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	.text1{
		font-size: 36rpx;
		padding-left: 30rpx;
	}
	.line{
		width: 750rpx;
		background-color: #EEEEEE;
		height: 8rpx;
		margin: 15rpx auto;
	}
	.line2{
		width: 750rpx;
		background-color: #EEEEEE;
		height: 4rpx;
		margin: 15rpx auto;
	}
.gooddetail{
	
	swiper{
		height: 500rpx;
		background-color: #FFFFFF;
		image{
			height: 100%;
			width: 100%;
		}
	}
	.info{
	background-color: #FFFFFF;
		padding-left: 30rpx;
		.price{
			text{
				
			    font-size: 40rpx;
				color: $shop-color;
			}
			text:nth-child(2){
				font-size: 36rpx;
				margin-left: 50rpx;
				color: #d1d1d1;
				text-decoration: line-through;
			}
		}
	}
	.info2{
		padding-left: 30rpx;
	}
	.desc{
		
		padding-left: 30rpx;
		text{
			font-size: 36rpx;
		}
		rich-text{
			line-height:50rpx;
			padding-bottom: 50rpx;
			
		}
		.gomeImgLoad{
			width: 750rpx;
			height: auto;
		}
		
	}
	
}
</style>
