
// 提示工具
export const utils = {
	toast(title = '', icon = 'none'){
		uni.showToast({
			title,
			icon,
			mask: true
		});
	}
}

// 将utils工具挂在到uni上
uni.utils = utils;