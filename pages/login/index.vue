<template>
	<view class="content">
		<view class="text-area">
			<uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>
			<uni-countdown :show-day="false" :hour="12" :minute="12" :second="12"></uni-countdown>
			<button @click="handleTo">{{title}}</button>
			登录
		</view>
	</view>
</template>

<script setup>
	import {
		login
	} from '@/api/login.js'
	const title = '登录'
	const handleTo =async () => {
		const res = await login({account:'admin',password:'123456'})
		console.log(res);
	}
</script>

<style>
</style>