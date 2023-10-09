<template>
	<view class="cell" @click="handleTo(url)">
			<text>{{title}}</text>
			<image src="@/static/images/btn_more.png" mode=""></image>
	</view>
</template>

<script setup>
	defineProps({
		title:String,
		url:String
	})
	const handleTo = (url)=>{
		uni.navigateTo({
			url
		})
	}
</script>

<style lang="scss">
	.cell{
		box-sizing: border-box;
		padding: 0 20rpx;
		height: 120rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #f1f1f1;
		image{
			width: 48rpx;
			height: 48rpx;
		}
	}
</style>