<template>
	<view class="goodlists">
		
		<view class="gooditems" v-for="item in goods" :key="item.id" @click="godetail(item.id)">
			<image src="https://img10.360buyimg.com/n7/jfs/t1/152308/25/10940/67954/5fe19a41E2aa59312/248b32e2ec268d0e.jpg" mode=""></image>
			<view class="price">
				<text>${{item.sell_price}}</text>
				<text>${{item.market_price}}</text>
			</view>
			<view class="name">
				{{item.title}}
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		props:['goods'],
		data() {
			return {
				pageindex:1
			}
		},
		methods: {
		async getgoods(){
				var res= await this.$myRuquest({
					url:'/api/getgoods?='+this.pageindex
				})
			},
			godetail(id){
				this.$emit('reviewson',id)
			}
		}
	}
</script>

<style lang="scss">
	.goodlists{
		display: flex;
		flex-wrap: wrap;
		padding: 0 15rpx;
		justify-content: space-between;
		
		.gooditems{
			width: 355rpx;
			background: #FFFFFF;
			box-sizing: border-box;
		    padding: 15rpx;
			margin: 10rpx auto;
		
			image{
				width: 80%;
				height: 150px;
				display: block;
				margin: auto;
			}
			
			.price{
				margin-top: 10rpx;
				margin-bottom: 5rpx;
				color: $shop-color;
				font-size: 36rpx;
				text:nth-child(2){
					color: #999999;
					font-size: 28rpx;
					margin-left: 16rpx;
					text-decoration: line-through;
				}
			}
		}
	}
</style>
