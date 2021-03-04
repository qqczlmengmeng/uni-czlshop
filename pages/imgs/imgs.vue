<template>
	<view class="pic">
		<!-- 左边滑动区域 -->
		<scroll-view class="left" scroll-y >
			<view @click="choice(index,item.id)"
			:class="clickwho===index?'active':''" v-for="(item,index) in scrollimgnames" :key="index">
			{{item.title}}
			</view>
			</scroll-view>
			<!-- 右边滑动区域 -->
			<scroll-view class="right" scroll-y >
			<view class="item" v-for="(item,index) in imgs" :key="index" v-if="flag">
						<image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2330482412,576809869&fm=26&gp=0.jpg" @click="previewimg(item)"></image>
						<view>{{item.title}}</view>
			</view>
			<view v-if="!flag" style="text-align: center;color: #bab2b5;font-size: 48rpx;margin-top: 20rpx;">
				抱歉，目前没有数据
			</view>
			
			
			
			</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollimgnames:[],
				clickwho:0,
				imgs:[],
				flag:true,
				cosntimg:[
					{
						img_url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2330482412,576809869&fm=26&gp=0.jpg'
					},
					{
						img_url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2330482412,576809869&fm=26&gp=0.jpg'
					},
					{
						img_url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2330482412,576809869&fm=26&gp=0.jpg'
					},
				]
			}
		},
		methods: {
			previewimg(){
				const urls=this.cosntimg.map(item=>{return item.img_url})
				console.log(urls);
				uni.previewImage({
					current:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2330482412,576809869&fm=26&gp=0.jpg',
					urls,
					loop:true,
					indicator:"number"
					
				})
			},
			async getimgcategory(){
			var res=await	this.$myRuquest({
					url:"/api/getimgcategory"
				})
				this.scrollimgnames=res.data.message
			},
			async choice(index,id){
				this.clickwho=index
				
			const res= await this.$myRuquest({
					url:"/api/getimages/"+id
				})
				this.imgs=res.data.message
				if(this.imgs.length>0){
					this.flag=true
				}
				else this.flag=false
				
			}
		
				
			
		},
		onLoad() {
			this.getimgcategory()
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pic{
		height: 100%;
		display: flex;
	}
.left{
	height: 100%;
	width: 200rpx;
	view{
		height: 60px;
		line-height: 60px;
		padding-left: 10px;
		border-bottom: 1px solid #EEEEEE;
		border-right: 1px solid #EEEEEE;
		color: #333333;
		font-size: 34rpx;
	}
	.active{
		background: #B50E03;
		color: #FFFFFF;
	}
}
	.right{
		height: 100%;
		width: 530rpx;
		margin: 0 auto;
		.item{
			margin-top: 30rpx ;
			image{
				height: 530rpx;
				width: 530rpx;
				border-radius: 10rpx;
			}
		}
	}
</style>
