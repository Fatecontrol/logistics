<template>
	<scroll-view class="scroll-view-wrapper" scroll-y="true" :refresher-triggered="isTriggered" refresher-enabled
		refresher-background="#f4f4f4" @refresherrefresh="onRefresh" @scrolltolower="onScrollToLower">
		<view class="card" v-for="item,index in taskList" :key="index">
			<navigator hover-class="none" :url="`/subpkg_task/detail/index?id=${item.id}`">
				<view class="header">
					<text class="title">任务编号：{{item.transportTaskId}}</text>
					<text class="tips">已延迟</text>
				</view>
				<view class="body">
					<view class="time-line">
						<view class="line">{{ item.startAddress }}</view>
						<view class="line">{{ item.endAddress }}</view>
					</view>
				</view>
			</navigator>
			<view class="footer">
				<view class="time">
					<view>提货时间</view>
					<view>{{ item.planDepartureTime }}</view>
				</view>
				<navigator v-if="item.enablePickUp" class="action" :url="`/subpkg_task/pickup/index?id=${item.id}`">提货
				</navigator>
				<navigator v-else class="action disabled">提货</navigator>
			</view>
		</view>
		<view class="no-more" v-if="hasMore">没有更多了~</view>
		<view v-if="isEmpty" class="task-blank">无待提货物</view>
	</scroll-view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		tasksApi
	} from '@/api/test.js'
	// 保存请求到的任务列表数据
	const taskList = ref([]);
	// 请求参数
	const requestParams = ref({
		// 页码
		page: 0,
		// 条数
		pageSize: 5,
		// 作业状态，1为待提货）、2为在途(在途和已交付)、3为改派、5为已作废、6为已完成（已回车登记）
		status: 1
	})
	// 下拉刷新状态 false 关闭 true 开启
	const isTriggered = ref(false);
	// 数据是否加载完毕 false 未加载完成 true全部已加载完
	const hasMore = ref(false);
	// 控制是否显示暂无数据状态 false 不显示 true显示
	const isEmpty = ref(false);
	// 获取任务列表
	const getTaskList = async () => {
		try {
			// 页码++
			requestParams.value.page++;
			const res = await tasksApi(requestParams.value)
			// console.log('res', res);
			// 如果页码为1 列表清空
			if (requestParams.value.page === 1) taskList.value = [];
			taskList.value = [...taskList.value, ...(res.data.items || [])];
			hasMore.value = requestParams.value.page == res.data.pages;
			isEmpty.value = taskList.value.length <= 0;
		} catch (e) {
			//TODO handle the exception
			console.log('e: ', e);
		}
	}
	// 初始化
	onLoad(() => {
		getTaskList();
	})
	// 下拉刷新
	const onRefresh = async () => {
		isTriggered.value = true;
		requestParams.value.page = 0;
		await getTaskList();
		isTriggered.value = false;

	}
	// 上拉加载
	const onScrollToLower = () => {
		if (hasMore.value) return;
		getTaskList();
	}
</script>

<style lang="scss">
	.scroll-view-wrapper {
		height: calc(100vh - 280rpx);
		overflow: hidden;
		// background-color: #f00;

		&:first-child {
			margin-top: 20rpx;
		}

		.card {
			background-color: #fff;
			padding: 24rpx 30rpx 0;
			border-radius: 16rpx;
			margin: 15rpx 30rpx 30rpx;

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

				.tips {
					width: 104rpx;
					height: 44rpx;
					border: 2rpx solid #ef4f3f;
					border-radius: 22rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 24rpx;
					color: #ef4f3f;
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

			.footer {
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: relative;
				padding: 33rpx 0;

				.time {
					view:first-child {
						color: #818181;
						font-size: 32rpx;
					}
				}

				.action {
					position: absolute;
					right: 0;
					top: 50%;
					display: flex;
					align-items: center;
					height: 64rpx;
					padding: 0 40rpx;
					background-color: $uni-main-color;
					color: #fff;
					font-size: $uni-font-size-small;
					border-radius: 64rpx;
					transform: translate(0, -50%);

					&.disabled {
						background-color: #fadcd9;
					}
				}
			}
		}

		.no-more{
			text-align: center;
			color: #666;
		}

		.task-blank {
			position: absolute;
			left: 50%;
			top: 40%;
			width: 201rpx;
			text-align: center;
			padding-top: 130rpx;
			background-image: url(https://sl-driver.oss-cn-hangzhou.aliyuncs.com/images/blank%402x.png);
			background-size: contain;
			background-repeat: no-repeat;
			font-size: 24rpx;
			color: $uni-secondary-text-color;
			transform: translate(-50%, -100%);
		}

	}
</style>