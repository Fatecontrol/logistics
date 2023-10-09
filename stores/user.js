import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore(
	'user',
	() => {
		// 状态数据（相当于 state）
		const token = ref('');
		// 一定要将定义的数据和方法返回
		return { token };
	},
	{
		persist: true
	}
);