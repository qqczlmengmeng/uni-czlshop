<template>
	<view class="detail">
		<view class="title">
			{{news.title}}
		</view>
		<view class="infa">
			<text>时间:{{news.add_time |formatdata}}</text>
			<text>浏览:{{news.click}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="news.content"></rich-text>
			
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
				id:0,
				news:{
					
				}
			}
		},
		methods: {
			async getcontent(){
				var res=await this.$myRuquest({
					url:'/api/getnew/'+this.id
				})
				console.log(res);
				this.news=res.data.message[0]
			}
		},
		onLoad(options) {
			this.id=options.id,
			this.getcontent()
		}
	}
</script>

<style lang="scss">
.detail{
	padding: 15rpx;
	.title
	{
		font-size: 60rpx;
		text-align: center;
		color: $shop-color;
	}
	.infa{
		text-align: center;
		font-size: 30rpx;
		text:nth-child(2){
			margin-left: 350rpx;
		}
	}
}
</style>
