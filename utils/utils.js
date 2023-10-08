// 提示工具
export const utils = {
	// 反馈提示 title 内容 icon 图标
	toast(title='',icon='none'){
		uni.showToast({
			title,
			icon,
			mask:true
		})
	}
}

// 将utils工具挂在到uni上
uni.utils = utils