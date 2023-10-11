<template>
	<view class="detail" v-if="detailInfo.id">
		<!-- 搜索栏 -->
		<view class="search-bar">
			<!-- #ifdef APP-PLUS || MP -->
			<text class="iconfont icon-scan"></text>
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<text class="iconfont icon-search"></text>
			<!-- #endif -->
			<input class="input" type="text" placeholder="输入运单号" />
		</view>
		<scroll-view class="scroll-view-wrapper" scroll-y="true">
			<view class="content">
				<!-- 基本信息 -->
				<view class="card">
					<view class="header">
						<view class="title">基本信息 <text v-if="!showBasicInfo" class="tip">（任务编号：{{ detailInfo.transportTaskId }}）</text> </view>
						<image style="width: 48rpx;height: 48rpx;" src="../../static/images/btn_zhankai.png" mode="widthFix"
							v-if="!showBasicInfo" @click="showBasicInfo=true"></image>
						<image style="width: 48rpx;height: 48rpx;" src="../../static/images/btn_guanbi.png" mode="widthFix"
							v-if="showBasicInfo" @click="showBasicInfo=false"></image>
					</view>

					<template v-if="showBasicInfo">
						<view class="body">
							<view class="time-line">
								<view class="line">{{ detailInfo.startAddress }}</view>
								<view class="line">{{ detailInfo.endAddress }}</view>
								<navigator hover-class="none" class="guide">
									<text class="iconfont icon-guide"></text>
									<text>开始导航</text>
								</navigator>
							</view>
						</view>
						<!-- 任务信息 -->
						<view class="info-list">
							<text class="name">任务编号</text>
							<text class="content">{{ detailInfo.transportTaskId }}</text>
						</view>
						<!-- 待提货展示数据 -->
						<template v-if="detailInfo.status === 1">
							<view class="info-list">
								<text class="name">联系人</text>
								<text class="content">{{ detailInfo.startHandoverName }}</text>
							</view>
							<view class="info-list">
								<text class="name">联系电话</text>
								<view class="content">{{ detailInfo.startHandoverPhone }}
									<image style="width: 48rpx;height: 48rpx;vertical-align: middle;" src="../../static/images/phone.png"
										mode=""></image>
								</view>
							</view>
							<view class="info-list">
								<text class="name">预计提货时间</text>
								<text class="content">{{ detailInfo.planDepartureTime }}</text>
							</view>
							<view class="info-list">
								<text class="name">实际提货时间</text>
								<text class="content">{{ detailInfo.planArrivalTime }}</text>
							</view>
						</template>
						<!-- 在途展示数据 -->
						<template v-if="detailInfo.status === 2">
							<view class="info-list">
								<text class="name">交付联系人</text>
								<text class="content">{{ detailInfo.finishHandoverName  }}</text>
							</view>
							<view class="info-list">
								<text class="name">联系电话</text>
								<view class="content">{{ detailInfo.finishHandoverPhone  }}
									<image style="width: 48rpx;height: 48rpx;vertical-align: middle;" src="../../static/images/phone.png"
										mode=""></image>
								</view>
							</view>
							<view class="info-list">
								<text class="name">预计送达时间</text>
								<text class="content">{{ detailInfo.planArrivalTime  }}</text>
							</view>
							<view class="info-list">
								<text class="name">实际送达时间</text>
								<text class="content">{{ detailInfo.actualArrivalTime  }}</text>
							</view>
						</template>

					</template>
				</view>

				<!-- 司机信息 -->
				<view class="card">
					<view class="header">
						<text class="title">车辆司机信息</text>
						<image style="width: 48rpx;height: 48rpx;" src="../../static/images/btn_zhankai.png" mode="widthFix"
							v-if="!showDriverInfo" @click="showDriverInfo=true"></image>
						<image style="width: 48rpx;height: 48rpx;" src="../../static/images/btn_guanbi.png" mode="widthFix"
							v-if="showDriverInfo" @click="showDriverInfo=false"></image>
					</view>

					<template v-if="showDriverInfo">
							<view class="info-list">
								<text class="name">车牌号</text>
								<text class="content">京A123456</text>
							</view>
							<view class="info-list">
								<text class="name">司机姓名</text>
								<text class="content">张三</text>
							</view>
					</template>

				</view>

				<!-- 运输路线 -->
				<view class="card">
					<view class="header">
						<text class="title">运输路线</text>
						<image style="width: 48rpx;height: 48rpx;" src="../../static/images/btn_zhankai.png" mode="widthFix"
							v-if="!showTransport" @click="showTransport=true"></image>
						<image style="width: 48rpx;height: 48rpx;" src="../../static/images/btn_guanbi.png" mode="widthFix"
							v-if="showTransport" @click="showTransport=false"></image>
					</view>
					<!-- <template v-if="showTransport"> -->
						<view class="information" v-if="showTransport">
							<view class="address">
								<view class="start">
									<text class="province">北京市</text>
									<text class="city">北京市</text>
								</view>
								<image style="width: 72rpx;height: 32rpx;" src="../../static/images/img_jiantou.png" mode=""></image>
								<view class="end">
									<text class="province">河北省</text>
									<text class="city">石家庄市</text>
								</view>
							</view>
						</view>
						
					<!-- </template> -->
				</view>
				
				<!-- 货物信息 -->
				<view class="card">
					<view class="header">
						<view class="title">货物信息 <text v-if="!showgoods" class="tip">共计：500单</text></view>
						<image style="width: 48rpx;height: 48rpx;" src="../../static/images/btn_zhankai.png" mode="widthFix"
							v-if="!showgoods" @click="showgoods=true"></image>
						<image style="width: 48rpx;height: 48rpx;" src="../../static/images/btn_guanbi.png" mode="widthFix"
							v-if="showgoods" @click="showgoods=false"></image>
					</view>
					<template v-if="showgoods">
						<!-- 搜索栏 -->
						<view class="search-bar" style="padding: 30rpx 0;border-bottom: none;">
							<!-- #ifdef APP-PLUS || MP -->
							<text class="iconfont icon-scan" style="left: 10rpx;"></text>
							<!-- #endif -->
							<!-- #ifdef H5 -->
							<text class="iconfont icon-search" style="left: 10rpx;"></text>
							<!-- #endif -->
							<input class="input" type="text" placeholder="输入运单号" />
						</view>
						<view class="goods-list" v-for="i in 5 " :key="i">
							<text class="text">SD1234567890123</text>
							<text class="text">1件</text>
							<text class="text">5kg</text>
						</view>
					</template>
				
				</view>

			</view>
		</scroll-view>



		<view class="toolbar" v-if="detailInfo.status === 1">
			<navigator :url="`/subpkg_task/delay/index?id=${detailInfo.id}&planDepartureTime=${detailInfo.planDepartureTime}`" hover-class="none" class="button secondary">延迟提货</navigator>
			<navigator :url="`/subpkg_task/pickup/index?id=${detailInfo.id}`" hover-class="none" class="button primary">提货
			</navigator>
		</view>
		<view class="toolbar" v-if="detailInfo.status === 2">
			<navigator :url="`/subpkg_task/except/index`" hover-class="none" class="button secondary">异常上报</navigator>
			<navigator :url="`/subpkg_task/delivery/index`" hover-class="none" class="button primary">支付</navigator>
		</view>
		<view class="toolbar" v-if="detailInfo.status === 4">
			<navigator :url="`/subpkg_task/record/index`" hover-class="none" class="button primary block">回车登记</navigator>
		</view>
	</view>



