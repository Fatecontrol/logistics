<template>
	<view class="uni-shadow-base">
		<uni-forms ref="accountForm" :rules="accountRules" :modelValue="formData" class="uni-form">
			<uni-forms-item name="account">
				<input placeholder-style="color: #818181" type="text" class="uni-input-input" v-model="formData.account"
					placeholder="请输入账号" />
			</uni-forms-item>
			<uni-forms-item name="password">
				<input placeholder-style="color: #818181" type="password" class="uni-input-input" v-model="formData.password"
					placeholder="请输入密码" />
			</uni-forms-item>
		</uni-forms>

		<button @click="onFormSubmit" class="submit-button">登录</button>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		loginApi
	} from '@/api/user.js'
	import {
		useUserStore
	} from '@/stores/user.js'
	import {onLoad} from '@dcloudio/uni-app'
	// 回跳地址
	const redirectURL = ref('');
	// 跳转地址方式
	const routeType = ref('');
	onLoad((options)=>{
		console.log(options);
		redirectURL.value = options.redirectURL
		routeType.value = options.routeType
	})
	const store = useUserStore()
	const accountRules = ref({
		account: {
			rules: [{
					required: true,
					errorMessage: '请输入登录账号'
				},
				{
					pattern: /^[a-zA-Z0-9]{5,8}$/,
					errorMessage: '登录账号格式不正确'
				}
			]
		},
		password: {
			rules: [{
					required: true,
					errorMessage: '请输入登录密码'
				},
				{
					pattern: /^\d{6}$/,
					errorMessage: '登录密码格式不正确'
				}
			]
		}
	})
	const accountForm = ref()
	const formData = ref({
		account: '',
		password: ''
	});
	const onFormSubmit = async () => {
		try {
			// 调用表单校验
			const formData = await accountForm.value.validate();
			// 调用登录接口
			const loginRes = await loginApi(formData);
			// console.log('loginRes=>',loginRes);
			if(loginRes.code === 200){
				// 存储token
				store.token = loginRes.data;
				if(redirectURL.value){
					uni[routeType.value]({
						url:redirectURL.value
					})
				}else{
					uni.switchTab({
						url:'/'
					})
				}
				
			}
			
			
		} catch (error) {
			console.log('error', error);
		}
	}
</script>

<style lang="scss">
	.uni-form {
		.uni-forms-item {
			height: 100rpx;
			margin-bottom: 20rpx !important;
			border-bottom: 2rpx solid #eee;
			box-sizing: border-box;

			::v-deep .uni-forms-item__content {
				display: flex;
				align-items: center;
			}

			::v-deep input {
				width: 100%;
				font-size: $uni-font-size-base;
				color: $uni-secondary-text-color;
			}
		}
	}

	// 按钮
	.submit-button {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		border: none;
		background: $uni-main-color;
		border-radius: 49.54rpx;
		margin-top: 80rpx;
		font-size: $uni-font-size-big;
		color: $uni-white-color;
	}

	.disabled {
		background-color: #fadcd9;
		color: $uni-white-color;
	}
</style>