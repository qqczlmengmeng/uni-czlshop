<template>
	<view class="news">
	   <view class="news_item"  v-for="(item,index) in news" @click="godetail(item.id)">
		   <image :src="newsurl[index]" mode=""></image>
		   <view class="right">
		   	<view class="title">
		   		{{item.title}}
		   	</view>
		   	<view class="info">
		   		<text>发表时间:{{item.add_time | formatdata}}</text>
		   		<text>浏览:{{item.click}}</text>
		   	</view>
		   </view>
	   	       
		  
	   </view>
	 
	   
	</view>
</template>

<script>
	export default {
		filters:{
			formatdata(data){
				const ndata =new Date(data)
				const year =ndata.getFullYear()
				const month=ndata.getMonth().toString().padStart(2,0)
				const day=ndata.getDay().toString().padStart(2,0)
				return year+'-'+month+'-'+day
			}
		},
		data() {
			return {
				newsurl:[
					'http://zixun.kongfz.com/attachment/cms_article/Mon_2011/1977411_4634b292d393a73.png',
					'http://zixun.kongfz.com/attachment/cms_article/Mon_2011/1977411_326adcdaa84b561.png',
					'http://zixun.kongfz.com/attachment/cms_article/Mon_2011/1977411_7152f579c355641.png',
					'https://www.kfzimg.com/sw/kfzimg/3287/02cc378c2e6d9f8398_s.jpg',
					'http://www.kfzimg.com/sw/auction/1720/02b9a6fb4d513cbd8d_b.jpg',
					'https://img0.kfzimg.com/operation/8f/58/8f5846db09d5d295ca2b013a025c2b2e.jpg',
					'https://img0.kfzimg.com/operation/57/69/5769fb144c8249907d08e919c1aedf9e.jpg',
					'http://img.kongfz.cn//sw/kfzimg/3274/02c9a4aaaa3ff58c35_b.jpg',
					'http://www.kfzimg.com/sw/kfzimg/3280/02caf74c32b13cc176_n.jpg',
					'http://5b0988e595225.cdn.sohucs.com/images/20190527/8a1264bb3617414a8819d7f5ffcafadc.jpeg'
					],
				news:[]
			}
		},
		
		methods: {
			godetail(id){
				uni.navigateTo({
					url:'../new_detail/new_detail?id='+id,
					})
			},
			async getnews(){
			var res=await this.$myRuquest({
					url:'/api/getnewslist'
				})
				console.log(res);
				this.news=res.data.message
			}
			
		
		},
		onLoad() {
			this.getnews()
		}
		
	}
	
</script>

<style lang="scss">
.news{
	
	
	.news_item{
		display: flex;
		padding: 10rpx;
		border-bottom: 1px solid $shop-color;
		.right{
			margin-left: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		image{
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
			
		}
		.title{
			font-size: 33rpx;
		}
		.info{
			font-size: 24rpx;
			text:nth-child(2){
				margin-left: 60rpx;
			}
			
		   
		}
	}
}
</style>
