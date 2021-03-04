<template>
	<view class="add_picture">
		<label class="title">视频列表:</label><br>
		<view class="many_photo" v-show="addVideo">
		  <image src="../../static/image/img_add.png" class="close-img" @click="test"></image>
		</view>
		<view class="" v-show="showVideo" style="position: relative;">
			<video :src="src" class="video"></video>
			<image src="../../static/icon/img_close.png" @click="DelImg" class="close-img2" style="height: 36rpx;"></image>
		</view>
		
		
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				src: '',
				showVideo:false,
				addVideo:true,
			}
		},
		methods: {
			test: function () {
						    var self = this;
						    uni.chooseVideo({
						        count: 1,
						        sourceType: ['camera', 'album'],
						        success: function (res) {
									console.log("选择视频成功",res)
									self.showVideo=true
									self.addVideo=false
						            self.src = res.tempFilePath;
									uni.uploadFile({
										url: 'http:。。。', //接口地址
										filePath: res.tempFilePath,
										name: 'files',
										// formData: {
										//     'user': 'test'
										// },
										header: {
											Authorization: 'Bearer ' + uni.getStorageSync('access')
										},
										 success: (uploadFileRes) => {
											console.log('1张', uploadFileRes);
											let bold = JSON.parse(uploadFileRes.data)
											console.log(bold)
											console.log(bold.result[0].filePath)
											self.returnImage = bold.result[0].filePath + bold.result[0].fileName
											console.log("this.returnImage", self.returnImage)
										},
									
									});
						        }
						    });
						},
			//右上角删除视频
				DelImg(){
							this.src='',
							this.showVideo=false,
							this.addVideo=true
						},
			
		}
	}
</script>

<style>
video {
		margin-left: 25rpx;
		margin-right: 25rpx;
		width: 700rpx;
		height: 375rpx;
	
	}
	.close-img{
		top: 20rpx;
		height: 100rpx;
		width: 100rpx;
		padding: 30rpx;
	}
	.close-img2 {
		position: absolute;
		height: 50rpx;
		width: 50rpx;
		top: 18rpx;
		right: 72rpx;
	}

</style>
