<template>
	<view class="goods">
		<good-list :goods="goods" @reviewson='gogooddetail'></good-list>
		<view class="isover">
			---------已经没有啦----------------
		</view>
	</view>
</template>

<script>
	import goodlist from "../../components/good-list/good-list.vue"
	export default {
		components:{
			"good-list":goodlist
		},
		data() {
			return {
				goods:[],
				pageindex:1,
				flag:false
			}
		},
		methods: {
			gogooddetail(id){
				
				uni.navigateTo({
					url:'../good_detail/good_detail?id='+id
				})
			},
			
			async getgoods(callback){
					var res= await this.$myRuquest({
						url:'/api/getgoods?pageindex='+this.pageindex
					})
					
					this.goods=[...this.goods,...res.data.message]
					callback&&callback()
				}
		},
		onLoad() {
			this.getgoods()
		},
		onReachBottom(){
			if(this.goods.length<this.pageindex*10)return this.flag=true
			this.pageindex++;
			this.getgoods();
		},
		onPullDownRefresh() {
			this.pageindex=1;
			this.flag=false;
			this.goods=[];
			setTimeout(()=>{this.getgoods(
			()=>uni.stopPullDownRefresh()
			)},1000);
			
		}
	}
</script>

<style>
.goods{
	background: #eee;
}
.isover{
	width: 100%;
	height: 60rpx;
	line-height: 60rpx;
	font-size: 30rpx;
	
	text-align: center;
	margin-top: 60rpx;
}
</style>