</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		taskDetailApi
	} from '@/api/test.js'
	const basicRef = ref()
	// 保存的是任务详情数据
	const detailInfo = ref({});
	const taskId = ref('');
	// 是否显示基本信息
	const showBasicInfo = ref(true)
	// 是否显示司机信息
	const showDriverInfo = ref(false)
	// 是否显示运输路线
	const showTransport = ref(false)
	// 是否显示货物信息
	const showgoods = ref(false)
	// 获取任务详情数据
	const getDetailInfo = async (id) => {
		try {
			if (!id) return;
			const res = await taskDetailApi(id);
			console.log('res', res);
			detailInfo.value = res.data;
		} catch (e) {
			console.log(e);
		}
	};
	// 初始化加载
	onLoad((e) => {
		// console.log(e);
		getDetailInfo(e.id);
	});
</script>

<style lang="scss">
	@keyframes changeheight{
		from{
			height: 44rpx;
			// background-color: #ff0;
		}
		to{
			height: 159rpx;
				// background-color: #00a2e8;
		}
	}
	.information{
		height: 100%;
		overflow: hidden;
		animation-name: changeheight;
		animation-duration: .5s;
	}
	.detail {
		background-color: #f4f4f4;
		height: calc(100vh - 44px);

		.search-bar {
			background-color: #fff;
			padding: 30rpx;
			border-bottom: 1rpx solid #eee;
			position: relative;

			.icon-scan,
			.icon-search {
				position: absolute;
				top: 50%;
				left: 40rpx;
				padding: 20rpx;
				font-weight: 600;
				transform: translateY(-50%);
				color: $uni-secondary-text-color;
				font-size: $uni-font-size-base;
			}

			.input {
				height: 64rpx;
				background-color: #f4f4f4;
				border-radius: 64rpx;
				padding-left: 80rpx;
				font-size: $uni-font-size-small;
			}
		}

		.scroll-view-wrapper {
			height: calc(100vh - 187px);
			box-sizing: border-box;
		}

		.content {
			padding: 0 30rpx;
		}

		.card {
			background-color: #fff;
			padding: 24rpx 30rpx;
			border-radius: 16rpx;
			margin: 15rpx 0rpx 30rpx;

			.header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 44rpx;
				font-size: 32rpx;
				color: #2a2929;

				.tip {
					font-family: PingFangSC-Regular;
					font-weight: 400;
					font-size: 24rpx;
					color: #818181;
					letter-spacing: 0.28rpx;
				}

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

				.guide {
					position: absolute;
					right: 0;
					top: 50%;
					display: flex;
					justify-content: center;
					flex-direction: column;
					text-align: center;
					font-size: 24rpx;
					transform: translateY(-50%);

					.iconfont {
						margin-bottom: 10rpx;
						font-size: 40rpx;
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

			.address {
				display: flex;
				align-items: center;
				justify-content: space-around;
				margin: 40rpx 0;

				.start,
				.end {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.province {
					font-family: PingFangSC-SNaNrpxibold;
					font-weight: 600;
					font-size: 32rpx;
					color: #2A2929;
					letter-spacing: 0.36rpx;
				}

				.city {
					margin-top: 5rpx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					font-size: 28rpx;
					color: #2A2929;
					letter-spacing: 0.32rpx;
				}
			}
		
			.goods-list{
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 15rpx 0;
				.text{
					font-family: PingFangSC-Regular;
					font-weight: 400;
					font-size: 28rpx;
					color: #2A2929;
					letter-spacing: 0.32rpx;
				}
			}
		}

	}

	.toolbar {
		display: flex;
		justify-content: space-between;
		padding: 30rpx 30rpx calc(env(safe-area-inset-bottom) + 30rpx);
		font-size: $uni-font-size-base;
		background-color: #fff;

		.button {
			height: 100rpx;
			text-align: center;
			line-height: 100rpx;
			/* #ifdef APP */
			padding-top: 4rpx;
			/* #endif */
			border-radius: 100rpx;
			font-size: $uni-font-size-big;
		}

		.secondary {
			width: 250rpx;
			color: $uni-black-color;
			background-color: #e6e6e6;
		}

		.primary {
			width: 400rpx;
			color: #fff;
			background-color: $uni-main-color;

			&.block {
				width: 690rpx;
			}

			&[disabled] {
				background-color: #fadcd9;
			}
		}
	}
</style>