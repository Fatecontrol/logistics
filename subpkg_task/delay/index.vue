<template>
	<!-- <view>延迟提货</view> -->
	<view class="page-container">
		<uni-list :border="false">
			<uni-list-item :border="false" title="原定时间" showArrow :right-text="planDepartureTime"></uni-list-item>
			<uni-list-item :border="false" title="延迟时间" showArrow >
				<template v-slot:footer>
					<picker mode="time" class="time-picker" @change="onPickerChange">
						<text v-if="!delayTime">不可超过2个小时</text>
						<text :class="{ error: !delayTimeValid }" v-else>{{ delayTime }}:00</text>
					</picker>
				</template>
			</uni-list-item>
			<uni-list-item :border="false" direction="column">
						<template v-slot:body>
							<view class="textarea-wrapper">
									<textarea class="textarea" v-model="delayReason" placeholder="请输入延迟提货原因" />
									<text :class="{ error: wordsCount > 50 }" class="words-count">{{ wordsCount }}/50</text>
							</view>
					</template>
			</uni-list-item>
			<uni-list-item :border="false">
						<template v-slot:body>
								<button @click="onSubmitForm" :disabled="!enableSubmit" class="button">提交</button>
						</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script setup>
	import {onLoad} from '@dcloudio/uni-app'
	import {ref,computed} from 'vue'
	import {delayApi} from '@/api/test.js'
	// 司机作业单id
	const id = ref('')
	// 原定时间
	const planDepartureTime = ref('')
	// 延迟时间
	const delayTime = ref('');
	// 延迟原因
	const delayReason = ref('')
	// 监听文本域长度变化
	const wordsCount = computed(()=>delayReason.value.length)
	// 输入长度是否符合规则
	const delayReasonValid = computed(()=>{
		return wordsCount.value <= 50 && wordsCount.value > 0
	})
	
	// 延迟时间不能超过原定时间2个小时
	const delayTimeValid = computed(()=>{
		// 原定时间
		const start = new Date(planDepartureTime.value).getTime()
		// console.log('start',start);
		// 当前所选择的时候
		const end = new Date(delayTime.value).getTime();
		return end - start > 0 && end - start < 7200*1000
	})
	
	const onPickerChange = (e)=>{
		const [date] = planDepartureTime.value.split(' ')
		// console.log(date);
		delayTime.value = `${date} ${e.detail.value}`;
		// console.log(delayTime.value);
	}
	// 按钮是否启用
	const enableSubmit = computed(()=>{
		return delayReasonValid.value && delayTimeValid.value;
	})
	
	const onSubmitForm =async ()=>{
		try{
			const res = await delayApi({
				id:id.value,
				delayTime: delayTime.value,
				delayReason: delayReason.value
			})
			// console.log('res',res);
			// 跳转到任务列表
			uni.reLaunch({ url: '/pages/test/index' });
		}catch(e){
			//TODO handle the exception
			console.log('e: ',e);
		}
	}
	
	onLoad((e)=>{
		// console.log(e);
		id.value = e.id
		planDepartureTime.value = e.planDepartureTime
	})
</script>

<style lang="scss">
	@import '@/common/css/common.scss';
	.page-container {
		padding: 30rpx 30rpx env(safe-area-inset-bottom);
	}
	::v-deep .uni-list {
		border-radius: 16rpx;
		overflow: hidden;
	}
	::v-deep .uni-list-item__content-title {
		font-size: $uni-font-size-base;
		color: #2a2929;
	}
	::v-deep .uni-list-item__extra-text {
		font-size: $uni-font-size-base;
		color: #818181;
	}
	.time-picker {
		color: $uni-secondary-text-color;
		font-size: $uni-font-size-base;
	}
	.textarea {
		width: 100%;
		height: 260rpx;
		font-size: $uni-font-size-base;
		padding: 20rpx 28rpx;
		background-color: #f4f4f4;
		border-radius: 16rpx;
		box-sizing: border-box;
		color: $uni-black-color;
	}
	.textarea-wrapper {
		position: relative;
	}
	.words-count {
		position: absolute;
		bottom: 10rpx;
		right: 30rpx;
		color: $uni-secondary-text-color;
		font-size: $uni-font-size-small;
	}
	.button{
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		margin: -20rpx auto 20rpx;
		color: #fff;
		font-size: $uni-font-size-big;
		border-radius: 100rpx;
		background-color: $uni-main-color;
			&[disabled] {
					background-color: #fadcd9;
			}
	}
</style>