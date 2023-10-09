<template>
	
		<view class="mine">
			<view class="header">
				<view class="avatar">
					<image :src="userInfo.avatar" mode=""></image>
				</view>
				<view class="name">
						<text>{{userInfo.name}}</text>
				</view>
				<view class="numbering">
					司机编号：{{userInfo.number}}
				</view>
				<view class="numbering">
					手机号：{{userInfo.phone}}
				</view>
			</view>
			<view class="nav">
					<view class="title">
						- 本月任务 -
					</view>
					<view class="list">
						<view class="item">
							<view class="count">{{taskInfo.taskAmounts}}</view>
							<view class="name">任务总量</view>
					</view>
					<view class="item">
							<view class="count">{{taskInfo.completedAmounts}}</view>
							<view class="name">完成任务量</view>
					</view>
					<view class="item">
							<view class="count">{{taskInfo.transportMileage}}</view>
							<view class="name">运输里程(km)</view>
					</view>
					</view>
					
			</view>
			<view class="content">
				<UniCell title="车辆信息" url="/subpkg_user/truck/index"/>
				<UniCell title="任务数据"></UniCell>
				<UniCell title="系统设置" url="/subpkg_user/settings/index"/>
			</view>
		</view>
		
</template>

<script setup>
	import {ref} from 'vue'
	import UniCell from '@/components/uni-cell.vue'
	import {userInfoApi,taskApi} from '@/api/user.js'
	const userInfo = ref({})
	const taskInfo = ref({})
	const getInfo = async ()=>{
		const infoRes = await userInfoApi()
		// console.log('infoRes',infoRes);
		userInfo.value = infoRes.data
	}
	const getTask = async ()=>{
		const res = await taskApi('2023','10')
		// console.log(res);
		taskInfo.value = res.data
	}
	getInfo()
	getTask()
</script>

<style lang="scss">
	.mine {
		height: calc(100vh - 50px);
		background-color: #F4F4F4;
		.header {
			width: 100%;
			height: 584rpx;
			background-image: url(@/static/images/img-bg.png);
			background-size: 100%;
			background-position: 0 -4rpx;
			overflow: hidden;
			.avatar{
				margin: 0 auto;
				margin-top: 99.92rpx;
				width: 134.52rpx;
				height: 132.16rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.name{
				margin: 20rpx 0;
				line-height: 50rpx;
				font-family: PingFangSC-SNaNrpxibold;
				font-weight: 600;
				font-size: 36rpx;
				color: #FFFFFF;
				letter-spacing: 0.42rpx;
				text-align: center;
			}
			.numbering{
				margin-bottom: 10rpx;
				line-height: 40rpx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				font-size: 28rpx;
				color: #FFFFFF;
				letter-spacing: 0.32rpx;
				text-align: center;
			}
		}
		.nav{
			margin: 0 auto;
			margin-top: -134rpx;
			width: 92%;
			height: 268rpx;
			background: #FFFFFF;
			border-radius: 16rpx;
			.title{
				line-height: 80rpx;
				text-align: center;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				font-size: 28rpx;
				color: #818181;
				letter-spacing: 0.32rpx;
			}
			.list{
				margin: 10rpx 0;
				height: calc(100% - 100rpx);
				display: flex;
				align-items: center;
				justify-content: space-around;
				.item{
					width: 230rpx;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					.count{
						font-family: PingFangSC-SNaNrpxibold;
						font-weight: 600;
						font-size: 36rpx;
						color: #2A2929;
						letter-spacing: 0.42rpx;
						text-align: center;
					}
					.name{
						font-family: PingFangSC-Regular;
						font-weight: 400;
						font-size: 24rpx;
						color: #2A2929;
						letter-spacing: 0.28rpx;
						text-align: center;
					}
				}
			}
		}
		.content{
			margin: 30rpx auto;
			width: 92%;
			height: 360rpx;
			background: #FFFFFF;
			border-radius: 16rpx;
			.item{
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
		}
	}
</style>