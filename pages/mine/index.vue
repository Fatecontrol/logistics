<template>
	
		<view class="mine">
			<view class="header">
				<view class="avatar">
					<image src="../../static/avatar.png" mode=""></image>
				</view>
				<view class="name">
						<text>李明</text>
				</view>
				<view class="numbering">
					司机编号：67409881
				</view>
				<view class="numbering">
					手机号：177 9998 8765
				</view>
			</view>
			<view class="nav">
					<view class="title">
						- 本月任务 -
					</view>
					<view class="list">
						<view class="item">
							<view class="count">18</view>
							<view class="name">任务总量</view>
					</view>
					<view class="item">
							<view class="count">16</view>
							<view class="name">完成任务量</view>
					</view>
					<view class="item">
							<view class="count">3987</view>
							<view class="name">运输里程(km)</view>
					</view>
					</view>
					
			</view>
			<view class="content">
				<div class="item">
					<text>车辆信息</text>
					<image src="../../static/btn_more.png" mode=""></image>
				</div>
				<div class="item">
					<text>任务数据</text>
					<image src="../../static/btn_more.png" mode=""></image>
				</div>
				<div class="item">
					<text>系统设置</text>
					<image src="../../static/btn_more.png" mode=""></image>
				</div>
			</view>
		</view>
		
</template>

<script setup></script>

<style lang="scss">
	.mine {
		min-height: 100vh;
		background-color: #F4F4F4;
		.header {
			width: 750rpx;
			height: 484rpx;
			background: #d8d8d8;
			background-image: linear-gradient(205deg, #f25c4d 2%, #e52d21 100%, #e52d21 100%);
			border-bottom-left-radius: 20%;
			border-bottom-right-radius: 20%;
			overflow: hidden;
			.avatar{
				margin: 0 auto;
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
			width: 690rpx;
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
			width: 690rpx;
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