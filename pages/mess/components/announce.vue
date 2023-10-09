<template>
	<scroll-view scroll-y="true" class="scroll-view" @refresherrefresh="onRefresh" refresher-enabled
		@scrolltolower="onScrollToLower" refresher-background="#f4f4f4">
		<view class="scroll-view-wrapper">
			<view class="message-action">
				<text class="iconfont icon-clear"></text>
				全部已读
			</view>
			<uni-list>
				<uni-list-item v-for="(item,index) in notifyList" :key="item.id" :title="item.title" :right-text="item.created"
					ellipsis="1" :to="`/subpkg_message/content/index?id=${item.id}`">
					<template v-slot:header>
						<text class="dot"></text>
					</template>
				</uni-list-item>
			</uni-list>
			<view v-if="isEmpty" class="message-blank">暂无消息</view>
		</view>
	</scroll-view>

</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		messageApi
	} from '@/api/mess.js'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	// 判断是否显示暂无数据 false表示有数据 true没有数据
	const isEmpty = ref(false);
	// false表示还有数据数据没有加载, true则表示所有数据已经加载完成
	const hasMore = ref(false);
	// 保存公告数据
	const taskNotifyInfo = ref({});
	const notifyList = ref([]);
	// 页码
	const nextPage = ref(0);
	// 获取公告数据
	const getTaskNotify = async () => {
		try {
			// 更新页码
			nextPage.value++
			const result = await messageApi('200', nextPage.value, 5)
			console.log('result=>', result);
			taskNotifyInfo.value = result.data
			notifyList.value = [...notifyList.value, ...(result.data.items || [])];
			// 页码与返回页码一致
			hasMore.value = nextPage.value == taskNotifyInfo.value.pages;
			// 数据为0 暂无消息
			isEmpty.value = notifyList.value.length === 0;
		} catch (e) {
			//TODO handle the exception
			console.log('e: ', e)
		}
	}
	onLoad(() => {
		getTaskNotify()
	})
	// 上拉刷新
	const onRefresh = () => {
		nextPage.value = 0
		taskNotifyInfo.value = {}
		notifyList.value = []
		getTaskNotify();
	}
	// 下拉加载
	const onScrollToLower = () => {
		if (hasMore.value) return;
		getTaskNotify();
	}
</script>

<style lang="scss">
.scroll-view-wrapper {
	.message-action {
		padding: 30rpx 44rpx 30rpx;
		color: $uni-secondary-text-color;
		font-size: 28rpx;
		.icon-clear {
			margin-right: 16rpx;
			font-size: 96%;
		}
	}
	.dot {
		display: block;
		width: 16rpx;
		height: 16rpx;
		background-color: $uni-main-color;
		border-radius: 50%;
		align-self: center;
		margin-right: 10rpx;
		position: absolute;
		left: 24rpx;
	}
}
::v-deep .uni-list {
	margin: 0 30rpx;
	border-radius: 16rpx;
	margin-bottom: 30rpx;
	overflow: hidden;
}
::v-deep .uni-list-item__content-title {
	font-size: 30rpx !important;
	padding-left: 20rpx;
}
::v-deep .uni-list-item__extra-text {
	font-size: 28rpx !important;
	color: $uni-secondary-text-color !important;
}
.message-blank {
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
.scroll-view {
	height: 100%;
	overflow: hidden;
}
</style>