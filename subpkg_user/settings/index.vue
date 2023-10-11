<template>
	<view class="setting-page">
		<view class="list">
			<UniCell title="换绑手机"></UniCell>
			<UniCell title="修改密码"></UniCell>
			<UniCell title="消息通知设置"></UniCell>
			<UniCell title="修改密码"></UniCell>
			<UniCell title="清理缓存"></UniCell>
		</view>
		<button class="backBtn" @click="handleBack">退出</button>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog  title="确定退出登录吗?"  confirmText="退出" :duration="2000" :before-close="true" @close="handleCancel" @confirm="handleSure"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script setup>
	import UniCell from '@/components/uni-cell.vue'
	import {ref} from 'vue'
	const popup = ref()
	const handleBack = ()=>{
		      popup.value.open()
	}
	// 关闭弹框
	const handleCancel = ()=>{
		 popup.value.close()
	}
	const handleSure = ()=>{
		uni.removeStorageSync('__persisted__user')
		uni.reLaunch({
			url:'/pages/login/index'
		})
	}
</script>

<style lang="scss">
	.setting-page{
		height: calc(100vh - 44px);
		background: #f4f4f4;
		overflow: hidden;
		padding: 0 30rpx;
		.list{
			margin: 30rpx auto 80rpx;
			width: 100%;
			background: #FFFFFF;
			border-radius: 16rpx;
		}
		.backBtn{
			width: 100%;
			height:120rpx;
			line-height: 120rpx;
			background-color: #fff;
			&::after{
				border: none;
			}
		}
	}
	
</style>
