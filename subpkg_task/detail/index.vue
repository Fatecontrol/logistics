<template>
	<view class="detail">
		<view class="card">
			<view class="header">
				<text class="title">基本信息</text>
				<image style="width: 48rpx;height: 48rpx;" src="../../static/images/btn_zhankai.png" mode="widthFix"></image>
			</view>
			<view class="body">
				<view class="time-line">
					<view class="line">北京市昌平区回龙观街道西三旗桥东金燕龙写字楼8877号</view>
					<view class="line">河南省郑州市路北区北清路99号</view>
				</view>
			</view>
			<view class="info-list">
				<text class="name">任务编号</text>
				<text class="content">1557211886558850</text>
			</view>
			<view class="info-list">
				<text class="name">联系人</text>
				<text class="content">张三</text>
			</view>
			<view class="info-list">
				<text class="name">联系电话</text>
				<text class="content">13512345678 <image style="width: 48rpx;height: 48rpx;vertical-align: middle;"
						src="../../static/images/phone.png" mode=""></image> </text>
			</view>
			<view class="info-list">
				<text class="name">提货时间</text>
				<text class="content">2022.05.04 13:00</text>
			</view>
			<view class="info-list">
				<text class="name">预计送达时间</text>
				<text class="content">2022.05.05 10:00</text>
			</view>
		</view>
		<view class="uni-list">
			<text class="name">车辆司机信息</text>
			<image style="width: 48rpx;height: 48rpx;" src="../../static/images/btn_zhankai.png" mode="widthFix"></image>
		</view>
		<view class="uni-list">
			<text class="name">运输路线</text>
			<image style="width: 48rpx;height: 48rpx;" src="../../static/images/btn_zhankai.png" mode="widthFix"></image>
		</view>
		<view class="uni-list">
			<text class="name">物品信息</text>
			<image style="width: 48rpx;height: 48rpx;" src="../../static/images/btn_zhankai.png" mode="widthFix"></image>
		</view>
		<view class="uni-list">
			<text class="name">提货信息</text>
			<image style="width: 48rpx;height: 48rpx;" src="../../static/images/btn_zhankai.png" mode="widthFix"></image>
		</view>
	</view>

	<view class="footer">
		<view class="late">
			延迟提货
		</view>
		<view class="action">
			提货
		</view>
	</view>

</template>

<script setup>
</script>

<style lang="scss">
	.detail {
		position: relative;
		min-height: calc(100vh - 188rpx);
		background-color: #f4f4f4;
		padding: 0 30rpx;
		overflow: hidden;

		.card {
			background-color: #fff;
			padding: 24rpx 30rpx 56rpx;
			border-radius: 16rpx;
			margin: 15rpx 0rpx 30rpx;

			.header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 44rpx;
				font-size: 32rpx;
				color: #2a2929;

				.title {
					font-weight: 500;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					/*设置子元素排列方式*/
					-webkit-box-orient: vertical;
					/*设置显示的行数，多出的部分会显示为...*/
					-webkit-line-clamp: 1;
				}

			}

			.body {
				padding: 43rpx 0;
				border-bottom: 2rpx solid #f4f4f4;

				.time-line {
					position: relative;
					margin-left: 30rpx;
					padding: 0 30rpx;
					border-left: 2rpx dashed red;

					&::before {
						content: '起';
						display: block;
						position: absolute;
						left: -24rpx;
						top: -1rpx;
						width: 44rpx;
						height: 44rpx;
						background: #2a2929;
						font-size: 24rpx;
						color: #ffffff;
						border-radius: 22rpx;
						display: flex;
						justify-content: center;
						align-items: center;
					}

					&::after {
						content: '止';
						display: block;
						width: 44rpx;
						height: 44rpx;
						bottom: -1rpx;
						background: #ef4f3f;
						font-size: 24rpx;
						color: #ffffff;
						position: absolute;
						left: -24rpx;
						border-radius: 22rpx;
						display: flex;
						justify-content: center;
						align-items: center;
					}

					.line {
						font-size: 28rpx;
						color: #818181;
						margin-top: 30rpx;

						&:first-child {
							margin-top: 0;
						}
					}
				}
			}

			.info-list {
				margin-top: 28.26rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.name {
					font-family: PingFangSC-Regular;
					font-weight: 400;
					font-size: 28rpx;
					color: #818181;
					letter-spacing: 0.32rpx;
				}

				.content {
					font-family: PingFangSC-Regular;
					font-weight: 400;
					font-size: 28rpx;
					color: #2A2929;
					letter-spacing: 0.32rpx;
				}
			}
		}

		.uni-list {
			padding: 0 30rpx;
			height: 100rpx;
			background: #FFFFFF;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 30rpx;
		}

	}

	.footer {
		background-color: #fff;
		margin-bottom: 68rpx;
		height: 140rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.late {
			width: 250rpx;
			height: 100rpx;
			line-height: 100rpx;
			background: #E6E6E6;
			border-radius: 50rpx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			font-size: 32rpx;
			color: #2A2929;
			letter-spacing: 0.36rpx;
			text-align: center;
		}

		.action {
			width: 414rpx;
			height: 100rpx;
			line-height: 100rpx;
			background: #EF4F3F;
			border-radius: 50rpx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			font-size: 32rpx;
			color: #FFFFFF;
			letter-spacing: 0.36rpx;
			text-align: center;
		}
	}
</style>