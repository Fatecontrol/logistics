<template>
	<view class="car-page">
		<image v-for="url in truckInfo.pictureList" class="car" :src="url.url" mode="widthFix"></image>
		<view class="content">
			<view class="item">
				<view class="title">车辆编号</view>
				<view class="name">{{truckInfo.id}}</view>
			</view>
			<view class="item">
				<view class="title">车辆号牌</view>
				<view class="name">{{truckInfo.licensePlate}}</view>
			</view>
			<view class="item">
				<view class="title">车型</view>
				<view class="name">{{truckInfo.truckType}}</view>
			</view>
			<view class="item">
				<view class="title">所属机构</view>
				<view class="name">{{truckInfo.currentOrganName}}</view>
			</view>
			<view class="item">
				<view class="title">载重</view>
				<view class="name">{{Math.floor(truckInfo.allowableLoad)}}吨</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	import {truckApi} from '@/api/user.js'
	import {onLoad} from '@dcloudio/uni-app'
	const truckInfo = ref({})
	const getTruckInfo = async ()=>{
		const res = await truckApi()
		// console.log('res',res);
		truckInfo.value = res.data
	}
	onLoad(()=>{
		getTruckInfo()
	})
</script>

<style lang="scss">
.car-page{
	width: 100%;
	height: calc(100vh - 44px);
	background: #f4f4f4;
	padding:0 30rpx;
	.car{
		width: 690rpx;
		margin: 30rpx 0;
	}
	.content{
		width: 690rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		padding:40rpx;
		.item{
			display: flex;
			justify-content: space-between;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			font-size: 28rpx;
				letter-spacing: 0.32rpx;
			.title{
				color: #818181;
			}
			.name{
				color: #2A2929;
			}
		}
	}
}
</style>
