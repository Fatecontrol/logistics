<template>
	<scroll-view class="scroll-view" scroll-y="true" :refresher-triggered="isTriggered" @refresherrefresh="onRefresh" refresher-enabled refresher-background="#f4f4f4" @scrolltolower="onScrollToLower">
		<view class="scroll-view-wrapper">
			 <view class="message-action" @click="handleAllRead">       
				<text class="iconfont icon-clear"></text> 
				全部已读   
			</view>
			<uni-card v-for="item,index in notifyList" :key="item.id" :border="false" :is-shadow="false">
				<view class="brief">
					{{item.content}}
				</view>
				<view class="extra">
					<text class="time">{{item.created}}</text>
					<navigator hover-class="none" class="link" :url="`/subpkg_task/detail/index?id=${item.id}`">查看详情</navigator>
				</view>
				<template v-slot:title>
									<view class="title">{{ item.title }} <text class="dot" v-if="showMess" style="left: 41%;"></text></view>
				</template>
				
			</uni-card>
			<view class="tips" v-if="hasMore">已经到达底部了~</view>
		</view>
		<view v-if="isEmpty" class="message-blank">暂无消息</view>
	</scroll-view>
</template>

<script setup>
	import {messageApi,readAllApi} from '@/api/mess.js'
	import {ref} from 'vue'
	import {onLoad} from '@dcloudio/uni-app'
	// 是否已读
	const showMess = ref(true)
	// 任务列表数据  
	const notifyList = ref([])
	// 消息类型，200：司机端公告，201：司机端系统通知
	const contentType = ref('201');
	// 下一页页码
	const nextPage = ref(0)
	// 每页条数
	const pageSize = ref(5)
	// 是否为空列表
	const isEmpty = ref(false)
	// 判断请求的数据是否全部加载完成, false表示未加载完, true加载完成
	const hasMore = ref(false);
	// 控制下拉刷新的状态, true激活下拉刷下状态 false关闭下拉刷新状态
	const isTriggered = ref(false);
	
	// 下拉刷新
	const onRefresh =async ()=>{
		// 激活下拉刷下状态
			isTriggered.value = true;
			// 重置页码
			nextPage.value = 0;
			await getNotifyList()
			// 请求完成数据 关闭刷新
			isTriggered.value = false;
	}
	// 下拉加载
	const onScrollToLower = ()=>{
		console.log('xxx',hasMore.value);
		if (hasMore.value) return;
		getNotifyList()
	}
	
	const getNotifyList = async ()=>{
		try{
			nextPage.value+=1
			const res = await messageApi(contentType.value,nextPage.value,pageSize.value)
			console.log(res);
			// 检测接口是否调用成功
			if(res.code !== 200) return uni.utils.toast('获取通知失败，请稍后重试！')
			// 如果页码为1 则设置人物列表为空
			if(nextPage.value === 1) 	notifyList.value = []
			// 渲染数据    
			notifyList.value = [...notifyList.value,...res.data.items || []]
			// 数据是否加载完
			hasMore.value = nextPage.value == res.data.pages;
			// 是否为空列表    
			isEmpty.value = notifyList.value.length === 0
		}catch(e){
			//TODO handle the exception
			console.log('e ',e);
		}
	}
	// 全部已读
	const handleAllRead =async ()=>{
		try{
			const res = await readAllApi(contentType.value)
			console.log(res);
			nextPage.value = 0
			getNotifyList()
			showMess.value = false
		}catch(e){
			//TODO handle the exception
			console.log('e: ',e);
		}
	}
	// 初始化加载
	onLoad(()=>{
		getNotifyList()
	})
</script>

<style lang="scss">
	.scroll-view{
		margin-bottom: 50px;
	}
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

::v-deep .uni-card {
	margin-top: 0 !important;
	padding: 0 30rpx !important;
	border-radius: 16rpx;
}

::v-deep .uni-card__content {
	padding: 20rpx 0 !important;
}

.title {
	height: 100rpx;
	font-size: 28rpx;
	color: $uni-black-color;
	font-weight: 600;
	border-bottom: 2rpx solid #eee;
	display: flex;
	align-items: center;
}

.unread::after {
	content: '';
	display: block;
	width: 16rpx;
	height: 16rpx;
	line-height: 1;
	margin-left: 6rpx;
	background-color: $uni-main-color;
	border-radius: 50%;
}

.brief {
	margin-top: 20rpx;
	font-size: $uni-font-size-small;
	color: $uni-secondary-text-color;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	/*设置子元素排列方式*/
	-webkit-box-orient: vertical;
	/*设置显示的行数，多出的部分会显示为...*/
	-webkit-line-clamp: 1;
}

.extra {
	display: flex;
	justify-content: space-between;
	margin: 40rpx 0 10rpx;
	font-size: 28rpx;
}

.time {
	color: $uni-secondary-text-color;
}

.link {
	display: flex;
	align-items: center;
	height: 44rpx;
	padding: 0 20rpx;
	color: $uni-main-color;
	border: 2rpx solid $uni-main-color;
	border-radius: 60rpx;
}

.tips {
	padding: 20rpx 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20rpx;
	color: #ccc;
}
</style>
