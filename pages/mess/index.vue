<template>
	<view>
		<view class="page-container">
			<view class="tab">
				<view class="tab-item" v-for="item,index in tabMetas" :key="index" @click="changeTab(index)">
					<text class="title" :class="{ active: tabIndex === index }">
						{{item.title}}
					</text>
				</view>
			</view>
			<view class="message-list" v-show="tabIndex === 1" v-if="tabMetas[1].rendered">
				<!-- 任务通知组件 -->
				<Notify></Notify>
			</view>
			<view class="message-list" v-show="tabIndex === 0" v-if="tabMetas[0].rendered">
				<!-- 公告组件 -->
				<Announce></Announce>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import Notify from './components/notify.vue';
	import Announce from './components/announce.vue';
	// 控制tab选中
	const tabIndex = ref(0)
	// tab数据
	const tabMetas = ref([{
			title: '公告',
			rendered: true
		},
		{
			title: '任务通知',
			rendered: false
		}
	])
	// 切换
	const changeTab = (index) => {
		tabMetas.value[index].rendered = true;
		tabIndex.value = index
	}
</script>

<style lang="scss">
	@import './index.scss'
</style>