<template>
	<view>
		<image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2330482412,576809869&fm=26&gp=0.jpg" class="imgdola"></image>
		<view class="phone">
			
			<view @click="callphone">联 系 电 话  : 0755-18926071679 (点击拨打)</view>
			<view>联 系 地 址： 广东省深圳市西乡街道</view>
			
			<map :latitude="latitude" :longitude="longitude" :scale="scale" :markers="covers" class="map"></map>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				latitude:22.581719,
				longitude:113.865675,
				scale:15,
				covers:[
					{
					latitude:22.581719,
					longitude:113.865675,
					iconPath:'../../static/ddlogo.jpg',
					width:80,
					height:80
					}
				]
			}
		},
		methods: {
			callphone(){
				uni.makePhoneCall({
					phoneNumber:'18926071679',
					success() {
						alert('正在拨打')
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.imgdola{
	width: 100%;
	height: 460rpx;
}
.phone{
	view{
		font-size: 28rpx;
		padding: 10rpx;
		margin-left: 20rpx;
		border-bottom: 1rpx solid #EEEEEE;
		line-height: 60rpx;
		height: 60rpx;
	
	}
}
.map{
	width: 750rpx;
	height: 750rpx;
}
</style>
