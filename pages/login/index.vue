<template>
	<view class="login-page">
		<view class="login-type">
			<view class="title">{{tabMetas[tabIndex].title}}</view>
			<view class="type">
				<text @click="handleChangeLoginType">{{tabMetas[tabIndex].subTitle}}</text>
				<text class="iconfont icon-caret"></text>
			</view>
		</view>
		<!-- 账号密码登录 -->
		<Account v-if="tabIndex === 0" />
		<!-- 手机号登录 -->
		<Mobile v-else />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import Account from './components/account.vue'
	import Mobile from './components/mobile.vue'
	

	// 声明索引值
	const tabIndex = ref(0)
	// 定义登录类型文本
	const tabMetas = ref([{
			title: '账号登录',
			subTitle: '手机号登录'
		},
		{
			title: '手机号登录',
			subTitle: '账号登录'
		}
	])

	// 切换登录方式
	const handleChangeLoginType = () => {
		tabIndex.value = Math.abs(tabIndex.value - 1)
	}
</script>

<style lang="scss">
	@import './index.scss'
</style>